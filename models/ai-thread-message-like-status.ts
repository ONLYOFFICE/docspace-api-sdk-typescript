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
import type { AiChatErrorPayload } from './ai-chat-error-payload';

/**
 * Delivery/generation status of the message.
 */
export interface AiThreadMessageLikeStatus {
    /**
     * `running`, `requires-action`, `complete` or `incomplete`.
     */
    'type': string;
    /**
     * Why the message is in that state: `tool-calls` or `interrupt` for `requires-action`; `stop` or `unknown` for `complete`; `cancelled`, `tool-calls`, `length`, `content-filter`, `other` or `error` for `incomplete`. An `incomplete` message the chat stored carries `cancelled` (the round was stopped) or `error`.
     */
    'reason'?: string;
    /**
     * What failed, on an `incomplete` message whose `reason` is `error`.
     */
    'error'?: AiChatErrorPayload;
}

