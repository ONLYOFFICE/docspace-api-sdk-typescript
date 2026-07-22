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
import type { NewAiAgentsCreateRequest } from '../../models';
// @ts-ignore
import type { NewAiAgentsDeleteRequest } from '../../models';
// @ts-ignore
import type { NewAiAgentsResetQuotaRequest } from '../../models';
// @ts-ignore
import type { NewAiAgentsUpdateQuotaRequest } from '../../models';
// @ts-ignore
import type { NewAiAgentsUpdateRequest } from '../../models';
// @ts-ignore
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiFileOperationWrapper } from '../../models';
// @ts-ignore
import type { NewAiFolderContentIntegerWrapper } from '../../models';
// @ts-ignore
import type { NewAiFolderIntegerArrayWrapper } from '../../models';
// @ts-ignore
import type { NewAiFolderIntegerWrapper } from '../../models';
// @ts-ignore
import type { NewAiNewItemsAgentNewItemsArrayWrapper } from '../../models';
/**
 * NewAIAgentsApi - axios parameter creator
 * @export
 */
export const NewAIAgentsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Create an agent
         * @param {NewAiAgentsCreateRequest} newAiAgentsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-create/
         */
        newAiAgentsCreate: async (newAiAgentsCreateRequest: NewAiAgentsCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAgentsCreateRequest' is not null or undefined
            assertParamExists('newAiAgentsCreate', 'newAiAgentsCreateRequest', newAiAgentsCreateRequest)

            const localVarPath = `/api/2.0/new-ai/agents`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAgentsCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an agent
         * @param {string} id 
         * @param {NewAiAgentsDeleteRequest} newAiAgentsDeleteRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-delete/
         */
        newAiAgentsDelete: async (id: string, newAiAgentsDeleteRequest: NewAiAgentsDeleteRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('newAiAgentsDelete', 'id', id)
            // verify required parameter 'newAiAgentsDeleteRequest' is not null or undefined
            assertParamExists('newAiAgentsDelete', 'newAiAgentsDeleteRequest', newAiAgentsDeleteRequest)

            const localVarPath = `/api/2.0/new-ai/agents/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAgentsDeleteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an agent
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-get/
         */
        newAiAgentsGet: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('newAiAgentsGet', 'id', id)

            const localVarPath = `/api/2.0/new-ai/agents/{id}`
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
         * 
         * @summary List agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-list/
         */
        newAiAgentsList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/new-ai/agents`;
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
         * 
         * @summary List agent news items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsNews operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-news/
         */
        newAiAgentsNews: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/new-ai/agents/news`;
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
         * 
         * @summary Reset agents\' quota
         * @param {NewAiAgentsResetQuotaRequest} newAiAgentsResetQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-reset-quota/
         */
        newAiAgentsResetQuota: async (newAiAgentsResetQuotaRequest: NewAiAgentsResetQuotaRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAgentsResetQuotaRequest' is not null or undefined
            assertParamExists('newAiAgentsResetQuota', 'newAiAgentsResetQuotaRequest', newAiAgentsResetQuotaRequest)

            const localVarPath = `/api/2.0/new-ai/agents/resetquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAgentsResetQuotaRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an agent
         * @param {string} id 
         * @param {NewAiAgentsUpdateRequest} newAiAgentsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update/
         */
        newAiAgentsUpdate: async (id: string, newAiAgentsUpdateRequest: NewAiAgentsUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('newAiAgentsUpdate', 'id', id)
            // verify required parameter 'newAiAgentsUpdateRequest' is not null or undefined
            assertParamExists('newAiAgentsUpdate', 'newAiAgentsUpdateRequest', newAiAgentsUpdateRequest)

            const localVarPath = `/api/2.0/new-ai/agents/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAgentsUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update agents\' quota
         * @param {NewAiAgentsUpdateQuotaRequest} newAiAgentsUpdateQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update-quota/
         */
        newAiAgentsUpdateQuota: async (newAiAgentsUpdateQuotaRequest: NewAiAgentsUpdateQuotaRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAgentsUpdateQuotaRequest' is not null or undefined
            assertParamExists('newAiAgentsUpdateQuota', 'newAiAgentsUpdateQuotaRequest', newAiAgentsUpdateQuotaRequest)

            const localVarPath = `/api/2.0/new-ai/agents/agentquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAgentsUpdateQuotaRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NewAIAgentsApi - functional programming interface
 * @export
 */
export const NewAIAgentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NewAIAgentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create an agent
         * @param {NewAiAgentsCreateRequest} newAiAgentsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-create/
         */
        async newAiAgentsCreate(newAiAgentsCreateRequest: NewAiAgentsCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsCreate(newAiAgentsCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete an agent
         * @param {string} id 
         * @param {NewAiAgentsDeleteRequest} newAiAgentsDeleteRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-delete/
         */
        async newAiAgentsDelete(id: string, newAiAgentsDeleteRequest: NewAiAgentsDeleteRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsDelete(id, newAiAgentsDeleteRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get an agent
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-get/
         */
        async newAiAgentsGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-list/
         */
        async newAiAgentsList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List agent news items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsNews operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-news/
         */
        async newAiAgentsNews(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiNewItemsAgentNewItemsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsNews(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsNews']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Reset agents\' quota
         * @param {NewAiAgentsResetQuotaRequest} newAiAgentsResetQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-reset-quota/
         */
        async newAiAgentsResetQuota(newAiAgentsResetQuotaRequest: NewAiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsResetQuota(newAiAgentsResetQuotaRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsResetQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update an agent
         * @param {string} id 
         * @param {NewAiAgentsUpdateRequest} newAiAgentsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update/
         */
        async newAiAgentsUpdate(id: string, newAiAgentsUpdateRequest: NewAiAgentsUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsUpdate(id, newAiAgentsUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update agents\' quota
         * @param {NewAiAgentsUpdateQuotaRequest} newAiAgentsUpdateQuotaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update-quota/
         */
        async newAiAgentsUpdateQuota(newAiAgentsUpdateQuotaRequest: NewAiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAgentsUpdateQuota(newAiAgentsUpdateQuotaRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAIAgentsApi.newAiAgentsUpdateQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NewAIAgentsApi - factory interface
 * @export
 */
export const NewAIAgentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NewAIAgentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create an agent
         * @param {NewAIAgentsApiNewAiAgentsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-create/
         * @throws {RequiredError}
         */
        newAiAgentsCreate(requestParameters: NewAIAgentsApiNewAiAgentsCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderIntegerWrapper> {
            return localVarFp.newAiAgentsCreate(requestParameters.newAiAgentsCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an agent
         * @param {NewAIAgentsApiNewAiAgentsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-delete/
         * @throws {RequiredError}
         */
        newAiAgentsDelete(requestParameters: NewAIAgentsApiNewAiAgentsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFileOperationWrapper> {
            return localVarFp.newAiAgentsDelete(requestParameters.id, requestParameters.newAiAgentsDeleteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get an agent
         * @param {NewAIAgentsApiNewAiAgentsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-get/
         * @throws {RequiredError}
         */
        newAiAgentsGet(requestParameters: NewAIAgentsApiNewAiAgentsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderIntegerWrapper> {
            return localVarFp.newAiAgentsGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List agents
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-list/
         * @throws {RequiredError}
         */
        newAiAgentsList(options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderContentIntegerWrapper> {
            return localVarFp.newAiAgentsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List agent news items
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsNews operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-news/
         * @throws {RequiredError}
         */
        newAiAgentsNews(options?: RawAxiosRequestConfig): AxiosPromise<NewAiNewItemsAgentNewItemsArrayWrapper> {
            return localVarFp.newAiAgentsNews(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reset agents\' quota
         * @param {NewAIAgentsApiNewAiAgentsResetQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsResetQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-reset-quota/
         * @throws {RequiredError}
         */
        newAiAgentsResetQuota(requestParameters: NewAIAgentsApiNewAiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderIntegerArrayWrapper> {
            return localVarFp.newAiAgentsResetQuota(requestParameters.newAiAgentsResetQuotaRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an agent
         * @param {NewAIAgentsApiNewAiAgentsUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update/
         * @throws {RequiredError}
         */
        newAiAgentsUpdate(requestParameters: NewAIAgentsApiNewAiAgentsUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderIntegerWrapper> {
            return localVarFp.newAiAgentsUpdate(requestParameters.id, requestParameters.newAiAgentsUpdateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update agents\' quota
         * @param {NewAIAgentsApiNewAiAgentsUpdateQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAgentsUpdateQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update-quota/
         * @throws {RequiredError}
         */
        newAiAgentsUpdateQuota(requestParameters: NewAIAgentsApiNewAiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderIntegerArrayWrapper> {
            return localVarFp.newAiAgentsUpdateQuota(requestParameters.newAiAgentsUpdateQuotaRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiAgentsCreate operation in NewAIAgentsApi.
 * @export
 * @interface NewAIAgentsApiNewAiAgentsCreateRequest
 */
export interface NewAIAgentsApiNewAiAgentsCreateRequest {
    /**
     * 
     * @type {NewAiAgentsCreateRequest}
     * @memberof NewAIAgentsApiNewAiAgentsCreate
     */
    readonly newAiAgentsCreateRequest: NewAiAgentsCreateRequest
}

/**
 * Request parameters for newAiAgentsDelete operation in NewAIAgentsApi.
 * @export
 * @interface NewAIAgentsApiNewAiAgentsDeleteRequest
 */
export interface NewAIAgentsApiNewAiAgentsDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof NewAIAgentsApiNewAiAgentsDelete
     */
    readonly id: string

    /**
     * 
     * @type {NewAiAgentsDeleteRequest}
     * @memberof NewAIAgentsApiNewAiAgentsDelete
     */
    readonly newAiAgentsDeleteRequest: NewAiAgentsDeleteRequest
}

/**
 * Request parameters for newAiAgentsGet operation in NewAIAgentsApi.
 * @export
 * @interface NewAIAgentsApiNewAiAgentsGetRequest
 */
export interface NewAIAgentsApiNewAiAgentsGetRequest {
    /**
     * 
     * @type {string}
     * @memberof NewAIAgentsApiNewAiAgentsGet
     */
    readonly id: string
}

/**
 * Request parameters for newAiAgentsResetQuota operation in NewAIAgentsApi.
 * @export
 * @interface NewAIAgentsApiNewAiAgentsResetQuotaRequest
 */
export interface NewAIAgentsApiNewAiAgentsResetQuotaRequest {
    /**
     * 
     * @type {NewAiAgentsResetQuotaRequest}
     * @memberof NewAIAgentsApiNewAiAgentsResetQuota
     */
    readonly newAiAgentsResetQuotaRequest: NewAiAgentsResetQuotaRequest
}

/**
 * Request parameters for newAiAgentsUpdate operation in NewAIAgentsApi.
 * @export
 * @interface NewAIAgentsApiNewAiAgentsUpdateRequest
 */
export interface NewAIAgentsApiNewAiAgentsUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof NewAIAgentsApiNewAiAgentsUpdate
     */
    readonly id: string

    /**
     * 
     * @type {NewAiAgentsUpdateRequest}
     * @memberof NewAIAgentsApiNewAiAgentsUpdate
     */
    readonly newAiAgentsUpdateRequest: NewAiAgentsUpdateRequest
}

/**
 * Request parameters for newAiAgentsUpdateQuota operation in NewAIAgentsApi.
 * @export
 * @interface NewAIAgentsApiNewAiAgentsUpdateQuotaRequest
 */
export interface NewAIAgentsApiNewAiAgentsUpdateQuotaRequest {
    /**
     * 
     * @type {NewAiAgentsUpdateQuotaRequest}
     * @memberof NewAIAgentsApiNewAiAgentsUpdateQuota
     */
    readonly newAiAgentsUpdateQuotaRequest: NewAiAgentsUpdateQuotaRequest
}

/**
 * NewAIAgentsApi - object-oriented interface
 * @export
 * @class NewAIAgentsApi
 * @extends {BaseAPI}
 */
export class NewAIAgentsApi extends BaseAPI {
    /**
     * 
     * @summary Create an agent
     * @param {NewAIAgentsApiNewAiAgentsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsCreate(requestParameters: NewAIAgentsApiNewAiAgentsCreateRequest, options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsCreate(requestParameters.newAiAgentsCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an agent
     * @param {NewAIAgentsApiNewAiAgentsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsDelete(requestParameters: NewAIAgentsApiNewAiAgentsDeleteRequest, options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsDelete(requestParameters.id, requestParameters.newAiAgentsDeleteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get an agent
     * @param {NewAIAgentsApiNewAiAgentsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsGet(requestParameters: NewAIAgentsApiNewAiAgentsGetRequest, options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List agents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsList(options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List agent news items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsNews(options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsNews(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reset agents\' quota
     * @param {NewAIAgentsApiNewAiAgentsResetQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsResetQuota(requestParameters: NewAIAgentsApiNewAiAgentsResetQuotaRequest, options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsResetQuota(requestParameters.newAiAgentsResetQuotaRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an agent
     * @param {NewAIAgentsApiNewAiAgentsUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsUpdate(requestParameters: NewAIAgentsApiNewAiAgentsUpdateRequest, options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsUpdate(requestParameters.id, requestParameters.newAiAgentsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update agents\' quota
     * @param {NewAIAgentsApiNewAiAgentsUpdateQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAIAgentsApi
     */
    public newAiAgentsUpdateQuota(requestParameters: NewAIAgentsApiNewAiAgentsUpdateQuotaRequest, options?: RawAxiosRequestConfig) {
        return NewAIAgentsApiFp(this.configuration).newAiAgentsUpdateQuota(requestParameters.newAiAgentsUpdateQuotaRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

