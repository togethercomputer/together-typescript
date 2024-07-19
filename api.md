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
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionUsage</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionUserMessageParam</a></code>

Methods:

- <code title="post /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">Completion</a></code>
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
- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> FileRetrieveResponse</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>() -> FileListResponse</code>
- <code title="delete /files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> FileDeleteResponse</code>
- <code title="get /files/{id}/content">client.files.<a href="./src/resources/files.ts">content</a>(id) -> Response</code>

# FineTune

Types:

- <code><a href="./src/resources/fine-tune.ts">FineTune</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneEvent</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneListResponse</a></code>
- <code><a href="./src/resources/fine-tune.ts">FineTuneDownloadResponse</a></code>

Methods:

- <code title="post /fine-tunes">client.fineTune.<a href="./src/resources/fine-tune.ts">create</a>({ ...params }) -> FineTune</code>
- <code title="get /fine-tunes/{id}">client.fineTune.<a href="./src/resources/fine-tune.ts">retrieve</a>(id) -> FineTune</code>
- <code title="get /fine-tunes">client.fineTune.<a href="./src/resources/fine-tune.ts">list</a>() -> FineTuneListResponse</code>
- <code title="post /fine-tunes/{id}/cancel">client.fineTune.<a href="./src/resources/fine-tune.ts">cancel</a>(id) -> FineTune</code>
- <code title="get /finetune/download">client.fineTune.<a href="./src/resources/fine-tune.ts">download</a>({ ...params }) -> FineTuneDownloadResponse</code>
- <code title="get /fine-tunes/{id}/events">client.fineTune.<a href="./src/resources/fine-tune.ts">listEvents</a>(id) -> FineTuneEvent</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageFile</a></code>

Methods:

- <code title="post /images/generations">client.images.<a href="./src/resources/images.ts">create</a>({ ...params }) -> ImageFile</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>