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
import type { LoginSettingsRequestDto } from '../../models';
// @ts-ignore
import type { LoginSettingsWrapper } from '../../models';
/**
 * LoginSettingsApi - axios parameter creator
 * @export
 */
export const LoginSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Returns the portal login settings.
         * @summary Get the login settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-settings/
         */
        getLoginSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/loginsettings`;
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
         * Resets the portal login settings to default.
         * @summary Reset the login settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-login-settings/
         */
        setDefaultLoginSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/loginsettings`;
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
         * Updates the login settings with the parameters specified in the request.
         * @summary Update the login settings
         * @param {LoginSettingsRequestDto} [loginSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-login-settings/
         */
        updateLoginSettings: async (loginSettingsRequestDto?: LoginSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/loginsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(loginSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoginSettingsApi - functional programming interface
 * @export
 */
export const LoginSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the portal login settings.
         * @summary Get the login settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-settings/
         */
        async getLoginSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoginSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginSettingsApi.getLoginSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the portal login settings to default.
         * @summary Reset the login settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-login-settings/
         */
        async setDefaultLoginSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setDefaultLoginSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginSettingsApi.setDefaultLoginSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the login settings with the parameters specified in the request.
         * @summary Update the login settings
         * @param {LoginSettingsRequestDto} [loginSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-login-settings/
         */
        async updateLoginSettings(loginSettingsRequestDto?: LoginSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLoginSettings(loginSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginSettingsApi.updateLoginSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LoginSettingsApi - factory interface
 * @export
 */
export const LoginSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginSettingsApiFp(configuration)
    return {
        /**
         * Returns the portal login settings.
         * @summary Get the login settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-login-settings/
         * @throws {RequiredError}
         */
        getLoginSettings(options?: RawAxiosRequestConfig): AxiosPromise<LoginSettingsWrapper> {
            return localVarFp.getLoginSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the portal login settings to default.
         * @summary Reset the login settings
         * @param {*} [options] Override http request option.
         * REST API Reference for setDefaultLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-login-settings/
         * @throws {RequiredError}
         */
        setDefaultLoginSettings(options?: RawAxiosRequestConfig): AxiosPromise<LoginSettingsWrapper> {
            return localVarFp.setDefaultLoginSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the login settings with the parameters specified in the request.
         * @summary Update the login settings
         * @param {LoginSettingsRequestDto} [loginSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateLoginSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-login-settings/
         * @throws {RequiredError}
         */
        updateLoginSettings(loginSettingsRequestDto?: LoginSettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<LoginSettingsWrapper> {
            return localVarFp.updateLoginSettings(loginSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoginSettingsApi - object-oriented interface
 * @export
 * @class LoginSettingsApi
 * @extends {BaseAPI}
 */
export class LoginSettingsApi extends BaseAPI {
    /**
     * Returns the portal login settings.
     * @summary Get the login settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginSettingsApi
     */
    public getLoginSettings(options?: RawAxiosRequestConfig) {
        return LoginSettingsApiFp(this.configuration).getLoginSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the portal login settings to default.
     * @summary Reset the login settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginSettingsApi
     */
    public setDefaultLoginSettings(options?: RawAxiosRequestConfig) {
        return LoginSettingsApiFp(this.configuration).setDefaultLoginSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the login settings with the parameters specified in the request.
     * @summary Update the login settings
     * @param {LoginSettingsRequestDto} [loginSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginSettingsApi
     */
    public updateLoginSettings(loginSettingsRequestDto?: LoginSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return LoginSettingsApiFp(this.configuration).updateLoginSettings(loginSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

