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
import type { EditHistoryUrl } from './edit-history-url';

/**
 * The file editing history data.
 */
export interface EditHistoryDataDto {
    /**
     * The URL address of the file with the document changes data.
     */
    'changesUrl'?: string | null;
    /**
     * The document identifier used to unambiguously identify the document file.
     */
    'key': string | null;
    'previous'?: EditHistoryUrl;
    /**
     * The encrypted signature added to the parameter in the form of a token.
     */
    'token'?: string | null;
    /**
     * The URL address of the current document version.
     */
    'url': string | null;
    /**
     * The document version number.
     */
    'version': number;
    /**
     * The document extension.
     */
    'fileType': string | null;
}

