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

// May contain unused imports in some cases
// @ts-ignore
import type { EncryprtionStatus } from './encryprtion-status';

/**
 * The encryption settings.
 * @export
 * @interface EncryptionSettings
 */
export interface EncryptionSettings {
    /**
     * The encryption password.
     * @type {string}
     * @memberof EncryptionSettings
     */
    'password'?: string | null;
    /**
     * 
     * @type {EncryprtionStatus}
     * @memberof EncryptionSettings
     */
    'status'?: EncryprtionStatus;
    /**
     * Specifies if the users will be notified about the encryption operation or not.
     * @type {boolean}
     * @memberof EncryptionSettings
     */
    'notifyUsers'?: boolean;
}



