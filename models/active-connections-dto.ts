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
import type { ActiveConnectionsItemDto } from './active-connections-item-dto';

/**
 * The connections the calling user currently has open, and which of them the request itself was made with.
 */
export interface ActiveConnectionsDto {
    /**
     * The `id` of the item in `items` that the current request is authenticated by. It is `0` when the request  carried a token in the `Authorization` header instead of the portal cookie, and in that case none of the  items is the current connection.
     */
    'loginEvent': number;
    /**
     * One item per sign-in of the caller that is still active, ordered newest sign-in first, with the connection  the request itself uses moved to the front. Sign-ins older than a year are left out, and a caller with no  stored connection gets a single item describing the current request rather than an empty list.
     */
    'items'?: Array<ActiveConnectionsItemDto> | null;
}

