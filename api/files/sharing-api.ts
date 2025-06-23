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
import type { AceShortWrapperArrayWrapper } from '../../models';
// @ts-ignore
import type { ChangeOwnerRequestDto } from '../../models';
// @ts-ignore
import type { ExternalShareRequestParam } from '../../models';
// @ts-ignore
import type { ExternalShareWrapper } from '../../models';
// @ts-ignore
import type { FileEntryArrayWrapper } from '../../models';
// @ts-ignore
import type { MentionMessageWrapper } from '../../models';
// @ts-ignore
import type { MentionWrapperArrayWrapper } from '../../models';
/**
 * FilesSharingApi - axios parameter creator
 * @export
 */
export const FilesSharingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Applies a password specified in the request to get the external data.
         * @summary Apply external data password
         * @param {string} key The unique document identifier.
         * @param {ExternalShareRequestParam} [externalShareRequestParam] The external data share request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         */
        applyExternalSharePassword: async (key: string, externalShareRequestParam?: ExternalShareRequestParam, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('applyExternalSharePassword', 'key', key)
            const localVarPath = `/api/2.0/files/share/{key}/password`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(externalShareRequestParam, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the owner of the file with the ID specified in the request.
         * @summary Change the file owner
         * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         */
        changeFileOwner: async (changeOwnerRequestDto?: ChangeOwnerRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/owner`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(changeOwnerRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the external data by the key specified in the request.
         * @summary Get the external data
         * @param {string} key The unique key of the external shared data.
         * @param {string} [fileId] The unique document identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         */
        getExternalShareData: async (key: string, fileId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getExternalShareData', 'key', key)
            const localVarPath = `/api/2.0/files/share/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fileId !== undefined) {
                localVarQueryParameter['fileId'] = fileId;
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
         * Returns a list of users with their access rights to the file with the ID specified in the request.
         * @summary Get user access rights by file ID
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         */
        getSharedUsers: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getSharedUsers', 'fileId', fileId)
            const localVarPath = `/api/2.0/files/file/{fileId}/sharedusers`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
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
         * Sends a message to the users who are mentioned in the file with the ID specified in the request.
         * @summary Send the mention message
         * @param {number} fileId The file ID of the mention message.
         * @param {MentionMessageWrapper} [mentionMessageWrapper] The mention message.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         */
        sendEditorNotify: async (fileId: number, mentionMessageWrapper?: MentionMessageWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('sendEditorNotify', 'fileId', fileId)
            const localVarPath = `/api/2.0/files/file/{fileId}/sendeditornotify`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(mentionMessageWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesSharingApi - functional programming interface
 * @export
 */
export const FilesSharingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesSharingApiAxiosParamCreator(configuration)
    return {
        /**
         * Applies a password specified in the request to get the external data.
         * @summary Apply external data password
         * @param {string} key The unique document identifier.
         * @param {ExternalShareRequestParam} [externalShareRequestParam] The external data share request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         */
        async applyExternalSharePassword(key: string, externalShareRequestParam?: ExternalShareRequestParam, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.applyExternalSharePassword(key, externalShareRequestParam, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSharingApi.applyExternalSharePassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the owner of the file with the ID specified in the request.
         * @summary Change the file owner
         * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         */
        async changeFileOwner(changeOwnerRequestDto?: ChangeOwnerRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeFileOwner(changeOwnerRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSharingApi.changeFileOwner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the external data by the key specified in the request.
         * @summary Get the external data
         * @param {string} key The unique key of the external shared data.
         * @param {string} [fileId] The unique document identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         */
        async getExternalShareData(key: string, fileId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExternalShareData(key, fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSharingApi.getExternalShareData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users with their access rights to the file with the ID specified in the request.
         * @summary Get user access rights by file ID
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         */
        async getSharedUsers(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MentionWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSharedUsers(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSharingApi.getSharedUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a message to the users who are mentioned in the file with the ID specified in the request.
         * @summary Send the mention message
         * @param {number} fileId The file ID of the mention message.
         * @param {MentionMessageWrapper} [mentionMessageWrapper] The mention message.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         */
        async sendEditorNotify(fileId: number, mentionMessageWrapper?: MentionMessageWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AceShortWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendEditorNotify(fileId, mentionMessageWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSharingApi.sendEditorNotify']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesSharingApi - factory interface
 * @export
 */
export const FilesSharingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesSharingApiFp(configuration)
    return {
        /**
         * Applies a password specified in the request to get the external data.
         * @summary Apply external data password
         * @param {string} key The unique document identifier.
         * @param {ExternalShareRequestParam} [externalShareRequestParam] The external data share request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         * @throws {RequiredError}
         */
        applyExternalSharePassword(key: string, externalShareRequestParam?: ExternalShareRequestParam, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.applyExternalSharePassword(key, externalShareRequestParam, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the owner of the file with the ID specified in the request.
         * @summary Change the file owner
         * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         * @throws {RequiredError}
         */
        changeFileOwner(changeOwnerRequestDto?: ChangeOwnerRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryArrayWrapper> {
            return localVarFp.changeFileOwner(changeOwnerRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the external data by the key specified in the request.
         * @summary Get the external data
         * @param {string} key The unique key of the external shared data.
         * @param {string} [fileId] The unique document identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         * @throws {RequiredError}
         */
        getExternalShareData(key: string, fileId?: string, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.getExternalShareData(key, fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users with their access rights to the file with the ID specified in the request.
         * @summary Get user access rights by file ID
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         * @throws {RequiredError}
         */
        getSharedUsers(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<MentionWrapperArrayWrapper> {
            return localVarFp.getSharedUsers(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a message to the users who are mentioned in the file with the ID specified in the request.
         * @summary Send the mention message
         * @param {number} fileId The file ID of the mention message.
         * @param {MentionMessageWrapper} [mentionMessageWrapper] The mention message.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         * @throws {RequiredError}
         */
        sendEditorNotify(fileId: number, mentionMessageWrapper?: MentionMessageWrapper, options?: RawAxiosRequestConfig): AxiosPromise<AceShortWrapperArrayWrapper> {
            return localVarFp.sendEditorNotify(fileId, mentionMessageWrapper, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesSharingApi - object-oriented interface
 * @export
 * @class FilesSharingApi
 * @extends {BaseAPI}
 */
export class FilesSharingApi extends BaseAPI {
    /**
     * Applies a password specified in the request to get the external data.
     * @summary Apply external data password
     * @param {string} key The unique document identifier.
     * @param {ExternalShareRequestParam} [externalShareRequestParam] The external data share request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSharingApi
     */
    public applyExternalSharePassword(key: string, externalShareRequestParam?: ExternalShareRequestParam, options?: RawAxiosRequestConfig) {
        return FilesSharingApiFp(this.configuration).applyExternalSharePassword(key, externalShareRequestParam, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the owner of the file with the ID specified in the request.
     * @summary Change the file owner
     * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSharingApi
     */
    public changeFileOwner(changeOwnerRequestDto?: ChangeOwnerRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSharingApiFp(this.configuration).changeFileOwner(changeOwnerRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the external data by the key specified in the request.
     * @summary Get the external data
     * @param {string} key The unique key of the external shared data.
     * @param {string} [fileId] The unique document identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSharingApi
     */
    public getExternalShareData(key: string, fileId?: string, options?: RawAxiosRequestConfig) {
        return FilesSharingApiFp(this.configuration).getExternalShareData(key, fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users with their access rights to the file with the ID specified in the request.
     * @summary Get user access rights by file ID
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSharingApi
     */
    public getSharedUsers(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesSharingApiFp(this.configuration).getSharedUsers(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a message to the users who are mentioned in the file with the ID specified in the request.
     * @summary Send the mention message
     * @param {number} fileId The file ID of the mention message.
     * @param {MentionMessageWrapper} [mentionMessageWrapper] The mention message.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSharingApi
     */
    public sendEditorNotify(fileId: number, mentionMessageWrapper?: MentionMessageWrapper, options?: RawAxiosRequestConfig) {
        return FilesSharingApiFp(this.configuration).sendEditorNotify(fileId, mentionMessageWrapper, options).then((request) => request(this.axios, this.basePath));
    }
}

