(window.webpackJsonpmarkd=window.webpackJsonpmarkd||[]).push([[42],{108:function(e,t,r){"use strict";function n(e,t,r){return t(r),r(e,t)}r.r(t),r.d(t,"elm",(function(){return w}));var i=/[a-z]/,o=/[A-Z]/,u=/[a-zA-Z0-9_]/,a=/[0-9]/,f=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,c=/[(),[\]{}]/,l=/[ \v\f]/;function p(){return function(e,t){if(e.eatWhile(l))return null;var r=e.next();if(c.test(r))return"{"===r&&e.eat("-")?n(e,t,function e(t){if(0==t)return p();return function(r,n){for(;!r.eol();){var i=r.next();if("{"==i&&r.eat("-"))++t;else if("-"==i&&r.eat("}")&&0===--t)return n(p()),"comment"}return n(e(t)),"comment"}}(1)):"["===r&&e.match("glsl|")?n(e,t,h):"builtin";if("'"===r)return n(e,t,d);if('"'===r)return e.eat('"')?e.eat('"')?n(e,t,k):"string":n(e,t,m);if(o.test(r))return e.eatWhile(u),"type";if(i.test(r)){var x=1===e.pos;return e.eatWhile(u),x?"def":"variable"}if(a.test(r)){if("0"===r){if(e.eat(/[xX]/))return e.eatWhile(f),"number"}else e.eatWhile(a);return e.eat(".")&&e.eatWhile(a),e.eat(/[eE]/)&&(e.eat(/[-+]/),e.eatWhile(a)),"number"}return s.test(r)?"-"===r&&e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(s),"keyword"):"_"===r?"keyword":"error"}}function k(e,t){for(;!e.eol();){if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(p()),"string"}return"string"}function m(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function d(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function h(e,t){for(;!e.eol();){if("|"===e.next()&&e.eat("]"))return t(p()),"string"}return"string"}var x={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1},w={startState:function(){return{f:p()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return x.hasOwnProperty(n)?"keyword":r}}}}]);
//# sourceMappingURL=42.5cb67ad3.chunk.js.map