// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

// May contain unused imports in some cases
// @ts-ignore
import type { ConfirmData } from './confirm-data';
// May contain unused imports in some cases
// @ts-ignore
import type { RecaptchaType } from './recaptcha-type';

/**
 * The parameters required for the user authentication requests.
 * @export
 * @interface AuthRequestsDto
 */
export interface AuthRequestsDto {
    /**
     * The username or email used for authentication.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'userName'?: string | null;
    /**
     * The password in plain text for user authentication.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'password'?: string | null;
    /**
     * The hashed password for secure verification.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'passwordHash'?: string | null;
    /**
     * The type of authentication provider (e.g., internal, Google, Azure).
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'provider'?: string | null;
    /**
     * The access token used for authentication with external providers.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'accessToken'?: string | null;
    /**
     * The serialized user profile data, if applicable.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'serializedProfile'?: string | null;
    /**
     * The code for two-factor authentication.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'code'?: string | null;
    /**
     * The authorization code used for obtaining OAuth tokens.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'codeOAuth'?: string | null;
    /**
     * Specifies whether the authentication is session-based.
     * @type {boolean}
     * @memberof AuthRequestsDto
     */
    'session'?: boolean;
    /**
     * 
     * @type {ConfirmData}
     * @memberof AuthRequestsDto
     */
    'confirmData'?: ConfirmData;
    /**
     * 
     * @type {RecaptchaType}
     * @memberof AuthRequestsDto
     */
    'recaptchaType'?: RecaptchaType;
    /**
     * The user\'s response to the CAPTCHA challenge.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'recaptchaResponse'?: string | null;
    /**
     * The culture code for localization during authentication.
     * @type {string}
     * @memberof AuthRequestsDto
     */
    'culture'?: string | null;
}



