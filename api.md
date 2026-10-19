# Together

Types:

- <code><a href="./src/resources/top-level.ts">WhoamiAPIKey</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiOrgAPIKey</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiOrganization</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiProject</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiProjectAPIKey</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiResponse</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiUser</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiUserJwt</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiUserOrgJwt</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiUserOrgProjectJwt</a></code>

Methods:

- <code title="get /v3/whoami">client.<a href="./src/index.ts">whoami</a>() -> WhoamiResponse</code>

# Beta

## Jig

Types:

- <code><a href="./src/resources/beta/jig/jig.ts">ContainerDeploymentStatus</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">Deployment</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">DeploymentLogs</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">DeploymentRevision</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">DeploymentRevisionEvent</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">DeploymentRevisionEventList</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">JigListResponse</a></code>
- <code><a href="./src/resources/beta/jig/jig.ts">JigDestroyResponse</a></code>

Methods:

- <code title="get /v1/deployments/{id}">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">retrieve</a>(id) -> Deployment</code>
- <code title="patch /v1/deployments/{id}">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">update</a>(id, { ...params }) -> Deployment</code>
- <code title="get /v1/deployments">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">list</a>() -> JigListResponse</code>
- <code title="post /v1/deployments">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">deploy</a>({ ...params }) -> Deployment</code>
- <code title="delete /v1/deployments/{id}">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">destroy</a>(id) -> unknown</code>
- <code title="get /v1/deployments/{id}/revisions">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">listRevisions</a>(id, { ...params }) -> DeploymentRevisionEventList</code>
- <code title="get /v1/deployments/{id}/logs">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">retrieveLogs</a>(id, { ...params }) -> DeploymentLogs</code>
- <code title="get /v1/deployments/{id}/revisions/{revisionIdentifier}">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">retrieveRevision</a>(revisionIdentifier, { ...params }) -> DeploymentRevision</code>
- <code title="post /v1/deployments/{id}/rollback">client.beta.jig.<a href="./src/resources/beta/jig/jig.ts">rollback</a>(id, { ...params }) -> Deployment</code>

### Queue

Types:

- <code><a href="./src/resources/beta/jig/queue.ts">QueueRetrieveResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueCancelResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueClearResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueMetricsResponse</a></code>
- <code><a href="./src/resources/beta/jig/queue.ts">QueueSubmitResponse</a></code>

Methods:

- <code title="get /v1/queue/status">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">retrieve</a>({ ...params }) -> QueueRetrieveResponse</code>
- <code title="post /v1/queue/cancel">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">cancel</a>({ ...params }) -> QueueCancelResponse</code>
- <code title="post /v1/queue/clear">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">clear</a>({ ...params }) -> QueueClearResponse</code>
- <code title="get /v1/queue/metrics">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">metrics</a>({ ...params }) -> QueueMetricsResponse</code>
- <code title="post /v1/queue/submit">client.beta.jig.queue.<a href="./src/resources/beta/jig/queue.ts">submit</a>({ ...params }) -> QueueSubmitResponse</code>

### Volumes

Types:

- <code><a href="./src/resources/beta/jig/volumes.ts">S3Origin</a></code>
- <code><a href="./src/resources/beta/jig/volumes.ts">Volume</a></code>
- <code><a href="./src/resources/beta/jig/volumes.ts">VolumeOrigin</a></code>
- <code><a href="./src/resources/beta/jig/volumes.ts">VolumeStatus</a></code>
- <code><a href="./src/resources/beta/jig/volumes.ts">VolumeListResponse</a></code>
- <code><a href="./src/resources/beta/jig/volumes.ts">VolumeDeleteResponse</a></code>

Methods:

- <code title="post /v1/deployments/storage/volumes">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">create</a>({ ...params }) -> Volume</code>
- <code title="get /v1/deployments/storage/volumes/{id}">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">retrieve</a>(id, { ...params }) -> Volume</code>
- <code title="patch /v1/deployments/storage/volumes/{id}">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">update</a>(id, { ...params }) -> Volume</code>
- <code title="get /v1/deployments/storage/volumes">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">list</a>() -> VolumeListResponse</code>
- <code title="delete /v1/deployments/storage/volumes/{id}">client.beta.jig.volumes.<a href="./src/resources/beta/jig/volumes.ts">delete</a>(id) -> unknown</code>

