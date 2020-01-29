(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return f}));var n=a(1),l=a(6),r=(a(0),a(242)),c=a(247),o=a(248),s=a(244),u=a(245),i=a(246),d={delivery_guarantee:"best_effort",description:"The Vector `journald` source ingests data through log records from journald and outputs `log` events.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+journald%22",operating_systems:["linux"],sidebar_label:'journald|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/journald.rs",status:"beta",title:"Journald Source",unsupported_operating_systems:["macos","windows"]},m={id:"reference/sources/journald",title:"Journald Source",description:"The Vector `journald` source ingests data through log records from journald and outputs `log` events.",source:"@site/docs/reference/sources/journald.md",permalink:"/docs/reference/sources/journald",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sources/journald.md",sidebar_label:'journald|["log"]',sidebar:"docs",previous:{title:"File Source",permalink:"/docs/reference/sources/file"},next:{title:"Kafka Source",permalink:"/docs/reference/sources/kafka"}},b=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"batch_size",id:"batch_size",children:[]},{value:"current_boot_only",id:"current_boot_only",children:[]},{value:"data_dir",id:"data_dir",children:[]},{value:"local_only",id:"local_only",children:[]},{value:"units",id:"units",children:[]}]},{value:"Output",id:"output",children:[{value:"<code>[record-key]</code>",id:"record-key",children:[]},{value:"host",id:"host",children:[]},{value:"message",id:"message",children:[]},{value:"timestamp",id:"timestamp",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],p={rightToc:b},h="wrapper";function f(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(h,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"journald")," source ingests data through log records from journald and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(c.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"common",mdxType:"TabItem"},Object(r.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  # REQUIRED\n  type = "journald" # must be: "journald"\n\n  # OPTIONAL\n  current_boot_only = true # default\n  units = [] # default\n'))),Object(r.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  # REQUIRED\n  type = "journald" # must be: "journald"\n\n  # OPTIONAL\n  batch_size = 16 # default\n  current_boot_only = true # default\n  data_dir = "/var/lib/vector" # example, no default\n  local_only = true # default\n  units = [] # default\n')))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(u.a,{filters:!0,mdxType:"Fields"},Object(r.b)(i.a,{common:!1,defaultValue:16,enumValues:null,examples:[16],name:"batch_size",path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"batch_size"},"batch_size"),Object(r.b)("p",null,"The systemd journal is read in batches, and a checkpoint is set at the end of each batch. This option limits the size of the batch.")),Object(r.b)(i.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"current_boot_only",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"current_boot_only"},"current_boot_only"),Object(r.b)("p",null,"Include only entries from the current boot.")),Object(r.b)(i.a,{common:!1,defaultValue:null,enumValues:null,examples:["/var/lib/vector"],name:"data_dir",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"data_dir"},"data_dir"),Object(r.b)("p",null,"The directory used to persist the journal checkpoint position. By default, the global ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#data_dir"}),Object(r.b)("inlineCode",{parentName:"a"},"data_dir"))," is used. Please make sure the Vector project has write permissions to this dir.")),Object(r.b)(i.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"local_only",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"local_only"},"local_only"),Object(r.b)("p",null,"Include only entries from the local system")),Object(r.b)(i.a,{common:!0,defaultValue:[],enumValues:null,examples:[["ntpd","sysinit.target"]],name:"units",path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"units"},"units"),Object(r.b)("p",null,"The list of units names to monitor. If empty or not present, all units are accepted. Unit names lacking a ",Object(r.b)("inlineCode",{parentName:"p"},'"."')," will have ",Object(r.b)("inlineCode",{parentName:"p"},'".service"')," appended to make them a valid service unit name."))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"journald")," source ingests data through log records from journald and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events.\nFor example:"),Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"__REALTIME_TIMESTAMP=1564173027000443\n__MONOTONIC_TIMESTAMP=98694000446\n_BOOT_ID=124c781146e841ae8d9b4590df8b9231\nSYSLOG_FACILITY=3\n_UID=0\n_GID=0\n_CAP_EFFECTIVE=3fffffffff\n_MACHINE_ID=c36e9ea52800a19d214cb71b53263a28\n_HOSTNAME=lorien.example.com\nPRIORITY=6\n_TRANSPORT=stdout\n_STREAM_ID=92c79f4b45c4457490ebdefece29995e\nSYSLOG_IDENTIFIER=ntpd\n_PID=2156\n_COMM=ntpd\n_EXE=/usr/sbin/ntpd\n_CMDLINE=ntpd: [priv]\n_SYSTEMD_CGROUP=/system.slice/ntpd.service\n_SYSTEMD_UNIT=ntpd.service\n_SYSTEMD_SLICE=system.slice\n_SYSTEMD_INVOCATION_ID=496ad5cd046d48e29f37f559a6d176f8\nMESSAGE=reply from 192.168.1.2: offset -0.001791 delay 0.000176, next query 1500s\n")),Object(r.b)("p",null,"A log event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": <2019-07-26T20:30:27.000443Z>,\n  "message": "reply from 192.168.1.2: offset -0.001791 delay 0.000176, next query 1500s",\n  "host": "lorien.example.com",\n  "__REALTIME_TIMESTAMP": "1564173027000443",\n  "__MONOTONIC_TIMESTAMP": "98694000446",\n  "_BOOT_ID": "124c781146e841ae8d9b4590df8b9231",\n  "SYSLOG_FACILITY": "3",\n  "_UID": "0",\n  "_GID": "0",\n  "_CAP_EFFECTIVE": "3fffffffff",\n  "_MACHINE_ID": "c36e9ea52800a19d214cb71b53263a28",\n  "PRIORITY": "6",\n  "_TRANSPORT": "stdout",\n  "_STREAM_ID": "92c79f4b45c4457490ebdefece29995e",\n  "SYSLOG_IDENTIFIER": "ntpd",\n  "_PID": "2156",\n  "_COMM": "ntpd",\n  "_EXE": "/usr/sbin/ntpd",\n  "_CMDLINE": "ntpd: [priv]",\n  "_SYSTEMD_CGROUP": "/system.slice/ntpd.service",\n  "_SYSTEMD_UNIT": "ntpd.service",\n  "_SYSTEMD_SLICE": "system.slice",\n  "_SYSTEMD_INVOCATION_ID": "496ad5cd046d48e29f37f559a6d176f8"\n}\n')),Object(r.b)("p",null,"More detail on the output schema is below."),Object(r.b)(u.a,{filters:!0,mdxType:"Fields"},Object(r.b)(i.a,{defaultValue:null,enumValues:null,examples:[{_SYSTEMD_UNIT:"ntpd.service"},{_BOOT_ID:"124c781146e841ae8d9b4590df8b9231"}],name:"`[record-key]`",path:null,required:!1,type:"*",mdxType:"Field"},Object(r.b)("h3",{id:"record-key"},Object(r.b)("inlineCode",{parentName:"h3"},"[record-key]")),Object(r.b)("p",null,"Additional Journald fields are passed through as log fields.")),Object(r.b)(i.a,{defaultValue:null,enumValues:null,examples:["my.host.com"],name:"host",path:null,required:!0,type:"string",mdxType:"Field"},Object(r.b)("h3",{id:"host"},"host"),Object(r.b)("p",null,"The value of the journald ",Object(r.b)("inlineCode",{parentName:"p"},"_HOSTNAME")," field.")),Object(r.b)(i.a,{defaultValue:null,enumValues:null,examples:["Started GET / for 127.0.0.1 at 2012-03-10 14:28:14 +0100"],name:"message",path:null,required:!0,type:"string",mdxType:"Field"},Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"The value of the journald ",Object(r.b)("inlineCode",{parentName:"p"},"MESSAGE")," field.")),Object(r.b)(i.a,{defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47+00:00"],name:"timestamp",path:null,required:!0,type:"timestamp",mdxType:"Field"},Object(r.b)("h3",{id:"timestamp"},"timestamp"),Object(r.b)("p",null,"The value of the journald ",Object(r.b)("inlineCode",{parentName:"p"},"_SOURCE_REALTIME_TIMESTAMP")," field."))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}f.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,r]=Object(n.useState)(!1),[c,o]=Object(n.useState)(!1),[s,u]=Object(n.useState)(null);let i=Array.isArray(e)?e:[e],d=i.some(e=>e.props.common),m=i.some(e=>e.props.required),b=i;return a&&(b=b.filter(e=>e.props.common)),c&&(b=b.filter(e=>e.props.required)),s&&(b=b.filter(e=>e.props.name.toLowerCase().includes(s.toLowerCase()))),l.a.createElement("div",{className:"fields"},i.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},b.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>u(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},d&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),m&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:c}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(b)||b.length>0?b:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),r=a(241),c=a.n(r),o=(a(242),a(244)),s=a(251);function u(e){return JSON.stringify(e)}function i(e){return e.includes(".")?'"'+e+'"':e}function d(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${i(t.name)} = ${u(t.value)}`:`${i(Object.keys(t)[0])} = ${u(Object.values(t)[0])}`:e?`${e} = ${u(t)}`:`${u(t)}`;var a}function m({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},u(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},u(n))),t.push(" ");return t}function b({name:e,path:t,value:a}){return l.a.createElement("code",null,d(null,a))}function p({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=d(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(o.a,{fileName:"vector.toml"}),l.a.createElement(s.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,u(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:r,path:c,relevantWhen:o}){const[s,u]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(b,{name:r,path:c,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(m,{values:t})):null,o?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:o})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>u(!s)},s?"Hide examples":"View examples"),s&&l.a.createElement("div",{className:"examples"},l.a.createElement(p,{name:r,path:c,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:o,name:s,path:u,relevantWhen:i,templateable:d,type:m,unit:b,required:p}){const[h,O]=Object(n.useState)(!1);let v=e;return h&&(v=v.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:c()("field","section",p?"field-required":"",h?"field-collapsed":""),required:p},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),d&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},m),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),b&&l.a.createElement("span",{className:"badge badge--secondary"},b),p?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),v,!h&&l.a.createElement(f,{defaultValue:a,enumValues:r,examples:o,name:s,path:u,relevantWhen:i}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),c=a(252),o=a(241),s=a.n(o),u=a(253),i=a.n(u);function d({block:e,centered:t,className:a,style:n,values:l,selectedValue:c,setSelectedValue:o}){return r.a.createElement("div",{className:t?"tabs--centered":""},r.a.createElement("ul",{className:s()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>r.a.createElement("li",{className:s()("tab-item",{"tab-item--active":c===e}),key:e,onClick:()=>o(e)},t))))}function m({selectedValue:e,setSelectedValue:t,values:a}){return r.a.createElement(c.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:c,defaultValue:o,select:s,style:u,values:b,urlKey:p}=e,[h,f]=Object(l.useState)(o);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=i.a.parse(window.location.search);e[p]&&f(e[p])}},[]),r.a.createElement("div",null,b.length>1&&(s?r.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:f},e)):r.a.createElement(d,Object(n.a)({selectedValue:h,setSelectedValue:f},e))),r.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(c).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);