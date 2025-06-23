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
import type { ApiDateTime } from '../../models';
// @ts-ignore
import type { LoginEventArrayWrapper } from '../../models';
// @ts-ignore
import type { MessageAction } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * SecurityLoginHistoryApi - axios parameter creator
 * @export
 */
export const SecurityLoginHistoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generates the login history report.
         * @summary Generate the login history report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-login-history-report/
         */
        createLoginHistoryReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/security/audit/login/report`;
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
         * Returns all the latest user login activity, including successful logins and error logs.
         * @summary Get login history
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLastLoginEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-login-events/
         */
        getLastLoginEvents: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/security/audit/login/last`;
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
         * Returns a list of the login events by the parameters specified in the request.
         * @summary Get filtered login events
         * @param {string} [userId] The ID of the user whose login events are being queried.
         * @param {MessageAction} [action] The login-related action to filter events by.
         * @param {ApiDateTime} [from] The starting date and time for filtering login events.
         * @param {ApiDateTime} [to] The ending date and time for filtering login events.
         * @param {number} [count] The number of login events to retrieve in the query.
         * @param {number} [startIndex] The starting index for fetching a subset of login events from the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-events-by-filter/
         */
        getLoginEventsByFilter: async (userId?: string, action?: MessageAction, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/security/audit/login/filter`;
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

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (action !== undefined) {
                localVarQueryParameter['action'] = action;
            }

            if (from !== undefined) {
                for (const [key, value] of Object.entries(from)) {
                    localVarQueryParameter[key] = value;
                }
            }

            if (to !== undefined) {
                for (const [key, value] of Object.entries(to)) {
                    localVarQueryParameter[key] = value;
                }
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }


    
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
 * SecurityLoginHistoryApi - functional programming interface
 * @export
 */
export const SecurityLoginHistoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityLoginHistoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Generates the login history report.
         * @summary Generate the login history report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-login-history-report/
         */
        async createLoginHistoryReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createLoginHistoryReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityLoginHistoryApi.createLoginHistoryReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns all the latest user login activity, including successful logins and error logs.
         * @summary Get login history
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLastLoginEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-login-events/
         */
        async getLastLoginEvents(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLastLoginEvents(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityLoginHistoryApi.getLastLoginEvents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the login events by the parameters specified in the request.
         * @summary Get filtered login events
         * @param {string} [userId] The ID of the user whose login events are being queried.
         * @param {MessageAction} [action] The login-related action to filter events by.
         * @param {ApiDateTime} [from] The starting date and time for filtering login events.
         * @param {ApiDateTime} [to] The ending date and time for filtering login events.
         * @param {number} [count] The number of login events to retrieve in the query.
         * @param {number} [startIndex] The starting index for fetching a subset of login events from the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-events-by-filter/
         */
        async getLoginEventsByFilter(userId?: string, action?: MessageAction, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoginEventsByFilter(userId, action, from, to, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityLoginHistoryApi.getLoginEventsByFilter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityLoginHistoryApi - factory interface
 * @export
 */
export const SecurityLoginHistoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityLoginHistoryApiFp(configuration)
    return {
        /**
         * Generates the login history report.
         * @summary Generate the login history report
         * @param {*} [options] Override http request option.
         * REST API Reference for createLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-login-history-report/
         * @throws {RequiredError}
         */
        createLoginHistoryReport(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.createLoginHistoryReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all the latest user login activity, including successful logins and error logs.
         * @summary Get login history
         * @param {*} [options] Override http request option.
         * REST API Reference for getLastLoginEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-login-events/
         * @throws {RequiredError}
         */
        getLastLoginEvents(options?: RawAxiosRequestConfig): AxiosPromise<LoginEventArrayWrapper> {
            return localVarFp.getLastLoginEvents(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the login events by the parameters specified in the request.
         * @summary Get filtered login events
         * @param {string} [userId] The ID of the user whose login events are being queried.
         * @param {MessageAction} [action] The login-related action to filter events by.
         * @param {ApiDateTime} [from] The starting date and time for filtering login events.
         * @param {ApiDateTime} [to] The ending date and time for filtering login events.
         * @param {number} [count] The number of login events to retrieve in the query.
         * @param {number} [startIndex] The starting index for fetching a subset of login events from the query results.
         * @param {*} [options] Override http request option.
         * REST API Reference for getLoginEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-events-by-filter/
         * @throws {RequiredError}
         */
        getLoginEventsByFilter(userId?: string, action?: MessageAction, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<LoginEventArrayWrapper> {
            return localVarFp.getLoginEventsByFilter(userId, action, from, to, count, startIndex, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecurityLoginHistoryApi - object-oriented interface
 * @export
 * @class SecurityLoginHistoryApi
 * @extends {BaseAPI}
 */
export class SecurityLoginHistoryApi extends BaseAPI {
    /**
     * Generates the login history report.
     * @summary Generate the login history report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityLoginHistoryApi
     */
    public createLoginHistoryReport(options?: RawAxiosRequestConfig) {
        return SecurityLoginHistoryApiFp(this.configuration).createLoginHistoryReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all the latest user login activity, including successful logins and error logs.
     * @summary Get login history
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityLoginHistoryApi
     */
    public getLastLoginEvents(options?: RawAxiosRequestConfig) {
        return SecurityLoginHistoryApiFp(this.configuration).getLastLoginEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the login events by the parameters specified in the request.
     * @summary Get filtered login events
     * @param {string} [userId] The ID of the user whose login events are being queried.
     * @param {MessageAction} [action] The login-related action to filter events by.
     * @param {ApiDateTime} [from] The starting date and time for filtering login events.
     * @param {ApiDateTime} [to] The ending date and time for filtering login events.
     * @param {number} [count] The number of login events to retrieve in the query.
     * @param {number} [startIndex] The starting index for fetching a subset of login events from the query results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityLoginHistoryApi
     */
    public getLoginEventsByFilter(userId?: string, action?: MessageAction, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return SecurityLoginHistoryApiFp(this.configuration).getLoginEventsByFilter(userId, action, from, to, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }
}

