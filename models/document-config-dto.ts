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
import type { FileReferenceData } from './file-reference-data';
// May contain unused imports in some cases
// @ts-ignore
import type { InfoConfigDto } from './info-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { Options } from './options';
// May contain unused imports in some cases
// @ts-ignore
import type { PermissionsConfig } from './permissions-config';

/**
 * The document config parameters.
 */
export interface DocumentConfigDto {
    /**
     * The file type of the document.
     */
    'fileType'?: string | null;
    'info'?: InfoConfigDto;
    /**
     * Specifies if the documnet is linked for current user.
     */
    'isLinkedForMe'?: boolean;
    /**
     * The document key.
     */
    'key'?: string | null;
    'permissions'?: PermissionsConfig;
    /**
     * The shared link parameter of the document.
     */
    'sharedLinkParam'?: string | null;
    /**
     * The shared link key of the document.
     */
    'sharedLinkKey'?: string | null;
    'referenceData'?: FileReferenceData;
    /**
     * The document title.
     */
    'title'?: string | null;
    /**
     * The document url.
     */
    'url'?: string | null;
    /**
     * Indicates whether this is a form.
     */
    'isForm'?: boolean;
    'options'?: Options;
}

