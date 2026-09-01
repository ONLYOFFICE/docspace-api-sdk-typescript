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
import type { AiProviderType } from './ai-provider-type';

/**
 * AI model metadata. Describes a single model available from a provider.
 */
export interface AiModel {
    /**
     * Model identifier as used by the provider API (e.g. `gpt-4o`, `claude-sonnet-4-20250514`).
     */
    'id': string;
    /**
     * Human-readable model name for display in the UI.
     */
    'name': string;
    /**
     * Provider that offers this model.
     */
    'provider': AiProviderType;
    /**
     * Whether this model supports extended thinking / chain-of-thought reasoning.
     */
    'reasoning'?: boolean;
    /**
     * Bitmask of model capabilities (Chat, Image, Vision, Tools, etc.). Used to filter models per `ActionType`.
     */
    'capabilities'?: number;
}

