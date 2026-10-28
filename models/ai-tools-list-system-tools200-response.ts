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
import type { AiMCPItem } from './ai-mcpitem';

export interface AiToolsListSystemTools200Response {
    /**
     * Tools by server name, covering both the host-configured system servers and the custom MCP servers registered for this scope.
     */
    'groups': { [key: string]: Array<AiMCPItem>; };
    /**
     * Why a registered custom server could not be reached, keyed by server name. A server that answered is absent from this map.
     */
    'errors': { [key: string]: string; };
    /**
     * Names of the host-configured system servers among the keys of `groups`; everything else there was registered as a custom server.
     */
    'system': Array<string>;
}

