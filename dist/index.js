!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueScrollPicker=t():e.VueScrollPicker=t()}(this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var n=this[o][0];"number"==typeof n&&(r[n]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,i,r,o){var n,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(n=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var c;if(o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=c):i&&(c=i),c){var u=a.functional,h=u?a.render:a.beforeCreate;u?a.render=function(e,t){return c.call(t),h(e,t)}:a.beforeCreate=h?[].concat(h,c):[c]}return{esModule:n,exports:s,options:a}}},function(e,t,i){function r(e){for(var t=0;t<e.length;t++){var i=e[t],r=u[i.id];if(r){r.refs++;for(s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(n(i.parts[s]));r.parts.length>i.parts.length&&(r.parts.length=i.parts.length)}else{for(var o=[],s=0;s<i.parts.length;s++)o.push(n(i.parts[s]));u[i.id]={id:i.id,refs:1,parts:o}}}}function o(){var e=document.createElement("style");return e.type="text/css",h.appendChild(e),e}function n(e){var t,i,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(f)return v;r.parentNode.removeChild(r)}if(g){var n=p++;r=d||(d=o()),t=s.bind(null,r,n,!1),i=s.bind(null,r,n,!0)}else r=o(),t=l.bind(null,r),i=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else i()}}function s(e,t,i,r){var o=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var n=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(n,s[t]):e.appendChild(n)}}function l(e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(13),u={},h=a&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,f=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){f=i;var o=c(e,t);return r(o),function(t){for(var i=[],n=0;n<o.length;n++){var s=o[n];(l=u[s.id]).refs--,i.push(l)}t?r(o=c(e,t)):o=[];for(n=0;n<i.length;n++){var l=i[n];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete u[l.id]}}}};var m=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){"use strict";var r=i(10),o=i(1)(null,r.a,function(e){i(12)},null,null);t.a=o.exports},function(e,t,i){"use strict";var r=i(5),o=i(9),n=i(1)(r.a,o.a,function(e){i(11)},null,null);t.a=n.exports},function(e,t,i){"use strict";const r="undefined"!=typeof window&&"ontouchstart"in window;t.a={props:{value:null,options:{type:Array,default:()=>[]},placeholder:String},data(){var e=this.placeholder?-1:0;return this.value&&this.options.forEach(function(t,i){t!=this.value&&t.value!=this.value||(e=i)}.bind(this)),{top:0,pivots:null,lastIndex:e,transitioning:!1,transitionTO:null,startTop:null,isMouseDown:!1,isDragging:!1,isScrolling:!1,startY:null,scrollMax:null}},mounted(){r?(this.$el.addEventListener("touchstart",this.handleStart),this.$el.addEventListener("touchmove",this.handleMove),this.$el.addEventListener("touchend",this.handleEnd),this.$el.addEventListener("touchcancel",this.handleCancel)):(this.$el.addEventListener("mousewheel",this.handleWheel),this.$el.addEventListener("mousedown",this.handleStart),this.$el.addEventListener("mousemove",this.handleMove),this.$el.addEventListener("mouseup",this.handleEnd),this.$el.addEventListener("mouseleave",this.handleCancel));var e=this.$refs.selection.getBoundingClientRect(),t=(e.top+e.bottom)/2;this.pivots=this.$refs.items.map(e=>{var i=e.getBoundingClientRect();return Math.round(10*((i.top+i.bottom)/2-t))/10}),this.scrollMax=-1*this.pivots[this.pivots.length-1],this.lastIndex>0&&(this.top=-1*this.pivots[this.lastIndex]),!this.value&&this.sanitizedOptions[this.lastIndex]&&this.$emit("input",this.sanitizedOptions[this.lastIndex].value)},destroyed(){r?(this.$el.removeEventListener("touchstart",this.handleStart),this.$el.removeEventListener("touchmove",this.handleMove),this.$el.removeEventListener("touchend",this.handleEnd),this.$el.removeEventListener("touchcancel",this.handleCancel)):(this.$el.removeEventListener("mousewheel",this.handleWheel),this.$el.removeEventListener("mousedown",this.handleStart),this.$el.removeEventListener("mousemove",this.handleMove),this.$el.removeEventListener("mouseup",this.handleEnd),this.$el.removeEventListener("mouseleave",this.handleCancel))},computed:{sanitizedOptions(){return this.options.map(e=>e.hasOwnProperty("value")&&e.hasOwnProperty("name")?e:{value:e,name:e})}},watch:{value(e,t){var i=-1;this.sanitizedOptions.forEach(function(t,r){t.value==e&&(i=r)}),this.lastIndex!==i&&this.correction(i)}},methods:{handleWheel(e){this.top>=0&&e.deltaY<0||this.top<=this.scrollMax&&e.deltaY>0||(e.preventDefault(),e.stopPropagation(),this.isScrolling||(this.isScrolling=!0,e.deltaY<0?this.correction(this.lastIndex-Math.floor(Math.abs(e.deltaY)/30+1)):e.deltaY>0&&this.correction(this.lastIndex+Math.floor(Math.abs(e.deltaY)/30+1)),setTimeout(function(){this.isScrolling=!1}.bind(this),80)))},getTouchInfo:e=>r?e.changedTouches[0]||e.touches[0]:e,handleStart(e){e.cancelable&&(e.preventDefault(),e.stopPropagation());const t=this.getTouchInfo(e);this.startTop=this.top,this.startY=t.pageY,r||(this.isMouseDown=!0)},handleMove(e){if(e.preventDefault(),e.stopPropagation(),r||this.isMouseDown){this.isDragging=!0;const t=this.getTouchInfo(e);this.top=this.startTop+t.pageY-this.startY}},handleEnd(e){if(e.preventDefault(),e.stopPropagation(),!this.isDragging)return this.isDragging=!1,this.isMouseDown=!1,void this.handleClick(e);this.isDragging=!1,this.isMouseDown=!1,this.correctionAfterDragging()},handleCancel(e){e.preventDefault(),e.stopPropagation(),(r||this.isMouseDown)&&(this.correctionAfterDragging(),this.isMouseDown=!1,this.isDragging=!1)},handleClick(e){var t=e.x,i=e.y,r=this.$refs.top.getBoundingClientRect(),o=this.$refs.bottom.getBoundingClientRect();r.left<=t&&t<=r.right&&r.top<=i&&i<=r.bottom?this.correction(this.lastIndex-1):o.left<=t&&t<=o.right&&o.top<=i&&i<=o.bottom&&this.correction(this.lastIndex+1)},correctionAfterDragging(){var e=null,t=null,i=this.top;this.placeholder&&(e=-1,t=0+i),this.pivots.forEach((r,o)=>{var n=r+i;(null===t||Math.abs(t)>Math.abs(n))&&(e=o,t=n)}),this.correction(e)},correction(e){if(e=Math.min(Math.max(e,this.placeholder?-1:0),this.pivots.length-1),this.lastIndex!==e){this.lastIndex=e;var t=null;e>-1&&(t=this.sanitizedOptions[e].value),this.$emit("input",t)}var i=0;e>-1&&(i=-1*this.pivots[e]),this.top=i,this.transitioning=!0,this.transitionTO&&(clearTimeout(this.transitionTO),this.transitionTO=null),this.transitionTO=setTimeout(function(){this.transitioning=!1,this.transitionTO=null}.bind(this),100)}}}},function(e,t,i){"use strict";function r(e){e.component("ScrollPicker",o.a),e.component("ScrollPickerGroup",n.a)}Object.defineProperty(t,"__esModule",{value:!0}),t.install=r;var o=i(4),n=i(3);i.d(t,"ScrollPicker",function(){return o.a}),i.d(t,"ScrollPickerGroup",function(){return n.a}),"undefined"!=typeof window&&window.Vue&&r(window.Vue),t.default={install:r}},function(e,t,i){(e.exports=i(0)()).push([e.i,".vue-scroll-picker{position:relative;width:100%;height:10em;overflow:hidden}.vue-scroll-picker-list{position:absolute;left:0;right:0;top:0;bottom:0}.vue-scroll-picker-list-rotator{position:absolute;left:0;right:0;top:0;padding-top:4.4em}.vue-scroll-picker-list-rotator.transition{transition:top .2s ease}.vue-scroll-picker-item,.vue-scroll-picker-item-placeholder{text-align:center;height:1.2em;line-height:1.2em}.vue-scroll-picker-item-placeholder{color:#aaa}.vue-scroll-picker-layer{position:absolute;left:0;right:0;top:0;bottom:0}.vue-scroll-picker-layer .bottom,.vue-scroll-picker-layer .middle,.vue-scroll-picker-layer .top{position:absolute}.vue-scroll-picker-layer .top{box-sizing:border-box;border-bottom:1px solid #c8c7cc;background:linear-gradient(180deg,#fff 10%,hsla(0,0%,100%,.7));top:0;left:0;right:0;height:40%}.vue-scroll-picker-layer .middle{top:40%;left:0;right:0;bottom:40%}.vue-scroll-picker-layer .bottom{border-top:1px solid #c8c7cc;background:linear-gradient(0deg,#fff 10%,hsla(0,0%,100%,.7));bottom:0;left:0;right:0;height:40%}",""])},function(e,t,i){(e.exports=i(0)()).push([e.i,'.vue-scroll-picker-group.flex{display:flex}.vue-scroll-picker-group:after{clear:both;display:table;content:""}.vue-scroll-picker-group>.vue-scroll-picker-1{float:left;width:8.33333%}.vue-scroll-picker-group>.vue-scroll-picker-2{float:left;width:16.66667%}.vue-scroll-picker-group>.vue-scroll-picker-3{float:left;width:25%}.vue-scroll-picker-group>.vue-scroll-picker-4{float:left;width:33.33333%}.vue-scroll-picker-group>.vue-scroll-picker-5{float:left;width:41.66667%}.vue-scroll-picker-group>.vue-scroll-picker-6{float:left;width:50%}.vue-scroll-picker-group>.vue-scroll-picker-7{float:left;width:58.33333%}.vue-scroll-picker-group>.vue-scroll-picker-8{float:left;width:66.66667%}.vue-scroll-picker-group>.vue-scroll-picker-9{float:left;width:75%}.vue-scroll-picker-group>.vue-scroll-picker-10{float:left;width:83.33333%}.vue-scroll-picker-group>.vue-scroll-picker-11{float:left;width:91.66667%}.vue-scroll-picker-group>.vue-scroll-picker-12{float:left;width:100%}',""])},function(e,t,i){"use strict";var r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-scroll-picker"},[i("div",{staticClass:"vue-scroll-picker-list"},[i("div",{staticClass:"vue-scroll-picker-list-rotator",class:{transition:e.transitioning},style:{top:e.top+"px"}},[e.placeholder?i("div",{ref:"placeholder",staticClass:"vue-scroll-picker-item-placeholder"},[e._v(e._s(e.placeholder))]):e._e(),e._v(" "),e._l(e.sanitizedOptions,function(t,r){return i("div",{key:t.value,ref:"items",refInFor:!0,staticClass:"vue-scroll-picker-item"},[e._v(e._s(t.name))])})],2)]),e._v(" "),i("div",{staticClass:"vue-scroll-picker-layer"},[i("div",{ref:"top",staticClass:"top"}),e._v(" "),i("div",{ref:"selection",staticClass:"middle"}),e._v(" "),i("div",{ref:"bottom",staticClass:"bottom"})])])},staticRenderFns:[]};t.a=r},function(e,t,i){"use strict";var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vue-scroll-picker-group"},[e._t("default")],2)},staticRenderFns:[]};t.a=r},function(e,t,i){var r=i(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(2)("08d1ef24",r,!0)},function(e,t,i){var r=i(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(2)("1b122190",r,!0)},function(e,t){e.exports=function(e,t){for(var i=[],r={},o=0;o<t.length;o++){var n=t[o],s=n[0],l={id:e+":"+o,css:n[1],media:n[2],sourceMap:n[3]};r[s]?r[s].parts.push(l):i.push(r[s]={id:s,parts:[l]})}return i}}])});