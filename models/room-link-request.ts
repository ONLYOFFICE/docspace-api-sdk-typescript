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
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { LinkType } from './link-type';

/**
 * The room link parameters.
 */
export interface RoomLinkRequest {
    /**
     * The room link ID.
     */
    'linkId'?: string;
    /**
     * The link sharing rights.
     */
    'access'?: FileShare;
    /**
     * The link expiration date.
     */
    'expirationDate'?: string | null;
    /**
     * The link scope, whether it is internal or not.
     */
    'internal'?: boolean;
    /**
     * The link name.
     */
    'title'?: string | null;
    /**
     * The link type.
     */
    'linkType'?: LinkType;
    /**
     * The link password.
     */
    'password'?: string | null;
    /**
     * Specifies if downloading the file from the link is disabled or not.
     */
    'denyDownload'?: boolean;
    /**
     * The maximum number of times the invitation link can be used.
     */
    'maxUseCount'?: number | null;
    /**
     * The current number of times the invitation link has been used.
     */
    'currentUseCount'?: number;
}



