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
import type { ArrayArrayWrapper } from '../../models';
// @ts-ignore
import type { FolderStringArrayWrapper } from '../../models';
// @ts-ignore
import type { FolderStringWrapper } from '../../models';
// @ts-ignore
import type { ProviderArrayWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyBackupRequestDto } from '../../models';
// @ts-ignore
import type { ThirdPartyParamsArrayWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyRequestDto } from '../../models';
/**
 * ThirdPartyIntegrationApi - axios parameter creator
 * @export
 */
export const ThirdPartyIntegrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} providerId The provider ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/
         */
        deleteThirdParty: async (providerId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'providerId' is not null or undefined
            assertParamExists('deleteThirdParty', 'providerId', providerId)
            const localVarPath = `/api/2.0/files/thirdparty/{providerId}`
                .replace(`{${"providerId"}}`, encodeURIComponent(String(providerId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         */
        getAllProviders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/thirdparty/providers`;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         */
        getBackupThirdPartyAccount: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/thirdparty/backup`;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         */
        getCapabilities: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/thirdparty/capabilities`;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         */
        getCommonThirdPartyFolders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/thirdparty/common`;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         */
        getThirdPartyAccounts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/thirdparty`;
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
         * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/
         */
        saveThirdParty: async (thirdPartyRequestDto?: ThirdPartyRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/thirdparty`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdPartyBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/
         */
        saveThirdPartyBackup: async (thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/thirdparty/backup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyBackupRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ThirdPartyIntegrationApi - functional programming interface
 * @export
 */
export const ThirdPartyIntegrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThirdPartyIntegrationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} providerId The provider ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/
         */
        async deleteThirdParty(providerId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteThirdParty(providerId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.deleteThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         */
        async getAllProviders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProviderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProviders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getAllProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         */
        async getBackupThirdPartyAccount(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupThirdPartyAccount(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getBackupThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         */
        async getCapabilities(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArrayArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCapabilities(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getCapabilities']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         */
        async getCommonThirdPartyFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCommonThirdPartyFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getCommonThirdPartyFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         */
        async getThirdPartyAccounts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyParamsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getThirdPartyAccounts(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.getThirdPartyAccounts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/
         */
        async saveThirdParty(thirdPartyRequestDto?: ThirdPartyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveThirdParty(thirdPartyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.saveThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdPartyBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/
         */
        async saveThirdPartyBackup(thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveThirdPartyBackup(thirdPartyBackupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyIntegrationApi.saveThirdPartyBackup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ThirdPartyIntegrationApi - factory interface
 * @export
 */
export const ThirdPartyIntegrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThirdPartyIntegrationApiFp(configuration)
    return {
        /**
         * 
         * @param {number} providerId The provider ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/
         * @throws {RequiredError}
         */
        deleteThirdParty(providerId: number, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.deleteThirdParty(providerId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         * @throws {RequiredError}
         */
        getAllProviders(options?: RawAxiosRequestConfig): AxiosPromise<ProviderArrayWrapper> {
            return localVarFp.getAllProviders(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         * @throws {RequiredError}
         */
        getBackupThirdPartyAccount(options?: RawAxiosRequestConfig): AxiosPromise<FolderStringWrapper> {
            return localVarFp.getBackupThirdPartyAccount(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         * @throws {RequiredError}
         */
        getCapabilities(options?: RawAxiosRequestConfig): AxiosPromise<ArrayArrayWrapper> {
            return localVarFp.getCapabilities(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         * @throws {RequiredError}
         */
        getCommonThirdPartyFolders(options?: RawAxiosRequestConfig): AxiosPromise<FolderStringArrayWrapper> {
            return localVarFp.getCommonThirdPartyFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         * @throws {RequiredError}
         */
        getThirdPartyAccounts(options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyParamsArrayWrapper> {
            return localVarFp.getThirdPartyAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/
         * @throws {RequiredError}
         */
        saveThirdParty(thirdPartyRequestDto?: ThirdPartyRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderStringWrapper> {
            return localVarFp.saveThirdParty(thirdPartyRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveThirdPartyBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/
         * @throws {RequiredError}
         */
        saveThirdPartyBackup(thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderStringWrapper> {
            return localVarFp.saveThirdPartyBackup(thirdPartyBackupRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ThirdPartyIntegrationApi - object-oriented interface
 * @export
 * @class ThirdPartyIntegrationApi
 * @extends {BaseAPI}
 */
export class ThirdPartyIntegrationApi extends BaseAPI {
    /**
     * 
     * @param {number} providerId The provider ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public deleteThirdParty(providerId: number, options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).deleteThirdParty(providerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getAllProviders(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getAllProviders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getBackupThirdPartyAccount(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getBackupThirdPartyAccount(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getCapabilities(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getCapabilities(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getCommonThirdPartyFolders(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getCommonThirdPartyFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public getThirdPartyAccounts(options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).getThirdPartyAccounts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public saveThirdParty(thirdPartyRequestDto?: ThirdPartyRequestDto, options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).saveThirdParty(thirdPartyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyIntegrationApi
     */
    public saveThirdPartyBackup(thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options?: RawAxiosRequestConfig) {
        return ThirdPartyIntegrationApiFp(this.configuration).saveThirdPartyBackup(thirdPartyBackupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

