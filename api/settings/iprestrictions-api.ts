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
import type { IPRestrictionArrayWrapper } from '../../models';
// @ts-ignore
import type { IPRestrictionsSettingsWrapper } from '../../models';
// @ts-ignore
import type { IpRestrictionsDto } from '../../models';
// @ts-ignore
import type { IpRestrictionsWrapper } from '../../models';
/**
 * IPRestrictionsApi - axios parameter creator
 * @export
 */
export const IPRestrictionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the IP portal restrictions.
         * @summary Get the IP portal restrictions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ip-restrictions/
         */
        getIpRestrictions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions`;
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
         * Returns the IP restriction settings.
         * @summary Get the IP restriction settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for readIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/read-ip-restrictions-settings/
         */
        readIpRestrictionsSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions/settings`;
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
         * Updates the IP restrictions with the parameters specified in the request.
         * @summary Update the IP restrictions
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ip-restrictions/
         */
        saveIpRestrictions: async (ipRestrictionsDto?: IpRestrictionsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ipRestrictionsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the IP restriction settings with the parameters specified in the request.
         * @summary Update the IP restriction settings
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-ip-restrictions-settings/
         */
        updateIpRestrictionsSettings: async (ipRestrictionsDto?: IpRestrictionsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions/settings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ipRestrictionsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IPRestrictionsApi - functional programming interface
 * @export
 */
export const IPRestrictionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IPRestrictionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the IP portal restrictions.
         * @summary Get the IP portal restrictions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ip-restrictions/
         */
        async getIpRestrictions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IPRestrictionArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIpRestrictions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IPRestrictionsApi.getIpRestrictions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the IP restriction settings.
         * @summary Get the IP restriction settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for readIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/read-ip-restrictions-settings/
         */
        async readIpRestrictionsSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IPRestrictionsSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readIpRestrictionsSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IPRestrictionsApi.readIpRestrictionsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the IP restrictions with the parameters specified in the request.
         * @summary Update the IP restrictions
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ip-restrictions/
         */
        async saveIpRestrictions(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IpRestrictionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveIpRestrictions(ipRestrictionsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IPRestrictionsApi.saveIpRestrictions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the IP restriction settings with the parameters specified in the request.
         * @summary Update the IP restriction settings
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-ip-restrictions-settings/
         */
        async updateIpRestrictionsSettings(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IpRestrictionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateIpRestrictionsSettings(ipRestrictionsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IPRestrictionsApi.updateIpRestrictionsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * IPRestrictionsApi - factory interface
 * @export
 */
export const IPRestrictionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IPRestrictionsApiFp(configuration)
    return {
        /**
         * Returns the IP portal restrictions.
         * @summary Get the IP portal restrictions
         * @param {*} [options] Override http request option.
         * REST API Reference for getIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ip-restrictions/
         * @throws {RequiredError}
         */
        getIpRestrictions(options?: RawAxiosRequestConfig): AxiosPromise<IPRestrictionArrayWrapper> {
            return localVarFp.getIpRestrictions(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the IP restriction settings.
         * @summary Get the IP restriction settings
         * @param {*} [options] Override http request option.
         * REST API Reference for readIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/read-ip-restrictions-settings/
         * @throws {RequiredError}
         */
        readIpRestrictionsSettings(options?: RawAxiosRequestConfig): AxiosPromise<IPRestrictionsSettingsWrapper> {
            return localVarFp.readIpRestrictionsSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the IP restrictions with the parameters specified in the request.
         * @summary Update the IP restrictions
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ip-restrictions/
         * @throws {RequiredError}
         */
        saveIpRestrictions(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): AxiosPromise<IpRestrictionsWrapper> {
            return localVarFp.saveIpRestrictions(ipRestrictionsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the IP restriction settings with the parameters specified in the request.
         * @summary Update the IP restriction settings
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-ip-restrictions-settings/
         * @throws {RequiredError}
         */
        updateIpRestrictionsSettings(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): AxiosPromise<IpRestrictionsWrapper> {
            return localVarFp.updateIpRestrictionsSettings(ipRestrictionsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IPRestrictionsApi - object-oriented interface
 * @export
 * @class IPRestrictionsApi
 * @extends {BaseAPI}
 */
export class IPRestrictionsApi extends BaseAPI {
    /**
     * Returns the IP portal restrictions.
     * @summary Get the IP portal restrictions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPRestrictionsApi
     */
    public getIpRestrictions(options?: RawAxiosRequestConfig) {
        return IPRestrictionsApiFp(this.configuration).getIpRestrictions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the IP restriction settings.
     * @summary Get the IP restriction settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPRestrictionsApi
     */
    public readIpRestrictionsSettings(options?: RawAxiosRequestConfig) {
        return IPRestrictionsApiFp(this.configuration).readIpRestrictionsSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the IP restrictions with the parameters specified in the request.
     * @summary Update the IP restrictions
     * @param {IpRestrictionsDto} [ipRestrictionsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPRestrictionsApi
     */
    public saveIpRestrictions(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig) {
        return IPRestrictionsApiFp(this.configuration).saveIpRestrictions(ipRestrictionsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the IP restriction settings with the parameters specified in the request.
     * @summary Update the IP restriction settings
     * @param {IpRestrictionsDto} [ipRestrictionsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPRestrictionsApi
     */
    public updateIpRestrictionsSettings(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig) {
        return IPRestrictionsApiFp(this.configuration).updateIpRestrictionsSettings(ipRestrictionsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

