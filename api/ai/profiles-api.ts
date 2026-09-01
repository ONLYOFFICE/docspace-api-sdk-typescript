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
import type { AiCreateProfileInput } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiModel } from '../../models';
// @ts-ignore
import type { AiProfile } from '../../models';
// @ts-ignore
import type { AiProfileMutationResult } from '../../models';
// @ts-ignore
import type { AiProfilesGetById200Response } from '../../models';
// @ts-ignore
import type { AiProfilesListProviderModelsRequest } from '../../models';
// @ts-ignore
import type { AiProfilesTestConnection200Response } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
/**
 * ProfilesApi - axios parameter creator
 * @export
 */
export const ProfilesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Creates an AI provider profile. The name must be unique and the credentials are validated against the provider before the profile is stored; the portal\'s first profile also takes the `Default` assignment slot.
         * @summary Create
         * @param {AiCreateProfileInput} aiCreateProfileInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-create/
         */
        aiProfilesCreate: async (aiCreateProfileInput: AiCreateProfileInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiCreateProfileInput' is not null or undefined
            assertParamExists('aiProfilesCreate', 'aiCreateProfileInput', aiCreateProfileInput)

            const localVarPath = `/api/2.0/ai/profiles/create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiCreateProfileInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an AI provider profile and cleans up the assignments pointing at it - the `Default` slot moves to the first remaining profile, the other slots are unbound.
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-delete/
         */
        aiProfilesDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiProfilesDelete', 'body', body)

            const localVarPath = `/api/2.0/ai/profiles/delete`;
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
         * Returns one AI provider profile, or an empty result when the identifier is unknown.
         * @summary Get by id
         * @param {string} id The AI provider profile identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-get-by-id/
         */
        aiProfilesGetById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiProfilesGetById', 'id', id)

            const localVarPath = `/api/2.0/ai/profiles/get-by-id`;
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
         * Lists the portal\'s AI provider profiles.
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list/
         */
        aiProfilesList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/profiles/list`;
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
         * Lists the models the given profile\'s provider offers, as reported by the provider itself.
         * @summary List models
         * @param {string} profileId The AI provider profile identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesListModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-models/
         */
        aiProfilesListModels: async (profileId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            assertParamExists('aiProfilesListModels', 'profileId', profileId)

            const localVarPath = `/api/2.0/ai/profiles/list-models`;
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
         * Lists the models a provider offers for the supplied endpoint and key, before any profile is created from them.
         * @summary List provider models
         * @param {AiProfilesListProviderModelsRequest} aiProfilesListProviderModelsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesListProviderModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-provider-models/
         */
        aiProfilesListProviderModels: async (aiProfilesListProviderModelsRequest: AiProfilesListProviderModelsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiProfilesListProviderModelsRequest' is not null or undefined
            assertParamExists('aiProfilesListProviderModels', 'aiProfilesListProviderModelsRequest', aiProfilesListProviderModelsRequest)

            const localVarPath = `/api/2.0/ai/profiles/list-provider-models`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiProfilesListProviderModelsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks a stored profile\'s credentials against its provider and reports the provider\'s own error when the call fails. Nothing is written.
         * @summary Test connection
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-test-connection/
         */
        aiProfilesTestConnection: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiProfilesTestConnection', 'body', body)

            const localVarPath = `/api/2.0/ai/profiles/test-connection`;
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
         * Updates an AI provider profile, re-checking name uniqueness and the provider credentials.
         * @summary Update
         * @param {AiProfile} aiProfile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-update/
         */
        aiProfilesUpdate: async (aiProfile: AiProfile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiProfile' is not null or undefined
            assertParamExists('aiProfilesUpdate', 'aiProfile', aiProfile)

            const localVarPath = `/api/2.0/ai/profiles/update`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiProfile, localVarRequestOptions, configuration)

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
         * Creates an AI provider profile. The name must be unique and the credentials are validated against the provider before the profile is stored; the portal\'s first profile also takes the `Default` assignment slot.
         * @summary Create
         * @param {AiCreateProfileInput} aiCreateProfileInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-create/
         */
        async aiProfilesCreate(aiCreateProfileInput: AiCreateProfileInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProfileMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesCreate(aiCreateProfileInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes an AI provider profile and cleans up the assignments pointing at it - the `Default` slot moves to the first remaining profile, the other slots are unbound.
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-delete/
         */
        async aiProfilesDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one AI provider profile, or an empty result when the identifier is unknown.
         * @summary Get by id
         * @param {string} id The AI provider profile identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-get-by-id/
         */
        async aiProfilesGetById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProfilesGetById200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesGetById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesGetById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the portal\'s AI provider profiles.
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list/
         */
        async aiProfilesList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiProfile>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the models the given profile\'s provider offers, as reported by the provider itself.
         * @summary List models
         * @param {string} profileId The AI provider profile identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesListModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-models/
         */
        async aiProfilesListModels(profileId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesListModels(profileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesListModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the models a provider offers for the supplied endpoint and key, before any profile is created from them.
         * @summary List provider models
         * @param {AiProfilesListProviderModelsRequest} aiProfilesListProviderModelsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesListProviderModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-provider-models/
         */
        async aiProfilesListProviderModels(aiProfilesListProviderModelsRequest: AiProfilesListProviderModelsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesListProviderModels(aiProfilesListProviderModelsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesListProviderModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks a stored profile\'s credentials against its provider and reports the provider\'s own error when the call fails. Nothing is written.
         * @summary Test connection
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-test-connection/
         */
        async aiProfilesTestConnection(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProfilesTestConnection200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesTestConnection(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesTestConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates an AI provider profile, re-checking name uniqueness and the provider credentials.
         * @summary Update
         * @param {AiProfile} aiProfile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiProfilesUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-update/
         */
        async aiProfilesUpdate(aiProfile: AiProfile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProfileMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiProfilesUpdate(aiProfile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.aiProfilesUpdate']?.[localVarOperationServerIndex]?.url;
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
         * Creates an AI provider profile. The name must be unique and the credentials are validated against the provider before the profile is stored; the portal\'s first profile also takes the `Default` assignment slot.
         * @summary Create
         * @param {ProfilesApiAiProfilesCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-create/
         * @throws {RequiredError}
         */
        aiProfilesCreate(requestParameters: ProfilesApiAiProfilesCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProfileMutationResult> {
            return localVarFp.aiProfilesCreate(requestParameters.aiCreateProfileInput, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an AI provider profile and cleans up the assignments pointing at it - the `Default` slot moves to the first remaining profile, the other slots are unbound.
         * @summary Delete
         * @param {ProfilesApiAiProfilesDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-delete/
         * @throws {RequiredError}
         */
        aiProfilesDelete(requestParameters: ProfilesApiAiProfilesDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiProfilesDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one AI provider profile, or an empty result when the identifier is unknown.
         * @summary Get by id
         * @param {ProfilesApiAiProfilesGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-get-by-id/
         * @throws {RequiredError}
         */
        aiProfilesGetById(requestParameters: ProfilesApiAiProfilesGetByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProfilesGetById200Response> {
            return localVarFp.aiProfilesGetById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the portal\'s AI provider profiles.
         * @summary List
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list/
         * @throws {RequiredError}
         */
        aiProfilesList(options?: RawAxiosRequestConfig): AxiosPromise<Array<AiProfile>> {
            return localVarFp.aiProfilesList(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the models the given profile\'s provider offers, as reported by the provider itself.
         * @summary List models
         * @param {ProfilesApiAiProfilesListModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesListModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-models/
         * @throws {RequiredError}
         */
        aiProfilesListModels(requestParameters: ProfilesApiAiProfilesListModelsRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiModel>> {
            return localVarFp.aiProfilesListModels(requestParameters.profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the models a provider offers for the supplied endpoint and key, before any profile is created from them.
         * @summary List provider models
         * @param {ProfilesApiAiProfilesListProviderModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesListProviderModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-provider-models/
         * @throws {RequiredError}
         */
        aiProfilesListProviderModels(requestParameters: ProfilesApiAiProfilesListProviderModelsRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiModel>> {
            return localVarFp.aiProfilesListProviderModels(requestParameters.aiProfilesListProviderModelsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks a stored profile\'s credentials against its provider and reports the provider\'s own error when the call fails. Nothing is written.
         * @summary Test connection
         * @param {ProfilesApiAiProfilesTestConnectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-test-connection/
         * @throws {RequiredError}
         */
        aiProfilesTestConnection(requestParameters: ProfilesApiAiProfilesTestConnectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProfilesTestConnection200Response> {
            return localVarFp.aiProfilesTestConnection(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an AI provider profile, re-checking name uniqueness and the provider credentials.
         * @summary Update
         * @param {ProfilesApiAiProfilesUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-update/
         * @throws {RequiredError}
         */
        aiProfilesUpdate(requestParameters: ProfilesApiAiProfilesUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProfileMutationResult> {
            return localVarFp.aiProfilesUpdate(requestParameters.aiProfile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiProfilesCreate operation in ProfilesApi.
 * @export
 * @interface ProfilesApiAiProfilesCreateRequest
 */
export interface ProfilesApiAiProfilesCreateRequest {
    /**
     * 
     * @type {AiCreateProfileInput}
     * @memberof ProfilesApiAiProfilesCreate
     */
    readonly aiCreateProfileInput: AiCreateProfileInput
}

/**
 * Request parameters for aiProfilesDelete operation in ProfilesApi.
 * @export
 * @interface ProfilesApiAiProfilesDeleteRequest
 */
export interface ProfilesApiAiProfilesDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof ProfilesApiAiProfilesDelete
     */
    readonly body: string
}

/**
 * Request parameters for aiProfilesGetById operation in ProfilesApi.
 * @export
 * @interface ProfilesApiAiProfilesGetByIdRequest
 */
export interface ProfilesApiAiProfilesGetByIdRequest {
    /**
     * The AI provider profile identifier.
     * @type {string}
     * @memberof ProfilesApiAiProfilesGetById
     */
    readonly id: string
}

/**
 * Request parameters for aiProfilesListModels operation in ProfilesApi.
 * @export
 * @interface ProfilesApiAiProfilesListModelsRequest
 */
export interface ProfilesApiAiProfilesListModelsRequest {
    /**
     * The AI provider profile identifier.
     * @type {string}
     * @memberof ProfilesApiAiProfilesListModels
     */
    readonly profileId: string
}

/**
 * Request parameters for aiProfilesListProviderModels operation in ProfilesApi.
 * @export
 * @interface ProfilesApiAiProfilesListProviderModelsRequest
 */
export interface ProfilesApiAiProfilesListProviderModelsRequest {
    /**
     * 
     * @type {AiProfilesListProviderModelsRequest}
     * @memberof ProfilesApiAiProfilesListProviderModels
     */
    readonly aiProfilesListProviderModelsRequest: AiProfilesListProviderModelsRequest
}

/**
 * Request parameters for aiProfilesTestConnection operation in ProfilesApi.
 * @export
 * @interface ProfilesApiAiProfilesTestConnectionRequest
 */
export interface ProfilesApiAiProfilesTestConnectionRequest {
    /**
     * 
     * @type {string}
     * @memberof ProfilesApiAiProfilesTestConnection
     */
    readonly body: string
}

/**
 * Request parameters for aiProfilesUpdate operation in ProfilesApi.
 * @export
 * @interface ProfilesApiAiProfilesUpdateRequest
 */
export interface ProfilesApiAiProfilesUpdateRequest {
    /**
     * 
     * @type {AiProfile}
     * @memberof ProfilesApiAiProfilesUpdate
     */
    readonly aiProfile: AiProfile
}

/**
 * ProfilesApi - object-oriented interface
 * @export
 * @class ProfilesApi
 * @extends {BaseAPI}
 */
export class ProfilesApi extends BaseAPI {
    /**
     * Creates an AI provider profile. The name must be unique and the credentials are validated against the provider before the profile is stored; the portal\'s first profile also takes the `Default` assignment slot.
     * @summary Create
     * @param {AIProfilesApiAiProfilesCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesCreate(requestParameters: ProfilesApiAiProfilesCreateRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesCreate(requestParameters.aiCreateProfileInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an AI provider profile and cleans up the assignments pointing at it - the `Default` slot moves to the first remaining profile, the other slots are unbound.
     * @summary Delete
     * @param {AIProfilesApiAiProfilesDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesDelete(requestParameters: ProfilesApiAiProfilesDeleteRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one AI provider profile, or an empty result when the identifier is unknown.
     * @summary Get by id
     * @param {AIProfilesApiAiProfilesGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesGetById(requestParameters: ProfilesApiAiProfilesGetByIdRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesGetById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the portal\'s AI provider profiles.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesList(options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the models the given profile\'s provider offers, as reported by the provider itself.
     * @summary List models
     * @param {AIProfilesApiAiProfilesListModelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesListModels(requestParameters: ProfilesApiAiProfilesListModelsRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesListModels(requestParameters.profileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the models a provider offers for the supplied endpoint and key, before any profile is created from them.
     * @summary List provider models
     * @param {AIProfilesApiAiProfilesListProviderModelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesListProviderModels(requestParameters: ProfilesApiAiProfilesListProviderModelsRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesListProviderModels(requestParameters.aiProfilesListProviderModelsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks a stored profile\'s credentials against its provider and reports the provider\'s own error when the call fails. Nothing is written.
     * @summary Test connection
     * @param {AIProfilesApiAiProfilesTestConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesTestConnection(requestParameters: ProfilesApiAiProfilesTestConnectionRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesTestConnection(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an AI provider profile, re-checking name uniqueness and the provider credentials.
     * @summary Update
     * @param {AIProfilesApiAiProfilesUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesUpdate(requestParameters: ProfilesApiAiProfilesUpdateRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesUpdate(requestParameters.aiProfile, options).then((request) => request(this.axios, this.basePath));
    }
}