### Secrets

Types:

- <code><a href="./src/resources/beta/jig/secrets.ts">Secret</a></code>
- <code><a href="./src/resources/beta/jig/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/beta/jig/secrets.ts">SecretDeleteResponse</a></code>

Methods:

- <code title="post /v1/deployments/secrets">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">create</a>({ ...params }) -> Secret</code>
- <code title="get /v1/deployments/secrets/{id}">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">retrieve</a>(id) -> Secret</code>
- <code title="patch /v1/deployments/secrets/{id}">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">update</a>(id, { ...params }) -> Secret</code>
- <code title="get /v1/deployments/secrets">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">list</a>() -> SecretListResponse</code>
- <code title="delete /v1/deployments/secrets/{id}">client.beta.jig.secrets.<a href="./src/resources/beta/jig/secrets.ts">delete</a>(id) -> unknown</code>

# Organization

## Usage

Types:

- <code><a href="./src/resources/organization/usage/usage.ts">BillingUsageLineItem</a></code>
- <code><a href="./src/resources/organization/usage/usage.ts">BillingUsageReport</a></code>
- <code><a href="./src/resources/organization/usage/usage.ts">BillingUsageWindow</a></code>

### Costs

Methods:

- <code title="get /v1/billing/usage">client.organization.usage.costs.<a href="./src/resources/organization/usage/costs.ts">list</a>({ ...params }) -> BillingUsageWindowsCursorPagination</code>

# Clusters

Types:

- <code><a href="./src/resources/clusters/clusters.ts">Cluster</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterListResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterDeleteResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterListRegionsResponse</a></code>

Methods:

- <code title="post /v1/compute/clusters">client.clusters.<a href="./src/resources/clusters/clusters.ts">create</a>({ ...params }) -> Cluster</code>
- <code title="get /v1/compute/clusters/{cluster_id}">client.clusters.<a href="./src/resources/clusters/clusters.ts">retrieve</a>(clusterID) -> Cluster</code>
- <code title="put /v1/compute/clusters/{cluster_id}">client.clusters.<a href="./src/resources/clusters/clusters.ts">update</a>(clusterID, { ...params }) -> Cluster</code>
- <code title="get /v1/compute/clusters">client.clusters.<a href="./src/resources/clusters/clusters.ts">list</a>({ ...params }) -> ClusterListResponse</code>
- <code title="delete /v1/compute/clusters/{cluster_id}">client.clusters.<a href="./src/resources/clusters/clusters.ts">delete</a>(clusterID) -> ClusterDeleteResponse</code>
- <code title="get /v1/compute/regions">client.clusters.<a href="./src/resources/clusters/clusters.ts">listRegions</a>() -> ClusterListRegionsResponse</code>

## Remediations

Types:

- <code><a href="./src/resources/clusters/remediations.ts">Remediation</a></code>
- <code><a href="./src/resources/clusters/remediations.ts">RemediationListResponse</a></code>

Methods:

- <code title="post /v1/compute/clusters/{cluster_id}/instances/{instance_id}/remediations">client.clusters.remediations.<a href="./src/resources/clusters/remediations.ts">create</a>(instanceID, { ...params }) -> Remediation</code>
- <code title="get /v1/compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}">client.clusters.remediations.<a href="./src/resources/clusters/remediations.ts">retrieve</a>(remediationID, { ...params }) -> Remediation</code>
- <code title="get /v1/compute/clusters/{cluster_id}/instances/{instance_id}/remediations">client.clusters.remediations.<a href="./src/resources/clusters/remediations.ts">list</a>(instanceID, { ...params }) -> RemediationListResponse</code>
- <code title="post /v1/compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}/approve">client.clusters.remediations.<a href="./src/resources/clusters/remediations.ts">approve</a>(remediationID, { ...params }) -> Remediation</code>
- <code title="post /v1/compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}/cancel">client.clusters.remediations.<a href="./src/resources/clusters/remediations.ts">cancel</a>(remediationID, { ...params }) -> Remediation</code>
- <code title="post /v1/compute/clusters/{cluster_id}/instances/{instance_id}/remediations/{remediation_id}/reject">client.clusters.remediations.<a href="./src/resources/clusters/remediations.ts">reject</a>(remediationID, { ...params }) -> Remediation</code>

