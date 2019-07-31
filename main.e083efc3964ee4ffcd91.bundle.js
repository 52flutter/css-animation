(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(module,exports,__webpack_require__){__webpack_require__(226),__webpack_require__(329),module.exports=__webpack_require__(330)},33:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(24),__webpack_require__(76);var START_EVENT_NAME_MAP={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},END_EVENT_NAME_MAP={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},startEvents=[],endEvents=[];function addEventListener(node,eventName,eventListener){node.addEventListener(eventName,eventListener,!1)}function removeEventListener(node,eventName,eventListener){node.removeEventListener(eventName,eventListener,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function detectEvents(){function process(EVENT_NAME_MAP,events){for(var baseEventName in EVENT_NAME_MAP)if(EVENT_NAME_MAP.hasOwnProperty(baseEventName)){var baseEvents=EVENT_NAME_MAP[baseEventName];for(var styleName in baseEvents)if(styleName in style){events.push(baseEvents[styleName]);break}}}var style=document.createElement("div").style;"AnimationEvent"in window||(delete START_EVENT_NAME_MAP.animationstart.animation,delete END_EVENT_NAME_MAP.animationend.animation),"TransitionEvent"in window||(delete START_EVENT_NAME_MAP.transitionstart.transition,delete END_EVENT_NAME_MAP.transitionend.transition),process(START_EVENT_NAME_MAP,startEvents),process(END_EVENT_NAME_MAP,endEvents)}();var TransitionEvents={startEvents:startEvents,addStartEventListener:function addStartEventListener(node,eventListener){return 0===startEvents.length?void window.setTimeout(eventListener,0):void startEvents.forEach(function(startEvent){addEventListener(node,startEvent,eventListener)})},removeStartEventListener:function removeStartEventListener(node,eventListener){0===startEvents.length||startEvents.forEach(function(startEvent){removeEventListener(node,startEvent,eventListener)})},endEvents:endEvents,addEndEventListener:function addEndEventListener(node,eventListener){return 0===endEvents.length?void window.setTimeout(eventListener,0):void endEvents.forEach(function(endEvent){addEventListener(node,endEvent,eventListener)})},removeEndEventListener:function removeEndEventListener(node,eventListener){0===endEvents.length||endEvents.forEach(function(endEvent){removeEventListener(node,endEvent,eventListener)})}};__webpack_exports__.a=TransitionEvents},330:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(24),__webpack_require__(25),__webpack_require__(18),__webpack_require__(35),__webpack_require__(31);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(20);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{showAddonsPanel:!1,theme:{brandTitle:"css-animation",brandUrl:"https://github.com/yiminghe/css-animation/"}}});var req=__webpack_require__(489);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(68)(module))},38:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(29),__webpack_require__(30),__webpack_require__(34),__webpack_require__(26),__webpack_require__(24),__webpack_require__(25),__webpack_require__(71),__webpack_require__(89),__webpack_require__(18),__webpack_require__(491),__webpack_require__(73),__webpack_require__(36),__webpack_require__(31),__webpack_require__(76);var Event=__webpack_require__(33);__webpack_require__(139),__webpack_require__(493),__webpack_require__(494),__webpack_require__(52),__webpack_require__(124),__webpack_require__(125);function index(arr,obj){if(arr.indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i)if(arr[i]===obj)return i;return-1}var re=/\s+/,classes_toString=Object.prototype.toString;function ClassList(el){if(!el||!el.nodeType)throw new Error("A DOM element reference is required");this.el=el,this.list=el.classList}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}ClassList.prototype.add=function(name){if(this.list)return this.list.add(name),this;var arr=this.array();return~index(arr,name)||arr.push(name),this.el.className=arr.join(" "),this},ClassList.prototype.remove=function(name){if("[object RegExp]"==classes_toString.call(name))return this.removeMatching(name);if(this.list)return this.list.remove(name),this;var arr=this.array(),i=index(arr,name);return~i&&arr.splice(i,1),this.el.className=arr.join(" "),this},ClassList.prototype.removeMatching=function(re){for(var arr=this.array(),i=0;i<arr.length;i++)re.test(arr[i])&&this.remove(arr[i]);return this},ClassList.prototype.toggle=function(name,force){return this.list?(void 0===force?this.list.toggle(name):force!==this.list.toggle(name,force)&&this.list.toggle(name),this):(void 0===force?this.has(name)?this.remove(name):this.add(name):force?this.add(name):this.remove(name),this)},ClassList.prototype.array=function(){var arr=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(re);return""===arr[0]&&arr.shift(),arr},ClassList.prototype.has=ClassList.prototype.contains=function(name){return this.list?this.list.contains(name):!!~index(this.array(),name)};var isCssAnimationSupported=0!==Event.a.endEvents.length,capitalPrefixes=["Webkit","Moz","O","ms"],prefixes=["-webkit-","-moz-","-o-","ms-",""];function getStyleProperty(node,name){for(var style=window.getComputedStyle(node,null),ret="",i=0;i<prefixes.length&&!(ret=style.getPropertyValue(prefixes[i]+name));i++);return ret}function fixBrowserByTimeout(node){if(isCssAnimationSupported){var transitionDelay=parseFloat(getStyleProperty(node,"transition-delay"))||0,transitionDuration=parseFloat(getStyleProperty(node,"transition-duration"))||0,animationDelay=parseFloat(getStyleProperty(node,"animation-delay"))||0,animationDuration=parseFloat(getStyleProperty(node,"animation-duration"))||0,time=Math.max(transitionDuration+transitionDelay,animationDuration+animationDelay);node.rcEndAnimTimeout=setTimeout(function(){node.rcEndAnimTimeout=null,node.rcEndListener&&node.rcEndListener()},1e3*time+200)}}function clearBrowserBugTimeout(node){node.rcEndAnimTimeout&&(clearTimeout(node.rcEndAnimTimeout),node.rcEndAnimTimeout=null)}var cssAnimation=function(node,transitionName,endCallback){var start,active,nameIsObj="object"===_typeof(transitionName),className=nameIsObj?transitionName.name:transitionName,activeClassName=nameIsObj?transitionName.active:"".concat(transitionName,"-active"),end=endCallback,nodeClasses=new ClassList(node);return endCallback&&"[object Object]"===Object.prototype.toString.call(endCallback)&&(end=endCallback.end,start=endCallback.start,active=endCallback.active),node.rcEndListener&&node.rcEndListener(),node.rcEndListener=function(e){e&&e.target!==node||(node.rcAnimTimeout&&(clearTimeout(node.rcAnimTimeout),node.rcAnimTimeout=null),clearBrowserBugTimeout(node),nodeClasses.remove(className),nodeClasses.remove(activeClassName),Event.a.removeEndEventListener(node,node.rcEndListener),node.rcEndListener=null,end&&end())},Event.a.addEndEventListener(node,node.rcEndListener),start&&start(),nodeClasses.add(className),node.rcAnimTimeout=setTimeout(function(){node.rcAnimTimeout=null,nodeClasses.add(activeClassName),active&&setTimeout(active,0),fixBrowserByTimeout(node)},30),{stop:function stop(){node.rcEndListener&&node.rcEndListener()}}};cssAnimation.style=function(node,style,callback){node.rcEndListener&&node.rcEndListener(),node.rcEndListener=function(e){e&&e.target!==node||(node.rcAnimTimeout&&(clearTimeout(node.rcAnimTimeout),node.rcAnimTimeout=null),clearBrowserBugTimeout(node),Event.a.removeEndEventListener(node,node.rcEndListener),node.rcEndListener=null,callback&&callback())},Event.a.addEndEventListener(node,node.rcEndListener),node.rcAnimTimeout=setTimeout(function(){for(var s in style)style.hasOwnProperty(s)&&(node.style[s]=style[s]);node.rcAnimTimeout=null,fixBrowserByTimeout(node)},0)},cssAnimation.setTransition=function(node,p,value){var property=p,v=value;void 0===value&&(v=property,property=""),property=property||"",capitalPrefixes.forEach(function(prefix){node.style["".concat(prefix,"Transition").concat(property)]=v})},cssAnimation.isCssAnimationSupported=isCssAnimationSupported;__webpack_exports__.a=cssAnimation},489:function(module,exports,__webpack_require__){var map={"./collapse.js":490,"./events.js":495,"./simple.js":496,"./style.js":497};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=489},490:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(77),__webpack_require__(20)),show=!0;var _ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"box",id:"t"}),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function toggle(){var height,t=document.getElementById("t"),b=document.getElementById("b");b.disabled=!0,t.style.display="",Object(_src__WEBPACK_IMPORTED_MODULE_0__.a)(t,"collapse",{start:function start(){show?t.style.height="".concat(t.offsetHeight,"px"):(height=t.offsetHeight,t.style.height=0)},active:function active(){t.style.height="".concat(show?height:0,"px")},end:function end(){t.style.display=show?"":"none",b.disabled=!1,t.style.height=""}}),show=!show},id:"b"},"toggle"),Demo=function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n.collapse-active {\n  transition: height .3s ease-out;\n}\n\n"}}),_ref,_ref2)};Demo.displayName="Demo",Demo.story="collapse";var _ref3=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(Demo.story,module).add("demo",function(){return _ref3}),__webpack_exports__.default=Demo,Demo.__docgenInfo={description:"",methods:[],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/collapse.js"]={name:"Demo",docgenInfo:Demo.__docgenInfo,path:"stories/collapse.js"})}.call(this,__webpack_require__(68)(module))},495:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(76);var _src_Event__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(77),__webpack_require__(20));setTimeout(function(){var t=document.getElementById("t");_src_Event__WEBPACK_IMPORTED_MODULE_1__.a.addStartEventListener(t,function(){console.log("transition start...")}),_src_Event__WEBPACK_IMPORTED_MODULE_1__.a.addEndEventListener(t,function(){console.log("transition end...")})},100);var changed=!1;var _ref=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"box",id:"t"}),_ref2=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:function toggle(){var t=document.getElementById("t");changed=!changed,t.className=changed?"box active":"box"}},"toggle"),Demo=function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n\n  animation-name: fadeIn;\n  animation-play-state: running;\n}\n\n.active {\n  animation-name: fadeOut;\n  animation-play-state: running;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n"}}),_ref,_ref2)};Demo.displayName="Demo",Demo.story="events";var _ref3=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Demo,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)(Demo.story,module).add("demo",function(){return _ref3}),__webpack_exports__.default=Demo,Demo.__docgenInfo={description:"",methods:[],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/events.js"]={name:"Demo",docgenInfo:Demo.__docgenInfo,path:"stories/events.js"})}.call(this,__webpack_require__(68)(module))},496:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(77),__webpack_require__(20)),show=!0;var _ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"box",id:"t"}),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function toggle(){var t=document.getElementById("t"),b=document.getElementById("b");b.disabled=!0,t.style.visibility="",Object(_src__WEBPACK_IMPORTED_MODULE_0__.a)(t,"fade-".concat(show?"leave":"enter"),function(){t.style.visibility=show?"":"hidden",b.disabled=!1}),show=!show},id:"b"},"toggle"),Demo=function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n.fade-enter {\n  opacity: 0;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n\n.fade-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n\n.fade-enter.fade-enter-active {\n  animation-name: rcDialogFadeIn;\n  animation-play-state: running;\n}\n\n.fade-leave.fade-leave-active {\n  animation-name: rcDialogFadeOut;\n  animation-play-state: running;\n}\n\n@keyframes rcDialogFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes rcDialogFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n"}}),_ref,_ref2)};Demo.displayName="Demo",Demo.story="simple";var _ref3=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(Demo.story,module).add("demo",function(){return _ref3}),__webpack_exports__.default=Demo,Demo.__docgenInfo={description:"",methods:[],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/simple.js"]={name:"Demo",docgenInfo:Demo.__docgenInfo,path:"stories/simple.js"})}.call(this,__webpack_require__(68)(module))},497:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(77),__webpack_require__(20)),show=!0;var _ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"box",id:"t"}),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function toggle(){var t=document.getElementById("t"),b=document.getElementById("b");b.disabled=!0,t.style.visibility="",t.style.opacity=show?1:0,_src__WEBPACK_IMPORTED_MODULE_0__.a.setTransition(t,"opacity 2s ease-in"),_src__WEBPACK_IMPORTED_MODULE_0__.a.style(t,show?{opacity:0}:{opacity:1},function(){t.style.visibility=show?"":"hidden",b.disabled=!1,_src__WEBPACK_IMPORTED_MODULE_0__.a.setTransition(t,"")}),show=!show},id:"b"},"toggle"),Demo=function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n"}}),_ref,_ref2)};Demo.displayName="Demo",Demo.story="style";var _ref3=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(Demo.story,module).add("demo",function(){return _ref3}),__webpack_exports__.default=Demo,Demo.__docgenInfo={description:"",methods:[],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/style.js"]={name:"Demo",docgenInfo:Demo.__docgenInfo,path:"stories/style.js"})}.call(this,__webpack_require__(68)(module))}},[[225,1,2]]]);
//# sourceMappingURL=main.e083efc3964ee4ffcd91.bundle.js.map