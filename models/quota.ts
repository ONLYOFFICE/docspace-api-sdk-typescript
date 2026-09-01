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
import type { QuotaState } from './quota-state';

/**
 * The quota parameters.  <example>  {    id: 1,    quantity: 50,    wallet: false,    additional: false,    dueDate: 2026-03-31T00:00:00Z,    nextQuantity: 100,    state: Active  }  </example>
 */
export interface Quota {
    /**
     * The quota ID.
     */
    'id'?: number;
    /**
     * The quota quantity.
     */
    'quantity'?: number;
    /**
     * The quota applies to the wallet or not
     */
    'wallet'?: boolean;
    /**
     * The quota due date.
     */
    'dueDate'?: string | null;
    /**
     * The quota next quantity.
     */
    'nextQuantity'?: number | null;
    /**
     * Indicates whether the quota is primary or additional.
     */
    'additional'?: boolean;
    /**
     * The quota ID to switch to at the next period.
     */
    'nextQuota'?: number | null;
    /**
     * The quota state.
     */
    'state'?: QuotaState;
}



