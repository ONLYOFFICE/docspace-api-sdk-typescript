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
import type { NewAiModel } from './new-ai-model';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiTProvider } from './new-ai-tprovider';

/**
 * Chat conversation metadata. Represents a single chat session (thread).
 */
export interface NewAiThread {
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
    'provider'?: NewAiTProvider;
    'model'?: NewAiModel;
    /**
     * ID of the profile used for this thread. Links to  {@link  Profile.id } .
     */
    'profileId'?: string;
}

