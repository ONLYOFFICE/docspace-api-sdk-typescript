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
import type { ActiveConnectionsWrapperLinksInner } from './active-connections-wrapper-links-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { NewItemsDtoRoomNewItemsDto } from './new-items-dto-room-new-items-dto';

/**
 * 
 * @export
 * @interface NewItemsRoomNewItemsArrayWrapper
 */
export interface NewItemsRoomNewItemsArrayWrapper {
    /**
     * 
     * @type {Array<NewItemsDtoRoomNewItemsDto>}
     * @memberof NewItemsRoomNewItemsArrayWrapper
     */
    'response'?: Array<NewItemsDtoRoomNewItemsDto>;
    /**
     * 
     * @type {number}
     * @memberof NewItemsRoomNewItemsArrayWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof NewItemsRoomNewItemsArrayWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof NewItemsRoomNewItemsArrayWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof NewItemsRoomNewItemsArrayWrapper
     */
    'statusCode'?: number;
}

