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

export interface AiRegenerateStreamRequest {
    /**
     * Target thread (must already exist).
     */
    'threadId': string;
    /**
     * The user message to re-roll from: everything stored after it is deleted. When omitted, or no longer in the thread, the last user message is used.
     */
    'messageId'?: string;
    /**
     * How many messages from the start of the thread to keep, used when `messageId` does not resolve. The message at `keepCount - 1` has to be a user message; otherwise the value is ignored.
     */
    'keepCount'?: number;
    /**
     * The thread length the caller saw when it computed `keepCount`. When it differs from the stored length, `keepCount` is discarded and the last user message is used instead.
     */
    'expectedLength'?: number;
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

