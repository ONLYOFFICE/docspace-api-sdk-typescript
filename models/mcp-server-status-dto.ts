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
 * MCP server status within a room, reflecting the current user\'s connection state for OAuth-based servers.
 */
export interface McpServerStatusDto {
    /**
     * Unique identifier of the MCP server.
     */
    'id'?: string;
    /**
     * Display name of the MCP server.
     */
    'name': string;
    'serverType'?: ServerType;
    /**
     * Indicates whether the current user has an active connection to this server. For direct-connection servers this is always true; for OAuth-based servers it reflects whether the user has completed authorization.
     */
    'connected'?: boolean;
    'icon'?: Icon;
    /**
     * Indicates whether the server requires a configuration reset due to connectivity or credential issues.
     */
    'needReset'?: boolean;
}



