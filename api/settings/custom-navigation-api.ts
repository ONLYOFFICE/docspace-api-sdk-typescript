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
import type { CustomNavigationItem } from '../../models';
// @ts-ignore
import type { CustomNavigationItemArrayWrapper } from '../../models';
// @ts-ignore
import type { CustomNavigationItemWrapper } from '../../models';
/**
 * SettingsCustomNavigationApi - axios parameter creator
 * @export
 */
export const SettingsCustomNavigationApiAxiosParamCreator = function (configuration?: Configuration) {
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
 * SettingsCustomNavigationApi - functional programming interface
 * @export
 */
export const SettingsCustomNavigationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsCustomNavigationApiAxiosParamCreator(configuration)
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
            const localVarOperationServerBasePath = operationServerMap['SettingsCustomNavigationApi.createCustomNavigationItem']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsCustomNavigationApi.deleteCustomNavigationItem']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsCustomNavigationApi.getCustomNavigationItem']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsCustomNavigationApi.getCustomNavigationItemSample']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsCustomNavigationApi.getCustomNavigationItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsCustomNavigationApi - factory interface
 * @export
 */
export const SettingsCustomNavigationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsCustomNavigationApiFp(configuration)
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
 * SettingsCustomNavigationApi - object-oriented interface
 * @export
 * @class SettingsCustomNavigationApi
 * @extends {BaseAPI}
 */
export class SettingsCustomNavigationApi extends BaseAPI {
    /**
     * Adds a custom navigation item with the parameters specified in the request.
     * @summary Add a custom navigation item
     * @param {CustomNavigationItem} [customNavigationItem] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCustomNavigationApi
     */
    public createCustomNavigationItem(customNavigationItem?: CustomNavigationItem, options?: RawAxiosRequestConfig) {
        return SettingsCustomNavigationApiFp(this.configuration).createCustomNavigationItem(customNavigationItem, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a custom navigation item with the ID specified in the request.
     * @summary Delete a custom navigation item
     * @param {string} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCustomNavigationApi
     */
    public deleteCustomNavigationItem(id: string, options?: RawAxiosRequestConfig) {
        return SettingsCustomNavigationApiFp(this.configuration).deleteCustomNavigationItem(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a custom navigation item by the ID specified in the request.
     * @summary Get a custom navigation item by ID
     * @param {string} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCustomNavigationApi
     */
    public getCustomNavigationItem(id: string, options?: RawAxiosRequestConfig) {
        return SettingsCustomNavigationApiFp(this.configuration).getCustomNavigationItem(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a sample of the custom navigation item.
     * @summary Get a custom navigation item sample
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCustomNavigationApi
     */
    public getCustomNavigationItemSample(options?: RawAxiosRequestConfig) {
        return SettingsCustomNavigationApiFp(this.configuration).getCustomNavigationItemSample(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the custom navigation items.
     * @summary Get the custom navigation items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCustomNavigationApi
     */
    public getCustomNavigationItems(options?: RawAxiosRequestConfig) {
        return SettingsCustomNavigationApiFp(this.configuration).getCustomNavigationItems(options).then((request) => request(this.axios, this.basePath));
    }
}

