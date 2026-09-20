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
import type { RoomType } from './room-type';

/**
 * The room to be created out of a folder of a connected third-party storage account.
 */
export interface CreateThirdPartyRoom {
    /**
     * Creates a new folder named after `title` inside the folder named in the path and turns that subfolder into the  room, leaving the named folder itself untouched. When omitted, the named folder becomes the room and keeps  everything it already holds.
     */
    'createAsNewFolder'?: boolean;
    /**
     * The name the room is shown under. It is stored on the connected account, so it does not have to match the name  of the folder in the storage; with `createAsNewFolder` it is also the name given to the created subfolder.
     */
    'title': string | null;
    /**
     * The kind of room the folder becomes, which decides the default access rules of its members and cannot be  changed afterwards.
     */
    'roomType': RoomType;
    /**
     * Restricts the room to the members explicitly invited into it. The flag is kept on the connected storage  account rather than on the folder, so every folder read through that account reports the same value.
     */
    'private'?: boolean;
    /**
     * Keeps the contents of the room in an explicit numbered order, the one reported as `order` on every entry,  instead of leaving the order to the reader.
     */
    'indexing'?: boolean;
    /**
     * Forbids downloading and printing the contents of the room, which leaves the members with viewing and editing  in the editor only.
     */
    'denyDownload'?: boolean;
    /**
     * The background colour drawn behind the cover of the room, as six hexadecimal digits without a leading number  sign. An empty value restores the colour the portal picks by default.
     */
    'color'?: string | null;
    /**
     * The drawing shown on the room tile, named by one of the built-in cover identifiers returned by  `GET api/2.0/files/rooms/covers`. An empty value leaves the room without a cover, and any other unknown value  is rejected as an invalid request.
     */
    'cover'?: string | null;
    /**
     * The tags to attach to the room, named by their text. A name that is not in the portal tag catalogue yet is  added to it, and `GET api/2.0/files/tags` lists the names already there.
     */
    'tags'?: Array<string> | null;
    /**
     * The picture to use as the room logo, which has to be uploaded with `POST api/2.0/files/logos` first; leaving  it out keeps the room on its cover and colour.
     */
    'logo'?: LogoRequest;
}



