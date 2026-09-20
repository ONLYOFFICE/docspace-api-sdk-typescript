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
import type { TenantWalletService } from './tenant-wallet-service';

/**
 * Which wallet service is switched, and which way.
 */
export interface ChangeWalletServiceStateRequestDto {
    /**
     * The service being switched, given by its catalogue name. Switching it on only makes it available to the  portal; its units are still bought with `PUT api/2.0/portal/payment/updatewallet`.
     */
    'service'?: TenantWalletService;
    /**
     * Which way the service is switched: `true` makes it available to the portal, `false` withdraws it. Setting the  state the service already has changes nothing.
     */
    'enabled'?: boolean;
}



