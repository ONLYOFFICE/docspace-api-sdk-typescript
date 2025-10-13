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
import type { IpRestrictionBase } from './ip-restriction-base';

/**
 * The parameters for configuring new IP restriction settings.
 * @export
 * @interface IpRestrictionsDto
 */
export interface IpRestrictionsDto {
    /**
     * The list of IP restriction addresses.
     * @type {Array<IpRestrictionBase>}
     * @memberof IpRestrictionsDto
     */
    'ipRestrictions': Array<IpRestrictionBase> | null;
    /**
     * Specifies whether to enable IP restrictions or not.
     * @type {boolean}
     * @memberof IpRestrictionsDto
     */
    'enable'?: boolean | null;
}

