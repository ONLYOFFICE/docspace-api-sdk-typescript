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
import type { BatchRequestDtoAllOfFileIds } from './batch-request-dto-all-of-file-ids';

/**
 * The request parameters for changing the file owner.
 * @export
 * @interface ChangeOwnerRequestDto
 */
export interface ChangeOwnerRequestDto {
    /**
     * The list of folder IDs to change the owner.
     * @type {Array<BatchRequestDtoAllOfFileIds>}
     * @memberof ChangeOwnerRequestDto
     */
    'folderIds'?: Array<BatchRequestDtoAllOfFileIds> | null;
    /**
     * The list of file IDs to change the owner.
     * @type {Array<BatchRequestDtoAllOfFileIds>}
     * @memberof ChangeOwnerRequestDto
     */
    'fileIds'?: Array<BatchRequestDtoAllOfFileIds> | null;
    /**
     * The new file owner ID.
     * @type {string}
     * @memberof ChangeOwnerRequestDto
     */
    'userId': string;
}

