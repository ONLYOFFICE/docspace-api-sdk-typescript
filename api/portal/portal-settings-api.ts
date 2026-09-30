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
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TenantWrapper } from '../../models';
/**
 * PortalSettingsApi - axios parameter creator
 * @export
 */
export const PortalSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Brings a deactivated portal back to the active state, so its users can sign in again and its domain serves the  portal as before. It is reached only with the reactivation link that `POST api/2.0/portal/suspend` mails to  the portal owner: that link authorizes the call in place of an authentication token, and no ordinary token is  accepted here. The call is mutating and idempotent - it sets the status to active, re-applies the portal\'s  Content Security Policy and refreshes its base domain, and a portal that is already active is simply left  active. Nothing is returned in the body; read the result from `status` in `GET api/2.0/portal`. Deactivating  the portal again means asking for a fresh letter with `POST api/2.0/portal/suspend`, because each link is  issued for one operation. This operation cannot bring back a removed portal: the deletion behind  `DELETE api/2.0/portal/delete` is final, and a removed portal has to be restored from a backup instead.
         * @summary Restore a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for continuePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-portal/
         */
        continuePortal: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/continue`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
         * Removes this portal for good: its rooms, files, accounts, settings and OAuth clients go with it and its domain  stops serving the portal. It is reached only with the removal link that `POST api/2.0/portal/delete` mails to  the portal owner - that link authorizes the call instead of an authentication token - and the owner is checked  again here; on a server installation the last remaining space cannot be removed. The call is destructive and  cannot be undone, and there is no restore operation, so take a backup with `POST api/2.0/backup/startbackup`  first when the content still matters. It keeps working while the portal\'s payment has lapsed. Along the way  the portal is dropped from the hosting cache, the owner is mailed a confirmation, the removal is written to  the audit trail and, for a portal that was paying, the support team is notified as well. The answer is the  absolute URL of the feedback form to send the departing owner to. To pause the portal instead of erasing it,  use `PUT api/2.0/portal/suspend`.
         * @summary Delete a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deletePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal/
         */
        deletePortal: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/delete`;
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
         * Returns the portal the request was addressed to - the tenant behind the current domain - with its name, alias,  owner, language, time zone, industry, trusted-domain rules, version and creation date. Nothing has to be  called first, the call is read-only and idempotent, and it keeps answering while the portal\'s payment has  lapsed. What comes back depends on the caller\'s rights: a caller with the portal-settings right gets the whole  record, while every other user gets an object in which only `tenantId` is filled and no error is raised - so  check `tenantAlias` for null before reading the rest. `status` says whether the portal is active, suspended or  pending removal, and `creationDateTime`, `statusChangeDate`, `lastModified` and `versionChanged` are UTC.  `region` names the data-center region a hosted portal is served from and stays empty on a server installation  and when the portal cache is off, while `hostedRegion` is the region written on the record itself. The  settings of the same portal are read with `GET api/2.0/settings`, its tariff with `GET api/2.0/portal/tariff`  and its quota with `GET api/2.0/portal/quota`.
         * @summary Get portal information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-information/
         */
        getPortalInformation: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal`;
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
         * Turns a portal-relative path into the absolute URL a client can open, filling in the scheme, the current  portal domain and the virtual root the portal is hosted on. Any signed-in user may call it, nothing has to be  called first, and the call is read-only and idempotent - it neither checks that the path exists nor that the  caller is allowed to open it. `virtualPath` is taken as it is: an omitted or empty value yields the portal  root, a value starting with `/` is appended to that root, a value starting with `~/` is resolved against the  virtual root, and a value that already starts with `http://`, `https://` or `mailto:` is handed back  unchanged. The answer is a bare JSON string. The domain in the result is the one the portal answers on right  now, so a renamed portal starts returning the new domain without any change on the client. Use it to build  links that have to survive a rename; the portal\'s own addresses and settings are read from  `GET api/2.0/settings` instead.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The path to resolve. It is taken as it is: an omitted or empty value yields the portal root, a value starting  with `/` is appended to that root, a value starting with `~/` is resolved against the virtual root, and one  that already begins with `http://`, `https://` or `mailto:` is handed back unchanged. Nothing checks that the  path exists or that the caller may open it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-path/
         */
        getPortalPath: async (virtualPath?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/path`;
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

            if (virtualPath !== undefined) {
                localVarQueryParameter['virtualPath'] = virtualPath;
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
         * Mails the portal owner the confirmation link that removes this portal; nothing about the portal changes until  that link is used. The caller has to be the portal owner and hold the portal-settings right, and on a server  installation the last remaining space cannot be removed - the call is refused when every other space has  limited access. The letter goes to the owner\'s own address whoever asked for it, and it warns about the  subscription that will stop renewing when the portal is on a paid plan. The operation keeps working while the  portal\'s payment has lapsed, is mutating only in that it sends a message, and is rate-limited to five requests  per fifteen minutes per user and path by default, answering 429 above that. Nothing is returned in the body.  The link in the letter authorizes `DELETE api/2.0/portal/delete`, which deletes the portal with all of its  rooms, files and accounts and cannot be undone. To pause the portal instead of deleting it, send the  deactivation letter with `POST api/2.0/portal/suspend`.
         * @summary Send removal instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendDeleteInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-delete-instructions/
         */
        sendDeleteInstructions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/delete`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Mails the portal owner the two confirmation links that deactivate this portal and bring it back again, and  records the request in the audit trail; the portal itself is not changed here. The caller has to be the portal  owner and hold the portal-settings right, and on a server installation the last remaining space cannot be  deactivated - the call is refused when every other space has limited access. The letter always goes to the  owner\'s own address, and the operation keeps working while the portal\'s payment has lapsed. It is mutating  only in that it sends a message, and it is rate-limited to five requests per fifteen minutes per user and path  by default, answering 429 above that. Nothing is returned in the body, so a client cannot tell from the answer  whether the mail was delivered. The first link in the letter authorizes `PUT api/2.0/portal/suspend`, which  suspends the portal, and the second one authorizes `PUT api/2.0/portal/continue`, which makes it active again.  To remove the portal instead of pausing it, use `POST api/2.0/portal/delete`.
         * @summary Send suspension instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendSuspendInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-suspend-instructions/
         */
        sendSuspendInstructions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/suspend`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deactivates this portal: its status becomes suspended and its users can no longer work in it, while all of its  rooms, files and accounts stay untouched. It is reached only with the deactivation link that  `POST api/2.0/portal/suspend` mails to the portal owner - that link authorizes the call instead of an  authentication token - and the owner is checked again here, so a link issued for another account is refused.  On a server installation the last remaining space cannot be deactivated. The call is mutating and idempotent:  it sets the status, records the deactivation in the audit trail and refreshes the portal\'s base domain, and  repeating it leaves the portal suspended. Nothing is returned in the body; the new state is read from `status`  in `GET api/2.0/portal`. Bring the portal back with `PUT api/2.0/portal/continue`, using the second link from  the same letter. To remove the portal and its content for good, use `DELETE api/2.0/portal/delete` instead -  that cannot be undone.
         * @summary Deactivate a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for suspendPortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/suspend-portal/
         */
        suspendPortal: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/suspend`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
    }
};

