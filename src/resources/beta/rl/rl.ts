// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CheckpointsAPI from './checkpoints';
import {
  Checkpoint,
  CheckpointDownloadParams,
  CheckpointDownloadResponse,
  CheckpointFile,
  CheckpointType,
  CheckpointVariant,
  Checkpoints,
} from './checkpoints';
import * as ModelResourcesAPI from './model-resources';
import {
  AdamwOptimizerConfig,
  ModelResourceCreateParams,
  ModelResourceEstimateCostParams,
  ModelResourceListParams,
  ModelResourceStopParams,
  ModelResources,
  ModelResourcesError,
  ModelResourcesErrorCode,
  ModelResourcesEstimateCostResponse,
  ModelResourcesListResponse,
  ModelResourcesStatus,
  MuonOptimizerConfig,
  MuonScalingStrategy,
  OptimizerConfig,
} from './model-resources';
import * as OperationsAPI from './operations';
import {
  AdamParams,
  CispoLossParams,
  CrossEntropyLossParams,
  CustomForwardBackwardOperation,
  CustomForwardBackwardResult,
  DType,
  DroLossParams,
  EncodedTextChunk,
  ForwardBackwardOperation,
  ForwardBackwardResult,
  ForwardOperation,
  ForwardResult,
  GrpoLossAggregationType,
  GrpoLossParams,
  GrpoLossRatioType,
  InferenceCheckpointOperation,
  InferenceCheckpointResult,
  LossConfig,
  LossType,
  ModelInput,
  ModelInputChunk,
  MuonParams,
  OperationCustomForwardBackwardParams,
  OperationError,
  OperationErrorCode,
  OperationForwardBackwardParams,
  OperationForwardParams,
  OperationOptimStepParams,
  OperationRetrieveCustomForwardBackwardParams,
  OperationRetrieveForwardBackwardParams,
  OperationRetrieveForwardParams,
  OperationRetrieveInferenceCheckpointParams,
  OperationRetrieveOptimStepParams,
  OperationRetrieveSampleParams,
  OperationRetrieveTrainingCheckpointParams,
  OperationRetrieveWeightsSyncParams,
  OperationSampleParams,
  OperationStatus,
  OperationWeightsSyncParams,
  Operations,
  OptimStepOperation,
  OptimStepResult,
  PolicyVersionSegment,
  PpoLossParams,
  PromptTopLogprobs,
  RoutedExperts,
  SampleOperation,
  SampleResult,
  SampledSequence,
  SamplingParams,
  StopReason,
  TensorData,
  TrainingCheckpointOperation,
  TrainingCheckpointResult,
  WeightSyncType,
  WeightsSyncOperation,
  WeightsSyncResult,
} from './operations';
import * as SessionsAPI from './sessions';
import {
  InferenceCheckpoint,
  LoraConfig,
  Session,
  SessionCreateParams,
  SessionError,
  SessionErrorCode,
  SessionListParams,
  SessionMetadata,
  SessionStatus,
  Sessions,
  SessionsListResponse,
  TrainingCheckpoint,
  WandbMetadata,
} from './sessions';
import * as SupportedModelsAPI from './supported-models';
import { RlSupportedModel, RlSupportedModels, SupportedModels } from './supported-models';

export class Rl extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  checkpoints: CheckpointsAPI.Checkpoints = new CheckpointsAPI.Checkpoints(this._client);
  modelResources: ModelResourcesAPI.ModelResources = new ModelResourcesAPI.ModelResources(this._client);
  supportedModels: SupportedModelsAPI.SupportedModels = new SupportedModelsAPI.SupportedModels(this._client);
}

Rl.Sessions = Sessions;
Rl.Operations = Operations;
Rl.Checkpoints = Checkpoints;
Rl.SupportedModels = SupportedModels;

export declare namespace Rl {
  export {
    Sessions as Sessions,
    type InferenceCheckpoint as InferenceCheckpoint,
    type LoraConfig as LoraConfig,
    type Session as Session,
    type SessionError as SessionError,
    type SessionErrorCode as SessionErrorCode,
    type SessionMetadata as SessionMetadata,
    type SessionStatus as SessionStatus,
    type SessionsListResponse as SessionsListResponse,
    type TrainingCheckpoint as TrainingCheckpoint,
    type WandbMetadata as WandbMetadata,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
  };

