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
 * The signing algorithms the SSO settings accept.
 */
export interface SsoSigningAlgorithmTypeDto {
    /**
     * The RSA-SHA1 signing algorithm, which the built-in configuration uses. SHA-1 is the weakest of the three  and some identity providers no longer accept it.
     */
    'rsaSha1'?: string | null;
    /**
     * The RSA-SHA256 signing algorithm.
     */
    'rsaSha256'?: string | null;
    /**
     * The RSA-SHA512 signing algorithm.
     */
    'rsaSha512'?: string | null;
}

