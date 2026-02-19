// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.beta.jig.retrieve',
    fullyQualifiedName: 'beta.jig.retrieve',
    httpMethod: 'get',
    httpPath: '/deployments/{id}',
  },
  {
    clientCallName: 'client.beta.jig.update',
    fullyQualifiedName: 'beta.jig.update',
    httpMethod: 'patch',
    httpPath: '/deployments/{id}',
  },
  {
    clientCallName: 'client.beta.jig.list',
    fullyQualifiedName: 'beta.jig.list',
    httpMethod: 'get',
    httpPath: '/deployments',
  },
  {
    clientCallName: 'client.beta.jig.deploy',
    fullyQualifiedName: 'beta.jig.deploy',
    httpMethod: 'post',
    httpPath: '/deployments',
  },
  {
    clientCallName: 'client.beta.jig.destroy',
    fullyQualifiedName: 'beta.jig.destroy',
    httpMethod: 'delete',
    httpPath: '/deployments/{id}',
  },
  {
    clientCallName: 'client.beta.jig.retrieveLogs',
    fullyQualifiedName: 'beta.jig.retrieveLogs',
    httpMethod: 'get',
    httpPath: '/deployments/{id}/logs',
  },
  {
    clientCallName: 'client.beta.jig.queue.retrieve',
    fullyQualifiedName: 'beta.jig.queue.retrieve',
    httpMethod: 'get',
    httpPath: '/queue/status',
  },
  {
    clientCallName: 'client.beta.jig.queue.cancel',
    fullyQualifiedName: 'beta.jig.queue.cancel',
    httpMethod: 'post',
    httpPath: '/queue/cancel',
  },
  {
    clientCallName: 'client.beta.jig.queue.metrics',
    fullyQualifiedName: 'beta.jig.queue.metrics',
    httpMethod: 'get',
    httpPath: '/queue/metrics',
  },
  {
    clientCallName: 'client.beta.jig.queue.submit',
    fullyQualifiedName: 'beta.jig.queue.submit',
    httpMethod: 'post',
    httpPath: '/queue/submit',
  },
  {
    clientCallName: 'client.beta.jig.volumes.create',
    fullyQualifiedName: 'beta.jig.volumes.create',
    httpMethod: 'post',
    httpPath: '/deployments/storage/volumes',
  },
  {
    clientCallName: 'client.beta.jig.volumes.retrieve',
    fullyQualifiedName: 'beta.jig.volumes.retrieve',
    httpMethod: 'get',
    httpPath: '/deployments/storage/volumes/{id}',
  },
  {
    clientCallName: 'client.beta.jig.volumes.update',
    fullyQualifiedName: 'beta.jig.volumes.update',
    httpMethod: 'patch',
    httpPath: '/deployments/storage/volumes/{id}',
  },
  {
    clientCallName: 'client.beta.jig.volumes.list',
    fullyQualifiedName: 'beta.jig.volumes.list',
    httpMethod: 'get',
    httpPath: '/deployments/storage/volumes',
  },
  {
    clientCallName: 'client.beta.jig.volumes.delete',
    fullyQualifiedName: 'beta.jig.volumes.delete',
    httpMethod: 'delete',
    httpPath: '/deployments/storage/volumes/{id}',
  },
  {
    clientCallName: 'client.beta.jig.secrets.create',
    fullyQualifiedName: 'beta.jig.secrets.create',
    httpMethod: 'post',
    httpPath: '/deployments/secrets',
  },
  {
    clientCallName: 'client.beta.jig.secrets.retrieve',
    fullyQualifiedName: 'beta.jig.secrets.retrieve',
    httpMethod: 'get',
    httpPath: '/deployments/secrets/{id}',
  },
  {
    clientCallName: 'client.beta.jig.secrets.update',
    fullyQualifiedName: 'beta.jig.secrets.update',
    httpMethod: 'patch',
    httpPath: '/deployments/secrets/{id}',
  },
  {
    clientCallName: 'client.beta.jig.secrets.list',
    fullyQualifiedName: 'beta.jig.secrets.list',
    httpMethod: 'get',
    httpPath: '/deployments/secrets',
  },
  {
    clientCallName: 'client.beta.jig.secrets.delete',
    fullyQualifiedName: 'beta.jig.secrets.delete',
    httpMethod: 'delete',
    httpPath: '/deployments/secrets/{id}',
  },
  {
    clientCallName: 'client.beta.clusters.create',
    fullyQualifiedName: 'beta.clusters.create',
    httpMethod: 'post',
    httpPath: '/compute/clusters',
  },
  {
    clientCallName: 'client.beta.clusters.retrieve',
    fullyQualifiedName: 'beta.clusters.retrieve',
    httpMethod: 'get',
    httpPath: '/compute/clusters/{cluster_id}',
  },
  {
    clientCallName: 'client.beta.clusters.update',
    fullyQualifiedName: 'beta.clusters.update',
    httpMethod: 'put',
    httpPath: '/compute/clusters/{cluster_id}',
  },
  {
    clientCallName: 'client.beta.clusters.list',
    fullyQualifiedName: 'beta.clusters.list',
    httpMethod: 'get',
    httpPath: '/compute/clusters',
  },
  {
    clientCallName: 'client.beta.clusters.delete',
    fullyQualifiedName: 'beta.clusters.delete',
    httpMethod: 'delete',
    httpPath: '/compute/clusters/{cluster_id}',
  },
  {
    clientCallName: 'client.beta.clusters.listRegions',
    fullyQualifiedName: 'beta.clusters.listRegions',
    httpMethod: 'get',
    httpPath: '/compute/regions',
  },
  {
    clientCallName: 'client.beta.clusters.storage.create',
    fullyQualifiedName: 'beta.clusters.storage.create',
    httpMethod: 'post',
    httpPath: '/compute/clusters/storage/volumes',
  },
  {
    clientCallName: 'client.beta.clusters.storage.retrieve',
    fullyQualifiedName: 'beta.clusters.storage.retrieve',
    httpMethod: 'get',
    httpPath: '/compute/clusters/storage/volumes/{volume_id}',
  },
  {
    clientCallName: 'client.beta.clusters.storage.update',
    fullyQualifiedName: 'beta.clusters.storage.update',
    httpMethod: 'put',
    httpPath: '/compute/clusters/storage/volumes',
  },
  {
    clientCallName: 'client.beta.clusters.storage.list',
    fullyQualifiedName: 'beta.clusters.storage.list',
    httpMethod: 'get',
    httpPath: '/compute/clusters/storage/volumes',
  },
  {
    clientCallName: 'client.beta.clusters.storage.delete',
    fullyQualifiedName: 'beta.clusters.storage.delete',
    httpMethod: 'delete',
    httpPath: '/compute/clusters/storage/volumes/{volume_id}',
  },
  {
    clientCallName: 'client.chat.completions.create',
    fullyQualifiedName: 'chat.completions.create',
    httpMethod: 'post',
    httpPath: '/chat/completions',
  },
  {
    clientCallName: 'client.completions.create',
    fullyQualifiedName: 'completions.create',
    httpMethod: 'post',
    httpPath: '/completions',
  },
  {
    clientCallName: 'client.embeddings.create',
    fullyQualifiedName: 'embeddings.create',
    httpMethod: 'post',
    httpPath: '/embeddings',
  },
  {
    clientCallName: 'client.files.retrieve',
    fullyQualifiedName: 'files.retrieve',
    httpMethod: 'get',
    httpPath: '/files/{id}',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/files/{id}',
  },
  {
    clientCallName: 'client.files.content',
    fullyQualifiedName: 'files.content',
    httpMethod: 'get',
    httpPath: '/files/{id}/content',
  },
  {
    clientCallName: 'client.fineTuning.create',
    fullyQualifiedName: 'fineTuning.create',
    httpMethod: 'post',
    httpPath: '/fine-tunes',
  },
  {
    clientCallName: 'client.fineTuning.retrieve',
    fullyQualifiedName: 'fineTuning.retrieve',
    httpMethod: 'get',
    httpPath: '/fine-tunes/{id}',
  },
  {
    clientCallName: 'client.fineTuning.list',
    fullyQualifiedName: 'fineTuning.list',
    httpMethod: 'get',
    httpPath: '/fine-tunes',
  },
  {
    clientCallName: 'client.fineTuning.delete',
    fullyQualifiedName: 'fineTuning.delete',
    httpMethod: 'delete',
    httpPath: '/fine-tunes/{id}',
  },
  {
    clientCallName: 'client.fineTuning.cancel',
    fullyQualifiedName: 'fineTuning.cancel',
    httpMethod: 'post',
    httpPath: '/fine-tunes/{id}/cancel',
  },
  {
    clientCallName: 'client.fineTuning.content',
    fullyQualifiedName: 'fineTuning.content',
    httpMethod: 'get',
    httpPath: '/finetune/download',
  },
  {
    clientCallName: 'client.fineTuning.estimatePrice',
    fullyQualifiedName: 'fineTuning.estimatePrice',
    httpMethod: 'post',
    httpPath: '/fine-tunes/estimate-price',
  },
  {
    clientCallName: 'client.fineTuning.listCheckpoints',
    fullyQualifiedName: 'fineTuning.listCheckpoints',
    httpMethod: 'get',
    httpPath: '/fine-tunes/{id}/checkpoints',
  },
  {
    clientCallName: 'client.fineTuning.listEvents',
    fullyQualifiedName: 'fineTuning.listEvents',
    httpMethod: 'get',
    httpPath: '/fine-tunes/{id}/events',
  },
  {
    clientCallName: 'client.codeInterpreter.execute',
    fullyQualifiedName: 'codeInterpreter.execute',
    httpMethod: 'post',
    httpPath: '/tci/execute',
  },
  {
    clientCallName: 'client.codeInterpreter.sessions.list',
    fullyQualifiedName: 'codeInterpreter.sessions.list',
    httpMethod: 'get',
    httpPath: '/tci/sessions',
  },
  {
    clientCallName: 'client.images.generate',
    fullyQualifiedName: 'images.generate',
    httpMethod: 'post',
    httpPath: '/images/generations',
  },
  {
    clientCallName: 'client.videos.create',
    fullyQualifiedName: 'videos.create',
    httpMethod: 'post',
    httpPath: '/videos',
  },
  {
    clientCallName: 'client.videos.retrieve',
    fullyQualifiedName: 'videos.retrieve',
    httpMethod: 'get',
    httpPath: '/videos/{id}',
  },
  {
    clientCallName: 'client.audio.speech.create',
    fullyQualifiedName: 'audio.speech.create',
    httpMethod: 'post',
    httpPath: '/audio/speech',
  },
  {
    clientCallName: 'client.audio.voices.list',
    fullyQualifiedName: 'audio.voices.list',
    httpMethod: 'get',
    httpPath: '/voices',
  },
  {
    clientCallName: 'client.audio.transcriptions.create',
    fullyQualifiedName: 'audio.transcriptions.create',
    httpMethod: 'post',
    httpPath: '/audio/transcriptions',
  },
  {
    clientCallName: 'client.audio.translations.create',
    fullyQualifiedName: 'audio.translations.create',
    httpMethod: 'post',
    httpPath: '/audio/translations',
  },
  {
    clientCallName: 'client.models.list',
    fullyQualifiedName: 'models.list',
    httpMethod: 'get',
    httpPath: '/models',
  },
  {
    clientCallName: 'client.models.upload',
    fullyQualifiedName: 'models.upload',
    httpMethod: 'post',
    httpPath: '/models',
  },
  {
    clientCallName: 'client.models.uploads.status',
    fullyQualifiedName: 'models.uploads.status',
    httpMethod: 'get',
    httpPath: '/jobs/{jobId}',
  },
  {
    clientCallName: 'client.endpoints.create',
    fullyQualifiedName: 'endpoints.create',
    httpMethod: 'post',
    httpPath: '/endpoints',
  },
  {
    clientCallName: 'client.endpoints.retrieve',
    fullyQualifiedName: 'endpoints.retrieve',
    httpMethod: 'get',
    httpPath: '/endpoints/{endpointId}',
  },
  {
    clientCallName: 'client.endpoints.update',
    fullyQualifiedName: 'endpoints.update',
    httpMethod: 'patch',
    httpPath: '/endpoints/{endpointId}',
  },
  {
    clientCallName: 'client.endpoints.list',
    fullyQualifiedName: 'endpoints.list',
    httpMethod: 'get',
    httpPath: '/endpoints',
  },
  {
    clientCallName: 'client.endpoints.delete',
    fullyQualifiedName: 'endpoints.delete',
    httpMethod: 'delete',
    httpPath: '/endpoints/{endpointId}',
  },
  {
    clientCallName: 'client.endpoints.listAvzones',
    fullyQualifiedName: 'endpoints.listAvzones',
    httpMethod: 'get',
    httpPath: '/clusters/availability-zones',
  },
  {
    clientCallName: 'client.endpoints.listHardware',
    fullyQualifiedName: 'endpoints.listHardware',
    httpMethod: 'get',
    httpPath: '/hardware',
  },
  {
    clientCallName: 'client.rerank.create',
    fullyQualifiedName: 'rerank.create',
    httpMethod: 'post',
    httpPath: '/rerank',
  },
  {
    clientCallName: 'client.batches.create',
    fullyQualifiedName: 'batches.create',
    httpMethod: 'post',
    httpPath: '/batches',
  },
  {
    clientCallName: 'client.batches.retrieve',
    fullyQualifiedName: 'batches.retrieve',
    httpMethod: 'get',
    httpPath: '/batches/{id}',
  },
  {
    clientCallName: 'client.batches.list',
    fullyQualifiedName: 'batches.list',
    httpMethod: 'get',
    httpPath: '/batches',
  },
  {
    clientCallName: 'client.batches.cancel',
    fullyQualifiedName: 'batches.cancel',
    httpMethod: 'post',
    httpPath: '/batches/{id}/cancel',
  },
  {
    clientCallName: 'client.evals.create',
    fullyQualifiedName: 'evals.create',
    httpMethod: 'post',
    httpPath: '/evaluation',
  },
  {
    clientCallName: 'client.evals.retrieve',
    fullyQualifiedName: 'evals.retrieve',
    httpMethod: 'get',
    httpPath: '/evaluation/{id}',
  },
  {
    clientCallName: 'client.evals.list',
    fullyQualifiedName: 'evals.list',
    httpMethod: 'get',
    httpPath: '/evaluation',
  },
  {
    clientCallName: 'client.evals.status',
    fullyQualifiedName: 'evals.status',
    httpMethod: 'get',
    httpPath: '/evaluation/{id}/status',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
