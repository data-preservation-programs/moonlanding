(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3680:function(a,b,c){"use strict";c.d(b,{D_:function(){return h},Qo:function(){return j},Ru:function(){return k},i:function(){return l}});var d=c(7294);let e="tina.isEditing",f="undefined"==typeof window,g=()=>{if(!f){let a=window.localStorage&&window.localStorage.getItem(e);return a&&"true"===a}return!1},h=a=>{f||window.localStorage.setItem(e,a?"true":"false")},i=d.createContext({edit:g(),setEdit:void 0}),j=d.createContext({state:{payload:{}},setRequest:()=>{},isLoading:!1,isDummyContainer:!0}),k=({children:a})=>{let[b,c]=(0,d.useState)(g()),e=a=>{c(a),h(a)};return d.createElement(i.Provider,{value:{edit:b,setEdit:e}},a)},l=()=>{let{edit:a,setEdit:b}=(0,d.useContext)(i);if(!b)throw Error("Unable to find `TinaProvider`; did you forget to add the TinaCMS container to your app root?  See our setup docs: https://tina.io/docs/introduction/tina-init/#adding-tina");return{edit:a,setEdit:b}}},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(5496)}])},638:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(6856).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a,b){var c=g.default,f={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};if(d(a,Promise)?f.loader=function(){return a}:"function"==typeof a?f.loader=a:"object"==typeof a&&(f=e({},f,a)),(f=e({},f,b)).loadableGenerated&&delete(f=e({},f,f.loadableGenerated)).loadableGenerated,"boolean"==typeof f.ssr&&!f.suspense){if(!f.ssr)return delete f.ssr,h(c,f);delete f.ssr}return c(f)},b.noSSR=h;var e=c(6495).Z,f=c(2648).Z,g=(f(c(7294)),f(c(4302)));function h(a,b){return delete b.webpack,delete b.modules,a(b)}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d=(0,c(2648).Z)(c(7294)).default.createContext(null);b.LoadableContext=d},4302:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9658).Z,e=c(7222).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=c(6495).Z,g=(0,c(2648).Z)(c(7294)),h=c(6319),i=c(7294).useSyncExternalStore,j=[],k=[],l=!1;function m(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var n=function(){function a(b,c){d(this,a),this._loadFn=b,this._opts=c,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return e(a,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;b.loading&&("number"==typeof c.delay&&(0===c.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){a._update({pastDelay:!0})},c.delay)),"number"==typeof c.timeout&&(this._timeout=setTimeout(function(){a._update({timedOut:!0})},c.timeout))),this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}]),a}();function o(a){return function(a,b){var c=function(){if(!o){var b=new n(a,m);o={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return o.promise()},d=function(){c();var a=g.default.useContext(h.LoadableContext);a&&Array.isArray(m.modules)&&m.modules.forEach(function(b){a(b)})},e=function(a,b){d();var c=i(o.subscribe,o.getCurrentValue,o.getCurrentValue);return g.default.useImperativeHandle(b,function(){return{retry:o.retry}},[]),g.default.useMemo(function(){var b;return c.loading||c.error?g.default.createElement(m.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?g.default.createElement((b=c.loaded)&&b.__esModule?b.default:b,a):null},[a,c])},j=function(a,b){return d(),g.default.createElement(m.lazy,f({},a,{ref:b}))},m=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);m.suspense&&(m.lazy=g.default.lazy(m.loader));var o=null;if(!l){var p=m.webpack?m.webpack():m.modules;p&&k.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,g=p[Symbol.iterator]();!(b=(f=g.next()).done);b=!0){var h=f.value;if(-1!==a.indexOf(h))return c()}}catch(i){d=!0,e=i}finally{try{b||null==g.return||g.return()}finally{if(d)throw e}}})}var q=m.suspense?j:e;return q.preload=function(){return c()},q.displayName="LoadableComponent",g.default.forwardRef(q)}(m,a)}function p(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return p(a,b)})}o.preloadAll=function(){return new Promise(function(a,b){p(j).then(a,b)})},o.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return l=!0,b()};p(k,a).then(c,c)})},window.__NEXT_PRELOADREADY=o.preloadReady,b.default=o},5496:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return m}});var d=c(1799),e=c(5893);c(7727);var f=c(5152),g=c.n(f),h=c(234),i=g()(function(){return Promise.all([c.e(774),c.e(372),c.e(563),c.e(917),c.e(379),c.e(885),c.e(6),c.e(361),c.e(769),c.e(746)]).then(c.bind(c,1746))},{loadableGenerated:{webpack:function(){return[1746]}},ssr:!1}),j=function(a){var b=a.children;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(h.q4,{editMode:(0,e.jsx)(i,{children:b}),children:b})})},k=j,l=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsx)(k,{children:(0,e.jsx)(b,(0,d.Z)({},c))})},m=l},7727:function(){},5152:function(a,b,c){a.exports=c(638)},234:function(a,b,c){"use strict";c.d(b,{UL:function(){return g},q4:function(){return f}});var d=c(3680),e=c(7294);let f=({showEditButton:a,...b})=>e.createElement(d.Ru,null,a&&e.createElement(h,null),e.createElement(i,{...b}));function g({query:a,variables:b,data:c}){let{setRequest:f,state:g,isDummyContainer:h,isLoading:i}=e.useContext(d.Qo),[j,k]=(0,e.useState)(!h),l=i||j;return e.useEffect(()=>{f({query:a,variables:b})},[JSON.stringify(b),a]),(0,e.useEffect)(()=>(h||setTimeout(()=>k(!1),0),()=>{f(void 0)}),[h]),{data:h||l?c:g.payload,isLoading:l}}let h=()=>{let{edit:a}=(0,d.i)(),[b,c]=e.useState(!1);return e.useEffect(()=>{var a;window&&(null==(a=window.location)?void 0:a.pathname.startsWith("/admin"))&&c(!0)},[c]),a||b?null:e.createElement("div",{style:{position:"fixed",bottom:"56px",left:"0px",zIndex:200}},e.createElement("a",{href:"/admin",style:{borderRadius:"0 50px 50px 0",fontSize:"16px",fontFamily:"Inter, 'Helvetica Neue', 'Arial Nova', Helvetica, Arial, sans-serif",fontWeight:"bold",textDecoration:"none",background:"rgb(34, 150, 254)",boxShadow:"0px 1px 3px rgb(0 0 0 / 10%), 0px 2px 6px rgb(0 0 0 / 20%)",color:"white",padding:"14px 20px",border:"none"}},"Edit with Tina"))},i=({children:a,editMode:b})=>{let{edit:c}=(0,d.i)(),[f,g]=e.useState(!1);return(e.useEffect(()=>{g(!0)},[]),c&&f)?b:a}},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])