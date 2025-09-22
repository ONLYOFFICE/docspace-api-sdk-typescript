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
 * The presence or absence of the templates in the Create New... menu option.
 * @export
 * @interface TemplatesConfig
 */
export interface TemplatesConfig {
    /**
     * The absolute URL to the image for template.
     * @type {string}
     * @memberof TemplatesConfig
     */
    'image'?: string | null;
    /**
     * The template title that will be displayed in the Create New... menu option.
     * @type {string}
     * @memberof TemplatesConfig
     */
    'title'?: string | null;
    /**
     * The absolute URL to the document where it will be created and available after creation.
     * @type {string}
     * @memberof TemplatesConfig
     */
    'url'?: string | null;
}