## Storage

Types:

- <code><a href="./src/resources/clusters/storage.ts">ClusterStorage</a></code>
- <code><a href="./src/resources/clusters/storage.ts">StorageListResponse</a></code>
- <code><a href="./src/resources/clusters/storage.ts">StorageDeleteResponse</a></code>

Methods:

- <code title="post /v1/compute/clusters/storage/volumes">client.clusters.storage.<a href="./src/resources/clusters/storage.ts">create</a>({ ...params }) -> ClusterStorage</code>
- <code title="get /v1/compute/clusters/storage/volumes/{volume_id}">client.clusters.storage.<a href="./src/resources/clusters/storage.ts">retrieve</a>(volumeID) -> ClusterStorage</code>
- <code title="put /v1/compute/clusters/storage/volumes">client.clusters.storage.<a href="./src/resources/clusters/storage.ts">update</a>({ ...params }) -> ClusterStorage</code>
- <code title="get /v1/compute/clusters/storage/volumes">client.clusters.storage.<a href="./src/resources/clusters/storage.ts">list</a>({ ...params }) -> StorageListResponse</code>
- <code title="delete /v1/compute/clusters/storage/volumes/{volume_id}">client.clusters.storage.<a href="./src/resources/clusters/storage.ts">delete</a>(volumeID) -> StorageDeleteResponse</code>

# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletion</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionChunk</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionPrompt</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionStructuredMessageImageURL</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionStructuredMessageText</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionStructuredMessageVideoURL</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionUsage</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionWarning</a></code>

Methods:

- <code title="post /v1/chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">Completion</a></code>
- <code><a href="./src/resources/completions.ts">CompletionChunk</a></code>
- <code><a href="./src/resources/completions.ts">LogProbs</a></code>
- <code><a href="./src/resources/completions.ts">ToolChoice</a></code>
- <code><a href="./src/resources/completions.ts">Tools</a></code>

Methods:

- <code title="post /v1/completions">client.completions.<a href="./src/resources/completions.ts">create</a>({ ...params }) -> Completion</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">Embedding</a></code>

Methods:

- <code title="post /v1/embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> Embedding</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileList</a></code>
- <code><a href="./src/resources/files.ts">FilePurpose</a></code>
- <code><a href="./src/resources/files.ts">FileResponse</a></code>
- <code><a href="./src/resources/files.ts">FileType</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="get /v1/files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> FileResponse</code>
- <code title="get /v1/files">client.files.<a href="./src/resources/files.ts">list</a>() -> FileList</code>
- <code title="delete /v1/files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> FileDeleteResponse</code>
- <code title="get /v1/files/{id}/content">client.files.<a href="./src/resources/files.ts">content</a>(id) -> Response</code>

# FineTuning

Types:

- <code><a href="./src/resources/fine-tuning.ts">FineTunePreviewResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTunePreviewRow</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuneTokenizedDatasetRetrieveResponse</a></code>
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

