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
import type { NewAiAiSettingsWrapper } from '../../models';
// @ts-ignore
import type { NewAiAiUserSettingsWrapper } from '../../models';
// @ts-ignore
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiVectorizationSettingsWrapper } from '../../models';
/**
 * NewAISettingsApi - axios parameter creator
 * @export
 */
export const NewAISettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiSettingsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get/
         */
        newAiSettingsGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * REST API Reference for newAiSettingsGetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-user/
         */
        newAiSettingsGetUser: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * REST API Reference for newAiSettingsGetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-vectorization/
         */
        newAiSettingsGetVectorization: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * REST API Reference for newAiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-user/
         */
        newAiSettingsSetUser: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('newAiSettingsSetUser', 'requestBody', requestBody)

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
         * REST API Reference for newAiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-vectorization/
         */
        newAiSettingsSetVectorization: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('newAiSettingsSetVectorization', 'requestBody', requestBody)

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
 * NewAISettingsApi - functional programming interface
 * @export
 */
export const NewAISettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NewAISettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiSettingsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get/
         */
        async newAiSettingsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiAiSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiSettingsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAISettingsApi.newAiSettingsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get user AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiSettingsGetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-user/
         */
        async newAiSettingsGetUser(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiAiUserSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiSettingsGetUser(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAISettingsApi.newAiSettingsGetUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiSettingsGetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-vectorization/
         */
        async newAiSettingsGetVectorization(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiVectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiSettingsGetVectorization(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAISettingsApi.newAiSettingsGetVectorization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update user AI settings
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-user/
         */
        async newAiSettingsSetUser(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiAiUserSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiSettingsSetUser(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAISettingsApi.newAiSettingsSetUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update vectorization settings
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-vectorization/
         */
        async newAiSettingsSetVectorization(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiVectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiSettingsSetVectorization(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NewAISettingsApi.newAiSettingsSetVectorization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NewAISettingsApi - factory interface
 * @export
 */
export const NewAISettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NewAISettingsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiSettingsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get/
         * @throws {RequiredError}
         */
        newAiSettingsGet(options?: RawAxiosRequestConfig): AxiosPromise<NewAiAiSettingsWrapper> {
            return localVarFp.newAiSettingsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get user AI settings
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiSettingsGetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-user/
         * @throws {RequiredError}
         */
        newAiSettingsGetUser(options?: RawAxiosRequestConfig): AxiosPromise<NewAiAiUserSettingsWrapper> {
            return localVarFp.newAiSettingsGetUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiSettingsGetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-vectorization/
         * @throws {RequiredError}
         */
        newAiSettingsGetVectorization(options?: RawAxiosRequestConfig): AxiosPromise<NewAiVectorizationSettingsWrapper> {
            return localVarFp.newAiSettingsGetVectorization(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update user AI settings
         * @param {NewAISettingsApiNewAiSettingsSetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-user/
         * @throws {RequiredError}
         */
        newAiSettingsSetUser(requestParameters: NewAISettingsApiNewAiSettingsSetUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiAiUserSettingsWrapper> {
            return localVarFp.newAiSettingsSetUser(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update vectorization settings
         * @param {NewAISettingsApiNewAiSettingsSetVectorizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-vectorization/
         * @throws {RequiredError}
         */
        newAiSettingsSetVectorization(requestParameters: NewAISettingsApiNewAiSettingsSetVectorizationRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiVectorizationSettingsWrapper> {
            return localVarFp.newAiSettingsSetVectorization(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiSettingsSetUser operation in NewAISettingsApi.
 * @export
 * @interface NewAISettingsApiNewAiSettingsSetUserRequest
 */
export interface NewAISettingsApiNewAiSettingsSetUserRequest {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NewAISettingsApiNewAiSettingsSetUser
     */
    readonly requestBody: { [key: string]: any; }
}

/**
 * Request parameters for newAiSettingsSetVectorization operation in NewAISettingsApi.
 * @export
 * @interface NewAISettingsApiNewAiSettingsSetVectorizationRequest
 */
export interface NewAISettingsApiNewAiSettingsSetVectorizationRequest {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NewAISettingsApiNewAiSettingsSetVectorization
     */
    readonly requestBody: { [key: string]: any; }
}

/**
 * NewAISettingsApi - object-oriented interface
 * @export
 * @class NewAISettingsApi
 * @extends {BaseAPI}
 */
export class NewAISettingsApi extends BaseAPI {
    /**
     * 
     * @summary Get AI settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAISettingsApi
     */
    public newAiSettingsGet(options?: RawAxiosRequestConfig) {
        return NewAISettingsApiFp(this.configuration).newAiSettingsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get user AI settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAISettingsApi
     */
    public newAiSettingsGetUser(options?: RawAxiosRequestConfig) {
        return NewAISettingsApiFp(this.configuration).newAiSettingsGetUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get vectorization settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAISettingsApi
     */
    public newAiSettingsGetVectorization(options?: RawAxiosRequestConfig) {
        return NewAISettingsApiFp(this.configuration).newAiSettingsGetVectorization(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update user AI settings
     * @param {NewAISettingsApiNewAiSettingsSetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAISettingsApi
     */
    public newAiSettingsSetUser(requestParameters: NewAISettingsApiNewAiSettingsSetUserRequest, options?: RawAxiosRequestConfig) {
        return NewAISettingsApiFp(this.configuration).newAiSettingsSetUser(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update vectorization settings
     * @param {NewAISettingsApiNewAiSettingsSetVectorizationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewAISettingsApi
     */
    public newAiSettingsSetVectorization(requestParameters: NewAISettingsApiNewAiSettingsSetVectorizationRequest, options?: RawAxiosRequestConfig) {
        return NewAISettingsApiFp(this.configuration).newAiSettingsSetVectorization(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

