# Together

Types:

- <code><a href="./src/resources/top-level.ts">WhoamiResponse</a></code>

Methods:

- <code title="get /whoami">client.<a href="./src/index.ts">whoami</a>() -> WhoamiResponse</code>

# Beta

## Endpoints

Types:

- <code><a href="./src/resources/beta/endpoints/endpoints.ts">AbMember</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">DeploymentAutoscaling</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">DeploymentPlacementConfig</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">DeploymentStatus</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">Endpoint</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">EndpointDeployment</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">EndpointDeploymentSummary</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">EndpointTrafficSplitEntry</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">ShadowAdaptiveKeyBasedSampling</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">ShadowAdaptiveUniformSampling</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">ShadowEndpointSource</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">ShadowKeyBasedSampling</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">ShadowSource</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">ShadowUniformSampling</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">EndpointDeleteResponse</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">EndpointAnalyticsResponse</a></code>
- <code><a href="./src/resources/beta/endpoints/endpoints.ts">EndpointListEventsResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/endpoints">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">create</a>({ ...params }) -> Endpoint</code>
- <code title="get /projects/{projectId}/endpoints/{id}">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">retrieve</a>(id, { ...params }) -> Endpoint</code>
- <code title="patch /projects/{projectId}/endpoints/{id}">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">update</a>(id, { ...params }) -> Endpoint</code>
- <code title="get /projects/{projectId}/endpoints">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">list</a>({ ...params }) -> EndpointsCursorPagination</code>
- <code title="delete /projects/{projectId}/endpoints/{id}">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">delete</a>(id, { ...params }) -> EndpointDeleteResponse</code>
- <code title="get /projects/{projectId}/endpoints/{id}/analytics">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">analytics</a>(id, { ...params }) -> EndpointAnalyticsResponse</code>
- <code title="get /projects/{projectId}/endpoints/{id}/events">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">listEvents</a>(id, { ...params }) -> EndpointListEventsResponsesCursorPagination</code>
- <code title="get /organizations/{organizationId}/endpoints">client.beta.endpoints.<a href="./src/resources/beta/endpoints/endpoints.ts">listOrgScoped</a>(organizationID, { ...params }) -> EndpointsCursorPagination</code>

### PlacementProfiles

Types:

- <code><a href="./src/resources/beta/endpoints/placement-profiles.ts">PlacementProfile</a></code>

Methods:

- <code title="get /projects/{projectId}/placement-profiles/{id}">client.beta.endpoints.placementProfiles.<a href="./src/resources/beta/endpoints/placement-profiles.ts">retrieve</a>(id, { ...params }) -> PlacementProfile</code>
- <code title="get /projects/{projectId}/placement-profiles">client.beta.endpoints.placementProfiles.<a href="./src/resources/beta/endpoints/placement-profiles.ts">list</a>({ ...params }) -> PlacementProfilesCursorPagination</code>

### AbExperiments

Types:

- <code><a href="./src/resources/beta/endpoints/ab-experiments.ts">AbExperiment</a></code>
- <code><a href="./src/resources/beta/endpoints/ab-experiments.ts">AbExperimentDeleteResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/endpoints/{endpointId}/abExperiments">client.beta.endpoints.abExperiments.<a href="./src/resources/beta/endpoints/ab-experiments.ts">create</a>(endpointID, { ...params }) -> AbExperiment</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/abExperiments/{id}">client.beta.endpoints.abExperiments.<a href="./src/resources/beta/endpoints/ab-experiments.ts">retrieve</a>(id, { ...params }) -> AbExperiment</code>
- <code title="patch /projects/{projectId}/endpoints/{endpointId}/abExperiments/{id}">client.beta.endpoints.abExperiments.<a href="./src/resources/beta/endpoints/ab-experiments.ts">update</a>(id, { ...params }) -> AbExperiment</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/abExperiments">client.beta.endpoints.abExperiments.<a href="./src/resources/beta/endpoints/ab-experiments.ts">list</a>(endpointID, { ...params }) -> AbExperimentsCursorPagination</code>
- <code title="delete /projects/{projectId}/endpoints/{endpointId}/abExperiments/{id}">client.beta.endpoints.abExperiments.<a href="./src/resources/beta/endpoints/ab-experiments.ts">delete</a>(id, { ...params }) -> AbExperimentDeleteResponse</code>

