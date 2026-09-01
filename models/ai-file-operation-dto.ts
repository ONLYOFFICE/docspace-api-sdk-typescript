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

// May contain unused imports in some cases
// @ts-ignore
import type { AiDistributedTaskStatus } from './ai-distributed-task-status';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryBaseDto } from './ai-file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileOperationType } from './ai-file-operation-type';

/**
 * The file operation information.
 */
export interface AiFileOperationDto {
    /**
     * The file operation ID.
     */
    'id': string | null;
    /**
     * The file operation type.
     */
    'Operation': AiFileOperationType;
    /**
     * The file operation progress in percentage.
     */
    'progress': number;
    /**
     * The file operation error message.
     */
    'error': string | null;
    /**
     * The file operation processing status.
     */
    'processed': string | null;
    /**
     * Specifies if the file operation is finished or not.
     */
    'finished': boolean;
    /**
     * The file operation URL.
     */
    'url'?: string | null;
    /**
     * The list of files of the file operation.
     */
    'files'?: Array<AiFileEntryBaseDto> | null;
    /**
     * The list of folders of the file operation.
     */
    'folders'?: Array<AiFileEntryBaseDto> | null;
    /**
     * The status of the distributed task related to the file operation.
     */
    'status'?: AiDistributedTaskStatus;
}



