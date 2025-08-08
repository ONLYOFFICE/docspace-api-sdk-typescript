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
import type { CspRequestsDto } from '../../models';
// @ts-ignore
import type { CspWrapper } from '../../models';
/**
 * CSPApi - axios parameter creator
 * @export
 */
export const CSPApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Configures the CSP (Content Security Policy) settings for the current portal.
         * @summary Configure CSP settings
         * @param {CspRequestsDto} [cspRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for configureCsp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-csp/
         */
        configureCsp: async (cspRequestsDto?: CspRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/security/csp`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cspRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the CSP (Content Security Policy) settings for the current portal.
         * @summary Get CSP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCspSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-csp-settings/
         */
        getCspSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/security/csp`;
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
    }
};

/**
 * CSPApi - functional programming interface
 * @export
 */
export const CSPApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CSPApiAxiosParamCreator(configuration)
    return {
        /**
         * Configures the CSP (Content Security Policy) settings for the current portal.
         * @summary Configure CSP settings
         * @param {CspRequestsDto} [cspRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for configureCsp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-csp/
         */
        async configureCsp(cspRequestsDto?: CspRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CspWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configureCsp(cspRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CSPApi.configureCsp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the CSP (Content Security Policy) settings for the current portal.
         * @summary Get CSP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCspSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-csp-settings/
         */
        async getCspSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CspWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCspSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CSPApi.getCspSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CSPApi - factory interface
 * @export
 */
export const CSPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CSPApiFp(configuration)
    return {
        /**
         * Configures the CSP (Content Security Policy) settings for the current portal.
         * @summary Configure CSP settings
         * @param {CspRequestsDto} [cspRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for configureCsp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-csp/
         * @throws {RequiredError}
         */
        configureCsp(cspRequestsDto?: CspRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<CspWrapper> {
            return localVarFp.configureCsp(cspRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the CSP (Content Security Policy) settings for the current portal.
         * @summary Get CSP settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getCspSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-csp-settings/
         * @throws {RequiredError}
         */
        getCspSettings(options?: RawAxiosRequestConfig): AxiosPromise<CspWrapper> {
            return localVarFp.getCspSettings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CSPApi - object-oriented interface
 * @export
 * @class CSPApi
 * @extends {BaseAPI}
 */
export class CSPApi extends BaseAPI {
    /**
     * Configures the CSP (Content Security Policy) settings for the current portal.
     * @summary Configure CSP settings
     * @param {CspRequestsDto} [cspRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CSPApi
     */
    public configureCsp(cspRequestsDto?: CspRequestsDto, options?: RawAxiosRequestConfig) {
        return CSPApiFp(this.configuration).configureCsp(cspRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the CSP (Content Security Policy) settings for the current portal.
     * @summary Get CSP settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CSPApi
     */
    public getCspSettings(options?: RawAxiosRequestConfig) {
        return CSPApiFp(this.configuration).getCspSettings(options).then((request) => request(this.axios, this.basePath));
    }
}

