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
import type { NewAiAiApproveToolCallRequest } from '../../models';
// @ts-ignore
import type { NewAiAiRegenerateStreamRequest } from '../../models';
// @ts-ignore
import type { NewAiAiSendCustomRequest } from '../../models';
// @ts-ignore
import type { NewAiAiSendRequest } from '../../models';
// @ts-ignore
import type { NewAiAiSendStreamBody } from '../../models';
// @ts-ignore
import type { NewAiAiToolCallData } from '../../models';
// @ts-ignore
import type { NewAiChatEvent } from '../../models';
// @ts-ignore
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiOpenAIStreamChunk } from '../../models';
// @ts-ignore
import type { NewAiThreadMessageLike } from '../../models';
/**
 * AIApi - axios parameter creator
 * @export
 */
export const AIApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Approve tool call
         * @param {NewAiAiApproveToolCallRequest} newAiAiApproveToolCallRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-approve-tool-call/
         */
        newAiAiApproveToolCall: async (newAiAiApproveToolCallRequest: NewAiAiApproveToolCallRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAiApproveToolCallRequest' is not null or undefined
            assertParamExists('newAiAiApproveToolCall', 'newAiAiApproveToolCallRequest', newAiAiApproveToolCallRequest)

            const localVarPath = `/api/2.0/new-ai/ai/approve-tool-call`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAiApproveToolCallRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deny tool call
         * @param {NewAiAiToolCallData} newAiAiToolCallData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-deny-tool-call/
         */
        newAiAiDenyToolCall: async (newAiAiToolCallData: NewAiAiToolCallData, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAiToolCallData' is not null or undefined
            assertParamExists('newAiAiDenyToolCall', 'newAiAiToolCallData', newAiAiToolCallData)

            const localVarPath = `/api/2.0/new-ai/ai/deny-tool-call`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAiToolCallData, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Regenerate stream
         * @param {NewAiAiRegenerateStreamRequest} newAiAiRegenerateStreamRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-regenerate-stream/
         */
        newAiAiRegenerateStream: async (newAiAiRegenerateStreamRequest: NewAiAiRegenerateStreamRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAiRegenerateStreamRequest' is not null or undefined
            assertParamExists('newAiAiRegenerateStream', 'newAiAiRegenerateStreamRequest', newAiAiRegenerateStreamRequest)

            const localVarPath = `/api/2.0/new-ai/ai/regenerate-stream`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAiRegenerateStreamRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Send
         * @param {NewAiAiSendRequest} newAiAiSendRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send/
         */
        newAiAiSend: async (newAiAiSendRequest: NewAiAiSendRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAiSendRequest' is not null or undefined
            assertParamExists('newAiAiSend', 'newAiAiSendRequest', newAiAiSendRequest)

            const localVarPath = `/api/2.0/new-ai/ai/send`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAiSendRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Send custom
         * @param {NewAiAiSendCustomRequest} newAiAiSendCustomRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-custom/
         */
        newAiAiSendCustom: async (newAiAiSendCustomRequest: NewAiAiSendCustomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAiSendCustomRequest' is not null or undefined
            assertParamExists('newAiAiSendCustom', 'newAiAiSendCustomRequest', newAiAiSendCustomRequest)

            const localVarPath = `/api/2.0/new-ai/ai/send-custom`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAiSendCustomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Send with stream
         * @param {NewAiAiSendStreamBody} newAiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream/
         */
        newAiAiSendWithStream: async (newAiAiSendStreamBody: NewAiAiSendStreamBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAiSendStreamBody' is not null or undefined
            assertParamExists('newAiAiSendWithStream', 'newAiAiSendStreamBody', newAiAiSendStreamBody)

            const localVarPath = `/api/2.0/new-ai/ai/send-with-stream`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAiSendStreamBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Send with stream open ai
         * @param {NewAiAiSendStreamBody} newAiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream-open-ai/
         */
        newAiAiSendWithStreamOpenAI: async (newAiAiSendStreamBody: NewAiAiSendStreamBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAiSendStreamBody' is not null or undefined
            assertParamExists('newAiAiSendWithStreamOpenAI', 'newAiAiSendStreamBody', newAiAiSendStreamBody)

            const localVarPath = `/api/2.0/new-ai/ai/send-with-stream-openai`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAiSendStreamBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AIApi - functional programming interface
 * @export
 */
export const AIApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AIApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Approve tool call
         * @param {NewAiAiApproveToolCallRequest} newAiAiApproveToolCallRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-approve-tool-call/
         */
        async newAiAiApproveToolCall(newAiAiApproveToolCallRequest: NewAiAiApproveToolCallRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAiApproveToolCall(newAiAiApproveToolCallRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.newAiAiApproveToolCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Deny tool call
         * @param {NewAiAiToolCallData} newAiAiToolCallData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-deny-tool-call/
         */
        async newAiAiDenyToolCall(newAiAiToolCallData: NewAiAiToolCallData, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAiDenyToolCall(newAiAiToolCallData, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.newAiAiDenyToolCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Regenerate stream
         * @param {NewAiAiRegenerateStreamRequest} newAiAiRegenerateStreamRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-regenerate-stream/
         */
        async newAiAiRegenerateStream(newAiAiRegenerateStreamRequest: NewAiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAiRegenerateStream(newAiAiRegenerateStreamRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.newAiAiRegenerateStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Send
         * @param {NewAiAiSendRequest} newAiAiSendRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send/
         */
        async newAiAiSend(newAiAiSendRequest: NewAiAiSendRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAiSend(newAiAiSendRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.newAiAiSend']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Send custom
         * @param {NewAiAiSendCustomRequest} newAiAiSendCustomRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-custom/
         */
        async newAiAiSendCustom(newAiAiSendCustomRequest: NewAiAiSendCustomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAiSendCustom(newAiAiSendCustomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.newAiAiSendCustom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Send with stream
         * @param {NewAiAiSendStreamBody} newAiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream/
         */
        async newAiAiSendWithStream(newAiAiSendStreamBody: NewAiAiSendStreamBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAiSendWithStream(newAiAiSendStreamBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.newAiAiSendWithStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Send with stream open ai
         * @param {NewAiAiSendStreamBody} newAiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream-open-ai/
         */
        async newAiAiSendWithStreamOpenAI(newAiAiSendStreamBody: NewAiAiSendStreamBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiOpenAIStreamChunk>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAiSendWithStreamOpenAI(newAiAiSendStreamBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.newAiAiSendWithStreamOpenAI']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AIApi - factory interface
 * @export
 */
export const AIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AIApiFp(configuration)
    return {
        /**
         * 
         * @summary Approve tool call
         * @param {AIApiNewAiAiApproveToolCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-approve-tool-call/
         * @throws {RequiredError}
         */
        newAiAiApproveToolCall(requestParameters: AIApiNewAiAiApproveToolCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiChatEvent> {
            return localVarFp.newAiAiApproveToolCall(requestParameters.newAiAiApproveToolCallRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deny tool call
         * @param {AIApiNewAiAiDenyToolCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-deny-tool-call/
         * @throws {RequiredError}
         */
        newAiAiDenyToolCall(requestParameters: AIApiNewAiAiDenyToolCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiChatEvent> {
            return localVarFp.newAiAiDenyToolCall(requestParameters.newAiAiToolCallData, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Regenerate stream
         * @param {AIApiNewAiAiRegenerateStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-regenerate-stream/
         * @throws {RequiredError}
         */
        newAiAiRegenerateStream(requestParameters: AIApiNewAiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiChatEvent> {
            return localVarFp.newAiAiRegenerateStream(requestParameters.newAiAiRegenerateStreamRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Send
         * @param {AIApiNewAiAiSendRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send/
         * @throws {RequiredError}
         */
        newAiAiSend(requestParameters: AIApiNewAiAiSendRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiThreadMessageLike> {
            return localVarFp.newAiAiSend(requestParameters.newAiAiSendRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Send custom
         * @param {AIApiNewAiAiSendCustomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-custom/
         * @throws {RequiredError}
         */
        newAiAiSendCustom(requestParameters: AIApiNewAiAiSendCustomRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiThreadMessageLike> {
            return localVarFp.newAiAiSendCustom(requestParameters.newAiAiSendCustomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Send with stream
         * @param {AIApiNewAiAiSendWithStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream/
         * @throws {RequiredError}
         */
        newAiAiSendWithStream(requestParameters: AIApiNewAiAiSendWithStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiChatEvent> {
            return localVarFp.newAiAiSendWithStream(requestParameters.newAiAiSendStreamBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Send with stream open ai
         * @param {AIApiNewAiAiSendWithStreamOpenAIRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream-open-ai/
         * @throws {RequiredError}
         */
        newAiAiSendWithStreamOpenAI(requestParameters: AIApiNewAiAiSendWithStreamOpenAIRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiOpenAIStreamChunk> {
            return localVarFp.newAiAiSendWithStreamOpenAI(requestParameters.newAiAiSendStreamBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiAiApproveToolCall operation in AIApi.
 * @export
 * @interface AIApiNewAiAiApproveToolCallRequest
 */
export interface AIApiNewAiAiApproveToolCallRequest {
    /**
     * 
     * @type {NewAiAiApproveToolCallRequest}
     * @memberof AIApiNewAiAiApproveToolCall
     */
    readonly newAiAiApproveToolCallRequest: NewAiAiApproveToolCallRequest
}

/**
 * Request parameters for newAiAiDenyToolCall operation in AIApi.
 * @export
 * @interface AIApiNewAiAiDenyToolCallRequest
 */
export interface AIApiNewAiAiDenyToolCallRequest {
    /**
     * 
     * @type {NewAiAiToolCallData}
     * @memberof AIApiNewAiAiDenyToolCall
     */
    readonly newAiAiToolCallData: NewAiAiToolCallData
}

/**
 * Request parameters for newAiAiRegenerateStream operation in AIApi.
 * @export
 * @interface AIApiNewAiAiRegenerateStreamRequest
 */
export interface AIApiNewAiAiRegenerateStreamRequest {
    /**
     * 
     * @type {NewAiAiRegenerateStreamRequest}
     * @memberof AIApiNewAiAiRegenerateStream
     */
    readonly newAiAiRegenerateStreamRequest: NewAiAiRegenerateStreamRequest
}

/**
 * Request parameters for newAiAiSend operation in AIApi.
 * @export
 * @interface AIApiNewAiAiSendRequest
 */
export interface AIApiNewAiAiSendRequest {
    /**
     * 
     * @type {NewAiAiSendRequest}
     * @memberof AIApiNewAiAiSend
     */
    readonly newAiAiSendRequest: NewAiAiSendRequest
}

/**
 * Request parameters for newAiAiSendCustom operation in AIApi.
 * @export
 * @interface AIApiNewAiAiSendCustomRequest
 */
export interface AIApiNewAiAiSendCustomRequest {
    /**
     * 
     * @type {NewAiAiSendCustomRequest}
     * @memberof AIApiNewAiAiSendCustom
     */
    readonly newAiAiSendCustomRequest: NewAiAiSendCustomRequest
}

/**
 * Request parameters for newAiAiSendWithStream operation in AIApi.
 * @export
 * @interface AIApiNewAiAiSendWithStreamRequest
 */
export interface AIApiNewAiAiSendWithStreamRequest {
    /**
     * 
     * @type {NewAiAiSendStreamBody}
     * @memberof AIApiNewAiAiSendWithStream
     */
    readonly newAiAiSendStreamBody: NewAiAiSendStreamBody
}

/**
 * Request parameters for newAiAiSendWithStreamOpenAI operation in AIApi.
 * @export
 * @interface AIApiNewAiAiSendWithStreamOpenAIRequest
 */
export interface AIApiNewAiAiSendWithStreamOpenAIRequest {
    /**
     * 
     * @type {NewAiAiSendStreamBody}
     * @memberof AIApiNewAiAiSendWithStreamOpenAI
     */
    readonly newAiAiSendStreamBody: NewAiAiSendStreamBody
}

/**
 * AIApi - object-oriented interface
 * @export
 * @class AIApi
 * @extends {BaseAPI}
 */
export class AIApi extends BaseAPI {
    /**
     * 
     * @summary Approve tool call
     * @param {NewAIAIApiNewAiAiApproveToolCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public newAiAiApproveToolCall(requestParameters: AIApiNewAiAiApproveToolCallRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).newAiAiApproveToolCall(requestParameters.newAiAiApproveToolCallRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deny tool call
     * @param {NewAIAIApiNewAiAiDenyToolCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public newAiAiDenyToolCall(requestParameters: AIApiNewAiAiDenyToolCallRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).newAiAiDenyToolCall(requestParameters.newAiAiToolCallData, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Regenerate stream
     * @param {NewAIAIApiNewAiAiRegenerateStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public newAiAiRegenerateStream(requestParameters: AIApiNewAiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).newAiAiRegenerateStream(requestParameters.newAiAiRegenerateStreamRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Send
     * @param {NewAIAIApiNewAiAiSendRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public newAiAiSend(requestParameters: AIApiNewAiAiSendRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).newAiAiSend(requestParameters.newAiAiSendRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Send custom
     * @param {NewAIAIApiNewAiAiSendCustomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public newAiAiSendCustom(requestParameters: AIApiNewAiAiSendCustomRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).newAiAiSendCustom(requestParameters.newAiAiSendCustomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Send with stream
     * @param {NewAIAIApiNewAiAiSendWithStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public newAiAiSendWithStream(requestParameters: AIApiNewAiAiSendWithStreamRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).newAiAiSendWithStream(requestParameters.newAiAiSendStreamBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Send with stream open ai
     * @param {NewAIAIApiNewAiAiSendWithStreamOpenAIRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public newAiAiSendWithStreamOpenAI(requestParameters: AIApiNewAiAiSendWithStreamOpenAIRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).newAiAiSendWithStreamOpenAI(requestParameters.newAiAiSendStreamBody, options).then((request) => request(this.axios, this.basePath));
    }
}

