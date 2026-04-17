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
 * [0 - Created, 1 - Running, 2 - Completed, 3 - Canceled, 4 - Failted]
 */

export const DistributedTaskStatus = {
    Created: 0,
    Running: 1,
    Completed: 2,
    Canceled: 3,
    Failted: 4,
} as const;

export type DistributedTaskStatus = typeof DistributedTaskStatus[keyof typeof DistributedTaskStatus];



