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
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiProfilesTestConnection200Response } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
// @ts-ignore
import type { NewAiWebSearchConfig } from '../../models';
// @ts-ignore
import type { NewAiWebSearchConfigureRequest } from '../../models';
// @ts-ignore
import type { NewAiWebSearchMutationResult } from '../../models';
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
         * REST API Reference for newAiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-clear/
         */
        newAiWebSearchClear: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiWebSearchClear', 'body', body)

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
         * @param {NewAiWebSearchConfigureRequest} newAiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-configure/
         */
        newAiWebSearchConfigure: async (newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiWebSearchConfigureRequest' is not null or undefined
            assertParamExists('newAiWebSearchConfigure', 'newAiWebSearchConfigureRequest', newAiWebSearchConfigureRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiWebSearchConfigureRequest, localVarRequestOptions, configuration)

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
         * REST API Reference for newAiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-get-active-config/
         */
        newAiWebSearchGetActiveConfig: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiWebSearchGetActiveConfig', 'entityId', entityId)

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
         * REST API Reference for newAiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-is-configured/
         */
        newAiWebSearchIsConfigured: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiWebSearchIsConfigured', 'entityId', entityId)

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
         * @param {NewAiWebSearchConfigureRequest} newAiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-set-active-config/
         */
        newAiWebSearchSetActiveConfig: async (newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiWebSearchConfigureRequest' is not null or undefined
            assertParamExists('newAiWebSearchSetActiveConfig', 'newAiWebSearchConfigureRequest', newAiWebSearchConfigureRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiWebSearchConfigureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Test connection
         * @param {NewAiWebSearchConfig} newAiWebSearchConfig 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-test-connection/
         */
        newAiWebSearchTestConnection: async (newAiWebSearchConfig: NewAiWebSearchConfig, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiWebSearchConfig' is not null or undefined
            assertParamExists('newAiWebSearchTestConnection', 'newAiWebSearchConfig', newAiWebSearchConfig)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiWebSearchConfig, localVarRequestOptions, configuration)

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
         * REST API Reference for newAiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-clear/
         */
        async newAiWebSearchClear(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiWebSearchClear(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.newAiWebSearchClear']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Configure
         * @param {NewAiWebSearchConfigureRequest} newAiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-configure/
         */
        async newAiWebSearchConfigure(newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiWebSearchMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiWebSearchConfigure(newAiWebSearchConfigureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.newAiWebSearchConfigure']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get active config
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-get-active-config/
         */
        async newAiWebSearchGetActiveConfig(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiWebSearchConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiWebSearchGetActiveConfig(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.newAiWebSearchGetActiveConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Is configured
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-is-configured/
         */
        async newAiWebSearchIsConfigured(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiWebSearchIsConfigured(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.newAiWebSearchIsConfigured']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set active config
         * @param {NewAiWebSearchConfigureRequest} newAiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-set-active-config/
         */
        async newAiWebSearchSetActiveConfig(newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiWebSearchSetActiveConfig(newAiWebSearchConfigureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.newAiWebSearchSetActiveConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Test connection
         * @param {NewAiWebSearchConfig} newAiWebSearchConfig 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-test-connection/
         */
        async newAiWebSearchTestConnection(newAiWebSearchConfig: NewAiWebSearchConfig, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiProfilesTestConnection200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiWebSearchTestConnection(newAiWebSearchConfig, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.newAiWebSearchTestConnection']?.[localVarOperationServerIndex]?.url;
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
         * @param {WebSearchApiNewAiWebSearchClearRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-clear/
         * @throws {RequiredError}
         */
        newAiWebSearchClear(requestParameters: WebSearchApiNewAiWebSearchClearRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiWebSearchClear(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Configure
         * @param {WebSearchApiNewAiWebSearchConfigureRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-configure/
         * @throws {RequiredError}
         */
        newAiWebSearchConfigure(requestParameters: WebSearchApiNewAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiWebSearchMutationResult> {
            return localVarFp.newAiWebSearchConfigure(requestParameters.newAiWebSearchConfigureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get active config
         * @param {WebSearchApiNewAiWebSearchGetActiveConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-get-active-config/
         * @throws {RequiredError}
         */
        newAiWebSearchGetActiveConfig(requestParameters: WebSearchApiNewAiWebSearchGetActiveConfigRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiWebSearchConfig> {
            return localVarFp.newAiWebSearchGetActiveConfig(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Is configured
         * @param {WebSearchApiNewAiWebSearchIsConfiguredRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-is-configured/
         * @throws {RequiredError}
         */
        newAiWebSearchIsConfigured(requestParameters: WebSearchApiNewAiWebSearchIsConfiguredRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.newAiWebSearchIsConfigured(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set active config
         * @param {WebSearchApiNewAiWebSearchSetActiveConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-set-active-config/
         * @throws {RequiredError}
         */
        newAiWebSearchSetActiveConfig(requestParameters: WebSearchApiNewAiWebSearchSetActiveConfigRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiWebSearchSetActiveConfig(requestParameters.newAiWebSearchConfigureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Test connection
         * @param {WebSearchApiNewAiWebSearchTestConnectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-test-connection/
         * @throws {RequiredError}
         */
        newAiWebSearchTestConnection(requestParameters: WebSearchApiNewAiWebSearchTestConnectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiProfilesTestConnection200Response> {
            return localVarFp.newAiWebSearchTestConnection(requestParameters.newAiWebSearchConfig, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiWebSearchClear operation in WebSearchApi.
 * @export
 * @interface WebSearchApiNewAiWebSearchClearRequest
 */
export interface WebSearchApiNewAiWebSearchClearRequest {
    /**
     * 
     * @type {string}
     * @memberof WebSearchApiNewAiWebSearchClear
     */
    readonly body: string
}

/**
 * Request parameters for newAiWebSearchConfigure operation in WebSearchApi.
 * @export
 * @interface WebSearchApiNewAiWebSearchConfigureRequest
 */
export interface WebSearchApiNewAiWebSearchConfigureRequest {
    /**
     * 
     * @type {NewAiWebSearchConfigureRequest}
     * @memberof WebSearchApiNewAiWebSearchConfigure
     */
    readonly newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest
}

/**
 * Request parameters for newAiWebSearchGetActiveConfig operation in WebSearchApi.
 * @export
 * @interface WebSearchApiNewAiWebSearchGetActiveConfigRequest
 */
export interface WebSearchApiNewAiWebSearchGetActiveConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof WebSearchApiNewAiWebSearchGetActiveConfig
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiWebSearchIsConfigured operation in WebSearchApi.
 * @export
 * @interface WebSearchApiNewAiWebSearchIsConfiguredRequest
 */
export interface WebSearchApiNewAiWebSearchIsConfiguredRequest {
    /**
     * 
     * @type {string}
     * @memberof WebSearchApiNewAiWebSearchIsConfigured
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiWebSearchSetActiveConfig operation in WebSearchApi.
 * @export
 * @interface WebSearchApiNewAiWebSearchSetActiveConfigRequest
 */
export interface WebSearchApiNewAiWebSearchSetActiveConfigRequest {
    /**
     * 
     * @type {NewAiWebSearchConfigureRequest}
     * @memberof WebSearchApiNewAiWebSearchSetActiveConfig
     */
    readonly newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest
}

/**
 * Request parameters for newAiWebSearchTestConnection operation in WebSearchApi.
 * @export
 * @interface WebSearchApiNewAiWebSearchTestConnectionRequest
 */
export interface WebSearchApiNewAiWebSearchTestConnectionRequest {
    /**
     * 
     * @type {NewAiWebSearchConfig}
     * @memberof WebSearchApiNewAiWebSearchTestConnection
     */
    readonly newAiWebSearchConfig: NewAiWebSearchConfig
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
     * @param {NewAIWebSearchApiNewAiWebSearchClearRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public newAiWebSearchClear(requestParameters: WebSearchApiNewAiWebSearchClearRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).newAiWebSearchClear(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Configure
     * @param {NewAIWebSearchApiNewAiWebSearchConfigureRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public newAiWebSearchConfigure(requestParameters: WebSearchApiNewAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).newAiWebSearchConfigure(requestParameters.newAiWebSearchConfigureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get active config
     * @param {NewAIWebSearchApiNewAiWebSearchGetActiveConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public newAiWebSearchGetActiveConfig(requestParameters: WebSearchApiNewAiWebSearchGetActiveConfigRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).newAiWebSearchGetActiveConfig(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Is configured
     * @param {NewAIWebSearchApiNewAiWebSearchIsConfiguredRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public newAiWebSearchIsConfigured(requestParameters: WebSearchApiNewAiWebSearchIsConfiguredRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).newAiWebSearchIsConfigured(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set active config
     * @param {NewAIWebSearchApiNewAiWebSearchSetActiveConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public newAiWebSearchSetActiveConfig(requestParameters: WebSearchApiNewAiWebSearchSetActiveConfigRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).newAiWebSearchSetActiveConfig(requestParameters.newAiWebSearchConfigureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Test connection
     * @param {NewAIWebSearchApiNewAiWebSearchTestConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public newAiWebSearchTestConnection(requestParameters: WebSearchApiNewAiWebSearchTestConnectionRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).newAiWebSearchTestConnection(requestParameters.newAiWebSearchConfig, options).then((request) => request(this.axios, this.basePath));
    }
}

