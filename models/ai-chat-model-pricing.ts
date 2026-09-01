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

/**
 * The pricing of a single chat model.
 */
export interface AiChatModelPricing {
    /**
     * The identifier of the model, as the provider expects it on the wire.
     */
    'id': string | null;
    /**
     * The display name of the model.
     */
    'alias'?: string | null;
    /**
     * The owner of the model, as reported by the provider.
     */
    'ownedBy'?: string | null;
    /**
     * The provider that serves the model.
     */
    'provider'?: string | null;
    /**
     * The link to the pricing page of the model.
     */
    'link'?: string | null;
    /**
     * The price of a chat model, per token.
     */
    'price': AiChatPrice;
}

