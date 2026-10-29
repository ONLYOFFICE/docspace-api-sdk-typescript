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
import type { AiMetaGenerate200ResponseFieldsInner } from './ai-meta-generate200-response-fields-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AiMetaGenerate200ResponseSkippedInner } from './ai-meta-generate200-response-skipped-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AiMetaGenerate200ResponseSourcesInner } from './ai-meta-generate200-response-sources-inner';

export interface AiMetaGenerate200Response {
    /**
     * The proposed custom metadata fields with the values the text supports.
     */
    'fields': Array<AiMetaGenerate200ResponseFieldsInner>;
    /**
     * The documents the proposal was read from.
     */
    'sources': Array<AiMetaGenerate200ResponseSourcesInner>;
    /**
     * The entries that were left out, with the reason for each.
     */
    'skipped': Array<AiMetaGenerate200ResponseSkippedInner>;
}

