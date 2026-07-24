// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CheckpointsAPI from './checkpoints';
import {
  CheckpointDownloadParams,
  CheckpointDownloadResponse,
  CheckpointFile,
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
  AdamwOptimizerParams,
  CispoLossInputs,
  CispoLossParams,
  CrossEntropyLossParams,
  CustomForwardBackwardOperation,
  CustomForwardBackwardResult,
  DType,
  DroLossInputs,
  DroLossParams,
  ForwardBackwardOperation,
  ForwardBackwardResult,
  ForwardOperation,
  ForwardResult,
  GrpoLossAggregationType,
  GrpoLossInputs,
  GrpoLossParams,
  GrpoLossRatioType,
  ImportanceSamplingLossInputs,
  InferenceCheckpointOperation,
  InferenceCheckpointResult,
  LossAdvantages,
  LossConfig,
  LossInputs,
  LossLogprobs,
  LossMask,
  LossTargetTokens,
  LossType,
  MuonOptimizerParams,
  OperationCustomForwardBackwardParams,
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
  OperationSampleParams,
  Operations,
  OptimStepOperation,
  OptimStepResult,
  PolicyVersionSegment,
  PpoLossInputs,
  PpoLossParams,
  SampleOperation,
  SampleResult,
  TrainingCheckpointOperation,
  TrainingCheckpointResult,
  TrainingOperationError,
  TrainingOperationErrorCode,
  TrainingOperationStatus,
  WeightSyncType,
} from './operations';
import * as SessionsAPI from './sessions';
import {
  InferenceCheckpoint,
  LoraConfig,
  SessionCreateParams,
  SessionListParams,
  Sessions,
  TrainingCheckpoint,
  TrainingSession,
  TrainingSessionError,
  TrainingSessionErrorCode,
  TrainingSessionStatus,
  TrainingSessionsListResponse,
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
    type TrainingCheckpoint as TrainingCheckpoint,
    type TrainingSession as TrainingSession,
    type TrainingSessionError as TrainingSessionError,
    type TrainingSessionErrorCode as TrainingSessionErrorCode,
    type TrainingSessionStatus as TrainingSessionStatus,
    type TrainingSessionsListResponse as TrainingSessionsListResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
  };

  export {
    Operations as Operations,
    type AdamwOptimizerParams as AdamwOptimizerParams,
    type CispoLossInputs as CispoLossInputs,
    type CispoLossParams as CispoLossParams,
    type CrossEntropyLossParams as CrossEntropyLossParams,
    type CustomForwardBackwardOperation as CustomForwardBackwardOperation,
    type CustomForwardBackwardResult as CustomForwardBackwardResult,
    type DType as DType,
    type DroLossInputs as DroLossInputs,
    type DroLossParams as DroLossParams,
    type ForwardBackwardOperation as ForwardBackwardOperation,
    type ForwardBackwardResult as ForwardBackwardResult,
    type ForwardOperation as ForwardOperation,
    type ForwardResult as ForwardResult,
    type GrpoLossAggregationType as GrpoLossAggregationType,
    type GrpoLossInputs as GrpoLossInputs,
    type GrpoLossParams as GrpoLossParams,
    type GrpoLossRatioType as GrpoLossRatioType,
    type ImportanceSamplingLossInputs as ImportanceSamplingLossInputs,
    type InferenceCheckpointOperation as InferenceCheckpointOperation,
    type InferenceCheckpointResult as InferenceCheckpointResult,
    type LossAdvantages as LossAdvantages,
    type LossConfig as LossConfig,
    type LossInputs as LossInputs,
    type LossLogprobs as LossLogprobs,
    type LossMask as LossMask,
    type LossTargetTokens as LossTargetTokens,
    type LossType as LossType,
    type MuonOptimizerParams as MuonOptimizerParams,
    type OptimStepOperation as OptimStepOperation,
    type OptimStepResult as OptimStepResult,
    type PolicyVersionSegment as PolicyVersionSegment,
    type PpoLossInputs as PpoLossInputs,
    type PpoLossParams as PpoLossParams,
    type SampleOperation as SampleOperation,
    type SampleResult as SampleResult,
    type TrainingCheckpointOperation as TrainingCheckpointOperation,
    type TrainingCheckpointResult as TrainingCheckpointResult,
    type TrainingOperationError as TrainingOperationError,
    type TrainingOperationErrorCode as TrainingOperationErrorCode,
    type TrainingOperationStatus as TrainingOperationStatus,
    type WeightSyncType as WeightSyncType,
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
    type OperationSampleParams as OperationSampleParams,
  };

  export {
    Checkpoints as Checkpoints,
    type CheckpointDownloadResponse as CheckpointDownloadResponse,
    type CheckpointFile as CheckpointFile,
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
