(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{308:function(t,s,o){},309:function(t,s,o){},320:function(t,s,o){"use strict";var e=o(308);o.n(e).a},321:function(t,s,o){"use strict";var e=o(309);o.n(e).a},329:function(t,s,o){"use strict";var e=o(297),c=o(298);let a=class extends c.e{mounted(){this.$children.forEach(t=>{t.gutter=this.gutter})}get alignStyle(){const{stay:t}=this;return[t&&"align-"+t]}get rowStyle(){const{gutter:t}=this;if(t)return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}}};Object(e.a)([Object(c.c)(String)],a.prototype,"gutter",void 0),Object(e.a)([Object(c.c)({type:String,validator:t=>["left","right","center"].indexOf(t)>=0})],a.prototype,"stay",void 0),a=Object(e.a)([c.a],a);var n=a,l=(o(320),o(41)),i=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wrapper",class:this.alignStyle,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"c1f7318c",null);s.a=i.exports},330:function(t,s,o){"use strict";var e=o(297),c=o(298);let a=class extends c.e{constructor(){super(...arguments),this.gutter=0}get colStyle(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}get colClass(){const{span:t,offset:s,ipad:o,narrowPc:e,pc:c,widePc:a}=this;return[...this.createClass({span:t,offset:s}),...this.createClass(o,"ipad-"),...this.createClass(e,"narrowPc-"),...this.createClass(c,"pc-"),...this.createClass(a,"widePc-")]}createClass(t,s=""){if(!t)return[];const o=[];return t.span&&o.push(`col-${s}${t.span}`),t.offset&&o.push(`offset-${s}${t.offset}`),o}};Object(e.a)([Object(c.c)(String)],a.prototype,"span",void 0),Object(e.a)([Object(c.c)(String)],a.prototype,"offset",void 0),Object(e.a)([Object(c.c)({type:Object})],a.prototype,"ipad",void 0),Object(e.a)([Object(c.c)(Object)],a.prototype,"narrowPc",void 0),Object(e.a)([Object(c.c)(Object)],a.prototype,"pc",void 0),Object(e.a)([Object(c.c)(Object)],a.prototype,"widePc",void 0),a=Object(e.a)([c.a],a);var n=a,l=(o(321),o(41)),i=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wrapper",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"6e7e7813",null);s.a=i.exports},370:function(t,s,o){},426:function(t,s,o){"use strict";var e=o(370);o.n(e).a},449:function(t,s,o){"use strict";o.r(s);var e=o(297),c=o(298),a=o(329),n=o(330);let l=class extends c.e{constructor(){super(...arguments),this.show=!1,this.content='\n     <g-row class="demoRow" gutter="10">\n              <g-col span="8">\n                  <div class="demoCol">33.3%</div>\n              </g-col>\n              <g-col span="8" offset="8">\n                  <div class="demoCol">33.3%</div>\n              </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n              <g-col span="6" offset="6">\n                  <div class="demoCol">25%</div>\n              </g-col>\n              <g-col span="6" offset="6">\n                  <div class="demoCol">25%</div>\n              </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n              <g-col span="4">\n                  <div class="demoCol">16.6%</div>\n              </g-col>\n              <g-col span="4" offset="4">\n                  <div class="demoCol">16.6%</div>\n              </g-col>\n              <g-col span="4" offset="8">\n                  <div class="demoCol">16.6%</div>\n              </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n              <g-col span="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n              <g-col span="2" offset="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n              <g-col span="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n              <g-col span="2" offset="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n              <g-col span="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n              <g-col span="2" offset="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n              <g-col span="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n              <g-col span="2" offset="2">\n                  <div class="demoCol">8.33%</div>\n              </g-col>\n          </g-row>\n  '}};l=Object(e.a)([Object(c.a)({components:{"g-row":a.a,"g-col":n.a}})],l);var i=l,r=(o(426),o(41)),d=Object(r.a)(i,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("div",[o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demoCol",staticStyle:{background:"#49b9ed",color:"white"}},[t._v("33.3%")])]),t._v(" "),o("g-col",{attrs:{span:"8",offset:"8"}},[o("div",{staticClass:"demoCol",staticStyle:{background:"#49b9ed",color:"white"}},[t._v("33.3%")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol",staticStyle:{background:"#f5f5f5",color:"black"}},[t._v("25%")])]),t._v(" "),o("g-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol",staticStyle:{background:"#f5f5f5",color:"black"}},[t._v("25%")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"4"}},[o("div",{staticClass:"demoCol",staticStyle:{background:"#f5f5f5",color:"black"}},[t._v("16.6%")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"4"}},[o("div",{staticClass:"demoCol",staticStyle:{background:"#49b9ed",color:"white"}},[t._v("16.6%")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"8"}},[o("div",{staticClass:"demoCol",staticStyle:{background:"#f5f5f5",color:"black"}},[t._v("16.6%")])])],1)],1),t._v(" "),o("div",{staticClass:"codeWrapper",on:{click:function(s){t.show=!t.show}}},[o("div",{staticClass:"text"},[t._v("点击展开代码")]),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.show?o("pre",[t._v("            "),o("code",[t._v(t._s(t.content))]),t._v("\n        ")]):t._e()])],1)])}),[],!1,null,"f8e98408",null);s.default=d.exports}}]);