var _0x4b68=['SELECT_DELIVERY','524521RWFvGz','Sending\x20message\x20','received\x20alarm\x20event\x20:\x20','addListener','PLACE_ORDER','RESET','ADD_TO_CART','1CQvDWg','START','name','RESTART','Started\x20for\x20Tab\x20ID:\x20','ENTER_OTP','76489blhDCN','log','message','executeScript','PROCEED_BUY','sendMessage','runtime','onAlarm','389922RieEXM','getSelected','window.location.reload(true);','PROCESS','url','261194Ixqovt','562148DBBrVf','RELOAD','213533DzrZTs','cvv','580253PQskrI','PAYMENT_CONTINUE','CHECK_AVAILABILITY','tabs','7rpkTgl'];var _0x5733e1=_0x1e50;(function(_0x5d9318,_0x20389d){var _0x3316ad=_0x1e50;while(!![]){try{var _0x2b02e5=parseInt(_0x3316ad(0x156))+-parseInt(_0x3316ad(0x15b))+parseInt(_0x3316ad(0x15e))+-parseInt(_0x3316ad(0x160))+parseInt(_0x3316ad(0x173))*-parseInt(_0x3316ad(0x164))+-parseInt(_0x3316ad(0x16d))*-parseInt(_0x3316ad(0x166))+parseInt(_0x3316ad(0x15c));if(_0x2b02e5===_0x20389d)break;else _0x5d9318['push'](_0x5d9318['shift']());}catch(_0x4e75d4){_0x5d9318['push'](_0x5d9318['shift']());}}}(_0x4b68,0x4c7a6));var state=State['START'],tabID=-0x1,cvv='',url='';console[_0x5733e1(0x174)]('(background.js)\x20Loaded'),chrome[_0x5733e1(0x179)]['onMessage']['addListener'](function(_0x2abe93,_0x2d3b9b,_0x379cbd){var _0x3a5eeb=_0x5733e1;console[_0x3a5eeb(0x174)]('(background.js)\x20message\x20received:\x20'+_0x2abe93[_0x3a5eeb(0x175)]);if(_0x2abe93[_0x3a5eeb(0x175)]===Event[_0x3a5eeb(0x16e)])chrome['tabs'][_0x3a5eeb(0x157)](null,function(_0x5bc244){var _0x1c5738=_0x3a5eeb;console[_0x1c5738(0x174)](_0x1c5738(0x171)+_0x5bc244['id']),tabID=_0x5bc244['id'],url=_0x5bc244[_0x1c5738(0x15a)];}),cvv=_0x2abe93[_0x3a5eeb(0x15f)];else _0x2abe93[_0x3a5eeb(0x175)]===Event[_0x3a5eeb(0x16b)]&&(state=State['START']);}),chrome['alarms'][_0x5733e1(0x17a)][_0x5733e1(0x169)](_0x591144=>{var _0x12f348=_0x5733e1;console['log'](_0x12f348(0x168)+_0x591144[_0x12f348(0x16f)]);if(_0x591144[_0x12f348(0x16f)]===Alarm[_0x12f348(0x159)])sendMessageToContent();else _0x591144[_0x12f348(0x16f)]===Alarm[_0x12f348(0x15d)]&&reloadPage();});function sendMessageToContent(){var _0x571ad1=_0x5733e1;tabID>=0x0&&(console[_0x571ad1(0x174)](_0x571ad1(0x167)+state),chrome[_0x571ad1(0x163)][_0x571ad1(0x178)](tabID,{'action':state,'c':cvv,'url':url},notifyComplete));}function reloadPage(){var _0x127a30=_0x5733e1;if(tabID>=0x0){if(state===State[_0x127a30(0x162)]){console['log']('Reloading\x20the\x20page');var _0x320f86=_0x127a30(0x158);chrome['tabs'][_0x127a30(0x176)](tabID,{'code':_0x320f86});}}}function _0x1e50(_0x4b83f0,_0xc60c9f){return _0x1e50=function(_0x4b68de,_0x1e505){_0x4b68de=_0x4b68de-0x156;var _0x65a7db=_0x4b68[_0x4b68de];return _0x65a7db;},_0x1e50(_0x4b83f0,_0xc60c9f);}function notifyComplete(_0x10acd9){var _0x4da879=_0x5733e1;console['log']('Received\x20message\x20'+state),state=_0x10acd9===State[_0x4da879(0x16e)]?State[_0x4da879(0x162)]:_0x10acd9===State['CHECK_AVAILABILITY']?State[_0x4da879(0x16c)]:_0x10acd9===State[_0x4da879(0x16c)]?State['PROCEED_BUY']:_0x10acd9===State[_0x4da879(0x177)]?State[_0x4da879(0x165)]:_0x10acd9===State[_0x4da879(0x165)]?State['PAYMENT_CONTINUE']:_0x10acd9===State[_0x4da879(0x161)]?State[_0x4da879(0x16a)]:_0x10acd9===State[_0x4da879(0x16a)]?State[_0x4da879(0x172)]:_0x10acd9===State[_0x4da879(0x170)]?State['CHECK_AVAILABILITY']:state;}