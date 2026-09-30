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
import type { OperationOrderType } from './operation-order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { OperationStatus } from './operation-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OperationType } from './operation-type';

/**
 * The filters that select which wallet movements are reported: the services, the period, the participant, the  direction and the outcome of the movement, and the ordering.
 */
export interface CustomerOperationsReportRequestDto {
    /**
     * The wallet services whose movements are kept, named the way the billing catalogue names them - `backup`,  `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field of  `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not sell  fails the call with 404, and an omitted list keeps every service. A bare string is accepted in place of an  array for backward compatibility.
     */
    'serviceName'?: Array<string> | null;
    /**
     * The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, so a  movement at the edge of the period falls where the portal sees it; defaults to the portal creation date.
     */
    'startDate'?: string | null;
    /**
     * The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to  the moment the call is made.
     */
    'endDate'?: string | null;
    /**
     * The participant whose movements are kept - the account the accounting service records as the cause of a  movement. A movement caused by a portal user carries that user ID here, and one caused by the portal itself  carries the customer name; surrounding whitespace is trimmed, and an omitted value keeps every participant.
     */
    'participantName'?: string | null;
    /**
     * Whether movements that add money to the wallet - top-ups, refunds and corrections in the portal\'s favour -  are kept. Both directions are reported when neither this nor `debit` is given.
     */
    'credit'?: boolean | null;
    /**
     * Whether movements that take money out of the wallet - the charges of the wallet services - are kept. Both  directions are reported when neither this nor `credit` is given.
     */
    'debit'?: boolean | null;
    /**
     * The kind of movement to keep, which says what caused the money to move rather than how it ended. Every kind  is reported when it is omitted.
     */
    'type'?: OperationType;
    /**
     * The outcome to keep. A movement that is still being settled is reported as pending and may change later,  while the other outcomes are final; every outcome is reported when this is omitted.
     */
    'status'?: OperationStatus;
    /**
     * The name of the field the movements are sorted by, spelled as the accounting service names it, such as  `StartDate` or `ServiceName`. Surrounding whitespace is trimmed, and the accounting service applies its own  ordering when this is omitted.
     */
    'orderBy'?: string | null;
    /**
     * The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting  service does by default, so leaving this out sorts the same way as asking for descending explicitly.
     */
    'orderType'?: OperationOrderType;
}



