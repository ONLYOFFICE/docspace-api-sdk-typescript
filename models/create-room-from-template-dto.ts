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
 * The parameters of a room built from a room template.
 */
export interface CreateRoomFromTemplateDto {
    /**
     * The room template to copy. Templates live in their own section and are listed by `GET api/2.0/files/rooms`  with a search area of 4; an ordinary room id is rejected here.
     */
    'templateId': number;
    /**
     * The name of the room to create. It is sanitised and truncated the way a room title is, and a blank value is  rejected; the title of the template is not reused.
     */
    'title': string | null;
    /**
     * The picture to use as the room logo, named by the path that `POST api/2.0/files/logos` returned for an image  uploaded beforehand, plus the crop to take from it. Leaving the field out keeps the room on its cover and  colour. It is ignored when the logo of the template is copied instead.
     */
    'logo'?: LogoRequest;
    /**
     * Whether the new room keeps the logo of the template. With it on the uploaded picture is ignored; with it off  the room starts with no logo unless one is supplied.
     */
    'copyLogo'?: boolean;
    /**
     * The labels to attach to the room, by name. Names the portal tag catalogue does not hold yet are added to it,  and `GET api/2.0/files/tags` lists what already exists. Leaving the field out keeps the tags of the template.
     */
    'tags'?: Array<string> | null;
    /**
     * The background colour the room is drawn with while it has no logo, as six hexadecimal digits with no leading  number sign. An empty value restores the default colour of the room type.
     */
    'color'?: string | null;
    /**
     * The picture drawn on the room while it has no logo, named by an identifier from  `GET api/2.0/files/rooms/covers`. Any other value is rejected, and an empty value leaves the room without a  cover.
     */
    'cover'?: string | null;
    /**
     * The storage the room may take, in bytes. It is accepted only while the per-room quota feature is on for the  portal and must stay inside the portal own limit; leaving it out lets the room follow the portal default.
     */
    'quota'?: number | null;
    /**
     * Whether the room keeps a manual order of its contents. With it on every file and folder carries a position  that listings follow and that `PUT api/2.0/files/rooms/{id}/reorder` compacts; with it off the contents are  ordered by the sorting of the request. Leaving it out keeps the setting of the template.
     */
    'indexing'?: boolean | null;
    /**
     * Whether members without editing rights are stopped from downloading and printing the contents of the room.  They can still open the documents in the editor. Leaving it out keeps the setting of the template.
     */
    'denyDownload'?: boolean | null;
    /**
     * How long files may stay in the room before they are deleted automatically. The countdown starts when the  setting is saved, and leaving the field out keeps the files forever. Leaving the field out keeps the setting  of the template.
     */
    'lifetime'?: RoomDataLifetimeDto;
    /**
     * The watermark drawn over documents opened in the room. Leaving the field out adds no watermark, and sending it  with the switch turned off removes the one the room has. Leaving the field out keeps the setting of the  template.
     */
    'watermark'?: WatermarkRequestDto;
    /**
     * Whether the room is end-to-end encrypted. Its files can then be opened only in the desktop application by  members whose encryption keys are set up, and the flag cannot be changed after the room is created.
     */
    'private'?: boolean | null;
}

