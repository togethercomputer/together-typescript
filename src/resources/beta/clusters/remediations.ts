// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Remediations extends APIResource {
  /**
   * Creates a new remediation for an instance.
   *
   * Remediations created via the API goes directly to PENDING state.
   *
   * Our system may trigger automated remediations that require approval. These
   * remediations are created with PENDING_APPROVAL state. The user must call
   * /approve to start the actual remediation process. These operations can also be
   * rejected by calling /reject.
   */
  create(
    instanceID: string,
    params: RemediationCreateParams,
    options?: RequestOptions,
  ): APIPromise<RemediationCreateResponse> {
    const { cluster_id, remediation_id, ...body } = params;
    return this._client.post(path`/compute/clusters/${cluster_id}/instances/${instanceID}/remediations`, {
      query: { remediation_id },
      body,
      ...options,
    });
  }

  /**
   * Retrieve the status of a specific remdiation on a specific instance in a
   * specific cluster.
   */
  retrieve(
    remediationID: string,
    params: RemediationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RemediationRetrieveResponse> {
    const { cluster_id, instance_id } = params;
    return this._client.get(
      path`/compute/clusters/${cluster_id}/instances/${instance_id}/remediations/${remediationID}`,
      options,
    );
  }

  /**
   * Lists remediations for an instance or cluster.
   */
  list(
    instanceID: string,
    params: RemediationListParams,
    options?: RequestOptions,
  ): APIPromise<RemediationListResponse> {
    const { cluster_id, ...query } = params;
    return this._client.get(path`/compute/clusters/${cluster_id}/instances/${instanceID}/remediations`, {
      query,
      ...options,
    });
  }

  /**
   * Approves a pending remediation.
   *
   * Only remediations with state PENDING_APPROVAL can be approved.
   *
   * On APPROVE: state changes to PENDING and the remediation process begins. The
   * reviewed_by, review_time, and review_comment fields are populated on the
   * remediation after approval.
   */
  approve(
    remediationID: string,
    params: RemediationApproveParams,
    options?: RequestOptions,
  ): APIPromise<RemediationApproveResponse> {
    const { cluster_id, instance_id, ...body } = params;
    return this._client.post(
      path`/compute/clusters/${cluster_id}/instances/${instance_id}/remediations/${remediationID}/approve`,
      { body, ...options },
    );
  }

  /**
   * Cancels a pending remediation.
   *
   * Only remediations in PENDING_APPROVAL or PENDING state can be cancelled.
   */
  cancel(
    remediationID: string,
    params: RemediationCancelParams,
    options?: RequestOptions,
  ): APIPromise<RemediationCancelResponse> {
    const { cluster_id, instance_id } = params;
    return this._client.post(
      path`/compute/clusters/${cluster_id}/instances/${instance_id}/remediations/${remediationID}/cancel`,
      options,
    );
  }

  /**
   * Rejects a pending remediation.
   *
   * Only remediations with state PENDING_APPROVAL can be rejected.
   *
   * On REJECT: state changes to CANCELLED. The reviewed_by, review_time, and
   * review_comment fields are populated on the remediation after rejection.
   */
  reject(
    remediationID: string,
    params: RemediationRejectParams,
    options?: RequestOptions,
  ): APIPromise<RemediationRejectResponse> {
    const { cluster_id, instance_id, ...body } = params;
    return this._client.post(
      path`/compute/clusters/${cluster_id}/instances/${instance_id}/remediations/${remediationID}/reject`,
      { body, ...options },
    );
  }
}

/**
 * Remediation represents a node remediation request for an instance. An instance
 * can have multiple remediations over time (e.g., failed attempts followed by
 * retries).
 */
export interface RemediationCreateResponse {
  id: string;

  cluster_id: string;

  instance_id: string;

  /**
   * Remediation mode specifies how the remediation should be performed.
   *
   * - `REMEDIATION_MODE_VM_ONLY`: Deletes the VM and provisions a new one on any
   *   available host.
   * - `REMEDIATION_MODE_HOST_AWARE`: Cordons the host, deletes the VM, and
   *   provisions a new one on a different host.
   */
  mode:
    | 'REMEDIATION_MODE_VM_ONLY'
    | 'REMEDIATION_MODE_HOST_AWARE'
    | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
    | 'REMEDIATION_MODE_REBOOT_VM';

