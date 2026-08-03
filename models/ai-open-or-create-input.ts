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
import type { AiProfile } from './ai-profile';
// May contain unused imports in some cases
// @ts-ignore
import type { AiThreadMessageLike } from './ai-thread-message-like';

/**
 * Input for  {@link  ThreadsEngine.openOrCreate } : open an existing thread if `threadId` is given, otherwise create a new one with an auto-generated title derived from `firstMessage`.
 */
export interface AiOpenOrCreateInput {
    'threadId'?: string;
    'profile': AiProfile;
    'profileId': string;
    'firstMessage': AiThreadMessageLike;
    /**
     * Opaque scope token persisted on a freshly created thread. Ignored when `threadId` is provided (the existing thread keeps its scope).
     */
    'entityId'?: string;
}

