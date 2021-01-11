(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{82:function(n,t,e){},93:function(n,t,e){"use strict";e.r(t);var r=e(5),i=e(0),c=e.n(i),a=e(11),o=e.n(a),u=(e(82),e(40)),s=e(15),j=e(20),h=e(31),b=e(16),d=e(64),l=e.n(d);function f(){var n=Object(s.a)(["\n  width: 100%;\n  text-align: center;\n  font-size: 1.5rem;\n"]);return f=function(){return n},n}function x(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  width: 39px;\n  height: calc(100% - 1px);\n  margin: 1px;\n  box-sizing: border-box;\n  cursor: grab;\n  background-color: rgba(245,245,245,0.7);\n  &:active {\n    cursor: grabbing;\n  }\n  box-shadow: -1px -3px 2px 2px rgba(10,10,10,0.1) inset, 0px 0px 0px 1px rgba(10,10,10,0.02) inset;\n"]);return x=function(){return n},n}var p=b.a.div(x()),O=b.a.p(f()),g=function(n){var t=Object(r.jsx)(l.a,{}),e=function(n){if(!n.isLayout)return!1;if("n"===n.word)return!0;return!1}(n.element)?t:n.element.word;return Object(r.jsx)(p,{children:Object(r.jsx)(O,{children:e})})};function v(){var n=Object(s.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 1.6rem;\n  font-family: 'Noto Serif JP', serif;\n"]);return v=function(){return n},n}var m=b.a.p(v()),w=function(n){return Object(r.jsx)(r.Fragment,{children:n.lines.map((function(n,t){return Object(r.jsx)(m,{children:n},"preview_text_line_".concat(t))}))})},y=e(126),L=e(68),k=e(69),C=e(134),F=e(133);function S(){var n=Object(s.a)(["\n  width: 100%;\n  height: 16px;\n"]);return S=function(){return n},n}var _=b.a.div(S()),z=function(n){var t=function(n,t,e){var r=function(n,t){for(var e={},r=0;r<t;r++)e["line_".concat(r)]=I(n,r);return e}(n.split("").map((function(n,e){var r=Math.floor(e/t);return{key:"".concat(e),word:"".concat(n),line:r,isLayout:!1}})),e);return r.layoutItems=function(n){return"n".repeat(n).split("").map((function(n,t){return{key:"layout_item_".concat(t),word:"".concat(n),line:1,isLayout:!0}}))}(5),r}(n.theme,n.panelConf.rowLength,n.panelConf.verticalLength),e=Object(i.useState)(t),c=Object(u.a)(e,2),a=c[0],o=c[1],s=Object(i.useState)(n.theme.split("n")),b=Object(u.a)(s,2),d=b[0],l=b[1];Object(i.useEffect)((function(){o(t)}),[n.theme]),Object(i.useEffect)((function(){var n=function(n){var t="";return Object.keys(n).map((function(e){"layoutItems"!==e&&n[e].map((function(n){return t+=n.word}))})),t.split("n")}(a);l(n)}),[a]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k.b,{onChange:function(n,t,e,r){if(!r){var i=Object(L.a)(a[n],t,e);return o(Object(h.a)(Object(h.a)({},a),{},Object(j.a)({},n,i)))}var c,u=Object(y.a)(a[n],a[r],t,e);o(Object(h.a)(Object(h.a)({},a),{},(c={},Object(j.a)(c,n,u[0]),Object(j.a)(c,r,u[1]),c)))},children:Object.keys(a).map((function(t){return Object(r.jsx)(C.a,Object(h.a)(Object(h.a)({id:t},n.editorConf),{},{children:a[t].map((function(n){return Object(r.jsx)(F.a,{children:Object(r.jsx)(g,{element:n})},n.key)}))}),t)}))}),Object(r.jsx)(_,{}),Object(r.jsx)(w,{lines:d})]})};function I(n,t){return n.filter((function(n){return n.line===t}))}var P=e(127),E=e(128),J=e(129),W=e(130),B=e(131),M=e(132);function N(){var n=Object(s.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]);return N=function(){return n},n}function T(){var n=Object(s.a)(["\n  width: 100%;\n  height: 16px;\n"]);return T=function(){return n},n}function D(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return D=function(){return n},n}function H(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 16px 0px;\n"]);return H=function(){return n},n}function R(){var n=Object(s.a)(["\n  position: absolute;\n  width: ","px;\n  height: ","px;\n  z-index: -1;\n  background-image: linear-gradient(#000 1px, transparent 0),\n                    linear-gradient(90deg, #000 1px, transparent 0);\n  background-size: ","px ","px;\n"]);return R=function(){return n},n}function q(){var n=Object(s.a)(["\n  position: relative;\n  width: ","px;\n  height: ","px;\n  border: 1px solid orange;\n"]);return q=function(){return n},n}function A(){var n=Object(s.a)(["\n  position: absolute;\n  width: ","px;\n"]);return A=function(){return n},n}var G={height:50,width:40,rowLength:15,verticalLength:5},K=b.a.div(A(),G.width*G.rowLength+1),Q=b.a.div(q(),G.width*G.rowLength+1,G.height*G.verticalLength+1+G.height),U=b.a.div(R(),G.width*G.rowLength+1,G.height*G.verticalLength+1+G.height,G.width,G.height),V=b.a.div(H()),X=b.a.div(D()),Y=b.a.div(T()),Z=b.a.div(N());function $(){var n=Object(i.useState)(""),t=Object(u.a)(n,2),e=t[0],c=t[1],a=Object(i.useState)(""),o=Object(u.a)(a,2),s=o[0],j=o[1],h={boxesPerRow:G.rowLength,rowHeight:G.height,style:{height:"".concat(G.height,"px")}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P.a,{position:"static",children:Object(r.jsx)(E.a,{children:Object(r.jsx)(J.a,{variant:"h6",className:"classes.title",children:"\u30a2\u30ca\u30b0\u30e9\u30e0\u30a8\u30c7\u30a3\u30bf"})})}),Object(r.jsxs)(Z,{children:[Object(r.jsxs)(W.a,{maxWidth:"sm",children:[Object(r.jsx)(B.a,{onChange:function(n){j(n.target.value)},id:"theme_input",size:"medium",label:"\u304a\u984c",fullWidth:!0}),Object(r.jsx)(V,{children:Object(r.jsx)(M.a,{onClick:function(){c(s)},variant:"contained",color:"primary",children:"\u304a\u984c\u3092\u30dc\u30fc\u30c9\u306b\u30bb\u30c3\u30c8\u3059\u308b"})})]}),Object(r.jsx)(Y,{}),Object(r.jsx)(W.a,{maxWidth:"md",children:Object(r.jsx)(X,{children:Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{}),Object(r.jsx)(K,{children:Object(r.jsx)(z,{theme:e,panelConf:G,editorConf:h})})]})})})]})]})}var nn=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)($,{})})},tn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,136)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),c(n),a(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(nn,{})}),document.getElementById("root")),tn()}},[[93,1,2]]]);
//# sourceMappingURL=main.423568e8.chunk.js.map