- <code title="post /v1/fine-tunes">client.fineTuning.<a href="./src/resources/fine-tuning.ts">create</a>({ ...params }) -> FineTuningCreateResponse</code>
- <code title="get /v1/fine-tunes/{id}">client.fineTuning.<a href="./src/resources/fine-tuning.ts">retrieve</a>(id) -> FinetuneResponse</code>
- <code title="get /v1/fine-tunes">client.fineTuning.<a href="./src/resources/fine-tuning.ts">list</a>() -> FineTuningListResponse</code>
- <code title="delete /v1/fine-tunes/{id}">client.fineTuning.<a href="./src/resources/fine-tuning.ts">delete</a>(id) -> FineTuningDeleteResponse</code>
- <code title="post /v1/fine-tunes/{id}/cancel">client.fineTuning.<a href="./src/resources/fine-tuning.ts">cancel</a>(id) -> FineTuningCancelResponse</code>
- <code title="get /v1/finetune/download">client.fineTuning.<a href="./src/resources/fine-tuning.ts">content</a>({ ...params }) -> Response</code>
- <code title="post /v1/fine-tunes/estimate-price">client.fineTuning.<a href="./src/resources/fine-tuning.ts">estimatePrice</a>({ ...params }) -> FineTuningEstimatePriceResponse</code>
- <code title="get /v1/fine-tunes/{id}/checkpoints">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listCheckpoints</a>(id) -> FineTuningListCheckpointsResponse</code>
- <code title="get /v1/fine-tunes/{id}/events">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listEvents</a>(id) -> FineTuningListEventsResponse</code>
- <code title="get /v1/fine-tunes/{id}/metrics">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listMetrics</a>(id, { ...params }) -> FineTuningListMetricsResponse</code>
- <code title="get /v1/fine-tunes/models/limits">client.fineTuning.<a href="./src/resources/fine-tuning.ts">modelLimits</a>({ ...params }) -> FinetuneModelLimits</code>
- <code title="post /v1/fine-tunes/preview">client.fineTuning.<a href="./src/resources/fine-tuning.ts">preview</a>({ ...params }) -> FineTunePreviewResponse</code>
- <code title="get /v1/fine-tunes/{id}/download-tokenized-dataset">client.fineTuning.<a href="./src/resources/fine-tuning.ts">retrieveTokenizedDataset</a>(id) -> FineTuneTokenizedDatasetRetrieveResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageDataB64</a></code>
- <code><a href="./src/resources/images.ts">ImageDataURL</a></code>
- <code><a href="./src/resources/images.ts">ImageFile</a></code>

Methods:

- <code title="post /v1/images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> ImageFile</code>

# Videos

Types:

- <code><a href="./src/resources/videos.ts">VideoJob</a></code>

Methods:

- <code title="post /v2/videos">client.videos.<a href="./src/resources/videos.ts">create</a>({ ...params }) -> VideoJob</code>
- <code title="get /v2/videos/{id}">client.videos.<a href="./src/resources/videos.ts">retrieve</a>(id) -> VideoJob</code>

# Audio

Types:

- <code><a href="./src/resources/audio/audio.ts">AudioFile</a></code>
- <code><a href="./src/resources/audio/audio.ts">AudioSpeechStreamChunk</a></code>

## Speech

Methods:

- <code title="post /v1/audio/speech">client.audio.speech.<a href="./src/resources/audio/speech.ts">create</a>({ ...params }) -> Response</code>

## Voices

Types:

- <code><a href="./src/resources/audio/voices.ts">VoiceListResponse</a></code>

Methods:

- <code title="get /v1/voices">client.audio.voices.<a href="./src/resources/audio/voices.ts">list</a>() -> VoiceListResponse</code>

## Transcriptions

Types:

- <code><a href="./src/resources/audio/transcriptions.ts">TranscriptionCreateResponse</a></code>

Methods:

- <code title="post /v1/audio/transcriptions">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>

## Translations

Types:

- <code><a href="./src/resources/audio/translations.ts">TranslationCreateResponse</a></code>

Methods:

