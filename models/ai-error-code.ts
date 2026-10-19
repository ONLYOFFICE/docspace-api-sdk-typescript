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
 * Why a field-scoped operation was refused, independent of the wording of `message`, so a host can pick an HTTP status without parsing text:  - `required` — the field is empty. - `conflict` — the value collides with an existing entry. - `not_found` — the referenced entry does not exist. - `invalid` — the value has the wrong shape or an unsupported value.
 */

export const AiErrorCode = {
    Required: 'required',
    Conflict: 'conflict',
    NotFound: 'not_found',
    Invalid: 'invalid',
} as const;

export type AiErrorCode = typeof AiErrorCode[keyof typeof AiErrorCode];



