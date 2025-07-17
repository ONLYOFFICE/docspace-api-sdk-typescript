/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { SsoCertificate } from './sso-certificate';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoFieldMapping } from './sso-field-mapping';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoIdpCertificateAdvanced } from './sso-idp-certificate-advanced';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoIdpSettings } from './sso-idp-settings';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoSpCertificateAdvanced } from './sso-sp-certificate-advanced';

/**
 * The SSO portal settings.
 * @export
 * @interface SsoSettingsV2
 */
export interface SsoSettingsV2 {
    /**
     * 
     * @type {string}
     * @memberof SsoSettingsV2
     */
    'lastModified'?: string;
    /**
     * Specifies if the SSO settings are enabled or not.
     * @type {boolean}
     * @memberof SsoSettingsV2
     */
    'enableSso'?: boolean | null;
    /**
     * 
     * @type {SsoIdpSettings}
     * @memberof SsoSettingsV2
     */
    'idpSettings'?: SsoIdpSettings;
    /**
     * The list of the IdP certificates.
     * @type {Array<SsoCertificate>}
     * @memberof SsoSettingsV2
     */
    'idpCertificates'?: Array<SsoCertificate> | null;
    /**
     * 
     * @type {SsoIdpCertificateAdvanced}
     * @memberof SsoSettingsV2
     */
    'idpCertificateAdvanced'?: SsoIdpCertificateAdvanced;
    /**
     * The SP login label.
     * @type {string}
     * @memberof SsoSettingsV2
     */
    'spLoginLabel'?: string | null;
    /**
     * The list of the SP certificates.
     * @type {Array<SsoCertificate>}
     * @memberof SsoSettingsV2
     */
    'spCertificates'?: Array<SsoCertificate> | null;
    /**
     * 
     * @type {SsoSpCertificateAdvanced}
     * @memberof SsoSettingsV2
     */
    'spCertificateAdvanced'?: SsoSpCertificateAdvanced;
    /**
     * 
     * @type {SsoFieldMapping}
     * @memberof SsoSettingsV2
     */
    'fieldMapping'?: SsoFieldMapping;
    /**
     * Specifies if the authentication page will be hidden or not.
     * @type {boolean}
     * @memberof SsoSettingsV2
     */
    'hideAuthPage'?: boolean;
    /**
     * The user type.
     * @type {number}
     * @memberof SsoSettingsV2
     */
    'usersType'?: number;
    /**
     * Specifies if the email verification is disabled or not.
     * @type {boolean}
     * @memberof SsoSettingsV2
     */
    'disableEmailVerification'?: boolean;
}