- <code title="post /v1/audio/translations">client.audio.translations.<a href="./src/resources/audio/translations.ts">create</a>({ ...params }) -> TranslationCreateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models/models.ts">Model</a></code>
- <code><a href="./src/resources/models/models.ts">ModelDtypeCount</a></code>
- <code><a href="./src/resources/models/models.ts">ModelParameters</a></code>
- <code><a href="./src/resources/models/models.ts">ModelWeights</a></code>
- <code><a href="./src/resources/models/models.ts">SupportedModel</a></code>
- <code><a href="./src/resources/models/models.ts">SupportedModelDeploymentProfile</a></code>
- <code><a href="./src/resources/models/models.ts">SupportedModelPerformanceBenchmarks</a></code>
- <code><a href="./src/resources/models/models.ts">ModelDeleteResponse</a></code>
- <code><a href="./src/resources/models/models.ts">ModelListFilesResponse</a></code>
- <code><a href="./src/resources/models/models.ts">ModelListRevisionsResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/models">client.models.<a href="./src/resources/models/models.ts">create</a>({ ...params }) -> Model</code>
- <code title="get /v2/projects/{projectId}/models/{id}">client.models.<a href="./src/resources/models/models.ts">retrieve</a>(id, { ...params }) -> Model</code>
- <code title="patch /v2/projects/{projectId}/models/{id}">client.models.<a href="./src/resources/models/models.ts">update</a>(id, { ...params }) -> Model</code>
- <code title="get /v2/projects/{projectId}/models">client.models.<a href="./src/resources/models/models.ts">list</a>({ ...params }) -> ModelsCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/models/{id}">client.models.<a href="./src/resources/models/models.ts">delete</a>(id, { ...params }) -> ModelDeleteResponse</code>
- <code title="get /v2/projects/{projectId}/models/{id}/files">client.models.<a href="./src/resources/models/models.ts">listFiles</a>(id, { ...params }) -> ModelListFilesResponse</code>
- <code title="get /v2/organizations/{organizationId}/models">client.models.<a href="./src/resources/models/models.ts">listOrgScoped</a>(organizationID, { ...params }) -> ModelsCursorPagination</code>
- <code title="get /v2/projects/{projectId}/models/{id}/revisions">client.models.<a href="./src/resources/models/models.ts">listRevisions</a>(id, { ...params }) -> ModelListRevisionsResponse</code>
- <code title="get /v2/supported-models">client.models.<a href="./src/resources/models/models.ts">listSupported</a>({ ...params }) -> SupportedModelsCursorPagination</code>
- <code title="get /v2/supported-models/{id}">client.models.<a href="./src/resources/models/models.ts">retrieveSupported</a>(id) -> SupportedModel</code>

## RemoteUploads

Types:

- <code><a href="./src/resources/models/remote-uploads.ts">RemoteUploadCreateResponse</a></code>
- <code><a href="./src/resources/models/remote-uploads.ts">RemoteUploadRetrieveResponse</a></code>
- <code><a href="./src/resources/models/remote-uploads.ts">RemoteUploadListResponse</a></code>
- <code><a href="./src/resources/models/remote-uploads.ts">RemoteUploadEventsResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/models/uploads">client.models.remoteUploads.<a href="./src/resources/models/remote-uploads.ts">create</a>({ ...params }) -> RemoteUploadCreateResponse</code>
- <code title="get /v2/projects/{projectId}/models/uploads/{id}">client.models.remoteUploads.<a href="./src/resources/models/remote-uploads.ts">retrieve</a>(id, { ...params }) -> RemoteUploadRetrieveResponse</code>
- <code title="get /v2/projects/{projectId}/models/uploads">client.models.remoteUploads.<a href="./src/resources/models/remote-uploads.ts">list</a>({ ...params }) -> RemoteUploadListResponsesCursorPagination</code>
- <code title="get /v2/projects/{projectId}/models/uploads/{id}/events">client.models.remoteUploads.<a href="./src/resources/models/remote-uploads.ts">events</a>(id, { ...params }) -> RemoteUploadEventsResponse</code>

## Configs

Types:

- <code><a href="./src/resources/models/configs.ts">Certification</a></code>
- <code><a href="./src/resources/models/configs.ts">Config</a></code>
- <code><a href="./src/resources/models/configs.ts">Selector</a></code>

Methods:

- <code title="get /v2/projects/{projectId}/configs/{id}">client.models.configs.<a href="./src/resources/models/configs.ts">retrieve</a>(id, { ...params }) -> Config</code>
- <code title="get /v2/projects/{projectId}/configs">client.models.configs.<a href="./src/resources/models/configs.ts">list</a>({ ...params }) -> ConfigsCursorPagination</code>

# Endpoints

Types:

