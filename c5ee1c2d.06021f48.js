(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),s=(a(0),a(242)),o=a(250),c={title:"Install Vector Through Your Package Manager",sidebar_label:"hidden",hide_pagination:!0},i={id:"setup/installation/package-managers",title:"Install Vector Through Your Package Manager",description:"import Jump from '@site/src/components/Jump';",source:"@site/docs/setup/installation/package-managers.md",permalink:"/docs/setup/installation/package-managers",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/package-managers.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Use Vector On Docker",permalink:"/docs/setup/installation/containers/docker"},next:{title:"Install Vector via DPKG",permalink:"/docs/setup/installation/package-managers/dpkg"}},u=[],m={rightToc:u},p="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(p,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(o.a,{to:"/docs/setup/installation/package-managers/dpkg/",mdxType:"Jump"},"DPKG"),Object(s.b)(o.a,{to:"/docs/setup/installation/package-managers/homebrew/",mdxType:"Jump"},"Homebrew"),Object(s.b)(o.a,{to:"/docs/setup/installation/package-managers/msi/",mdxType:"Jump"},"MSI"),Object(s.b)(o.a,{to:"/docs/setup/installation/package-managers/rpm/",mdxType:"Jump"},"RPM"))}d.isMDXComponent=!0},243:function(e,t,a){"use strict";var n=a(1),r=a(0),s=a.n(r),o=a(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,i=t||a,u=c.test(i),m=Object(r.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(r.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(i),()=>{p&&d&&d.disconnect()}),[i,p,u]),i&&u?s.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:()=>{m.current||(window.docusaurus.preload(i),m.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{d=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(i)})},to:i})):s.a.createElement("a",Object(n.a)({},e,{href:i}))}},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(243),o=a(241),c=a.n(o);a(86);t.a=function({children:e,className:t,badge:a,icon:n,size:o,target:i,to:u}){let m=c()("jump-to",`jump-to--${o}`,t),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return i?r.a.createElement("a",{href:u,target:i,className:m},p):r.a.createElement(s.a,{to:u,className:m},p)}}}]);