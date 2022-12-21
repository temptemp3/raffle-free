/**
 * This DApp allows users to register their wallets for free
 * for the raffle
 * 
 * This uses a "first come, first serve" for the list
 * right now, it could use the VRF once it is implemented
 * 
 */
'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Admin', {
    // set params
    params: Object({
      max: UInt,
      tok: Token,
    }),
    launched: Fun([Contract], Null),
    getNum: Fun([UInt], UInt),
    showNum: Fun([UInt], Null),
  });
  const B = API({
    getTicket: Fun([Address], UInt),
    checkTicket: Fun([Address], Bool),
  });
  const V = View({
    howMany: Fun([], UInt),
  });
  init();
  A.only(() => {
    const p = declassify(interact.params);
    const {max, tok} = p;
  });
  A.publish(max, tok);
  commit();
  A.pay([[1, tok]]);
  A.interact.launched(getContract());

  const pMap = new Map(Address, UInt);
  const [count] = parallelReduce([1])
    .define(() => {V.howMany.set(() => max - (count - 1));})
    .invariant(balance() == 0, "network token balance wrong")
    .invariant(balance(tok) == 1, "nft balance wrong")
    .while(count < max + 1)
    .api_(B.getTicket, (addr) => {
      check(isNone(pMap[this]), "sorry, you are already in the list");
      return[ , (ret) => {
        ret(count);
        pMap[addr] = count;
        return[count + 1];
      }];
    });
  commit();

  A.only(() => {
    const num = declassify(interact.getNum(max));
  });
  A.publish(num);
  A.interact.showNum(num);

  const [countDown, tCount] = parallelReduce([count, 0])
    .invariant(balance() == 0, "network token balance wrong")
    .invariant(balance(tok) == 1 - tCount, "nft balance wrong")
    .while(tCount < 1)
    .api_(B.checkTicket, (addr) => {
      check(isSome(pMap[addr]), 'Sorry, you are not in the list');
      return[ , (ret) => {
        const n = fromSome(pMap[addr], 0);
        if(n == num){
          // you win, transfer nft
          // negate loop variable tCount
          ret(true);
          transfer(1, tok).to(addr);
          return[countDown - 1, tCount + 1];
        } else {
          // you loose, leave tCount
          ret(false);
          delete pMap[addr];
          return[countDown - 1, tCount]
        }
      }];
    });
  commit();
  exit();
})