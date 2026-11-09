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
 * One user who cannot open some encrypted files of a private room yet.
 */
export interface RoomMissingFileKeysDto {
    /**
     * The user the keys are missing for.
     */
    'userId': string;
    /**
     * The encrypted files that hold no key for this user, anywhere in the room. Never empty: a user who has every key  is not listed at all.
     */
    'fileIds': Array<number> | null;
}

