# Together

Types:

- <code><a href="./src/resources/top-level.ts">RerankResponse</a></code>

Methods:

- <code title="post /rerank">client.<a href="./src/index.ts">rerank</a>({ ...params }) -> RerankResponse</code>

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
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionUserMessageParam</a></code>

Methods:

- <code title="post /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">Completion</a></code>
- <code><a href="./src/resources/completions.ts">CompletionChunk</a></code>
- <code><a href="./src/resources/completions.ts">CompletionUsage</a></code>
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
- <code><a href="./src/resources/files.ts">FileUploadResponse</a></code>

Methods:

- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> FileRetrieveResponse</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>() -> FileListResponse</code>
- <code title="delete /files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> FileDeleteResponse</code>
- <code title="get /files/{id}/content">client.files.<a href="./src/resources/files.ts">content</a>(id) -> Response</code>
- <code title="post /files/upload">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> FileUploadResponse</code>

# FineTune

Types:

- <code><a href="./src/resources/fine-tune.ts">FineTune</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneEvent</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneCreateResponse</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneListResponse</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneCancelResponse</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneDownloadResponse</a></code>

Methods:

- <code title="post /fine-tunes">client.fineTune.<a href="./src/resources/fine-tune.ts">create</a>({ ...params }) -> FineTuneCreateResponse</code>
- <code title="get /fine-tunes/{id}">client.fineTune.<a href="./src/resources/fine-tune.ts">retrieve</a>(id) -> FineTune</code>
- <code title="get /fine-tunes">client.fineTune.<a href="./src/resources/fine-tune.ts">list</a>() -> FineTuneListResponse</code>
- <code title="post /fine-tunes/{id}/cancel">client.fineTune.<a href="./src/resources/fine-tune.ts">cancel</a>(id) -> FineTuneCancelResponse</code>
- <code title="get /finetune/download">client.fineTune.<a href="./src/resources/fine-tune.ts">download</a>({ ...params }) -> FineTuneDownloadResponse</code>
- <code title="get /fine-tunes/{id}/events">client.fineTune.<a href="./src/resources/fine-tune.ts">listEvents</a>(id) -> FineTuneEvent</code>

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

- <code><a href="./src/resources/images.ts">ImageFile</a></code>

Methods:

- <code title="post /images/generations">client.images.<a href="./src/resources/images.ts">create</a>({ ...params }) -> ImageFile</code>

# Audio

Types:

- <code><a href="./src/resources/audio.ts">AudioFile</a></code>

Methods:

- <code title="post /audio/speech">client.audio.<a href="./src/resources/audio.ts">create</a>({ ...params }) -> Response</code>

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

- <code title="get /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobId) -> JobRetrieveResponse</code>
- <code title="get /jobs">client.jobs.<a href="./src/resources/jobs.ts">list</a>() -> JobListResponse</code>

# Endpoints

Types:

- <code><a href="./src/resources/endpoints.ts">EndpointCreateResponse</a></code>
- <code><a href="./src/resources/endpoints.ts">EndpointRetrieveResponse</a></code>
- <code><a href="./src/resources/endpoints.ts">EndpointUpdateResponse</a></code>
- <code><a href="./src/resources/endpoints.ts">EndpointListResponse</a></code>

Methods:

- <code title="post /endpoints">client.endpoints.<a href="./src/resources/endpoints.ts">create</a>({ ...params }) -> EndpointCreateResponse</code>
- <code title="get /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints.ts">retrieve</a>(endpointId) -> EndpointRetrieveResponse</code>
- <code title="patch /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints.ts">update</a>(endpointId, { ...params }) -> EndpointUpdateResponse</code>
- <code title="get /endpoints">client.endpoints.<a href="./src/resources/endpoints.ts">list</a>({ ...params }) -> EndpointListResponse</code>
- <code title="delete /endpoints/{endpointId}">client.endpoints.<a href="./src/resources/endpoints.ts">delete</a>(endpointId) -> void</code>

# Hardware

Types:

- <code><a href="./src/resources/hardware.ts">HardwareListResponse</a></code>

Methods:

- <code title="get /hardware">client.hardware.<a href="./src/resources/hardware.ts">list</a>({ ...params }) -> HardwareListResponse</code>
