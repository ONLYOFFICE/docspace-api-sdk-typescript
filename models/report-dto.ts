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
import type { OperationDto } from './operation-dto';

/**
 * Represents a report containing a collection of operations.
 * @export
 * @interface ReportDto
 */
export interface ReportDto {
    /**
     * Collection of operations.
     * @type {Array<OperationDto>}
     * @memberof ReportDto
     */
    'collection'?: Array<OperationDto> | null;
    /**
     * Offset of the report data.
     * @type {number}
     * @memberof ReportDto
     */
    'offset'?: number;
    /**
     * Limit of the report data.
     * @type {number}
     * @memberof ReportDto
     */
    'limit'?: number;
    /**
     * Total quantity of operations in the report.
     * @type {number}
     * @memberof ReportDto
     */
    'totalQuantity'?: number;
    /**
     * Total number of pages in the report.
     * @type {number}
     * @memberof ReportDto
     */
    'totalPage'?: number;
    /**
     * Current page number of the report.
     * @type {number}
     * @memberof ReportDto
     */
    'currentPage'?: number;
}

