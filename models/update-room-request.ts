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
import type { RoomDataLifetimeDto } from './room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkRequestDto } from './watermark-request-dto';

/**
 * The request parameters for updating a room.
 * @export
 * @interface UpdateRoomRequest
 */
export interface UpdateRoomRequest {
    /**
     * The room title.
     * @type {string}
     * @memberof UpdateRoomRequest
     */
    'title'?: string | null;
    /**
     * The room quota.
     * @type {number}
     * @memberof UpdateRoomRequest
     */
    'quota'?: number | null;
    /**
     * Specifies whether to create a third-party room with indexing.
     * @type {boolean}
     * @memberof UpdateRoomRequest
     */
    'indexing'?: boolean | null;
    /**
     * Specifies whether to deny downloads from the third-party room.
     * @type {boolean}
     * @memberof UpdateRoomRequest
     */
    'denyDownload'?: boolean | null;
    /**
     * 
     * @type {RoomDataLifetimeDto}
     * @memberof UpdateRoomRequest
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * 
     * @type {WatermarkRequestDto}
     * @memberof UpdateRoomRequest
     */
    'watermark'?: WatermarkRequestDto;
    /**
     * 
     * @type {LogoRequest}
     * @memberof UpdateRoomRequest
     */
    'logo'?: LogoRequest;
    /**
     * The list of tags.
     * @type {Array<string>}
     * @memberof UpdateRoomRequest
     */
    'tags'?: Array<string> | null;
    /**
     * The room color.
     * @type {string}
     * @memberof UpdateRoomRequest
     */
    'color'?: string | null;
    /**
     * The room cover.
     * @type {string}
     * @memberof UpdateRoomRequest
     */
    'cover'?: string | null;
}

