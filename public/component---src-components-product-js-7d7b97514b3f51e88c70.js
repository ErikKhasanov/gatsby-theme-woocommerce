(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(e,t,a){"use strict";a.r(t);a(218),a(20);var r=a(1),i=a(0),n=a.n(i),s=a(210),o=a(220),d=a.n(o),l=a(209);a(211),a(81),a(149),a(42),a(6),a(50),a(43),a(15),a(83);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(e){return Object(r.a)(n.a.Fragment,null,Object(r.a)("button",{onClick:function(t){return function(e,t){void 0===t&&(t=1);var a=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],r=!1;a.map(function(a){return a.id==e.id&&(a.qty+=t,r=!0),a}),r||(e.qty=t,a=[].concat(c(a),[e])),localStorage.setItem("cart",JSON.stringify(a))}(e.product)}},"Add to Cart"))};a(150);a.d(t,"query",function(){return f});var f="1995894378",g={name:"ovwgyn",styles:"margin-left:15px;"},p=function(e){var t=e.id,a=e.name,i=e.price;e.description;return Object(r.a)("div",{css:g},Object(r.a)("h2",null,a),Object(r.a)("p",null,"Price: ",i),Object(r.a)(u,{product:{id:t,name:a,price:i}}))},m={name:"mqdt3k",styles:'display:flex;justify-content:"space-between";'},h={name:"1eqj4ew",styles:"color:grey;margin-top:5px;"};t.default=function(e){var t=e.data.wpgraphql.product;return Object(r.a)(s.a,null,Object(r.a)(l.a,{title:t.name}),Object(r.a)("div",{css:m},Object(r.a)(d.a,{fixed:t.imageFile.childImageSharp.fixed}),Object(r.a)(p,{id:t.id,description:t.description,price:t.price,name:t.name})),Object(r.a)("h4",null,"Product Description:"),Object(r.a)("div",{css:h,dangerouslySetInnerHTML:{__html:t.description}}))}},218:function(e,t,a){"use strict";a(219)("fixed",function(e){return function(){return e(this,"tt","","")}})},219:function(e,t,a){var r=a(2),i=a(10),n=a(41),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},220:function(e,t,a){"use strict";a(15),a(16),a(6),a(81),a(108),a(218);var r=a(23);t.__esModule=!0,t.default=void 0;var i,n=r(a(82)),s=r(a(48)),o=r(a(147)),d=r(a(148)),l=r(a(0)),c=r(a(49)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function O(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)}).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(R,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},R=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:V?1:0,transition:z?"opacity "+b+"ms":"none"},o),x="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&T,{},o,{},f),q={title:t,alt:this.state.isVisible?"":a,style:k,className:g};if(p){var N=p,P=N[0];return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&T)}),P.base64&&l.default.createElement(j,{src:P.base64,spreadProps:q,imageVariants:N,generateSources:O}),P.tracedSVG&&l.default.createElement(j,{src:P.tracedSVG,spreadProps:q,imageVariants:N,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(N),l.default.createElement(R,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:E},P,{imageVariants:N}))}}))}if(m){var M=m,W=M[0],F=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete F.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},x&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:x,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},z&&T)}),W.base64&&l.default.createElement(j,{src:W.base64,spreadProps:q,imageVariants:M,generateSources:O}),W.tracedSVG&&l.default.createElement(j,{src:W.tracedSVG,spreadProps:q,imageVariants:M,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(M),l.default.createElement(R,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:E},W,{imageVariants:M}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:z,sizes:C,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=V;t.default=x}}]);
//# sourceMappingURL=component---src-components-product-js-7d7b97514b3f51e88c70.js.map