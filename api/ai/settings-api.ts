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
import type { AiSettingsWrapper } from '../../models';
// @ts-ignore
import type { SetEmbeddingConfigRequestBody } from '../../models';
// @ts-ignore
import type { SetWebSearchSettingsRequestBody } from '../../models';
// @ts-ignore
import type { VectorizationSettingsWrapper } from '../../models';
// @ts-ignore
import type { WebSearchSettingsWrapper } from '../../models';
/**
 * SettingsApi - axios parameter creator
 * @export
 */
export const SettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Retrieves the combined AI configuration for the current portal, including the status of web search,  vectorization, and AI readiness, along with tool names and the portal MCP server identifier.
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAiSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-settings/
         */
        getAiSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/config`;
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
         * Retrieves the current embedding provider settings used for document vectorization,  including the configured provider type and whether the API key needs to be reset.
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getVectorizationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-vectorization-settings/
         */
        getVectorizationSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/config/vectorization`;
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
         * Retrieves the current web search integration settings for AI chat sessions,  including whether web search is enabled, the configured search engine type, and whether the API key needs to be reset.
         * @summary Get web search settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebSearchSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-search-settings/
         */
        getWebSearchSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/config/web-search`;
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
         * Configures the embedding provider used for document vectorization at the portal level.  Vectorization enables semantic search and knowledge retrieval capabilities in AI chat sessions.  Allows selecting the embedding provider type and providing the API key for the chosen provider.  Only portal administrators can modify these settings.
         * @summary Update vectorization settings
         * @param {SetEmbeddingConfigRequestBody} setEmbeddingConfigRequestBody The embedding provider configuration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setVectorizationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-vectorization-settings/
         */
        setVectorizationSettings: async (setEmbeddingConfigRequestBody: SetEmbeddingConfigRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'setEmbeddingConfigRequestBody' is not null or undefined
            assertParamExists('setVectorizationSettings', 'setEmbeddingConfigRequestBody', setEmbeddingConfigRequestBody)

            const localVarPath = `/api/2.0/ai/config/vectorization`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setEmbeddingConfigRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Configures the web search integration for AI chat sessions at the portal level.  Allows enabling or disabling web search, selecting the search engine type, and providing the API key for the chosen engine.  Only portal administrators can modify these settings.
         * @summary Update web search settings
         * @param {SetWebSearchSettingsRequestBody} setWebSearchSettingsRequestBody The web search configuration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setWebSearchSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-search-settings/
         */
        setWebSearchSettings: async (setWebSearchSettingsRequestBody: SetWebSearchSettingsRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'setWebSearchSettingsRequestBody' is not null or undefined
            assertParamExists('setWebSearchSettings', 'setWebSearchSettingsRequestBody', setWebSearchSettingsRequestBody)

            const localVarPath = `/api/2.0/ai/config/web-search`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setWebSearchSettingsRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsApi - functional programming interface
 * @export
 */
export const SettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves the combined AI configuration for the current portal, including the status of web search,  vectorization, and AI readiness, along with tool names and the portal MCP server identifier.
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAiSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-settings/
         */
        async getAiSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAiSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getAiSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the current embedding provider settings used for document vectorization,  including the configured provider type and whether the API key needs to be reset.
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getVectorizationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-vectorization-settings/
         */
        async getVectorizationSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVectorizationSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getVectorizationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the current web search integration settings for AI chat sessions,  including whether web search is enabled, the configured search engine type, and whether the API key needs to be reset.
         * @summary Get web search settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebSearchSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-search-settings/
         */
        async getWebSearchSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebSearchSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebSearchSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getWebSearchSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Configures the embedding provider used for document vectorization at the portal level.  Vectorization enables semantic search and knowledge retrieval capabilities in AI chat sessions.  Allows selecting the embedding provider type and providing the API key for the chosen provider.  Only portal administrators can modify these settings.
         * @summary Update vectorization settings
         * @param {SetEmbeddingConfigRequestBody} setEmbeddingConfigRequestBody The embedding provider configuration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setVectorizationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-vectorization-settings/
         */
        async setVectorizationSettings(setEmbeddingConfigRequestBody: SetEmbeddingConfigRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setVectorizationSettings(setEmbeddingConfigRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.setVectorizationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Configures the web search integration for AI chat sessions at the portal level.  Allows enabling or disabling web search, selecting the search engine type, and providing the API key for the chosen engine.  Only portal administrators can modify these settings.
         * @summary Update web search settings
         * @param {SetWebSearchSettingsRequestBody} setWebSearchSettingsRequestBody The web search configuration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setWebSearchSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-search-settings/
         */
        async setWebSearchSettings(setWebSearchSettingsRequestBody: SetWebSearchSettingsRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebSearchSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setWebSearchSettings(setWebSearchSettingsRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.setWebSearchSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsApi - factory interface
 * @export
 */
export const SettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsApiFp(configuration)
    return {
        /**
         * Retrieves the combined AI configuration for the current portal, including the status of web search,  vectorization, and AI readiness, along with tool names and the portal MCP server identifier.
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getAiSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-settings/
         * @throws {RequiredError}
         */
        getAiSettings(options?: RawAxiosRequestConfig): AxiosPromise<AiSettingsWrapper> {
            return localVarFp.getAiSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the current embedding provider settings used for document vectorization,  including the configured provider type and whether the API key needs to be reset.
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getVectorizationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-vectorization-settings/
         * @throws {RequiredError}
         */
        getVectorizationSettings(options?: RawAxiosRequestConfig): AxiosPromise<VectorizationSettingsWrapper> {
            return localVarFp.getVectorizationSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the current web search integration settings for AI chat sessions,  including whether web search is enabled, the configured search engine type, and whether the API key needs to be reset.
         * @summary Get web search settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebSearchSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-search-settings/
         * @throws {RequiredError}
         */
        getWebSearchSettings(options?: RawAxiosRequestConfig): AxiosPromise<WebSearchSettingsWrapper> {
            return localVarFp.getWebSearchSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Configures the embedding provider used for document vectorization at the portal level.  Vectorization enables semantic search and knowledge retrieval capabilities in AI chat sessions.  Allows selecting the embedding provider type and providing the API key for the chosen provider.  Only portal administrators can modify these settings.
         * @summary Update vectorization settings
         * @param {SetEmbeddingConfigRequestBody} setEmbeddingConfigRequestBody The embedding provider configuration parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setVectorizationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-vectorization-settings/
         * @throws {RequiredError}
         */
        setVectorizationSettings(setEmbeddingConfigRequestBody: SetEmbeddingConfigRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<VectorizationSettingsWrapper> {
            return localVarFp.setVectorizationSettings(setEmbeddingConfigRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Configures the web search integration for AI chat sessions at the portal level.  Allows enabling or disabling web search, selecting the search engine type, and providing the API key for the chosen engine.  Only portal administrators can modify these settings.
         * @summary Update web search settings
         * @param {SetWebSearchSettingsRequestBody} setWebSearchSettingsRequestBody The web search configuration parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setWebSearchSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-search-settings/
         * @throws {RequiredError}
         */
        setWebSearchSettings(setWebSearchSettingsRequestBody: SetWebSearchSettingsRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<WebSearchSettingsWrapper> {
            return localVarFp.setWebSearchSettings(setWebSearchSettingsRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
export class SettingsApi extends BaseAPI {
    /**
     * Retrieves the combined AI configuration for the current portal, including the status of web search,  vectorization, and AI readiness, along with tool names and the portal MCP server identifier.
     * @summary Get AI settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getAiSettings(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getAiSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the current embedding provider settings used for document vectorization,  including the configured provider type and whether the API key needs to be reset.
     * @summary Get vectorization settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getVectorizationSettings(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getVectorizationSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the current web search integration settings for AI chat sessions,  including whether web search is enabled, the configured search engine type, and whether the API key needs to be reset.
     * @summary Get web search settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getWebSearchSettings(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getWebSearchSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Configures the embedding provider used for document vectorization at the portal level.  Vectorization enables semantic search and knowledge retrieval capabilities in AI chat sessions.  Allows selecting the embedding provider type and providing the API key for the chosen provider.  Only portal administrators can modify these settings.
     * @summary Update vectorization settings
     * @param {SetEmbeddingConfigRequestBody} setEmbeddingConfigRequestBody The embedding provider configuration parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public setVectorizationSettings(setEmbeddingConfigRequestBody: SetEmbeddingConfigRequestBody, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).setVectorizationSettings(setEmbeddingConfigRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Configures the web search integration for AI chat sessions at the portal level.  Allows enabling or disabling web search, selecting the search engine type, and providing the API key for the chosen engine.  Only portal administrators can modify these settings.
     * @summary Update web search settings
     * @param {SetWebSearchSettingsRequestBody} setWebSearchSettingsRequestBody The web search configuration parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public setWebSearchSettings(setWebSearchSettingsRequestBody: SetWebSearchSettingsRequestBody, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).setWebSearchSettings(setWebSearchSettingsRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

