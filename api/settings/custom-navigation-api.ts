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
import type { CustomNavigationItem } from '../../models';
// @ts-ignore
import type { CustomNavigationItemArrayWrapper } from '../../models';
// @ts-ignore
import type { CustomNavigationItemWrapper } from '../../models';
/**
 * CustomNavigationApi - axios parameter creator
 * @export
 */
export const CustomNavigationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a custom navigation item with the parameters specified in the request.
         * @summary Add a custom navigation item
         * @param {CustomNavigationItem} [customNavigationItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-custom-navigation-item/
         */
        createCustomNavigationItem: async (customNavigationItem?: CustomNavigationItem, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/customnavigation/create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(customNavigationItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a custom navigation item with the ID specified in the request.
         * @summary Delete a custom navigation item
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-navigation-item/
         */
        deleteCustomNavigationItem: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteCustomNavigationItem', 'id', id)
            const localVarPath = `/api/2.0/settings/customnavigation/delete/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Returns a custom navigation item by the ID specified in the request.
         * @summary Get a custom navigation item by ID
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-item/
         */
        getCustomNavigationItem: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCustomNavigationItem', 'id', id)
            const localVarPath = `/api/2.0/settings/customnavigation/get/{id}`
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
         * Returns a sample of the custom navigation item.
         * @summary Get a custom navigation item sample
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomNavigationItemSample operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-item-sample/
         */
        getCustomNavigationItemSample: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/customnavigation/getsample`;
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
         * Returns a list of the custom navigation items.
         * @summary Get the custom navigation items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomNavigationItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-items/
         */
        getCustomNavigationItems: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/customnavigation/getall`;
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
    }
};

/**
 * CustomNavigationApi - functional programming interface
 * @export
 */
export const CustomNavigationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomNavigationApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a custom navigation item with the parameters specified in the request.
         * @summary Add a custom navigation item
         * @param {CustomNavigationItem} [customNavigationItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-custom-navigation-item/
         */
        async createCustomNavigationItem(customNavigationItem?: CustomNavigationItem, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomNavigationItemWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomNavigationItem(customNavigationItem, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomNavigationApi.createCustomNavigationItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a custom navigation item with the ID specified in the request.
         * @summary Delete a custom navigation item
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-navigation-item/
         */
        async deleteCustomNavigationItem(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomNavigationItem(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomNavigationApi.deleteCustomNavigationItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a custom navigation item by the ID specified in the request.
         * @summary Get a custom navigation item by ID
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-item/
         */
        async getCustomNavigationItem(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomNavigationItemWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomNavigationItem(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomNavigationApi.getCustomNavigationItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a sample of the custom navigation item.
         * @summary Get a custom navigation item sample
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomNavigationItemSample operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-item-sample/
         */
        async getCustomNavigationItemSample(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomNavigationItemWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomNavigationItemSample(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomNavigationApi.getCustomNavigationItemSample']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the custom navigation items.
         * @summary Get the custom navigation items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomNavigationItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-items/
         */
        async getCustomNavigationItems(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomNavigationItemArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomNavigationItems(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomNavigationApi.getCustomNavigationItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CustomNavigationApi - factory interface
 * @export
 */
export const CustomNavigationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomNavigationApiFp(configuration)
    return {
        /**
         * Adds a custom navigation item with the parameters specified in the request.
         * @summary Add a custom navigation item
         * @param {CustomNavigationItem} [customNavigationItem] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-custom-navigation-item/
         * @throws {RequiredError}
         */
        createCustomNavigationItem(customNavigationItem?: CustomNavigationItem, options?: RawAxiosRequestConfig): AxiosPromise<CustomNavigationItemWrapper> {
            return localVarFp.createCustomNavigationItem(customNavigationItem, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a custom navigation item with the ID specified in the request.
         * @summary Delete a custom navigation item
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-navigation-item/
         * @throws {RequiredError}
         */
        deleteCustomNavigationItem(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteCustomNavigationItem(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a custom navigation item by the ID specified in the request.
         * @summary Get a custom navigation item by ID
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomNavigationItem operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-item/
         * @throws {RequiredError}
         */
        getCustomNavigationItem(id: string, options?: RawAxiosRequestConfig): AxiosPromise<CustomNavigationItemWrapper> {
            return localVarFp.getCustomNavigationItem(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a sample of the custom navigation item.
         * @summary Get a custom navigation item sample
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomNavigationItemSample operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-item-sample/
         * @throws {RequiredError}
         */
        getCustomNavigationItemSample(options?: RawAxiosRequestConfig): AxiosPromise<CustomNavigationItemWrapper> {
            return localVarFp.getCustomNavigationItemSample(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the custom navigation items.
         * @summary Get the custom navigation items
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomNavigationItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-custom-navigation-items/
         * @throws {RequiredError}
         */
        getCustomNavigationItems(options?: RawAxiosRequestConfig): AxiosPromise<CustomNavigationItemArrayWrapper> {
            return localVarFp.getCustomNavigationItems(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomNavigationApi - object-oriented interface
 * @export
 * @class CustomNavigationApi
 * @extends {BaseAPI}
 */
export class CustomNavigationApi extends BaseAPI {
    /**
     * Adds a custom navigation item with the parameters specified in the request.
     * @summary Add a custom navigation item
     * @param {CustomNavigationItem} [customNavigationItem] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomNavigationApi
     */
    public createCustomNavigationItem(customNavigationItem?: CustomNavigationItem, options?: RawAxiosRequestConfig) {
        return CustomNavigationApiFp(this.configuration).createCustomNavigationItem(customNavigationItem, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a custom navigation item with the ID specified in the request.
     * @summary Delete a custom navigation item
     * @param {string} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomNavigationApi
     */
    public deleteCustomNavigationItem(id: string, options?: RawAxiosRequestConfig) {
        return CustomNavigationApiFp(this.configuration).deleteCustomNavigationItem(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a custom navigation item by the ID specified in the request.
     * @summary Get a custom navigation item by ID
     * @param {string} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomNavigationApi
     */
    public getCustomNavigationItem(id: string, options?: RawAxiosRequestConfig) {
        return CustomNavigationApiFp(this.configuration).getCustomNavigationItem(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a sample of the custom navigation item.
     * @summary Get a custom navigation item sample
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomNavigationApi
     */
    public getCustomNavigationItemSample(options?: RawAxiosRequestConfig) {
        return CustomNavigationApiFp(this.configuration).getCustomNavigationItemSample(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the custom navigation items.
     * @summary Get the custom navigation items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomNavigationApi
     */
    public getCustomNavigationItems(options?: RawAxiosRequestConfig) {
        return CustomNavigationApiFp(this.configuration).getCustomNavigationItems(options).then((request) => request(this.axios, this.basePath));
    }
}

