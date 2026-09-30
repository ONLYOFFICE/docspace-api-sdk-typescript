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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { DoubleNullableWrapper } from '../../models';
// @ts-ignore
import type { EncryptionSettingsWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StorageEncryptionRequestsDto } from '../../models';
/**
 * EncryptionApi - axios parameter creator
 * @export
 */
export const EncryptionApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns how far the running encryption or decryption of the installation storage has got, as a percentage from  0 to 100. It reports the run started by `POST api/2.0/settings/encryption/start`, whose direction, encryption  or decryption, is told by `GET api/2.0/settings/encryption/settings`. An empty response means no run is in  flight and no recent result is remembered: the value of a finished run is kept for one minute after it  completes and then dropped, so poll often enough not to miss the end of the operation. A value of -1 means the  build does not offer storage encryption at all, and on an installation that is not a server one the call is  refused rather than answered. Unlike the other encryption operations, this one asks for no portal-settings  permission: any authenticated member of the portal may read the progress, which is intentional, because the  portals are unavailable while the run is on and their users need to see when it ends. Nothing is written and  the call is safe to repeat.
         * @summary Get the storage encryption progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageEncryptionProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-progress/
         */
        getStorageEncryptionProgress: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/encryption/progress`;
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
         * Returns the encryption state of the installation storage: the status, which is one of decrypted, encryption  started, encrypted or decryption started, and the flag saying whether users are mailed when an encryption run  begins. The password is deliberately blanked out, so the field always comes back empty even on an encrypted  installation. The caller is expected to have the permission to edit portal settings, which in practice means  the portal owner or a DocSpace admin, on a server installation with an unrestricted access space; on any other  installation, and whenever the check fails, the operation answers with an empty body instead of an error. An  empty answer is therefore not proof that encryption is off, only that the settings cannot be read in this  context. Nothing is written and the call is safe to repeat. Use `GET api/2.0/settings/encryption/progress` to  follow a run that is in flight, and `POST api/2.0/settings/encryption/start` to encrypt or decrypt the  storage.
         * @summary Get the storage encryption settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageEncryptionSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-settings/
         */
        getStorageEncryptionSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/encryption/settings`;
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
         * Queues encryption of everything the installation keeps in its local storage, or decryption of it when the data  is already encrypted: the saved encryption state decides the direction, so the same call encrypts a decrypted  installation and decrypts an encrypted one. It covers the whole server, not one portal, and only a server  installation with the feature switched on can run it, with neither the portal storage nor the CDN pointing at  a third-party provider: reset those first with `DELETE api/2.0/settings/storage` and  `DELETE api/2.0/settings/storage/cdn`. No backup may be running, and the backup schedules of all portals are  dropped as part of starting. The caller needs the permission to edit portal settings, that is the portal owner  or a DocSpace admin, and an unrestricted access space. This is a long, disruptive operation: every portal is  put into the encryption state and stays unavailable until it ends, so do not repeat the call while it runs,  and follow it with `GET api/2.0/settings/encryption/progress` instead. The password is generated on the server  and never returned by the API. Pass `notifyUsers=true` to mail every user before the portals go down. The  response is true once the job is queued, and false where encryption is switched off, nothing being started  then.
         * @summary Start the storage encryption
         * @param {StorageEncryptionRequestsDto} [storageEncryptionRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startStorageEncryption operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-storage-encryption/
         */
        startStorageEncryption: async (storageEncryptionRequestsDto?: StorageEncryptionRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/encryption/start`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(storageEncryptionRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EncryptionApi - functional programming interface
 * @export
 */
export const EncryptionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EncryptionApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns how far the running encryption or decryption of the installation storage has got, as a percentage from  0 to 100. It reports the run started by `POST api/2.0/settings/encryption/start`, whose direction, encryption  or decryption, is told by `GET api/2.0/settings/encryption/settings`. An empty response means no run is in  flight and no recent result is remembered: the value of a finished run is kept for one minute after it  completes and then dropped, so poll often enough not to miss the end of the operation. A value of -1 means the  build does not offer storage encryption at all, and on an installation that is not a server one the call is  refused rather than answered. Unlike the other encryption operations, this one asks for no portal-settings  permission: any authenticated member of the portal may read the progress, which is intentional, because the  portals are unavailable while the run is on and their users need to see when it ends. Nothing is written and  the call is safe to repeat.
         * @summary Get the storage encryption progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageEncryptionProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-progress/
         */
        async getStorageEncryptionProgress(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DoubleNullableWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageEncryptionProgress(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EncryptionApi.getStorageEncryptionProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the encryption state of the installation storage: the status, which is one of decrypted, encryption  started, encrypted or decryption started, and the flag saying whether users are mailed when an encryption run  begins. The password is deliberately blanked out, so the field always comes back empty even on an encrypted  installation. The caller is expected to have the permission to edit portal settings, which in practice means  the portal owner or a DocSpace admin, on a server installation with an unrestricted access space; on any other  installation, and whenever the check fails, the operation answers with an empty body instead of an error. An  empty answer is therefore not proof that encryption is off, only that the settings cannot be read in this  context. Nothing is written and the call is safe to repeat. Use `GET api/2.0/settings/encryption/progress` to  follow a run that is in flight, and `POST api/2.0/settings/encryption/start` to encrypt or decrypt the  storage.
         * @summary Get the storage encryption settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageEncryptionSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-settings/
         */
        async getStorageEncryptionSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageEncryptionSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EncryptionApi.getStorageEncryptionSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues encryption of everything the installation keeps in its local storage, or decryption of it when the data  is already encrypted: the saved encryption state decides the direction, so the same call encrypts a decrypted  installation and decrypts an encrypted one. It covers the whole server, not one portal, and only a server  installation with the feature switched on can run it, with neither the portal storage nor the CDN pointing at  a third-party provider: reset those first with `DELETE api/2.0/settings/storage` and  `DELETE api/2.0/settings/storage/cdn`. No backup may be running, and the backup schedules of all portals are  dropped as part of starting. The caller needs the permission to edit portal settings, that is the portal owner  or a DocSpace admin, and an unrestricted access space. This is a long, disruptive operation: every portal is  put into the encryption state and stays unavailable until it ends, so do not repeat the call while it runs,  and follow it with `GET api/2.0/settings/encryption/progress` instead. The password is generated on the server  and never returned by the API. Pass `notifyUsers=true` to mail every user before the portals go down. The  response is true once the job is queued, and false where encryption is switched off, nothing being started  then.
         * @summary Start the storage encryption
         * @param {StorageEncryptionRequestsDto} [storageEncryptionRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startStorageEncryption operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-storage-encryption/
         */
        async startStorageEncryption(storageEncryptionRequestsDto?: StorageEncryptionRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startStorageEncryption(storageEncryptionRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EncryptionApi.startStorageEncryption']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EncryptionApi - factory interface
 * @export
 */
export const EncryptionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EncryptionApiFp(configuration)
    return {
        /**
         * Returns how far the running encryption or decryption of the installation storage has got, as a percentage from  0 to 100. It reports the run started by `POST api/2.0/settings/encryption/start`, whose direction, encryption  or decryption, is told by `GET api/2.0/settings/encryption/settings`. An empty response means no run is in  flight and no recent result is remembered: the value of a finished run is kept for one minute after it  completes and then dropped, so poll often enough not to miss the end of the operation. A value of -1 means the  build does not offer storage encryption at all, and on an installation that is not a server one the call is  refused rather than answered. Unlike the other encryption operations, this one asks for no portal-settings  permission: any authenticated member of the portal may read the progress, which is intentional, because the  portals are unavailable while the run is on and their users need to see when it ends. Nothing is written and  the call is safe to repeat.
         * @summary Get the storage encryption progress
         * @param {*} [options] Override http request option.
         * REST API Reference for getStorageEncryptionProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-progress/
         * @throws {RequiredError}
         */
        getStorageEncryptionProgress(options?: RawAxiosRequestConfig): AxiosPromise<DoubleNullableWrapper> {
            return localVarFp.getStorageEncryptionProgress(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the encryption state of the installation storage: the status, which is one of decrypted, encryption  started, encrypted or decryption started, and the flag saying whether users are mailed when an encryption run  begins. The password is deliberately blanked out, so the field always comes back empty even on an encrypted  installation. The caller is expected to have the permission to edit portal settings, which in practice means  the portal owner or a DocSpace admin, on a server installation with an unrestricted access space; on any other  installation, and whenever the check fails, the operation answers with an empty body instead of an error. An  empty answer is therefore not proof that encryption is off, only that the settings cannot be read in this  context. Nothing is written and the call is safe to repeat. Use `GET api/2.0/settings/encryption/progress` to  follow a run that is in flight, and `POST api/2.0/settings/encryption/start` to encrypt or decrypt the  storage.
         * @summary Get the storage encryption settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getStorageEncryptionSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-settings/
         * @throws {RequiredError}
         */
        getStorageEncryptionSettings(options?: RawAxiosRequestConfig): AxiosPromise<EncryptionSettingsWrapper> {
            return localVarFp.getStorageEncryptionSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Queues encryption of everything the installation keeps in its local storage, or decryption of it when the data  is already encrypted: the saved encryption state decides the direction, so the same call encrypts a decrypted  installation and decrypts an encrypted one. It covers the whole server, not one portal, and only a server  installation with the feature switched on can run it, with neither the portal storage nor the CDN pointing at  a third-party provider: reset those first with `DELETE api/2.0/settings/storage` and  `DELETE api/2.0/settings/storage/cdn`. No backup may be running, and the backup schedules of all portals are  dropped as part of starting. The caller needs the permission to edit portal settings, that is the portal owner  or a DocSpace admin, and an unrestricted access space. This is a long, disruptive operation: every portal is  put into the encryption state and stays unavailable until it ends, so do not repeat the call while it runs,  and follow it with `GET api/2.0/settings/encryption/progress` instead. The password is generated on the server  and never returned by the API. Pass `notifyUsers=true` to mail every user before the portals go down. The  response is true once the job is queued, and false where encryption is switched off, nothing being started  then.
         * @summary Start the storage encryption
         * @param {EncryptionApiStartStorageEncryptionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startStorageEncryption operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-storage-encryption/
         * @throws {RequiredError}
         */
        startStorageEncryption(requestParameters: EncryptionApiStartStorageEncryptionRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.startStorageEncryption(requestParameters.storageEncryptionRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for startStorageEncryption operation in EncryptionApi.
 * @export
 * @interface EncryptionApiStartStorageEncryptionRequest
 */
export interface EncryptionApiStartStorageEncryptionRequest {
    /**
     * 
     * @type {StorageEncryptionRequestsDto}
     * @memberof EncryptionApiStartStorageEncryption
     */
    readonly storageEncryptionRequestsDto?: StorageEncryptionRequestsDto
}

/**
 * EncryptionApi - object-oriented interface
 * @export
 * @class EncryptionApi
 * @extends {BaseAPI}
 */
export class EncryptionApi extends BaseAPI {
    /**
     * Returns how far the running encryption or decryption of the installation storage has got, as a percentage from  0 to 100. It reports the run started by `POST api/2.0/settings/encryption/start`, whose direction, encryption  or decryption, is told by `GET api/2.0/settings/encryption/settings`. An empty response means no run is in  flight and no recent result is remembered: the value of a finished run is kept for one minute after it  completes and then dropped, so poll often enough not to miss the end of the operation. A value of -1 means the  build does not offer storage encryption at all, and on an installation that is not a server one the call is  refused rather than answered. Unlike the other encryption operations, this one asks for no portal-settings  permission: any authenticated member of the portal may read the progress, which is intentional, because the  portals are unavailable while the run is on and their users need to see when it ends. Nothing is written and  the call is safe to repeat.
     * @summary Get the storage encryption progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EncryptionApi
     */
    public getStorageEncryptionProgress(options?: RawAxiosRequestConfig) {
        return EncryptionApiFp(this.configuration).getStorageEncryptionProgress(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the encryption state of the installation storage: the status, which is one of decrypted, encryption  started, encrypted or decryption started, and the flag saying whether users are mailed when an encryption run  begins. The password is deliberately blanked out, so the field always comes back empty even on an encrypted  installation. The caller is expected to have the permission to edit portal settings, which in practice means  the portal owner or a DocSpace admin, on a server installation with an unrestricted access space; on any other  installation, and whenever the check fails, the operation answers with an empty body instead of an error. An  empty answer is therefore not proof that encryption is off, only that the settings cannot be read in this  context. Nothing is written and the call is safe to repeat. Use `GET api/2.0/settings/encryption/progress` to  follow a run that is in flight, and `POST api/2.0/settings/encryption/start` to encrypt or decrypt the  storage.
     * @summary Get the storage encryption settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EncryptionApi
     */
    public getStorageEncryptionSettings(options?: RawAxiosRequestConfig) {
        return EncryptionApiFp(this.configuration).getStorageEncryptionSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues encryption of everything the installation keeps in its local storage, or decryption of it when the data  is already encrypted: the saved encryption state decides the direction, so the same call encrypts a decrypted  installation and decrypts an encrypted one. It covers the whole server, not one portal, and only a server  installation with the feature switched on can run it, with neither the portal storage nor the CDN pointing at  a third-party provider: reset those first with `DELETE api/2.0/settings/storage` and  `DELETE api/2.0/settings/storage/cdn`. No backup may be running, and the backup schedules of all portals are  dropped as part of starting. The caller needs the permission to edit portal settings, that is the portal owner  or a DocSpace admin, and an unrestricted access space. This is a long, disruptive operation: every portal is  put into the encryption state and stays unavailable until it ends, so do not repeat the call while it runs,  and follow it with `GET api/2.0/settings/encryption/progress` instead. The password is generated on the server  and never returned by the API. Pass `notifyUsers=true` to mail every user before the portals go down. The  response is true once the job is queued, and false where encryption is switched off, nothing being started  then.
     * @summary Start the storage encryption
     * @param {SettingsEncryptionApiStartStorageEncryptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EncryptionApi
     */
    public startStorageEncryption(requestParameters: EncryptionApiStartStorageEncryptionRequest = {}, options?: RawAxiosRequestConfig) {
        return EncryptionApiFp(this.configuration).startStorageEncryption(requestParameters.storageEncryptionRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

