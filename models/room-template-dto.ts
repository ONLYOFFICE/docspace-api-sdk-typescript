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

/**
 * The parameters of a room template built from an existing room.
 */
export interface RoomTemplateDto {
    /**
     * The identifier of the room the template is built from. Take it from the room listing of  `GET api/2.0/files/rooms`; a folder identifier is not accepted.
     */
    'roomId': number;
    /**
     * The title the template is saved under in the Templates section. Characters that a folder name cannot contain  are replaced with an underscore on save, and two templates may share a title.
     */
    'title': string;
    /**
     * A picture of the caller\'s own for the template, cropped out of an image already placed in the temporary  storage.
     */
    'logo'?: LogoRequest;
    /**
     * Whether the template takes over the picture already set on the source room. When false the template gets no  picture from that room.
     */
    'copyLogo'?: boolean;
    /**
     * The email addresses of the portal members who are granted read access to the finished template.
     */
    'share'?: Array<string> | null;
    /**
     * The identifiers of the portal groups whose members are granted read access to the finished template.
     */
    'groups'?: Array<string> | null;
    /**
     * Whether the finished template is shared with everyone allowed to create rooms. When false it stays reachable  only for the recipients named for it.
     */
    'public'?: boolean;
    /**
     * The labels attached to the template and shown next to it in listings.
     */
    'tags'?: Array<string> | null;
    /**
     * The accent colour of the generated cover, written as six hexadecimal digits with no leading hash sign. When it  is left empty a colour is picked at random.
     */
    'color'?: string | null;
    /**
     * The identifier of a built-in cover picture, as listed by `GET api/2.0/files/rooms/covers`. When it is left  empty the template gets no cover.
     */
    'cover'?: string | null;
    /**
     * The storage limit assigned to the template, in bytes. When it is not set the template keeps the limit of the  source room.
     */
    'quota'?: number | null;
}

