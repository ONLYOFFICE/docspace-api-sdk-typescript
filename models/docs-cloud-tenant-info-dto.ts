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
import type { DocsCloudLicenseInfoDto } from './docs-cloud-license-info-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudServerInfoDto } from './docs-cloud-server-info-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudStatsDto } from './docs-cloud-stats-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudUsersLimitDto } from './docs-cloud-users-limit-dto';

/**
 * Represents the license and server information of a Docs Connect tenant, with usage statistics for the current period.
 */
export interface DocsCloudTenantInfoDto {
    /**
     * The license information.
     */
    'license'?: DocsCloudLicenseInfoDto;
    /**
     * The Docs Connect server information.
     */
    'server'?: DocsCloudServerInfoDto;
    /**
     * The user limits of the license.
     */
    'usersLimit'?: DocsCloudUsersLimitDto;
    /**
     * The usage statistics for the current period.
     */
    'stats'?: DocsCloudStatsDto;
}

