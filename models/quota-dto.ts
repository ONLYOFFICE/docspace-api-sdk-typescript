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
import type { PriceDto } from './price-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantEntityQuotaSettings } from './tenant-entity-quota-settings';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantQuotaFeatureDto } from './tenant-quota-feature-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantQuotaSettings } from './tenant-quota-settings';

/**
 * The quota information.
 */
export interface QuotaDto {
    /**
     * The quota ID.
     */
    'id': number;
    /**
     * The quota title.
     */
    'title'?: string | null;
    'price': PriceDto;
    /**
     * Specifies if the quota is nonprofit or not.
     */
    'nonProfit': boolean;
    /**
     * Specifies if the quota is free or not.
     */
    'free': boolean;
    /**
     * Specifies if the quota is trial or not.
     */
    'trial': boolean;
    /**
     * The list of tenant quota features.
     */
    'features': Array<TenantQuotaFeatureDto> | null;
    'usersQuota'?: TenantEntityQuotaSettings;
    'roomsQuota'?: TenantEntityQuotaSettings;
    'aiAgentsQuota'?: TenantEntityQuotaSettings;
    'tenantCustomQuota'?: TenantQuotaSettings;
    /**
     * The due date.
     */
    'dueDate'?: string | null;
}

