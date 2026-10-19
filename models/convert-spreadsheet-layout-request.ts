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
import type { ConvertSpreadsheetMarginsRequest } from './convert-spreadsheet-margins-request';
// May contain unused imports in some cases
// @ts-ignore
import type { ConvertSpreadsheetPageSizeRequest } from './convert-spreadsheet-page-size-request';

/**
 * How a spreadsheet converted to PDF is laid out on the page. A field left out takes the document service default.
 */
export interface ConvertSpreadsheetLayoutRequest {
    /**
     * Whether the print area chosen in the spreadsheet is ignored; false converts only that area.
     */
    'ignorePrintArea'?: boolean | null;
    /**
     * The page orientation of the output PDF file: portrait or landscape.
     */
    'orientation'?: string | null;
    /**
     * The number of pages the converted area is fitted into in height; 0 does not fit it.
     */
    'fitToHeight'?: number | null;
    /**
     * The scale of the output PDF file, in percent.
     */
    'scale'?: number | null;
    /**
     * The number of pages the converted area is fitted into in width; 0 does not fit it.
     */
    'fitToWidth'?: number | null;
    /**
     * Whether the row and column headings are printed in the output PDF file.
     */
    'headings'?: boolean | null;
    /**
     * Whether the grid lines are printed in the output PDF file.
     */
    'gridLines'?: boolean | null;
    /**
     * The margins of the output PDF file.
     */
    'margins'?: ConvertSpreadsheetMarginsRequest;
    /**
     * The page size of the output PDF file.
     */
    'pageSize'?: ConvertSpreadsheetPageSizeRequest;
}

