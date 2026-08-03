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
 * Descriptor for a tool exposed by an MCP server.
 */
export interface AiTMCPItem {
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
     * Whether the consumer must show an approval dialog before this tool runs. The engine reads it when deciding the `autoAllow` flag on a `tool-call-pending` event: `requireApproval === false` auto-allows the call (no dialog), `true` always prompts. `undefined` leaves the decision to the persisted always-allow list alone — so MCP / custom-server tools (which never set it) keep prompting as before, while host tools opt into auto-allow by default. Wire-serializable, so it survives a remote (server-side) engine.
     */
    'requireApproval'?: boolean;
}

