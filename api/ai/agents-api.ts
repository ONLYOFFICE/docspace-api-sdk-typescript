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
import type { CreateAgentRequestDto } from '../../models';
// @ts-ignore
import type { DeleteRoomRequest } from '../../models';
// @ts-ignore
import type { FileOperationWrapper } from '../../models';
// @ts-ignore
import type { FolderContentIntegerWrapper } from '../../models';
// @ts-ignore
import type { FolderIntegerArrayWrapper } from '../../models';
// @ts-ignore
import type { FolderIntegerWrapper } from '../../models';
// @ts-ignore
import type { NewItemsAgentNewItemsArrayWrapper } from '../../models';
// @ts-ignore
import type { QuotaFilter } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { SubjectFilter } from '../../models';
// @ts-ignore
import type { UpdateRoomRequest } from '../../models';
// @ts-ignore
import type { UpdateRoomsQuotaRequestDtoInteger } from '../../models';
// @ts-ignore
import type { UpdateRoomsRoomIdsRequestDtoInteger } from '../../models';
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
         * Creates an ai agent.
         * @summary Create an ai agent
         * @param {CreateAgentRequestDto} [createAgentRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-agent/
         */
        createAgent: async (createAgentRequestDto?: CreateAgentRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(createAgentRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes an ai agent.
         * @summary Remove an ai agent
         * @param {number} id The room ID.
         * @param {DeleteRoomRequest} deleteRoomRequest The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-agent/
         */
        deleteAgent: async (id: number, deleteRoomRequest: DeleteRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteAgent', 'id', id)
            // verify required parameter 'deleteRoomRequest' is not null or undefined
            assertParamExists('deleteAgent', 'deleteRoomRequest', deleteRoomRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteRoomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns an ai agent.
         * @summary Return an ai agent
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAgentInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agent-info/
         */
        getAgentInfo: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAgentInfo', 'id', id)

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
         * Get ai agents
         * @summary Get ai agents
         * @param {string} [subjectId] The filter by user ID.
         * @param {boolean} [withoutTags] Specifies whether to search by tags or not.
         * @param {string} [tags] The tags in the serialized format.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {SubjectFilter} [subjectFilter] The filter by user (Owner - 0, Member - 1).
         * @param {QuotaFilter} [quotaFilter] The filter by quota (All - 0, Default - 1, Custom - 2).
         * @param {number} [count] Specifies the maximum number of items to retrieve.
         * @param {number} [startIndex] The index from which to start retrieving the room content.
         * @param {string} [sortBy] Specifies the field by which the room content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text filter value used to refine search or query operations.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAgents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents/
         */
        getAgents: async (subjectId?: string, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (subjectId !== undefined) {
                localVarQueryParameter['subjectId'] = subjectId;
            }

            if (withoutTags !== undefined) {
                localVarQueryParameter['withoutTags'] = withoutTags;
            }

            if (tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            if (excludeSubject !== undefined) {
                localVarQueryParameter['excludeSubject'] = excludeSubject;
            }

            if (subjectFilter !== undefined) {
                localVarQueryParameter['subjectFilter'] = subjectFilter;
            }

            if (quotaFilter !== undefined) {
                localVarQueryParameter['quotaFilter'] = quotaFilter;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Returns the room new items.
         * @summary Get the room new items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAgentsNewItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents-new-items/
         */
        getAgentsNewItems: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * Resets the quota limit for the AI agents with the IDs specified in the request.
         * @summary Reset the AI agents quota limit
         * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetAgentsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-agents-quota/
         */
        resetAgentsQuota: async (updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomsRoomIdsRequestDtoInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an ai agent.
         * @summary Update an ai agent
         * @param {number} id The room ID.
         * @param {UpdateRoomRequest} updateRoomRequest The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agent/
         */
        updateAgent: async (id: number, updateRoomRequest: UpdateRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateAgent', 'id', id)
            // verify required parameter 'updateRoomRequest' is not null or undefined
            assertParamExists('updateAgent', 'updateRoomRequest', updateRoomRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the quota limit for the AI agents with the IDs specified in the request.
         * @summary Change the AI agent quota limit
         * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateAgentsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agents-quota/
         */
        updateAgentsQuota: async (updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomsQuotaRequestDtoInteger, localVarRequestOptions, configuration)

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
         * Creates an ai agent.
         * @summary Create an ai agent
         * @param {CreateAgentRequestDto} [createAgentRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-agent/
         */
        async createAgent(createAgentRequestDto?: CreateAgentRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAgent(createAgentRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.createAgent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes an ai agent.
         * @summary Remove an ai agent
         * @param {number} id The room ID.
         * @param {DeleteRoomRequest} deleteRoomRequest The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-agent/
         */
        async deleteAgent(id: number, deleteRoomRequest: DeleteRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAgent(id, deleteRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.deleteAgent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns an ai agent.
         * @summary Return an ai agent
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAgentInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agent-info/
         */
        async getAgentInfo(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAgentInfo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.getAgentInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get ai agents
         * @summary Get ai agents
         * @param {string} [subjectId] The filter by user ID.
         * @param {boolean} [withoutTags] Specifies whether to search by tags or not.
         * @param {string} [tags] The tags in the serialized format.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {SubjectFilter} [subjectFilter] The filter by user (Owner - 0, Member - 1).
         * @param {QuotaFilter} [quotaFilter] The filter by quota (All - 0, Default - 1, Custom - 2).
         * @param {number} [count] Specifies the maximum number of items to retrieve.
         * @param {number} [startIndex] The index from which to start retrieving the room content.
         * @param {string} [sortBy] Specifies the field by which the room content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text filter value used to refine search or query operations.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAgents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents/
         */
        async getAgents(subjectId?: string, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAgents(subjectId, withoutTags, tags, excludeSubject, subjectFilter, quotaFilter, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.getAgents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the room new items.
         * @summary Get the room new items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAgentsNewItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents-new-items/
         */
        async getAgentsNewItems(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewItemsAgentNewItemsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAgentsNewItems(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.getAgentsNewItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the quota limit for the AI agents with the IDs specified in the request.
         * @summary Reset the AI agents quota limit
         * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetAgentsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-agents-quota/
         */
        async resetAgentsQuota(updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetAgentsQuota(updateRoomsRoomIdsRequestDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.resetAgentsQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates an ai agent.
         * @summary Update an ai agent
         * @param {number} id The room ID.
         * @param {UpdateRoomRequest} updateRoomRequest The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agent/
         */
        async updateAgent(id: number, updateRoomRequest: UpdateRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAgent(id, updateRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.updateAgent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the quota limit for the AI agents with the IDs specified in the request.
         * @summary Change the AI agent quota limit
         * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateAgentsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agents-quota/
         */
        async updateAgentsQuota(updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAgentsQuota(updateRoomsQuotaRequestDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.updateAgentsQuota']?.[localVarOperationServerIndex]?.url;
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
         * Creates an ai agent.
         * @summary Create an ai agent
         * @param {CreateAgentRequestDto} [createAgentRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-agent/
         * @throws {RequiredError}
         */
        createAgent(createAgentRequestDto?: CreateAgentRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.createAgent(createAgentRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes an ai agent.
         * @summary Remove an ai agent
         * @param {number} id The room ID.
         * @param {DeleteRoomRequest} deleteRoomRequest The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-agent/
         * @throws {RequiredError}
         */
        deleteAgent(id: number, deleteRoomRequest: DeleteRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.deleteAgent(id, deleteRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an ai agent.
         * @summary Return an ai agent
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAgentInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agent-info/
         * @throws {RequiredError}
         */
        getAgentInfo(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.getAgentInfo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get ai agents
         * @summary Get ai agents
         * @param {string} [subjectId] The filter by user ID.
         * @param {boolean} [withoutTags] Specifies whether to search by tags or not.
         * @param {string} [tags] The tags in the serialized format.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {SubjectFilter} [subjectFilter] The filter by user (Owner - 0, Member - 1).
         * @param {QuotaFilter} [quotaFilter] The filter by quota (All - 0, Default - 1, Custom - 2).
         * @param {number} [count] Specifies the maximum number of items to retrieve.
         * @param {number} [startIndex] The index from which to start retrieving the room content.
         * @param {string} [sortBy] Specifies the field by which the room content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text filter value used to refine search or query operations.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAgents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents/
         * @throws {RequiredError}
         */
        getAgents(subjectId?: string, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getAgents(subjectId, withoutTags, tags, excludeSubject, subjectFilter, quotaFilter, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the room new items.
         * @summary Get the room new items
         * @param {*} [options] Override http request option.
         * REST API Reference for getAgentsNewItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents-new-items/
         * @throws {RequiredError}
         */
        getAgentsNewItems(options?: RawAxiosRequestConfig): AxiosPromise<NewItemsAgentNewItemsArrayWrapper> {
            return localVarFp.getAgentsNewItems(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the quota limit for the AI agents with the IDs specified in the request.
         * @summary Reset the AI agents quota limit
         * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for resetAgentsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-agents-quota/
         * @throws {RequiredError}
         */
        resetAgentsQuota(updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerArrayWrapper> {
            return localVarFp.resetAgentsQuota(updateRoomsRoomIdsRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an ai agent.
         * @summary Update an ai agent
         * @param {number} id The room ID.
         * @param {UpdateRoomRequest} updateRoomRequest The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateAgent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agent/
         * @throws {RequiredError}
         */
        updateAgent(id: number, updateRoomRequest: UpdateRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.updateAgent(id, updateRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the quota limit for the AI agents with the IDs specified in the request.
         * @summary Change the AI agent quota limit
         * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateAgentsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agents-quota/
         * @throws {RequiredError}
         */
        updateAgentsQuota(updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerArrayWrapper> {
            return localVarFp.updateAgentsQuota(updateRoomsQuotaRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AgentsApi - object-oriented interface
 * @export
 * @class AgentsApi
 * @extends {BaseAPI}
 */
export class AgentsApi extends BaseAPI {
    /**
     * Creates an ai agent.
     * @summary Create an ai agent
     * @param {CreateAgentRequestDto} [createAgentRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public createAgent(createAgentRequestDto?: CreateAgentRequestDto, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).createAgent(createAgentRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes an ai agent.
     * @summary Remove an ai agent
     * @param {number} id The room ID.
     * @param {DeleteRoomRequest} deleteRoomRequest The parameters for deleting a room.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public deleteAgent(id: number, deleteRoomRequest: DeleteRoomRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).deleteAgent(id, deleteRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an ai agent.
     * @summary Return an ai agent
     * @param {number} id The room ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public getAgentInfo(id: number, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).getAgentInfo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get ai agents
     * @summary Get ai agents
     * @param {string} [subjectId] The filter by user ID.
     * @param {boolean} [withoutTags] Specifies whether to search by tags or not.
     * @param {string} [tags] The tags in the serialized format.
     * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
     * @param {SubjectFilter} [subjectFilter] The filter by user (Owner - 0, Member - 1).
     * @param {QuotaFilter} [quotaFilter] The filter by quota (All - 0, Default - 1, Custom - 2).
     * @param {number} [count] Specifies the maximum number of items to retrieve.
     * @param {number} [startIndex] The index from which to start retrieving the room content.
     * @param {string} [sortBy] Specifies the field by which the room content should be sorted.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text filter value used to refine search or query operations.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public getAgents(subjectId?: string, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).getAgents(subjectId, withoutTags, tags, excludeSubject, subjectFilter, quotaFilter, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the room new items.
     * @summary Get the room new items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public getAgentsNewItems(options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).getAgentsNewItems(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the quota limit for the AI agents with the IDs specified in the request.
     * @summary Reset the AI agents quota limit
     * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public resetAgentsQuota(updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).resetAgentsQuota(updateRoomsRoomIdsRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an ai agent.
     * @summary Update an ai agent
     * @param {number} id The room ID.
     * @param {UpdateRoomRequest} updateRoomRequest The request parameters for updating a room.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public updateAgent(id: number, updateRoomRequest: UpdateRoomRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).updateAgent(id, updateRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the quota limit for the AI agents with the IDs specified in the request.
     * @summary Change the AI agent quota limit
     * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     */
    public updateAgentsQuota(updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).updateAgentsQuota(updateRoomsQuotaRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }
}

