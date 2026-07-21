// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RemediationsAPI from './remediations';
import {
  Remediation,
  RemediationApproveParams,
  RemediationCancelParams,
  RemediationCreateParams,
  RemediationListParams,
  RemediationListResponse,
  RemediationRejectParams,
  RemediationRetrieveParams,
  Remediations,
} from './remediations';
import * as StorageAPI from './storage';
import {
  ClusterStorage,
  Storage,
  StorageCreateParams,
  StorageDeleteResponse,
  StorageListParams,
  StorageListResponse,
  StorageUpdateParams,
} from './storage';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Clusters extends APIResource {
  remediations: RemediationsAPI.Remediations = new RemediationsAPI.Remediations(this._client);
  storage: StorageAPI.Storage = new StorageAPI.Storage(this._client);

  /**
   * Create an Instant Cluster on Together's high-performance GPU clusters. With
   * features like on-demand scaling, long-lived resizable high-bandwidth shared
   * DC-local storage, Kubernetes and Slurm cluster flavors, a REST API, and
   * Terraform support, you can run workloads flexibly without complex infrastructure
   * management.
   *
   * @example
   * ```ts
   * const cluster = await client.beta.clusters.create({
   *   billing_type: 'RESERVED',
   *   cluster_name: 'cluster_name',
   *   cuda_version: 'cuda_version',
   *   gpu_type: 'H100_SXM',
   *   num_gpus: 0,
   *   nvidia_driver_version: 'nvidia_driver_version',
   *   region: 'region',
   * });
   * ```
   */
  create(body: ClusterCreateParams, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.post('/compute/clusters', { body, ...options });
  }

  /**
   * Retrieve information about a specific GPU cluster.
   *
   * @example
   * ```ts
   * const cluster = await client.beta.clusters.retrieve(
   *   'cluster_id',
   * );
   * ```
   */
  retrieve(clusterID: string, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.get(path`/compute/clusters/${clusterID}`, options);
  }

  /**
   * Update the configuration of an existing GPU cluster.
   *
   * @example
   * ```ts
   * const cluster = await client.beta.clusters.update(
   *   'cluster_id',
   * );
   * ```
   */
  update(clusterID: string, body: ClusterUpdateParams, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.put(path`/compute/clusters/${clusterID}`, { body, ...options });
  }

  /**
   * List all GPU clusters.
   *
   * @example
   * ```ts
   * const clusters = await client.beta.clusters.list();
   * ```
   */
  list(
    query: ClusterListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClusterListResponse> {
    return this._client.get('/compute/clusters', { query, ...options });
  }

  /**
   * Delete a GPU cluster by cluster ID.
   *
   * @example
   * ```ts
   * const cluster = await client.beta.clusters.delete(
   *   'cluster_id',
   * );
   * ```
   */
  delete(clusterID: string, options?: RequestOptions): APIPromise<ClusterDeleteResponse> {
    return this._client.delete(path`/compute/clusters/${clusterID}`, options);
  }

  /**
   * List regions and corresponding supported driver versions
   *
   * @example
   * ```ts
   * const response = await client.beta.clusters.listRegions();
   * ```
   */
  listRegions(options?: RequestOptions): APIPromise<ClusterListRegionsResponse> {
    return this._client.get('/compute/regions', options);
  }
}

export interface Cluster {
  /**
   * Enabled add-ons on this cluster. Only add-ons with enabled=true in their config
   * are returned.
   */
  add_ons: Array<Cluster.AddOn>;

  /**
   * Actual number of preemptible GPUs currently allocated to the cluster. Updated
   * asynchronously by the fulfillment and reclamation workers; may be less than
   * desired_preemptible_gpus when capacity is constrained.
   */
  allocated_preemptible_gpus: number;

  /**
   * Billing type for the cluster (RESERVED, ON_DEMAND, or SCHEDULED_CAPACITY).
   */
  billing_type: 'RESERVED' | 'ON_DEMAND' | 'SCHEDULED_CAPACITY';

  cluster_id: string;

  cluster_name: string;

  /**
   * Type of cluster.
   */
  cluster_type: 'KUBERNETES' | 'SLURM';

  control_plane_nodes: Array<Cluster.ControlPlaneNode>;

  cuda_version: string;

  /**
   * Customer's requested number of preemptible GPUs. Set on cluster create or
   * update; persists until changed.
   */
  desired_preemptible_gpus: number;

  gpu_type: 'H100_SXM' | 'H200_SXM' | 'RTX_6000_PCI' | 'L40_PCIE' | 'B200_SXM' | 'H100_SXM_INF';

  gpu_worker_nodes: Array<Cluster.GPUWorkerNode>;

  kube_config: string;

  /**
   * Number of GPUs to draw from a capacity pool. A component of the overall
   * num_gpus, alongside num_reserved_gpus.
   */
  num_capacity_pool_gpus: number;

  /**
   * Number of CPU-only worker nodes in the cluster.
   */
  num_cpu_workers: number;

  num_gpus: number;

  /**
   * Number of prepaid reserved GPUs for this cluster. A component of the overall
   * num_gpus, alongside num_capacity_pool_gpus.
   */
  num_reserved_gpus: number;

  nvidia_driver_version: string;

  /**
   * Cluster-level phase transition history.
   */
  phase_transitions: Array<Cluster.PhaseTransition>;

  project_id: string;

  region: string;

  /**
   * Current status of the GPU cluster.
   */
  status:
    | 'WaitingForControlPlaneNodes'
    | 'WaitingForDataPlaneNodes'
    | 'WaitingForSubnet'
    | 'WaitingForSharedVolume'
    | 'InstallingDrivers'
    | 'RunningAcceptanceTests'
    | 'Paused'
    | 'OnDemandComputePaused'
    | 'Ready'
    | 'Degraded'
    | 'Deleting';

  volumes: Array<Cluster.Volume>;

  capacity_pool_id?: string;

  cluster_config?: Cluster.ClusterConfig;

  /**
   * Whether the control plane is currently ready.
   */
  control_plane_ready?: boolean;

  created_at?: string;

  /**
   * GPU worker nodes retained after they left the live data plane. These are
   * separate from gpu_worker_nodes and must not be counted as live capacity.
   */
  deleted_gpu_worker_nodes?: Array<Cluster.DeletedGPUWorkerNode>;

  duration_hours?: number;

  /**
   * Timestamp when the cluster first reached the Ready phase.
   */
  first_ready_at?: string;

  install_traefik?: boolean;

  /**
   * Whether the cluster is managed inside a substrate environment.
   */
  is_in_substrate?: boolean;

  /**
   * ID of the machine cluster backing this GPU cluster.
   */
  machine_cluster_id?: string;

  /**
   * Recent node lifecycle events such as scale-up, scale-down, and preemption.
   * Combine these with live and deleted node lists to render the cluster timeline.
   */
  node_lifecycle_events?: Array<Cluster.NodeLifecycleEvent>;

  /**
   * Internal NVIDIA version ID for this cluster's driver and CUDA combination.
   */
  nvidia_driver_version_id?: string;

  oidc_config?: Cluster.OidcConfig;

  /**
   * Data-volume image name for GPU worker nodes.
   */
  os_image?: string;

  reservation_end_time?: string;

  reservation_start_time?: string;

  slurm_shm_size_gib?: number;

  /**
   * UMS organization ID associated with this cluster.
   */
  ums_org_id?: string;

  /**
   * UMS project ID associated with this cluster.
   */
  ums_project_id?: string;
}

export namespace Cluster {
  /**
   * AddOnInfo is returned in cluster responses and add-on CRUD operations.
   */
  export interface AddOn {
    add_on_type: string;

    /**
     * Configuration for a cluster add-on.
     */
    config: AddOn.Config;

    name: string;

    /**
     * State for a cluster add-on.
     */
    state: AddOn.State;
  }

  export namespace AddOn {
    /**
     * Configuration for a cluster add-on.
     */
    export interface Config {
      dashboard?: Config.Dashboard;

      /**
       * Configuration for the Headlamp Kubernetes dashboard add-on.
       */
      headlamp?: Config.Headlamp;

      ingress?: Config.Ingress;

      /**
       * Configuration for the Model Aware TorchPass add-on.
       */
      torchpass?: Config.Torchpass;
    }

    export namespace Config {
      export interface Dashboard {
        enabled?: boolean;
      }

      /**
       * Configuration for the Headlamp Kubernetes dashboard add-on.
       */
      export interface Headlamp {
        /**
         * Whether to enable the Headlamp Kubernetes dashboard add-on.
         */
        enabled?: boolean;
      }

      export interface Ingress {
        enabled?: boolean;
      }

      /**
       * Configuration for the Model Aware TorchPass add-on.
       */
      export interface Torchpass {
        /**
         * Whether to enable the Model Aware TorchPass add-on.
         */
        enabled?: boolean;
      }
    }

    /**
     * State for a cluster add-on.
     */
    export interface State {
      dashboard?: State.Dashboard;

      /**
       * State for the Headlamp Kubernetes dashboard add-on.
       */
      headlamp?: State.Headlamp;

      ingress?: State.Ingress;

      /**
       * State for the Model Aware TorchPass add-on.
       */
      torchpass?: State.Torchpass;
    }

    export namespace State {
      export interface Dashboard {}

      /**
       * State for the Headlamp Kubernetes dashboard add-on.
       */
      export interface Headlamp {}

      export interface Ingress {}

      /**
       * State for the Model Aware TorchPass add-on.
       */
      export interface Torchpass {}
    }
  }

  export interface ControlPlaneNode {
    host_name: string;

    memory_gib: number;

    network: string;

    node_id: string;

    num_cpu_cores: number;

    /**
     * Phase transition history for this control plane node.
     */
    phase_transitions: Array<ControlPlaneNode.PhaseTransition>;

    status: string;

    /**
     * Public IPv4 address of the control plane node.
     */
    public_ipv4?: string;
  }

  export namespace ControlPlaneNode {
    export interface PhaseTransition {
      /**
       * Node phase.
       */
      phase:
        | 'NODE_PHASE_PENDING'
        | 'NODE_PHASE_SCHEDULING'
        | 'NODE_PHASE_BOOTING'
        | 'NODE_PHASE_BOOTSTRAPPING'
        | 'NODE_PHASE_RUNNING'
        | 'NODE_PHASE_SUCCEEDED'
        | 'NODE_PHASE_FAILED'
        | 'NODE_PHASE_PAUSED';

      /**
       * Timestamp when the phase transition occurred.
       */
      transition_time: string;
    }
  }

  export interface GPUWorkerNode {
    host_name: string;

    memory_gib: number;

    networks: Array<string>;

    node_id: string;

    num_cpu_cores: number;

    num_gpus: number;

    /**
     * Phase transition history for this GPU worker node.
     */
    phase_transitions: Array<GPUWorkerNode.PhaseTransition>;

    status: string;

    /**
     * Whether auto-remediation is enabled for this node's instance.
     */
    auto_remediation_enabled?: boolean;

    /**
     * Timestamp when the node left the live data plane. Only set for
     * deleted_gpu_worker_nodes.
     */
    deleted_at?: string;

    /**
     * Ephemeral storage size, such as 1Ti.
     */
    ephemeral_storage?: string;

    /**
     * Number of InfiniBand HCAs.
     */
    ib_hca_count?: number;

    /**
     * InfiniBand HCA type.
     */
    ib_hca_type?: string;

    instance_id?: string;

    /**
     * Remediation represents a node remediation request for an instance. An instance
     * can have multiple remediations over time (e.g., failed attempts followed by
     * retries).
     */
    latest_remediation?: RemediationsAPI.Remediation;

    /**
     * Whether this node is marked for deletion by the operator.
     */
    marked_for_deletion?: boolean;

    /**
     * Number of NVSwitches.
     */
    nvswitch_count?: number;

    /**
     * NVSwitch type.
     */
    nvswitch_type?: string;

    /**
     * Public IPv4 address of the GPU worker node.
     */
    public_ipv4?: string;

    slurm_worker_hostname?: string;
  }

  export namespace GPUWorkerNode {
    export interface PhaseTransition {
      /**
       * Node phase.
       */
      phase:
        | 'NODE_PHASE_PENDING'
        | 'NODE_PHASE_SCHEDULING'
        | 'NODE_PHASE_BOOTING'
        | 'NODE_PHASE_BOOTSTRAPPING'
        | 'NODE_PHASE_RUNNING'
        | 'NODE_PHASE_SUCCEEDED'
        | 'NODE_PHASE_FAILED'
        | 'NODE_PHASE_PAUSED';

      /**
       * Timestamp when the phase transition occurred.
       */
      transition_time: string;
    }
  }

  export interface PhaseTransition {
    /**
     * Cluster phase.
     */
    phase:
      | 'CLUSTER_PHASE_QUEUED'
      | 'CLUSTER_PHASE_SCHEDULED'
      | 'CLUSTER_PHASE_WAITING_FOR_CONTROL_PLANE_NODES'
      | 'CLUSTER_PHASE_WAITING_FOR_DATA_PLANE_NODES'
      | 'CLUSTER_PHASE_WAITING_FOR_SUBNET'
      | 'CLUSTER_PHASE_WAITING_FOR_SHARED_VOLUME'
      | 'CLUSTER_PHASE_WAITING_FOR_AUTO_SCALER'
      | 'CLUSTER_PHASE_INSTALLING_DRIVERS'
      | 'CLUSTER_PHASE_RUNNING_ACCEPTANCE_TESTS'
      | 'CLUSTER_PHASE_ACCEPTANCE_TESTS_FAILED'
      | 'CLUSTER_PHASE_RUNNING_NCCL_TESTS'
      | 'CLUSTER_PHASE_NCCL_TESTS_FAILED'
      | 'CLUSTER_PHASE_READY'
      | 'CLUSTER_PHASE_PAUSED'
      | 'CLUSTER_PHASE_ON_DEMAND_COMPUTE_PAUSED'
      | 'CLUSTER_PHASE_DEGRADED'
      | 'CLUSTER_PHASE_DELETING';

    /**
     * Timestamp when the phase transition occurred.
     */
    transition_time: string;
  }

  export interface Volume {
    /**
     * Size of the volume in TiB.
     */
    size_tib: number;

    /**
     * Current status of the volume.
     */
    status: string;

    /**
     * ID of the volume.
     */
    volume_id: string;

    /**
     * User provided name of the volume.
     */
    volume_name: string;
  }

  export interface ClusterConfig {
    load_balancer: 'NONE' | 'TRAEFIK' | 'NGINX' | 'ISTIO';

    /**
     * NVIDIA GPU Operator chart/version for the tenant cluster (e.g. v24.6.2). When
     * omitted, a service default is applied.
     */
    gpu_operator_version?: string;

    ingress?: ClusterConfig.Ingress;

    jumphost_enabled?: boolean;

    kubernetes_dashboard_enabled?: boolean;

    /**
     * NVIDIA Network Operator chart/version for the tenant cluster (e.g. v24.7.0).
     * When omitted, a service default is applied.
     */
    network_operator_version?: string;

    observability?: ClusterConfig.Observability;

    /**
     * SlurmStartupScripts carries optional Slurm lifecycle scripts (prolog/epilog,
     * init, extra conf).
     */
    slurm_startup_scripts?: ClusterConfig.SlurmStartupScripts;

    /**
     * Whether this cluster uses a per-cluster SSH certificate authority for
     * OIDC-signed SSH access.
     */
    ssh_ca_enabled?: boolean;
  }

  export namespace ClusterConfig {
    export interface Ingress {
      enabled?: boolean;
    }

    export interface Observability {
      enabled?: boolean;
    }

    /**
     * SlurmStartupScripts carries optional Slurm lifecycle scripts (prolog/epilog,
     * init, extra conf).
     */
    export interface SlurmStartupScripts {
      /**
       * Slurm controller epilog script.
       */
      controller_epilog?: string;

      /**
       * Slurm controller prolog script.
       */
      controller_prolog?: string;

      /**
       * Additional slurm.conf fragments.
       */
      extra_slurm_conf?: string;

      /**
       * Script run on Slurm login node init.
       */
      login_init_script?: string;

      /**
       * Script run on Slurm nodeset init.
       */
      nodeset_init_script?: string;

      /**
       * Slurm worker node epilog script.
       */
      worker_epilog?: string;

      /**
       * Slurm worker node prolog script.
       */
      worker_prolog?: string;
    }
  }

  export interface DeletedGPUWorkerNode {
    host_name: string;

    memory_gib: number;

    networks: Array<string>;

    node_id: string;

    num_cpu_cores: number;

    num_gpus: number;

    /**
     * Phase transition history for this GPU worker node.
     */
    phase_transitions: Array<DeletedGPUWorkerNode.PhaseTransition>;

    status: string;

    /**
     * Whether auto-remediation is enabled for this node's instance.
     */
    auto_remediation_enabled?: boolean;

    /**
     * Timestamp when the node left the live data plane. Only set for
     * deleted_gpu_worker_nodes.
     */
    deleted_at?: string;

    /**
     * Ephemeral storage size, such as 1Ti.
     */
    ephemeral_storage?: string;

    /**
     * Number of InfiniBand HCAs.
     */
    ib_hca_count?: number;

    /**
     * InfiniBand HCA type.
     */
    ib_hca_type?: string;

    instance_id?: string;

    /**
     * Remediation represents a node remediation request for an instance. An instance
     * can have multiple remediations over time (e.g., failed attempts followed by
     * retries).
     */
    latest_remediation?: RemediationsAPI.Remediation;

    /**
     * Whether this node is marked for deletion by the operator.
     */
    marked_for_deletion?: boolean;

    /**
     * Number of NVSwitches.
     */
    nvswitch_count?: number;

    /**
     * NVSwitch type.
     */
    nvswitch_type?: string;

    /**
     * Public IPv4 address of the GPU worker node.
     */
    public_ipv4?: string;

    slurm_worker_hostname?: string;
  }

  export namespace DeletedGPUWorkerNode {
    export interface PhaseTransition {
      /**
       * Node phase.
       */
      phase:
        | 'NODE_PHASE_PENDING'
        | 'NODE_PHASE_SCHEDULING'
        | 'NODE_PHASE_BOOTING'
        | 'NODE_PHASE_BOOTSTRAPPING'
        | 'NODE_PHASE_RUNNING'
        | 'NODE_PHASE_SUCCEEDED'
        | 'NODE_PHASE_FAILED'
        | 'NODE_PHASE_PAUSED';

      /**
       * Timestamp when the phase transition occurred.
       */
      transition_time: string;
    }
  }

  /**
   * Node lifecycle event included in a GPU cluster timeline.
   */
  export interface NodeLifecycleEvent {
    /**
     * Human-readable lifecycle event message.
     */
    message: string;

    /**
     * Tenant node name this lifecycle event applies to.
     */
    node_id: string;

    /**
     * Lifecycle event reason, for example TogetherScaledUp, TogetherScaledDown, or
     * TogetherPreempted.
     */
    reason: string;

    /**
     * Event timestamp.
     */
    timestamp: string;
  }

  export interface OidcConfig {
    /**
     * OIDC client ID for authentication.
     */
    client_id: string;

    /**
     * JWT claim to use for user groups. For example, 'groups'
     */
    group_claim: string;

    /**
     * Prefix to add to the group claim to form the final group name. For example,
     * 'oidc:'
     */
    group_prefix: string;

    /**
     * OIDC issuer URL for authentication. For example, https://accounts.google.com
     */
    issuer_url: string;

    /**
     * JWT claim to use as the username. For example, 'sub' or 'email'
     */
    username_claim: string;

    /**
     * Prefix to add to the username claim to form the final username. For example,
     * 'oidc:'
     */
    username_prefix: string;

    /**
     * CA certificate in PEM format to validate the OIDC issuer's TLS certificate. This
     * field is optional but recommended if the issuer uses a private CA or self-signed
     * certificate.
     */
    ca_cert?: string;
  }
}

export interface ClusterListResponse {
  clusters: Array<Cluster>;
}

export interface ClusterDeleteResponse {
  cluster_id: string;
}

export interface ClusterListRegionsResponse {
  regions: Array<ClusterListRegionsResponse.Region>;
}

export namespace ClusterListRegionsResponse {
  export interface Region {
    /**
     * List of supported identifiable cuda/nvidia driver versions pairs available in
     * the region.
     */
    driver_versions: Array<Region.DriverVersion>;

    /**
     * Identifiable name of the region.
     */
    name: string;

    /**
     * List of supported identifiable gpus available in the region.
     */
    supported_instance_types: Array<string>;
  }

  export namespace Region {
    /**
     * CUDA/NVIDIA driver versions pair available in the region to use in the create
     * cluster request.
     */
    export interface DriverVersion {
      /**
       * CUDA driver version.
       */
      cuda_version: string;

      /**
       * NVIDIA driver version.
       */
      nvidia_driver_version: string;
    }
  }
}

export interface ClusterCreateParams {
  /**
   * RESERVED billing types allow you to specify the duration of the cluster
   * reservation via the duration_days field. ON_DEMAND billing types will give you
   * ownership of the cluster until you delete it. SCHEDULED_CAPACITY billing types
   * allow you to reserve capacity for a scheduled time window. You must specify the
   * reservation_start_time and reservation_end_time with this request.
   */
  billing_type: 'RESERVED' | 'ON_DEMAND' | 'SCHEDULED_CAPACITY';

  /**
   * Name of the GPU cluster.
   */
  cluster_name: string;

  /**
   * CUDA version for this cluster. For example, 12.5
   */
  cuda_version: string;

  /**
   * Type of GPU to use in the cluster
   */
  gpu_type: 'H100_SXM' | 'H200_SXM' | 'RTX_6000_PCI' | 'L40_PCIE' | 'B200_SXM' | 'H100_SXM_INF';

  /**
   * Number of GPUs to allocate in the cluster. This must be multiple of 8. For
   * example, 8, 16 or 24
   */
  num_gpus: number;

  /**
   * Nvidia driver version for this cluster. For example, 550. Only some combination
   * of cuda_version and nvidia_driver_version are supported.
   */
  nvidia_driver_version: string;

  /**
   * Region to create the GPU cluster in. Usable regions can be found from
   * `client.clusters.list_regions()`
   */
  region: string;

  /**
   * AcceptanceTestsParams groups all GPU acceptance test options when enabled is
   * true.
   */
  acceptance_tests_params?: ClusterCreateParams.AcceptanceTestsParams;

  /**
   * Add-ons to enable on the cluster at creation time.
   */
  add_ons?: Array<ClusterCreateParams.AddOn>;

  /**
   * Whether to enable auto-scaling for the cluster. If true, the cluster will
   * automatically scale the number of GPU worker nodes between num_gpus and
   * auto_scale_max_gpus based on the workload.
   */
  auto_scale?: boolean;

  /**
   * Maximum number of GPUs to which the cluster can be auto-scaled up. This field is
   * required if auto_scaled is true.
   */
  auto_scale_max_gpus?: number;

  /**
   * @deprecated Whether GPU cluster should be auto-scaled based on the workload. By
   * default, it is not auto-scaled.
   */
  auto_scaled?: boolean;

  /**
   * ID of the capacity pool to use for the cluster. This field is optional and only
   * applicable if the cluster is created from a capacity pool.
   */
  capacity_pool_id?: string;

  cluster_config?: ClusterCreateParams.ClusterConfig;

  /**
   * Type of cluster to create.
   */
  cluster_type?: 'KUBERNETES' | 'SLURM';

  /**
   * Duration in days to keep the cluster running.
   */
  duration_days?: number;

  /**
   * Whether to install Traefik ingress controller in the cluster. This field is only
   * applicable for Kubernetes clusters and is false by default.
   */
  install_traefik?: boolean;

  /**
   * Number of GPUs to allocate from the capacity pool. Must be a multiple of 8 and
   * not exceed num_gpus.
   */
  num_capacity_pool_gpus?: number;

  /**
   * Number of preemptible GPUs to request alongside on-demand capacity. Must be a
   * multiple of 8. Preemptible nodes are cheaper but may be reclaimed when on-demand
   * capacity is needed elsewhere; the system fulfills this asynchronously and
   * surfaces the actual count in allocated_preemptible_gpus.
   */
  num_preemptible_gpus?: number;

  /**
   * Number of prepaid (PLG) reserved GPUs for this cluster. When omitted for
   * RESERVED billing on create, the server defaults this to num_gpus.
   */
  num_reserved_gpus?: number;

  oidc_config?: ClusterCreateParams.OidcConfig;

  /**
   * Project ID for the cluster. If not set, the project from the request context is
   * used.
   */
  project_id?: string;

  /**
   * Reservation end time of the cluster. This field is required for SCHEDULED
   * billing to specify the reservation end time for the cluster.
   */
  reservation_end_time?: string;

  /**
   * Reservation start time of the cluster. This field is required for SCHEDULED
   * billing to specify the reservation start time for the cluster. If not provided,
   * the cluster provisions immediately.
   */
  reservation_start_time?: string;

  /**
   * Inline configuration to create a shared volume with the cluster creation.
   */
  shared_volume?: ClusterCreateParams.SharedVolume;

  /**
   * Custom Slurm image for Slurm clusters.
   */
  slurm_image?: string;

  /**
   * Shared memory size in GiB for Slurm cluster. This field is required if
   * cluster_type is SLURM.
   */
  slurm_shm_size_gib?: number;

  /**
   * ID of an existing volume to use with the cluster creation.
   */
  volume_id?: string;
}

export namespace ClusterCreateParams {
  /**
   * AcceptanceTestsParams groups all GPU acceptance test options when enabled is
   * true.
   */
  export interface AcceptanceTestsParams {
    /**
     * DCGM diagnostic depth. SHORT = readiness; MEDIUM = default; LONG = system
     * validation; EXTENDED = memtest. An omitted value selects MEDIUM when enabled.
     */
    dcgm_diag_level?:
      | 'DCGM_DIAG_LEVEL_SHORT'
      | 'DCGM_DIAG_LEVEL_MEDIUM'
      | 'DCGM_DIAG_LEVEL_LONG'
      | 'DCGM_DIAG_LEVEL_EXTENDED';

    /**
     * Skip DCGM diagnostics acceptance test.
     */
    dcgm_diag_skipped?: boolean;

    /**
     * Whether to run GPU acceptance tests during cluster bring-up.
     */
    enabled?: boolean;

    /**
     * GPU burn duration in seconds; 0 means use the default when enabled.
     */
    gpu_burn_duration?: number;

    /**
     * Skip GPU burn acceptance test.
     */
    gpu_burn_skipped?: boolean;

    /**
     * Skip NCCL multi-node acceptance test.
     */
    nccl_multi_node_skipped?: boolean;

    /**
     * Skip NCCL single-node acceptance test.
     */
    nccl_single_node_skipped?: boolean;

    /**
     * Skip storage-performance acceptance test.
     */
    storage_skipped?: boolean;
  }

  export interface AddOn {
    /**
     * Type of add-on. Valid values: 'dashboard', 'ingress', 'torchpass'.
     */
    add_on_type: string;

    /**
     * Human-readable name for this add-on instance.
     */
    name: string;

    /**
     * Configuration for a cluster add-on.
     */
    config?: AddOn.Config;
  }

  export namespace AddOn {
    /**
     * Configuration for a cluster add-on.
     */
    export interface Config {
      dashboard?: Config.Dashboard;

      /**
       * Configuration for the Headlamp Kubernetes dashboard add-on.
       */
      headlamp?: Config.Headlamp;

      ingress?: Config.Ingress;

      /**
       * Configuration for the Model Aware TorchPass add-on.
       */
      torchpass?: Config.Torchpass;
    }

    export namespace Config {
      export interface Dashboard {
        enabled?: boolean;
      }

      /**
       * Configuration for the Headlamp Kubernetes dashboard add-on.
       */
      export interface Headlamp {
        /**
         * Whether to enable the Headlamp Kubernetes dashboard add-on.
         */
        enabled?: boolean;
      }

      export interface Ingress {
        enabled?: boolean;
      }

      /**
       * Configuration for the Model Aware TorchPass add-on.
       */
      export interface Torchpass {
        /**
         * Whether to enable the Model Aware TorchPass add-on.
         */
        enabled?: boolean;
      }
    }
  }

  export interface ClusterConfig {
    load_balancer: 'NONE' | 'TRAEFIK' | 'NGINX' | 'ISTIO';

    /**
     * NVIDIA GPU Operator chart/version for the tenant cluster (e.g. v24.6.2). When
     * omitted, a service default is applied.
     */
    gpu_operator_version?: string;

    ingress?: ClusterConfig.Ingress;

    jumphost_enabled?: boolean;

    kubernetes_dashboard_enabled?: boolean;

    /**
     * NVIDIA Network Operator chart/version for the tenant cluster (e.g. v24.7.0).
     * When omitted, a service default is applied.
     */
    network_operator_version?: string;

    observability?: ClusterConfig.Observability;

    /**
     * SlurmStartupScripts carries optional Slurm lifecycle scripts (prolog/epilog,
     * init, extra conf).
     */
    slurm_startup_scripts?: ClusterConfig.SlurmStartupScripts;

    /**
     * Whether this cluster uses a per-cluster SSH certificate authority for
     * OIDC-signed SSH access.
     */
    ssh_ca_enabled?: boolean;
  }

  export namespace ClusterConfig {
    export interface Ingress {
      enabled?: boolean;
    }

    export interface Observability {
      enabled?: boolean;
    }

    /**
     * SlurmStartupScripts carries optional Slurm lifecycle scripts (prolog/epilog,
     * init, extra conf).
     */
    export interface SlurmStartupScripts {
      /**
       * Slurm controller epilog script.
       */
      controller_epilog?: string;

      /**
       * Slurm controller prolog script.
       */
      controller_prolog?: string;

      /**
       * Additional slurm.conf fragments.
       */
      extra_slurm_conf?: string;

      /**
       * Script run on Slurm login node init.
       */
      login_init_script?: string;

      /**
       * Script run on Slurm nodeset init.
       */
      nodeset_init_script?: string;

      /**
       * Slurm worker node epilog script.
       */
      worker_epilog?: string;

      /**
       * Slurm worker node prolog script.
       */
      worker_prolog?: string;
    }
  }

  export interface OidcConfig {
    /**
     * OIDC client ID for authentication.
     */
    client_id: string;

    /**
     * JWT claim to use for user groups. For example, 'groups'
     */
    group_claim: string;

    /**
     * Prefix to add to the group claim to form the final group name. For example,
     * 'oidc:'
     */
    group_prefix: string;

    /**
     * OIDC issuer URL for authentication. For example, https://accounts.google.com
     */
    issuer_url: string;

    /**
     * JWT claim to use as the username. For example, 'sub' or 'email'
     */
    username_claim: string;

    /**
     * Prefix to add to the username claim to form the final username. For example,
     * 'oidc:'
     */
    username_prefix: string;

    /**
     * CA certificate in PEM format to validate the OIDC issuer's TLS certificate. This
     * field is optional but recommended if the issuer uses a private CA or self-signed
     * certificate.
     */
    ca_cert?: string;
  }

  /**
   * Inline configuration to create a shared volume with the cluster creation.
   */
  export interface SharedVolume {
    /**
     * Region name. Usable regions can be found from `clusters.list_regions()`
     */
    region: string;

    /**
     * Volume size in whole tebibytes (TiB).
     */
    size_tib: number;

    /**
     * User provided name of the volume.
     */
    volume_name: string;

    /**
     * When true, the shared volume is not deleted when the cluster is decommissioned.
     */
    is_lifecycle_independent?: boolean;

    /**
     * Project ID that will own the volume. When omitted, the caller's default project
     * is used.
     */
    project_id?: string;
  }
}

export interface ClusterUpdateParams {
  /**
   * Add-ons to update on the cluster. Each entry identifies an existing add-on by
   * name and provides the new external config to merge.
   */
  add_ons?: Array<ClusterUpdateParams.AddOn>;

  cluster_config?: ClusterUpdateParams.ClusterConfig;

  /**
   * Type of cluster to update.
   */
  cluster_type?: 'KUBERNETES' | 'SLURM';

  /**
   * Number of GPUs to draw from the cluster's capacity pool. Only valid for clusters
   * created with a capacity_pool_id. Must be a multiple of 8 and not exceed
   * num_gpus. When omitted, the current value is preserved.
   */
  num_capacity_pool_gpus?: number;

  /**
   * Target GPU count for the cluster. When omitted, the server keeps the current GPU
   * count from cluster metadata (use for config-only or decommission-time-only
   * updates).
   */
  num_gpus?: number;

  /**
   * Updated desired number of preemptible GPUs for the cluster. When omitted, the
   * current value is preserved. Must be a multiple of 8.
   */
  num_preemptible_gpus?: number;

  /**
   * Number of reserved GPUs to update to. This field is only applicable for clusters
   * with RESERVED billing type.
   */
  num_reserved_gpus?: number;

  /**
   * Timestamp at which the cluster should be decommissioned. Only accepted for
   * prepaid clusters.
   */
  reservation_end_time?: string;
}

export namespace ClusterUpdateParams {
  export interface AddOn {
    /**
     * Name of the add-on to update. Must match an existing add-on on the cluster.
     */
    name: string;

    /**
     * Configuration for a cluster add-on.
     */
    config?: AddOn.Config;
  }

  export namespace AddOn {
    /**
     * Configuration for a cluster add-on.
     */
    export interface Config {
      dashboard?: Config.Dashboard;

      /**
       * Configuration for the Headlamp Kubernetes dashboard add-on.
       */
      headlamp?: Config.Headlamp;

      ingress?: Config.Ingress;

      /**
       * Configuration for the Model Aware TorchPass add-on.
       */
      torchpass?: Config.Torchpass;
    }

    export namespace Config {
      export interface Dashboard {
        enabled?: boolean;
      }

      /**
       * Configuration for the Headlamp Kubernetes dashboard add-on.
       */
      export interface Headlamp {
        /**
         * Whether to enable the Headlamp Kubernetes dashboard add-on.
         */
        enabled?: boolean;
      }

      export interface Ingress {
        enabled?: boolean;
      }

      /**
       * Configuration for the Model Aware TorchPass add-on.
       */
      export interface Torchpass {
        /**
         * Whether to enable the Model Aware TorchPass add-on.
         */
        enabled?: boolean;
      }
    }
  }

  export interface ClusterConfig {
    load_balancer: 'NONE' | 'TRAEFIK' | 'NGINX' | 'ISTIO';

    /**
     * NVIDIA GPU Operator chart/version for the tenant cluster (e.g. v24.6.2). When
     * omitted, a service default is applied.
     */
    gpu_operator_version?: string;

    ingress?: ClusterConfig.Ingress;

    jumphost_enabled?: boolean;

    kubernetes_dashboard_enabled?: boolean;

    /**
     * NVIDIA Network Operator chart/version for the tenant cluster (e.g. v24.7.0).
     * When omitted, a service default is applied.
     */
    network_operator_version?: string;

    observability?: ClusterConfig.Observability;

    /**
     * SlurmStartupScripts carries optional Slurm lifecycle scripts (prolog/epilog,
     * init, extra conf).
     */
    slurm_startup_scripts?: ClusterConfig.SlurmStartupScripts;

    /**
     * Whether this cluster uses a per-cluster SSH certificate authority for
     * OIDC-signed SSH access.
     */
    ssh_ca_enabled?: boolean;
  }

  export namespace ClusterConfig {
    export interface Ingress {
      enabled?: boolean;
    }

    export interface Observability {
      enabled?: boolean;
    }

    /**
     * SlurmStartupScripts carries optional Slurm lifecycle scripts (prolog/epilog,
     * init, extra conf).
     */
    export interface SlurmStartupScripts {
      /**
       * Slurm controller epilog script.
       */
      controller_epilog?: string;

      /**
       * Slurm controller prolog script.
       */
      controller_prolog?: string;

      /**
       * Additional slurm.conf fragments.
       */
      extra_slurm_conf?: string;

      /**
       * Script run on Slurm login node init.
       */
      login_init_script?: string;

      /**
       * Script run on Slurm nodeset init.
       */
      nodeset_init_script?: string;

      /**
       * Slurm worker node epilog script.
       */
      worker_epilog?: string;

      /**
       * Slurm worker node prolog script.
       */
      worker_prolog?: string;
    }
  }
}

export interface ClusterListParams {
  /**
   * Optional UMS project ID to filter clusters by. When set, only clusters belonging
   * to this project are returned. The caller must be a member of the project;
   * otherwise the result set will be empty.
   */
  projectId?: string;
}

Clusters.Remediations = Remediations;
Clusters.Storage = Storage;

export declare namespace Clusters {
  export {
    type Cluster as Cluster,
    type ClusterListResponse as ClusterListResponse,
    type ClusterDeleteResponse as ClusterDeleteResponse,
    type ClusterListRegionsResponse as ClusterListRegionsResponse,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams,
    type ClusterListParams as ClusterListParams,
  };

  export {
    Remediations as Remediations,
    type Remediation as Remediation,
    type RemediationListResponse as RemediationListResponse,
    type RemediationCreateParams as RemediationCreateParams,
    type RemediationRetrieveParams as RemediationRetrieveParams,
    type RemediationListParams as RemediationListParams,
    type RemediationApproveParams as RemediationApproveParams,
    type RemediationCancelParams as RemediationCancelParams,
    type RemediationRejectParams as RemediationRejectParams,
  };

  export {
    Storage as Storage,
    type ClusterStorage as ClusterStorage,
    type StorageListResponse as StorageListResponse,
    type StorageDeleteResponse as StorageDeleteResponse,
    type StorageCreateParams as StorageCreateParams,
    type StorageUpdateParams as StorageUpdateParams,
    type StorageListParams as StorageListParams,
  };
}
