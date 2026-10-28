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
import type { OperationTokenUsageDto } from './operation-token-usage-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OperationType } from './operation-type';

/**
 * One movement on the portal wallet: what it was for, who caused it, and how much money it moved.
 */
export interface OperationDto {
    /**
     * When the movement was booked, in the portal time zone - the same zone the `startDate` and `endDate`  filters are read in, so the two do line up here.
     */
    'date'?: ApiDateTime;
    /**
     * The wallet service the movement belongs to, by its stable key. It is what the `serviceName` filter  matches on, and it is empty for a movement that belongs to no service, such as a top-up.
     */
    'service'?: string | null;
    /**
     * A one-line summary of the movement in the portal language, already composed from the service and the  quantity - meant to be printed as it is rather than parsed.
     */
    'description'?: string | null;
    /**
     * The longer explanation of the same movement, where the service recorded one. It is empty for a movement  that has nothing to add to `description`.
     */
    'details'?: string | null;
    /**
     * What `quantity` counts for this service, in the portal language. AI consumption is reported in tokens  here rather than in the AI credits the service is sold in.
     */
    'serviceUnit'?: string | null;
    /**
     * How many units the movement covers, in the unit named by `serviceUnit`. It is `0` for a movement that  moves money without consuming a service.
     */
    'quantity'?: number;
    /**
     * The currency `credit` and `debit` are expressed in, as a three-letter ISO 4217 code. It is the accounting  currency of the wallet, which need not be the currency the subscription is priced in.
     */
    'currency'?: string | null;
    /**
     * The amount that went into the wallet. It is `0` on a movement that only took money out, so the pair of  `credit` and `debit` is what shows which way the money went; the `credit` and `debit` filters of the  operation select the two directions by exactly this.
     */
    'credit'?: number;
    /**
     * The amount that was taken out of the wallet, `0` on a movement that put money in.
     */
    'debit'?: number;
    /**
     * What the AI provider charged for the whole `quantity` of an AI tools or AI search charge, as the billing  service recorded it - the provider\'s side of the same operation `debit` bills the portal for. It is `null`  on any other movement, and on an AI charge recorded without a provider cost.
     */
    'cost'?: number | null;
    /**
     * Who caused the movement, as the billing service records them - an internal name, which is what the  `participantName` filter matches on. Show `participantDisplayName` instead.
     */
    'participantName'?: string | null;
    /**
     * The same person as their portal display name. It falls back to `participantName` when the name belongs to  no portal account, so it is never empty while `participantName` is filled.
     */
    'participantDisplayName'?: string | null;
    /**
     * What kind of thing an AI operation was run on - an agent, a file, a folder, a room or a form. It is empty  on any movement that is not an AI charge.
     */
    'sourceType'?: string | null;
    /**
     * The title that thing had when the operation ran, kept as recorded, so it does not follow a later rename.  Empty under the same conditions as `sourceType`.
     */
    'sourceTitle'?: string | null;
    /**
     * The identifier of that thing, to look it up in the module it belongs to. Empty under the same conditions  as `sourceType`.
     */
    'sourceId'?: string | null;
    /**
     * The tokens an AI operation consumed, broken down by kind - prompt, completion, cache reads and writes,  reasoning, images. It is `null` on any movement that is not an AI charge, and on an AI charge the billing  service recorded without token counts.
     */
    'tokenUsage'?: OperationTokenUsageDto;
    /**
     * What kind of movement this is - a payment, a charge, a refund, a correction. It is what the `type` filter  matches on, and `Unknown` covers a movement the billing service reported under a kind this build does not  recognise.
     */
    'type'?: OperationType;
}