  /**
   * RemediationState represents the lifecycle state of a remediation.
   *
   * - `PENDING_APPROVAL`: Awaiting approval before processing can begin.
   * - `PENDING`: Approved and queued for processing.
   * - `RUNNING`: Actively being processed.
   * - `SUCCEEDED`: Successfully completed.
   * - `FAILED`: Failed with an error.
   * - `CANCELLED`: Cancelled by user or system.
   * - `AUTO_RESOLVED`: The underlying issue was automatically resolved before
   *   processing.
   */
  state: 'PENDING_APPROVAL' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'AUTO_RESOLVED';

  /**
   * RemediationTrigger specifies how the remediation was triggered.
   *
   * - `REMEDIATION_TRIGGER_MANUAL`: A user-initiated remediation (either via web UI
   *   or API call).
   * - `REMEDIATION_TRIGGER_AUTOMATED`: A system-initiated remediation that requires
   *   approval.
   */
  trigger: 'REMEDIATION_TRIGGER_MANUAL' | 'REMEDIATION_TRIGGER_AUTOMATED';

  /**
   * Active health check run ID (UUID) that triggered this remediation.
   */
  active_health_check_run_id?: string;

  /**
   * When the remediation was created.
   */
  create_time?: string;

  /**
   * When the remediation completed.
   */
  end_time?: string;

  /**
   * Error message if the remediation failed.
   */
  error_message?: string;

  /**
   * Passive health check event ID that triggered this remediation.
   */
  passive_health_check_event_id?: string;

  /**
   * User-provided reason for the remediation.
   */
  reason?: string;

  /**
   * Who requested the remediation.
   */
  requested_by?: string;

  /**
   * Review comment.
   */
  review_comment?: string;

  /**
   * When the remediation was reviewed.
   */
  review_time?: string;

  /**
   * Who reviewed the remediation.
   */
  reviewed_by?: string;

  /**
   * When processing started.
   */
  start_time?: string;

  /**
   * When the remediation was last updated.
   */
  update_time?: string;
}

/**
 * Remediation represents a node remediation request for an instance. An instance
 * can have multiple remediations over time (e.g., failed attempts followed by
 * retries).
 */
export interface RemediationRetrieveResponse {
  id: string;

  cluster_id: string;

  instance_id: string;

  /**
   * Remediation mode specifies how the remediation should be performed.
   *
   * - `REMEDIATION_MODE_VM_ONLY`: Deletes the VM and provisions a new one on any
   *   available host.
   * - `REMEDIATION_MODE_HOST_AWARE`: Cordons the host, deletes the VM, and
   *   provisions a new one on a different host.
   */
  mode:
    | 'REMEDIATION_MODE_VM_ONLY'
    | 'REMEDIATION_MODE_HOST_AWARE'
    | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
    | 'REMEDIATION_MODE_REBOOT_VM';

  /**
   * RemediationState represents the lifecycle state of a remediation.
   *
   * - `PENDING_APPROVAL`: Awaiting approval before processing can begin.
   * - `PENDING`: Approved and queued for processing.
   * - `RUNNING`: Actively being processed.
   * - `SUCCEEDED`: Successfully completed.
   * - `FAILED`: Failed with an error.
   * - `CANCELLED`: Cancelled by user or system.
   * - `AUTO_RESOLVED`: The underlying issue was automatically resolved before
   *   processing.
   */
  state: 'PENDING_APPROVAL' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'AUTO_RESOLVED';

  /**
   * RemediationTrigger specifies how the remediation was triggered.
   *
   * - `REMEDIATION_TRIGGER_MANUAL`: A user-initiated remediation (either via web UI
   *   or API call).
   * - `REMEDIATION_TRIGGER_AUTOMATED`: A system-initiated remediation that requires
   *   approval.
   */
  trigger: 'REMEDIATION_TRIGGER_MANUAL' | 'REMEDIATION_TRIGGER_AUTOMATED';

