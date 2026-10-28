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
 * One charge the portal is going to be billed for at the start of the next period.
 */
export interface UpcomingPaymentDto {
    /**
     * The quota that is going to be charged. When a switch to another quota is scheduled, this is the quota  being switched to, so it can differ from what `GET api/2.0/portal/tariff` reports for today.
     */
    'id'?: number;
    /**
     * The quota\'s stable key, which is the same identifier the wallet operations use for a service.
     */
    'name'?: string | null;
    /**
     * The quota name in the portal language, meant to be printed on an invoice preview.
     */
    'title'?: string | null;
    /**
     * What `quantity` counts, in the portal language - seats, administrators, gigabytes. It is empty for a quota  that is simply on or off.
     */
    'unitOfMeasure'?: string | null;
    /**
     * How much is going to be charged for, which is the quantity scheduled for the next period when one has been  scheduled and today\'s quantity otherwise.
     */
    'quantity'?: number;
    /**
     * Whether the charge is paid out of the portal wallet rather than from the subscription.
     */
    'wallet'?: boolean;
    /**
     * When the charge falls due, in the portal time zone.
     */
    'dueDate'?: ApiDateTime;
    /**
     * What the charge comes to: the unit price of the quota multiplied by `quantity`. Taxes are not part of it,  and a quota with no price of its own is not listed at all rather than listed with a zero.
     */
    'amount'?: number;
    /**
     * The currency `amount` is expressed in, as a three-letter ISO 4217 code. It follows the portal\'s billing  account, so every entry of one answer carries the same code.
     */
    'currency'?: string | null;
}

