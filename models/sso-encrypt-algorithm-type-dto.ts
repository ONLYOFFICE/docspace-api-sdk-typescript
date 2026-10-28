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
 * The encryption algorithms the SSO settings accept.
 */
export interface SsoEncryptAlgorithmTypeDto {
    /**
     * The AES-128-CBC encryption algorithm, which the built-in configuration uses.
     */
    'aes128'?: string | null;
    /**
     * The AES-256-CBC encryption algorithm, the strongest of the three.
     */
    'aes256'?: string | null;
    /**
     * The Triple DES CBC encryption algorithm, kept for identity providers that support nothing newer.
     */
    'triDec'?: string | null;
}

