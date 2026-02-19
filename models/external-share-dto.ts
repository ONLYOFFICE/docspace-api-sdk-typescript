/* tslint:disable */
/* eslint-disable */
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
import type { FileEntryType } from './file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Status } from './status';

/**
 * The external sharing information and validation data.
 */
export interface ExternalShareDto {
    'status': Status;
    /**
     * The external data ID.
     */
    'id': string;
    /**
     * The external data title.
     */
    'title': string;
    'type'?: FileEntryType;
    /**
     * The tenant ID.
     */
    'tenantId': number;
    /**
     * The unique identifier of the shared entity.
     */
    'entityId'?: string;
    /**
     * The title of the shared entity.
     */
    'entityTitle'?: string;
    'entityType'?: FileEntryType;
    /**
     * Indicates whether the entity represents a room.
     */
    'isRoom'?: boolean;
    /**
     * Specifies whether to share the external data or not.
     */
    'shared': boolean;
    /**
     * The link ID of the external data.
     */
    'linkId': string;
    /**
     * Specifies whether the user is authenticated or not.
     */
    'isAuthenticated': boolean;
    /**
     * The room ID of the external data.
     */
    'isRoomMember'?: boolean;
}