  /**
   * Active health check run ID (UUID) that triggered this remediation.
   */
  active_health_check_run_id?: string;

  /**
   * When the remediation was created.
   */
  create_time?: string;

  /**
   * When the remediation completed.
   */
  end_time?: string;

  /**
   * Error message if the remediation failed.
   */
  error_message?: string;

  /**
   * Passive health check event ID that triggered this remediation.
   */
  passive_health_check_event_id?: string;

  /**
   * User-provided reason for the remediation.
   */
  reason?: string;

  /**
   * Who requested the remediation.
   */
  requested_by?: string;

  /**
   * Review comment.
   */
  review_comment?: string;

  /**
   * When the remediation was reviewed.
   */
  review_time?: string;

  /**
   * Who reviewed the remediation.
   */
  reviewed_by?: string;

  /**
   * When processing started.
   */
  start_time?: string;

  /**
   * When the remediation was last updated.
   */
  update_time?: string;
}

/**
 * ListRemediationsResponse is the response for ListRemediations.
 */
export interface RemediationListResponse {
  /**
   * Indicates if there are more results available.
   */
  has_next: boolean;

  /**
   * Token for the next page.
   */
  next_page_token: string;

  /**
   * The list of remediations.
   */
  remediations: Array<RemediationListResponse.Remediation>;
}

export namespace RemediationListResponse {
  /**
   * Remediation represents a node remediation request for an instance. An instance
   * can have multiple remediations over time (e.g., failed attempts followed by
   * retries).
   */
  export interface Remediation {
    id: string;

    cluster_id: string;

    instance_id: string;

    /**
     * Remediation mode specifies how the remediation should be performed.
     *
     * - `REMEDIATION_MODE_VM_ONLY`: Deletes the VM and provisions a new one on any
     *   available host.
     * - `REMEDIATION_MODE_HOST_AWARE`: Cordons the host, deletes the VM, and
     *   provisions a new one on a different host.
     */
    mode:
      | 'REMEDIATION_MODE_VM_ONLY'
      | 'REMEDIATION_MODE_HOST_AWARE'
      | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
      | 'REMEDIATION_MODE_REBOOT_VM';

    /**
     * RemediationState represents the lifecycle state of a remediation.
     *
     * - `PENDING_APPROVAL`: Awaiting approval before processing can begin.
     * - `PENDING`: Approved and queued for processing.
     * - `RUNNING`: Actively being processed.
     * - `SUCCEEDED`: Successfully completed.
     * - `FAILED`: Failed with an error.
     * - `CANCELLED`: Cancelled by user or system.
     * - `AUTO_RESOLVED`: The underlying issue was automatically resolved before
     *   processing.
     */
    state:
      | 'PENDING_APPROVAL'
      | 'PENDING'
      | 'RUNNING'
      | 'SUCCEEDED'
      | 'FAILED'
      | 'CANCELLED'
      | 'AUTO_RESOLVED';

    /**
     * RemediationTrigger specifies how the remediation was triggered.
     *
     * - `REMEDIATION_TRIGGER_MANUAL`: A user-initiated remediation (either via web UI
     *   or API call).
     * - `REMEDIATION_TRIGGER_AUTOMATED`: A system-initiated remediation that requires
     *   approval.
     */
    trigger: 'REMEDIATION_TRIGGER_MANUAL' | 'REMEDIATION_TRIGGER_AUTOMATED';

    /**
     * Active health check run ID (UUID) that triggered this remediation.
     */
    active_health_check_run_id?: string;

    /**
     * When the remediation was created.
     */
    create_time?: string;

    /**
     * When the remediation completed.
     */
    end_time?: string;

    /**
     * Error message if the remediation failed.
     */
    error_message?: string;

    /**
     * Passive health check event ID that triggered this remediation.
     */
    passive_health_check_event_id?: string;

    /**
     * User-provided reason for the remediation.
     */
    reason?: string;

    /**
     * Who requested the remediation.
     */
    requested_by?: string;

    /**
     * Review comment.
     */
    review_comment?: string;

    /**
     * When the remediation was reviewed.
     */
    review_time?: string;

    /**
     * Who reviewed the remediation.
     */
    reviewed_by?: string;

