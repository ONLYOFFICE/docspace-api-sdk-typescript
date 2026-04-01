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
/**
 * DiscoveryApi - axios parameter creator
 * @export
 */
export const DiscoveryApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for handleOptions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/handle-options/
         */
        handleOptions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/.well-known/oauth-authorization-server`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
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
 * DiscoveryApi - functional programming interface
 * @export
 */
export const DiscoveryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DiscoveryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for handleOptions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/handle-options/
         */
        async handleOptions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.handleOptions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DiscoveryApi.handleOptions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DiscoveryApi - factory interface
 * @export
 */
export const DiscoveryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DiscoveryApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for handleOptions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/handle-options/
         * @throws {RequiredError}
         */
        handleOptions(options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.handleOptions(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DiscoveryApi - object-oriented interface
 * @export
 * @class DiscoveryApi
 * @extends {BaseAPI}
 */
export class DiscoveryApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiscoveryApi
     */
    public handleOptions(options?: RawAxiosRequestConfig) {
        return DiscoveryApiFp(this.configuration).handleOptions(options).then((request) => request(this.axios, this.basePath));
    }
}

