/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  scrumSidebar: [
    {
      type: "doc",
      id: "scrum/scrum-concepts",
    },
    {
      type: "doc",
      id: "scrum/scrum-team",
    },
    {
      type: "doc",
      id: "scrum/scrum-artifacts",
    },
    {
      type: "doc",
      id: "scrum/scrum-events",
    },
    {
      type: "doc",
      id: "scrum/defination-of-done",
    },
    {
      type: "doc",
      id: "scrum/product-delivery",
    },
  ],
  languagesSidebar: [
    {
      type: "doc",
      id: "languages/intro",
    },
    {
      type: "category",
      label: "CSharp",
      items: [
        "languages/csharp/intro"
      ]
    },
    {
      type: "category",
      label: "Java",
      items: [
        "languages/java/tips"
      ]
    },
    {
      type: "category",
      label: "Javascript",
      items: [
        "languages/javascript/what-is-promise",
        "languages/javascript/what-is-babel",
        "languages/javascript/what-is-ES6"
      ]
    },
  ],
  cloudInfraSidebar: [
    {
      type: "category",
      label: "Maintenance",
      items: [
        "cloud-infrastructure/maintenance/ITIL",
        "cloud-infrastructure/maintenance/incident-management",
        "cloud-infrastructure/maintenance/change-request",
      ]
    },
    {
      type: "category",
      label: "Monitoring",
      items: [
        "cloud-infrastructure/monitoring/datadog",
        "cloud-infrastructure/monitoring/grafana",
        "cloud-infrastructure/monitoring/prometheus",
      ]
    },
    {
      type: "category",
      label: "Log Management",
      items: [
        "cloud-infrastructure/log/splunk"
      ]
    },
    {
      type: "doc",
      id: "cloud-infrastructure/intro",
    },
    {
      type: "doc",
      id: "cloud-infrastructure/DR",
    },
    {
      type: "doc",
      id: "cloud-infrastructure/IaC",
    },
    {
      type: "doc",
      id: "cloud-infrastructure/terraform",
    }
  ],
  devopsSidebar: [
    {
      type: "doc",
      id: "devops/intro",
    },
    {
      type: 'category',
      label: 'Git',
      items: [
        'devops/git/branching-strategy',
        'devops/git/tips',
      ]
    },
    {
      type: 'category',
      label: 'CICD',
      items: [
        'devops/cicd/intro',
        'devops/cicd/canary-deployment',
        {
          type: 'category',
          label: 'GitHub',
          items: ['devops/cicd/github/intro'],
        },
        {
          type: 'category',
          label: 'GitLab',
          items: [
            'devops/cicd/gitlab/gitlab-installation-ubuntu',
            'devops/cicd/gitlab/gitlab-runner-installation-ubuntu',
            'devops/cicd/gitlab/gitlab-backup-and-restore',
            'devops/cicd/gitlab/gitlab-reactjs-ci-cd',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Containerization',
      items: [
        'devops/containerization/intro',
        {
          type: 'category',
          label: 'Docker',
          items: [
            'devops/containerization/docker/docker-installation'
          ]
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'devops/containerization/kubernetes/intro'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'devops/security/snyk',
      ]
    },
  ],
  dataOpsSidebar: [
    {
      type: "doc",
      id: "dataops/intro",
    },
    {
      type: "doc",
      id: "dataops/airflow",
    },
    {
      type: "doc",
      id: "dataops/flink",
    },
    {
      type: "doc",
      id: "dataops/kafka",
    },
    {
      type: "doc",
      id: "dataops/mapreduce",
    },
    {
      type: "category",
      label: "Notebook",
      items: [
        "dataops/notebook/zeppelin",
        "dataops/notebook/jupyter"
      ]
    },
  ],
  softwareDevlopmentSidebar: [
    {
      type: "doc",
      id: "software-development/intro",
    },
    {
      type: "category",
      label: "Backend",
      items: [
        {
          type: "category",
          label: "Node JS",
          items: [
            "software-development/backend/nodejs/intro"
          ]
        },
        "software-development/backend/intro",
        "software-development/backend/microservice",
        "software-development/backend/restful-api",
        "software-development/backend/unit-test"
      ]
    },
    {
      type: "category",
      label: "Frontend",
      items: [
        {
          type: "category",
          label: "React",
          items: [
            {
              type: "category",
              label: "ReactJS",
              items: [
                "software-development/frontend/react/reactjs/intro",
              ]
            },
            {
              type: "category",
              label: "React-Native",
              items: [
                "software-development/frontend/react/reactnative/add-redux-to-react-native",
                "software-development/frontend/react/reactnative/create-theme-for-react-native-app",
                "software-development/frontend/react/reactnative/how-to-manage-staging-and-production-environments-in-react-native",
                "software-development/frontend/react/reactnative/tips",
              ]
            },
            {
              type: "category",
              label: "Hooks",
              items: [
                "software-development/frontend/react/hooks/react-hooks",
              ]
            },
            "software-development/frontend/react/promise-in-react",
            "software-development/frontend/react/class-vs-functional-component",
            "software-development/frontend/react/eslint-prettier-reactjs",
          ]
        },
        "software-development/frontend/unit-test"
      ]
    }
  ],
  idesDevToolsSidebar: [
    {
      type: "doc",
      id: "ides-and-dev-tools/intro",
    },
    {
      type: "doc",
      id: "ides-and-dev-tools/vscode-plugins",
    },
    {
      type: "doc",
      id: "ides-and-dev-tools/iterm2/config-iterm2-on-mac",
    },
    
  ],
};

module.exports = sidebars;
