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
import type { EncryptionKeyArrayWrapper } from '../../models';
// @ts-ignore
import type { EncryptionKeyRequestDto } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
/**
 * PrivacyRoomApi - axios parameter creator
 * @export
 */
export const PrivacyRoomApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Deletes an encryption key and removes it from the system based on the provided key identifier.    Breaking change in DocSpace 4.0: the endpoint used to answer 200 with the caller\'s remaining  encryption keys and now answers 204 with no body. A client that read that list must call  `GET api/2.0/privacyroom/keys` instead.
         * @summary Deletes an encryption key and removes it from the system.
         * @param {string} id The unique identifier of the encryption key to be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         */
        deleteKeys: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteKeys', 'id', id)

            const localVarPath = `/api/2.0/privacyroom/keys/{id}`
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
         * Retrieves encryption keys associated with the current user.
         * @summary Retrieves encryption keys associated with the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/
         */
        getUserKeys: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/privacyroom/keys`;
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
         * Retrieves the encryption keys associated with a specific privacy room.
         * @summary Retrieves the encryption keys associated with a specific privacy room.
         * @param {number} roomId The identifier of the privacy room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeysForRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/
         */
        getUserKeysForRoom: async (roomId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('getUserKeysForRoom', 'roomId', roomId)

            const localVarPath = `/api/2.0/privacyroom/{roomId}/access`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
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
         * Replaces an existing encryption key with a new one for the user.
         * @summary Replaces an existing encryption key with a new one for the user.
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] The request object containing the public and private key information to replace the existing key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for replaceKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/
         */
        replaceKey: async (encryptionKeyRequestDto?: EncryptionKeyRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/privacyroom/keys`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(encryptionKeyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates and sets encryption keys for the user.
         * @summary Creates and sets encryption keys for the user.
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] The request object containing public and private key information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/
         */
        setKeys: async (encryptionKeyRequestDto?: EncryptionKeyRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/privacyroom/keys`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(encryptionKeyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PrivacyRoomApi - functional programming interface
 * @export
 */
export const PrivacyRoomApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PrivacyRoomApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes an encryption key and removes it from the system based on the provided key identifier.    Breaking change in DocSpace 4.0: the endpoint used to answer 200 with the caller\'s remaining  encryption keys and now answers 204 with no body. A client that read that list must call  `GET api/2.0/privacyroom/keys` instead.
         * @summary Deletes an encryption key and removes it from the system.
         * @param {string} id The unique identifier of the encryption key to be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         */
        async deleteKeys(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteKeys(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.deleteKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves encryption keys associated with the current user.
         * @summary Retrieves encryption keys associated with the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/
         */
        async getUserKeys(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserKeys(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.getUserKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the encryption keys associated with a specific privacy room.
         * @summary Retrieves the encryption keys associated with a specific privacy room.
         * @param {number} roomId The identifier of the privacy room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeysForRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/
         */
        async getUserKeysForRoom(roomId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserKeysForRoom(roomId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.getUserKeysForRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces an existing encryption key with a new one for the user.
         * @summary Replaces an existing encryption key with a new one for the user.
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] The request object containing the public and private key information to replace the existing key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for replaceKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/
         */
        async replaceKey(encryptionKeyRequestDto?: EncryptionKeyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.replaceKey(encryptionKeyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.replaceKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates and sets encryption keys for the user.
         * @summary Creates and sets encryption keys for the user.
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] The request object containing public and private key information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/
         */
        async setKeys(encryptionKeyRequestDto?: EncryptionKeyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setKeys(encryptionKeyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.setKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PrivacyRoomApi - factory interface
 * @export
 */
export const PrivacyRoomApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PrivacyRoomApiFp(configuration)
    return {
        /**
         * Deletes an encryption key and removes it from the system based on the provided key identifier.    Breaking change in DocSpace 4.0: the endpoint used to answer 200 with the caller\'s remaining  encryption keys and now answers 204 with no body. A client that read that list must call  `GET api/2.0/privacyroom/keys` instead.
         * @summary Deletes an encryption key and removes it from the system.
         * @param {PrivacyRoomApiDeleteKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         * @throws {RequiredError}
         */
        deleteKeys(requestParameters: PrivacyRoomApiDeleteKeysRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteKeys(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves encryption keys associated with the current user.
         * @summary Retrieves encryption keys associated with the current user.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/
         * @throws {RequiredError}
         */
        getUserKeys(options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.getUserKeys(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the encryption keys associated with a specific privacy room.
         * @summary Retrieves the encryption keys associated with a specific privacy room.
         * @param {PrivacyRoomApiGetUserKeysForRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserKeysForRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/
         * @throws {RequiredError}
         */
        getUserKeysForRoom(requestParameters: PrivacyRoomApiGetUserKeysForRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.getUserKeysForRoom(requestParameters.roomId, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces an existing encryption key with a new one for the user.
         * @summary Replaces an existing encryption key with a new one for the user.
         * @param {PrivacyRoomApiReplaceKeyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for replaceKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/
         * @throws {RequiredError}
         */
        replaceKey(requestParameters: PrivacyRoomApiReplaceKeyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.replaceKey(requestParameters.encryptionKeyRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates and sets encryption keys for the user.
         * @summary Creates and sets encryption keys for the user.
         * @param {PrivacyRoomApiSetKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/
         * @throws {RequiredError}
         */
        setKeys(requestParameters: PrivacyRoomApiSetKeysRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.setKeys(requestParameters.encryptionKeyRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteKeys operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiDeleteKeysRequest
 */
export interface PrivacyRoomApiDeleteKeysRequest {
    /**
     * The unique identifier of the encryption key to be deleted.
     * @type {string}
     * @memberof PrivacyRoomApiDeleteKeys
     */
    readonly id: string
}

/**
 * Request parameters for getUserKeysForRoom operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiGetUserKeysForRoomRequest
 */
export interface PrivacyRoomApiGetUserKeysForRoomRequest {
    /**
     * The identifier of the privacy room.
     * @type {number}
     * @memberof PrivacyRoomApiGetUserKeysForRoom
     */
    readonly roomId: number
}

/**
 * Request parameters for replaceKey operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiReplaceKeyRequest
 */
export interface PrivacyRoomApiReplaceKeyRequest {
    /**
     * The request object containing the public and private key information to replace the existing key.
     * @type {EncryptionKeyRequestDto}
     * @memberof PrivacyRoomApiReplaceKey
     */
    readonly encryptionKeyRequestDto?: EncryptionKeyRequestDto
}

/**
 * Request parameters for setKeys operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiSetKeysRequest
 */
export interface PrivacyRoomApiSetKeysRequest {
    /**
     * The request object containing public and private key information.
     * @type {EncryptionKeyRequestDto}
     * @memberof PrivacyRoomApiSetKeys
     */
    readonly encryptionKeyRequestDto?: EncryptionKeyRequestDto
}

/**
 * PrivacyRoomApi - object-oriented interface
 * @export
 * @class PrivacyRoomApi
 * @extends {BaseAPI}
 */
export class PrivacyRoomApi extends BaseAPI {
    /**
     * Deletes an encryption key and removes it from the system based on the provided key identifier.    Breaking change in DocSpace 4.0: the endpoint used to answer 200 with the caller\'s remaining  encryption keys and now answers 204 with no body. A client that read that list must call  `GET api/2.0/privacyroom/keys` instead.
     * @summary Deletes an encryption key and removes it from the system.
     * @param {RoomsPrivacyRoomApiDeleteKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public deleteKeys(requestParameters: PrivacyRoomApiDeleteKeysRequest, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).deleteKeys(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves encryption keys associated with the current user.
     * @summary Retrieves encryption keys associated with the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public getUserKeys(options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).getUserKeys(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the encryption keys associated with a specific privacy room.
     * @summary Retrieves the encryption keys associated with a specific privacy room.
     * @param {RoomsPrivacyRoomApiGetUserKeysForRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public getUserKeysForRoom(requestParameters: PrivacyRoomApiGetUserKeysForRoomRequest, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).getUserKeysForRoom(requestParameters.roomId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces an existing encryption key with a new one for the user.
     * @summary Replaces an existing encryption key with a new one for the user.
     * @param {RoomsPrivacyRoomApiReplaceKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public replaceKey(requestParameters: PrivacyRoomApiReplaceKeyRequest = {}, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).replaceKey(requestParameters.encryptionKeyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates and sets encryption keys for the user.
     * @summary Creates and sets encryption keys for the user.
     * @param {RoomsPrivacyRoomApiSetKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public setKeys(requestParameters: PrivacyRoomApiSetKeysRequest = {}, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).setKeys(requestParameters.encryptionKeyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

