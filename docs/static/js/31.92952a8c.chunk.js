(window.webpackJsonpmarkd=window.webpackJsonpmarkd||[]).push([[31],{95:function(e,n,t){"use strict";t.r(n),t.d(n,"coffeeScript",(function(){return y}));function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var o=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,c=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,i=/^[_A-Za-z$][_A-Za-z$0-9]*/,a=/^@[_A-Za-z$][_A-Za-z$0-9]*/,f=r(["and","or","not","is","isnt","in","instanceof","typeof"]),p=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],u=r(p.concat(["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"]));p=r(p);var s=/^('{3}|\"{3}|['\"])/,l=/^(\/{3}|\/)/,d=r(["Infinity","NaN","undefined","null","true","false","on","off","yes","no"]);function h(e,n){if(e.sol()){null===n.scope.align&&(n.scope.align=!1);var t=n.scope.offset;if(e.eatSpace()){var r=e.indentation();return r>t&&"coffee"==n.scope.type?"indent":r<t?"dedent":null}t>0&&g(e,n)}if(e.eatSpace())return null;var p=e.peek();if(e.match("####"))return e.skipToEnd(),"comment";if(e.match("###"))return n.tokenize=v,n.tokenize(e,n);if("#"===p)return e.skipToEnd(),"comment";if(e.match(/^-?[0-9\.]/,!1)){var h=!1;if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(h=!0),e.match(/^-?\d+\.\d*/)&&(h=!0),e.match(/^-?\.\d+/)&&(h=!0),h)return"."==e.peek()&&e.backUp(1),"number";var k=!1;if(e.match(/^-?0x[0-9a-f]+/i)&&(k=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(k=!0),e.match(/^-?0(?![\dx])/i)&&(k=!0),k)return"number"}if(e.match(s))return n.tokenize=m(e.current(),!1,"string"),n.tokenize(e,n);if(e.match(l)){if("/"!=e.current()||e.match(/^.*\//,!1))return n.tokenize=m(e.current(),!0,"string.special"),n.tokenize(e,n);e.backUp(1)}return e.match(o)||e.match(f)?"operator":e.match(c)?"punctuation":e.match(d)?"atom":e.match(a)||n.prop&&e.match(i)?"property":e.match(u)?"keyword":e.match(i)?"variable":(e.next(),"error")}function m(e,n,t){return function(r,o){for(;!r.eol();)if(r.eatWhile(/[^'"\/\\]/),r.eat("\\")){if(r.next(),n&&r.eol())return t}else{if(r.match(e))return o.tokenize=h,t;r.eat(/['"\/]/)}return n&&(o.tokenize=h),t}}function v(e,n){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){n.tokenize=h;break}e.eatWhile("#")}return"comment"}function k(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"coffee",r=0,o=!1,c=null,i=n.scope;i;i=i.prev)if("coffee"===i.type||"}"==i.type){r=i.offset+e.indentUnit;break}"coffee"!==t?(o=null,c=e.column()+e.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:r,type:t,prev:n.scope,align:o,alignOffset:c}}function g(e,n){if(n.scope.prev){if("coffee"===n.scope.type){for(var t=e.indentation(),r=!1,o=n.scope;o;o=o.prev)if(t===o.offset){r=!0;break}if(!r)return!0;for(;n.scope.prev&&n.scope.offset!==t;)n.scope=n.scope.prev;return!1}return n.scope=n.scope.prev,!1}}var y={startState:function(){return{tokenize:h,scope:{offset:0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,n){var t=null===n.scope.align&&n.scope;t&&e.sol()&&(t.align=!1);var r=function(e,n){var t=n.tokenize(e,n),r=e.current();"return"===r&&(n.dedent=!0),(("->"===r||"=>"===r)&&e.eol()||"indent"===t)&&k(e,n);var o="[({".indexOf(r);if(-1!==o&&k(e,n,"])}".slice(o,o+1)),p.exec(r)&&k(e,n),"then"==r&&g(e,n),"dedent"===t&&g(e,n))return"error";if(-1!==(o="])}".indexOf(r))){for(;"coffee"==n.scope.type&&n.scope.prev;)n.scope=n.scope.prev;n.scope.type==r&&(n.scope=n.scope.prev)}return n.dedent&&e.eol()&&("coffee"==n.scope.type&&n.scope.prev&&(n.scope=n.scope.prev),n.dedent=!1),"indent"==t||"dedent"==t?null:t}(e,n);return r&&"comment"!=r&&(t&&(t.align=!0),n.prop="punctuation"==r&&"."==e.current()),r},indent:function(e,n){if(e.tokenize!=h)return 0;var t=e.scope,r=n&&"])}".indexOf(n.charAt(0))>-1;if(r)for(;"coffee"==t.type&&t.prev;)t=t.prev;var o=r&&t.type===n.charAt(0);return t.align?t.alignOffset-(o?1:0):(o?t.prev:t).offset},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=31.92952a8c.chunk.js.map