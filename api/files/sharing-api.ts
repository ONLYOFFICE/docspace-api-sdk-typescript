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
import type { AceShortWrapperArrayWrapper } from '../../models';
// @ts-ignore
import type { BaseBatchRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ChangeOwnerRequestDto } from '../../models';
// @ts-ignore
import type { EncryptionKeyArrayWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ExternalShareRequestParam } from '../../models';
// @ts-ignore
import type { ExternalShareWrapper } from '../../models';
// @ts-ignore
import type { FileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
// @ts-ignore
import type { GroupMemberSecurityRequestArrayWrapper } from '../../models';
// @ts-ignore
import type { MentionMessageWrapper } from '../../models';
// @ts-ignore
import type { MentionWrapperArrayWrapper } from '../../models';
// @ts-ignore
import type { SecurityInfoRequestDto } from '../../models';
// @ts-ignore
import type { SecurityInfoSimpleRequestDto } from '../../models';
/**
 * SharingApi - axios parameter creator
 * @export
 */
export const SharingApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Applies a password specified in the request to get the external data.
         * @summary Apply external data password
         * @param {string} key The unique document identifier.
         * @param {ExternalShareRequestParam} externalShareRequestParam The external data share request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         */
        applyExternalSharePassword: async (key: string, externalShareRequestParam: ExternalShareRequestParam, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('applyExternalSharePassword', 'key', key)
            // verify required parameter 'externalShareRequestParam' is not null or undefined
            assertParamExists('applyExternalSharePassword', 'externalShareRequestParam', externalShareRequestParam)

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
         * Returns the encryption keys to access a file with the ID specified in the request.
         * @summary Get file encryption keys
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEncryptionAccess operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-access/
         */
        getEncryptionAccess: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getEncryptionAccess', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/publickeys`
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
         * Returns the external data by the key specified in the request.
         * @summary Get the external data
         * @param {string} key The unique key of the external shared data.
         * @param {string} [fileId] The unique document identifier.
         * @param {string} [folderId] The unique folder identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         */
        getExternalShareData: async (key: string, fileId?: string, folderId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (folderId !== undefined) {
                localVarQueryParameter['folderId'] = folderId;
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
         * Returns the detailed information about the shared file with the ID specified in the request.
         * @summary Get the shared file information
         * @param {number} id The file unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/
         */
        getFileSecurityInfo: async (id: number, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFileSecurityInfo', 'id', id)

            const localVarPath = `/api/2.0/files/file/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns the detailed information about the shared folder with the ID specified in the request.
         * @summary Get the shared folder information
         * @param {number} id The folder unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/
         */
        getFolderSecurityInfo: async (id: number, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFolderSecurityInfo', 'id', id)

            const localVarPath = `/api/2.0/files/folder/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns the group members with their file security information.
         * @summary Get file group members with security information
         * @param {number} fileId The file ID.
         * @param {string} groupId The group ID.
         * @param {number} [count] The number of items to be retrieved in the current query.
         * @param {number} [startIndex] The starting index for the query result set.
         * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFileSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/
         */
        getGroupsMembersWithFileSecurity: async (fileId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getGroupsMembersWithFileSecurity', 'fileId', fileId)
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getGroupsMembersWithFileSecurity', 'groupId', groupId)

            const localVarPath = `/api/2.0/files/file/{fileId}/group/{groupId}/share`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Returns the group members with their folder security information.
         * @summary Get folder group members with security information
         * @param {number} folderId The folder ID.
         * @param {string} groupId The group ID.
         * @param {number} [count] The number of items to be retrieved in the current query.
         * @param {number} [startIndex] The starting index for the query result set.
         * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFolderSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/
         */
        getGroupsMembersWithFolderSecurity: async (folderId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getGroupsMembersWithFolderSecurity', 'folderId', folderId)
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getGroupsMembersWithFolderSecurity', 'groupId', groupId)

            const localVarPath = `/api/2.0/files/folder/{folderId}/group/{groupId}/share`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)))
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Returns the sharing rights for all the files and folders specified in the request.
         * @summary Get the sharing rights
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/
         */
        getSecurityInfo: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/share`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(baseBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of users with their access rights to the file with the ID specified in the request.
         * @summary Get user access rights by file ID
         * @param {number} fileId The file unique identifier.
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
         * Removes the sharing rights from all the files and folders specified in the request.
         * @summary Remove the sharing rights
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/
         */
        removeSecurityInfo: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/share`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(baseBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends a message to the users who are mentioned in the file with the ID specified in the request.
         * @summary Send the mention message
         * @param {number} fileId The file ID with the mention message.
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
        /**
         * Sets the sharing settings to a file with the ID specified in the request.
         * @summary Share a file
         * @param {number} id The file ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         */
        setFileSecurityInfo: async (id: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setFileSecurityInfo', 'id', id)
            // verify required parameter 'securityInfoSimpleRequestDto' is not null or undefined
            assertParamExists('setFileSecurityInfo', 'securityInfoSimpleRequestDto', securityInfoSimpleRequestDto)

            const localVarPath = `/api/2.0/files/file/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityInfoSimpleRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the sharing settings to a folder with the ID specified in the request.
         * @summary Share a folder
         * @param {number} id The folder ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         */
        setFolderSecurityInfo: async (id: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setFolderSecurityInfo', 'id', id)
            // verify required parameter 'securityInfoSimpleRequestDto' is not null or undefined
            assertParamExists('setFolderSecurityInfo', 'securityInfoSimpleRequestDto', securityInfoSimpleRequestDto)

            const localVarPath = `/api/2.0/files/folder/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityInfoSimpleRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the sharing rights to all the files and folders specified in the request.
         * @summary Set the sharing rights
         * @param {SecurityInfoRequestDto} [securityInfoRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/
         */
        setSecurityInfo: async (securityInfoRequestDto?: SecurityInfoRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/share`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityInfoRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SharingApi - functional programming interface
 * @export
 */
export const SharingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SharingApiAxiosParamCreator(configuration)
    return {
        /**
         * Applies a password specified in the request to get the external data.
         * @summary Apply external data password
         * @param {string} key The unique document identifier.
         * @param {ExternalShareRequestParam} externalShareRequestParam The external data share request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         */
        async applyExternalSharePassword(key: string, externalShareRequestParam: ExternalShareRequestParam, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.applyExternalSharePassword(key, externalShareRequestParam, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.applyExternalSharePassword']?.[localVarOperationServerIndex]?.url;
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
        async changeFileOwner(changeOwnerRequestDto?: ChangeOwnerRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeFileOwner(changeOwnerRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.changeFileOwner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the encryption keys to access a file with the ID specified in the request.
         * @summary Get file encryption keys
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEncryptionAccess operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-access/
         */
        async getEncryptionAccess(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEncryptionAccess(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getEncryptionAccess']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the external data by the key specified in the request.
         * @summary Get the external data
         * @param {string} key The unique key of the external shared data.
         * @param {string} [fileId] The unique document identifier.
         * @param {string} [folderId] The unique folder identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         */
        async getExternalShareData(key: string, fileId?: string, folderId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExternalShareData(key, fileId, folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getExternalShareData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about the shared file with the ID specified in the request.
         * @summary Get the shared file information
         * @param {number} id The file unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/
         */
        async getFileSecurityInfo(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileSecurityInfo(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getFileSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about the shared folder with the ID specified in the request.
         * @summary Get the shared folder information
         * @param {number} id The folder unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/
         */
        async getFolderSecurityInfo(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderSecurityInfo(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getFolderSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the group members with their file security information.
         * @summary Get file group members with security information
         * @param {number} fileId The file ID.
         * @param {string} groupId The group ID.
         * @param {number} [count] The number of items to be retrieved in the current query.
         * @param {number} [startIndex] The starting index for the query result set.
         * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFileSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/
         */
        async getGroupsMembersWithFileSecurity(fileId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupMemberSecurityRequestArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsMembersWithFileSecurity(fileId, groupId, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getGroupsMembersWithFileSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the group members with their folder security information.
         * @summary Get folder group members with security information
         * @param {number} folderId The folder ID.
         * @param {string} groupId The group ID.
         * @param {number} [count] The number of items to be retrieved in the current query.
         * @param {number} [startIndex] The starting index for the query result set.
         * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFolderSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/
         */
        async getGroupsMembersWithFolderSecurity(folderId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupMemberSecurityRequestArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsMembersWithFolderSecurity(folderId, groupId, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getGroupsMembersWithFolderSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the sharing rights for all the files and folders specified in the request.
         * @summary Get the sharing rights
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/
         */
        async getSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSecurityInfo(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users with their access rights to the file with the ID specified in the request.
         * @summary Get user access rights by file ID
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         */
        async getSharedUsers(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MentionWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSharedUsers(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getSharedUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the sharing rights from all the files and folders specified in the request.
         * @summary Remove the sharing rights
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/
         */
        async removeSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeSecurityInfo(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.removeSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a message to the users who are mentioned in the file with the ID specified in the request.
         * @summary Send the mention message
         * @param {number} fileId The file ID with the mention message.
         * @param {MentionMessageWrapper} [mentionMessageWrapper] The mention message.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         */
        async sendEditorNotify(fileId: number, mentionMessageWrapper?: MentionMessageWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AceShortWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendEditorNotify(fileId, mentionMessageWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.sendEditorNotify']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the sharing settings to a file with the ID specified in the request.
         * @summary Share a file
         * @param {number} id The file ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         */
        async setFileSecurityInfo(id: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileSecurityInfo(id, securityInfoSimpleRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setFileSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the sharing settings to a folder with the ID specified in the request.
         * @summary Share a folder
         * @param {number} id The folder ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         */
        async setFolderSecurityInfo(id: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderSecurityInfo(id, securityInfoSimpleRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setFolderSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the sharing rights to all the files and folders specified in the request.
         * @summary Set the sharing rights
         * @param {SecurityInfoRequestDto} [securityInfoRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/
         */
        async setSecurityInfo(securityInfoRequestDto?: SecurityInfoRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setSecurityInfo(securityInfoRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SharingApi - factory interface
 * @export
 */
export const SharingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SharingApiFp(configuration)
    return {
        /**
         * Applies a password specified in the request to get the external data.
         * @summary Apply external data password
         * @param {SharingApiApplyExternalSharePasswordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         * @throws {RequiredError}
         */
        applyExternalSharePassword(requestParameters: SharingApiApplyExternalSharePasswordRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.applyExternalSharePassword(requestParameters.key, requestParameters.externalShareRequestParam, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the owner of the file with the ID specified in the request.
         * @summary Change the file owner
         * @param {SharingApiChangeFileOwnerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         * @throws {RequiredError}
         */
        changeFileOwner(requestParameters: SharingApiChangeFileOwnerRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.changeFileOwner(requestParameters.changeOwnerRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the encryption keys to access a file with the ID specified in the request.
         * @summary Get file encryption keys
         * @param {SharingApiGetEncryptionAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getEncryptionAccess operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-access/
         * @throws {RequiredError}
         */
        getEncryptionAccess(requestParameters: SharingApiGetEncryptionAccessRequest, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.getEncryptionAccess(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the external data by the key specified in the request.
         * @summary Get the external data
         * @param {SharingApiGetExternalShareDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         * @throws {RequiredError}
         */
        getExternalShareData(requestParameters: SharingApiGetExternalShareDataRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.getExternalShareData(requestParameters.key, requestParameters.fileId, requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about the shared file with the ID specified in the request.
         * @summary Get the shared file information
         * @param {SharingApiGetFileSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/
         * @throws {RequiredError}
         */
        getFileSecurityInfo(requestParameters: SharingApiGetFileSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFileSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about the shared folder with the ID specified in the request.
         * @summary Get the shared folder information
         * @param {SharingApiGetFolderSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/
         * @throws {RequiredError}
         */
        getFolderSecurityInfo(requestParameters: SharingApiGetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFolderSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the group members with their file security information.
         * @summary Get file group members with security information
         * @param {SharingApiGetGroupsMembersWithFileSecurityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsMembersWithFileSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/
         * @throws {RequiredError}
         */
        getGroupsMembersWithFileSecurity(requestParameters: SharingApiGetGroupsMembersWithFileSecurityRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupMemberSecurityRequestArrayWrapper> {
            return localVarFp.getGroupsMembersWithFileSecurity(requestParameters.fileId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the group members with their folder security information.
         * @summary Get folder group members with security information
         * @param {SharingApiGetGroupsMembersWithFolderSecurityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsMembersWithFolderSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/
         * @throws {RequiredError}
         */
        getGroupsMembersWithFolderSecurity(requestParameters: SharingApiGetGroupsMembersWithFolderSecurityRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupMemberSecurityRequestArrayWrapper> {
            return localVarFp.getGroupsMembersWithFolderSecurity(requestParameters.folderId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the sharing rights for all the files and folders specified in the request.
         * @summary Get the sharing rights
         * @param {SharingApiGetSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/
         * @throws {RequiredError}
         */
        getSecurityInfo(requestParameters: SharingApiGetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users with their access rights to the file with the ID specified in the request.
         * @summary Get user access rights by file ID
         * @param {SharingApiGetSharedUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         * @throws {RequiredError}
         */
        getSharedUsers(requestParameters: SharingApiGetSharedUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<MentionWrapperArrayWrapper> {
            return localVarFp.getSharedUsers(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the sharing rights from all the files and folders specified in the request.
         * @summary Remove the sharing rights
         * @param {SharingApiRemoveSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for removeSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/
         * @throws {RequiredError}
         */
        removeSecurityInfo(requestParameters: SharingApiRemoveSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.removeSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a message to the users who are mentioned in the file with the ID specified in the request.
         * @summary Send the mention message
         * @param {SharingApiSendEditorNotifyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         * @throws {RequiredError}
         */
        sendEditorNotify(requestParameters: SharingApiSendEditorNotifyRequest, options?: RawAxiosRequestConfig): AxiosPromise<AceShortWrapperArrayWrapper> {
            return localVarFp.sendEditorNotify(requestParameters.fileId, requestParameters.mentionMessageWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the sharing settings to a file with the ID specified in the request.
         * @summary Share a file
         * @param {SharingApiSetFileSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         * @throws {RequiredError}
         */
        setFileSecurityInfo(requestParameters: SharingApiSetFileSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setFileSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the sharing settings to a folder with the ID specified in the request.
         * @summary Share a folder
         * @param {SharingApiSetFolderSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         * @throws {RequiredError}
         */
        setFolderSecurityInfo(requestParameters: SharingApiSetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setFolderSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the sharing rights to all the files and folders specified in the request.
         * @summary Set the sharing rights
         * @param {SharingApiSetSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/
         * @throws {RequiredError}
         */
        setSecurityInfo(requestParameters: SharingApiSetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setSecurityInfo(requestParameters.securityInfoRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for applyExternalSharePassword operation in SharingApi.
 * @export
 * @interface SharingApiApplyExternalSharePasswordRequest
 */
export interface SharingApiApplyExternalSharePasswordRequest {
    /**
     * The unique document identifier.
     * @type {string}
     * @memberof SharingApiApplyExternalSharePassword
     */
    readonly key: string

    /**
     * The external data share request parameters.
     * @type {ExternalShareRequestParam}
     * @memberof SharingApiApplyExternalSharePassword
     */
    readonly externalShareRequestParam: ExternalShareRequestParam
}

/**
 * Request parameters for changeFileOwner operation in SharingApi.
 * @export
 * @interface SharingApiChangeFileOwnerRequest
 */
export interface SharingApiChangeFileOwnerRequest {
    /**
     * 
     * @type {ChangeOwnerRequestDto}
     * @memberof SharingApiChangeFileOwner
     */
    readonly changeOwnerRequestDto?: ChangeOwnerRequestDto
}

/**
 * Request parameters for getEncryptionAccess operation in SharingApi.
 * @export
 * @interface SharingApiGetEncryptionAccessRequest
 */
export interface SharingApiGetEncryptionAccessRequest {
    /**
     * The file unique identifier.
     * @type {number}
     * @memberof SharingApiGetEncryptionAccess
     */
    readonly fileId: number
}

/**
 * Request parameters for getExternalShareData operation in SharingApi.
 * @export
 * @interface SharingApiGetExternalShareDataRequest
 */
export interface SharingApiGetExternalShareDataRequest {
    /**
     * The unique key of the external shared data.
     * @type {string}
     * @memberof SharingApiGetExternalShareData
     */
    readonly key: string

    /**
     * The unique document identifier.
     * @type {string}
     * @memberof SharingApiGetExternalShareData
     */
    readonly fileId?: string

    /**
     * The unique folder identifier.
     * @type {string}
     * @memberof SharingApiGetExternalShareData
     */
    readonly folderId?: string
}

/**
 * Request parameters for getFileSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiGetFileSecurityInfoRequest
 */
export interface SharingApiGetFileSecurityInfoRequest {
    /**
     * The file unique identifier.
     * @type {number}
     * @memberof SharingApiGetFileSecurityInfo
     */
    readonly id: number

    /**
     * The number of items to retrieve in the request.
     * @type {number}
     * @memberof SharingApiGetFileSecurityInfo
     */
    readonly count?: number

    /**
     * The starting index for the query results.
     * @type {number}
     * @memberof SharingApiGetFileSecurityInfo
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getFolderSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiGetFolderSecurityInfoRequest
 */
export interface SharingApiGetFolderSecurityInfoRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof SharingApiGetFolderSecurityInfo
     */
    readonly id: number

    /**
     * The number of items to retrieve in the request.
     * @type {number}
     * @memberof SharingApiGetFolderSecurityInfo
     */
    readonly count?: number

    /**
     * The starting index for the query results.
     * @type {number}
     * @memberof SharingApiGetFolderSecurityInfo
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getGroupsMembersWithFileSecurity operation in SharingApi.
 * @export
 * @interface SharingApiGetGroupsMembersWithFileSecurityRequest
 */
export interface SharingApiGetGroupsMembersWithFileSecurityRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly fileId: number

    /**
     * The group ID.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly groupId: string

    /**
     * The number of items to be retrieved in the current query.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly count?: number

    /**
     * The starting index for the query result set.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly startIndex?: number

    /**
     * The filter value used for searching or querying group members based on text input.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getGroupsMembersWithFolderSecurity operation in SharingApi.
 * @export
 * @interface SharingApiGetGroupsMembersWithFolderSecurityRequest
 */
export interface SharingApiGetGroupsMembersWithFolderSecurityRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly folderId: number

    /**
     * The group ID.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly groupId: string

    /**
     * The number of items to be retrieved in the current query.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly count?: number

    /**
     * The starting index for the query result set.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly startIndex?: number

    /**
     * The filter value used for searching or querying group members based on text input.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiGetSecurityInfoRequest
 */
export interface SharingApiGetSecurityInfoRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof SharingApiGetSecurityInfo
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for getSharedUsers operation in SharingApi.
 * @export
 * @interface SharingApiGetSharedUsersRequest
 */
export interface SharingApiGetSharedUsersRequest {
    /**
     * The file unique identifier.
     * @type {number}
     * @memberof SharingApiGetSharedUsers
     */
    readonly fileId: number
}

/**
 * Request parameters for removeSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiRemoveSecurityInfoRequest
 */
export interface SharingApiRemoveSecurityInfoRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof SharingApiRemoveSecurityInfo
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for sendEditorNotify operation in SharingApi.
 * @export
 * @interface SharingApiSendEditorNotifyRequest
 */
export interface SharingApiSendEditorNotifyRequest {
    /**
     * The file ID with the mention message.
     * @type {number}
     * @memberof SharingApiSendEditorNotify
     */
    readonly fileId: number

    /**
     * The mention message.
     * @type {MentionMessageWrapper}
     * @memberof SharingApiSendEditorNotify
     */
    readonly mentionMessageWrapper?: MentionMessageWrapper
}

/**
 * Request parameters for setFileSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiSetFileSecurityInfoRequest
 */
export interface SharingApiSetFileSecurityInfoRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof SharingApiSetFileSecurityInfo
     */
    readonly id: number

    /**
     * The parameters of the security information simple request.
     * @type {SecurityInfoSimpleRequestDto}
     * @memberof SharingApiSetFileSecurityInfo
     */
    readonly securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto
}

/**
 * Request parameters for setFolderSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiSetFolderSecurityInfoRequest
 */
export interface SharingApiSetFolderSecurityInfoRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof SharingApiSetFolderSecurityInfo
     */
    readonly id: number

    /**
     * The parameters of the security information simple request.
     * @type {SecurityInfoSimpleRequestDto}
     * @memberof SharingApiSetFolderSecurityInfo
     */
    readonly securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto
}

/**
 * Request parameters for setSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiSetSecurityInfoRequest
 */
export interface SharingApiSetSecurityInfoRequest {
    /**
     * 
     * @type {SecurityInfoRequestDto}
     * @memberof SharingApiSetSecurityInfo
     */
    readonly securityInfoRequestDto?: SecurityInfoRequestDto
}

/**
 * SharingApi - object-oriented interface
 * @export
 * @class SharingApi
 * @extends {BaseAPI}
 */
export class SharingApi extends BaseAPI {
    /**
     * Applies a password specified in the request to get the external data.
     * @summary Apply external data password
     * @param {FilesSharingApiApplyExternalSharePasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public applyExternalSharePassword(requestParameters: SharingApiApplyExternalSharePasswordRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).applyExternalSharePassword(requestParameters.key, requestParameters.externalShareRequestParam, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the owner of the file with the ID specified in the request.
     * @summary Change the file owner
     * @param {FilesSharingApiChangeFileOwnerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public changeFileOwner(requestParameters: SharingApiChangeFileOwnerRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).changeFileOwner(requestParameters.changeOwnerRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the encryption keys to access a file with the ID specified in the request.
     * @summary Get file encryption keys
     * @param {FilesSharingApiGetEncryptionAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getEncryptionAccess(requestParameters: SharingApiGetEncryptionAccessRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getEncryptionAccess(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the external data by the key specified in the request.
     * @summary Get the external data
     * @param {FilesSharingApiGetExternalShareDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getExternalShareData(requestParameters: SharingApiGetExternalShareDataRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getExternalShareData(requestParameters.key, requestParameters.fileId, requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about the shared file with the ID specified in the request.
     * @summary Get the shared file information
     * @param {FilesSharingApiGetFileSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getFileSecurityInfo(requestParameters: SharingApiGetFileSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getFileSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about the shared folder with the ID specified in the request.
     * @summary Get the shared folder information
     * @param {FilesSharingApiGetFolderSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getFolderSecurityInfo(requestParameters: SharingApiGetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getFolderSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the group members with their file security information.
     * @summary Get file group members with security information
     * @param {FilesSharingApiGetGroupsMembersWithFileSecurityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getGroupsMembersWithFileSecurity(requestParameters: SharingApiGetGroupsMembersWithFileSecurityRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getGroupsMembersWithFileSecurity(requestParameters.fileId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the group members with their folder security information.
     * @summary Get folder group members with security information
     * @param {FilesSharingApiGetGroupsMembersWithFolderSecurityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getGroupsMembersWithFolderSecurity(requestParameters: SharingApiGetGroupsMembersWithFolderSecurityRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getGroupsMembersWithFolderSecurity(requestParameters.folderId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the sharing rights for all the files and folders specified in the request.
     * @summary Get the sharing rights
     * @param {FilesSharingApiGetSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getSecurityInfo(requestParameters: SharingApiGetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users with their access rights to the file with the ID specified in the request.
     * @summary Get user access rights by file ID
     * @param {FilesSharingApiGetSharedUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getSharedUsers(requestParameters: SharingApiGetSharedUsersRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getSharedUsers(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the sharing rights from all the files and folders specified in the request.
     * @summary Remove the sharing rights
     * @param {FilesSharingApiRemoveSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public removeSecurityInfo(requestParameters: SharingApiRemoveSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).removeSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a message to the users who are mentioned in the file with the ID specified in the request.
     * @summary Send the mention message
     * @param {FilesSharingApiSendEditorNotifyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public sendEditorNotify(requestParameters: SharingApiSendEditorNotifyRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).sendEditorNotify(requestParameters.fileId, requestParameters.mentionMessageWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the sharing settings to a file with the ID specified in the request.
     * @summary Share a file
     * @param {FilesSharingApiSetFileSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setFileSecurityInfo(requestParameters: SharingApiSetFileSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setFileSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the sharing settings to a folder with the ID specified in the request.
     * @summary Share a folder
     * @param {FilesSharingApiSetFolderSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setFolderSecurityInfo(requestParameters: SharingApiSetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setFolderSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the sharing rights to all the files and folders specified in the request.
     * @summary Set the sharing rights
     * @param {FilesSharingApiSetSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setSecurityInfo(requestParameters: SharingApiSetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setSecurityInfo(requestParameters.securityInfoRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

