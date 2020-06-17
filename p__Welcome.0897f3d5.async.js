(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"B/i9":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("2Taf")),o=n(a("vZ4D")),l=a("c+yx"),u=function(){function e(t,a){(0,r.default)(this,e),this._map={log:0,warn:1,error:2},this.name=t,this.level=(null===a||void 0===a?void 0:a.level)||"warn",this.disabled=(null===a||void 0===a?void 0:a.disabled)||!1,this._prefix="".concat(this.name)}return(0,o.default)(e,[{key:"_canPrint",value:function(e){return!(0,l.isProductionEnv)()||this._map[this.level]<=(this._map[e]||2)}},{key:"_print",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"log";return function(a){var n;if(!e.disabled&&e._canPrint(t)){for(var r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];(n=console)[t].apply(n,["%c[".concat(e._prefix,"] %c").concat(a),"font-weight: bolder","font-weight: normal"].concat(o))}}}},{key:"log",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];this._print("log").apply(void 0,[e].concat(a))}},{key:"warn",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];this._print("warn").apply(void 0,[e].concat(a))}},{key:"error",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];this._print("error").apply(void 0,[e].concat(a))}}]),e}();t.default=u},P94o:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.useConsole=void 0;var r=a("q1tI"),o=n(a("B/i9")),l=new o.default("useConsole"),u=function(e){l.log("render ".concat(e)),(0,r.useEffect)(function(){return l.log("mounted ".concat(e)),function(){l.log("will unmount ".concat(e))}},[])};t.useConsole=u},RyC9:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("fOrg");var r=n(a("+KLJ"));a("IzEo");var o=n(a("bx4M"));a("tU7J");var l=n(a("wFql")),u=n(a("q1tI")),i=a("Hx5s"),c=a("r7Er"),d=n(a("iUf1")),f=function(e){var t=e.children;return u.default.createElement("pre",{className:d.default.pre},u.default.createElement("code",null,u.default.createElement(l.default.Text,{copyable:!0},t)))},s=(0,c.withRouteTab)(function(){return u.default.createElement(i.PageHeaderWrapper,null,u.default.createElement(o.default,null,u.default.createElement(r.default,{message:"umi ui \u73b0\u5df2\u53d1\u5e03\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2 umi \u56fe\u6807\u5373\u53ef\u4f7f\u7528",type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),u.default.createElement(l.default.Text,{strong:!0},u.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pro.ant.design/docs/block"},"\u57fa\u4e8e block \u5f00\u53d1\uff0c\u5feb\u901f\u6784\u5efa\u6807\u51c6\u9875\u9762")),u.default.createElement(f,null," npm run ui"),u.default.createElement(l.default.Text,{strong:!0,style:{marginBottom:12}},u.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pro.ant.design/docs/available-script#npm-run-fetchblocks"},"\u83b7\u53d6\u5168\u90e8\u533a\u5757")),u.default.createElement(f,null," npm run fetch:blocks")),u.default.createElement("p",{style:{textAlign:"center",marginTop:24}},"Want to add more pages? Please refer to"," ",u.default.createElement("a",{href:"https://pro.ant.design/docs/block-cn",target:"_blank",rel:"noopener noreferrer"},"use block"),"\u3002"))});t.default=s},iUf1:function(e,t,a){e.exports={pre:"antd-pro-pages-welcome-pre"}},r7Er:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getPathnameMetadata=y,t.getParams=w,t.getActiveTabInfo=E,t.routeTo=_,t.withRouteTab=x,t.routePagePropsAreEqual=void 0;var r=n(a("Y/ft")),o=n(a("p0pE")),l=n(a("qIgq")),u=n(a("q1tI")),i=n(a("J2m7")),c=n(a("Y+p1")),d=n(a("noZS")),f=n(a("3a4m")),s=n(a("Wwog")),p=n(a("kSAN")),h=n(a("bALw")),m=a("CxXe"),v=a("P94o"),g=n(a("B/i9"));function y(e,t){function a(t,n){var r=null,o=(0,i.default)(t,function(t){return(0,h.default)("".concat(t.path,"(.*)")).test(e)&&!!t.name});return(!n&&o||n&&!n.component&&o)&&(r=[o.path,o.name,o]),(null===n||void 0===n?void 0:n.hideChildrenInMenu)&&o&&(r=[n.path,o.name,o]),Array.isArray(null===o||void 0===o?void 0:o.children)&&(null===o||void 0===o?void 0:o.children.length)&&(r=a(o.children,o)||r),r}return a(t,null)||["404","Error",void 0]}var b=(0,s.default)(y,c.default);function w(e,t){var a=(0,m.matchPath)(t,e)||{},n=a.params;return n||{}}function E(e){function t(t,a,n){var r=b(e.pathname,a),u=(0,l.default)(r,3),i=u[0],c=u[1],f=u[2];if("route"===t)return{id:i,title:c,item:f};var s=w(i,e.pathname),h=e.query,m=e.state,v=void 0===m?{}:m,g=(0,p.default)(JSON.stringify((0,o.default)({},s,(0,d.default)(h,String),v)));return{id:i,hash:g,title:(null===n||void 0===n?void 0:n({path:i,locale:c,params:s,location:e}))||c,item:f}}return t}function _(e){f.default.push(e)}var P=new g.default("PropsAreEqual"),k=function(e,t){e.children,e.computedMatch,e.history;var a=e.location,n=(e.match,e.route,e.staticContext,(0,r.default)(e,["children","computedMatch","history","location","match","route","staticContext"])),o=(t.children,t.computedMatch,t.history,t.location),l=(t.match,t.route,t.staticContext,(0,r.default)(t,["children","computedMatch","history","location","match","route","staticContext"]));if(!(0,c.default)(n,l))return P.log("".concat(a.pathname,": update by props")),!1;var u=a||{},i=u.pathname,d=u.search,f=u.state,s=o||{},p=s.pathname,h=s.search,m=s.state,v=i!==p||d!==h||!(0,c.default)(f,m);return v?(P.log("".concat(a.pathname," -> ").concat(p,": update by route or params")),!1):(P.log("without re-render: ".concat(i)),!0)};function x(e){var t=u.default.memo(function(t){return(0,v.useConsole)(t.location.pathname),u.default.createElement(e,Object.assign({},t))},k);return t.displayName="WithRoutePage(".concat(A(e),")"),t}function A(e){return e.displayName||e.name||"Component"}t.routePagePropsAreEqual=k}}]);