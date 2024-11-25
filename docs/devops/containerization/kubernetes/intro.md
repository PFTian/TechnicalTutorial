This is the introduction of Kubernetes

# 1. kubernetes architecture
## master node
   * API Server
   * Scheduler
   * cluster Store
   * Controller Manager
        * Node Controller
        * ReplicaSet
        * Enpoint
        * NameSpace
        * Service Account
   * Cloud Controller Manager
        * Load Balancers
        * Storage
        * Instances

## workder Node
   * Kublet
   * Contianer Runtime (containerd)
   * kube Proxy

# 2. kubectl