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
 * One Knowledge room a round searches: the account and room ID from `GET api/2.0/ai/context/get-knowledge-folders`.
 */
export interface AiKnowledgeRoomRef {
    /**
     * The account the room belongs to; `docspace` for a room of this portal.
     */
    'cloud': string;
    /**
     * The room ID; anything that is not a positive integer is ignored.
     */
    'id': string;
}

