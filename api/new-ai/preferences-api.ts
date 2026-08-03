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
import type { NewAiPreferencesSetDeepModeRequest } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
/**
 * PreferencesApi - axios parameter creator
 * @export
 */
export const PreferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Clear deep mode
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesClearDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-clear-deep-mode/
         */
        newAiPreferencesClearDeepMode: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiPreferencesClearDeepMode', 'body', body)

            const localVarPath = `/api/2.0/ai/preferences/clear-deep-mode`;
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
         * @summary Get deep mode
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesGetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-get-deep-mode/
         */
        newAiPreferencesGetDeepMode: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiPreferencesGetDeepMode', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/preferences/get-deep-mode`;
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
         * @summary Is deep mode set
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesIsDeepModeSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-is-deep-mode-set/
         */
        newAiPreferencesIsDeepModeSet: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiPreferencesIsDeepModeSet', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/preferences/is-deep-mode-set`;
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
         * @summary Set deep mode
         * @param {NewAiPreferencesSetDeepModeRequest} newAiPreferencesSetDeepModeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesSetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-set-deep-mode/
         */
        newAiPreferencesSetDeepMode: async (newAiPreferencesSetDeepModeRequest: NewAiPreferencesSetDeepModeRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiPreferencesSetDeepModeRequest' is not null or undefined
            assertParamExists('newAiPreferencesSetDeepMode', 'newAiPreferencesSetDeepModeRequest', newAiPreferencesSetDeepModeRequest)

            const localVarPath = `/api/2.0/ai/preferences/set-deep-mode`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiPreferencesSetDeepModeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PreferencesApi - functional programming interface
 * @export
 */
export const PreferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PreferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Clear deep mode
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesClearDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-clear-deep-mode/
         */
        async newAiPreferencesClearDeepMode(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPreferencesClearDeepMode(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.newAiPreferencesClearDeepMode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get deep mode
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesGetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-get-deep-mode/
         */
        async newAiPreferencesGetDeepMode(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPreferencesGetDeepMode(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.newAiPreferencesGetDeepMode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Is deep mode set
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesIsDeepModeSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-is-deep-mode-set/
         */
        async newAiPreferencesIsDeepModeSet(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPreferencesIsDeepModeSet(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.newAiPreferencesIsDeepModeSet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set deep mode
         * @param {NewAiPreferencesSetDeepModeRequest} newAiPreferencesSetDeepModeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPreferencesSetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-set-deep-mode/
         */
        async newAiPreferencesSetDeepMode(newAiPreferencesSetDeepModeRequest: NewAiPreferencesSetDeepModeRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPreferencesSetDeepMode(newAiPreferencesSetDeepModeRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.newAiPreferencesSetDeepMode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PreferencesApi - factory interface
 * @export
 */
export const PreferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PreferencesApiFp(configuration)
    return {
        /**
         * 
         * @summary Clear deep mode
         * @param {PreferencesApiNewAiPreferencesClearDeepModeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPreferencesClearDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-clear-deep-mode/
         * @throws {RequiredError}
         */
        newAiPreferencesClearDeepMode(requestParameters: PreferencesApiNewAiPreferencesClearDeepModeRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiPreferencesClearDeepMode(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get deep mode
         * @param {PreferencesApiNewAiPreferencesGetDeepModeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPreferencesGetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-get-deep-mode/
         * @throws {RequiredError}
         */
        newAiPreferencesGetDeepMode(requestParameters: PreferencesApiNewAiPreferencesGetDeepModeRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.newAiPreferencesGetDeepMode(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Is deep mode set
         * @param {PreferencesApiNewAiPreferencesIsDeepModeSetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPreferencesIsDeepModeSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-is-deep-mode-set/
         * @throws {RequiredError}
         */
        newAiPreferencesIsDeepModeSet(requestParameters: PreferencesApiNewAiPreferencesIsDeepModeSetRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.newAiPreferencesIsDeepModeSet(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set deep mode
         * @param {PreferencesApiNewAiPreferencesSetDeepModeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPreferencesSetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-set-deep-mode/
         * @throws {RequiredError}
         */
        newAiPreferencesSetDeepMode(requestParameters: PreferencesApiNewAiPreferencesSetDeepModeRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiPreferencesSetDeepMode(requestParameters.newAiPreferencesSetDeepModeRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiPreferencesClearDeepMode operation in PreferencesApi.
 * @export
 * @interface PreferencesApiNewAiPreferencesClearDeepModeRequest
 */
export interface PreferencesApiNewAiPreferencesClearDeepModeRequest {
    /**
     * 
     * @type {string}
     * @memberof PreferencesApiNewAiPreferencesClearDeepMode
     */
    readonly body: string
}

/**
 * Request parameters for newAiPreferencesGetDeepMode operation in PreferencesApi.
 * @export
 * @interface PreferencesApiNewAiPreferencesGetDeepModeRequest
 */
export interface PreferencesApiNewAiPreferencesGetDeepModeRequest {
    /**
     * 
     * @type {string}
     * @memberof PreferencesApiNewAiPreferencesGetDeepMode
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiPreferencesIsDeepModeSet operation in PreferencesApi.
 * @export
 * @interface PreferencesApiNewAiPreferencesIsDeepModeSetRequest
 */
export interface PreferencesApiNewAiPreferencesIsDeepModeSetRequest {
    /**
     * 
     * @type {string}
     * @memberof PreferencesApiNewAiPreferencesIsDeepModeSet
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiPreferencesSetDeepMode operation in PreferencesApi.
 * @export
 * @interface PreferencesApiNewAiPreferencesSetDeepModeRequest
 */
export interface PreferencesApiNewAiPreferencesSetDeepModeRequest {
    /**
     * 
     * @type {NewAiPreferencesSetDeepModeRequest}
     * @memberof PreferencesApiNewAiPreferencesSetDeepMode
     */
    readonly newAiPreferencesSetDeepModeRequest: NewAiPreferencesSetDeepModeRequest
}

/**
 * PreferencesApi - object-oriented interface
 * @export
 * @class PreferencesApi
 * @extends {BaseAPI}
 */
export class PreferencesApi extends BaseAPI {
    /**
     * 
     * @summary Clear deep mode
     * @param {NewAIPreferencesApiNewAiPreferencesClearDeepModeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public newAiPreferencesClearDeepMode(requestParameters: PreferencesApiNewAiPreferencesClearDeepModeRequest, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).newAiPreferencesClearDeepMode(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get deep mode
     * @param {NewAIPreferencesApiNewAiPreferencesGetDeepModeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public newAiPreferencesGetDeepMode(requestParameters: PreferencesApiNewAiPreferencesGetDeepModeRequest, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).newAiPreferencesGetDeepMode(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Is deep mode set
     * @param {NewAIPreferencesApiNewAiPreferencesIsDeepModeSetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public newAiPreferencesIsDeepModeSet(requestParameters: PreferencesApiNewAiPreferencesIsDeepModeSetRequest, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).newAiPreferencesIsDeepModeSet(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set deep mode
     * @param {NewAIPreferencesApiNewAiPreferencesSetDeepModeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public newAiPreferencesSetDeepMode(requestParameters: PreferencesApiNewAiPreferencesSetDeepModeRequest, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).newAiPreferencesSetDeepMode(requestParameters.newAiPreferencesSetDeepModeRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

