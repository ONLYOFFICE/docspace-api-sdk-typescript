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
import type { AiByokKey } from '../../models';
// @ts-ignore
import type { AiByokKeyInput } from '../../models';
// @ts-ignore
import type { AiByokProvider } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
/**
 * BYOKApi - axios parameter creator
 * @export
 */
export const BYOKApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Delete a BYOK key
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokKeysDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-delete/
         */
        aiByokKeysDelete: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiByokKeysDelete', 'id', id)

            const localVarPath = `/api/2.0/ai/byok/{id}`
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
         * 
         * @summary List BYOK keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokKeysList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-list/
         */
        aiByokKeysList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/byok`;
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
         * 
         * @summary Set a BYOK key
         * @param {string} id 
         * @param {AiByokKeyInput} aiByokKeyInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokKeysSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-set/
         */
        aiByokKeysSet: async (id: string, aiByokKeyInput: AiByokKeyInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiByokKeysSet', 'id', id)
            // verify required parameter 'aiByokKeyInput' is not null or undefined
            assertParamExists('aiByokKeysSet', 'aiByokKeyInput', aiByokKeyInput)

            const localVarPath = `/api/2.0/ai/byok/{id}`
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiByokKeyInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List BYOK providers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-providers/
         */
        aiByokProviders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/byok/providers`;
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
    }
};

/**
 * BYOKApi - functional programming interface
 * @export
 */
export const BYOKApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BYOKApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete a BYOK key
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokKeysDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-delete/
         */
        async aiByokKeysDelete(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiByokKeysDelete(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BYOKApi.aiByokKeysDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List BYOK keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokKeysList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-list/
         */
        async aiByokKeysList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiByokKey>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiByokKeysList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BYOKApi.aiByokKeysList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set a BYOK key
         * @param {string} id 
         * @param {AiByokKeyInput} aiByokKeyInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokKeysSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-set/
         */
        async aiByokKeysSet(id: string, aiByokKeyInput: AiByokKeyInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiByokKey>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiByokKeysSet(id, aiByokKeyInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BYOKApi.aiByokKeysSet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List BYOK providers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiByokProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-providers/
         */
        async aiByokProviders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiByokProvider>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiByokProviders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BYOKApi.aiByokProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BYOKApi - factory interface
 * @export
 */
export const BYOKApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BYOKApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete a BYOK key
         * @param {BYOKApiAiByokKeysDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiByokKeysDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-delete/
         * @throws {RequiredError}
         */
        aiByokKeysDelete(requestParameters: BYOKApiAiByokKeysDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiByokKeysDelete(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List BYOK keys
         * @param {*} [options] Override http request option.
         * REST API Reference for aiByokKeysList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-list/
         * @throws {RequiredError}
         */
        aiByokKeysList(options?: RawAxiosRequestConfig): AxiosPromise<Array<AiByokKey>> {
            return localVarFp.aiByokKeysList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set a BYOK key
         * @param {BYOKApiAiByokKeysSetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiByokKeysSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-keys-set/
         * @throws {RequiredError}
         */
        aiByokKeysSet(requestParameters: BYOKApiAiByokKeysSetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiByokKey> {
            return localVarFp.aiByokKeysSet(requestParameters.id, requestParameters.aiByokKeyInput, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List BYOK providers
         * @param {*} [options] Override http request option.
         * REST API Reference for aiByokProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-byok-providers/
         * @throws {RequiredError}
         */
        aiByokProviders(options?: RawAxiosRequestConfig): AxiosPromise<Array<AiByokProvider>> {
            return localVarFp.aiByokProviders(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiByokKeysDelete operation in BYOKApi.
 * @export
 * @interface BYOKApiAiByokKeysDeleteRequest
 */
export interface BYOKApiAiByokKeysDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof BYOKApiAiByokKeysDelete
     */
    readonly id: string
}

/**
 * Request parameters for aiByokKeysSet operation in BYOKApi.
 * @export
 * @interface BYOKApiAiByokKeysSetRequest
 */
export interface BYOKApiAiByokKeysSetRequest {
    /**
     * 
     * @type {string}
     * @memberof BYOKApiAiByokKeysSet
     */
    readonly id: string

    /**
     * 
     * @type {AiByokKeyInput}
     * @memberof BYOKApiAiByokKeysSet
     */
    readonly aiByokKeyInput: AiByokKeyInput
}

/**
 * BYOKApi - object-oriented interface
 * @export
 * @class BYOKApi
 * @extends {BaseAPI}
 */
export class BYOKApi extends BaseAPI {
    /**
     * 
     * @summary Delete a BYOK key
     * @param {AIBYOKApiAiByokKeysDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BYOKApi
     */
    public aiByokKeysDelete(requestParameters: BYOKApiAiByokKeysDeleteRequest, options?: RawAxiosRequestConfig) {
        return BYOKApiFp(this.configuration).aiByokKeysDelete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List BYOK keys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BYOKApi
     */
    public aiByokKeysList(options?: RawAxiosRequestConfig) {
        return BYOKApiFp(this.configuration).aiByokKeysList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set a BYOK key
     * @param {AIBYOKApiAiByokKeysSetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BYOKApi
     */
    public aiByokKeysSet(requestParameters: BYOKApiAiByokKeysSetRequest, options?: RawAxiosRequestConfig) {
        return BYOKApiFp(this.configuration).aiByokKeysSet(requestParameters.id, requestParameters.aiByokKeyInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List BYOK providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BYOKApi
     */
    public aiByokProviders(options?: RawAxiosRequestConfig) {
        return BYOKApiFp(this.configuration).aiByokProviders(options).then((request) => request(this.axios, this.basePath));
    }
}

