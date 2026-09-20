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
import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { ArrayArrayWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ProviderArrayWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyBackupRequestDto } from '../../models';
// @ts-ignore
import type { ThirdPartyFolderArrayWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyFolderWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyParamsArrayWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyRequestDto } from '../../models';
/**
 * ThirdPartyIntegrationApi - axios parameter creator
 * @export
 */
export const ThirdPartyIntegrationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Disconnects a third-party storage account from the portal and returns the ID of the folder that stood for it,  in the `provider-accountId` form the Files operations use for third-party entries. Take `providerId` from  `GET api/2.0/files/thirdparty`: it is the numeric account ID, not that composed folder ID. The member who  connected the account can remove it; another member\'s request is refused unless they hold delete rights on the  folder it stands for. Nothing is deleted at the storage service: the files stay with the provider, and what  goes away is the portal\'s link to them together with the stored credentials, the sharing records and the tags  kept for its entries. A room that was created on this account stops being available. When the account being  removed is the one connected for backups by `POST api/2.0/files/thirdparty/backup`, its backup schedule is  deleted as well. The removal cannot be repeated: once the account is gone the same ID is refused rather than  confirmed, so treat the first successful answer as the record of it.
         * @summary Remove a third-party account
         * @param {number} providerId The ID of the connected third-party storage account, as `providerId` of `GET api/2.0/files/thirdparty`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/
         */
        deleteThirdParty: async (providerId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'providerId' is not null or undefined
            assertParamExists('deleteThirdParty', 'providerId', providerId)

            const localVarPath = `/api/2.0/files/thirdparty/{providerId}`
                .replace(`{${"providerId"}}`, encodeURIComponent(String(providerId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the third-party storage services this portal can connect, with everything a connection form needs: the  display name, the key to send as `providerKey`, whether the service authenticates through OAuth 2.0, the OAuth  client ID and redirect URL where it does, and whether the caller has to supply the server address. Several  WebDAV presets share the key `WebDav` and are told apart by their names, so keep the name the caller chose  next to the key when building the request. Pass `excludewebdav=true` to drop the whole WebDAV family,  including the kDrive and Yandex presets, and keep only the OAuth services. The call is read-only. An empty  array is a normal answer: it is what a guest gets, and what everyone gets while the portal-wide third-party  switch is off (`PUT api/2.0/files/thirdparty`). The `connected` flag of an element says the service is  available on this portal, not that an account of it exists - the caller\'s own accounts are listed by  `GET api/2.0/files/thirdparty`.
         * @summary Get all third-party providers
         * @param {boolean} [excludewebdav] Set to true to leave out the whole WebDAV family, the kDrive and Yandex presets included, and keep only the  services that authenticate through OAuth 2.0; false lists all of them.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         */
        getAllProviders: async (excludewebdav?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty/providers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required

            if (excludewebdav !== undefined) {
                localVarQueryParameter['excludewebdav'] = excludewebdav;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the folder of the third-party storage account the portal keeps for backups, so a caller can check  where scheduled and manual backups are written. There is at most one such account per portal, connected by an  administrator through `POST api/2.0/files/thirdparty/backup`, and it is deliberately kept out of the personal  list of `GET api/2.0/files/thirdparty`. Any authenticated member may ask, and the call is read-only. The body  is `null`, with a successful status, in two situations the answer does not distinguish: no backup account has  been connected, and the caller has no read access to the folder of the one that is. When a folder does come  back, its `id` is the string ID of a third-party folder and can be used with the folder operations that accept  one, and its `title` is the title the account was saved under. Connecting a different account through the  backup operation replaces this one rather than adding a second, and  `DELETE api/2.0/files/thirdparty/{providerId}` removes it.
         * @summary Get the third-party backup folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         */
        getBackupThirdPartyAccount: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty/backup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the third-party storage services this portal is able to connect, in the compact form a connection dialog  needs. Every element is itself an array whose first item is the provider key accepted as `providerKey` by  `POST api/2.0/files/thirdparty`. For the services that authenticate through OAuth 2.0 (`Box`, `DropboxV2`,  `GoogleDrive`, `OneDrive`) the second and third items are the OAuth client ID and the redirect URL this portal  is registered with, so the caller can build the consent screen URL itself; the services that authenticate by  login and password (`SharePoint`, `WebDav`, `kDrive`, `Yandex`) contribute a single-item array. Only the  services enabled in the portal configuration are listed, and an OAuth service whose application is not  configured is left out. The call is read-only. An empty array is a normal answer rather than a failure: it is  what a guest gets, and what everyone gets while the portal-wide third-party switch is off  (`PUT api/2.0/files/thirdparty`). For display names, the WebDAV presets and the flags a connection form needs,  use `GET api/2.0/files/thirdparty/providers` instead.
         * @summary Get third-party provider capabilities
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         */
        getCapabilities: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty/capabilities`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the third-party storage accounts attached to the legacy Common section, as folder entries that can be  browsed with the usual folder operations. Each entry stands for a whole connected account: its title is the  account title, and `providerId` and `providerKey` identify the account behind it. Only accounts whose owner  the caller may read are included, so the answer differs from one member to another. The call is read-only and  returns a plain array with no paging. An empty array is the expected answer in most portals and does not mean  an error: accounts connected by `POST api/2.0/files/thirdparty` are attached to the Rooms section, not to  Common, so only accounts inherited from an older portal appear here. The list is also empty while the  portal-wide third-party switch is off (`PUT api/2.0/files/thirdparty`) and when no storage service is  configured. For the accounts the caller owns, regardless of where they are attached, use  `GET api/2.0/files/thirdparty`.
         * @summary Get common third-party folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         */
        getCommonThirdPartyFolders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty/common`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the third-party storage accounts the caller has connected, one element per account, with the title it  was saved under, the storage service behind it and the portal section it is attached to. Accounts connected by  other members are not included, and neither is the portal backup account of  `GET api/2.0/files/thirdparty/backup`, even for an administrator. The `providerId` of an element is the value  to send to `DELETE api/2.0/files/thirdparty/{providerId}` and, as `providerId` in  `POST api/2.0/files/thirdparty`, the way to re-authenticate that same account instead of connecting a new one.  Credentials are never disclosed: `auth_data` comes back empty for every element. An element with  `roomsStorage` set is available as storage for a room, while `corporate` marks an account inherited from the  legacy Common section. The call is read-only, returns a plain array with no paging and no contractual  ordering, and answers with an empty array when the caller has connected nothing. To browse the content of an  account, take the folder ID from the answer of the operation that connected it or from  `GET api/2.0/files/@root`.
         * @summary Get the third-party accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         */
        getThirdPartyAccounts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Connects an account at a third-party storage service to the portal, or re-authenticates one that is already  connected, and returns the folder that now stands for its root. Send `providerId` to update an existing  account and omit it to connect a new one; the accepted `providerKey` values come from  `GET api/2.0/files/thirdparty/providers`. The credentials to send depend on the service: the OAuth services  take `token`, which is the authorization code from their consent screen and not an access token, while the  WebDAV family and SharePoint take `login` with `password`, plus `url` where the server address is not fixed.  Credentials are verified against the service before anything is stored, so a wrong password is refused and  nothing is saved. The caller needs the rights to create rooms, and the portal-wide third-party switch has to  be on, otherwise the call is refused. A new account is attached to the Rooms section and becomes available as  room storage for `POST api/2.0/files/rooms/thirdparty/{id}`. Connecting twice with the same title creates two  separate accounts.
         * @summary Connect a third-party account
         * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/
         */
        saveThirdParty: async (thirdPartyRequestDto?: ThirdPartyRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Connects the third-party storage account the portal writes its backups to, and returns the folder that stands  for its root. Only a portal administrator may call it, and the portal-wide third-party switch has to be on;  other callers are refused. The account is portal-wide and single: a second call does not add another one but  re-authenticates and retitles the existing one, which makes the operation safe to repeat with the same body.  The credentials follow the same rules as in `POST api/2.0/files/thirdparty` - an authorization code in `token`  for the OAuth services, `login` with `password` and, where the server address is not fixed, `url` for the  WebDAV family and SharePoint - and are verified against the service before anything is stored, so a wrong  password leaves the previous account untouched. The account is deliberately absent from  `GET api/2.0/files/thirdparty`; read it back with `GET api/2.0/files/thirdparty/backup` and remove it with  `DELETE api/2.0/files/thirdparty/{providerId}`.
         * @summary Connect the third-party backup storage
         * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdPartyBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/
         */
        saveThirdPartyBackup: async (thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty/backup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyBackupRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ThirdPartyIntegrationApi - functional programming interface
 * @export
 */
export const ThirdPartyIntegrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThirdPartyIntegrationApiAxiosParamCreator(configuration)
    return {
        /**
         * Disconnects a third-party storage account from the portal and returns the ID of the folder that stood for it,  in the `provider-accountId` form the Files operations use for third-party entries. Take `providerId` from  `GET api/2.0/files/thirdparty`: it is the numeric account ID, not that composed folder ID. The member who  connected the account can remove it; another member\'s request is refused unless they hold delete rights on the  folder it stands for. Nothing is deleted at the storage service: the files stay with the provider, and what  goes away is the portal\'s link to them together with the stored credentials, the sharing records and the tags  kept for its entries. A room that was created on this account stops being available. When the account being  removed is the one connected for backups by `POST api/2.0/files/thirdparty/backup`, its backup schedule is  deleted as well. The removal cannot be repeated: once the account is gone the same ID is refused rather than  confirmed, so treat the first successful answer as the record of it.
         * @summary Remove a third-party account
         * @param {number} providerId The ID of the connected third-party storage account, as `providerId` of `GET api/2.0/files/thirdparty`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/
         */
        async deleteThirdParty(providerId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteThirdParty(providerId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.deleteThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the third-party storage services this portal can connect, with everything a connection form needs: the  display name, the key to send as `providerKey`, whether the service authenticates through OAuth 2.0, the OAuth  client ID and redirect URL where it does, and whether the caller has to supply the server address. Several  WebDAV presets share the key `WebDav` and are told apart by their names, so keep the name the caller chose  next to the key when building the request. Pass `excludewebdav=true` to drop the whole WebDAV family,  including the kDrive and Yandex presets, and keep only the OAuth services. The call is read-only. An empty  array is a normal answer: it is what a guest gets, and what everyone gets while the portal-wide third-party  switch is off (`PUT api/2.0/files/thirdparty`). The `connected` flag of an element says the service is  available on this portal, not that an account of it exists - the caller\'s own accounts are listed by  `GET api/2.0/files/thirdparty`.
         * @summary Get all third-party providers
         * @param {boolean} [excludewebdav] Set to true to leave out the whole WebDAV family, the kDrive and Yandex presets included, and keep only the  services that authenticate through OAuth 2.0; false lists all of them.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         */
        async getAllProviders(excludewebdav?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProviderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProviders(excludewebdav, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getAllProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the folder of the third-party storage account the portal keeps for backups, so a caller can check  where scheduled and manual backups are written. There is at most one such account per portal, connected by an  administrator through `POST api/2.0/files/thirdparty/backup`, and it is deliberately kept out of the personal  list of `GET api/2.0/files/thirdparty`. Any authenticated member may ask, and the call is read-only. The body  is `null`, with a successful status, in two situations the answer does not distinguish: no backup account has  been connected, and the caller has no read access to the folder of the one that is. When a folder does come  back, its `id` is the string ID of a third-party folder and can be used with the folder operations that accept  one, and its `title` is the title the account was saved under. Connecting a different account through the  backup operation replaces this one rather than adding a second, and  `DELETE api/2.0/files/thirdparty/{providerId}` removes it.
         * @summary Get the third-party backup folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         */
        async getBackupThirdPartyAccount(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupThirdPartyAccount(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getBackupThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the third-party storage services this portal is able to connect, in the compact form a connection dialog  needs. Every element is itself an array whose first item is the provider key accepted as `providerKey` by  `POST api/2.0/files/thirdparty`. For the services that authenticate through OAuth 2.0 (`Box`, `DropboxV2`,  `GoogleDrive`, `OneDrive`) the second and third items are the OAuth client ID and the redirect URL this portal  is registered with, so the caller can build the consent screen URL itself; the services that authenticate by  login and password (`SharePoint`, `WebDav`, `kDrive`, `Yandex`) contribute a single-item array. Only the  services enabled in the portal configuration are listed, and an OAuth service whose application is not  configured is left out. The call is read-only. An empty array is a normal answer rather than a failure: it is  what a guest gets, and what everyone gets while the portal-wide third-party switch is off  (`PUT api/2.0/files/thirdparty`). For display names, the WebDAV presets and the flags a connection form needs,  use `GET api/2.0/files/thirdparty/providers` instead.
         * @summary Get third-party provider capabilities
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         */
        async getCapabilities(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArrayArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCapabilities(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getCapabilities']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the third-party storage accounts attached to the legacy Common section, as folder entries that can be  browsed with the usual folder operations. Each entry stands for a whole connected account: its title is the  account title, and `providerId` and `providerKey` identify the account behind it. Only accounts whose owner  the caller may read are included, so the answer differs from one member to another. The call is read-only and  returns a plain array with no paging. An empty array is the expected answer in most portals and does not mean  an error: accounts connected by `POST api/2.0/files/thirdparty` are attached to the Rooms section, not to  Common, so only accounts inherited from an older portal appear here. The list is also empty while the  portal-wide third-party switch is off (`PUT api/2.0/files/thirdparty`) and when no storage service is  configured. For the accounts the caller owns, regardless of where they are attached, use  `GET api/2.0/files/thirdparty`.
         * @summary Get common third-party folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         */
        async getCommonThirdPartyFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyFolderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCommonThirdPartyFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getCommonThirdPartyFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the third-party storage accounts the caller has connected, one element per account, with the title it  was saved under, the storage service behind it and the portal section it is attached to. Accounts connected by  other members are not included, and neither is the portal backup account of  `GET api/2.0/files/thirdparty/backup`, even for an administrator. The `providerId` of an element is the value  to send to `DELETE api/2.0/files/thirdparty/{providerId}` and, as `providerId` in  `POST api/2.0/files/thirdparty`, the way to re-authenticate that same account instead of connecting a new one.  Credentials are never disclosed: `auth_data` comes back empty for every element. An element with  `roomsStorage` set is available as storage for a room, while `corporate` marks an account inherited from the  legacy Common section. The call is read-only, returns a plain array with no paging and no contractual  ordering, and answers with an empty array when the caller has connected nothing. To browse the content of an  account, take the folder ID from the answer of the operation that connected it or from  `GET api/2.0/files/@root`.
         * @summary Get the third-party accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         */
        async getThirdPartyAccounts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyParamsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getThirdPartyAccounts(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getThirdPartyAccounts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Connects an account at a third-party storage service to the portal, or re-authenticates one that is already  connected, and returns the folder that now stands for its root. Send `providerId` to update an existing  account and omit it to connect a new one; the accepted `providerKey` values come from  `GET api/2.0/files/thirdparty/providers`. The credentials to send depend on the service: the OAuth services  take `token`, which is the authorization code from their consent screen and not an access token, while the  WebDAV family and SharePoint take `login` with `password`, plus `url` where the server address is not fixed.  Credentials are verified against the service before anything is stored, so a wrong password is refused and  nothing is saved. The caller needs the rights to create rooms, and the portal-wide third-party switch has to  be on, otherwise the call is refused. A new account is attached to the Rooms section and becomes available as  room storage for `POST api/2.0/files/rooms/thirdparty/{id}`. Connecting twice with the same title creates two  separate accounts.
         * @summary Connect a third-party account
         * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/
         */
        async saveThirdParty(thirdPartyRequestDto?: ThirdPartyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveThirdParty(thirdPartyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.saveThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Connects the third-party storage account the portal writes its backups to, and returns the folder that stands  for its root. Only a portal administrator may call it, and the portal-wide third-party switch has to be on;  other callers are refused. The account is portal-wide and single: a second call does not add another one but  re-authenticates and retitles the existing one, which makes the operation safe to repeat with the same body.  The credentials follow the same rules as in `POST api/2.0/files/thirdparty` - an authorization code in `token`  for the OAuth services, `login` with `password` and, where the server address is not fixed, `url` for the  WebDAV family and SharePoint - and are verified against the service before anything is stored, so a wrong  password leaves the previous account untouched. The account is deliberately absent from  `GET api/2.0/files/thirdparty`; read it back with `GET api/2.0/files/thirdparty/backup` and remove it with  `DELETE api/2.0/files/thirdparty/{providerId}`.
         * @summary Connect the third-party backup storage
         * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdPartyBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/
         */
        async saveThirdPartyBackup(thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveThirdPartyBackup(thirdPartyBackupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.saveThirdPartyBackup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ThirdPartyIntegrationApi - factory interface
 * @export
 */
export const ThirdPartyIntegrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThirdPartyIntegrationApiFp(configuration)
    return {
        /**
         * Disconnects a third-party storage account from the portal and returns the ID of the folder that stood for it,  in the `provider-accountId` form the Files operations use for third-party entries. Take `providerId` from  `GET api/2.0/files/thirdparty`: it is the numeric account ID, not that composed folder ID. The member who  connected the account can remove it; another member\'s request is refused unless they hold delete rights on the  folder it stands for. Nothing is deleted at the storage service: the files stay with the provider, and what  goes away is the portal\'s link to them together with the stored credentials, the sharing records and the tags  kept for its entries. A room that was created on this account stops being available. When the account being  removed is the one connected for backups by `POST api/2.0/files/thirdparty/backup`, its backup schedule is  deleted as well. The removal cannot be repeated: once the account is gone the same ID is refused rather than  confirmed, so treat the first successful answer as the record of it.
         * @summary Remove a third-party account
         * @param {ThirdPartyIntegrationApiDeleteThirdPartyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/
         * @throws {RequiredError}
         */
        deleteThirdParty(requestParameters: ThirdPartyIntegrationApiDeleteThirdPartyRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.deleteThirdParty(requestParameters.providerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the third-party storage services this portal can connect, with everything a connection form needs: the  display name, the key to send as `providerKey`, whether the service authenticates through OAuth 2.0, the OAuth  client ID and redirect URL where it does, and whether the caller has to supply the server address. Several  WebDAV presets share the key `WebDav` and are told apart by their names, so keep the name the caller chose  next to the key when building the request. Pass `excludewebdav=true` to drop the whole WebDAV family,  including the kDrive and Yandex presets, and keep only the OAuth services. The call is read-only. An empty  array is a normal answer: it is what a guest gets, and what everyone gets while the portal-wide third-party  switch is off (`PUT api/2.0/files/thirdparty`). The `connected` flag of an element says the service is  available on this portal, not that an account of it exists - the caller\'s own accounts are listed by  `GET api/2.0/files/thirdparty`.
         * @summary Get all third-party providers
         * @param {ThirdPartyIntegrationApiGetAllProvidersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         * @throws {RequiredError}
         */
        getAllProviders(requestParameters: ThirdPartyIntegrationApiGetAllProvidersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ProviderArrayWrapper> {
            return localVarFp.getAllProviders(requestParameters.excludewebdav, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the folder of the third-party storage account the portal keeps for backups, so a caller can check  where scheduled and manual backups are written. There is at most one such account per portal, connected by an  administrator through `POST api/2.0/files/thirdparty/backup`, and it is deliberately kept out of the personal  list of `GET api/2.0/files/thirdparty`. Any authenticated member may ask, and the call is read-only. The body  is `null`, with a successful status, in two situations the answer does not distinguish: no backup account has  been connected, and the caller has no read access to the folder of the one that is. When a folder does come  back, its `id` is the string ID of a third-party folder and can be used with the folder operations that accept  one, and its `title` is the title the account was saved under. Connecting a different account through the  backup operation replaces this one rather than adding a second, and  `DELETE api/2.0/files/thirdparty/{providerId}` removes it.
         * @summary Get the third-party backup folder
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         * @throws {RequiredError}
         */
        getBackupThirdPartyAccount(options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper> {
            return localVarFp.getBackupThirdPartyAccount(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the third-party storage services this portal is able to connect, in the compact form a connection dialog  needs. Every element is itself an array whose first item is the provider key accepted as `providerKey` by  `POST api/2.0/files/thirdparty`. For the services that authenticate through OAuth 2.0 (`Box`, `DropboxV2`,  `GoogleDrive`, `OneDrive`) the second and third items are the OAuth client ID and the redirect URL this portal  is registered with, so the caller can build the consent screen URL itself; the services that authenticate by  login and password (`SharePoint`, `WebDav`, `kDrive`, `Yandex`) contribute a single-item array. Only the  services enabled in the portal configuration are listed, and an OAuth service whose application is not  configured is left out. The call is read-only. An empty array is a normal answer rather than a failure: it is  what a guest gets, and what everyone gets while the portal-wide third-party switch is off  (`PUT api/2.0/files/thirdparty`). For display names, the WebDAV presets and the flags a connection form needs,  use `GET api/2.0/files/thirdparty/providers` instead.
         * @summary Get third-party provider capabilities
         * @param {*} [options] Override http request option.
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         * @throws {RequiredError}
         */
        getCapabilities(options?: RawAxiosRequestConfig): AxiosPromise<ArrayArrayWrapper> {
            return localVarFp.getCapabilities(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the third-party storage accounts attached to the legacy Common section, as folder entries that can be  browsed with the usual folder operations. Each entry stands for a whole connected account: its title is the  account title, and `providerId` and `providerKey` identify the account behind it. Only accounts whose owner  the caller may read are included, so the answer differs from one member to another. The call is read-only and  returns a plain array with no paging. An empty array is the expected answer in most portals and does not mean  an error: accounts connected by `POST api/2.0/files/thirdparty` are attached to the Rooms section, not to  Common, so only accounts inherited from an older portal appear here. The list is also empty while the  portal-wide third-party switch is off (`PUT api/2.0/files/thirdparty`) and when no storage service is  configured. For the accounts the caller owns, regardless of where they are attached, use  `GET api/2.0/files/thirdparty`.
         * @summary Get common third-party folders
         * @param {*} [options] Override http request option.
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         * @throws {RequiredError}
         */
        getCommonThirdPartyFolders(options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderArrayWrapper> {
            return localVarFp.getCommonThirdPartyFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the third-party storage accounts the caller has connected, one element per account, with the title it  was saved under, the storage service behind it and the portal section it is attached to. Accounts connected by  other members are not included, and neither is the portal backup account of  `GET api/2.0/files/thirdparty/backup`, even for an administrator. The `providerId` of an element is the value  to send to `DELETE api/2.0/files/thirdparty/{providerId}` and, as `providerId` in  `POST api/2.0/files/thirdparty`, the way to re-authenticate that same account instead of connecting a new one.  Credentials are never disclosed: `auth_data` comes back empty for every element. An element with  `roomsStorage` set is available as storage for a room, while `corporate` marks an account inherited from the  legacy Common section. The call is read-only, returns a plain array with no paging and no contractual  ordering, and answers with an empty array when the caller has connected nothing. To browse the content of an  account, take the folder ID from the answer of the operation that connected it or from  `GET api/2.0/files/@root`.
         * @summary Get the third-party accounts
         * @param {*} [options] Override http request option.
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         * @throws {RequiredError}
         */
        getThirdPartyAccounts(options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyParamsArrayWrapper> {
            return localVarFp.getThirdPartyAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * Connects an account at a third-party storage service to the portal, or re-authenticates one that is already  connected, and returns the folder that now stands for its root. Send `providerId` to update an existing  account and omit it to connect a new one; the accepted `providerKey` values come from  `GET api/2.0/files/thirdparty/providers`. The credentials to send depend on the service: the OAuth services  take `token`, which is the authorization code from their consent screen and not an access token, while the  WebDAV family and SharePoint take `login` with `password`, plus `url` where the server address is not fixed.  Credentials are verified against the service before anything is stored, so a wrong password is refused and  nothing is saved. The caller needs the rights to create rooms, and the portal-wide third-party switch has to  be on, otherwise the call is refused. A new account is attached to the Rooms section and becomes available as  room storage for `POST api/2.0/files/rooms/thirdparty/{id}`. Connecting twice with the same title creates two  separate accounts.
         * @summary Connect a third-party account
         * @param {ThirdPartyIntegrationApiSaveThirdPartyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/
         * @throws {RequiredError}
         */
        saveThirdParty(requestParameters: ThirdPartyIntegrationApiSaveThirdPartyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper> {
            return localVarFp.saveThirdParty(requestParameters.thirdPartyRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Connects the third-party storage account the portal writes its backups to, and returns the folder that stands  for its root. Only a portal administrator may call it, and the portal-wide third-party switch has to be on;  other callers are refused. The account is portal-wide and single: a second call does not add another one but  re-authenticates and retitles the existing one, which makes the operation safe to repeat with the same body.  The credentials follow the same rules as in `POST api/2.0/files/thirdparty` - an authorization code in `token`  for the OAuth services, `login` with `password` and, where the server address is not fixed, `url` for the  WebDAV family and SharePoint - and are verified against the service before anything is stored, so a wrong  password leaves the previous account untouched. The account is deliberately absent from  `GET api/2.0/files/thirdparty`; read it back with `GET api/2.0/files/thirdparty/backup` and remove it with  `DELETE api/2.0/files/thirdparty/{providerId}`.
         * @summary Connect the third-party backup storage
         * @param {ThirdPartyIntegrationApiSaveThirdPartyBackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveThirdPartyBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/
         * @throws {RequiredError}
         */
        saveThirdPartyBackup(requestParameters: ThirdPartyIntegrationApiSaveThirdPartyBackupRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper> {
            return localVarFp.saveThirdPartyBackup(requestParameters.thirdPartyBackupRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteThirdParty operation in ThirdPartyIntegrationApi.
 * @export
 * @interface ThirdPartyIntegrationApiDeleteThirdPartyRequest
 */
export interface ThirdPartyIntegrationApiDeleteThirdPartyRequest {
    /**
     * The ID of the connected third-party storage account, as `providerId` of `GET api/2.0/files/thirdparty`.
     * @type {number}
     * @memberof ThirdPartyIntegrationApiDeleteThirdParty
     */
    readonly providerId: number
}

/**
 * Request parameters for getAllProviders operation in ThirdPartyIntegrationApi.
 * @export
 * @interface ThirdPartyIntegrationApiGetAllProvidersRequest
 */
export interface ThirdPartyIntegrationApiGetAllProvidersRequest {
    /**
     * Set to true to leave out the whole WebDAV family, the kDrive and Yandex presets included, and keep only the  services that authenticate through OAuth 2.0; false lists all of them.
     * @type {boolean}
     * @memberof ThirdPartyIntegrationApiGetAllProviders
     */
    readonly excludewebdav?: boolean
}

/**
 * Request parameters for saveThirdParty operation in ThirdPartyIntegrationApi.
 * @export
 * @interface ThirdPartyIntegrationApiSaveThirdPartyRequest
 */
export interface ThirdPartyIntegrationApiSaveThirdPartyRequest {
    /**
     * 
     * @type {ThirdPartyRequestDto}
     * @memberof ThirdPartyIntegrationApiSaveThirdParty
     */
    readonly thirdPartyRequestDto?: ThirdPartyRequestDto
}

/**
 * Request parameters for saveThirdPartyBackup operation in ThirdPartyIntegrationApi.
 * @export
 * @interface ThirdPartyIntegrationApiSaveThirdPartyBackupRequest
 */
export interface ThirdPartyIntegrationApiSaveThirdPartyBackupRequest {
    /**
     * 
     * @type {ThirdPartyBackupRequestDto}
     * @memberof ThirdPartyIntegrationApiSaveThirdPartyBackup
     */
    readonly thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto
}

/**
 * ThirdPartyIntegrationApi - object-oriented interface
 * @export
 * @class ThirdPartyIntegrationApi
 * @extends {BaseAPI}
 */
export class ThirdPartyIntegrationApi extends BaseAPI {
    /**
     * Disconnects a third-party storage account from the portal and returns the ID of the folder that stood for it,  in the `provider-accountId` form the Files operations use for third-party entries. Take `providerId` from  `GET api/2.0/files/thirdparty`: it is the numeric account ID, not that composed folder ID. The member who  connected the account can remove it; another member\'s request is refused unless they hold delete rights on the  folder it stands for. Nothing is deleted at the storage service: the files stay with the provider, and what  goes away is the portal\'s link to them together with the stored credentials, the sharing records and the tags  kept for its entries. A room that was created on this account stops being available. When the account being  removed is the one connected for backups by `POST api/2.0/files/thirdparty/backup`, its backup schedule is  deleted as well. The removal cannot be repeated: once the account is gone the same ID is refused rather than  confirmed, so treat the first successful answer as the record of it.
     * @summary Remove a third-party account
     * @param {FilesThirdPartyIntegrationApiDeleteThirdPartyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public deleteThirdParty(requestParameters: ThirdPartyIntegrationApiDeleteThirdPartyRequest, options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).deleteThirdParty(requestParameters.providerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the third-party storage services this portal can connect, with everything a connection form needs: the  display name, the key to send as `providerKey`, whether the service authenticates through OAuth 2.0, the OAuth  client ID and redirect URL where it does, and whether the caller has to supply the server address. Several  WebDAV presets share the key `WebDav` and are told apart by their names, so keep the name the caller chose  next to the key when building the request. Pass `excludewebdav=true` to drop the whole WebDAV family,  including the kDrive and Yandex presets, and keep only the OAuth services. The call is read-only. An empty  array is a normal answer: it is what a guest gets, and what everyone gets while the portal-wide third-party  switch is off (`PUT api/2.0/files/thirdparty`). The `connected` flag of an element says the service is  available on this portal, not that an account of it exists - the caller\'s own accounts are listed by  `GET api/2.0/files/thirdparty`.
     * @summary Get all third-party providers
     * @param {FilesThirdPartyIntegrationApiGetAllProvidersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getAllProviders(requestParameters: ThirdPartyIntegrationApiGetAllProvidersRequest = {}, options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getAllProviders(requestParameters.excludewebdav, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the folder of the third-party storage account the portal keeps for backups, so a caller can check  where scheduled and manual backups are written. There is at most one such account per portal, connected by an  administrator through `POST api/2.0/files/thirdparty/backup`, and it is deliberately kept out of the personal  list of `GET api/2.0/files/thirdparty`. Any authenticated member may ask, and the call is read-only. The body  is `null`, with a successful status, in two situations the answer does not distinguish: no backup account has  been connected, and the caller has no read access to the folder of the one that is. When a folder does come  back, its `id` is the string ID of a third-party folder and can be used with the folder operations that accept  one, and its `title` is the title the account was saved under. Connecting a different account through the  backup operation replaces this one rather than adding a second, and  `DELETE api/2.0/files/thirdparty/{providerId}` removes it.
     * @summary Get the third-party backup folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getBackupThirdPartyAccount(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getBackupThirdPartyAccount(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the third-party storage services this portal is able to connect, in the compact form a connection dialog  needs. Every element is itself an array whose first item is the provider key accepted as `providerKey` by  `POST api/2.0/files/thirdparty`. For the services that authenticate through OAuth 2.0 (`Box`, `DropboxV2`,  `GoogleDrive`, `OneDrive`) the second and third items are the OAuth client ID and the redirect URL this portal  is registered with, so the caller can build the consent screen URL itself; the services that authenticate by  login and password (`SharePoint`, `WebDav`, `kDrive`, `Yandex`) contribute a single-item array. Only the  services enabled in the portal configuration are listed, and an OAuth service whose application is not  configured is left out. The call is read-only. An empty array is a normal answer rather than a failure: it is  what a guest gets, and what everyone gets while the portal-wide third-party switch is off  (`PUT api/2.0/files/thirdparty`). For display names, the WebDAV presets and the flags a connection form needs,  use `GET api/2.0/files/thirdparty/providers` instead.
     * @summary Get third-party provider capabilities
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getCapabilities(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getCapabilities(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the third-party storage accounts attached to the legacy Common section, as folder entries that can be  browsed with the usual folder operations. Each entry stands for a whole connected account: its title is the  account title, and `providerId` and `providerKey` identify the account behind it. Only accounts whose owner  the caller may read are included, so the answer differs from one member to another. The call is read-only and  returns a plain array with no paging. An empty array is the expected answer in most portals and does not mean  an error: accounts connected by `POST api/2.0/files/thirdparty` are attached to the Rooms section, not to  Common, so only accounts inherited from an older portal appear here. The list is also empty while the  portal-wide third-party switch is off (`PUT api/2.0/files/thirdparty`) and when no storage service is  configured. For the accounts the caller owns, regardless of where they are attached, use  `GET api/2.0/files/thirdparty`.
     * @summary Get common third-party folders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getCommonThirdPartyFolders(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getCommonThirdPartyFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the third-party storage accounts the caller has connected, one element per account, with the title it  was saved under, the storage service behind it and the portal section it is attached to. Accounts connected by  other members are not included, and neither is the portal backup account of  `GET api/2.0/files/thirdparty/backup`, even for an administrator. The `providerId` of an element is the value  to send to `DELETE api/2.0/files/thirdparty/{providerId}` and, as `providerId` in  `POST api/2.0/files/thirdparty`, the way to re-authenticate that same account instead of connecting a new one.  Credentials are never disclosed: `auth_data` comes back empty for every element. An element with  `roomsStorage` set is available as storage for a room, while `corporate` marks an account inherited from the  legacy Common section. The call is read-only, returns a plain array with no paging and no contractual  ordering, and answers with an empty array when the caller has connected nothing. To browse the content of an  account, take the folder ID from the answer of the operation that connected it or from  `GET api/2.0/files/@root`.
     * @summary Get the third-party accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getThirdPartyAccounts(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getThirdPartyAccounts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Connects an account at a third-party storage service to the portal, or re-authenticates one that is already  connected, and returns the folder that now stands for its root. Send `providerId` to update an existing  account and omit it to connect a new one; the accepted `providerKey` values come from  `GET api/2.0/files/thirdparty/providers`. The credentials to send depend on the service: the OAuth services  take `token`, which is the authorization code from their consent screen and not an access token, while the  WebDAV family and SharePoint take `login` with `password`, plus `url` where the server address is not fixed.  Credentials are verified against the service before anything is stored, so a wrong password is refused and  nothing is saved. The caller needs the rights to create rooms, and the portal-wide third-party switch has to  be on, otherwise the call is refused. A new account is attached to the Rooms section and becomes available as  room storage for `POST api/2.0/files/rooms/thirdparty/{id}`. Connecting twice with the same title creates two  separate accounts.
     * @summary Connect a third-party account
     * @param {FilesThirdPartyIntegrationApiSaveThirdPartyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public saveThirdParty(requestParameters: ThirdPartyIntegrationApiSaveThirdPartyRequest = {}, options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).saveThirdParty(requestParameters.thirdPartyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Connects the third-party storage account the portal writes its backups to, and returns the folder that stands  for its root. Only a portal administrator may call it, and the portal-wide third-party switch has to be on;  other callers are refused. The account is portal-wide and single: a second call does not add another one but  re-authenticates and retitles the existing one, which makes the operation safe to repeat with the same body.  The credentials follow the same rules as in `POST api/2.0/files/thirdparty` - an authorization code in `token`  for the OAuth services, `login` with `password` and, where the server address is not fixed, `url` for the  WebDAV family and SharePoint - and are verified against the service before anything is stored, so a wrong  password leaves the previous account untouched. The account is deliberately absent from  `GET api/2.0/files/thirdparty`; read it back with `GET api/2.0/files/thirdparty/backup` and remove it with  `DELETE api/2.0/files/thirdparty/{providerId}`.
     * @summary Connect the third-party backup storage
     * @param {FilesThirdPartyIntegrationApiSaveThirdPartyBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public saveThirdPartyBackup(requestParameters: ThirdPartyIntegrationApiSaveThirdPartyBackupRequest = {}, options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).saveThirdPartyBackup(requestParameters.thirdPartyBackupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

