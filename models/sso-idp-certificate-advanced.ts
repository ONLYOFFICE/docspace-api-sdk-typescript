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
 * The IdP advanced certificate parameters.
 * @export
 * @interface SsoIdpCertificateAdvanced
 */
export interface SsoIdpCertificateAdvanced {
    /**
     * The certificate verification algorithm.
     * @type {string}
     * @memberof SsoIdpCertificateAdvanced
     */
    'verifyAlgorithm'?: string | null;
    /**
     * Specifies if the signatures of the SAML authentication responses sent to SP will be verified or not.
     * @type {boolean}
     * @memberof SsoIdpCertificateAdvanced
     */
    'verifyAuthResponsesSign'?: boolean;
    /**
     * Specifies if the signatures of the SAML logout requests sent to SP will be verified or not.
     * @type {boolean}
     * @memberof SsoIdpCertificateAdvanced
     */
    'verifyLogoutRequestsSign'?: boolean;
    /**
     * Specifies if the signatures of the SAML logout responses sent to SP will be verified or not.
     * @type {boolean}
     * @memberof SsoIdpCertificateAdvanced
     */
    'verifyLogoutResponsesSign'?: boolean;
    /**
     * The certificate decryption algorithm.
     * @type {string}
     * @memberof SsoIdpCertificateAdvanced
     */
    'decryptAlgorithm'?: string | null;
    /**
     * Specifies if the assertions will be decrypted or not.
     * @type {boolean}
     * @memberof SsoIdpCertificateAdvanced
     */
    'decryptAssertions'?: boolean;
}

