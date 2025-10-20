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
import type { TenantTrustedDomainsType } from './tenant-trusted-domains-type';

/**
 * The request parameters for configuring trusted mail domains and visitor invitation settings.
 * @export
 * @interface MailDomainSettingsRequestsDto
 */
export interface MailDomainSettingsRequestsDto {
    /**
     * 
     * @type {TenantTrustedDomainsType}
     * @memberof MailDomainSettingsRequestsDto
     */
    'type': TenantTrustedDomainsType;
    /**
     * The list of authorized email domains that are considered trusted.
     * @type {Array<string>}
     * @memberof MailDomainSettingsRequestsDto
     */
    'domains': Array<string> | null;
    /**
     * Specifies the default permission level for the invited users (visitors or not).
     * @type {boolean}
     * @memberof MailDomainSettingsRequestsDto
     */
    'inviteUsersAsVisitors': boolean;
}



