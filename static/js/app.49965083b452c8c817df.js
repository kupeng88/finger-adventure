webpackJsonp([0],{"/wuY":function(t,e,n){var r=n("NB7d")("keys"),i=n("X6va");t.exports=function(t){return r[t]||(r[t]=i(t))}},"0WCH":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"11Ut":function(t,e,n){var r=n("Gfzd").f,i=n("yS17"),s=n("Ug9I")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},"1kq3":function(t,e){t.exports=!0},"3v7p":function(t,e,n){n("htFH");var r=n("zKeE").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"3zRh":function(t,e,n){var r=n("g31e");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"6MLN":function(t,e,n){t.exports=!n("wLcK")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"7AqT":function(t,e,n){var r=n("ZHvQ"),i=n("Ug9I")("iterator"),s=n("dhak");t.exports=n("zKeE").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||s[r(t)]}},"7kUO":function(t,e,n){t.exports=n.p+"static/img/barrier.93b6215.png"},"8FtN":function(t,e,n){t.exports={default:n("eOjq"),__esModule:!0}},"9kxq":function(t,e,n){var r=n("BxvP"),i=n("i1Q6").document,s=r(i)&&r(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},B9Lq:function(t,e,n){var r=n("yS17"),i=n("Wyka"),s=n("LNnS")(!1),o=n("/wuY")("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)n!=o&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~s(u,n)||u.push(n));return u}},BxvP:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},E5Ce:function(t,e,n){var r=n("ShN9");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},EKwp:function(t,e,n){var r=n("BxvP");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},FFZn:function(t,e,n){t.exports={default:n("3v7p"),__esModule:!0}},Gfzd:function(t,e,n){var r=n("zotD"),i=n("R6c1"),s=n("EKwp"),o=Object.defineProperty;e.f=n("6MLN")?Object.defineProperty:function(t,e,n){if(r(t),e=s(e,!0),r(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},HHE0:function(t,e,n){var r=n("yS17"),i=n("mbLO"),s=n("/wuY")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},JfLI:function(t,e,n){t.exports=n.p+"static/img/right.1ddeb6b.png"},KxjL:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},LNnS:function(t,e,n){var r=n("Wyka"),i=n("S7IM"),s=n("N1kU");t.exports=function(t){return function(e,n,o){var a,c=r(e),u=i(c.length),h=s(o,u);if(t&&n!=n){for(;u>h;)if((a=c[h++])!=a)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===n)return t||h||0;return!t&&-1}}},Lli7:function(t,e,n){var r=n("Ug9I")("iterator"),i=!1;try{var s=[7][r]();s.return=function(){i=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var s=[7],o=s[r]();o.next=function(){return{done:n=!0}},s[r]=function(){return o},t(s)}catch(t){}return n}},MPzD:function(t,e){},MpYs:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},N1kU:function(t,e,n){var r=n("MpYs"),i=Math.max,s=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):s(t,e)}},N484:function(t,e,n){"use strict";var r=n("3zRh"),i=n("vSO4"),s=n("mbLO"),o=n("hEIm"),a=n("af0K"),c=n("S7IM"),u=n("vUQk"),h=n("7AqT");i(i.S+i.F*!n("Lli7")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,l=s(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,g=void 0!==d,y=0,x=h(l);if(g&&(d=r(d,v>2?arguments[2]:void 0,2)),void 0==x||p==Array&&a(x))for(n=new p(e=c(l.length));e>y;y++)u(n,y,g?d(l[y],y):l[y]);else for(f=x.call(l),n=new p;!(i=f.next()).done;y++)u(n,y,g?o(f,d,[i.value,y],!0):i.value);return n.length=y,n}})},NB7d:function(t,e,n){var r=n("i1Q6"),i="__core-js_shared__",s=r[i]||(r[i]={});t.exports=function(t){return s[t]||(s[t]={})}},NHnr:function(t,e,n){"use strict";function r(t,e){return Math.floor(Math.random()*(e-t)+t)}function i(t,e){return t%e==0?e:i(e,t%e)}function s(t,e){return t*e/i(t,e)}Object.defineProperty(e,"__esModule",{value:!0});n("MPzD");var o=n("gc0D"),a=n.n(o),c=n("dACh"),u=n.n(c),h=n("jx4H"),f=n.n(h),l=new createjs.LoadQueue;l.loadManifest([{id:"left",src:n("xDWF")},{id:"right",src:n("JfLI")},{id:"stair",src:n("7kUO")},{id:"player",src:n("YkPt")}]);var p=l,v=n("mYpx"),d=n.n(v),g=n("8FtN"),y=n.n(g),x=n("Qujq"),m=n.n(x),w={getRandom:r,getGDC:i,getLCM:s,getMutiLCM:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(s)},getRandomNumBySepcial:function(t){var e=function(t){for(var e=m()(t),n=y()(t),r=e.map(function(t){return parseInt(1/t,10)}),i=s.apply(void 0,d()(r)),o=[],a=0;a<e.length;a+=1)for(var c=i*e[a];c>0;)o.push(n[a]),c-=1;return o}(t);return+e[r(0,e.length)]}},b=function(){function t(e,n){u()(this,t),this.config={},this.stairSequence=[],this.barrierSequence=[],this.stairArr=[],this.barrierArr=[],this.barrierCon=null,this.stairCon=null,this.canvas=n,this.lastX=0,this.lastY=0,this.dropIndex=-1,a()(this.config,e),this.init()}return f()(t,[{key:"init",value:function(){var t=this,e=new createjs.SpriteSheet({images:[p.getResult("stair")],frames:[[0,0,150,126],[0,126,170,180],[170,126,170,180],[340,126,170,180],[510,126,170,180],[680,126,170,180]],animations:{stair:[0],wood:[1],explosive:[2],ice:[3],mushroom:[4],stone:[5]}});this.stair=new createjs.Sprite(e,"stair"),this.stair.width=this.stair.getBounds().width,this.stair.height=this.stair.getBounds().height;var n=["wood","explosive","ice","mushroom","stone"];n=n.map(function(n){var r=new createjs.Container,i=t.stair.clone(!0),s=new createjs.Sprite(e,n);return s.y=i.y-60,r.addChild(i,s),r}),this.barriers=n;var r=this.stair.clone(!0);r.x=this.canvas.width/2-this.stair.width/2,r.y=this.canvas.height-this.stair.height-300,this.lastX=r.x,this.lastY=r.y,this.stairCon=new createjs.Container,this.barrierCon=new createjs.Container,this.stairCon.addChild(r),this.stairArr.push(r),this.sprite=new createjs.Container,this.sprite.addChild(this.stairCon,this.barrierCon)}},{key:"addOneFloor",value:function(t,e,n){t=t?1:-1;var r=this.stair.clone(!0),i=this.lastX+t*this.stair.width/2,s=this.lastY-this.stair.height+26;if(r.x=i,r.y=s-100,this.stairArr.push(r),this.stairSequence.push(t),this.barrierSequence.push(e),this.stairCon.addChild(r),n?createjs.Tween.get(r,{override:!0}).to({y:s},200):r.y=s,0!==e){var o=this.lastX+-1*t*this.stair.width/2*e,a=this.lastY-(this.stair.height-26)*e,c=this.barriers[w.getRandom(0,5)].clone(!0);c.x=o,c.y=a-100,this.barrierCon.addChild(c),n?createjs.Tween.get(c,{override:!0}).to({y:a},200):c.y=a}this.lastX=i,this.lastY=s}},{key:"addFloors",value:function(e,n){var r=this;e.forEach(function(t,e){r.addOneFloor(t,n[e],!1)}),t.sortChildren(this.stairCon),t.sortChildren(this.barrierCon)}},{key:"dropStair",value:function(t){var e=this,n=t.y;createjs.Tween.hasActiveTweens(n)||function(){createjs.Tween.get(t,{override:!0}).to({y:n+400},500).call(function(){e.stairCon.removeChild(t)});for(var r=e.barrierCon.children,i=r.length,s=function(t){r[t].y>=n&&createjs.Tween.get(r[t],{override:!0}).to({y:n+400},500).call(function(){e.barrierCon.removeChild(r[t])})},o=0;o<i;o+=1)s(o);e.dropIndex+=1}()}},{key:"drop",value:function(){var t=this.stairArr.shift();for(t&&this.dropStair(t);this.stairArr.length>9;)this.dropStair(this.stairArr.shift())}}],[{key:"sortChildren",value:function(t){t.sortChildren(function(t,e){return t.y>e.y?1:t.y<e.y?-1:0})}}]),t}(),j=function(){function t(e,n){u()(this,t),this.config={initDirect:-1},a()(this.config,e),this.sprite=null,this.canvas=n,this.lastX=0,this.lastY=0,this.lastDirect=this.config.initDirect,this.init()}return f()(t,[{key:"init",value:function(){var t=new createjs.SpriteSheet({images:[p.getResult("player")],frames:{width:150,height:294,count:17},animations:{work:[0,9,"walk",.2],jump:[10,16,0,.5]}});this.sprite=new createjs.Sprite(t);var e=this.sprite.getBounds();this.sprite.x=this.canvas.width/2-e.width/2,this.lastX=this.sprite.x,this.sprite.y=this.canvas.height-e.height-300-40,this.lastY=this.sprite.y,1===this.config.initDirect&&(this.sprite.scaleX=-1,this.sprite.regX=145)}},{key:"move",value:function(t,e){this.lastX+=t,this.lastY+=e,this.sprite.gotoAndPlay("jump"),createjs.Tween.get(this.sprite,{override:!0}).to({x:this.lastX,y:this.lastY},200)}},{key:"moveRight",value:function(){1!==this.lastDirect&&(this.lastDirect=1,this.sprite.scaleX=-1,this.sprite.regX=145),this.move(75,-100)}},{key:"moveLeft",value:function(){-1!==this.lastDirect&&(this.lastDirect=-1,this.sprite.scaleX=1,this.sprite.regX=0),this.move(-75,-100)}},{key:"dropAndDisappear",value:function(t){var e=this.sprite.y,n=this.sprite.x;this.sprite.stop(),createjs.Tween.removeTweens(this.sprite),createjs.Tween.get(this.sprite,{override:!0}).to({x:n+2*t*75,y:e+-100},240).to({y:this.canvas.height+this.sprite.y},800).set({visible:!1})}},{key:"hitAndDisappear",value:function(){createjs.Tween.get(this.sprite,{override:!0}).wait(500).set({visible:!1})}}]),t}(),k=function(){function t(e,n){u()(this,t),this.config={transThreshold:0},a()(this.config,e),this.moving=!1,this.nextPosY1=0,this.nextPosY2=0,this.canvas=n,this.leafCon1=null,this.leafCon2=null,this.sprite=null,this.leafHeight=0,this.init()}return f()(t,[{key:"init",value:function(){var t=new createjs.Bitmap(p.getResult("left")),e=new createjs.Bitmap(p.getResult("right"));t.x=0,e.x=this.canvas.width-e.getBounds().width,this.leafCon1=new createjs.Container,this.leafCon1.addChild(t,e),this.leafHeight=this.leafCon1.getBounds().height,this.nextPosY1=this.leafCon1.y=this.canvas.height-this.leafHeight,this.leafCon2=this.leafCon1.clone(!0),this.nextPosY2=this.leafCon2.y=this.leafCon1.y-this.leafHeight,this.sprite=new createjs.Container,this.sprite.addChild(this.leafCon1,this.leafCon2)}},{key:"tranlateY",value:function(t){var e=this;if(!this.moving){this.moving=!0;var n=this.canvas.height||this.config.transThreshold,r=this.leafCon1.y,i=this.leafCon2.y;this.nextPosY1=r+t,this.nextPosY2=i+t,r>=n?this.leafCon1.y=this.nextPosY2-this.leafHeight:createjs.Tween.get(this.leafCon1,{override:!0}).to({y:this.nextPosY1},500).call(function(){e.moving=!1}),i>=n?this.leafCon2.y=this.nextPosY1-this.leafHeight:createjs.Tween.get(this.leafCon2,{override:!0}).to({y:this.nextPosY2},500).call(function(){e.moving=!1})}}}]),t}();createjs.setInterval=function(t,e){var n=new createjs.Container,r=createjs.Tween.get(n).wait(e).call(t);return r.loop=!0,r},createjs.clearInterval=function(t){createjs.Tween.removeTweens(t.target)};var S=function(){function t(e){u()(this,t),this.config={initStairs:8,onProgress:function(){},onComplete:function(){},onGameEnd:function(){}},a()(this.config,e),this.stairIndex=-1,this.autoDropTimer=null,this.clickTimes=0,this.score=0,this.isStart=!1,this.init()}return f()(t,[{key:"init",value:function(){var t=this;this.canvas=document.querySelector("#stage"),this.canvas.width=2*window.innerWidth,this.canvas.height=2*window.innerHeight,this.stage=new createjs.Stage(this.canvas),createjs.Ticker.setFPS(60),createjs.Ticker.addEventListener("tick",function(){t.stage.update()}),p.on("complete",function(){t.run(),t.config.onComplete()}),p.on("fileload",this.config.onProgress)}},{key:"getInitialSequence",value:function(){for(var t=[],e=[],n=0;n<this.config.initStairs;n+=1)t.push(w.getRandom(0,2)),e.push(w.getRandomNumBySepcial(this.config.barrProbabitiy));return{stairSeq:t,barrSeq:e}}},{key:"createGameStage",value:function(){this.background=new createjs.Shape,this.background.graphics.beginFill("#001605").drawRect(0,0,this.canvas.width,this.canvas.height);var t=this.getInitialSequence();this.leves=new k(this.config,this.canvas),this.floor=new b(this.config,this.canvas),this.robot=new j({initDirect:t.stairSeq[0]},this.canvas),this.stairs=new createjs.Container,this.stairs.addChild(this.floor.sprite,this.robot.sprite),this.stairs.lastX=this.stairs.x,this.stairs.lastY=this.stairs.y,this.floor.addFloors(t.stairSeq,t.barrSeq),this.stage.addChild(this.background,this.stairs,this.leves.sprite)}},{key:"bindEvents",value:function(){this.background.addEventListener("click",this.handleClick.bind(this))}},{key:"run",value:function(){this.clickTimes=0,this.score=0,this.stairIndex=-1,this.autoDropTimer=null,this.createGameStage(),this.bindEvents(),createjs.Ticker.setPaused(!1)}},{key:"start",value:function(){this.isStart=!0}},{key:"restart",value:function(){this.stage.clear(),this.run(),this.start()}},{key:"handleClick",value:function(t){if(this.isStart){var e=t.stageX;this.stairIndex+=1,this.clickTimes+=1;var n=-1;this.autoDrop(),e>this.canvas.width/2?(this.robot.moveRight(),n=1,this.centerFloor(-75,100)):(this.robot.moveLeft(),n=-1,this.centerFloor(75,100)),this.addStair(),this.leves.tranlateY(100),this.checkJump(n)}}},{key:"centerFloor",value:function(t,e){this.stairs.lastX+=t,this.stairs.lastY+=e,createjs.Tween.get(this.stairs,{override:!0}).to({x:this.stairs.lastX,y:this.stairs.lastY},500)}},{key:"checkJump",value:function(t){t!==this.floor.stairSequence[this.stairIndex]&&(this.drop(t),this.gameOver())}},{key:"drop",value:function(t){1!==this.floor.barrierSequence[this.stairIndex]?this.robot.dropAndDisappear(t):(this.shakeStairs(),this.robot.hitAndDisappear())}},{key:"shakeStairs",value:function(){createjs.Tween.removeTweens(this.stairs),createjs.Tween.get(this.stairs,{override:!0}).to({x:this.stairs.x+5,y:this.stairs.y-5},50,createjs.Ease.getBackInOut(2.5)).to({x:this.stairs.x,y:this.stairs.y},50,createjs.Ease.getBackInOut(2.5)).to({x:this.stairs.x+5,y:this.stairs.y-5},50,createjs.Ease.getBackInOut(2.5)).to({x:this.stairs.x,y:this.stairs.y},50,createjs.Ease.getBackInOut(2.5)).pause()}},{key:"addStair",value:function(){var t=w.getRandom(0,2),e=w.getRandomNumBySepcial(this.config.barrProbabitiy);this.floor.addOneFloor(t,e,!0)}},{key:"autoDrop",value:function(){var t=this;this.autoDropTimer||(this.autoDropTimer=createjs.setInterval(function(){t.floor.drop(),t.clickTimes===t.floor.dropIndex&&(createjs.clearInterval(t.autoDropTimer),t.robot.dropAndDisappear(0),t.gameOver())},1e3))}},{key:"gameOver",value:function(){createjs.clearInterval(this.autoDropTimer),this.isStart=!1,this.config.onGameEnd(),setTimeout(function(){createjs.Ticker.setPaused(!0)},1e3)}}]),t}();window.onload=function(){var t=document.querySelector("#start"),e=document.querySelector("#restart"),n=document.querySelector("#btn-start"),r=document.querySelector("#btn-restart");t.classList.remove("out"),t.classList.add("in");var i=new S({initStairs:8,barrProbabitiy:{0:.5,1:.2,2:.2,3:.1},onProgress:function(t){n.innerHTML=100*t.target.progress+"%"},onComplete:function(){n.innerHTML="Start",n.addEventListener("click",function(e){i.start(),t.classList.remove("in"),t.classList.add("out"),e.stopPropagation()})},onGameEnd:function(){e.classList.remove("out"),e.classList.add("in")}});r.addEventListener("click",function(t){i.restart(),e.classList.remove("in"),e.classList.add("out"),t.stopPropagation()})}},O35A:function(t,e,n){n("i+u+"),n("N484"),t.exports=n("zKeE").Array.from},Ocr3:function(t,e){e.f=Object.getOwnPropertySymbols},"P+rg":function(t,e,n){n("wbaH"),t.exports=n("zKeE").Object.values},PDcB:function(t,e,n){var r=n("mbLO"),i=n("knrM");n("cOHw")("keys",function(){return function(t){return i(r(t))}})},Qujq:function(t,e,n){t.exports={default:n("P+rg"),__esModule:!0}},R6c1:function(t,e,n){t.exports=!n("6MLN")&&!n("wLcK")(function(){return 7!=Object.defineProperty(n("9kxq")("div"),"a",{get:function(){return 7}}).a})},S7IM:function(t,e,n){var r=n("MpYs"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},ShN9:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},TNJq:function(t,e,n){var r=n("zotD"),i=n("gjjs"),s=n("KxjL"),o=n("/wuY")("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=n("9kxq")("iframe"),r=s.length;for(e.style.display="none",n("ebIA").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u[c][s[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},U72i:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},Ug9I:function(t,e,n){var r=n("NB7d")("wks"),i=n("X6va"),s=n("i1Q6").Symbol,o="function"==typeof s;(t.exports=function(t){return r[t]||(r[t]=o&&s[t]||(o?s:i)("Symbol."+t))}).store=r},VuZO:function(t,e,n){t.exports={default:n("O35A"),__esModule:!0}},Wyka:function(t,e,n){var r=n("E5Ce"),i=n("U72i");t.exports=function(t){return r(i(t))}},X6va:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},YD0x:function(t,e,n){var r=n("vSO4");r(r.S+r.F,"Object",{assign:n("uj5A")})},YkPt:function(t,e,n){t.exports=n.p+"static/img/player.62f169c.png"},ZHvQ:function(t,e,n){var r=n("ShN9"),i=n("Ug9I")("toStringTag"),s="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:s?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},af0K:function(t,e,n){var r=n("dhak"),i=n("Ug9I")("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||s[i]===t)}},akPY:function(t,e,n){var r=n("Gfzd"),i=n("0WCH");t.exports=n("6MLN")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},b7Q2:function(t,e,n){"use strict";var r=n("TNJq"),i=n("0WCH"),s=n("11Ut"),o={};n("akPY")(o,n("Ug9I")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),s(t,e+" Iterator")}},cOHw:function(t,e,n){var r=n("vSO4"),i=n("zKeE"),s=n("wLcK");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*s(function(){n(1)}),"Object",o)}},"d/AR":function(t,e,n){var r=n("knrM"),i=n("Wyka"),s=n("z7R8").f;t.exports=function(t){return function(e){for(var n,o=i(e),a=r(o),c=a.length,u=0,h=[];c>u;)s.call(o,n=a[u++])&&h.push(t?[n,o[n]]:o[n]);return h}}},dACh:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},dhak:function(t,e){t.exports={}},eOjq:function(t,e,n){n("PDcB"),t.exports=n("zKeE").Object.keys},ebIA:function(t,e,n){t.exports=n("i1Q6").document&&document.documentElement},g31e:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},gc0D:function(t,e,n){t.exports={default:n("vcHl"),__esModule:!0}},gjjs:function(t,e,n){var r=n("Gfzd"),i=n("zotD"),s=n("knrM");t.exports=n("6MLN")?Object.defineProperties:function(t,e){i(t);for(var n,o=s(e),a=o.length,c=0;a>c;)r.f(t,n=o[c++],e[n]);return t}},gojl:function(t,e,n){t.exports=n("akPY")},hEIm:function(t,e,n){var r=n("zotD");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var s=t.return;throw void 0!==s&&r(s.call(t)),e}}},htFH:function(t,e,n){var r=n("vSO4");r(r.S+r.F*!n("6MLN"),"Object",{defineProperty:n("Gfzd").f})},"i+u+":function(t,e,n){"use strict";var r=n("lytE")(!0);n("uRfg")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},i1Q6:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},jx4H:function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("FFZn"));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},knrM:function(t,e,n){var r=n("B9Lq"),i=n("KxjL");t.exports=Object.keys||function(t){return r(t,i)}},lytE:function(t,e,n){var r=n("MpYs"),i=n("U72i");t.exports=function(t){return function(e,n){var s,o,a=String(i(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(s=a.charCodeAt(c))<55296||s>56319||c+1===u||(o=a.charCodeAt(c+1))<56320||o>57343?t?a.charAt(c):s:t?a.slice(c,c+2):o-56320+(s-55296<<10)+65536}}},mYpx:function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("VuZO"));e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},mbLO:function(t,e,n){var r=n("U72i");t.exports=function(t){return Object(r(t))}},uRfg:function(t,e,n){"use strict";var r=n("1kq3"),i=n("vSO4"),s=n("gojl"),o=n("akPY"),a=n("yS17"),c=n("dhak"),u=n("b7Q2"),h=n("11Ut"),f=n("HHE0"),l=n("Ug9I")("iterator"),p=!([].keys&&"next"in[].keys()),v="values",d=function(){return this};t.exports=function(t,e,n,g,y,x,m){u(n,e,g);var w,b,j,k=function(t){if(!p&&t in P)return P[t];switch(t){case"keys":case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",O=y==v,C=!1,P=t.prototype,T=P[l]||P["@@iterator"]||y&&P[y],E=T||k(y),M=y?O?k("entries"):E:void 0,L="Array"==e?P.entries||T:T;if(L&&(j=f(L.call(new t)))!==Object.prototype&&(h(j,S,!0),r||a(j,l)||o(j,l,d)),O&&T&&T.name!==v&&(C=!0,E=function(){return T.call(this)}),r&&!m||!p&&!C&&P[l]||o(P,l,E),c[e]=E,c[S]=d,y)if(w={values:O?E:k(v),keys:x?E:k("keys"),entries:M},m)for(b in w)b in P||s(P,b,w[b]);else i(i.P+i.F*(p||C),e,w);return w}},uj5A:function(t,e,n){"use strict";var r=n("knrM"),i=n("Ocr3"),s=n("z7R8"),o=n("mbLO"),a=n("E5Ce"),c=Object.assign;t.exports=!c||n("wLcK")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=o(t),c=arguments.length,u=1,h=i.f,f=s.f;c>u;)for(var l,p=a(arguments[u++]),v=h?r(p).concat(h(p)):r(p),d=v.length,g=0;d>g;)f.call(p,l=v[g++])&&(n[l]=p[l]);return n}:c},vSO4:function(t,e,n){var r=n("i1Q6"),i=n("zKeE"),s=n("3zRh"),o=n("akPY"),a="prototype",c=function(t,e,n){var u,h,f,l=t&c.F,p=t&c.G,v=t&c.S,d=t&c.P,g=t&c.B,y=t&c.W,x=p?i:i[e]||(i[e]={}),m=x[a],w=p?r:v?r[e]:(r[e]||{})[a];p&&(n=e);for(u in n)(h=!l&&w&&void 0!==w[u])&&u in x||(f=h?w[u]:n[u],x[u]=p&&"function"!=typeof w[u]?n[u]:g&&h?s(f,r):y&&w[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(f):d&&"function"==typeof f?s(Function.call,f):f,d&&((x.virtual||(x.virtual={}))[u]=f,t&c.R&&m&&!m[u]&&o(m,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},vUQk:function(t,e,n){"use strict";var r=n("Gfzd"),i=n("0WCH");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},vcHl:function(t,e,n){n("YD0x"),t.exports=n("zKeE").Object.assign},wLcK:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},wbaH:function(t,e,n){var r=n("vSO4"),i=n("d/AR")(!1);r(r.S,"Object",{values:function(t){return i(t)}})},xDWF:function(t,e,n){t.exports=n.p+"static/img/left.98e55a9.png"},yS17:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},z7R8:function(t,e){e.f={}.propertyIsEnumerable},zKeE:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},zotD:function(t,e,n){var r=n("BxvP");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}}},["NHnr"]);
//# sourceMappingURL=app.49965083b452c8c817df.js.map