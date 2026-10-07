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
     * Server type (MCP server name / host tool group id) this tool belongs to — the key the persisted disabled map is stored under. Set by the source that enumerated the tool, so a caller-supplied tool can still be attributed to its group after being flattened into a single list: that is what lets the engine apply the disabled map to `actionArgs.tools` instead of trusting the caller to pre-filter. Wire-serializable, so it survives a remote (server-side) engine.
     */
    'serverType'?: string;
    /**
     * Whether the consumer must show an approval dialog before this tool runs. Feeds the `autoAllow` flag on a `tool-call-pending` event together with the user\'s tool permission mode: `false` skips the dialog under the auto mode, the default (under ask only the persisted always-allow list does), `true` and `undefined` defer to that list; allow skips it for every tool. Host tools set it and default to `false`; MCP / custom-server tools leave it unset. Wire-serializable, so it survives a remote (server-side) engine.
     */
    'requireApproval'?: boolean;
    /**
     * The MCP tool annotations as the server declared them in `tools/list` (kept verbatim on the descriptor; never sent to the model). The approval flow reads two of them under the auto permission mode: `readOnlyHint: true` and `destructiveHint: false` run without the dialog, a destructive or unannotated tool keeps asking — see `resolveAutoAllow`. Wire-serializable.
     */
    'annotations'?: AiToolAnnotations;
}

