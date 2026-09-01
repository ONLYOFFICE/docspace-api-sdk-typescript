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
import type { AiBuiltinProviderType } from './ai-builtin-provider-type';
// May contain unused imports in some cases
// @ts-ignore
import type { AiProviderType } from './ai-provider-type';

export interface AiProfilesGetById200Response {
    /**
     * Unique profile identifier (UUID).
     */
    'id': string;
    /**
     * User-defined profile display name.
     */
    'name': string;
    /**
     * Provider type for this profile. Use `external` to delegate all HTTP transport to `PlatformAdapter.externalFetch` while reusing an existing provider\'s response parser — see `Profile.basedOn` for the format selector.
     */
    'providerType': AiProviderType;
    /**
     * Selects the response-format parser used by the `external` provider. Ignored for any other `providerType`.  Supported values are `openai`, `anthropic`, `mistral` and `openrouter`. Remaining values (`genai`, `stabilityai`, …) are accepted by the type but not yet implemented; passing one raises an error at request time.
     */
    'basedOn'?: AiBuiltinProviderType;
    /**
     * Base URL of the provider API.
     */
    'baseUrl': string;
    /**
     * Selected model ID within this provider.
     */
    'modelId': string;
    /**
     * Whether extended thinking is enabled for this profile\'s model.
     */
    'reasoning'?: boolean;
    /**
     * Bitmask of capabilities supported by the selected model.
     */
    'capabilities'?: number;
    /**
     * Result of the live tool-capability probe performed at create time and on changes to `modelId` / `providerType` / `baseUrl`. `undefined` means the probe has never run for this profile (legacy record).
     */
    'canUseTool'?: boolean;
    /**
     * Result of the live Responses-API probe (parallel to `canUseTool`). `true` means the model speaks `/v1/responses` and the OpenAI provider must route through `client.responses.create` — required for gpt-5+ reasoning models that reject `reasoning_effort` together with `tools` on `/v1/chat/completions`. Probed at create time and whenever `modelId` / `providerType` / `baseUrl` change. `undefined` means the probe never ran (legacy record) — readers treat that as `false`.
     */
    'useResponsesApi'?: boolean;
    /**
     * Whether this profile uses a cloud-hosted provider (e.g. ONLYOFFICE DocSpace).
     */
    'isCloudProvider'?: boolean;
    /**
     * Route every provider request through the host\'s `fetchProxy` instead of the global `fetch`. Useful when the host runs the widget in a sandbox without direct network access (CORS, custom auth, etc.). Has no effect when the `PlatformAdapter.fetchProxy` is not configured.
     */
    'useProxy'?: boolean;
    /**
     * Creation timestamp (ms since epoch). Used to sort the AI models list newest-first.
     */
    'createdAt'?: number;
}



