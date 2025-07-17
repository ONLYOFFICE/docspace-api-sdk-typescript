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
import type { UserInfo } from './user-info';

/**
 * The mention message parameters.
 * @export
 * @interface MentionWrapper
 */
export interface MentionWrapper {
    /**
     * 
     * @type {UserInfo}
     * @memberof MentionWrapper
     */
    'user'?: UserInfo;
    /**
     * The email address of the user.
     * @type {string}
     * @memberof MentionWrapper
     */
    'email'?: string | null;
    /**
     * The identification of the user.
     * @type {string}
     * @memberof MentionWrapper
     */
    'id'?: string | null;
    /**
     * The path to the user\'s avatar.
     * @type {string}
     * @memberof MentionWrapper
     */
    'image'?: string | null;
    /**
     * Specifies if the user has the access to the file or not.
     * @type {boolean}
     * @memberof MentionWrapper
     */
    'hasAccess'?: boolean;
    /**
     * The full name of the user.
     * @type {string}
     * @memberof MentionWrapper
     */
    'name'?: string | null;
}

