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
import type { ServiceLimitDto } from './service-limit-dto';

/**
 * A page of the spending limits in force for the portal users.
 */
export interface ServiceLimitReportDto {
    /**
     * The limits of this page, one per user; empty when no limit applies to any user or the page is past the end.
     */
    'collection'?: Array<ServiceLimitDto> | null;
    /**
     * The number of limits skipped before this page.
     */
    'offset'?: number;
    /**
     * The page size the page was read with.
     */
    'limit'?: number;
    /**
     * The number of pages the whole list takes at this page size.
     */
    'totalPage'?: number;
    /**
     * The number of this page, starting from 1.
     */
    'currentPage'?: number;
    /**
     * The number of users with a limit in force across all pages.
     */
    'totalQuantity'?: number;
}

