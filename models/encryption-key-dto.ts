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
 * The encryption key pair of a user.
 */
export interface EncryptionKeyDto {
    /**
     * The identifier of the key pair.
     */
    'id'?: string;
    /**
     * The identifier of the user the key pair belongs to.
     */
    'userId'?: string;
    /**
     * The date and time when the key pair was created.
     */
    'date'?: string;
    /**
     * The public key of the pair, used to encrypt the file keys.
     */
    'publicKey'?: string | null;
    /**
     * The private key of the pair, encrypted with the user password.
     */
    'privateKeyEnc'?: string | null;
    /**
     * The identifier of the crypto engine the key pair was issued for.
     */
    'cryptoEngineId'?: string | null;
}

