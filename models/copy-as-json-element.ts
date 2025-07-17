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
import type { CopyAsJsonElementDestFolderId } from './copy-as-json-element-dest-folder-id';

/**
 * The parameters for copying a file.
 * @export
 * @interface CopyAsJsonElement
 */
export interface CopyAsJsonElement {
    /**
     * The copied file name.
     * @type {string}
     * @memberof CopyAsJsonElement
     */
    'destTitle': string | null;
    /**
     * 
     * @type {CopyAsJsonElementDestFolderId}
     * @memberof CopyAsJsonElement
     */
    'destFolderId': CopyAsJsonElementDestFolderId;
    /**
     * Specifies whether to allow creating the copied file of an external extension or not.
     * @type {boolean}
     * @memberof CopyAsJsonElement
     */
    'enableExternalExt'?: boolean;
    /**
     * The copied file password.
     * @type {string}
     * @memberof CopyAsJsonElement
     */
    'password'?: string | null;
    /**
     * Specifies whether to convert the file to form or not.
     * @type {boolean}
     * @memberof CopyAsJsonElement
     */
    'toForm'?: boolean;
}

