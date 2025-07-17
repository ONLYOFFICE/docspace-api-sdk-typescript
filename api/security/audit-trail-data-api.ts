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
import type { ActionType } from '../../models';
// @ts-ignore
import type { ApiDateTime } from '../../models';
// @ts-ignore
import type { AuditEventArrayWrapper } from '../../models';
// @ts-ignore
import type { EntryType } from '../../models';
// @ts-ignore
import type { MessageAction } from '../../models';
// @ts-ignore
import type { ModuleType } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { ProductType } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TenantAuditSettingsWrapper } from '../../models';
/**
 * SecurityAuditTrailDataApi - axios parameter creator
 * @export
 */
export const SecurityAuditTrailDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generates the audit trail report.
         * @summary Generate the audit trail report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         */
        createAuditTrailReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * @param {ProductType} [productType] The type of product related to the audit event.
         * @param {ModuleType} [moduleType] The module within the product where the audit event occurred.
         * @param {ActionType} [actionType] The type of action performed in the audit event (e.g., Create, Update, Delete).
         * @param {MessageAction} [action] The specific action that occurred within the audit event.
         * @param {EntryType} [entryType] The type of audit entry (e.g., Folder, User, File).
         * @param {string} [target] The target object affected by the audit event (e.g., document ID, user account).
         * @param {ApiDateTime} [from] The starting date and time for filtering audit events.
         * @param {ApiDateTime} [to] The ending date and time for filtering audit events.
         * @param {number} [count] The maximum number of audit event records to retrieve.
         * @param {number} [startIndex] The index of the first audit event record to retrieve in a paged query.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         */
        getAuditEventsByFilter: async (userId?: string, productType?: ProductType, moduleType?: ModuleType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, fields?: string | null, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (productType !== undefined) {
                localVarQueryParameter['productType'] = productType;
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

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
         * @param {ModuleType} [moduleType] The module within the product associated with the audit trail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         */
        getAuditTrailMappers: async (productType?: ProductType, moduleType?: ModuleType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
    }
};

/**
 * SecurityAuditTrailDataApi - functional programming interface
 * @export
 */
export const SecurityAuditTrailDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityAuditTrailDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Generates the audit trail report.
         * @summary Generate the audit trail report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         */
        async createAuditTrailReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAuditTrailReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityAuditTrailDataApi.createAuditTrailReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the audit events by the parameters specified in the request.
         * @summary Get filtered audit trail data
         * @param {string} [userId] The ID of the user who triggered the audit event.
         * @param {ProductType} [productType] The type of product related to the audit event.
         * @param {ModuleType} [moduleType] The module within the product where the audit event occurred.
         * @param {ActionType} [actionType] The type of action performed in the audit event (e.g., Create, Update, Delete).
         * @param {MessageAction} [action] The specific action that occurred within the audit event.
         * @param {EntryType} [entryType] The type of audit entry (e.g., Folder, User, File).
         * @param {string} [target] The target object affected by the audit event (e.g., document ID, user account).
         * @param {ApiDateTime} [from] The starting date and time for filtering audit events.
         * @param {ApiDateTime} [to] The ending date and time for filtering audit events.
         * @param {number} [count] The maximum number of audit event records to retrieve.
         * @param {number} [startIndex] The index of the first audit event record to retrieve in a paged query.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         */
        async getAuditEventsByFilter(userId?: string, productType?: ProductType, moduleType?: ModuleType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, fields?: string | null, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditEventsByFilter(userId, productType, moduleType, actionType, action, entryType, target, from, to, count, startIndex, fields, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityAuditTrailDataApi.getAuditEventsByFilter']?.[localVarOperationServerIndex]?.url;
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
        async getAuditSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAuditSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityAuditTrailDataApi.getAuditSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the mappers for the audit trail types.
         * @summary Get audit trail mappers
         * @param {ProductType} [productType] The type of product related to the audit trail.
         * @param {ModuleType} [moduleType] The module within the product associated with the audit trail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         */
        async getAuditTrailMappers(productType?: ProductType, moduleType?: ModuleType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditTrailMappers(productType, moduleType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityAuditTrailDataApi.getAuditTrailMappers']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityAuditTrailDataApi.getAuditTrailTypes']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityAuditTrailDataApi.getLastAuditEvents']?.[localVarOperationServerIndex]?.url;
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
        async setAuditSettings(tenantAuditSettingsWrapper?: TenantAuditSettingsWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAuditSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setAuditSettings(tenantAuditSettingsWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityAuditTrailDataApi.setAuditSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityAuditTrailDataApi - factory interface
 * @export
 */
export const SecurityAuditTrailDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityAuditTrailDataApiFp(configuration)
    return {
        /**
         * Generates the audit trail report.
         * @summary Generate the audit trail report
         * @param {*} [options] Override http request option.
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         * @throws {RequiredError}
         */
        createAuditTrailReport(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.createAuditTrailReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the audit events by the parameters specified in the request.
         * @summary Get filtered audit trail data
         * @param {string} [userId] The ID of the user who triggered the audit event.
         * @param {ProductType} [productType] The type of product related to the audit event.
         * @param {ModuleType} [moduleType] The module within the product where the audit event occurred.
         * @param {ActionType} [actionType] The type of action performed in the audit event (e.g., Create, Update, Delete).
         * @param {MessageAction} [action] The specific action that occurred within the audit event.
         * @param {EntryType} [entryType] The type of audit entry (e.g., Folder, User, File).
         * @param {string} [target] The target object affected by the audit event (e.g., document ID, user account).
         * @param {ApiDateTime} [from] The starting date and time for filtering audit events.
         * @param {ApiDateTime} [to] The ending date and time for filtering audit events.
         * @param {number} [count] The maximum number of audit event records to retrieve.
         * @param {number} [startIndex] The index of the first audit event record to retrieve in a paged query.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         * @throws {RequiredError}
         */
        getAuditEventsByFilter(userId?: string, productType?: ProductType, moduleType?: ModuleType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, fields?: string | null, options?: RawAxiosRequestConfig): AxiosPromise<AuditEventArrayWrapper> {
            return localVarFp.getAuditEventsByFilter(userId, productType, moduleType, actionType, action, entryType, target, from, to, count, startIndex, fields, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the audit trail settings.
         * @summary Get the audit trail settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/
         * @throws {RequiredError}
         */
        getAuditSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantAuditSettingsWrapper> {
            return localVarFp.getAuditSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the mappers for the audit trail types.
         * @summary Get audit trail mappers
         * @param {ProductType} [productType] The type of product related to the audit trail.
         * @param {ModuleType} [moduleType] The module within the product associated with the audit trail.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         * @throws {RequiredError}
         */
        getAuditTrailMappers(productType?: ProductType, moduleType?: ModuleType, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getAuditTrailMappers(productType, moduleType, options).then((request) => request(axios, basePath));
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
         * @param {TenantAuditSettingsWrapper} [tenantAuditSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/
         * @throws {RequiredError}
         */
        setAuditSettings(tenantAuditSettingsWrapper?: TenantAuditSettingsWrapper, options?: RawAxiosRequestConfig): AxiosPromise<TenantAuditSettingsWrapper> {
            return localVarFp.setAuditSettings(tenantAuditSettingsWrapper, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecurityAuditTrailDataApi - object-oriented interface
 * @export
 * @class SecurityAuditTrailDataApi
 * @extends {BaseAPI}
 */
export class SecurityAuditTrailDataApi extends BaseAPI {
    /**
     * Generates the audit trail report.
     * @summary Generate the audit trail report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAuditTrailDataApi
     */
    public createAuditTrailReport(options?: RawAxiosRequestConfig) {
        return SecurityAuditTrailDataApiFp(this.configuration).createAuditTrailReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the audit events by the parameters specified in the request.
     * @summary Get filtered audit trail data
     * @param {string} [userId] The ID of the user who triggered the audit event.
     * @param {ProductType} [productType] The type of product related to the audit event.
     * @param {ModuleType} [moduleType] The module within the product where the audit event occurred.
     * @param {ActionType} [actionType] The type of action performed in the audit event (e.g., Create, Update, Delete).
     * @param {MessageAction} [action] The specific action that occurred within the audit event.
     * @param {EntryType} [entryType] The type of audit entry (e.g., Folder, User, File).
     * @param {string} [target] The target object affected by the audit event (e.g., document ID, user account).
     * @param {ApiDateTime} [from] The starting date and time for filtering audit events.
     * @param {ApiDateTime} [to] The ending date and time for filtering audit events.
     * @param {number} [count] The maximum number of audit event records to retrieve.
     * @param {number} [startIndex] The index of the first audit event record to retrieve in a paged query.
     * @param {string | null} [fields] Comma-separated list of fields to include in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAuditTrailDataApi
     */
    public getAuditEventsByFilter(userId?: string, productType?: ProductType, moduleType?: ModuleType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: ApiDateTime, to?: ApiDateTime, count?: number, startIndex?: number, fields?: string | null, options?: RawAxiosRequestConfig) {
        return SecurityAuditTrailDataApiFp(this.configuration).getAuditEventsByFilter(userId, productType, moduleType, actionType, action, entryType, target, from, to, count, startIndex, fields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the audit trail settings.
     * @summary Get the audit trail settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAuditTrailDataApi
     */
    public getAuditSettings(options?: RawAxiosRequestConfig) {
        return SecurityAuditTrailDataApiFp(this.configuration).getAuditSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the mappers for the audit trail types.
     * @summary Get audit trail mappers
     * @param {ProductType} [productType] The type of product related to the audit trail.
     * @param {ModuleType} [moduleType] The module within the product associated with the audit trail.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAuditTrailDataApi
     */
    public getAuditTrailMappers(productType?: ProductType, moduleType?: ModuleType, options?: RawAxiosRequestConfig) {
        return SecurityAuditTrailDataApiFp(this.configuration).getAuditTrailMappers(productType, moduleType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all the available audit trail types.
     * @summary Get audit trail types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAuditTrailDataApi
     */
    public getAuditTrailTypes(options?: RawAxiosRequestConfig) {
        return SecurityAuditTrailDataApiFp(this.configuration).getAuditTrailTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.
     * @summary Get audit trail data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAuditTrailDataApi
     */
    public getLastAuditEvents(options?: RawAxiosRequestConfig) {
        return SecurityAuditTrailDataApiFp(this.configuration).getLastAuditEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the audit trail settings for the current portal.
     * @summary Set the audit trail settings
     * @param {TenantAuditSettingsWrapper} [tenantAuditSettingsWrapper] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAuditTrailDataApi
     */
    public setAuditSettings(tenantAuditSettingsWrapper?: TenantAuditSettingsWrapper, options?: RawAxiosRequestConfig) {
        return SecurityAuditTrailDataApiFp(this.configuration).setAuditSettings(tenantAuditSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }
}

