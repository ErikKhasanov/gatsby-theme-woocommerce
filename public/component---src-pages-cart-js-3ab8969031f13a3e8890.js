(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,e,r){"use strict";r.r(e);r(28),r(206),r(217),r(16);var a=r(9),n=r(0),i=(r(198),r(204)),o=r(202),c=r(208);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}var u=function(t){var e=t.id,r=t.name,n=t.price,i=t.qty,o=t.removeItem;return Object(a.a)("li",{css:p},Object(a.a)("h4",null,r),Object(a.a)("div",null),Object(a.a)("span",null,Object(a.a)(c.a,{price:n}))," ","x ",Object(a.a)("span",null,i)," ="," ",Object(a.a)("span",null,Object(a.a)(c.a,{price:n*i})),Object(a.a)("label",{className:"removeItem",href:"",onClick:function(){return o(e)}},"Remove"))},l={name:"qbubgm",styles:"margin-left:0;"},p={name:"ek7787",styles:"margin-bottom:30px;list-style:none;font-size:0.9rem;.removeItem{margin-left:2rem;color:grey;text-decoration:underline;cursor:pointer;}h4{margin-bottom:0.5rem;font-size:20px;color:hsl(270,50%,40%);}"};e.default=function(){var t=Object(n.useState)([]),e=t[0],r=t[1];function p(t){var a=e.filter(function(e){return e.id!=t});localStorage.setItem("cart",JSON.stringify(a)),r(a)}Object(n.useEffect)(function(){var t=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):null;null!=t&&r(t)},[]);var f=0;return Object(a.a)(i.a,null,Object(a.a)(o.a,{title:"Cart"}),Object(a.a)("h1",null,"Cart"),Object(a.a)("ul",{css:l},e.map(function(t){return f+=Number.parseInt(t.price)*t.qty,Object(a.a)(u,s({key:t.id},t,{removeItem:p}))})),Object(a.a)("hr",null),Object(a.a)("p",null,"Total: ",Object(a.a)(c.a,{price:f})))}},198:function(t,e,r){"use strict";r(9);var a=r(0),n=r.n(a),i=r(72),o=r.n(i);r.d(e,"a",function(){return o.a});r(199),r(11).default.enqueue,n.a.createContext({})},199:function(t,e,r){var a;t.exports=(a=r(200))&&a.default||a},200:function(t,e,r){"use strict";r.r(e);r(28);var a=r(0),n=r.n(a),i=r(98);e.default=function(t){var e=t.location,r=t.pageResources;return r?n.a.createElement(i.a,Object.assign({location:e,pageResources:r},r.json)):null}},201:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Woocommerce"}}}}},202:function(t,e,r){"use strict";var a=r(9),n=r(203),i=(r(0),r(207)),o=r.n(i);function c(t){var e=t.description,r=t.lang,i=t.meta,c=t.title,s=n.data.site,u=e||s.siteMetadata.description;return Object(a.a)(o.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},203:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Woocommerce",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},204:function(t,e,r){"use strict";var a=r(9),n=r(201),i=r(0),o=r.n(i),c=r(198),s={name:"u75iao",styles:"text-decoration:none;color:#ffff;margin-bottom:0;"},u=function(t){var e=t.siteTitle;return Object(a.a)("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},Object(a.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"space-between"}},Object(a.a)("h1",{style:{margin:0}},Object(a.a)(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},e)),Object(a.a)(c.a,{to:"cart",css:s},"View Cart")))};u.defaultProps={siteTitle:""};var l=u;r(205),e.a=function(t){var e=t.children,r=n.data;return Object(a.a)(o.a.Fragment,null,Object(a.a)(l,{siteTitle:r.site.siteMetadata.title}),Object(a.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},Object(a.a)("main",null,e),Object(a.a)("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",Object(a.a)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," and"," ",Object(a.a)("a",{href:"https://wordpress.com"},"WordPress"))))}},206:function(t,e,r){"use strict";var a=r(4),n=r(21),i=r(36),o=r(100),c=r(73),s=r(7),u=r(74).f,l=r(99).f,p=r(10).f,f=r(137).trim,m=a.Number,b=m,d=m.prototype,g="Number"==i(r(56)(d)),v="trim"in String.prototype,h=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var r,a,n,i=(e=v?e.trim():f(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var o,s=e.slice(2),u=0,l=s.length;u<l;u++)if((o=s.charCodeAt(u))<48||o>n)return NaN;return parseInt(s,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof m&&(g?s(function(){d.valueOf.call(r)}):"Number"!=i(r))?o(new b(h(e)),r,m):h(e)};for(var O,j=r(8)?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;j.length>y;y++)n(b,O=j[y])&&!n(m,O)&&p(m,O,l(b,O));m.prototype=d,d.constructor=m,r(13)(a,"Number",m)}},208:function(t,e,r){"use strict";r(206),r(209);var a=r(9),n=r(0),i=r.n(n);e.a=function(t){var e=t.price,r=Number.parseFloat(e).toLocaleString("en-US",{style:"currency",currency:"USD"});return Object(a.a)(i.a.Fragment,null,r)}},209:function(t,e,r){var a=r(1),n=r(210);a(a.S+a.F*(Number.parseFloat!=n),"Number",{parseFloat:n})},210:function(t,e,r){var a=r(4).parseFloat,n=r(137).trim;t.exports=1/a(r(138)+"-0")!=-1/0?function(t){var e=n(String(t),3),r=a(e);return 0===r&&"-"==e.charAt(0)?-0:r}:a},217:function(t,e,r){var a=r(1),n=r(218);a(a.S+a.F*(Number.parseInt!=n),"Number",{parseInt:n})},218:function(t,e,r){var a=r(4).parseInt,n=r(137).trim,i=r(138),o=/^[-+]?0[xX]/;t.exports=8!==a(i+"08")||22!==a(i+"0x16")?function(t,e){var r=n(String(t),3);return a(r,e>>>0||(o.test(r)?16:10))}:a}}]);
//# sourceMappingURL=component---src-pages-cart-js-3ab8969031f13a3e8890.js.map