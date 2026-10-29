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
import type { AiMetaGenerateRequestId } from './ai-meta-generate-request-id';

export interface AiMetaFillRequest {
    /**
     * The entry\'s table. Only `file` for now: a folder or a room answers 400.
     */
    'kind': AiMetaFillRequestKindEnum;
    'id': AiMetaGenerateRequestId;
    /**
     * What to pay attention to; a hint for the model.
     */
    'prompt'?: string;
    /**
     * Also replace the fields that already carry a value. Default false.
     */
    'overwrite'?: boolean;
    /**
     * Resolve the values but write nothing; the caller writes what the user confirms. Default true: a write needs an explicit false.
     */
    'dryRun'?: boolean;
}

export const AiMetaFillRequestKindEnum = {
    File: 'file',
} as const;

export type AiMetaFillRequestKindEnum = typeof AiMetaFillRequestKindEnum[keyof typeof AiMetaFillRequestKindEnum];


