/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AiActionArgs } from './ai-action-args';
// May contain unused imports in some cases
// @ts-ignore
import type { AiThreadMessageLike } from './ai-thread-message-like';

/**
 * Identifies a pending tool call to resume — mirrors the library `ToolCallData` (its serializable fields).
 */
export interface AiToolCallData {
    /**
     * Thread the assistant message belongs to.
     */
    'threadId': string;
    /**
     * Storage id of the assistant message holding the tool call.
     */
    'messageId': string;
    /**
     * Index of the tool-call content part inside `message.content`.
     */
    'idx': number;
    /**
     * A copy of the assistant message as it was when the tool call surfaced. Optional and ignored: the round resumes from the stored message. Leave it out - a long conversation\'s copy can push the body past the size limit.
     */
    'message'?: AiThreadMessageLike;
    /**
     * Per-request options of the round: extra tools, reasoning, a prompt override and the connected context.
     */
    'actionArgs'?: AiActionArgs;
    /**
     * Optional entity (room) scope for profile resolution.
     */
    'entityId'?: string;
    /**
     * The folder or room the user is in. Tools run against it and the model is told it is the user\'s location; falls back to `entityId` when omitted.
     */
    'contextEntityId'?: string;
    /**
     * Session-level profile override for this request only.
     */
    'profileId'?: string;
}

