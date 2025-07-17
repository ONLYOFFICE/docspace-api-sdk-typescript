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
 * The external link request parameters.
 * @export
 * @interface FileLinkRequest
 */
export interface FileLinkRequest {
    /**
     * The external link ID.
     * @type {string}
     * @memberof FileLinkRequest
     */
    'linkId'?: string;
    /**
     * 
     * @type {FileShare}
     * @memberof FileLinkRequest
     */
    'access'?: FileShare;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileLinkRequest
     */
    'expirationDate'?: ApiDateTime;
    /**
     * The link scope, whether it is internal or not.
     * @type {boolean}
     * @memberof FileLinkRequest
     */
    'internal'?: boolean;
    /**
     * Specifies whether the file link is primary or not.
     * @type {boolean}
     * @memberof FileLinkRequest
     */
    'primary'?: boolean;
}



