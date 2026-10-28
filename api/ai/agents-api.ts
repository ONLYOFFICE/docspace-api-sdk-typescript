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
import type { AiAgentsCreateRequest } from '../../models';
// @ts-ignore
import type { AiAgentsDeleteRequest } from '../../models';
// @ts-ignore
import type { AiAgentsGet200Response } from '../../models';
// @ts-ignore
import type { AiAgentsResetQuotaRequest } from '../../models';
// @ts-ignore
import type { AiAgentsUpdateQuotaRequest } from '../../models';
// @ts-ignore
import type { AiAgentsUpdateRequest } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiFileOperationWrapper } from '../../models';
// @ts-ignore
import type { AiFolderArrayWrapper } from '../../models';
// @ts-ignore
import type { AiFolderContentWrapper } from '../../models';
// @ts-ignore
import type { AiFolderWrapper } from '../../models';
// @ts-ignore
import type { AiNewItemsAgentNewItemsArrayWrapper } from '../../models';
/**
 * AgentsApi - axios parameter creator
 * @export
 */
export const AgentsApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Creates an AI agent room and binds a model to it, in that order. `profileId` is required, has to be a UUID, has to name an existing profile, and that profile has to support chat - an image-only model is refused here rather than failing on every later request. `prompt` is required and is stored on the room as its standing instruction with any markup stripped, so it cannot round-trip HTML into another user\'s reply. The two steps are not atomic: when the room is created but the model binding fails, the call reports an error and the room is left behind, so re-bind it with `PUT api/2.0/ai/agents/{id}` rather than creating a second one.
         * @summary Create an agent
         * @param {AiAgentsCreateRequest} aiAgentsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-create/
         */
        aiAgentsCreate: async (aiAgentsCreateRequest: AiAgentsCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAgentsCreateRequest' is not null or undefined
            assertParamExists('aiAgentsCreate', 'aiAgentsCreateRequest', aiAgentsCreateRequest)

            const localVarPath = `/api/2.0/ai/agents`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAgentsCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an AI agent room. The ID has to be the room\'s integer identifier, and the body is forwarded to the DocSpace AI service unchanged, so it accepts the same options as deleting an ordinary room - `deleteAfter` among them. Deletion is asynchronous there: the answer is a file-operation payload to poll, not a completed result. The agent\'s model binding is deliberately left behind, because the upstream assignment API has no per-entry delete, so an orphaned assignment row survives the room.
         * @summary Delete an agent
         * @param {string} id The agent identifier.
         * @param {AiAgentsDeleteRequest} aiAgentsDeleteRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-delete/
         */
        aiAgentsDelete: async (id: string, aiAgentsDeleteRequest: AiAgentsDeleteRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiAgentsDelete', 'id', id)
            // verify required parameter 'aiAgentsDeleteRequest' is not null or undefined
            assertParamExists('aiAgentsDelete', 'aiAgentsDeleteRequest', aiAgentsDeleteRequest)

            const localVarPath = `/api/2.0/ai/agents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAgentsDeleteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns one AI agent room, enriched with the `profileId` currently bound to it so an edit form can prefill its model selector. The ID is the room\'s integer identifier, and a non-integer value is refused rather than passed on to fail opaquely upstream. The binding lives in an assignment rather than on the room, so it is looked up separately: a missing or unreadable assignment simply leaves `profileId` out of the answer instead of failing the call. The standing instruction comes back on the room as `chatSettings.prompt`.
         * @summary Get an agent
         * @param {string} id The agent identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-get/
         */
        aiAgentsGet: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiAgentsGet', 'id', id)

            const localVarPath = `/api/2.0/ai/agents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the portal\'s AI agent rooms. The query is forwarded unchanged to the DocSpace AI service, so it takes the same paging, sorting and filtering parameters as an ordinary room listing, and the answer is that service\'s folder-content payload rather than a shape of this API\'s own. Array and object query values are dropped rather than guessed at, so send flat strings. The profile bound to each agent is not included here - read one agent with `GET api/2.0/ai/agents/{id}` for that.
         * @summary List agents
         * @param {string} [subjectId] Show only the agent rooms this user takes part in.
         * @param {string} [subjectOwnerId] Show only the agent rooms owned by this user.
         * @param {boolean} [excludeSubject] Invert the user filter: leave out what `subjectId` selects instead of keeping it.
         * @param {string} [tags] Show only the agent rooms carrying these tags, comma-separated.
         * @param {boolean} [withoutTags] Show only the agent rooms that carry no tags at all.
         * @param {number} [quotaFilter] Filter by quota kind: 0 for all, 1 for the default quota, 2 for a custom one.
         * @param {string} [filterValue] Show only the agent rooms whose title matches this text.
         * @param {string} [sortBy] Field to sort by, for example `DateAndTime`.
         * @param {string} [sortOrder] Sort direction, `ascending` or `descending`.
         * @param {number} [startIndex] Index of the first entry to return; 0 starts at the beginning.
         * @param {number} [count] How many entries to return. The internal service applies its own default.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/
         */
        aiAgentsList: async (subjectId?: string, subjectOwnerId?: string, excludeSubject?: boolean, tags?: string, withoutTags?: boolean, quotaFilter?: number, filterValue?: string, sortBy?: string, sortOrder?: string, startIndex?: number, count?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/agents`;
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

            if (subjectId !== undefined) {
                localVarQueryParameter['subjectId'] = subjectId;
            }

            if (subjectOwnerId !== undefined) {
                localVarQueryParameter['subjectOwnerId'] = subjectOwnerId;
            }

            if (excludeSubject !== undefined) {
                localVarQueryParameter['excludeSubject'] = excludeSubject;
            }

            if (tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            if (withoutTags !== undefined) {
                localVarQueryParameter['withoutTags'] = withoutTags;
            }

            if (quotaFilter !== undefined) {
                localVarQueryParameter['quotaFilter'] = quotaFilter;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
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
         * Lists the unread items across the caller\'s AI agent rooms, so a badge can be rendered without walking each room. It takes no parameters and is scoped to the caller by the DocSpace AI service. The answer is that service\'s new-items payload. This is a read-only operation and does not mark anything as seen.
         * @summary List agent news items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsNews operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-news/
         */
        aiAgentsNews: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/agents/news`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the listed AI agent rooms to the portal\'s default storage quota, forwarding `roomIds` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. This is the counterpart of `PUT api/2.0/ai/agents/agentquota` and takes no quota value of its own. Rooms already on the default are unaffected.
         * @summary Reset agents\' quota
         * @param {AiAgentsResetQuotaRequest} aiAgentsResetQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-reset-quota/
         */
        aiAgentsResetQuota: async (aiAgentsResetQuotaRequest: AiAgentsResetQuotaRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAgentsResetQuotaRequest' is not null or undefined
            assertParamExists('aiAgentsResetQuota', 'aiAgentsResetQuotaRequest', aiAgentsResetQuotaRequest)

            const localVarPath = `/api/2.0/ai/agents/resetquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAgentsResetQuotaRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes an AI agent room - its title, tags or standing instruction - and optionally rebinds its model. The ID has to be the room\'s integer identifier. `profileId` is not part of the room contract: it is taken out of the forwarded body and applied afterwards as the agent\'s assignment, and it has to be a UUID naming an existing chat-capable profile. An instruction sent as `chatSettings.prompt` has its markup stripped, as on create; note that when `chatSettings` is present the upstream service still requires the rest of that object to be valid, so send it whole.
         * @summary Update an agent
         * @param {string} id The agent identifier.
         * @param {AiAgentsUpdateRequest} aiAgentsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update/
         */
        aiAgentsUpdate: async (id: string, aiAgentsUpdateRequest: AiAgentsUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiAgentsUpdate', 'id', id)
            // verify required parameter 'aiAgentsUpdateRequest' is not null or undefined
            assertParamExists('aiAgentsUpdate', 'aiAgentsUpdateRequest', aiAgentsUpdateRequest)

            const localVarPath = `/api/2.0/ai/agents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAgentsUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the storage quota of the listed AI agent rooms in one call, forwarding `roomIds` and `quota` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. A quota applies to the room\'s stored files, not to the model usage of its chats. Use `PUT api/2.0/ai/agents/resetquota` to return rooms to the portal default instead of naming a number.
         * @summary Update agents\' quota
         * @param {AiAgentsUpdateQuotaRequest} aiAgentsUpdateQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update-quota/
         */
        aiAgentsUpdateQuota: async (aiAgentsUpdateQuotaRequest: AiAgentsUpdateQuotaRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAgentsUpdateQuotaRequest' is not null or undefined
            assertParamExists('aiAgentsUpdateQuota', 'aiAgentsUpdateQuotaRequest', aiAgentsUpdateQuotaRequest)

            const localVarPath = `/api/2.0/ai/agents/agentquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAgentsUpdateQuotaRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AgentsApi - functional programming interface
 * @export
 */
export const AgentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AgentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates an AI agent room and binds a model to it, in that order. `profileId` is required, has to be a UUID, has to name an existing profile, and that profile has to support chat - an image-only model is refused here rather than failing on every later request. `prompt` is required and is stored on the room as its standing instruction with any markup stripped, so it cannot round-trip HTML into another user\'s reply. The two steps are not atomic: when the room is created but the model binding fails, the call reports an error and the room is left behind, so re-bind it with `PUT api/2.0/ai/agents/{id}` rather than creating a second one.
         * @summary Create an agent
         * @param {AiAgentsCreateRequest} aiAgentsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-create/
         */
        async aiAgentsCreate(aiAgentsCreateRequest: AiAgentsCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsCreate(aiAgentsCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes an AI agent room. The ID has to be the room\'s integer identifier, and the body is forwarded to the DocSpace AI service unchanged, so it accepts the same options as deleting an ordinary room - `deleteAfter` among them. Deletion is asynchronous there: the answer is a file-operation payload to poll, not a completed result. The agent\'s model binding is deliberately left behind, because the upstream assignment API has no per-entry delete, so an orphaned assignment row survives the room.
         * @summary Delete an agent
         * @param {string} id The agent identifier.
         * @param {AiAgentsDeleteRequest} aiAgentsDeleteRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-delete/
         */
        async aiAgentsDelete(id: string, aiAgentsDeleteRequest: AiAgentsDeleteRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsDelete(id, aiAgentsDeleteRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one AI agent room, enriched with the `profileId` currently bound to it so an edit form can prefill its model selector. The ID is the room\'s integer identifier, and a non-integer value is refused rather than passed on to fail opaquely upstream. The binding lives in an assignment rather than on the room, so it is looked up separately: a missing or unreadable assignment simply leaves `profileId` out of the answer instead of failing the call. The standing instruction comes back on the room as `chatSettings.prompt`.
         * @summary Get an agent
         * @param {string} id The agent identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-get/
         */
        async aiAgentsGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAgentsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the portal\'s AI agent rooms. The query is forwarded unchanged to the DocSpace AI service, so it takes the same paging, sorting and filtering parameters as an ordinary room listing, and the answer is that service\'s folder-content payload rather than a shape of this API\'s own. Array and object query values are dropped rather than guessed at, so send flat strings. The profile bound to each agent is not included here - read one agent with `GET api/2.0/ai/agents/{id}` for that.
         * @summary List agents
         * @param {string} [subjectId] Show only the agent rooms this user takes part in.
         * @param {string} [subjectOwnerId] Show only the agent rooms owned by this user.
         * @param {boolean} [excludeSubject] Invert the user filter: leave out what `subjectId` selects instead of keeping it.
         * @param {string} [tags] Show only the agent rooms carrying these tags, comma-separated.
         * @param {boolean} [withoutTags] Show only the agent rooms that carry no tags at all.
         * @param {number} [quotaFilter] Filter by quota kind: 0 for all, 1 for the default quota, 2 for a custom one.
         * @param {string} [filterValue] Show only the agent rooms whose title matches this text.
         * @param {string} [sortBy] Field to sort by, for example `DateAndTime`.
         * @param {string} [sortOrder] Sort direction, `ascending` or `descending`.
         * @param {number} [startIndex] Index of the first entry to return; 0 starts at the beginning.
         * @param {number} [count] How many entries to return. The internal service applies its own default.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/
         */
        async aiAgentsList(subjectId?: string, subjectOwnerId?: string, excludeSubject?: boolean, tags?: string, withoutTags?: boolean, quotaFilter?: number, filterValue?: string, sortBy?: string, sortOrder?: string, startIndex?: number, count?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsList(subjectId, subjectOwnerId, excludeSubject, tags, withoutTags, quotaFilter, filterValue, sortBy, sortOrder, startIndex, count, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the unread items across the caller\'s AI agent rooms, so a badge can be rendered without walking each room. It takes no parameters and is scoped to the caller by the DocSpace AI service. The answer is that service\'s new-items payload. This is a read-only operation and does not mark anything as seen.
         * @summary List agent news items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsNews operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-news/
         */
        async aiAgentsNews(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiNewItemsAgentNewItemsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsNews(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsNews']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the listed AI agent rooms to the portal\'s default storage quota, forwarding `roomIds` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. This is the counterpart of `PUT api/2.0/ai/agents/agentquota` and takes no quota value of its own. Rooms already on the default are unaffected.
         * @summary Reset agents\' quota
         * @param {AiAgentsResetQuotaRequest} aiAgentsResetQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-reset-quota/
         */
        async aiAgentsResetQuota(aiAgentsResetQuotaRequest: AiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsResetQuota(aiAgentsResetQuotaRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsResetQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes an AI agent room - its title, tags or standing instruction - and optionally rebinds its model. The ID has to be the room\'s integer identifier. `profileId` is not part of the room contract: it is taken out of the forwarded body and applied afterwards as the agent\'s assignment, and it has to be a UUID naming an existing chat-capable profile. An instruction sent as `chatSettings.prompt` has its markup stripped, as on create; note that when `chatSettings` is present the upstream service still requires the rest of that object to be valid, so send it whole.
         * @summary Update an agent
         * @param {string} id The agent identifier.
         * @param {AiAgentsUpdateRequest} aiAgentsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update/
         */
        async aiAgentsUpdate(id: string, aiAgentsUpdateRequest: AiAgentsUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsUpdate(id, aiAgentsUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the storage quota of the listed AI agent rooms in one call, forwarding `roomIds` and `quota` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. A quota applies to the room\'s stored files, not to the model usage of its chats. Use `PUT api/2.0/ai/agents/resetquota` to return rooms to the portal default instead of naming a number.
         * @summary Update agents\' quota
         * @param {AiAgentsUpdateQuotaRequest} aiAgentsUpdateQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update-quota/
         */
        async aiAgentsUpdateQuota(aiAgentsUpdateQuotaRequest: AiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsUpdateQuota(aiAgentsUpdateQuotaRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsUpdateQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AgentsApi - factory interface
 * @export
 */
export const AgentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AgentsApiFp(configuration)
    return {
        /**
         * Creates an AI agent room and binds a model to it, in that order. `profileId` is required, has to be a UUID, has to name an existing profile, and that profile has to support chat - an image-only model is refused here rather than failing on every later request. `prompt` is required and is stored on the room as its standing instruction with any markup stripped, so it cannot round-trip HTML into another user\'s reply. The two steps are not atomic: when the room is created but the model binding fails, the call reports an error and the room is left behind, so re-bind it with `PUT api/2.0/ai/agents/{id}` rather than creating a second one.
         * @summary Create an agent
         * @param {AgentsApiAiAgentsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-create/
         * @throws {RequiredError}
         */
        aiAgentsCreate(requestParameters: AgentsApiAiAgentsCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderWrapper> {
            return localVarFp.aiAgentsCreate(requestParameters.aiAgentsCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an AI agent room. The ID has to be the room\'s integer identifier, and the body is forwarded to the DocSpace AI service unchanged, so it accepts the same options as deleting an ordinary room - `deleteAfter` among them. Deletion is asynchronous there: the answer is a file-operation payload to poll, not a completed result. The agent\'s model binding is deliberately left behind, because the upstream assignment API has no per-entry delete, so an orphaned assignment row survives the room.
         * @summary Delete an agent
         * @param {AgentsApiAiAgentsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-delete/
         * @throws {RequiredError}
         */
        aiAgentsDelete(requestParameters: AgentsApiAiAgentsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFileOperationWrapper> {
            return localVarFp.aiAgentsDelete(requestParameters.id, requestParameters.aiAgentsDeleteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one AI agent room, enriched with the `profileId` currently bound to it so an edit form can prefill its model selector. The ID is the room\'s integer identifier, and a non-integer value is refused rather than passed on to fail opaquely upstream. The binding lives in an assignment rather than on the room, so it is looked up separately: a missing or unreadable assignment simply leaves `profileId` out of the answer instead of failing the call. The standing instruction comes back on the room as `chatSettings.prompt`.
         * @summary Get an agent
         * @param {AgentsApiAiAgentsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-get/
         * @throws {RequiredError}
         */
        aiAgentsGet(requestParameters: AgentsApiAiAgentsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiAgentsGet200Response> {
            return localVarFp.aiAgentsGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the portal\'s AI agent rooms. The query is forwarded unchanged to the DocSpace AI service, so it takes the same paging, sorting and filtering parameters as an ordinary room listing, and the answer is that service\'s folder-content payload rather than a shape of this API\'s own. Array and object query values are dropped rather than guessed at, so send flat strings. The profile bound to each agent is not included here - read one agent with `GET api/2.0/ai/agents/{id}` for that.
         * @summary List agents
         * @param {AgentsApiAiAgentsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/
         * @throws {RequiredError}
         */
        aiAgentsList(requestParameters: AgentsApiAiAgentsListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderContentWrapper> {
            return localVarFp.aiAgentsList(requestParameters.subjectId, requestParameters.subjectOwnerId, requestParameters.excludeSubject, requestParameters.tags, requestParameters.withoutTags, requestParameters.quotaFilter, requestParameters.filterValue, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.startIndex, requestParameters.count, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the unread items across the caller\'s AI agent rooms, so a badge can be rendered without walking each room. It takes no parameters and is scoped to the caller by the DocSpace AI service. The answer is that service\'s new-items payload. This is a read-only operation and does not mark anything as seen.
         * @summary List agent news items
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsNews operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-news/
         * @throws {RequiredError}
         */
        aiAgentsNews(options?: RawAxiosRequestConfig): AxiosPromise<AiNewItemsAgentNewItemsArrayWrapper> {
            return localVarFp.aiAgentsNews(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the listed AI agent rooms to the portal\'s default storage quota, forwarding `roomIds` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. This is the counterpart of `PUT api/2.0/ai/agents/agentquota` and takes no quota value of its own. Rooms already on the default are unaffected.
         * @summary Reset agents\' quota
         * @param {AgentsApiAiAgentsResetQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-reset-quota/
         * @throws {RequiredError}
         */
        aiAgentsResetQuota(requestParameters: AgentsApiAiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderArrayWrapper> {
            return localVarFp.aiAgentsResetQuota(requestParameters.aiAgentsResetQuotaRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes an AI agent room - its title, tags or standing instruction - and optionally rebinds its model. The ID has to be the room\'s integer identifier. `profileId` is not part of the room contract: it is taken out of the forwarded body and applied afterwards as the agent\'s assignment, and it has to be a UUID naming an existing chat-capable profile. An instruction sent as `chatSettings.prompt` has its markup stripped, as on create; note that when `chatSettings` is present the upstream service still requires the rest of that object to be valid, so send it whole.
         * @summary Update an agent
         * @param {AgentsApiAiAgentsUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update/
         * @throws {RequiredError}
         */
        aiAgentsUpdate(requestParameters: AgentsApiAiAgentsUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderWrapper> {
            return localVarFp.aiAgentsUpdate(requestParameters.id, requestParameters.aiAgentsUpdateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the storage quota of the listed AI agent rooms in one call, forwarding `roomIds` and `quota` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. A quota applies to the room\'s stored files, not to the model usage of its chats. Use `PUT api/2.0/ai/agents/resetquota` to return rooms to the portal default instead of naming a number.
         * @summary Update agents\' quota
         * @param {AgentsApiAiAgentsUpdateQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update-quota/
         * @throws {RequiredError}
         */
        aiAgentsUpdateQuota(requestParameters: AgentsApiAiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderArrayWrapper> {
            return localVarFp.aiAgentsUpdateQuota(requestParameters.aiAgentsUpdateQuotaRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiAgentsCreate operation in AgentsApi.
 * @export
 * @interface AgentsApiAiAgentsCreateRequest
 */
export interface AgentsApiAiAgentsCreateRequest {
    /**
     * 
     * @type {AiAgentsCreateRequest}
     * @memberof AgentsApiAiAgentsCreate
     */
    readonly aiAgentsCreateRequest: AiAgentsCreateRequest
}

/**
 * Request parameters for aiAgentsDelete operation in AgentsApi.
 * @export
 * @interface AgentsApiAiAgentsDeleteRequest
 */
export interface AgentsApiAiAgentsDeleteRequest {
    /**
     * The agent identifier.
     * @type {string}
     * @memberof AgentsApiAiAgentsDelete
     */
    readonly id: string

    /**
     * 
     * @type {AiAgentsDeleteRequest}
     * @memberof AgentsApiAiAgentsDelete
     */
    readonly aiAgentsDeleteRequest: AiAgentsDeleteRequest
}

/**
 * Request parameters for aiAgentsGet operation in AgentsApi.
 * @export
 * @interface AgentsApiAiAgentsGetRequest
 */
export interface AgentsApiAiAgentsGetRequest {
    /**
     * The agent identifier.
     * @type {string}
     * @memberof AgentsApiAiAgentsGet
     */
    readonly id: string
}

/**
 * Request parameters for aiAgentsList operation in AgentsApi.
 * @export
 * @interface AgentsApiAiAgentsListRequest
 */
export interface AgentsApiAiAgentsListRequest {
    /**
     * Show only the agent rooms this user takes part in.
     * @type {string}
     * @memberof AgentsApiAiAgentsList
     */
    readonly subjectId?: string

    /**
     * Show only the agent rooms owned by this user.
     * @type {string}
     * @memberof AgentsApiAiAgentsList
     */
    readonly subjectOwnerId?: string

    /**
     * Invert the user filter: leave out what `subjectId` selects instead of keeping it.
     * @type {boolean}
     * @memberof AgentsApiAiAgentsList
     */
    readonly excludeSubject?: boolean

    /**
     * Show only the agent rooms carrying these tags, comma-separated.
     * @type {string}
     * @memberof AgentsApiAiAgentsList
     */
    readonly tags?: string

    /**
     * Show only the agent rooms that carry no tags at all.
     * @type {boolean}
     * @memberof AgentsApiAiAgentsList
     */
    readonly withoutTags?: boolean

    /**
     * Filter by quota kind: 0 for all, 1 for the default quota, 2 for a custom one.
     * @type {number}
     * @memberof AgentsApiAiAgentsList
     */
    readonly quotaFilter?: number

    /**
     * Show only the agent rooms whose title matches this text.
     * @type {string}
     * @memberof AgentsApiAiAgentsList
     */
    readonly filterValue?: string

    /**
     * Field to sort by, for example `DateAndTime`.
     * @type {string}
     * @memberof AgentsApiAiAgentsList
     */
    readonly sortBy?: string

    /**
     * Sort direction, `ascending` or `descending`.
     * @type {string}
     * @memberof AgentsApiAiAgentsList
     */
    readonly sortOrder?: string

    /**
     * Index of the first entry to return; 0 starts at the beginning.
     * @type {number}
     * @memberof AgentsApiAiAgentsList
     */
    readonly startIndex?: number

    /**
     * How many entries to return. The internal service applies its own default.
     * @type {number}
     * @memberof AgentsApiAiAgentsList
     */
    readonly count?: number
}

/**
 * Request parameters for aiAgentsResetQuota operation in AgentsApi.
 * @export
 * @interface AgentsApiAiAgentsResetQuotaRequest
 */
export interface AgentsApiAiAgentsResetQuotaRequest {
    /**
     * 
     * @type {AiAgentsResetQuotaRequest}
     * @memberof AgentsApiAiAgentsResetQuota
     */
    readonly aiAgentsResetQuotaRequest: AiAgentsResetQuotaRequest
}

/**
 * Request parameters for aiAgentsUpdate operation in AgentsApi.
 * @export
 * @interface AgentsApiAiAgentsUpdateRequest
 */
export interface AgentsApiAiAgentsUpdateRequest {
    /**
     * The agent identifier.
     * @type {string}
     * @memberof AgentsApiAiAgentsUpdate
     */
    readonly id: string

    /**
     * 
     * @type {AiAgentsUpdateRequest}
     * @memberof AgentsApiAiAgentsUpdate
     */
    readonly aiAgentsUpdateRequest: AiAgentsUpdateRequest
}

/**
 * Request parameters for aiAgentsUpdateQuota operation in AgentsApi.
 * @export
 * @interface AgentsApiAiAgentsUpdateQuotaRequest
 */
export interface AgentsApiAiAgentsUpdateQuotaRequest {
    /**
     * 
     * @type {AiAgentsUpdateQuotaRequest}
     * @memberof AgentsApiAiAgentsUpdateQuota
     */
    readonly aiAgentsUpdateQuotaRequest: AiAgentsUpdateQuotaRequest
}

/**
 * AgentsApi - object-oriented interface
 * @export
 * @class AgentsApi
 * @extends {BaseAPI}
 */
export class AgentsApi extends BaseAPI {
    /**
     * Creates an AI agent room and binds a model to it, in that order. `profileId` is required, has to be a UUID, has to name an existing profile, and that profile has to support chat - an image-only model is refused here rather than failing on every later request. `prompt` is required and is stored on the room as its standing instruction with any markup stripped, so it cannot round-trip HTML into another user\'s reply. The two steps are not atomic: when the room is created but the model binding fails, the call reports an error and the room is left behind, so re-bind it with `PUT api/2.0/ai/agents/{id}` rather than creating a second one.
     * @summary Create an agent
     * @param {AIAgentsApiAiAgentsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsCreate(requestParameters: AgentsApiAiAgentsCreateRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsCreate(requestParameters.aiAgentsCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an AI agent room. The ID has to be the room\'s integer identifier, and the body is forwarded to the DocSpace AI service unchanged, so it accepts the same options as deleting an ordinary room - `deleteAfter` among them. Deletion is asynchronous there: the answer is a file-operation payload to poll, not a completed result. The agent\'s model binding is deliberately left behind, because the upstream assignment API has no per-entry delete, so an orphaned assignment row survives the room.
     * @summary Delete an agent
     * @param {AIAgentsApiAiAgentsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsDelete(requestParameters: AgentsApiAiAgentsDeleteRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsDelete(requestParameters.id, requestParameters.aiAgentsDeleteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one AI agent room, enriched with the `profileId` currently bound to it so an edit form can prefill its model selector. The ID is the room\'s integer identifier, and a non-integer value is refused rather than passed on to fail opaquely upstream. The binding lives in an assignment rather than on the room, so it is looked up separately: a missing or unreadable assignment simply leaves `profileId` out of the answer instead of failing the call. The standing instruction comes back on the room as `chatSettings.prompt`.
     * @summary Get an agent
     * @param {AIAgentsApiAiAgentsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsGet(requestParameters: AgentsApiAiAgentsGetRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the portal\'s AI agent rooms. The query is forwarded unchanged to the DocSpace AI service, so it takes the same paging, sorting and filtering parameters as an ordinary room listing, and the answer is that service\'s folder-content payload rather than a shape of this API\'s own. Array and object query values are dropped rather than guessed at, so send flat strings. The profile bound to each agent is not included here - read one agent with `GET api/2.0/ai/agents/{id}` for that.
     * @summary List agents
     * @param {AIAgentsApiAiAgentsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsList(requestParameters: AgentsApiAiAgentsListRequest = {}, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsList(requestParameters.subjectId, requestParameters.subjectOwnerId, requestParameters.excludeSubject, requestParameters.tags, requestParameters.withoutTags, requestParameters.quotaFilter, requestParameters.filterValue, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.startIndex, requestParameters.count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the unread items across the caller\'s AI agent rooms, so a badge can be rendered without walking each room. It takes no parameters and is scoped to the caller by the DocSpace AI service. The answer is that service\'s new-items payload. This is a read-only operation and does not mark anything as seen.
     * @summary List agent news items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsNews(options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsNews(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the listed AI agent rooms to the portal\'s default storage quota, forwarding `roomIds` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. This is the counterpart of `PUT api/2.0/ai/agents/agentquota` and takes no quota value of its own. Rooms already on the default are unaffected.
     * @summary Reset agents\' quota
     * @param {AIAgentsApiAiAgentsResetQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsResetQuota(requestParameters: AgentsApiAiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsResetQuota(requestParameters.aiAgentsResetQuotaRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes an AI agent room - its title, tags or standing instruction - and optionally rebinds its model. The ID has to be the room\'s integer identifier. `profileId` is not part of the room contract: it is taken out of the forwarded body and applied afterwards as the agent\'s assignment, and it has to be a UUID naming an existing chat-capable profile. An instruction sent as `chatSettings.prompt` has its markup stripped, as on create; note that when `chatSettings` is present the upstream service still requires the rest of that object to be valid, so send it whole.
     * @summary Update an agent
     * @param {AIAgentsApiAiAgentsUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsUpdate(requestParameters: AgentsApiAiAgentsUpdateRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsUpdate(requestParameters.id, requestParameters.aiAgentsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the storage quota of the listed AI agent rooms in one call, forwarding `roomIds` and `quota` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. A quota applies to the room\'s stored files, not to the model usage of its chats. Use `PUT api/2.0/ai/agents/resetquota` to return rooms to the portal default instead of naming a number.
     * @summary Update agents\' quota
     * @param {AIAgentsApiAiAgentsUpdateQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsUpdateQuota(requestParameters: AgentsApiAiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsUpdateQuota(requestParameters.aiAgentsUpdateQuotaRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

