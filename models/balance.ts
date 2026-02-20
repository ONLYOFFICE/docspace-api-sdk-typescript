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
import type { SubAccount } from './sub-account';

/**
 * Represents a balance with an account number and a list of sub-accounts.
 */
export interface Balance {
    /**
     * The account number.
     */
    'accountNumber'?: number;
    /**
     * A list of sub-accounts.
     */
    'subAccounts'?: Array<SubAccount> | null;
}

