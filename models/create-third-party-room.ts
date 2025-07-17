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
import type { LogoRequest } from './logo-request';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomType } from './room-type';

/**
 * The parameters for creating a third-party room.
 * @export
 * @interface CreateThirdPartyRoom
 */
export interface CreateThirdPartyRoom {
    /**
     * Specifies whether to create a third-party room as a new folder or not.
     * @type {boolean}
     * @memberof CreateThirdPartyRoom
     */
    'createAsNewFolder'?: boolean;
    /**
     * The third-party room name to be created.
     * @type {string}
     * @memberof CreateThirdPartyRoom
     */
    'title': string | null;
    /**
     * 
     * @type {RoomType}
     * @memberof CreateThirdPartyRoom
     */
    'roomType': RoomType;
    /**
     * Specifies whether to create the private third-party room or not.
     * @type {boolean}
     * @memberof CreateThirdPartyRoom
     */
    'private'?: boolean;
    /**
     * Specifies whether to create the third-party room with indexing.
     * @type {boolean}
     * @memberof CreateThirdPartyRoom
     */
    'indexing'?: boolean;
    /**
     * Specifies whether to deny downloads from the third-party room.
     * @type {boolean}
     * @memberof CreateThirdPartyRoom
     */
    'denyDownload'?: boolean;
    /**
     * The color of the third-party room.
     * @type {string}
     * @memberof CreateThirdPartyRoom
     */
    'color'?: string | null;
    /**
     * The cover of the third-party room.
     * @type {string}
     * @memberof CreateThirdPartyRoom
     */
    'cover'?: string | null;
    /**
     * The list of tags of the third-party room.
     * @type {Array<string>}
     * @memberof CreateThirdPartyRoom
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {LogoRequest}
     * @memberof CreateThirdPartyRoom
     */
    'logo'?: LogoRequest;
}



