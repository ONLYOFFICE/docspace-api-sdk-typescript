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
import type { FileShareDto } from './file-share-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomSecurityError } from './room-security-error';

/**
 * The room security parameters.
 * @export
 * @interface RoomSecurityDto
 */
export interface RoomSecurityDto {
    /**
     * The list of room members.
     * @type {Array<FileShareDto>}
     * @memberof RoomSecurityDto
     */
    'members'?: Array<FileShareDto> | null;
    /**
     * The warning message.
     * @type {string}
     * @memberof RoomSecurityDto
     */
    'warning'?: string | null;
    /**
     * 
     * @type {RoomSecurityError}
     * @memberof RoomSecurityDto
     */
    'error'?: RoomSecurityError;
}



