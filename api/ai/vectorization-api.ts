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
import type { VectorizationStartRequestBody } from '../../models';
/**
 * VectorizationApi - axios parameter creator
 * @export
 */
export const VectorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Submits the specified files for vectorization. Each file is processed asynchronously by the configured embedding provider  and indexed for semantic search in AI chat sessions. Only files accessible to the current user can be vectorized.
         * @summary Start a vectorization task
         * @param {VectorizationStartRequestBody} vectorizationStartRequestBody The vectorization parameters including file identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startTask operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-task/
         */
        startTask: async (vectorizationStartRequestBody: VectorizationStartRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vectorizationStartRequestBody' is not null or undefined
            assertParamExists('startTask', 'vectorizationStartRequestBody', vectorizationStartRequestBody)

            const localVarPath = `/api/2.0/ai/vectorization/tasks`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(vectorizationStartRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VectorizationApi - functional programming interface
 * @export
 */
export const VectorizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VectorizationApiAxiosParamCreator(configuration)
    return {
        /**
         * Submits the specified files for vectorization. Each file is processed asynchronously by the configured embedding provider  and indexed for semantic search in AI chat sessions. Only files accessible to the current user can be vectorized.
         * @summary Start a vectorization task
         * @param {VectorizationStartRequestBody} vectorizationStartRequestBody The vectorization parameters including file identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startTask operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-task/
         */
        async startTask(vectorizationStartRequestBody: VectorizationStartRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startTask(vectorizationStartRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['VectorizationApi.startTask']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * VectorizationApi - factory interface
 * @export
 */
export const VectorizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VectorizationApiFp(configuration)
    return {
        /**
         * Submits the specified files for vectorization. Each file is processed asynchronously by the configured embedding provider  and indexed for semantic search in AI chat sessions. Only files accessible to the current user can be vectorized.
         * @summary Start a vectorization task
         * @param {VectorizationStartRequestBody} vectorizationStartRequestBody The vectorization parameters including file identifiers.
         * @param {*} [options] Override http request option.
         * REST API Reference for startTask operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-task/
         * @throws {RequiredError}
         */
        startTask(vectorizationStartRequestBody: VectorizationStartRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.startTask(vectorizationStartRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * VectorizationApi - object-oriented interface
 * @export
 * @class VectorizationApi
 * @extends {BaseAPI}
 */
export class VectorizationApi extends BaseAPI {
    /**
     * Submits the specified files for vectorization. Each file is processed asynchronously by the configured embedding provider  and indexed for semantic search in AI chat sessions. Only files accessible to the current user can be vectorized.
     * @summary Start a vectorization task
     * @param {VectorizationStartRequestBody} vectorizationStartRequestBody The vectorization parameters including file identifiers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VectorizationApi
     */
    public startTask(vectorizationStartRequestBody: VectorizationStartRequestBody, options?: RawAxiosRequestConfig) {
        return VectorizationApiFp(this.configuration).startTask(vectorizationStartRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

