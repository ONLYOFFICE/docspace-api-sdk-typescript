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
import type { NewAiProviderType } from './new-ai-provider-type';

/**
 * Minimal provider connection configuration. Used to connect to a provider API.
 */
export interface NewAiTProvider {
    'type': NewAiProviderType;
    /**
     * User-defined display name for this provider connection.
     */
    'name': string;
    /**
     * API key or token. Optional for local providers (Ollama, LM Studio).
     */
    'key'?: string;
    /**
     * Base URL of the provider API.
     */
    'baseUrl': string;
}

