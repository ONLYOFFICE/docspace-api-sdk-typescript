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
// May contain unused imports in some cases
// @ts-ignore
import type { OperationStatus } from './operation-status';

/**
 * One payment into the portal wallet: when it was made, how much it brought in, how it ended, and whether an  invoice stands behind it.
 */
export interface DepositDto {
    /**
     * The identifier of the top-up, which is what `GET api/2.0/portal/payment/customer/deposits/{id}/invoice` takes  to read its invoice.
     */
    'id'?: number;
    /**
     * When the top-up was booked, as an ISO 8601 timestamp that carries its own offset: that of the portal\'s time  zone, written as `Z` for a portal in UTC - the zone in which `startDate` and `endDate` without an offset are  read.
     */
    'date'?: ApiDateTime;
    /**
     * The amount that went into the wallet, in `currency`.
     */
    'amount'?: number;
    /**
     * The currency `amount` is expressed in, as a three-letter ISO 4217 code - the accounting currency of the  wallet.
     */
    'currency'?: string | null;
    /**
     * How the top-up ended. A pending one is still being settled and may change later, so only a completed one has  actually raised the balance.
     */
    'status'?: OperationStatus;
    /**
     * Whether the billing provider holds an invoice for the payment behind the top-up, which is when  `GET api/2.0/portal/payment/customer/deposits/{id}/invoice` can open it. It is `false` for a top-up whose  payment came without one, and asking for its invoice then fails with 404.
     */
    'hasInvoice'?: boolean;
}



