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
import type { ChatArrayWrapper } from '../../models';
// @ts-ignore
import type { ChatWrapper } from '../../models';
// @ts-ignore
import type { ContinueChatBody } from '../../models';
// @ts-ignore
import type { ExportChatRequestBodyInteger } from '../../models';
// @ts-ignore
import type { MessageArrayWrapper } from '../../models';
// @ts-ignore
import type { ModelArrayWrapper } from '../../models';
// @ts-ignore
import type { RenameChatBody } from '../../models';
// @ts-ignore
import type { SetUserChatSettingsRequestBody } from '../../models';
// @ts-ignore
import type { StartNewChatBody } from '../../models';
// @ts-ignore
import type { ToolDecisionRequestBody } from '../../models';
// @ts-ignore
import type { UserChatSettingsWrapper } from '../../models';
/**
 * ChatApi - axios parameter creator
 * @export
 */
export const ChatApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Appends a new user message to an existing chat session and streams the AI assistant\'s response.  The full conversation history of the chat is sent to the AI provider to maintain context.  The response is delivered as a Server-Sent Events (SSE) stream with periodic keep-alive pings.  File references can optionally be attached to provide additional context.
         * @summary Send a message to an existing AI chat
         * @param {string} chatId The unique identifier of the existing AI chat session to continue.
         * @param {ContinueChatBody} continueChatBody The message and optional file attachments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for continueChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-chat/
         */
        continueChat: async (chatId: string, continueChatBody: ContinueChatBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            assertParamExists('continueChat', 'chatId', chatId)
            // verify required parameter 'continueChatBody' is not null or undefined
            assertParamExists('continueChat', 'continueChatBody', continueChatBody)

            const localVarPath = `/api/2.0/ai/chats/{chatId}/messages`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(continueChatBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Permanently deletes an AI chat session along with all of its messages.  Only the chat owner can delete their own chat sessions. This action cannot be undone.
         * @summary Delete an AI chat
         * @param {string} chatId The unique identifier of the AI chat session to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-chat/
         */
        deleteChat: async (chatId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            assertParamExists('deleteChat', 'chatId', chatId)

            const localVarPath = `/api/2.0/ai/chats/{chatId}`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * Exports the entire message history of an AI chat session and saves it as a document in the specified folder.  The exported file is created with the provided title. Only the chat owner can export their own chat sessions.
         * @summary Export AI chat messages to a file
         * @param {string} chatId The unique identifier of the AI chat session to export.
         * @param {ExportChatRequestBodyInteger} exportChatRequestBodyInteger The export parameters including destination folder and file title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for exportChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/export-chat/
         */
        exportChat: async (chatId: string, exportChatRequestBodyInteger: ExportChatRequestBodyInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            assertParamExists('exportChat', 'chatId', chatId)
            // verify required parameter 'exportChatRequestBodyInteger' is not null or undefined
            assertParamExists('exportChat', 'exportChatRequestBodyInteger', exportChatRequestBodyInteger)

            const localVarPath = `/api/2.0/ai/chats/{chatId}/messages/export`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(exportChatRequestBodyInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the metadata of a single AI chat session, including its title, creation date, and the user who created it.  Only the chat owner can access their own chat sessions.
         * @summary Get an AI chat by ID
         * @param {string} chatId The unique identifier of the AI chat session to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat/
         */
        getChat: async (chatId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            assertParamExists('getChat', 'chatId', chatId)

            const localVarPath = `/api/2.0/ai/chats/{chatId}`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
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
        /**
         * Returns the list of AI models available for chat conversations.  Optionally filters the results to models from a specific provider when the provider query parameter is specified.  Each model entry includes the provider ID, provider display name, and the model identifier.
         * @summary Get available AI models
         * @param {number} [provider] The optional AI provider identifier to filter models by. When set to 0, models from all providers are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getChatModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat-models/
         */
        getChatModels: async (provider?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/chats/models`;
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

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
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
         * Returns a paginated list of AI chat sessions that belong to the current user within the specified room.  Supports pagination via the startIndex and count query parameters. The total number of chats is included in the response metadata.
         * @summary Get AI chats in a room
         * @param {number} roomId The identifier of the room whose AI chat sessions are to be listed.
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getChats operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chats/
         */
        getChats: async (roomId: number, startIndex?: number, count?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('getChats', 'roomId', roomId)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/chats`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
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
         * Returns a paginated list of messages from an AI chat session owned by the current user.  Each message includes its role (user or assistant), content blocks (text, tool calls, attachments), and timestamp.  Supports pagination via the startIndex and count query parameters. The total number of messages is included in the response metadata.
         * @summary Get messages of an AI chat
         * @param {string} chatId The unique identifier of the AI chat session whose messages are to be listed.
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-messages/
         */
        getMessages: async (chatId: string, startIndex?: number, count?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            assertParamExists('getMessages', 'chatId', chatId)

            const localVarPath = `/api/2.0/ai/chats/{chatId}/messages`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
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
         * Retrieves the current user\'s personal AI chat preferences for the specified room,  including whether web search is enabled for AI-assisted responses.
         * @summary Get user chat settings for a room
         * @param {number} roomId The identifier of the room whose chat settings are to be retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserChatsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-chats-settings/
         */
        getUserChatsSettings: async (roomId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('getUserChatsSettings', 'roomId', roomId)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/chats/config`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
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
        /**
         * Provides the user\'s approval or denial decision for a pending MCP (Model Context Protocol) tool execution request.  When an AI assistant attempts to invoke an external tool that requires explicit user consent,  the client receives a permission prompt via the SSE stream. This endpoint is used to submit the user\'s decision  so that the AI chat session can proceed accordingly.
         * @summary Submit a tool execution permission decision
         * @param {string} callId The unique identifier of the pending tool execution call awaiting a permission decision.
         * @param {ToolDecisionRequestBody} toolDecisionRequestBody The permission decision parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for providePermission operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/provide-permission/
         */
        providePermission: async (callId: string, toolDecisionRequestBody: ToolDecisionRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'callId' is not null or undefined
            assertParamExists('providePermission', 'callId', callId)
            // verify required parameter 'toolDecisionRequestBody' is not null or undefined
            assertParamExists('providePermission', 'toolDecisionRequestBody', toolDecisionRequestBody)

            const localVarPath = `/api/2.0/ai/chats/tool-permissions/{callId}/decision`
                .replace(`{${"callId"}}`, encodeURIComponent(String(callId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(toolDecisionRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the display title of an existing AI chat session owned by the current user.  The new name must not exceed 255 characters.
         * @summary Rename an AI chat
         * @param {string} chatId The unique identifier of the AI chat session to rename.
         * @param {RenameChatBody} renameChatBody The new chat name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for renameChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-chat/
         */
        renameChat: async (chatId: string, renameChatBody: RenameChatBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            assertParamExists('renameChat', 'chatId', chatId)
            // verify required parameter 'renameChatBody' is not null or undefined
            assertParamExists('renameChat', 'renameChatBody', renameChatBody)

            const localVarPath = `/api/2.0/ai/chats/{chatId}`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(renameChatBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the current user\'s personal AI chat preferences for the specified room.  Currently supports toggling the web search capability, which allows the AI assistant to search the internet when generating responses.
         * @summary Update user chat settings for a room
         * @param {number} roomId The identifier of the room whose chat settings are to be updated.
         * @param {SetUserChatSettingsRequestBody} setUserChatSettingsRequestBody The chat settings to apply.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setUserChatsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-user-chats-settings/
         */
        setUserChatsSettings: async (roomId: number, setUserChatSettingsRequestBody: SetUserChatSettingsRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('setUserChatsSettings', 'roomId', roomId)
            // verify required parameter 'setUserChatSettingsRequestBody' is not null or undefined
            assertParamExists('setUserChatsSettings', 'setUserChatSettingsRequestBody', setUserChatSettingsRequestBody)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/chats/config`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(setUserChatSettingsRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new AI chat session within the specified room and sends the initial message to the configured AI provider.  The response is delivered as a Server-Sent Events (SSE) stream containing completion chunks (text deltas, tool calls, tool results, and message lifecycle events)  with periodic keep-alive pings every 5 seconds. File references can be included as context for the AI model.
         * @summary Start a new AI chat
         * @param {number} roomId The identifier of the room in which to create the new AI chat session.
         * @param {StartNewChatBody} startNewChatBody The initial message and optional file attachments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startNewChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-new-chat/
         */
        startNewChat: async (roomId: number, startNewChatBody: StartNewChatBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('startNewChat', 'roomId', roomId)
            // verify required parameter 'startNewChatBody' is not null or undefined
            assertParamExists('startNewChat', 'startNewChatBody', startNewChatBody)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/chats`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(startNewChatBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChatApi - functional programming interface
 * @export
 */
export const ChatApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChatApiAxiosParamCreator(configuration)
    return {
        /**
         * Appends a new user message to an existing chat session and streams the AI assistant\'s response.  The full conversation history of the chat is sent to the AI provider to maintain context.  The response is delivered as a Server-Sent Events (SSE) stream with periodic keep-alive pings.  File references can optionally be attached to provide additional context.
         * @summary Send a message to an existing AI chat
         * @param {string} chatId The unique identifier of the existing AI chat session to continue.
         * @param {ContinueChatBody} continueChatBody The message and optional file attachments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for continueChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-chat/
         */
        async continueChat(chatId: string, continueChatBody: ContinueChatBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.continueChat(chatId, continueChatBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.continueChat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Permanently deletes an AI chat session along with all of its messages.  Only the chat owner can delete their own chat sessions. This action cannot be undone.
         * @summary Delete an AI chat
         * @param {string} chatId The unique identifier of the AI chat session to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-chat/
         */
        async deleteChat(chatId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteChat(chatId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.deleteChat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Exports the entire message history of an AI chat session and saves it as a document in the specified folder.  The exported file is created with the provided title. Only the chat owner can export their own chat sessions.
         * @summary Export AI chat messages to a file
         * @param {string} chatId The unique identifier of the AI chat session to export.
         * @param {ExportChatRequestBodyInteger} exportChatRequestBodyInteger The export parameters including destination folder and file title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for exportChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/export-chat/
         */
        async exportChat(chatId: string, exportChatRequestBodyInteger: ExportChatRequestBodyInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exportChat(chatId, exportChatRequestBodyInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.exportChat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the metadata of a single AI chat session, including its title, creation date, and the user who created it.  Only the chat owner can access their own chat sessions.
         * @summary Get an AI chat by ID
         * @param {string} chatId The unique identifier of the AI chat session to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat/
         */
        async getChat(chatId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChat(chatId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.getChat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the list of AI models available for chat conversations.  Optionally filters the results to models from a specific provider when the provider query parameter is specified.  Each model entry includes the provider ID, provider display name, and the model identifier.
         * @summary Get available AI models
         * @param {number} [provider] The optional AI provider identifier to filter models by. When set to 0, models from all providers are returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getChatModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat-models/
         */
        async getChatModels(provider?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChatModels(provider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.getChatModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a paginated list of AI chat sessions that belong to the current user within the specified room.  Supports pagination via the startIndex and count query parameters. The total number of chats is included in the response metadata.
         * @summary Get AI chats in a room
         * @param {number} roomId The identifier of the room whose AI chat sessions are to be listed.
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getChats operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chats/
         */
        async getChats(roomId: number, startIndex?: number, count?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChats(roomId, startIndex, count, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.getChats']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a paginated list of messages from an AI chat session owned by the current user.  Each message includes its role (user or assistant), content blocks (text, tool calls, attachments), and timestamp.  Supports pagination via the startIndex and count query parameters. The total number of messages is included in the response metadata.
         * @summary Get messages of an AI chat
         * @param {string} chatId The unique identifier of the AI chat session whose messages are to be listed.
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-messages/
         */
        async getMessages(chatId: string, startIndex?: number, count?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MessageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMessages(chatId, startIndex, count, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.getMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the current user\'s personal AI chat preferences for the specified room,  including whether web search is enabled for AI-assisted responses.
         * @summary Get user chat settings for a room
         * @param {number} roomId The identifier of the room whose chat settings are to be retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserChatsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-chats-settings/
         */
        async getUserChatsSettings(roomId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserChatSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserChatsSettings(roomId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.getUserChatsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Provides the user\'s approval or denial decision for a pending MCP (Model Context Protocol) tool execution request.  When an AI assistant attempts to invoke an external tool that requires explicit user consent,  the client receives a permission prompt via the SSE stream. This endpoint is used to submit the user\'s decision  so that the AI chat session can proceed accordingly.
         * @summary Submit a tool execution permission decision
         * @param {string} callId The unique identifier of the pending tool execution call awaiting a permission decision.
         * @param {ToolDecisionRequestBody} toolDecisionRequestBody The permission decision parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for providePermission operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/provide-permission/
         */
        async providePermission(callId: string, toolDecisionRequestBody: ToolDecisionRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.providePermission(callId, toolDecisionRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.providePermission']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the display title of an existing AI chat session owned by the current user.  The new name must not exceed 255 characters.
         * @summary Rename an AI chat
         * @param {string} chatId The unique identifier of the AI chat session to rename.
         * @param {RenameChatBody} renameChatBody The new chat name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for renameChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-chat/
         */
        async renameChat(chatId: string, renameChatBody: RenameChatBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renameChat(chatId, renameChatBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.renameChat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the current user\'s personal AI chat preferences for the specified room.  Currently supports toggling the web search capability, which allows the AI assistant to search the internet when generating responses.
         * @summary Update user chat settings for a room
         * @param {number} roomId The identifier of the room whose chat settings are to be updated.
         * @param {SetUserChatSettingsRequestBody} setUserChatSettingsRequestBody The chat settings to apply.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setUserChatsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-user-chats-settings/
         */
        async setUserChatsSettings(roomId: number, setUserChatSettingsRequestBody: SetUserChatSettingsRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserChatSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setUserChatsSettings(roomId, setUserChatSettingsRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.setUserChatsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a new AI chat session within the specified room and sends the initial message to the configured AI provider.  The response is delivered as a Server-Sent Events (SSE) stream containing completion chunks (text deltas, tool calls, tool results, and message lifecycle events)  with periodic keep-alive pings every 5 seconds. File references can be included as context for the AI model.
         * @summary Start a new AI chat
         * @param {number} roomId The identifier of the room in which to create the new AI chat session.
         * @param {StartNewChatBody} startNewChatBody The initial message and optional file attachments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startNewChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-new-chat/
         */
        async startNewChat(roomId: number, startNewChatBody: StartNewChatBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startNewChat(roomId, startNewChatBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.startNewChat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ChatApi - factory interface
 * @export
 */
export const ChatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChatApiFp(configuration)
    return {
        /**
         * Appends a new user message to an existing chat session and streams the AI assistant\'s response.  The full conversation history of the chat is sent to the AI provider to maintain context.  The response is delivered as a Server-Sent Events (SSE) stream with periodic keep-alive pings.  File references can optionally be attached to provide additional context.
         * @summary Send a message to an existing AI chat
         * @param {string} chatId The unique identifier of the existing AI chat session to continue.
         * @param {ContinueChatBody} continueChatBody The message and optional file attachments.
         * @param {*} [options] Override http request option.
         * REST API Reference for continueChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-chat/
         * @throws {RequiredError}
         */
        continueChat(chatId: string, continueChatBody: ContinueChatBody, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.continueChat(chatId, continueChatBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Permanently deletes an AI chat session along with all of its messages.  Only the chat owner can delete their own chat sessions. This action cannot be undone.
         * @summary Delete an AI chat
         * @param {string} chatId The unique identifier of the AI chat session to delete.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-chat/
         * @throws {RequiredError}
         */
        deleteChat(chatId: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteChat(chatId, options).then((request) => request(axios, basePath));
        },
        /**
         * Exports the entire message history of an AI chat session and saves it as a document in the specified folder.  The exported file is created with the provided title. Only the chat owner can export their own chat sessions.
         * @summary Export AI chat messages to a file
         * @param {string} chatId The unique identifier of the AI chat session to export.
         * @param {ExportChatRequestBodyInteger} exportChatRequestBodyInteger The export parameters including destination folder and file title.
         * @param {*} [options] Override http request option.
         * REST API Reference for exportChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/export-chat/
         * @throws {RequiredError}
         */
        exportChat(chatId: string, exportChatRequestBodyInteger: ExportChatRequestBodyInteger, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.exportChat(chatId, exportChatRequestBodyInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the metadata of a single AI chat session, including its title, creation date, and the user who created it.  Only the chat owner can access their own chat sessions.
         * @summary Get an AI chat by ID
         * @param {string} chatId The unique identifier of the AI chat session to retrieve.
         * @param {*} [options] Override http request option.
         * REST API Reference for getChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat/
         * @throws {RequiredError}
         */
        getChat(chatId: string, options?: RawAxiosRequestConfig): AxiosPromise<ChatWrapper> {
            return localVarFp.getChat(chatId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of AI models available for chat conversations.  Optionally filters the results to models from a specific provider when the provider query parameter is specified.  Each model entry includes the provider ID, provider display name, and the model identifier.
         * @summary Get available AI models
         * @param {number} [provider] The optional AI provider identifier to filter models by. When set to 0, models from all providers are returned.
         * @param {*} [options] Override http request option.
         * REST API Reference for getChatModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat-models/
         * @throws {RequiredError}
         */
        getChatModels(provider?: number, options?: RawAxiosRequestConfig): AxiosPromise<ModelArrayWrapper> {
            return localVarFp.getChatModels(provider, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of AI chat sessions that belong to the current user within the specified room.  Supports pagination via the startIndex and count query parameters. The total number of chats is included in the response metadata.
         * @summary Get AI chats in a room
         * @param {number} roomId The identifier of the room whose AI chat sessions are to be listed.
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * REST API Reference for getChats operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chats/
         * @throws {RequiredError}
         */
        getChats(roomId: number, startIndex?: number, count?: number, options?: RawAxiosRequestConfig): AxiosPromise<ChatArrayWrapper> {
            return localVarFp.getChats(roomId, startIndex, count, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of messages from an AI chat session owned by the current user.  Each message includes its role (user or assistant), content blocks (text, tool calls, attachments), and timestamp.  Supports pagination via the startIndex and count query parameters. The total number of messages is included in the response metadata.
         * @summary Get messages of an AI chat
         * @param {string} chatId The unique identifier of the AI chat session whose messages are to be listed.
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * REST API Reference for getMessages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-messages/
         * @throws {RequiredError}
         */
        getMessages(chatId: string, startIndex?: number, count?: number, options?: RawAxiosRequestConfig): AxiosPromise<MessageArrayWrapper> {
            return localVarFp.getMessages(chatId, startIndex, count, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the current user\'s personal AI chat preferences for the specified room,  including whether web search is enabled for AI-assisted responses.
         * @summary Get user chat settings for a room
         * @param {number} roomId The identifier of the room whose chat settings are to be retrieved.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserChatsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-chats-settings/
         * @throws {RequiredError}
         */
        getUserChatsSettings(roomId: number, options?: RawAxiosRequestConfig): AxiosPromise<UserChatSettingsWrapper> {
            return localVarFp.getUserChatsSettings(roomId, options).then((request) => request(axios, basePath));
        },
        /**
         * Provides the user\'s approval or denial decision for a pending MCP (Model Context Protocol) tool execution request.  When an AI assistant attempts to invoke an external tool that requires explicit user consent,  the client receives a permission prompt via the SSE stream. This endpoint is used to submit the user\'s decision  so that the AI chat session can proceed accordingly.
         * @summary Submit a tool execution permission decision
         * @param {string} callId The unique identifier of the pending tool execution call awaiting a permission decision.
         * @param {ToolDecisionRequestBody} toolDecisionRequestBody The permission decision parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for providePermission operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/provide-permission/
         * @throws {RequiredError}
         */
        providePermission(callId: string, toolDecisionRequestBody: ToolDecisionRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.providePermission(callId, toolDecisionRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the display title of an existing AI chat session owned by the current user.  The new name must not exceed 255 characters.
         * @summary Rename an AI chat
         * @param {string} chatId The unique identifier of the AI chat session to rename.
         * @param {RenameChatBody} renameChatBody The new chat name.
         * @param {*} [options] Override http request option.
         * REST API Reference for renameChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-chat/
         * @throws {RequiredError}
         */
        renameChat(chatId: string, renameChatBody: RenameChatBody, options?: RawAxiosRequestConfig): AxiosPromise<ChatWrapper> {
            return localVarFp.renameChat(chatId, renameChatBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the current user\'s personal AI chat preferences for the specified room.  Currently supports toggling the web search capability, which allows the AI assistant to search the internet when generating responses.
         * @summary Update user chat settings for a room
         * @param {number} roomId The identifier of the room whose chat settings are to be updated.
         * @param {SetUserChatSettingsRequestBody} setUserChatSettingsRequestBody The chat settings to apply.
         * @param {*} [options] Override http request option.
         * REST API Reference for setUserChatsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-user-chats-settings/
         * @throws {RequiredError}
         */
        setUserChatsSettings(roomId: number, setUserChatSettingsRequestBody: SetUserChatSettingsRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<UserChatSettingsWrapper> {
            return localVarFp.setUserChatsSettings(roomId, setUserChatSettingsRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new AI chat session within the specified room and sends the initial message to the configured AI provider.  The response is delivered as a Server-Sent Events (SSE) stream containing completion chunks (text deltas, tool calls, tool results, and message lifecycle events)  with periodic keep-alive pings every 5 seconds. File references can be included as context for the AI model.
         * @summary Start a new AI chat
         * @param {number} roomId The identifier of the room in which to create the new AI chat session.
         * @param {StartNewChatBody} startNewChatBody The initial message and optional file attachments.
         * @param {*} [options] Override http request option.
         * REST API Reference for startNewChat operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-new-chat/
         * @throws {RequiredError}
         */
        startNewChat(roomId: number, startNewChatBody: StartNewChatBody, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.startNewChat(roomId, startNewChatBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChatApi - object-oriented interface
 * @export
 * @class ChatApi
 * @extends {BaseAPI}
 */
export class ChatApi extends BaseAPI {
    /**
     * Appends a new user message to an existing chat session and streams the AI assistant\'s response.  The full conversation history of the chat is sent to the AI provider to maintain context.  The response is delivered as a Server-Sent Events (SSE) stream with periodic keep-alive pings.  File references can optionally be attached to provide additional context.
     * @summary Send a message to an existing AI chat
     * @param {string} chatId The unique identifier of the existing AI chat session to continue.
     * @param {ContinueChatBody} continueChatBody The message and optional file attachments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public continueChat(chatId: string, continueChatBody: ContinueChatBody, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).continueChat(chatId, continueChatBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Permanently deletes an AI chat session along with all of its messages.  Only the chat owner can delete their own chat sessions. This action cannot be undone.
     * @summary Delete an AI chat
     * @param {string} chatId The unique identifier of the AI chat session to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public deleteChat(chatId: string, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).deleteChat(chatId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Exports the entire message history of an AI chat session and saves it as a document in the specified folder.  The exported file is created with the provided title. Only the chat owner can export their own chat sessions.
     * @summary Export AI chat messages to a file
     * @param {string} chatId The unique identifier of the AI chat session to export.
     * @param {ExportChatRequestBodyInteger} exportChatRequestBodyInteger The export parameters including destination folder and file title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public exportChat(chatId: string, exportChatRequestBodyInteger: ExportChatRequestBodyInteger, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).exportChat(chatId, exportChatRequestBodyInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the metadata of a single AI chat session, including its title, creation date, and the user who created it.  Only the chat owner can access their own chat sessions.
     * @summary Get an AI chat by ID
     * @param {string} chatId The unique identifier of the AI chat session to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public getChat(chatId: string, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).getChat(chatId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of AI models available for chat conversations.  Optionally filters the results to models from a specific provider when the provider query parameter is specified.  Each model entry includes the provider ID, provider display name, and the model identifier.
     * @summary Get available AI models
     * @param {number} [provider] The optional AI provider identifier to filter models by. When set to 0, models from all providers are returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public getChatModels(provider?: number, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).getChatModels(provider, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of AI chat sessions that belong to the current user within the specified room.  Supports pagination via the startIndex and count query parameters. The total number of chats is included in the response metadata.
     * @summary Get AI chats in a room
     * @param {number} roomId The identifier of the room whose AI chat sessions are to be listed.
     * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
     * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public getChats(roomId: number, startIndex?: number, count?: number, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).getChats(roomId, startIndex, count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of messages from an AI chat session owned by the current user.  Each message includes its role (user or assistant), content blocks (text, tool calls, attachments), and timestamp.  Supports pagination via the startIndex and count query parameters. The total number of messages is included in the response metadata.
     * @summary Get messages of an AI chat
     * @param {string} chatId The unique identifier of the AI chat session whose messages are to be listed.
     * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
     * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public getMessages(chatId: string, startIndex?: number, count?: number, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).getMessages(chatId, startIndex, count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the current user\'s personal AI chat preferences for the specified room,  including whether web search is enabled for AI-assisted responses.
     * @summary Get user chat settings for a room
     * @param {number} roomId The identifier of the room whose chat settings are to be retrieved.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public getUserChatsSettings(roomId: number, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).getUserChatsSettings(roomId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides the user\'s approval or denial decision for a pending MCP (Model Context Protocol) tool execution request.  When an AI assistant attempts to invoke an external tool that requires explicit user consent,  the client receives a permission prompt via the SSE stream. This endpoint is used to submit the user\'s decision  so that the AI chat session can proceed accordingly.
     * @summary Submit a tool execution permission decision
     * @param {string} callId The unique identifier of the pending tool execution call awaiting a permission decision.
     * @param {ToolDecisionRequestBody} toolDecisionRequestBody The permission decision parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public providePermission(callId: string, toolDecisionRequestBody: ToolDecisionRequestBody, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).providePermission(callId, toolDecisionRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the display title of an existing AI chat session owned by the current user.  The new name must not exceed 255 characters.
     * @summary Rename an AI chat
     * @param {string} chatId The unique identifier of the AI chat session to rename.
     * @param {RenameChatBody} renameChatBody The new chat name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public renameChat(chatId: string, renameChatBody: RenameChatBody, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).renameChat(chatId, renameChatBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the current user\'s personal AI chat preferences for the specified room.  Currently supports toggling the web search capability, which allows the AI assistant to search the internet when generating responses.
     * @summary Update user chat settings for a room
     * @param {number} roomId The identifier of the room whose chat settings are to be updated.
     * @param {SetUserChatSettingsRequestBody} setUserChatSettingsRequestBody The chat settings to apply.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public setUserChatsSettings(roomId: number, setUserChatSettingsRequestBody: SetUserChatSettingsRequestBody, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).setUserChatsSettings(roomId, setUserChatSettingsRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new AI chat session within the specified room and sends the initial message to the configured AI provider.  The response is delivered as a Server-Sent Events (SSE) stream containing completion chunks (text deltas, tool calls, tool results, and message lifecycle events)  with periodic keep-alive pings every 5 seconds. File references can be included as context for the AI model.
     * @summary Start a new AI chat
     * @param {number} roomId The identifier of the room in which to create the new AI chat session.
     * @param {StartNewChatBody} startNewChatBody The initial message and optional file attachments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    public startNewChat(roomId: number, startNewChatBody: StartNewChatBody, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).startNewChat(roomId, startNewChatBody, options).then((request) => request(this.axios, this.basePath));
    }
}

