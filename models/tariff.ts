/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { Quota } from './quota';
// May contain unused imports in some cases
// @ts-ignore
import type { TariffState } from './tariff-state';

/**
 * The tariff parameters.
 * @export
 * @interface Tariff
 */
export interface Tariff {
    /**
     * The tariff ID.
     * @type {number}
     * @memberof Tariff
     */
    'id'?: number;
    /**
     * 
     * @type {TariffState}
     * @memberof Tariff
     */
    'state'?: TariffState;
    /**
     * The tariff due date.
     * @type {string}
     * @memberof Tariff
     */
    'dueDate'?: string;
    /**
     * The tariff delay due date.
     * @type {string}
     * @memberof Tariff
     */
    'delayDueDate'?: string;
    /**
     * The tariff license date.
     * @type {string}
     * @memberof Tariff
     */
    'licenseDate'?: string;
    /**
     * The tariff customer ID.
     * @type {string}
     * @memberof Tariff
     */
    'customerId'?: string | null;
    /**
     * The list of tariff quotas.
     * @type {Array<Quota>}
     * @memberof Tariff
     */
    'quotas'?: Array<Quota> | null;
    /**
     * The list of overdue tariff quotas.
     * @type {Array<Quota>}
     * @memberof Tariff
     */
    'overdueQuotas'?: Array<Quota> | null;
}



