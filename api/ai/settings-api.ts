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
 * SettingsApi - axios parameter creator
 * @export
 */
export const SettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Reports the portal\'s AI configuration and whether AI is usable at all, which is the first call a client makes before offering any AI feature. It takes no parameters and is proxied unchanged to the DocSpace AI service, so the answer is that service\'s settings payload. Among other things it says whether the portal runs on the central AI gateway, which decides whether provider profiles can be edited here at all. This is a read-only operation.
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
         * Returns the AI settings of the calling user, as opposed to the portal-wide ones. It takes no parameters - the user is the authenticated caller, and there is no way to read somebody else\'s settings - and is proxied unchanged to the DocSpace AI service. Use `GET api/2.0/ai/config` for the portal-wide configuration. This is a read-only operation.
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
         * Returns the portal\'s vectorization settings - the embedding provider and the options used when portal content is indexed for retrieval. It takes no parameters and is proxied unchanged to the DocSpace AI service. Vectorization is a portal-wide setting, so there is no room-scoped form of it. Change it with `PUT api/2.0/ai/config/vectorization`.
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
         * Replaces the AI settings of the calling user and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value comes back with that service\'s verdict. Only the caller\'s own settings can be written. Portal-wide configuration is not touched by this operation.
         * @summary Update user AI settings
         * @param {{ [key: string]: any | null; }} requestBody The user\'s AI settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/user` and send it back changed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/
         */
        aiSettingsSetUser: async (requestBody: { [key: string]: any | null; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Replaces the portal\'s vectorization settings and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value is reported with that service\'s own verdict rather than being checked here. Changing the embedding provider does not re-index anything already indexed - start that separately with `POST api/2.0/ai/vectorization/tasks`. This is a portal-wide setting and requires the permissions the AI service demands for it.
         * @summary Update vectorization settings
         * @param {{ [key: string]: any | null; }} requestBody The portal\'s vectorization settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/vectorization` and send it back changed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/
         */
        aiSettingsSetVectorization: async (requestBody: { [key: string]: any | null; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
 * SettingsApi - functional programming interface
 * @export
 */
export const SettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Reports the portal\'s AI configuration and whether AI is usable at all, which is the first call a client makes before offering any AI feature. It takes no parameters and is proxied unchanged to the DocSpace AI service, so the answer is that service\'s settings payload. Among other things it says whether the portal runs on the central AI gateway, which decides whether provider profiles can be edited here at all. This is a read-only operation.
         * @summary Get AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get/
         */
        async aiSettingsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAiSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.aiSettingsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the AI settings of the calling user, as opposed to the portal-wide ones. It takes no parameters - the user is the authenticated caller, and there is no way to read somebody else\'s settings - and is proxied unchanged to the DocSpace AI service. Use `GET api/2.0/ai/config` for the portal-wide configuration. This is a read-only operation.
         * @summary Get user AI settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-user/
         */
        async aiSettingsGetUser(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAiUserSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsGetUser(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.aiSettingsGetUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal\'s vectorization settings - the embedding provider and the options used when portal content is indexed for retrieval. It takes no parameters and is proxied unchanged to the DocSpace AI service. Vectorization is a portal-wide setting, so there is no room-scoped form of it. Change it with `PUT api/2.0/ai/config/vectorization`.
         * @summary Get vectorization settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsGetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-vectorization/
         */
        async aiSettingsGetVectorization(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiVectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsGetVectorization(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.aiSettingsGetVectorization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the AI settings of the calling user and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value comes back with that service\'s verdict. Only the caller\'s own settings can be written. Portal-wide configuration is not touched by this operation.
         * @summary Update user AI settings
         * @param {{ [key: string]: any | null; }} requestBody The user\'s AI settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/user` and send it back changed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/
         */
        async aiSettingsSetUser(requestBody: { [key: string]: any | null; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAiUserSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsSetUser(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.aiSettingsSetUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the portal\'s vectorization settings and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value is reported with that service\'s own verdict rather than being checked here. Changing the embedding provider does not re-index anything already indexed - start that separately with `POST api/2.0/ai/vectorization/tasks`. This is a portal-wide setting and requires the permissions the AI service demands for it.
         * @summary Update vectorization settings
         * @param {{ [key: string]: any | null; }} requestBody The portal\'s vectorization settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/vectorization` and send it back changed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/
         */
        async aiSettingsSetVectorization(requestBody: { [key: string]: any | null; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiVectorizationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSettingsSetVectorization(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.aiSettingsSetVectorization']?.[localVarOperationServerIndex]?.url;
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
         * Reports the portal\'s AI configuration and whether AI is usable at all, which is the first call a client makes before offering any AI feature. It takes no parameters and is proxied unchanged to the DocSpace AI service, so the answer is that service\'s settings payload. Among other things it says whether the portal runs on the central AI gateway, which decides whether provider profiles can be edited here at all. This is a read-only operation.
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
         * Returns the AI settings of the calling user, as opposed to the portal-wide ones. It takes no parameters - the user is the authenticated caller, and there is no way to read somebody else\'s settings - and is proxied unchanged to the DocSpace AI service. Use `GET api/2.0/ai/config` for the portal-wide configuration. This is a read-only operation.
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
         * Returns the portal\'s vectorization settings - the embedding provider and the options used when portal content is indexed for retrieval. It takes no parameters and is proxied unchanged to the DocSpace AI service. Vectorization is a portal-wide setting, so there is no room-scoped form of it. Change it with `PUT api/2.0/ai/config/vectorization`.
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
         * Replaces the AI settings of the calling user and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value comes back with that service\'s verdict. Only the caller\'s own settings can be written. Portal-wide configuration is not touched by this operation.
         * @summary Update user AI settings
         * @param {SettingsApiAiSettingsSetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSettingsSetUser operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/
         * @throws {RequiredError}
         */
        aiSettingsSetUser(requestParameters: SettingsApiAiSettingsSetUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiAiUserSettingsWrapper> {
            return localVarFp.aiSettingsSetUser(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the portal\'s vectorization settings and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value is reported with that service\'s own verdict rather than being checked here. Changing the embedding provider does not re-index anything already indexed - start that separately with `POST api/2.0/ai/vectorization/tasks`. This is a portal-wide setting and requires the permissions the AI service demands for it.
         * @summary Update vectorization settings
         * @param {SettingsApiAiSettingsSetVectorizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSettingsSetVectorization operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/
         * @throws {RequiredError}
         */
        aiSettingsSetVectorization(requestParameters: SettingsApiAiSettingsSetVectorizationRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiVectorizationSettingsWrapper> {
            return localVarFp.aiSettingsSetVectorization(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiSettingsSetUser operation in SettingsApi.
 * @export
 * @interface SettingsApiAiSettingsSetUserRequest
 */
export interface SettingsApiAiSettingsSetUserRequest {
    /**
     * The user\'s AI settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/user` and send it back changed.
     * @type {{ [key: string]: any | null; }}
     * @memberof SettingsApiAiSettingsSetUser
     */
    readonly requestBody: { [key: string]: any | null; }
}

/**
 * Request parameters for aiSettingsSetVectorization operation in SettingsApi.
 * @export
 * @interface SettingsApiAiSettingsSetVectorizationRequest
 */
export interface SettingsApiAiSettingsSetVectorizationRequest {
    /**
     * The portal\'s vectorization settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/vectorization` and send it back changed.
     * @type {{ [key: string]: any | null; }}
     * @memberof SettingsApiAiSettingsSetVectorization
     */
    readonly requestBody: { [key: string]: any | null; }
}

/**
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
export class SettingsApi extends BaseAPI {
    /**
     * Reports the portal\'s AI configuration and whether AI is usable at all, which is the first call a client makes before offering any AI feature. It takes no parameters and is proxied unchanged to the DocSpace AI service, so the answer is that service\'s settings payload. Among other things it says whether the portal runs on the central AI gateway, which decides whether provider profiles can be edited here at all. This is a read-only operation.
     * @summary Get AI settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public aiSettingsGet(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).aiSettingsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the AI settings of the calling user, as opposed to the portal-wide ones. It takes no parameters - the user is the authenticated caller, and there is no way to read somebody else\'s settings - and is proxied unchanged to the DocSpace AI service. Use `GET api/2.0/ai/config` for the portal-wide configuration. This is a read-only operation.
     * @summary Get user AI settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public aiSettingsGetUser(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).aiSettingsGetUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal\'s vectorization settings - the embedding provider and the options used when portal content is indexed for retrieval. It takes no parameters and is proxied unchanged to the DocSpace AI service. Vectorization is a portal-wide setting, so there is no room-scoped form of it. Change it with `PUT api/2.0/ai/config/vectorization`.
     * @summary Get vectorization settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public aiSettingsGetVectorization(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).aiSettingsGetVectorization(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the AI settings of the calling user and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value comes back with that service\'s verdict. Only the caller\'s own settings can be written. Portal-wide configuration is not touched by this operation.
     * @summary Update user AI settings
     * @param {AISettingsApiAiSettingsSetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public aiSettingsSetUser(requestParameters: SettingsApiAiSettingsSetUserRequest, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).aiSettingsSetUser(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the portal\'s vectorization settings and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value is reported with that service\'s own verdict rather than being checked here. Changing the embedding provider does not re-index anything already indexed - start that separately with `POST api/2.0/ai/vectorization/tasks`. This is a portal-wide setting and requires the permissions the AI service demands for it.
     * @summary Update vectorization settings
     * @param {AISettingsApiAiSettingsSetVectorizationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public aiSettingsSetVectorization(requestParameters: SettingsApiAiSettingsSetVectorizationRequest, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).aiSettingsSetVectorization(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

