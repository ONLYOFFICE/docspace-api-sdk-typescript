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
import type { AuthRequestDto } from './auth-request-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { ConfirmData } from './confirm-data';
// May contain unused imports in some cases
// @ts-ignore
import type { RecaptchaType } from './recaptcha-type';

/**
 * @type AuthWithCodeRequestDto
 * The same credentials as an ordinary sign-in, plus the one-time code that completes it.
 * @export
 */
export type AuthWithCodeRequestDto = AuthRequestDto &  {
    /**
     * The one-time code from the SMS the portal sent or from the authenticator app, whichever second factor the  portal has enabled for this user. It is single-use and expires; a wrong, empty or expired value fails the  sign-in and counts against the brute-force limit.
     * @type {string}
     * @memberof AuthWithCodeRequestDto
     */
    'code'?: string | null;
};


