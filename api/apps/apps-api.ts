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
import type { AppArrayWrapper } from '../../models';
// @ts-ignore
import type { AppWrapper } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { SetAppEnabledBody } from '../../models';
// @ts-ignore
import type { SetAppSettingsBody } from '../../models';
/**
 * AppsApi - axios parameter creator
 * @export
 */
export const AppsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns a single application by id with the per-tenant enabled state and settings JSON.
         * @summary Get a single app
         * @param {string} id The application identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for get operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get/
         */
        get: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)

            const localVarPath = `/api/2.0/apps/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Returns the full list of portal applications declared in configuration, merged with per-tenant overrides  (enabled state and JSON settings).
         * @summary Get all apps
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAll operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all/
         */
        getAll: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/apps`;
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
         * Returns the JSON settings document saved for the specified application, or null if no overrides exist.
         * @summary Get app settings
         * @param {string} id The application identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-settings/
         */
        getSettings: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSettings', 'id', id)

            const localVarPath = `/api/2.0/apps/{id}/settings`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Toggles the enabled state of the application for the current tenant. Requires portal administrator permissions.
         * @summary Enable or disable an app
         * @param {string} id The application identifier.
         * @param {SetAppEnabledBody} setAppEnabledBody New enabled state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setEnabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-enabled/
         */
        setEnabled: async (id: string, setAppEnabledBody: SetAppEnabledBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setEnabled', 'id', id)
            // verify required parameter 'setAppEnabledBody' is not null or undefined
            assertParamExists('setEnabled', 'setAppEnabledBody', setAppEnabledBody)

            const localVarPath = `/api/2.0/apps/{id}/enabled`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(setAppEnabledBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves an arbitrary JSON settings document for the specified application for the current tenant.  Requires portal administrator permissions.
         * @summary Save app settings
         * @param {string} id The application identifier.
         * @param {SetAppSettingsBody} setAppSettingsBody New settings document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-settings/
         */
        setSettings: async (id: string, setAppSettingsBody: SetAppSettingsBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setSettings', 'id', id)
            // verify required parameter 'setAppSettingsBody' is not null or undefined
            assertParamExists('setSettings', 'setAppSettingsBody', setAppSettingsBody)

            const localVarPath = `/api/2.0/apps/{id}/settings`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(setAppSettingsBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AppsApi - functional programming interface
 * @export
 */
export const AppsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AppsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single application by id with the per-tenant enabled state and settings JSON.
         * @summary Get a single app
         * @param {string} id The application identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for get operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get/
         */
        async get(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.get']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the full list of portal applications declared in configuration, merged with per-tenant overrides  (enabled state and JSON settings).
         * @summary Get all apps
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAll operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all/
         */
        async getAll(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.getAll']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the JSON settings document saved for the specified application, or null if no overrides exist.
         * @summary Get app settings
         * @param {string} id The application identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-settings/
         */
        async getSettings(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSettings(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.getSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Toggles the enabled state of the application for the current tenant. Requires portal administrator permissions.
         * @summary Enable or disable an app
         * @param {string} id The application identifier.
         * @param {SetAppEnabledBody} setAppEnabledBody New enabled state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setEnabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-enabled/
         */
        async setEnabled(id: string, setAppEnabledBody: SetAppEnabledBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setEnabled(id, setAppEnabledBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.setEnabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves an arbitrary JSON settings document for the specified application for the current tenant.  Requires portal administrator permissions.
         * @summary Save app settings
         * @param {string} id The application identifier.
         * @param {SetAppSettingsBody} setAppSettingsBody New settings document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-settings/
         */
        async setSettings(id: string, setAppSettingsBody: SetAppSettingsBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setSettings(id, setAppSettingsBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.setSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AppsApi - factory interface
 * @export
 */
export const AppsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AppsApiFp(configuration)
    return {
        /**
         * Returns a single application by id with the per-tenant enabled state and settings JSON.
         * @summary Get a single app
         * @param {AppsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for get operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get/
         * @throws {RequiredError}
         */
        get(requestParameters: AppsApiGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AppWrapper> {
            return localVarFp.get(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the full list of portal applications declared in configuration, merged with per-tenant overrides  (enabled state and JSON settings).
         * @summary Get all apps
         * @param {*} [options] Override http request option.
         * REST API Reference for getAll operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all/
         * @throws {RequiredError}
         */
        getAll(options?: RawAxiosRequestConfig): AxiosPromise<AppArrayWrapper> {
            return localVarFp.getAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the JSON settings document saved for the specified application, or null if no overrides exist.
         * @summary Get app settings
         * @param {AppsApiGetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-settings/
         * @throws {RequiredError}
         */
        getSettings(requestParameters: AppsApiGetSettingsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getSettings(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Toggles the enabled state of the application for the current tenant. Requires portal administrator permissions.
         * @summary Enable or disable an app
         * @param {AppsApiSetEnabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setEnabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-enabled/
         * @throws {RequiredError}
         */
        setEnabled(requestParameters: AppsApiSetEnabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<AppWrapper> {
            return localVarFp.setEnabled(requestParameters.id, requestParameters.setAppEnabledBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves an arbitrary JSON settings document for the specified application for the current tenant.  Requires portal administrator permissions.
         * @summary Save app settings
         * @param {AppsApiSetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-settings/
         * @throws {RequiredError}
         */
        setSettings(requestParameters: AppsApiSetSettingsRequest, options?: RawAxiosRequestConfig): AxiosPromise<AppWrapper> {
            return localVarFp.setSettings(requestParameters.id, requestParameters.setAppSettingsBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in AppsApi.
 * @export
 * @interface AppsApiGetRequest
 */
export interface AppsApiGetRequest {
    /**
     * The application identifier.
     * @type {string}
     * @memberof AppsApiGet
     */
    readonly id: string
}

/**
 * Request parameters for getSettings operation in AppsApi.
 * @export
 * @interface AppsApiGetSettingsRequest
 */
export interface AppsApiGetSettingsRequest {
    /**
     * The application identifier.
     * @type {string}
     * @memberof AppsApiGetSettings
     */
    readonly id: string
}

/**
 * Request parameters for setEnabled operation in AppsApi.
 * @export
 * @interface AppsApiSetEnabledRequest
 */
export interface AppsApiSetEnabledRequest {
    /**
     * The application identifier.
     * @type {string}
     * @memberof AppsApiSetEnabled
     */
    readonly id: string

    /**
     * New enabled state.
     * @type {SetAppEnabledBody}
     * @memberof AppsApiSetEnabled
     */
    readonly setAppEnabledBody: SetAppEnabledBody
}

/**
 * Request parameters for setSettings operation in AppsApi.
 * @export
 * @interface AppsApiSetSettingsRequest
 */
export interface AppsApiSetSettingsRequest {
    /**
     * The application identifier.
     * @type {string}
     * @memberof AppsApiSetSettings
     */
    readonly id: string

    /**
     * New settings document.
     * @type {SetAppSettingsBody}
     * @memberof AppsApiSetSettings
     */
    readonly setAppSettingsBody: SetAppSettingsBody
}

/**
 * AppsApi - object-oriented interface
 * @export
 * @class AppsApi
 * @extends {BaseAPI}
 */
export class AppsApi extends BaseAPI {
    /**
     * Returns a single application by id with the per-tenant enabled state and settings JSON.
     * @summary Get a single app
     * @param {AppsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public get(requestParameters: AppsApiGetRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).get(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the full list of portal applications declared in configuration, merged with per-tenant overrides  (enabled state and JSON settings).
     * @summary Get all apps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public getAll(options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).getAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the JSON settings document saved for the specified application, or null if no overrides exist.
     * @summary Get app settings
     * @param {AppsApiGetSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public getSettings(requestParameters: AppsApiGetSettingsRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).getSettings(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Toggles the enabled state of the application for the current tenant. Requires portal administrator permissions.
     * @summary Enable or disable an app
     * @param {AppsApiSetEnabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public setEnabled(requestParameters: AppsApiSetEnabledRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).setEnabled(requestParameters.id, requestParameters.setAppEnabledBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves an arbitrary JSON settings document for the specified application for the current tenant.  Requires portal administrator permissions.
     * @summary Save app settings
     * @param {AppsApiSetSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public setSettings(requestParameters: AppsApiSetSettingsRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).setSettings(requestParameters.id, requestParameters.setAppSettingsBody, options).then((request) => request(this.axios, this.basePath));
    }
}

