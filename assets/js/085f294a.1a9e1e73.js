"use strict";(self.webpackChunktechnical_tutorial=self.webpackChunktechnical_tutorial||[]).push([[3836],{2662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(6070),s=t(5296);const l={},i="Install Gitlab Runner on Ubuntu 20.04 LTS",a={id:"devops/gitlab/gitlab-runner-installation-ubuntu",title:"Install Gitlab Runner on Ubuntu 20.04 LTS",description:"Reference: Install GitLab Runner manually on GNU/Linux",source:"@site/docs/devops/gitlab/gitlab-runner-installation-ubuntu.md",sourceDirName:"devops/gitlab",slug:"/devops/gitlab/gitlab-runner-installation-ubuntu",permalink:"/TechnicalTutorial/docs/devops/gitlab/gitlab-runner-installation-ubuntu",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Prerequirement:",id:"prerequirement",level:2},{value:"Download",id:"download",level:2},{value:"Install",id:"install",level:2},{value:"Install the package for your system as follows:",id:"install-the-package-for-your-system-as-follows",level:3},{value:"Register the Runner",id:"register-the-runner",level:3},{value:"Update",id:"update",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"install-gitlab-runner-on-ubuntu-2004-lts",children:"Install Gitlab Runner on Ubuntu 20.04 LTS"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Reference:"})," ",(0,r.jsx)(n.a,{href:"https://docs.gitlab.com/runner/install/linux-manually.html",children:"Install GitLab Runner manually on GNU/Linux"})]}),"\n",(0,r.jsx)(n.h2,{id:"prerequirement",children:"Prerequirement:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Before installing the gitlab-runner, Please ",(0,r.jsx)(n.a,{href:"https://github.com/PFTian/TechNotes/blob/master/Docker/Docker%20Installation.md",children:"install Docker"})," at first."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Notice:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"We strongly advise against installing GitLab Runner on the same machine you plan to install GitLab on. Depending on how you decide to configure GitLab Runner and what tools you use to exercise your application in the CI environment, GitLab Runner can consume significant amount of available memory."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Memory consumption calculations, that are available above, will not be valid if you decide to run GitLab Runner and the GitLab Rails application on the same machine."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"It is also not safe to install everything on a single machine, because of the security reasons - especially when you plan to use shell executor with GitLab Runner."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"We recommend using a separate machine for each GitLab Runner, if you plan to use the CI features."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,r.jsx)(n.p,{children:"To download the appropriate package for your system:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Find the latest file name and options at ",(0,r.jsx)(n.a,{href:"https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html",children:"https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Choose a version and download a binary, as described in the documentation for ",(0,r.jsx)(n.a,{href:"https://docs.gitlab.com/runner/install/bleeding-edge.html#download-any-other-tagged-release",children:"downloading any other tagged releases"})," for bleeding edge GitLab Runner releases."]}),"\n",(0,r.jsx)(n.p,{children:"For Debian or Ubuntu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -LJO https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_<arch>.deb\n"})}),"\n",(0,r.jsx)(n.p,{children:"For my example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -LJO https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_amd64.deb\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.h3,{id:"install-the-package-for-your-system-as-follows",children:"Install the package for your system as follows:"}),"\n",(0,r.jsx)(n.p,{children:"For Debian or Ubuntu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -i gitlab-runner_<arch>.deb\n"})}),"\n",(0,r.jsx)(n.p,{children:"For my example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -i gitlab-runner_amd64.deb\n"})}),"\n",(0,r.jsx)(n.h3,{id:"register-the-runner",children:"Register the Runner"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo gitlab-runner register\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter your GitLab instance URL:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )\nhttps://gitlab.com\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the token you obtained to register the Runner:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Please enter the gitlab-ci token for this runner\nxxx\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The information of above step 2 & 3 can be found in the ",(0,r.jsx)(n.strong,{children:"Admin Area"})," of gitlab."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Login gitlab as administrator and click the Admin Area icon on the top."}),"\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Overview"})," section and Click ",(0,r.jsx)(n.strong,{children:"Runner"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["You can find the information on the right.\n",(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/17267466/90331860-82526280-dfea-11ea-9051-a096133fc496.png",alt:"image"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter a description for the Runner, you can change this later in GitLab\u2019s UI:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Please enter the gitlab-ci description for this runner\n[hostname] my-runner\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the tags associated with the Runner, you can change this later in GitLab\u2019s UI:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Please enter the gitlab-ci tags for this runner (comma separated):\nmy-tag,another-tag\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the Runner executor:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell:\ndocker\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you chose Docker as your executor, you\u2019ll be asked for the default image to be used for projects that do not define one in .gitlab-ci.yml:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Please enter the Docker image (eg. ruby:2.6):\nalpine:latest\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the runner is registered successfully, it will show you the below message."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also go to the ",(0,r.jsx)(n.strong,{children:"Admin Area"}),", Click ",(0,r.jsx)(n.strong,{children:"Overview > Runner"})," to check the configured shared runner."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/17267466/90332057-47512e80-dfec-11ea-9ed4-57225dd3cae9.png",alt:"image"})}),"\n",(0,r.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,r.jsx)(n.p,{children:"Download the latest package for your system then upgrade as follows:"}),"\n",(0,r.jsx)(n.p,{children:"For Debian or Ubuntu:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dpkg -i gitlab-runner_<arch>.deb\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(758);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);