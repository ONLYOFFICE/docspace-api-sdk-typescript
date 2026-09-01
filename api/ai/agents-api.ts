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
import type { AiFolderContentIntegerWrapper } from '../../models';
// @ts-ignore
import type { AiFolderIntegerArrayWrapper } from '../../models';
// @ts-ignore
import type { AiFolderIntegerWrapper } from '../../models';
// @ts-ignore
import type { AiNewItemsAgentNewItemsArrayWrapper } from '../../models';
/**
 * AgentsApi - axios parameter creator
 * @export
 */
export const AgentsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Creates an AI agent room in the .NET AI service and binds the supplied `profileId` to it as a `Chat` assignment. The instruction is stored on the room as a prompt-only chat setting; a failed binding is reported as an error even though the room already exists.
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
         * Deletes an AI agent room.
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
         * Returns one AI agent room, enriched with the `profileId` bound to it so an edit form can prefill the profile selector. A missing assignment simply leaves `profileId` out.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the portal\'s AI agent rooms. Query parameters are forwarded unchanged to the .NET AI service, which answers with its folder-content payload.
         * @summary List agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/
         */
        aiAgentsList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the new items across the caller\'s AI agent rooms.
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resets the storage quota of the given AI agent rooms.
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
         * Updates an AI agent room - title, tags, instruction. `profileId` is not part of the room contract: it is stripped from the forwarded body and re-bound as the agent\'s assignment afterwards.
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
         * Changes the storage quota of the given AI agent rooms.
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
         * Creates an AI agent room in the .NET AI service and binds the supplied `profileId` to it as a `Chat` assignment. The instruction is stored on the room as a prompt-only chat setting; a failed binding is reported as an error even though the room already exists.
         * @summary Create an agent
         * @param {AiAgentsCreateRequest} aiAgentsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-create/
         */
        async aiAgentsCreate(aiAgentsCreateRequest: AiAgentsCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsCreate(aiAgentsCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes an AI agent room.
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
         * Returns one AI agent room, enriched with the `profileId` bound to it so an edit form can prefill the profile selector. A missing assignment simply leaves `profileId` out.
         * @summary Get an agent
         * @param {string} id The agent identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-get/
         */
        async aiAgentsGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the portal\'s AI agent rooms. Query parameters are forwarded unchanged to the .NET AI service, which answers with its folder-content payload.
         * @summary List agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/
         */
        async aiAgentsList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the new items across the caller\'s AI agent rooms.
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
         * Resets the storage quota of the given AI agent rooms.
         * @summary Reset agents\' quota
         * @param {AiAgentsResetQuotaRequest} aiAgentsResetQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-reset-quota/
         */
        async aiAgentsResetQuota(aiAgentsResetQuotaRequest: AiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsResetQuota(aiAgentsResetQuotaRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsResetQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates an AI agent room - title, tags, instruction. `profileId` is not part of the room contract: it is stripped from the forwarded body and re-bound as the agent\'s assignment afterwards.
         * @summary Update an agent
         * @param {string} id The agent identifier.
         * @param {AiAgentsUpdateRequest} aiAgentsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update/
         */
        async aiAgentsUpdate(id: string, aiAgentsUpdateRequest: AiAgentsUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAgentsUpdate(id, aiAgentsUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.aiAgentsUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the storage quota of the given AI agent rooms.
         * @summary Update agents\' quota
         * @param {AiAgentsUpdateQuotaRequest} aiAgentsUpdateQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update-quota/
         */
        async aiAgentsUpdateQuota(aiAgentsUpdateQuotaRequest: AiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderIntegerArrayWrapper>> {
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
         * Creates an AI agent room in the .NET AI service and binds the supplied `profileId` to it as a `Chat` assignment. The instruction is stored on the room as a prompt-only chat setting; a failed binding is reported as an error even though the room already exists.
         * @summary Create an agent
         * @param {AgentsApiAiAgentsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-create/
         * @throws {RequiredError}
         */
        aiAgentsCreate(requestParameters: AgentsApiAiAgentsCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderIntegerWrapper> {
            return localVarFp.aiAgentsCreate(requestParameters.aiAgentsCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an AI agent room.
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
         * Returns one AI agent room, enriched with the `profileId` bound to it so an edit form can prefill the profile selector. A missing assignment simply leaves `profileId` out.
         * @summary Get an agent
         * @param {AgentsApiAiAgentsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-get/
         * @throws {RequiredError}
         */
        aiAgentsGet(requestParameters: AgentsApiAiAgentsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderIntegerWrapper> {
            return localVarFp.aiAgentsGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the portal\'s AI agent rooms. Query parameters are forwarded unchanged to the .NET AI service, which answers with its folder-content payload.
         * @summary List agents
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/
         * @throws {RequiredError}
         */
        aiAgentsList(options?: RawAxiosRequestConfig): AxiosPromise<AiFolderContentIntegerWrapper> {
            return localVarFp.aiAgentsList(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the new items across the caller\'s AI agent rooms.
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
         * Resets the storage quota of the given AI agent rooms.
         * @summary Reset agents\' quota
         * @param {AgentsApiAiAgentsResetQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-reset-quota/
         * @throws {RequiredError}
         */
        aiAgentsResetQuota(requestParameters: AgentsApiAiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderIntegerArrayWrapper> {
            return localVarFp.aiAgentsResetQuota(requestParameters.aiAgentsResetQuotaRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an AI agent room - title, tags, instruction. `profileId` is not part of the room contract: it is stripped from the forwarded body and re-bound as the agent\'s assignment afterwards.
         * @summary Update an agent
         * @param {AgentsApiAiAgentsUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update/
         * @throws {RequiredError}
         */
        aiAgentsUpdate(requestParameters: AgentsApiAiAgentsUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderIntegerWrapper> {
            return localVarFp.aiAgentsUpdate(requestParameters.id, requestParameters.aiAgentsUpdateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the storage quota of the given AI agent rooms.
         * @summary Update agents\' quota
         * @param {AgentsApiAiAgentsUpdateQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update-quota/
         * @throws {RequiredError}
         */
        aiAgentsUpdateQuota(requestParameters: AgentsApiAiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderIntegerArrayWrapper> {
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
     * Creates an AI agent room in the .NET AI service and binds the supplied `profileId` to it as a `Chat` assignment. The instruction is stored on the room as a prompt-only chat setting; a failed binding is reported as an error even though the room already exists.
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
     * Deletes an AI agent room.
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
     * Returns one AI agent room, enriched with the `profileId` bound to it so an edit form can prefill the profile selector. A missing assignment simply leaves `profileId` out.
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
     * Lists the portal\'s AI agent rooms. Query parameters are forwarded unchanged to the .NET AI service, which answers with its folder-content payload.
     * @summary List agents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsList(options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the new items across the caller\'s AI agent rooms.
     * @summary List agent news items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public aiAgentsNews(options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).aiAgentsNews(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the storage quota of the given AI agent rooms.
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
     * Updates an AI agent room - title, tags, instruction. `profileId` is not part of the room contract: it is stripped from the forwarded body and re-bound as the agent\'s assignment afterwards.
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
     * Changes the storage quota of the given AI agent rooms.
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