- <code><a href="./src/resources/endpoints/endpoints.ts">AbMember</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">DeploymentAutoscaling</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">DeploymentMetrics</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">DeploymentPlacementConfig</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">DeploymentStatus</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">Endpoint</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointDeployment</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointDeploymentSummary</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointTrafficSplitEntry</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ErrorMetrics</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">LatencyMetrics</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">MetricsTimeRange</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">RequestMetrics</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ResourceUtilization</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">RuntimeInfo</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ScalingMetric</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ScalingPolicy</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ScalingRules</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowAdaptiveKeyBasedSampling</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowAdaptiveKeyBasedSamplingResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowAdaptiveUniformSampling</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowAdaptiveUniformSamplingResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowEndpointSource</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowEndpointSourceResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowKeyBasedSampling</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowKeyBasedSamplingResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowSource</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowSourceResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowUniformSampling</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ShadowUniformSamplingResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">ThroughputMetrics</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">TimeSeriesDataPoint</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">TokenMetrics</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointDeleteResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointAnalyticsResponse</a></code>
- <code><a href="./src/resources/endpoints/endpoints.ts">EndpointListEventsResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/endpoints">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">create</a>({ ...params }) -> Endpoint</code>
- <code title="get /v2/projects/{projectId}/endpoints/{id}">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">retrieve</a>(id, { ...params }) -> Endpoint</code>
- <code title="patch /v2/projects/{projectId}/endpoints/{id}">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">update</a>(id, { ...params }) -> Endpoint</code>
- <code title="get /v2/projects/{projectId}/endpoints">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">list</a>({ ...params }) -> EndpointsCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/endpoints/{id}">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">delete</a>(id, { ...params }) -> EndpointDeleteResponse</code>
- <code title="get /v2/projects/{projectId}/endpoints/{id}/analytics">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">analytics</a>(id, { ...params }) -> EndpointAnalyticsResponse</code>
- <code title="get /v2/projects/{projectId}/endpoints/{id}/events">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">listEvents</a>(id, { ...params }) -> EndpointListEventsResponsesCursorPagination</code>
- <code title="get /v2/organizations/{organizationId}/endpoints">client.endpoints.<a href="./src/resources/endpoints/endpoints.ts">listOrgScoped</a>(organizationID, { ...params }) -> EndpointsCursorPagination</code>

## PlacementProfiles

Types:

- <code><a href="./src/resources/endpoints/placement-profiles.ts">PlacementProfile</a></code>

Methods:

- <code title="get /v2/projects/{projectId}/placement-profiles/{id}">client.endpoints.placementProfiles.<a href="./src/resources/endpoints/placement-profiles.ts">retrieve</a>(id, { ...params }) -> PlacementProfile</code>
- <code title="get /v2/projects/{projectId}/placement-profiles">client.endpoints.placementProfiles.<a href="./src/resources/endpoints/placement-profiles.ts">list</a>({ ...params }) -> PlacementProfilesCursorPagination</code>

## AbExperiments

Types:

- <code><a href="./src/resources/endpoints/ab-experiments.ts">AbExperiment</a></code>
- <code><a href="./src/resources/endpoints/ab-experiments.ts">AbExperimentDeleteResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/abExperiments">client.endpoints.abExperiments.<a href="./src/resources/endpoints/ab-experiments.ts">create</a>(endpointID, { ...params }) -> AbExperiment</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/abExperiments/{id}">client.endpoints.abExperiments.<a href="./src/resources/endpoints/ab-experiments.ts">retrieve</a>(id, { ...params }) -> AbExperiment</code>
- <code title="patch /v2/projects/{projectId}/endpoints/{endpointId}/abExperiments/{id}">client.endpoints.abExperiments.<a href="./src/resources/endpoints/ab-experiments.ts">update</a>(id, { ...params }) -> AbExperiment</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/abExperiments">client.endpoints.abExperiments.<a href="./src/resources/endpoints/ab-experiments.ts">list</a>(endpointID, { ...params }) -> AbExperimentsCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/endpoints/{endpointId}/abExperiments/{id}">client.endpoints.abExperiments.<a href="./src/resources/endpoints/ab-experiments.ts">delete</a>(id, { ...params }) -> AbExperimentDeleteResponse</code>

## ShadowExperiments

Types:

- <code><a href="./src/resources/endpoints/shadow-experiments/shadow-experiments.ts">ShadowExperiment</a></code>
- <code><a href="./src/resources/endpoints/shadow-experiments/shadow-experiments.ts">ShadowExperimentDeleteResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments">client.endpoints.shadowExperiments.<a href="./src/resources/endpoints/shadow-experiments/shadow-experiments.ts">create</a>(endpointID, { ...params }) -> ShadowExperiment</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{id}">client.endpoints.shadowExperiments.<a href="./src/resources/endpoints/shadow-experiments/shadow-experiments.ts">retrieve</a>(id, { ...params }) -> ShadowExperiment</code>
- <code title="patch /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{id}">client.endpoints.shadowExperiments.<a href="./src/resources/endpoints/shadow-experiments/shadow-experiments.ts">update</a>(id, { ...params }) -> ShadowExperiment</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments">client.endpoints.shadowExperiments.<a href="./src/resources/endpoints/shadow-experiments/shadow-experiments.ts">list</a>(endpointID, { ...params }) -> ShadowExperimentsCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{id}">client.endpoints.shadowExperiments.<a href="./src/resources/endpoints/shadow-experiments/shadow-experiments.ts">delete</a>(id, { ...params }) -> ShadowExperimentDeleteResponse</code>