    /**
     * When processing started.
     */
    start_time?: string;

    /**
     * When the remediation was last updated.
     */
    update_time?: string;
  }
}

/**
 * Remediation represents a node remediation request for an instance. An instance
 * can have multiple remediations over time (e.g., failed attempts followed by
 * retries).
 */
export interface RemediationApproveResponse {
  id: string;

  cluster_id: string;

  instance_id: string;

  /**
   * Remediation mode specifies how the remediation should be performed.
   *
   * - `REMEDIATION_MODE_VM_ONLY`: Deletes the VM and provisions a new one on any
   *   available host.
   * - `REMEDIATION_MODE_HOST_AWARE`: Cordons the host, deletes the VM, and
   *   provisions a new one on a different host.
   */
  mode:
    | 'REMEDIATION_MODE_VM_ONLY'
    | 'REMEDIATION_MODE_HOST_AWARE'
    | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
    | 'REMEDIATION_MODE_REBOOT_VM';

  /**
   * RemediationState represents the lifecycle state of a remediation.
   *
   * - `PENDING_APPROVAL`: Awaiting approval before processing can begin.
   * - `PENDING`: Approved and queued for processing.
   * - `RUNNING`: Actively being processed.
   * - `SUCCEEDED`: Successfully completed.
   * - `FAILED`: Failed with an error.
   * - `CANCELLED`: Cancelled by user or system.
   * - `AUTO_RESOLVED`: The underlying issue was automatically resolved before
   *   processing.
   */
  state: 'PENDING_APPROVAL' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'AUTO_RESOLVED';

  /**
   * RemediationTrigger specifies how the remediation was triggered.
   *
   * - `REMEDIATION_TRIGGER_MANUAL`: A user-initiated remediation (either via web UI
   *   or API call).
   * - `REMEDIATION_TRIGGER_AUTOMATED`: A system-initiated remediation that requires
   *   approval.
   */
  trigger: 'REMEDIATION_TRIGGER_MANUAL' | 'REMEDIATION_TRIGGER_AUTOMATED';

  /**
   * Active health check run ID (UUID) that triggered this remediation.
   */
  active_health_check_run_id?: string;

  /**
   * When the remediation was created.
   */
  create_time?: string;

  /**
   * When the remediation completed.
   */
  end_time?: string;

  /**
   * Error message if the remediation failed.
   */
  error_message?: string;

  /**
   * Passive health check event ID that triggered this remediation.
   */
  passive_health_check_event_id?: string;

  /**
   * User-provided reason for the remediation.
   */
  reason?: string;

  /**
   * Who requested the remediation.
   */
  requested_by?: string;

  /**
   * Review comment.
   */
  review_comment?: string;

  /**
   * When the remediation was reviewed.
   */
  review_time?: string;

  /**
   * Who reviewed the remediation.
   */
  reviewed_by?: string;

  /**
   * When processing started.
   */
  start_time?: string;

  /**
   * When the remediation was last updated.
   */
  update_time?: string;
}

/**
 * Remediation represents a node remediation request for an instance. An instance
 * can have multiple remediations over time (e.g., failed attempts followed by
 * retries).
 */
export interface RemediationCancelResponse {
  id: string;

  cluster_id: string;

  instance_id: string;

  /**
   * Remediation mode specifies how the remediation should be performed.
   *
   * - `REMEDIATION_MODE_VM_ONLY`: Deletes the VM and provisions a new one on any
   *   available host.
   * - `REMEDIATION_MODE_HOST_AWARE`: Cordons the host, deletes the VM, and
   *   provisions a new one on a different host.
   */
  mode:
    | 'REMEDIATION_MODE_VM_ONLY'
    | 'REMEDIATION_MODE_HOST_AWARE'
    | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
    | 'REMEDIATION_MODE_REBOOT_VM';

  /**
   * RemediationState represents the lifecycle state of a remediation.
   *
   * - `PENDING_APPROVAL`: Awaiting approval before processing can begin.
   * - `PENDING`: Approved and queued for processing.
   * - `RUNNING`: Actively being processed.
   * - `SUCCEEDED`: Successfully completed.
   * - `FAILED`: Failed with an error.
   * - `CANCELLED`: Cancelled by user or system.
   * - `AUTO_RESOLVED`: The underlying issue was automatically resolved before
   *   processing.
   */
  state: 'PENDING_APPROVAL' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'AUTO_RESOLVED';

