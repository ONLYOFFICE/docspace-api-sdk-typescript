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
import type { AiOpenOrCreateResult } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
// @ts-ignore
import type { AiThread } from '../../models';
// @ts-ignore
import type { AiThreadMessageLike } from '../../models';
// @ts-ignore
import type { AiThreadsAppendUserMessage200Response } from '../../models';
// @ts-ignore
import type { AiThreadsAppendUserMessageRequest } from '../../models';
// @ts-ignore
import type { AiThreadsCreateRequest } from '../../models';
// @ts-ignore
import type { AiThreadsOpenOrCreateRequest } from '../../models';
// @ts-ignore
import type { AiThreadsRegenerateTitle200Response } from '../../models';
// @ts-ignore
import type { AiThreadsRegenerateTitleRequest } from '../../models';
// @ts-ignore
import type { AiThreadsRenameRequest } from '../../models';
// @ts-ignore
import type { AiThreadsTouchRequest } from '../../models';
// @ts-ignore
import type { AiThreadsUpdateMessageRequest } from '../../models';
/**
 * ThreadsApi - axios parameter creator
 * @export
 */
export const ThreadsApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Stores a user message in a thread and bumps its last-edit date so the thread resurfaces at the top of the list. The per-kind attachment cap of the composer is enforced here as well, so a direct API call cannot exceed what the UI allows. Passing `profileId` rebinds the thread to another model, which is how a mid-conversation model switch is recorded. The answer carries the new message\'s ID; the message is stored as sent and no reply is generated - run a round with `POST api/2.0/ai/ai/send-with-stream` for that.
         * @summary Append user message
         * @param {AiThreadsAppendUserMessageRequest} aiThreadsAppendUserMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-append-user-message/
         */
        aiThreadsAppendUserMessage: async (aiThreadsAppendUserMessageRequest: AiThreadsAppendUserMessageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsAppendUserMessageRequest' is not null or undefined
            assertParamExists('aiThreadsAppendUserMessage', 'aiThreadsAppendUserMessageRequest', aiThreadsAppendUserMessageRequest)

            const localVarPath = `/api/2.0/ai/threads/append-user-message`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsAppendUserMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes every message of a thread while keeping the thread, its title and its model binding, and bumps its last-edit date. The messages are gone for good. Unlike `delete` this does not verify that the thread exists, so clearing an unknown `threadId` reports success rather than 404. The answer only confirms the write.
         * @summary Clear messages
         * @param {string} aiThreadsClearMessagesRequest The ID of the thread to empty, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/
         */
        aiThreadsClearMessages: async (aiThreadsClearMessagesRequest: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsClearMessagesRequest' is not null or undefined
            assertParamExists('aiThreadsClearMessages', 'aiThreadsClearMessagesRequest', aiThreadsClearMessagesRequest)

            const localVarPath = `/api/2.0/ai/threads/clear-messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsClearMessagesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a chat thread with a title supplied by the caller and returns it. A scoped thread requires that `entityId` names a room the caller can open, and a model has to resolve for the scope - an explicit `profileId`, or the room\'s `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. In an agent room the agent\'s own assignment overrides any `profileId` sent with the request, so a thread there always starts on the agent\'s model. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.
         * @summary Create a chat thread
         * @param {AiThreadsCreateRequest} aiThreadsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-create/
         */
        aiThreadsCreate: async (aiThreadsCreateRequest: AiThreadsCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsCreateRequest' is not null or undefined
            assertParamExists('aiThreadsCreate', 'aiThreadsCreateRequest', aiThreadsCreateRequest)

            const localVarPath = `/api/2.0/ai/threads/create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a thread together with every message in it. The thread has to exist: unlike the other operations that take a `threadId`, this one checks first and answers 404 for an unknown or already-deleted thread rather than reporting success. The deletion is permanent and the messages cannot be recovered. To empty a thread but keep it, use `DELETE api/2.0/ai/threads/clear-messages`.
         * @summary Delete a chat thread
         * @param {string} aiThreadsDeleteRequest The ID of the thread to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/
         */
        aiThreadsDelete: async (aiThreadsDeleteRequest: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsDeleteRequest' is not null or undefined
            assertParamExists('aiThreadsDelete', 'aiThreadsDeleteRequest', aiThreadsDeleteRequest)

            const localVarPath = `/api/2.0/ai/threads/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsDeleteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes one message and leaves the rest of the thread untouched. `messageId` is required and may be sent either in the body or as a query parameter. An unknown ID is not reported: the call answers success without having deleted anything, so verify with `GET api/2.0/ai/threads/read-messages` when it matters. The deletion is permanent.
         * @summary Delete message
         * @param {string} aiThreadsDeleteMessageRequest The ID of the message to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/
         */
        aiThreadsDeleteMessage: async (aiThreadsDeleteMessageRequest: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsDeleteMessageRequest' is not null or undefined
            assertParamExists('aiThreadsDeleteMessage', 'aiThreadsDeleteMessageRequest', aiThreadsDeleteMessageRequest)

            const localVarPath = `/api/2.0/ai/threads/delete-message`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsDeleteMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns one thread by its ID, without its messages - read those with `GET api/2.0/ai/threads/read-messages`. `threadId` is required and an unknown one answers 404, so the result is never an empty body. The answer carries the thread\'s title, its model binding and its last-edit date. This is a read-only operation and does not bump that date.
         * @summary Get a chat thread
         * @param {string} threadId The chat thread identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-by-id/
         */
        aiThreadsGetById: async (threadId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            assertParamExists('aiThreadsGetById', 'threadId', threadId)

            const localVarPath = `/api/2.0/ai/threads/get-by-id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (threadId !== undefined) {
                localVarQueryParameter['threadId'] = threadId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns one message by its ID, wherever it sits, without needing the thread it belongs to. `messageId` is required. Unlike `GET api/2.0/ai/threads/get-by-id` an unknown ID is not reported as 404: the answer is an empty body with status 200, so a client has to treat a missing payload as no such message. Message IDs come from the thread history or from the answer of `POST api/2.0/ai/threads/append-user-message`.
         * @summary Get one chat message
         * @param {string} messageId The globally unique chat message identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsGetMessageById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-message-by-id/
         */
        aiThreadsGetMessageById: async (messageId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'messageId' is not null or undefined
            assertParamExists('aiThreadsGetMessageById', 'messageId', messageId)

            const localVarPath = `/api/2.0/ai/threads/get-message-by-id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (messageId !== undefined) {
                localVarQueryParameter['messageId'] = messageId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the threads of a scope, most recently edited first, and searches their titles case-insensitively when `query` is given. Every parameter is optional: omitting `entityId` lists the global scope, and omitting `count` lets the engine apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.
         * @summary List chat threads
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {number} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [query] The full-text query the thread list is filtered by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/
         */
        aiThreadsList: async (entityId?: string, count?: number, cursor?: string, query?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/threads/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Opens a chat thread and returns it with its history, or creates one whose title is generated from the first message supplied in the request. That first message is not persisted: follow up with `POST api/2.0/ai/threads/append-user-message` to store it, or start the round directly with `POST api/2.0/ai/ai/send-with-stream`. Unlike `create` this takes a whole resolved `profile` object rather than an ID, and a request without one answers 404 because no model could be bound. A supplied `entityId` has to be a room the caller can open; anything that is not an agent room folds to the global scope instead of being rejected.
         * @summary Open or create
         * @param {AiThreadsOpenOrCreateRequest} aiThreadsOpenOrCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsOpenOrCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-open-or-create/
         */
        aiThreadsOpenOrCreate: async (aiThreadsOpenOrCreateRequest: AiThreadsOpenOrCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsOpenOrCreateRequest' is not null or undefined
            assertParamExists('aiThreadsOpenOrCreate', 'aiThreadsOpenOrCreateRequest', aiThreadsOpenOrCreateRequest)

            const localVarPath = `/api/2.0/ai/threads/open-or-create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsOpenOrCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reads the messages of one thread, oldest first, with the same string-encoded JSON cursor as the thread list. `direction` turns the read around, and only the exact value `desc` does so - anything else, including a misspelling, reads forward. Omitting `threadId` is not an error: the call answers 200 with an empty list, so an empty result does not distinguish a thread with no messages from a request that forgot the ID. A malformed cursor is ignored and the read starts from the beginning.
         * @summary Read messages
         * @param {string} threadId The chat thread identifier.
         * @param {number} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [direction] The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/
         */
        aiThreadsReadMessages: async (threadId: string, count?: number, cursor?: string, direction?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            assertParamExists('aiThreadsReadMessages', 'threadId', threadId)

            const localVarPath = `/api/2.0/ai/threads/read-messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (threadId !== undefined) {
                localVarQueryParameter['threadId'] = threadId;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Asks the model to produce a title from the thread\'s first user message, stores it, and returns the new title. Both `threadId` and a resolved `profile` object are required; a thread with no user message yet has nothing to title and fails. This costs a model call, unlike `POST api/2.0/ai/threads/rename`, which just stores the string it is given. An `entityMeta` sent with the request is only read for its `entityId` hint - the source itself is resolved server-side under the caller\'s credentials, so a client cannot attribute the call to somebody else\'s room.
         * @summary Regenerate title
         * @param {AiThreadsRegenerateTitleRequest} aiThreadsRegenerateTitleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-regenerate-title/
         */
        aiThreadsRegenerateTitle: async (aiThreadsRegenerateTitleRequest: AiThreadsRegenerateTitleRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsRegenerateTitleRequest' is not null or undefined
            assertParamExists('aiThreadsRegenerateTitle', 'aiThreadsRegenerateTitleRequest', aiThreadsRegenerateTitleRequest)

            const localVarPath = `/api/2.0/ai/threads/regenerate-title`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsRegenerateTitleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces a thread\'s title with the one supplied and bumps its last-edit date. Both `threadId` and a title with at least one non-whitespace character are required - a blank title is rejected rather than silently stored, so a thread cannot end up nameless. The answer only confirms the write. To have the model produce a title instead of supplying one, use `POST api/2.0/ai/threads/regenerate-title`.
         * @summary Rename a chat thread
         * @param {AiThreadsRenameRequest} aiThreadsRenameRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsRename operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-rename/
         */
        aiThreadsRename: async (aiThreadsRenameRequest: AiThreadsRenameRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsRenameRequest' is not null or undefined
            assertParamExists('aiThreadsRename', 'aiThreadsRenameRequest', aiThreadsRenameRequest)

            const localVarPath = `/api/2.0/ai/threads/rename`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsRenameRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Bumps a thread\'s last-edit date without adding a message, which resurfaces it in the list. Passing `profileId` also rebinds the thread to another model, so this is the operation to call when a model switch alone should count as activity. Nothing else about the thread changes and the answer only confirms the write. It is idempotent: repeating it simply moves the date forward again.
         * @summary Bump a thread\'s activity
         * @param {AiThreadsTouchRequest} aiThreadsTouchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsTouch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-touch/
         */
        aiThreadsTouch: async (aiThreadsTouchRequest: AiThreadsTouchRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsTouchRequest' is not null or undefined
            assertParamExists('aiThreadsTouch', 'aiThreadsTouchRequest', aiThreadsTouchRequest)

            const localVarPath = `/api/2.0/ai/threads/touch`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsTouchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the content of one stored message, which is how the edit and regenerate flows change a message outside the streaming lifecycle. The whole message is overwritten by the one supplied rather than merged, so send a complete object. Neither the ID nor the payload is validated here, so a malformed request surfaces as an error relayed from storage rather than as a 400. The answer only confirms the write.
         * @summary Update message
         * @param {AiThreadsUpdateMessageRequest} aiThreadsUpdateMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsUpdateMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-update-message/
         */
        aiThreadsUpdateMessage: async (aiThreadsUpdateMessageRequest: AiThreadsUpdateMessageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiThreadsUpdateMessageRequest' is not null or undefined
            assertParamExists('aiThreadsUpdateMessage', 'aiThreadsUpdateMessageRequest', aiThreadsUpdateMessageRequest)

            const localVarPath = `/api/2.0/ai/threads/update-message`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiThreadsUpdateMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ThreadsApi - functional programming interface
 * @export
 */
export const ThreadsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThreadsApiAxiosParamCreator(configuration)
    return {
        /**
         * Stores a user message in a thread and bumps its last-edit date so the thread resurfaces at the top of the list. The per-kind attachment cap of the composer is enforced here as well, so a direct API call cannot exceed what the UI allows. Passing `profileId` rebinds the thread to another model, which is how a mid-conversation model switch is recorded. The answer carries the new message\'s ID; the message is stored as sent and no reply is generated - run a round with `POST api/2.0/ai/ai/send-with-stream` for that.
         * @summary Append user message
         * @param {AiThreadsAppendUserMessageRequest} aiThreadsAppendUserMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-append-user-message/
         */
        async aiThreadsAppendUserMessage(aiThreadsAppendUserMessageRequest: AiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadsAppendUserMessage200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsAppendUserMessage(aiThreadsAppendUserMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsAppendUserMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes every message of a thread while keeping the thread, its title and its model binding, and bumps its last-edit date. The messages are gone for good. Unlike `delete` this does not verify that the thread exists, so clearing an unknown `threadId` reports success rather than 404. The answer only confirms the write.
         * @summary Clear messages
         * @param {string} aiThreadsClearMessagesRequest The ID of the thread to empty, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/
         */
        async aiThreadsClearMessages(aiThreadsClearMessagesRequest: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsClearMessages(aiThreadsClearMessagesRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsClearMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a chat thread with a title supplied by the caller and returns it. A scoped thread requires that `entityId` names a room the caller can open, and a model has to resolve for the scope - an explicit `profileId`, or the room\'s `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. In an agent room the agent\'s own assignment overrides any `profileId` sent with the request, so a thread there always starts on the agent\'s model. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.
         * @summary Create a chat thread
         * @param {AiThreadsCreateRequest} aiThreadsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-create/
         */
        async aiThreadsCreate(aiThreadsCreateRequest: AiThreadsCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThread>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsCreate(aiThreadsCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a thread together with every message in it. The thread has to exist: unlike the other operations that take a `threadId`, this one checks first and answers 404 for an unknown or already-deleted thread rather than reporting success. The deletion is permanent and the messages cannot be recovered. To empty a thread but keep it, use `DELETE api/2.0/ai/threads/clear-messages`.
         * @summary Delete a chat thread
         * @param {string} aiThreadsDeleteRequest The ID of the thread to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/
         */
        async aiThreadsDelete(aiThreadsDeleteRequest: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsDelete(aiThreadsDeleteRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes one message and leaves the rest of the thread untouched. `messageId` is required and may be sent either in the body or as a query parameter. An unknown ID is not reported: the call answers success without having deleted anything, so verify with `GET api/2.0/ai/threads/read-messages` when it matters. The deletion is permanent.
         * @summary Delete message
         * @param {string} aiThreadsDeleteMessageRequest The ID of the message to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/
         */
        async aiThreadsDeleteMessage(aiThreadsDeleteMessageRequest: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsDeleteMessage(aiThreadsDeleteMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsDeleteMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one thread by its ID, without its messages - read those with `GET api/2.0/ai/threads/read-messages`. `threadId` is required and an unknown one answers 404, so the result is never an empty body. The answer carries the thread\'s title, its model binding and its last-edit date. This is a read-only operation and does not bump that date.
         * @summary Get a chat thread
         * @param {string} threadId The chat thread identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-by-id/
         */
        async aiThreadsGetById(threadId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThread>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsGetById(threadId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsGetById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one message by its ID, wherever it sits, without needing the thread it belongs to. `messageId` is required. Unlike `GET api/2.0/ai/threads/get-by-id` an unknown ID is not reported as 404: the answer is an empty body with status 200, so a client has to treat a missing payload as no such message. Message IDs come from the thread history or from the answer of `POST api/2.0/ai/threads/append-user-message`.
         * @summary Get one chat message
         * @param {string} messageId The globally unique chat message identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsGetMessageById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-message-by-id/
         */
        async aiThreadsGetMessageById(messageId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsGetMessageById(messageId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsGetMessageById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the threads of a scope, most recently edited first, and searches their titles case-insensitively when `query` is given. Every parameter is optional: omitting `entityId` lists the global scope, and omitting `count` lets the engine apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.
         * @summary List chat threads
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {number} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [query] The full-text query the thread list is filtered by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/
         */
        async aiThreadsList(entityId?: string, count?: number, cursor?: string, query?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiThread>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsList(entityId, count, cursor, query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Opens a chat thread and returns it with its history, or creates one whose title is generated from the first message supplied in the request. That first message is not persisted: follow up with `POST api/2.0/ai/threads/append-user-message` to store it, or start the round directly with `POST api/2.0/ai/ai/send-with-stream`. Unlike `create` this takes a whole resolved `profile` object rather than an ID, and a request without one answers 404 because no model could be bound. A supplied `entityId` has to be a room the caller can open; anything that is not an agent room folds to the global scope instead of being rejected.
         * @summary Open or create
         * @param {AiThreadsOpenOrCreateRequest} aiThreadsOpenOrCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsOpenOrCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-open-or-create/
         */
        async aiThreadsOpenOrCreate(aiThreadsOpenOrCreateRequest: AiThreadsOpenOrCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiOpenOrCreateResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsOpenOrCreate(aiThreadsOpenOrCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsOpenOrCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reads the messages of one thread, oldest first, with the same string-encoded JSON cursor as the thread list. `direction` turns the read around, and only the exact value `desc` does so - anything else, including a misspelling, reads forward. Omitting `threadId` is not an error: the call answers 200 with an empty list, so an empty result does not distinguish a thread with no messages from a request that forgot the ID. A malformed cursor is ignored and the read starts from the beginning.
         * @summary Read messages
         * @param {string} threadId The chat thread identifier.
         * @param {number} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [direction] The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/
         */
        async aiThreadsReadMessages(threadId: string, count?: number, cursor?: string, direction?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiThreadMessageLike>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsReadMessages(threadId, count, cursor, direction, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsReadMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Asks the model to produce a title from the thread\'s first user message, stores it, and returns the new title. Both `threadId` and a resolved `profile` object are required; a thread with no user message yet has nothing to title and fails. This costs a model call, unlike `POST api/2.0/ai/threads/rename`, which just stores the string it is given. An `entityMeta` sent with the request is only read for its `entityId` hint - the source itself is resolved server-side under the caller\'s credentials, so a client cannot attribute the call to somebody else\'s room.
         * @summary Regenerate title
         * @param {AiThreadsRegenerateTitleRequest} aiThreadsRegenerateTitleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-regenerate-title/
         */
        async aiThreadsRegenerateTitle(aiThreadsRegenerateTitleRequest: AiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadsRegenerateTitle200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsRegenerateTitle(aiThreadsRegenerateTitleRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsRegenerateTitle']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces a thread\'s title with the one supplied and bumps its last-edit date. Both `threadId` and a title with at least one non-whitespace character are required - a blank title is rejected rather than silently stored, so a thread cannot end up nameless. The answer only confirms the write. To have the model produce a title instead of supplying one, use `POST api/2.0/ai/threads/regenerate-title`.
         * @summary Rename a chat thread
         * @param {AiThreadsRenameRequest} aiThreadsRenameRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsRename operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-rename/
         */
        async aiThreadsRename(aiThreadsRenameRequest: AiThreadsRenameRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsRename(aiThreadsRenameRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsRename']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Bumps a thread\'s last-edit date without adding a message, which resurfaces it in the list. Passing `profileId` also rebinds the thread to another model, so this is the operation to call when a model switch alone should count as activity. Nothing else about the thread changes and the answer only confirms the write. It is idempotent: repeating it simply moves the date forward again.
         * @summary Bump a thread\'s activity
         * @param {AiThreadsTouchRequest} aiThreadsTouchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsTouch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-touch/
         */
        async aiThreadsTouch(aiThreadsTouchRequest: AiThreadsTouchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsTouch(aiThreadsTouchRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsTouch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the content of one stored message, which is how the edit and regenerate flows change a message outside the streaming lifecycle. The whole message is overwritten by the one supplied rather than merged, so send a complete object. Neither the ID nor the payload is validated here, so a malformed request surfaces as an error relayed from storage rather than as a 400. The answer only confirms the write.
         * @summary Update message
         * @param {AiThreadsUpdateMessageRequest} aiThreadsUpdateMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsUpdateMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-update-message/
         */
        async aiThreadsUpdateMessage(aiThreadsUpdateMessageRequest: AiThreadsUpdateMessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsUpdateMessage(aiThreadsUpdateMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsUpdateMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ThreadsApi - factory interface
 * @export
 */
export const ThreadsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThreadsApiFp(configuration)
    return {
        /**
         * Stores a user message in a thread and bumps its last-edit date so the thread resurfaces at the top of the list. The per-kind attachment cap of the composer is enforced here as well, so a direct API call cannot exceed what the UI allows. Passing `profileId` rebinds the thread to another model, which is how a mid-conversation model switch is recorded. The answer carries the new message\'s ID; the message is stored as sent and no reply is generated - run a round with `POST api/2.0/ai/ai/send-with-stream` for that.
         * @summary Append user message
         * @param {ThreadsApiAiThreadsAppendUserMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-append-user-message/
         * @throws {RequiredError}
         */
        aiThreadsAppendUserMessage(requestParameters: ThreadsApiAiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadsAppendUserMessage200Response> {
            return localVarFp.aiThreadsAppendUserMessage(requestParameters.aiThreadsAppendUserMessageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes every message of a thread while keeping the thread, its title and its model binding, and bumps its last-edit date. The messages are gone for good. Unlike `delete` this does not verify that the thread exists, so clearing an unknown `threadId` reports success rather than 404. The answer only confirms the write.
         * @summary Clear messages
         * @param {ThreadsApiAiThreadsClearMessagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/
         * @throws {RequiredError}
         */
        aiThreadsClearMessages(requestParameters: ThreadsApiAiThreadsClearMessagesRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsClearMessages(requestParameters.aiThreadsClearMessagesRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a chat thread with a title supplied by the caller and returns it. A scoped thread requires that `entityId` names a room the caller can open, and a model has to resolve for the scope - an explicit `profileId`, or the room\'s `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. In an agent room the agent\'s own assignment overrides any `profileId` sent with the request, so a thread there always starts on the agent\'s model. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.
         * @summary Create a chat thread
         * @param {ThreadsApiAiThreadsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-create/
         * @throws {RequiredError}
         */
        aiThreadsCreate(requestParameters: ThreadsApiAiThreadsCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThread> {
            return localVarFp.aiThreadsCreate(requestParameters.aiThreadsCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a thread together with every message in it. The thread has to exist: unlike the other operations that take a `threadId`, this one checks first and answers 404 for an unknown or already-deleted thread rather than reporting success. The deletion is permanent and the messages cannot be recovered. To empty a thread but keep it, use `DELETE api/2.0/ai/threads/clear-messages`.
         * @summary Delete a chat thread
         * @param {ThreadsApiAiThreadsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/
         * @throws {RequiredError}
         */
        aiThreadsDelete(requestParameters: ThreadsApiAiThreadsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsDelete(requestParameters.aiThreadsDeleteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes one message and leaves the rest of the thread untouched. `messageId` is required and may be sent either in the body or as a query parameter. An unknown ID is not reported: the call answers success without having deleted anything, so verify with `GET api/2.0/ai/threads/read-messages` when it matters. The deletion is permanent.
         * @summary Delete message
         * @param {ThreadsApiAiThreadsDeleteMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/
         * @throws {RequiredError}
         */
        aiThreadsDeleteMessage(requestParameters: ThreadsApiAiThreadsDeleteMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsDeleteMessage(requestParameters.aiThreadsDeleteMessageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one thread by its ID, without its messages - read those with `GET api/2.0/ai/threads/read-messages`. `threadId` is required and an unknown one answers 404, so the result is never an empty body. The answer carries the thread\'s title, its model binding and its last-edit date. This is a read-only operation and does not bump that date.
         * @summary Get a chat thread
         * @param {ThreadsApiAiThreadsGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-by-id/
         * @throws {RequiredError}
         */
        aiThreadsGetById(requestParameters: ThreadsApiAiThreadsGetByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThread> {
            return localVarFp.aiThreadsGetById(requestParameters.threadId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one message by its ID, wherever it sits, without needing the thread it belongs to. `messageId` is required. Unlike `GET api/2.0/ai/threads/get-by-id` an unknown ID is not reported as 404: the answer is an empty body with status 200, so a client has to treat a missing payload as no such message. Message IDs come from the thread history or from the answer of `POST api/2.0/ai/threads/append-user-message`.
         * @summary Get one chat message
         * @param {ThreadsApiAiThreadsGetMessageByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsGetMessageById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-message-by-id/
         * @throws {RequiredError}
         */
        aiThreadsGetMessageById(requestParameters: ThreadsApiAiThreadsGetMessageByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadMessageLike> {
            return localVarFp.aiThreadsGetMessageById(requestParameters.messageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the threads of a scope, most recently edited first, and searches their titles case-insensitively when `query` is given. Every parameter is optional: omitting `entityId` lists the global scope, and omitting `count` lets the engine apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.
         * @summary List chat threads
         * @param {ThreadsApiAiThreadsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/
         * @throws {RequiredError}
         */
        aiThreadsList(requestParameters: ThreadsApiAiThreadsListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiThread>> {
            return localVarFp.aiThreadsList(requestParameters.entityId, requestParameters.count, requestParameters.cursor, requestParameters.query, options).then((request) => request(axios, basePath));
        },
        /**
         * Opens a chat thread and returns it with its history, or creates one whose title is generated from the first message supplied in the request. That first message is not persisted: follow up with `POST api/2.0/ai/threads/append-user-message` to store it, or start the round directly with `POST api/2.0/ai/ai/send-with-stream`. Unlike `create` this takes a whole resolved `profile` object rather than an ID, and a request without one answers 404 because no model could be bound. A supplied `entityId` has to be a room the caller can open; anything that is not an agent room folds to the global scope instead of being rejected.
         * @summary Open or create
         * @param {ThreadsApiAiThreadsOpenOrCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsOpenOrCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-open-or-create/
         * @throws {RequiredError}
         */
        aiThreadsOpenOrCreate(requestParameters: ThreadsApiAiThreadsOpenOrCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiOpenOrCreateResult> {
            return localVarFp.aiThreadsOpenOrCreate(requestParameters.aiThreadsOpenOrCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Reads the messages of one thread, oldest first, with the same string-encoded JSON cursor as the thread list. `direction` turns the read around, and only the exact value `desc` does so - anything else, including a misspelling, reads forward. Omitting `threadId` is not an error: the call answers 200 with an empty list, so an empty result does not distinguish a thread with no messages from a request that forgot the ID. A malformed cursor is ignored and the read starts from the beginning.
         * @summary Read messages
         * @param {ThreadsApiAiThreadsReadMessagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/
         * @throws {RequiredError}
         */
        aiThreadsReadMessages(requestParameters: ThreadsApiAiThreadsReadMessagesRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiThreadMessageLike>> {
            return localVarFp.aiThreadsReadMessages(requestParameters.threadId, requestParameters.count, requestParameters.cursor, requestParameters.direction, options).then((request) => request(axios, basePath));
        },
        /**
         * Asks the model to produce a title from the thread\'s first user message, stores it, and returns the new title. Both `threadId` and a resolved `profile` object are required; a thread with no user message yet has nothing to title and fails. This costs a model call, unlike `POST api/2.0/ai/threads/rename`, which just stores the string it is given. An `entityMeta` sent with the request is only read for its `entityId` hint - the source itself is resolved server-side under the caller\'s credentials, so a client cannot attribute the call to somebody else\'s room.
         * @summary Regenerate title
         * @param {ThreadsApiAiThreadsRegenerateTitleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-regenerate-title/
         * @throws {RequiredError}
         */
        aiThreadsRegenerateTitle(requestParameters: ThreadsApiAiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadsRegenerateTitle200Response> {
            return localVarFp.aiThreadsRegenerateTitle(requestParameters.aiThreadsRegenerateTitleRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces a thread\'s title with the one supplied and bumps its last-edit date. Both `threadId` and a title with at least one non-whitespace character are required - a blank title is rejected rather than silently stored, so a thread cannot end up nameless. The answer only confirms the write. To have the model produce a title instead of supplying one, use `POST api/2.0/ai/threads/regenerate-title`.
         * @summary Rename a chat thread
         * @param {ThreadsApiAiThreadsRenameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsRename operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-rename/
         * @throws {RequiredError}
         */
        aiThreadsRename(requestParameters: ThreadsApiAiThreadsRenameRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsRename(requestParameters.aiThreadsRenameRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Bumps a thread\'s last-edit date without adding a message, which resurfaces it in the list. Passing `profileId` also rebinds the thread to another model, so this is the operation to call when a model switch alone should count as activity. Nothing else about the thread changes and the answer only confirms the write. It is idempotent: repeating it simply moves the date forward again.
         * @summary Bump a thread\'s activity
         * @param {ThreadsApiAiThreadsTouchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsTouch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-touch/
         * @throws {RequiredError}
         */
        aiThreadsTouch(requestParameters: ThreadsApiAiThreadsTouchRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsTouch(requestParameters.aiThreadsTouchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the content of one stored message, which is how the edit and regenerate flows change a message outside the streaming lifecycle. The whole message is overwritten by the one supplied rather than merged, so send a complete object. Neither the ID nor the payload is validated here, so a malformed request surfaces as an error relayed from storage rather than as a 400. The answer only confirms the write.
         * @summary Update message
         * @param {ThreadsApiAiThreadsUpdateMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsUpdateMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-update-message/
         * @throws {RequiredError}
         */
        aiThreadsUpdateMessage(requestParameters: ThreadsApiAiThreadsUpdateMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsUpdateMessage(requestParameters.aiThreadsUpdateMessageRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiThreadsAppendUserMessage operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsAppendUserMessageRequest
 */
export interface ThreadsApiAiThreadsAppendUserMessageRequest {
    /**
     * 
     * @type {AiThreadsAppendUserMessageRequest}
     * @memberof ThreadsApiAiThreadsAppendUserMessage
     */
    readonly aiThreadsAppendUserMessageRequest: AiThreadsAppendUserMessageRequest
}

/**
 * Request parameters for aiThreadsClearMessages operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsClearMessagesRequest
 */
export interface ThreadsApiAiThreadsClearMessagesRequest {
    /**
     * The ID of the thread to empty, as a bare JSON string.
     * @type {string}
     * @memberof ThreadsApiAiThreadsClearMessages
     */
    readonly aiThreadsClearMessagesRequest: string
}

/**
 * Request parameters for aiThreadsCreate operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsCreateRequest
 */
export interface ThreadsApiAiThreadsCreateRequest {
    /**
     * 
     * @type {AiThreadsCreateRequest}
     * @memberof ThreadsApiAiThreadsCreate
     */
    readonly aiThreadsCreateRequest: AiThreadsCreateRequest
}

/**
 * Request parameters for aiThreadsDelete operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsDeleteRequest
 */
export interface ThreadsApiAiThreadsDeleteRequest {
    /**
     * The ID of the thread to delete, as a bare JSON string.
     * @type {string}
     * @memberof ThreadsApiAiThreadsDelete
     */
    readonly aiThreadsDeleteRequest: string
}

/**
 * Request parameters for aiThreadsDeleteMessage operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsDeleteMessageRequest
 */
export interface ThreadsApiAiThreadsDeleteMessageRequest {
    /**
     * The ID of the message to delete, as a bare JSON string.
     * @type {string}
     * @memberof ThreadsApiAiThreadsDeleteMessage
     */
    readonly aiThreadsDeleteMessageRequest: string
}

/**
 * Request parameters for aiThreadsGetById operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsGetByIdRequest
 */
export interface ThreadsApiAiThreadsGetByIdRequest {
    /**
     * The chat thread identifier.
     * @type {string}
     * @memberof ThreadsApiAiThreadsGetById
     */
    readonly threadId: string
}

/**
 * Request parameters for aiThreadsGetMessageById operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsGetMessageByIdRequest
 */
export interface ThreadsApiAiThreadsGetMessageByIdRequest {
    /**
     * The globally unique chat message identifier.
     * @type {string}
     * @memberof ThreadsApiAiThreadsGetMessageById
     */
    readonly messageId: string
}

/**
 * Request parameters for aiThreadsList operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsListRequest
 */
export interface ThreadsApiAiThreadsListRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ThreadsApiAiThreadsList
     */
    readonly entityId?: string

    /**
     * The maximum number of items to return in one page.
     * @type {number}
     * @memberof ThreadsApiAiThreadsList
     */
    readonly count?: number

    /**
     * The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
     * @type {string}
     * @memberof ThreadsApiAiThreadsList
     */
    readonly cursor?: string

    /**
     * The full-text query the thread list is filtered by.
     * @type {string}
     * @memberof ThreadsApiAiThreadsList
     */
    readonly query?: string
}

/**
 * Request parameters for aiThreadsOpenOrCreate operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsOpenOrCreateRequest
 */
export interface ThreadsApiAiThreadsOpenOrCreateRequest {
    /**
     * 
     * @type {AiThreadsOpenOrCreateRequest}
     * @memberof ThreadsApiAiThreadsOpenOrCreate
     */
    readonly aiThreadsOpenOrCreateRequest: AiThreadsOpenOrCreateRequest
}

/**
 * Request parameters for aiThreadsReadMessages operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsReadMessagesRequest
 */
export interface ThreadsApiAiThreadsReadMessagesRequest {
    /**
     * The chat thread identifier.
     * @type {string}
     * @memberof ThreadsApiAiThreadsReadMessages
     */
    readonly threadId: string

    /**
     * The maximum number of items to return in one page.
     * @type {number}
     * @memberof ThreadsApiAiThreadsReadMessages
     */
    readonly count?: number

    /**
     * The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
     * @type {string}
     * @memberof ThreadsApiAiThreadsReadMessages
     */
    readonly cursor?: string

    /**
     * The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read.
     * @type {string}
     * @memberof ThreadsApiAiThreadsReadMessages
     */
    readonly direction?: string
}

/**
 * Request parameters for aiThreadsRegenerateTitle operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsRegenerateTitleRequest
 */
export interface ThreadsApiAiThreadsRegenerateTitleRequest {
    /**
     * 
     * @type {AiThreadsRegenerateTitleRequest}
     * @memberof ThreadsApiAiThreadsRegenerateTitle
     */
    readonly aiThreadsRegenerateTitleRequest: AiThreadsRegenerateTitleRequest
}

/**
 * Request parameters for aiThreadsRename operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsRenameRequest
 */
export interface ThreadsApiAiThreadsRenameRequest {
    /**
     * 
     * @type {AiThreadsRenameRequest}
     * @memberof ThreadsApiAiThreadsRename
     */
    readonly aiThreadsRenameRequest: AiThreadsRenameRequest
}

/**
 * Request parameters for aiThreadsTouch operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsTouchRequest
 */
export interface ThreadsApiAiThreadsTouchRequest {
    /**
     * 
     * @type {AiThreadsTouchRequest}
     * @memberof ThreadsApiAiThreadsTouch
     */
    readonly aiThreadsTouchRequest: AiThreadsTouchRequest
}

/**
 * Request parameters for aiThreadsUpdateMessage operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsUpdateMessageRequest
 */
export interface ThreadsApiAiThreadsUpdateMessageRequest {
    /**
     * 
     * @type {AiThreadsUpdateMessageRequest}
     * @memberof ThreadsApiAiThreadsUpdateMessage
     */
    readonly aiThreadsUpdateMessageRequest: AiThreadsUpdateMessageRequest
}

/**
 * ThreadsApi - object-oriented interface
 * @export
 * @class ThreadsApi
 * @extends {BaseAPI}
 */
export class ThreadsApi extends BaseAPI {
    /**
     * Stores a user message in a thread and bumps its last-edit date so the thread resurfaces at the top of the list. The per-kind attachment cap of the composer is enforced here as well, so a direct API call cannot exceed what the UI allows. Passing `profileId` rebinds the thread to another model, which is how a mid-conversation model switch is recorded. The answer carries the new message\'s ID; the message is stored as sent and no reply is generated - run a round with `POST api/2.0/ai/ai/send-with-stream` for that.
     * @summary Append user message
     * @param {AIThreadsApiAiThreadsAppendUserMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsAppendUserMessage(requestParameters: ThreadsApiAiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsAppendUserMessage(requestParameters.aiThreadsAppendUserMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes every message of a thread while keeping the thread, its title and its model binding, and bumps its last-edit date. The messages are gone for good. Unlike `delete` this does not verify that the thread exists, so clearing an unknown `threadId` reports success rather than 404. The answer only confirms the write.
     * @summary Clear messages
     * @param {AIThreadsApiAiThreadsClearMessagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsClearMessages(requestParameters: ThreadsApiAiThreadsClearMessagesRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsClearMessages(requestParameters.aiThreadsClearMessagesRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a chat thread with a title supplied by the caller and returns it. A scoped thread requires that `entityId` names a room the caller can open, and a model has to resolve for the scope - an explicit `profileId`, or the room\'s `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. In an agent room the agent\'s own assignment overrides any `profileId` sent with the request, so a thread there always starts on the agent\'s model. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.
     * @summary Create a chat thread
     * @param {AIThreadsApiAiThreadsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsCreate(requestParameters: ThreadsApiAiThreadsCreateRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsCreate(requestParameters.aiThreadsCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a thread together with every message in it. The thread has to exist: unlike the other operations that take a `threadId`, this one checks first and answers 404 for an unknown or already-deleted thread rather than reporting success. The deletion is permanent and the messages cannot be recovered. To empty a thread but keep it, use `DELETE api/2.0/ai/threads/clear-messages`.
     * @summary Delete a chat thread
     * @param {AIThreadsApiAiThreadsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsDelete(requestParameters: ThreadsApiAiThreadsDeleteRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsDelete(requestParameters.aiThreadsDeleteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes one message and leaves the rest of the thread untouched. `messageId` is required and may be sent either in the body or as a query parameter. An unknown ID is not reported: the call answers success without having deleted anything, so verify with `GET api/2.0/ai/threads/read-messages` when it matters. The deletion is permanent.
     * @summary Delete message
     * @param {AIThreadsApiAiThreadsDeleteMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsDeleteMessage(requestParameters: ThreadsApiAiThreadsDeleteMessageRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsDeleteMessage(requestParameters.aiThreadsDeleteMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one thread by its ID, without its messages - read those with `GET api/2.0/ai/threads/read-messages`. `threadId` is required and an unknown one answers 404, so the result is never an empty body. The answer carries the thread\'s title, its model binding and its last-edit date. This is a read-only operation and does not bump that date.
     * @summary Get a chat thread
     * @param {AIThreadsApiAiThreadsGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsGetById(requestParameters: ThreadsApiAiThreadsGetByIdRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsGetById(requestParameters.threadId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one message by its ID, wherever it sits, without needing the thread it belongs to. `messageId` is required. Unlike `GET api/2.0/ai/threads/get-by-id` an unknown ID is not reported as 404: the answer is an empty body with status 200, so a client has to treat a missing payload as no such message. Message IDs come from the thread history or from the answer of `POST api/2.0/ai/threads/append-user-message`.
     * @summary Get one chat message
     * @param {AIThreadsApiAiThreadsGetMessageByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsGetMessageById(requestParameters: ThreadsApiAiThreadsGetMessageByIdRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsGetMessageById(requestParameters.messageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the threads of a scope, most recently edited first, and searches their titles case-insensitively when `query` is given. Every parameter is optional: omitting `entityId` lists the global scope, and omitting `count` lets the engine apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.
     * @summary List chat threads
     * @param {AIThreadsApiAiThreadsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsList(requestParameters: ThreadsApiAiThreadsListRequest = {}, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsList(requestParameters.entityId, requestParameters.count, requestParameters.cursor, requestParameters.query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Opens a chat thread and returns it with its history, or creates one whose title is generated from the first message supplied in the request. That first message is not persisted: follow up with `POST api/2.0/ai/threads/append-user-message` to store it, or start the round directly with `POST api/2.0/ai/ai/send-with-stream`. Unlike `create` this takes a whole resolved `profile` object rather than an ID, and a request without one answers 404 because no model could be bound. A supplied `entityId` has to be a room the caller can open; anything that is not an agent room folds to the global scope instead of being rejected.
     * @summary Open or create
     * @param {AIThreadsApiAiThreadsOpenOrCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsOpenOrCreate(requestParameters: ThreadsApiAiThreadsOpenOrCreateRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsOpenOrCreate(requestParameters.aiThreadsOpenOrCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reads the messages of one thread, oldest first, with the same string-encoded JSON cursor as the thread list. `direction` turns the read around, and only the exact value `desc` does so - anything else, including a misspelling, reads forward. Omitting `threadId` is not an error: the call answers 200 with an empty list, so an empty result does not distinguish a thread with no messages from a request that forgot the ID. A malformed cursor is ignored and the read starts from the beginning.
     * @summary Read messages
     * @param {AIThreadsApiAiThreadsReadMessagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsReadMessages(requestParameters: ThreadsApiAiThreadsReadMessagesRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsReadMessages(requestParameters.threadId, requestParameters.count, requestParameters.cursor, requestParameters.direction, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Asks the model to produce a title from the thread\'s first user message, stores it, and returns the new title. Both `threadId` and a resolved `profile` object are required; a thread with no user message yet has nothing to title and fails. This costs a model call, unlike `POST api/2.0/ai/threads/rename`, which just stores the string it is given. An `entityMeta` sent with the request is only read for its `entityId` hint - the source itself is resolved server-side under the caller\'s credentials, so a client cannot attribute the call to somebody else\'s room.
     * @summary Regenerate title
     * @param {AIThreadsApiAiThreadsRegenerateTitleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsRegenerateTitle(requestParameters: ThreadsApiAiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsRegenerateTitle(requestParameters.aiThreadsRegenerateTitleRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces a thread\'s title with the one supplied and bumps its last-edit date. Both `threadId` and a title with at least one non-whitespace character are required - a blank title is rejected rather than silently stored, so a thread cannot end up nameless. The answer only confirms the write. To have the model produce a title instead of supplying one, use `POST api/2.0/ai/threads/regenerate-title`.
     * @summary Rename a chat thread
     * @param {AIThreadsApiAiThreadsRenameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsRename(requestParameters: ThreadsApiAiThreadsRenameRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsRename(requestParameters.aiThreadsRenameRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Bumps a thread\'s last-edit date without adding a message, which resurfaces it in the list. Passing `profileId` also rebinds the thread to another model, so this is the operation to call when a model switch alone should count as activity. Nothing else about the thread changes and the answer only confirms the write. It is idempotent: repeating it simply moves the date forward again.
     * @summary Bump a thread\'s activity
     * @param {AIThreadsApiAiThreadsTouchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsTouch(requestParameters: ThreadsApiAiThreadsTouchRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsTouch(requestParameters.aiThreadsTouchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the content of one stored message, which is how the edit and regenerate flows change a message outside the streaming lifecycle. The whole message is overwritten by the one supplied rather than merged, so send a complete object. Neither the ID nor the payload is validated here, so a malformed request surfaces as an error relayed from storage rather than as a 400. The answer only confirms the write.
     * @summary Update message
     * @param {AIThreadsApiAiThreadsUpdateMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsUpdateMessage(requestParameters: ThreadsApiAiThreadsUpdateMessageRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsUpdateMessage(requestParameters.aiThreadsUpdateMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

