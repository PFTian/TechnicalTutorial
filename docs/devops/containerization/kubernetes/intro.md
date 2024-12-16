This is the introduction of Kubernetes

# 1. kubernetes architecture
## Control Plane (Master Node)
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

     What is kubectl - write a defination here

     * Get Pods
     ```
     kubectl get pods
     kubectl get pods -A
     ```

     * Get Pods in namespace
     ```
     kubectl get pod -n kube-system
     ```

     * Get NameSpaces
     ```
     kubectl get namespaces
     ```

     * Describe a pod
     ```
     kubectl describe pod pod-name
     ```

     * Get pod with format
     ```
     kubectl get pod pod-name -o wide // wider information
     kubectl get pod pod-name -o json // json format
     kubectl get pod pod-name -o yaml // yaml format
     ```

     * Log specific container
     ```
     kubectl logs pod-name -c contianer-name
     ```

     * Access to a running pod
     ```
     kubectl exec -it pod-name -c container-name -- sh
     ```

     * Access to a running pod with running command line one time
     ```
     kubectl exec pod-name -c container-name -- ps aux
     ```

     * Check rollout history
     ```
     kubectl rollout history deployment deployment-name
     ```

     * Rollout to deployment
     ```
     kubectl rollout undo deployment deployment-name // preivous version
     kubectl rollout undo deployment deployment-name --to-revision=1
     ```

     * Pause and Resume deployment
     ```
     kubectl rollout pause deployment deployment-name
     kubectl rollout resume deployment deployment-name
     ```

# 3. what is Pod (Smallest deployable Unit of k8s)

     * Relationship between Pod and containers?
     * Volumes

     Relative kubectl about Pods

# 4. Deployment & ReplicaSet
     
     Deployment defination here

     Relative kubectl about Deployment

     Replica Set Defination here

     Relative kubectl about Deployment

     Two Deployment stratgies: Recreate & Rolling Update

# 5. Services

     Services Definations here

     Types of Services
     
          * ClusterIP
          * NodePort
          * ExternalName
          * LoadBalancer
  
# 6 Labels, Selector & Annotations