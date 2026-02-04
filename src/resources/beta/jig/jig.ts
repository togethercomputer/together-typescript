// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QueueAPI from './queue';
import {
  Queue,
  QueueCancelParams,
  QueueCancelResponse,
  QueueMetricsParams,
  QueueMetricsResponse,
  QueueRetrieveParams,
  QueueRetrieveResponse,
  QueueSubmitParams,
  QueueSubmitResponse,
} from './queue';
import * as SecretsAPI from './secrets';
import {
  Secret,
  SecretCreateParams,
  SecretDeleteResponse,
  SecretListResponse,
  SecretUpdateParams,
  Secrets,
} from './secrets';
import * as VolumesAPI from './volumes';
import {
  Volume as VolumesAPIVolume,
  VolumeCreateParams,
  VolumeDeleteResponse,
  VolumeListResponse,
  VolumeUpdateParams,
  Volumes,
} from './volumes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Jig extends APIResource {
  queue: QueueAPI.Queue = new QueueAPI.Queue(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);

  /**
   * Retrieve details of a specific deployment by its ID or name
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Deployment> {
    return this._client.get(path`/deployments/${id}`, options);
  }

  /**
   * Update an existing deployment configuration
   */
  update(id: string, body: JigUpdateParams, options?: RequestOptions): APIPromise<Deployment> {
    return this._client.patch(path`/deployments/${id}`, { body, ...options });
  }

  /**
   * Get a list of all deployments in your project
   */
  list(options?: RequestOptions): APIPromise<JigListResponse> {
    return this._client.get('/deployments', options);
  }

  /**
   * Create a new deployment with specified configuration
   */
  deploy(body: JigDeployParams, options?: RequestOptions): APIPromise<Deployment> {
    return this._client.post('/deployments', { body, ...options });
  }

  /**
   * Delete an existing deployment
   */
  destroy(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/deployments/${id}`, options);
  }

  /**
   * Retrieve logs from a deployment, optionally filtered by replica ID.
   */
  retrieveLogs(
    id: string,
    query: JigRetrieveLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeploymentLogs> {
    return this._client.get(path`/deployments/${id}/logs`, { query, ...options });
  }
}

export interface Deployment {
  /**
   * ID is the unique identifier of the deployment
   */
  id?: string;

  /**
   * Args are the arguments passed to the container's command
   */
  args?: Array<string>;

  /**
   * Autoscaling contains autoscaling configuration parameters for this deployment
   */
  autoscaling?: { [key: string]: string };

  /**
   * Command is the entrypoint command run in the container
   */
  command?: Array<string>;

  /**
   * CPU is the amount of CPU resource allocated to each replica in cores (fractional
   * value is allowed)
   */
  cpu?: number;

  /**
   * CreatedAt is the ISO8601 timestamp when this deployment was created
   */
  created_at?: string;

  /**
   * Description provides a human-readable explanation of the deployment's purpose or
   * content
   */
  description?: string;

  /**
   * DesiredReplicas is the number of replicas that the orchestrator is targeting
   */
  desired_replicas?: number;

  /**
   * EnvironmentVariables is a list of environment variables set in the container
   */
  environment_variables?: Array<Deployment.EnvironmentVariable>;

  /**
   * GPUCount is the number of GPUs allocated to each replica in this deployment
   */
  gpu_count?: number;

  /**
   * GPUType specifies the type of GPU requested (if any) for this deployment
   */
  gpu_type?: 'h100-80gb' | ' a100-80gb';

  /**
   * HealthCheckPath is the HTTP path used for health checks of the application
   */
  health_check_path?: string;

  /**
   * Image specifies the container image used for this deployment
   */
  image?: string;

  /**
   * MaxReplicas is the maximum number of replicas to run for this deployment
   */
  max_replicas?: number;

  /**
   * Memory is the amount of memory allocated to each replica in GiB (fractional
   * value is allowed)
   */
  memory?: number;

  /**
   * MinReplicas is the minimum number of replicas to run for this deployment
   */
  min_replicas?: number;

  /**
   * Name is the name of the deployment
   */
  name?: string;

  /**
   * Object is the type identifier for this response (always "deployment")
   */
  object?: string;

  /**
   * Port is the container port that the deployment exposes
   */
  port?: number;

  /**
   * ReadyReplicas is the current number of replicas that are in the Ready state
   */
  ready_replicas?: number;

  /**
   * ReplicaEvents is a mapping of replica names or IDs to their status events
   */
  replica_events?: { [key: string]: Deployment.ReplicaEvents };

  /**
   * Status represents the overall status of the deployment (e.g., Updating, Scaling,
   * Ready, Failed)
   */
  status?: 'Updating' | 'Scaling' | 'Ready' | 'Failed';

  /**
   * Storage is the amount of storage (in MB or units as defined by the platform)
   * allocated to each replica
   */
  storage?: number;

  /**
   * UpdatedAt is the ISO8601 timestamp when this deployment was last updated
   */
  updated_at?: string;

  /**
   * Volumes is a list of volume mounts for this deployment
   */
  volumes?: Array<Deployment.Volume>;
}

export namespace Deployment {
  export interface EnvironmentVariable {
    /**
     * Name is the environment variable name (e.g., "DATABASE_URL"). Must start with a
     * letter or underscore, followed by letters, numbers, or underscores
     */
    name: string;

    /**
     * Value is the plain text value for the environment variable. Use this for
     * non-sensitive values. Either Value or ValueFromSecret must be set, but not both
     */
    value?: string;

    /**
     * ValueFromSecret references a secret by name or ID to use as the value. Use this
     * for sensitive values like API keys or passwords. Either Value or ValueFromSecret
     * must be set, but not both
     */
    value_from_secret?: string;
  }

  export interface ReplicaEvents {
    /**
     * Image is the container image used for this replica
     */
    image?: string;

    /**
     * ReplicaReadySince is the timestamp when the replica became ready to serve
     * traffic
     */
    replica_ready_since?: string;

    /**
     * ReplicaStatus is the current status of the replica (e.g., "Running", "Waiting",
     * "Terminated")
     */
    replica_status?: string;

    /**
     * ReplicaStatusMessage provides a human-readable message explaining the replica's
     * status
     */
    replica_status_message?: string;

    /**
     * ReplicaStatusReason provides a brief machine-readable reason for the replica's
     * status
     */
    replica_status_reason?: string;

    /**
     * RevisionID is the deployment revision ID associated with this replica
     */
    revision_id?: string;

    /**
     * VolumePreloadCompletedAt is the timestamp when the volume preload completed
     */
    volume_preload_completed_at?: string;

    /**
     * VolumePreloadStartedAt is the timestamp when the volume preload started
     */
    volume_preload_started_at?: string;

    /**
     * VolumePreloadStatus is the status of the volume preload (e.g., "InProgress",
     * "Completed", "Failed")
     */
    volume_preload_status?: string;
  }

  export interface Volume {
    /**
     * MountPath is the path in the container where the volume will be mounted (e.g.,
     * "/data")
     */
    mount_path: string;

    /**
     * Name is the name of the volume to mount. Must reference an existing volume by
     * name or ID
     */
    name: string;
  }
}

export interface DeploymentLogs {
  lines?: Array<string>;
}

export interface JigListResponse {
  /**
   * Data is the array of deployment items
   */
  data?: Array<Deployment>;

  /**
   * Object is the type identifier for this response (always "list")
   */
  object?: string;
}

export type JigDestroyResponse = unknown;

export interface JigUpdateParams {
  /**
   * Args overrides the container's CMD. Provide as an array of arguments (e.g.,
   * ["python", "app.py"])
   */
  args?: Array<string>;

  /**
   * Autoscaling configuration as key-value pairs. Example: {"metric":
   * "QueueBacklogPerWorker", "target": "10"} to scale based on queue backlog
   */
  autoscaling?: { [key: string]: string };

  /**
   * Command overrides the container's ENTRYPOINT. Provide as an array (e.g.,
   * ["/bin/sh", "-c"])
   */
  command?: Array<string>;

  /**
   * CPU is the number of CPU cores to allocate per container instance (e.g., 0.1 =
   * 100 milli cores)
   */
  cpu?: number;

  /**
   * Description is an optional human-readable description of your deployment
   */
  description?: string;

  /**
   * EnvironmentVariables is a list of environment variables to set in the container.
   * This will replace all existing environment variables
   */
  environment_variables?: Array<JigUpdateParams.EnvironmentVariable>;

  /**
   * GPUCount is the number of GPUs to allocate per container instance
   */
  gpu_count?: number;

  /**
   * GPUType specifies the GPU hardware to use (e.g., "h100-80gb")
   */
  gpu_type?: 'h100-80gb' | ' a100-80gb';

  /**
   * HealthCheckPath is the HTTP path for health checks (e.g., "/health"). Set to
   * empty string to disable health checks
   */
  health_check_path?: string;

  /**
   * Image is the container image to deploy from registry.together.ai.
   */
  image?: string;

  /**
   * MaxReplicas is the maximum number of replicas that can be scaled up to.
   */
  max_replicas?: number;

  /**
   * Memory is the amount of RAM to allocate per container instance in GiB (e.g., 0.5
   * = 512MiB)
   */
  memory?: number;

  /**
   * MinReplicas is the minimum number of replicas to run
   */
  min_replicas?: number;

  /**
   * Name is the new unique identifier for your deployment. Must contain only
   * alphanumeric characters, underscores, or hyphens (1-100 characters)
   */
  name?: string;

  /**
   * Port is the container port your application listens on (e.g., 8080 for web
   * servers)
   */
  port?: number;

  /**
   * Storage is the amount of ephemeral disk storage to allocate per container
   * instance (e.g., 10 = 10GiB)
   */
  storage?: number;

  /**
   * TerminationGracePeriodSeconds is the time in seconds to wait for graceful
   * shutdown before forcefully terminating the replica
   */
  termination_grace_period_seconds?: number;

  /**
   * Volumes is a list of volume mounts to attach to the container. This will replace
   * all existing volumes
   */
  volumes?: Array<JigUpdateParams.Volume>;
}

export namespace JigUpdateParams {
  export interface EnvironmentVariable {
    /**
     * Name is the environment variable name (e.g., "DATABASE_URL"). Must start with a
     * letter or underscore, followed by letters, numbers, or underscores
     */
    name: string;

    /**
     * Value is the plain text value for the environment variable. Use this for
     * non-sensitive values. Either Value or ValueFromSecret must be set, but not both
     */
    value?: string;

    /**
     * ValueFromSecret references a secret by name or ID to use as the value. Use this
     * for sensitive values like API keys or passwords. Either Value or ValueFromSecret
     * must be set, but not both
     */
    value_from_secret?: string;
  }

  export interface Volume {
    /**
     * MountPath is the path in the container where the volume will be mounted (e.g.,
     * "/data")
     */
    mount_path: string;

    /**
     * Name is the name of the volume to mount. Must reference an existing volume by
     * name or ID
     */
    name: string;
  }
}

export interface JigDeployParams {
  /**
   * GPUType specifies the GPU hardware to use (e.g., "h100-80gb").
   */
  gpu_type: 'h100-80gb' | 'a100-80gb';

  /**
   * Image is the container image to deploy from registry.together.ai.
   */
  image: string;

  /**
   * Name is the unique identifier for your deployment. Must contain only
   * alphanumeric characters, underscores, or hyphens (1-100 characters)
   */
  name: string;

  /**
   * Args overrides the container's CMD. Provide as an array of arguments (e.g.,
   * ["python", "app.py"])
   */
  args?: Array<string>;

  /**
   * Autoscaling configuration as key-value pairs. Example: {"metric":
   * "QueueBacklogPerWorker", "target": "10"} to scale based on queue backlog
   */
  autoscaling?: { [key: string]: string };

  /**
   * Command overrides the container's ENTRYPOINT. Provide as an array (e.g.,
   * ["/bin/sh", "-c"])
   */
  command?: Array<string>;

  /**
   * CPU is the number of CPU cores to allocate per container instance (e.g., 0.1 =
   * 100 milli cores)
   */
  cpu?: number;

  /**
   * Description is an optional human-readable description of your deployment
   */
  description?: string;

  /**
   * EnvironmentVariables is a list of environment variables to set in the container.
   * Each must have a name and either a value or value_from_secret
   */
  environment_variables?: Array<JigDeployParams.EnvironmentVariable>;

  /**
   * GPUCount is the number of GPUs to allocate per container instance. Defaults to 0
   * if not specified
   */
  gpu_count?: number;

  /**
   * HealthCheckPath is the HTTP path for health checks (e.g., "/health"). If set,
   * the platform will check this endpoint to determine container health
   */
  health_check_path?: string;

  /**
   * MaxReplicas is the maximum number of container instances that can be scaled up
   * to. If not set, will be set to MinReplicas
   */
  max_replicas?: number;

  /**
   * Memory is the amount of RAM to allocate per container instance in GiB (e.g., 0.5
   * = 512MiB)
   */
  memory?: number;

  /**
   * MinReplicas is the minimum number of container instances to run. Defaults to 1
   * if not specified
   */
  min_replicas?: number;

  /**
   * Port is the container port your application listens on (e.g., 8080 for web
   * servers). Required if your application serves traffic
   */
  port?: number;

  /**
   * Storage is the amount of ephemeral disk storage to allocate per container
   * instance (e.g., 10 = 10GiB)
   */
  storage?: number;

  /**
   * TerminationGracePeriodSeconds is the time in seconds to wait for graceful
   * shutdown before forcefully terminating the replica
   */
  termination_grace_period_seconds?: number;

  /**
   * Volumes is a list of volume mounts to attach to the container. Each mount must
   * reference an existing volume by name
   */
  volumes?: Array<JigDeployParams.Volume>;
}

export namespace JigDeployParams {
  export interface EnvironmentVariable {
    /**
     * Name is the environment variable name (e.g., "DATABASE_URL"). Must start with a
     * letter or underscore, followed by letters, numbers, or underscores
     */
    name: string;

    /**
     * Value is the plain text value for the environment variable. Use this for
     * non-sensitive values. Either Value or ValueFromSecret must be set, but not both
     */
    value?: string;

    /**
     * ValueFromSecret references a secret by name or ID to use as the value. Use this
     * for sensitive values like API keys or passwords. Either Value or ValueFromSecret
     * must be set, but not both
     */
    value_from_secret?: string;
  }

  export interface Volume {
    /**
     * MountPath is the path in the container where the volume will be mounted (e.g.,
     * "/data")
     */
    mount_path: string;

    /**
     * Name is the name of the volume to mount. Must reference an existing volume by
     * name or ID
     */
    name: string;
  }
}

export interface JigRetrieveLogsParams {
  /**
   * Replica ID to filter logs
   */
  replica_id?: string;
}

Jig.Queue = Queue;
Jig.Volumes = Volumes;
Jig.Secrets = Secrets;

export declare namespace Jig {
  export {
    type Deployment as Deployment,
    type DeploymentLogs as DeploymentLogs,
    type JigListResponse as JigListResponse,
    type JigDestroyResponse as JigDestroyResponse,
    type JigUpdateParams as JigUpdateParams,
    type JigDeployParams as JigDeployParams,
    type JigRetrieveLogsParams as JigRetrieveLogsParams,
  };

  export {
    Queue as Queue,
    type QueueRetrieveResponse as QueueRetrieveResponse,
    type QueueCancelResponse as QueueCancelResponse,
    type QueueMetricsResponse as QueueMetricsResponse,
    type QueueSubmitResponse as QueueSubmitResponse,
    type QueueRetrieveParams as QueueRetrieveParams,
    type QueueCancelParams as QueueCancelParams,
    type QueueMetricsParams as QueueMetricsParams,
    type QueueSubmitParams as QueueSubmitParams,
  };

  export {
    Volumes as Volumes,
    type VolumesAPIVolume as Volume,
    type VolumeListResponse as VolumeListResponse,
    type VolumeDeleteResponse as VolumeDeleteResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeUpdateParams as VolumeUpdateParams,
  };

  export {
    Secrets as Secrets,
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
  };
}
