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
import type { AiChatModelPricing } from './ai-chat-model-pricing';
// May contain unused imports in some cases
// @ts-ignore
import type { AiEmbeddingModelPricing } from './ai-embedding-model-pricing';
// May contain unused imports in some cases
// @ts-ignore
import type { AiImageModelPricing } from './ai-image-model-pricing';
// May contain unused imports in some cases
// @ts-ignore
import type { AiWebSearchPricing } from './ai-web-search-pricing';
// May contain unused imports in some cases
// @ts-ignore
import type { CurrencyInfo } from './currency-info';

/**
 * The AI price list: per-model pricing for every model kind, in a single currency.
 */
export interface AiPricesResponse {
    /**
     * The pricing of every available chat model.
     */
    'chat': Array<AiChatModelPricing> | null;
    /**
     * The pricing of every available embedding model.
     */
    'embedding': Array<AiEmbeddingModelPricing> | null;
    /**
     * The pricing of every available image model.
     */
    'image': Array<AiImageModelPricing> | null;
    /**
     * The pricing of every available web search provider.
     */
    'search': Array<AiWebSearchPricing> | null;
    /**
     * The currency the AI prices are quoted in.
     */
    'currency': CurrencyInfo;
}

