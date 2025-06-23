// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

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
 * SecurityActiveConnectionsApi - axios parameter creator
 * @export
 */
export const SecurityActiveConnectionsApiAxiosParamCreator = function (configuration?: Configuration) {
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
 * SecurityActiveConnectionsApi - functional programming interface
 * @export
 */
export const SecurityActiveConnectionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityActiveConnectionsApiAxiosParamCreator(configuration)
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
            const localVarOperationServerBasePath = operationServerMap['SecurityActiveConnectionsApi.getAllActiveConnections']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityActiveConnectionsApi.logOutActiveConnection']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityActiveConnectionsApi.logOutAllActiveConnectionsChangePassword']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityActiveConnectionsApi.logOutAllActiveConnectionsForUser']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityActiveConnectionsApi.logOutAllExceptThisConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityActiveConnectionsApi - factory interface
 * @export
 */
export const SecurityActiveConnectionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityActiveConnectionsApiFp(configuration)
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
 * SecurityActiveConnectionsApi - object-oriented interface
 * @export
 * @class SecurityActiveConnectionsApi
 * @extends {BaseAPI}
 */
export class SecurityActiveConnectionsApi extends BaseAPI {
    /**
     * Returns all the active connections to the portal.
     * @summary Get active connections
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityActiveConnectionsApi
     */
    public getAllActiveConnections(options?: RawAxiosRequestConfig) {
        return SecurityActiveConnectionsApiFp(this.configuration).getAllActiveConnections(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from the connection with the ID specified in the request.
     * @summary Log out from the connection
     * @param {number} loginEventId The ID of the specific login event.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityActiveConnectionsApi
     */
    public logOutActiveConnection(loginEventId: number, options?: RawAxiosRequestConfig) {
        return SecurityActiveConnectionsApiFp(this.configuration).logOutActiveConnection(loginEventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from all the active connections for the current user and changes their password.
     * @summary Log out and change password
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityActiveConnectionsApi
     */
    public logOutAllActiveConnectionsChangePassword(options?: RawAxiosRequestConfig) {
        return SecurityActiveConnectionsApiFp(this.configuration).logOutAllActiveConnectionsChangePassword(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from all the active connections for the user with the ID specified in the request.
     * @summary Log out for the user by ID
     * @param {string} userId The user ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityActiveConnectionsApi
     */
    public logOutAllActiveConnectionsForUser(userId: string, options?: RawAxiosRequestConfig) {
        return SecurityActiveConnectionsApiFp(this.configuration).logOutAllActiveConnectionsForUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out from all the active connections except the current connection.
     * @summary Log out from all connections except the current one
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityActiveConnectionsApi
     */
    public logOutAllExceptThisConnection(options?: RawAxiosRequestConfig) {
        return SecurityActiveConnectionsApiFp(this.configuration).logOutAllExceptThisConnection(options).then((request) => request(this.axios, this.basePath));
    }
}

