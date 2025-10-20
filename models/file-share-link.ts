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
import type { LinkType } from './link-type';

/**
 * A shareable link for a file with its configuration and status.
 * @export
 * @interface FileShareLink
 */
export interface FileShareLink {
    /**
     * The unique identifier of the shared link.
     * @type {string}
     * @memberof FileShareLink
     */
    'id'?: string;
    /**
     * The title of the shared content.
     * @type {string}
     * @memberof FileShareLink
     */
    'title'?: string | null;
    /**
     * The URL for accessing the shared content.
     * @type {string}
     * @memberof FileShareLink
     */
    'shareLink'?: string | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileShareLink
     */
    'expirationDate'?: ApiDateTime;
    /**
     * 
     * @type {LinkType}
     * @memberof FileShareLink
     */
    'linkType'?: LinkType;
    /**
     * The password protection for accessing the shared content.
     * @type {string}
     * @memberof FileShareLink
     */
    'password'?: string | null;
    /**
     * Indicates whether downloading of the shared content is prohibited.
     * @type {boolean}
     * @memberof FileShareLink
     */
    'denyDownload'?: boolean | null;
    /**
     * Indicates whether the shared link has expired.
     * @type {boolean}
     * @memberof FileShareLink
     */
    'isExpired'?: boolean | null;
    /**
     * Indicates whether this is the primary shared link.
     * @type {boolean}
     * @memberof FileShareLink
     */
    'primary'?: boolean;
    /**
     * Indicates whether the link is for the internal sharing only.
     * @type {boolean}
     * @memberof FileShareLink
     */
    'internal'?: boolean | null;
    /**
     * The token for validating access requests.
     * @type {string}
     * @memberof FileShareLink
     */
    'requestToken'?: string | null;
}



