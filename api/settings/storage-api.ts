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
import type { CdnStorageSettingsWrapper } from '../../models';
// @ts-ignore
import type { DoubleWrapper } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { StorageArrayWrapper } from '../../models';
// @ts-ignore
import type { StorageRequestsDto } from '../../models';
// @ts-ignore
import type { StorageSettingsWrapper } from '../../models';
/**
 * StorageApi - axios parameter creator
 * @export
 */
export const StorageApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Returns a list of all the backup storages.
         * @summary Get the backup storages
         * @param {boolean} [dump] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllBackupStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-backup-storages/
         */
        getAllBackupStorages: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/backup`;
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

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Returns a list of all the CDN storages.
         * @summary Get the CDN storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllCdnStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-cdn-storages/
         */
        getAllCdnStorages: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/cdn`;
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
         * Returns a list of all the portal storages.
         * @summary Get storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-storages/
         */
        getAllStorages: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage`;
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
         * Returns a list of all Amazon regions.
         * @summary Get Amazon regions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAmazonS3Regions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-amazon-s3-regions/
         */
        getAmazonS3Regions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/s3/regions`;
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
         * Returns the storage progress.
         * @summary Get the storage progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-progress/
         */
        getStorageProgress: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/progress`;
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
         * Resets the CDN storage settings to the default parameters.
         * @summary Reset the CDN storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetCdnToDefault operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-cdn-to-default/
         */
        resetCdnToDefault: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/cdn`;
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
         * Resets the storage settings to the default parameters.
         * @summary Reset the storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetStorageToDefault operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-storage-to-default/
         */
        resetStorageToDefault: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage`;
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
         * Updates the CDN storage with the parameters specified in the request.
         * @summary Update the CDN storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateCdnStorage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-cdn-storage/
         */
        updateCdnStorage: async (storageRequestsDto?: StorageRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage/cdn`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(storageRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a storage with the parameters specified in the request.
         * @summary Update a storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateStorage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-storage/
         */
        updateStorage: async (storageRequestsDto?: StorageRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/storage`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(storageRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StorageApi - functional programming interface
 * @export
 */
export const StorageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StorageApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of all the backup storages.
         * @summary Get the backup storages
         * @param {boolean} [dump] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllBackupStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-backup-storages/
         */
        async getAllBackupStorages(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllBackupStorages(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.getAllBackupStorages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the CDN storages.
         * @summary Get the CDN storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllCdnStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-cdn-storages/
         */
        async getAllCdnStorages(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCdnStorages(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.getAllCdnStorages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the portal storages.
         * @summary Get storages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-storages/
         */
        async getAllStorages(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllStorages(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.getAllStorages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all Amazon regions.
         * @summary Get Amazon regions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAmazonS3Regions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-amazon-s3-regions/
         */
        async getAmazonS3Regions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAmazonS3Regions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.getAmazonS3Regions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the storage progress.
         * @summary Get the storage progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-progress/
         */
        async getStorageProgress(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DoubleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageProgress(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.getStorageProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the CDN storage settings to the default parameters.
         * @summary Reset the CDN storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetCdnToDefault operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-cdn-to-default/
         */
        async resetCdnToDefault(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetCdnToDefault(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.resetCdnToDefault']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the storage settings to the default parameters.
         * @summary Reset the storage settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetStorageToDefault operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-storage-to-default/
         */
        async resetStorageToDefault(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetStorageToDefault(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.resetStorageToDefault']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the CDN storage with the parameters specified in the request.
         * @summary Update the CDN storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateCdnStorage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-cdn-storage/
         */
        async updateCdnStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CdnStorageSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCdnStorage(storageRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.updateCdnStorage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a storage with the parameters specified in the request.
         * @summary Update a storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateStorage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-storage/
         */
        async updateStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStorage(storageRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.updateStorage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * StorageApi - factory interface
 * @export
 */
export const StorageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StorageApiFp(configuration)
    return {
        /**
         * Returns a list of all the backup storages.
         * @summary Get the backup storages
         * @param {boolean} [dump] 
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllBackupStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-backup-storages/
         * @throws {RequiredError}
         */
        getAllBackupStorages(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<StorageArrayWrapper> {
            return localVarFp.getAllBackupStorages(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the CDN storages.
         * @summary Get the CDN storages
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllCdnStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-cdn-storages/
         * @throws {RequiredError}
         */
        getAllCdnStorages(options?: RawAxiosRequestConfig): AxiosPromise<StorageArrayWrapper> {
            return localVarFp.getAllCdnStorages(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the portal storages.
         * @summary Get storages
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllStorages operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-storages/
         * @throws {RequiredError}
         */
        getAllStorages(options?: RawAxiosRequestConfig): AxiosPromise<StorageArrayWrapper> {
            return localVarFp.getAllStorages(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all Amazon regions.
         * @summary Get Amazon regions
         * @param {*} [options] Override http request option.
         * REST API Reference for getAmazonS3Regions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-amazon-s3-regions/
         * @throws {RequiredError}
         */
        getAmazonS3Regions(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getAmazonS3Regions(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the storage progress.
         * @summary Get the storage progress
         * @param {*} [options] Override http request option.
         * REST API Reference for getStorageProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-progress/
         * @throws {RequiredError}
         */
        getStorageProgress(options?: RawAxiosRequestConfig): AxiosPromise<DoubleWrapper> {
            return localVarFp.getStorageProgress(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the CDN storage settings to the default parameters.
         * @summary Reset the CDN storage settings
         * @param {*} [options] Override http request option.
         * REST API Reference for resetCdnToDefault operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-cdn-to-default/
         * @throws {RequiredError}
         */
        resetCdnToDefault(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resetCdnToDefault(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the storage settings to the default parameters.
         * @summary Reset the storage settings
         * @param {*} [options] Override http request option.
         * REST API Reference for resetStorageToDefault operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-storage-to-default/
         * @throws {RequiredError}
         */
        resetStorageToDefault(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resetStorageToDefault(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the CDN storage with the parameters specified in the request.
         * @summary Update the CDN storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateCdnStorage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-cdn-storage/
         * @throws {RequiredError}
         */
        updateCdnStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<CdnStorageSettingsWrapper> {
            return localVarFp.updateCdnStorage(storageRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a storage with the parameters specified in the request.
         * @summary Update a storage
         * @param {StorageRequestsDto} [storageRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateStorage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-storage/
         * @throws {RequiredError}
         */
        updateStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StorageSettingsWrapper> {
            return localVarFp.updateStorage(storageRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StorageApi - object-oriented interface
 * @export
 * @class StorageApi
 * @extends {BaseAPI}
 */
export class StorageApi extends BaseAPI {
    /**
     * Returns a list of all the backup storages.
     * @summary Get the backup storages
     * @param {boolean} [dump] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public getAllBackupStorages(dump?: boolean, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).getAllBackupStorages(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the CDN storages.
     * @summary Get the CDN storages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public getAllCdnStorages(options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).getAllCdnStorages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the portal storages.
     * @summary Get storages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public getAllStorages(options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).getAllStorages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all Amazon regions.
     * @summary Get Amazon regions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public getAmazonS3Regions(options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).getAmazonS3Regions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the storage progress.
     * @summary Get the storage progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public getStorageProgress(options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).getStorageProgress(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the CDN storage settings to the default parameters.
     * @summary Reset the CDN storage settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public resetCdnToDefault(options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).resetCdnToDefault(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the storage settings to the default parameters.
     * @summary Reset the storage settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public resetStorageToDefault(options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).resetStorageToDefault(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the CDN storage with the parameters specified in the request.
     * @summary Update the CDN storage
     * @param {StorageRequestsDto} [storageRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public updateCdnStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).updateCdnStorage(storageRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a storage with the parameters specified in the request.
     * @summary Update a storage
     * @param {StorageRequestsDto} [storageRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public updateStorage(storageRequestsDto?: StorageRequestsDto, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).updateStorage(storageRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

