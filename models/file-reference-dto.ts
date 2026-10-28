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
import type { FileReferenceDataDto } from './file-reference-data-dto';

/**
 * The file reference parameters.
 */
export interface FileReferenceDto {
    /**
     * How this document is named when another spreadsheet refers to it. Send it back as it stands to resolve the  reference again.
     */
    'referenceData'?: FileReferenceDataDto;
    /**
     * Filled in when the reference resolved to nothing; the rest of the descriptor is then empty and must not be  handed to the editors.
     */
    'error'?: string | null;
    /**
     * The title of the document the reference resolved to.
     */
    'path'?: string | null;
    /**
     * Where the content is fetched from. It is addressed to the host the document service can reach, which on a  deployment with a private editor network is not the address a browser should follow.
     */
    'url'?: string | null;
    /**
     * The format the content is in, without the leading dot.
     */
    'fileType'?: string | null;
    /**
     * Identifies the exact revision to the editors: two clients that receive the same key read the same co-editing  session, and the key changes as soon as the document is saved.
     */
    'key'?: string | null;
    /**
     * The address of the document in the portal web editor - the link to put in front of a person, unlike the  download address above.
     */
    'link'?: string | null;
    /**
     * Signs this descriptor so that the editors can trust it. It stays empty on a portal that has no signature  secret configured for the document service.
     */
    'token'?: string | null;
}

