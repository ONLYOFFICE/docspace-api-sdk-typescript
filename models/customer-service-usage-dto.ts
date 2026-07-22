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
 * Aggregated customer usage statistics for a service over a period.
 */
export interface CustomerServiceUsageDto {
    /**
     * The name of the service.
     */
    'service'?: string | null;
    /**
     * The title of the service.
     */
    'title'?: string | null;
    /**
     * The unit of measurement for the service.
     */
    'serviceUnit'?: string | null;
    /**
     * The three-character ISO 4217 currency symbol of the amounts.
     */
    'currency'?: string | null;
    /**
     * The total number of units consumed.
     */
    'totalQuantity'?: number;
    /**
     * The total amount charged for the service.
     */
    'totalAmount'?: number;
    /**
     * The number of individual purchase operations.
     */
    'operationCount'?: number;
}

