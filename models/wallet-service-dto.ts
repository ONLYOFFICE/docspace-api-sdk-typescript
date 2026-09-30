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
import type { QuotaDto } from './quota-dto';
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
 * @type WalletServiceDto
 * One service the portal can pay for out of its wallet: a quota sold per unit rather than per period.
 * @export
 */
export type WalletServiceDto = QuotaDto &  {
    /**
     * The variants of this service that are folded into it, so a client renders one card per group instead of  one per variant. It is empty when the service has no variants, and always empty in the answer of  `GET api/2.0/portal/payment/walletservice`, which looks one service up on its own.
     * @type {Array<WalletServiceDto>}
     * @memberof WalletServiceDto
     */
    'innerServices'?: Array<WalletServiceDto> | null;
    /**
     * The stable key of the service, which is what the wallet operations take as their `service` argument and  what the usage reports key their entries by.
     * @type {string}
     * @memberof WalletServiceDto
     */
    'serviceName'?: string | null;
};