/**
 * PortalSettingsApi - functional programming interface
 * @export
 */
export const PortalSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortalSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Brings a deactivated portal back to the active state, so its users can sign in again and its domain serves the  portal as before. It is reached only with the reactivation link that `POST api/2.0/portal/suspend` mails to  the portal owner: that link authorizes the call in place of an authentication token, and no ordinary token is  accepted here. The call is mutating and idempotent - it sets the status to active, re-applies the portal\'s  Content Security Policy and refreshes its base domain, and a portal that is already active is simply left  active. Nothing is returned in the body; read the result from `status` in `GET api/2.0/portal`. Deactivating  the portal again means asking for a fresh letter with `POST api/2.0/portal/suspend`, because each link is  issued for one operation. This operation cannot bring back a removed portal: the deletion behind  `DELETE api/2.0/portal/delete` is final, and a removed portal has to be restored from a backup instead.
         * @summary Restore a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for continuePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-portal/
         */
        async continuePortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.continuePortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.continuePortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes this portal for good: its rooms, files, accounts, settings and OAuth clients go with it and its domain  stops serving the portal. It is reached only with the removal link that `POST api/2.0/portal/delete` mails to  the portal owner - that link authorizes the call instead of an authentication token - and the owner is checked  again here; on a server installation the last remaining space cannot be removed. The call is destructive and  cannot be undone, and there is no restore operation, so take a backup with `POST api/2.0/backup/startbackup`  first when the content still matters. It keeps working while the portal\'s payment has lapsed. Along the way  the portal is dropped from the hosting cache, the owner is mailed a confirmation, the removal is written to  the audit trail and, for a portal that was paying, the support team is notified as well. The answer is the  absolute URL of the feedback form to send the departing owner to. To pause the portal instead of erasing it,  use `PUT api/2.0/portal/suspend`.
         * @summary Delete a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deletePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal/
         */
        async deletePortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.deletePortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal the request was addressed to - the tenant behind the current domain - with its name, alias,  owner, language, time zone, industry, trusted-domain rules, version and creation date. Nothing has to be  called first, the call is read-only and idempotent, and it keeps answering while the portal\'s payment has  lapsed. What comes back depends on the caller\'s rights: a caller with the portal-settings right gets the whole  record, while every other user gets an object in which only `tenantId` is filled and no error is raised - so  check `tenantAlias` for null before reading the rest. `status` says whether the portal is active, suspended or  pending removal, and `creationDateTime`, `statusChangeDate`, `lastModified` and `versionChanged` are UTC.  `region` names the data-center region a hosted portal is served from and stays empty on a server installation  and when the portal cache is off, while `hostedRegion` is the region written on the record itself. The  settings of the same portal are read with `GET api/2.0/settings`, its tariff with `GET api/2.0/portal/tariff`  and its quota with `GET api/2.0/portal/quota`.
         * @summary Get portal information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-information/
         */
        async getPortalInformation(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalInformation(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.getPortalInformation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns a portal-relative path into the absolute URL a client can open, filling in the scheme, the current  portal domain and the virtual root the portal is hosted on. Any signed-in user may call it, nothing has to be  called first, and the call is read-only and idempotent - it neither checks that the path exists nor that the  caller is allowed to open it. `virtualPath` is taken as it is: an omitted or empty value yields the portal  root, a value starting with `/` is appended to that root, a value starting with `~/` is resolved against the  virtual root, and a value that already starts with `http://`, `https://` or `mailto:` is handed back  unchanged. The answer is a bare JSON string. The domain in the result is the one the portal answers on right  now, so a renamed portal starts returning the new domain without any change on the client. Use it to build  links that have to survive a rename; the portal\'s own addresses and settings are read from  `GET api/2.0/settings` instead.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The path to resolve. It is taken as it is: an omitted or empty value yields the portal root, a value starting  with `/` is appended to that root, a value starting with `~/` is resolved against the virtual root, and one  that already begins with `http://`, `https://` or `mailto:` is handed back unchanged. Nothing checks that the  path exists or that the caller may open it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-path/
         */
        async getPortalPath(virtualPath?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalPath(virtualPath, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.getPortalPath']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mails the portal owner the confirmation link that removes this portal; nothing about the portal changes until  that link is used. The caller has to be the portal owner and hold the portal-settings right, and on a server  installation the last remaining space cannot be removed - the call is refused when every other space has  limited access. The letter goes to the owner\'s own address whoever asked for it, and it warns about the  subscription that will stop renewing when the portal is on a paid plan. The operation keeps working while the  portal\'s payment has lapsed, is mutating only in that it sends a message, and is rate-limited to five requests  per fifteen minutes per user and path by default, answering 429 above that. Nothing is returned in the body.  The link in the letter authorizes `DELETE api/2.0/portal/delete`, which deletes the portal with all of its  rooms, files and accounts and cannot be undone. To pause the portal instead of deleting it, send the  deactivation letter with `POST api/2.0/portal/suspend`.
         * @summary Send removal instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendDeleteInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-delete-instructions/
         */
        async sendDeleteInstructions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendDeleteInstructions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.sendDeleteInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mails the portal owner the two confirmation links that deactivate this portal and bring it back again, and  records the request in the audit trail; the portal itself is not changed here. The caller has to be the portal  owner and hold the portal-settings right, and on a server installation the last remaining space cannot be  deactivated - the call is refused when every other space has limited access. The letter always goes to the  owner\'s own address, and the operation keeps working while the portal\'s payment has lapsed. It is mutating  only in that it sends a message, and it is rate-limited to five requests per fifteen minutes per user and path  by default, answering 429 above that. Nothing is returned in the body, so a client cannot tell from the answer  whether the mail was delivered. The first link in the letter authorizes `PUT api/2.0/portal/suspend`, which  suspends the portal, and the second one authorizes `PUT api/2.0/portal/continue`, which makes it active again.  To remove the portal instead of pausing it, use `POST api/2.0/portal/delete`.
         * @summary Send suspension instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendSuspendInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-suspend-instructions/
         */
        async sendSuspendInstructions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSuspendInstructions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.sendSuspendInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deactivates this portal: its status becomes suspended and its users can no longer work in it, while all of its  rooms, files and accounts stay untouched. It is reached only with the deactivation link that  `POST api/2.0/portal/suspend` mails to the portal owner - that link authorizes the call instead of an  authentication token - and the owner is checked again here, so a link issued for another account is refused.  On a server installation the last remaining space cannot be deactivated. The call is mutating and idempotent:  it sets the status, records the deactivation in the audit trail and refreshes the portal\'s base domain, and  repeating it leaves the portal suspended. Nothing is returned in the body; the new state is read from `status`  in `GET api/2.0/portal`. Bring the portal back with `PUT api/2.0/portal/continue`, using the second link from  the same letter. To remove the portal and its content for good, use `DELETE api/2.0/portal/delete` instead -  that cannot be undone.
         * @summary Deactivate a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for suspendPortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/suspend-portal/
         */
        async suspendPortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.suspendPortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalSettingsApi.suspendPortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PortalSettingsApi - factory interface
 * @export
 */
export const PortalSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortalSettingsApiFp(configuration)
    return {
        /**
         * Brings a deactivated portal back to the active state, so its users can sign in again and its domain serves the  portal as before. It is reached only with the reactivation link that `POST api/2.0/portal/suspend` mails to  the portal owner: that link authorizes the call in place of an authentication token, and no ordinary token is  accepted here. The call is mutating and idempotent - it sets the status to active, re-applies the portal\'s  Content Security Policy and refreshes its base domain, and a portal that is already active is simply left  active. Nothing is returned in the body; read the result from `status` in `GET api/2.0/portal`. Deactivating  the portal again means asking for a fresh letter with `POST api/2.0/portal/suspend`, because each link is  issued for one operation. This operation cannot bring back a removed portal: the deletion behind  `DELETE api/2.0/portal/delete` is final, and a removed portal has to be restored from a backup instead.
         * @summary Restore a portal
         * @param {*} [options] Override http request option.
         * REST API Reference for continuePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-portal/
         * @throws {RequiredError}
         */
        continuePortal(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.continuePortal(options).then((request) => request(axios, basePath));
        },
        /**
         * Removes this portal for good: its rooms, files, accounts, settings and OAuth clients go with it and its domain  stops serving the portal. It is reached only with the removal link that `POST api/2.0/portal/delete` mails to  the portal owner - that link authorizes the call instead of an authentication token - and the owner is checked  again here; on a server installation the last remaining space cannot be removed. The call is destructive and  cannot be undone, and there is no restore operation, so take a backup with `POST api/2.0/backup/startbackup`  first when the content still matters. It keeps working while the portal\'s payment has lapsed. Along the way  the portal is dropped from the hosting cache, the owner is mailed a confirmation, the removal is written to  the audit trail and, for a portal that was paying, the support team is notified as well. The answer is the  absolute URL of the feedback form to send the departing owner to. To pause the portal instead of erasing it,  use `PUT api/2.0/portal/suspend`.
         * @summary Delete a portal
         * @param {*} [options] Override http request option.
         * REST API Reference for deletePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal/
         * @throws {RequiredError}
         */
        deletePortal(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.deletePortal(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal the request was addressed to - the tenant behind the current domain - with its name, alias,  owner, language, time zone, industry, trusted-domain rules, version and creation date. Nothing has to be  called first, the call is read-only and idempotent, and it keeps answering while the portal\'s payment has  lapsed. What comes back depends on the caller\'s rights: a caller with the portal-settings right gets the whole  record, while every other user gets an object in which only `tenantId` is filled and no error is raised - so  check `tenantAlias` for null before reading the rest. `status` says whether the portal is active, suspended or  pending removal, and `creationDateTime`, `statusChangeDate`, `lastModified` and `versionChanged` are UTC.  `region` names the data-center region a hosted portal is served from and stays empty on a server installation  and when the portal cache is off, while `hostedRegion` is the region written on the record itself. The  settings of the same portal are read with `GET api/2.0/settings`, its tariff with `GET api/2.0/portal/tariff`  and its quota with `GET api/2.0/portal/quota`.
         * @summary Get portal information
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-information/
         * @throws {RequiredError}
         */
        getPortalInformation(options?: RawAxiosRequestConfig): AxiosPromise<TenantWrapper> {
            return localVarFp.getPortalInformation(options).then((request) => request(axios, basePath));
        },
        /**
         * Turns a portal-relative path into the absolute URL a client can open, filling in the scheme, the current  portal domain and the virtual root the portal is hosted on. Any signed-in user may call it, nothing has to be  called first, and the call is read-only and idempotent - it neither checks that the path exists nor that the  caller is allowed to open it. `virtualPath` is taken as it is: an omitted or empty value yields the portal  root, a value starting with `/` is appended to that root, a value starting with `~/` is resolved against the  virtual root, and a value that already starts with `http://`, `https://` or `mailto:` is handed back  unchanged. The answer is a bare JSON string. The domain in the result is the one the portal answers on right  now, so a renamed portal starts returning the new domain without any change on the client. Use it to build  links that have to survive a rename; the portal\'s own addresses and settings are read from  `GET api/2.0/settings` instead.
         * @summary Get a path to the portal
         * @param {PortalSettingsApiGetPortalPathRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-path/
         * @throws {RequiredError}
         */
        getPortalPath(requestParameters: PortalSettingsApiGetPortalPathRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPortalPath(requestParameters.virtualPath, options).then((request) => request(axios, basePath));
        },
        /**
         * Mails the portal owner the confirmation link that removes this portal; nothing about the portal changes until  that link is used. The caller has to be the portal owner and hold the portal-settings right, and on a server  installation the last remaining space cannot be removed - the call is refused when every other space has  limited access. The letter goes to the owner\'s own address whoever asked for it, and it warns about the  subscription that will stop renewing when the portal is on a paid plan. The operation keeps working while the  portal\'s payment has lapsed, is mutating only in that it sends a message, and is rate-limited to five requests  per fifteen minutes per user and path by default, answering 429 above that. Nothing is returned in the body.  The link in the letter authorizes `DELETE api/2.0/portal/delete`, which deletes the portal with all of its  rooms, files and accounts and cannot be undone. To pause the portal instead of deleting it, send the  deactivation letter with `POST api/2.0/portal/suspend`.
         * @summary Send removal instructions
         * @param {*} [options] Override http request option.
         * REST API Reference for sendDeleteInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-delete-instructions/
         * @throws {RequiredError}
         */
        sendDeleteInstructions(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendDeleteInstructions(options).then((request) => request(axios, basePath));
        },
        /**
         * Mails the portal owner the two confirmation links that deactivate this portal and bring it back again, and  records the request in the audit trail; the portal itself is not changed here. The caller has to be the portal  owner and hold the portal-settings right, and on a server installation the last remaining space cannot be  deactivated - the call is refused when every other space has limited access. The letter always goes to the  owner\'s own address, and the operation keeps working while the portal\'s payment has lapsed. It is mutating  only in that it sends a message, and it is rate-limited to five requests per fifteen minutes per user and path  by default, answering 429 above that. Nothing is returned in the body, so a client cannot tell from the answer  whether the mail was delivered. The first link in the letter authorizes `PUT api/2.0/portal/suspend`, which  suspends the portal, and the second one authorizes `PUT api/2.0/portal/continue`, which makes it active again.  To remove the portal instead of pausing it, use `POST api/2.0/portal/delete`.
         * @summary Send suspension instructions
         * @param {*} [options] Override http request option.
         * REST API Reference for sendSuspendInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-suspend-instructions/
         * @throws {RequiredError}
         */
        sendSuspendInstructions(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendSuspendInstructions(options).then((request) => request(axios, basePath));
        },
        /**
         * Deactivates this portal: its status becomes suspended and its users can no longer work in it, while all of its  rooms, files and accounts stay untouched. It is reached only with the deactivation link that  `POST api/2.0/portal/suspend` mails to the portal owner - that link authorizes the call instead of an  authentication token - and the owner is checked again here, so a link issued for another account is refused.  On a server installation the last remaining space cannot be deactivated. The call is mutating and idempotent:  it sets the status, records the deactivation in the audit trail and refreshes the portal\'s base domain, and  repeating it leaves the portal suspended. Nothing is returned in the body; the new state is read from `status`  in `GET api/2.0/portal`. Bring the portal back with `PUT api/2.0/portal/continue`, using the second link from  the same letter. To remove the portal and its content for good, use `DELETE api/2.0/portal/delete` instead -  that cannot be undone.
         * @summary Deactivate a portal
         * @param {*} [options] Override http request option.
         * REST API Reference for suspendPortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/suspend-portal/
         * @throws {RequiredError}
         */
        suspendPortal(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.suspendPortal(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPortalPath operation in PortalSettingsApi.
 * @export
 * @interface PortalSettingsApiGetPortalPathRequest
 */
export interface PortalSettingsApiGetPortalPathRequest {
    /**
     * The path to resolve. It is taken as it is: an omitted or empty value yields the portal root, a value starting  with `/` is appended to that root, a value starting with `~/` is resolved against the virtual root, and one  that already begins with `http://`, `https://` or `mailto:` is handed back unchanged. Nothing checks that the  path exists or that the caller may open it.
     * @type {string}
     * @memberof PortalSettingsApiGetPortalPath
     */
    readonly virtualPath?: string
}

/**
 * PortalSettingsApi - object-oriented interface
 * @export
 * @class PortalSettingsApi
 * @extends {BaseAPI}
 */
export class PortalSettingsApi extends BaseAPI {
    /**
     * Brings a deactivated portal back to the active state, so its users can sign in again and its domain serves the  portal as before. It is reached only with the reactivation link that `POST api/2.0/portal/suspend` mails to  the portal owner: that link authorizes the call in place of an authentication token, and no ordinary token is  accepted here. The call is mutating and idempotent - it sets the status to active, re-applies the portal\'s  Content Security Policy and refreshes its base domain, and a portal that is already active is simply left  active. Nothing is returned in the body; read the result from `status` in `GET api/2.0/portal`. Deactivating  the portal again means asking for a fresh letter with `POST api/2.0/portal/suspend`, because each link is  issued for one operation. This operation cannot bring back a removed portal: the deletion behind  `DELETE api/2.0/portal/delete` is final, and a removed portal has to be restored from a backup instead.
     * @summary Restore a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public continuePortal(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).continuePortal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes this portal for good: its rooms, files, accounts, settings and OAuth clients go with it and its domain  stops serving the portal. It is reached only with the removal link that `POST api/2.0/portal/delete` mails to  the portal owner - that link authorizes the call instead of an authentication token - and the owner is checked  again here; on a server installation the last remaining space cannot be removed. The call is destructive and  cannot be undone, and there is no restore operation, so take a backup with `POST api/2.0/backup/startbackup`  first when the content still matters. It keeps working while the portal\'s payment has lapsed. Along the way  the portal is dropped from the hosting cache, the owner is mailed a confirmation, the removal is written to  the audit trail and, for a portal that was paying, the support team is notified as well. The answer is the  absolute URL of the feedback form to send the departing owner to. To pause the portal instead of erasing it,  use `PUT api/2.0/portal/suspend`.
     * @summary Delete a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public deletePortal(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).deletePortal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal the request was addressed to - the tenant behind the current domain - with its name, alias,  owner, language, time zone, industry, trusted-domain rules, version and creation date. Nothing has to be  called first, the call is read-only and idempotent, and it keeps answering while the portal\'s payment has  lapsed. What comes back depends on the caller\'s rights: a caller with the portal-settings right gets the whole  record, while every other user gets an object in which only `tenantId` is filled and no error is raised - so  check `tenantAlias` for null before reading the rest. `status` says whether the portal is active, suspended or  pending removal, and `creationDateTime`, `statusChangeDate`, `lastModified` and `versionChanged` are UTC.  `region` names the data-center region a hosted portal is served from and stays empty on a server installation  and when the portal cache is off, while `hostedRegion` is the region written on the record itself. The  settings of the same portal are read with `GET api/2.0/settings`, its tariff with `GET api/2.0/portal/tariff`  and its quota with `GET api/2.0/portal/quota`.
     * @summary Get portal information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public getPortalInformation(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).getPortalInformation(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns a portal-relative path into the absolute URL a client can open, filling in the scheme, the current  portal domain and the virtual root the portal is hosted on. Any signed-in user may call it, nothing has to be  called first, and the call is read-only and idempotent - it neither checks that the path exists nor that the  caller is allowed to open it. `virtualPath` is taken as it is: an omitted or empty value yields the portal  root, a value starting with `/` is appended to that root, a value starting with `~/` is resolved against the  virtual root, and a value that already starts with `http://`, `https://` or `mailto:` is handed back  unchanged. The answer is a bare JSON string. The domain in the result is the one the portal answers on right  now, so a renamed portal starts returning the new domain without any change on the client. Use it to build  links that have to survive a rename; the portal\'s own addresses and settings are read from  `GET api/2.0/settings` instead.
     * @summary Get a path to the portal
     * @param {PortalSettingsApiGetPortalPathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public getPortalPath(requestParameters: PortalSettingsApiGetPortalPathRequest = {}, options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).getPortalPath(requestParameters.virtualPath, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mails the portal owner the confirmation link that removes this portal; nothing about the portal changes until  that link is used. The caller has to be the portal owner and hold the portal-settings right, and on a server  installation the last remaining space cannot be removed - the call is refused when every other space has  limited access. The letter goes to the owner\'s own address whoever asked for it, and it warns about the  subscription that will stop renewing when the portal is on a paid plan. The operation keeps working while the  portal\'s payment has lapsed, is mutating only in that it sends a message, and is rate-limited to five requests  per fifteen minutes per user and path by default, answering 429 above that. Nothing is returned in the body.  The link in the letter authorizes `DELETE api/2.0/portal/delete`, which deletes the portal with all of its  rooms, files and accounts and cannot be undone. To pause the portal instead of deleting it, send the  deactivation letter with `POST api/2.0/portal/suspend`.
     * @summary Send removal instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public sendDeleteInstructions(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).sendDeleteInstructions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mails the portal owner the two confirmation links that deactivate this portal and bring it back again, and  records the request in the audit trail; the portal itself is not changed here. The caller has to be the portal  owner and hold the portal-settings right, and on a server installation the last remaining space cannot be  deactivated - the call is refused when every other space has limited access. The letter always goes to the  owner\'s own address, and the operation keeps working while the portal\'s payment has lapsed. It is mutating  only in that it sends a message, and it is rate-limited to five requests per fifteen minutes per user and path  by default, answering 429 above that. Nothing is returned in the body, so a client cannot tell from the answer  whether the mail was delivered. The first link in the letter authorizes `PUT api/2.0/portal/suspend`, which  suspends the portal, and the second one authorizes `PUT api/2.0/portal/continue`, which makes it active again.  To remove the portal instead of pausing it, use `POST api/2.0/portal/delete`.
     * @summary Send suspension instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public sendSuspendInstructions(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).sendSuspendInstructions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deactivates this portal: its status becomes suspended and its users can no longer work in it, while all of its  rooms, files and accounts stay untouched. It is reached only with the deactivation link that  `POST api/2.0/portal/suspend` mails to the portal owner - that link authorizes the call instead of an  authentication token - and the owner is checked again here, so a link issued for another account is refused.  On a server installation the last remaining space cannot be deactivated. The call is mutating and idempotent:  it sets the status, records the deactivation in the audit trail and refreshes the portal\'s base domain, and  repeating it leaves the portal suspended. Nothing is returned in the body; the new state is read from `status`  in `GET api/2.0/portal`. Bring the portal back with `PUT api/2.0/portal/continue`, using the second link from  the same letter. To remove the portal and its content for good, use `DELETE api/2.0/portal/delete` instead -  that cannot be undone.
     * @summary Deactivate a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalSettingsApi
     */
    public suspendPortal(options?: RawAxiosRequestConfig) {
        return PortalSettingsApiFp(this.configuration).suspendPortal(options).then((request) => request(this.axios, this.basePath));
    }
}