### ShadowExperiments

Types:

- <code><a href="./src/resources/beta/endpoints/shadow-experiments/shadow-experiments.ts">ShadowExperiment</a></code>
- <code><a href="./src/resources/beta/endpoints/shadow-experiments/shadow-experiments.ts">ShadowExperimentDeleteResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/endpoints/{endpointId}/shadowExperiments">client.beta.endpoints.shadowExperiments.<a href="./src/resources/beta/endpoints/shadow-experiments/shadow-experiments.ts">create</a>(endpointID, { ...params }) -> ShadowExperiment</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{id}">client.beta.endpoints.shadowExperiments.<a href="./src/resources/beta/endpoints/shadow-experiments/shadow-experiments.ts">retrieve</a>(id, { ...params }) -> ShadowExperiment</code>
- <code title="patch /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{id}">client.beta.endpoints.shadowExperiments.<a href="./src/resources/beta/endpoints/shadow-experiments/shadow-experiments.ts">update</a>(id, { ...params }) -> ShadowExperiment</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/shadowExperiments">client.beta.endpoints.shadowExperiments.<a href="./src/resources/beta/endpoints/shadow-experiments/shadow-experiments.ts">list</a>(endpointID, { ...params }) -> ShadowExperimentsCursorPagination</code>
- <code title="delete /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{id}">client.beta.endpoints.shadowExperiments.<a href="./src/resources/beta/endpoints/shadow-experiments/shadow-experiments.ts">delete</a>(id, { ...params }) -> ShadowExperimentDeleteResponse</code>

#### Targets

Types:

- <code><a href="./src/resources/beta/endpoints/shadow-experiments/targets.ts">ShadowExperimentTarget</a></code>
- <code><a href="./src/resources/beta/endpoints/shadow-experiments/targets.ts">TargetDeleteResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets">client.beta.endpoints.shadowExperiments.targets.<a href="./src/resources/beta/endpoints/shadow-experiments/targets.ts">create</a>({ ...params }) -> ShadowExperimentTarget</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets/{id}">client.beta.endpoints.shadowExperiments.targets.<a href="./src/resources/beta/endpoints/shadow-experiments/targets.ts">retrieve</a>(id, { ...params }) -> ShadowExperimentTarget</code>
- <code title="patch /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets/{id}">client.beta.endpoints.shadowExperiments.targets.<a href="./src/resources/beta/endpoints/shadow-experiments/targets.ts">update</a>(id, { ...params }) -> ShadowExperimentTarget</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets">client.beta.endpoints.shadowExperiments.targets.<a href="./src/resources/beta/endpoints/shadow-experiments/targets.ts">list</a>(endpointID, experimentID, { ...params }) -> ShadowExperimentTargetsCursorPagination</code>
- <code title="delete /projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets/{id}">client.beta.endpoints.shadowExperiments.targets.<a href="./src/resources/beta/endpoints/shadow-experiments/targets.ts">delete</a>(id, { ...params }) -> TargetDeleteResponse</code>

### Rollouts

Types:

- <code><a href="./src/resources/beta/endpoints/rollouts.ts">Rollout</a></code>
- <code><a href="./src/resources/beta/endpoints/rollouts.ts">RolloutDeleteResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/endpoints/{endpointId}/rollouts">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">create</a>(endpointID, { ...params }) -> Rollout</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/rollouts/{id}">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">retrieve</a>(id, { ...params }) -> Rollout</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/rollouts">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">list</a>(endpointID, { ...params }) -> RolloutsCursorPagination</code>
- <code title="delete /projects/{projectId}/endpoints/{endpointId}/rollouts/{id}">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">delete</a>(id, { ...params }) -> RolloutDeleteResponse</code>
- <code title="post /projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/abort">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">abort</a>(id, { ...params }) -> Rollout</code>
- <code title="post /projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/pause">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">pause</a>(id, { ...params }) -> Rollout</code>
- <code title="post /projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/promote">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">promote</a>(id, { ...params }) -> Rollout</code>
- <code title="post /projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/resume">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">resume</a>(id, { ...params }) -> Rollout</code>
- <code title="post /projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/start">client.beta.endpoints.rollouts.<a href="./src/resources/beta/endpoints/rollouts.ts">start</a>(id, { ...params }) -> Rollout</code>

