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
import type { DistributedTaskStatus } from './distributed-task-status';

/**
 * The document builder task parameters.
 * @export
 * @interface DocumentBuilderTaskDto
 */
export interface DocumentBuilderTaskDto {
    /**
     * The document builder ID.
     * @type {string}
     * @memberof DocumentBuilderTaskDto
     */
    'id'?: string | null;
    /**
     * The error message occured while the document building process.
     * @type {string}
     * @memberof DocumentBuilderTaskDto
     */
    'error'?: string | null;
    /**
     * The percentage of the progress of the document building process.
     * @type {number}
     * @memberof DocumentBuilderTaskDto
     */
    'percentage'?: number;
    /**
     * Specifies whether the document building process is completed or not.
     * @type {boolean}
     * @memberof DocumentBuilderTaskDto
     */
    'isCompleted'?: boolean;
    /**
     * 
     * @type {DistributedTaskStatus}
     * @memberof DocumentBuilderTaskDto
     */
    'status'?: DistributedTaskStatus;
    /**
     * The result file ID.
     * @type {any}
     * @memberof DocumentBuilderTaskDto
     */
    'resultFileId'?: any | null;
    /**
     * The result file name.
     * @type {string}
     * @memberof DocumentBuilderTaskDto
     */
    'resultFileName'?: string | null;
    /**
     * The result file URL.
     * @type {string}
     * @memberof DocumentBuilderTaskDto
     */
    'resultFileUrl'?: string | null;
}



