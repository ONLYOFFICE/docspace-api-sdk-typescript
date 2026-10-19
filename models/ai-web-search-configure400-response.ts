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
import type { AiErrorResponse } from './ai-error-response';
// May contain unused imports in some cases
// @ts-ignore
import type { AiWebSearchConfig } from './ai-web-search-config';
// May contain unused imports in some cases
// @ts-ignore
import type { AiWebSearchMutationResult } from './ai-web-search-mutation-result';

export interface AiWebSearchConfigure400Response {
    /**
     * True when the configuration was persisted.
     */
    'success': boolean;
    /**
     * The persisted web-search configuration. Present on success.
     */
    'config'?: AiWebSearchConfig;
    /**
     * The error message, ready to be shown to the caller.
     */
    'error': string;
}

