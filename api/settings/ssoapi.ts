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
import type { SsoSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { SsoSettingsV2Wrapper } from '../../models';
/**
 * SSOApi - axios parameter creator
 * @export
 */
export const SSOApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the default portal SSO settings.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         */
        getDefaultSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2/default`;
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
         * Returns the current portal SSO settings.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         */
        getSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2`;
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
         * Returns the SSO settings constants.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         */
        getSsoSettingsV2Constants: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2/constants`;
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
         * Resets the SSO settings of the current portal.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         */
        resetSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2`;
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
         * Saves the SSO settings for the current portal.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         */
        saveSsoSettingsV2: async (ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssoSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SSOApi - functional programming interface
 * @export
 */
export const SSOApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SSOApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the default portal SSO settings.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         */
        async getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.getDefaultSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal SSO settings.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         */
        async getSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.getSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the SSO settings constants.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         */
        async getSsoSettingsV2Constants(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSsoSettingsV2Constants(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.getSsoSettingsV2Constants']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the SSO settings of the current portal.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         */
        async resetSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.resetSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the SSO settings for the current portal.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         */
        async saveSsoSettingsV2(ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveSsoSettingsV2(ssoSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.saveSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SSOApi - factory interface
 * @export
 */
export const SSOApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SSOApiFp(configuration)
    return {
        /**
         * Returns the default portal SSO settings.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         * @throws {RequiredError}
         */
        getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.getDefaultSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current portal SSO settings.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         * @throws {RequiredError}
         */
        getSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.getSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the SSO settings constants.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         * @throws {RequiredError}
         */
        getSsoSettingsV2Constants(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getSsoSettingsV2Constants(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the SSO settings of the current portal.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         * @throws {RequiredError}
         */
        resetSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.resetSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the SSO settings for the current portal.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         * @throws {RequiredError}
         */
        saveSsoSettingsV2(ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.saveSsoSettingsV2(ssoSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SSOApi - object-oriented interface
 * @export
 * @class SSOApi
 * @extends {BaseAPI}
 */
export class SSOApi extends BaseAPI {
    /**
     * Returns the default portal SSO settings.
     * @summary Get the default SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).getDefaultSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal SSO settings.
     * @summary Get the SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public getSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).getSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the SSO settings constants.
     * @summary Get the SSO settings constants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public getSsoSettingsV2Constants(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).getSsoSettingsV2Constants(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the SSO settings of the current portal.
     * @summary Reset the SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public resetSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).resetSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the SSO settings for the current portal.
     * @summary Save the SSO settings
     * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public saveSsoSettingsV2(ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).saveSsoSettingsV2(ssoSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

