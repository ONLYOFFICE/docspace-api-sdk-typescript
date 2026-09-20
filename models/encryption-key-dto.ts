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
 * An encryption key pair as the portal reports it: the public half of some member\'s key, with the encrypted private  half filled in only when the pair belongs to the caller.
 */
export interface EncryptionKeyDto {
    /**
     * Names the pair inside its owner\'s key set. Pass it back to rotate the pair or to delete it; the all-zero value  belongs to a client that stores its keys without sending an identifier.
     */
    'id'?: string;
    /**
     * The member the pair belongs to. In the key set of a room or of a file this is how the caller tells its own  entries, the ones carrying a private half, from those of the other members.
     */
    'userId'?: string;
    /**
     * When this key material was written. Rotating the pair refreshes it, so it dates the material that is being  reported rather than the first appearance of the identifier.
     */
    'date'?: string;
    /**
     * The public half of the pair, the half a client encrypts file keys with. A pair whose public half is missing  is treated as no access and left out of a room\'s or a file\'s key set.
     */
    'publicKey'?: string | null;
    /**
     * The private half, encrypted with its owner\'s password. It is filled in only when the pair belongs to the  calling user; on another member\'s entry it comes back empty, because the private half is not handed out.
     */
    'privateKeyEnc'?: string | null;
    /**
     * The crypto engine this material was issued for, as a braced GUID. The engine is portal-wide, so the same value  comes back for every key of every member.
     */
    'cryptoEngineId'?: string | null;
}

