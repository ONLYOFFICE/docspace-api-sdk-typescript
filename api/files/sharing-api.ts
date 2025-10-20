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
import type { AceShortWrapperArrayWrapper } from '../../models';
// @ts-ignore
import type { BaseBatchRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ChangeOwnerRequestDto } from '../../models';
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
         * @param {number} fileId The file ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         */
        setFileSecurityInfo: async (fileId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setFileSecurityInfo', 'fileId', fileId)
            // verify required parameter 'securityInfoSimpleRequestDto' is not null or undefined
            assertParamExists('setFileSecurityInfo', 'securityInfoSimpleRequestDto', securityInfoSimpleRequestDto)
            const localVarPath = `/api/2.0/files/file/{fileId}/share`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * 
         * @param {number} folderId The folder ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         */
        setFolderSecurityInfo: async (folderId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('setFolderSecurityInfo', 'folderId', folderId)
            // verify required parameter 'securityInfoSimpleRequestDto' is not null or undefined
            assertParamExists('setFolderSecurityInfo', 'securityInfoSimpleRequestDto', securityInfoSimpleRequestDto)
            const localVarPath = `/api/2.0/files/folder/{folderId}/share`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
         * @param {number} fileId The file ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         */
        async setFileSecurityInfo(fileId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileSecurityInfo(fileId, securityInfoSimpleRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setFileSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         */
        async setFolderSecurityInfo(folderId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderSecurityInfo(folderId, securityInfoSimpleRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setFolderSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
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
         * 
         * @param {string} key The unique document identifier.
         * @param {ExternalShareRequestParam} externalShareRequestParam The external data share request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         * @throws {RequiredError}
         */
        applyExternalSharePassword(key: string, externalShareRequestParam: ExternalShareRequestParam, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.applyExternalSharePassword(key, externalShareRequestParam, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         * @throws {RequiredError}
         */
        changeFileOwner(changeOwnerRequestDto?: ChangeOwnerRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.changeFileOwner(changeOwnerRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} key The unique key of the external shared data.
         * @param {string} [fileId] The unique document identifier.
         * @param {string} [folderId] The unique folder identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         * @throws {RequiredError}
         */
        getExternalShareData(key: string, fileId?: string, folderId?: string, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.getExternalShareData(key, fileId, folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id The file unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/
         * @throws {RequiredError}
         */
        getFileSecurityInfo(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFileSecurityInfo(id, count, startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id The folder unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/
         * @throws {RequiredError}
         */
        getFolderSecurityInfo(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFolderSecurityInfo(id, count, startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} fileId The file ID.
         * @param {string} groupId The group ID.
         * @param {number} [count] The number of items to be retrieved in the current query.
         * @param {number} [startIndex] The starting index for the query result set.
         * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsMembersWithFileSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/
         * @throws {RequiredError}
         */
        getGroupsMembersWithFileSecurity(fileId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupMemberSecurityRequestArrayWrapper> {
            return localVarFp.getGroupsMembersWithFileSecurity(fileId, groupId, count, startIndex, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID.
         * @param {string} groupId The group ID.
         * @param {number} [count] The number of items to be retrieved in the current query.
         * @param {number} [startIndex] The starting index for the query result set.
         * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsMembersWithFolderSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/
         * @throws {RequiredError}
         */
        getGroupsMembersWithFolderSecurity(folderId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupMemberSecurityRequestArrayWrapper> {
            return localVarFp.getGroupsMembersWithFolderSecurity(folderId, groupId, count, startIndex, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for getSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/
         * @throws {RequiredError}
         */
        getSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getSecurityInfo(baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         * @throws {RequiredError}
         */
        getSharedUsers(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<MentionWrapperArrayWrapper> {
            return localVarFp.getSharedUsers(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for removeSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/
         * @throws {RequiredError}
         */
        removeSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.removeSecurityInfo(baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} fileId The file ID with the mention message.
         * @param {MentionMessageWrapper} [mentionMessageWrapper] The mention message.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         * @throws {RequiredError}
         */
        sendEditorNotify(fileId: number, mentionMessageWrapper?: MentionMessageWrapper, options?: RawAxiosRequestConfig): AxiosPromise<AceShortWrapperArrayWrapper> {
            return localVarFp.sendEditorNotify(fileId, mentionMessageWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} fileId The file ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         * @throws {RequiredError}
         */
        setFileSecurityInfo(fileId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setFileSecurityInfo(fileId, securityInfoSimpleRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         * @throws {RequiredError}
         */
        setFolderSecurityInfo(folderId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setFolderSecurityInfo(folderId, securityInfoSimpleRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SecurityInfoRequestDto} [securityInfoRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/
         * @throws {RequiredError}
         */
        setSecurityInfo(securityInfoRequestDto?: SecurityInfoRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setSecurityInfo(securityInfoRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SharingApi - object-oriented interface
 * @export
 * @class SharingApi
 * @extends {BaseAPI}
 */
export class SharingApi extends BaseAPI {
    /**
     * 
     * @param {string} key The unique document identifier.
     * @param {ExternalShareRequestParam} externalShareRequestParam The external data share request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public applyExternalSharePassword(key: string, externalShareRequestParam: ExternalShareRequestParam, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).applyExternalSharePassword(key, externalShareRequestParam, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public changeFileOwner(changeOwnerRequestDto?: ChangeOwnerRequestDto, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).changeFileOwner(changeOwnerRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} key The unique key of the external shared data.
     * @param {string} [fileId] The unique document identifier.
     * @param {string} [folderId] The unique folder identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getExternalShareData(key: string, fileId?: string, folderId?: string, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getExternalShareData(key, fileId, folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id The file unique identifier.
     * @param {number} [count] The number of items to retrieve in the request.
     * @param {number} [startIndex] The starting index for the query results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getFileSecurityInfo(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getFileSecurityInfo(id, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id The folder unique identifier.
     * @param {number} [count] The number of items to retrieve in the request.
     * @param {number} [startIndex] The starting index for the query results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getFolderSecurityInfo(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getFolderSecurityInfo(id, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} fileId The file ID.
     * @param {string} groupId The group ID.
     * @param {number} [count] The number of items to be retrieved in the current query.
     * @param {number} [startIndex] The starting index for the query result set.
     * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getGroupsMembersWithFileSecurity(fileId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getGroupsMembersWithFileSecurity(fileId, groupId, count, startIndex, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID.
     * @param {string} groupId The group ID.
     * @param {number} [count] The number of items to be retrieved in the current query.
     * @param {number} [startIndex] The starting index for the query result set.
     * @param {string} [filterValue] The filter value used for searching or querying group members based on text input.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getGroupsMembersWithFolderSecurity(folderId: number, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getGroupsMembersWithFolderSecurity(folderId, groupId, count, startIndex, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getSecurityInfo(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} fileId The file unique identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getSharedUsers(fileId: number, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getSharedUsers(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public removeSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).removeSecurityInfo(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} fileId The file ID with the mention message.
     * @param {MentionMessageWrapper} [mentionMessageWrapper] The mention message.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public sendEditorNotify(fileId: number, mentionMessageWrapper?: MentionMessageWrapper, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).sendEditorNotify(fileId, mentionMessageWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} fileId The file ID.
     * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setFileSecurityInfo(fileId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setFileSecurityInfo(fileId, securityInfoSimpleRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID.
     * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The parameters of the security information simple request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setFolderSecurityInfo(folderId: number, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setFolderSecurityInfo(folderId, securityInfoSimpleRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SecurityInfoRequestDto} [securityInfoRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setSecurityInfo(securityInfoRequestDto?: SecurityInfoRequestDto, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setSecurityInfo(securityInfoRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