  export {
    Operations as Operations,
    type AdamParams as AdamParams,
    type CispoLossParams as CispoLossParams,
    type CrossEntropyLossParams as CrossEntropyLossParams,
    type CustomForwardBackwardOperation as CustomForwardBackwardOperation,
    type CustomForwardBackwardResult as CustomForwardBackwardResult,
    type DType as DType,
    type DroLossParams as DroLossParams,
    type EncodedTextChunk as EncodedTextChunk,
    type ForwardBackwardOperation as ForwardBackwardOperation,
    type ForwardBackwardResult as ForwardBackwardResult,
    type ForwardOperation as ForwardOperation,
    type ForwardResult as ForwardResult,
    type GrpoLossAggregationType as GrpoLossAggregationType,
    type GrpoLossParams as GrpoLossParams,
    type GrpoLossRatioType as GrpoLossRatioType,
    type InferenceCheckpointOperation as InferenceCheckpointOperation,
    type InferenceCheckpointResult as InferenceCheckpointResult,
    type LossConfig as LossConfig,
    type LossType as LossType,
    type ModelInput as ModelInput,
    type ModelInputChunk as ModelInputChunk,
    type MuonParams as MuonParams,
    type OperationError as OperationError,
    type OperationErrorCode as OperationErrorCode,
    type OperationStatus as OperationStatus,
    type OptimStepOperation as OptimStepOperation,
    type OptimStepResult as OptimStepResult,
    type PolicyVersionSegment as PolicyVersionSegment,
    type PpoLossParams as PpoLossParams,
    type PromptTopLogprobs as PromptTopLogprobs,
    type RoutedExperts as RoutedExperts,
    type SampleOperation as SampleOperation,
    type SampleResult as SampleResult,
    type SampledSequence as SampledSequence,
    type SamplingParams as SamplingParams,
    type StopReason as StopReason,
    type TensorData as TensorData,
    type TrainingCheckpointOperation as TrainingCheckpointOperation,
    type TrainingCheckpointResult as TrainingCheckpointResult,
    type WeightSyncType as WeightSyncType,
    type WeightsSyncOperation as WeightsSyncOperation,
    type WeightsSyncResult as WeightsSyncResult,
    type OperationCustomForwardBackwardParams as OperationCustomForwardBackwardParams,
    type OperationForwardParams as OperationForwardParams,
    type OperationForwardBackwardParams as OperationForwardBackwardParams,
    type OperationOptimStepParams as OperationOptimStepParams,
    type OperationRetrieveCustomForwardBackwardParams as OperationRetrieveCustomForwardBackwardParams,
    type OperationRetrieveForwardParams as OperationRetrieveForwardParams,
    type OperationRetrieveForwardBackwardParams as OperationRetrieveForwardBackwardParams,
    type OperationRetrieveInferenceCheckpointParams as OperationRetrieveInferenceCheckpointParams,
    type OperationRetrieveOptimStepParams as OperationRetrieveOptimStepParams,
    type OperationRetrieveSampleParams as OperationRetrieveSampleParams,
    type OperationRetrieveTrainingCheckpointParams as OperationRetrieveTrainingCheckpointParams,
    type OperationRetrieveWeightsSyncParams as OperationRetrieveWeightsSyncParams,
    type OperationSampleParams as OperationSampleParams,
    type OperationWeightsSyncParams as OperationWeightsSyncParams,
  };

  export {
    Checkpoints as Checkpoints,
    type Checkpoint as Checkpoint,
    type CheckpointDownloadResponse as CheckpointDownloadResponse,
    type CheckpointFile as CheckpointFile,
    type CheckpointType as CheckpointType,
    type CheckpointVariant as CheckpointVariant,
    type CheckpointDownloadParams as CheckpointDownloadParams,
  };

  export {
    type ModelResources as ModelResources,
    type AdamwOptimizerConfig as AdamwOptimizerConfig,
    type ModelResourcesError as ModelResourcesError,
    type ModelResourcesErrorCode as ModelResourcesErrorCode,
    type ModelResourcesEstimateCostResponse as ModelResourcesEstimateCostResponse,
    type ModelResourcesListResponse as ModelResourcesListResponse,
    type ModelResourcesStatus as ModelResourcesStatus,
    type MuonOptimizerConfig as MuonOptimizerConfig,
    type MuonScalingStrategy as MuonScalingStrategy,
    type OptimizerConfig as OptimizerConfig,
    type ModelResourceCreateParams as ModelResourceCreateParams,
    type ModelResourceListParams as ModelResourceListParams,
    type ModelResourceEstimateCostParams as ModelResourceEstimateCostParams,
    type ModelResourceStopParams as ModelResourceStopParams,
  };

  export {
    SupportedModels as SupportedModels,
    type RlSupportedModel as RlSupportedModel,
    type RlSupportedModels as RlSupportedModels,
  };
}
