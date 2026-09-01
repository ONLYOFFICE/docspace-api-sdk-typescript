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
import type { ActionType } from '../../models';
// @ts-ignore
import type { AuditEventArrayWrapper } from '../../models';
// @ts-ignore
import type { AuditReportFormat } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { EntryType } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { LocationType } from '../../models';
// @ts-ignore
import type { MessageAction } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { ProductType } from '../../models';
// @ts-ignore
import type { TenantAuditSettingsResponseWrapper } from '../../models';
// @ts-ignore
import type { TenantAuditSettingsWrapper } from '../../models';
/**
 * AuditTrailDataApi - axios parameter creator
 * @export
 */
export const AuditTrailDataApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Starts generating the audit trail report (XLSX by default, or CSV) and saves it to My documents.
         * @summary Start the audit trail report generation
         * @param {AuditReportFormat} [format] The output file format of the report. Defaults to XLSX.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         */
        createAuditTrailReport: async (format?: AuditReportFormat, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/report`;
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
         * Returns a list of the audit events by the parameters specified in the request.
         * @summary Get filtered audit trail data
         * @param {string} [userId] The ID of the user who triggered the audit event.
         * @param {LocationType} [moduleType] The location where the audit event occurred.
         * @param {ActionType} [actionType] The type of action performed in the audit event (e.g., Create, Update, Delete).
         * @param {MessageAction} [action] The specific action that occurred within the audit event.
         * @param {EntryType} [entryType] The type of audit entry (e.g., Folder, User, File).
         * @param {string} [target] The target object affected by the audit event (e.g., document ID, user account).
         * @param {string} [from] The starting date and time for filtering audit events.
         * @param {string} [to] The ending date and time for filtering audit events.
         * @param {number} [count] The maximum number of audit event records to retrieve.
         * @param {number} [startIndex] The index of the first audit event record to retrieve in a paged query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         */
        getAuditEventsByFilter: async (userId?: string, moduleType?: LocationType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: string, to?: string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/filter`;
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

            if (moduleType !== undefined) {
                localVarQueryParameter['moduleType'] = moduleType;
            }

            if (actionType !== undefined) {
                localVarQueryParameter['actionType'] = actionType;
            }

            if (action !== undefined) {
                localVarQueryParameter['action'] = action;
            }

            if (entryType !== undefined) {
                localVarQueryParameter['entryType'] = entryType;
            }

            if (target !== undefined) {
                localVarQueryParameter['target'] = target;
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
         * Returns the audit trail settings.
         * @summary Get the audit trail settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/
         */
        getAuditSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/settings/lifetime`;
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
         * Returns the mappers for the audit trail types.
         * @summary Get audit trail mappers
         * @param {ProductType} [productType] The type of product related to the audit trail.
         * @param {LocationType} [moduleType] The location associated with the audit trail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         */
        getAuditTrailMappers: async (productType?: ProductType, moduleType?: LocationType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/mappers`;
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

            if (productType !== undefined) {
                localVarQueryParameter['productType'] = productType;
            }

            if (moduleType !== undefined) {
                localVarQueryParameter['moduleType'] = moduleType;
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
         * Returns the status of generating the audit trail report.
         * @summary Get the audit trail report generation status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-report/
         */
        getAuditTrailReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/report`;
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
         * Returns all the available audit trail types.
         * @summary Get audit trail types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailTypes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-types/
         */
        getAuditTrailTypes: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/types`;
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
         * Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.
         * @summary Get audit trail data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLastAuditEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-audit-events/
         */
        getLastAuditEvents: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/last`;
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
         * Sets the audit trail settings for the current portal.
         * @summary Set the audit trail settings
         * @param {TenantAuditSettingsWrapper} [tenantAuditSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/
         */
        setAuditSettings: async (tenantAuditSettingsWrapper?: TenantAuditSettingsWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/settings/lifetime`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantAuditSettingsWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Terminates generating the audit trail report.
         * @summary Terminate the audit trail report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-audit-trail-report/
         */
        terminateAuditTrailReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/report`;
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
 * AuditTrailDataApi - functional programming interface
 * @export
 */
export const AuditTrailDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuditTrailDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Starts generating the audit trail report (XLSX by default, or CSV) and saves it to My documents.
         * @summary Start the audit trail report generation
         * @param {AuditReportFormat} [format] The output file format of the report. Defaults to XLSX.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         */
        async createAuditTrailReport(format?: AuditReportFormat, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAuditTrailReport(format, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.createAuditTrailReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the audit events by the parameters specified in the request.
         * @summary Get filtered audit trail data
         * @param {string} [userId] The ID of the user who triggered the audit event.
         * @param {LocationType} [moduleType] The location where the audit event occurred.
         * @param {ActionType} [actionType] The type of action performed in the audit event (e.g., Create, Update, Delete).
         * @param {MessageAction} [action] The specific action that occurred within the audit event.
         * @param {EntryType} [entryType] The type of audit entry (e.g., Folder, User, File).
         * @param {string} [target] The target object affected by the audit event (e.g., document ID, user account).
         * @param {string} [from] The starting date and time for filtering audit events.
         * @param {string} [to] The ending date and time for filtering audit events.
         * @param {number} [count] The maximum number of audit event records to retrieve.
         * @param {number} [startIndex] The index of the first audit event record to retrieve in a paged query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         */
        async getAuditEventsByFilter(userId?: string, moduleType?: LocationType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: string, to?: string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditEventsByFilter(userId, moduleType, actionType, action, entryType, target, from, to, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditEventsByFilter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the audit trail settings.
         * @summary Get the audit trail settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/
         */
        async getAuditSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAuditSettingsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the mappers for the audit trail types.
         * @summary Get audit trail mappers
         * @param {ProductType} [productType] The type of product related to the audit trail.
         * @param {LocationType} [moduleType] The location associated with the audit trail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         */
        async getAuditTrailMappers(productType?: ProductType, moduleType?: LocationType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditTrailMappers(productType, moduleType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditTrailMappers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the status of generating the audit trail report.
         * @summary Get the audit trail report generation status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-report/
         */
        async getAuditTrailReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditTrailReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditTrailReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns all the available audit trail types.
         * @summary Get audit trail types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailTypes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-types/
         */
        async getAuditTrailTypes(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditTrailTypes(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditTrailTypes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.
         * @summary Get audit trail data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLastAuditEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-audit-events/
         */
        async getLastAuditEvents(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLastAuditEvents(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getLastAuditEvents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the audit trail settings for the current portal.
         * @summary Set the audit trail settings
         * @param {TenantAuditSettingsWrapper} [tenantAuditSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/
         */
        async setAuditSettings(tenantAuditSettingsWrapper?: TenantAuditSettingsWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAuditSettingsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setAuditSettings(tenantAuditSettingsWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.setAuditSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Terminates generating the audit trail report.
         * @summary Terminate the audit trail report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-audit-trail-report/
         */
        async terminateAuditTrailReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateAuditTrailReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.terminateAuditTrailReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuditTrailDataApi - factory interface
 * @export
 */
export const AuditTrailDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuditTrailDataApiFp(configuration)
    return {
        /**
         * Starts generating the audit trail report (XLSX by default, or CSV) and saves it to My documents.
         * @summary Start the audit trail report generation
         * @param {AuditTrailDataApiCreateAuditTrailReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         * @throws {RequiredError}
         */
        createAuditTrailReport(requestParameters: AuditTrailDataApiCreateAuditTrailReportRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createAuditTrailReport(requestParameters.format, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the audit events by the parameters specified in the request.
         * @summary Get filtered audit trail data
         * @param {AuditTrailDataApiGetAuditEventsByFilterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         * @throws {RequiredError}
         */
        getAuditEventsByFilter(requestParameters: AuditTrailDataApiGetAuditEventsByFilterRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuditEventArrayWrapper> {
            return localVarFp.getAuditEventsByFilter(requestParameters.userId, requestParameters.moduleType, requestParameters.actionType, requestParameters.action, requestParameters.entryType, requestParameters.target, requestParameters.from, requestParameters.to, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the audit trail settings.
         * @summary Get the audit trail settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/
         * @throws {RequiredError}
         */
        getAuditSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantAuditSettingsResponseWrapper> {
            return localVarFp.getAuditSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the mappers for the audit trail types.
         * @summary Get audit trail mappers
         * @param {AuditTrailDataApiGetAuditTrailMappersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         * @throws {RequiredError}
         */
        getAuditTrailMappers(requestParameters: AuditTrailDataApiGetAuditTrailMappersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getAuditTrailMappers(requestParameters.productType, requestParameters.moduleType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the status of generating the audit trail report.
         * @summary Get the audit trail report generation status
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-report/
         * @throws {RequiredError}
         */
        getAuditTrailReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getAuditTrailReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all the available audit trail types.
         * @summary Get audit trail types
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditTrailTypes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-types/
         * @throws {RequiredError}
         */
        getAuditTrailTypes(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getAuditTrailTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.
         * @summary Get audit trail data
         * @param {*} [options] Override http request option.
         * REST API Reference for getLastAuditEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-audit-events/
         * @throws {RequiredError}
         */
        getLastAuditEvents(options?: RawAxiosRequestConfig): AxiosPromise<AuditEventArrayWrapper> {
            return localVarFp.getLastAuditEvents(options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the audit trail settings for the current portal.
         * @summary Set the audit trail settings
         * @param {AuditTrailDataApiSetAuditSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/
         * @throws {RequiredError}
         */
        setAuditSettings(requestParameters: AuditTrailDataApiSetAuditSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantAuditSettingsResponseWrapper> {
            return localVarFp.setAuditSettings(requestParameters.tenantAuditSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Terminates generating the audit trail report.
         * @summary Terminate the audit trail report generation
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-audit-trail-report/
         * @throws {RequiredError}
         */
        terminateAuditTrailReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateAuditTrailReport(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAuditTrailReport operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiCreateAuditTrailReportRequest
 */
export interface AuditTrailDataApiCreateAuditTrailReportRequest {
    /**
     * The output file format of the report. Defaults to XLSX.
     * @type {AuditReportFormat}
     * @memberof AuditTrailDataApiCreateAuditTrailReport
     */
    readonly format?: AuditReportFormat
}

/**
 * Request parameters for getAuditEventsByFilter operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiGetAuditEventsByFilterRequest
 */
export interface AuditTrailDataApiGetAuditEventsByFilterRequest {
    /**
     * The ID of the user who triggered the audit event.
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly userId?: string

    /**
     * The location where the audit event occurred.
     * @type {LocationType}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly moduleType?: LocationType

    /**
     * The type of action performed in the audit event (e.g., Create, Update, Delete).
     * @type {ActionType}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly actionType?: ActionType

    /**
     * The specific action that occurred within the audit event.
     * @type {MessageAction}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly action?: MessageAction

    /**
     * The type of audit entry (e.g., Folder, User, File).
     * @type {EntryType}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly entryType?: EntryType

    /**
     * The target object affected by the audit event (e.g., document ID, user account).
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly target?: string

    /**
     * The starting date and time for filtering audit events.
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly from?: string

    /**
     * The ending date and time for filtering audit events.
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly to?: string

    /**
     * The maximum number of audit event records to retrieve.
     * @type {number}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly count?: number

    /**
     * The index of the first audit event record to retrieve in a paged query.
     * @type {number}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getAuditTrailMappers operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiGetAuditTrailMappersRequest
 */
export interface AuditTrailDataApiGetAuditTrailMappersRequest {
    /**
     * The type of product related to the audit trail.
     * @type {ProductType}
     * @memberof AuditTrailDataApiGetAuditTrailMappers
     */
    readonly productType?: ProductType

    /**
     * The location associated with the audit trail.
     * @type {LocationType}
     * @memberof AuditTrailDataApiGetAuditTrailMappers
     */
    readonly moduleType?: LocationType
}

/**
 * Request parameters for setAuditSettings operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiSetAuditSettingsRequest
 */
export interface AuditTrailDataApiSetAuditSettingsRequest {
    /**
     * 
     * @type {TenantAuditSettingsWrapper}
     * @memberof AuditTrailDataApiSetAuditSettings
     */
    readonly tenantAuditSettingsWrapper?: TenantAuditSettingsWrapper
}

/**
 * AuditTrailDataApi - object-oriented interface
 * @export
 * @class AuditTrailDataApi
 * @extends {BaseAPI}
 */
export class AuditTrailDataApi extends BaseAPI {
    /**
     * Starts generating the audit trail report (XLSX by default, or CSV) and saves it to My documents.
     * @summary Start the audit trail report generation
     * @param {SecurityAuditTrailDataApiCreateAuditTrailReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public createAuditTrailReport(requestParameters: AuditTrailDataApiCreateAuditTrailReportRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).createAuditTrailReport(requestParameters.format, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the audit events by the parameters specified in the request.
     * @summary Get filtered audit trail data
     * @param {SecurityAuditTrailDataApiGetAuditEventsByFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditEventsByFilter(requestParameters: AuditTrailDataApiGetAuditEventsByFilterRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditEventsByFilter(requestParameters.userId, requestParameters.moduleType, requestParameters.actionType, requestParameters.action, requestParameters.entryType, requestParameters.target, requestParameters.from, requestParameters.to, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the audit trail settings.
     * @summary Get the audit trail settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditSettings(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the mappers for the audit trail types.
     * @summary Get audit trail mappers
     * @param {SecurityAuditTrailDataApiGetAuditTrailMappersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditTrailMappers(requestParameters: AuditTrailDataApiGetAuditTrailMappersRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditTrailMappers(requestParameters.productType, requestParameters.moduleType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the status of generating the audit trail report.
     * @summary Get the audit trail report generation status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditTrailReport(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditTrailReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all the available audit trail types.
     * @summary Get audit trail types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditTrailTypes(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditTrailTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.
     * @summary Get audit trail data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getLastAuditEvents(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getLastAuditEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the audit trail settings for the current portal.
     * @summary Set the audit trail settings
     * @param {SecurityAuditTrailDataApiSetAuditSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public setAuditSettings(requestParameters: AuditTrailDataApiSetAuditSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).setAuditSettings(requestParameters.tenantAuditSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates generating the audit trail report.
     * @summary Terminate the audit trail report generation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public terminateAuditTrailReport(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).terminateAuditTrailReport(options).then((request) => request(this.axios, this.basePath));
    }
}

