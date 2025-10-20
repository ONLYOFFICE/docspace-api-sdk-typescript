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
 * The plugins parameters.
 * @export
 * @interface PluginsDto
 */
export interface PluginsDto {
    /**
     * Specifies if the plugins are enabled or not.
     * @type {boolean}
     * @memberof PluginsDto
     */
    'enabled'?: boolean;
    /**
     * Specifies if the plugins can be uploaded or not.
     * @type {boolean}
     * @memberof PluginsDto
     */
    'upload'?: boolean;
    /**
     * Specifies if the plugins can be deleted or not.
     * @type {boolean}
     * @memberof PluginsDto
     */
    'delete'?: boolean;
}

