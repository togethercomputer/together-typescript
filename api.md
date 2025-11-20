# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletion</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionAssistantMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionChunk</a></code>
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

- <code><a href="./src/resources/files.ts">FileObject</a></code>
- <code><a href="./src/resources/files.ts">FilePurpose</a></code>
- <code><a href="./src/resources/files.ts">FileType</a></code>
- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> FileRetrieveResponse</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>() -> FileListResponse</code>
- <code title="delete /files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> FileDeleteResponse</code>
- <code title="get /files/{id}/content">client.files.<a href="./src/resources/files.ts">content</a>(id) -> Response</code>

# FineTuning

Types:

- <code><a href="./src/resources/fine-tuning.ts">CosineLrSchedulerArgs</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTune</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuneEvent</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FullTrainingType</a></code>
- <code><a href="./src/resources/fine-tuning.ts">LinearLrSchedulerArgs</a></code>
- <code><a href="./src/resources/fine-tuning.ts">LoRaTrainingType</a></code>
- <code><a href="./src/resources/fine-tuning.ts">LrScheduler</a></code>
- <code><a href="./src/resources/fine-tuning.ts">TrainingMethodDpo</a></code>
- <code><a href="./src/resources/fine-tuning.ts">TrainingMethodSft</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningCreateResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningListResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningDeleteResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningCancelResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningListCheckpointsResponse</a></code>
- <code><a href="./src/resources/fine-tuning.ts">FineTuningListEventsResponse</a></code>

Methods:

- <code title="post /fine-tunes">client.fineTuning.<a href="./src/resources/fine-tuning.ts">create</a>({ ...params }) -> FineTuningCreateResponse</code>
- <code title="get /fine-tunes/{id}">client.fineTuning.<a href="./src/resources/fine-tuning.ts">retrieve</a>(id) -> FineTune</code>
- <code title="get /fine-tunes">client.fineTuning.<a href="./src/resources/fine-tuning.ts">list</a>() -> FineTuningListResponse</code>
- <code title="delete /fine-tunes/{id}">client.fineTuning.<a href="./src/resources/fine-tuning.ts">delete</a>(id, { ...params }) -> FineTuningDeleteResponse</code>
- <code title="post /fine-tunes/{id}/cancel">client.fineTuning.<a href="./src/resources/fine-tuning.ts">cancel</a>(id) -> FineTuningCancelResponse</code>
- <code title="get /finetune/download">client.fineTuning.<a href="./src/resources/fine-tuning.ts">content</a>({ ...params }) -> Response</code>
- <code title="get /fine-tunes/{id}/checkpoints">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listCheckpoints</a>(id) -> FineTuningListCheckpointsResponse</code>
- <code title="get /fine-tunes/{id}/events">client.fineTuning.<a href="./src/resources/fine-tuning.ts">listEvents</a>(id) -> FineTuningListEventsResponse</code>

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
- <code><a href="./src/resources/videos.ts">VideoCreateResponse</a></code>

Methods:

- <code title="post /videos">client.videos.<a href="./src/resources/videos.ts">create</a>({ ...params }) -> VideoCreateResponse</code>
- <code title="get /videos/{id}">client.videos.<a href="./src/resources/videos.ts">retrieve</a>(id) -> VideoJob</code>

# Audio

Types:

- <code><a href="./src/resources/audio/audio.ts">AudioFile</a></code>
- <code><a href="./src/resources/audio/audio.ts">AudioSpeechStreamChunk</a></code>

Methods:

- <code title="post /audio/speech">client.audio.<a href="./src/resources/audio/audio.ts">create</a>({ ...params }) -> Response</code>

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

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelUploadResponse</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="post /models">client.models.<a href="./src/resources/models.ts">upload</a>({ ...params }) -> ModelUploadResponse</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="get /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobID) -> JobRetrieveResponse</code>
- <code title="get /jobs">client.jobs.<a href="./src/resources/jobs.ts">list</a>() -> JobListResponse</code>

# Endpoints

Types:

- <code><a href="./src/resources/endpoints.ts">Autoscaling</a></code>
- <code><a href="./src/resources/endpoints.ts">DedicatedEndpoint</a></code>
- <code><a href="./src/resources/endpoints.ts">EndpointListResponse</a></code>
- <code><a href="./src/resources/endpoints.ts">EndpointListAvzonesResponse</a></code>

Methods:

- <code title="post /endpoints">client.endpoints.<a href="./src/resources/endpoints.ts">create</a>({ ...params }) -> DedicatedEndpoint</code>
- <code title="get /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints.ts">retrieve</a>(endpointID) -> DedicatedEndpoint</code>
- <code title="patch /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints.ts">update</a>(endpointID, { ...params }) -> DedicatedEndpoint</code>
- <code title="get /endpoints">client.endpoints.<a href="./src/resources/endpoints.ts">list</a>({ ...params }) -> EndpointListResponse</code>
- <code title="delete /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints.ts">delete</a>(endpointID) -> void</code>
- <code title="get /clusters/availability-zones">client.endpoints.<a href="./src/resources/endpoints.ts">listAvzones</a>() -> EndpointListAvzonesResponse</code>

# Hardware

Types:

- <code><a href="./src/resources/hardware.ts">HardwareListResponse</a></code>

Methods:

- <code title="get /hardware">client.hardware.<a href="./src/resources/hardware.ts">list</a>({ ...params }) -> HardwareListResponse</code>

# Rerank

Types:

- <code><a href="./src/resources/rerank.ts">RerankCreateResponse</a></code>

Methods:

- <code title="post /rerank">client.rerank.<a href="./src/resources/rerank.ts">create</a>({ ...params }) -> RerankCreateResponse</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchRetrieveResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchListResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchCancelResponse</a></code>

Methods:

- <code title="post /batches">client.batches.<a href="./src/resources/batches.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /batches/{id}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(id) -> BatchRetrieveResponse</code>
- <code title="get /batches">client.batches.<a href="./src/resources/batches.ts">list</a>() -> BatchListResponse</code>
- <code title="post /batches/{id}/cancel">client.batches.<a href="./src/resources/batches.ts">cancel</a>(id) -> BatchCancelResponse</code>

# Evals

Types:

- <code><a href="./src/resources/evals.ts">EvaluationJob</a></code>
- <code><a href="./src/resources/evals.ts">EvalCreateResponse</a></code>
- <code><a href="./src/resources/evals.ts">EvalUpdateResponse</a></code>
- <code><a href="./src/resources/evals.ts">EvalListResponse</a></code>
- <code><a href="./src/resources/evals.ts">EvalStatusResponse</a></code>

Methods:

- <code title="post /evaluation">client.evals.<a href="./src/resources/evals.ts">create</a>({ ...params }) -> EvalCreateResponse</code>
- <code title="get /evaluation/{id}">client.evals.<a href="./src/resources/evals.ts">retrieve</a>(id) -> EvaluationJob</code>
- <code title="post /evaluation/{id}/update">client.evals.<a href="./src/resources/evals.ts">update</a>(id, { ...params }) -> EvalUpdateResponse</code>
- <code title="get /evaluation">client.evals.<a href="./src/resources/evals.ts">list</a>({ ...params }) -> EvalListResponse</code>
- <code title="get /evaluation/{id}/status">client.evals.<a href="./src/resources/evals.ts">status</a>(id) -> EvalStatusResponse</code>