### Targets

Types:

- <code><a href="./src/resources/endpoints/shadow-experiments/targets.ts">ShadowExperimentTarget</a></code>
- <code><a href="./src/resources/endpoints/shadow-experiments/targets.ts">TargetDeleteResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets">client.endpoints.shadowExperiments.targets.<a href="./src/resources/endpoints/shadow-experiments/targets.ts">create</a>({ ...params }) -> ShadowExperimentTarget</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets/{id}">client.endpoints.shadowExperiments.targets.<a href="./src/resources/endpoints/shadow-experiments/targets.ts">retrieve</a>(id, { ...params }) -> ShadowExperimentTarget</code>
- <code title="patch /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets/{id}">client.endpoints.shadowExperiments.targets.<a href="./src/resources/endpoints/shadow-experiments/targets.ts">update</a>(id, { ...params }) -> ShadowExperimentTarget</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets">client.endpoints.shadowExperiments.targets.<a href="./src/resources/endpoints/shadow-experiments/targets.ts">list</a>(endpointID, experimentID, { ...params }) -> ShadowExperimentTargetsCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/endpoints/{endpointId}/shadowExperiments/{experimentId}/targets/{id}">client.endpoints.shadowExperiments.targets.<a href="./src/resources/endpoints/shadow-experiments/targets.ts">delete</a>(id, { ...params }) -> TargetDeleteResponse</code>

## Rollouts

Types:

- <code><a href="./src/resources/endpoints/rollouts.ts">BlueGreenConfig</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">CanaryConfig</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">MetricResult</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">MetricRule</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">PauseInfo</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RegressionCheck</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RollingConfig</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">Rollout</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RolloutCondition</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RolloutDefaultsPreview</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RolloutStatus</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RolloutStep</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RolloutStepStatus</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">ThresholdCheck</a></code>
- <code><a href="./src/resources/endpoints/rollouts.ts">RolloutDeleteResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/rollouts">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">create</a>(endpointID, { ...params }) -> Rollout</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/{id}">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">retrieve</a>(id, { ...params }) -> Rollout</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/rollouts">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">list</a>(endpointID, { ...params }) -> RolloutsCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/{id}">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">delete</a>(id, { ...params }) -> RolloutDeleteResponse</code>
- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/cancel">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">cancel</a>(id, { ...params }) -> Rollout</code>
- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/pause">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">pause</a>(id, { ...params }) -> Rollout</code>
- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/preview-defaults">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">previewDefaults</a>(endpointID, { ...params }) -> RolloutDefaultsPreview</code>
- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/promote">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">promote</a>(id, { ...params }) -> Rollout</code>
- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/resume">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">resume</a>(id, { ...params }) -> Rollout</code>
- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/rollouts/{id}/start">client.endpoints.rollouts.<a href="./src/resources/endpoints/rollouts.ts">start</a>(id, { ...params }) -> Rollout</code>

## Hardware

Types:

- <code><a href="./src/resources/endpoints/hardware.ts">InferenceInstanceType</a></code>
- <code><a href="./src/resources/endpoints/hardware.ts">HardwareListResponse</a></code>

Methods:

- <code title="get /v2/public/inference-instance-types/{id}">client.endpoints.hardware.<a href="./src/resources/endpoints/hardware.ts">retrieve</a>(id) -> InferenceInstanceType</code>
- <code title="get /v2/public/inference-instance-types">client.endpoints.hardware.<a href="./src/resources/endpoints/hardware.ts">list</a>() -> HardwareListResponse</code>

## Adapters

Types:

