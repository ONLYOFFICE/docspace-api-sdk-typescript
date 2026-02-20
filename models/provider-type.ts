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
 * [0 - PortalAi, 1 - OpenAi, 2 - TogetherAi, 3 - OpenAiCompatible, 4 - Anthropic, 5 - OpenRouter, 6 - DeepSeek, 7 - XAi, 8 - GoogleAi]
 */

export const ProviderType = {
    PortalAi: 0,
    OpenAi: 1,
    TogetherAi: 2,
    OpenAiCompatible: 3,
    Anthropic: 4,
    OpenRouter: 5,
    DeepSeek: 6,
    XAi: 7,
    GoogleAi: 8
} as const;

export type ProviderType = typeof ProviderType[keyof typeof ProviderType];



