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

/**
 * Represents an operation.
 * @export
 * @interface OperationDto
 */
export interface OperationDto {
    /**
     * 
     * @type {ApiDateTime}
     * @memberof OperationDto
     */
    'date'?: ApiDateTime;
    /**
     * The service related to the operation.
     * @type {string}
     * @memberof OperationDto
     */
    'service'?: string | null;
    /**
     * The brief operation description.
     * @type {string}
     * @memberof OperationDto
     */
    'description'?: string | null;
    /**
     * The detailed information about the operation.
     * @type {string}
     * @memberof OperationDto
     */
    'details'?: string | null;
    /**
     * The service unit.
     * @type {string}
     * @memberof OperationDto
     */
    'serviceUnit'?: string | null;
    /**
     * The quantity of the service used.
     * @type {number}
     * @memberof OperationDto
     */
    'quantity'?: number;
    /**
     * The three-character ISO 4217 currency symbol of the operation.
     * @type {string}
     * @memberof OperationDto
     */
    'currency'?: string | null;
    /**
     * The credit amount of the operation.
     * @type {number}
     * @memberof OperationDto
     */
    'credit'?: number;
    /**
     * The debit amount of the operation.
     * @type {number}
     * @memberof OperationDto
     */
    'debit'?: number;
    /**
     * The participant original name.
     * @type {string}
     * @memberof OperationDto
     */
    'participantName'?: string | null;
    /**
     * The participant display name.
     * @type {string}
     * @memberof OperationDto
     */
    'participantDisplayName'?: string | null;
}

