# Control Plane Components

Control plane manages the overall state of the cluster. It can run be run on any machine in the cluster, but setup scripts typically start all control plane components on the same machine, and do not run user containers on this machine.

## 1. kube-apiserver

The API server is a component of the kubernetes control plane that exposes the Kubernetes API. The API server is the front end of the kubernetes control plane.


kube-apiserver is designed to scale horizontally -- that is, it scales by deploying more instances. You can run several instances of kube-apiserver and balance traffic between those instances.

## 2. etcd

Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.

## 3. kube-scheduler

Control plane component that watches for newly created Pods with no assigned node, and selects a node for them to run on.

Factors taken into account for scheduling decisions include: individual and collective resouce requirements, hardware/software/policy constraints, affinity and anti-affinity specifications, data locality, inter-workload interference, and deadlines.

## 4. kube-controller-manager

Control plane component that runs controller process.

Logically, each controller is a separate process, but to reduce complexity, they are all complied into a single binary and run in a single process.

Some types of controllers:

**Node Controller:** Responsible for noticing and responding when nodes go down.
**Job Controller:** Watches for job objects that represent one-off tasks, then creates Pods to run those tasks to completion.
**EndpointSlice Controller:** Populates EndpointSlice objects(to provide a link between Services and Pods).
**ServiceAccount Controller:** Create default ServiceAccounts for new namespaces.

## cloud-controller-manager(optional)

Control plane component that embeds cloud-specific control logic. The cloud controller manager lets you link your cluster into your cloud provider's API, and separates out the components that interact with that cloud platform from components that only interact with your cluster.

As with the kube-controller-manager, the cloud-controller-manager combines several logically independent control loops into a single binary that you run as a singile process. You can scale horizontally(run more than one copy) to improve performance or to help tolerate failures.

The following controllers can have cloud provider dependencies:

**Node Controller:** For checking the cloud provider to determine if a node has been deleted in the cloud after it stops responding.
**Route Controller:** For setting up routes in the underlying cloud infrastructure.
**Service Controller:** For creating, updating and deleting cloud provider load balancers.
