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
import type { EncryptionStatus } from './encryption-status';

/**
 * The state of the portal\'s storage encryption.
 */
export interface EncryptionSettingsDto {
    /**
     * Always an empty string: the encryption password is never returned.
     */
    'password'?: string | null;
    /**
     * Whether the storage is encrypted, decrypted, or on its way to either.
     */
    'status'?: EncryptionStatus;
    /**
     * Whether the users are notified when the operation starts and ends.
     */
    'notifyUsers'?: boolean;
}



