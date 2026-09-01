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
import type { AuditReportFormat } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { LoginEventArrayWrapper } from '../../models';
// @ts-ignore
import type { MessageAction } from '../../models';
/**
 * LoginHistoryApi - axios parameter creator
 * @export
 */
export const LoginHistoryApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Starts generating the login history report (XLSX by default, or CSV) and saves it to My documents.
         * @summary Start the login history report generation
         * @param {AuditReportFormat} [format] The output file format of the report. Defaults to XLSX.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-login-history-report/
         */
        createLoginHistoryReport: async (format?: AuditReportFormat, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
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
         * @param {string} [from] The starting date and time for filtering login events.
         * @param {string} [to] The ending date and time for filtering login events.
         * @param {number} [count] The number of login events to retrieve in the query.
         * @param {number} [startIndex] The starting index for fetching a subset of login events from the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-events-by-filter/
         */
        getLoginEventsByFilter: async (userId?: string, action?: MessageAction, from?: string, to?: string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * Returns the status of generating the login history report.
         * @summary Get the login history report generation status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-history-report/
         */
        getLoginHistoryReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/login/report`;
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
         * Terminates generating the login history report.
         * @summary Terminate the login history report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-login-history-report/
         */
        terminateLoginHistoryReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/login/report`;
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
    }
};

/**
 * LoginHistoryApi - functional programming interface
 * @export
 */
export const LoginHistoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginHistoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Starts generating the login history report (XLSX by default, or CSV) and saves it to My documents.
         * @summary Start the login history report generation
         * @param {AuditReportFormat} [format] The output file format of the report. Defaults to XLSX.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-login-history-report/
         */
        async createLoginHistoryReport(format?: AuditReportFormat, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createLoginHistoryReport(format, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginHistoryApi.createLoginHistoryReport']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['LoginHistoryApi.getLastLoginEvents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the login events by the parameters specified in the request.
         * @summary Get filtered login events
         * @param {string} [userId] The ID of the user whose login events are being queried.
         * @param {MessageAction} [action] The login-related action to filter events by.
         * @param {string} [from] The starting date and time for filtering login events.
         * @param {string} [to] The ending date and time for filtering login events.
         * @param {number} [count] The number of login events to retrieve in the query.
         * @param {number} [startIndex] The starting index for fetching a subset of login events from the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-events-by-filter/
         */
        async getLoginEventsByFilter(userId?: string, action?: MessageAction, from?: string, to?: string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoginEventsByFilter(userId, action, from, to, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginHistoryApi.getLoginEventsByFilter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the status of generating the login history report.
         * @summary Get the login history report generation status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-history-report/
         */
        async getLoginHistoryReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoginHistoryReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginHistoryApi.getLoginHistoryReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Terminates generating the login history report.
         * @summary Terminate the login history report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-login-history-report/
         */
        async terminateLoginHistoryReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateLoginHistoryReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginHistoryApi.terminateLoginHistoryReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LoginHistoryApi - factory interface
 * @export
 */
export const LoginHistoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginHistoryApiFp(configuration)
    return {
        /**
         * Starts generating the login history report (XLSX by default, or CSV) and saves it to My documents.
         * @summary Start the login history report generation
         * @param {LoginHistoryApiCreateLoginHistoryReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-login-history-report/
         * @throws {RequiredError}
         */
        createLoginHistoryReport(requestParameters: LoginHistoryApiCreateLoginHistoryReportRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createLoginHistoryReport(requestParameters.format, options).then((request) => request(axios, basePath));
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
         * @param {LoginHistoryApiGetLoginEventsByFilterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getLoginEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-events-by-filter/
         * @throws {RequiredError}
         */
        getLoginEventsByFilter(requestParameters: LoginHistoryApiGetLoginEventsByFilterRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<LoginEventArrayWrapper> {
            return localVarFp.getLoginEventsByFilter(requestParameters.userId, requestParameters.action, requestParameters.from, requestParameters.to, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the status of generating the login history report.
         * @summary Get the login history report generation status
         * @param {*} [options] Override http request option.
         * REST API Reference for getLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-history-report/
         * @throws {RequiredError}
         */
        getLoginHistoryReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getLoginHistoryReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Terminates generating the login history report.
         * @summary Terminate the login history report generation
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-login-history-report/
         * @throws {RequiredError}
         */
        terminateLoginHistoryReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateLoginHistoryReport(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createLoginHistoryReport operation in LoginHistoryApi.
 * @export
 * @interface LoginHistoryApiCreateLoginHistoryReportRequest
 */
export interface LoginHistoryApiCreateLoginHistoryReportRequest {
    /**
     * The output file format of the report. Defaults to XLSX.
     * @type {AuditReportFormat}
     * @memberof LoginHistoryApiCreateLoginHistoryReport
     */
    readonly format?: AuditReportFormat
}

/**
 * Request parameters for getLoginEventsByFilter operation in LoginHistoryApi.
 * @export
 * @interface LoginHistoryApiGetLoginEventsByFilterRequest
 */
export interface LoginHistoryApiGetLoginEventsByFilterRequest {
    /**
     * The ID of the user whose login events are being queried.
     * @type {string}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly userId?: string

    /**
     * The login-related action to filter events by.
     * @type {MessageAction}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly action?: MessageAction

    /**
     * The starting date and time for filtering login events.
     * @type {string}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly from?: string

    /**
     * The ending date and time for filtering login events.
     * @type {string}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly to?: string

    /**
     * The number of login events to retrieve in the query.
     * @type {number}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly count?: number

    /**
     * The starting index for fetching a subset of login events from the query results.
     * @type {number}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly startIndex?: number
}

/**
 * LoginHistoryApi - object-oriented interface
 * @export
 * @class LoginHistoryApi
 * @extends {BaseAPI}
 */
export class LoginHistoryApi extends BaseAPI {
    /**
     * Starts generating the login history report (XLSX by default, or CSV) and saves it to My documents.
     * @summary Start the login history report generation
     * @param {SecurityLoginHistoryApiCreateLoginHistoryReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public createLoginHistoryReport(requestParameters: LoginHistoryApiCreateLoginHistoryReportRequest = {}, options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).createLoginHistoryReport(requestParameters.format, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all the latest user login activity, including successful logins and error logs.
     * @summary Get login history
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public getLastLoginEvents(options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).getLastLoginEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the login events by the parameters specified in the request.
     * @summary Get filtered login events
     * @param {SecurityLoginHistoryApiGetLoginEventsByFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public getLoginEventsByFilter(requestParameters: LoginHistoryApiGetLoginEventsByFilterRequest = {}, options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).getLoginEventsByFilter(requestParameters.userId, requestParameters.action, requestParameters.from, requestParameters.to, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the status of generating the login history report.
     * @summary Get the login history report generation status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public getLoginHistoryReport(options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).getLoginHistoryReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates generating the login history report.
     * @summary Terminate the login history report generation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public terminateLoginHistoryReport(options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).terminateLoginHistoryReport(options).then((request) => request(this.axios, this.basePath));
    }
}

