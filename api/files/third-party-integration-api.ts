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
 * FilesThirdPartyIntegrationApi - axios parameter creator
 * @export
 */
export const FilesThirdPartyIntegrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Removes the third-party storage service account with the ID specified in the request.
         * @summary Remove a third-party account
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
         * Returns a list of all providers.   **Note**: Available provider keys: Dropbox, Box, WebDav, OneDrive, GoogleDrive, kDrive, ownCloud, Nextcloud.
         * @summary Get all providers
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
         * Returns a backup of the connected third-party account.
         * @summary Get a third-party account backup
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
         * Returns the list of the available providers.   **Note**: Available provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Get providers
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
         * Returns a list of the third-party services connected to the \"Common\" section.
         * @summary Get the common third-party services
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
         * Returns a list of all the connected third-party accounts.
         * @summary Get the third-party accounts
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
         * Saves the third-party storage service account. For WebDav, Yandex, kDrive and SharePoint, the login and password are used for authentication. For other providers, the authentication is performed using a token received via OAuth 2.0.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Save a third-party account
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
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves a backup of the connected third-party account.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Save a third-party account backup
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
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyBackupRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesThirdPartyIntegrationApi - functional programming interface
 * @export
 */
export const FilesThirdPartyIntegrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesThirdPartyIntegrationApiAxiosParamCreator(configuration)
    return {
        /**
         * Removes the third-party storage service account with the ID specified in the request.
         * @summary Remove a third-party account
         * @param {number} providerId The provider ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/
         */
        async deleteThirdParty(providerId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteThirdParty(providerId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.deleteThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all providers.   **Note**: Available provider keys: Dropbox, Box, WebDav, OneDrive, GoogleDrive, kDrive, ownCloud, Nextcloud.
         * @summary Get all providers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         */
        async getAllProviders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProviderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProviders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.getAllProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a backup of the connected third-party account.
         * @summary Get a third-party account backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         */
        async getBackupThirdPartyAccount(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupThirdPartyAccount(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.getBackupThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the list of the available providers.   **Note**: Available provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Get providers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         */
        async getCapabilities(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArrayArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCapabilities(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.getCapabilities']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the third-party services connected to the \"Common\" section.
         * @summary Get the common third-party services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         */
        async getCommonThirdPartyFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCommonThirdPartyFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.getCommonThirdPartyFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the connected third-party accounts.
         * @summary Get the third-party accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         */
        async getThirdPartyAccounts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyParamsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getThirdPartyAccounts(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.getThirdPartyAccounts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the third-party storage service account. For WebDav, Yandex, kDrive and SharePoint, the login and password are used for authentication. For other providers, the authentication is performed using a token received via OAuth 2.0.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Save a third-party account
         * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/
         */
        async saveThirdParty(thirdPartyRequestDto?: ThirdPartyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveThirdParty(thirdPartyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.saveThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves a backup of the connected third-party account.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Save a third-party account backup
         * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveThirdPartyBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/
         */
        async saveThirdPartyBackup(thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveThirdPartyBackup(thirdPartyBackupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesThirdPartyIntegrationApi.saveThirdPartyBackup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesThirdPartyIntegrationApi - factory interface
 * @export
 */
export const FilesThirdPartyIntegrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesThirdPartyIntegrationApiFp(configuration)
    return {
        /**
         * Removes the third-party storage service account with the ID specified in the request.
         * @summary Remove a third-party account
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
         * Returns a list of all providers.   **Note**: Available provider keys: Dropbox, Box, WebDav, OneDrive, GoogleDrive, kDrive, ownCloud, Nextcloud.
         * @summary Get all providers
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/
         * @throws {RequiredError}
         */
        getAllProviders(options?: RawAxiosRequestConfig): AxiosPromise<ProviderArrayWrapper> {
            return localVarFp.getAllProviders(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a backup of the connected third-party account.
         * @summary Get a third-party account backup
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/
         * @throws {RequiredError}
         */
        getBackupThirdPartyAccount(options?: RawAxiosRequestConfig): AxiosPromise<FolderStringWrapper> {
            return localVarFp.getBackupThirdPartyAccount(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of the available providers.   **Note**: Available provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Get providers
         * @param {*} [options] Override http request option.
         * REST API Reference for getCapabilities operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/
         * @throws {RequiredError}
         */
        getCapabilities(options?: RawAxiosRequestConfig): AxiosPromise<ArrayArrayWrapper> {
            return localVarFp.getCapabilities(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the third-party services connected to the \"Common\" section.
         * @summary Get the common third-party services
         * @param {*} [options] Override http request option.
         * REST API Reference for getCommonThirdPartyFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/
         * @throws {RequiredError}
         */
        getCommonThirdPartyFolders(options?: RawAxiosRequestConfig): AxiosPromise<FolderStringArrayWrapper> {
            return localVarFp.getCommonThirdPartyFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the connected third-party accounts.
         * @summary Get the third-party accounts
         * @param {*} [options] Override http request option.
         * REST API Reference for getThirdPartyAccounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/
         * @throws {RequiredError}
         */
        getThirdPartyAccounts(options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyParamsArrayWrapper> {
            return localVarFp.getThirdPartyAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the third-party storage service account. For WebDav, Yandex, kDrive and SharePoint, the login and password are used for authentication. For other providers, the authentication is performed using a token received via OAuth 2.0.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Save a third-party account
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
         * Saves a backup of the connected third-party account.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
         * @summary Save a third-party account backup
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
 * FilesThirdPartyIntegrationApi - object-oriented interface
 * @export
 * @class FilesThirdPartyIntegrationApi
 * @extends {BaseAPI}
 */
export class FilesThirdPartyIntegrationApi extends BaseAPI {
    /**
     * Removes the third-party storage service account with the ID specified in the request.
     * @summary Remove a third-party account
     * @param {number} providerId The provider ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public deleteThirdParty(providerId: number, options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).deleteThirdParty(providerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all providers.   **Note**: Available provider keys: Dropbox, Box, WebDav, OneDrive, GoogleDrive, kDrive, ownCloud, Nextcloud.
     * @summary Get all providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public getAllProviders(options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).getAllProviders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a backup of the connected third-party account.
     * @summary Get a third-party account backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public getBackupThirdPartyAccount(options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).getBackupThirdPartyAccount(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of the available providers.   **Note**: Available provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
     * @summary Get providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public getCapabilities(options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).getCapabilities(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the third-party services connected to the \"Common\" section.
     * @summary Get the common third-party services
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public getCommonThirdPartyFolders(options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).getCommonThirdPartyFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the connected third-party accounts.
     * @summary Get the third-party accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public getThirdPartyAccounts(options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).getThirdPartyAccounts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the third-party storage service account. For WebDav, Yandex, kDrive and SharePoint, the login and password are used for authentication. For other providers, the authentication is performed using a token received via OAuth 2.0.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
     * @summary Save a third-party account
     * @param {ThirdPartyRequestDto} [thirdPartyRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public saveThirdParty(thirdPartyRequestDto?: ThirdPartyRequestDto, options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).saveThirdParty(thirdPartyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves a backup of the connected third-party account.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
     * @summary Save a third-party account backup
     * @param {ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesThirdPartyIntegrationApi
     */
    public saveThirdPartyBackup(thirdPartyBackupRequestDto?: ThirdPartyBackupRequestDto, options?: RawAxiosRequestConfig) {
        return FilesThirdPartyIntegrationApiFp(this.configuration).saveThirdPartyBackup(thirdPartyBackupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

