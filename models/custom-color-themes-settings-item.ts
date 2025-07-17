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
import type { CustomColorThemesSettingsColorItem } from './custom-color-themes-settings-color-item';

/**
 * The custom color theme settings.
 * @export
 * @interface CustomColorThemesSettingsItem
 */
export interface CustomColorThemesSettingsItem {
    /**
     * The custom color theme ID.
     * @type {number}
     * @memberof CustomColorThemesSettingsItem
     */
    'id'?: number;
    /**
     * The custom color theme name.
     * @type {string}
     * @memberof CustomColorThemesSettingsItem
     */
    'name'?: string | null;
    /**
     * 
     * @type {CustomColorThemesSettingsColorItem}
     * @memberof CustomColorThemesSettingsItem
     */
    'main'?: CustomColorThemesSettingsColorItem;
    /**
     * 
     * @type {CustomColorThemesSettingsColorItem}
     * @memberof CustomColorThemesSettingsItem
     */
    'text'?: CustomColorThemesSettingsColorItem;
}