### Hardware

Types:

- <code><a href="./src/resources/beta/endpoints/hardware.ts">InferenceInstanceType</a></code>
- <code><a href="./src/resources/beta/endpoints/hardware.ts">HardwareListResponse</a></code>

Methods:

- <code title="get /public/inference-instance-types/{id}">client.beta.endpoints.hardware.<a href="./src/resources/beta/endpoints/hardware.ts">retrieve</a>(id) -> InferenceInstanceType</code>
- <code title="get /public/inference-instance-types">client.beta.endpoints.hardware.<a href="./src/resources/beta/endpoints/hardware.ts">list</a>() -> HardwareListResponse</code>

### Adapters

Types:

- <code><a href="./src/resources/beta/endpoints/adapters.ts">AdapterCreateResponse</a></code>
- <code><a href="./src/resources/beta/endpoints/adapters.ts">AdapterRetrieveResponse</a></code>
- <code><a href="./src/resources/beta/endpoints/adapters.ts">AdapterUpdateResponse</a></code>
- <code><a href="./src/resources/beta/endpoints/adapters.ts">AdapterListResponse</a></code>
- <code><a href="./src/resources/beta/endpoints/adapters.ts">AdapterDeleteResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters">client.beta.endpoints.adapters.<a href="./src/resources/beta/endpoints/adapters.ts">create</a>({ ...params }) -> AdapterCreateResponse</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters/{id}">client.beta.endpoints.adapters.<a href="./src/resources/beta/endpoints/adapters.ts">retrieve</a>(id, { ...params }) -> AdapterRetrieveResponse</code>
- <code title="patch /projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters/{id}">client.beta.endpoints.adapters.<a href="./src/resources/beta/endpoints/adapters.ts">update</a>(id, { ...params }) -> AdapterUpdateResponse</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters">client.beta.endpoints.adapters.<a href="./src/resources/beta/endpoints/adapters.ts">list</a>(endpointID, deploymentID, { ...params }) -> AdapterListResponsesCursorPagination</code>
- <code title="delete /projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters/{id}">client.beta.endpoints.adapters.<a href="./src/resources/beta/endpoints/adapters.ts">delete</a>(id, { ...params }) -> AdapterDeleteResponse</code>

### Deployments

Types:

- <code><a href="./src/resources/beta/endpoints/deployments.ts">DeploymentDeleteResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/endpoints/{endpointId}/deployments">client.beta.endpoints.deployments.<a href="./src/resources/beta/endpoints/deployments.ts">create</a>(endpointID, { ...params }) -> EndpointDeployment</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/deployments/{id}">client.beta.endpoints.deployments.<a href="./src/resources/beta/endpoints/deployments.ts">retrieve</a>(id, { ...params }) -> EndpointDeployment</code>
- <code title="patch /projects/{projectId}/endpoints/{endpointId}/deployments/{id}">client.beta.endpoints.deployments.<a href="./src/resources/beta/endpoints/deployments.ts">update</a>(id, { ...params }) -> EndpointDeployment</code>
- <code title="get /projects/{projectId}/endpoints/{endpointId}/deployments">client.beta.endpoints.deployments.<a href="./src/resources/beta/endpoints/deployments.ts">list</a>(endpointID, { ...params }) -> EndpointDeploymentsCursorPagination</code>
- <code title="delete /projects/{projectId}/endpoints/{endpointId}/deployments/{id}">client.beta.endpoints.deployments.<a href="./src/resources/beta/endpoints/deployments.ts">delete</a>(id, { ...params }) -> DeploymentDeleteResponse</code>

## Models

Types:

