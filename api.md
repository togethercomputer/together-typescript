# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletion</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionChunk</a></code>
- <code><a href="./src/resources/chat/completions.ts">Usage</a></code>

Methods:

- <code title="post /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">CompletionResponse</a></code>

Methods:

- <code title="post /completions">client.completions.<a href="./src/resources/completions.ts">create</a>({ ...params }) -> CompletionResponse</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingsResponse</a></code>

Methods:

- <code title="post /embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> EmbeddingsResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> FileRetrieveResponse</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>() -> FileListResponse</code>
- <code title="delete /files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> FileDeleteResponse</code>
- <code title="get /files/{id}/content">client.files.<a href="./src/resources/files.ts">content</a>(id) -> Response</code>

# FineTunes

Types:

- <code><a href="./src/resources/fine-tunes.ts">FineTunes</a></code>
- <code><a href="./src/resources/fine-tunes.ts">FineTuneListResponse</a></code>
- <code><a href="./src/resources/fine-tunes.ts">FineTuneDownloadResponse</a></code>
- <code><a href="./src/resources/fine-tunes.ts">FineTuneListEventsResponse</a></code>

Methods:

- <code title="post /fine-tunes">client.fineTunes.<a href="./src/resources/fine-tunes.ts">create</a>({ ...params }) -> FineTunes</code>
- <code title="get /fine-tunes/{id}">client.fineTunes.<a href="./src/resources/fine-tunes.ts">retrieve</a>(id) -> FineTunes</code>
- <code title="get /fine-tunes">client.fineTunes.<a href="./src/resources/fine-tunes.ts">list</a>() -> FineTuneListResponse</code>
- <code title="post /fine-tunes/{id}/cancel">client.fineTunes.<a href="./src/resources/fine-tunes.ts">cancel</a>(id) -> FineTunes</code>
- <code title="get /fine-tunes/download">client.fineTunes.<a href="./src/resources/fine-tunes.ts">download</a>({ ...params }) -> FineTuneDownloadResponse</code>
- <code title="get /fine-tunes/{id}/events">client.fineTunes.<a href="./src/resources/fine-tunes.ts">listEvents</a>(id) -> FineTuneListEventsResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImagesResponse</a></code>

Methods:

- <code title="post /images/generations">client.images.<a href="./src/resources/images.ts">create</a>({ ...params }) -> ImagesResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
