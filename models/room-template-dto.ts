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

/**
 * The room template parameters.
 * @export
 * @interface RoomTemplateDto
 */
export interface RoomTemplateDto {
    /**
     * The room template ID.
     * @type {number}
     * @memberof RoomTemplateDto
     */
    'roomId': number;
    /**
     * The room template title.
     * @type {string}
     * @memberof RoomTemplateDto
     */
    'title'?: string | null;
    /**
     * 
     * @type {LogoRequest}
     * @memberof RoomTemplateDto
     */
    'logo'?: LogoRequest;
    /**
     * Specifies whether to copy room logo or not.
     * @type {boolean}
     * @memberof RoomTemplateDto
     */
    'copyLogo'?: boolean;
    /**
     * The collection of email addresses of users with whom to share a room.
     * @type {Array<string>}
     * @memberof RoomTemplateDto
     */
    'share'?: Array<string> | null;
    /**
     * The collection of groups with whom to share a room.
     * @type {Array<string>}
     * @memberof RoomTemplateDto
     */
    'groups'?: Array<string> | null;
    /**
     * Specifies whether the room template is public or not.
     * @type {boolean}
     * @memberof RoomTemplateDto
     */
    'public'?: boolean;
    /**
     * The collection of tags.
     * @type {Array<string>}
     * @memberof RoomTemplateDto
     */
    'tags'?: Array<string> | null;
    /**
     * The color of the room template.
     * @type {string}
     * @memberof RoomTemplateDto
     */
    'color'?: string | null;
    /**
     * The cover of the room template.
     * @type {string}
     * @memberof RoomTemplateDto
     */
    'cover'?: string | null;
    /**
     * Room quota
     * @type {number}
     * @memberof RoomTemplateDto
     */
    'quota'?: number | null;
}

