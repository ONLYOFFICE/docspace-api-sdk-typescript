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
import type { CapabilitiesWrapper } from '../../models';
/**
 * CapabilitiesApi - axios parameter creator
 * @export
 */
export const CapabilitiesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the information about portal capabilities.
         * @summary Get portal capabilities
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-capabilities/
         */
        getPortalCapabilities: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/capabilities`;
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
 * CapabilitiesApi - functional programming interface
 * @export
 */
export const CapabilitiesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CapabilitiesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the information about portal capabilities.
         * @summary Get portal capabilities
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-capabilities/
         */
        async getPortalCapabilities(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CapabilitiesWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalCapabilities(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CapabilitiesApi.getPortalCapabilities']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CapabilitiesApi - factory interface
 * @export
 */
export const CapabilitiesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CapabilitiesApiFp(configuration)
    return {
        /**
         * Returns the information about portal capabilities.
         * @summary Get portal capabilities
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-capabilities/
         * @throws {RequiredError}
         */
        getPortalCapabilities(options?: RawAxiosRequestConfig): AxiosPromise<CapabilitiesWrapper> {
            return localVarFp.getPortalCapabilities(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CapabilitiesApi - object-oriented interface
 * @export
 * @class CapabilitiesApi
 * @extends {BaseAPI}
 */
export class CapabilitiesApi extends BaseAPI {
    /**
     * Returns the information about portal capabilities.
     * @summary Get portal capabilities
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CapabilitiesApi
     */
    public getPortalCapabilities(options?: RawAxiosRequestConfig) {
        return CapabilitiesApiFp(this.configuration).getPortalCapabilities(options).then((request) => request(this.axios, this.basePath));
    }
}

