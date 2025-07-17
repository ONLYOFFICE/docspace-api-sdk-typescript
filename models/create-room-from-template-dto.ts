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
 * The parameters for creating a room from a template.
 * @export
 * @interface CreateRoomFromTemplateDto
 */
export interface CreateRoomFromTemplateDto {
    /**
     * The template ID from which the room to be created.
     * @type {number}
     * @memberof CreateRoomFromTemplateDto
     */
    'templateId': number;
    /**
     * The room title.
     * @type {string}
     * @memberof CreateRoomFromTemplateDto
     */
    'title': string | null;
    /**
     * 
     * @type {LogoRequest}
     * @memberof CreateRoomFromTemplateDto
     */
    'logo'?: LogoRequest;
    /**
     * Specifies whether to copy a logo or not.
     * @type {boolean}
     * @memberof CreateRoomFromTemplateDto
     */
    'copyLogo'?: boolean;
    /**
     * The collection of tags.
     * @type {Array<string>}
     * @memberof CreateRoomFromTemplateDto
     */
    'tags'?: Array<string> | null;
    /**
     * The color of the room to be created.
     * @type {string}
     * @memberof CreateRoomFromTemplateDto
     */
    'color'?: string | null;
    /**
     * The cover of the room to be created.
     * @type {string}
     * @memberof CreateRoomFromTemplateDto
     */
    'cover'?: string | null;
    /**
     * The room quota.
     * @type {number}
     * @memberof CreateRoomFromTemplateDto
     */
    'quota'?: number | null;
    /**
     * Specifies whether to create a room with indexing.
     * @type {boolean}
     * @memberof CreateRoomFromTemplateDto
     */
    'indexing'?: boolean | null;
    /**
     * Specifies whether to deny downloads from the room.
     * @type {boolean}
     * @memberof CreateRoomFromTemplateDto
     */
    'denyDownload'?: boolean | null;
    /**
     * 
     * @type {RoomDataLifetimeDto}
     * @memberof CreateRoomFromTemplateDto
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * 
     * @type {WatermarkRequestDto}
     * @memberof CreateRoomFromTemplateDto
     */
    'watermark'?: WatermarkRequestDto;
    /**
     * Specifies whether the room to be created is private or not.
     * @type {boolean}
     * @memberof CreateRoomFromTemplateDto
     */
    'private'?: boolean | null;
}

