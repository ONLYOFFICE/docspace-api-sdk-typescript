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
import type { AiThreadsAppendUserMessageRequest } from '../../models';
// @ts-ignore
import type { AiThreadsCreateRequest } from '../../models';
// @ts-ignore
import type { AiThreadsOpenOrCreateRequest } from '../../models';
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
         * Persists a user message in a thread and bumps the thread\'s last-edit date so it resurfaces in the sidebar. Optionally rebinds the thread to another profile when the model changed mid-conversation.
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
         * Drops every message of a thread while keeping the thread itself, and bumps its last-edit date.
         * @summary Clear messages
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/
         */
        aiThreadsClearMessages: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiThreadsClearMessages', 'body', body)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a chat thread with a caller-supplied title. Use `open-or-create` instead when the title should be generated from the first user message.
         * @summary Create
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
         * Deletes a chat thread together with its messages.
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/
         */
        aiThreadsDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiThreadsDelete', 'body', body)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes one chat message, leaving the rest of the thread untouched.
         * @summary Delete message
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/
         */
        aiThreadsDeleteMessage: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiThreadsDeleteMessage', 'body', body)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns one chat thread, or an empty result when the identifier is unknown.
         * @summary Get by id
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
         * Returns one chat message by its globally unique identifier.
         * @summary Get message by id
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
         * Lists the chat threads of the scope, most recently edited first. Supports cursor pagination and a server-side case-insensitive title search.
         * @summary List
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {string} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [query] The full-text query the thread list is filtered by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/
         */
        aiThreadsList: async (entityId?: string, count?: string, cursor?: string, query?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * Opens a chat thread and returns its history, or creates one with a title generated from the supplied first message. That first message is not persisted - the caller decides whether to follow up with `append-user-message`.
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
         * Reads the messages of a thread, with the same cursor pagination as the thread list.
         * @summary Read messages
         * @param {string} threadId The chat thread identifier.
         * @param {string} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [direction] The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/
         */
        aiThreadsReadMessages: async (threadId: string, count?: string, cursor?: string, direction?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Generates a fresh title from the thread\'s first user message and persists it. Fails when the thread has no user message yet.
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
         * Renames a chat thread and bumps its last-edit date so the new title shows up in the sidebar.
         * @summary Rename
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
         * Bumps a thread\'s last-edit date, and optionally rebinds it to another profile, when something other than a new message - a model switch, say - should resurface it.
         * @summary Touch
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
         * Replaces the content of a chat message - used by the edit and regenerate flows that change a message outside the streaming lifecycle.
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
         * Persists a user message in a thread and bumps the thread\'s last-edit date so it resurfaces in the sidebar. Optionally rebinds the thread to another profile when the model changed mid-conversation.
         * @summary Append user message
         * @param {AiThreadsAppendUserMessageRequest} aiThreadsAppendUserMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-append-user-message/
         */
        async aiThreadsAppendUserMessage(aiThreadsAppendUserMessageRequest: AiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsAppendUserMessage(aiThreadsAppendUserMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsAppendUserMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Drops every message of a thread while keeping the thread itself, and bumps its last-edit date.
         * @summary Clear messages
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/
         */
        async aiThreadsClearMessages(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsClearMessages(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsClearMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a chat thread with a caller-supplied title. Use `open-or-create` instead when the title should be generated from the first user message.
         * @summary Create
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
         * Deletes a chat thread together with its messages.
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/
         */
        async aiThreadsDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes one chat message, leaving the rest of the thread untouched.
         * @summary Delete message
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/
         */
        async aiThreadsDeleteMessage(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsDeleteMessage(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsDeleteMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one chat thread, or an empty result when the identifier is unknown.
         * @summary Get by id
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
         * Returns one chat message by its globally unique identifier.
         * @summary Get message by id
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
         * Lists the chat threads of the scope, most recently edited first. Supports cursor pagination and a server-side case-insensitive title search.
         * @summary List
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {string} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [query] The full-text query the thread list is filtered by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/
         */
        async aiThreadsList(entityId?: string, count?: string, cursor?: string, query?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiThread>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsList(entityId, count, cursor, query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Opens a chat thread and returns its history, or creates one with a title generated from the supplied first message. That first message is not persisted - the caller decides whether to follow up with `append-user-message`.
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
         * Reads the messages of a thread, with the same cursor pagination as the thread list.
         * @summary Read messages
         * @param {string} threadId The chat thread identifier.
         * @param {string} [count] The maximum number of items to return in one page.
         * @param {string} [cursor] The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page.
         * @param {string} [direction] The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/
         */
        async aiThreadsReadMessages(threadId: string, count?: string, cursor?: string, direction?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiThreadMessageLike>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsReadMessages(threadId, count, cursor, direction, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsReadMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Generates a fresh title from the thread\'s first user message and persists it. Fails when the thread has no user message yet.
         * @summary Regenerate title
         * @param {AiThreadsRegenerateTitleRequest} aiThreadsRegenerateTitleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-regenerate-title/
         */
        async aiThreadsRegenerateTitle(aiThreadsRegenerateTitleRequest: AiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiThreadsRegenerateTitle(aiThreadsRegenerateTitleRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.aiThreadsRegenerateTitle']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Renames a chat thread and bumps its last-edit date so the new title shows up in the sidebar.
         * @summary Rename
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
         * Bumps a thread\'s last-edit date, and optionally rebinds it to another profile, when something other than a new message - a model switch, say - should resurface it.
         * @summary Touch
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
         * Replaces the content of a chat message - used by the edit and regenerate flows that change a message outside the streaming lifecycle.
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
         * Persists a user message in a thread and bumps the thread\'s last-edit date so it resurfaces in the sidebar. Optionally rebinds the thread to another profile when the model changed mid-conversation.
         * @summary Append user message
         * @param {ThreadsApiAiThreadsAppendUserMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-append-user-message/
         * @throws {RequiredError}
         */
        aiThreadsAppendUserMessage(requestParameters: ThreadsApiAiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiThreadMessageLike> {
            return localVarFp.aiThreadsAppendUserMessage(requestParameters.aiThreadsAppendUserMessageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Drops every message of a thread while keeping the thread itself, and bumps its last-edit date.
         * @summary Clear messages
         * @param {ThreadsApiAiThreadsClearMessagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/
         * @throws {RequiredError}
         */
        aiThreadsClearMessages(requestParameters: ThreadsApiAiThreadsClearMessagesRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsClearMessages(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a chat thread with a caller-supplied title. Use `open-or-create` instead when the title should be generated from the first user message.
         * @summary Create
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
         * Deletes a chat thread together with its messages.
         * @summary Delete
         * @param {ThreadsApiAiThreadsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/
         * @throws {RequiredError}
         */
        aiThreadsDelete(requestParameters: ThreadsApiAiThreadsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes one chat message, leaving the rest of the thread untouched.
         * @summary Delete message
         * @param {ThreadsApiAiThreadsDeleteMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/
         * @throws {RequiredError}
         */
        aiThreadsDeleteMessage(requestParameters: ThreadsApiAiThreadsDeleteMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiThreadsDeleteMessage(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one chat thread, or an empty result when the identifier is unknown.
         * @summary Get by id
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
         * Returns one chat message by its globally unique identifier.
         * @summary Get message by id
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
         * Lists the chat threads of the scope, most recently edited first. Supports cursor pagination and a server-side case-insensitive title search.
         * @summary List
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
         * Opens a chat thread and returns its history, or creates one with a title generated from the supplied first message. That first message is not persisted - the caller decides whether to follow up with `append-user-message`.
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
         * Reads the messages of a thread, with the same cursor pagination as the thread list.
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
         * Generates a fresh title from the thread\'s first user message and persists it. Fails when the thread has no user message yet.
         * @summary Regenerate title
         * @param {ThreadsApiAiThreadsRegenerateTitleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-regenerate-title/
         * @throws {RequiredError}
         */
        aiThreadsRegenerateTitle(requestParameters: ThreadsApiAiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.aiThreadsRegenerateTitle(requestParameters.aiThreadsRegenerateTitleRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Renames a chat thread and bumps its last-edit date so the new title shows up in the sidebar.
         * @summary Rename
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
         * Bumps a thread\'s last-edit date, and optionally rebinds it to another profile, when something other than a new message - a model switch, say - should resurface it.
         * @summary Touch
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
         * Replaces the content of a chat message - used by the edit and regenerate flows that change a message outside the streaming lifecycle.
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
     * 
     * @type {string}
     * @memberof ThreadsApiAiThreadsClearMessages
     */
    readonly body: string
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
     * 
     * @type {string}
     * @memberof ThreadsApiAiThreadsDelete
     */
    readonly body: string
}

/**
 * Request parameters for aiThreadsDeleteMessage operation in ThreadsApi.
 * @export
 * @interface ThreadsApiAiThreadsDeleteMessageRequest
 */
export interface ThreadsApiAiThreadsDeleteMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiAiThreadsDeleteMessage
     */
    readonly body: string
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
     * @type {string}
     * @memberof ThreadsApiAiThreadsList
     */
    readonly count?: string

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
     * @type {string}
     * @memberof ThreadsApiAiThreadsReadMessages
     */
    readonly count?: string

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
     * Persists a user message in a thread and bumps the thread\'s last-edit date so it resurfaces in the sidebar. Optionally rebinds the thread to another profile when the model changed mid-conversation.
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
     * Drops every message of a thread while keeping the thread itself, and bumps its last-edit date.
     * @summary Clear messages
     * @param {AIThreadsApiAiThreadsClearMessagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsClearMessages(requestParameters: ThreadsApiAiThreadsClearMessagesRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsClearMessages(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a chat thread with a caller-supplied title. Use `open-or-create` instead when the title should be generated from the first user message.
     * @summary Create
     * @param {AIThreadsApiAiThreadsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsCreate(requestParameters: ThreadsApiAiThreadsCreateRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsCreate(requestParameters.aiThreadsCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a chat thread together with its messages.
     * @summary Delete
     * @param {AIThreadsApiAiThreadsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsDelete(requestParameters: ThreadsApiAiThreadsDeleteRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes one chat message, leaving the rest of the thread untouched.
     * @summary Delete message
     * @param {AIThreadsApiAiThreadsDeleteMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsDeleteMessage(requestParameters: ThreadsApiAiThreadsDeleteMessageRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsDeleteMessage(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one chat thread, or an empty result when the identifier is unknown.
     * @summary Get by id
     * @param {AIThreadsApiAiThreadsGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsGetById(requestParameters: ThreadsApiAiThreadsGetByIdRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsGetById(requestParameters.threadId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one chat message by its globally unique identifier.
     * @summary Get message by id
     * @param {AIThreadsApiAiThreadsGetMessageByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsGetMessageById(requestParameters: ThreadsApiAiThreadsGetMessageByIdRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsGetMessageById(requestParameters.messageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the chat threads of the scope, most recently edited first. Supports cursor pagination and a server-side case-insensitive title search.
     * @summary List
     * @param {AIThreadsApiAiThreadsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsList(requestParameters: ThreadsApiAiThreadsListRequest = {}, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsList(requestParameters.entityId, requestParameters.count, requestParameters.cursor, requestParameters.query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Opens a chat thread and returns its history, or creates one with a title generated from the supplied first message. That first message is not persisted - the caller decides whether to follow up with `append-user-message`.
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
     * Reads the messages of a thread, with the same cursor pagination as the thread list.
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
     * Generates a fresh title from the thread\'s first user message and persists it. Fails when the thread has no user message yet.
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
     * Renames a chat thread and bumps its last-edit date so the new title shows up in the sidebar.
     * @summary Rename
     * @param {AIThreadsApiAiThreadsRenameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsRename(requestParameters: ThreadsApiAiThreadsRenameRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsRename(requestParameters.aiThreadsRenameRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Bumps a thread\'s last-edit date, and optionally rebinds it to another profile, when something other than a new message - a model switch, say - should resurface it.
     * @summary Touch
     * @param {AIThreadsApiAiThreadsTouchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public aiThreadsTouch(requestParameters: ThreadsApiAiThreadsTouchRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).aiThreadsTouch(requestParameters.aiThreadsTouchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the content of a chat message - used by the edit and regenerate flows that change a message outside the streaming lifecycle.
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

