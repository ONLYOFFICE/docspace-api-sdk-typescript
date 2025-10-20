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

