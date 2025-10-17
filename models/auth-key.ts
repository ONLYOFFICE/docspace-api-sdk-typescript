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
 * The authorization key parameters.
 * @export
 * @interface AuthKey
 */
export interface AuthKey {
    /**
     * The authorization key name.
     * @type {string}
     * @memberof AuthKey
     */
    'name': string | null;
    /**
     * The authorization key value.
     * @type {string}
     * @memberof AuthKey
     */
    'value': string | null;
    /**
     * The authorization key title.
     * @type {string}
     * @memberof AuthKey
     */
    'title'?: string | null;
}

