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


/**
 * The progress parameters of creating a room from the template.
 * @export
 * @interface RoomFromTemplateStatusDto
 */
export interface RoomFromTemplateStatusDto {
    /**
     * The room ID.
     * @type {number}
     * @memberof RoomFromTemplateStatusDto
     */
    'roomId'?: number;
    /**
     * The progress of creating a room from the template.
     * @type {number}
     * @memberof RoomFromTemplateStatusDto
     */
    'progress'?: number;
    /**
     * The error message that is sent when a room is not created successfully from the template.
     * @type {string}
     * @memberof RoomFromTemplateStatusDto
     */
    'error'?: string | null;
    /**
     * Specifies whether the process of creating a room from the template is completed.
     * @type {boolean}
     * @memberof RoomFromTemplateStatusDto
     */
    'isCompleted'?: boolean;
}

