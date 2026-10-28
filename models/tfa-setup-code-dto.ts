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
 * The secret to enrol in an authenticator application, in both of the forms an application can take it.
 */
export interface TfaSetupCodeDto {
    /**
     * The label the authenticator application will list the credential under, which is the caller\'s own email  address. It identifies the entry to a person, and no application checks it.
     */
    'account'?: string | null;
    /**
     * The secret in the base32 form that is typed into an application by hand. It describes the very same  credential as `qrCodeSetupImageUrl`, and repeating the call hands back the same value for the account until  the credential is reset.
     */
    'manualEntryKey'?: string | null;
    /**
     * The same secret as a scannable image, given as a `data:image/png;base64,` URL that can be rendered  directly - it is not a link to fetch.
     */
    'qrCodeSetupImageUrl'?: string | null;
}

