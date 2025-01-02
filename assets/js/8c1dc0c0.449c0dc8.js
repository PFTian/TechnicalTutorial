"use strict";(self.webpackChunktechnical_tutorial=self.webpackChunktechnical_tutorial||[]).push([[1587],{9612:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=l(4848),r=l(8453);const t={},o="1. kubernetes architecture",s={id:"devops/containerization/kubernetes/intro",title:"intro",description:"This is the introduction of Kubernetes",source:"@site/docs/devops/containerization/kubernetes/intro.md",sourceDirName:"devops/containerization/kubernetes",slug:"/devops/containerization/kubernetes/intro",permalink:"/TechnicalTutorial/docs/devops/containerization/kubernetes/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Install Docker Engine on Ubuntu",permalink:"/TechnicalTutorial/docs/devops/containerization/docker/docker-installation"},next:{title:"Snyk",permalink:"/TechnicalTutorial/docs/devops/security/snyk"}},c={},d=[{value:"Control Plane (Master Node)",id:"control-plane-master-node",level:2},{value:"workder Node",id:"workder-node",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This is the introduction of Kubernetes"}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1-kubernetes-architecture",children:"1. kubernetes architecture"})}),"\n",(0,i.jsx)(n.h2,{id:"control-plane-master-node",children:"Control Plane (Master Node)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"API Server"}),"\n",(0,i.jsx)(n.li,{children:"Scheduler"}),"\n",(0,i.jsx)(n.li,{children:"cluster Store"}),"\n",(0,i.jsxs)(n.li,{children:["Controller Manager","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Node Controller"}),"\n",(0,i.jsx)(n.li,{children:"ReplicaSet"}),"\n",(0,i.jsx)(n.li,{children:"Enpoint"}),"\n",(0,i.jsx)(n.li,{children:"NameSpace"}),"\n",(0,i.jsx)(n.li,{children:"Service Account"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cloud Controller Manager","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Load Balancers"}),"\n",(0,i.jsx)(n.li,{children:"Storage"}),"\n",(0,i.jsx)(n.li,{children:"Instances"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"workder-node",children:"workder Node"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kublet"}),"\n",(0,i.jsx)(n.li,{children:"Contianer Runtime (containerd)"}),"\n",(0,i.jsx)(n.li,{children:"kube Proxy"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"2-kubectl",children:"2. kubectl"}),"\n",(0,i.jsx)(n.p,{children:"What is kubectl - write a defination here"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get Pods"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get pods\nkubectl get pods -A\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get Pods in namespace"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get pod -n kube-system\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get NameSpaces"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get namespaces\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Describe a pod"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl describe pod pod-name\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get pod with format"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get pod pod-name -o wide // wider information\nkubectl get pod pod-name -o json // json format\nkubectl get pod pod-name -o yaml // yaml format\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Log specific container"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl logs pod-name -c contianer-name\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Access to a running pod"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl exec -it pod-name -c container-name -- sh\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Access to a running pod with running command line one time"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl exec pod-name -c container-name -- ps aux\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check rollout history"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl rollout history deployment deployment-name\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rollout to deployment"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl rollout undo deployment deployment-name // preivous version\nkubectl rollout undo deployment deployment-name --to-revision=1\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pause and Resume deployment"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl rollout pause deployment deployment-name\nkubectl rollout resume deployment deployment-name\n"})}),"\n",(0,i.jsx)(n.h1,{id:"3-what-is-pod-smallest-deployable-unit-of-k8s",children:"3. what is Pod (Smallest deployable Unit of k8s)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Relationship between Pod and containers?"}),"\n",(0,i.jsx)(n.li,{children:"Volumes"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Relative kubectl about Pods"}),"\n",(0,i.jsx)(n.h1,{id:"4-deployment--replicaset",children:"4. Deployment & ReplicaSet"}),"\n",(0,i.jsx)(n.p,{children:"Deployment defination here"}),"\n",(0,i.jsx)(n.p,{children:"Relative kubectl about Deployment"}),"\n",(0,i.jsx)(n.p,{children:"Replica Set Defination here"}),"\n",(0,i.jsx)(n.p,{children:"Relative kubectl about Deployment"}),"\n",(0,i.jsx)(n.p,{children:"Two Deployment stratgies: Recreate & Rolling Update"}),"\n",(0,i.jsx)(n.h1,{id:"5-services",children:"5. Services"}),"\n",(0,i.jsx)(n.p,{children:"Services Definations here"}),"\n",(0,i.jsx)(n.p,{children:"Types of Services"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ClusterIP"}),"\n",(0,i.jsx)(n.li,{children:"NodePort"}),"\n",(0,i.jsx)(n.li,{children:"ExternalName"}),"\n",(0,i.jsx)(n.li,{children:"LoadBalancer"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"6-labels-selector--annotations",children:"6 Labels, Selector & Annotations"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>s});var i=l(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);