  /**
   * RemediationTrigger specifies how the remediation was triggered.
   *
   * - `REMEDIATION_TRIGGER_MANUAL`: A user-initiated remediation (either via web UI
   *   or API call).
   * - `REMEDIATION_TRIGGER_AUTOMATED`: A system-initiated remediation that requires
   *   approval.
   */
  trigger: 'REMEDIATION_TRIGGER_MANUAL' | 'REMEDIATION_TRIGGER_AUTOMATED';

  /**
   * Active health check run ID (UUID) that triggered this remediation.
   */
  active_health_check_run_id?: string;

  /**
   * When the remediation was created.
   */
  create_time?: string;

  /**
   * When the remediation completed.
   */
  end_time?: string;

  /**
   * Error message if the remediation failed.
   */
  error_message?: string;

  /**
   * Passive health check event ID that triggered this remediation.
   */
  passive_health_check_event_id?: string;

  /**
   * User-provided reason for the remediation.
   */
  reason?: string;

  /**
   * Who requested the remediation.
   */
  requested_by?: string;

  /**
   * Review comment.
   */
  review_comment?: string;

  /**
   * When the remediation was reviewed.
   */
  review_time?: string;

  /**
   * Who reviewed the remediation.
   */
  reviewed_by?: string;

  /**
   * When processing started.
   */
  start_time?: string;

  /**
   * When the remediation was last updated.
   */
  update_time?: string;
}

/**
 * Remediation represents a node remediation request for an instance. An instance
 * can have multiple remediations over time (e.g., failed attempts followed by
 * retries).
 */
export interface RemediationRejectResponse {
  id: string;

  cluster_id: string;

  instance_id: string;

  /**
   * Remediation mode specifies how the remediation should be performed.
   *
   * - `REMEDIATION_MODE_VM_ONLY`: Deletes the VM and provisions a new one on any
   *   available host.
   * - `REMEDIATION_MODE_HOST_AWARE`: Cordons the host, deletes the VM, and
   *   provisions a new one on a different host.
   */
  mode:
    | 'REMEDIATION_MODE_VM_ONLY'
    | 'REMEDIATION_MODE_HOST_AWARE'
    | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
    | 'REMEDIATION_MODE_REBOOT_VM';

  /**
   * RemediationState represents the lifecycle state of a remediation.
   *
   * - `PENDING_APPROVAL`: Awaiting approval before processing can begin.
   * - `PENDING`: Approved and queued for processing.
   * - `RUNNING`: Actively being processed.
   * - `SUCCEEDED`: Successfully completed.
   * - `FAILED`: Failed with an error.
   * - `CANCELLED`: Cancelled by user or system.
   * - `AUTO_RESOLVED`: The underlying issue was automatically resolved before
   *   processing.
   */
  state: 'PENDING_APPROVAL' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'AUTO_RESOLVED';

  /**
   * RemediationTrigger specifies how the remediation was triggered.
   *
   * - `REMEDIATION_TRIGGER_MANUAL`: A user-initiated remediation (either via web UI
   *   or API call).
   * - `REMEDIATION_TRIGGER_AUTOMATED`: A system-initiated remediation that requires
   *   approval.
   */
  trigger: 'REMEDIATION_TRIGGER_MANUAL' | 'REMEDIATION_TRIGGER_AUTOMATED';

  /**
   * Active health check run ID (UUID) that triggered this remediation.
   */
  active_health_check_run_id?: string;

  /**
   * When the remediation was created.
   */
  create_time?: string;

  /**
   * When the remediation completed.
   */
  end_time?: string;

  /**
   * Error message if the remediation failed.
   */
  error_message?: string;

  /**
   * Passive health check event ID that triggered this remediation.
   */
  passive_health_check_event_id?: string;

  /**
   * User-provided reason for the remediation.
   */
  reason?: string;

  /**
   * Who requested the remediation.
   */
  requested_by?: string;

