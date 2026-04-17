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
 * [0 - None, 1 - OpenAi, 2 - OpenRouter, 3 - PortalAi]
 */

export const EmbeddingProviderType = {
    None: 0,
    OpenAi: 1,
    OpenRouter: 2,
    PortalAi: 3,
} as const;

export type EmbeddingProviderType = typeof EmbeddingProviderType[keyof typeof EmbeddingProviderType];



