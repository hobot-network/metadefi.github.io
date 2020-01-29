(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(6),c=(a(0),a(242)),s=a(277),o={title:"Sources",description:"Sources are reponsible for collect or receiving log and metrics data. These could be local sources, like a file, or a protocols, like HTTP or TCP.",sidebar_label:"hidden",hide_pagination:!0},l={id:"reference/sources",title:"Sources",description:"Sources are reponsible for collect or receiving log and metrics data. These could be local sources, like a file, or a protocols, like HTTP or TCP.",source:"@site/docs/reference/sources.md",permalink:"/docs/reference/sources",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sources.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Reference",permalink:"/docs/reference"},next:{title:"Docker Source",permalink:"/docs/reference/sources/docker"}},i=[],m={rightToc:i},d="wrapper";function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(d,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Sources are responsible for ingesting ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," into\nVector, they can both receive and pull in data. If you're deploying Vector in\nan ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/agent/"}),"agent role"),", you'll want to user local data sources\nlike the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/file/"}),Object(c.b)("inlineCode",{parentName:"a"},"file"))," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/stdin/"}),Object(c.b)("inlineCode",{parentName:"a"},"stdin"))," sources.\nIf you're deploying Vector in a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/"}),"service role"),", you'll want\nto use sources that receive data over the network, like the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/vector/"}),Object(c.b)("inlineCode",{parentName:"a"},"vector")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(c.b)("inlineCode",{parentName:"a"},"socket")),", and\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(c.b)("inlineCode",{parentName:"a"},"syslog"))," sources."),Object(c.b)("hr",null),Object(c.b)(s.a,{titles:!1,sinks:!1,transforms:!1,mdxType:"VectorComponents"}))}u.isMDXComponent=!0},243:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),s=a(17);const o=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,l=t||a,i=o.test(l),m=Object(r.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(r.useEffect)(()=>(!d&&i&&window.docusaurus.prefetch(l),()=>{d&&u&&u.disconnect()}),[l,d,i]),l&&i?c.a.createElement(s.b,Object(n.a)({},e,{onMouseEnter:()=>{m.current||(window.docusaurus.preload(l),m.current=!0)},innerRef:e=>{d&&e&&i&&((e,t)=>{u=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})}),u.observe(e)})(e,()=>{window.docusaurus.prefetch(l)})},to:l})):c.a.createElement("a",Object(n.a)({},e,{href:l}))}},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(243),s=a(241),o=a.n(s);a(86);t.a=function({children:e,className:t,badge:a,icon:n,size:s,target:l,to:i}){let m=o()("jump-to",`jump-to--${s}`,t),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return l?r.a.createElement("a",{href:i,target:l,className:m},d):r.a.createElement(c.a,{to:i,className:m},d)}},277:function(e,t,a){"use strict";a(12);var n=a(1),r=a(0),c=a.n(r),s=a(271),o=a.n(s);a(94);var l=function({icon:e,values:t,currentState:a,setState:n}){if(0==t.size)return null;let r=Array.from(t);return c.a.createElement(c.a.Fragment,null,r.map((t,r)=>{let s="string"==typeof t?o()(t):t;return c.a.createElement("label",{key:r},c.a.createElement("input",{type:"checkbox",onChange:e=>{let r=new Set(a);e.currentTarget.checked?r.add(t):r.delete(t),n(r)},checked:a.has(t)}),e?c.a.createElement("i",{className:`feather icon-${e}`}):""," ",s)}))},i=a(250),m=a(243),d=a(283),u=a.n(d),p=a(241),f=a.n(p),b=a(284),h=a.n(b),v=a(249);a(95);function g({delivery_guarantee:e,description:t,event_types:a,name:n,status:r,type:s}){let o=null;return"source"==s&&(o=`/docs/reference/sources/${n}/`),"transform"==s&&(o=`/docs/reference/transforms/${n}/`),"sink"==s&&(o=`/docs/reference/sinks/${n}/`),c.a.createElement(m.a,{to:o,className:"vector-component"},c.a.createElement("div",{className:"vector-component--header"},t&&c.a.createElement("i",{className:"feather icon-info",title:t}),c.a.createElement("div",{className:"vector-component--name"},n," ",s)),c.a.createElement("div",{className:"vector-component--badges"},a.includes("log")?c.a.createElement("span",{className:"badge badge--primary",title:"This component works with log event types"},"L"):"",a.includes("metric")?c.a.createElement("span",{className:"badge badge--primary",title:"This component works with metric event types"},"M"):"","beta"==r?c.a.createElement("span",{className:"badge badge--warning",title:"This component is in beta and is not recommended for production environments"},c.a.createElement("i",{className:"feather icon-alert-triangle"})):c.a.createElement("span",{className:"badge badge--primary",title:"This component has passed reliability standards that make it production ready"},c.a.createElement("i",{className:"feather icon-award"})),"best_effort"==e?c.a.createElement("span",{className:"badge badge--warning",title:"This component makes a best-effort delivery guarantee, and in rare cases can lose data"},c.a.createElement("i",{className:"feather icon-shield-off"})):c.a.createElement("span",{className:"badge badge--primary",title:"This component offers an at-least-once delivery guarantee"},c.a.createElement("i",{className:"feather icon-shield"}))))}function E({components:e,headingLevel:t,titles:a}){const r=e.filter(e=>"source"==e.type),s=e.filter(e=>"transform"==e.type),o=e.filter(e=>"sink"==e.type),l=`h${t||3}`;return e.length>0?c.a.createElement(c.a.Fragment,null,r.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,r.length," Sources"),c.a.createElement("div",{className:"vector-components--grid"},r.map((e,t)=>c.a.createElement(g,Object(n.a)({key:t},e))))):"",s.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,s.length," Transforms"),c.a.createElement("div",{className:"vector-components--grid"},s.map((e,t)=>c.a.createElement(g,Object(n.a)({key:t},e))))):"",o.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,o.length," Sinks"),c.a.createElement("div",{className:"vector-components--grid"},o.map((e,t)=>c.a.createElement(g,Object(n.a)({key:t},e))))):"",c.a.createElement("hr",null),c.a.createElement(i.a,{to:"mailto:support@brainrex.com",target:"_blank",icon:"plus-circle"},"Request a new component")):c.a.createElement("div",{className:"empty"},c.a.createElement("div",{className:"icon"},"\u2639"),c.a.createElement("div",null,"No components found"))}t.a=function(e){const{siteConfig:t}=Object(v.a)(),{metadata:{sources:a,transforms:n,sinks:s}}=t.customFields,o=e.titles||null==e.titles,i=1==e.filterColumn,d=e.location?h.a.parse(e.location.search,{ignoreQueryPrefix:!0}):{};let p=[];(e.sources||null==e.sources)&&(p=p.concat(Object.values(a))),(e.transforms||null==e.transforms)&&(p=p.concat(Object.values(n))),(e.sinks||null==e.sinks)&&(p=p.concat(Object.values(s))),p=p.sort((e,t)=>e.name>t.name?1:-1);const[b,g]=Object(r.useState)("true"==d["at-least-once"]),[y,N]=Object(r.useState)(new Set(d.functions)),[j,w]=Object(r.useState)("true"==d.log),[k,O]=Object(r.useState)("true"==d.metric),[S,T]=Object(r.useState)(new Set(d["operating-systems"])),[C,_]=Object(r.useState)("true"==d["prod-ready"]),[x,L]=Object(r.useState)(new Set(d.providers)),[$,F]=Object(r.useState)(null);$&&(p=p.filter(e=>{return`${e.name.toLowerCase()} ${e.type.toLowerCase()}`.includes($.toLowerCase())})),b&&(p=p.filter(e=>"at_least_once"==e.delivery_guarantee)),y.size>0&&(p=p.filter(e=>y.has(e.function_category))),j&&(p=p.filter(e=>e.event_types.includes("log"))),k&&(p=p.filter(e=>e.event_types.includes("metric"))),S.size>0&&(p=p.filter(e=>Array.from(S).every(t=>e.operating_systems.includes(t)))),C&&(p=p.filter(e=>"prod-ready"==e.status)),x.size>0&&(p=p.filter(e=>Array.from(x).every(t=>e.service_providers.includes(t))));const P=new Set(u()(p).map(e=>e.operating_systems).flatten().uniq().compact().sort().value()),z=new Set(u()(p).map(e=>e.service_providers).flatten().uniq().compact().sort().value()),V=new Set(u()(p).map(e=>e.function_category).uniq().compact().sort().value());return c.a.createElement("div",{className:f()("vector-components",{"vector-components--cols":i})},c.a.createElement("div",{className:"filters"},c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",onChange:e=>F(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/about/data-model/",title:"Learn more about Vector's event types"},"Event types ",c.a.createElement("i",{className:"feather icon-info"}))),c.a.createElement("div",{className:"filter--choices"},c.a.createElement("label",{title:"Show only components that work with log event types."},c.a.createElement("input",{type:"checkbox",onChange:e=>w(e.currentTarget.checked),checked:j})," Log"),c.a.createElement("label",{title:"Show only components that work with metric event types."},c.a.createElement("input",{type:"checkbox",onChange:e=>O(e.currentTarget.checked),checked:k})," Metric"))),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/about/guarantees/",title:"Learn more about Vector's guarantees"},"Guarantees ",c.a.createElement("i",{className:"feather icon-info"}))),c.a.createElement("div",{className:"filter--choices"},c.a.createElement("label",{title:"Show only components that offer an at-least-once delivery guarantee."},c.a.createElement("input",{type:"checkbox",onChange:e=>g(e.currentTarget.checked),checked:b}),c.a.createElement("i",{className:"feather icon-shield"})," At-least-once"),c.a.createElement("label",{title:"Show only production ready components."},c.a.createElement("input",{type:"checkbox",onChange:e=>_(e.currentTarget.checked),checked:C}),c.a.createElement("i",{className:"feather icon-award"})," Prod-ready"))),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},"Functions"),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Functions",icon:"code",values:V,currentState:y,setState:N}))),z.size>0&&c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},"Providers"),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Providers",icon:"cloud",values:z,currentState:x,setState:L}))),P.size>0&&c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/setup/installation/operating-systems/",title:"Learn more about Vector's operating systems"},"Operating Systems")),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Operating Systems",icon:"cpu",values:P,currentState:S,setState:T})))),c.a.createElement("div",{className:"vector-components--results"},c.a.createElement(E,{components:p,headingLevel:e.headingLevel,titles:o})))}}}]);