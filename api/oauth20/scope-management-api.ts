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
import type { ErrorResponse } from '../../models';
// @ts-ignore
import type { ScopeResponse } from '../../models';
/**
 * ScopeManagementApi - axios parameter creator
 * @export
 */
export const ScopeManagementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the \'openid\' scope always appearing first.
         * @summary Get available OAuth2 scopes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getScopes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-scopes/
         */
        getScopes: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/scopes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication asc_auth_key required


    
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
 * ScopeManagementApi - functional programming interface
 * @export
 */
export const ScopeManagementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ScopeManagementApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the \'openid\' scope always appearing first.
         * @summary Get available OAuth2 scopes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getScopes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-scopes/
         */
        async getScopes(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScopeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getScopes(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ScopeManagementApi.getScopes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ScopeManagementApi - factory interface
 * @export
 */
export const ScopeManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ScopeManagementApiFp(configuration)
    return {
        /**
         * Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the \'openid\' scope always appearing first.
         * @summary Get available OAuth2 scopes
         * @param {*} [options] Override http request option.
         * REST API Reference for getScopes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-scopes/
         * @throws {RequiredError}
         */
        getScopes(options?: RawAxiosRequestConfig): AxiosPromise<ScopeResponse> {
            return localVarFp.getScopes(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ScopeManagementApi - object-oriented interface
 * @export
 * @class ScopeManagementApi
 * @extends {BaseAPI}
 */
export class ScopeManagementApi extends BaseAPI {
    /**
     * Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the \'openid\' scope always appearing first.
     * @summary Get available OAuth2 scopes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScopeManagementApi
     */
    public getScopes(options?: RawAxiosRequestConfig) {
        return ScopeManagementApiFp(this.configuration).getScopes(options).then((request) => request(this.axios, this.basePath));
    }
}

