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

// May contain unused imports in some cases
// @ts-ignore
import type { CopyAsJsonElementDestFolderId } from './copy-as-json-element-dest-folder-id';

/**
 * The parameters of a file copy that may change the format on the way.
 */
export interface CopyAsJsonElement {
    /**
     * The title of the copy, extension included. That extension decides the format: the same one as the source  copies the content as it is, a different one has it converted first.
     */
    'destTitle': string | null;
    'destFolderId': CopyAsJsonElementDestFolderId;
    /**
     * Whether the extension of the new title may be one the portal does not edit itself.
     */
    'enableExternalExt'?: boolean;
    /**
     * The password that opens the source document, for a file that is protected by one.
     */
    'password'?: string | null;
    /**
     * Whether the copy is to become a PDF form rather than a plain document, which the conversion supports for the  text formats it can read.
     */
    'toForm'?: boolean;
}

