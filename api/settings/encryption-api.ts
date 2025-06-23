// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

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
import type { DoubleWrapper } from '../../models';
// @ts-ignore
import type { EncryptionSettingsWrapper } from '../../models';
// @ts-ignore
import type { StorageEncryptionRequestsDto } from '../../models';
/**
 * SettingsEncryptionApi - axios parameter creator
 * @export
 */
export const SettingsEncryptionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the storage encryption progress.
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
         * Returns the storage encryption settings.
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
         * Starts the storage encryption process.
         * @summary Start the storage encryption process
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
 * SettingsEncryptionApi - functional programming interface
 * @export
 */
export const SettingsEncryptionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsEncryptionApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the storage encryption progress.
         * @summary Get the storage encryption progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageEncryptionProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-progress/
         */
        async getStorageEncryptionProgress(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DoubleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageEncryptionProgress(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsEncryptionApi.getStorageEncryptionProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the storage encryption settings.
         * @summary Get the storage encryption settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getStorageEncryptionSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-settings/
         */
        async getStorageEncryptionSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageEncryptionSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsEncryptionApi.getStorageEncryptionSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the storage encryption process.
         * @summary Start the storage encryption process
         * @param {StorageEncryptionRequestsDto} [storageEncryptionRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startStorageEncryption operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-storage-encryption/
         */
        async startStorageEncryption(storageEncryptionRequestsDto?: StorageEncryptionRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startStorageEncryption(storageEncryptionRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsEncryptionApi.startStorageEncryption']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsEncryptionApi - factory interface
 * @export
 */
export const SettingsEncryptionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsEncryptionApiFp(configuration)
    return {
        /**
         * Returns the storage encryption progress.
         * @summary Get the storage encryption progress
         * @param {*} [options] Override http request option.
         * REST API Reference for getStorageEncryptionProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-progress/
         * @throws {RequiredError}
         */
        getStorageEncryptionProgress(options?: RawAxiosRequestConfig): AxiosPromise<DoubleWrapper> {
            return localVarFp.getStorageEncryptionProgress(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the storage encryption settings.
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
         * Starts the storage encryption process.
         * @summary Start the storage encryption process
         * @param {StorageEncryptionRequestsDto} [storageEncryptionRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for startStorageEncryption operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-storage-encryption/
         * @throws {RequiredError}
         */
        startStorageEncryption(storageEncryptionRequestsDto?: StorageEncryptionRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.startStorageEncryption(storageEncryptionRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsEncryptionApi - object-oriented interface
 * @export
 * @class SettingsEncryptionApi
 * @extends {BaseAPI}
 */
export class SettingsEncryptionApi extends BaseAPI {
    /**
     * Returns the storage encryption progress.
     * @summary Get the storage encryption progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsEncryptionApi
     */
    public getStorageEncryptionProgress(options?: RawAxiosRequestConfig) {
        return SettingsEncryptionApiFp(this.configuration).getStorageEncryptionProgress(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the storage encryption settings.
     * @summary Get the storage encryption settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsEncryptionApi
     */
    public getStorageEncryptionSettings(options?: RawAxiosRequestConfig) {
        return SettingsEncryptionApiFp(this.configuration).getStorageEncryptionSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the storage encryption process.
     * @summary Start the storage encryption process
     * @param {StorageEncryptionRequestsDto} [storageEncryptionRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsEncryptionApi
     */
    public startStorageEncryption(storageEncryptionRequestsDto?: StorageEncryptionRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsEncryptionApiFp(this.configuration).startStorageEncryption(storageEncryptionRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

