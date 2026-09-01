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
import type { DocsCloudLicenseInfo } from './docs-cloud-license-info';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudServerInfo } from './docs-cloud-server-info';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudStats } from './docs-cloud-stats';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudUsersLimit } from './docs-cloud-users-limit';

/**
 * Represents the license and server information of a DocsCloud tenant, with usage statistics for the current period.
 */
export interface DocsCloudTenantInfo {
    /**
     * The license information.
     */
    'license'?: DocsCloudLicenseInfo;
    /**
     * The DocsCloud server information.
     */
    'server'?: DocsCloudServerInfo;
    /**
     * The user limits of the license.
     */
    'usersLimit'?: DocsCloudUsersLimit;
    /**
     * The usage statistics for the current period.
     */
    'stats'?: DocsCloudStats;
}

