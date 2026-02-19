/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { AiProviderArrayWrapper } from '../../models';
// @ts-ignore
import type { AiProviderWrapper } from '../../models';
// @ts-ignore
import type { CreateProviderRequestDto } from '../../models';
// @ts-ignore
import type { DefaultProviderWrapper } from '../../models';
// @ts-ignore
import type { ProviderSettingsArrayWrapper } from '../../models';
// @ts-ignore
import type { RemoveProviderRequestDto } from '../../models';
// @ts-ignore
import type { SetDefaultProviderRequestDto } from '../../models';
// @ts-ignore
import type { UpdateProviderBody } from '../../models';
/**
 * ProvidersApi - axios parameter creator
 * @export
 */
export const ProvidersApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Registers a new AI provider for the current tenant by specifying its type, display title, API endpoint URL, and authentication key.  The provider becomes available for AI chat conversations after creation. This action is rate-limited.
         * @summary Add an AI provider
         * @param {CreateProviderRequestDto} [createProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-provider/
         */
        addProvider: async (createProviderRequestDto?: CreateProviderRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/providers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createProviderRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Permanently deletes one or more AI providers by their identifiers.  All specified providers are removed from the current tenant. This action cannot be undone.
         * @summary Delete AI providers
         * @param {RemoveProviderRequestDto} [removeProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-providers/
         */
        deleteProviders: async (removeProviderRequestDto?: RemoveProviderRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/providers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(removeProviderRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the list of AI provider types that are available for configuration on the current instance.  Each entry includes the provider type identifier and the default API endpoint URL.
         * @summary Get available AI provider types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAvailableProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-providers/
         */
        getAvailableProviders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/providers/available`;
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
         * Returns the default AI provider and model configured for the current tenant.  Returns null if the tenant does not have any registered providers.
         * @summary Get the default AI provider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-provider/
         */
        getDefaultProvider: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/providers/default`;
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
         * Returns a paginated list of AI providers configured for the current tenant.  Supports pagination via the startIndex and count query parameters. The total number of providers is included in the response metadata.
         * @summary Get AI providers
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-providers/
         */
        getProviders: async (startIndex?: number, count?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/providers`;
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
         * Sets the default AI provider and model for the current tenant.  The specified provider and model will be used as the default for all new AI chat sessions within the tenant.
         * @summary Set the default AI provider
         * @param {SetDefaultProviderRequestDto} [setDefaultProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-provider/
         */
        setDefaultProvider: async (setDefaultProviderRequestDto?: SetDefaultProviderRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/providers/default`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setDefaultProviderRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the configuration of an existing AI provider, including its display title, API endpoint URL, and authentication key.  Only the fields provided in the request body will be updated. This action is rate-limited.
         * @summary Update an AI provider
         * @param {number} id The identifier of the AI provider to update.
         * @param {UpdateProviderBody} updateProviderBody The AI provider configuration parameters to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-provider/
         */
        updateProvider: async (id: number, updateProviderBody: UpdateProviderBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateProvider', 'id', id)
            // verify required parameter 'updateProviderBody' is not null or undefined
            assertParamExists('updateProvider', 'updateProviderBody', updateProviderBody)

            const localVarPath = `/api/2.0/ai/providers/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateProviderBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProvidersApi - functional programming interface
 * @export
 */
export const ProvidersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProvidersApiAxiosParamCreator(configuration)
    return {
        /**
         * Registers a new AI provider for the current tenant by specifying its type, display title, API endpoint URL, and authentication key.  The provider becomes available for AI chat conversations after creation. This action is rate-limited.
         * @summary Add an AI provider
         * @param {CreateProviderRequestDto} [createProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-provider/
         */
        async addProvider(createProviderRequestDto?: CreateProviderRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProviderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addProvider(createProviderRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProvidersApi.addProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Permanently deletes one or more AI providers by their identifiers.  All specified providers are removed from the current tenant. This action cannot be undone.
         * @summary Delete AI providers
         * @param {RemoveProviderRequestDto} [removeProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-providers/
         */
        async deleteProviders(removeProviderRequestDto?: RemoveProviderRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProviders(removeProviderRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProvidersApi.deleteProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the list of AI provider types that are available for configuration on the current instance.  Each entry includes the provider type identifier and the default API endpoint URL.
         * @summary Get available AI provider types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAvailableProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-providers/
         */
        async getAvailableProviders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProviderSettingsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAvailableProviders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProvidersApi.getAvailableProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the default AI provider and model configured for the current tenant.  Returns null if the tenant does not have any registered providers.
         * @summary Get the default AI provider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-provider/
         */
        async getDefaultProvider(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultProviderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultProvider(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProvidersApi.getDefaultProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a paginated list of AI providers configured for the current tenant.  Supports pagination via the startIndex and count query parameters. The total number of providers is included in the response metadata.
         * @summary Get AI providers
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-providers/
         */
        async getProviders(startIndex?: number, count?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProviderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProviders(startIndex, count, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProvidersApi.getProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the default AI provider and model for the current tenant.  The specified provider and model will be used as the default for all new AI chat sessions within the tenant.
         * @summary Set the default AI provider
         * @param {SetDefaultProviderRequestDto} [setDefaultProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-provider/
         */
        async setDefaultProvider(setDefaultProviderRequestDto?: SetDefaultProviderRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultProviderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setDefaultProvider(setDefaultProviderRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProvidersApi.setDefaultProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the configuration of an existing AI provider, including its display title, API endpoint URL, and authentication key.  Only the fields provided in the request body will be updated. This action is rate-limited.
         * @summary Update an AI provider
         * @param {number} id The identifier of the AI provider to update.
         * @param {UpdateProviderBody} updateProviderBody The AI provider configuration parameters to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-provider/
         */
        async updateProvider(id: number, updateProviderBody: UpdateProviderBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProviderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProvider(id, updateProviderBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProvidersApi.updateProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProvidersApi - factory interface
 * @export
 */
export const ProvidersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProvidersApiFp(configuration)
    return {
        /**
         * Registers a new AI provider for the current tenant by specifying its type, display title, API endpoint URL, and authentication key.  The provider becomes available for AI chat conversations after creation. This action is rate-limited.
         * @summary Add an AI provider
         * @param {CreateProviderRequestDto} [createProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for addProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-provider/
         * @throws {RequiredError}
         */
        addProvider(createProviderRequestDto?: CreateProviderRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<AiProviderWrapper> {
            return localVarFp.addProvider(createProviderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Permanently deletes one or more AI providers by their identifiers.  All specified providers are removed from the current tenant. This action cannot be undone.
         * @summary Delete AI providers
         * @param {RemoveProviderRequestDto} [removeProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-providers/
         * @throws {RequiredError}
         */
        deleteProviders(removeProviderRequestDto?: RemoveProviderRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteProviders(removeProviderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of AI provider types that are available for configuration on the current instance.  Each entry includes the provider type identifier and the default API endpoint URL.
         * @summary Get available AI provider types
         * @param {*} [options] Override http request option.
         * REST API Reference for getAvailableProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-providers/
         * @throws {RequiredError}
         */
        getAvailableProviders(options?: RawAxiosRequestConfig): AxiosPromise<ProviderSettingsArrayWrapper> {
            return localVarFp.getAvailableProviders(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the default AI provider and model configured for the current tenant.  Returns null if the tenant does not have any registered providers.
         * @summary Get the default AI provider
         * @param {*} [options] Override http request option.
         * REST API Reference for getDefaultProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-provider/
         * @throws {RequiredError}
         */
        getDefaultProvider(options?: RawAxiosRequestConfig): AxiosPromise<DefaultProviderWrapper> {
            return localVarFp.getDefaultProvider(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of AI providers configured for the current tenant.  Supports pagination via the startIndex and count query parameters. The total number of providers is included in the response metadata.
         * @summary Get AI providers
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-providers/
         * @throws {RequiredError}
         */
        getProviders(startIndex?: number, count?: number, options?: RawAxiosRequestConfig): AxiosPromise<AiProviderArrayWrapper> {
            return localVarFp.getProviders(startIndex, count, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the default AI provider and model for the current tenant.  The specified provider and model will be used as the default for all new AI chat sessions within the tenant.
         * @summary Set the default AI provider
         * @param {SetDefaultProviderRequestDto} [setDefaultProviderRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setDefaultProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-provider/
         * @throws {RequiredError}
         */
        setDefaultProvider(setDefaultProviderRequestDto?: SetDefaultProviderRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<DefaultProviderWrapper> {
            return localVarFp.setDefaultProvider(setDefaultProviderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the configuration of an existing AI provider, including its display title, API endpoint URL, and authentication key.  Only the fields provided in the request body will be updated. This action is rate-limited.
         * @summary Update an AI provider
         * @param {number} id The identifier of the AI provider to update.
         * @param {UpdateProviderBody} updateProviderBody The AI provider configuration parameters to update.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateProvider operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-provider/
         * @throws {RequiredError}
         */
        updateProvider(id: number, updateProviderBody: UpdateProviderBody, options?: RawAxiosRequestConfig): AxiosPromise<AiProviderWrapper> {
            return localVarFp.updateProvider(id, updateProviderBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProvidersApi - object-oriented interface
 * @export
 * @class ProvidersApi
 * @extends {BaseAPI}
 */
export class ProvidersApi extends BaseAPI {
    /**
     * Registers a new AI provider for the current tenant by specifying its type, display title, API endpoint URL, and authentication key.  The provider becomes available for AI chat conversations after creation. This action is rate-limited.
     * @summary Add an AI provider
     * @param {CreateProviderRequestDto} [createProviderRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProvidersApi
     */
    public addProvider(createProviderRequestDto?: CreateProviderRequestDto, options?: RawAxiosRequestConfig) {
        return ProvidersApiFp(this.configuration).addProvider(createProviderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Permanently deletes one or more AI providers by their identifiers.  All specified providers are removed from the current tenant. This action cannot be undone.
     * @summary Delete AI providers
     * @param {RemoveProviderRequestDto} [removeProviderRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProvidersApi
     */
    public deleteProviders(removeProviderRequestDto?: RemoveProviderRequestDto, options?: RawAxiosRequestConfig) {
        return ProvidersApiFp(this.configuration).deleteProviders(removeProviderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of AI provider types that are available for configuration on the current instance.  Each entry includes the provider type identifier and the default API endpoint URL.
     * @summary Get available AI provider types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProvidersApi
     */
    public getAvailableProviders(options?: RawAxiosRequestConfig) {
        return ProvidersApiFp(this.configuration).getAvailableProviders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the default AI provider and model configured for the current tenant.  Returns null if the tenant does not have any registered providers.
     * @summary Get the default AI provider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProvidersApi
     */
    public getDefaultProvider(options?: RawAxiosRequestConfig) {
        return ProvidersApiFp(this.configuration).getDefaultProvider(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of AI providers configured for the current tenant.  Supports pagination via the startIndex and count query parameters. The total number of providers is included in the response metadata.
     * @summary Get AI providers
     * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
     * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProvidersApi
     */
    public getProviders(startIndex?: number, count?: number, options?: RawAxiosRequestConfig) {
        return ProvidersApiFp(this.configuration).getProviders(startIndex, count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the default AI provider and model for the current tenant.  The specified provider and model will be used as the default for all new AI chat sessions within the tenant.
     * @summary Set the default AI provider
     * @param {SetDefaultProviderRequestDto} [setDefaultProviderRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProvidersApi
     */
    public setDefaultProvider(setDefaultProviderRequestDto?: SetDefaultProviderRequestDto, options?: RawAxiosRequestConfig) {
        return ProvidersApiFp(this.configuration).setDefaultProvider(setDefaultProviderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the configuration of an existing AI provider, including its display title, API endpoint URL, and authentication key.  Only the fields provided in the request body will be updated. This action is rate-limited.
     * @summary Update an AI provider
     * @param {number} id The identifier of the AI provider to update.
     * @param {UpdateProviderBody} updateProviderBody The AI provider configuration parameters to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProvidersApi
     */
    public updateProvider(id: number, updateProviderBody: UpdateProviderBody, options?: RawAxiosRequestConfig) {
        return ProvidersApiFp(this.configuration).updateProvider(id, updateProviderBody, options).then((request) => request(this.axios, this.basePath));
    }
}

