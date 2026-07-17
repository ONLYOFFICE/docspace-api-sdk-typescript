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
import type { ModelSettingsItemDto } from './model-settings-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { ProviderType } from './provider-type';

/**
 * Request parameters for creating a new AI provider.
 */
export interface CreateProviderRequestDto {
    'type'?: ProviderType;
    /**
     * The display title for the AI provider.
     */
    'title': string | null;
    /**
     * The API endpoint URL for the AI provider. Required for OpenAiCompatible type; optional for other types that have default URLs.
     */
    'url'?: string | null;
    /**
     * The authentication API key for the AI provider.
     */
    'key': string | null;
    /**
     * Optional list of model settings to configure atomically with the provider creation.
     */
    'modelSettings'?: Set<ModelSettingsItemDto> | null;
}



