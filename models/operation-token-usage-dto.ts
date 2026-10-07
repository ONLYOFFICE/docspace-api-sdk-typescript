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
 * Tokens an AI operation consumed, as recorded in the operation metadata. A kind the provider did not report is `0`.
 */
export interface OperationTokenUsageDto {
    /**
     * All tokens of the request: prompt plus completion.
     */
    'totalTokens'?: number;
    /**
     * Tokens sent to the model, cached ones included.
     */
    'promptTokens'?: number;
    /**
     * Tokens the model generated, reasoning ones included.
     */
    'completionTokens'?: number;
    /**
     * Part of the prompt tokens read from the provider cache.
     */
    'cachedTokens'?: number;
    /**
     * Part of the prompt tokens written to the provider cache.
     */
    'cacheWriteTokens'?: number;
    /**
     * Part of the completion tokens the model spent on reasoning.
     */
    'reasoningTokens'?: number;
    /**
     * Tokens spent on images.
     */
    'imageTokens'?: number;
}

