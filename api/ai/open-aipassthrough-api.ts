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
import type { AiSuccessResponse } from '../../models';
/**
 * OpenAIPassthroughApi - axios parameter creator
 * @export
 */
export const OpenAIPassthroughApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * OpenAI-compatible chat completions for the document editor\'s AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider verbatim - the payload is owned by the plugin\'s SDK on one end and the provider on the other. A client disconnect cancels the provider call.
         * @summary OpenAI-compatible chat completions proxied to the profile\'s provider
         * @param {string} profileId The AI provider profile identifier.
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiOpenaiChatCompletions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-chat-completions/
         */
        aiOpenaiChatCompletions: async (profileId: string, requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('aiOpenaiChatCompletions', 'profileId', profileId)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiOpenaiChatCompletions', 'requestBody', requestBody)

            const localVarPath = `/api/2.0/ai/openai/{profileId}/v1/chat/completions`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * OpenAI-compatible image generation for the document editor\'s AI plugin. As with the chat-completions passthrough, the profile\'s credentials are attached server-side and the body reaches the provider unchanged.
         * @summary OpenAI-compatible image generation proxied to the profile\'s provider
         * @param {string} profileId The AI provider profile identifier.
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiOpenaiImagesGenerations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-images-generations/
         */
        aiOpenaiImagesGenerations: async (profileId: string, requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('aiOpenaiImagesGenerations', 'profileId', profileId)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiOpenaiImagesGenerations', 'requestBody', requestBody)

            const localVarPath = `/api/2.0/ai/openai/{profileId}/v1/images/generations`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OpenAIPassthroughApi - functional programming interface
 * @export
 */
export const OpenAIPassthroughApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OpenAIPassthroughApiAxiosParamCreator(configuration)
    return {
        /**
         * OpenAI-compatible chat completions for the document editor\'s AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider verbatim - the payload is owned by the plugin\'s SDK on one end and the provider on the other. A client disconnect cancels the provider call.
         * @summary OpenAI-compatible chat completions proxied to the profile\'s provider
         * @param {string} profileId The AI provider profile identifier.
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiOpenaiChatCompletions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-chat-completions/
         */
        async aiOpenaiChatCompletions(profileId: string, requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiOpenaiChatCompletions(profileId, requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OpenAIPassthroughApi.aiOpenaiChatCompletions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * OpenAI-compatible image generation for the document editor\'s AI plugin. As with the chat-completions passthrough, the profile\'s credentials are attached server-side and the body reaches the provider unchanged.
         * @summary OpenAI-compatible image generation proxied to the profile\'s provider
         * @param {string} profileId The AI provider profile identifier.
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiOpenaiImagesGenerations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-images-generations/
         */
        async aiOpenaiImagesGenerations(profileId: string, requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiOpenaiImagesGenerations(profileId, requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OpenAIPassthroughApi.aiOpenaiImagesGenerations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OpenAIPassthroughApi - factory interface
 * @export
 */
export const OpenAIPassthroughApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OpenAIPassthroughApiFp(configuration)
    return {
        /**
         * OpenAI-compatible chat completions for the document editor\'s AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider verbatim - the payload is owned by the plugin\'s SDK on one end and the provider on the other. A client disconnect cancels the provider call.
         * @summary OpenAI-compatible chat completions proxied to the profile\'s provider
         * @param {OpenAIPassthroughApiAiOpenaiChatCompletionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiOpenaiChatCompletions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-chat-completions/
         * @throws {RequiredError}
         */
        aiOpenaiChatCompletions(requestParameters: OpenAIPassthroughApiAiOpenaiChatCompletionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiOpenaiChatCompletions(requestParameters.profileId, requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * OpenAI-compatible image generation for the document editor\'s AI plugin. As with the chat-completions passthrough, the profile\'s credentials are attached server-side and the body reaches the provider unchanged.
         * @summary OpenAI-compatible image generation proxied to the profile\'s provider
         * @param {OpenAIPassthroughApiAiOpenaiImagesGenerationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiOpenaiImagesGenerations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-images-generations/
         * @throws {RequiredError}
         */
        aiOpenaiImagesGenerations(requestParameters: OpenAIPassthroughApiAiOpenaiImagesGenerationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiOpenaiImagesGenerations(requestParameters.profileId, requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiOpenaiChatCompletions operation in OpenAIPassthroughApi.
 * @export
 * @interface OpenAIPassthroughApiAiOpenaiChatCompletionsRequest
 */
export interface OpenAIPassthroughApiAiOpenaiChatCompletionsRequest {
    /**
     * The AI provider profile identifier.
     * @type {string}
     * @memberof OpenAIPassthroughApiAiOpenaiChatCompletions
     */
    readonly profileId: string

    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OpenAIPassthroughApiAiOpenaiChatCompletions
     */
    readonly requestBody: { [key: string]: any; }
}

/**
 * Request parameters for aiOpenaiImagesGenerations operation in OpenAIPassthroughApi.
 * @export
 * @interface OpenAIPassthroughApiAiOpenaiImagesGenerationsRequest
 */
export interface OpenAIPassthroughApiAiOpenaiImagesGenerationsRequest {
    /**
     * The AI provider profile identifier.
     * @type {string}
     * @memberof OpenAIPassthroughApiAiOpenaiImagesGenerations
     */
    readonly profileId: string

    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OpenAIPassthroughApiAiOpenaiImagesGenerations
     */
    readonly requestBody: { [key: string]: any; }
}

/**
 * OpenAIPassthroughApi - object-oriented interface
 * @export
 * @class OpenAIPassthroughApi
 * @extends {BaseAPI}
 */
export class OpenAIPassthroughApi extends BaseAPI {
    /**
     * OpenAI-compatible chat completions for the document editor\'s AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider verbatim - the payload is owned by the plugin\'s SDK on one end and the provider on the other. A client disconnect cancels the provider call.
     * @summary OpenAI-compatible chat completions proxied to the profile\'s provider
     * @param {AIOpenAIPassthroughApiAiOpenaiChatCompletionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenAIPassthroughApi
     */
    public aiOpenaiChatCompletions(requestParameters: OpenAIPassthroughApiAiOpenaiChatCompletionsRequest, options?: RawAxiosRequestConfig) {
        return OpenAIPassthroughApiFp(this.configuration).aiOpenaiChatCompletions(requestParameters.profileId, requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * OpenAI-compatible image generation for the document editor\'s AI plugin. As with the chat-completions passthrough, the profile\'s credentials are attached server-side and the body reaches the provider unchanged.
     * @summary OpenAI-compatible image generation proxied to the profile\'s provider
     * @param {AIOpenAIPassthroughApiAiOpenaiImagesGenerationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenAIPassthroughApi
     */
    public aiOpenaiImagesGenerations(requestParameters: OpenAIPassthroughApiAiOpenaiImagesGenerationsRequest, options?: RawAxiosRequestConfig) {
        return OpenAIPassthroughApiFp(this.configuration).aiOpenaiImagesGenerations(requestParameters.profileId, requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

