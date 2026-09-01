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
import type { AiAiActionArgs } from './ai-ai-action-args';
// May contain unused imports in some cases
// @ts-ignore
import type { AiThreadMessageLike } from './ai-thread-message-like';

/**
 * Identifies a pending tool call to resume — mirrors the library `ToolCallData` (its serializable fields).
 */
export interface AiAiToolCallData {
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
     * Snapshot of the assistant message at the time the tool call surfaced.
     */
    'message': AiThreadMessageLike;
    /**
     * Per-request engine options: extra tools, reasoning, prompt override.
     */
    'actionArgs'?: AiAiActionArgs;
    /**
     * Optional entity (room) scope for profile resolution.
     */
    'entityId'?: string;
    /**
     * Session-level profile override for this request only.
     */
    'profileId'?: string;
}

