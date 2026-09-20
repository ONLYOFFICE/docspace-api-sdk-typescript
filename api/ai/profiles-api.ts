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
import type { AiProfilesListProviderModels400Response } from '../../models';
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
         * Creates an AI provider profile - the endpoint, credentials and model that a chat round runs on - and returns it. The name has to be unique, the credentials are probed against the live provider before anything is stored, and the portal\'s first profile also takes the `Default` assignment slot. Two inputs are refused outright: a `baseUrl` pointing at a private network address, and `providerType: external`, which delegates transport to the host application and therefore cannot work for a profile the server manages. On a portal running the AI gateway, profiles are managed centrally and this operation answers 403.
         * @summary Create a provider profile
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Deletes an AI provider profile and cleans up every assignment pointing at it: the `Default` slot moves to the first remaining profile and the other slots are left unbound. The ID is required and may be sent in the body or as a query parameter. An unknown ID is not reported - the call answers success without deleting anything. Threads already bound to the profile keep the stored reference, so a round on such a thread falls back to whatever the scope resolves to.
         * @summary Delete a provider profile
         * @param {string} body The ID of the profile to delete, as a bare JSON string.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Returns one AI provider profile by its ID, with its secrets stripped: neither the API key nor the custom headers are ever sent back, on any portal. The ID is required and is read from the query, and an unknown one answers 404. The `baseUrl` in the answer is the one that was stored, not the internal gateway address a round actually dials, so it cannot be used to reach the provider directly. Use `GET api/2.0/ai/profiles/list` to enumerate profiles instead of reading them one by one.
         * @summary Get a provider profile
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
         * Lists the portal\'s AI provider profiles with their secrets stripped, the same way the single-profile read does. It takes no parameters and is not paginated, because a portal holds few profiles. On a portal running the AI gateway the answer is synthesised from the gateway\'s own catalogue rather than from stored records. The IDs in the answer are what the assignment operations and every round\'s `profileId` accept.
         * @summary List provider profiles
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
         * Lists the models a stored profile\'s provider currently offers, asking the provider itself rather than reading a cached list. `profileId` is required and is read from the query. A failure is reported with the provider\'s own verdict: an unusable key comes back as 400 and a provider that is unreachable or broken as 502, while a missing profile or a caller without access keeps the status the portal gave it. Use `POST api/2.0/ai/profiles/list-provider-models` to probe an endpoint that has no profile yet.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
         * Lists the models an endpoint offers for credentials supplied in the request, before any profile exists - this is what a provider-setup form calls to fill its model picker. `providerType` and `baseUrl` are both required, and a 400 for either names the offending input in a `field` member so the form can highlight it; a `baseUrl` pointing at a private network address is refused as well. For `providerType: onlyoffice` the answer comes from the portal gateway\'s catalogue, which carries richer capability data than the provider\'s own listing and matches what `GET api/2.0/ai/profiles/list` reports; a portal without that gateway falls back to asking the provider. A provider that is unreachable or broken is reported as 502, and one that rejects the key as 400.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Probes a stored profile\'s credentials against its provider and reports the outcome in the answer, writing nothing - this is what a Test button calls so that a failure does not commit anything. `profileId` is required and may be sent in the body or as a query parameter. The result is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload. To validate credentials that are not stored yet, use `POST api/2.0/ai/profiles/list-provider-models`.
         * @summary Test a profile\'s provider
         * @param {string} body The ID of the profile to probe, as a bare JSON string.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Replaces a stored AI provider profile and returns it, re-checking name uniqueness and probing the credentials against the live provider again. The same two inputs are refused as on create - a private-network `baseUrl` and `providerType: external` - and the whole profile is overwritten by the one supplied rather than merged. On a portal running the AI gateway this answers 403, because profiles are managed centrally there. A profile that is bound to an action or an agent keeps those bindings.
         * @summary Update a provider profile
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Creates an AI provider profile - the endpoint, credentials and model that a chat round runs on - and returns it. The name has to be unique, the credentials are probed against the live provider before anything is stored, and the portal\'s first profile also takes the `Default` assignment slot. Two inputs are refused outright: a `baseUrl` pointing at a private network address, and `providerType: external`, which delegates transport to the host application and therefore cannot work for a profile the server manages. On a portal running the AI gateway, profiles are managed centrally and this operation answers 403.
         * @summary Create a provider profile
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
         * Deletes an AI provider profile and cleans up every assignment pointing at it: the `Default` slot moves to the first remaining profile and the other slots are left unbound. The ID is required and may be sent in the body or as a query parameter. An unknown ID is not reported - the call answers success without deleting anything. Threads already bound to the profile keep the stored reference, so a round on such a thread falls back to whatever the scope resolves to.
         * @summary Delete a provider profile
         * @param {string} body The ID of the profile to delete, as a bare JSON string.
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
         * Returns one AI provider profile by its ID, with its secrets stripped: neither the API key nor the custom headers are ever sent back, on any portal. The ID is required and is read from the query, and an unknown one answers 404. The `baseUrl` in the answer is the one that was stored, not the internal gateway address a round actually dials, so it cannot be used to reach the provider directly. Use `GET api/2.0/ai/profiles/list` to enumerate profiles instead of reading them one by one.
         * @summary Get a provider profile
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
         * Lists the portal\'s AI provider profiles with their secrets stripped, the same way the single-profile read does. It takes no parameters and is not paginated, because a portal holds few profiles. On a portal running the AI gateway the answer is synthesised from the gateway\'s own catalogue rather than from stored records. The IDs in the answer are what the assignment operations and every round\'s `profileId` accept.
         * @summary List provider profiles
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
         * Lists the models a stored profile\'s provider currently offers, asking the provider itself rather than reading a cached list. `profileId` is required and is read from the query. A failure is reported with the provider\'s own verdict: an unusable key comes back as 400 and a provider that is unreachable or broken as 502, while a missing profile or a caller without access keeps the status the portal gave it. Use `POST api/2.0/ai/profiles/list-provider-models` to probe an endpoint that has no profile yet.
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
         * Lists the models an endpoint offers for credentials supplied in the request, before any profile exists - this is what a provider-setup form calls to fill its model picker. `providerType` and `baseUrl` are both required, and a 400 for either names the offending input in a `field` member so the form can highlight it; a `baseUrl` pointing at a private network address is refused as well. For `providerType: onlyoffice` the answer comes from the portal gateway\'s catalogue, which carries richer capability data than the provider\'s own listing and matches what `GET api/2.0/ai/profiles/list` reports; a portal without that gateway falls back to asking the provider. A provider that is unreachable or broken is reported as 502, and one that rejects the key as 400.
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
         * Probes a stored profile\'s credentials against its provider and reports the outcome in the answer, writing nothing - this is what a Test button calls so that a failure does not commit anything. `profileId` is required and may be sent in the body or as a query parameter. The result is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload. To validate credentials that are not stored yet, use `POST api/2.0/ai/profiles/list-provider-models`.
         * @summary Test a profile\'s provider
         * @param {string} body The ID of the profile to probe, as a bare JSON string.
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
         * Replaces a stored AI provider profile and returns it, re-checking name uniqueness and probing the credentials against the live provider again. The same two inputs are refused as on create - a private-network `baseUrl` and `providerType: external` - and the whole profile is overwritten by the one supplied rather than merged. On a portal running the AI gateway this answers 403, because profiles are managed centrally there. A profile that is bound to an action or an agent keeps those bindings.
         * @summary Update a provider profile
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
         * Creates an AI provider profile - the endpoint, credentials and model that a chat round runs on - and returns it. The name has to be unique, the credentials are probed against the live provider before anything is stored, and the portal\'s first profile also takes the `Default` assignment slot. Two inputs are refused outright: a `baseUrl` pointing at a private network address, and `providerType: external`, which delegates transport to the host application and therefore cannot work for a profile the server manages. On a portal running the AI gateway, profiles are managed centrally and this operation answers 403.
         * @summary Create a provider profile
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
         * Deletes an AI provider profile and cleans up every assignment pointing at it: the `Default` slot moves to the first remaining profile and the other slots are left unbound. The ID is required and may be sent in the body or as a query parameter. An unknown ID is not reported - the call answers success without deleting anything. Threads already bound to the profile keep the stored reference, so a round on such a thread falls back to whatever the scope resolves to.
         * @summary Delete a provider profile
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
         * Returns one AI provider profile by its ID, with its secrets stripped: neither the API key nor the custom headers are ever sent back, on any portal. The ID is required and is read from the query, and an unknown one answers 404. The `baseUrl` in the answer is the one that was stored, not the internal gateway address a round actually dials, so it cannot be used to reach the provider directly. Use `GET api/2.0/ai/profiles/list` to enumerate profiles instead of reading them one by one.
         * @summary Get a provider profile
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
         * Lists the portal\'s AI provider profiles with their secrets stripped, the same way the single-profile read does. It takes no parameters and is not paginated, because a portal holds few profiles. On a portal running the AI gateway the answer is synthesised from the gateway\'s own catalogue rather than from stored records. The IDs in the answer are what the assignment operations and every round\'s `profileId` accept.
         * @summary List provider profiles
         * @param {*} [options] Override http request option.
         * REST API Reference for aiProfilesList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list/
         * @throws {RequiredError}
         */
        aiProfilesList(options?: RawAxiosRequestConfig): AxiosPromise<Array<AiProfile>> {
            return localVarFp.aiProfilesList(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the models a stored profile\'s provider currently offers, asking the provider itself rather than reading a cached list. `profileId` is required and is read from the query. A failure is reported with the provider\'s own verdict: an unusable key comes back as 400 and a provider that is unreachable or broken as 502, while a missing profile or a caller without access keeps the status the portal gave it. Use `POST api/2.0/ai/profiles/list-provider-models` to probe an endpoint that has no profile yet.
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
         * Lists the models an endpoint offers for credentials supplied in the request, before any profile exists - this is what a provider-setup form calls to fill its model picker. `providerType` and `baseUrl` are both required, and a 400 for either names the offending input in a `field` member so the form can highlight it; a `baseUrl` pointing at a private network address is refused as well. For `providerType: onlyoffice` the answer comes from the portal gateway\'s catalogue, which carries richer capability data than the provider\'s own listing and matches what `GET api/2.0/ai/profiles/list` reports; a portal without that gateway falls back to asking the provider. A provider that is unreachable or broken is reported as 502, and one that rejects the key as 400.
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
         * Probes a stored profile\'s credentials against its provider and reports the outcome in the answer, writing nothing - this is what a Test button calls so that a failure does not commit anything. `profileId` is required and may be sent in the body or as a query parameter. The result is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload. To validate credentials that are not stored yet, use `POST api/2.0/ai/profiles/list-provider-models`.
         * @summary Test a profile\'s provider
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
         * Replaces a stored AI provider profile and returns it, re-checking name uniqueness and probing the credentials against the live provider again. The same two inputs are refused as on create - a private-network `baseUrl` and `providerType: external` - and the whole profile is overwritten by the one supplied rather than merged. On a portal running the AI gateway this answers 403, because profiles are managed centrally there. A profile that is bound to an action or an agent keeps those bindings.
         * @summary Update a provider profile
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
     * The ID of the profile to delete, as a bare JSON string.
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
     * The ID of the profile to probe, as a bare JSON string.
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
     * Creates an AI provider profile - the endpoint, credentials and model that a chat round runs on - and returns it. The name has to be unique, the credentials are probed against the live provider before anything is stored, and the portal\'s first profile also takes the `Default` assignment slot. Two inputs are refused outright: a `baseUrl` pointing at a private network address, and `providerType: external`, which delegates transport to the host application and therefore cannot work for a profile the server manages. On a portal running the AI gateway, profiles are managed centrally and this operation answers 403.
     * @summary Create a provider profile
     * @param {AIProfilesApiAiProfilesCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesCreate(requestParameters: ProfilesApiAiProfilesCreateRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesCreate(requestParameters.aiCreateProfileInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an AI provider profile and cleans up every assignment pointing at it: the `Default` slot moves to the first remaining profile and the other slots are left unbound. The ID is required and may be sent in the body or as a query parameter. An unknown ID is not reported - the call answers success without deleting anything. Threads already bound to the profile keep the stored reference, so a round on such a thread falls back to whatever the scope resolves to.
     * @summary Delete a provider profile
     * @param {AIProfilesApiAiProfilesDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesDelete(requestParameters: ProfilesApiAiProfilesDeleteRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one AI provider profile by its ID, with its secrets stripped: neither the API key nor the custom headers are ever sent back, on any portal. The ID is required and is read from the query, and an unknown one answers 404. The `baseUrl` in the answer is the one that was stored, not the internal gateway address a round actually dials, so it cannot be used to reach the provider directly. Use `GET api/2.0/ai/profiles/list` to enumerate profiles instead of reading them one by one.
     * @summary Get a provider profile
     * @param {AIProfilesApiAiProfilesGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesGetById(requestParameters: ProfilesApiAiProfilesGetByIdRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesGetById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the portal\'s AI provider profiles with their secrets stripped, the same way the single-profile read does. It takes no parameters and is not paginated, because a portal holds few profiles. On a portal running the AI gateway the answer is synthesised from the gateway\'s own catalogue rather than from stored records. The IDs in the answer are what the assignment operations and every round\'s `profileId` accept.
     * @summary List provider profiles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesList(options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the models a stored profile\'s provider currently offers, asking the provider itself rather than reading a cached list. `profileId` is required and is read from the query. A failure is reported with the provider\'s own verdict: an unusable key comes back as 400 and a provider that is unreachable or broken as 502, while a missing profile or a caller without access keeps the status the portal gave it. Use `POST api/2.0/ai/profiles/list-provider-models` to probe an endpoint that has no profile yet.
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
     * Lists the models an endpoint offers for credentials supplied in the request, before any profile exists - this is what a provider-setup form calls to fill its model picker. `providerType` and `baseUrl` are both required, and a 400 for either names the offending input in a `field` member so the form can highlight it; a `baseUrl` pointing at a private network address is refused as well. For `providerType: onlyoffice` the answer comes from the portal gateway\'s catalogue, which carries richer capability data than the provider\'s own listing and matches what `GET api/2.0/ai/profiles/list` reports; a portal without that gateway falls back to asking the provider. A provider that is unreachable or broken is reported as 502, and one that rejects the key as 400.
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
     * Probes a stored profile\'s credentials against its provider and reports the outcome in the answer, writing nothing - this is what a Test button calls so that a failure does not commit anything. `profileId` is required and may be sent in the body or as a query parameter. The result is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload. To validate credentials that are not stored yet, use `POST api/2.0/ai/profiles/list-provider-models`.
     * @summary Test a profile\'s provider
     * @param {AIProfilesApiAiProfilesTestConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesTestConnection(requestParameters: ProfilesApiAiProfilesTestConnectionRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesTestConnection(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces a stored AI provider profile and returns it, re-checking name uniqueness and probing the credentials against the live provider again. The same two inputs are refused as on create - a private-network `baseUrl` and `providerType: external` - and the whole profile is overwritten by the one supplied rather than merged. On a portal running the AI gateway this answers 403, because profiles are managed centrally there. A profile that is bound to an action or an agent keeps those bindings.
     * @summary Update a provider profile
     * @param {AIProfilesApiAiProfilesUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public aiProfilesUpdate(requestParameters: ProfilesApiAiProfilesUpdateRequest, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).aiProfilesUpdate(requestParameters.aiProfile, options).then((request) => request(this.axios, this.basePath));
    }
}

