/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { StringWrapper } from '../../models';
/**
 * ActiveConnectionsApi - axios parameter creator
 * @export
 */
export const ActiveConnectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all the active connections to the portal.
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
         * Logs out from the connection with the ID specified in the request.
         * @summary Log out from the connection
         * @param {number} loginEventId The ID of the specific login event.
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
         * Logs out from all the active connections for the current user and changes their password.
         * @summary Log out and change password
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
         * Logs out from all the active connections for the user with the ID specified in the request.
         * @summary Log out for the user by ID
         * @param {string} userId The user ID extracted from the route parameters.
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
         * Logs out from all the active connections except the current connection.
         * @summary Log out from all connections except the current one
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
         * Returns all the active connections to the portal.
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
         * Logs out from the connection with the ID specified in the request.
         * @summary Log out from the connection
         * @param {number} loginEventId The ID of the specific login event.
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
         * Logs out from all the active connections for the current user and changes their password.
         * @summary Log out and change password
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
         * Logs out from all the active connections for the user with the ID specified in the request.
         * @summary Log out for the user by ID
         * @param {string} userId The user ID extracted from the route parameters.
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
         * Logs out from all the active connections except the current connection.
         * @summary Log out from all connections except the current one
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
         * Returns all the active connections to the portal.
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
         * Logs out from the connection with the ID specified in the request.
         * @summary Log out from the connection
         * @param {number} loginEventId The ID of the specific login event.
         * @param {*} [options] Override http request option.
         * REST API Reference for logOutActiveConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-active-connection/
         * @throws {RequiredError}
         */
        logOutActiveConnection(loginEventId: number, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.logOutActiveConnection(loginEventId, options).then((request) => request(axios, basePath));
        },
        /**
         * Logs out from all the active connections for the current user and changes their password.
         * @summary Log out and change password
         * @param {*} [options] Override http request option.
         * REST API Reference for logOutAllActiveConnectionsChangePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-change-password/
         * @throws {RequiredError}
         */
        logOutAllActiveConnectionsChangePassword(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.logOutAllActiveConnectionsChangePassword(options).then((request) => request(axios, basePath));
        },
        /**
         * Logs out from all the active connections for the user with the ID specified in the request.
         * @summary Log out for the user by ID
         * @param {string} userId The user ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for logOutAllActiveConnectionsForUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/log-out-all-active-connections-for-user/
         * @throws {RequiredError}
         */
        logOutAllActiveConnectionsForUser(userId: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.logOutAllActiveConnectionsForUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Logs out from all the active connections except the current connection.
         * @summary Log out from all connections except the current one
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
 * ActiveConnectionsApi - object-oriented interface
 * @export
 * @class ActiveConnectionsApi
 * @extends {BaseAPI}
 */
export class ActiveConnectionsApi extends BaseAPI {
    /**
     * Returns all the active connections to the portal.
     * @summary Get active connections
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public getAllActiveConnections(options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).getAllActiveConnections(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from the connection with the ID specified in the request.
     * @summary Log out from the connection
     * @param {number} loginEventId The ID of the specific login event.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutActiveConnection(loginEventId: number, options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutActiveConnection(loginEventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from all the active connections for the current user and changes their password.
     * @summary Log out and change password
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutAllActiveConnectionsChangePassword(options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutAllActiveConnectionsChangePassword(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from all the active connections for the user with the ID specified in the request.
     * @summary Log out for the user by ID
     * @param {string} userId The user ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutAllActiveConnectionsForUser(userId: string, options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutAllActiveConnectionsForUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from all the active connections except the current connection.
     * @summary Log out from all connections except the current one
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActiveConnectionsApi
     */
    public logOutAllExceptThisConnection(options?: RawAxiosRequestConfig) {
        return ActiveConnectionsApiFp(this.configuration).logOutAllExceptThisConnection(options).then((request) => request(this.axios, this.basePath));
    }
}

