(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,6,8],{147:function(e,t,a){"use strict";var c=a(10),r=a(2),n=a(3),s=a(4),o=a.n(s),i=a(0),l=a(6),b=a(1),d=["as","bsPrefix","className"],j=["className"];var u=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(n.a)(e,d);a=Object(l.b)(a,"col");var i=Object(l.a)(),b=[],j=[];return i.forEach((function(e){var t,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,r=n.order):t=n;var o="xs"!==e?"-".concat(e):"";t&&b.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&j.push("order".concat(o,"-").concat(r)),null!=c&&j.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(b,j))}),{as:t,bsPrefix:a,spans:b}]}(e),s=Object(c.a)(a,2),i=s[0],u=i.className,f=Object(n.a)(i,j),O=s[1],x=O.as,m=void 0===x?"div":x,v=O.bsPrefix,p=O.spans;return Object(b.jsx)(m,Object(r.a)(Object(r.a)({},f),{},{ref:t,className:o()(u,!p.length&&v)}))}));u.displayName="Col",t.a=u},148:function(e,t,a){"use strict";var c=a(2),r=a(3),n=a(4),s=a.n(n),o=a(0),i=a(6),l=a(25),b=a(64),d=a(1),j=["bsPrefix","className","variant","as"],u=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.variant,l=e.as,b=void 0===l?"img":l,u=Object(r.a)(e,j),f=Object(i.b)(a,"card-img");return Object(d.jsx)(b,Object(c.a)({ref:t,className:s()(o?"".concat(f,"-").concat(o):f,n)},u))}));u.displayName="CardImg";var f=u,O=a(65),x=["bsPrefix","className","as"],m=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,b=void 0===l?"div":l,j=Object(r.a)(e,x),u=Object(i.b)(a,"card-header"),f=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return Object(d.jsx)(O.a.Provider,{value:f,children:Object(d.jsx)(b,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s()(n,u)}))})}));m.displayName="CardHeader";var v=m,p=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(b.a)("h5"),y=Object(b.a)("h6"),g=Object(l.a)("card-body"),N=Object(l.a)("card-title",{Component:h}),S=Object(l.a)("card-subtitle",{Component:y}),P=Object(l.a)("card-link",{Component:"a"}),w=Object(l.a)("card-text",{Component:"p"}),C=Object(l.a)("card-footer"),k=Object(l.a)("card-img-overlay"),B=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.bg,l=e.text,b=e.border,j=e.body,u=e.children,f=e.as,O=void 0===f?"div":f,x=Object(r.a)(e,p),m=Object(i.b)(a,"card");return Object(d.jsx)(O,Object(c.a)(Object(c.a)({ref:t},x),{},{className:s()(n,m,o&&"bg-".concat(o),l&&"text-".concat(l),b&&"border-".concat(b)),children:j?Object(d.jsx)(g,{children:u}):u}))}));B.displayName="Card",B.defaultProps={body:!1};t.a=Object.assign(B,{Img:f,Title:N,Subtitle:S,Body:g,Link:P,Text:w,Header:v,Footer:C,ImgOverlay:k})},154:function(e,t,a){"use strict";var c=a(2),r=a(3),n=a(4),s=a.n(n),o=a(0),i=a(6),l=a(1),b=["bsPrefix","className","as"],d=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,j=Object(r.a)(e,b),u=Object(i.b)(a,"row"),f=Object(i.a)(),O="".concat(u,"-cols"),x=[];return f.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&x.push("".concat(O).concat(c,"-").concat(t))})),Object(l.jsx)(d,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s.a.apply(void 0,[n,u].concat(x))}))}));d.displayName="Row",t.a=d},164:function(e,t,a){"use strict";var c=a(2),r=a(10),n=a(3),s=a(4),o=a.n(s),i=a(0),l=a(38),b=a(6),d=a(1),j=["as","bsPrefix","variant","size","active","className"],u=i.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,i=e.variant,u=e.size,f=e.active,O=e.className,x=Object(n.a)(e,j),m=Object(b.b)(s,"btn"),v=Object(l.b)(Object(c.a)({tagName:a},x)),p=Object(r.a)(v,2),h=p[0],y=p[1].tagName;return Object(d.jsx)(y,Object(c.a)(Object(c.a)(Object(c.a)({},h),x),{},{ref:t,className:o()(O,m,f&&"active",i&&"".concat(m,"-").concat(i),u&&"".concat(m,"-").concat(u),x.href&&x.disabled&&"disabled")}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=u},87:function(e,t,a){"use strict";a.r(t);a(0),a(89);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},90:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(147),s=a(148),o=a(164),i=a(3),l=a(4),b=a.n(l),d=a(6),j=a(1),u=["bsPrefix","bg","pill","text","className","as"],f=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,n=e.pill,s=e.text,o=e.className,l=e.as,f=void 0===l?"span":l,O=Object(i.a)(e,u),x=Object(d.b)(a,"badge");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:t},O),{},{className:b()(o,x,n&&"rounded-pill",s&&"text-".concat(s),r&&"bg-".concat(r))}))}));f.displayName="Badge",f.defaultProps={bg:"primary",pill:!1};var O=f,x=a(18),m=a(169),v={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=function(e){var t,a,i=Object(r.useContext)(x.a),l=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(s.a,{style:Object(c.a)(Object(c.a)({},v.cardStyle),{},{backgroundColor:i.cardBackground,borderColor:i.cardBorderColor}),text:i.bsSecondaryVariant,children:[Object(j.jsx)(s.a.Img,{variant:"top",src:null===l||void 0===l?void 0:l.image}),Object(j.jsxs)(s.a.Body,{children:[Object(j.jsx)(s.a.Title,{style:v.cardTitleStyle,children:l.title}),Object(j.jsx)(s.a.Text,{style:v.cardTextStyle,children:(a=l.bodyText,Object(j.jsx)(m.a,{children:a}))})]}),Object(j.jsx)(s.a.Body,{children:null===l||void 0===l||null===(t=l.links)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(o.a,{style:v.buttonStyle,variant:"outline-"+i.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),l.tags&&Object(j.jsx)(s.a.Footer,{style:{backgroundColor:i.cardFooterBackground},children:l.tags.map((function(e){return Object(j.jsx)(O,{pill:!0,bg:i.bsSecondaryVariant,text:i.bsPrimaryVariant,style:v.badgeStyle,children:e},e)}))})]})})}},94:function(e,t,a){"use strict";a.r(t);var c=a(10),r=a(0),n=a(142),s=a(154),o=a(164),i=a(18),l=a(68),b=a.n(l),d=a(87),j=a(24),u=a(90),f=a(29),O=a(1),x={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};t.default=function(e){var t,a=Object(r.useContext)(i.a),l=e.header,m=Object(r.useState)(null),v=Object(c.a)(m,2),p=v[0],h=v[1],y=Object(r.useState)(!1),g=Object(c.a)(y,2),N=g[0],S=g[1];Object(r.useEffect)((function(){fetch(j.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return e}))}),[]);var P=N&&p?p.length:6;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.default,{title:l}),p?Object(O.jsx)("div",{className:"section-content-container",children:Object(O.jsxs)(n.a,{style:x.containerStyle,children:[Object(O.jsx)(s.a,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=p.projects)||void 0===t?void 0:t.slice(0,P).map((function(e){return Object(O.jsx)(b.a,{children:Object(O.jsx)(u.default,{project:e})},e.title)}))}),!N&&Object(O.jsx)(o.a,{style:x.showMoreStyle,variant:a.bsSecondaryVariant,onClick:function(){return S(!0)},children:"show more"})]})}):Object(O.jsx)(f.default,{})]})}}}]);
//# sourceMappingURL=2.dabf1fa9.chunk.js.map