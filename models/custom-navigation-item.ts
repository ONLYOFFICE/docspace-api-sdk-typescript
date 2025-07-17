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
 * The custom navigation item parameters.
 * @export
 * @interface CustomNavigationItem
 */
export interface CustomNavigationItem {
    /**
     * The ID of the custom navigation item.
     * @type {string}
     * @memberof CustomNavigationItem
     */
    'id'?: string;
    /**
     * The label of the custom navigation item.
     * @type {string}
     * @memberof CustomNavigationItem
     */
    'label'?: string | null;
    /**
     * The URL of the custom navigation item.
     * @type {string}
     * @memberof CustomNavigationItem
     */
    'url'?: string | null;
    /**
     * The big image of the custom navigation item.
     * @type {string}
     * @memberof CustomNavigationItem
     */
    'bigImg'?: string | null;
    /**
     * The small image of the custom navigation item.
     * @type {string}
     * @memberof CustomNavigationItem
     */
    'smallImg'?: string | null;
    /**
     * Specifies whether to show the custom navigation item in menu or not.
     * @type {boolean}
     * @memberof CustomNavigationItem
     */
    'showInMenu'?: boolean;
    /**
     * Specifies whether to show the custom navigation item on home page or not.
     * @type {boolean}
     * @memberof CustomNavigationItem
     */
    'showOnHomePage'?: boolean;
}