- <code><a href="./src/resources/beta/models/models.ts">Model</a></code>
- <code><a href="./src/resources/beta/models/models.ts">SupportedModel</a></code>
- <code><a href="./src/resources/beta/models/models.ts">SupportedModelDeploymentProfile</a></code>
- <code><a href="./src/resources/beta/models/models.ts">SupportedModelPerformanceBenchmarks</a></code>
- <code><a href="./src/resources/beta/models/models.ts">ModelDeleteResponse</a></code>
- <code><a href="./src/resources/beta/models/models.ts">ModelListFilesResponse</a></code>
- <code><a href="./src/resources/beta/models/models.ts">ModelListRevisionsResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/models">client.beta.models.<a href="./src/resources/beta/models/models.ts">create</a>({ ...params }) -> Model</code>
- <code title="get /projects/{projectId}/models/{id}">client.beta.models.<a href="./src/resources/beta/models/models.ts">retrieve</a>(id, { ...params }) -> Model</code>
- <code title="patch /projects/{projectId}/models/{id}">client.beta.models.<a href="./src/resources/beta/models/models.ts">update</a>(id, { ...params }) -> Model</code>
- <code title="get /projects/{projectId}/models">client.beta.models.<a href="./src/resources/beta/models/models.ts">list</a>({ ...params }) -> ModelsCursorPagination</code>
- <code title="delete /projects/{projectId}/models/{id}">client.beta.models.<a href="./src/resources/beta/models/models.ts">delete</a>(id, { ...params }) -> ModelDeleteResponse</code>
- <code title="get /projects/{projectId}/models/{id}/files">client.beta.models.<a href="./src/resources/beta/models/models.ts">listFiles</a>(id, { ...params }) -> ModelListFilesResponse</code>
- <code title="get /organizations/{organizationId}/models">client.beta.models.<a href="./src/resources/beta/models/models.ts">listOrgScoped</a>(organizationID, { ...params }) -> ModelsCursorPagination</code>
- <code title="get /projects/{projectId}/models/{id}/revisions">client.beta.models.<a href="./src/resources/beta/models/models.ts">listRevisions</a>(id, { ...params }) -> ModelListRevisionsResponse</code>
- <code title="get /supported-models">client.beta.models.<a href="./src/resources/beta/models/models.ts">listSupported</a>({ ...params }) -> SupportedModelsCursorPagination</code>
- <code title="get /supported-models/{id}">client.beta.models.<a href="./src/resources/beta/models/models.ts">retrieveSupported</a>(id) -> SupportedModel</code>

### RemoteUploads

Types:

- <code><a href="./src/resources/beta/models/remote-uploads.ts">RemoteUploadCreateResponse</a></code>
- <code><a href="./src/resources/beta/models/remote-uploads.ts">RemoteUploadRetrieveResponse</a></code>
- <code><a href="./src/resources/beta/models/remote-uploads.ts">RemoteUploadListResponse</a></code>
- <code><a href="./src/resources/beta/models/remote-uploads.ts">RemoteUploadEventsResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/models/uploads">client.beta.models.remoteUploads.<a href="./src/resources/beta/models/remote-uploads.ts">create</a>({ ...params }) -> RemoteUploadCreateResponse</code>
- <code title="get /projects/{projectId}/models/uploads/{id}">client.beta.models.remoteUploads.<a href="./src/resources/beta/models/remote-uploads.ts">retrieve</a>(id, { ...params }) -> RemoteUploadRetrieveResponse</code>
- <code title="get /projects/{projectId}/models/uploads">client.beta.models.remoteUploads.<a href="./src/resources/beta/models/remote-uploads.ts">list</a>({ ...params }) -> RemoteUploadListResponsesCursorPagination</code>
- <code title="get /projects/{projectId}/models/uploads/{id}/events">client.beta.models.remoteUploads.<a href="./src/resources/beta/models/remote-uploads.ts">events</a>(id, { ...params }) -> RemoteUploadEventsResponse</code>

### Configs

Types:

- <code><a href="./src/resources/beta/models/configs.ts">Config</a></code>

Methods:

- <code title="get /projects/{projectId}/configs/{id}">client.beta.models.configs.<a href="./src/resources/beta/models/configs.ts">retrieve</a>(id, { ...params }) -> Config</code>
- <code title="get /projects/{projectId}/configs">client.beta.models.configs.<a href="./src/resources/beta/models/configs.ts">list</a>({ ...params }) -> ConfigsCursorPagination</code>

## Jig

Types:

- <code><a href="./src/resources/beta/jig/jig.ts">ContainerDeploymentStatus</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">Deployment</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">DeploymentLogs</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">JigListResponse</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">JigDestroyResponse</a></code>

Methods:

- <code title="get /deployments/{id}">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">retrieve</a>(id) -> Deployment</code>
- <code title="patch /deployments/{id}">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">update</a>(id, { ...params }) -> Deployment</code>
- <code title="get /deployments">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">list</a>() -> JigListResponse</code>
- <code title="post /deployments">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">deploy</a>({ ...params }) -> Deployment</code>
- <code title="delete /deployments/{id}">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">destroy</a>(id) -> unknown</code>
- <code title="get /deployments/{id}/logs">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">retrieveLogs</a>(id, { ...params }) -> DeploymentLogs</code>

