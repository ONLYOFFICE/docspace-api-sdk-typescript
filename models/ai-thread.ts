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
import type { AiModel } from './ai-model';
// May contain unused imports in some cases
// @ts-ignore
import type { AiTProvider } from './ai-tprovider';

/**
 * Chat conversation metadata. Represents a single chat session (thread).
 */
export interface AiThread {
    /**
     * Unique thread identifier (UUID).
     */
    'threadId': string;
    /**
     * Optional thread title. Auto-generated from the first message if not set.
     */
    'title'?: string;
    /**
     * Timestamp (ms since epoch) of the last message in this thread. Used for sorting.
     */
    'lastEditDate'?: number;
    /**
     * Provider configuration at the time of last message. Used for thread-level provider display.
     */
    'provider'?: AiTProvider;
    /**
     * Model info at the time of last message.
     */
    'model'?: AiModel;
    /**
     * ID of the profile used for this thread. Links to `Profile.id`.
     */
    'profileId'?: string;
}

