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
import type { AiModelCapabilities } from './ai-model-capabilities';

/**
 * A single model settings entry within a provider create or update request.
 */
export interface ModelSettingsItemDto {
    /**
     * The model identifier.
     */
    'modelId': string;
    /**
     * Whether the model is enabled for use in chat.
     */
    'isEnabled'?: boolean;
    /**
     * The display name for the model. Only applies to non-recommended models.
     */
    'alias'?: string | null;
    'capabilities'?: AiModelCapabilities;
}

