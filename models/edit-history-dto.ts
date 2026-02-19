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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EditHistoryAuthor } from './edit-history-author';
// May contain unused imports in some cases
// @ts-ignore
import type { EditHistoryChangesWrapper } from './edit-history-changes-wrapper';

/**
 * The file editing history parameters.
 */
export interface EditHistoryDto {
    /**
     * The document ID.
     */
    'id'?: number;
    /**
     * The document identifier used to unambiguously identify the document file.
     */
    'key'?: string;
    /**
     * The document version number.
     */
    'version'?: number;
    /**
     * The document version group.
     */
    'versionGroup'?: number;
    'user'?: EditHistoryAuthor;
    'created'?: ApiDateTime;
    /**
     * The file history changes in the string format.
     */
    'changesHistory'?: string;
    /**
     * The list of file history changes.
     */
    'changes'?: Array<EditHistoryChangesWrapper>;
    /**
     * The current server version number.
     */
    'serverVersion'?: string;
}

