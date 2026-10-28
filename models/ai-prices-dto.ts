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
import type { AiEntryPricingDtoAiChatPriceDto } from './ai-entry-pricing-dto-ai-chat-price-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiEntryPricingDtoAiEmbeddingPriceDto } from './ai-entry-pricing-dto-ai-embedding-price-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiEntryPricingDtoAiImagePriceDto } from './ai-entry-pricing-dto-ai-image-price-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AiEntryPricingDtoDecimal } from './ai-entry-pricing-dto-decimal';
// May contain unused imports in some cases
// @ts-ignore
import type { AiPriceCurrencyDto } from './ai-price-currency-dto';

/**
 * What the AI features cost out of the portal wallet, grouped by the kind of model, in one currency.
 */
export interface AiPricesDto {
    /**
     * The chat models on offer, each priced per million prompt and completion tokens. A model listed here is one  the installation can bill for, not necessarily one this portal may use -  `GET api/2.0/portal/payment/ai-model/restrictions` says which are allowed.
     */
    'chat': Array<AiEntryPricingDtoAiChatPriceDto> | null;
    /**
     * The embedding models on offer, priced per million tokens of input; an embedding model has no completion  side, so its price object carries `prompt` alone.
     */
    'embedding': Array<AiEntryPricingDtoAiEmbeddingPriceDto> | null;
    /**
     * The image models on offer, priced per million prompt and completion tokens plus a price for each image  produced.
     */
    'image': Array<AiEntryPricingDtoAiImagePriceDto> | null;
    /**
     * The web search providers on offer. Their `price` is a bare number - the cost of one search - rather than  an object, because there are no tokens to distinguish.
     */
    'webSearch': Array<AiEntryPricingDtoDecimal> | null;
    /**
     * The currency every price above is expressed in, with its ISO code and symbol. One answer never mixes  currencies, so this is the only place to read it.
     */
    'currency': AiPriceCurrencyDto;
}

