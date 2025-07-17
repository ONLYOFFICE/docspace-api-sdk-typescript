/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { ActionLinkConfig } from './action-link-config';

/**
 * The mention message parameters.
 * @export
 * @interface MentionMessageWrapper
 */
export interface MentionMessageWrapper {
    /**
     * 
     * @type {ActionLinkConfig}
     * @memberof MentionMessageWrapper
     */
    'actionLink'?: ActionLinkConfig;
    /**
     * A list of emails which will receive the mention message.
     * @type {Array<string>}
     * @memberof MentionMessageWrapper
     */
    'emails'?: Array<string> | null;
    /**
     * The comment message.
     * @type {string}
     * @memberof MentionMessageWrapper
     */
    'message'?: string | null;
}

