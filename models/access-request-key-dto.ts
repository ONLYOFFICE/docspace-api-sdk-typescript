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
 * The file key issued to one account.
 */
export interface AccessRequestKeyDto {
    /**
     * The account that is to open the file with this key; it has to have read access to the file.
     */
    'userId'?: string;
    /**
     * The public key the file key was encrypted with, as reported for that account by  `GET api/2.0/files/file/{fileId}/publickeys`.
     */
    'publicKeyId'?: string;
    /**
     * The key of the file itself, encrypted by the client with that public key, so that the plain key never reaches  the portal.
     */
    'privateKeyEnc'?: string | null;
}

