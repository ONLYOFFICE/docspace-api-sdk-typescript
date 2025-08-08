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
 * [0 - Decrypted, 1 - Encryption started, 2 - Encrypted, 3 - Decryption started]
 * @export
 * @enum {number}
 */

export const EncryprtionStatus = {
    /**
    * Decrypted
    */
    Decrypted: 0,
    /**
    * Encryption started
    */
    EncryptionStarted: 1,
    /**
    * Encrypted
    */
    Encrypted: 2,
    /**
    * Decryption started
    */
    DecryptionStarted: 3
} as const;

export type EncryprtionStatus = typeof EncryprtionStatus[keyof typeof EncryprtionStatus];



