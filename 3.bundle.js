(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{325:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(l(55)),a=i(l(1)),u=l(53),r=i(l(338)),o=i(l(336)),d=i(l(335));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(u.Box,null,a.default.createElement(r.default,null,"Typography"),a.default.createElement(o.default,null,"The design system includes base styles for typography and a typographic scale for determining font sizes."),a.default.createElement(u.Box,{pt:4},[].concat((0,n.default)(u.theme.fontSizes)).reverse().map(function(e,t){return a.default.createElement(u.Heading,{key:e,fontSize:e,mb:4,bold:!0},a.default.createElement(u.Truncate,null,e,"px (",u.theme.fontSizes.length-t-1,") Discover new deals every day."))})),a.default.createElement(d.default,e))}},334:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=l(1),u=((n=a)&&n.__esModule,function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(l(53))),r=l(70);var o=u.Link.withComponent(r.Link);t.default=o},335:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(l(1)),a=l(53),u=r(l(334));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.index,l=e.pages,r=l[t-1],o=l[t+1];return n.default.createElement(a.Flex,{p:3,my:5,bg:"lightGray",style:{borderRadius:"2px"}},r&&n.default.createElement(u.default,{to:"/"+r.name},n.default.createElement(a.Icon,{name:"chevronLeft",size:48,color:"blue",legacy:!1,mr:2,style:{verticalAlign:"middle"}}),n.default.createElement(a.Text,{fontSize:3,color:"blue",style:{display:"inline-block",verticalAlign:"middle"}},n.default.createElement("b",null,"Previous:")," ",r.name)),n.default.createElement(a.Box,{ml:"auto"}),o&&n.default.createElement(u.default,{to:"/"+o.name},n.default.createElement(a.Text,{fontSize:3,color:"blue",style:{display:"inline-block",verticalAlign:"middle"}},n.default.createElement("b",null,"Next:")," ",o.name),n.default.createElement(a.Icon,{name:"chevronRight",size:48,color:"blue",legacy:!1,ml:2,style:{verticalAlign:"middle"}})))}},336:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(l(3)),a=r(l(1)),u=l(53);function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(u.Text,(0,n.default)({fontSize:[2,3],mb:3,color:"gray"},e))}},338:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(l(3)),a=r(l(1)),u=l(53);function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(u.Heading.h1,(0,n.default)({fontSize:5,bold:!0,mt:[2,5],mb:3},e))}}}]);