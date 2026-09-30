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
import type { SsoBindingTypeDto } from './sso-binding-type-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoEncryptAlgorithmTypeDto } from './sso-encrypt-algorithm-type-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoIdpCertificateActionTypeDto } from './sso-idp-certificate-action-type-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoNameIdFormatTypeDto } from './sso-name-id-format-type-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoSigningAlgorithmTypeDto } from './sso-signing-algorithm-type-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SsoSpCertificateActionTypeDto } from './sso-sp-certificate-action-type-dto';

/**
 * The SSO settings constants: every value the settings accept, by name.
 */
export interface SsoSettingsV2ConstantsDto {
    /**
     * The values the `nameIdFormat` of the identity provider settings accepts. The built-in configuration uses  the SAML 2.0 transient format.
     */
    'ssoNameIdFormatType'?: SsoNameIdFormatTypeDto;
    /**
     * The values the `ssoBinding` and `sloBinding` of the identity provider settings accept - how the portal  sends its sign-in and sign-out requests. The built-in configuration uses HTTP POST for both.
     */
    'ssoBindingType'?: SsoBindingTypeDto;
    /**
     * The values the `signingAlgorithm` of the service provider certificate and the `verifyAlgorithm` of the  identity provider certificate accept. The built-in configuration uses RSA-SHA1 for both.
     */
    'ssoSigningAlgorithmType'?: SsoSigningAlgorithmTypeDto;
    /**
     * The values the `encryptAlgorithm` and `decryptAlgorithm` of the certificate settings accept. The built-in  configuration uses AES-128 everywhere.
     */
    'ssoEncryptAlgorithmType'?: SsoEncryptAlgorithmTypeDto;
    /**
     * The values the `action` of a service provider certificate accepts, which is what the portal\'s own key  pair may be used for.
     */
    'ssoSpCertificateActionType'?: SsoSpCertificateActionTypeDto;
    /**
     * The values the `action` of an identity provider certificate accepts, which is what the provider\'s  certificate may be used for - the mirror image of the service provider actions.
     */
    'ssoIdpCertificateActionType'?: SsoIdpCertificateActionTypeDto;
}

