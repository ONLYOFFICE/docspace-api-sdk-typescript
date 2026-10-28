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
import type { SsoCertificateDto } from './sso-certificate-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoFieldMappingDto } from './sso-field-mapping-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoIdpCertificateAdvancedDto } from './sso-idp-certificate-advanced-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoIdpSettingsDto } from './sso-idp-settings-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoSpCertificateAdvancedDto } from './sso-sp-certificate-advanced-dto';

/**
 * The SAML single sign-on configuration of the portal.
 */
export interface SsoSettingsDto {
    /**
     * The timestamp indicating when the settings were last modified.
     */
    'lastModified'?: string;
    /**
     * Specifies if the SSO settings are enabled or not.
     */
    'enableSso'?: boolean | null;
    /**
     * The SSO IdP settings.
     */
    'idpSettings'?: SsoIdpSettingsDto;
    /**
     * The list of the IdP certificates.
     */
    'idpCertificates'?: Array<SsoCertificateDto> | null;
    /**
     * The IdP advanced certificate.
     */
    'idpCertificateAdvanced'?: SsoIdpCertificateAdvancedDto;
    /**
     * The SP login label.
     */
    'spLoginLabel'?: string | null;
    /**
     * The list of the SP certificates.
     */
    'spCertificates'?: Array<SsoCertificateDto> | null;
    /**
     * The SP advanced certificate.
     */
    'spCertificateAdvanced'?: SsoSpCertificateAdvancedDto;
    /**
     * The SSO field mapping.
     */
    'fieldMapping'?: SsoFieldMappingDto;
    /**
     * Specifies if the authentication page will be hidden or not.
     */
    'hideAuthPage'?: boolean;
    /**
     * The user type.
     */
    'usersType'?: number;
    /**
     * Specifies if the email verification is disabled or not.
     */
    'disableEmailVerification'?: boolean;
}

