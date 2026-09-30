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
import type { RecaptchaType } from './recaptcha-type';

/**
 * The message sent to the portal administrators, with the CAPTCHA proof that a person wrote it.
 */
export interface AdminMessageSettingsRequestsDto {
    /**
     * What the sender wants to tell the portal administrators. Markup is stripped before the letter is written, so  a body that carries nothing but markup counts as empty and is refused with 400.
     */
    'message': string | null;
    /**
     * The address the sender can be answered at, which the letter is signed with. It has to be a well-formed email  address.
     */
    'email': string | null;
    /**
     * The language the letter is written in, as a culture name such as `en-US`. A culture the installation does not  have falls back to the portal language rather than failing the call.
     */
    'culture'?: string | null;
    /**
     * Which CAPTCHA service the proof in `recaptchaResponse` came from. It has to match the service the  installation is configured with, which `GET api/2.0/capabilities` reports; the default value means the  installation is left to decide.
     */
    'recaptchaType'?: RecaptchaType;
    /**
     * The token the CAPTCHA widget produced in the browser, passed on unchanged for the portal to verify with the  CAPTCHA service. It is single-use and short-lived, so it cannot be reused for a second message.
     */
    'recaptchaResponse'?: string | null;
}



