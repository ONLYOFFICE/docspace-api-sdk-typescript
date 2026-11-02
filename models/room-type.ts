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


/**
 * [1 - Form filling room, 2 - Collaboration room, 5 - Custom room, 6 - Public room, 8 - Virtual data room, 9 - AI Room, 10 - Instructions room, 11 - Knowledge room, 12 - AI project room]
 */

export const RoomType = {
    FillingFormsRoom: 1,
    EditingRoom: 2,
    CustomRoom: 5,
    PublicRoom: 6,
    VirtualDataRoom: 8,
    AiRoom: 9,
    InstructionsRoom: 10,
    KnowledgeRoom: 11,
    AiProjectRoom: 12,
} as const;

export type RoomType = typeof RoomType[keyof typeof RoomType];



