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
      const [v363, v364, v365] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v363, v365, v384, v385] = svs;
      return (await ((async () => {
        
        
        return v385;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v365, v385, v437, v442, v443] = svs;
      return (await ((async () => {
        
        
        return v385;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v363, v364, v365, v384, v385] = svs;
      return (await ((async () => {
        
        
        return v385;}))(...args));
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
      3: [ctc0, ctc2, ctc1, ctc1],
      6: [ctc2, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc2, ctc1, ctc1]
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
  
  
  const v356 = stdlib.protect(ctc4, interact.params, 'for Admin\'s interact field params');
  const v357 = v356.max;
  const v358 = v356.tok;
  
  const txn1 = await (ctc.sendrecv({
    args: [v357, v358],
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
      
      const {data: [v364, v365], secs: v367, time: v366, didSend: v32, from: v363 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v365
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
  const {data: [v364, v365], secs: v367, time: v366, didSend: v32, from: v363 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v363, v364, v365],
    evt_cnt: 0,
    funcNum: 1,
    lct: v366,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:36:11:decimal', stdlib.UInt_max, '1'), v365]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v374, time: v373, didSend: v39, from: v372 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:36:11:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v365
        });
      const v382 = await ctc.getContractInfo();
      
      const v384 = stdlib.checkedBigNumberify('./index.rsh:40:41:decimal', stdlib.UInt_max, '1');
      const v385 = v364;
      const v386 = v373;
      
      if (await (async () => {
        const v399 = stdlib.safeAdd(v364, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
        const v400 = stdlib.lt(v384, v399);
        
        return v400;})()) {
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
  const {data: [], secs: v374, time: v373, didSend: v39, from: v372 } = txn2;
  ;
  ;
  const v381 = stdlib.addressEq(v363, v372);
  stdlib.assert(v381, {
    at: './index.rsh:36:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v382 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v382), {
    at: './index.rsh:37:22:application',
    fs: ['at ./index.rsh:37:22:application call to [unknown function] (defined at: ./index.rsh:37:22:function exp)', 'at ./index.rsh:37:22:application call to "liftedInteract" (defined at: ./index.rsh:37:22:application)'],
    msg: 'launched',
    who: 'Admin'
    });
  
  let v384 = stdlib.checkedBigNumberify('./index.rsh:40:41:decimal', stdlib.UInt_max, '1');
  let v385 = v364;
  let v386 = v373;
  
  let txn3 = txn2;
  while (await (async () => {
    const v399 = stdlib.safeAdd(v364, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
    const v400 = stdlib.lt(v384, v399);
    
    return v400;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v414], secs: v416, time: v415, didSend: v129, from: v413 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v418 = v414[stdlib.checkedBigNumberify('./index.rsh:45:10:spread', stdlib.UInt_max, '0')];
    const v419 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v413), null);
    const v420 = {
      None: 0,
      Some: 1
      }[v419[0]];
    const v421 = stdlib.eq(v420, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    stdlib.assert(v421, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:23:application call to [unknown function] (defined at: ./index.rsh:47:23:function exp)'],
      msg: 'sorry, you are already in the list',
      who: 'Admin'
      });
    await txn4.getOutput('getTicket', 'v384', ctc1, v384);
    await stdlib.mapSet(map0, v418, v384);
    const v430 = stdlib.safeAdd(v384, stdlib.checkedBigNumberify('./index.rsh:50:24:decimal', stdlib.UInt_max, '1'));
    const v431 = stdlib.safeSub(v385, stdlib.checkedBigNumberify('./index.rsh:50:34:decimal', stdlib.UInt_max, '1'));
    const cv384 = v430;
    const cv385 = v431;
    const cv386 = v415;
    
    v384 = cv384;
    v385 = cv385;
    v386 = cv386;
    
    txn3 = txn4;
    continue;
    
    }
  const v435 = stdlib.protect(ctc1, await interact.getNum(v364), {
    at: './index.rsh:55:43:application',
    fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:13:function exp)'],
    msg: 'getNum',
    who: 'Admin'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v363, v365, v384, v385, v435],
    evt_cnt: 1,
    funcNum: 3,
    lct: v386,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v437], secs: v439, time: v438, didSend: v172, from: v436 } = txn4;
      
      ;
      
      const v442 = v384;
      const v443 = stdlib.checkedBigNumberify('./index.rsh:59:54:decimal', stdlib.UInt_max, '0');
      const v444 = v438;
      
      if (await (async () => {
        const v458 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:62:21:decimal', stdlib.UInt_max, '1'));
        
        return v458;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v365
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
    tys: [ctc5, ctc3, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v437], secs: v439, time: v438, didSend: v172, from: v436 } = txn4;
  ;
  const v440 = stdlib.addressEq(v363, v436);
  stdlib.assert(v440, {
    at: './index.rsh:57:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.showNum(v437), {
    at: './index.rsh:58:21:application',
    fs: ['at ./index.rsh:58:21:application call to [unknown function] (defined at: ./index.rsh:58:21:function exp)', 'at ./index.rsh:58:21:application call to "liftedInteract" (defined at: ./index.rsh:58:21:application)'],
    msg: 'showNum',
    who: 'Admin'
    });
  
  let v442 = v384;
  let v443 = stdlib.checkedBigNumberify('./index.rsh:59:54:decimal', stdlib.UInt_max, '0');
  let v444 = v438;
  
  let txn5 = txn4;
  while (await (async () => {
    const v458 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:62:21:decimal', stdlib.UInt_max, '1'));
    
    return v458;})()) {
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v472], secs: v474, time: v473, didSend: v257, from: v471 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v476 = v472[stdlib.checkedBigNumberify('./index.rsh:63:10:spread', stdlib.UInt_max, '0')];
    const v477 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v476), null);
    const v478 = {
      None: 0,
      Some: 1
      }[v477[0]];
    const v479 = stdlib.eq(v478, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    stdlib.assert(v479, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:23:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
      msg: 'Sorry, you are not in the list',
      who: 'Admin'
      });
    const v483 = stdlib.fromSome(v477, stdlib.checkedBigNumberify('./index.rsh:66:40:decimal', stdlib.UInt_max, '0'));
    const v484 = stdlib.eq(v483, v437);
    if (v484) {
      const v485 = true;
      await txn6.getOutput('checkTicket', 'v485', ctc7, v485);
      ;
      const v501 = stdlib.safeSub(v442, stdlib.checkedBigNumberify('./index.rsh:73:30:decimal', stdlib.UInt_max, '1'));
      const v502 = stdlib.safeAdd(v443, stdlib.checkedBigNumberify('./index.rsh:73:42:decimal', stdlib.UInt_max, '1'));
      const cv442 = v501;
      const cv443 = v502;
      const cv444 = v473;
      
      v442 = cv442;
      v443 = cv443;
      v444 = cv444;
      
      txn5 = txn6;
      continue;}
    else {
      const v507 = false;
      await txn6.getOutput('checkTicket', 'v507', ctc7, v507);
      const v514 = stdlib.safeSub(v442, stdlib.checkedBigNumberify('./index.rsh:78:30:decimal', stdlib.UInt_max, '1'));
      const cv442 = v514;
      const cv443 = v443;
      const cv444 = v473;
      
      v442 = cv442;
      v443 = cv443;
      v444 = cv444;
      
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
  
  
  const [v365, v385, v437, v442, v443] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc1, ctc1, ctc1, ctc1]);
  const v461 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:63:33:application call to [unknown function] (defined at: ./index.rsh:63:33:function exp)', 'at ./index.rsh:63:33:application call to [unknown function] (defined at: ./index.rsh:63:33:function exp)'],
    msg: 'in',
    who: 'checkTicket'
    });
  const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v464 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v462), null);
  const v465 = {
    None: 0,
    Some: 1
    }[v464[0]];
  const v466 = stdlib.eq(v465, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v466, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:63:33:application call to [unknown function] (defined at: ./index.rsh:63:33:function exp)', 'at ./index.rsh:63:33:application call to [unknown function] (defined at: ./index.rsh:63:33:function exp)'],
    msg: 'Sorry, you are not in the list',
    who: 'checkTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v365, v385, v437, v442, v443, v461],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v472], secs: v474, time: v473, didSend: v257, from: v471 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "checkTicket"
        });
      ;
      const v476 = v472[stdlib.checkedBigNumberify('./index.rsh:63:10:spread', stdlib.UInt_max, '0')];
      const v477 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v476), null);
      const v483 = stdlib.fromSome(v477, stdlib.checkedBigNumberify('./index.rsh:66:40:decimal', stdlib.UInt_max, '0'));
      const v484 = stdlib.eq(v483, v437);
      if (v484) {
        const v485 = true;
        const v486 = await txn1.getOutput('checkTicket', 'v485', ctc6, v485);
        
        sim_r.txns.push({
          kind: 'from',
          to: v476,
          tok: v365
          });
        const v501 = stdlib.safeSub(v442, stdlib.checkedBigNumberify('./index.rsh:73:30:decimal', stdlib.UInt_max, '1'));
        const v502 = stdlib.safeAdd(v443, stdlib.checkedBigNumberify('./index.rsh:73:42:decimal', stdlib.UInt_max, '1'));
        const v761 = v501;
        const v762 = v502;
        const v764 = stdlib.lt(v502, stdlib.checkedBigNumberify('./index.rsh:62:21:decimal', stdlib.UInt_max, '1'));
        if (v764) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v365
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v507 = false;
        const v508 = await txn1.getOutput('checkTicket', 'v507', ctc6, v507);
        
        const v514 = stdlib.safeSub(v442, stdlib.checkedBigNumberify('./index.rsh:78:30:decimal', stdlib.UInt_max, '1'));
        const v765 = v514;
        const v766 = v443;
        const v768 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:62:21:decimal', stdlib.UInt_max, '1'));
        if (v768) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v365
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
    tys: [ctc3, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v472], secs: v474, time: v473, didSend: v257, from: v471 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v476 = v472[stdlib.checkedBigNumberify('./index.rsh:63:10:spread', stdlib.UInt_max, '0')];
  const v477 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v476), null);
  const v478 = {
    None: 0,
    Some: 1
    }[v477[0]];
  const v479 = stdlib.eq(v478, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v479, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:23:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
    msg: 'Sorry, you are not in the list',
    who: 'checkTicket'
    });
  const v483 = stdlib.fromSome(v477, stdlib.checkedBigNumberify('./index.rsh:66:40:decimal', stdlib.UInt_max, '0'));
  const v484 = stdlib.eq(v483, v437);
  if (v484) {
    const v485 = true;
    const v486 = await txn1.getOutput('checkTicket', 'v485', ctc6, v485);
    if (v257) {
      stdlib.protect(ctc0, await interact.out(v472, v486), {
        at: './index.rsh:63:11:application',
        fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:11:function exp)', 'at ./index.rsh:71:14:application call to "ret" (defined at: ./index.rsh:65:23:function exp)', 'at ./index.rsh:65:23:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'out',
        who: 'checkTicket'
        });
      }
    else {
      }
    
    ;
    const v501 = stdlib.safeSub(v442, stdlib.checkedBigNumberify('./index.rsh:73:30:decimal', stdlib.UInt_max, '1'));
    const v502 = stdlib.safeAdd(v443, stdlib.checkedBigNumberify('./index.rsh:73:42:decimal', stdlib.UInt_max, '1'));
    const v761 = v501;
    const v762 = v502;
    const v764 = stdlib.lt(v502, stdlib.checkedBigNumberify('./index.rsh:62:21:decimal', stdlib.UInt_max, '1'));
    if (v764) {
      return;
      }
    else {
      return;
      }}
  else {
    const v507 = false;
    const v508 = await txn1.getOutput('checkTicket', 'v507', ctc6, v507);
    if (v257) {
      stdlib.protect(ctc0, await interact.out(v472, v508), {
        at: './index.rsh:63:11:application',
        fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:11:function exp)', 'at ./index.rsh:77:14:application call to "ret" (defined at: ./index.rsh:65:23:function exp)', 'at ./index.rsh:65:23:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'out',
        who: 'checkTicket'
        });
      }
    else {
      }
    
    const v514 = stdlib.safeSub(v442, stdlib.checkedBigNumberify('./index.rsh:78:30:decimal', stdlib.UInt_max, '1'));
    const v765 = v514;
    const v766 = v443;
    const v768 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:62:21:decimal', stdlib.UInt_max, '1'));
    if (v768) {
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
  
  
  const [v363, v364, v365, v384, v385] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1]);
  const v401 = ctc.selfAddress();
  const v403 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)'],
    msg: 'in',
    who: 'getTicket'
    });
  const v406 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v401), null);
  const v407 = {
    None: 0,
    Some: 1
    }[v406[0]];
  const v408 = stdlib.eq(v407, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v408, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at ./index.rsh:45:31:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)'],
    msg: 'sorry, you are already in the list',
    who: 'getTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v363, v364, v365, v384, v385, v403],
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
      
      const {data: [v414], secs: v416, time: v415, didSend: v129, from: v413 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "getTicket"
        });
      ;
      const v418 = v414[stdlib.checkedBigNumberify('./index.rsh:45:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v413), null);
      const v424 = await txn1.getOutput('getTicket', 'v384', ctc1, v384);
      
      await stdlib.simMapSet(sim_r, 0, v418, v384);
      const v430 = stdlib.safeAdd(v384, stdlib.checkedBigNumberify('./index.rsh:50:24:decimal', stdlib.UInt_max, '1'));
      const v431 = stdlib.safeSub(v385, stdlib.checkedBigNumberify('./index.rsh:50:34:decimal', stdlib.UInt_max, '1'));
      const v769 = v430;
      const v770 = v431;
      const v772 = stdlib.safeAdd(v364, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
      const v773 = stdlib.lt(v430, v772);
      if (v773) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v414], secs: v416, time: v415, didSend: v129, from: v413 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v418 = v414[stdlib.checkedBigNumberify('./index.rsh:45:10:spread', stdlib.UInt_max, '0')];
  const v419 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v413), null);
  const v420 = {
    None: 0,
    Some: 1
    }[v419[0]];
  const v421 = stdlib.eq(v420, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v421, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:23:application call to [unknown function] (defined at: ./index.rsh:47:23:function exp)'],
    msg: 'sorry, you are already in the list',
    who: 'getTicket'
    });
  const v424 = await txn1.getOutput('getTicket', 'v384', ctc1, v384);
  if (v129) {
    stdlib.protect(ctc0, await interact.out(v414, v424), {
      at: './index.rsh:45:11:application',
      fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:11:function exp)', 'at ./index.rsh:48:12:application call to "ret" (defined at: ./index.rsh:47:23:function exp)', 'at ./index.rsh:47:23:application call to [unknown function] (defined at: ./index.rsh:47:23:function exp)'],
      msg: 'out',
      who: 'getTicket'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v418, v384);
  const v430 = stdlib.safeAdd(v384, stdlib.checkedBigNumberify('./index.rsh:50:24:decimal', stdlib.UInt_max, '1'));
  const v431 = stdlib.safeSub(v385, stdlib.checkedBigNumberify('./index.rsh:50:34:decimal', stdlib.UInt_max, '1'));
  const v769 = v430;
  const v770 = v431;
  const v772 = stdlib.safeAdd(v364, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
  const v773 = stdlib.lt(v430, v772);
  if (v773) {
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
  appApproval: `ByAPAAEGAwcgBAgoCYyRnOMJ0vrTrQwFMKCNBiYDAQAAAQEiNQAxGEED3SlkSSJbNQEhB1s1AjEZIxJBAAoxACghCa9mQgOpNhoAF0lBAG4iNQQjNQZJIQoMQABTSSELDEAACiELEkQ2GgFCAHMhChJENAFJJAxAACZJIQQMQAARIQQSRChkSTUDVzgINQdCA25IKGRJNQNXCAg1B0IDYCUSRChkSTUDVzAINQdCA1CB2bnS9AYSRDYaAUIAlDYaAhc1BDYaAzYaARdJJQxAAYJJIQwMQAEzSSQMQABzJBJEIQQ0ARJENARJIhJMNAISEUQoZEk1AyENWzX/STUFNf6ABGYM+ow0/lCwMQCIAxYiVSISRIAIAAAAAAAAAYA0/xZQsDT/FjUHNP4oKjT/FlBmNANXACA0AyEFWzQDIQhbNP8jCDQDgThbIwkyBkIBuUgkNAESRDQESSISTDQCEhFEKGRJNQNJSkkiWzX/IQdbNf6BEFs1/YEYWzX8IQVbNftJNQU1+oAElbimtDT6ULA0+jX5NPmIAoxJNfgiVSMSRCI0+Ek19yNbNPciVU00/RJBADaACQAAAAAAAAHlAbAqNQexIrIBI7ISIQayEDT5shQ0/7IRszT/NP40/TT8Iwk0+yMIMgZCAXqACQAAAAAAAAH7ALAoNQc0/zT+NP00/CMJNPsyBkIBWiUSRCU0ARJENARJIhJMNAISEUQoZDUDSTUFFzX/gATUDGzWNP8WULA0A1cAIDEAEkQ0AyEFWzQDIQ1bNP80AyEIWyIyBkIBEkkjDEAASiMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/iEIWzX9gASai5F0sCM0/YgBvjT/MQASRDT/NP40/SM0/jIGQgBnSCEOiAGMIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQdbNf6ABKzRH8M0/xZQNP4WULAhDogBW7EisgEishIhBrIQMgqyFDT+shGzMQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIAyjX/Nf41/TX8Nfs1+jT9NPsjCAxBACU0+jT7FlA0/BZQNP0WUDT+FlAoSwFXAEBnSCEENQEyBjUCQgCPNPo0/BZQNP0WUDT+FlAoSwFXADhnSCU1ATIGNQJCAG81/zX+Nf01/DX7Nfo0/iMMQQAlNPoWNPsWUDT8FlA0/RZQNP4WUChLAVcAKGdIJDUBMgY1AkIAN7EisgEishIhBrIQMgmyFTIKshQ0+rIRs0IAADEZIQwSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBhJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T7","name":"v817","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v384","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v485","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v507","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T9","name":"v819","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T11","name":"v824","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v829","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v837","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v808","type":"address"}],"name":"checkTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v812","type":"address"}],"name":"getTicket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"howMany","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001d419081380391601f1980601f85011683019360018060401b0392848610848711176200033157816060928692604098895283398101031262000347578351926200004e846200034c565b8051845260208082015181860190815291860151946001600160a01b039190828716870362000347578781019687524360035587519260808401938085108886111762000331576060948a5260009481868093528286820152828c820152015260049160ff8354166200031a577fbcb5f2f906a8f77f40e37f43863b415e6e6497c7bfad2598456ddd132e0e3db960808b5133815283518782015288518d820152848c51166060820152a15180159081156200030d575b5015620002f65734620002df5780895198620001218a6200034c565b848a01968688528b8b019a878c52339052518752511688526001978885554389558951953385880152518a87015251166060850152606084526080840184811087821117620002cc5788528351958611620002b957600254908782811c92168015620002ae575b838310146200029b5750601f81116200024f575b508093601f8611600114620001e757505091839491849394620001db575b50501b916000199060031b1c1916176002555b516119d89081620003698239f35b015192503880620001ba565b600283528183209493928692918316915b888383106200023457505050106200021a575b505050811b01600255620001cd565b015160001960f88460031b161c191690553880806200020b565b858701518855909601959485019487935090810190620001f8565b60028352818320601f870160051c81019183881062000290575b601f0160051c019087905b828110620002845750506200019c565b84815501879062000274565b909150819062000269565b634e487b7160e01b845260229052602483fd5b91607f169162000188565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b885163100960cb60e01b8152600c81840152602490fd5b885163100960cb60e01b8152600b81840152602490fd5b9050600154143862000105565b895163100960cb60e01b8152600a81850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003315760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c806314897016146100f45780631e93b0f1146100eb578063329a59d0146100e257806336e56ea5146100d95780634717dea9146100d0578063573b8510146100c757806362ab8cc1146100be57806383230757146100b5578063952f22b3146100ac578063ab53f2c6146100a35763f4561f3d0361000e5761009e6106f2565b61000e565b5061009e61067d565b5061009e610522565b5061009e610503565b5061009e610435565b5061009e6102cc565b5061009e610269565b5061009e61020f565b5061009e6101b3565b5061009e610183565b5061009e61011f565b6001600160a01b031690565b6001600160a01b0381160361011a57565b600080fd5b50602036600319011261011a5760208060043561013b81610109565b6101776101466109b9565b8092610150611962565b80516001600160a01b03909216909152610168611983565b9060008252518582015261146a565b01511515604051908152f35b503461011a57600036600319011261011a576020600354604051908152f35b604090600319011261011a57600490565b50604036600319011261011a576101e46101cc366101a2565b6101df6101d76109b9565b913690611361565b6117b7565b602060405160008152f35b600211156101f957565b634e487b7160e01b600052602160045260246000fd5b503461011a57602036600319011261011a5761023e60043561023081610109565b6102386108ce565b50610907565b604051815160028110156101f957606092604091835260208101511515602084015201516040820152f35b50602036600319011261011a576020604060043561028681610109565b6102c26102916109b9565b809261029b611962565b80516001600160a01b039092169091526102b3611983565b906000825251868201526117b7565b0151604051908152f35b50602036600319011261011a576102e16109b9565b506104196040516102f18161076c565b600435815261031161030c61030860045460ff1690565b1590565b610a80565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1610351600160005414610aa0565b61038061036e61035f610823565b602080825183010191016109de565b91518015908115610429575b50610ac0565b61038a3415610ae0565b604081016103a96103a461039e83516100fd565b33610d80565b610b00565b6103c53360018060a01b036103be85516100fd565b1614610b20565b6104016103f860206103d5610a21565b946103e96103e382516100fd565b87610a71565b019283516020860152516100fd565b60408401610a71565b600160608301525160808201524360a082015261101e565b60405160008152602090f35b0390f35b9050600154143861037a565b503461011a57600036600319011261011a5761042560606104546109b9565b60005460068110156104a057600361046c9114610b80565b81610487610478610823565b602080825183010191016111d5565b0151828201525b01516040519081529081906020820190565b60078110156104db5760066104b59114610b60565b60206104d06104c2610823565b82808251830101910161140e565b01518282015261048e565b60076104e79114610b40565b60806104d06104f4610823565b6020808251830101910161175f565b503461011a57600036600319011261011a576020600154604051908152f35b5060408060031936011261011a57610539366101a2565b6105416109b9565b50818136031261011a576106679082805161055b81610794565b8235815260209283808301910135815261058261057d61030860045460ff1690565b610ba0565b8251338152825160208083019190915283015160408201527f96f2af55ece43786e26847d05832d9f91ffae7a8d817c12bd4071763bf894d8890606090a16105ce600360005414610bc0565b6105fc6105ea6105dc610823565b8680825183010191016111d5565b92518015908115610671575b50610be0565b6106063415610c00565b6106223360018060a01b0361061b85516100fd565b1614610c20565b61062a610a21565b9361064061063a828501516100fd565b86610a71565b606083015190850152518284015201516060820152600060808201524360a082015261129b565b5160008152602090f35b905060015414386105f6565b503461011a576000806003193601126106ef57805461069a610823565b906040519283918252602090604082840152835191826040850152815b8381106106d857505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016106b7565b80fd5b50604036600319011261011a576101e461070b366101a2565b6107166101d76109b9565b61146a565b90600182811c9216801561074b575b602083101461073557565b634e487b7160e01b600052602260045260246000fd5b91607f169161072a565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761078757604052565b61078f610755565b604052565b604081019081106001600160401b0382111761078757604052565b606081019081106001600160401b0382111761078757604052565b608081019081106001600160401b0382111761078757604052565b60a081019081106001600160401b0382111761078757604052565b601f909101601f19168101906001600160401b0382119082101761078757604052565b60405190600082600254916108378361071b565b8083526001938085169081156108ad575060011461085f575b5061085d92500383610800565b565b600260009081526000805160206119ac83398151915294602093509091905b81831061089557505061085d935082010138610850565b8554888401850152948501948794509183019161087e565b905061085d94506020925060ff191682840152151560051b82010138610850565b604051906108db826107af565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b906109106108ce565b6001600160a01b0383166000908152600560205260408120549193909160ff1660028110156109a55760010361099a5761094c919293506108ed565b60405191610959836107af565b81549060ff82169060028210156109865750835260081c60ff161515602083015260010154604082015290565b634e487b7160e01b81526021600452602490fd5b508083526020830152565b634e487b7160e01b83526021600452602483fd5b604051906109c6826107ca565b60006060838281528260208201528260408201520152565b9081606091031261011a5760408051916109f7836107af565b8051610a0281610109565b8352602081015160208401520151610a1981610109565b604082015290565b6040519060c082016001600160401b03811183821017610a64575b6040528160a06000918281528260208201528260408201528260608201528260808201520152565b610a6c610755565b610a3c565b6001600160a01b039091169052565b15610a8757565b60405163100960cb60e01b8152600d6004820152602490fd5b15610aa757565b60405163100960cb60e01b8152600e6004820152602490fd5b15610ac757565b60405163100960cb60e01b8152600f6004820152602490fd5b15610ae757565b60405163100960cb60e01b815260106004820152602490fd5b15610b0757565b60405163100960cb60e01b815260116004820152602490fd5b15610b2757565b60405163100960cb60e01b815260126004820152602490fd5b15610b4757565b60405163100960cb60e01b815260096004820152602490fd5b15610b6757565b60405163100960cb60e01b815260086004820152602490fd5b15610b8757565b60405163100960cb60e01b815260076004820152602490fd5b15610ba757565b60405163100960cb60e01b815260136004820152602490fd5b15610bc757565b60405163100960cb60e01b815260146004820152602490fd5b15610be757565b60405163100960cb60e01b815260156004820152602490fd5b15610c0757565b60405163100960cb60e01b815260166004820152602490fd5b15610c2757565b60405163100960cb60e01b815260176004820152602490fd5b15610c4757565b60405163100960cb60e01b815260186004820152602490fd5b15610c6757565b60405163100960cb60e01b815260196004820152602490fd5b15610c8757565b60405163100960cb60e01b8152601a6004820152602490fd5b15610ca757565b60405163100960cb60e01b8152601b6004820152602490fd5b15610cc757565b60405163100960cb60e01b8152601c6004820152602490fd5b15610ce757565b60405163100960cb60e01b8152601d6004820152602490fd5b15610d0757565b60405163100960cb60e01b8152601e6004820152602490fd5b15610d2757565b60405163100960cb60e01b8152601f6004820152602490fd5b15610d4757565b60405163100960cb60e01b815260206004820152602490fd5b15610d6757565b60405163100960cb60e01b815260216004820152602490fd5b6000610dec928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201526001606482015260648152610dc5816107e5565b5193165af1610ddc610dd5610def565b8092610e54565b5060208082518301019101610e3c565b90565b3d15610e37573d906001600160401b038211610e2a575b60405191610e1e601f8201601f191660200184610800565b82523d6000602084013e565b610e32610755565b610e06565b606090565b9081602091031261011a5751801515810361011a5790565b15610e5c5790565b805115610e6b57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15610e8c5790565b805115610e9b57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b818110610ebf575050565b60008155600101610eb4565b90601f8211610ed8575050565b61085d9160026000526020600020906020601f840160051c83019310610f06575b601f0160051c0190610eb4565b9091508190610ef9565b80519091906001600160401b038111610fe6575b610f3881610f3360025461071b565b610ecb565b602080601f8311600114610f745750819293600092610f69575b50508160011b916000199060031b1c191617600255565b015190503880610f52565b6002600052601f198316949091906000805160206119ac833981519152926000905b878210610fce575050836001959610610fb5575b505050811b01600255565b015160001960f88460031b161c19169055388080610faa565b80600185968294968601518155019501930190610f96565b610fee610755565b610f24565b60405190611000826107e5565b60006080838281528260208201528260408201528260608201520152565b6060810190815191602082019261103584516111b2565b11156110f95761085d9260806110e6936110f493611051610ff3565b9361105f61063a84516100fd565b51602085015261107e61107560408401516100fd565b60408601610a71565b516060840152015160808201526110956007600055565b61109e43600155565b6040519283916020830191909160808060a083019460018060a01b03808251168552602082015160208601526040820151166040850152606081015160608501520151910152565b03601f198101835282610800565b610f10565b61085d92506110f49060806110e6936111106109b9565b9261112461111e83516100fd565b85610a71565b61113d61113460408401516100fd565b60208601610a71565b516040840152015160608201526111546003600055565b61115d43600155565b60405192839160208301919091606080608083019460018060a01b038082511685526020820151166020850152604081015160408501520151910152565b50634e487b7160e01b600052601160045260246000fd5b9060018201918281116111c8575b821061011a57565b6111d061119b565b6111c0565b9081608091031261011a576060604051916111ef836107ca565b80516111fa81610109565b8352602081015161120a81610109565b6020840152604081015160408401520151606082015290565b61122e60025461071b565b806112365750565b601f811160011461124957506000600255565b600260005261128e90601f0160051c6000805160206119ac833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610eb4565b6000602081208160025555565b60808101906001825110600014611349576110f46110e69161085d9360606112c1610ff3565b926112cf61111e82516100fd565b6020810151602085015260408101516040850152015160608301525160808201526112fa6006600055565b61130343600155565b6040519283916020830191909160808060a083019460018060a01b0381511684526020810151602085015260408101516040850152606081015160608501520151910152565b5050600080556113596000600155565b61085d611223565b80929103916040831261011a57604080519081016001600160401b038111828210176113be575b6040526020819483358352601f19011261011a5760209081604051936113ad8561076c565b01356113b881610109565b83520152565b6113c6610755565b611388565b604051906113d88261076c565b816113e16108ce565b9052565b6001600160a01b0391821681528251602080830191909152909201515116604082015260600190565b908160a091031261011a57608060405191611428836107e5565b805161143381610109565b83526020810151602084015260408101516040840152606081015160608401520151608082015290565b5160028110156101f95790565b6114ec906114766113cb565b61148d61148861030860045460ff1690565b610c40565b6040907fd9d317f50580320260589621a22264dca6ea15fe8bf7bf7ac2b9f0642902ba528251806114bf8633836113e5565b0390a16114d0600660005414610c60565b816114d9610823565b602095818780809451830101910161140e565b94611502815180159081156116df575b50610c80565b61150c3415610ca0565b0191611551600161153561153061152b875160018060a01b0390511690565b6100fd565b610907565b80845251611542816101ef565b61154b816101ef565b14610cc0565b61155b815161145d565b611564816101ef565b6000906001036116d65750510151905b8284019182511460001461164a579161163a93916115f86080946115d38861085d9a7f08a63de7778178f87b1192f311271fea4ff6329887c0d3665925a9e906729e8f8751806115c981906001602083019252565b0390a10160019052565b6115f261152b6115e387516100fd565b9251516001600160a01b031690565b90611702565b611600610a21565b9561161461160e85516100fd565b88610a71565b8084015190870152519085015261162e60608201516116eb565b606085015201516111b2565b60808201524360a082015261129b565b50906080929160008561085d977ff6dff325d64e18184947edaac9ba1088c7864ba1d78438dfcd859fba2a71f17185518061168a81906000602083019252565b0390a10152611697610a21565b946116a56103e385516100fd565b808401519086015251908401526116bf60608201516116eb565b6060840152015160808201524360a082015261129b565b91505090611574565b905060015414386114fc565b60001981019081116116fa5790565b610dec61119b565b60008091611758938260405191602083019263a9059cbb60e01b845260018060a01b0380921660248201526001604482015260448152611741816107ca565b5193165af1610ddc611751610def565b8092610e84565b1561011a57565b908160a091031261011a57608060405191611779836107e5565b805161178481610109565b835260208101516020840152604081015161179e81610109565b6040840152606081015160608401520151608082015290565b90611946608061085d936117d86117d361030860045460ff1690565b610ce0565b7f1dd5064aef160903bcb744fc78fa944d64f3adc4af77f4e3e6bc718d6e7511eb604051806118088433836113e5565b0390a1611819600760005414610d00565b6020611834611826610823565b82808251830101910161175f565b9161184a81518015908115611956575b50610d20565b6118543415610d40565b61187761186861186333610907565b61145d565b611871816101ef565b15610d60565b6060830180516040519081529096907f8ddcc3ddd3b52eb8250fcdc12676a347f4eab909c86dfbe562c6142f0f688e0990602090a1865160409190910152018051516118dc906118cf906001600160a01b03166108ed565b805460ff19166001179055565b84519051516001906118f6906001600160a01b03166108ed565b015561193a611903610a21565b946119116103e384516100fd565b6020830151602087015261193461192b60408501516100fd565b60408801610a71565b516111b2565b606085015201516116eb565b60808201524360a082015261101e565b90506001541438611844565b6040519061196f8261076c565b6040518261197c8261076c565b6000825252565b6040519061199082610794565b600082526040516020836119a38361076c565b60008352015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 7489,
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
    at: './index.rsh:82:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:59:45:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:40:39:after expr stmt semicolon',
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
