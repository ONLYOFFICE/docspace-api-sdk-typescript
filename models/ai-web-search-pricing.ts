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
 * The pricing of a single web search provider, per request.
 */
export interface AiWebSearchPricing {
    /**
     * The identifier of the web search provider.
     */
    'id'?: string | null;
    /**
     * The provider that serves the web search requests.
     */
    'provider'?: string | null;
    /**
     * The price of a single web search request.
     */
    'price'?: number;
    /**
     * The link to the pricing page of the provider.
     */
    'link'?: string | null;
}

