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
    }),
    launched: Fun([Contract], Null),
    getNum: Fun([UInt], UInt),
  });
  const B = API({
    getTicket: Fun([Address], UInt),
  });
  const V = View({
    howMany: Fun([], UInt),
  });
  init();
  A.only(() => {
    const p = declassify(interact.params);
    const {max} = p;
  });
  A.publish(max);
  A.interact.launched(getContract());

  const pMap = new Map(Address, UInt);
  const [count, left] = parallelReduce([1, max])
    .define(() => {V.howMany.set(() => left);})
    .invariant(balance() == 0, "network token balance wrong")
    .while(count < max + 1)
    .api_(B.getTicket, (addr) => {
      check(isNone(pMap[this]), "sorry, you are already in the list");
      return[ , (ret) => {
        ret(count);
        pMap[addr] = count;
        return[count + 1, left - 1];
      }];
    })
  commit();
  exit();
})