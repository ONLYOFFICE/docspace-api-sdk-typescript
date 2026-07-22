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
import type { EncryptionKeyType } from '../../models';
// @ts-ignore
import type { EncryptionKeyWrapper } from '../../models';
/**
 * PrivacyroomApi - axios parameter creator
 * @export
 */
export const PrivacyroomApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Deletes an encryption key and removes it from the system based on the provided key identifier.
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
         * Retrieves a specific user encryption key based on the provided filter conditions.
         * @summary Retrieves a specific user encryption key based on the provided filter conditions.
         * @param {string} [id] The optional identifier of the encryption key to filter by.
         * @param {EncryptionKeyType} [type] The optional type of the encryption key to filter by.
         * @param {string} [version] The optional version of the encryption key to filter by.
         * @param {string} [publicKey] The optional public key to filter by.
         * @param {string} [privateKeyEnc] The optional encrypted private key to filter by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeysByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-by-filter/
         */
        getUserKeysByFilter: async (id?: string, type?: EncryptionKeyType, version?: string, publicKey?: string, privateKeyEnc?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/privacyroom/keys/filter`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (publicKey !== undefined) {
                localVarQueryParameter['publicKey'] = publicKey;
            }

            if (privateKeyEnc !== undefined) {
                localVarQueryParameter['privateKeyEnc'] = privateKeyEnc;
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
 * PrivacyroomApi - functional programming interface
 * @export
 */
export const PrivacyroomApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PrivacyroomApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes an encryption key and removes it from the system based on the provided key identifier.
         * @summary Deletes an encryption key and removes it from the system.
         * @param {string} id The unique identifier of the encryption key to be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         */
        async deleteKeys(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteKeys(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyroomApi.deleteKeys']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PrivacyroomApi.getUserKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a specific user encryption key based on the provided filter conditions.
         * @summary Retrieves a specific user encryption key based on the provided filter conditions.
         * @param {string} [id] The optional identifier of the encryption key to filter by.
         * @param {EncryptionKeyType} [type] The optional type of the encryption key to filter by.
         * @param {string} [version] The optional version of the encryption key to filter by.
         * @param {string} [publicKey] The optional public key to filter by.
         * @param {string} [privateKeyEnc] The optional encrypted private key to filter by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeysByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-by-filter/
         */
        async getUserKeysByFilter(id?: string, type?: EncryptionKeyType, version?: string, publicKey?: string, privateKeyEnc?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserKeysByFilter(id, type, version, publicKey, privateKeyEnc, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyroomApi.getUserKeysByFilter']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PrivacyroomApi.getUserKeysForRoom']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PrivacyroomApi.replaceKey']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PrivacyroomApi.setKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PrivacyroomApi - factory interface
 * @export
 */
export const PrivacyroomApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PrivacyroomApiFp(configuration)
    return {
        /**
         * Deletes an encryption key and removes it from the system based on the provided key identifier.
         * @summary Deletes an encryption key and removes it from the system.
         * @param {PrivacyroomApiDeleteKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         * @throws {RequiredError}
         */
        deleteKeys(requestParameters: PrivacyroomApiDeleteKeysRequest, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
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
         * Retrieves a specific user encryption key based on the provided filter conditions.
         * @summary Retrieves a specific user encryption key based on the provided filter conditions.
         * @param {PrivacyroomApiGetUserKeysByFilterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserKeysByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-by-filter/
         * @throws {RequiredError}
         */
        getUserKeysByFilter(requestParameters: PrivacyroomApiGetUserKeysByFilterRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyWrapper> {
            return localVarFp.getUserKeysByFilter(requestParameters.id, requestParameters.type, requestParameters.version, requestParameters.publicKey, requestParameters.privateKeyEnc, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the encryption keys associated with a specific privacy room.
         * @summary Retrieves the encryption keys associated with a specific privacy room.
         * @param {PrivacyroomApiGetUserKeysForRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserKeysForRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/
         * @throws {RequiredError}
         */
        getUserKeysForRoom(requestParameters: PrivacyroomApiGetUserKeysForRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.getUserKeysForRoom(requestParameters.roomId, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces an existing encryption key with a new one for the user.
         * @summary Replaces an existing encryption key with a new one for the user.
         * @param {PrivacyroomApiReplaceKeyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for replaceKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/
         * @throws {RequiredError}
         */
        replaceKey(requestParameters: PrivacyroomApiReplaceKeyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.replaceKey(requestParameters.encryptionKeyRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates and sets encryption keys for the user.
         * @summary Creates and sets encryption keys for the user.
         * @param {PrivacyroomApiSetKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/
         * @throws {RequiredError}
         */
        setKeys(requestParameters: PrivacyroomApiSetKeysRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.setKeys(requestParameters.encryptionKeyRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteKeys operation in PrivacyroomApi.
 * @export
 * @interface PrivacyroomApiDeleteKeysRequest
 */
export interface PrivacyroomApiDeleteKeysRequest {
    /**
     * The unique identifier of the encryption key to be deleted.
     * @type {string}
     * @memberof PrivacyroomApiDeleteKeys
     */
    readonly id: string
}

/**
 * Request parameters for getUserKeysByFilter operation in PrivacyroomApi.
 * @export
 * @interface PrivacyroomApiGetUserKeysByFilterRequest
 */
export interface PrivacyroomApiGetUserKeysByFilterRequest {
    /**
     * The optional identifier of the encryption key to filter by.
     * @type {string}
     * @memberof PrivacyroomApiGetUserKeysByFilter
     */
    readonly id?: string

    /**
     * The optional type of the encryption key to filter by.
     * @type {EncryptionKeyType}
     * @memberof PrivacyroomApiGetUserKeysByFilter
     */
    readonly type?: EncryptionKeyType

    /**
     * The optional version of the encryption key to filter by.
     * @type {string}
     * @memberof PrivacyroomApiGetUserKeysByFilter
     */
    readonly version?: string

    /**
     * The optional public key to filter by.
     * @type {string}
     * @memberof PrivacyroomApiGetUserKeysByFilter
     */
    readonly publicKey?: string

    /**
     * The optional encrypted private key to filter by.
     * @type {string}
     * @memberof PrivacyroomApiGetUserKeysByFilter
     */
    readonly privateKeyEnc?: string
}

/**
 * Request parameters for getUserKeysForRoom operation in PrivacyroomApi.
 * @export
 * @interface PrivacyroomApiGetUserKeysForRoomRequest
 */
export interface PrivacyroomApiGetUserKeysForRoomRequest {
    /**
     * The identifier of the privacy room.
     * @type {number}
     * @memberof PrivacyroomApiGetUserKeysForRoom
     */
    readonly roomId: number
}

/**
 * Request parameters for replaceKey operation in PrivacyroomApi.
 * @export
 * @interface PrivacyroomApiReplaceKeyRequest
 */
export interface PrivacyroomApiReplaceKeyRequest {
    /**
     * The request object containing the public and private key information to replace the existing key.
     * @type {EncryptionKeyRequestDto}
     * @memberof PrivacyroomApiReplaceKey
     */
    readonly encryptionKeyRequestDto?: EncryptionKeyRequestDto
}

/**
 * Request parameters for setKeys operation in PrivacyroomApi.
 * @export
 * @interface PrivacyroomApiSetKeysRequest
 */
export interface PrivacyroomApiSetKeysRequest {
    /**
     * The request object containing public and private key information.
     * @type {EncryptionKeyRequestDto}
     * @memberof PrivacyroomApiSetKeys
     */
    readonly encryptionKeyRequestDto?: EncryptionKeyRequestDto
}

/**
 * PrivacyroomApi - object-oriented interface
 * @export
 * @class PrivacyroomApi
 * @extends {BaseAPI}
 */
export class PrivacyroomApi extends BaseAPI {
    /**
     * Deletes an encryption key and removes it from the system based on the provided key identifier.
     * @summary Deletes an encryption key and removes it from the system.
     * @param {PrivacyroomApiDeleteKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyroomApi
     */
    public deleteKeys(requestParameters: PrivacyroomApiDeleteKeysRequest, options?: RawAxiosRequestConfig) {
        return PrivacyroomApiFp(this.configuration).deleteKeys(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves encryption keys associated with the current user.
     * @summary Retrieves encryption keys associated with the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyroomApi
     */
    public getUserKeys(options?: RawAxiosRequestConfig) {
        return PrivacyroomApiFp(this.configuration).getUserKeys(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a specific user encryption key based on the provided filter conditions.
     * @summary Retrieves a specific user encryption key based on the provided filter conditions.
     * @param {PrivacyroomApiGetUserKeysByFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyroomApi
     */
    public getUserKeysByFilter(requestParameters: PrivacyroomApiGetUserKeysByFilterRequest = {}, options?: RawAxiosRequestConfig) {
        return PrivacyroomApiFp(this.configuration).getUserKeysByFilter(requestParameters.id, requestParameters.type, requestParameters.version, requestParameters.publicKey, requestParameters.privateKeyEnc, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the encryption keys associated with a specific privacy room.
     * @summary Retrieves the encryption keys associated with a specific privacy room.
     * @param {PrivacyroomApiGetUserKeysForRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyroomApi
     */
    public getUserKeysForRoom(requestParameters: PrivacyroomApiGetUserKeysForRoomRequest, options?: RawAxiosRequestConfig) {
        return PrivacyroomApiFp(this.configuration).getUserKeysForRoom(requestParameters.roomId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces an existing encryption key with a new one for the user.
     * @summary Replaces an existing encryption key with a new one for the user.
     * @param {PrivacyroomApiReplaceKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyroomApi
     */
    public replaceKey(requestParameters: PrivacyroomApiReplaceKeyRequest = {}, options?: RawAxiosRequestConfig) {
        return PrivacyroomApiFp(this.configuration).replaceKey(requestParameters.encryptionKeyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates and sets encryption keys for the user.
     * @summary Creates and sets encryption keys for the user.
     * @param {PrivacyroomApiSetKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyroomApi
     */
    public setKeys(requestParameters: PrivacyroomApiSetKeysRequest = {}, options?: RawAxiosRequestConfig) {
        return PrivacyroomApiFp(this.configuration).setKeys(requestParameters.encryptionKeyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

