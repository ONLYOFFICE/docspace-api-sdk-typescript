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
 * Represents the payment information of a DocsCloud tenant.
 */
export interface DocsCloudPayment {
    /**
     * The cart ID.
     */
    'cartId'?: string | null;
    /**
     * The product ID.
     */
    'productId'?: number;
    /**
     * The payment status.
     */
    'status'?: number;
    /**
     * The interval unit.
     */
    'intervalUnit'?: number;
    /**
     * Whether the payment interval is yearly.
     */
    'isYear'?: boolean;
    /**
     * Whether the payment is prepaid.
     */
    'isPrepaid'?: boolean;
    /**
     * The quantity.
     */
    'quantity'?: number;
    /**
     * The three-character ISO 4217 currency symbol of the payment.
     */
    'currency'?: string | null;
}