### Queue

Types:

- <code><a href="./src/resources/beta/jig/queue.ts">QueueRetrieveResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueCancelResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueClearResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueMetricsResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueSubmitResponse</a></code>

Methods:

- <code title="get /queue/status">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">retrieve</a>({ ...params }) -> QueueRetrieveResponse</code>
- <code title="post /queue/cancel">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">cancel</a>({ ...params }) -> QueueCancelResponse</code>
- <code title="post /queue/clear">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">clear</a>({ ...params }) -> QueueClearResponse</code>
- <code title="get /queue/metrics">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">metrics</a>({ ...params }) -> QueueMetricsResponse</code>
- <code title="post /queue/submit">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">submit</a>({ ...params }) -> QueueSubmitResponse</code>

### Volumes

Types:

- <code><a href="./src/resources/beta/jig/volumes.ts">Volume</a></code>
- <code><a href="./src/resources/beta/jig/volumes.ts">VolumeListResponse</a></code>
- <code><a href="./src/resources/beta/jig/volumes.ts">VolumeDeleteResponse</a></code>

Methods:

- <code title="post /deployments/storage/volumes">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">create</a>({ ...params }) -> Volume</code>
- <code title="get /deployments/storage/volumes/{id}">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">retrieve</a>(id, { ...params }) -> Volume</code>
- <code title="patch /deployments/storage/volumes/{id}">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">update</a>(id, { ...params }) -> Volume</code>
- <code title="get /deployments/storage/volumes">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">list</a>() -> VolumeListResponse</code>
- <code title="delete /deployments/storage/volumes/{id}">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">delete</a>(id) -> unknown</code>

### Secrets

Types:

- <code><a href="./src/resources/beta/jig/secrets.ts">Secret</a></code>
- <code><a href="./src/resources/beta/jig/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/beta/jig/secrets.ts">SecretDeleteResponse</a></code>

Methods:

- <code title="post /deployments/secrets">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">create</a>({ ...params }) -> Secret</code>
- <code title="get /deployments/secrets/{id}">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">retrieve</a>(id) -> Secret</code>
- <code title="patch /deployments/secrets/{id}">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">update</a>(id, { ...params }) -> Secret</code>
- <code title="get /deployments/secrets">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">list</a>() -> SecretListResponse</code>
- <code title="delete /deployments/secrets/{id}">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">delete</a>(id) -> unknown</code>

## Clusters

Types:

- <code><a href="./src/resources/beta/clusters/clusters.ts">Cluster</a></code>
- <code><a href="./src/resources/beta/clusters/clusters.ts">ClusterListResponse</a></code>
- <code><a href="./src/resources/beta/clusters/clusters.ts">ClusterDeleteResponse</a></code>
- <code><a href="./src/resources/beta/clusters/clusters.ts">ClusterListRegionsResponse</a></code>

Methods:

- <code title="post /compute/clusters">client.beta.clusters.<a href="./src/resources/beta/clusters/clusters.ts">create</a>({ ...params }) -> Cluster</code>
- <code title="get /compute/clusters/{cluster_id}">client.beta.clusters.<a href="./src/resources/beta/clusters/clusters.ts">retrieve</a>(clusterID) -> Cluster</code>
- <code title="put /compute/clusters/{cluster_id}">client.beta.clusters.<a href="./src/resources/beta/clusters/clusters.ts">update</a>(clusterID, { ...params }) -> Cluster</code>
- <code title="get /compute/clusters">client.beta.clusters.<a href="./src/resources/beta/clusters/clusters.ts">list</a>({ ...params }) -> ClusterListResponse</code>
- <code title="delete /compute/clusters/{cluster_id}">client.beta.clusters.<a href="./src/resources/beta/clusters/clusters.ts">delete</a>(clusterID) -> ClusterDeleteResponse</code>
- <code title="get /compute/regions">client.beta.clusters.<a href="./src/resources/beta/clusters/clusters.ts">listRegions</a>() -> ClusterListRegionsResponse</code>

### Remediations

Types:

