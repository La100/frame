(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{8528:function(t,e,r){"use strict";r.d(e,{Z:function(){return p}});var a=r(9499),n=r(4730),i=r(6423);r(7294);var o=r(6726),c=r.n(o),s=r(5893),l=function(t){var e=t.children,r=t.className,a=t.width,n=t.height,o=t.src,l=t.alt,u=t.srcSet,d=t.sizes,h=t.dangerouslySetInnerHTML,m=new i.Z(c().image);return m.addIf(r,r),(0,s.jsxs)("figure",{className:m.toString(),children:[(0,s.jsx)("div",{className:c().featuredImageImg,children:(0,s.jsx)("img",{width:void 0===a?"100%":a,height:void 0===n?"auto":n,src:o,alt:l||"",srcSet:u,sizes:d})}),e&&(0,s.jsx)("figcaption",{children:e}),h&&(0,s.jsx)("figcaption",{dangerouslySetInnerHTML:{__html:h}})]})},u=r(5665),d=r.n(u),h=["className","alt"];function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}var p=function(t){var e=t.className,r=t.alt,o=(0,n.Z)(t,h),c=new i.Z(d().featuredImage);return c.addIf(e,e),(0,s.jsx)(l,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach(function(e){(0,a.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({className:c,alt:r},o))}},496:function(t,e,r){"use strict";r.d(e,{Z:function(){return p}});var a=r(1664),n=r.n(a),i=r(5706),o=r(7979),c=r(8470),s=r(6423),l=r(9583),u=r(8607),d=r.n(u),h=r(5893),m={compactCategories:!0},p=function(t){var e=t.className,r=t.author,a=t.date,u=t.categories,p=t.options,f=t.isSticky,g=new s.Z(d().metadata);g.addIf(e,e);var v=(void 0===p?m:p).compactCategories;return(0,h.jsxs)("ul",{className:g.toString(),children:[r&&(0,h.jsx)("li",{className:d().metadataAuthor,children:(0,h.jsxs)("address",{children:[r.avatar&&(0,h.jsx)("img",{width:r.avatar.width,height:r.avatar.height,src:r.avatar.url,alt:"Author Avatar"}),"By"," ",(0,h.jsx)(n(),{href:(0,o.h$)(r.name),rel:"author",children:r.name})]})}),a&&(0,h.jsx)("li",{children:(0,h.jsx)("time",{pubdate:"pubdate",dateTime:a,children:(0,c.p)(a)})}),Array.isArray(u)&&u[0]&&(0,h.jsxs)("li",{className:d().metadataCategories,children:[v&&(0,h.jsx)("p",{title:u.map(function(t){return t.name}).join(", "),children:(0,h.jsx)(n(),{href:(0,i.I5)(u[0].slug),children:u[0].name})}),!v&&(0,h.jsx)("ul",{children:u.map(function(t){return(0,h.jsx)("li",{children:(0,h.jsx)(n(),{href:(0,i.I5)(t.slug),children:t.name})},t.slug)})})]}),void 0!==f&&f&&(0,h.jsx)("li",{className:d().metadataSticky,children:(0,h.jsx)(l.ekl,{"aria-label":"Sticky Post"})})]})}},6314:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var a=r(7294),n=r(1163),i=r(5792),o=r(7108);function c(t){var e=t.metadata,r=(0,a.useContext)(i.DN),c=r.homepage,s=r.metadata,l=(0,n.useRouter)();return{metadata:(0,o.z0)(s,e,{homepage:c,router:l})}}},4166:function(t,e,r){"use strict";r.d(e,{PA:function(){return u},Yh:function(){return d},dX:function(){return l}});var a=r(4593),n=r(7979),i=r(1272),o=r(6686),c=r(4147),s=r(5893);function l(t){var e=t.post,r=void 0===e?{}:e,n=t.siteTitle,o=c.Xh,l=void 0===o?"":o,u=c.faviconPath,d=r.title,h=r.slug,m=r.excerpt,p=r.date,f=r.author,g=r.categories,v=r.modified,y=r.featuredImage,j=(0,i.F3)(h),x=!!p&&new Date(p),O=!!v&&new Date(v),b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"".concat(l).concat(j)},headline:d,image:[null==y?void 0:y.sourceUrl],datePublished:x?x.toISOString():"",dateModified:O?O.toISOString():x.toISOString(),description:m,keywords:[g.map(function(t){var e=t.name;return"".concat(e)}).join(", ")],copyrightYear:x?x.getFullYear():"",author:{"@type":"Person",name:null==f?void 0:f.name},publisher:{"@type":"Organization",name:void 0===n?"":n,logo:{"@type":"ImageObject",url:"".concat(l).concat(void 0===u?"/favicon.ico":u)}}};return(0,s.jsx)(a.q,{encodeSpecialCharacters:!1,children:(0,s.jsx)("script",{type:"application/ld+json",children:JSON.stringify(b)})})}function u(t){var e=t.title,r=t.description,n=t.siteTitle,i=t.slug,l=c.Xh,u=(0,o.yA)(void 0===i?"":i),d={"@context":"http://schema.org","@type":"WebPage",name:void 0===e?"":e,description:void 0===r?"":r,url:"".concat(void 0===l?"":l).concat(u),publisher:{"@type":"ProfilePage",name:void 0===n?"":n}};return(0,s.jsx)(a.q,{encodeSpecialCharacters:!1,children:(0,s.jsx)("script",{type:"application/ld+json",children:JSON.stringify(d)})})}function d(t){var e=t.author,r=void 0===e?{}:e,i=c.Xh,o=r.name,l=r.avatar,u=r.description,d=(0,n.h$)(o),h={"@context":"https://schema.org","@type":"Person",name:o,image:null==l?void 0:l.url,url:"".concat(void 0===i?"":i).concat(d),description:u};return(0,s.jsx)(a.q,{encodeSpecialCharacters:!1,children:(0,s.jsx)("script",{type:"application/ld+json",children:JSON.stringify(h)})})}},5665:function(t){t.exports={featuredImage:"FeaturedImage_featuredImage__bheWa"}},6726:function(t){t.exports={image:"Image_image__1H4C3"}},8607:function(t){t.exports={metadata:"Metadata_metadata__DBDXc",metadataAuthor:"Metadata_metadataAuthor__ytsac",metadataCategories:"Metadata_metadataCategories__yOeC4",metadataSticky:"Metadata_metadataSticky__kmI14"}},8357:function(t,e,r){"use strict";r.d(e,{w_:function(){return s}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),o=function(){return(o=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},c=function(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&0>e.indexOf(a)&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)0>e.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]]);return r};function s(t){return function(e){return a.createElement(l,o({attr:o({},t.attr)},e),function t(e){return e&&e.map(function(e,r){return a.createElement(e.tag,o({key:r},e.attr),t(e.child))})}(t.child))}}function l(t){var e=function(e){var r,n=t.attr,i=t.size,s=t.title,l=c(t,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,l,{className:r,style:o(o({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),t.children)};return void 0!==i?a.createElement(i.Consumer,null,function(t){return e(t)}):e(n)}}}]);