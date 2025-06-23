// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

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

