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
import type { UsageSpaceStatItemArrayWrapper } from '../../models';
/**
 * StatisticsApi - axios parameter creator
 * @export
 */
export const StatisticsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Returns the space usage statistics for the module with the ID specified in the request.
         * @summary Get the space usage statistics
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSpaceUsageStatistics operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-space-usage-statistics/
         */
        getSpaceUsageStatistics: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSpaceUsageStatistics', 'id', id)
            const localVarPath = `/api/2.0/settings/statistics/spaceusage/{id}`
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
    }
};

/**
 * StatisticsApi - functional programming interface
 * @export
 */
export const StatisticsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StatisticsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the space usage statistics for the module with the ID specified in the request.
         * @summary Get the space usage statistics
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSpaceUsageStatistics operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-space-usage-statistics/
         */
        async getSpaceUsageStatistics(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsageSpaceStatItemArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpaceUsageStatistics(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StatisticsApi.getSpaceUsageStatistics']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * StatisticsApi - factory interface
 * @export
 */
export const StatisticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StatisticsApiFp(configuration)
    return {
        /**
         * Returns the space usage statistics for the module with the ID specified in the request.
         * @summary Get the space usage statistics
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSpaceUsageStatistics operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-space-usage-statistics/
         * @throws {RequiredError}
         */
        getSpaceUsageStatistics(id: string, options?: RawAxiosRequestConfig): AxiosPromise<UsageSpaceStatItemArrayWrapper> {
            return localVarFp.getSpaceUsageStatistics(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StatisticsApi - object-oriented interface
 * @export
 * @class StatisticsApi
 * @extends {BaseAPI}
 */
export class StatisticsApi extends BaseAPI {
    /**
     * Returns the space usage statistics for the module with the ID specified in the request.
     * @summary Get the space usage statistics
     * @param {string} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApi
     */
    public getSpaceUsageStatistics(id: string, options?: RawAxiosRequestConfig) {
        return StatisticsApiFp(this.configuration).getSpaceUsageStatistics(id, options).then((request) => request(this.axios, this.basePath));
    }
}

