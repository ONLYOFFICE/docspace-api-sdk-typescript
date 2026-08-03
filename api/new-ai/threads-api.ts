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
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiOpenOrCreateInput } from '../../models';
// @ts-ignore
import type { NewAiOpenOrCreateResult } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
// @ts-ignore
import type { NewAiThread } from '../../models';
// @ts-ignore
import type { NewAiThreadMessageLike } from '../../models';
// @ts-ignore
import type { NewAiThreadsAppendUserMessageRequest } from '../../models';
// @ts-ignore
import type { NewAiThreadsCreateRequest } from '../../models';
// @ts-ignore
import type { NewAiThreadsRegenerateTitleRequest } from '../../models';
// @ts-ignore
import type { NewAiThreadsRenameRequest } from '../../models';
// @ts-ignore
import type { NewAiThreadsTouchRequest } from '../../models';
// @ts-ignore
import type { NewAiThreadsUpdateMessageRequest } from '../../models';
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
         * 
         * @summary Append user message
         * @param {NewAiThreadsAppendUserMessageRequest} newAiThreadsAppendUserMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-append-user-message/
         */
        newAiThreadsAppendUserMessage: async (newAiThreadsAppendUserMessageRequest: NewAiThreadsAppendUserMessageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiThreadsAppendUserMessageRequest' is not null or undefined
            assertParamExists('newAiThreadsAppendUserMessage', 'newAiThreadsAppendUserMessageRequest', newAiThreadsAppendUserMessageRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiThreadsAppendUserMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Clear messages
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-clear-messages/
         */
        newAiThreadsClearMessages: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiThreadsClearMessages', 'body', body)

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
         * 
         * @summary Create
         * @param {NewAiThreadsCreateRequest} newAiThreadsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-create/
         */
        newAiThreadsCreate: async (newAiThreadsCreateRequest: NewAiThreadsCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiThreadsCreateRequest' is not null or undefined
            assertParamExists('newAiThreadsCreate', 'newAiThreadsCreateRequest', newAiThreadsCreateRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiThreadsCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete/
         */
        newAiThreadsDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiThreadsDelete', 'body', body)

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
         * 
         * @summary Delete message
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete-message/
         */
        newAiThreadsDeleteMessage: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiThreadsDeleteMessage', 'body', body)

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
         * 
         * @summary Get by id
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-by-id/
         */
        newAiThreadsGetById: async (threadId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            assertParamExists('newAiThreadsGetById', 'threadId', threadId)

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
         * 
         * @summary Get message by id
         * @param {string} messageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsGetMessageById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-message-by-id/
         */
        newAiThreadsGetMessageById: async (messageId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'messageId' is not null or undefined
            assertParamExists('newAiThreadsGetMessageById', 'messageId', messageId)

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
         * 
         * @summary List
         * @param {string} entityId 
         * @param {string} count 
         * @param {string} cursor 
         * @param {string} query 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-list/
         */
        newAiThreadsList: async (entityId: string, count: string, cursor: string, query: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiThreadsList', 'entityId', entityId)
            // verify required parameter 'count' is not null or undefined
            assertParamExists('newAiThreadsList', 'count', count)
            // verify required parameter 'cursor' is not null or undefined
            assertParamExists('newAiThreadsList', 'cursor', cursor)
            // verify required parameter 'query' is not null or undefined
            assertParamExists('newAiThreadsList', 'query', query)

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
         * 
         * @summary Open or create
         * @param {NewAiOpenOrCreateInput} newAiOpenOrCreateInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsOpenOrCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-open-or-create/
         */
        newAiThreadsOpenOrCreate: async (newAiOpenOrCreateInput: NewAiOpenOrCreateInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiOpenOrCreateInput' is not null or undefined
            assertParamExists('newAiThreadsOpenOrCreate', 'newAiOpenOrCreateInput', newAiOpenOrCreateInput)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiOpenOrCreateInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Read messages
         * @param {string} threadId 
         * @param {string} count 
         * @param {string} cursor 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-read-messages/
         */
        newAiThreadsReadMessages: async (threadId: string, count: string, cursor: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            assertParamExists('newAiThreadsReadMessages', 'threadId', threadId)
            // verify required parameter 'count' is not null or undefined
            assertParamExists('newAiThreadsReadMessages', 'count', count)
            // verify required parameter 'cursor' is not null or undefined
            assertParamExists('newAiThreadsReadMessages', 'cursor', cursor)

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
         * 
         * @summary Regenerate title
         * @param {NewAiThreadsRegenerateTitleRequest} newAiThreadsRegenerateTitleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-regenerate-title/
         */
        newAiThreadsRegenerateTitle: async (newAiThreadsRegenerateTitleRequest: NewAiThreadsRegenerateTitleRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiThreadsRegenerateTitleRequest' is not null or undefined
            assertParamExists('newAiThreadsRegenerateTitle', 'newAiThreadsRegenerateTitleRequest', newAiThreadsRegenerateTitleRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiThreadsRegenerateTitleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Rename
         * @param {NewAiThreadsRenameRequest} newAiThreadsRenameRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsRename operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-rename/
         */
        newAiThreadsRename: async (newAiThreadsRenameRequest: NewAiThreadsRenameRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiThreadsRenameRequest' is not null or undefined
            assertParamExists('newAiThreadsRename', 'newAiThreadsRenameRequest', newAiThreadsRenameRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiThreadsRenameRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Touch
         * @param {NewAiThreadsTouchRequest} newAiThreadsTouchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsTouch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-touch/
         */
        newAiThreadsTouch: async (newAiThreadsTouchRequest: NewAiThreadsTouchRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiThreadsTouchRequest' is not null or undefined
            assertParamExists('newAiThreadsTouch', 'newAiThreadsTouchRequest', newAiThreadsTouchRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiThreadsTouchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update message
         * @param {NewAiThreadsUpdateMessageRequest} newAiThreadsUpdateMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsUpdateMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-update-message/
         */
        newAiThreadsUpdateMessage: async (newAiThreadsUpdateMessageRequest: NewAiThreadsUpdateMessageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiThreadsUpdateMessageRequest' is not null or undefined
            assertParamExists('newAiThreadsUpdateMessage', 'newAiThreadsUpdateMessageRequest', newAiThreadsUpdateMessageRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiThreadsUpdateMessageRequest, localVarRequestOptions, configuration)

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
         * 
         * @summary Append user message
         * @param {NewAiThreadsAppendUserMessageRequest} newAiThreadsAppendUserMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-append-user-message/
         */
        async newAiThreadsAppendUserMessage(newAiThreadsAppendUserMessageRequest: NewAiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsAppendUserMessage(newAiThreadsAppendUserMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsAppendUserMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Clear messages
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-clear-messages/
         */
        async newAiThreadsClearMessages(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsClearMessages(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsClearMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Create
         * @param {NewAiThreadsCreateRequest} newAiThreadsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-create/
         */
        async newAiThreadsCreate(newAiThreadsCreateRequest: NewAiThreadsCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiThread>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsCreate(newAiThreadsCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete/
         */
        async newAiThreadsDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete message
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete-message/
         */
        async newAiThreadsDeleteMessage(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsDeleteMessage(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsDeleteMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get by id
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-by-id/
         */
        async newAiThreadsGetById(threadId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiThread>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsGetById(threadId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsGetById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get message by id
         * @param {string} messageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsGetMessageById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-message-by-id/
         */
        async newAiThreadsGetMessageById(messageId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiThreadMessageLike>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsGetMessageById(messageId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsGetMessageById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List
         * @param {string} entityId 
         * @param {string} count 
         * @param {string} cursor 
         * @param {string} query 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-list/
         */
        async newAiThreadsList(entityId: string, count: string, cursor: string, query: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiThread>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsList(entityId, count, cursor, query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Open or create
         * @param {NewAiOpenOrCreateInput} newAiOpenOrCreateInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsOpenOrCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-open-or-create/
         */
        async newAiThreadsOpenOrCreate(newAiOpenOrCreateInput: NewAiOpenOrCreateInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiOpenOrCreateResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsOpenOrCreate(newAiOpenOrCreateInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsOpenOrCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Read messages
         * @param {string} threadId 
         * @param {string} count 
         * @param {string} cursor 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-read-messages/
         */
        async newAiThreadsReadMessages(threadId: string, count: string, cursor: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiThreadMessageLike>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsReadMessages(threadId, count, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsReadMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Regenerate title
         * @param {NewAiThreadsRegenerateTitleRequest} newAiThreadsRegenerateTitleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-regenerate-title/
         */
        async newAiThreadsRegenerateTitle(newAiThreadsRegenerateTitleRequest: NewAiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsRegenerateTitle(newAiThreadsRegenerateTitleRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsRegenerateTitle']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Rename
         * @param {NewAiThreadsRenameRequest} newAiThreadsRenameRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsRename operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-rename/
         */
        async newAiThreadsRename(newAiThreadsRenameRequest: NewAiThreadsRenameRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsRename(newAiThreadsRenameRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsRename']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Touch
         * @param {NewAiThreadsTouchRequest} newAiThreadsTouchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsTouch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-touch/
         */
        async newAiThreadsTouch(newAiThreadsTouchRequest: NewAiThreadsTouchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsTouch(newAiThreadsTouchRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsTouch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update message
         * @param {NewAiThreadsUpdateMessageRequest} newAiThreadsUpdateMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiThreadsUpdateMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-update-message/
         */
        async newAiThreadsUpdateMessage(newAiThreadsUpdateMessageRequest: NewAiThreadsUpdateMessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiThreadsUpdateMessage(newAiThreadsUpdateMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThreadsApi.newAiThreadsUpdateMessage']?.[localVarOperationServerIndex]?.url;
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
         * 
         * @summary Append user message
         * @param {ThreadsApiNewAiThreadsAppendUserMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsAppendUserMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-append-user-message/
         * @throws {RequiredError}
         */
        newAiThreadsAppendUserMessage(requestParameters: ThreadsApiNewAiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiThreadMessageLike> {
            return localVarFp.newAiThreadsAppendUserMessage(requestParameters.newAiThreadsAppendUserMessageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Clear messages
         * @param {ThreadsApiNewAiThreadsClearMessagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsClearMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-clear-messages/
         * @throws {RequiredError}
         */
        newAiThreadsClearMessages(requestParameters: ThreadsApiNewAiThreadsClearMessagesRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiThreadsClearMessages(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create
         * @param {ThreadsApiNewAiThreadsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-create/
         * @throws {RequiredError}
         */
        newAiThreadsCreate(requestParameters: ThreadsApiNewAiThreadsCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiThread> {
            return localVarFp.newAiThreadsCreate(requestParameters.newAiThreadsCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete
         * @param {ThreadsApiNewAiThreadsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete/
         * @throws {RequiredError}
         */
        newAiThreadsDelete(requestParameters: ThreadsApiNewAiThreadsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiThreadsDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete message
         * @param {ThreadsApiNewAiThreadsDeleteMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsDeleteMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete-message/
         * @throws {RequiredError}
         */
        newAiThreadsDeleteMessage(requestParameters: ThreadsApiNewAiThreadsDeleteMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiThreadsDeleteMessage(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get by id
         * @param {ThreadsApiNewAiThreadsGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-by-id/
         * @throws {RequiredError}
         */
        newAiThreadsGetById(requestParameters: ThreadsApiNewAiThreadsGetByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiThread> {
            return localVarFp.newAiThreadsGetById(requestParameters.threadId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get message by id
         * @param {ThreadsApiNewAiThreadsGetMessageByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsGetMessageById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-message-by-id/
         * @throws {RequiredError}
         */
        newAiThreadsGetMessageById(requestParameters: ThreadsApiNewAiThreadsGetMessageByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiThreadMessageLike> {
            return localVarFp.newAiThreadsGetMessageById(requestParameters.messageId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List
         * @param {ThreadsApiNewAiThreadsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-list/
         * @throws {RequiredError}
         */
        newAiThreadsList(requestParameters: ThreadsApiNewAiThreadsListRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiThread>> {
            return localVarFp.newAiThreadsList(requestParameters.entityId, requestParameters.count, requestParameters.cursor, requestParameters.query, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Open or create
         * @param {ThreadsApiNewAiThreadsOpenOrCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsOpenOrCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-open-or-create/
         * @throws {RequiredError}
         */
        newAiThreadsOpenOrCreate(requestParameters: ThreadsApiNewAiThreadsOpenOrCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiOpenOrCreateResult> {
            return localVarFp.newAiThreadsOpenOrCreate(requestParameters.newAiOpenOrCreateInput, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Read messages
         * @param {ThreadsApiNewAiThreadsReadMessagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsReadMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-read-messages/
         * @throws {RequiredError}
         */
        newAiThreadsReadMessages(requestParameters: ThreadsApiNewAiThreadsReadMessagesRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiThreadMessageLike>> {
            return localVarFp.newAiThreadsReadMessages(requestParameters.threadId, requestParameters.count, requestParameters.cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Regenerate title
         * @param {ThreadsApiNewAiThreadsRegenerateTitleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsRegenerateTitle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-regenerate-title/
         * @throws {RequiredError}
         */
        newAiThreadsRegenerateTitle(requestParameters: ThreadsApiNewAiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.newAiThreadsRegenerateTitle(requestParameters.newAiThreadsRegenerateTitleRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Rename
         * @param {ThreadsApiNewAiThreadsRenameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsRename operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-rename/
         * @throws {RequiredError}
         */
        newAiThreadsRename(requestParameters: ThreadsApiNewAiThreadsRenameRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiThreadsRename(requestParameters.newAiThreadsRenameRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Touch
         * @param {ThreadsApiNewAiThreadsTouchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsTouch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-touch/
         * @throws {RequiredError}
         */
        newAiThreadsTouch(requestParameters: ThreadsApiNewAiThreadsTouchRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiThreadsTouch(requestParameters.newAiThreadsTouchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update message
         * @param {ThreadsApiNewAiThreadsUpdateMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiThreadsUpdateMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-update-message/
         * @throws {RequiredError}
         */
        newAiThreadsUpdateMessage(requestParameters: ThreadsApiNewAiThreadsUpdateMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiThreadsUpdateMessage(requestParameters.newAiThreadsUpdateMessageRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiThreadsAppendUserMessage operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsAppendUserMessageRequest
 */
export interface ThreadsApiNewAiThreadsAppendUserMessageRequest {
    /**
     * 
     * @type {NewAiThreadsAppendUserMessageRequest}
     * @memberof ThreadsApiNewAiThreadsAppendUserMessage
     */
    readonly newAiThreadsAppendUserMessageRequest: NewAiThreadsAppendUserMessageRequest
}

/**
 * Request parameters for newAiThreadsClearMessages operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsClearMessagesRequest
 */
export interface ThreadsApiNewAiThreadsClearMessagesRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsClearMessages
     */
    readonly body: string
}

/**
 * Request parameters for newAiThreadsCreate operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsCreateRequest
 */
export interface ThreadsApiNewAiThreadsCreateRequest {
    /**
     * 
     * @type {NewAiThreadsCreateRequest}
     * @memberof ThreadsApiNewAiThreadsCreate
     */
    readonly newAiThreadsCreateRequest: NewAiThreadsCreateRequest
}

/**
 * Request parameters for newAiThreadsDelete operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsDeleteRequest
 */
export interface ThreadsApiNewAiThreadsDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsDelete
     */
    readonly body: string
}

/**
 * Request parameters for newAiThreadsDeleteMessage operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsDeleteMessageRequest
 */
export interface ThreadsApiNewAiThreadsDeleteMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsDeleteMessage
     */
    readonly body: string
}

/**
 * Request parameters for newAiThreadsGetById operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsGetByIdRequest
 */
export interface ThreadsApiNewAiThreadsGetByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsGetById
     */
    readonly threadId: string
}

/**
 * Request parameters for newAiThreadsGetMessageById operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsGetMessageByIdRequest
 */
export interface ThreadsApiNewAiThreadsGetMessageByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsGetMessageById
     */
    readonly messageId: string
}

/**
 * Request parameters for newAiThreadsList operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsListRequest
 */
export interface ThreadsApiNewAiThreadsListRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsList
     */
    readonly entityId: string

    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsList
     */
    readonly count: string

    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsList
     */
    readonly cursor: string

    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsList
     */
    readonly query: string
}

/**
 * Request parameters for newAiThreadsOpenOrCreate operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsOpenOrCreateRequest
 */
export interface ThreadsApiNewAiThreadsOpenOrCreateRequest {
    /**
     * 
     * @type {NewAiOpenOrCreateInput}
     * @memberof ThreadsApiNewAiThreadsOpenOrCreate
     */
    readonly newAiOpenOrCreateInput: NewAiOpenOrCreateInput
}

/**
 * Request parameters for newAiThreadsReadMessages operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsReadMessagesRequest
 */
export interface ThreadsApiNewAiThreadsReadMessagesRequest {
    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsReadMessages
     */
    readonly threadId: string

    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsReadMessages
     */
    readonly count: string

    /**
     * 
     * @type {string}
     * @memberof ThreadsApiNewAiThreadsReadMessages
     */
    readonly cursor: string
}

/**
 * Request parameters for newAiThreadsRegenerateTitle operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsRegenerateTitleRequest
 */
export interface ThreadsApiNewAiThreadsRegenerateTitleRequest {
    /**
     * 
     * @type {NewAiThreadsRegenerateTitleRequest}
     * @memberof ThreadsApiNewAiThreadsRegenerateTitle
     */
    readonly newAiThreadsRegenerateTitleRequest: NewAiThreadsRegenerateTitleRequest
}

/**
 * Request parameters for newAiThreadsRename operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsRenameRequest
 */
export interface ThreadsApiNewAiThreadsRenameRequest {
    /**
     * 
     * @type {NewAiThreadsRenameRequest}
     * @memberof ThreadsApiNewAiThreadsRename
     */
    readonly newAiThreadsRenameRequest: NewAiThreadsRenameRequest
}

/**
 * Request parameters for newAiThreadsTouch operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsTouchRequest
 */
export interface ThreadsApiNewAiThreadsTouchRequest {
    /**
     * 
     * @type {NewAiThreadsTouchRequest}
     * @memberof ThreadsApiNewAiThreadsTouch
     */
    readonly newAiThreadsTouchRequest: NewAiThreadsTouchRequest
}

/**
 * Request parameters for newAiThreadsUpdateMessage operation in ThreadsApi.
 * @export
 * @interface ThreadsApiNewAiThreadsUpdateMessageRequest
 */
export interface ThreadsApiNewAiThreadsUpdateMessageRequest {
    /**
     * 
     * @type {NewAiThreadsUpdateMessageRequest}
     * @memberof ThreadsApiNewAiThreadsUpdateMessage
     */
    readonly newAiThreadsUpdateMessageRequest: NewAiThreadsUpdateMessageRequest
}

/**
 * ThreadsApi - object-oriented interface
 * @export
 * @class ThreadsApi
 * @extends {BaseAPI}
 */
export class ThreadsApi extends BaseAPI {
    /**
     * 
     * @summary Append user message
     * @param {NewAIThreadsApiNewAiThreadsAppendUserMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsAppendUserMessage(requestParameters: ThreadsApiNewAiThreadsAppendUserMessageRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsAppendUserMessage(requestParameters.newAiThreadsAppendUserMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Clear messages
     * @param {NewAIThreadsApiNewAiThreadsClearMessagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsClearMessages(requestParameters: ThreadsApiNewAiThreadsClearMessagesRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsClearMessages(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create
     * @param {NewAIThreadsApiNewAiThreadsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsCreate(requestParameters: ThreadsApiNewAiThreadsCreateRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsCreate(requestParameters.newAiThreadsCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete
     * @param {NewAIThreadsApiNewAiThreadsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsDelete(requestParameters: ThreadsApiNewAiThreadsDeleteRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete message
     * @param {NewAIThreadsApiNewAiThreadsDeleteMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsDeleteMessage(requestParameters: ThreadsApiNewAiThreadsDeleteMessageRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsDeleteMessage(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get by id
     * @param {NewAIThreadsApiNewAiThreadsGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsGetById(requestParameters: ThreadsApiNewAiThreadsGetByIdRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsGetById(requestParameters.threadId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get message by id
     * @param {NewAIThreadsApiNewAiThreadsGetMessageByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsGetMessageById(requestParameters: ThreadsApiNewAiThreadsGetMessageByIdRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsGetMessageById(requestParameters.messageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List
     * @param {NewAIThreadsApiNewAiThreadsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsList(requestParameters: ThreadsApiNewAiThreadsListRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsList(requestParameters.entityId, requestParameters.count, requestParameters.cursor, requestParameters.query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Open or create
     * @param {NewAIThreadsApiNewAiThreadsOpenOrCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsOpenOrCreate(requestParameters: ThreadsApiNewAiThreadsOpenOrCreateRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsOpenOrCreate(requestParameters.newAiOpenOrCreateInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Read messages
     * @param {NewAIThreadsApiNewAiThreadsReadMessagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsReadMessages(requestParameters: ThreadsApiNewAiThreadsReadMessagesRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsReadMessages(requestParameters.threadId, requestParameters.count, requestParameters.cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Regenerate title
     * @param {NewAIThreadsApiNewAiThreadsRegenerateTitleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsRegenerateTitle(requestParameters: ThreadsApiNewAiThreadsRegenerateTitleRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsRegenerateTitle(requestParameters.newAiThreadsRegenerateTitleRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Rename
     * @param {NewAIThreadsApiNewAiThreadsRenameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsRename(requestParameters: ThreadsApiNewAiThreadsRenameRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsRename(requestParameters.newAiThreadsRenameRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Touch
     * @param {NewAIThreadsApiNewAiThreadsTouchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsTouch(requestParameters: ThreadsApiNewAiThreadsTouchRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsTouch(requestParameters.newAiThreadsTouchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update message
     * @param {NewAIThreadsApiNewAiThreadsUpdateMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadsApi
     */
    public newAiThreadsUpdateMessage(requestParameters: ThreadsApiNewAiThreadsUpdateMessageRequest, options?: RawAxiosRequestConfig) {
        return ThreadsApiFp(this.configuration).newAiThreadsUpdateMessage(requestParameters.newAiThreadsUpdateMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

