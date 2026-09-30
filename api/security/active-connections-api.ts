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
import type { ActiveConnectionsWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * ActiveConnectionsApi - axios parameter creator
 * @export
 */
export const ActiveConnectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Lists the connections the calling user currently has open on this portal - one item per successful sign-in  that is still active - so a client can show where the account is signed in and close what does not belong  there. Any signed-in user may call it, nothing has to be called first, and the answer always covers the caller  alone: the operation is read-only, idempotent and cannot show another user\'s connections. Items cover the last  year and are ordered newest sign-in first, with the caller\'s own connection moved to the top and its browser,  platform, IP address and location refreshed from the current request. `loginEvent` is the ID of that own  connection and is `0` when the request was authenticated with a token in the `Authorization` header instead of  the portal cookie; nothing is then marked as current, and a user with no stored connections gets a single item  describing the current request. `country` and `city` are resolved from the IP address and stay empty when it  cannot be located. Pass an item\'s `id` to `PUT api/2.0/security/activeconnections/logout/{loginEventId}` to  end that one connection.
         * @summary Get active connections
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllActiveConnections operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-active-connections/
         */
        getAllActiveConnections: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/activeconnections`;
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
         * Closes one active connection: the sign-in behind `loginEventId` is marked inactive, the token and cookie tied  to it stop working, the client holding it is disconnected and a logout entry is written to the portal audit  trail. Take `loginEventId` from the `id` of an item of `GET api/2.0/security/activeconnections`, which also  reports in `loginEvent` which connection the caller is using, so a client can avoid closing its own. A user  may close their own connections, while closing somebody else\'s requires a DocSpace administrator and any other  caller is refused with 403. The call is mutating, destructive for that one session and idempotent, and it  leaves every other connection of the user alone - `PUT api/2.0/security/activeconnections/logoutallexceptthis`  is the way to close the rest in one go. Only `true` means the connection was open and has just been closed;  `false` comes back when this portal has no such active connection, including one that was already closed, and  after any other failure.
         * @summary Log out one connection
         * @param {number} loginEventId The sign-in to act on, by login event ID. Take it from the `id` of an item of  `GET api/2.0/security/activeconnections`, which also marks the connection the caller is using, so a client  can avoid picking its own.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutActiveConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-active-connection/
         */
        logOutActiveConnection: async (loginEventId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginEventId' is not null or undefined
            assertParamExists('logOutActiveConnection', 'loginEventId', loginEventId)

            const localVarPath = `/api/2.0/security/activeconnections/logout/{loginEventId}`
                .replace(`{${"loginEventId"}}`, encodeURIComponent(String(loginEventId)));
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
         * Closes every active connection of the calling user and returns the link that user has to open to set a new  password - the answer to a suspicious sign-in seen in `GET api/2.0/security/activeconnections`. Any signed-in  user may call it for their own account and nothing has to be called first; the same clean-up for somebody else  is `PUT api/2.0/security/activeconnections/logoutall/{userId}`. The call is mutating and destructive for  sessions - every token and cookie issued to the user before it stops working and the clients holding them are  disconnected - and it is not idempotent: the request is written to the portal audit trail, which invalidates  the link any earlier call returned, and the caller\'s own client is handed a fresh cookie in the response and  stays signed in through a new connection. The password itself is not changed here, and the link is handed back  to the caller rather than mailed to the user: the URL carries a time-limited `PasswordChange` key, which the  confirmation page it opens - or `PUT api/2.0/people/{userid}/password` - needs to accept the new password. A  failure is swallowed instead of reported, so an empty body with status 200 means nothing was done and the call  has to be repeated.
         * @summary Log out and reset password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutAllActiveConnectionsChangePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-change-password/
         */
        logOutAllActiveConnectionsChangePassword: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/activeconnections/logoutallchangepassword`;
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
         * Closes every active connection of one portal user: the connections are marked inactive, every token and cookie  issued to that user before the call stops working, the clients holding them are disconnected and a logout  entry is written to the portal audit trail. Nothing has to be called first; `userId` is the portal user ID  that `GET api/2.0/people` returns. A user may pass their own ID, while ending somebody else\'s connections  requires a DocSpace administrator and any other caller is refused with 403. The call is mutating, destructive  for those sessions and idempotent - a user with nothing open is not an error - and it returns no content, so  the state afterwards is read from `GET api/2.0/security/activeconnections`. A caller who ends their own  connections is handed a fresh cookie in the response and stays signed in through a new connection. Nothing  else about the user changes: the account stays enabled and the password stays valid, and to keep the current  connection alive instead use `PUT api/2.0/security/activeconnections/logoutallexceptthis`.
         * @summary Log out a user everywhere
         * @param {string} userId The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. Acting on an account  other than the caller\'s own generally needs administrator rights.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutAllActiveConnectionsForUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-for-user/
         */
        logOutAllActiveConnectionsForUser: async (userId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('logOutAllActiveConnectionsForUser', 'userId', userId)

            const localVarPath = `/api/2.0/security/activeconnections/logoutall/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * Closes every active connection of the calling user except the one this request was made with, so the current  client keeps working while every other browser and device is signed out. Any signed-in user may call it for  their own account and nothing has to be called first. The connection to keep is the one behind the portal  authentication cookie: a request authenticated with a token in the `Authorization` header has none, and then  every connection of the user is closed, including the one that token belongs to - read `loginEvent` from  `GET api/2.0/security/activeconnections` first to see which connection, if any, will survive. The call is  mutating and destructive for the other sessions, and idempotent: the tokens behind them stop working, their  clients are disconnected at once and a logout entry is written to the portal audit trail. It answers with the  display name of the calling user, while an empty answer with status 200 means the attempt failed and nothing  can be assumed about what was closed.
         * @summary Log out other connections
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutAllExceptThisConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-except-this-connection/
         */
        logOutAllExceptThisConnection: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/activeconnections/logoutallexceptthis`;
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
 * ActiveConnectionsApi - functional programming interface
 * @export
 */
export const ActiveConnectionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ActiveConnectionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Lists the connections the calling user currently has open on this portal - one item per successful sign-in  that is still active - so a client can show where the account is signed in and close what does not belong  there. Any signed-in user may call it, nothing has to be called first, and the answer always covers the caller  alone: the operation is read-only, idempotent and cannot show another user\'s connections. Items cover the last  year and are ordered newest sign-in first, with the caller\'s own connection moved to the top and its browser,  platform, IP address and location refreshed from the current request. `loginEvent` is the ID of that own  connection and is `0` when the request was authenticated with a token in the `Authorization` header instead of  the portal cookie; nothing is then marked as current, and a user with no stored connections gets a single item  describing the current request. `country` and `city` are resolved from the IP address and stay empty when it  cannot be located. Pass an item\'s `id` to `PUT api/2.0/security/activeconnections/logout/{loginEventId}` to  end that one connection.
         * @summary Get active connections
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllActiveConnections operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-active-connections/
         */
        async getAllActiveConnections(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActiveConnectionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllActiveConnections(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ActiveConnectionsApi.getAllActiveConnections']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Closes one active connection: the sign-in behind `loginEventId` is marked inactive, the token and cookie tied  to it stop working, the client holding it is disconnected and a logout entry is written to the portal audit  trail. Take `loginEventId` from the `id` of an item of `GET api/2.0/security/activeconnections`, which also  reports in `loginEvent` which connection the caller is using, so a client can avoid closing its own. A user  may close their own connections, while closing somebody else\'s requires a DocSpace administrator and any other  caller is refused with 403. The call is mutating, destructive for that one session and idempotent, and it  leaves every other connection of the user alone - `PUT api/2.0/security/activeconnections/logoutallexceptthis`  is the way to close the rest in one go. Only `true` means the connection was open and has just been closed;  `false` comes back when this portal has no such active connection, including one that was already closed, and  after any other failure.
         * @summary Log out one connection
         * @param {number} loginEventId The sign-in to act on, by login event ID. Take it from the `id` of an item of  `GET api/2.0/security/activeconnections`, which also marks the connection the caller is using, so a client  can avoid picking its own.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutActiveConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-active-connection/
         */
        async logOutActiveConnection(loginEventId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logOutActiveConnection(loginEventId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ActiveConnectionsApi.logOutActiveConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Closes every active connection of the calling user and returns the link that user has to open to set a new  password - the answer to a suspicious sign-in seen in `GET api/2.0/security/activeconnections`. Any signed-in  user may call it for their own account and nothing has to be called first; the same clean-up for somebody else  is `PUT api/2.0/security/activeconnections/logoutall/{userId}`. The call is mutating and destructive for  sessions - every token and cookie issued to the user before it stops working and the clients holding them are  disconnected - and it is not idempotent: the request is written to the portal audit trail, which invalidates  the link any earlier call returned, and the caller\'s own client is handed a fresh cookie in the response and  stays signed in through a new connection. The password itself is not changed here, and the link is handed back  to the caller rather than mailed to the user: the URL carries a time-limited `PasswordChange` key, which the  confirmation page it opens - or `PUT api/2.0/people/{userid}/password` - needs to accept the new password. A  failure is swallowed instead of reported, so an empty body with status 200 means nothing was done and the call  has to be repeated.
         * @summary Log out and reset password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutAllActiveConnectionsChangePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-change-password/
         */
        async logOutAllActiveConnectionsChangePassword(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logOutAllActiveConnectionsChangePassword(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ActiveConnectionsApi.logOutAllActiveConnectionsChangePassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Closes every active connection of one portal user: the connections are marked inactive, every token and cookie  issued to that user before the call stops working, the clients holding them are disconnected and a logout  entry is written to the portal audit trail. Nothing has to be called first; `userId` is the portal user ID  that `GET api/2.0/people` returns. A user may pass their own ID, while ending somebody else\'s connections  requires a DocSpace administrator and any other caller is refused with 403. The call is mutating, destructive  for those sessions and idempotent - a user with nothing open is not an error - and it returns no content, so  the state afterwards is read from `GET api/2.0/security/activeconnections`. A caller who ends their own  connections is handed a fresh cookie in the response and stays signed in through a new connection. Nothing  else about the user changes: the account stays enabled and the password stays valid, and to keep the current  connection alive instead use `PUT api/2.0/security/activeconnections/logoutallexceptthis`.
         * @summary Log out a user everywhere
         * @param {string} userId The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. Acting on an account  other than the caller\'s own generally needs administrator rights.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutAllActiveConnectionsForUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-for-user/
         */
        async logOutAllActiveConnectionsForUser(userId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logOutAllActiveConnectionsForUser(userId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ActiveConnectionsApi.logOutAllActiveConnectionsForUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Closes every active connection of the calling user except the one this request was made with, so the current  client keeps working while every other browser and device is signed out. Any signed-in user may call it for  their own account and nothing has to be called first. The connection to keep is the one behind the portal  authentication cookie: a request authenticated with a token in the `Authorization` header has none, and then  every connection of the user is closed, including the one that token belongs to - read `loginEvent` from  `GET api/2.0/security/activeconnections` first to see which connection, if any, will survive. The call is  mutating and destructive for the other sessions, and idempotent: the tokens behind them stop working, their  clients are disconnected at once and a logout entry is written to the portal audit trail. It answers with the  display name of the calling user, while an empty answer with status 200 means the attempt failed and nothing  can be assumed about what was closed.
         * @summary Log out other connections
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logOutAllExceptThisConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-except-this-connection/
         */
        async logOutAllExceptThisConnection(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logOutAllExceptThisConnection(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ActiveConnectionsApi.logOutAllExceptThisConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ActiveConnectionsApi - factory interface
 * @export
 */
export const ActiveConnectionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActiveConnectionsApiFp(configuration)
    return {
        /**
         * Lists the connections the calling user currently has open on this portal - one item per successful sign-in  that is still active - so a client can show where the account is signed in and close what does not belong  there. Any signed-in user may call it, nothing has to be called first, and the answer always covers the caller  alone: the operation is read-only, idempotent and cannot show another user\'s connections. Items cover the last  year and are ordered newest sign-in first, with the caller\'s own connection moved to the top and its browser,  platform, IP address and location refreshed from the current request. `loginEvent` is the ID of that own  connection and is `0` when the request was authenticated with a token in the `Authorization` header instead of  the portal cookie; nothing is then marked as current, and a user with no stored connections gets a single item  describing the current request. `country` and `city` are resolved from the IP address and stay empty when it  cannot be located. Pass an item\'s `id` to `PUT api/2.0/security/activeconnections/logout/{loginEventId}` to  end that one connection.
         * @summary Get active connections
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllActiveConnections operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-active-connections/
         * @throws {RequiredError}
         */
        getAllActiveConnections(options?: RawAxiosRequestConfig): AxiosPromise<ActiveConnectionsWrapper> {
            return localVarFp.getAllActiveConnections(options).then((request) => request(axios, basePath));
        },
        /**
         * Closes one active connection: the sign-in behind `loginEventId` is marked inactive, the token and cookie tied  to it stop working, the client holding it is disconnected and a logout entry is written to the portal audit  trail. Take `loginEventId` from the `id` of an item of `GET api/2.0/security/activeconnections`, which also  reports in `loginEvent` which connection the caller is using, so a client can avoid closing its own. A user  may close their own connections, while closing somebody else\'s requires a DocSpace administrator and any other  caller is refused with 403. The call is mutating, destructive for that one session and idempotent, and it  leaves every other connection of the user alone - `PUT api/2.0/security/activeconnections/logoutallexceptthis`  is the way to close the rest in one go. Only `true` means the connection was open and has just been closed;  `false` comes back when this portal has no such active connection, including one that was already closed, and  after any other failure.
         * @summary Log out one connection
         * @param {ActiveConnectionsApiLogOutActiveConnectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for logOutActiveConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-active-connection/
         * @throws {RequiredError}
         */
        logOutActiveConnection(requestParameters: ActiveConnectionsApiLogOutActiveConnectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.logOutActiveConnection(requestParameters.loginEventId, options).then((request) => request(axios, basePath));
        },
        /**
         * Closes every active connection of the calling user and returns the link that user has to open to set a new  password - the answer to a suspicious sign-in seen in `GET api/2.0/security/activeconnections`. Any signed-in  user may call it for their own account and nothing has to be called first; the same clean-up for somebody else  is `PUT api/2.0/security/activeconnections/logoutall/{userId}`. The call is mutating and destructive for  sessions - every token and cookie issued to the user before it stops working and the clients holding them are  disconnected - and it is not idempotent: the request is written to the portal audit trail, which invalidates  the link any earlier call returned, and the caller\'s own client is handed a fresh cookie in the response and  stays signed in through a new connection. The password itself is not changed here, and the link is handed back  to the caller rather than mailed to the user: the URL carries a time-limited `PasswordChange` key, which the  confirmation page it opens - or `PUT api/2.0/people/{userid}/password` - needs to accept the new password. A  failure is swallowed instead of reported, so an empty body with status 200 means nothing was done and the call  has to be repeated.
         * @summary Log out and reset password
         * @param {*} [options] Override http request option.
         * REST API Reference for logOutAllActiveConnectionsChangePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-change-password/
         * @throws {RequiredError}
         */
        logOutAllActiveConnectionsChangePassword(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.logOutAllActiveConnectionsChangePassword(options).then((request) => request(axios, basePath));
        },
        /**
         * Closes every active connection of one portal user: the connections are marked inactive, every token and cookie  issued to that user before the call stops working, the clients holding them are disconnected and a logout  entry is written to the portal audit trail. Nothing has to be called first; `userId` is the portal user ID  that `GET api/2.0/people` returns. A user may pass their own ID, while ending somebody else\'s connections  requires a DocSpace administrator and any other caller is refused with 403. The call is mutating, destructive  for those sessions and idempotent - a user with nothing open is not an error - and it returns no content, so  the state afterwards is read from `GET api/2.0/security/activeconnections`. A caller who ends their own  connections is handed a fresh cookie in the response and stays signed in through a new connection. Nothing  else about the user changes: the account stays enabled and the password stays valid, and to keep the current  connection alive instead use `PUT api/2.0/security/activeconnections/logoutallexceptthis`.
         * @summary Log out a user everywhere
         * @param {ActiveConnectionsApiLogOutAllActiveConnectionsForUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for logOutAllActiveConnectionsForUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-for-user/
         * @throws {RequiredError}
         */
        logOutAllActiveConnectionsForUser(requestParameters: ActiveConnectionsApiLogOutAllActiveConnectionsForUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.logOutAllActiveConnectionsForUser(requestParameters.userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Closes every active connection of the calling user except the one this request was made with, so the current  client keeps working while every other browser and device is signed out. Any signed-in user may call it for  their own account and nothing has to be called first. The connection to keep is the one behind the portal  authentication cookie: a request authenticated with a token in the `Authorization` header has none, and then  every connection of the user is closed, including the one that token belongs to - read `loginEvent` from  `GET api/2.0/security/activeconnections` first to see which connection, if any, will survive. The call is  mutating and destructive for the other sessions, and idempotent: the tokens behind them stop working, their  clients are disconnected at once and a logout entry is written to the portal audit trail. It answers with the  display name of the calling user, while an empty answer with status 200 means the attempt failed and nothing  can be assumed about what was closed.
         * @summary Log out other connections
         * @param {*} [options] Override http request option.
         * REST API Reference for logOutAllExceptThisConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-except-this-connection/
         * @throws {RequiredError}
         */
        logOutAllExceptThisConnection(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.logOutAllExceptThisConnection(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for logOutActiveConnection operation in ActiveConnectionsApi.
 * @export
 * @interface ActiveConnectionsApiLogOutActiveConnectionRequest
 */
export interface ActiveConnectionsApiLogOutActiveConnectionRequest {
    /**
     * The sign-in to act on, by login event ID. Take it from the `id` of an item of  `GET api/2.0/security/activeconnections`, which also marks the connection the caller is using, so a client  can avoid picking its own.
     * @type {number}
     * @memberof ActiveConnectionsApiLogOutActiveConnection
     */
    readonly loginEventId: number
}

/**
 * Request parameters for logOutAllActiveConnectionsForUser operation in ActiveConnectionsApi.
 * @export
 * @interface ActiveConnectionsApiLogOutAllActiveConnectionsForUserRequest
 */
export interface ActiveConnectionsApiLogOutAllActiveConnectionsForUserRequest {
    /**
     * The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. Acting on an account  other than the caller\'s own generally needs administrator rights.
     * @type {string}
     * @memberof ActiveConnectionsApiLogOutAllActiveConnectionsForUser
     */
    readonly userId: string
}

/**
 * ActiveConnectionsApi - object-oriented interface
 * @export
 * @class ActiveConnectionsApi
 * @extends {BaseAPI}
 */
export class ActiveConnectionsApi extends BaseAPI {
    /**
     * Lists the connections the calling user currently has open on this portal - one item per successful sign-in  that is still active - so a client can show where the account is signed in and close what does not belong  there. Any signed-in user may call it, nothing has to be called first, and the answer always covers the caller  alone: the operation is read-only, idempotent and cannot show another user\'s connections. Items cover the last  year and are ordered newest sign-in first, with the caller\'s own connection moved to the top and its browser,  platform, IP address and location refreshed from the current request. `loginEvent` is the ID of that own  connection and is `0` when the request was authenticated with a token in the `Authorization` header instead of  the portal cookie; nothing is then marked as current, and a user with no stored connections gets a single item  describing the current request. `country` and `city` are resolved from the IP address and stay empty when it  cannot be located. Pass an item\'s `id` to `PUT api/2.0/security/activeconnections/logout/{loginEventId}` to  end that one connection.
     * @summary Get active connections
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public getAllActiveConnections(options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).getAllActiveConnections(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Closes one active connection: the sign-in behind `loginEventId` is marked inactive, the token and cookie tied  to it stop working, the client holding it is disconnected and a logout entry is written to the portal audit  trail. Take `loginEventId` from the `id` of an item of `GET api/2.0/security/activeconnections`, which also  reports in `loginEvent` which connection the caller is using, so a client can avoid closing its own. A user  may close their own connections, while closing somebody else\'s requires a DocSpace administrator and any other  caller is refused with 403. The call is mutating, destructive for that one session and idempotent, and it  leaves every other connection of the user alone - `PUT api/2.0/security/activeconnections/logoutallexceptthis`  is the way to close the rest in one go. Only `true` means the connection was open and has just been closed;  `false` comes back when this portal has no such active connection, including one that was already closed, and  after any other failure.
     * @summary Log out one connection
     * @param {SecurityActiveConnectionsApiLogOutActiveConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutActiveConnection(requestParameters: ActiveConnectionsApiLogOutActiveConnectionRequest, options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutActiveConnection(requestParameters.loginEventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Closes every active connection of the calling user and returns the link that user has to open to set a new  password - the answer to a suspicious sign-in seen in `GET api/2.0/security/activeconnections`. Any signed-in  user may call it for their own account and nothing has to be called first; the same clean-up for somebody else  is `PUT api/2.0/security/activeconnections/logoutall/{userId}`. The call is mutating and destructive for  sessions - every token and cookie issued to the user before it stops working and the clients holding them are  disconnected - and it is not idempotent: the request is written to the portal audit trail, which invalidates  the link any earlier call returned, and the caller\'s own client is handed a fresh cookie in the response and  stays signed in through a new connection. The password itself is not changed here, and the link is handed back  to the caller rather than mailed to the user: the URL carries a time-limited `PasswordChange` key, which the  confirmation page it opens - or `PUT api/2.0/people/{userid}/password` - needs to accept the new password. A  failure is swallowed instead of reported, so an empty body with status 200 means nothing was done and the call  has to be repeated.
     * @summary Log out and reset password
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutAllActiveConnectionsChangePassword(options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutAllActiveConnectionsChangePassword(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Closes every active connection of one portal user: the connections are marked inactive, every token and cookie  issued to that user before the call stops working, the clients holding them are disconnected and a logout  entry is written to the portal audit trail. Nothing has to be called first; `userId` is the portal user ID  that `GET api/2.0/people` returns. A user may pass their own ID, while ending somebody else\'s connections  requires a DocSpace administrator and any other caller is refused with 403. The call is mutating, destructive  for those sessions and idempotent - a user with nothing open is not an error - and it returns no content, so  the state afterwards is read from `GET api/2.0/security/activeconnections`. A caller who ends their own  connections is handed a fresh cookie in the response and stays signed in through a new connection. Nothing  else about the user changes: the account stays enabled and the password stays valid, and to keep the current  connection alive instead use `PUT api/2.0/security/activeconnections/logoutallexceptthis`.
     * @summary Log out a user everywhere
     * @param {SecurityActiveConnectionsApiLogOutAllActiveConnectionsForUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutAllActiveConnectionsForUser(requestParameters: ActiveConnectionsApiLogOutAllActiveConnectionsForUserRequest, options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutAllActiveConnectionsForUser(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Closes every active connection of the calling user except the one this request was made with, so the current  client keeps working while every other browser and device is signed out. Any signed-in user may call it for  their own account and nothing has to be called first. The connection to keep is the one behind the portal  authentication cookie: a request authenticated with a token in the `Authorization` header has none, and then  every connection of the user is closed, including the one that token belongs to - read `loginEvent` from  `GET api/2.0/security/activeconnections` first to see which connection, if any, will survive. The call is  mutating and destructive for the other sessions, and idempotent: the tokens behind them stop working, their  clients are disconnected at once and a logout entry is written to the portal audit trail. It answers with the  display name of the calling user, while an empty answer with status 200 means the attempt failed and nothing  can be assumed about what was closed.
     * @summary Log out other connections
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutAllExceptThisConnection(options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutAllExceptThisConnection(options).then((request) => request(this.axios, this.basePath));
    }
}

