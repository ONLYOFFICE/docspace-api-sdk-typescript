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
import type { FileReferenceData } from './file-reference-data';
// May contain unused imports in some cases
// @ts-ignore
import type { InfoConfigDto } from './info-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { Options } from './options';
// May contain unused imports in some cases
// @ts-ignore
import type { PermissionsConfig } from './permissions-config';

/**
 * The document itself as the editors address it: what to fetch, under which revision key, and what this caller may  do with it.
 */
export interface DocumentConfigDto {
    /**
     * The format the editors treat the content as, without the leading dot. For a file that had to be converted this  is the format it was converted to, not the one it is stored under.
     */
    'fileType'?: string | null;
    /**
     * The facts the editor information panel shows about the document.
     */
    'info'?: InfoConfigDto;
    /**
     * Whether the caller opened the original document rather than a link pointing at it, which matters only for  formats whose editing is restricted through links.
     */
    'isLinkedForMe'?: boolean;
    /**
     * Identifies the exact revision to the editors: everyone who receives the same key joins the same co-editing  session, and the key changes as soon as the document is saved.
     */
    'key'?: string | null;
    /**
     * What this caller may do inside the editor - edit, comment, review, fill, download, print, copy and chat.
     */
    'permissions'?: PermissionsConfig;
    /**
     * The name of the query parameter that carries the external share key. It is set only when the document was  opened through an external link.
     */
    'sharedLinkParam'?: string | null;
    /**
     * The external share key this opening runs under, empty when the caller opened the document as a portal member.  The editors pass it back on every request they make for the document.
     */
    'sharedLinkKey'?: string | null;
    /**
     * How another spreadsheet names this document in a formula. Pass it to `POST api/2.0/files/file/referencedata`  to resolve such a reference.
     */
    'referenceData'?: FileReferenceData;
    /**
     * The name the editors display. When a past version was opened, the moment that version was created is appended  to it in brackets.
     */
    'title'?: string | null;
    /**
     * Where the editors fetch the content. It is addressed to the host the document service can reach, which is not  necessarily the address a browser should follow.
     */
    'url'?: string | null;
    /**
     * Whether the document is a fillable PDF form. A PDF that the portal has never classified is inspected while the  configuration is built, so the answer is trustworthy even for a freshly uploaded file.
     */
    'isForm'?: boolean;
    /**
     * Extra instructions for the editors, currently the watermark to draw over the document. It is empty when the  room sets no watermark.
     */
    'options'?: Options;
}

