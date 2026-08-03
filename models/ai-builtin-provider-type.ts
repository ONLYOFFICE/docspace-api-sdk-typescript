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
 * Union of all 17 built-in AI provider type identifiers.  The `external` provider has no built-in transport — it delegates every HTTP request to `PlatformAdapter.externalFetch` and parses the response with the inner provider selected by `Profile.basedOn`.
 */

export const AiBuiltinProviderType = {
    Anthropic: 'anthropic',
    Ollama: 'ollama',
    Openai: 'openai',
    Openaicompatible: 'openaicompatible',
    Together: 'together',
    Openrouter: 'openrouter',
    Genai: 'genai',
    Deepseek: 'deepseek',
    Xai: 'xai',
    LmStudio: 'lm-studio',
    Mistral: 'mistral',
    Groq: 'groq',
    Zhipu: 'zhipu',
    Stabilityai: 'stabilityai',
    Gpt4all: 'gpt4all',
    Onlyoffice: 'onlyoffice',
    External: 'external',
} as const;

export type AiBuiltinProviderType = typeof AiBuiltinProviderType[keyof typeof AiBuiltinProviderType];



