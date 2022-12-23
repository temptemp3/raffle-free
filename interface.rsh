"reach 0.1";
"use strict";
/**
 *
 * Name: Raffle (free)
 *
 * This DApp allows users to register their wallets for free
 * for the raffle
 *
 * This uses a "first come, first serve" for the list
 * right now, it could use the VRF once it is implemented
 *
 * Version: 0.0.2 - fix bug in get ticket api
 */

import {
  Params as BaseParams,
  State as BaseState,
  TokenState,
  view,
  baseEvents,
  baseState
} from "@KinnFoundation/base#base-v0.1.11r16:interface.rsh";

// CONSTANTS

const SERIAL_VER = 0;

// TYPES

const RaffleState = Struct([
  ["max", UInt],
  ["remaining", UInt],
  ["count", UInt],
  ["num", UInt],
  ["who", Address],
]);

export const State = Struct([
  ...Struct.fields(BaseState),
  ...Struct.fields(TokenState),
  ...Struct.fields(RaffleState),
]);

export const RaffleParams = Object({
  max: UInt,
  tokenAmount: UInt,
});

export const Params = Object({
  ...Object.fields(BaseParams),
  ...Object.fields(RaffleParams),
});

export const Participants = () => [
  Participant("Manager", {
    getParams: Fun([], Params),
  }),
  Participant("Relay", {}),
];

// FUN

const fGetTicket = Fun([], Null);
const fAnnounce = Fun([UInt], Null);
const fClaimPrize = Fun([], Null);
const fCancel = Fun([], Null);

// REMOTE FUN

// API

const api = {
  getTicket: fGetTicket,
  announceWinner: fAnnounce,
  claimPrize: fClaimPrize,
  cancel: fCancel,
};

// CONTRACT

export const Views = () => [View(view(State))];

export const Event = () => [Events({ ...baseEvents })];

export const Api = () => [API(api)];

export const App = (map) => {
  const [
    { amt, ttl, tok0: token },
    [addr, _],
    [Manager, Relay],
    [v],
    [a],
    [e],
  ] = map;

  Manager.only(() => {
    const { max, tokenAmount } = declassify(interact.getParams());
  });
  Manager.publish(max, tokenAmount)
    .check(() => {
      check(max > 2, "max must be greater than 2");
      check(tokenAmount > 0, "token amount must be greater than 0");
    })
    .pay([amt + SERIAL_VER, [tokenAmount, token]])
    .timeout(relativeTime(ttl), () => {
      Anybody.publish();
      commit();
      exit();
    });
  transfer(amt + SERIAL_VER).to(addr);
  e.appLaunch();

  const initialState = {
    ...baseState(Manager),
    token,
    tokenAmount,
    max,
    remaining: max,
    count: 0,
    num: 0,
    who: Manager,
  };

  const pMap = new Map(Address, UInt);

  const [s] = parallelReduce([initialState])
    .define(() => {
      v.state.set(State.fromObject(s));
    })
    .invariant(balance() == 0, "balance accurate")
    .invariant(
      implies(!s.closed, balance(token) == tokenAmount),
      "token balance accurate before close"
    )
    .invariant(
      implies(s.closed, balance(token) == 0),
      "token balance accurate before close"
    )
    .while(!s.closed)
    .api_(a.getTicket, () => {
      check(isNone(pMap[this]), "sorry, you are already in the list");
      check(s.num == 0, "sorry, the raffle has already started");
      check(s.remaining > 0, "sorry, the raffle is full");
      return [
        (k) => {
          k(null);
          pMap[this] = s.count + 1;
          return [
            {
              ...s,
              remaining: s.remaining - 1,
              count: s.count + 1,
            },
          ];
        },
      ];
    })
    .api_(a.announceWinner, (num) => {
      check(this == Manager, "only the manager can announce the winner");
      check(s.num == 0, "the winner has already been announced");
      check(
        num > 0 && num <= s.count,
        "the number must be between 1 and the number of participants"
      );
      return [
        (k) => {
          k(null);
          return [
            {
              ...s,
              num
            },
          ];
        },
      ];
    })
    .api_(a.claimPrize, () => {
      check(s.num > 0, "the winner has not been announced yet");
      check(isSome(pMap[this]), "you are not in the list");
      check(fromSome(pMap[this], 0) == s.num, "you are not the winner");
      return [
        (k) => {
          k(null);
          transfer(tokenAmount, token).to(addr);
          return [
            {
              ...s,
              closed: true,
              who: this
            },
          ];
        },
      ];
    })
    .api_(a.cancel, () => {
      check(this == Manager, "only the manager can cancel the raffle");
      return [
        (k) => {
          k(null);
          transfer(tokenAmount, token).to(Manager);
          return [
            {
              ...s,
              closed: true
            },
          ];
        },
      ];
    })
    .timeout(false);
  e.appClose();
  commit();
  Relay.publish();
  commit();
  exit();
};
