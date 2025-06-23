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