- <code><a href="./src/resources/beta/clusters/remediations.ts">Remediation</a></code>
- <code><a href="./src/resources/beta/clusters/remediations.ts">RemediationListResponse</a></code>

Methods:

- <code title="post /compute/clusters/{cluster_id}/instances/{instance_id}/remediations">client.beta.clusters.remediations.<a href="./src/resources/beta/clusters/remediations.ts">create</a>(instanceID, { ...params }) -> Remediation</code>
- <code title="get /compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}">client.beta.clusters.remediations.<a href="./src/resources/beta/clusters/remediations.ts">retrieve</a>(remediationID, { ...params }) -> Remediation</code>
- <code title="get /compute/clusters/{cluster_id}/instances/{instance_id}/remediations">client.beta.clusters.remediations.<a href="./src/resources/beta/clusters/remediations.ts">list</a>(instanceID, { ...params }) -> RemediationListResponse</code>
- <code title="post /compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}/approve">client.beta.clusters.remediations.<a href="./src/resources/beta/clusters/remediations.ts">approve</a>(remediationID, { ...params }) -> Remediation</code>
- <code title="post /compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}/cancel">client.beta.clusters.remediations.<a href="./src/resources/beta/clusters/remediations.ts">cancel</a>(remediationID, { ...params }) -> Remediation</code>
- <code title="post /compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}/reject">client.beta.clusters.remediations.<a href="./src/resources/beta/clusters/remediations.ts">reject</a>(remediationID, { ...params }) -> Remediation</code>

### Storage

Types:

- <code><a href="./src/resources/beta/clusters/storage.ts">ClusterStorage</a></code>
- <code><a href="./src/resources/beta/clusters/storage.ts">StorageListResponse</a></code>
- <code><a href="./src/resources/beta/clusters/storage.ts">StorageDeleteResponse</a></code>

Methods:

- <code title="post /compute/clusters/storage/volumes">client.beta.clusters.storage.<a href="./src/resources/beta/clusters/storage.ts">create</a>({ ...params }) -> ClusterStorage</code>
- <code title="get /compute/clusters/storage/volumes/{volume_id}">client.beta.clusters.storage.<a href="./src/resources/beta/clusters/storage.ts">retrieve</a>(volumeID) -> ClusterStorage</code>
- <code title="put /compute/clusters/storage/volumes">client.beta.clusters.storage.<a href="./src/resources/beta/clusters/storage.ts">update</a>({ ...params }) -> ClusterStorage</code>
- <code title="get /compute/clusters/storage/volumes">client.beta.clusters.storage.<a href="./src/resources/beta/clusters/storage.ts">list</a>({ ...params }) -> StorageListResponse</code>
- <code title="delete /compute/clusters/storage/volumes/{volume_id}">client.beta.clusters.storage.<a href="./src/resources/beta/clusters/storage.ts">delete</a>(volumeID) -> StorageDeleteResponse</code>

# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletion</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionAssistantMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionChunk</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionPrompt</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionFunctionMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionMessage</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionSystemMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionTool</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionToolMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionStructuredMessageImageURL</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionStructuredMessageText</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionStructuredMessageVideoURL</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionUsage</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionWarning</a></code>

Methods:

- <code title="post /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">Completion</a></code>
- <code><a href="./src/resources/completions.ts">CompletionChunk</a></code>
- <code><a href="./src/resources/completions.ts">LogProbs</a></code>
- <code><a href="./src/resources/completions.ts">ToolChoice</a></code>
- <code><a href="./src/resources/completions.ts">Tools</a></code>

Methods:

- <code title="post /completions">client.completions.<a href="./src/resources/completions.ts">create</a>({ ...params }) -> Completion</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">Embedding</a></code>

Methods:

- <code title="post /embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> Embedding</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileList</a></code>
- <code><a href="./src/resources/files.ts">FilePurpose</a></code>
- <code><a href="./src/resources/files.ts">FileResponse</a></code>
- <code><a href="./src/resources/files.ts">FileType</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> FileResponse</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>() -> FileList</code>
- <code title="delete /files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> FileDeleteResponse</code>
- <code title="get /files/{id}/content">client.files.<a href="./src/resources/files.ts">content</a>(id) -> Response</code>
- <code title="post /files/upload">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> FileResponse</code>

# FineTuning

Types:

