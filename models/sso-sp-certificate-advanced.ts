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


/**
 * The SP advanced certificate parameters.
 * @export
 * @interface SsoSpCertificateAdvanced
 */
export interface SsoSpCertificateAdvanced {
    /**
     * The certificate signing algorithm.
     * @type {string}
     * @memberof SsoSpCertificateAdvanced
     */
    'signingAlgorithm'?: string | null;
    /**
     * Specifies if SP will sign the SAML authentication requests sent to IdP or not.
     * @type {boolean}
     * @memberof SsoSpCertificateAdvanced
     */
    'signAuthRequests'?: boolean;
    /**
     * Specifies if SP will sign the SAML logout requests sent to IdP or not.
     * @type {boolean}
     * @memberof SsoSpCertificateAdvanced
     */
    'signLogoutRequests'?: boolean;
    /**
     * Specifies if SP will sign the SAML logout responses sent to IdP or not.
     * @type {boolean}
     * @memberof SsoSpCertificateAdvanced
     */
    'signLogoutResponses'?: boolean;
    /**
     * The certificate encryption algorithm.
     * @type {string}
     * @memberof SsoSpCertificateAdvanced
     */
    'encryptAlgorithm'?: string | null;
    /**
     * The certificate decryption algorithm.
     * @type {string}
     * @memberof SsoSpCertificateAdvanced
     */
    'decryptAlgorithm'?: string | null;
    /**
     * Specifies if the assertions will be encrypted or not.
     * @type {boolean}
     * @memberof SsoSpCertificateAdvanced
     */
    'encryptAssertions'?: boolean;
}

