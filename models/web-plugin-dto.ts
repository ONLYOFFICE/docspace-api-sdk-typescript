/* tslint:disable */
/* eslint-disable */
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
 */
export interface WebPluginDto {
    /**
     * The web plugin name.
     */
    'name': string;
    /**
     * The web plugin version.
     */
    'version': string;
    /**
     * The minimum version of DocSpace with which the plugin is guaranteed to work.
     */
    'minDocSpaceVersion'?: string;
    /**
     * The web plugin description.
     */
    'description': string;
    /**
     * The web plugin license.
     */
    'license': string;
    /**
     * The web plugin author.
     */
    'author': string;
    /**
     * The web plugin home page URL.
     */
    'homePage': string;
    /**
     * The name by which the web plugin is registered in the window object.
     */
    'pluginName': string;
    /**
     * The web plugin scopes.
     */
    'scopes': string;
    /**
     * The web plugin image.
     */
    'image': string;
    'createBy': EmployeeDto;
    /**
     * The date and time when the web plugin was created.
     */
    'createOn': string;
    /**
     * Specifies if the web plugin is enabled or not.
     */
    'enabled': boolean;
    /**
     * Specifies if the web plugin is system or not.
     */
    'system': boolean;
    /**
     * The web plugin URL.
     */
    'url': string;
    /**
     * The web plugin css URL.
     */
    'cssUrl': string;
    /**
     * The web plugin settings.
     */
    'settings': string;
    /**
     * The web plugin localized name.
     */
    'nameLocale'?: { [key: string]: string; };
    /**
     * The web plugin localized description.
     */
    'descriptionLocale'?: { [key: string]: string; };
}

