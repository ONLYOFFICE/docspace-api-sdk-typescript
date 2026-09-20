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
import type { CustomerServiceUsageDto } from './customer-service-usage-dto';

/**
 * One page of the per-service consumption totals, with the paging figures needed to walk the rest.
 */
export interface CustomerServiceUsageReportDto {
    /**
     * The services on this page, one entry per service rather than per charge. It is empty for a period in  which nothing was consumed as well as for a page past the end of the report.
     */
    'collection'?: Array<CustomerServiceUsageDto> | null;
    /**
     * How many entries were skipped before this page, echoed from the request.
     */
    'offset'?: number;
    /**
     * How many entries one page may hold, echoed from the request; it is 25 unless another value was asked for.
     */
    'limit'?: number;
    /**
     * How many services match the filters in total, across every page - services, not charges.
     */
    'totalQuantity'?: number;
    /**
     * How many pages those entries come to at the current `limit`.
     */
    'totalPage'?: number;
    /**
     * Which of those pages this one is, as the billing service numbers them. Page through by advancing `offset`  rather than this value, which nothing accepts as an argument.
     */
    'currentPage'?: number;
}

