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
 * Represents service payment information.
 */
export interface ServicePayment {
    /**
     * The payment operation ID.
     */
    'operationId'?: number;
    /**
     * The balance of the sub-account in the specified currency.
     */
    'amount'?: number;
    /**
     * The three-character ISO 4217 currency symbol.
     */
    'currency'?: string | null;
    /**
     * Total quantity of operations.
     */
    'quantity'?: number;
    /**
     * The subscription ID
     */
    'subscriptionId'?: number | null;
    /**
     * The subscription start date.
     */
    'startDate'?: string | null;
    /**
     * The subscription end date.
     */
    'endDate'?: string | null;
}

