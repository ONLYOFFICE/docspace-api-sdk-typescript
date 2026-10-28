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


/**
 * How the text of a pdf, xps or oxps source is read back when converting from it.
 */
export interface ConvertDocumentRendererRequest {
    /**
     * The rendering mode: blockChar reads the text by single characters, blockLine by separate lines, plainLine as  plain text with a paragraph per line, plainParagraph as plain text with lines combined into paragraphs.
     */
    'textAssociation'?: string | null;
}

