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
 * The credentials and the title of a third-party storage account to connect or to re-authenticate.
 */
export interface ThirdPartyRequestDto {
    /**
     * The address of the storage server to connect to. It is needed by the WebDAV presets whose server is not known  in advance (`WebDav`, `Nextcloud`, `ownCloud`), where it points at the WebDAV endpoint of that server, and by  `SharePoint`; the presets with a fixed address and the OAuth services ignore it.
     */
    'url'?: string | null;
    /**
     * The account name at the storage service, used by the services that authenticate by login and password. A login  sent without a password is rejected as an invalid request.
     */
    'login'?: string | null;
    /**
     * The password, or the application password, for `login` at the storage service. Either this or `token` has to  be sent, and the credentials are verified against the service before the account is saved.
     */
    'password'?: string | null;
    /**
     * The OAuth 2.0 authorization code from the consent screen of `Box`, `DropboxV2`, `GoogleDrive` or `OneDrive` -  not an access token: the portal exchanges the code for its own token and keeps that. The client ID and  redirect URL the consent screen URL is built from come from `GET api/2.0/files/thirdparty/capabilities`.
     */
    'token'?: string | null;
    /**
     * The name the connected account is shown under in the portal. Characters that a folder title cannot hold are  replaced and the value is truncated, and a title that comes out of that empty is refused.
     */
    'customerTitle': string | null;
    /**
     * The storage service to connect, as the `key` of `GET api/2.0/files/thirdparty/providers`; the value is matched  case-insensitively. `Nextcloud` and `ownCloud` are presets over WebDAV and are stored and reported back as  `WebDav`.
     */
    'providerKey': string | null;
    /**
     * The account to re-authenticate instead of connecting a new one, as `providerId` of  `GET api/2.0/files/thirdparty`; both a number and its decimal string form are accepted. For an account  attached to the Rooms section only the credentials are applied, and its title and server address are kept.
     */
    'providerId'?: number | null;
}

