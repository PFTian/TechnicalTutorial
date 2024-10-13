"use strict";(self.webpackChunktechnical_tutorial=self.webpackChunktechnical_tutorial||[]).push([[7568],{132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var r=t(6070),s=t(5296);const c={},i="Tips",a={id:"devops/git/tips",title:"Tips",description:"Clean Up local git branches",source:"@site/docs/devops/git/tips.md",sourceDirName:"devops/git",slug:"/devops/git/tips",permalink:"/TechnicalTutorial/docs/devops/git/tips",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},o=[{value:"Clean Up local git branches",id:"clean-up-local-git-branches",level:2},{value:"Environment Branch VS Release Branch",id:"environment-branch-vs-release-branch",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tips",children:"Tips"})}),"\n",(0,r.jsx)(n.h2,{id:"clean-up-local-git-branches",children:"Clean Up local git branches"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git branch --merged | egrep -v "(^\\*|main|uat|dev)" | xargs git branch -d\n'})}),"\n",(0,r.jsx)(n.h2,{id:"environment-branch-vs-release-branch",children:"Environment Branch VS Release Branch"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Environment Branch -> Mainly for internal project"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Release Branch -> Mainly for open-to-download project"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["More details -> this ",(0,r.jsx)(n.a,{href:"https://youtu.be/ZJuUz5jWb44",children:"link"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);