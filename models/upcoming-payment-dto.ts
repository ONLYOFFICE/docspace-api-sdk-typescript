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
import type { ApiDateTime } from './api-date-time';

/**
 * The upcoming payment parameters.
 */
export interface UpcomingPaymentDto {
    /**
     * The quota ID.
     */
    'id'?: number;
    /**
     * The quota name.
     */
    'name'?: string | null;
    /**
     * The quota title.
     */
    'title'?: string | null;
    /**
     * The quota unit of measure.
     */
    'unitOfMeasure'?: string | null;
    /**
     * The quantity that will be charged (the next quantity if set, otherwise the current quantity).
     */
    'quantity'?: number;
    /**
     * The quota applies to the wallet or not.
     */
    'wallet'?: boolean;
    'dueDate'?: ApiDateTime;
    /**
     * The amount that will be charged (unit price multiplied by the quantity).
     */
    'amount'?: number;
    /**
     * The three-character ISO 4217 currency symbol of the amount.
     */
    'currency'?: string | null;
}

