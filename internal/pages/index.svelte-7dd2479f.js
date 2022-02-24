var p=Object.defineProperty,v=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var g=(l,n,a)=>n in l?p(l,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[n]=a,d=(l,n)=>{for(var a in n||(n={}))N.call(n,a)&&g(l,a,n[a]);if(s)for(var a of s(n))u.call(n,a)&&g(l,a,n[a]);return l},i=(l,n)=>v(l,b(n));import{S as c,i as S,s as C,w as f,x as D,y as T,G as z,q as y,o as h,B as x}from"../chunks/vendor-132ca1f5.js";import{R as e,Q as r,M as o,a as P}from"../chunks/radar-config-0350f0c4.js";const B=[{name:"ADOPT",color:"#EB4646",textColor:"#DBD1C7",index:e.Adopt},{name:"TRIAL",color:"#CAE0DC",textColor:"#001932",index:e.Trial},{name:"ASSESS",color:"#DBD1C7",textColor:"#001932",index:e.Assess},{name:"HOLD",color:"#001932",textColor:"#DBD1C7",index:e.Hold}],R=[{name:"Languages & Frameworks",index:r.BottomRight},{name:"Products, Platforms & Cloud",index:r.BottomLeft},{name:"Techniques",index:r.TopLeft},{name:"Tools",index:r.TopRight}],w=[{ring:e.Adopt,label:"React.js",moved:o.None},{ring:e.Adopt,label:"Next.js",moved:o.None},{ring:e.Adopt,label:"TypeScript",moved:o.None},{ring:e.Hold,label:"JavaScript",moved:o.None},{ring:e.Trial,label:"Node.js",moved:o.None,link:"https://nodejs.org/en/"},{ring:e.Adopt,label:"Gatsby",moved:o.None},{ring:e.Adopt,label:"C#",moved:o.None},{ring:e.Assess,label:"NestJS",moved:o.None},{ring:e.Adopt,label:"ASP.NET",moved:o.None},{ring:e.Adopt,label:"OpenAPI",moved:o.None},{ring:e.Adopt,label:"GraphQL",moved:o.None},{ring:e.Hold,label:"PHP",moved:o.Out},{ring:e.Assess,label:"Java",moved:o.In}],F=[{ring:e.Adopt,label:"Amazon DynamoDB",moved:o.None},{ring:e.Adopt,label:"Amazon SQS",moved:o.None},{ring:e.Adopt,label:"Azure CosmosDB",moved:o.None},{ring:e.Adopt,label:"Sanity.io",moved:o.None},{ring:e.Adopt,label:"Contentful",moved:o.None},{ring:e.Assess,label:"Shopify",moved:o.None},{ring:e.Adopt,label:"Vercel",moved:o.None},{ring:e.Assess,label:"Strapi",moved:o.None},{ring:e.Assess,label:"Omnium",moved:o.None},{ring:e.Assess,label:"Optimizely Zaius",moved:o.None},{ring:e.Adopt,label:"Optimizely CMS",moved:o.None},{ring:e.Trial,label:"Optimizely Commerce",moved:o.None},{ring:e.Hold,label:"Umbraco",moved:o.None},{ring:e.Adopt,label:"Azure Service Bus",moved:o.None},{ring:e.Adopt,label:"Azure Storage",moved:o.None},{ring:e.Adopt,label:"Azure AD",moved:o.None},{ring:e.Adopt,label:"Azure Functions",moved:o.None},{ring:e.Adopt,label:"Azure ARM Templates",moved:o.None},{ring:e.Adopt,label:"AWS EC2",moved:o.None},{ring:e.Adopt,label:"Azure App Service",moved:o.None},{ring:e.Adopt,label:"Azure App Insights",moved:o.None},{ring:e.Adopt,label:"AWS CloudWatch",moved:o.None},{ring:e.Adopt,label:"Azure Kubernetest Service",moved:o.None},{ring:e.Adopt,label:"AWS Fargate",moved:o.None},{ring:e.Assess,label:"Power BI",moved:o.None},{ring:e.Adopt,label:"Elasticsearch",moved:o.None},{ring:e.Adopt,label:"Google Cloud Translation API",moved:o.None},{ring:e.Adopt,label:"Microsoft SQL Server",moved:o.None},{ring:e.Adopt,label:"Entity Framework",moved:o.None},{ring:e.Adopt,label:"Optimizely Search & Navigation",moved:o.None},{ring:e.Adopt,label:"Optimizely DXP",moved:o.None},{ring:e.Adopt,label:"AWS SES",moved:o.None},{ring:e.Adopt,label:"Azure Sendgrid",moved:o.None},{ring:e.Adopt,label:"Azure VMs",moved:o.None},{ring:e.Adopt,label:"Azure Key Vault",moved:o.None},{ring:e.Adopt,label:"Firebase",moved:o.None},{ring:e.Adopt,label:"Azure Cognitive Services",moved:o.None},{ring:e.Adopt,label:"Blazor",moved:o.None},{ring:e.Adopt,label:"Sitefinity",moved:o.None},{ring:e.Hold,label:"Virto Commerce",moved:o.None},{ring:e.Adopt,label:"Amazon S3",moved:o.None},{ring:e.Adopt,label:"Amazon CloudFront",moved:o.None},{ring:e.Trial,label:"AWS Lambda",moved:o.None}],L=[{ring:e.Adopt,label:"OWASP",moved:o.None},{ring:e.Adopt,label:"TDD",moved:o.None},{ring:e.Adopt,label:"GitFlow",moved:o.None},{ring:e.Adopt,label:"Trunk Based Developmen",moved:o.None},{ring:e.Adopt,label:"IaaC",moved:o.None},{ring:e.Adopt,label:"CQRS",moved:o.None},{ring:e.Adopt,label:"Microservices",moved:o.None},{ring:e.Adopt,label:"DDD",moved:o.None},{ring:e.Adopt,label:"JAMstack",moved:o.None},{ring:e.Adopt,label:"Headless architecture",moved:o.None},{ring:e.Adopt,label:"Agile",moved:o.None},{ring:e.Adopt,label:"Scrum",moved:o.None},{ring:e.Adopt,label:"Pair Programming",moved:o.None},{ring:e.Adopt,label:"Core Review",moved:o.None},{ring:e.Adopt,label:"API management",moved:o.None},{ring:e.Adopt,label:"CI/CD",moved:o.None},{ring:e.Adopt,label:"Feature Toggling",moved:o.None},{ring:e.Adopt,label:"Focus Time",moved:o.None},{ring:e.Adopt,label:"Always upgrade as a practice",moved:o.None},{ring:e.Adopt,label:"Collective code ownership",moved:o.None},{ring:e.Adopt,label:"Metrics",moved:o.None},{ring:e.Adopt,label:"MVPs - prototyping",moved:o.None},{ring:e.Adopt,label:"Using telemetry",moved:o.None},{ring:e.Adopt,label:"2-factor auth",moved:o.None},{ring:e.Adopt,label:"code guides",moved:o.None},{ring:e.Adopt,label:"auto code formatting",moved:o.None}],O=[{ring:e.Adopt,label:"Grafana",moved:o.None},{ring:e.Adopt,label:"ELK Stack",moved:o.None},{ring:e.Adopt,label:"Kubernetes",moved:o.None},{ring:e.Adopt,label:"GitHub",moved:o.None},{ring:e.Adopt,label:"Gitlab",moved:o.None},{ring:e.Adopt,label:"Azure Devops",moved:o.None},{ring:e.Adopt,label:"TeamCity",moved:o.None},{ring:e.Adopt,label:"Octopus",moved:o.None},{ring:e.Adopt,label:"VSCode",moved:o.None},{ring:e.Adopt,label:"Visual Studio",moved:o.None},{ring:e.Adopt,label:"Jetbrains IDEs",moved:o.None},{ring:e.Adopt,label:"Postman",moved:o.None},{ring:e.Trial,label:"AWS CloudFormation",moved:o.None},{ring:e.Assess,label:"AWS Cloud Development Kit",moved:o.None},{ring:e.Trial,label:"Docker",moved:o.None},{ring:e.Assess,label:"Terraform",moved:o.None},{ring:e.Assess,label:"Serverless Framework",moved:o.None},{ring:e.Trial,label:"GitHub Actions",moved:o.None}],q=[...w.map(l=>{var n;return i(d({},l),{quadrant:r.BottomRight,active:(n=l.active)!=null?n:!0})}),...F.map(l=>{var n;return i(d({},l),{quadrant:r.BottomLeft,active:(n=l.active)!=null?n:!0})}),...L.map(l=>{var n;return i(d({},l),{quadrant:r.TopLeft,active:(n=l.active)!=null?n:!0})}),...O.map(l=>{var n;return i(d({},l),{quadrant:r.TopRight,active:(n=l.active)!=null?n:!0})})],m={items:q,quadrants:R,rings:B};function E(l){let n,a;return n=new P({props:{data:m.items,quadrants:m.quadrants,rings:m.rings}}),{c(){f(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,A){T(n,t,A),a=!0},p:z,i(t){a||(y(n.$$.fragment,t),a=!0)},o(t){h(n.$$.fragment,t),a=!1},d(t){x(n,t)}}}class W extends c{constructor(n){super();S(this,n,null,E,C,{})}}export{W as default};
