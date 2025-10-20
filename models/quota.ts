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
import type { QuotaState } from './quota-state';

/**
 * The quota parameters.
 * @export
 * @interface Quota
 */
export interface Quota {
    /**
     * The quota ID.
     * @type {number}
     * @memberof Quota
     */
    'id'?: number;
    /**
     * The quota quantity.
     * @type {number}
     * @memberof Quota
     */
    'quantity'?: number;
    /**
     * The quota applies to the wallet or not
     * @type {boolean}
     * @memberof Quota
     */
    'wallet'?: boolean;
    /**
     * The quota due date.
     * @type {string}
     * @memberof Quota
     */
    'dueDate'?: string | null;
    /**
     * The quota next quantity.
     * @type {number}
     * @memberof Quota
     */
    'nextQuantity'?: number | null;
    /**
     * 
     * @type {QuotaState}
     * @memberof Quota
     */
    'state'?: QuotaState;
}