- <code><a href="./src/resources/fine-tuning.ts">FinetuneEvent</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FinetuneEventType</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FinetuneModelLimits</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FinetuneResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningCreateResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningListResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningDeleteResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningCancelResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningEstimatePriceResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningListCheckpointsResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningListEventsResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningListMetricsResponse</a></code>

Methods:

- <code title="post /fine-tunes">client.fineTuning.<a href="./src/resources/fine-tuning.ts">create</a>({ ...params }) -> FineTuningCreateResponse</code>
- <code title="get /fine-tunes/{id}">client.fineTuning.<a href="./src/resources/fine-tuning.ts">retrieve</a>(id) -> FinetuneResponse</code>
- <code title="get /fine-tunes">client.fineTuning.<a href="./src/resources/fine-tuning.ts">list</a>() -> FineTuningListResponse</code>
- <code title="delete /fine-tunes/{id}">client.fineTuning.<a href="./src/resources/fine-tuning.ts">delete</a>(id, { ...params }) -> FineTuningDeleteResponse</code>
- <code title="post /fine-tunes/{id}/cancel">client.fineTuning.<a href="./src/resources/fine-tuning.ts">cancel</a>(id) -> FineTuningCancelResponse</code>
- <code title="get /finetune/download">client.fineTuning.<a href="./src/resources/fine-tuning.ts">content</a>({ ...params }) -> Response</code>
- <code title="post /fine-tunes/estimate-price">client.fineTuning.<a href="./src/resources/fine-tuning.ts">estimatePrice</a>({ ...params }) -> FineTuningEstimatePriceResponse</code>
- <code title="get /fine-tunes/{id}/checkpoints">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listCheckpoints</a>(id) -> FineTuningListCheckpointsResponse</code>
- <code title="get /fine-tunes/{id}/events">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listEvents</a>(id) -> FineTuningListEventsResponse</code>
- <code title="get /fine-tunes/{id}/metrics">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listMetrics</a>(id, { ...params }) -> FineTuningListMetricsResponse</code>
- <code title="get /fine-tunes/models/limits">client.fineTuning.<a href="./src/resources/fine-tuning.ts">modelLimits</a>({ ...params }) -> FinetuneModelLimits</code>

# CodeInterpreter

Types:

- <code><a href="./src/resources/code-interpreter/code-interpreter.ts">ExecuteResponse</a></code>

Methods:

- <code title="post /tci/execute">client.codeInterpreter.<a href="./src/resources/code-interpreter/code-interpreter.ts">execute</a>({ ...params }) -> ExecuteResponse</code>

## Sessions

Types:

- <code><a href="./src/resources/code-interpreter/sessions.ts">SessionListResponse</a></code>

Methods:

- <code title="get /tci/sessions">client.codeInterpreter.sessions.<a href="./src/resources/code-interpreter/sessions.ts">list</a>() -> SessionListResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageDataB64</a></code>
- <code><a href="./src/resources/images.ts">ImageDataURL</a></code>
- <code><a href="./src/resources/images.ts">ImageFile</a></code>

Methods:

- <code title="post /images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> ImageFile</code>

# Videos

Types:

- <code><a href="./src/resources/videos.ts">VideoJob</a></code>

Methods:

- <code title="post /videos">client.videos.<a href="./src/resources/videos.ts">create</a>({ ...params }) -> VideoJob</code>
- <code title="get /videos/{id}">client.videos.<a href="./src/resources/videos.ts">retrieve</a>(id) -> VideoJob</code>

# Audio

Types:

- <code><a href="./src/resources/audio/audio.ts">AudioFile</a></code>
- <code><a href="./src/resources/audio/audio.ts">AudioSpeechStreamChunk</a></code>

## Speech

Methods:

- <code title="post /audio/speech">client.audio.speech.<a href="./src/resources/audio/speech.ts">create</a>({ ...params }) -> Response</code>

## Voices

Types:

- <code><a href="./src/resources/audio/voices.ts">VoiceListResponse</a></code>

Methods:

- <code title="get /voices">client.audio.voices.<a href="./src/resources/audio/voices.ts">list</a>() -> VoiceListResponse</code>

## Transcriptions

Types:

- <code><a href="./src/resources/audio/transcriptions.ts">TranscriptionCreateResponse</a></code>

