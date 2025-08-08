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
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TenantWrapper } from '../../models';
/**
 * SettingsApi - axios parameter creator
 * @export
 */
export const SettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Restores the current portal.
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
         * Deletes the current portal.
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
         * Returns the current portal information.
         * @summary Get a portal
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
         * Returns the full absolute path to the current portal.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The virtual path for the portal resource access.
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
         * Sends the instructions to remove the current portal.
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
         * Sends the instructions to suspend the current portal.
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
         * Deactivates the current portal.
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
 * SettingsApi - functional programming interface
 * @export
 */
export const SettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Restores the current portal.
         * @summary Restore a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for continuePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-portal/
         */
        async continuePortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.continuePortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.continuePortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the current portal.
         * @summary Delete a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deletePortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal/
         */
        async deletePortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.deletePortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal information.
         * @summary Get a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-information/
         */
        async getPortalInformation(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalInformation(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getPortalInformation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the full absolute path to the current portal.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The virtual path for the portal resource access.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-path/
         */
        async getPortalPath(virtualPath?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalPath(virtualPath, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getPortalPath']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the instructions to remove the current portal.
         * @summary Send removal instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendDeleteInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-delete-instructions/
         */
        async sendDeleteInstructions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendDeleteInstructions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.sendDeleteInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the instructions to suspend the current portal.
         * @summary Send suspension instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendSuspendInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-suspend-instructions/
         */
        async sendSuspendInstructions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSuspendInstructions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.sendSuspendInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deactivates the current portal.
         * @summary Deactivate a portal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for suspendPortal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/suspend-portal/
         */
        async suspendPortal(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.suspendPortal(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.suspendPortal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsApi - factory interface
 * @export
 */
export const SettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsApiFp(configuration)
    return {
        /**
         * Restores the current portal.
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
         * Deletes the current portal.
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
         * Returns the current portal information.
         * @summary Get a portal
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-information/
         * @throws {RequiredError}
         */
        getPortalInformation(options?: RawAxiosRequestConfig): AxiosPromise<TenantWrapper> {
            return localVarFp.getPortalInformation(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the full absolute path to the current portal.
         * @summary Get a path to the portal
         * @param {string} [virtualPath] The virtual path for the portal resource access.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-path/
         * @throws {RequiredError}
         */
        getPortalPath(virtualPath?: string, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getPortalPath(virtualPath, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the instructions to remove the current portal.
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
         * Sends the instructions to suspend the current portal.
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
         * Deactivates the current portal.
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
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
export class SettingsApi extends BaseAPI {
    /**
     * Restores the current portal.
     * @summary Restore a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public continuePortal(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).continuePortal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the current portal.
     * @summary Delete a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public deletePortal(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).deletePortal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal information.
     * @summary Get a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getPortalInformation(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getPortalInformation(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the full absolute path to the current portal.
     * @summary Get a path to the portal
     * @param {string} [virtualPath] The virtual path for the portal resource access.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getPortalPath(virtualPath?: string, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getPortalPath(virtualPath, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the instructions to remove the current portal.
     * @summary Send removal instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public sendDeleteInstructions(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).sendDeleteInstructions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the instructions to suspend the current portal.
     * @summary Send suspension instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public sendSuspendInstructions(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).sendSuspendInstructions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deactivates the current portal.
     * @summary Deactivate a portal
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public suspendPortal(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).suspendPortal(options).then((request) => request(this.axios, this.basePath));
    }
}

