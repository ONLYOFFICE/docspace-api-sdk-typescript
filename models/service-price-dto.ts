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
import type { DiscountCategoryDto } from './discount-category-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { PriceStatus } from './price-status';
// May contain unused imports in some cases
// @ts-ignore
import type { PriceTimeUnit } from './price-time-unit';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeBoundDto } from './time-bound-dto';

/**
 * Represents a price of the service.
 */
export interface ServicePriceDto {
    /**
     * The price unique identifier.
     */
    'id'?: number;
    /**
     * The account number.
     */
    'accountNumber'?: number;
    /**
     * The service ID.
     */
    'serviceId'?: number;
    /**
     * The time unit the price is bound to.
     */
    'timeUnit'?: PriceTimeUnit;
    /**
     * The cost price.
     */
    'costPrice'?: number;
    /**
     * The extra charge added to the cost price.
     */
    'extraCharge'?: number;
    /**
     * The resulting service price.
     */
    'servicePrice'?: number;
    /**
     * The quota the price is set for.
     */
    'quota'?: number | null;
    /**
     * The period the price is effective in.
     */
    'timeBound'?: TimeBoundDto;
    /**
     * The price status.
     */
    'status'?: PriceStatus;
    /**
     * The date and time when the price was created.
     */
    'created'?: string;
    /**
     * The discount category ID.
     */
    'discountCategoryId'?: number | null;
    /**
     * The discount category.
     */
    'discountCategory'?: DiscountCategoryDto;
}



