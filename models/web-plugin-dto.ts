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
import type { EmployeeDto } from './employee-dto';

/**
 * The web plugin information.
 * @export
 * @interface WebPluginDto
 */
export interface WebPluginDto {
    /**
     * The web plugin name.
     * @type {string}
     * @memberof WebPluginDto
     */
    'name': string | null;
    /**
     * The web plugin version.
     * @type {string}
     * @memberof WebPluginDto
     */
    'version': string | null;
    /**
     * The minimum version of DocSpace with which the plugin is guaranteed to work.
     * @type {string}
     * @memberof WebPluginDto
     */
    'minDocSpaceVersion'?: string | null;
    /**
     * The web plugin description.
     * @type {string}
     * @memberof WebPluginDto
     */
    'description': string | null;
    /**
     * The web plugin license.
     * @type {string}
     * @memberof WebPluginDto
     */
    'license': string | null;
    /**
     * The web plugin author.
     * @type {string}
     * @memberof WebPluginDto
     */
    'author': string | null;
    /**
     * The web plugin home page URL.
     * @type {string}
     * @memberof WebPluginDto
     */
    'homePage': string | null;
    /**
     * The name by which the web plugin is registered in the window object.
     * @type {string}
     * @memberof WebPluginDto
     */
    'pluginName': string | null;
    /**
     * The web plugin scopes.
     * @type {string}
     * @memberof WebPluginDto
     */
    'scopes': string | null;
    /**
     * The web plugin image.
     * @type {string}
     * @memberof WebPluginDto
     */
    'image': string | null;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof WebPluginDto
     */
    'createBy': EmployeeDto;
    /**
     * The date and time when the web plugin was created.
     * @type {string}
     * @memberof WebPluginDto
     */
    'createOn': string;
    /**
     * Specifies if the web plugin is enabled or not.
     * @type {boolean}
     * @memberof WebPluginDto
     */
    'enabled': boolean;
    /**
     * Specifies if the web plugin is system or not.
     * @type {boolean}
     * @memberof WebPluginDto
     */
    'system': boolean;
    /**
     * The web plugin URL.
     * @type {string}
     * @memberof WebPluginDto
     */
    'url': string | null;
    /**
     * The web plugin settings.
     * @type {string}
     * @memberof WebPluginDto
     */
    'settings': string | null;
}

