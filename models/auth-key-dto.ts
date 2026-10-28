/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
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
 * One key of an authorization provider or a storage, with how the settings form shows it.
 */
export interface AuthKeyDto {
    /**
     * The authorization key name.
     */
    'name': string | null;
    /**
     * The authorization key value.
     */
    'value': string | null;
    /**
     * The authorization key title.
     */
    'title'?: string | null;
    /**
     * The field type: text, password, select, toggle.
     */
    'type'?: string | null;
    /**
     * The list of options for select type fields.
     */
    'options'?: Array<string> | null;
    /**
     * The name of another key this field depends on for visibility.
     */
    'dependsOn'?: string | null;
    /**
     * The value of the `dependsOn` key that makes this field visible.
     */
    'dependsOnValue'?: string | null;
}

