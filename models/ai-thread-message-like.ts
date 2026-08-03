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
import type { AiThreadMessageLikeContent } from './ai-thread-message-like-content';
// May contain unused imports in some cases
// @ts-ignore
import type { AiThreadMessageLikeStatus } from './ai-thread-message-like-status';

export interface AiThreadMessageLike {
    /**
     * Storage-assigned message id (absent on inbound drafts).
     */
    'id'?: string;
    /**
     * Message author role.
     */
    'role': AiThreadMessageLikeRoleEnum;
    'content': AiThreadMessageLikeContent;
    /**
     * Creation timestamp, ISO-8601 on the wire.
     */
    'createdAt'?: string;
    'status'?: AiThreadMessageLikeStatus;
    /**
     * Arbitrary per-message metadata.
     */
    'metadata'?: object;
    /**
     * Attachments linked to the message.
     */
    'attachments'?: Array<object>;
}

export const AiThreadMessageLikeRoleEnum = {
    User: 'user',
    Assistant: 'assistant',
    System: 'system',
} as const;

export type AiThreadMessageLikeRoleEnum = typeof AiThreadMessageLikeRoleEnum[keyof typeof AiThreadMessageLikeRoleEnum];


