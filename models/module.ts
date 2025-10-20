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
 * The module information.
 * @export
 * @interface Module
 */
export interface Module {
    /**
     * The module ID.
     * @type {string}
     * @memberof Module
     */
    'id'?: string;
    /**
     * The module product class name.
     * @type {string}
     * @memberof Module
     */
    'appName'?: string | null;
    /**
     * The module product class name.
     * @type {string}
     * @memberof Module
     */
    'title'?: string | null;
    /**
     * The URL to the module start page.
     * @type {string}
     * @memberof Module
     */
    'link'?: string | null;
    /**
     * The module icon URL.
     * @type {string}
     * @memberof Module
     */
    'iconUrl'?: string | null;
    /**
     * The module large image URL.
     * @type {string}
     * @memberof Module
     */
    'imageUrl'?: string | null;
    /**
     * The module help URL.
     * @type {string}
     * @memberof Module
     */
    'helpUrl'?: string | null;
    /**
     * The module description.
     * @type {string}
     * @memberof Module
     */
    'description'?: string | null;
    /**
     * Specifies if the module is primary or not.
     * @type {boolean}
     * @memberof Module
     */
    'isPrimary'?: boolean;
}

