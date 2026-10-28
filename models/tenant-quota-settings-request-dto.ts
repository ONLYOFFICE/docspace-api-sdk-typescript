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


/**
 * The storage limit set on one tenant of a self-hosted installation.
 */
export interface TenantQuotaSettingsRequestDto {
    /**
     * The tenant the limit applies to, by tenant ID. Only a self-hosted installation has more than one, which is  why the operation is refused on SaaS.
     */
    'tenantId': number;
    /**
     * The limit in bytes. A negative value is not a smaller limit but the absence of one: it removes whatever limit  the tenant had. The value is a ceiling on stored data and says nothing about how much of it is already used.
     */
    'quota'?: number;
}

