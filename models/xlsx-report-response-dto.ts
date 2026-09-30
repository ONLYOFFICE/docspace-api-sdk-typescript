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
import type { DocumentBuilderTaskDto } from './document-builder-task-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDto } from './file-dto';

/**
 * The answer to a report generation request: the queued task, the form whose answers are collected, and whether the  report file is being created or refreshed.
 */
export interface XlsxReportResponseDto {
    /**
     * The original form the answers are collected from. It is not the produced spreadsheet - that one arrives with  the task, once the task reports completion.
     */
    'form'?: FileDto;
    /**
     * The queued generation. Poll it with `GET api/2.0/files/file/{fileId}/xlsx` until it reports completion, and  take the produced file from it then.
     */
    'task'?: DocumentBuilderTaskDto;
    /**
     * True when this run creates the report file, false when an existing report is rewritten in place, which means  it keeps its id and the links already shared for it.
     */
    'isNewFile'?: boolean;
}

