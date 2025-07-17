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
import type { FileShareParams } from './file-share-params';
// May contain unused imports in some cases
// @ts-ignore
import type { LogoRequest } from './logo-request';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomDataLifetimeDto } from './room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomType } from './room-type';
// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkRequestDto } from './watermark-request-dto';

/**
 * The request parameters for creating a room.
 * @export
 * @interface CreateRoomRequestDto
 */
export interface CreateRoomRequestDto {
    /**
     * The room name.
     * @type {string}
     * @memberof CreateRoomRequestDto
     */
    'title': string | null;
    /**
     * The room quota.
     * @type {number}
     * @memberof CreateRoomRequestDto
     */
    'quota'?: number | null;
    /**
     * Specifies whether to create a room with indexing.
     * @type {boolean}
     * @memberof CreateRoomRequestDto
     */
    'indexing'?: boolean | null;
    /**
     * Specifies whether to deny downloads from the room.
     * @type {boolean}
     * @memberof CreateRoomRequestDto
     */
    'denyDownload'?: boolean | null;
    /**
     * 
     * @type {RoomDataLifetimeDto}
     * @memberof CreateRoomRequestDto
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * 
     * @type {WatermarkRequestDto}
     * @memberof CreateRoomRequestDto
     */
    'watermark'?: WatermarkRequestDto;
    /**
     * 
     * @type {LogoRequest}
     * @memberof CreateRoomRequestDto
     */
    'logo'?: LogoRequest;
    /**
     * The list of tags.
     * @type {Array<string>}
     * @memberof CreateRoomRequestDto
     */
    'tags'?: Array<string> | null;
    /**
     * The room color.
     * @type {string}
     * @memberof CreateRoomRequestDto
     */
    'color'?: string | null;
    /**
     * The room cover.
     * @type {string}
     * @memberof CreateRoomRequestDto
     */
    'cover'?: string | null;
    /**
     * 
     * @type {RoomType}
     * @memberof CreateRoomRequestDto
     */
    'roomType': RoomType;
    /**
     * Specifies whether the room to be created is private or not.
     * @type {boolean}
     * @memberof CreateRoomRequestDto
     */
    'private'?: boolean;
    /**
     * The collection of sharing parameters.
     * @type {Array<FileShareParams>}
     * @memberof CreateRoomRequestDto
     */
    'share'?: Array<FileShareParams> | null;
}



