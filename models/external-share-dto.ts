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
 * @export
 * @interface ExternalShareDto
 */
export interface ExternalShareDto {
    /**
     * 
     * @type {Status}
     * @memberof ExternalShareDto
     */
    'status'?: Status;
    /**
     * The external data ID.
     * @type {string}
     * @memberof ExternalShareDto
     */
    'id'?: string | null;
    /**
     * The external data title.
     * @type {string}
     * @memberof ExternalShareDto
     */
    'title'?: string | null;
    /**
     * 
     * @type {FileEntryType}
     * @memberof ExternalShareDto
     */
    'type'?: FileEntryType;
    /**
     * The tenant ID.
     * @type {number}
     * @memberof ExternalShareDto
     */
    'tenantId'?: number;
    /**
     * The unique identifier of the shared entity.
     * @type {string}
     * @memberof ExternalShareDto
     */
    'entityId'?: string | null;
    /**
     * The title of the shared entity.
     * @type {string}
     * @memberof ExternalShareDto
     */
    'entityTitle'?: string | null;
    /**
     * 
     * @type {FileEntryType}
     * @memberof ExternalShareDto
     */
    'entityType'?: FileEntryType;
    /**
     * Indicates whether the entity represents a room.
     * @type {boolean}
     * @memberof ExternalShareDto
     */
    'isRoom'?: boolean | null;
    /**
     * Specifies whether to share the external data or not.
     * @type {boolean}
     * @memberof ExternalShareDto
     */
    'shared'?: boolean;
    /**
     * The link ID of the external data.
     * @type {string}
     * @memberof ExternalShareDto
     */
    'linkId'?: string;
    /**
     * Specifies whether the user is authenticated or not.
     * @type {boolean}
     * @memberof ExternalShareDto
     */
    'isAuthenticated'?: boolean;
    /**
     * The room ID of the external data.
     * @type {boolean}
     * @memberof ExternalShareDto
     */
    'isRoomMember'?: boolean;
}



