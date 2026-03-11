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
import type { ConfirmData } from './confirm-data';
// May contain unused imports in some cases
// @ts-ignore
import type { RecaptchaType } from './recaptcha-type';

/**
 * The parameters required for the user authentication requests.
 */
export interface AuthRequestsDto {
    /**
     * The username or email used for authentication.
     */
    'userName'?: string | null;
    /**
     * The password in plain text for user authentication.
     */
    'password'?: string | null;
    /**
     * The hashed password for secure verification.
     */
    'passwordHash'?: string | null;
    /**
     * The type of authentication provider (e.g., internal, Google, Azure).
     */
    'provider'?: string | null;
    /**
     * The access token used for authentication with external providers.
     */
    'accessToken'?: string | null;
    /**
     * The serialized user profile data, if applicable.
     */
    'serializedProfile'?: string | null;
    /**
     * The authorization code used for obtaining OAuth tokens.
     */
    'codeOAuth'?: string | null;
    /**
     * Specifies whether the authentication is session-based.
     */
    'session'?: boolean;
    'confirmData'?: ConfirmData;
    'recaptchaType'?: RecaptchaType;
    /**
     * The user\'s response to the CAPTCHA challenge.
     */
    'recaptchaResponse'?: string | null;
    /**
     * The culture code for localization during authentication.
     */
    'culture'?: string | null;
}



