(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"336r":function(e,t,a){e.exports={login:"antd-pro-pages-user-login-components-login-index-login",getCaptcha:"antd-pro-pages-user-login-components-login-index-getCaptcha",icon:"antd-pro-pages-user-login-components-login-index-icon",other:"antd-pro-pages-user-login-components-login-index-other",register:"antd-pro-pages-user-login-components-login-index-register",prefixIcon:"antd-pro-pages-user-login-components-login-index-prefixIcon",submit:"antd-pro-pages-user-login-components-login-index-submit"}},"3T1H":function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("sRBo");var l=r(a("kaz8")),u=r(a("p0pE")),o=r(a("qIgq"));a("fOrg");var s=r(a("+KLJ")),c=a("RBnf"),i=n(a("q1tI")),d=a("ArA+"),f=a("Hg0r"),m=r(a("d40l")),p=r(a("U2lG")),g=p.default.Tab,v=p.default.UserName,b=p.default.Password,h=p.default.Mobile,E=p.default.Captcha,y=p.default.Submit,C=function(e){var t=e.content;return i.default.createElement(s.default,{style:{marginBottom:24},message:t,type:"error",showIcon:!0})},T=function(e){var t=e.userLogin,a=void 0===t?{}:t,n=e.submitting,r=a.status,s=a.type,f=(0,i.useState)(!0),T=(0,o.default)(f,2),x=T[0],w=T[1],N=(0,i.useState)("account"),P=(0,o.default)(N,2),q=P[0],I=P[1],O=function(t){var a=e.dispatch;a({type:"login/login",payload:(0,u.default)({},t,{type:q})})};return i.default.createElement("div",{className:m.default.main},i.default.createElement(p.default,{activeKey:q,onTabChange:I,onSubmit:O},i.default.createElement(g,{key:"account",tab:"\u8d26\u6237\u5bc6\u7801\u767b\u5f55"},"error"===r&&"account"===s&&!n&&i.default.createElement(C,{content:"\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef\uff08admin/ant.design\uff09"}),i.default.createElement(v,{name:"userName",placeholder:"\u7528\u6237\u540d: admin or user",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]}),i.default.createElement(b,{name:"password",placeholder:"\u5bc6\u7801: ant.design",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"}]})),i.default.createElement(g,{key:"mobile",tab:"\u624b\u673a\u53f7\u767b\u5f55"},"error"===r&&"mobile"===s&&!n&&i.default.createElement(C,{content:"\u9a8c\u8bc1\u7801\u9519\u8bef"}),i.default.createElement(h,{name:"mobile",placeholder:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^1\d{10}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]}),i.default.createElement(E,{name:"captcha",placeholder:"\u9a8c\u8bc1\u7801",countDown:120,getCaptchaButtonText:"",getCaptchaSecondText:"\u79d2",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})),i.default.createElement("div",null,i.default.createElement(l.default,{checked:x,onChange:function(e){return w(e.target.checked)}},"\u81ea\u52a8\u767b\u5f55"),i.default.createElement("a",{style:{float:"right"}},"\u5fd8\u8bb0\u5bc6\u7801")),i.default.createElement(y,{loading:n},"\u767b\u5f55"),i.default.createElement("div",{className:m.default.other},"\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f",i.default.createElement(c.AlipayCircleOutlined,{className:m.default.icon}),i.default.createElement(c.TaobaoCircleOutlined,{className:m.default.icon}),i.default.createElement(c.WeiboCircleOutlined,{className:m.default.icon}),i.default.createElement(d.Link,{className:m.default.register,to:"/user/register"},"\u6ce8\u518c\u8d26\u6237"))))},x=(0,f.connect)(function(e){var t=e.login,a=e.loading;return{userLogin:t,submitting:a.effects["login/login"]}})(T);t.default=x},D4xa:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("RBnf"),l=n(a("q1tI")),u=n(a("336r")),o={UserName:{props:{size:"large",id:"userName",prefix:l.default.createElement(r.UserOutlined,{style:{color:"#1890ff"},className:u.default.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:l.default.createElement(r.LockTwoTone,{className:u.default.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:l.default.createElement(r.MobileTwoTone,{className:u.default.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:l.default.createElement(r.MailTwoTone,{className:u.default.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}};t.default=o},KTBR:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=n(a("2/Rp")),l=n(a("Y/ft"));a("y8nQ");var u=n(a("Vl3Y")),o=n(a("q1tI")),s=n(a("TSYQ")),c=n(a("336r")),i=u.default.Item,d=function(e){var t=e.className,a=(0,l.default)(e,["className"]),n=(0,s.default)(c.default.submit,t);return o.default.createElement(i,null,o.default.createElement(r.default,Object.assign({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},f=d;t.default=f},U2lG:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Znn+");var l=r(a("ZTPi"));a("y8nQ");var u=r(a("Vl3Y")),o=r(a("gWZ8")),s=r(a("qIgq")),c=n(a("q1tI")),i=r(a("yUgw")),d=r(a("TSYQ")),f=r(a("booR")),m=r(a("ana9")),p=r(a("KTBR")),g=r(a("aGQT")),v=r(a("336r")),b=function(e){var t=e.className,a=(0,c.useState)([]),n=(0,s.default)(a,2),r=n[0],m=n[1],p=(0,c.useState)(),g=(0,s.default)(p,2),b=g[0],h=g[1],E=(0,i.default)("",{value:e.activeKey,onChange:e.onTabChange}),y=(0,s.default)(E,2),C=y[0],T=y[1],x=[],w=[];return c.default.Children.forEach(e.children,function(e){e&&("LoginTab"===e.type.typeName?x.push(e):w.push(e))}),c.default.createElement(f.default.Provider,{value:{tabUtil:{addTab:function(e){m([].concat((0,o.default)(r),[e]))},removeTab:function(e){m(r.filter(function(t){return t!==e}))}},updateActive:function(e){b[C]?b[C].push(e):b[C]=[e],h(b)}}},c.default.createElement("div",{className:(0,d.default)(t,v.default.login)},c.default.createElement(u.default,{form:e.from,onFinish:function(t){e.onSubmit&&e.onSubmit(t)}},r.length?c.default.createElement(c.default.Fragment,null,c.default.createElement(l.default,{animated:!1,className:v.default.tabs,activeKey:C,onChange:function(e){T(e)}},x),w):e.children)))};b.Tab=g.default,b.Submit=p.default,b.UserName=m.default.UserName,b.Password=m.default.Password,b.Mobile=m.default.Mobile,b.Captcha=m.default.Captcha;var h=b;t.default=h},aGQT:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Znn+");var l=r(a("ZTPi")),u=n(a("q1tI")),o=r(a("booR")),s=l.default.TabPane,c=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),i=function(e){(0,u.useEffect)(function(){var t=c("login-tab-"),a=e.tabUtil;a&&a.addTab(t)},[]);var t=e.children;return u.default.createElement(s,Object.assign({},e),t)},d=function(e){return u.default.createElement(o.default.Consumer,null,function(t){return u.default.createElement(i,Object.assign({tabUtil:t.tabUtil},e))})};d.typeName="LoginTab";var f=d;t.default=f},ana9:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l=r(a("2/Rp"));a("5NDa");var u=r(a("5rEg"));a("jCWc");var o=r(a("kPKH"));a("14J3");var s=r(a("BMrR")),c=r(a("d6i3"));a("miYZ");var i=r(a("tsqr")),d=r(a("1l/V")),f=r(a("Y/ft")),m=r(a("qIgq"));a("y8nQ");var p=r(a("Vl3Y")),g=n(a("q1tI")),v=r(a("BGR+")),b=r(a("D4xa")),h=r(a("booR")),E=r(a("336r")),y=a("63rs"),C=p.default.Item,T=function(e){var t=e.onChange,a=e.defaultValue,n=e.customProps,r=void 0===n?{}:n,l=e.rules,u={rules:l||r.rules};return t&&(u.onChange=t),a&&(u.initialValue=a),u},x=function(e){var t=(0,g.useState)(e.countDown||0),a=(0,m.default)(t,2),n=a[0],r=a[1],p=(0,g.useState)(!1),b=(0,m.default)(p,2),h=b[0],x=b[1],w=(e.onChange,e.customProps),N=(e.defaultValue,e.rules,e.name),P=(e.getCaptchaButtonText,e.getCaptchaSecondText,e.updateActive,e.type),q=(e.tabUtil,(0,f.default)(e,["onChange","customProps","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type","tabUtil"])),I=(0,g.useCallback)(function(){var e=(0,d.default)(c.default.mark(function e(t){var a;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,y.getFakeCaptcha)(t);case 2:if(a=e.sent,!1!==a){e.next=5;break}return e.abrupt("return");case 5:i.default.success("\u83b7\u53d6\u9a8c\u8bc1\u7801\u6210\u529f\uff01\u9a8c\u8bc1\u7801\u4e3a\uff1a1234"),x(!0);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]);if((0,g.useEffect)(function(){var t=0,a=e.countDown;return h&&(t=window.setInterval(function(){r(function(e){return e<=1?(x(!1),clearInterval(t),a||60):e-1})},1e3)),function(){return clearInterval(t)}},[h]),!N)return null;var O=T(e),j=q||{};if("Captcha"===P){var k=(0,v.default)(j,["onGetCaptcha","countDown"]);return g.default.createElement(C,{shouldUpdate:!0},function(e){var t=e.getFieldValue;return g.default.createElement(s.default,{gutter:8},g.default.createElement(o.default,{span:16},g.default.createElement(C,Object.assign({name:N},O),g.default.createElement(u.default,Object.assign({},w,k)))),g.default.createElement(o.default,{span:8},g.default.createElement(l.default,{disabled:h,className:E.default.getCaptcha,size:"large",onClick:function(){var e=t("mobile");I(e)}},h?"".concat(n," \u79d2"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))})}return g.default.createElement(C,Object.assign({name:N},O),g.default.createElement(u.default,Object.assign({},w,j)))},w={};Object.keys(b.default).forEach(function(e){var t=b.default[e];w[e]=function(a){return g.default.createElement(h.default.Consumer,null,function(n){return g.default.createElement(x,Object.assign({customProps:t.props,rules:t.rules},a,{type:e},n,{updateActive:n.updateActive}))})}});var N=w;t.default=N},booR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),r=(0,n.createContext)({}),l=r;t.default=l},d40l:function(e,t,a){e.exports={main:"antd-pro-pages-user-login-style-main",icon:"antd-pro-pages-user-login-style-icon",other:"antd-pro-pages-user-login-style-other",register:"antd-pro-pages-user-login-style-register"}}}]);