Methods:

- <code title="post /audio/transcriptions">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>

## Translations

Types:

- <code><a href="./src/resources/audio/translations.ts">TranslationCreateResponse</a></code>

Methods:

- <code title="post /audio/translations">client.audio.translations.<a href="./src/resources/audio/translations.ts">create</a>({ ...params }) -> TranslationCreateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models/models.ts">ModelObject</a></code>
- <code><a href="./src/resources/models/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models/models.ts">ModelUploadResponse</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
- <code title="post /models">client.models.<a href="./src/resources/models/models.ts">upload</a>({ ...params }) -> ModelUploadResponse</code>

## Uploads

Types:

- <code><a href="./src/resources/models/uploads.ts">UploadStatusResponse</a></code>

Methods:

- <code title="get /jobs/{jobId}">client.models.uploads.<a href="./src/resources/models/uploads.ts">status</a>(jobID) -> UploadStatusResponse</code>

# Endpoints

Types:

- <code><a href="./src/resources/endpoints/endpoints.ts">Autoscaling</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">DedicatedEndpoint</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointListResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointListAvzonesResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointListHardwareResponse</a></code>

Methods:

- <code title="post /endpoints">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">create</a>({ ...params }) -> DedicatedEndpoint</code>
- <code title="get /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">retrieve</a>(endpointID) -> DedicatedEndpoint</code>
- <code title="patch /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">update</a>(endpointID, { ...params }) -> DedicatedEndpoint</code>
- <code title="get /endpoints">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">list</a>({ ...params }) -> EndpointListResponse</code>
- <code title="delete /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">delete</a>(endpointID) -> void</code>
- <code title="get /clusters/availability-zones">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">listAvzones</a>() -> EndpointListAvzonesResponse</code>
- <code title="get /hardware">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">listHardware</a>({ ...params }) -> EndpointListHardwareResponse</code>

## Adapters

Types:

- <code><a href="./src/resources/endpoints/adapters.ts">AdapterListResponse</a></code>
- <code><a href="./src/resources/endpoints/adapters.ts">AdapterAddResponse</a></code>
- <code><a href="./src/resources/endpoints/adapters.ts">AdapterRemoveResponse</a></code>

Methods:

- <code title="get /endpoints/{endpointId}/adapters">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">list</a>(endpointID) -> AdapterListResponse</code>
- <code title="post /endpoints/{endpointId}/adapters">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">add</a>(endpointID, { ...params }) -> AdapterAddResponse</code>
- <code title="delete /endpoints/{endpointId}/adapters">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">remove</a>(endpointID, { ...params }) -> AdapterRemoveResponse</code>

# Rerank

Types:

- <code><a href="./src/resources/rerank.ts">RerankCreateResponse</a></code>

Methods:

- <code title="post /rerank">client.rerank.<a href="./src/resources/rerank.ts">create</a>({ ...params }) -> RerankCreateResponse</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">BatchJob</a></code>
- <code><a href="./src/resources/batches.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /batches">client.batches.<a href="./src/resources/batches.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /batches/{id}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(id) -> BatchJob</code>
- <code title="get /batches">client.batches.<a href="./src/resources/batches.ts">list</a>() -> BatchListResponse</code>
- <code title="post /batches/{id}/cancel">client.batches.<a href="./src/resources/batches.ts">cancel</a>(id) -> BatchJob</code>

# Evals

Types:

- <code><a href="./src/resources/evals.ts">EvaluationJob</a></code>
- <code><a href="./src/resources/evals.ts">EvalCreateResponse</a></code>
- <code><a href="./src/resources/evals.ts">EvalListResponse</a></code>
- <code><a href="./src/resources/evals.ts">EvalStatusResponse</a></code>

Methods:

- <code title="post /evaluation">client.evals.<a href="./src/resources/evals.ts">create</a>({ ...params }) -> EvalCreateResponse</code>
- <code title="get /evaluation/{id}">client.evals.<a href="./src/resources/evals.ts">retrieve</a>(id) -> EvaluationJob</code>
- <code title="get /evaluation">client.evals.<a href="./src/resources/evals.ts">list</a>({ ...params }) -> EvalListResponse</code>
- <code title="get /evaluation/{id}/status">client.evals.<a href="./src/resources/evals.ts">status</a>(id) -> EvalStatusResponse</code>
