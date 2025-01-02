"use strict";(self.webpackChunktechnical_tutorial=self.webpackChunktechnical_tutorial||[]).push([[8876],{5860:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var t=o(4848),r=o(8453);const l={},s="Control Plane Components",a={id:"devops/containerization/kubernetes/control-plane",title:"Control Plane Components",description:"Control plane manages the overall state of the cluster. It can run be run on any machine in the cluster, but setup scripts typically start all control plane components on the same machine, and do not run user containers on this machine.",source:"@site/docs/devops/containerization/kubernetes/control-plane.md",sourceDirName:"devops/containerization/kubernetes",slug:"/devops/containerization/kubernetes/control-plane",permalink:"/TechnicalTutorial/docs/devops/containerization/kubernetes/control-plane",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},i=[{value:"1. kube-apiserver",id:"1-kube-apiserver",level:2},{value:"2. etcd",id:"2-etcd",level:2},{value:"3. kube-scheduler",id:"3-kube-scheduler",level:2},{value:"4. kube-controller-manager",id:"4-kube-controller-manager",level:2},{value:"cloud-controller-manager(optional)",id:"cloud-controller-manageroptional",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"control-plane-components",children:"Control Plane Components"})}),"\n",(0,t.jsx)(n.p,{children:"Control plane manages the overall state of the cluster. It can run be run on any machine in the cluster, but setup scripts typically start all control plane components on the same machine, and do not run user containers on this machine."}),"\n",(0,t.jsx)(n.h2,{id:"1-kube-apiserver",children:"1. kube-apiserver"}),"\n",(0,t.jsx)(n.p,{children:"The API server is a component of the kubernetes control plane that exposes the Kubernetes API. The API server is the front end of the kubernetes control plane."}),"\n",(0,t.jsx)(n.p,{children:"kube-apiserver is designed to scale horizontally -- that is, it scales by deploying more instances. You can run several instances of kube-apiserver and balance traffic between those instances."}),"\n",(0,t.jsx)(n.h2,{id:"2-etcd",children:"2. etcd"}),"\n",(0,t.jsx)(n.p,{children:"Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data."}),"\n",(0,t.jsx)(n.h2,{id:"3-kube-scheduler",children:"3. kube-scheduler"}),"\n",(0,t.jsx)(n.p,{children:"Control plane component that watches for newly created Pods with no assigned node, and selects a node for them to run on."}),"\n",(0,t.jsx)(n.p,{children:"Factors taken into account for scheduling decisions include: individual and collective resouce requirements, hardware/software/policy constraints, affinity and anti-affinity specifications, data locality, inter-workload interference, and deadlines."}),"\n",(0,t.jsx)(n.h2,{id:"4-kube-controller-manager",children:"4. kube-controller-manager"}),"\n",(0,t.jsx)(n.p,{children:"Control plane component that runs controller process."}),"\n",(0,t.jsx)(n.p,{children:"Logically, each controller is a separate process, but to reduce complexity, they are all complied into a single binary and run in a single process."}),"\n",(0,t.jsx)(n.p,{children:"Some types of controllers:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Node Controller:"})," Responsible for noticing and responding when nodes go down.\n",(0,t.jsx)(n.strong,{children:"Job Controller:"})," Watches for job objects that represent one-off tasks, then creates Pods to run those tasks to completion.\n",(0,t.jsx)(n.strong,{children:"EndpointSlice Controller:"})," Populates EndpointSlice objects(to provide a link between Services and Pods).\n",(0,t.jsx)(n.strong,{children:"ServiceAccount Controller:"})," Create default ServiceAccounts for new namespaces."]}),"\n",(0,t.jsx)(n.h2,{id:"cloud-controller-manageroptional",children:"cloud-controller-manager(optional)"}),"\n",(0,t.jsx)(n.p,{children:"Control plane component that embeds cloud-specific control logic. The cloud controller manager lets you link your cluster into your cloud provider's API, and separates out the components that interact with that cloud platform from components that only interact with your cluster."}),"\n",(0,t.jsx)(n.p,{children:"As with the kube-controller-manager, the cloud-controller-manager combines several logically independent control loops into a single binary that you run as a singile process. You can scale horizontally(run more than one copy) to improve performance or to help tolerate failures."}),"\n",(0,t.jsx)(n.p,{children:"The following controllers can have cloud provider dependencies:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Node Controller:"})," For checking the cloud provider to determine if a node has been deleted in the cloud after it stops responding.\n",(0,t.jsx)(n.strong,{children:"Route Controller:"})," For setting up routes in the underlying cloud infrastructure.\n",(0,t.jsx)(n.strong,{children:"Service Controller:"})," For creating, updating and deleting cloud provider load balancers."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);