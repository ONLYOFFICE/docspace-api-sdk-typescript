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
import type { DocsCloudIpFilterConfigDto } from './docs-cloud-ip-filter-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudSecurityConfigDto } from './docs-cloud-security-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudServerConfigDto } from './docs-cloud-server-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DocsCloudWopiConfigDto } from './docs-cloud-wopi-config-dto';

/**
 * Represents the configuration of a Docs Connect tenant.
 */
export interface DocsCloudConfigDto {
    /**
     * The tenant name.
     */
    'tenantName'?: string | null;
    /**
     * The security configuration.
     */
    'security'?: DocsCloudSecurityConfigDto;
    /**
     * The server configuration.
     */
    'server'?: DocsCloudServerConfigDto;
    /**
     * The WOPI configuration.
     */
    'wopi'?: DocsCloudWopiConfigDto;
    /**
     * The IP filter configuration.
     */
    'ipFilter'?: DocsCloudIpFilterConfigDto;
}

