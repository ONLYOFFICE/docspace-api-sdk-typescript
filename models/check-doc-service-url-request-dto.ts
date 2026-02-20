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
 * The request parameters for checking the document service location.
 */
export interface CheckDocServiceUrlRequestDto {
    /**
     * The ONLYOFFICE Docs URL address.
     */
    'docServiceUrl': string | null;
    /**
     * The ONLYOFFICE Docs URL address in the local private network.
     */
    'docServiceUrlInternal'?: string | null;
    /**
     * The ONLYOFFICE Docs URL address.
     */
    'docServiceUrlPortal'?: string | null;
    /**
     * The signature secret of the ONLYOFFICE Docs.
     */
    'docServiceSignatureSecret'?: string | null;
    /**
     * The signature header of the ONLYOFFICE Docs.
     */
    'docServiceSignatureHeader'?: string | null;
    /**
     * Specifies if the SSL verification of the ONLYOFFICE Docs is enabled or not.
     */
    'docServiceSslVerification'?: boolean | null;
}

