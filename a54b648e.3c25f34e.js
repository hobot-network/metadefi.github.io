(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return v}));var n=a(1),l=a(6),r=(a(0),a(242)),s=a(244),c=a(245),i=a(246),o=a(247),u=a(248),m={delivery_guarantee:"best_effort",description:"The Vector `statsd` source ingests data through the StatsD UDP protocol and outputs `metric` events.",event_types:["metric"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+statsd%22",operating_systems:["linux","macos","windows"],sidebar_label:'statsd|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/statsd/mod.rs",status:"beta",title:"Statsd Source",unsupported_operating_systems:[]},d={id:"reference/sources/statsd",title:"Statsd Source",description:"The Vector `statsd` source ingests data through the StatsD UDP protocol and outputs `metric` events.",source:"@site/docs/reference/sources/statsd.md",permalink:"/docs/reference/sources/statsd",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sources/statsd.md",sidebar_label:'statsd|["metric"]',sidebar:"docs",previous:{title:"Splunk HEC Source",permalink:"/docs/reference/sources/splunk_hec"},next:{title:"STDIN Source",permalink:"/docs/reference/sources/stdin"}},b=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"address",id:"address",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Timestamp",id:"timestamp",children:[]}]}],p={rightToc:b},h="wrapper";function v(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(h,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"statsd")," source ingests data through the StatsD UDP protocol and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(r.b)("inlineCode",{parentName:"a"},"metric"))," events."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  type = "statsd" # must be: "statsd"\n  address = "127.0.0.1:8126" # example\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(c.a,{filters:!0,mdxType:"Fields"},Object(r.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:["127.0.0.1:8126"],name:"address",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"address"},"address"),Object(r.b)("p",null,"UDP socket address to bind to."))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"statsd")," source ingests data through the StatsD UDP protocol and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(r.b)("inlineCode",{parentName:"a"},"metric"))," events.\nFor example:"),Object(r.b)(o.a,{block:!0,defaultValue:"counter",values:[{label:"Counter",value:"counter"},{label:"Gauge",value:"gauge"},{label:"Set",value:"set"},{label:"Timer",value:"timer"}],mdxType:"Tabs"},Object(r.b)(u.a,{value:"counter",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"login.invocations:1|c\n")),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "login.invocations",\n  "kind": "incremental",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "counter",\n    "value": 1.0\n  }\n}\n'))),Object(r.b)(u.a,{value:"gauge",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"gas_tank:0.50|g\n")),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "gas_tank",\n  "kind": "absolute",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "gauge",\n    "value": 0.5\n  }\n}\n'))),Object(r.b)(u.a,{value:"set",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"unique_users:foo|s\n")),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "unique_users",\n  "kind": "incremental",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "set",\n    "values": ["foo"]\n  }\n}\n'))),Object(r.b)(u.a,{value:"timer",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"login.time:22|ms|@0.1\n")),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "login.time",\n  "kind": "incremental",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "value": {\n    "type": "distribution",\n    "values": [0.022], // ms become seconds\n    "sample_rates": [10]\n  }\n}\n')))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(r.b)("h3",{id:"timestamp"},"Timestamp"),Object(r.b)("p",null,"StatsD protocol does not provide support for sending metric timestamps. You'll\nnotice that each parsed metric is assigned a ",Object(r.b)("inlineCode",{parentName:"p"},"null"),' timestamp, which is a\nspecial value which means "a real time metric" (not historical one). Normally such\n',Object(r.b)("inlineCode",{parentName:"p"},"null")," timestamps will be substituted by current time by downstream sinks or\n3rd party services during sending/ingestion. See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"metric"),"\ndata model page for more info."))}v.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,r]=Object(n.useState)(!1),[s,c]=Object(n.useState)(!1),[i,o]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),d=u.some(e=>e.props.required),b=u;return a&&(b=b.filter(e=>e.props.common)),s&&(b=b.filter(e=>e.props.required)),i&&(b=b.filter(e=>e.props.name.toLowerCase().includes(i.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},b.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),d&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>c(e.currentTarget.checked),checked:s}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(b)||b.length>0?b:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),r=a(241),s=a.n(r),c=(a(242),a(244)),i=a(251);function o(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${o(t.value)}`:`${u(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function d({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},o(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),t.push(" ");return t}function b({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function p({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(c.a,{fileName:"vector.toml"}),l.a.createElement(i.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,o(a)))}function v({defaultValue:e,enumValues:t,examples:a,name:r,path:s,relevantWhen:c}){const[i,o]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(b,{name:r,path:s,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(d,{values:t})):null,c?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:c})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!i)},i?"Hide examples":"View examples"),i&&l.a.createElement("div",{className:"examples"},l.a.createElement(p,{name:r,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:c,name:i,path:o,relevantWhen:u,templateable:m,type:d,unit:b,required:p}){const[h,g]=Object(n.useState)(!1);let f=e;return h&&(f=f.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:s()("field","section",p?"field-required":"",h?"field-collapsed":""),required:p},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},d),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),b&&l.a.createElement("span",{className:"badge badge--secondary"},b),p?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),f,!h&&l.a.createElement(v,{defaultValue:a,enumValues:r,examples:c,name:i,path:o,relevantWhen:u}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),s=a(252),c=a(241),i=a.n(c),o=a(253),u=a.n(o);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:s,setSelectedValue:c}){return r.a.createElement("div",{className:t?"tabs--centered":""},r.a.createElement("ul",{className:i()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>r.a.createElement("li",{className:i()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>c(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return r.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:s,defaultValue:c,select:i,style:o,values:b,urlKey:p}=e,[h,v]=Object(l.useState)(c);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=u.a.parse(window.location.search);e[p]&&v(e[p])}},[]),r.a.createElement("div",null,b.length>1&&(i?r.a.createElement(d,Object(n.a)({selectedValue:h,setSelectedValue:v},e)):r.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:v},e))),r.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(s).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);