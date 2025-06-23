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
import type { WebPluginArrayWrapper } from '../../models';
// @ts-ignore
import type { WebPluginRequests } from '../../models';
// @ts-ignore
import type { WebPluginWrapper } from '../../models';
/**
 * SettingsWebpluginsApi - axios parameter creator
 * @export
 */
export const SettingsWebpluginsApiAxiosParamCreator = function (configuration?: Configuration) {
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
         * @param {WebPluginRequests} [webPluginRequests] The configuration settings for the web plugin instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         */
        updateWebPlugin: async (name: string, webPluginRequests?: WebPluginRequests, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateWebPlugin', 'name', name)
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
 * SettingsWebpluginsApi - functional programming interface
 * @export
 */
export const SettingsWebpluginsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsWebpluginsApiAxiosParamCreator(configuration)
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
            const localVarOperationServerBasePath = operationServerMap['SettingsWebpluginsApi.addWebPluginFromFile']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsWebpluginsApi.deleteWebPlugin']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsWebpluginsApi.getWebPlugin']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsWebpluginsApi.getWebPlugins']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a web plugin with the parameters specified in the request.
         * @summary Update a web plugin
         * @param {string} name The web plugin name.
         * @param {WebPluginRequests} [webPluginRequests] The configuration settings for the web plugin instance.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         */
        async updateWebPlugin(name: string, webPluginRequests?: WebPluginRequests, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebPlugin(name, webPluginRequests, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsWebpluginsApi.updateWebPlugin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsWebpluginsApi - factory interface
 * @export
 */
export const SettingsWebpluginsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsWebpluginsApiFp(configuration)
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
         * @param {WebPluginRequests} [webPluginRequests] The configuration settings for the web plugin instance.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         * @throws {RequiredError}
         */
        updateWebPlugin(name: string, webPluginRequests?: WebPluginRequests, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateWebPlugin(name, webPluginRequests, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsWebpluginsApi - object-oriented interface
 * @export
 * @class SettingsWebpluginsApi
 * @extends {BaseAPI}
 */
export class SettingsWebpluginsApi extends BaseAPI {
    /**
     * Adds a web plugin from a file to the current portal.
     * @summary Add a web plugin
     * @param {boolean} [system] Specifies whether to load the system plugins or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsWebpluginsApi
     */
    public addWebPluginFromFile(system?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsWebpluginsApiFp(this.configuration).addWebPluginFromFile(system, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a web plugin by the name specified in the request.
     * @summary Delete a web plugin
     * @param {string} name The web plugin name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsWebpluginsApi
     */
    public deleteWebPlugin(name: string, options?: RawAxiosRequestConfig) {
        return SettingsWebpluginsApiFp(this.configuration).deleteWebPlugin(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a web plugin by the name specified in the request.
     * @summary Get a web plugin by name
     * @param {string} name The web plugin name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsWebpluginsApi
     */
    public getWebPlugin(name: string, options?: RawAxiosRequestConfig) {
        return SettingsWebpluginsApiFp(this.configuration).getWebPlugin(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal web plugins.
     * @summary Get web plugins
     * @param {boolean} [enabled] The optional filter for the plugin enabled state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsWebpluginsApi
     */
    public getWebPlugins(enabled?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsWebpluginsApiFp(this.configuration).getWebPlugins(enabled, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a web plugin with the parameters specified in the request.
     * @summary Update a web plugin
     * @param {string} name The web plugin name.
     * @param {WebPluginRequests} [webPluginRequests] The configuration settings for the web plugin instance.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsWebpluginsApi
     */
    public updateWebPlugin(name: string, webPluginRequests?: WebPluginRequests, options?: RawAxiosRequestConfig) {
        return SettingsWebpluginsApiFp(this.configuration).updateWebPlugin(name, webPluginRequests, options).then((request) => request(this.axios, this.basePath));
    }
}

