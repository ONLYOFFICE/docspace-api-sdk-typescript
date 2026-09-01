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
 * The encrypted file key issued to one user.
 */
export interface FileKeys {
    /**
     * The identifier of the user the file key was issued to.
     */
    'userId'?: string;
    /**
     * The identifier of the key pair the file key is encrypted for.
     */
    'publicKeyId'?: string;
    /**
     * The file key, encrypted with the public key of the pair.
     */
    'privateKeyEnc'?: string | null;
    /**
     * The identifier of the portal the file belongs to.
     */
    'tenantId'?: number;
    /**
     * The identifier of the file the key unlocks.
     */
    'fileId'?: number;
    /**
     * The date and time when the file key was issued.
     */
    'createOn'?: string;
}