- <code><a href="./src/resources/endpoints/adapters.ts">DeploymentAdapterStatus</a></code>
- <code><a href="./src/resources/endpoints/adapters.ts">AdapterCreateResponse</a></code>
- <code><a href="./src/resources/endpoints/adapters.ts">AdapterRetrieveResponse</a></code>
- <code><a href="./src/resources/endpoints/adapters.ts">AdapterUpdateResponse</a></code>
- <code><a href="./src/resources/endpoints/adapters.ts">AdapterListResponse</a></code>
- <code><a href="./src/resources/endpoints/adapters.ts">AdapterDeleteResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">create</a>({ ...params }) -> AdapterCreateResponse</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters/{id}">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">retrieve</a>(id, { ...params }) -> AdapterRetrieveResponse</code>
- <code title="patch /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters/{id}">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">update</a>(id, { ...params }) -> AdapterUpdateResponse</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">list</a>(endpointID, deploymentID, { ...params }) -> AdapterListResponsesCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{deploymentId}/adapters/{id}">client.endpoints.adapters.<a href="./src/resources/endpoints/adapters.ts">delete</a>(id, { ...params }) -> AdapterDeleteResponse</code>

## Deployments

Types:

- <code><a href="./src/resources/endpoints/deployments.ts">DeploymentDeleteResponse</a></code>

Methods:

- <code title="post /v2/projects/{projectId}/endpoints/{endpointId}/deployments">client.endpoints.deployments.<a href="./src/resources/endpoints/deployments.ts">create</a>(endpointID, { ...params }) -> EndpointDeployment</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{id}">client.endpoints.deployments.<a href="./src/resources/endpoints/deployments.ts">retrieve</a>(id, { ...params }) -> EndpointDeployment</code>
- <code title="patch /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{id}">client.endpoints.deployments.<a href="./src/resources/endpoints/deployments.ts">update</a>(id, { ...params }) -> EndpointDeployment</code>
- <code title="get /v2/projects/{projectId}/endpoints/{endpointId}/deployments">client.endpoints.deployments.<a href="./src/resources/endpoints/deployments.ts">list</a>(endpointID, { ...params }) -> EndpointDeploymentsCursorPagination</code>
- <code title="delete /v2/projects/{projectId}/endpoints/{endpointId}/deployments/{id}">client.endpoints.deployments.<a href="./src/resources/endpoints/deployments.ts">delete</a>(id, { ...params }) -> DeploymentDeleteResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>

Methods:

- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectsCursorPagination</code>

# Rerank

Types:

- <code><a href="./src/resources/rerank.ts">RerankCreateResponse</a></code>

Methods:

- <code title="post /v1/rerank">client.rerank.<a href="./src/resources/rerank.ts">create</a>({ ...params }) -> RerankCreateResponse</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">BatchJob</a></code>
- <code><a href="./src/resources/batches.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /v1/batches">client.batches.<a href="./src/resources/batches.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /v1/batches/{id}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(id) -> BatchJob</code>
- <code title="get /v1/batches">client.batches.<a href="./src/resources/batches.ts">list</a>() -> BatchListResponse</code>
- <code title="post /v1/batches/{id}/cancel">client.batches.<a href="./src/resources/batches.ts">cancel</a>(id) -> BatchJob</code>

# Evals

Types:

- <code><a href="./src/resources/evals.ts">EvaluationJob</a></code>
- <code><a href="./src/resources/evals.ts">EvalCreateResponse</a></code>
- <code><a href="./src/resources/evals.ts">EvalListResponse</a></code>
- <code><a href="./src/resources/evals.ts">EvalStatusResponse</a></code>

Methods:

- <code title="post /v1/evaluation">client.evals.<a href="./src/resources/evals.ts">create</a>({ ...params }) -> EvalCreateResponse</code>
- <code title="get /v1/evaluation/{id}">client.evals.<a href="./src/resources/evals.ts">retrieve</a>(id) -> EvaluationJob</code>
- <code title="get /v1/evaluation">client.evals.<a href="./src/resources/evals.ts">list</a>({ ...params }) -> EvalListResponse</code>
- <code title="get /v1/evaluation/{id}/status">client.evals.<a href="./src/resources/evals.ts">status</a>(id) -> EvalStatusResponse</code>
