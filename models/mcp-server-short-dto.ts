/* tslint:disable */
/* eslint-disable */
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
import type { Icon } from './icon';
// May contain unused imports in some cases
// @ts-ignore
import type { ServerType } from './server-type';

/**
 * Compact MCP server summary without sensitive details like endpoint URL or authentication headers.
 */
export interface McpServerShortDto {
    /**
     * Unique identifier of the MCP server.
     */
    'id'?: string;
    /**
     * Display name of the MCP server.
     */
    'name'?: string | null;
    'serverType'?: ServerType;
    /**
     * Indicates whether the server is currently enabled and available for room assignment.
     */
    'enabled'?: boolean;
    'icon'?: Icon;
    /**
     * Indicates whether the server requires a configuration reset due to connectivity or credential issues.
     */
    'needReset'?: boolean;
}



