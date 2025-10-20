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
import type { WebPluginArrayWrapper } from '../../models';
// @ts-ignore
import type { WebPluginRequests } from '../../models';
// @ts-ignore
import type { WebPluginWrapper } from '../../models';
/**
 * WebpluginsApi - axios parameter creator
 * @export
 */
export const WebpluginsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Adds a web plugin from a file to the current portal.
         * @summary Add a web plugin
         * @param {boolean} [system] Specifies whether to load the system plugins or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addWebPluginFromFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-web-plugin-from-file/
         */
        addWebPluginFromFile: async (system?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webplugins`;
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

            if (system !== undefined) {
                localVarQueryParameter['system'] = system;
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
         * Deletes a web plugin by the name specified in the request.
         * @summary Delete a web plugin
         * @param {string} name The web plugin name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-web-plugin/
         */
        deleteWebPlugin: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteWebPlugin', 'name', name)
            const localVarPath = `/api/2.0/settings/webplugins/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
         * Returns a web plugin by the name specified in the request.
         * @summary Get a web plugin by name
         * @param {string} name The web plugin name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugin/
         */
        getWebPlugin: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getWebPlugin', 'name', name)
            const localVarPath = `/api/2.0/settings/webplugins/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
         * Returns the portal web plugins.
         * @summary Get web plugins
         * @param {boolean} [enabled] The optional filter for the plugin enabled state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugins operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugins/
         */
        getWebPlugins: async (enabled?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webplugins`;
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

            if (enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
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
         * Updates a web plugin with the parameters specified in the request.
         * @summary Update a web plugin
         * @param {string} name The web plugin name.
         * @param {WebPluginRequests} webPluginRequests The configuration settings for the web plugin instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         */
        updateWebPlugin: async (name: string, webPluginRequests: WebPluginRequests, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateWebPlugin', 'name', name)
            // verify required parameter 'webPluginRequests' is not null or undefined
            assertParamExists('updateWebPlugin', 'webPluginRequests', webPluginRequests)
            const localVarPath = `/api/2.0/settings/webplugins/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(webPluginRequests, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebpluginsApi - functional programming interface
 * @export
 */
export const WebpluginsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebpluginsApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a web plugin from a file to the current portal.
         * @summary Add a web plugin
         * @param {boolean} [system] Specifies whether to load the system plugins or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addWebPluginFromFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-web-plugin-from-file/
         */
        async addWebPluginFromFile(system?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebPluginWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addWebPluginFromFile(system, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.addWebPluginFromFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a web plugin by the name specified in the request.
         * @summary Delete a web plugin
         * @param {string} name The web plugin name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-web-plugin/
         */
        async deleteWebPlugin(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebPlugin(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.deleteWebPlugin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a web plugin by the name specified in the request.
         * @summary Get a web plugin by name
         * @param {string} name The web plugin name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugin/
         */
        async getWebPlugin(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebPluginWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebPlugin(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.getWebPlugin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal web plugins.
         * @summary Get web plugins
         * @param {boolean} [enabled] The optional filter for the plugin enabled state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugins operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugins/
         */
        async getWebPlugins(enabled?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebPluginArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebPlugins(enabled, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.getWebPlugins']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a web plugin with the parameters specified in the request.
         * @summary Update a web plugin
         * @param {string} name The web plugin name.
         * @param {WebPluginRequests} webPluginRequests The configuration settings for the web plugin instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         */
        async updateWebPlugin(name: string, webPluginRequests: WebPluginRequests, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebPlugin(name, webPluginRequests, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.updateWebPlugin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebpluginsApi - factory interface
 * @export
 */
export const WebpluginsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebpluginsApiFp(configuration)
    return {
        /**
         * Adds a web plugin from a file to the current portal.
         * @summary Add a web plugin
         * @param {boolean} [system] Specifies whether to load the system plugins or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for addWebPluginFromFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-web-plugin-from-file/
         * @throws {RequiredError}
         */
        addWebPluginFromFile(system?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<WebPluginWrapper> {
            return localVarFp.addWebPluginFromFile(system, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a web plugin by the name specified in the request.
         * @summary Delete a web plugin
         * @param {string} name The web plugin name.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-web-plugin/
         * @throws {RequiredError}
         */
        deleteWebPlugin(name: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteWebPlugin(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a web plugin by the name specified in the request.
         * @summary Get a web plugin by name
         * @param {string} name The web plugin name.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugin/
         * @throws {RequiredError}
         */
        getWebPlugin(name: string, options?: RawAxiosRequestConfig): AxiosPromise<WebPluginWrapper> {
            return localVarFp.getWebPlugin(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal web plugins.
         * @summary Get web plugins
         * @param {boolean} [enabled] The optional filter for the plugin enabled state.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebPlugins operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugins/
         * @throws {RequiredError}
         */
        getWebPlugins(enabled?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<WebPluginArrayWrapper> {
            return localVarFp.getWebPlugins(enabled, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a web plugin with the parameters specified in the request.
         * @summary Update a web plugin
         * @param {string} name The web plugin name.
         * @param {WebPluginRequests} webPluginRequests The configuration settings for the web plugin instance.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         * @throws {RequiredError}
         */
        updateWebPlugin(name: string, webPluginRequests: WebPluginRequests, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateWebPlugin(name, webPluginRequests, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebpluginsApi - object-oriented interface
 * @export
 * @class WebpluginsApi
 * @extends {BaseAPI}
 */
export class WebpluginsApi extends BaseAPI {
    /**
     * Adds a web plugin from a file to the current portal.
     * @summary Add a web plugin
     * @param {boolean} [system] Specifies whether to load the system plugins or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public addWebPluginFromFile(system?: boolean, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).addWebPluginFromFile(system, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a web plugin by the name specified in the request.
     * @summary Delete a web plugin
     * @param {string} name The web plugin name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public deleteWebPlugin(name: string, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).deleteWebPlugin(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a web plugin by the name specified in the request.
     * @summary Get a web plugin by name
     * @param {string} name The web plugin name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public getWebPlugin(name: string, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).getWebPlugin(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal web plugins.
     * @summary Get web plugins
     * @param {boolean} [enabled] The optional filter for the plugin enabled state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public getWebPlugins(enabled?: boolean, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).getWebPlugins(enabled, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a web plugin with the parameters specified in the request.
     * @summary Update a web plugin
     * @param {string} name The web plugin name.
     * @param {WebPluginRequests} webPluginRequests The configuration settings for the web plugin instance.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public updateWebPlugin(name: string, webPluginRequests: WebPluginRequests, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).updateWebPlugin(name, webPluginRequests, options).then((request) => request(this.axios, this.basePath));
    }
}

