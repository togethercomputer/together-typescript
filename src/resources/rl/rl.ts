// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TrainingSessionsAPI from './training-sessions/training-sessions';
import {
  TrainingSessionCreateParams,
  TrainingSessionForwardBackwardParams,
  TrainingSessionListParams,
  TrainingSessionOptimStepParams,
  TrainingSessions,
} from './training-sessions/training-sessions';

export class Rl extends APIResource {
  trainingSessions: TrainingSessionsAPI.TrainingSessions = new TrainingSessionsAPI.TrainingSessions(
    this._client,
  );
}

Rl.TrainingSessions = TrainingSessions;

export declare namespace Rl {
  export {
    TrainingSessions as TrainingSessions,
    type TrainingSessionCreateParams as TrainingSessionCreateParams,
    type TrainingSessionListParams as TrainingSessionListParams,
    type TrainingSessionForwardBackwardParams as TrainingSessionForwardBackwardParams,
    type TrainingSessionOptimStepParams as TrainingSessionOptimStepParams,
  };
}
