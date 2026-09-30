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
import type { AuthData } from './auth-data';

/**
 * A third-party storage account connected to the portal.
 */
export interface ThirdPartyParams {
    /**
     * The stored credentials of the account. They are not filled in here: the portal does not give back credentials  once an account is saved.
     */
    'auth_data'?: AuthData;
    /**
     * Whether the account is attached to the legacy Common section, which is the case only for accounts inherited  from an older portal.
     */
    'corporate'?: boolean;
    /**
     * Whether the account is attached to the Rooms section, room templates and the archive counted in. This is where  `POST api/2.0/files/thirdparty` puts every account it connects.
     */
    'roomsStorage'?: boolean;
    /**
     * The name the account is shown under in the portal, as it was saved when the account was connected.
     */
    'customer_title'?: string | null;
    /**
     * The account ID to send to `DELETE api/2.0/files/thirdparty/{providerId}`, or as `providerId` to  re-authenticate the account.
     */
    'provider_id'?: number | null;
    /**
     * The storage service behind the account. `WebDav` stands for every WebDAV preset, so it does not tell which of  them was chosen when the account was connected.
     */
    'provider_key'?: string | null;
}

