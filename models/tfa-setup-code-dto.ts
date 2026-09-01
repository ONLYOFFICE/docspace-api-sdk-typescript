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
 * The setup TFA code parameters.
 */
export interface TfaSetupCodeDto {
    /**
     * The account for which the setup code is generated.
     */
    'account'?: string | null;
    /**
     * The manual entry key.
     */
    'manualEntryKey'?: string | null;
    /**
     * The QR-code setup image URL (base64-encoded PNG image).
     */
    'qrCodeSetupImageUrl'?: string | null;
}

