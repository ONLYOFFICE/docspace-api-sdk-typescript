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
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiVectorizationStartTask200Response } from '../../models';
// @ts-ignore
import type { AiVectorizationStartTaskRequest } from '../../models';
/**
 * VectorizationApi - axios parameter creator
 * @export
 */
export const VectorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Queues the indexing of the portal files named in the body so their contents can be retrieved during a chat round. The body is proxied unchanged to the DocSpace AI service, which validates it and owns the job. Indexing is asynchronous and fire-and-forget: the answer acknowledges the request without carrying a job handle, so there is nothing to poll and progress is not reported here. The embedding provider used is the one in `GET api/2.0/ai/config/vectorization`, and changing that setting does not re-index anything already indexed - queue it again for that.
         * @summary Start a vectorization task
         * @param {AiVectorizationStartTaskRequest} aiVectorizationStartTaskRequest The files to index, proxied unchanged to the DocSpace AI service, which owns and validates the shape.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiVectorizationStartTask operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-vectorization-start-task/
         */
        aiVectorizationStartTask: async (aiVectorizationStartTaskRequest: AiVectorizationStartTaskRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiVectorizationStartTaskRequest' is not null or undefined
            assertParamExists('aiVectorizationStartTask', 'aiVectorizationStartTaskRequest', aiVectorizationStartTaskRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiVectorizationStartTaskRequest, localVarRequestOptions, configuration)

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
         * Queues the indexing of the portal files named in the body so their contents can be retrieved during a chat round. The body is proxied unchanged to the DocSpace AI service, which validates it and owns the job. Indexing is asynchronous and fire-and-forget: the answer acknowledges the request without carrying a job handle, so there is nothing to poll and progress is not reported here. The embedding provider used is the one in `GET api/2.0/ai/config/vectorization`, and changing that setting does not re-index anything already indexed - queue it again for that.
         * @summary Start a vectorization task
         * @param {AiVectorizationStartTaskRequest} aiVectorizationStartTaskRequest The files to index, proxied unchanged to the DocSpace AI service, which owns and validates the shape.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiVectorizationStartTask operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-vectorization-start-task/
         */
        async aiVectorizationStartTask(aiVectorizationStartTaskRequest: AiVectorizationStartTaskRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiVectorizationStartTask200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiVectorizationStartTask(aiVectorizationStartTaskRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['VectorizationApi.aiVectorizationStartTask']?.[localVarOperationServerIndex]?.url;
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
         * Queues the indexing of the portal files named in the body so their contents can be retrieved during a chat round. The body is proxied unchanged to the DocSpace AI service, which validates it and owns the job. Indexing is asynchronous and fire-and-forget: the answer acknowledges the request without carrying a job handle, so there is nothing to poll and progress is not reported here. The embedding provider used is the one in `GET api/2.0/ai/config/vectorization`, and changing that setting does not re-index anything already indexed - queue it again for that.
         * @summary Start a vectorization task
         * @param {VectorizationApiAiVectorizationStartTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiVectorizationStartTask operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-vectorization-start-task/
         * @throws {RequiredError}
         */
        aiVectorizationStartTask(requestParameters: VectorizationApiAiVectorizationStartTaskRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiVectorizationStartTask200Response> {
            return localVarFp.aiVectorizationStartTask(requestParameters.aiVectorizationStartTaskRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiVectorizationStartTask operation in VectorizationApi.
 * @export
 * @interface VectorizationApiAiVectorizationStartTaskRequest
 */
export interface VectorizationApiAiVectorizationStartTaskRequest {
    /**
     * The files to index, proxied unchanged to the DocSpace AI service, which owns and validates the shape.
     * @type {AiVectorizationStartTaskRequest}
     * @memberof VectorizationApiAiVectorizationStartTask
     */
    readonly aiVectorizationStartTaskRequest: AiVectorizationStartTaskRequest
}

/**
 * VectorizationApi - object-oriented interface
 * @export
 * @class VectorizationApi
 * @extends {BaseAPI}
 */
export class VectorizationApi extends BaseAPI {
    /**
     * Queues the indexing of the portal files named in the body so their contents can be retrieved during a chat round. The body is proxied unchanged to the DocSpace AI service, which validates it and owns the job. Indexing is asynchronous and fire-and-forget: the answer acknowledges the request without carrying a job handle, so there is nothing to poll and progress is not reported here. The embedding provider used is the one in `GET api/2.0/ai/config/vectorization`, and changing that setting does not re-index anything already indexed - queue it again for that.
     * @summary Start a vectorization task
     * @param {AIVectorizationApiAiVectorizationStartTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VectorizationApi
     */
    public aiVectorizationStartTask(requestParameters: VectorizationApiAiVectorizationStartTaskRequest, options?: RawAxiosRequestConfig) {
        return VectorizationApiFp(this.configuration).aiVectorizationStartTask(requestParameters.aiVectorizationStartTaskRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

