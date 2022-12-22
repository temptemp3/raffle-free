// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  
  const _howMany = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v367, v368, v369] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v367, v368, v369, v388] = svs;
      return (await ((async () => {
        
        const v437 = stdlib.safeSub(v388, stdlib.checkedBigNumberify('./index.rsh:41:55:decimal', stdlib.UInt_max, '1'));
        const v438 = stdlib.safeSub(v368, v437);
        
        return v438;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v368, v369, v388, v443, v448] = svs;
      return (await ((async () => {
        
        const v437 = stdlib.safeSub(v388, stdlib.checkedBigNumberify('./index.rsh:41:55:decimal', stdlib.UInt_max, '1'));
        const v438 = stdlib.safeSub(v368, v437);
        
        return v438;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v367, v368, v369, v388] = svs;
      return (await ((async () => {
        
        const v404 = stdlib.safeSub(v388, stdlib.checkedBigNumberify('./index.rsh:41:55:decimal', stdlib.UInt_max, '1'));
        const v405 = stdlib.safeSub(v368, v404);
        
        return v405;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      howMany: {
        decode: _howMany,
        dom: [],
        rng: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc1],
      6: [ctc1, ctc2, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    max: ctc1,
    tok: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v360 = stdlib.protect(ctc4, interact.params, 'for Admin\'s interact field params');
  const v361 = v360.max;
  const v362 = v360.tok;
  
  const txn1 = await (ctc.sendrecv({
    args: [v361, v362],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v368, v369], secs: v371, time: v370, didSend: v32, from: v367 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v369
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v368, v369], secs: v371, time: v370, didSend: v32, from: v367 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v367, v368, v369],
    evt_cnt: 0,
    funcNum: 1,
    lct: v370,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:36:11:decimal', stdlib.UInt_max, '1'), v369]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v378, time: v377, didSend: v39, from: v376 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:36:11:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v369
        });
      const v386 = await ctc.getContractInfo();
      
      const v388 = stdlib.checkedBigNumberify('./index.rsh:40:35:decimal', stdlib.UInt_max, '1');
      const v389 = v377;
      
      if (await (async () => {
        const v402 = stdlib.safeAdd(v368, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
        const v403 = stdlib.lt(v388, v402);
        
        return v403;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v378, time: v377, didSend: v39, from: v376 } = txn2;
  ;
  ;
  const v385 = stdlib.addressEq(v367, v376);
  stdlib.assert(v385, {
    at: './index.rsh:36:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v386 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v386), {
    at: './index.rsh:37:22:application',
    fs: ['at ./index.rsh:37:22:application call to [unknown function] (defined at: ./index.rsh:37:22:function exp)', 'at ./index.rsh:37:22:application call to "liftedInteract" (defined at: ./index.rsh:37:22:application)'],
    msg: 'launched',
    who: 'Admin'
    });
  
  let v388 = stdlib.checkedBigNumberify('./index.rsh:40:35:decimal', stdlib.UInt_max, '1');
  let v389 = v377;
  
  let txn3 = txn2;
  while (await (async () => {
    const v402 = stdlib.safeAdd(v368, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
    const v403 = stdlib.lt(v388, v402);
    
    return v403;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v419], secs: v421, time: v420, didSend: v136, from: v418 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v423 = v419[stdlib.checkedBigNumberify('./index.rsh:45:10:spread', stdlib.UInt_max, '0')];
    const v424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v423), null);
    const v425 = {
      None: 0,
      Some: 1
      }[v424[0]];
    const v426 = stdlib.eq(v425, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    stdlib.assert(v426, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:23:application call to [unknown function] (defined at: ./index.rsh:47:23:function exp)'],
      msg: 'sorry, you are already in the list',
      who: 'Admin'
      });
    await txn4.getOutput('getTicket', 'v388', ctc1, v388);
    await stdlib.mapSet(map0, v423, v388);
    const v435 = stdlib.safeAdd(v388, stdlib.checkedBigNumberify('./index.rsh:50:24:decimal', stdlib.UInt_max, '1'));
    const cv388 = v435;
    const cv389 = v420;
    
    v388 = cv388;
    v389 = cv389;
    
    txn3 = txn4;
    continue;
    
    }
  const v441 = stdlib.protect(ctc1, await interact.getNum(v368), {
    at: './index.rsh:56:43:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'getNum',
    who: 'Admin'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v367, v368, v369, v388, v441],
    evt_cnt: 1,
    funcNum: 3,
    lct: v389,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v443], secs: v445, time: v444, didSend: v180, from: v442 } = txn4;
      
      ;
      
      const v448 = stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '0');
      const v449 = v444;
      
      if (await (async () => {
        const v463 = stdlib.lt(v448, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '1'));
        
        return v463;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v369
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v443], secs: v445, time: v444, didSend: v180, from: v442 } = txn4;
  ;
  const v446 = stdlib.addressEq(v367, v442);
  stdlib.assert(v446, {
    at: './index.rsh:58:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.showNum(v443), {
    at: './index.rsh:59:21:application',
    fs: ['at ./index.rsh:59:21:application call to [unknown function] (defined at: ./index.rsh:59:21:function exp)', 'at ./index.rsh:59:21:application call to "liftedInteract" (defined at: ./index.rsh:59:21:application)'],
    msg: 'showNum',
    who: 'Admin'
    });
  
  let v448 = stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '0');
  let v449 = v444;
  
  let txn5 = txn4;
  while (await (async () => {
    const v463 = stdlib.lt(v448, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '1'));
    
    return v463;})()) {
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v477], secs: v479, time: v478, didSend: v264, from: v476 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v481 = v477[stdlib.checkedBigNumberify('./index.rsh:65:10:spread', stdlib.UInt_max, '0')];
    const v482 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v481), null);
    const v483 = {
      None: 0,
      Some: 1
      }[v482[0]];
    const v484 = stdlib.eq(v483, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    stdlib.assert(v484, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:66:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:23:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'Sorry, you are not in the list',
      who: 'Admin'
      });
    const v488 = stdlib.fromSome(v482, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, '0'));
    const v489 = stdlib.eq(v488, v443);
    if (v489) {
      const v490 = true;
      await txn6.getOutput('checkTicket', 'v490', ctc7, v490);
      ;
      const v506 = stdlib.safeAdd(v448, stdlib.checkedBigNumberify('./index.rsh:72:28:decimal', stdlib.UInt_max, '1'));
      const cv448 = v506;
      const cv449 = v478;
      
      v448 = cv448;
      v449 = cv449;
      
      txn5 = txn6;
      continue;}
    else {
      const v510 = false;
      await txn6.getOutput('checkTicket', 'v510', ctc7, v510);
      await stdlib.mapSet(map0, v481, undefined /* Nothing */);
      const cv448 = v448;
      const cv449 = v478;
      
      v448 = cv448;
      v449 = cv449;
      
      txn5 = txn6;
      continue;}
    
    }
  return;
  
  
  
  
  
  
  };
export async function _checkTicket6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _checkTicket6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _checkTicket6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v368, v369, v388, v443, v448] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc1, ctc3, ctc1, ctc1, ctc1]);
  const v466 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)'],
    msg: 'in',
    who: 'checkTicket'
    });
  const v467 = v466[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v469 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v467), null);
  const v470 = {
    None: 0,
    Some: 1
    }[v469[0]];
  const v471 = stdlib.eq(v470, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v471, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:66:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)', 'at ./index.rsh:65:33:application call to [unknown function] (defined at: ./index.rsh:65:33:function exp)'],
    msg: 'Sorry, you are not in the list',
    who: 'checkTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v368, v369, v388, v443, v448, v466],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v477], secs: v479, time: v478, didSend: v264, from: v476 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "checkTicket"
        });
      ;
      const v481 = v477[stdlib.checkedBigNumberify('./index.rsh:65:10:spread', stdlib.UInt_max, '0')];
      const v482 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v481), null);
      const v488 = stdlib.fromSome(v482, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, '0'));
      const v489 = stdlib.eq(v488, v443);
      if (v489) {
        const v490 = true;
        const v491 = await txn1.getOutput('checkTicket', 'v490', ctc6, v490);
        
        sim_r.txns.push({
          kind: 'from',
          to: v481,
          tok: v369
          });
        const v506 = stdlib.safeAdd(v448, stdlib.checkedBigNumberify('./index.rsh:72:28:decimal', stdlib.UInt_max, '1'));
        const v752 = v506;
        const v754 = stdlib.lt(v506, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '1'));
        if (v754) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v369
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v510 = false;
        const v511 = await txn1.getOutput('checkTicket', 'v510', ctc6, v510);
        
        await stdlib.simMapSet(sim_r, 0, v481, undefined /* Nothing */);
        const v755 = v448;
        const v757 = stdlib.lt(v448, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '1'));
        if (v757) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v369
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v477], secs: v479, time: v478, didSend: v264, from: v476 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v481 = v477[stdlib.checkedBigNumberify('./index.rsh:65:10:spread', stdlib.UInt_max, '0')];
  const v482 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v481), null);
  const v483 = {
    None: 0,
    Some: 1
    }[v482[0]];
  const v484 = stdlib.eq(v483, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v484, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:66:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:23:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
    msg: 'Sorry, you are not in the list',
    who: 'checkTicket'
    });
  const v488 = stdlib.fromSome(v482, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, '0'));
  const v489 = stdlib.eq(v488, v443);
  if (v489) {
    const v490 = true;
    const v491 = await txn1.getOutput('checkTicket', 'v490', ctc6, v490);
    if (v264) {
      stdlib.protect(ctc0, await interact.out(v477, v491), {
        at: './index.rsh:65:11:application',
        fs: ['at ./index.rsh:65:11:application call to [unknown function] (defined at: ./index.rsh:65:11:function exp)', 'at ./index.rsh:70:14:application call to "ret" (defined at: ./index.rsh:67:23:function exp)', 'at ./index.rsh:67:23:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
        msg: 'out',
        who: 'checkTicket'
        });
      }
    else {
      }
    
    ;
    const v506 = stdlib.safeAdd(v448, stdlib.checkedBigNumberify('./index.rsh:72:28:decimal', stdlib.UInt_max, '1'));
    const v752 = v506;
    const v754 = stdlib.lt(v506, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '1'));
    if (v754) {
      return;
      }
    else {
      return;
      }}
  else {
    const v510 = false;
    const v511 = await txn1.getOutput('checkTicket', 'v510', ctc6, v510);
    if (v264) {
      stdlib.protect(ctc0, await interact.out(v477, v511), {
        at: './index.rsh:65:11:application',
        fs: ['at ./index.rsh:65:11:application call to [unknown function] (defined at: ./index.rsh:65:11:function exp)', 'at ./index.rsh:74:14:application call to "ret" (defined at: ./index.rsh:67:23:function exp)', 'at ./index.rsh:67:23:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
        msg: 'out',
        who: 'checkTicket'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v481, undefined /* Nothing */);
    const v755 = v448;
    const v757 = stdlib.lt(v448, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '1'));
    if (v757) {
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function _getTicket7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _getTicket7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _getTicket7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc3]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v367, v368, v369, v388] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1]);
  const v408 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)'],
    msg: 'in',
    who: 'getTicket'
    });
  const v409 = v408[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v411 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v409), null);
  const v412 = {
    None: 0,
    Some: 1
    }[v411[0]];
  const v413 = stdlib.eq(v412, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v413, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)'],
    msg: 'sorry, you are already in the list',
    who: 'getTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v367, v368, v369, v388, v408],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v419], secs: v421, time: v420, didSend: v136, from: v418 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "getTicket"
        });
      ;
      const v423 = v419[stdlib.checkedBigNumberify('./index.rsh:45:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v423), null);
      const v429 = await txn1.getOutput('getTicket', 'v388', ctc1, v388);
      
      await stdlib.simMapSet(sim_r, 0, v423, v388);
      const v435 = stdlib.safeAdd(v388, stdlib.checkedBigNumberify('./index.rsh:50:24:decimal', stdlib.UInt_max, '1'));
      const v758 = v435;
      const v760 = stdlib.safeAdd(v368, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
      const v761 = stdlib.lt(v435, v760);
      if (v761) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v419], secs: v421, time: v420, didSend: v136, from: v418 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v423 = v419[stdlib.checkedBigNumberify('./index.rsh:45:10:spread', stdlib.UInt_max, '0')];
  const v424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v423), null);
  const v425 = {
    None: 0,
    Some: 1
    }[v424[0]];
  const v426 = stdlib.eq(v425, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v426, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:23:application call to [unknown function] (defined at: ./index.rsh:47:23:function exp)'],
    msg: 'sorry, you are already in the list',
    who: 'getTicket'
    });
  const v429 = await txn1.getOutput('getTicket', 'v388', ctc1, v388);
  if (v136) {
    stdlib.protect(ctc0, await interact.out(v419, v429), {
      at: './index.rsh:45:11:application',
      fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:11:function exp)', 'at ./index.rsh:48:12:application call to "ret" (defined at: ./index.rsh:47:23:function exp)', 'at ./index.rsh:47:23:application call to [unknown function] (defined at: ./index.rsh:47:23:function exp)'],
      msg: 'out',
      who: 'getTicket'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v423, v388);
  const v435 = stdlib.safeAdd(v388, stdlib.checkedBigNumberify('./index.rsh:50:24:decimal', stdlib.UInt_max, '1'));
  const v758 = v435;
  const v760 = stdlib.safeAdd(v368, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
  const v761 = stdlib.lt(v435, v760);
  if (v761) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function checkTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for checkTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for checkTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _checkTicket6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function getTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for getTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for getTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _getTicket7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`checkTicket(address)byte`, `getTicket(address)uint64`],
    pure: [`howMany()uint64`],
    sigs: [`checkTicket(address)byte`, `getTicket(address)uint64`, `howMany()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAQAAEgBgMHMAQICSiMkZzjCdL6060MEAWgjQYmAwEAAAEBIjUAMRhBA+spZEkiWzUBIQhbNQIxGSMSQQAKMQAoIQmvZkIDtzYaABdJQQCHIjUEIzUGSSELDEAAbEkhDAxAAAohDBJENhoBQgCNIQsSRDQBSSUMQAA2SSEFDEAAGSEFEkQoZEk1AyRbNAMhBlsjCQkWNQdCA3RIKGRJNQMiWzQDIQ1bIwkJFjUHQgNeIQQSRChkSTUDJFs0AyEGWyMJCRY1B0IDRYHZudL0BhJENhoBQgCRNhoCFzUENhoDNhoBF0khBAxAAYFJIQ4MQAExSSUMQABvJRJEIQU0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/STUFNf6ABGYM+ow0/lCwNP41/TT9iAMGIlUiEkSACAAAAAAAAAGENP8WULA0/xY1BzT9KCo0/xZQZjQDVwAgNAMkWzQDIQpbNP8jCDIGQgG2SCU0ARJENARJIhJMNAISEUQoZEk1A0lKSSJbNf8hCFs1/iENWzX9gRhbNfwkWzX7STUFNfqABJW4prQ0+lCwNPo1+TT5iAKFSTX4IlUjEkQiNPhJNfcjWzT3IlVNNPwSQQA0gAkAAAAAAAAB6gGwKjUHsSKyASOyEiEHshA0+bIUNP6yEbM0/zT+NP00/DT7IwgyBkIBdYAJAAAAAAAAAf4AsCg1BzT5KCEJr2Y0/zT+NP00/DT7MgZCAVAhBBJEIQQ0ARJENARJIhJMNAISEUQoZDUDSTUFFzX/gATUDGzWNP8WULA0A1cAIDEAEkQ0AyRbNAMhCls0AyEGWzT/IjIGQgEHSSMMQABEIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQpbNf6ABJqLkXSwIzT+iAG5NP8xABJENP80AyRbNP4jMgZCAGdIIQ+IAYciNAESRDQESSISTDQCEhFESTUFSSJbNf8hCFs1/oAErNEfwzT/FlA0/hZQsCEPiAFWsSKyASKyEiEHshAyCrIUNP6yEbMxADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgDFNf81/jX9Nfw1+zT+NPwjCAxBACE0+zT8FlA0/RZQNP4WUChLAVcAOGdIIQU1ATIGNQJCAJA0+zT8FlA0/RZQNP4WUChLAVcAOGdIIQQ1ATIGNQJCAG81/zX+Nf01/DX7Nfo0/iMMQQAlNPoWNPsWUDT8FlA0/RZQNP4WUChLAVcAKGdIJTUBMgY1AkIAN7EisgEishIhB7IQMgmyFTIKshQ0+7IRs0IAADEZIQ4SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBxJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T6","name":"v802","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v388","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v490","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v510","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v804","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T10","name":"v808","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v812","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v818","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v793","type":"address"}],"name":"checkTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v797","type":"address"}],"name":"getTicket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"howMany","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001c7b9081380391601f1980601f85011683019360018060401b0392848610848711176200033157816060928692604098895283398101031262000347578351926200004e846200034c565b8051845260208082015181860190815291860151946001600160a01b039190828716870362000347578781019687524360035587519260808401938085108886111762000331576060948a5260009481868093528286820152828c820152015260049160ff8354166200031a577fbcb5f2f906a8f77f40e37f43863b415e6e6497c7bfad2598456ddd132e0e3db960808b5133815283518782015288518d820152848c51166060820152a15180159081156200030d575b5015620002f65734620002df5780895198620001218a6200034c565b848a01968688528b8b019a878c52339052518752511688526001978885554389558951953385880152518a87015251166060850152606084526080840184811087821117620002cc5788528351958611620002b957600254908782811c92168015620002ae575b838310146200029b5750601f81116200024f575b508093601f8611600114620001e757505091839491849394620001db575b50501b916000199060031b1c1916176002555b516119129081620003698239f35b015192503880620001ba565b600283528183209493928692918316915b888383106200023457505050106200021a575b505050811b01600255620001cd565b015160001960f88460031b161c191690553880806200020b565b858701518855909601959485019487935090810190620001f8565b60028352818320601f870160051c81019183881062000290575b601f0160051c019087905b828110620002845750506200019c565b84815501879062000274565b909150819062000269565b634e487b7160e01b845260229052602483fd5b91607f169162000188565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b885163100960cb60e01b8152600c81840152602490fd5b885163100960cb60e01b8152600b81840152602490fd5b9050600154143862000105565b895163100960cb60e01b8152600a81850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003315760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c806314897016146100f45780631e93b0f1146100eb578063329a59d0146100e257806336e56ea5146100d95780634717dea9146100d0578063573b8510146100c757806362ab8cc1146100be57806383230757146100b5578063952f22b3146100ac578063ab53f2c6146100a35763f4561f3d0361000e5761009e610702565b61000e565b5061009e61068d565b5061009e610532565b5061009e610513565b5061009e61042d565b5061009e6102cc565b5061009e610269565b5061009e61020f565b5061009e6101b3565b5061009e610183565b5061009e61011f565b6001600160a01b031690565b6001600160a01b0381160361011a57565b600080fd5b50602036600319011261011a5760208060043561013b81610109565b6101776101466109c9565b8092610150611878565b80516001600160a01b03909216909152610168611899565b90600082525185820152611408565b01511515604051908152f35b503461011a57600036600319011261011a576020600354604051908152f35b604090600319011261011a57600490565b50604036600319011261011a576101e46101cc366101a2565b6101df6101d76109c9565b9136906112ff565b6116ed565b602060405160008152f35b600211156101f957565b634e487b7160e01b600052602160045260246000fd5b503461011a57602036600319011261011a5761023e60043561023081610109565b6102386108de565b50610917565b604051815160028110156101f957606092604091835260208101511515602084015201516040820152f35b50602036600319011261011a576020604060043561028681610109565b6102c26102916109c9565b809261029b611878565b80516001600160a01b039092169091526102b3611899565b906000825251868201526116ed565b0151604051908152f35b50602036600319011261011a576102e16109c9565b506104116040516102f18161077c565b600435815261031161030c61030860045460ff1690565b1590565b610a78565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1610351600160005414610a98565b61038061036e61035f610833565b602080825183010191016109ee565b91518015908115610421575b50610ab8565b61038a3415610ad8565b6103ff6103f6604083016103af6103aa6103a483516100fd565b33610d78565b610af8565b6103cb3360018060a01b036103c487516100fd565b1614610b18565b60206103d5610a3e565b946103e96103e382516100fd565b87610a69565b01516020850152516100fd565b60408301610a69565b60016060820152436080820152610feb565b60405160008152602090f35b0390f35b9050600154143861037a565b503461011a57600036600319011261011a5761041d606061044c6109c9565b60005460068110156104af5760036104649114610b78565b610498610481610472610833565b6020808251830101910161111d565b6104928460208301519201516118c1565b906118d8565b828201525b01516040519081529081906020820190565b60078110156104f95760066104c49114610b58565b6104f06104e16104d2610833565b602080825183010191016113ac565b610492604082519201516118c1565b8282015261049d565b60076105059114610b38565b6104f0610481610472610833565b503461011a57600036600319011261011a576020600154604051908152f35b5060408060031936011261011a57610549366101a2565b6105516109c9565b50818136031261011a5781516106779161056a826107a4565b80358252606060209283808201930135835261059361058e61030860045460ff1690565b610b98565b8551338152815160208083019190915282015160408201527f96f2af55ece43786e26847d05832d9f91ffae7a8d817c12bd4071763bf894d8890606090a16105df600360005414610bb8565b61060d6105fb6105ed610833565b86808251830101910161111d565b91518015908115610681575b50610bd8565b6106173415610bf8565b6106333360018060a01b0361062c84516100fd565b1614610c18565b61065961063e61116b565b94808301518652610651888401516100fd565b908601610a69565b015184830152516060820152600060808201524360a0820152611233565b5160008152602090f35b90506001541438610607565b503461011a576000806003193601126106ff5780546106aa610833565b906040519283918252602090604082840152835191826040850152815b8381106106e857505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016106c7565b80fd5b50604036600319011261011a576101e461071b366101a2565b6107266101d76109c9565b611408565b90600182811c9216801561075b575b602083101461074557565b634e487b7160e01b600052602260045260246000fd5b91607f169161073a565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761079757604052565b61079f610765565b604052565b604081019081106001600160401b0382111761079757604052565b606081019081106001600160401b0382111761079757604052565b608081019081106001600160401b0382111761079757604052565b60a081019081106001600160401b0382111761079757604052565b601f909101601f19168101906001600160401b0382119082101761079757604052565b60405190600082600254916108478361072b565b8083526001938085169081156108bd575060011461086f575b5061086d92500383610810565b565b600260009081526000805160206118e683398151915294602093509091905b8183106108a557505061086d935082010138610860565b8554888401850152948501948794509183019161088e565b905061086d94506020925060ff191682840152151560051b82010138610860565b604051906108eb826107bf565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b906109206108de565b6001600160a01b0383166000908152600560205260408120549193909160ff1660028110156109b5576001036109aa5761095c919293506108fd565b60405191610969836107bf565b81549060ff82169060028210156109965750835260081c60ff161515602083015260010154604082015290565b634e487b7160e01b81526021600452602490fd5b508083526020830152565b634e487b7160e01b83526021600452602483fd5b604051906109d6826107da565b60006060838281528260208201528260408201520152565b9081606091031261011a576040805191610a07836107bf565b8051610a1281610109565b8352602081015160208401520151610a2981610109565b604082015290565b516001600160a01b031690565b60405190610a4b826107f5565b60006080838281528260208201528260408201528260608201520152565b6001600160a01b039091169052565b15610a7f57565b60405163100960cb60e01b8152600d6004820152602490fd5b15610a9f57565b60405163100960cb60e01b8152600e6004820152602490fd5b15610abf57565b60405163100960cb60e01b8152600f6004820152602490fd5b15610adf57565b60405163100960cb60e01b815260106004820152602490fd5b15610aff57565b60405163100960cb60e01b815260116004820152602490fd5b15610b1f57565b60405163100960cb60e01b815260126004820152602490fd5b15610b3f57565b60405163100960cb60e01b815260096004820152602490fd5b15610b5f57565b60405163100960cb60e01b815260086004820152602490fd5b15610b7f57565b60405163100960cb60e01b815260076004820152602490fd5b15610b9f57565b60405163100960cb60e01b815260136004820152602490fd5b15610bbf57565b60405163100960cb60e01b815260146004820152602490fd5b15610bdf57565b60405163100960cb60e01b815260156004820152602490fd5b15610bff57565b60405163100960cb60e01b815260166004820152602490fd5b15610c1f57565b60405163100960cb60e01b815260176004820152602490fd5b15610c3f57565b60405163100960cb60e01b815260186004820152602490fd5b15610c5f57565b60405163100960cb60e01b815260196004820152602490fd5b15610c7f57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610c9f57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610cbf57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610cdf57565b60405163100960cb60e01b8152601d6004820152602490fd5b15610cff57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610d1f57565b60405163100960cb60e01b8152601f6004820152602490fd5b15610d3f57565b60405163100960cb60e01b815260206004820152602490fd5b15610d5f57565b60405163100960cb60e01b815260216004820152602490fd5b6000610de4928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201526001606482015260648152610dbd816107f5565b5193165af1610dd4610dcd610de7565b8092610e4c565b5060208082518301019101610e34565b90565b3d15610e2f573d906001600160401b038211610e22575b60405191610e16601f8201601f191660200184610810565b82523d6000602084013e565b610e2a610765565b610dfe565b606090565b9081602091031261011a5751801515810361011a5790565b15610e545790565b805115610e6357805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15610e845790565b805115610e9357805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b818110610eb7575050565b60008155600101610eac565b90601f8211610ed0575050565b61086d9160026000526020600020906020601f840160051c83019310610efe575b601f0160051c0190610eac565b9091508190610ef1565b80519091906001600160401b038111610fde575b610f3081610f2b60025461072b565b610ec3565b602080601f8311600114610f6c5750819293600092610f61575b50508160011b916000199060031b1c191617600255565b015190503880610f4a565b6002600052601f198316949091906000805160206118e6833981519152926000905b878210610fc6575050836001959610610fad575b505050811b01600255565b015160001960f88460031b161c19169055388080610fa2565b80600185968294968601518155019501930190610f8e565b610fe6610765565b610f1c565b60608101805191602081019261100184516110fa565b11156110b75761086d926110a49261104d61104460406110b2956110236109c9565b9561103761103183516100fd565b88610a69565b51602087015201516100fd565b60408401610a69565b51606082015261105d6007600055565b61106643600155565b60405192839160208301919091606080608083019460018060a01b038082511685526020820151602086015260408201511660408501520151910152565b03601f198101835282610810565b610f08565b61086d926110a4926110d361104460406110b2956110236109c9565b51606082015261105d6003600055565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111611110575b821061011a57565b6111186110e3565b611108565b9081608091031261011a57606060405191611137836107da565b805161114281610109565b835260208101516020840152604081015161115c81610109565b60408401520151606082015290565b6040519060c082016001600160401b038111838210176111ae575b6040528160a06000918281528260208201528260408201528260608201528260808201520152565b6111b6610765565b611186565b6111c660025461072b565b806111ce5750565b601f81116001146111e157506000600255565b600260005261122690601f0160051c6000805160206118e6833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610eac565b6000602081208160025555565b608081019060018251106000146112e7576110b26110a49161086d936060611259610a3e565b928051845261127761126e60208301516100fd565b60208601610a69565b60408101516040850152015160608301525160808201526112986006600055565b6112a143600155565b6040519283916020830191909160808060a08301948051845260018060a01b03602082015116602085015260408101516040850152606081015160608501520151910152565b5050600080556112f76000600155565b61086d6111bb565b80929103916040831261011a57604080519081016001600160401b0381118282101761135c575b6040526020819483358352601f19011261011a57602090816040519361134b8561077c565b013561135681610109565b83520152565b611364610765565b611326565b604051906113768261077c565b8161137f6108de565b9052565b6001600160a01b0391821681528251602080830191909152909201515116604082015260600190565b908160a091031261011a576080604051916113c6836107f5565b8051835260208101516113d881610109565b602084015260408101516040840152606081015160608401520151608082015290565b5160028110156101f95790565b90611411611369565b9061142961142461030860045460ff1690565b610c38565b60407fd9d317f50580320260589621a22264dca6ea15fe8bf7bf7ac2b9f0642902ba5281518061145a873383611383565b0390a161146b600660005414610c58565b61148a81611477610833565b60209281848080945183010191016113ac565b966114a081518015908115611684575b50610c78565b6114aa3415610c98565b01946114e760016114cb6114c66114c18a51610a31565b6100fd565b610917565b808452516114d8816101ef565b6114e1816101ef565b14610cb8565b6114f181516113fb565b6114fa816101ef565b60009060010361167b5750510151925b60608601938451146000146115d15792826115ac8361156a61086d99956115c1987f9e405212a7fc699f78f9c3deab28e323f727eaa479331f9fa90f1c040b53b175608099518061156081906001602083019252565b0390a10160019052565b61158e818601986115886114c16115818c516100fd565b9251610a31565b90611690565b6115a461159961116b565b9886518a52516100fd565b908801610a69565b808301519086015251606085015201516110fa565b60808201524360a0820152611233565b9161163761162b611626849760006080989661086d9b987f85834738fa41dabe6a138865af230acc2c6601dc54ec5b7bb2fd4a9f6c00bc7088518061161b81906000602083019252565b0390a1015251610a31565b6108fd565b60016000918281550155565b61165b61164261116b565b9584518752611653818601516100fd565b908701610a69565b8083015190850152516060840152015160808201524360a0820152611233565b9150509261150a565b9050600154143861149a565b600080916116e6938260405191602083019263a9059cbb60e01b845260018060a01b03809216602482015260016044820152604481526116cf816107da565b5193165af1610dd46116df610de7565b8092610e7c565b1561011a57565b61185c61086d9261170b61170661030860045460ff1690565b610cd8565b7f1dd5064aef160903bcb744fc78fa944d64f3adc4af77f4e3e6bc718d6e7511eb6040518061173b863383611383565b0390a161174c600760005414610cf8565b6020611767611759610833565b82808251830101910161111d565b9361177d8151801590811561186c575b50610d18565b6117873415610d38565b016117b26117a361179e6114c66114c18551610a31565b6113fb565b6117ac816101ef565b15610d58565b6060840180516040519081529092907f13910be083afb08106950e28ae7d9832079a6b5ec84d430871799075c1ca11f090602090a16040835191015261180b6117fe6116268351610a31565b805460ff19166001179055565b600161181c61162684519351610a31565b015561185661184d604061182e610a3e565b9561183c61103182516100fd565b6020810151602088015201516100fd565b60408501610a69565b516110fa565b6060820152436080820152610feb565b90506001541438611777565b604051906118858261077c565b604051826118928261077c565b6000825252565b604051906118a6826107a4565b600082526040516020836118b98361077c565b600083520152565b60001981019081116118d05790565b610de46110e3565b9081039081116118d0579056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 7291,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:61:35:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:40:33:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "checkTicket": checkTicket,
  "getTicket": getTicket
  };
export const _APIs = {
  checkTicket: checkTicket,
  getTicket: getTicket
  };
