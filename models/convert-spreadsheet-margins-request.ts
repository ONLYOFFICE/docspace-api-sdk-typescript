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
 * The margins of the output PDF file, each a length with its unit: mm, cm or in.
 */
export interface ConvertSpreadsheetMarginsRequest {
    /**
     * The left margin of the output PDF file.
     */
    'left'?: string | null;
    /**
     * The right margin of the output PDF file.
     */
    'right'?: string | null;
    /**
     * The top margin of the output PDF file.
     */
    'top'?: string | null;
    /**
     * The bottom margin of the output PDF file.
     */
    'bottom'?: string | null;
}

