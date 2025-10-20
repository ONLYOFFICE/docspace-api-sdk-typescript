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
// May contain unused imports in some cases
// @ts-ignore
import type { LinkType } from './link-type';

/**
 * The room link parameters.
 * @export
 * @interface RoomLinkRequest
 */
export interface RoomLinkRequest {
    /**
     * The room link ID.
     * @type {string}
     * @memberof RoomLinkRequest
     */
    'linkId'?: string;
    /**
     * 
     * @type {FileShare}
     * @memberof RoomLinkRequest
     */
    'access'?: FileShare;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof RoomLinkRequest
     */
    'expirationDate'?: ApiDateTime;
    /**
     * The link scope, whether it is internal or not.
     * @type {boolean}
     * @memberof RoomLinkRequest
     */
    'internal'?: boolean;
    /**
     * The link name.
     * @type {string}
     * @memberof RoomLinkRequest
     */
    'title'?: string | null;
    /**
     * 
     * @type {LinkType}
     * @memberof RoomLinkRequest
     */
    'linkType'?: LinkType;
    /**
     * The link password.
     * @type {string}
     * @memberof RoomLinkRequest
     */
    'password'?: string | null;
    /**
     * Specifies if downloading the file from the link is disabled or not.
     * @type {boolean}
     * @memberof RoomLinkRequest
     */
    'denyDownload'?: boolean;
}



