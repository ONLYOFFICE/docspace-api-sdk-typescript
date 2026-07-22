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
import type { NewAiCreateProfileInput } from '../../models';
// @ts-ignore
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiModel } from '../../models';
// @ts-ignore
import type { NewAiProfile } from '../../models';
// @ts-ignore
import type { NewAiProfileMutationResult } from '../../models';
// @ts-ignore
import type { NewAiProfilesListProviderModelsRequest } from '../../models';
// @ts-ignore
import type { NewAiProfilesTestConnection200Response } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
/**
 * ProfilesApi - axios parameter creator
 * @export
 */
export const ProfilesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Create
         * @param {NewAiCreateProfileInput} newAiCreateProfileInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-create/
         */
        newAiProfilesCreate: async (newAiCreateProfileInput: NewAiCreateProfileInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiCreateProfileInput' is not null or undefined
            assertParamExists('newAiProfilesCreate', 'newAiCreateProfileInput', newAiCreateProfileInput)

            const localVarPath = `/api/2.0/new-ai/profiles/create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiCreateProfileInput, localVarRequestOptions, configuration)

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
         * REST API Reference for newAiProfilesDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-delete/
         */
        newAiProfilesDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiProfilesDelete', 'body', body)

            const localVarPath = `/api/2.0/new-ai/profiles/delete`;
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
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-get-by-id/
         */
        newAiProfilesGetById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('newAiProfilesGetById', 'id', id)

            const localVarPath = `/api/2.0/new-ai/profiles/get-by-id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list/
         */
        newAiProfilesList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/new-ai/profiles/list`;
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
         * @summary List models
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesListModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-models/
         */
        newAiProfilesListModels: async (profileId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('newAiProfilesListModels', 'profileId', profileId)

            const localVarPath = `/api/2.0/new-ai/profiles/list-models`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (profileId !== undefined) {
                localVarQueryParameter['profileId'] = profileId;
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
         * @summary List provider models
         * @param {NewAiProfilesListProviderModelsRequest} newAiProfilesListProviderModelsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesListProviderModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-provider-models/
         */
        newAiProfilesListProviderModels: async (newAiProfilesListProviderModelsRequest: NewAiProfilesListProviderModelsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiProfilesListProviderModelsRequest' is not null or undefined
            assertParamExists('newAiProfilesListProviderModels', 'newAiProfilesListProviderModelsRequest', newAiProfilesListProviderModelsRequest)

            const localVarPath = `/api/2.0/new-ai/profiles/list-provider-models`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiProfilesListProviderModelsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Test connection
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-test-connection/
         */
        newAiProfilesTestConnection: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiProfilesTestConnection', 'body', body)

            const localVarPath = `/api/2.0/new-ai/profiles/test-connection`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update
         * @param {NewAiProfile} newAiProfile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-update/
         */
        newAiProfilesUpdate: async (newAiProfile: NewAiProfile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiProfile' is not null or undefined
            assertParamExists('newAiProfilesUpdate', 'newAiProfile', newAiProfile)

            const localVarPath = `/api/2.0/new-ai/profiles/update`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiProfile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfilesApi - functional programming interface
 * @export
 */
export const ProfilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProfilesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create
         * @param {NewAiCreateProfileInput} newAiCreateProfileInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-create/
         */
        async newAiProfilesCreate(newAiCreateProfileInput: NewAiCreateProfileInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiProfileMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesCreate(newAiCreateProfileInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-delete/
         */
        async newAiProfilesDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-get-by-id/
         */
        async newAiProfilesGetById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesGetById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesGetById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list/
         */
        async newAiProfilesList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiProfile>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List models
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesListModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-models/
         */
        async newAiProfilesListModels(profileId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesListModels(profileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesListModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List provider models
         * @param {NewAiProfilesListProviderModelsRequest} newAiProfilesListProviderModelsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesListProviderModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-provider-models/
         */
        async newAiProfilesListProviderModels(newAiProfilesListProviderModelsRequest: NewAiProfilesListProviderModelsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesListProviderModels(newAiProfilesListProviderModelsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesListProviderModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Test connection
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-test-connection/
         */
        async newAiProfilesTestConnection(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiProfilesTestConnection200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesTestConnection(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesTestConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update
         * @param {NewAiProfile} newAiProfile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiProfilesUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-update/
         */
        async newAiProfilesUpdate(newAiProfile: NewAiProfile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiProfileMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiProfilesUpdate(newAiProfile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.newAiProfilesUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProfilesApi - factory interface
 * @export
 */
export const ProfilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProfilesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create
         * @param {ProfilesApiNewAiProfilesCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-create/
         * @throws {RequiredError}
         */
        newAiProfilesCreate(requestParameters: ProfilesApiNewAiProfilesCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiProfileMutationResult> {
            return localVarFp.newAiProfilesCreate(requestParameters.newAiCreateProfileInput, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete
         * @param {ProfilesApiNewAiProfilesDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-delete/
         * @throws {RequiredError}
         */
        newAiProfilesDelete(requestParameters: ProfilesApiNewAiProfilesDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiProfilesDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get by id
         * @param {ProfilesApiNewAiProfilesGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-get-by-id/
         * @throws {RequiredError}
         */
        newAiProfilesGetById(requestParameters: ProfilesApiNewAiProfilesGetByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiProfile> {
            return localVarFp.newAiProfilesGetById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list/
         * @throws {RequiredError}
         */
        newAiProfilesList(options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiProfile>> {
            return localVarFp.newAiProfilesList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List models
         * @param {ProfilesApiNewAiProfilesListModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesListModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-models/
         * @throws {RequiredError}
         */
        newAiProfilesListModels(requestParameters: ProfilesApiNewAiProfilesListModelsRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiModel>> {
            return localVarFp.newAiProfilesListModels(requestParameters.profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List provider models
         * @param {ProfilesApiNewAiProfilesListProviderModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesListProviderModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-provider-models/
         * @throws {RequiredError}
         */
        newAiProfilesListProviderModels(requestParameters: ProfilesApiNewAiProfilesListProviderModelsRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiModel>> {
            return localVarFp.newAiProfilesListProviderModels(requestParameters.newAiProfilesListProviderModelsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Test connection
         * @param {ProfilesApiNewAiProfilesTestConnectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-test-connection/
         * @throws {RequiredError}
         */
        newAiProfilesTestConnection(requestParameters: ProfilesApiNewAiProfilesTestConnectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiProfilesTestConnection200Response> {
            return localVarFp.newAiProfilesTestConnection(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update
         * @param {ProfilesApiNewAiProfilesUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiProfilesUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-update/
         * @throws {RequiredError}
         */
        newAiProfilesUpdate(requestParameters: ProfilesApiNewAiProfilesUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiProfileMutationResult> {
            return localVarFp.newAiProfilesUpdate(requestParameters.newAiProfile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiProfilesCreate operation in ProfilesApi.
 * @export
 * @interface ProfilesApiNewAiProfilesCreateRequest
 */
export interface ProfilesApiNewAiProfilesCreateRequest {
    /**
     * 
     * @type {NewAiCreateProfileInput}
     * @memberof ProfilesApiNewAiProfilesCreate
     */
    readonly newAiCreateProfileInput: NewAiCreateProfileInput
}

/**
 * Request parameters for newAiProfilesDelete operation in ProfilesApi.
 * @export
 * @interface ProfilesApiNewAiProfilesDeleteRequest
 */
export interface ProfilesApiNewAiProfilesDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof ProfilesApiNewAiProfilesDelete
     */
    readonly body: string
}

/**
 * Request parameters for newAiProfilesGetById operation in ProfilesApi.
 * @export
 * @interface ProfilesApiNewAiProfilesGetByIdRequest
 */
export interface ProfilesApiNewAiProfilesGetByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof ProfilesApiNewAiProfilesGetById
     */
    readonly id: string
}

/**
 * Request parameters for newAiProfilesListModels operation in ProfilesApi.
 * @export
 * @interface ProfilesApiNewAiProfilesListModelsRequest
 */
export interface ProfilesApiNewAiProfilesListModelsRequest {
    /**
     * 
     * @type {string}
     * @memberof ProfilesApiNewAiProfilesListModels
     */
    readonly profileId: string
}

/**
 * Request parameters for newAiProfilesListProviderModels operation in ProfilesApi.
 * @export
 * @interface ProfilesApiNewAiProfilesListProviderModelsRequest
 */
export interface ProfilesApiNewAiProfilesListProviderModelsRequest {
    /**
     * 
     * @type {NewAiProfilesListProviderModelsRequest}
     * @memberof ProfilesApiNewAiProfilesListProviderModels
     */
    readonly newAiProfilesListProviderModelsRequest: NewAiProfilesListProviderModelsRequest
}

/**
 * Request parameters for newAiProfilesTestConnection operation in ProfilesApi.
 * @export
 * @interface ProfilesApiNewAiProfilesTestConnectionRequest
 */
export interface ProfilesApiNewAiProfilesTestConnectionRequest {
    /**
     * 
     * @type {string}
     * @memberof ProfilesApiNewAiProfilesTestConnection
     */
    readonly body: string
}

/**
 * Request parameters for newAiProfilesUpdate operation in ProfilesApi.
 * @export
 * @interface ProfilesApiNewAiProfilesUpdateRequest
 */
export interface ProfilesApiNewAiProfilesUpdateRequest {
    /**
     * 
     * @type {NewAiProfile}
     * @memberof ProfilesApiNewAiProfilesUpdate
     */
    readonly newAiProfile: NewAiProfile
}

/**
 * ProfilesApi - object-oriented interface
 * @export
 * @class ProfilesApi
 * @extends {BaseAPI}
 */
export class ProfilesApi extends BaseAPI {
    /**
     * 
     * @summary Create
     * @param {NewAIProfilesApiNewAiProfilesCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesCreate(requestParameters: ProfilesApiNewAiProfilesCreateRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesCreate(requestParameters.newAiCreateProfileInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete
     * @param {NewAIProfilesApiNewAiProfilesDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesDelete(requestParameters: ProfilesApiNewAiProfilesDeleteRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get by id
     * @param {NewAIProfilesApiNewAiProfilesGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesGetById(requestParameters: ProfilesApiNewAiProfilesGetByIdRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesGetById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesList(options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List models
     * @param {NewAIProfilesApiNewAiProfilesListModelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesListModels(requestParameters: ProfilesApiNewAiProfilesListModelsRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesListModels(requestParameters.profileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List provider models
     * @param {NewAIProfilesApiNewAiProfilesListProviderModelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesListProviderModels(requestParameters: ProfilesApiNewAiProfilesListProviderModelsRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesListProviderModels(requestParameters.newAiProfilesListProviderModelsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Test connection
     * @param {NewAIProfilesApiNewAiProfilesTestConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesTestConnection(requestParameters: ProfilesApiNewAiProfilesTestConnectionRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesTestConnection(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update
     * @param {NewAIProfilesApiNewAiProfilesUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public newAiProfilesUpdate(requestParameters: ProfilesApiNewAiProfilesUpdateRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).newAiProfilesUpdate(requestParameters.newAiProfile, options).then((request) => request(this.axios, this.basePath));
    }
}

