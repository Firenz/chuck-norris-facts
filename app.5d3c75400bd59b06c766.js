!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(m&&m(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/codeko-jobtest/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=u;o.push([25,1]),n()}({16:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(6),a=function(){return fetch(r.c).then((function(e){return e.json()})).catch((function(){return null}))},o=function(){return fetch(r.a).then((function(e){return e.json()})).catch((function(){return null}))},i=function(e){return fetch(Object(r.b)(e)).then((function(e){return e.json()})).catch((function(){return null}))}},17:function(e,t){},18:function(e,t,n){e.exports=n.p+"./media/chuck-bg.6d736fd5ae62278a314094d8e15f96d4.svg"},25:function(e,t,n){n(12),e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(19),o=n(1),i=n(20),c=n.n(i),u=n(8),l=n.n(u),m=r.createContext({showMenu:!1,facts:[],updateMenuVisibility:function(){console.warn("if you are reading this, likely you forgot to add the provider on top of your app")},addNewFact:function(){console.warn("if you are reading this, likely you forgot to add the provider on top of your app")},clearFacts:function(){console.warn("if you are reading this, likely you forgot to add the provider on top of your app")}}),s=function(e){var t,n,a=r.useState(!1),o=l()(a,2),i=o[0],u=o[1],s=r.useState((t="facts",n=localStorage.getItem(t)||"null",JSON.parse(n)||[])),p=l()(s,2),d=p[0],f=p[1];return r.useEffect((function(){return function(e,t){localStorage.setItem(e,JSON.stringify(t))}("facts",d)}),[d]),r.createElement(m.Provider,{value:{showMenu:i,updateMenuVisibility:u,facts:d,addNewFact:function(e){var t=d,n=[e].concat(c()(t));f(n)},clearFacts:function(){f([])}}},e.children)},p=n(21),d=n.n(p);function f(){var e=d()(["\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: ",";\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: ",";\n  }\n\n  ul {\n    list-style: none;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    padding-inline-start: 0;\n  }\n\n  #root {\n    min-height: 100vh;\n    text-align: center;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: space-between;\n  }\n"]);return f=function(){return e},e}var h=Object(o.b)(f(),(function(e){return e.theme.palette.main.background}),(function(e){return e.theme.typography.sizes.sizeM})),g={palette:{main:{primary:"#8d0008",secondary:"#fbb04c",accent:"#f05b22",background:"#a31418",light:"#fff5ee",dark:"#000"},text:{primary:"#fff5ee",secondary:"#8d0008",accent:"#000"},link:{normal:"#ffac95",hover:"#000",visited:"#ffac95"},info:{success:"#5abab6",error:"#dd2c00"}},typography:{fonts:["Arial","Helvetica"],sizes:{sizeXXS:"0.25rem",sizeXS:"0.5rem",sizeS:"0.75rem",sizeM:"1rem",sizeL:"1.25rem",sizeXL:"1.5rem",sizeXXL:"2.5rem",sizeXXXL:"4rem"}}},y=o.c.div.withConfig({displayName:"ButtonsLayout",componentId:"sc-111zfxm"}).withConfig({displayName:"buttonsstyles__ButtonsLayout",componentId:"sc-1avqx35-0"})(["position:fixed;z-index:4;bottom:2.7rem;display:flex;flex-direction:row-reverse;align-items:flex-end;justify-content:space-between;max-width:40rem;width:80%;@media (max-width:768px){width:95%;margin-bottom:1rem;}"]),b=n(2),x=o.c.button.withConfig({displayName:"ButtonLayout",componentId:"sc-tn6ipd"}).withConfig({displayName:"buttonstyles__ButtonLayout",componentId:"sc-15019jd-0"})(["padding:1rem;font-size:",";border:none;border-radius:10px;box-shadow:0 5px 5px -3px ",",0 8px 10px 1px ",",0 3px 14px 2px ",";&:hover{cursor:pointer;box-shadow:0 5px 5px -3px ",",0 8px 10px 1px ",",0 3px 14px 2px ",";}&:focus{outline:none;box-shadow:0 0 0 3px lightskyblue;}"],(function(e){return e.theme.typography.sizes.sizeM}),(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.2)}),(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.14)}),(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.12)}),(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.8)}),(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.26)}),(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.24)})),w=Object(o.c)(x).withConfig({displayName:"GetFactButtonLayout",componentId:"sc-8hvhbm"}).withConfig({displayName:"get-fact-buttonstyles__GetFactButtonLayout",componentId:"sc-1h2z7tc-0"})(["padding:1rem 2rem 1rem 0.3rem;border-radius:50px;font-size:",";font-weight:bold;text-transform:uppercase;background-color:",";color:",";&::before{content:'👊';margin:0 0.8rem;text-shadow:-1px -1px 0 ",",1px -1px 0 ",",-1px 1px 0 ",",1px 1px 0 ",";}&:hover{color:",";background-color:",";}@media (max-width:768px){right:0.5rem;margin:0;padding:1rem 0.7rem;font-size:0;&::before{font-size:",";}}"],(function(e){return e.theme.typography.sizes.sizeXXL}),(function(e){return e.theme.palette.main.light}),(function(e){return e.theme.palette.text.secondary}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.palette.main.accent}),(function(e){return e.theme.typography.sizes.sizeXL})),v=function(e){var t=e.onClick;return r.createElement(w,{onClick:t},e.children)},k=function(){var e=r.useContext(m).updateMenuVisibility;return r.createElement(v,{onClick:function(){return e(!0)},"aria-label":"Press to get a Chuck Norris fact from a category"},"Get a fact!")},C=o.c.h1.withConfig({displayName:"TitleLayout",componentId:"sc-b34apu"}).withConfig({displayName:"titlestyles__TitleLayout",componentId:"sc-13q5ywy-0"})(["font-size:",";font-weight:bold;@media (max-width:768px){font-size:",";}"],(function(e){return e.theme.typography.sizes.sizeXXL}),(function(e){return e.theme.typography.sizes.sizeXL})),z=Object(o.c)(x).withConfig({displayName:"ClearFactsButtonLayout",componentId:"sc-144h26r"}).withConfig({displayName:"clear-facts-buttonstyles__ClearFactsButtonLayout",componentId:"sc-1a3zxxp-0"})(["padding:0.5rem 1rem 0.5rem 0.2rem;font-size:",";font-weight:normal;background-color:",";color:",";&::before{content:'🗑️';margin:0 0.5rem;}&:hover{background-color:",";}@media (max-width:768px){left:0.5rem;padding:0.7rem 0.5rem;font-size:0;&::before{font-size:",";text-shadow:-1px -1px 0 ",",1px -1px 0 ",",-1px 1px 0 ",",1px 1px 0 ",";}}"],(function(e){return e.theme.typography.sizes.sizeM}),(function(e){return e.theme.palette.info.error}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.typography.sizes.sizeL}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.palette.main.dark}),(function(e){return e.theme.palette.main.dark})),E=function(e){var t=e.onClick;return r.createElement(z,{onClick:t},e.children)},j=function(){var e=r.useContext(m).clearFacts;return r.createElement(E,{onClick:e,"aria-label":"Press to clear current displaying Chuck Norris facts"},"Clear facts")},L=function(){return r.createElement(y,null,r.createElement(k,null),r.createElement(j,null))},N=o.c.div.withConfig({displayName:"FactsLayout",componentId:"sc-1vjz4w7"}).withConfig({displayName:"factsstyles__FactsLayout",componentId:"sc-9991x-0"})(["justify-self:center;flex-grow:1;display:flex;flex-direction:column-reverse;align-items:center;justify-content:flex-end;max-width:40rem;width:95%;padding-bottom:1rem;"]),_=o.c.ul.withConfig({displayName:"FactListLayout",componentId:"sc-k78y77"}).withConfig({displayName:"fact-liststyles__FactListLayout",componentId:"sc-18uppu1-0"})(["list-style:none;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0;margin:0;"]),I=n(3),O=n.n(I),F=n(4),M=n.n(F),X=o.c.li.withConfig({displayName:"FactElementLayout",componentId:"sc-1m7vjco"}).withConfig({displayName:"fact-itemstyles__FactElementLayout",componentId:"mj2zgn-0"})(["z-index:1;position:relative;margin:1rem;padding:1rem;border:none;border-radius:5px;font-size:",";color:",";background-color:",";&:focus{outline:none;}&:first-child{margin-top:0;}&:last-child{margin-bottom:6rem;}"],(function(e){return e.theme.typography.sizes.sizeL}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.palette.main.background})),B=Object(o.c)(x).withConfig({displayName:"FactElementButtonLayout",componentId:"sc-dh9hgx"}).withConfig({displayName:"fact-item-buttonstyles__FactElementButtonLayout",componentId:"sc-1oyz69t-0"})(["position:absolute;z-index:2;top:0;left:0;height:100%;width:100%;padding:0.2rem 0.6rem 0.2rem 0;border-radius:5px;background:linear-gradient( ",","," );font-size:",";font-weight:bold;color:",";opacity:0;box-shadow:none;&::before{content:'📋';margin:0 0.5rem;}&:hover{cursor:pointer;opacity:1;box-shadow:none;}&:active{background:linear-gradient( ",","," );}"],(function(e){var t=e.theme.palette.info.success;return Object(b.a)(t,.7)}),(function(e){var t=e.theme.palette.info.success;return Object(b.a)(t,.7)}),(function(e){return e.theme.typography.sizes.sizeXXL}),(function(e){return e.theme.palette.text.primary}),(function(e){var t=e.theme.palette.info.success;return Object(b.a)(t,.9)}),(function(e){var t=e.theme.palette.info.success;return Object(b.a)(t,.9)})),S=function(e){var t=e.onClick,n=e.onMouseLeave,a=e.infoText;return r.createElement(B,{onClick:function(){t()},onMouseLeave:n,"aria-label":"Press to copy fact to clipboard"},a)},T=function(e){var t=e.fact,n=e.infoText,a=e.onClick,o=e.onMouseLeave;return r.createElement(X,null,r.createElement(S,{onClick:a,onMouseLeave:o,infoText:n}),r.createElement("p",null,t))},P=function(e){var t=e.fact,n=r.useState("Copy"),a=l()(n,2),o=a[0],i=a[1],c=function(){var e=M()(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=2;break}return e.abrupt("return");case 2:navigator.clipboard.writeText(t).then((function(){i("Copied!")})).catch((function(e){return console.error("Failed to copy!",e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.createElement(T,{fact:t,onClick:c,onMouseLeave:function(){i("Copy")},infoText:o})},R=function(e){var t=e.facts;return r.createElement(_,null,t.map((function(e,t){return r.createElement(P,{key:t,fact:e})})))},A=o.c.div.withConfig({displayName:"NoDisplayingFactLayout",componentId:"sc-10rhvf7"}).withConfig({displayName:"no-displaying-factstyles__NoDisplayingFactLayout",componentId:"ojk2py-0"})(["font-size:",";font-weight:bold;color:",";opacity:0.8;"],(function(e){return e.theme.typography.sizes.sizeXL}),(function(e){return e.theme.palette.text.primary})),G=function(){return r.createElement(A,null,"Press the button to get a fact!")},V=function(){var e=r.useContext(m).facts;return r.createElement(N,null,e.length>0?r.createElement(R,{facts:e}):r.createElement(G,null))},q=n(7),H=n(5),J=function(e){return e.value},W=function(e){return null==e?"":e},D=function(e){return null==e?[]:e.map(W)},K=o.c.div.withConfig({displayName:"MenuWrapper",componentId:"sc-1ddi6cj"}).withConfig({displayName:"menustyles__MenuWrapper",componentId:"sc-3spa4-0"})(["position:fixed;z-index:5;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient( ",","," );"],(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.7)}),(function(e){var t=e.theme.palette.main.dark;return Object(b.a)(t,.7)})),Q=o.c.div.withConfig({displayName:"MenuLayout",componentId:"sc-1tu7at7"}).withConfig({displayName:"menustyles__MenuLayout",componentId:"sc-3spa4-1"})(["width:40rem;max-width:80%;padding:1rem;border-radius:10px;background:",";"],(function(e){return e.theme.palette.main.light})),U=o.c.li.withConfig({displayName:"CategoryButtonWrapper",componentId:"sc-zcignr"}).withConfig({displayName:"category-itemstyles__CategoryButtonWrapper",componentId:"sc-7h7foa-0"})(["flex-grow:0;flex-shrink:0;flex-basis:40%;margin:1rem 0rem;@media (max-width:768px){flex-basis:50%;margin:0.5rem 0;}"]),Y=Object(o.c)(x).withConfig({displayName:"CategoryButtonLayout",componentId:"sc-a9n7cm"}).withConfig({displayName:"category-itemstyles__CategoryButtonLayout",componentId:"sc-7h7foa-1"})(["width:10.5rem;padding:1rem 2rem;font-size:",";font-weight:bold;text-align:center;border-radius:50px;&:hover{cursor:pointer;color:",";background-color:",";}@media (max-width:768px){width:7rem;padding:0.7rem 0;font-size:",";}"],(function(e){return e.theme.typography.sizes.sizeL}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.palette.main.accent}),(function(e){return e.theme.typography.sizes.sizeM})),Z=Object(o.c)(Y).withConfig({displayName:"RandomButtonLayout",componentId:"sc-1dsvkcb"}).withConfig({displayName:"random-buttonstyles__RandomButtonLayout",componentId:"sc-1ldqj4f-0"})(["width:15.5rem;margin:1rem;padding:1.1rem 0;color:",";background-color:",";&:hover{cursor:pointer;color:",";background-color:",";}@media (max-width:768px){width:10.5rem;margin:0.5rem;padding:0.7rem 0 0.5rem;}"],(function(e){return e.theme.palette.text.accent}),(function(e){return e.theme.palette.main.secondary}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.palette.main.dark})),$=function(e){var t=e.onClick;return r.createElement(Z,{onClick:t},e.children)},ee=function(){var e=r.useContext(m),t=e.updateMenuVisibility,n=e.addNewFact,a=Object(q.a)("getFactRandomFact",M()(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=J,e.next=3,Object(H.getRandomFact)();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))),o=a.data,i=a.isFetching,c=a.refetch;return r.createElement($,{onClick:function(){c(),i||(n(o||"Error loading fact"),t(!1))}},"Get a random fact!")},te=Object(o.c)(C).withConfig({displayName:"MenuTitleLayout",componentId:"sc-17fa73k"}).withConfig({displayName:"menu-titlestyles__MenuTitleLayout",componentId:"e346fu-0"})(["color:",";"],(function(e){return e.theme.palette.text.accent})),ne=function(e){return r.createElement(te,null,e.children)},re=o.c.ul.withConfig({displayName:"CategoriesLayout",componentId:"sc-1s96zhb"}).withConfig({displayName:"categoriesstyles__CategoriesLayout",componentId:"sc-1iov639-0"})(["display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin-bottom:1rem;"]),ae=function(e){var t=e.onClick;return r.createElement(U,null,r.createElement(Y,{onClick:t},e.children))},oe=function(e){var t=r.useContext(m),n=t.updateMenuVisibility,a=t.addNewFact,o=e.category,i=Object(q.a)("getFactFromCategory".concat(o),M()(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=J,e.next=3,Object(H.getFactFromCategory)(o);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))),c=i.data,u=i.isFetching,l=function(){u||(a(c||"Error loading fact"),n(!1))};return r.createElement(ae,{onClick:function(){return l}},o)},ie=function(e){var t=e.categories;return r.createElement(re,null,t.map((function(e,t){return r.createElement(oe,{key:t,category:e})})))},ce=function(){var e=r.useContext(m).showMenu,t=Object(q.a)("getCategories",M()(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=D,e.next=3,Object(H.getCategoriesApi)();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))).data;return e?r.createElement(K,null,r.createElement(Q,null,r.createElement(ee,null),r.createElement(ne,null,"Categories"),r.createElement(ie,{categories:t||[]}))):null},ue=function(){return r.createElement(r.Fragment,null,r.createElement(L,null),r.createElement(V,null),r.createElement(ce,null))},le=function(){return r.createElement(ue,null)},me=n(18),se=o.c.header.withConfig({displayName:"HeaderLayout",componentId:"sc-2kzdte"}).withConfig({displayName:"headerstyles__HeaderLayout",componentId:"ph72qd-0"})(["margin-bottom:-17rem;height:35rem;background:linear-gradient( ",","," 43%,"," ),url(",") center 1.5rem fixed no-repeat ",";"],(function(e){var t=e.theme.palette.main.secondary;return Object(b.a)(t,0)}),(function(e){var t=e.theme.palette.main.secondary;return Object(b.a)(t,.5)}),(function(e){return e.theme.palette.main.background}),me,(function(e){return e.theme.palette.main.secondary})),pe=function(){return r.createElement(se,null)},de=o.c.main.withConfig({displayName:"MainLayout",componentId:"sc-s747aw"}).withConfig({displayName:"mainstyles__MainLayout",componentId:"ml7j8m-0"})(["flex-grow:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;margin-bottom:1rem;background:linear-gradient( ",","," 56% );"],(function(e){var t=e.theme.palette.main.secondary;return Object(b.a)(t,0)}),(function(e){return e.theme.palette.main.background})),fe=function(e){return r.createElement(de,null,e.children)},he=Object(o.c)(C).withConfig({displayName:"MainTitleLayout",componentId:"sc-1nzb0n5"}).withConfig({displayName:"main-titlestyles__MainTitleLayout",componentId:"sc-1gvrpkx-0"})(["color:",";text-transform:capitalize;&::before{content:'👊';margin:0 0.8rem;}&::after{content:'👊';margin:0 0.8rem;}"],(function(e){return e.theme.palette.text.primary})),ge=function(e){return r.createElement(he,null,e.children)},ye=o.c.footer.withConfig({displayName:"FooterLayout",componentId:"sc-vi4v1"}).withConfig({displayName:"footerstyles__FooterLayout",componentId:"wfv6g1-0"})(["position:fixed;z-index:3;bottom:0;width:100vw;padding:4rem 0.5rem 0.5rem;color:",";font-weight:bold;text-align:center;background:linear-gradient( ",","," 55%,"," );@media (max-width:393px){padding:4rem 1rem 0.5rem;width:auto;}"],(function(e){return e.theme.palette.text.primary}),(function(e){var t=e.theme.palette.main.background;return Object(b.a)(t,0)}),(function(e){return e.theme.palette.main.background}),(function(e){var t=e.theme.palette.main.primary;return Object(b.a)(t,1)})),be=o.c.a.withConfig({displayName:"Link",componentId:"sc-1f0sv2h"}).withConfig({displayName:"footerstyles__Link",componentId:"wfv6g1-1"})(["padding-left:0.3rem;color:",";&:hover{color:",";}&:visited{color:",";}"],(function(e){return e.theme.palette.link.normal}),(function(e){return e.theme.palette.link.hover}),(function(e){return e.theme.palette.link.visited})),xe=function(){return r.createElement(ye,null,r.createElement("span",{role:"img","aria-label":"Copyright"},"©")," ","2020. Developed in React with"," ",r.createElement("span",{role:"img","aria-label":"Love"},"💛")," ","by",r.createElement(be,{href:"mailto:alicia.guardenoalbertos@gmail.com"},"Alicia G."))},we=function(e){return r.createElement(r.Fragment,null,r.createElement(pe,null),r.createElement(fe,null,r.createElement(ge,null,"Chuck Norris Facts"),e.children),r.createElement(xe,null))},ve=function(){return r.createElement(we,null,r.createElement(le,null))},ke=function(){return r.createElement(o.a,{theme:g},r.createElement(s,null,r.createElement(h,null),r.createElement(ve,null)))};a.render(r.createElement(ke,null),document.getElementById("root"))},5:function(e,t,n){"use strict";var r=n(16);n.d(t,"getCategoriesApi",(function(){return r.a})),n.d(t,"getFactFromCategory",(function(){return r.b})),n.d(t,"getRandomFact",(function(){return r.c}));n(17),n(6)},6:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r="https://api.chucknorris.io/jokes/",a="".concat(r,"random"),o="".concat(r,"categories"),i=function(e){return"".concat(r,"random?category=").concat(e)}}});