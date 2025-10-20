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
 * [0 - Created, 1 - Running, 2 - Completed, 3 - Canceled, 4 - Failted]
 * @export
 * @enum {number}
 */

export const DistributedTaskStatus = {
    /**
    * Created
    */
    Created: 0,
    /**
    * Running
    */
    Running: 1,
    /**
    * Completed
    */
    Completed: 2,
    /**
    * Canceled
    */
    Canceled: 3,
    /**
    * Failted
    */
    Failted: 4
} as const;

export type DistributedTaskStatus = typeof DistributedTaskStatus[keyof typeof DistributedTaskStatus];



