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
import type { DistributedTaskStatus } from './distributed-task-status';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryBaseDto } from './file-entry-base-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationType } from './file-operation-type';

/**
 * One background file operation of the caller, as it stood when the answer was built.
 */
export interface FileOperationDto {
    /**
     * The identifier of the operation, the one to pass to `PUT api/2.0/files/fileops/terminate/{id}` to stop it.  Operations belong to the account that started them, so an identifier of somebody else is never listed here.
     */
    'id': string | null;
    /**
     * What the operation does with the entries, which also decides what else is reported: only a download fills  `url`, and a deletion leaves `files` and `folders` empty.
     */
    'Operation': FileOperationType;
    /**
     * How far the operation has come, from 0 to 100. Reaching 100 only means it stopped; whether it did what it was  asked for is told by `error`.
     */
    'progress': number;
    /**
     * The reason the operation could not finish its work, in the language of the request. Empty when nothing went  wrong, which is the only way to tell a successful operation from a failed one.
     */
    'error': string | null;
    /**
     * How many entries the operation has handled so far, written as a decimal number in a string. It counts items,  not percent, and stays behind `progress` on operations that walk into subfolders.
     */
    'processed': string | null;
    /**
     * Whether the operation has stopped running. A finished operation is reported once and then dropped, so the next  read of the operation list no longer contains it.
     */
    'finished': boolean;
    /**
     * The address the packed archive can be downloaded from once a bulk download has finished. Empty for every other  kind of operation.
     */
    'url'?: string | null;
    /**
     * The files the operation produced or moved, in the order it wrote them down. Empty while nothing has been  written yet and for a deletion, which reports no entries at all.
     */
    'files'?: Array<FileEntryBaseDto> | null;
    /**
     * The folders the operation produced or moved, in the order it wrote them down. Empty while nothing has been  written yet and for a deletion.
     */
    'folders'?: Array<FileEntryBaseDto> | null;
    /**
     * The state of the background task behind the operation, which tells a task that was cancelled or that crashed  from one that ran to its end.
     */
    'status'?: DistributedTaskStatus;
}