  /**
   * Review comment.
   */
  review_comment?: string;

  /**
   * When the remediation was reviewed.
   */
  review_time?: string;

  /**
   * Who reviewed the remediation.
   */
  reviewed_by?: string;

  /**
   * When processing started.
   */
  start_time?: string;

  /**
   * When the remediation was last updated.
   */
  update_time?: string;
}

export interface RemediationCreateParams {
  /**
   * Path param
   */
  cluster_id: string;

  /**
   * Body param: Remediation mode specifies how the remediation should be performed.
   *
   * - `REMEDIATION_MODE_VM_ONLY`: Deletes the VM and provisions a new one on any
   *   available host.
   * - `REMEDIATION_MODE_HOST_AWARE`: Cordons the host, deletes the VM, and
   *   provisions a new one on a different host.
   */
  mode:
    | 'REMEDIATION_MODE_VM_ONLY'
    | 'REMEDIATION_MODE_HOST_AWARE'
    | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
    | 'REMEDIATION_MODE_REBOOT_VM';

  /**
   * Query param: Client-specified ID for idempotency.
   */
  remediation_id?: string;

  /**
   * Body param: User-provided reason for the remediation.
   */
  reason?: string;
}

export interface RemediationRetrieveParams {
  cluster_id: string;

  instance_id: string;
}

export interface RemediationListParams {
  /**
   * Path param
   */
  cluster_id: string;

  /**
   * Query param: Filter by remediation mode. Returns only remediations matching the
   * specified mode.
   */
  mode?:
    | 'REMEDIATION_MODE_VM_ONLY'
    | 'REMEDIATION_MODE_HOST_AWARE'
    | 'REMEDIATION_MODE_EVICT_WITHOUT_REPLACEMENT'
    | 'REMEDIATION_MODE_REBOOT_VM';

  /**
   * Query param: Order by expression.
   */
  order_by?: string;

  /**
   * Query param: Maximum results to return.
   */
  page_size?: number;

  /**
   * Query param: Pagination token from previous request.
   */
  page_token?: string;

  /**
   * Query param: Filter by state(s). Returns remediations matching any of the
   * specified states.
   *
   * - `PENDING_APPROVAL`: Awaiting approval before processing can begin.
   * - `PENDING`: Approved and queued for processing.
   * - `RUNNING`: Actively being processed.
   * - `SUCCEEDED`: Successfully completed.
   * - `FAILED`: Failed with an error.
   * - `CANCELLED`: Cancelled by user or system.
   * - `AUTO_RESOLVED`: The underlying issue was automatically resolved before
   *   processing.
   */
  state?: Array<
    'PENDING_APPROVAL' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'AUTO_RESOLVED'
  >;
}

export interface RemediationApproveParams {
  /**
   * Path param
   */
  cluster_id: string;

  /**
   * Path param
   */
  instance_id: string;

  /**
   * Body param: Comment explaining the action.
   */
  comment?: string;
}

export interface RemediationCancelParams {
  /**
   * The cluster ID.
   */
  cluster_id: string;

  /**
   * The instance ID.
   */
  instance_id: string;
}

export interface RemediationRejectParams {
  /**
   * Path param
   */
  cluster_id: string;

  /**
   * Path param
   */
  instance_id: string;

  /**
   * Body param: Comment explaining the action.
   */
  comment?: string;
}

export declare namespace Remediations {
  export {
    type RemediationCreateResponse as RemediationCreateResponse,
    type RemediationRetrieveResponse as RemediationRetrieveResponse,
    type RemediationListResponse as RemediationListResponse,
    type RemediationApproveResponse as RemediationApproveResponse,
    type RemediationCancelResponse as RemediationCancelResponse,
    type RemediationRejectResponse as RemediationRejectResponse,
    type RemediationCreateParams as RemediationCreateParams,
    type RemediationRetrieveParams as RemediationRetrieveParams,
    type RemediationListParams as RemediationListParams,
    type RemediationApproveParams as RemediationApproveParams,
    type RemediationCancelParams as RemediationCancelParams,
    type RemediationRejectParams as RemediationRejectParams,
  };
}
