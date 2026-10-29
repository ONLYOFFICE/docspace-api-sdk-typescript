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
import type { AiEntryMetadata } from './ai-entry-metadata';
// May contain unused imports in some cases
// @ts-ignore
import type { AiMetaFill200ResponseFilledInner } from './ai-meta-fill200-response-filled-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AiMetaFill200ResponseSourcesInner } from './ai-meta-fill200-response-sources-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AiMetaFill200ResponseUnresolvedInner } from './ai-meta-fill200-response-unresolved-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AiMetaGenerate200ResponseSkippedInner } from './ai-meta-generate200-response-skipped-inner';

export interface AiMetaFill200Response {
    /**
     * Whether the values were only proposed (`true`) or written as well.
     */
    'dryRun': boolean;
    /**
     * The entry\'s metadata after the write (or as it stands, with `dryRun`), as `GET api/2.0/files/metadata/{kind}/{id}` returns it.
     */
    'metadata': AiEntryMetadata;
    /**
     * The values written, or proposed with `dryRun`: a typed value for a template field, a string for a custom field.
     */
    'filled': Array<AiMetaFill200ResponseFilledInner>;
    /**
     * The fields left as they were, with the reason for each.
     */
    'unresolved': Array<AiMetaFill200ResponseUnresolvedInner>;
    /**
     * The documents the values were read from.
     */
    'sources': Array<AiMetaFill200ResponseSourcesInner>;
    /**
     * The entries that were left out, with the reason for each.
     */
    'skipped': Array<AiMetaGenerate200ResponseSkippedInner>;
}

