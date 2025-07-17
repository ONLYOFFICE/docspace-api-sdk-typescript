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
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { HistoryAction } from './history-action';
// May contain unused imports in some cases
// @ts-ignore
import type { HistoryData } from './history-data';

/**
 * The file history information.
 * @export
 * @interface HistoryDto
 */
export interface HistoryDto {
    /**
     * 
     * @type {HistoryAction}
     * @memberof HistoryDto
     */
    'action'?: HistoryAction;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof HistoryDto
     */
    'initiator'?: EmployeeDto;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof HistoryDto
     */
    'date'?: ApiDateTime;
    /**
     * 
     * @type {HistoryData}
     * @memberof HistoryDto
     */
    'data'?: HistoryData;
    /**
     * The list of related history.
     * @type {Array<HistoryDto>}
     * @memberof HistoryDto
     */
    'related'?: Array<HistoryDto> | null;
}

