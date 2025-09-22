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
import type { ApiKeyResponseArrayWrapper } from '../../models';
// @ts-ignore
import type { ApiKeyResponseWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CreateApiKeyRequestDto } from '../../models';
// @ts-ignore
import type { STRINGArrayWrapper } from '../../models';
// @ts-ignore
import type { UpdateApiKeyRequest } from '../../models';
/**
 * ApiKeysApi - axios parameter creator
 * @export
 */
export const ApiKeysApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a user API key with the parameters specified in the request.
         * @summary Create a user API key
         * @param {CreateApiKeyRequestDto} [createApiKeyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-api-key/
         */
        createApiKey: async (createApiKeyRequestDto?: CreateApiKeyRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/keys`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createApiKeyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a user API key by its ID.
         * @summary Delete a user API key
         * @param {string} keyId The API key ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-api-key/
         */
        deleteApiKey: async (keyId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyId' is not null or undefined
            assertParamExists('deleteApiKey', 'keyId', keyId)
            const localVarPath = `/api/2.0/keys/{keyId}`
                .replace(`{${"keyId"}}`, encodeURIComponent(String(keyId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all available permissions for the API key.
         * @summary Get API key permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllPermissions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-permissions/
         */
        getAllPermissions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/keys/permissions`;
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
         * Returns current user API key info.
         * @summary Get user API key info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-api-key/
         */
        getApiKey: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/keys/@self`;
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
         * Returns a list of all API keys for the current user.
         * @summary Get user API keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getApiKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-api-keys/
         */
        getApiKeys: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/keys`;
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
         * Updates an existing API key changing its name, permissions and status.
         * @summary Update an API key
         * @param {string} keyId The unique identifier of the API key to update.
         * @param {UpdateApiKeyRequest} updateApiKeyRequest The request parameters for updating an existing API key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-api-key/
         */
        updateApiKey: async (keyId: string, updateApiKeyRequest: UpdateApiKeyRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyId' is not null or undefined
            assertParamExists('updateApiKey', 'keyId', keyId)
            // verify required parameter 'updateApiKeyRequest' is not null or undefined
            assertParamExists('updateApiKey', 'updateApiKeyRequest', updateApiKeyRequest)
            const localVarPath = `/api/2.0/keys/{keyId}`
                .replace(`{${"keyId"}}`, encodeURIComponent(String(keyId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateApiKeyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiKeysApi - functional programming interface
 * @export
 */
export const ApiKeysApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiKeysApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a user API key with the parameters specified in the request.
         * @summary Create a user API key
         * @param {CreateApiKeyRequestDto} [createApiKeyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-api-key/
         */
        async createApiKey(createApiKeyRequestDto?: CreateApiKeyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiKeyResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createApiKey(createApiKeyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiKeysApi.createApiKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete a user API key by its ID.
         * @summary Delete a user API key
         * @param {string} keyId The API key ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-api-key/
         */
        async deleteApiKey(keyId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApiKey(keyId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiKeysApi.deleteApiKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all available permissions for the API key.
         * @summary Get API key permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllPermissions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-permissions/
         */
        async getAllPermissions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<STRINGArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPermissions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiKeysApi.getAllPermissions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns current user API key info.
         * @summary Get user API key info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-api-key/
         */
        async getApiKey(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiKeyResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiKey(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiKeysApi.getApiKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all API keys for the current user.
         * @summary Get user API keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getApiKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-api-keys/
         */
        async getApiKeys(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiKeyResponseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiKeys(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiKeysApi.getApiKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates an existing API key changing its name, permissions and status.
         * @summary Update an API key
         * @param {string} keyId The unique identifier of the API key to update.
         * @param {UpdateApiKeyRequest} updateApiKeyRequest The request parameters for updating an existing API key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-api-key/
         */
        async updateApiKey(keyId: string, updateApiKeyRequest: UpdateApiKeyRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateApiKey(keyId, updateApiKeyRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiKeysApi.updateApiKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ApiKeysApi - factory interface
 * @export
 */
export const ApiKeysApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiKeysApiFp(configuration)
    return {
        /**
         * Creates a user API key with the parameters specified in the request.
         * @summary Create a user API key
         * @param {CreateApiKeyRequestDto} [createApiKeyRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-api-key/
         * @throws {RequiredError}
         */
        createApiKey(createApiKeyRequestDto?: CreateApiKeyRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<ApiKeyResponseWrapper> {
            return localVarFp.createApiKey(createApiKeyRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a user API key by its ID.
         * @summary Delete a user API key
         * @param {string} keyId The API key ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-api-key/
         * @throws {RequiredError}
         */
        deleteApiKey(keyId: string, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteApiKey(keyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all available permissions for the API key.
         * @summary Get API key permissions
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllPermissions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-permissions/
         * @throws {RequiredError}
         */
        getAllPermissions(options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.getAllPermissions(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns current user API key info.
         * @summary Get user API key info
         * @param {*} [options] Override http request option.
         * REST API Reference for getApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-api-key/
         * @throws {RequiredError}
         */
        getApiKey(options?: RawAxiosRequestConfig): AxiosPromise<ApiKeyResponseWrapper> {
            return localVarFp.getApiKey(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all API keys for the current user.
         * @summary Get user API keys
         * @param {*} [options] Override http request option.
         * REST API Reference for getApiKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-api-keys/
         * @throws {RequiredError}
         */
        getApiKeys(options?: RawAxiosRequestConfig): AxiosPromise<ApiKeyResponseArrayWrapper> {
            return localVarFp.getApiKeys(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing API key changing its name, permissions and status.
         * @summary Update an API key
         * @param {string} keyId The unique identifier of the API key to update.
         * @param {UpdateApiKeyRequest} updateApiKeyRequest The request parameters for updating an existing API key.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateApiKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-api-key/
         * @throws {RequiredError}
         */
        updateApiKey(keyId: string, updateApiKeyRequest: UpdateApiKeyRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateApiKey(keyId, updateApiKeyRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApiKeysApi - object-oriented interface
 * @export
 * @class ApiKeysApi
 * @extends {BaseAPI}
 */
export class ApiKeysApi extends BaseAPI {
    /**
     * Creates a user API key with the parameters specified in the request.
     * @summary Create a user API key
     * @param {CreateApiKeyRequestDto} [createApiKeyRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeysApi
     */
    public createApiKey(createApiKeyRequestDto?: CreateApiKeyRequestDto, options?: RawAxiosRequestConfig) {
        return ApiKeysApiFp(this.configuration).createApiKey(createApiKeyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a user API key by its ID.
     * @summary Delete a user API key
     * @param {string} keyId The API key ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeysApi
     */
    public deleteApiKey(keyId: string, options?: RawAxiosRequestConfig) {
        return ApiKeysApiFp(this.configuration).deleteApiKey(keyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all available permissions for the API key.
     * @summary Get API key permissions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeysApi
     */
    public getAllPermissions(options?: RawAxiosRequestConfig) {
        return ApiKeysApiFp(this.configuration).getAllPermissions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns current user API key info.
     * @summary Get user API key info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeysApi
     */
    public getApiKey(options?: RawAxiosRequestConfig) {
        return ApiKeysApiFp(this.configuration).getApiKey(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all API keys for the current user.
     * @summary Get user API keys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeysApi
     */
    public getApiKeys(options?: RawAxiosRequestConfig) {
        return ApiKeysApiFp(this.configuration).getApiKeys(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing API key changing its name, permissions and status.
     * @summary Update an API key
     * @param {string} keyId The unique identifier of the API key to update.
     * @param {UpdateApiKeyRequest} updateApiKeyRequest The request parameters for updating an existing API key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeysApi
     */
    public updateApiKey(keyId: string, updateApiKeyRequest: UpdateApiKeyRequest, options?: RawAxiosRequestConfig) {
        return ApiKeysApiFp(this.configuration).updateApiKey(keyId, updateApiKeyRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

