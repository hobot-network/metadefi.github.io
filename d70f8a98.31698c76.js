(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{223:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return m})),t.d(a,"rightToc",(function(){return d})),t.d(a,"default",(function(){return b}));var n=t(1),r=t(6),l=(t(0),t(242)),s=t(244),c=t(245),i=t(246),o={description:"The Vector `add_tags` transform accepts `metric` events and allows you to add one or more metric tags.",event_types:["metric"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+add_tags%22",sidebar_label:'add_tags|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/transforms/add_tags.rs",status:"prod-ready",title:"Add Tags Transform"},m={id:"reference/transforms/add_tags",title:"Add Tags Transform",description:"The Vector `add_tags` transform accepts `metric` events and allows you to add one or more metric tags.",source:"@site/docs/reference/transforms/add_tags.md",permalink:"/docs/reference/transforms/add_tags",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/transforms/add_tags.md",sidebar_label:'add_tags|["metric"]',sidebar:"docs",previous:{title:"Add Fields Transform",permalink:"/docs/reference/transforms/add_fields"},next:{title:"ANSI Stripper Transform",permalink:"/docs/reference/transforms/ansi_stripper"}},d=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"tags",id:"tags",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],u={rightToc:d},p="wrapper";function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)(p,Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Vector ",Object(l.b)("inlineCode",{parentName:"p"},"add_tags")," transform accepts ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(l.b)("inlineCode",{parentName:"a"},"metric"))," events and allows you to add one or more metric tags."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.my_transform_id]\n  # REQUIRED - General\n  type = "add_tags" # must be: "add_tags"\n  inputs = ["my-source-id"] # example\n\n  # REQUIRED - Tags\n  [transforms.my_transform_id.tags]\n    static_tag = "my value" # example\n    env_tag = "${ENV_VAR}" # example\n')),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)(c.a,{filters:!0,mdxType:"Fields"},Object(l.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[],name:"tags",path:null,relevantWhen:null,required:!0,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(l.b)("h3",{id:"tags"},"tags"),Object(l.b)("p",null,"A table of key/value pairs representing the tags to be added to the metric."),Object(l.b)(c.a,{filters:!1,mdxType:"Fields"},Object(l.b)(i.a,{common:!0,defaultValue:null,enumValues:null,examples:[{static_tag:"my value"},{env_tag:"${ENV_VAR}"}],name:"`[tag-name]`",path:"tags",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(l.b)("h4",{id:"tag-name"},Object(l.b)("inlineCode",{parentName:"h4"},"[tag-name]")),Object(l.b)("p",null,"The name of the tag to add. Due to the nature of metric tags, the value must be a string."))))),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(l.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(l.b)("p",null,"You can learn more in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}b.isMDXComponent=!0},245:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(85);a.a=function({children:e,filters:a}){const[t,l]=Object(n.useState)(!1),[s,c]=Object(n.useState)(!1),[i,o]=Object(n.useState)(null);let m=Array.isArray(e)?e:[e],d=m.some(e=>e.props.common),u=m.some(e=>e.props.required),p=m;return t&&(p=p.filter(e=>e.props.common)),s&&(p=p.filter(e=>e.props.required)),i&&(p=p.filter(e=>e.props.name.toLowerCase().includes(i.toLowerCase()))),r.a.createElement("div",{className:"fields"},m.length>1&&!1!==a?r.a.createElement("div",{className:"filters"},r.a.createElement("span",{className:"result-count"},p.length," items"),r.a.createElement("div",{className:" search"},r.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"checkboxes"},d&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:e=>l(e.currentTarget.checked),checked:t}),"common only"),u&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:e=>c(e.currentTarget.checked),checked:s}),"required only"))):null,r.a.createElement("div",{className:"section-list"},!Array.isArray(p)||p.length>0?p:r.a.createElement("div",{className:"empty"},r.a.createElement("div",{className:"icon"},"\u2639"),r.a.createElement("div",null,"No fields found"))))}},246:function(e,a,t){"use strict";t(12);var n=t(0),r=t.n(n),l=t(241),s=t.n(l),c=(t(242),t(244)),i=t(251);function o(e){return JSON.stringify(e)}function m(e){return e.includes(".")?'"'+e+'"':e}function d(e,a){return(t=a)&&t.constructor===Object?"name"in a&&"value"in a?`${m(a.name)} = ${o(a.value)}`:`${m(Object.keys(a)[0])} = ${o(Object.values(a)[0])}`:e?`${e} = ${o(a)}`:`${o(a)}`;var t}function u({values:e}){let a=[];if(Array.isArray(e))for(var t in e){let n=e[t];a.push(r.a.createElement("code",{key:n},o(n))),a.push(" ")}else for(var n in e)a.push(r.a.createElement("code",{key:n,title:e[n]},o(n))),a.push(" ");return a}function p({name:e,path:a,value:t}){return r.a.createElement("code",null,d(null,t))}function b({name:e,path:a,values:t}){let n="";return t.forEach((function(a){n+=d(e,a)+"\n"})),a&&(n=`[${a}]\n${n}`),r.a.createElement("div",null,r.a.createElement(c.a,{fileName:"vector.toml"}),r.a.createElement(i.a,{className:"language-toml"},n))}function f({value:e}){let a=Object.keys(e)[0],t=Object.values(e)[0];return r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:`#${a}`},a))," = ",r.a.createElement("code",null,o(t)))}function g({defaultValue:e,enumValues:a,examples:t,name:l,path:s,relevantWhen:c}){const[i,o]=Object(n.useState)(!1);return e||a||t&&t.length>0?r.a.createElement("div",{className:"info"},void 0!==e?e?r.a.createElement("div",null,"Default: ",r.a.createElement(p,{name:l,path:s,value:e})):r.a.createElement("div",null,"No default"):null,a?r.a.createElement("div",null,"Enum, must be one of: ",r.a.createElement(u,{values:a})):null,c?r.a.createElement("div",null,"Only relevant when: ",r.a.createElement(f,{value:c})):null,r.a.createElement("div",null,r.a.createElement("div",{className:"show-more",onClick:()=>o(!i)},i?"Hide examples":"View examples"),i&&r.a.createElement("div",{className:"examples"},r.a.createElement(b,{name:l,path:s,values:t})))):null}a.a=function({children:e,common:a,defaultValue:t,enumValues:l,examples:c,name:i,path:o,relevantWhen:m,templateable:d,type:u,unit:p,required:b}){const[f,h]=Object(n.useState)(!1);let v=e;return f&&(v=v.filter(e=>"p"!=e.props.originalType)),r.a.createElement("div",{className:s()("field","section",b?"field-required":"",f?"field-collapsed":""),required:b},r.a.createElement("div",{className:"badges"},a&&r.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),d&&r.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),r.a.createElement("span",{className:"badge badge--secondary"},u),l&&Object.keys(l).length>0&&r.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),p&&r.a.createElement("span",{className:"badge badge--secondary"},p),b?r.a.createElement("span",{className:"badge badge--danger"},"required"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),v,!f&&r.a.createElement(g,{defaultValue:t,enumValues:l,examples:c,name:i,path:o,relevantWhen:m}))}}}]);