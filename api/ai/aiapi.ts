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
import type { AiAiApproveToolCallRequest } from '../../models';
// @ts-ignore
import type { AiAiRegenerateStreamRequest } from '../../models';
// @ts-ignore
import type { AiAiSendCustomRequest } from '../../models';
// @ts-ignore
import type { AiAiSendRequest } from '../../models';
// @ts-ignore
import type { AiAiSendStreamBody } from '../../models';
// @ts-ignore
import type { AiAiToolCallData } from '../../models';
// @ts-ignore
import type { AiChatEvent } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiOpenAIStreamChunk } from '../../models';
// @ts-ignore
import type { AiThreadMessageLike } from '../../models';
/**
 * AIApi - axios parameter creator
 * @export
 */
export const AIApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Resumes a chat round paused on a tool call. The supplied result is persisted onto the assistant message that issued the call and the stream continues with the augmented history.
         * @summary Approve tool call
         * @param {AiAiApproveToolCallRequest} aiAiApproveToolCallRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-approve-tool-call/
         */
        aiAiApproveToolCall: async (aiAiApproveToolCallRequest: AiAiApproveToolCallRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAiApproveToolCallRequest' is not null or undefined
            assertParamExists('aiAiApproveToolCall', 'aiAiApproveToolCallRequest', aiAiApproveToolCallRequest)

            const localVarPath = `/api/2.0/ai/ai/approve-tool-call`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAiApproveToolCallRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Denies the pending tool call and resumes the chat immediately, with `User deny tool call` standing in for the tool result.
         * @summary Deny tool call
         * @param {AiAiToolCallData} aiAiToolCallData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-deny-tool-call/
         */
        aiAiDenyToolCall: async (aiAiToolCallData: AiAiToolCallData, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAiToolCallData' is not null or undefined
            assertParamExists('aiAiDenyToolCall', 'aiAiToolCallData', aiAiToolCallData)

            const localVarPath = `/api/2.0/ai/ai/deny-tool-call`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAiToolCallData, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Re-rolls the last assistant reply in an existing thread: every message after the last user message (the previous reply plus any tool-call hops) is dropped and a fresh reply is streamed against the unchanged prompt. The thread must already exist and no title is generated.
         * @summary Regenerate stream
         * @param {AiAiRegenerateStreamRequest} aiAiRegenerateStreamRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-regenerate-stream/
         */
        aiAiRegenerateStream: async (aiAiRegenerateStreamRequest: AiAiRegenerateStreamRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAiRegenerateStreamRequest' is not null or undefined
            assertParamExists('aiAiRegenerateStream', 'aiAiRegenerateStreamRequest', aiAiRegenerateStreamRequest)

            const localVarPath = `/api/2.0/ai/ai/regenerate-stream`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAiRegenerateStreamRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Runs one AI action: the profile bound to `actionType` (falling back to the `Default` slot) is dispatched against a single-message history. Nothing is persisted - no thread, no title generation, no storage writes.
         * @summary Send
         * @param {AiAiSendRequest} aiAiSendRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send/
         */
        aiAiSend: async (aiAiSendRequest: AiAiSendRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAiSendRequest' is not null or undefined
            assertParamExists('aiAiSend', 'aiAiSendRequest', aiAiSendRequest)

            const localVarPath = `/api/2.0/ai/ai/send`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAiSendRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Runs a free-form one-turn call against a caller-supplied system prompt. No thread, no history and no persistence. The profile is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot.
         * @summary Send custom
         * @param {AiAiSendCustomRequest} aiAiSendCustomRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-custom/
         */
        aiAiSendCustom: async (aiAiSendCustomRequest: AiAiSendCustomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAiSendCustomRequest' is not null or undefined
            assertParamExists('aiAiSendCustom', 'aiAiSendCustomRequest', aiAiSendCustomRequest)

            const localVarPath = `/api/2.0/ai/ai/send-custom`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAiSendCustomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts a chat round and streams it back as newline-delimited `ChatEvent` objects. The thread is opened or created, the user message and the reply are persisted, a new thread gets a generated title, and a tool call pauses the round until it is approved or denied.
         * @summary Send with stream
         * @param {AiAiSendStreamBody} aiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream/
         */
        aiAiSendWithStream: async (aiAiSendStreamBody: AiAiSendStreamBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAiSendStreamBody' is not null or undefined
            assertParamExists('aiAiSendWithStream', 'aiAiSendStreamBody', aiAiSendStreamBody)

            const localVarPath = `/api/2.0/ai/ai/send-with-stream`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAiSendStreamBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The same chat round as `send-with-stream`, re-encoded as an OpenAI Chat Completions stream of `chat.completion.chunk` objects. Storage, title generation and tool-call pauses are identical - only the wire shape differs; a tool call ends the stream with `finish_reason: tool_calls`.
         * @summary Send with stream open ai
         * @param {AiAiSendStreamBody} aiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream-open-ai/
         */
        aiAiSendWithStreamOpenAI: async (aiAiSendStreamBody: AiAiSendStreamBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAiSendStreamBody' is not null or undefined
            assertParamExists('aiAiSendWithStreamOpenAI', 'aiAiSendStreamBody', aiAiSendStreamBody)

            const localVarPath = `/api/2.0/ai/ai/send-with-stream-openai`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAiSendStreamBody, localVarRequestOptions, configuration)

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
         * Resumes a chat round paused on a tool call. The supplied result is persisted onto the assistant message that issued the call and the stream continues with the augmented history.
         * @summary Approve tool call
         * @param {AiAiApproveToolCallRequest} aiAiApproveToolCallRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-approve-tool-call/
         */
        async aiAiApproveToolCall(aiAiApproveToolCallRequest: AiAiApproveToolCallRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAiApproveToolCall(aiAiApproveToolCallRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiAiApproveToolCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Denies the pending tool call and resumes the chat immediately, with `User deny tool call` standing in for the tool result.
         * @summary Deny tool call
         * @param {AiAiToolCallData} aiAiToolCallData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-deny-tool-call/
         */
        async aiAiDenyToolCall(aiAiToolCallData: AiAiToolCallData, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAiDenyToolCall(aiAiToolCallData, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiAiDenyToolCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Re-rolls the last assistant reply in an existing thread: every message after the last user message (the previous reply plus any tool-call hops) is dropped and a fresh reply is streamed against the unchanged prompt. The thread must already exist and no title is generated.
         * @summary Regenerate stream
         * @param {AiAiRegenerateStreamRequest} aiAiRegenerateStreamRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-regenerate-stream/
         */
        async aiAiRegenerateStream(aiAiRegenerateStreamRequest: AiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAiRegenerateStream(aiAiRegenerateStreamRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiAiRegenerateStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Runs one AI action: the profile bound to `actionType` (falling back to the `Default` slot) is dispatched against a single-message history. Nothing is persisted - no thread, no title generation, no storage writes.
         * @summary Send
         * @param {AiAiSendRequest} aiAiSendRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send/
         */
        async aiAiSend(aiAiSendRequest: AiAiSendRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAiSend(aiAiSendRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiAiSend']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Runs a free-form one-turn call against a caller-supplied system prompt. No thread, no history and no persistence. The profile is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot.
         * @summary Send custom
         * @param {AiAiSendCustomRequest} aiAiSendCustomRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-custom/
         */
        async aiAiSendCustom(aiAiSendCustomRequest: AiAiSendCustomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAiSendCustom(aiAiSendCustomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiAiSendCustom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts a chat round and streams it back as newline-delimited `ChatEvent` objects. The thread is opened or created, the user message and the reply are persisted, a new thread gets a generated title, and a tool call pauses the round until it is approved or denied.
         * @summary Send with stream
         * @param {AiAiSendStreamBody} aiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream/
         */
        async aiAiSendWithStream(aiAiSendStreamBody: AiAiSendStreamBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAiSendWithStream(aiAiSendStreamBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiAiSendWithStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * The same chat round as `send-with-stream`, re-encoded as an OpenAI Chat Completions stream of `chat.completion.chunk` objects. Storage, title generation and tool-call pauses are identical - only the wire shape differs; a tool call ends the stream with `finish_reason: tool_calls`.
         * @summary Send with stream open ai
         * @param {AiAiSendStreamBody} aiAiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream-open-ai/
         */
        async aiAiSendWithStreamOpenAI(aiAiSendStreamBody: AiAiSendStreamBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiOpenAIStreamChunk>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAiSendWithStreamOpenAI(aiAiSendStreamBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiAiSendWithStreamOpenAI']?.[localVarOperationServerIndex]?.url;
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
         * Resumes a chat round paused on a tool call. The supplied result is persisted onto the assistant message that issued the call and the stream continues with the augmented history.
         * @summary Approve tool call
         * @param {AIApiAiAiApproveToolCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-approve-tool-call/
         * @throws {RequiredError}
         */
        aiAiApproveToolCall(requestParameters: AIApiAiAiApproveToolCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiAiApproveToolCall(requestParameters.aiAiApproveToolCallRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Denies the pending tool call and resumes the chat immediately, with `User deny tool call` standing in for the tool result.
         * @summary Deny tool call
         * @param {AIApiAiAiDenyToolCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-deny-tool-call/
         * @throws {RequiredError}
         */
        aiAiDenyToolCall(requestParameters: AIApiAiAiDenyToolCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiAiDenyToolCall(requestParameters.aiAiToolCallData, options).then((request) => request(axios, basePath));
        },
        /**
         * Re-rolls the last assistant reply in an existing thread: every message after the last user message (the previous reply plus any tool-call hops) is dropped and a fresh reply is streamed against the unchanged prompt. The thread must already exist and no title is generated.
         * @summary Regenerate stream
         * @param {AIApiAiAiRegenerateStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-regenerate-stream/
         * @throws {RequiredError}
         */
        aiAiRegenerateStream(requestParameters: AIApiAiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiAiRegenerateStream(requestParameters.aiAiRegenerateStreamRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Runs one AI action: the profile bound to `actionType` (falling back to the `Default` slot) is dispatched against a single-message history. Nothing is persisted - no thread, no title generation, no storage writes.
         * @summary Send
         * @param {AIApiAiAiSendRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send/
         * @throws {RequiredError}
         */
        aiAiSend(requestParameters: AIApiAiAiSendRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadMessageLike> {
            return localVarFp.aiAiSend(requestParameters.aiAiSendRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Runs a free-form one-turn call against a caller-supplied system prompt. No thread, no history and no persistence. The profile is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot.
         * @summary Send custom
         * @param {AIApiAiAiSendCustomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-custom/
         * @throws {RequiredError}
         */
        aiAiSendCustom(requestParameters: AIApiAiAiSendCustomRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadMessageLike> {
            return localVarFp.aiAiSendCustom(requestParameters.aiAiSendCustomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts a chat round and streams it back as newline-delimited `ChatEvent` objects. The thread is opened or created, the user message and the reply are persisted, a new thread gets a generated title, and a tool call pauses the round until it is approved or denied.
         * @summary Send with stream
         * @param {AIApiAiAiSendWithStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream/
         * @throws {RequiredError}
         */
        aiAiSendWithStream(requestParameters: AIApiAiAiSendWithStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiAiSendWithStream(requestParameters.aiAiSendStreamBody, options).then((request) => request(axios, basePath));
        },
        /**
         * The same chat round as `send-with-stream`, re-encoded as an OpenAI Chat Completions stream of `chat.completion.chunk` objects. Storage, title generation and tool-call pauses are identical - only the wire shape differs; a tool call ends the stream with `finish_reason: tool_calls`.
         * @summary Send with stream open ai
         * @param {AIApiAiAiSendWithStreamOpenAIRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream-open-ai/
         * @throws {RequiredError}
         */
        aiAiSendWithStreamOpenAI(requestParameters: AIApiAiAiSendWithStreamOpenAIRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiOpenAIStreamChunk> {
            return localVarFp.aiAiSendWithStreamOpenAI(requestParameters.aiAiSendStreamBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiAiApproveToolCall operation in AIApi.
 * @export
 * @interface AIApiAiAiApproveToolCallRequest
 */
export interface AIApiAiAiApproveToolCallRequest {
    /**
     * 
     * @type {AiAiApproveToolCallRequest}
     * @memberof AIApiAiAiApproveToolCall
     */
    readonly aiAiApproveToolCallRequest: AiAiApproveToolCallRequest
}

/**
 * Request parameters for aiAiDenyToolCall operation in AIApi.
 * @export
 * @interface AIApiAiAiDenyToolCallRequest
 */
export interface AIApiAiAiDenyToolCallRequest {
    /**
     * 
     * @type {AiAiToolCallData}
     * @memberof AIApiAiAiDenyToolCall
     */
    readonly aiAiToolCallData: AiAiToolCallData
}

/**
 * Request parameters for aiAiRegenerateStream operation in AIApi.
 * @export
 * @interface AIApiAiAiRegenerateStreamRequest
 */
export interface AIApiAiAiRegenerateStreamRequest {
    /**
     * 
     * @type {AiAiRegenerateStreamRequest}
     * @memberof AIApiAiAiRegenerateStream
     */
    readonly aiAiRegenerateStreamRequest: AiAiRegenerateStreamRequest
}

/**
 * Request parameters for aiAiSend operation in AIApi.
 * @export
 * @interface AIApiAiAiSendRequest
 */
export interface AIApiAiAiSendRequest {
    /**
     * 
     * @type {AiAiSendRequest}
     * @memberof AIApiAiAiSend
     */
    readonly aiAiSendRequest: AiAiSendRequest
}

/**
 * Request parameters for aiAiSendCustom operation in AIApi.
 * @export
 * @interface AIApiAiAiSendCustomRequest
 */
export interface AIApiAiAiSendCustomRequest {
    /**
     * 
     * @type {AiAiSendCustomRequest}
     * @memberof AIApiAiAiSendCustom
     */
    readonly aiAiSendCustomRequest: AiAiSendCustomRequest
}

/**
 * Request parameters for aiAiSendWithStream operation in AIApi.
 * @export
 * @interface AIApiAiAiSendWithStreamRequest
 */
export interface AIApiAiAiSendWithStreamRequest {
    /**
     * 
     * @type {AiAiSendStreamBody}
     * @memberof AIApiAiAiSendWithStream
     */
    readonly aiAiSendStreamBody: AiAiSendStreamBody
}

/**
 * Request parameters for aiAiSendWithStreamOpenAI operation in AIApi.
 * @export
 * @interface AIApiAiAiSendWithStreamOpenAIRequest
 */
export interface AIApiAiAiSendWithStreamOpenAIRequest {
    /**
     * 
     * @type {AiAiSendStreamBody}
     * @memberof AIApiAiAiSendWithStreamOpenAI
     */
    readonly aiAiSendStreamBody: AiAiSendStreamBody
}

/**
 * AIApi - object-oriented interface
 * @export
 * @class AIApi
 * @extends {BaseAPI}
 */
export class AIApi extends BaseAPI {
    /**
     * Resumes a chat round paused on a tool call. The supplied result is persisted onto the assistant message that issued the call and the stream continues with the augmented history.
     * @summary Approve tool call
     * @param {AIAIApiAiAiApproveToolCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiAiApproveToolCall(requestParameters: AIApiAiAiApproveToolCallRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiAiApproveToolCall(requestParameters.aiAiApproveToolCallRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Denies the pending tool call and resumes the chat immediately, with `User deny tool call` standing in for the tool result.
     * @summary Deny tool call
     * @param {AIAIApiAiAiDenyToolCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiAiDenyToolCall(requestParameters: AIApiAiAiDenyToolCallRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiAiDenyToolCall(requestParameters.aiAiToolCallData, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Re-rolls the last assistant reply in an existing thread: every message after the last user message (the previous reply plus any tool-call hops) is dropped and a fresh reply is streamed against the unchanged prompt. The thread must already exist and no title is generated.
     * @summary Regenerate stream
     * @param {AIAIApiAiAiRegenerateStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiAiRegenerateStream(requestParameters: AIApiAiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiAiRegenerateStream(requestParameters.aiAiRegenerateStreamRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Runs one AI action: the profile bound to `actionType` (falling back to the `Default` slot) is dispatched against a single-message history. Nothing is persisted - no thread, no title generation, no storage writes.
     * @summary Send
     * @param {AIAIApiAiAiSendRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiAiSend(requestParameters: AIApiAiAiSendRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiAiSend(requestParameters.aiAiSendRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Runs a free-form one-turn call against a caller-supplied system prompt. No thread, no history and no persistence. The profile is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot.
     * @summary Send custom
     * @param {AIAIApiAiAiSendCustomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiAiSendCustom(requestParameters: AIApiAiAiSendCustomRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiAiSendCustom(requestParameters.aiAiSendCustomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts a chat round and streams it back as newline-delimited `ChatEvent` objects. The thread is opened or created, the user message and the reply are persisted, a new thread gets a generated title, and a tool call pauses the round until it is approved or denied.
     * @summary Send with stream
     * @param {AIAIApiAiAiSendWithStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiAiSendWithStream(requestParameters: AIApiAiAiSendWithStreamRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiAiSendWithStream(requestParameters.aiAiSendStreamBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The same chat round as `send-with-stream`, re-encoded as an OpenAI Chat Completions stream of `chat.completion.chunk` objects. Storage, title generation and tool-call pauses are identical - only the wire shape differs; a tool call ends the stream with `finish_reason: tool_calls`.
     * @summary Send with stream open ai
     * @param {AIAIApiAiAiSendWithStreamOpenAIRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiAiSendWithStreamOpenAI(requestParameters: AIApiAiAiSendWithStreamOpenAIRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiAiSendWithStreamOpenAI(requestParameters.aiAiSendStreamBody, options).then((request) => request(this.axios, this.basePath));
    }
}

