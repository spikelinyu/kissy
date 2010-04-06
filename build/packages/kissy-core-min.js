/*
Copyright 2010, KISSY UI Library v1.0.5
MIT Licensed
build: 526 Apr 6 18:02
*/
(function(c,k,i){if(c[k]===i)c[k]={};k=c[k];var l=c.document,j=function(p,r,t,d){if(!r||!p)return p;if(t===i)t=true;var o,m,f;if(d&&(f=d.length))for(o=0;o<f;o++){m=d[o];if(m in r)if(t||!(m in p))p[m]=r[m]}else for(m in r)if(t||!(m in p))p[m]=r[m];return p},e=false,h=[],u=false;j(k,{version:"1.0.5",_init:function(){this.Env={mods:{}};this.Config={debug:true}},add:function(p,r){this.Env.mods[p]={name:p,fn:r};r(this);return this},ready:function(p){u||this._bindReady();e?p.call(c,this):h.push(p);return this},
_bindReady:function(){var p=this,r=l.documentElement.doScroll,t=r?"onreadystatechange":"DOMContentLoaded";u=true;if(l.attachEvent){if(c!=c.top){var d=function(){if(l.readyState==="complete"){l.detachEvent(t,d);p._fireReady()}};l.attachEvent(t,d)}else{var o=function(){try{r("left");p._fireReady()}catch(f){setTimeout(o,1)}};o()}c.attachEvent("onload",function(){p._fireReady()})}else{var m=function(){l.removeEventListener(t,m,false);p._fireReady()};l.addEventListener(t,m,false)}},_fireReady:function(){if(!e){e=
true;if(h){for(var p,r=0;p=h[r++];)p.call(c,this);h=null}}},mix:j,merge:function(){var p=arguments,r={},t,d=p.length;for(t=0;t<d;++t)j(r,p[t]);return r},extend:function(p,r,t,d){if(!r||!p)return p;var o=Object.prototype,m=r.prototype,f=function(b){function n(){}n.prototype=b;return new n}(m);p.prototype=f;f.constructor=p;p.superclass=m;if(r!==Object&&m.constructor===o.constructor)m.constructor=r;t&&j(f,t);d&&j(p,d);return p},augment:function(p,r,t,d){return j(p.prototype,r.prototype,t,d)},weave:function(p,
r,t,d){var o=[t[d],p];r==="before"&&o.reverse();t[d]=function(){for(var m=0,f;m<2;++m)f=o[m].apply(this,arguments);return f};return this},app:function(p){var r=c[p]||{};j(r,this,true,["_init","add","namespace"]);r._init();return c[p]=r},namespace:function(){var p=arguments,r=p.length,t=null,d,o,m;for(d=0;d<r;++d){m=(""+p[d]).split(".");t=this;for(o=c[m[0]]===t?1:0;o<m.length;++o)t=t[m[o]]=t[m[o]]||{}}return t},log:function(p,r,t){if(this.Config.debug){t&&(p=t+": "+p);if(c.console!==i&&console.log)console[r&&
console[r]?r:"log"](p)}return this},error:function(p){throw p;},now:function(){return(new Date).getTime()}});k._init()})(window,"KISSY");
KISSY.add("lang",function(c,k){function i(d){var o=typeof d;return d===null|(o!=="object"&&o!=="function")}var l=document,j=Array.prototype,e=j.forEach,h=j.indexOf,u=j.slice,p=/^\s+|\s+$/g,r=/^(\w+)\[\]$/,t=Object.prototype.toString;c.mix(c,{each:e?function(d,o,m){e.call(d,o,m);return this}:function(d,o,m){var f=d&&d.length||0,b;for(b=0;b<f;++b)o.call(m||this,d[b],b,d);return this},trim:String.prototype.trim?function(d){return(d||"").trim()}:function(d){return(d||"").replace(p,"")},isPlainObject:function(d){return d&&
t.call(d)==="[object Object]"&&!d.nodeType&&!d.setInterval},isEmptyObject:function(d){for(var o in d)return false;return true},isFunction:function(d){return t.call(d)==="[object Function]"},isArray:function(d){return t.call(d)==="[object Array]"},indexOf:h?function(d,o){return h.call(o,d)}:function(d,o){for(var m=0,f=o.length;m<f;++m)if(o[m]===d)return m;return-1},inArray:function(d,o){return c.indexOf(d,o)!==-1},makeArray:function(d){if(d===null||d===k)return[];if(c.isArray(d))return d;if(typeof d.length!==
"number"||typeof d==="string"||c.isFunction(d))return[d];if(d.item&&c.UA.ie){for(var o=[],m=0,f=d.length;m<f;++m)o[m]=d[m];return o}return u.call(d)},param:function(d){if(typeof d!=="object")return"";var o=[],m,f;for(m in d){f=d[m];if(i(f))o.push(m,"=",f+"","&");else if(c.isArray(f)&&f.length)for(var b=0,n=f.length;b<n;++b)i(f[b])&&o.push(m+"[]=",f[b]+"","&")}o.pop();return encodeURI(o.join(""))},unparam:function(d,o){if(typeof d!=="string"||(d=decodeURI(c.trim(d))).length===0)return{};var m={};d=
d.split(o||"&");for(var f,b,n=0,s=d.length;n<s;++n){f=d[n].split("=");o=f[0];f=f[1]||"";if((b=o.match(r))&&b[1]){m[b[1]]=m[b[1]]||[];m[b[1]].push(f)}else m[o]=f}return m},later:function(d,o,m,f,b){o=o||0;f=f||{};var n=d,s=c.makeArray(b),a;if(typeof d==="string")n=f[d];n||c.error("method undefined");d=function(){n.apply(f,s)};a=m?setInterval(d,o):setTimeout(d,o);return{id:a,interval:m,cancel:function(){this.interval?clearInterval(a):clearTimeout(a)}}},globalEval:function(d){if(d=c.trim(d)){var o=l.getElementsByTagName("head")[0]||
l.documentElement,m=l.createElement("script");if(c.UA.ie)m.text=d;else m.appendChild(l.createTextNode(d));o.insertBefore(m,o.firstChild);o.removeChild(m)}}})});
KISSY.add("ua",function(c){var k=navigator.userAgent,i,l={ie:0,gecko:0,firefox:0,opera:0,webkit:0,safari:0,chrome:0,mobile:""},j=function(e){var h=0;return parseFloat(e.replace(/\./g,function(){return h++===0?".":""}))};if((i=k.match(/AppleWebKit\/([\d.]*)/))&&i[1]){l.webkit=j(i[1]);if((i=k.match(/Chrome\/([\d.]*)/))&&i[1])l.chrome=j(i[1]);else if((i=k.match(/\/([\d.]*) Safari/))&&i[1])l.safari=j(i[1]);if(/ Mobile\//.test(k))l.mobile="Apple";else if(i=k.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))l.mobile=
i[0]}else if((i=k.match(/Opera\/.* Version\/([\d.]*)/))&&i[1]){l.opera=j(i[1]);if(k.match(/Opera Mini[^;]*/))l.mobile=i[0]}else if((i=k.match(/MSIE\s([^;]*)/))&&i[1])l.ie=j(i[1]);else if(i=k.match(/Gecko/)){l.gecko=1;if((i=k.match(/rv:([\d.]*)/))&&i[1])l.gecko=j(i[1]);if((i=k.match(/Firefox\/([\d.]*)/))&&i[1])l.firefox=j(i[1])}c.UA=l});
KISSY.add("json",function(c){var k=window.JSON;c.JSON={parse:function(i){if(typeof i!=="string"||!i)return null;i=c.trim(i);if(/^[\],:{}\s]*$/.test(i.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return(k||{}).parse?k.parse(i):(new Function("return "+i))();else jQuery.error("Invalid JSON: "+i)}}});
KISSY.add("selector",function(c,k){function i(b,n,s){var a,g=[],q,v;if(typeof b===t){b=c.trim(b);if(m.test(b)){if(n=j(b.slice(1)))g=[n]}else if(a=f.exec(b)){q=a[1];v=a[2];a=a[3];if(n=q?j(q):l(n))if(a){if(!q||b.indexOf(d)!==-1)g=h(a,v,n)}else if(v)g=e(n,v)}else if(b.indexOf(",")>-1)if(r.querySelectorAll)g=r.querySelectorAll(b);else{q=b.split(",");v=[];g=0;for(b=q.length;g<b;++g)v=v.concat(i(q[g],n));g=u(v)}}else if(b&&b.nodeType)g=[b];else if(b&&b.item)g=b;if(g.item)g=c.makeArray(g);s||p(g);return g}
function l(b){if(b===k)b=r;else if(typeof b===t&&m.test(b))b=j(b.slice(1));else if(b&&b.nodeType!==1&&b.nodeType!==9)b=null;return b}function j(b){return r.getElementById(b)}function e(b,n){return b.getElementsByTagName(n)}function h(b,n,s){s=b=s.getElementsByClassName(b);var a=0,g=0,q=b.length,v;if(n&&n!==o){s=[];for(n=n.toUpperCase();a<q;++a){v=b[a];if(v.tagName===n)s[g++]=v}}return s}function u(b){var n=false;b.sort(function(a,g){a=a.sourceIndex-g.sourceIndex;if(a===0)n=true;return a});if(n)for(var s=
1;s<b.length;s++)b[s]===b[s-1]&&b.splice(s--,1);return b}function p(b){b.each=function(n,s){c.each(b,n,s)}}var r=document,t="string",d=" ",o="*",m=/^#[\w-]+$/,f=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var b=r.createElement("div");b.appendChild(r.createComment(""));if(b.getElementsByTagName(o).length>0)e=function(n,s){n=n.getElementsByTagName(s);if(s===o){s=[];for(var a=0,g=0,q;q=n[a++];)if(q.nodeType===1)s[g++]=q;n=s}return n}})();r.getElementsByClassName||(h=r.querySelectorAll?
function(b,n,s){return s.querySelectorAll((n?n:"")+"."+b)}:function(b,n,s){n=s.getElementsByTagName(n||o);s=[];var a=0,g=0,q=n.length,v,w;for(b=d+b+d;a<q;++a){v=n[a];if((w=v.className)&&(d+w+d).indexOf(b)>-1)s[g++]=v}return s});c.query=i;c.get=function(b,n){return i(b,n,true)[0]||null}});
KISSY.add("dom-base",function(c,k){function i(a,g){return g&&g.nodeName.toUpperCase()===a.toUpperCase()}function l(a,g){for(var q=[],v=0;a;a=a.nextSibling)if(a.nodeType===1&&a!==g)q[v++]=a;return q}function j(a,g,q){g=g||0;for(var v=0;a;a=a[q])if(a.nodeType===1&&v++===g)break;return a}function e(a,g){var q=null,v;if(a&&(a.push||a.item)&&a[0]){g=g||a[0].ownerDocument;q=g.createDocumentFragment();if(a.item)a=c.makeArray(a);g=0;for(v=a.length;g<v;++g)q.appendChild(a[g])}else c.error("unable to convert "+
a+" to fragment");return q}var h=document,u=h.documentElement.textContent!==k?"textContent":"innerText",p=c.UA,r=p.ie,t=r&&r<8,d={readonly:"readOnly"},o=/href|src|style/,m=/href|src|colspan|rowspan/,f=/\r/g,b=/radio|checkbox/,n=h.createElement("DIV"),s=/^[a-z]+$/i;t&&c.mix(d,{"for":"htmlFor","class":"className"});c.DOM={query:c.query,get:c.get,attr:function(a,g,q){if(!a||a.nodeType!==1)return k;var v;g=g.toLowerCase();g=d[g]||g;if(q===k){if(o.test(g)){if(g==="style")v=a.style.cssText}else v=a[g];
if(v===k)v=a.getAttribute(g);if(t&&m.test(g))v=a.getAttribute(g,2);return v===null?k:v}if(g==="style")a.style.cssText=q;else a.setAttribute(g,""+q)},removeAttr:function(a,g){a&&a.nodeType===1&&a.removeAttribute(g)},val:function(a,g){if(!a||a.nodeType!==1)return k;if(g===k){if(i("option",a))return(a.attributes.value||{}).specified?a.value:a.text;if(i("select",a)){g=a.selectedIndex;var q=a.options;if(g<0)return null;else if(a.type==="select-one")return c.DOM.val(q[g]);a=[];g=0;for(var v=q.length;g<
v;++g)q[g].selected&&a.push(c.DOM.val(q[g]));return a}if(p.webkit&&b.test(a.type))return a.getAttribute("value")===null?"on":a.value;return(a.value||"").replace(f,"")}if(i("select",a)){q=c.makeArray(g);var w=a.options,x;g=0;for(v=w.length;g<v;++g){x=w[g];x.selected=c.inArray(c.DOM.val(x),q)}if(!q.length)a.selectedIndex=-1}else a.value=g},css:function(a,g,q){if(q===k)return a.style[g];c.each(c.makeArray(a),function(v){v.style[g]=q})},text:function(a,g){if(g===k)return(a||{})[u]||"";if(a)a[u]=g},html:function(a,
g){if(g===k)return a.innerHTML;a.innerHTML=g},children:function(a){if(a.children)return c.makeArray(a.children);return l(a.firstChild)},siblings:function(a){return l(a.parentNode.firstChild,a)},next:function(a){return j(a,1,"nextSibling")},prev:function(a){return j(a,1,"previousSibling")},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},create:function(a,g){if(typeof a==="string")a=c.trim(a);if(s.test(a))return(g||h).createElement(a);var q=null;q=g?g.createElement("DIV"):n;q.innerHTML=
a;a=q.childNodes;return q=a.length===1?a[0].parentNode.removeChild(a[0]):e(a,g||h)}}});
KISSY.add("dom-class",function(c,k){c.mix(c.DOM,{hasClass:function(e,h){if(!h||!e||!e.className)return false;return(" "+e.className+" ").indexOf(" "+h+" ")>-1},addClass:function(e,h){if(h&&e)i(e,h)||(e.className+=" "+h)},removeClass:function(e,h){if(i(e,h)){e.className=(" "+e.className+" ").replace(" "+h+" "," ");i(e,h)&&j(e,h)}},replaceClass:function(e,h,u){j(e,h);l(e,u)},toggleClass:function(e,h,u){(u!==k?u:!i(e,h))?l(e,h):j(e,h)}});var i=c.DOM.hasClass,l=c.DOM.addClass,j=c.DOM.removeClass});
KISSY.add("event",function(c,k){function i(f){var b=-1;if(f.nodeType===3||f.nodeType===8)return b;return b=f.nodeType?e.attr(f,t):f.isCustomEventTarget?f.eventTargetId:f[t]}function l(f,b){if(f.nodeType)e.attr(f,t,b);else if(f.isCustomEventTarget)f.eventTargetId=b;else try{f[t]=b}catch(n){c.error(n)}}function j(f){if(f.nodeType)e.removeAttr(f,t);else if(f.isCustomEventTarget)f.eventTargetId=k;else f[t]=k}var e=c.DOM,h=window,u=document,p=u.addEventListener?function(f,b,n){f.addEventListener&&f.addEventListener(b,
n,false)}:function(f,b,n){f.attachEvent&&f.attachEvent("on"+b,n)},r=u.removeEventListener?function(f,b,n){f.removeEventListener&&f.removeEventListener(b,n,false)}:function(f,b,n){f.detachEvent&&f.detachEvent("on"+b,n)},t="data-ks-event-guid",d=c.now(),o={},m={special:{},add:function(f,b,n){if((b=c.trim(b))&&b.indexOf(" ")>0)c.each(b.split(" "),function(q){m.add(f,q,n)});else{var s=i(f),a,g;if(!(s===-1||!b||!c.isFunction(n))){if(!s){l(f,s=d++);o[s]={target:f,events:{}}}g=o[s].events;a=!f.isCustomEventTarget&&
m.special[b]||{};if(!g[b]){s=function(q,v){if(!q||!q.fixed){q=new c.EventObject(f,q,b);c.isPlainObject(v)&&c.mix(q,v)}a.setup&&a.setup(q);return(a.handle||m._handle)(f,q,g[b].listeners)};g[b]={handle:s,listeners:[]};if(f.isCustomEventTarget)f._addEvent&&f._addEvent(b,s);else p(f,a.fix||b,s)}g[b].listeners.push(n)}}},remove:function(f,b,n){var s=i(f),a,g,q,v,w,x;if(s!==-1)if(s&&(a=o[s]))if(a.target===f){a=a.events||{};if(g=a[b]){q=g.listeners;w=q.length;if(c.isFunction(n)&&w&&c.inArray(n,q)){x=[];
for(v=0;v<w;++v)n!==q[v]&&x.push(q[v]);w=x.length}if(n===k||w===0){f.isCustomEventTarget||r(f,b,g.handle);delete o[s].type}}if(b===k||c.isEmptyObject(a)){for(b in a)m.remove(f,b);delete o[s];j(f)}}},_handle:function(f,b,n){for(var s,a=0,g=n.length;a<g;++a){s=n[a].call(f,b);if(b.isImmediatePropagationStopped)break;s===false&&b.halt()}return s},_getCache:function(f){return o[f]},_simpleAdd:p,_simpleRemove:r};m.on=m.add;c.Event=m;h.attachEvent&&!h.addEventListener&&h.attachEvent("onunload",function(){var f,
b;for(f in o)if(b=o[f].target)try{m.remove(b)}catch(n){}})});
KISSY.add("event-object",function(c,k){function i(e,h,u){this.currentTarget=e;this.originalEvent=h||{};if(h){this.type=h.type;this._fix()}else{this.type=u;this.target=e}this.fixed=true}var l=document,j="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");c.mix(i.prototype,
{_fix:function(){for(var e=this.originalEvent,h=j.length,u;h;){u=j[--h];this[u]=e[u]}if(!this.target)this.target=this.srcElement||l;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===k&&this.clientX!==k){e=l.documentElement;h=l.body;this.pageX=this.clientX+(e&&e.scrollLeft||h&&h.scrollLeft||0)-(e&&e.clientLeft||h&&h.clientLeft||0);this.pageY=this.clientY+
(e&&e.scrollTop||h&&h.scrollTop||0)-(e&&e.clientTop||h&&h.clientTop||0)}if(this.which===k)this.which=this.charCode!==k?this.charCode:this.keyCode;if(this.metaKey===k)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==k)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var e=this.originalEvent;if(e.preventDefault)e.preventDefault();else e.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var e=this.originalEvent;if(e.stopPropagation)e.stopPropagation();
else e.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var e=this.originalEvent;e.stopImmediatePropagation?e.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(e){e?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});c.EventObject=i});
KISSY.add("event-target",function(c,k){var i=c.Event;c.EventTarget={eventTargetId:k,isCustomEventTarget:true,fire:function(l,j){(l=((i._getCache(this.eventTargetId||-1)||{}).events||{})[l])&&c.isFunction(l.handle)&&l.handle(k,j)},on:function(l,j){i.add(this,l,j)},detach:function(l,j){i.remove(this,l,j)}}});
KISSY.add("event-mouseenter",function(c){var k=c.Event;c.UA.ie||c.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(i){k.special[i.name]={fix:i.fix,setup:function(l){l.type=i.name},handle:function(l,j,e){var h=j.relatedTarget;try{for(;h&&h!==l;)h=h.parentNode;h!==l&&k._handle(l,j,e)}catch(u){}}}})});
KISSY.add("node",function(c){function k(j,e,h){var u;if(!(this instanceof k))return new k(j,e,h);if(!j)return null;if(j.nodeType)u=j;else if(typeof j==="string")u=i.create(j,h);e&&c.error("not implemented");this[0]=u}var i=c.DOM,l=k.prototype;c.each(["attr","removeAttr","css"],function(j){l[j]=function(e,h){var u=this[0];if(h===undefined)return i[j](u,e);else{i[j](u,e,h);return this}}});c.each(["val","text","html"],function(j){l[j]=function(e){var h=this[0];if(e===undefined)return i[j](h);else{i[j](h,
e);return this}}});c.each(["children","siblings","next","prev","parent"],function(j){l[j]=function(){var e=i[j](this[0]);return e?new c[e.length?"NodeList":"Node"](e):null}});c.each(["hasClass","addClass","removeClass","replaceClass","toggleClass"],function(j){l[j]=function(){var e=i[j].apply(i,[this[0]].concat(c.makeArray(arguments)));return typeof e==="boolean"?e:this}});c.mix(l,c.EventTarget);l._addEvent=function(j,e){c.Event._simpleAdd(this[0],j,e)};delete l.fire;c.mix(l,{one:function(j){return c.one(j,
this[0])},all:function(j){return c.all(j,this[0])}});c.one=function(j,e){return new k(c.get(j,e))};c.Node=k});KISSY.add("nodelist",function(c){function k(l){if(!(this instanceof k))return new k(l);i.apply(this,l||[])}var i=Array.prototype.push;c.mix(k.prototype,{length:0,each:function(l,j){for(var e=this.length,h=0,u;h<e;++h){u=new c.Node(this[h]);l.call(j||u,u,h,this)}return this}});c.all=function(l,j){return new k(c.query(l,j,true))};c.NodeList=k});
KISSY.add("cookie",function(c){function k(e){return typeof e==="string"&&e!==""}var i=document,l=encodeURIComponent,j=decodeURIComponent;c.Cookie={get:function(e){var h;if(k(e))if(e=i.cookie.match("(?:^| )"+e+"(?:(?:=([^;]*))|;|$)"))h=e[1]?j(e[1]):"";return h},set:function(e,h,u,p,r,t){h=l(h);var d=u;if(typeof d==="number"){d=new Date;d.setTime(d.getTime()+u*864E5)}if(d instanceof Date)h+="; expires="+d.toUTCString();if(k(p))h+="; domain="+p;if(k(r))h+="; path="+r;if(t)h+="; secure";i.cookie=e+"="+
h},remove:function(e){this.set(e,"",0)}}});KISSY.add("ajax",function(c){var k=document,i=c.UA;c.Ajax={request:function(){c.error("not implemented")},getScript:function(l,j,e){var h=k.getElementsByTagName("head")[0]||k.documentElement,u=k.createElement("script");u.src=l;if(e)u.charset=e;u.async=true;if(c.isFunction(j))if(i.ie)u.onreadystatechange=function(){var p=u.readyState;if(p==="loaded"||p==="complete"){u.onreadystatechange=null;j()}};else u.onload=j;h.appendChild(u)}}});