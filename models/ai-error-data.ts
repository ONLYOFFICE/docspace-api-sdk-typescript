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
import type { AiErrorCode } from './ai-error-code';

/**
 * A field-scoped validation error: which form field was rejected, and why.
 */
export interface AiErrorData {
    /**
     * The rejected field.
     */
    'field': AiErrorDataFieldEnum;
    /**
     * The human-readable reason the field was rejected.
     */
    'message': string;
    /**
     * Optional: producers that know the reason set it (the prompts engine does).
     */
    'code'?: AiErrorCode;
}

export const AiErrorDataFieldEnum = {
    Key: 'key',
    Url: 'url',
    Name: 'name',
    Text: 'text',
} as const;

export type AiErrorDataFieldEnum = typeof AiErrorDataFieldEnum[keyof typeof AiErrorDataFieldEnum];


