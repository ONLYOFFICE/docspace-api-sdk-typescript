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
         * Queues a report of the portal\'s login history and returns the state of the background job that builds it. The  report covers the period reaching from now back by the login history lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports and is never filtered: the query parameters of  `GET api/2.0/security/audit/login/filter` do not apply here. The caller needs the portal-settings right of a  DocSpace administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with  402. The file is not ready when the response arrives - poll `GET api/2.0/security/audit/login/report` until  `isCompleted` is true, then take `resultFileUrl`, and treat a non-empty `error` as a failed build. The  finished file is saved to the caller\'s My documents section, as an XLSX workbook by default or as CSV when  `format=Csv`, in which case `resultFileId` stays empty and only the name and the URL identify it. One job runs  per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/login/report` cancels it.
         * @summary Start login history report
         * @param {AuditReportFormat} [format] The format the report file is written in. The workbook format is the default and is the only one that leaves  the finished file addressable by ID: a report asked for as CSV comes back with an empty `resultFileId`, so it  can only be reached through `resultFileName` and `resultFileUrl`.
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
         * Returns the twenty most recent login events of the whole portal - successful sign-ins, sign-outs and failed  attempts alike - as the short summary a settings page shows before anyone asks for the full history. The  caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the login  history and audit trail section must be enabled for the portal, otherwise the call is answered with 402. The  operation is read-only and takes no parameters: the number of events is fixed at twenty, nothing can be  filtered, and events are ordered newest first. `date` is given in the portal time zone, `actionText` is the  readable sentence describing the event with every substituted value shortened to fifty characters here, and  `country` and `city` are resolved from the IP address and stay empty when it cannot be located. An empty list  means the portal has recorded no login events yet. Use `GET api/2.0/security/audit/login/filter` to filter by  user, action or period and to page through the whole history.
         * @summary Get recent login events
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
         * Returns the portal\'s login events that match the filters in the query - by user, by login action and by period  - and is the operation behind the login history page. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan; when that option is missing the filters are  silently ignored and the answer is the same twenty most recent events that  `GET api/2.0/security/audit/login/last` returns, and when the login history and audit trail section is  disabled altogether the call is answered with 402. Omit a filter to match everything. `from` and `to` are read  as UTC instants while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it,  `startIndex` skips events from the newest end, and the page window is applied to the log before the filters,  so a page can hold fewer items than `count` while older matches still exist. The operation is read-only; take  the values accepted by `action` from `GET api/2.0/security/audit/types`.
         * @summary Get filtered login events
         * @param {string} [userId] The user whose sign-in attempts are kept, given by portal user ID. Leave it at the empty GUID to keep the  events of every user.
         * @param {MessageAction} [action] The sign-in action recorded, spelled as `GET api/2.0/security/audit/types` lists it under `actions` - a  successful login, a failed one, a logout. The default value keeps every action.
         * @param {string} [from] The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC.
         * @param {string} [to] The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`.
         * @param {number} [count] How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them.
         * @param {number} [startIndex] How many events to skip before the page begins, counting from the newest. It is applied to the log before  the filters, so a page can hold fewer events than `count` while older matches still exist.
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
         * Returns the state of the login history report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/login/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402.  Jobs are kept per user and per report kind: this operation never shows another administrator\'s report, nor the  audit trail report, which has its own status at `GET api/2.0/security/audit/events/report`. The answer is  empty when no report of this kind is known for the caller; otherwise `percentage` grows towards 100,  `isCompleted` turns true when the build has ended, `error` carries the failure message when it ended badly,  and `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section, while  `resultFileId` is filled for an XLSX report only. The operation is read-only and safe to poll every few  seconds; a finished job is dropped as soon as the next report of this kind is started.
         * @summary Get login history report status
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
         * Cancels the login history report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/login/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own login history report - the audit trail report is cancelled by  `DELETE api/2.0/security/audit/events/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/login/report`.
         * @summary Terminate login history report
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
         * Queues a report of the portal\'s login history and returns the state of the background job that builds it. The  report covers the period reaching from now back by the login history lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports and is never filtered: the query parameters of  `GET api/2.0/security/audit/login/filter` do not apply here. The caller needs the portal-settings right of a  DocSpace administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with  402. The file is not ready when the response arrives - poll `GET api/2.0/security/audit/login/report` until  `isCompleted` is true, then take `resultFileUrl`, and treat a non-empty `error` as a failed build. The  finished file is saved to the caller\'s My documents section, as an XLSX workbook by default or as CSV when  `format=Csv`, in which case `resultFileId` stays empty and only the name and the URL identify it. One job runs  per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/login/report` cancels it.
         * @summary Start login history report
         * @param {AuditReportFormat} [format] The format the report file is written in. The workbook format is the default and is the only one that leaves  the finished file addressable by ID: a report asked for as CSV comes back with an empty `resultFileId`, so it  can only be reached through `resultFileName` and `resultFileUrl`.
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
         * Returns the twenty most recent login events of the whole portal - successful sign-ins, sign-outs and failed  attempts alike - as the short summary a settings page shows before anyone asks for the full history. The  caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the login  history and audit trail section must be enabled for the portal, otherwise the call is answered with 402. The  operation is read-only and takes no parameters: the number of events is fixed at twenty, nothing can be  filtered, and events are ordered newest first. `date` is given in the portal time zone, `actionText` is the  readable sentence describing the event with every substituted value shortened to fifty characters here, and  `country` and `city` are resolved from the IP address and stay empty when it cannot be located. An empty list  means the portal has recorded no login events yet. Use `GET api/2.0/security/audit/login/filter` to filter by  user, action or period and to page through the whole history.
         * @summary Get recent login events
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
         * Returns the portal\'s login events that match the filters in the query - by user, by login action and by period  - and is the operation behind the login history page. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan; when that option is missing the filters are  silently ignored and the answer is the same twenty most recent events that  `GET api/2.0/security/audit/login/last` returns, and when the login history and audit trail section is  disabled altogether the call is answered with 402. Omit a filter to match everything. `from` and `to` are read  as UTC instants while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it,  `startIndex` skips events from the newest end, and the page window is applied to the log before the filters,  so a page can hold fewer items than `count` while older matches still exist. The operation is read-only; take  the values accepted by `action` from `GET api/2.0/security/audit/types`.
         * @summary Get filtered login events
         * @param {string} [userId] The user whose sign-in attempts are kept, given by portal user ID. Leave it at the empty GUID to keep the  events of every user.
         * @param {MessageAction} [action] The sign-in action recorded, spelled as `GET api/2.0/security/audit/types` lists it under `actions` - a  successful login, a failed one, a logout. The default value keeps every action.
         * @param {string} [from] The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC.
         * @param {string} [to] The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`.
         * @param {number} [count] How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them.
         * @param {number} [startIndex] How many events to skip before the page begins, counting from the newest. It is applied to the log before  the filters, so a page can hold fewer events than `count` while older matches still exist.
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
         * Returns the state of the login history report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/login/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402.  Jobs are kept per user and per report kind: this operation never shows another administrator\'s report, nor the  audit trail report, which has its own status at `GET api/2.0/security/audit/events/report`. The answer is  empty when no report of this kind is known for the caller; otherwise `percentage` grows towards 100,  `isCompleted` turns true when the build has ended, `error` carries the failure message when it ended badly,  and `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section, while  `resultFileId` is filled for an XLSX report only. The operation is read-only and safe to poll every few  seconds; a finished job is dropped as soon as the next report of this kind is started.
         * @summary Get login history report status
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
         * Cancels the login history report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/login/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own login history report - the audit trail report is cancelled by  `DELETE api/2.0/security/audit/events/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/login/report`.
         * @summary Terminate login history report
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
         * Queues a report of the portal\'s login history and returns the state of the background job that builds it. The  report covers the period reaching from now back by the login history lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports and is never filtered: the query parameters of  `GET api/2.0/security/audit/login/filter` do not apply here. The caller needs the portal-settings right of a  DocSpace administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with  402. The file is not ready when the response arrives - poll `GET api/2.0/security/audit/login/report` until  `isCompleted` is true, then take `resultFileUrl`, and treat a non-empty `error` as a failed build. The  finished file is saved to the caller\'s My documents section, as an XLSX workbook by default or as CSV when  `format=Csv`, in which case `resultFileId` stays empty and only the name and the URL identify it. One job runs  per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/login/report` cancels it.
         * @summary Start login history report
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
         * Returns the twenty most recent login events of the whole portal - successful sign-ins, sign-outs and failed  attempts alike - as the short summary a settings page shows before anyone asks for the full history. The  caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the login  history and audit trail section must be enabled for the portal, otherwise the call is answered with 402. The  operation is read-only and takes no parameters: the number of events is fixed at twenty, nothing can be  filtered, and events are ordered newest first. `date` is given in the portal time zone, `actionText` is the  readable sentence describing the event with every substituted value shortened to fifty characters here, and  `country` and `city` are resolved from the IP address and stay empty when it cannot be located. An empty list  means the portal has recorded no login events yet. Use `GET api/2.0/security/audit/login/filter` to filter by  user, action or period and to page through the whole history.
         * @summary Get recent login events
         * @param {*} [options] Override http request option.
         * REST API Reference for getLastLoginEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-login-events/
         * @throws {RequiredError}
         */
        getLastLoginEvents(options?: RawAxiosRequestConfig): AxiosPromise<LoginEventArrayWrapper> {
            return localVarFp.getLastLoginEvents(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal\'s login events that match the filters in the query - by user, by login action and by period  - and is the operation behind the login history page. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan; when that option is missing the filters are  silently ignored and the answer is the same twenty most recent events that  `GET api/2.0/security/audit/login/last` returns, and when the login history and audit trail section is  disabled altogether the call is answered with 402. Omit a filter to match everything. `from` and `to` are read  as UTC instants while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it,  `startIndex` skips events from the newest end, and the page window is applied to the log before the filters,  so a page can hold fewer items than `count` while older matches still exist. The operation is read-only; take  the values accepted by `action` from `GET api/2.0/security/audit/types`.
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
         * Returns the state of the login history report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/login/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402.  Jobs are kept per user and per report kind: this operation never shows another administrator\'s report, nor the  audit trail report, which has its own status at `GET api/2.0/security/audit/events/report`. The answer is  empty when no report of this kind is known for the caller; otherwise `percentage` grows towards 100,  `isCompleted` turns true when the build has ended, `error` carries the failure message when it ended badly,  and `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section, while  `resultFileId` is filled for an XLSX report only. The operation is read-only and safe to poll every few  seconds; a finished job is dropped as soon as the next report of this kind is started.
         * @summary Get login history report status
         * @param {*} [options] Override http request option.
         * REST API Reference for getLoginHistoryReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-history-report/
         * @throws {RequiredError}
         */
        getLoginHistoryReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getLoginHistoryReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels the login history report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/login/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own login history report - the audit trail report is cancelled by  `DELETE api/2.0/security/audit/events/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/login/report`.
         * @summary Terminate login history report
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
     * The format the report file is written in. The workbook format is the default and is the only one that leaves  the finished file addressable by ID: a report asked for as CSV comes back with an empty `resultFileId`, so it  can only be reached through `resultFileName` and `resultFileUrl`.
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
     * The user whose sign-in attempts are kept, given by portal user ID. Leave it at the empty GUID to keep the  events of every user.
     * @type {string}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly userId?: string

    /**
     * The sign-in action recorded, spelled as `GET api/2.0/security/audit/types` lists it under `actions` - a  successful login, a failed one, a logout. The default value keeps every action.
     * @type {MessageAction}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly action?: MessageAction

    /**
     * The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC.
     * @type {string}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly from?: string

    /**
     * The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`.
     * @type {string}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly to?: string

    /**
     * How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them.
     * @type {number}
     * @memberof LoginHistoryApiGetLoginEventsByFilter
     */
    readonly count?: number

    /**
     * How many events to skip before the page begins, counting from the newest. It is applied to the log before  the filters, so a page can hold fewer events than `count` while older matches still exist.
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
     * Queues a report of the portal\'s login history and returns the state of the background job that builds it. The  report covers the period reaching from now back by the login history lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports and is never filtered: the query parameters of  `GET api/2.0/security/audit/login/filter` do not apply here. The caller needs the portal-settings right of a  DocSpace administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with  402. The file is not ready when the response arrives - poll `GET api/2.0/security/audit/login/report` until  `isCompleted` is true, then take `resultFileUrl`, and treat a non-empty `error` as a failed build. The  finished file is saved to the caller\'s My documents section, as an XLSX workbook by default or as CSV when  `format=Csv`, in which case `resultFileId` stays empty and only the name and the URL identify it. One job runs  per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/login/report` cancels it.
     * @summary Start login history report
     * @param {SecurityLoginHistoryApiCreateLoginHistoryReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public createLoginHistoryReport(requestParameters: LoginHistoryApiCreateLoginHistoryReportRequest = {}, options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).createLoginHistoryReport(requestParameters.format, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the twenty most recent login events of the whole portal - successful sign-ins, sign-outs and failed  attempts alike - as the short summary a settings page shows before anyone asks for the full history. The  caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the login  history and audit trail section must be enabled for the portal, otherwise the call is answered with 402. The  operation is read-only and takes no parameters: the number of events is fixed at twenty, nothing can be  filtered, and events are ordered newest first. `date` is given in the portal time zone, `actionText` is the  readable sentence describing the event with every substituted value shortened to fifty characters here, and  `country` and `city` are resolved from the IP address and stay empty when it cannot be located. An empty list  means the portal has recorded no login events yet. Use `GET api/2.0/security/audit/login/filter` to filter by  user, action or period and to page through the whole history.
     * @summary Get recent login events
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public getLastLoginEvents(options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).getLastLoginEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal\'s login events that match the filters in the query - by user, by login action and by period  - and is the operation behind the login history page. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan; when that option is missing the filters are  silently ignored and the answer is the same twenty most recent events that  `GET api/2.0/security/audit/login/last` returns, and when the login history and audit trail section is  disabled altogether the call is answered with 402. Omit a filter to match everything. `from` and `to` are read  as UTC instants while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it,  `startIndex` skips events from the newest end, and the page window is applied to the log before the filters,  so a page can hold fewer items than `count` while older matches still exist. The operation is read-only; take  the values accepted by `action` from `GET api/2.0/security/audit/types`.
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
     * Returns the state of the login history report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/login/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402.  Jobs are kept per user and per report kind: this operation never shows another administrator\'s report, nor the  audit trail report, which has its own status at `GET api/2.0/security/audit/events/report`. The answer is  empty when no report of this kind is known for the caller; otherwise `percentage` grows towards 100,  `isCompleted` turns true when the build has ended, `error` carries the failure message when it ended badly,  and `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section, while  `resultFileId` is filled for an XLSX report only. The operation is read-only and safe to poll every few  seconds; a finished job is dropped as soon as the next report of this kind is started.
     * @summary Get login history report status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public getLoginHistoryReport(options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).getLoginHistoryReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels the login history report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/login/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own login history report - the audit trail report is cancelled by  `DELETE api/2.0/security/audit/events/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/login/report`.
     * @summary Terminate login history report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginHistoryApi
     */
    public terminateLoginHistoryReport(options?: RawAxiosRequestConfig) {
        return LoginHistoryApiFp(this.configuration).terminateLoginHistoryReport(options).then((request) => request(this.axios, this.basePath));
    }
}

