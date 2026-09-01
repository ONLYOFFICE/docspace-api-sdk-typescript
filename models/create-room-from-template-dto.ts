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
import type { LogoRequest } from './logo-request';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomDataLifetimeDto } from './room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkRequestDto } from './watermark-request-dto';

/**
 * The parameters for creating a room from a template.
 */
export interface CreateRoomFromTemplateDto {
    /**
     * The template ID from which the room to be created.
     */
    'templateId': number;
    /**
     * The room title.
     */
    'title': string | null;
    /**
     * The logo request parameters.
     */
    'logo'?: LogoRequest;
    /**
     * Specifies whether to copy a logo or not.
     */
    'copyLogo'?: boolean;
    /**
     * The collection of tags.
     */
    'tags'?: Array<string> | null;
    /**
     * The color of the room to be created.
     */
    'color'?: string | null;
    /**
     * The cover of the room to be created.
     */
    'cover'?: string | null;
    /**
     * The room quota.
     */
    'quota'?: number | null;
    /**
     * Specifies whether to create a room with indexing.
     */
    'indexing'?: boolean | null;
    /**
     * Specifies whether to deny downloads from the room.
     */
    'denyDownload'?: boolean | null;
    /**
     * The room data lifetime information.
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * The watermark settings.
     */
    'watermark'?: WatermarkRequestDto;
    /**
     * Specifies whether the room to be created is private or not.
     */
    'private'?: boolean | null;
}

