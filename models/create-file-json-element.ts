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
import type { CreateFileJsonElementTemplateId } from './create-file-json-element-template-id';

/**
 * The parameters for creating a file.
 * @export
 * @interface CreateFileJsonElement
 */
export interface CreateFileJsonElement {
    /**
     * The file title for creation.
     * @type {string}
     * @memberof CreateFileJsonElement
     */
    'title': string | null;
    /**
     * 
     * @type {CreateFileJsonElementTemplateId}
     * @memberof CreateFileJsonElement
     */
    'templateId'?: CreateFileJsonElementTemplateId;
    /**
     * Specifies whether to allow creating a file of an external extension or not.
     * @type {boolean}
     * @memberof CreateFileJsonElement
     */
    'enableExternalExt'?: boolean;
    /**
     * The form ID for creation.
     * @type {number}
     * @memberof CreateFileJsonElement
     */
    'formId'?: number;
}

