/* tslint:disable */
/* eslint-disable */
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
 * The SSO certificate parameters.
 */
export interface SsoCertificate {
    /**
     * Specifies if a certificate is self-signed or not.
     */
    'selfSigned'?: boolean;
    /**
     * The CRT certificate file.
     */
    'crt'?: string | null;
    /**
     * The certificate key.
     */
    'key'?: string | null;
    /**
     * The certificate action.
     */
    'action'?: string | null;
    /**
     * The certificate domain name.
     */
    'domainName'?: string | null;
    /**
     * The certificate start date.
     */
    'startDate'?: string;
    /**
     * The certificate expiration date.
     */
    'expiredDate'?: string;
}

