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
import type { AiApproveToolCallRequest } from '../../models';
// @ts-ignore
import type { AiChatEvent } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiOpenAIStreamChunk } from '../../models';
// @ts-ignore
import type { AiRegenerateStreamRequest } from '../../models';
// @ts-ignore
import type { AiSendCustomRequest } from '../../models';
// @ts-ignore
import type { AiSendRequest } from '../../models';
// @ts-ignore
import type { AiSendStreamBody } from '../../models';
// @ts-ignore
import type { AiThreadMessageLike } from '../../models';
// @ts-ignore
import type { AiToolCallData } from '../../models';
/**
 * AIApi - axios parameter creator
 * @export
 */
export const AIApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Resumes a chat round that a tool call has paused, and streams the continuation as newline-delimited `ChatEvent` objects. The result supplied in the request is persisted onto the assistant message that issued the call, so the tool is not executed here - the caller runs it and reports the outcome. The round continues against the augmented history and may pause again on a further tool call. Call `POST api/2.0/ai/ai/deny-tool-call` instead to refuse the call and let the model answer without it.
         * @summary Approve tool call
         * @param {AiApproveToolCallRequest} aiApproveToolCallRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-approve-tool-call/
         */
        aiApproveToolCall: async (aiApproveToolCallRequest: AiApproveToolCallRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiApproveToolCallRequest' is not null or undefined
            assertParamExists('aiApproveToolCall', 'aiApproveToolCallRequest', aiApproveToolCallRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiApproveToolCallRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Refuses the tool call a chat round is paused on and resumes it immediately, streaming the continuation as newline-delimited `ChatEvent` objects. The literal `User deny tool call` is persisted in place of the tool result, so the model sees an explicit refusal rather than a missing answer and may reply without the tool or ask for something else. Nothing is executed and no result is accepted from the caller. Use `POST api/2.0/ai/ai/approve-tool-call` to supply a result instead.
         * @summary Deny tool call
         * @param {AiToolCallData} aiToolCallData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-deny-tool-call/
         */
        aiDenyToolCall: async (aiToolCallData: AiToolCallData, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolCallData' is not null or undefined
            assertParamExists('aiDenyToolCall', 'aiToolCallData', aiToolCallData)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolCallData, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Re-rolls the last assistant reply of an existing thread: every message after the last user message - the previous reply and any tool-call hops - is dropped, and a fresh reply is streamed as newline-delimited `ChatEvent` objects against the unchanged prompt. The thread has to exist already, `threadId` is required, and no title is generated. The dropped messages are gone for good, so this is a destructive operation on the thread\'s tail rather than a retry that keeps both answers. Unlike `send-with-stream` the profile is not verified before the stream opens, so an unusable model surfaces as an error frame inside the 200 rather than as a 4xx.
         * @summary Regenerate stream
         * @param {AiRegenerateStreamRequest} aiRegenerateStreamRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-regenerate-stream/
         */
        aiRegenerateStream: async (aiRegenerateStreamRequest: AiRegenerateStreamRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiRegenerateStreamRequest' is not null or undefined
            assertParamExists('aiRegenerateStream', 'aiRegenerateStreamRequest', aiRegenerateStreamRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiRegenerateStreamRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Runs one AI action and returns the whole answer as a single JSON document. The model is the profile bound to `actionType`, falling back to the `Default` assignment slot, so this operation accepts no `profileId` of its own. Nothing is persisted - no thread is opened, no message is stored and no title is generated - which makes it the one to use for a stand-alone completion rather than for a conversation. `entityId` and `contextEntityId` set the scope of the round, which decides the workspace context and the custom MCP servers it may reach. For a conversation that keeps its history, use `POST api/2.0/ai/ai/send-with-stream` instead.
         * @summary Run an AI action
         * @param {AiSendRequest} aiSendRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send/
         */
        aiSend: async (aiSendRequest: AiSendRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiSendRequest' is not null or undefined
            assertParamExists('aiSend', 'aiSendRequest', aiSendRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiSendRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Runs a free-form one-turn call against a system prompt supplied in the request, with no thread, no history and nothing persisted. The model is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot. The shape of the answer depends on the body rather than on the route: with `isStream` set it arrives as a newline-delimited stream of chat events, and without it as a single JSON document, so a client has to handle both. Use `POST api/2.0/ai/ai/send` when the prompt should come from the portal\'s own action configuration instead of from the caller.
         * @summary Send custom
         * @param {AiSendCustomRequest} aiSendCustomRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-custom/
         */
        aiSendCustom: async (aiSendCustomRequest: AiSendCustomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiSendCustomRequest' is not null or undefined
            assertParamExists('aiSendCustom', 'aiSendCustomRequest', aiSendCustomRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiSendCustomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Runs one chat round and streams it back as newline-delimited `ChatEvent` objects. Omitting `threadId` opens a new thread, which requires that `entityId` names a room the caller can open and that a profile resolves for it; the user message and the reply are persisted either way, and a new thread also gets a generated title. The model is settled in a fixed order - an agent\'s assignment in scope overrides everything, then the explicit `profileId`, then the one stored on the thread, then the `Chat` assignment - and the effective profile is checked before the stream opens, so an unknown one fails with 400 rather than as an error buried in a 200. A tool call pauses the round and ends the stream; resume it with `POST api/2.0/ai/ai/approve-tool-call` or `POST api/2.0/ai/ai/deny-tool-call`.
         * @summary Send with stream
         * @param {AiSendStreamBody} aiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-with-stream/
         */
        aiSendWithStream: async (aiSendStreamBody: AiSendStreamBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiSendStreamBody' is not null or undefined
            assertParamExists('aiSendWithStream', 'aiSendStreamBody', aiSendStreamBody)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiSendStreamBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The same chat round as `send-with-stream`, re-encoded as a server-sent-events stream of OpenAI `chat.completion.chunk` objects terminated by a `[DONE]` sentinel. Thread handling, persistence, title generation and the profile pre-flight are identical, and a tool call ends the stream with `finish_reason: tool_calls` instead of a pause event - resume it through the same approve and deny operations. Unlike `send-with-stream` it does not reject an empty user message and does not enforce the per-kind attachment cap, so validate both before calling. Choose this route only for a client that already speaks the OpenAI wire format; `POST api/2.0/ai/ai/send-with-stream` is the native one.
         * @summary Stream a chat in OpenAI format
         * @param {AiSendStreamBody} aiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-with-stream-open-ai/
         */
        aiSendWithStreamOpenAI: async (aiSendStreamBody: AiSendStreamBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiSendStreamBody' is not null or undefined
            assertParamExists('aiSendWithStreamOpenAI', 'aiSendStreamBody', aiSendStreamBody)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiSendStreamBody, localVarRequestOptions, configuration)

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
         * Resumes a chat round that a tool call has paused, and streams the continuation as newline-delimited `ChatEvent` objects. The result supplied in the request is persisted onto the assistant message that issued the call, so the tool is not executed here - the caller runs it and reports the outcome. The round continues against the augmented history and may pause again on a further tool call. Call `POST api/2.0/ai/ai/deny-tool-call` instead to refuse the call and let the model answer without it.
         * @summary Approve tool call
         * @param {AiApproveToolCallRequest} aiApproveToolCallRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-approve-tool-call/
         */
        async aiApproveToolCall(aiApproveToolCallRequest: AiApproveToolCallRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiApproveToolCall(aiApproveToolCallRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiApproveToolCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Refuses the tool call a chat round is paused on and resumes it immediately, streaming the continuation as newline-delimited `ChatEvent` objects. The literal `User deny tool call` is persisted in place of the tool result, so the model sees an explicit refusal rather than a missing answer and may reply without the tool or ask for something else. Nothing is executed and no result is accepted from the caller. Use `POST api/2.0/ai/ai/approve-tool-call` to supply a result instead.
         * @summary Deny tool call
         * @param {AiToolCallData} aiToolCallData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-deny-tool-call/
         */
        async aiDenyToolCall(aiToolCallData: AiToolCallData, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiDenyToolCall(aiToolCallData, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiDenyToolCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Re-rolls the last assistant reply of an existing thread: every message after the last user message - the previous reply and any tool-call hops - is dropped, and a fresh reply is streamed as newline-delimited `ChatEvent` objects against the unchanged prompt. The thread has to exist already, `threadId` is required, and no title is generated. The dropped messages are gone for good, so this is a destructive operation on the thread\'s tail rather than a retry that keeps both answers. Unlike `send-with-stream` the profile is not verified before the stream opens, so an unusable model surfaces as an error frame inside the 200 rather than as a 4xx.
         * @summary Regenerate stream
         * @param {AiRegenerateStreamRequest} aiRegenerateStreamRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-regenerate-stream/
         */
        async aiRegenerateStream(aiRegenerateStreamRequest: AiRegenerateStreamRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiRegenerateStream(aiRegenerateStreamRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiRegenerateStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Runs one AI action and returns the whole answer as a single JSON document. The model is the profile bound to `actionType`, falling back to the `Default` assignment slot, so this operation accepts no `profileId` of its own. Nothing is persisted - no thread is opened, no message is stored and no title is generated - which makes it the one to use for a stand-alone completion rather than for a conversation. `entityId` and `contextEntityId` set the scope of the round, which decides the workspace context and the custom MCP servers it may reach. For a conversation that keeps its history, use `POST api/2.0/ai/ai/send-with-stream` instead.
         * @summary Run an AI action
         * @param {AiSendRequest} aiSendRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send/
         */
        async aiSend(aiSendRequest: AiSendRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSend(aiSendRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiSend']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Runs a free-form one-turn call against a system prompt supplied in the request, with no thread, no history and nothing persisted. The model is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot. The shape of the answer depends on the body rather than on the route: with `isStream` set it arrives as a newline-delimited stream of chat events, and without it as a single JSON document, so a client has to handle both. Use `POST api/2.0/ai/ai/send` when the prompt should come from the portal\'s own action configuration instead of from the caller.
         * @summary Send custom
         * @param {AiSendCustomRequest} aiSendCustomRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-custom/
         */
        async aiSendCustom(aiSendCustomRequest: AiSendCustomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSendCustom(aiSendCustomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiSendCustom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Runs one chat round and streams it back as newline-delimited `ChatEvent` objects. Omitting `threadId` opens a new thread, which requires that `entityId` names a room the caller can open and that a profile resolves for it; the user message and the reply are persisted either way, and a new thread also gets a generated title. The model is settled in a fixed order - an agent\'s assignment in scope overrides everything, then the explicit `profileId`, then the one stored on the thread, then the `Chat` assignment - and the effective profile is checked before the stream opens, so an unknown one fails with 400 rather than as an error buried in a 200. A tool call pauses the round and ends the stream; resume it with `POST api/2.0/ai/ai/approve-tool-call` or `POST api/2.0/ai/ai/deny-tool-call`.
         * @summary Send with stream
         * @param {AiSendStreamBody} aiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-with-stream/
         */
        async aiSendWithStream(aiSendStreamBody: AiSendStreamBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiChatEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSendWithStream(aiSendStreamBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiSendWithStream']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * The same chat round as `send-with-stream`, re-encoded as a server-sent-events stream of OpenAI `chat.completion.chunk` objects terminated by a `[DONE]` sentinel. Thread handling, persistence, title generation and the profile pre-flight are identical, and a tool call ends the stream with `finish_reason: tool_calls` instead of a pause event - resume it through the same approve and deny operations. Unlike `send-with-stream` it does not reject an empty user message and does not enforce the per-kind attachment cap, so validate both before calling. Choose this route only for a client that already speaks the OpenAI wire format; `POST api/2.0/ai/ai/send-with-stream` is the native one.
         * @summary Stream a chat in OpenAI format
         * @param {AiSendStreamBody} aiSendStreamBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-with-stream-open-ai/
         */
        async aiSendWithStreamOpenAI(aiSendStreamBody: AiSendStreamBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiOpenAIStreamChunk>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSendWithStreamOpenAI(aiSendStreamBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AIApi.aiSendWithStreamOpenAI']?.[localVarOperationServerIndex]?.url;
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
         * Resumes a chat round that a tool call has paused, and streams the continuation as newline-delimited `ChatEvent` objects. The result supplied in the request is persisted onto the assistant message that issued the call, so the tool is not executed here - the caller runs it and reports the outcome. The round continues against the augmented history and may pause again on a further tool call. Call `POST api/2.0/ai/ai/deny-tool-call` instead to refuse the call and let the model answer without it.
         * @summary Approve tool call
         * @param {AIApiAiApproveToolCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiApproveToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-approve-tool-call/
         * @throws {RequiredError}
         */
        aiApproveToolCall(requestParameters: AIApiAiApproveToolCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiApproveToolCall(requestParameters.aiApproveToolCallRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Refuses the tool call a chat round is paused on and resumes it immediately, streaming the continuation as newline-delimited `ChatEvent` objects. The literal `User deny tool call` is persisted in place of the tool result, so the model sees an explicit refusal rather than a missing answer and may reply without the tool or ask for something else. Nothing is executed and no result is accepted from the caller. Use `POST api/2.0/ai/ai/approve-tool-call` to supply a result instead.
         * @summary Deny tool call
         * @param {AIApiAiDenyToolCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiDenyToolCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-deny-tool-call/
         * @throws {RequiredError}
         */
        aiDenyToolCall(requestParameters: AIApiAiDenyToolCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiDenyToolCall(requestParameters.aiToolCallData, options).then((request) => request(axios, basePath));
        },
        /**
         * Re-rolls the last assistant reply of an existing thread: every message after the last user message - the previous reply and any tool-call hops - is dropped, and a fresh reply is streamed as newline-delimited `ChatEvent` objects against the unchanged prompt. The thread has to exist already, `threadId` is required, and no title is generated. The dropped messages are gone for good, so this is a destructive operation on the thread\'s tail rather than a retry that keeps both answers. Unlike `send-with-stream` the profile is not verified before the stream opens, so an unusable model surfaces as an error frame inside the 200 rather than as a 4xx.
         * @summary Regenerate stream
         * @param {AIApiAiRegenerateStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiRegenerateStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-regenerate-stream/
         * @throws {RequiredError}
         */
        aiRegenerateStream(requestParameters: AIApiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiRegenerateStream(requestParameters.aiRegenerateStreamRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Runs one AI action and returns the whole answer as a single JSON document. The model is the profile bound to `actionType`, falling back to the `Default` assignment slot, so this operation accepts no `profileId` of its own. Nothing is persisted - no thread is opened, no message is stored and no title is generated - which makes it the one to use for a stand-alone completion rather than for a conversation. `entityId` and `contextEntityId` set the scope of the round, which decides the workspace context and the custom MCP servers it may reach. For a conversation that keeps its history, use `POST api/2.0/ai/ai/send-with-stream` instead.
         * @summary Run an AI action
         * @param {AIApiAiSendRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSend operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send/
         * @throws {RequiredError}
         */
        aiSend(requestParameters: AIApiAiSendRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadMessageLike> {
            return localVarFp.aiSend(requestParameters.aiSendRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Runs a free-form one-turn call against a system prompt supplied in the request, with no thread, no history and nothing persisted. The model is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot. The shape of the answer depends on the body rather than on the route: with `isStream` set it arrives as a newline-delimited stream of chat events, and without it as a single JSON document, so a client has to handle both. Use `POST api/2.0/ai/ai/send` when the prompt should come from the portal\'s own action configuration instead of from the caller.
         * @summary Send custom
         * @param {AIApiAiSendCustomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSendCustom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-custom/
         * @throws {RequiredError}
         */
        aiSendCustom(requestParameters: AIApiAiSendCustomRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadMessageLike> {
            return localVarFp.aiSendCustom(requestParameters.aiSendCustomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Runs one chat round and streams it back as newline-delimited `ChatEvent` objects. Omitting `threadId` opens a new thread, which requires that `entityId` names a room the caller can open and that a profile resolves for it; the user message and the reply are persisted either way, and a new thread also gets a generated title. The model is settled in a fixed order - an agent\'s assignment in scope overrides everything, then the explicit `profileId`, then the one stored on the thread, then the `Chat` assignment - and the effective profile is checked before the stream opens, so an unknown one fails with 400 rather than as an error buried in a 200. A tool call pauses the round and ends the stream; resume it with `POST api/2.0/ai/ai/approve-tool-call` or `POST api/2.0/ai/ai/deny-tool-call`.
         * @summary Send with stream
         * @param {AIApiAiSendWithStreamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSendWithStream operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-with-stream/
         * @throws {RequiredError}
         */
        aiSendWithStream(requestParameters: AIApiAiSendWithStreamRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiChatEvent> {
            return localVarFp.aiSendWithStream(requestParameters.aiSendStreamBody, options).then((request) => request(axios, basePath));
        },
        /**
         * The same chat round as `send-with-stream`, re-encoded as a server-sent-events stream of OpenAI `chat.completion.chunk` objects terminated by a `[DONE]` sentinel. Thread handling, persistence, title generation and the profile pre-flight are identical, and a tool call ends the stream with `finish_reason: tool_calls` instead of a pause event - resume it through the same approve and deny operations. Unlike `send-with-stream` it does not reject an empty user message and does not enforce the per-kind attachment cap, so validate both before calling. Choose this route only for a client that already speaks the OpenAI wire format; `POST api/2.0/ai/ai/send-with-stream` is the native one.
         * @summary Stream a chat in OpenAI format
         * @param {AIApiAiSendWithStreamOpenAIRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSendWithStreamOpenAI operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-send-with-stream-open-ai/
         * @throws {RequiredError}
         */
        aiSendWithStreamOpenAI(requestParameters: AIApiAiSendWithStreamOpenAIRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiOpenAIStreamChunk> {
            return localVarFp.aiSendWithStreamOpenAI(requestParameters.aiSendStreamBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiApproveToolCall operation in AIApi.
 * @export
 * @interface AIApiAiApproveToolCallRequest
 */
export interface AIApiAiApproveToolCallRequest {
    /**
     * 
     * @type {AiApproveToolCallRequest}
     * @memberof AIApiAiApproveToolCall
     */
    readonly aiApproveToolCallRequest: AiApproveToolCallRequest
}

/**
 * Request parameters for aiDenyToolCall operation in AIApi.
 * @export
 * @interface AIApiAiDenyToolCallRequest
 */
export interface AIApiAiDenyToolCallRequest {
    /**
     * 
     * @type {AiToolCallData}
     * @memberof AIApiAiDenyToolCall
     */
    readonly aiToolCallData: AiToolCallData
}

/**
 * Request parameters for aiRegenerateStream operation in AIApi.
 * @export
 * @interface AIApiAiRegenerateStreamRequest
 */
export interface AIApiAiRegenerateStreamRequest {
    /**
     * 
     * @type {AiRegenerateStreamRequest}
     * @memberof AIApiAiRegenerateStream
     */
    readonly aiRegenerateStreamRequest: AiRegenerateStreamRequest
}

/**
 * Request parameters for aiSend operation in AIApi.
 * @export
 * @interface AIApiAiSendRequest
 */
export interface AIApiAiSendRequest {
    /**
     * 
     * @type {AiSendRequest}
     * @memberof AIApiAiSend
     */
    readonly aiSendRequest: AiSendRequest
}

/**
 * Request parameters for aiSendCustom operation in AIApi.
 * @export
 * @interface AIApiAiSendCustomRequest
 */
export interface AIApiAiSendCustomRequest {
    /**
     * 
     * @type {AiSendCustomRequest}
     * @memberof AIApiAiSendCustom
     */
    readonly aiSendCustomRequest: AiSendCustomRequest
}

/**
 * Request parameters for aiSendWithStream operation in AIApi.
 * @export
 * @interface AIApiAiSendWithStreamRequest
 */
export interface AIApiAiSendWithStreamRequest {
    /**
     * 
     * @type {AiSendStreamBody}
     * @memberof AIApiAiSendWithStream
     */
    readonly aiSendStreamBody: AiSendStreamBody
}

/**
 * Request parameters for aiSendWithStreamOpenAI operation in AIApi.
 * @export
 * @interface AIApiAiSendWithStreamOpenAIRequest
 */
export interface AIApiAiSendWithStreamOpenAIRequest {
    /**
     * 
     * @type {AiSendStreamBody}
     * @memberof AIApiAiSendWithStreamOpenAI
     */
    readonly aiSendStreamBody: AiSendStreamBody
}

/**
 * AIApi - object-oriented interface
 * @export
 * @class AIApi
 * @extends {BaseAPI}
 */
export class AIApi extends BaseAPI {
    /**
     * Resumes a chat round that a tool call has paused, and streams the continuation as newline-delimited `ChatEvent` objects. The result supplied in the request is persisted onto the assistant message that issued the call, so the tool is not executed here - the caller runs it and reports the outcome. The round continues against the augmented history and may pause again on a further tool call. Call `POST api/2.0/ai/ai/deny-tool-call` instead to refuse the call and let the model answer without it.
     * @summary Approve tool call
     * @param {AIAIApiAiApproveToolCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiApproveToolCall(requestParameters: AIApiAiApproveToolCallRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiApproveToolCall(requestParameters.aiApproveToolCallRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Refuses the tool call a chat round is paused on and resumes it immediately, streaming the continuation as newline-delimited `ChatEvent` objects. The literal `User deny tool call` is persisted in place of the tool result, so the model sees an explicit refusal rather than a missing answer and may reply without the tool or ask for something else. Nothing is executed and no result is accepted from the caller. Use `POST api/2.0/ai/ai/approve-tool-call` to supply a result instead.
     * @summary Deny tool call
     * @param {AIAIApiAiDenyToolCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiDenyToolCall(requestParameters: AIApiAiDenyToolCallRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiDenyToolCall(requestParameters.aiToolCallData, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Re-rolls the last assistant reply of an existing thread: every message after the last user message - the previous reply and any tool-call hops - is dropped, and a fresh reply is streamed as newline-delimited `ChatEvent` objects against the unchanged prompt. The thread has to exist already, `threadId` is required, and no title is generated. The dropped messages are gone for good, so this is a destructive operation on the thread\'s tail rather than a retry that keeps both answers. Unlike `send-with-stream` the profile is not verified before the stream opens, so an unusable model surfaces as an error frame inside the 200 rather than as a 4xx.
     * @summary Regenerate stream
     * @param {AIAIApiAiRegenerateStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiRegenerateStream(requestParameters: AIApiAiRegenerateStreamRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiRegenerateStream(requestParameters.aiRegenerateStreamRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Runs one AI action and returns the whole answer as a single JSON document. The model is the profile bound to `actionType`, falling back to the `Default` assignment slot, so this operation accepts no `profileId` of its own. Nothing is persisted - no thread is opened, no message is stored and no title is generated - which makes it the one to use for a stand-alone completion rather than for a conversation. `entityId` and `contextEntityId` set the scope of the round, which decides the workspace context and the custom MCP servers it may reach. For a conversation that keeps its history, use `POST api/2.0/ai/ai/send-with-stream` instead.
     * @summary Run an AI action
     * @param {AIAIApiAiSendRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiSend(requestParameters: AIApiAiSendRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiSend(requestParameters.aiSendRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Runs a free-form one-turn call against a system prompt supplied in the request, with no thread, no history and nothing persisted. The model is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot. The shape of the answer depends on the body rather than on the route: with `isStream` set it arrives as a newline-delimited stream of chat events, and without it as a single JSON document, so a client has to handle both. Use `POST api/2.0/ai/ai/send` when the prompt should come from the portal\'s own action configuration instead of from the caller.
     * @summary Send custom
     * @param {AIAIApiAiSendCustomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiSendCustom(requestParameters: AIApiAiSendCustomRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiSendCustom(requestParameters.aiSendCustomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Runs one chat round and streams it back as newline-delimited `ChatEvent` objects. Omitting `threadId` opens a new thread, which requires that `entityId` names a room the caller can open and that a profile resolves for it; the user message and the reply are persisted either way, and a new thread also gets a generated title. The model is settled in a fixed order - an agent\'s assignment in scope overrides everything, then the explicit `profileId`, then the one stored on the thread, then the `Chat` assignment - and the effective profile is checked before the stream opens, so an unknown one fails with 400 rather than as an error buried in a 200. A tool call pauses the round and ends the stream; resume it with `POST api/2.0/ai/ai/approve-tool-call` or `POST api/2.0/ai/ai/deny-tool-call`.
     * @summary Send with stream
     * @param {AIAIApiAiSendWithStreamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiSendWithStream(requestParameters: AIApiAiSendWithStreamRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiSendWithStream(requestParameters.aiSendStreamBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The same chat round as `send-with-stream`, re-encoded as a server-sent-events stream of OpenAI `chat.completion.chunk` objects terminated by a `[DONE]` sentinel. Thread handling, persistence, title generation and the profile pre-flight are identical, and a tool call ends the stream with `finish_reason: tool_calls` instead of a pause event - resume it through the same approve and deny operations. Unlike `send-with-stream` it does not reject an empty user message and does not enforce the per-kind attachment cap, so validate both before calling. Choose this route only for a client that already speaks the OpenAI wire format; `POST api/2.0/ai/ai/send-with-stream` is the native one.
     * @summary Stream a chat in OpenAI format
     * @param {AIAIApiAiSendWithStreamOpenAIRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AIApi
     */
    public aiSendWithStreamOpenAI(requestParameters: AIApiAiSendWithStreamOpenAIRequest, options?: RawAxiosRequestConfig) {
        return AIApiFp(this.configuration).aiSendWithStreamOpenAI(requestParameters.aiSendStreamBody, options).then((request) => request(this.axios, this.basePath));
    }
}

