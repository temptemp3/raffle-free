import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib({REACH_NO_WARN: 'Y'});
const sbal = stdlib.parseCurrency(100);
const acc0 = await stdlib.newTestAccount(sbal);
const ctc0 = acc0.contract(backend);
const MAX = 3;
console.log(`Starting up...`);

const startBuyers = async () => {
  const runBuyer = async (i) => {
    const acc = await stdlib.newTestAccount(sbal);
    const ctc = acc.contract(backend, ctc0.getInfo());
    // api call goes here
    try{
      const tNum = await ctc.a.getTicket(acc);
      console.log(`User ${i} got ticket number ${tNum}`);
      // const c = await ctc.v.howMany();
      // console.log(`Raffle Tickets left: ${c[1]}`);
    } catch (e) {
      console.log(e);
    };
    // // user 1 tries to get a second ticket
    // if(i == 1){
    //   try{
    //     const pNum = await ctc.a.getTicket(acc);
    //   }catch(e){
    //     console.log(e);
    //   };
    // };
  };
  await runBuyer(1);
  await runBuyer(2);
  await runBuyer(3);
};// end of startBuyers

await ctc0.p.Admin({
  params: {
    max: MAX,
  },
  launched: async (c) => {
    console.log(`Ready at contract ${c}`);
    await startBuyers();
  },
  getNum: async (n) => {
    const num = Math.floor(Math.random() * n) + 1;
    return num;
  },
});
console.log('Exiting...');