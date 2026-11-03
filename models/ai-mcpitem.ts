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
import type { AiToolAnnotations } from './ai-tool-annotations';

/**
 * Descriptor for a tool exposed by an MCP server.
 */
export interface AiMCPItem {
    /**
     * Tool name as registered on the MCP server (e.g. `web_search`, `insert_text`).
     */
    'name': string;
    /**
     * Human-readable description shown to the AI model and in the tools list UI.
     */
    'description': string;
    /**
     * JSON Schema describing the tool\'s input parameters.
     */
    'inputSchema': object;
    /**
     * Whether this tool is currently enabled. Disabled tools are hidden from the AI model.
     */
    'enabled'?: boolean;
    /**
     * The server or tool group the tool belongs to (an MCP server name or a host tool group ID): the key a disabled tool is stored under, so a tool sent in `actionArgs.tools` is still matched to its group.
     */
    'serverType'?: string;
    /**
     * Whether the tool asks for approval before it runs, under the `auto` tool permission mode: `false` runs it without asking; `true` or absent leaves it to the always-allow list and the tool\'s MCP annotations (see `annotations`). Under `ask` every call asks and under `allow` none does, whatever this says. Host tools default to `false`; MCP and custom-server tools leave it unset.
     */
    'requireApproval'?: boolean;
    /**
     * The MCP tool annotations as the server declared them in `tools/list`; never sent to the model. Under the `auto` tool permission mode a tool that cannot destroy anything runs without approval - one annotated `readOnlyHint: true`, or one with an explicit `destructiveHint: false`; a destructive tool, and one with no annotations (the protocol\'s default is destructive), keeps asking.
     */
    'annotations'?: AiToolAnnotations;
}

