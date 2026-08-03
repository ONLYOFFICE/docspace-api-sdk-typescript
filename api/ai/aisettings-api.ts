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
import type { AiAiSettingsWrapper } from '../../models';
// @ts-ignore
import type { AiAiUserSettingsWrapper } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiVectorizationSettingsWrapper } from '../../models';
/**
 * AISettingsApi - axios parameter creator
 * @export
 */
export const AISettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get/
         */
        aiSettingsGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * @summary Get user AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-user/
         */
        aiSettingsGetUser: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/config/user`;
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
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-vectorization/
         */
        aiSettingsGetVectorization: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * @summary Update user AI settings
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/
         */
        aiSettingsSetUser: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiSettingsSetUser', 'requestBody', requestBody)

            const localVarPath = `/api/2.0/ai/config/user`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update vectorization settings
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/
         */
        aiSettingsSetVectorization: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiSettingsSetVectorization', 'requestBody', requestBody)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AISettingsApi - functional programming interface
 * @export
 */
export const AISettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AISettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get/
         */
        async aiSettingsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAiSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AISettingsApi.aiSettingsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get user AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-user/
         */
        async aiSettingsGetUser(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAiUserSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsGetUser(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AISettingsApi.aiSettingsGetUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-vectorization/
         */
        async aiSettingsGetVectorization(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiVectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsGetVectorization(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AISettingsApi.aiSettingsGetVectorization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update user AI settings
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/
         */
        async aiSettingsSetUser(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAiUserSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsSetUser(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AISettingsApi.aiSettingsSetUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update vectorization settings
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/
         */
        async aiSettingsSetVectorization(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiVectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsSetVectorization(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AISettingsApi.aiSettingsSetVectorization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AISettingsApi - factory interface
 * @export
 */
export const AISettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AISettingsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSettingsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get/
         * @throws {RequiredError}
         */
        aiSettingsGet(options?: RawAxiosRequestConfig): AxiosPromise<AiAiSettingsWrapper> {
            return localVarFp.aiSettingsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get user AI settings
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSettingsGetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-user/
         * @throws {RequiredError}
         */
        aiSettingsGetUser(options?: RawAxiosRequestConfig): AxiosPromise<AiAiUserSettingsWrapper> {
            return localVarFp.aiSettingsGetUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSettingsGetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-vectorization/
         * @throws {RequiredError}
         */
        aiSettingsGetVectorization(options?: RawAxiosRequestConfig): AxiosPromise<AiVectorizationSettingsWrapper> {
            return localVarFp.aiSettingsGetVectorization(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update user AI settings
         * @param {AISettingsApiAiSettingsSetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/
         * @throws {RequiredError}
         */
        aiSettingsSetUser(requestParameters: AISettingsApiAiSettingsSetUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiAiUserSettingsWrapper> {
            return localVarFp.aiSettingsSetUser(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update vectorization settings
         * @param {AISettingsApiAiSettingsSetVectorizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/
         * @throws {RequiredError}
         */
        aiSettingsSetVectorization(requestParameters: AISettingsApiAiSettingsSetVectorizationRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiVectorizationSettingsWrapper> {
            return localVarFp.aiSettingsSetVectorization(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiSettingsSetUser operation in AISettingsApi.
 * @export
 * @interface AISettingsApiAiSettingsSetUserRequest
 */
export interface AISettingsApiAiSettingsSetUserRequest {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AISettingsApiAiSettingsSetUser
     */
    readonly requestBody: { [key: string]: any; }
}

/**
 * Request parameters for aiSettingsSetVectorization operation in AISettingsApi.
 * @export
 * @interface AISettingsApiAiSettingsSetVectorizationRequest
 */
export interface AISettingsApiAiSettingsSetVectorizationRequest {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AISettingsApiAiSettingsSetVectorization
     */
    readonly requestBody: { [key: string]: any; }
}

/**
 * AISettingsApi - object-oriented interface
 * @export
 * @class AISettingsApi
 * @extends {BaseAPI}
 */
export class AISettingsApi extends BaseAPI {
    /**
     * 
     * @summary Get AI settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AISettingsApi
     */
    public aiSettingsGet(options?: RawAxiosRequestConfig) {
        return AISettingsApiFp(this.configuration).aiSettingsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get user AI settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AISettingsApi
     */
    public aiSettingsGetUser(options?: RawAxiosRequestConfig) {
        return AISettingsApiFp(this.configuration).aiSettingsGetUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get vectorization settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AISettingsApi
     */
    public aiSettingsGetVectorization(options?: RawAxiosRequestConfig) {
        return AISettingsApiFp(this.configuration).aiSettingsGetVectorization(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update user AI settings
     * @param {AISettingsApiAiSettingsSetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AISettingsApi
     */
    public aiSettingsSetUser(requestParameters: AISettingsApiAiSettingsSetUserRequest, options?: RawAxiosRequestConfig) {
        return AISettingsApiFp(this.configuration).aiSettingsSetUser(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update vectorization settings
     * @param {AISettingsApiAiSettingsSetVectorizationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AISettingsApi
     */
    public aiSettingsSetVectorization(requestParameters: AISettingsApiAiSettingsSetVectorizationRequest, options?: RawAxiosRequestConfig) {
        return AISettingsApiFp(this.configuration).aiSettingsSetVectorization(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

