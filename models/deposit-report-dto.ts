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
import type { DepositDto } from './deposit-dto';

/**
 * One page of the portal wallet\'s top-ups, with the paging figures needed to walk the rest.
 */
export interface DepositReportDto {
    /**
     * The top-ups on this page. It is empty for a page past the end of the list as well as for a period in which  nothing was paid into the wallet.
     */
    'collection'?: Array<DepositDto> | null;
    /**
     * How many top-ups were skipped before this page, echoed from the request so a client need not remember what it  asked for.
     */
    'offset'?: number;
    /**
     * How many top-ups one page may hold, echoed from the request; it is 25 unless another value was asked for. A  full page is not proof that more exist - compare `currentPage` with `totalPage`.
     */
    'limit'?: number;
    /**
     * How many top-ups match the filters in total, across every page.
     */
    'totalQuantity'?: number;
    /**
     * How many pages those top-ups come to at the current `limit`.
     */
    'totalPage'?: number;
    /**
     * Which of those pages this one is, as the billing service numbers them. Page through by advancing `offset`  rather than this value, which nothing accepts as an argument.
     */
    'currentPage'?: number;
}

