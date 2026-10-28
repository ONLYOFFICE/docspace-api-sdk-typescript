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
 * The two halves of an encryption key pair to store for the calling user, plus the identifier the pair is kept  under.
 */
export interface EncryptionKeyRequestDto {
    /**
     * Names the pair inside the caller\'s own key set. The client generates it, and leaving it out means the all-zero  GUID, which is the pair a client that never sends an identifier keeps working with.
     */
    'id'?: string;
    /**
     * The public half of the pair, as the client\'s crypto engine produced it and stored verbatim. This is the half  handed to the other members of a private room so that they can encrypt file keys for this user.
     */
    'publicKey'?: string | null;
    /**
     * The private half of the pair, encrypted on the client with the user\'s password before it is sent. The portal  stores it as opaque text and cannot decrypt it, so material lost on the client cannot be recovered from here.
     */
    'privateKeyEnc'?: string | null;
}

