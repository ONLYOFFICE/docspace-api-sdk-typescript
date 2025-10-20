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


/**
 * The response containing the scope information.
 * @export
 * @interface ScopeResponse
 */
export interface ScopeResponse {
    /**
     * The scope name.
     * @type {string}
     * @memberof ScopeResponse
     */
    'name'?: string;
    /**
     * The group the scope belongs to.
     * @type {string}
     * @memberof ScopeResponse
     */
    'group'?: string;
    /**
     * The scope type.
     * @type {string}
     * @memberof ScopeResponse
     */
    'type'?: string;
}

