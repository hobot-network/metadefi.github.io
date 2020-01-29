(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),c=(a(0),a(242)),l=a(247),o=a(248),i=a(250),s={title:"Monitoring",description:"How to monitor and observe Vector with logs, metrics, and more."},b={id:"administration/monitoring",title:"Monitoring",description:"How to monitor and observe Vector with logs, metrics, and more.",source:"@site/docs/administration/monitoring.md",permalink:"/docs/administration/monitoring",editUrl:"https://github.com/brainrexapi/edit/master/docs/administration/monitoring.md",sidebar:"docs",previous:{title:"Process Management",permalink:"/docs/administration/process-management"},next:{title:"Tuning",permalink:"/docs/administration/tuning"}},d=[{value:"Logs",id:"logs",children:[{value:"Levels",id:"levels",children:[]},{value:"Full Backtraces",id:"full-backtraces",children:[]},{value:"Rate Limiting",id:"rate-limiting",children:[]}]},{value:"Metrics",id:"metrics",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],m={rightToc:d},u="wrapper";function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document will cover monitoring Vector."),Object(c.b)("h2",{id:"logs"},"Logs"),Object(c.b)("p",null,"Vector writes all output to ",Object(c.b)("inlineCode",{parentName:"p"},"STDOUT"),", therefore, you have complete control of\nthe output destination. Accessing the logs depends on your service manager:"),Object(c.b)(l.a,{block:!0,defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Systemd",value:"systemd"},{label:"Initd",value:"initd"},{label:"Homebrew",value:"homebrew"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"manual",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tail /var/log/vector.log\n"))),Object(c.b)(o.a,{value:"systemd",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo journalctl -fu vector\n"))),Object(c.b)(o.a,{value:"initd",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tail -f /var/log/vector.log\n"))),Object(c.b)(o.a,{value:"homebrew",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tail -f /usr/local/var/log/vector.log\n")))),Object(c.b)("h3",{id:"levels"},"Levels"),Object(c.b)("p",null,"By default, Vector logs on the ",Object(c.b)("inlineCode",{parentName:"p"},"info")," level, you can change the level through\na variety of methods:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Method"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/administration/process-management/#flags"}),Object(c.b)("inlineCode",{parentName:"a"},"-v")," flag")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Drops the log level to ",Object(c.b)("inlineCode",{parentName:"td"},"debug"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/administration/process-management/#flags"}),Object(c.b)("inlineCode",{parentName:"a"},"-vv")," flag")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Drops the log level to ",Object(c.b)("inlineCode",{parentName:"td"},"trace"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/administration/process-management/#flags"}),Object(c.b)("inlineCode",{parentName:"a"},"-q")," flag")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Raises the log level to ",Object(c.b)("inlineCode",{parentName:"td"},"warn"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/administration/process-management/#flags"}),Object(c.b)("inlineCode",{parentName:"a"},"-qq")," flag")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Raises the log level to ",Object(c.b)("inlineCode",{parentName:"td"},"error"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"LOG=<level>")," env var"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set the log level. Must be one of ",Object(c.b)("inlineCode",{parentName:"td"},"trace"),", ",Object(c.b)("inlineCode",{parentName:"td"},"debug"),", ",Object(c.b)("inlineCode",{parentName:"td"},"info"),", ",Object(c.b)("inlineCode",{parentName:"td"},"warn"),", ",Object(c.b)("inlineCode",{parentName:"td"},"error"),".")))),Object(c.b)("h3",{id:"full-backtraces"},"Full Backtraces"),Object(c.b)("p",null,"You can enable full error backtraces by setting the  ",Object(c.b)("inlineCode",{parentName:"p"},"RUST_BACKTRACE=full")," env\nvar. More on this in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/guides/troubleshooting/"}),"Troubleshooting guide"),"."),Object(c.b)("h3",{id:"rate-limiting"},"Rate Limiting"),Object(c.b)("p",null,"Vector rate limits log events in the hot path. This is to your benefit as\nit allows you to get granular insight without the risk of saturating IO\nand disrupting service. The tradeoff is that repetitive logs will not be logged."),Object(c.b)("h2",{id:"metrics"},"Metrics"),Object(c.b)("p",null,"Currently, Vector does not expose Metrics. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/230"}),"Issue #230"),"\nrepresents work to run internal Vector metrics through Vector's pipeline.\nAllowing you to define internal metrics as a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"source")," and\nthen define one of many metrics ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sinks")," to collect those metrics,\njust as you would metrics from any other source."),Object(c.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(c.b)("p",null,"Please refer to our troubleshooting guide:"),Object(c.b)(i.a,{to:"/docs/setup/guides/troubleshooting",mdxType:"Jump"},"Troubleshooting Guide"))}p.isMDXComponent=!0},243:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(17);const o=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,i=t||a,s=o.test(i),b=Object(r.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;let m;return Object(r.useEffect)(()=>(!d&&s&&window.docusaurus.prefetch(i),()=>{d&&m&&m.disconnect()}),[i,d,s]),i&&s?c.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(i),b.current=!0)},innerRef:e=>{d&&e&&s&&((e,t)=>{m=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(i)})},to:i})):c.a.createElement("a",Object(n.a)({},e,{href:i}))}},247:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(252),o=a(241),i=a.n(o),s=a(253),b=a.n(s);function d({block:e,centered:t,className:a,style:n,values:r,selectedValue:l,setSelectedValue:o}){return c.a.createElement("div",{className:t?"tabs--centered":""},c.a.createElement("ul",{className:i()("tabs",a,{"tabs--block":e}),style:n},r.map(({value:e,label:t})=>c.a.createElement("li",{className:i()("tab-item",{"tab-item--active":l===e}),key:e,onClick:()=>o(e)},t))))}function m({selectedValue:e,setSelectedValue:t,values:a}){return c.a.createElement(l.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:l,defaultValue:o,select:i,style:s,values:u,urlKey:p}=e,[j,g]=Object(r.useState)(o);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=b.a.parse(window.location.search);e[p]&&g(e[p])}},[]),c.a.createElement("div",null,u.length>1&&(i?c.a.createElement(m,Object(n.a)({selectedValue:j,setSelectedValue:g},e)):c.a.createElement(d,Object(n.a)({selectedValue:j,setSelectedValue:g},e))),c.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(l).filter(e=>e.props.value===j)[0]))}},248:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(243),l=a(241),o=a.n(l);a(86);t.a=function({children:e,className:t,badge:a,icon:n,size:l,target:i,to:s}){let b=o()("jump-to",`jump-to--${l}`,t),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return i?r.a.createElement("a",{href:s,target:i,className:b},d):r.a.createElement(c.a,{to:s,className:b},d)}}}]);