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
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiProfilesTestConnection200Response } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
// @ts-ignore
import type { AiWebSearchConfig } from '../../models';
// @ts-ignore
import type { AiWebSearchConfigureRequest } from '../../models';
// @ts-ignore
import type { AiWebSearchMutationResult } from '../../models';
/**
 * WebSearchApi - axios parameter creator
 * @export
 */
export const WebSearchApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Clear
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-clear/
         */
        aiWebSearchClear: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiWebSearchClear', 'body', body)

            const localVarPath = `/api/2.0/ai/web-search/clear`;
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
         * @summary Configure
         * @param {AiWebSearchConfigureRequest} aiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-configure/
         */
        aiWebSearchConfigure: async (aiWebSearchConfigureRequest: AiWebSearchConfigureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchConfigureRequest' is not null or undefined
            assertParamExists('aiWebSearchConfigure', 'aiWebSearchConfigureRequest', aiWebSearchConfigureRequest)

            const localVarPath = `/api/2.0/ai/web-search/configure`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchConfigureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get active config
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-get-active-config/
         */
        aiWebSearchGetActiveConfig: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiWebSearchGetActiveConfig', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/web-search/get-active-config`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary Is configured
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-is-configured/
         */
        aiWebSearchIsConfigured: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiWebSearchIsConfigured', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/web-search/is-configured`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary Set active config
         * @param {AiWebSearchConfigureRequest} aiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-set-active-config/
         */
        aiWebSearchSetActiveConfig: async (aiWebSearchConfigureRequest: AiWebSearchConfigureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchConfigureRequest' is not null or undefined
            assertParamExists('aiWebSearchSetActiveConfig', 'aiWebSearchConfigureRequest', aiWebSearchConfigureRequest)

            const localVarPath = `/api/2.0/ai/web-search/set-active-config`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchConfigureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Test connection
         * @param {AiWebSearchConfig} aiWebSearchConfig 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-test-connection/
         */
        aiWebSearchTestConnection: async (aiWebSearchConfig: AiWebSearchConfig, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchConfig' is not null or undefined
            assertParamExists('aiWebSearchTestConnection', 'aiWebSearchConfig', aiWebSearchConfig)

            const localVarPath = `/api/2.0/ai/web-search/test-connection`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchConfig, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebSearchApi - functional programming interface
 * @export
 */
export const WebSearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebSearchApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Clear
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-clear/
         */
        async aiWebSearchClear(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchClear(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchClear']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Configure
         * @param {AiWebSearchConfigureRequest} aiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-configure/
         */
        async aiWebSearchConfigure(aiWebSearchConfigureRequest: AiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiWebSearchMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchConfigure(aiWebSearchConfigureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchConfigure']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get active config
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-get-active-config/
         */
        async aiWebSearchGetActiveConfig(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiWebSearchConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchGetActiveConfig(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchGetActiveConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Is configured
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-is-configured/
         */
        async aiWebSearchIsConfigured(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchIsConfigured(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchIsConfigured']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set active config
         * @param {AiWebSearchConfigureRequest} aiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-set-active-config/
         */
        async aiWebSearchSetActiveConfig(aiWebSearchConfigureRequest: AiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchSetActiveConfig(aiWebSearchConfigureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchSetActiveConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Test connection
         * @param {AiWebSearchConfig} aiWebSearchConfig 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-test-connection/
         */
        async aiWebSearchTestConnection(aiWebSearchConfig: AiWebSearchConfig, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProfilesTestConnection200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchTestConnection(aiWebSearchConfig, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchTestConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebSearchApi - factory interface
 * @export
 */
export const WebSearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebSearchApiFp(configuration)
    return {
        /**
         * 
         * @summary Clear
         * @param {WebSearchApiAiWebSearchClearRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-clear/
         * @throws {RequiredError}
         */
        aiWebSearchClear(requestParameters: WebSearchApiAiWebSearchClearRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiWebSearchClear(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Configure
         * @param {WebSearchApiAiWebSearchConfigureRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-configure/
         * @throws {RequiredError}
         */
        aiWebSearchConfigure(requestParameters: WebSearchApiAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiWebSearchMutationResult> {
            return localVarFp.aiWebSearchConfigure(requestParameters.aiWebSearchConfigureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get active config
         * @param {WebSearchApiAiWebSearchGetActiveConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-get-active-config/
         * @throws {RequiredError}
         */
        aiWebSearchGetActiveConfig(requestParameters: WebSearchApiAiWebSearchGetActiveConfigRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiWebSearchConfig> {
            return localVarFp.aiWebSearchGetActiveConfig(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Is configured
         * @param {WebSearchApiAiWebSearchIsConfiguredRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-is-configured/
         * @throws {RequiredError}
         */
        aiWebSearchIsConfigured(requestParameters: WebSearchApiAiWebSearchIsConfiguredRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiWebSearchIsConfigured(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set active config
         * @param {WebSearchApiAiWebSearchSetActiveConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-set-active-config/
         * @throws {RequiredError}
         */
        aiWebSearchSetActiveConfig(requestParameters: WebSearchApiAiWebSearchSetActiveConfigRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiWebSearchSetActiveConfig(requestParameters.aiWebSearchConfigureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Test connection
         * @param {WebSearchApiAiWebSearchTestConnectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-test-connection/
         * @throws {RequiredError}
         */
        aiWebSearchTestConnection(requestParameters: WebSearchApiAiWebSearchTestConnectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProfilesTestConnection200Response> {
            return localVarFp.aiWebSearchTestConnection(requestParameters.aiWebSearchConfig, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiWebSearchClear operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchClearRequest
 */
export interface WebSearchApiAiWebSearchClearRequest {
    /**
     * 
     * @type {string}
     * @memberof WebSearchApiAiWebSearchClear
     */
    readonly body: string
}

/**
 * Request parameters for aiWebSearchConfigure operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchConfigureRequest
 */
export interface WebSearchApiAiWebSearchConfigureRequest {
    /**
     * 
     * @type {AiWebSearchConfigureRequest}
     * @memberof WebSearchApiAiWebSearchConfigure
     */
    readonly aiWebSearchConfigureRequest: AiWebSearchConfigureRequest
}

/**
 * Request parameters for aiWebSearchGetActiveConfig operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchGetActiveConfigRequest
 */
export interface WebSearchApiAiWebSearchGetActiveConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof WebSearchApiAiWebSearchGetActiveConfig
     */
    readonly entityId: string
}

/**
 * Request parameters for aiWebSearchIsConfigured operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchIsConfiguredRequest
 */
export interface WebSearchApiAiWebSearchIsConfiguredRequest {
    /**
     * 
     * @type {string}
     * @memberof WebSearchApiAiWebSearchIsConfigured
     */
    readonly entityId: string
}

/**
 * Request parameters for aiWebSearchSetActiveConfig operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchSetActiveConfigRequest
 */
export interface WebSearchApiAiWebSearchSetActiveConfigRequest {
    /**
     * 
     * @type {AiWebSearchConfigureRequest}
     * @memberof WebSearchApiAiWebSearchSetActiveConfig
     */
    readonly aiWebSearchConfigureRequest: AiWebSearchConfigureRequest
}

/**
 * Request parameters for aiWebSearchTestConnection operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchTestConnectionRequest
 */
export interface WebSearchApiAiWebSearchTestConnectionRequest {
    /**
     * 
     * @type {AiWebSearchConfig}
     * @memberof WebSearchApiAiWebSearchTestConnection
     */
    readonly aiWebSearchConfig: AiWebSearchConfig
}

/**
 * WebSearchApi - object-oriented interface
 * @export
 * @class WebSearchApi
 * @extends {BaseAPI}
 */
export class WebSearchApi extends BaseAPI {
    /**
     * 
     * @summary Clear
     * @param {AIWebSearchApiAiWebSearchClearRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchClear(requestParameters: WebSearchApiAiWebSearchClearRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchClear(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Configure
     * @param {AIWebSearchApiAiWebSearchConfigureRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchConfigure(requestParameters: WebSearchApiAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchConfigure(requestParameters.aiWebSearchConfigureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get active config
     * @param {AIWebSearchApiAiWebSearchGetActiveConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchGetActiveConfig(requestParameters: WebSearchApiAiWebSearchGetActiveConfigRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchGetActiveConfig(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Is configured
     * @param {AIWebSearchApiAiWebSearchIsConfiguredRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchIsConfigured(requestParameters: WebSearchApiAiWebSearchIsConfiguredRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchIsConfigured(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set active config
     * @param {AIWebSearchApiAiWebSearchSetActiveConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchSetActiveConfig(requestParameters: WebSearchApiAiWebSearchSetActiveConfigRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchSetActiveConfig(requestParameters.aiWebSearchConfigureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Test connection
     * @param {AIWebSearchApiAiWebSearchTestConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchTestConnection(requestParameters: WebSearchApiAiWebSearchTestConnectionRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchTestConnection(requestParameters.aiWebSearchConfig, options).then((request) => request(this.axios, this.basePath));
    }
}

