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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';

/**
 * The folder link parameters.
 * @export
 * @interface FolderLinkRequest
 */
export interface FolderLinkRequest {
    /**
     * The folder link ID.
     * @type {string}
     * @memberof FolderLinkRequest
     */
    'linkId'?: string;
    /**
     * 
     * @type {FileShare}
     * @memberof FolderLinkRequest
     */
    'access'?: FileShare;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FolderLinkRequest
     */
    'expirationDate'?: ApiDateTime;
    /**
     * The link name.
     * @type {string}
     * @memberof FolderLinkRequest
     */
    'title'?: string | null;
    /**
     * The link password.
     * @type {string}
     * @memberof FolderLinkRequest
     */
    'password'?: string | null;
    /**
     * Specifies if downloading the file from the link is disabled or not.
     * @type {boolean}
     * @memberof FolderLinkRequest
     */
    'denyDownload'?: boolean;
    /**
     * The link scope, whether it is internal or not.
     * @type {boolean}
     * @memberof FolderLinkRequest
     */
    'internal'?: boolean;
    /**
     * Specifies whether the folder link is primary or not.
     * @type {boolean}
     * @memberof FolderLinkRequest
     */
    'primary'?: boolean;
}



