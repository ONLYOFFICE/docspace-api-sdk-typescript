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


/**
 * The SAML name ID formats the SSO settings accept.
 */
export interface SsoNameIdFormatTypeDto {
    /**
     * The SAML 1.1 unspecified name ID format.
     */
    'saml11Unspecified'?: string | null;
    /**
     * The SAML 1.1 email address name ID format.
     */
    'saml11EmailAddress'?: string | null;
    /**
     * The SAML 2.0 entity name ID format.
     */
    'saml20Entity'?: string | null;
    /**
     * The SAML 2.0 transient name ID format, whose identifier differs from one session to the next. It is what  the built-in configuration uses.
     */
    'saml20Transient'?: string | null;
    /**
     * The SAML 2.0 persistent name ID format, whose identifier stays the same for one person across sessions.
     */
    'saml20Persistent'?: string | null;
    /**
     * The SAML 2.0 encrypted name ID format.
     */
    'saml20Encrypted'?: string | null;
    /**
     * The SAML 2.0 unspecified name ID format.
     */
    'saml20Unspecified'?: string | null;
    /**
     * The SAML 1.1 X.509 subject name name ID format.
     */
    'saml11X509SubjectName'?: string | null;
    /**
     * The SAML 1.1 Windows domain qualified name name ID format.
     */
    'saml11WindowsDomainQualifiedName'?: string | null;
    /**
     * The SAML 2.0 Kerberos name ID format.
     */
    'saml20Kerberos'?: string | null;
}

