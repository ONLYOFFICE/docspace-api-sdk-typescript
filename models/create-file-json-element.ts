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
import type { CreateFileJsonElementTemplateId } from './create-file-json-element-template-id';

/**
 * The parameters of a file that the portal creates from a template or a blank document.
 */
export interface CreateFileJsonElement {
    /**
     * The title of the new file. The extension in it decides the format, and one of a known text, spreadsheet or  presentation format is rewritten to the DOCX, XLSX or PPTX of the portal unless `enableExternalExt` says  otherwise; a title with no extension gets DOCX added.
     */
    'title': string | null;
    'templateId'?: CreateFileJsonElementTemplateId;
    /**
     * Whether the extension of the title is kept as it is: `true` stores the title verbatim, `false` rewrites a  known foreign format to the format the portal edits itself.
     */
    'enableExternalExt'?: boolean;
    /**
     * A ready form from the form gallery of the portal to copy instead of a template, named by the identifier the  gallery reports for it. It takes precedence over `templateId`; 0 means no form.
     */
    'formId'?: number;
}

