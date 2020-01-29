(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{221:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return h}));var n=a(1),l=a(6),r=(a(0),a(242)),s=a(247),o=a(248),i=a(244),c=a(245),u=a(246),m={delivery_guarantee:"at_least_once",description:"The Vector `kafka` source ingests data through Kafka 0.9 or later and outputs `log` events.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+kafka%22",operating_systems:["linux","macos","windows"],sidebar_label:'kafka|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/kafka.rs",status:"beta",title:"Kafka Source",unsupported_operating_systems:[]},d={id:"reference/sources/kafka",title:"Kafka Source",description:"The Vector `kafka` source ingests data through Kafka 0.9 or later and outputs `log` events.",source:"@site/docs/reference/sources/kafka.md",permalink:"/docs/reference/sources/kafka",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sources/kafka.md",sidebar_label:'kafka|["log"]',sidebar:"docs",previous:{title:"Journald Source",permalink:"/docs/reference/sources/journald"},next:{title:"Prometheus Source",permalink:"/docs/reference/sources/prometheus"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"auto_offset_reset",id:"auto_offset_reset",children:[]},{value:"bootstrap_servers",id:"bootstrap_servers",children:[]},{value:"group_id",id:"group_id",children:[]},{value:"key_field",id:"key_field",children:[]},{value:"session_timeout_ms",id:"session_timeout_ms",children:[]},{value:"topics",id:"topics",children:[]}]},{value:"Output",id:"output",children:[{value:"message",id:"message",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],b={rightToc:p},f="wrapper";function h(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(f,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," source ingests data through Kafka 0.9 or later and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"common",mdxType:"TabItem"},Object(r.b)(i.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  # REQUIRED\n  type = "kafka" # must be: "kafka"\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # example\n  group_id = "consumer-group-name" # example\n  topics = ["^(prefix1|prefix2)-.+", "topic-1", "topic-2"] # example\n\n  # OPTIONAL\n  key_field = "user_id" # example, no default\n'))),Object(r.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)(i.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  # REQUIRED\n  type = "kafka" # must be: "kafka"\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # example\n  group_id = "consumer-group-name" # example\n  topics = ["^(prefix1|prefix2)-.+", "topic-1", "topic-2"] # example\n\n  # OPTIONAL\n  auto_offset_reset = "largest" # default\n  key_field = "user_id" # example, no default\n  session_timeout_ms = 10000 # default, milliseconds\n')))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(c.a,{filters:!0,mdxType:"Fields"},Object(r.b)(u.a,{common:!1,defaultValue:"largest",enumValues:null,examples:["smallest","earliest","beginning","largest","latest","end","error"],name:"auto_offset_reset",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"auto_offset_reset"},"auto_offset_reset"),Object(r.b)("p",null,"If offsets for consumer group do not exist, set them using this strategy. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"}),"librdkafka documentation")," for ",Object(r.b)("inlineCode",{parentName:"p"},"auto.offset.reset")," option for explanation.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["10.14.22.123:9092,10.14.23.332:9092"],name:"bootstrap_servers",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"bootstrap_servers"},"bootstrap_servers"),Object(r.b)("p",null,'A comma-separated list of host and port pairs that are the addresses of the Kafka brokers in a "bootstrap" Kafka cluster that a Kafka client connects to initially to bootstrap itself.')),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["consumer-group-name"],name:"group_id",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"group_id"},"group_id"),Object(r.b)("p",null,"The consumer group name to be used to consume events from Kafka.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["user_id"],name:"key_field",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"key_field"},"key_field"),Object(r.b)("p",null,"The log field name to use for the topic key. If unspecified, the key would not be added to the log event. If the message has null key, then this field would not be added to the log event.")),Object(r.b)(u.a,{common:!1,defaultValue:1e4,enumValues:null,examples:[5e3,1e4],name:"session_timeout_ms",path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"milliseconds",mdxType:"Field"},Object(r.b)("h3",{id:"session_timeout_ms"},"session_timeout_ms"),Object(r.b)("p",null,"The Kafka session timeout in milliseconds.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:[["^(prefix1|prefix2)-.+","topic-1","topic-2"]],name:"topics",path:null,relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"topics"},"topics"),Object(r.b)("p",null,"The Kafka topics names to read events from. Regex is supported if the topic begins with ",Object(r.b)("inlineCode",{parentName:"p"},"^"),"."))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," source ingests data through Kafka 0.9 or later and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events.\nFor example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "message": "Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100",\n  "timestamp": "2019-11-01T21:15:47+00:00"\n}\n')),Object(r.b)("p",null,"More detail on the output schema is below."),Object(r.b)(c.a,{filters:!0,mdxType:"Fields"},Object(r.b)(u.a,{defaultValue:null,enumValues:null,examples:["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"],name:"message",path:null,required:!0,type:"string",mdxType:"Field"},Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"The raw event message, unaltered.")),Object(r.b)(u.a,{defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],name:"timestamp",path:null,required:!0,type:"timestamp",mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"The exact time the event was ingested."))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}h.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,r]=Object(n.useState)(!1),[s,o]=Object(n.useState)(!1),[i,c]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),d=u.some(e=>e.props.required),p=u;return a&&(p=p.filter(e=>e.props.common)),s&&(p=p.filter(e=>e.props.required)),i&&(p=p.filter(e=>e.props.name.toLowerCase().includes(i.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},p.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>c(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),d&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:s}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(p)||p.length>0?p:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),r=a(241),s=a.n(r),o=(a(242),a(244)),i=a(251);function c(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${c(t.value)}`:`${u(Object.keys(t)[0])} = ${c(Object.values(t)[0])}`:e?`${e} = ${c(t)}`:`${c(t)}`;var a}function d({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},c(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},c(n))),t.push(" ");return t}function p({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(o.a,{fileName:"vector.toml"}),l.a.createElement(i.a,{className:"language-toml"},n))}function f({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,c(a)))}function h({defaultValue:e,enumValues:t,examples:a,name:r,path:s,relevantWhen:o}){const[i,c]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(p,{name:r,path:s,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(d,{values:t})):null,o?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(f,{value:o})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>c(!i)},i?"Hide examples":"View examples"),i&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:r,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:o,name:i,path:c,relevantWhen:u,templateable:m,type:d,unit:p,required:b}){const[f,v]=Object(n.useState)(!1);let g=e;return f&&(g=g.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:s()("field","section",b?"field-required":"",f?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},d),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),p&&l.a.createElement("span",{className:"badge badge--secondary"},p),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),g,!f&&l.a.createElement(h,{defaultValue:a,enumValues:r,examples:o,name:i,path:c,relevantWhen:u}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),s=a(252),o=a(241),i=a.n(o),c=a(253),u=a.n(c);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:s,setSelectedValue:o}){return r.a.createElement("div",{className:t?"tabs--centered":""},r.a.createElement("ul",{className:i()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>r.a.createElement("li",{className:i()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>o(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return r.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:s,defaultValue:o,select:i,style:c,values:p,urlKey:b}=e,[f,h]=Object(l.useState)(o);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&b){let e=u.a.parse(window.location.search);e[b]&&h(e[b])}},[]),r.a.createElement("div",null,p.length>1&&(i?r.a.createElement(d,Object(n.a)({selectedValue:f,setSelectedValue:h},e)):r.a.createElement(m,Object(n.a)({selectedValue:f,setSelectedValue:h},e))),r.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(s).filter(e=>e.props.value===f)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);