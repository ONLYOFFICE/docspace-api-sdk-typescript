/* tslint:disable */
/* eslint-disable */
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
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryBaseDto } from './file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationType } from './file-operation-type';

/**
 * The file operation information.
 */
export interface FileOperationDto {
    /**
     * The file operation ID.
     */
    'id': string;
    'Operation': FileOperationType;
    /**
     * The file operation progress in percentage.
     */
    'progress': number;
    /**
     * The file operation error message.
     */
    'error': string;
    /**
     * The file operation processing status.
     */
    'processed': string;
    /**
     * Specifies if the file operation is finished or not.
     */
    'finished': boolean;
    /**
     * The file operation URL.
     */
    'url'?: string;
    /**
     * The list of files of the file operation.
     */
    'files'?: Array<FileEntryBaseDto>;
    /**
     * The list of folders of the file operation.
     */
    'folders'?: Array<FileEntryBaseDto>;
    'status'?: DistributedTaskStatus;
}



