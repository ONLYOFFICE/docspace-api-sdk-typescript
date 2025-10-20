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
 * [0 - Waiting, 1 - Created, 2 - Error, 3 - Not required, 4 - Creating]
 * @export
 * @enum {number}
 */

export const Thumbnail = {
    /**
    * Waiting
    */
    Waiting: 0,
    /**
    * Created
    */
    Created: 1,
    /**
    * Error
    */
    Error: 2,
    /**
    * Not required
    */
    NotRequired: 3,
    /**
    * Creating
    */
    Creating: 4
} as const;

export type Thumbnail = typeof Thumbnail[keyof typeof Thumbnail];



