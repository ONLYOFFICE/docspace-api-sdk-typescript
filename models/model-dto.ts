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
import type { AiChatPrice } from './ai-chat-price';
// May contain unused imports in some cases
// @ts-ignore
import type { AiModelCapabilities } from './ai-model-capabilities';
// May contain unused imports in some cases
// @ts-ignore
import type { CurrencyInfo } from './currency-info';

/**
 * The AI model information.
 */
export interface ModelDto {
    /**
     * The unique identifier of the AI provider that offers this model.
     */
    'providerId'?: number;
    /**
     * The human-readable display name of the AI provider (e.g., OpenAI, Anthropic).
     */
    'providerTitle': string | null;
    /**
     * The model identifier as recognized by the AI provider (e.g., gpt-4o, claude-sonnet-4-20250514).
     */
    'modelId': string | null;
    /**
     * The display name for the model.
     */
    'alias'?: string | null;
    'capabilities'?: AiModelCapabilities;
    'price'?: AiChatPrice;
    'currency'?: CurrencyInfo;
}

