/*! For license information please see 225.55b7d420.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[225],{242:function(t,r,e){e.d(r,{Df:function(){return u},M1:function(){return f},TP:function(){return l},gH:function(){return s},tx:function(){return h}});var n=e(861),o=e(243);function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(Z){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:L(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==r&&e.call(x,a)&&(y=x);var m=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),s(m,u,"Generator"),s(m,a,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var a="https://api.themoviedb.org/3/",c="016aafc1fde2508ef526b5b862551515",u=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(a,"trending/all/day?api_key=").concat(c));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(a,"search/movie?api_key=").concat(c,"&query=").concat(r));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(a,"movie/").concat(r,"?api_key=").concat(c));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(a,"movie/").concat(r,"/credits?api_key=").concat(c));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(a,"movie/").concat(r,"/reviews?api_key=").concat(c));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}()},225:function(t,r,e){e.r(r),e.d(r,{default:function(){return R}});var n,o,i,a,c,u,s,l,f,h,p,d,v,y,g,x=e(861),m=e(439),w=e(242),b=e(791),L=e(689),j=e(766),E=e(87),_=e(867),k=_.zo.h1(n||(n=(0,j.Z)([""]))),O=_.zo.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),Z=(0,_.zo)(E.rU)(i||(i=(0,j.Z)(["\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: inline-flex;\n  width: 100px;\n  padding: 9px 30px;\n  border-radius: 4px;\n  border: 2px solid #287233;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 700;\n  justify-content: center;\n  background-color: #ffa8af;\n  color: #287233;\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: #cae8d3;\n  }\n"]))),G=_.zo.div(a||(a=(0,j.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 30px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 39px -10px rgba(0, 0, 0, 0.75);\n"]))),z=_.zo.ul(c||(c=(0,j.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),N=_.zo.li(u||(u=(0,j.Z)([""]))),S=_.zo.h1(s||(s=(0,j.Z)([""]))),P=_.zo.h2(l||(l=(0,j.Z)([""]))),T=_.zo.ul(f||(f=(0,j.Z)(["\n  display: flex;\n  gap: 5px;\n  padding: 0px;\n"]))),F=_.zo.li(h||(h=(0,j.Z)(["\n  background-color: #287233;\n  color: #ffffff;\n  border-radius: 5px;\n  padding: 5px 15px;\n"]))),I=_.zo.div(p||(p=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  margin-top: 50px;\n"]))),A=_.zo.h2(d||(d=(0,j.Z)([""]))),Y=_.zo.ul(v||(v=(0,j.Z)(["\n  display: flex;\n  gap: 50px;\n"]))),U=_.zo.li(y||(y=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  border-radius: 5px;\n  border: 2px solid #287233;\n  padding: 10px 15px;\n  font-size: 16px;\n  font-weight: 700;\n  background-color: #ffa8af;\n  border-radius: 5px;\n  &:hover {\n    background-color: #cae8d3;\n  }\n"]))),C=(0,_.zo)(E.rU)(g||(g=(0,j.Z)(["\n  text-decoration: none;\n  color: #287233;\n"]))),D=e(184);function H(){H=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(O){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:b(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==r&&e.call(g,i)&&(v=g);var x=d.prototype=h.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=d,n(x,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},m(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var R=function(){var t,r,e=(0,b.useState)({}),n=(0,m.Z)(e,2),o=n[0],i=n[1],a=(0,L.TH)(),c=(0,b.useRef)(null!==(t=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"),u=(0,L.UO)().movieId;console.log(u),(0,b.useEffect)((function(){var t=function(){var t=(0,x.Z)(H().mark((function t(){var r;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,w.TP)(u);case 3:r=t.sent,i(r.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[u]);var s=o.title,l=o.name,f=o.release_date,h=o.vote_average,p=o.poster_path,d=o.overview,v=o.genres,y=10*(null===h||void 0===h?void 0:h.toFixed(1)),g=new Date(f);return(0,D.jsxs)("div",{children:[(0,D.jsx)(Z,{to:c.current,children:"Go back"}),void 0===s?(0,D.jsx)(k,{children:"No detail about movie"}):(0,D.jsxs)(O,{children:[(0,D.jsxs)(G,{children:[(0,D.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(p),alt:s,width:240}),(0,D.jsxs)(z,{children:[(0,D.jsx)(N,{children:(0,D.jsxs)(S,{children:[s||l," (",g.getFullYear(),")"]})}),(0,D.jsxs)(N,{children:["User Score: ",y,"%"]}),(0,D.jsxs)(N,{children:[(0,D.jsx)(P,{children:"Overview"}),d]}),(0,D.jsxs)(N,{children:[(0,D.jsx)(P,{children:"Genres"}),(0,D.jsx)(T,{children:v&&v.map((function(t){var r=t.id,e=t.name;return(0,D.jsx)(F,{children:e},r)}))})]})]})]}),(0,D.jsxs)(I,{children:[(0,D.jsx)(A,{children:"Additional information"}),(0,D.jsxs)(Y,{children:[(0,D.jsx)(U,{children:(0,D.jsx)(C,{to:"cast",state:a.state,children:"Cast"})}),(0,D.jsx)(U,{children:(0,D.jsx)(C,{to:"reviews",state:a.state,children:"Reviews"})})]})]}),(0,D.jsx)(b.Suspense,{fallback:(0,D.jsx)("div",{children:"Loading..."}),children:(0,D.jsx)(L.j3,{})})]})]})}}}]);
//# sourceMappingURL=225.55b7d420.chunk.js.map