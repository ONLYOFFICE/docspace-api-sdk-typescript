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
import type { DuplicateRequestDtoAllOfFileIds } from './duplicate-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShareParams } from './file-share-params';

/**
 * The security information request parameters.
 */
export interface SecurityInfoRequestDto {
    /**
     * The list of the shared folder IDs.
     */
    'folderIds'?: Array<DuplicateRequestDtoAllOfFileIds>;
    /**
     * The list of the shared file IDs.
     */
    'fileIds'?: Array<DuplicateRequestDtoAllOfFileIds>;
    /**
     * The collection of sharing parameters.
     */
    'share'?: Array<FileShareParams>;
    /**
     * Specifies whether to notify users about the shared file or not.
     */
    'notify'?: boolean;
    /**
     * The message to send when notifying about the shared file.
     */
    'sharingMessage'?: string;
}

