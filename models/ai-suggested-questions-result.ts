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
import type { AiSuggestedQuestion } from './ai-suggested-question';

/**
 * The starter questions of an attached form, and whether they are ready.
 */
export interface AiSuggestedQuestionsResult {
    /**
     * `ready` - the questions are there; `pending` - they are being generated and arrive over the socket, ask again later; `unavailable` - the attachment is not a form that can have any.
     */
    'status': AiSuggestedQuestionsResultStatusEnum;
    /**
     * The questions; empty unless `status` is `ready`.
     */
    'questions': Array<AiSuggestedQuestion>;
}

export const AiSuggestedQuestionsResultStatusEnum = {
    Ready: 'ready',
    Pending: 'pending',
    Unavailable: 'unavailable',
} as const;

export type AiSuggestedQuestionsResultStatusEnum = typeof AiSuggestedQuestionsResultStatusEnum[keyof typeof AiSuggestedQuestionsResultStatusEnum];


