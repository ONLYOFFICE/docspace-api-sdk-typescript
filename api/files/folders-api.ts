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
import type { ApiDateTime } from '../../models';
// @ts-ignore
import type { ApplyFilterOption } from '../../models';
// @ts-ignore
import type { CheckUploadRequest } from '../../models';
// @ts-ignore
import type { CreateFolder } from '../../models';
// @ts-ignore
import type { DeleteFolder } from '../../models';
// @ts-ignore
import type { FileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { FileIntegerWrapper } from '../../models';
// @ts-ignore
import type { FileOperationArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareWrapper } from '../../models';
// @ts-ignore
import type { FilesStatisticsResultWrapper } from '../../models';
// @ts-ignore
import type { FilterType } from '../../models';
// @ts-ignore
import type { FolderContentIntegerArrayWrapper } from '../../models';
// @ts-ignore
import type { FolderContentIntegerWrapper } from '../../models';
// @ts-ignore
import type { FolderIntegerWrapper } from '../../models';
// @ts-ignore
import type { FolderLinkRequest } from '../../models';
// @ts-ignore
import type { FormsItemArrayWrapper } from '../../models';
// @ts-ignore
import type { HistoryArrayWrapper } from '../../models';
// @ts-ignore
import type { Location } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { OrderRequestDto } from '../../models';
// @ts-ignore
import type { STRINGArrayWrapper } from '../../models';
// @ts-ignore
import type { SearchArea } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UploadRequestDto } from '../../models';
/**
 * FoldersApi - axios parameter creator
 * @export
 */
export const FoldersApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * 
         * @param {number} folderId The folder ID.
         * @param {CheckUploadRequest} checkUploadRequest The request parameters for checking file uploads.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkUpload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-upload/
         */
        checkUpload: async (folderId: number, checkUploadRequest: CheckUploadRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('checkUpload', 'folderId', folderId)
            // verify required parameter 'checkUploadRequest' is not null or undefined
            assertParamExists('checkUpload', 'checkUploadRequest', checkUploadRequest)
            const localVarPath = `/api/2.0/files/{folderId}/upload/check`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkUploadRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} folderId The folder ID for the folder creation.
         * @param {CreateFolder} createFolder The parameters for creating a folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/
         */
        createFolder: async (folderId: number, createFolder: CreateFolder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createFolder', 'folderId', folderId)
            // verify required parameter 'createFolder' is not null or undefined
            assertParamExists('createFolder', 'createFolder', createFolder)
            const localVarPath = `/api/2.0/files/folder/{folderId}`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(createFolder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder-primary-external-link/
         */
        createFolderPrimaryExternalLink: async (id: number, folderLinkRequest: FolderLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createFolderPrimaryExternalLink', 'id', id)
            // verify required parameter 'folderLinkRequest' is not null or undefined
            assertParamExists('createFolderPrimaryExternalLink', 'folderLinkRequest', folderLinkRequest)
            const localVarPath = `/api/2.0/files/folder/{id}/link`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(folderLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/
         */
        createReportFolderHistory: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createReportFolderHistory', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/folder/{folderId}/log/report`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * @param {number} folderId The folder ID to delete.
         * @param {DeleteFolder} deleteFolder The parameters for deleting a folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-folder/
         */
        deleteFolder: async (folderId: number, deleteFolder: DeleteFolder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('deleteFolder', 'folderId', folderId)
            // verify required parameter 'deleteFolder' is not null or undefined
            assertParamExists('deleteFolder', 'deleteFolder', deleteFolder)
            const localVarPath = `/api/2.0/files/folder/{folderId}`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteFolder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFavoritesFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-favorites-folder/
         */
        getFavoritesFolder: async (userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userIdOrGroupId !== undefined) {
                localVarQueryParameter['userIdOrGroupId'] = userIdOrGroupId;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-used-space/
         */
        getFilesUsedSpace: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/filesusedspace`;
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
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder/
         */
        getFolder: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolder', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/{folderId}/formfilter`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
         * @param {number} folderId The folder ID of the request.
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [roomId] The room ID.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements from the specified folder.
         * @param {string} [extension] Specifies whether to search for the specific file extension.
         * @param {SearchArea} [searchArea] The search area.
         * @param {string} [formsItemKey] The forms item key.
         * @param {string} [formsItemType] The forms item type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated request.
         * @param {string} [sortBy] Specifies the property used for sorting the folder request results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text value used as a filter parameter for folder content queries.
         * @param {Location} [location] Represents the location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         */
        getFolderByFolderId: async (folderId: number, userIdOrGroupId?: string, filterType?: FilterType, roomId?: number, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderByFolderId', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/{folderId}`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userIdOrGroupId !== undefined) {
                localVarQueryParameter['userIdOrGroupId'] = userIdOrGroupId;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (roomId !== undefined) {
                localVarQueryParameter['roomId'] = roomId;
            }

            if (excludeSubject !== undefined) {
                localVarQueryParameter['excludeSubject'] = excludeSubject;
            }

            if (applyFilterOption !== undefined) {
                localVarQueryParameter['applyFilterOption'] = applyFilterOption;
            }

            if (extension !== undefined) {
                localVarQueryParameter['extension'] = extension;
            }

            if (searchArea !== undefined) {
                localVarQueryParameter['searchArea'] = searchArea;
            }

            if (formsItemKey !== undefined) {
                localVarQueryParameter['formsItemKey'] = formsItemKey;
            }

            if (formsItemType !== undefined) {
                localVarQueryParameter['formsItemType'] = formsItemType;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }

            if (location !== undefined) {
                localVarQueryParameter['Location'] = location;
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
         * @param {number} folderId The folder ID of the history request.
         * @param {ApiDateTime} [fromDate] The start date of the history request.
         * @param {ApiDateTime} [toDate] The end date of the history request.
         * @param {number} [count] The number of records to retrieve for the folder history.
         * @param {number} [startIndex] The starting index from which the history records are retrieved in the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-history/
         */
        getFolderHistory: async (folderId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderHistory', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/folder/{folderId}/log`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fromDate !== undefined) {
                for (const [key, value] of Object.entries(fromDate)) {
                    localVarQueryParameter[key] = value;
                }
            }

            if (toDate !== undefined) {
                for (const [key, value] of Object.entries(toDate)) {
                    localVarQueryParameter[key] = value;
                }
            }

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
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/
         */
        getFolderInfo: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderInfo', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/folder/{folderId}`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
         * @param {number} id The folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-links/
         */
        getFolderLinks: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFolderLinks', 'id', id)
            const localVarPath = `/api/2.0/files/folder/{id}/links`
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
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-path/
         */
        getFolderPath: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderPath', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/folder/{folderId}/path`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
         * @param {number} id The request folder ID.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-primary-external-link/
         */
        getFolderPrimaryExternalLink: async (id: number, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFolderPrimaryExternalLink', 'id', id)
            const localVarPath = `/api/2.0/files/folder/{id}/link`
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
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folders/
         */
        getFolders: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolders', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/{folderId}/subfolders`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-my-folder/
         */
        getMyFolder: async (userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@my`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userIdOrGroupId !== undefined) {
                localVarQueryParameter['userIdOrGroupId'] = userIdOrGroupId;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (applyFilterOption !== undefined) {
                localVarQueryParameter['applyFilterOption'] = applyFilterOption;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewFolderItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-folder-items/
         */
        getNewFolderItems: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getNewFolderItems', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/{folderId}/news`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPrivacyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-privacy-folder/
         */
        getPrivacyFolder: async (userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@privacy`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userIdOrGroupId !== undefined) {
                localVarQueryParameter['userIdOrGroupId'] = userIdOrGroupId;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {SearchArea} [searchArea] The search area.
         * @param {Array<string>} [extension] Specifies whether to search for a specific file extension in the Recent folder.
         * @param {number} [count] The maximum number of items to return.
         * @param {number} [startIndex] The starting position of the results to be returned in the query response.
         * @param {string} [sortBy] Specifies the sorting criteria for the folder request.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRecentFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-recent-folder/
         */
        getRecentFolder: async (userIdOrGroupId?: string, filterType?: FilterType, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, searchArea?: SearchArea, extension?: Array<string>, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@recent`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userIdOrGroupId !== undefined) {
                localVarQueryParameter['userIdOrGroupId'] = userIdOrGroupId;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (excludeSubject !== undefined) {
                localVarQueryParameter['excludeSubject'] = excludeSubject;
            }

            if (applyFilterOption !== undefined) {
                localVarQueryParameter['applyFilterOption'] = applyFilterOption;
            }

            if (searchArea !== undefined) {
                localVarQueryParameter['searchArea'] = searchArea;
            }

            if (extension) {
                localVarQueryParameter['extension'] = extension.join(COLLECTION_FORMATS.csv);
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {boolean} [withoutTrash] Specifies whether to return the Trash section or not.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter for searching or retrieving folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRootFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-root-folders/
         */
        getRootFolders: async (userIdOrGroupId?: string, filterType?: FilterType, withoutTrash?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@root`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userIdOrGroupId !== undefined) {
                localVarQueryParameter['userIdOrGroupId'] = userIdOrGroupId;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (withoutTrash !== undefined) {
                localVarQueryParameter['withoutTrash'] = withoutTrash;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTrashFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-trash-folder/
         */
        getTrashFolder: async (userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@trash`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userIdOrGroupId !== undefined) {
                localVarQueryParameter['userIdOrGroupId'] = userIdOrGroupId;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (applyFilterOption !== undefined) {
                localVarQueryParameter['applyFilterOption'] = applyFilterOption;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * @param {number} folderId The folder ID for inserting a file.
         * @param {File} [insertFileFile] The file to be inserted.
         * @param {string} [insertFileTitle] The file title to be inserted.
         * @param {boolean} [insertFileCreateNewIfExist] Specifies whether to create a new file if it already exists or not.
         * @param {boolean} [insertFileKeepConvertStatus] Specifies whether to keep the file converting status or not.
         * @param {boolean} [insertFileStreamCanRead] 
         * @param {boolean} [insertFileStreamCanWrite] 
         * @param {boolean} [insertFileStreamCanSeek] 
         * @param {boolean} [insertFileStreamCanTimeout] 
         * @param {number} [insertFileStreamLength] 
         * @param {number} [insertFileStreamPosition] 
         * @param {number} [insertFileStreamReadTimeout] 
         * @param {number} [insertFileStreamWriteTimeout] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for insertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file/
         */
        insertFile: async (folderId: number, insertFileFile?: File, insertFileTitle?: string, insertFileCreateNewIfExist?: boolean, insertFileKeepConvertStatus?: boolean, insertFileStreamCanRead?: boolean, insertFileStreamCanWrite?: boolean, insertFileStreamCanSeek?: boolean, insertFileStreamCanTimeout?: boolean, insertFileStreamLength?: number, insertFileStreamPosition?: number, insertFileStreamReadTimeout?: number, insertFileStreamWriteTimeout?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('insertFile', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/{folderId}/insert`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (insertFileFile !== undefined) { 
                localVarFormParams.append('InsertFile.File', insertFileFile as any);
            }
    
            if (insertFileTitle !== undefined) { 
                localVarFormParams.append('InsertFile.Title', insertFileTitle as any);
            }
    
            if (insertFileCreateNewIfExist !== undefined) { 
                localVarFormParams.append('InsertFile.CreateNewIfExist', String(insertFileCreateNewIfExist) as any);
            }
    
            if (insertFileKeepConvertStatus !== undefined) { 
                localVarFormParams.append('InsertFile.KeepConvertStatus', String(insertFileKeepConvertStatus) as any);
            }
    
            if (insertFileStreamCanRead !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.CanRead', String(insertFileStreamCanRead) as any);
            }
    
            if (insertFileStreamCanWrite !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.CanWrite', String(insertFileStreamCanWrite) as any);
            }
    
            if (insertFileStreamCanSeek !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.CanSeek', String(insertFileStreamCanSeek) as any);
            }
    
            if (insertFileStreamCanTimeout !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.CanTimeout', String(insertFileStreamCanTimeout) as any);
            }
    
            if (insertFileStreamLength !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.Length', insertFileStreamLength as any);
            }
    
            if (insertFileStreamPosition !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.Position', insertFileStreamPosition as any);
            }
    
            if (insertFileStreamReadTimeout !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.ReadTimeout', insertFileStreamReadTimeout as any);
            }
    
            if (insertFileStreamWriteTimeout !== undefined) { 
                localVarFormParams.append('InsertFile.Stream.WriteTimeout', insertFileStreamWriteTimeout as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {File} [file] The file to be inserted.
         * @param {string} [title] The file title to be inserted.
         * @param {boolean} [createNewIfExist] Specifies whether to create a new file if it already exists or not.
         * @param {boolean} [keepConvertStatus] Specifies whether to keep the file converting status or not.
         * @param {boolean} [streamCanRead] 
         * @param {boolean} [streamCanWrite] 
         * @param {boolean} [streamCanSeek] 
         * @param {boolean} [streamCanTimeout] 
         * @param {number} [streamLength] 
         * @param {number} [streamPosition] 
         * @param {number} [streamReadTimeout] 
         * @param {number} [streamWriteTimeout] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for insertFileToMyFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file-to-my-from-body/
         */
        insertFileToMyFromBody: async (file?: File, title?: string, createNewIfExist?: boolean, keepConvertStatus?: boolean, streamCanRead?: boolean, streamCanWrite?: boolean, streamCanSeek?: boolean, streamCanTimeout?: boolean, streamLength?: number, streamPosition?: number, streamReadTimeout?: number, streamWriteTimeout?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@my/insert`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (file !== undefined) { 
                localVarFormParams.append('File', file as any);
            }
    
            if (title !== undefined) { 
                localVarFormParams.append('Title', title as any);
            }
    
            if (createNewIfExist !== undefined) { 
                localVarFormParams.append('CreateNewIfExist', String(createNewIfExist) as any);
            }
    
            if (keepConvertStatus !== undefined) { 
                localVarFormParams.append('KeepConvertStatus', String(keepConvertStatus) as any);
            }
    
            if (streamCanRead !== undefined) { 
                localVarFormParams.append('Stream.CanRead', String(streamCanRead) as any);
            }
    
            if (streamCanWrite !== undefined) { 
                localVarFormParams.append('Stream.CanWrite', String(streamCanWrite) as any);
            }
    
            if (streamCanSeek !== undefined) { 
                localVarFormParams.append('Stream.CanSeek', String(streamCanSeek) as any);
            }
    
            if (streamCanTimeout !== undefined) { 
                localVarFormParams.append('Stream.CanTimeout', String(streamCanTimeout) as any);
            }
    
            if (streamLength !== undefined) { 
                localVarFormParams.append('Stream.Length', streamLength as any);
            }
    
            if (streamPosition !== undefined) { 
                localVarFormParams.append('Stream.Position', streamPosition as any);
            }
    
            if (streamReadTimeout !== undefined) { 
                localVarFormParams.append('Stream.ReadTimeout', streamReadTimeout as any);
            }
    
            if (streamWriteTimeout !== undefined) { 
                localVarFormParams.append('Stream.WriteTimeout', streamWriteTimeout as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} folderId The folder ID for the folder creation.
         * @param {CreateFolder} createFolder The parameters for creating a folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for renameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/
         */
        renameFolder: async (folderId: number, createFolder: CreateFolder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('renameFolder', 'folderId', folderId)
            // verify required parameter 'createFolder' is not null or undefined
            assertParamExists('renameFolder', 'createFolder', createFolder)
            const localVarPath = `/api/2.0/files/folder/{folderId}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createFolder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} folderId The folder unique identifier.
         * @param {OrderRequestDto} [orderRequestDto] The folder order information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/
         */
        setFolderOrder: async (folderId: number, orderRequestDto?: OrderRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('setFolderOrder', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/folder/{folderId}/order`
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
            localVarRequestOptions.data = serializeDataIfNeeded(orderRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-primary-external-link/
         */
        setFolderPrimaryExternalLink: async (id: number, folderLinkRequest: FolderLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setFolderPrimaryExternalLink', 'id', id)
            // verify required parameter 'folderLinkRequest' is not null or undefined
            assertParamExists('setFolderPrimaryExternalLink', 'folderLinkRequest', folderLinkRequest)
            const localVarPath = `/api/2.0/files/folder/{id}/links`
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(folderLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} folderId The folder ID to upload a file.
         * @param {UploadRequestDto} [uploadRequestDto] The request parameters for uploading a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/
         */
        uploadFile: async (folderId: number, uploadRequestDto?: UploadRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('uploadFile', 'folderId', folderId)
            const localVarPath = `/api/2.0/files/{folderId}/upload`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(uploadRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UploadRequestDto} [inDto] The request parameters for uploading a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFileToMy operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/
         */
        uploadFileToMy: async (inDto?: UploadRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@my/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (inDto !== undefined) {
                for (const [key, value] of Object.entries(inDto)) {
                    localVarQueryParameter[key] = value;
                }
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FoldersApi - functional programming interface
 * @export
 */
export const FoldersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FoldersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} folderId The folder ID.
         * @param {CheckUploadRequest} checkUploadRequest The request parameters for checking file uploads.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkUpload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-upload/
         */
        async checkUpload(folderId: number, checkUploadRequest: CheckUploadRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<STRINGArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkUpload(folderId, checkUploadRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.checkUpload']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID for the folder creation.
         * @param {CreateFolder} createFolder The parameters for creating a folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/
         */
        async createFolder(folderId: number, createFolder: CreateFolder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFolder(folderId, createFolder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.createFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder-primary-external-link/
         */
        async createFolderPrimaryExternalLink(id: number, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFolderPrimaryExternalLink(id, folderLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.createFolderPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/
         */
        async createReportFolderHistory(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReportFolderHistory(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.createReportFolderHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID to delete.
         * @param {DeleteFolder} deleteFolder The parameters for deleting a folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-folder/
         */
        async deleteFolder(folderId: number, deleteFolder: DeleteFolder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFolder(folderId, deleteFolder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.deleteFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFavoritesFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-favorites-folder/
         */
        async getFavoritesFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritesFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFavoritesFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-used-space/
         */
        async getFilesUsedSpace(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FilesStatisticsResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilesUsedSpace(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFilesUsedSpace']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder/
         */
        async getFolder(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormsItemArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolder(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID of the request.
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [roomId] The room ID.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements from the specified folder.
         * @param {string} [extension] Specifies whether to search for the specific file extension.
         * @param {SearchArea} [searchArea] The search area.
         * @param {string} [formsItemKey] The forms item key.
         * @param {string} [formsItemType] The forms item type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated request.
         * @param {string} [sortBy] Specifies the property used for sorting the folder request results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text value used as a filter parameter for folder content queries.
         * @param {Location} [location] Represents the location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         */
        async getFolderByFolderId(folderId: number, userIdOrGroupId?: string, filterType?: FilterType, roomId?: number, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderByFolderId(folderId, userIdOrGroupId, filterType, roomId, excludeSubject, applyFilterOption, extension, searchArea, formsItemKey, formsItemType, count, startIndex, sortBy, sortOrder, filterValue, location, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderByFolderId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID of the history request.
         * @param {ApiDateTime} [fromDate] The start date of the history request.
         * @param {ApiDateTime} [toDate] The end date of the history request.
         * @param {number} [count] The number of records to retrieve for the folder history.
         * @param {number} [startIndex] The starting index from which the history records are retrieved in the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-history/
         */
        async getFolderHistory(folderId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderHistory(folderId, fromDate, toDate, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/
         */
        async getFolderInfo(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderInfo(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-links/
         */
        async getFolderLinks(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderLinks(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-path/
         */
        async getFolderPath(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderPath(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderPath']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id The request folder ID.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-primary-external-link/
         */
        async getFolderPrimaryExternalLink(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderPrimaryExternalLink(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folders/
         */
        async getFolders(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolders(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-my-folder/
         */
        async getMyFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMyFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getMyFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewFolderItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-folder-items/
         */
        async getNewFolderItems(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNewFolderItems(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getNewFolderItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPrivacyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-privacy-folder/
         */
        async getPrivacyFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPrivacyFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getPrivacyFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {SearchArea} [searchArea] The search area.
         * @param {Array<string>} [extension] Specifies whether to search for a specific file extension in the Recent folder.
         * @param {number} [count] The maximum number of items to return.
         * @param {number} [startIndex] The starting position of the results to be returned in the query response.
         * @param {string} [sortBy] Specifies the sorting criteria for the folder request.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRecentFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-recent-folder/
         */
        async getRecentFolder(userIdOrGroupId?: string, filterType?: FilterType, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, searchArea?: SearchArea, extension?: Array<string>, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecentFolder(userIdOrGroupId, filterType, excludeSubject, applyFilterOption, searchArea, extension, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getRecentFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {boolean} [withoutTrash] Specifies whether to return the Trash section or not.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter for searching or retrieving folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRootFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-root-folders/
         */
        async getRootFolders(userIdOrGroupId?: string, filterType?: FilterType, withoutTrash?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRootFolders(userIdOrGroupId, filterType, withoutTrash, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getRootFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTrashFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-trash-folder/
         */
        async getTrashFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTrashFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getTrashFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID for inserting a file.
         * @param {File} [insertFileFile] The file to be inserted.
         * @param {string} [insertFileTitle] The file title to be inserted.
         * @param {boolean} [insertFileCreateNewIfExist] Specifies whether to create a new file if it already exists or not.
         * @param {boolean} [insertFileKeepConvertStatus] Specifies whether to keep the file converting status or not.
         * @param {boolean} [insertFileStreamCanRead] 
         * @param {boolean} [insertFileStreamCanWrite] 
         * @param {boolean} [insertFileStreamCanSeek] 
         * @param {boolean} [insertFileStreamCanTimeout] 
         * @param {number} [insertFileStreamLength] 
         * @param {number} [insertFileStreamPosition] 
         * @param {number} [insertFileStreamReadTimeout] 
         * @param {number} [insertFileStreamWriteTimeout] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for insertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file/
         */
        async insertFile(folderId: number, insertFileFile?: File, insertFileTitle?: string, insertFileCreateNewIfExist?: boolean, insertFileKeepConvertStatus?: boolean, insertFileStreamCanRead?: boolean, insertFileStreamCanWrite?: boolean, insertFileStreamCanSeek?: boolean, insertFileStreamCanTimeout?: boolean, insertFileStreamLength?: number, insertFileStreamPosition?: number, insertFileStreamReadTimeout?: number, insertFileStreamWriteTimeout?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.insertFile(folderId, insertFileFile, insertFileTitle, insertFileCreateNewIfExist, insertFileKeepConvertStatus, insertFileStreamCanRead, insertFileStreamCanWrite, insertFileStreamCanSeek, insertFileStreamCanTimeout, insertFileStreamLength, insertFileStreamPosition, insertFileStreamReadTimeout, insertFileStreamWriteTimeout, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.insertFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {File} [file] The file to be inserted.
         * @param {string} [title] The file title to be inserted.
         * @param {boolean} [createNewIfExist] Specifies whether to create a new file if it already exists or not.
         * @param {boolean} [keepConvertStatus] Specifies whether to keep the file converting status or not.
         * @param {boolean} [streamCanRead] 
         * @param {boolean} [streamCanWrite] 
         * @param {boolean} [streamCanSeek] 
         * @param {boolean} [streamCanTimeout] 
         * @param {number} [streamLength] 
         * @param {number} [streamPosition] 
         * @param {number} [streamReadTimeout] 
         * @param {number} [streamWriteTimeout] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for insertFileToMyFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file-to-my-from-body/
         */
        async insertFileToMyFromBody(file?: File, title?: string, createNewIfExist?: boolean, keepConvertStatus?: boolean, streamCanRead?: boolean, streamCanWrite?: boolean, streamCanSeek?: boolean, streamCanTimeout?: boolean, streamLength?: number, streamPosition?: number, streamReadTimeout?: number, streamWriteTimeout?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.insertFileToMyFromBody(file, title, createNewIfExist, keepConvertStatus, streamCanRead, streamCanWrite, streamCanSeek, streamCanTimeout, streamLength, streamPosition, streamReadTimeout, streamWriteTimeout, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.insertFileToMyFromBody']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID for the folder creation.
         * @param {CreateFolder} createFolder The parameters for creating a folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for renameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/
         */
        async renameFolder(folderId: number, createFolder: CreateFolder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renameFolder(folderId, createFolder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.renameFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder unique identifier.
         * @param {OrderRequestDto} [orderRequestDto] The folder order information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/
         */
        async setFolderOrder(folderId: number, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderOrder(folderId, orderRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.setFolderOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-primary-external-link/
         */
        async setFolderPrimaryExternalLink(id: number, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderPrimaryExternalLink(id, folderLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.setFolderPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} folderId The folder ID to upload a file.
         * @param {UploadRequestDto} [uploadRequestDto] The request parameters for uploading a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/
         */
        async uploadFile(folderId: number, uploadRequestDto?: UploadRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFile(folderId, uploadRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.uploadFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {UploadRequestDto} [inDto] The request parameters for uploading a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFileToMy operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/
         */
        async uploadFileToMy(inDto?: UploadRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFileToMy(inDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.uploadFileToMy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FoldersApi - factory interface
 * @export
 */
export const FoldersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FoldersApiFp(configuration)
    return {
        /**
         * 
         * @param {number} folderId The folder ID.
         * @param {CheckUploadRequest} checkUploadRequest The request parameters for checking file uploads.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkUpload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-upload/
         * @throws {RequiredError}
         */
        checkUpload(folderId: number, checkUploadRequest: CheckUploadRequest, options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.checkUpload(folderId, checkUploadRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID for the folder creation.
         * @param {CreateFolder} createFolder The parameters for creating a folder.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/
         * @throws {RequiredError}
         */
        createFolder(folderId: number, createFolder: CreateFolder, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.createFolder(folderId, createFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder-primary-external-link/
         * @throws {RequiredError}
         */
        createFolderPrimaryExternalLink(id: number, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.createFolderPrimaryExternalLink(id, folderLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId 
         * @param {*} [options] Override http request option.
         * REST API Reference for createReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/
         * @throws {RequiredError}
         */
        createReportFolderHistory(folderId: number, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.createReportFolderHistory(folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID to delete.
         * @param {DeleteFolder} deleteFolder The parameters for deleting a folder.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-folder/
         * @throws {RequiredError}
         */
        deleteFolder(folderId: number, deleteFolder: DeleteFolder, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteFolder(folderId, deleteFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFavoritesFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-favorites-folder/
         * @throws {RequiredError}
         */
        getFavoritesFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getFavoritesFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-used-space/
         * @throws {RequiredError}
         */
        getFilesUsedSpace(options?: RawAxiosRequestConfig): AxiosPromise<FilesStatisticsResultWrapper> {
            return localVarFp.getFilesUsedSpace(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder/
         * @throws {RequiredError}
         */
        getFolder(folderId: number, options?: RawAxiosRequestConfig): AxiosPromise<FormsItemArrayWrapper> {
            return localVarFp.getFolder(folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID of the request.
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [roomId] The room ID.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements from the specified folder.
         * @param {string} [extension] Specifies whether to search for the specific file extension.
         * @param {SearchArea} [searchArea] The search area.
         * @param {string} [formsItemKey] The forms item key.
         * @param {string} [formsItemType] The forms item type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated request.
         * @param {string} [sortBy] Specifies the property used for sorting the folder request results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text value used as a filter parameter for folder content queries.
         * @param {Location} [location] Represents the location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         * @throws {RequiredError}
         */
        getFolderByFolderId(folderId: number, userIdOrGroupId?: string, filterType?: FilterType, roomId?: number, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getFolderByFolderId(folderId, userIdOrGroupId, filterType, roomId, excludeSubject, applyFilterOption, extension, searchArea, formsItemKey, formsItemType, count, startIndex, sortBy, sortOrder, filterValue, location, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID of the history request.
         * @param {ApiDateTime} [fromDate] The start date of the history request.
         * @param {ApiDateTime} [toDate] The end date of the history request.
         * @param {number} [count] The number of records to retrieve for the folder history.
         * @param {number} [startIndex] The starting index from which the history records are retrieved in the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-history/
         * @throws {RequiredError}
         */
        getFolderHistory(folderId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<HistoryArrayWrapper> {
            return localVarFp.getFolderHistory(folderId, fromDate, toDate, count, startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/
         * @throws {RequiredError}
         */
        getFolderInfo(folderId: number, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.getFolderInfo(folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-links/
         * @throws {RequiredError}
         */
        getFolderLinks(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFolderLinks(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-path/
         * @throws {RequiredError}
         */
        getFolderPath(folderId: number, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.getFolderPath(folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id The request folder ID.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-primary-external-link/
         * @throws {RequiredError}
         */
        getFolderPrimaryExternalLink(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.getFolderPrimaryExternalLink(id, count, startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folders/
         * @throws {RequiredError}
         */
        getFolders(folderId: number, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.getFolders(folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * REST API Reference for getMyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-my-folder/
         * @throws {RequiredError}
         */
        getMyFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getMyFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The request folder ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getNewFolderItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-folder-items/
         * @throws {RequiredError}
         */
        getNewFolderItems(folderId: number, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.getNewFolderItems(folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPrivacyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-privacy-folder/
         * @throws {RequiredError}
         */
        getPrivacyFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getPrivacyFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {SearchArea} [searchArea] The search area.
         * @param {Array<string>} [extension] Specifies whether to search for a specific file extension in the Recent folder.
         * @param {number} [count] The maximum number of items to return.
         * @param {number} [startIndex] The starting position of the results to be returned in the query response.
         * @param {string} [sortBy] Specifies the sorting criteria for the folder request.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRecentFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-recent-folder/
         * @throws {RequiredError}
         */
        getRecentFolder(userIdOrGroupId?: string, filterType?: FilterType, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, searchArea?: SearchArea, extension?: Array<string>, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getRecentFolder(userIdOrGroupId, filterType, excludeSubject, applyFilterOption, searchArea, extension, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {boolean} [withoutTrash] Specifies whether to return the Trash section or not.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used as a filter for searching or retrieving folder contents.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRootFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-root-folders/
         * @throws {RequiredError}
         */
        getRootFolders(userIdOrGroupId?: string, filterType?: FilterType, withoutTrash?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerArrayWrapper> {
            return localVarFp.getRootFolders(userIdOrGroupId, filterType, withoutTrash, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {FilterType} [filterType] The filter type.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
         * @param {number} [count] The maximum number of items to retrieve in the response.
         * @param {number} [startIndex] The starting position of the items to be retrieved.
         * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching folder contents.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTrashFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-trash-folder/
         * @throws {RequiredError}
         */
        getTrashFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getTrashFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID for inserting a file.
         * @param {File} [insertFileFile] The file to be inserted.
         * @param {string} [insertFileTitle] The file title to be inserted.
         * @param {boolean} [insertFileCreateNewIfExist] Specifies whether to create a new file if it already exists or not.
         * @param {boolean} [insertFileKeepConvertStatus] Specifies whether to keep the file converting status or not.
         * @param {boolean} [insertFileStreamCanRead] 
         * @param {boolean} [insertFileStreamCanWrite] 
         * @param {boolean} [insertFileStreamCanSeek] 
         * @param {boolean} [insertFileStreamCanTimeout] 
         * @param {number} [insertFileStreamLength] 
         * @param {number} [insertFileStreamPosition] 
         * @param {number} [insertFileStreamReadTimeout] 
         * @param {number} [insertFileStreamWriteTimeout] 
         * @param {*} [options] Override http request option.
         * REST API Reference for insertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file/
         * @throws {RequiredError}
         */
        insertFile(folderId: number, insertFileFile?: File, insertFileTitle?: string, insertFileCreateNewIfExist?: boolean, insertFileKeepConvertStatus?: boolean, insertFileStreamCanRead?: boolean, insertFileStreamCanWrite?: boolean, insertFileStreamCanSeek?: boolean, insertFileStreamCanTimeout?: boolean, insertFileStreamLength?: number, insertFileStreamPosition?: number, insertFileStreamReadTimeout?: number, insertFileStreamWriteTimeout?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.insertFile(folderId, insertFileFile, insertFileTitle, insertFileCreateNewIfExist, insertFileKeepConvertStatus, insertFileStreamCanRead, insertFileStreamCanWrite, insertFileStreamCanSeek, insertFileStreamCanTimeout, insertFileStreamLength, insertFileStreamPosition, insertFileStreamReadTimeout, insertFileStreamWriteTimeout, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {File} [file] The file to be inserted.
         * @param {string} [title] The file title to be inserted.
         * @param {boolean} [createNewIfExist] Specifies whether to create a new file if it already exists or not.
         * @param {boolean} [keepConvertStatus] Specifies whether to keep the file converting status or not.
         * @param {boolean} [streamCanRead] 
         * @param {boolean} [streamCanWrite] 
         * @param {boolean} [streamCanSeek] 
         * @param {boolean} [streamCanTimeout] 
         * @param {number} [streamLength] 
         * @param {number} [streamPosition] 
         * @param {number} [streamReadTimeout] 
         * @param {number} [streamWriteTimeout] 
         * @param {*} [options] Override http request option.
         * REST API Reference for insertFileToMyFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file-to-my-from-body/
         * @throws {RequiredError}
         */
        insertFileToMyFromBody(file?: File, title?: string, createNewIfExist?: boolean, keepConvertStatus?: boolean, streamCanRead?: boolean, streamCanWrite?: boolean, streamCanSeek?: boolean, streamCanTimeout?: boolean, streamLength?: number, streamPosition?: number, streamReadTimeout?: number, streamWriteTimeout?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.insertFileToMyFromBody(file, title, createNewIfExist, keepConvertStatus, streamCanRead, streamCanWrite, streamCanSeek, streamCanTimeout, streamLength, streamPosition, streamReadTimeout, streamWriteTimeout, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID for the folder creation.
         * @param {CreateFolder} createFolder The parameters for creating a folder.
         * @param {*} [options] Override http request option.
         * REST API Reference for renameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/
         * @throws {RequiredError}
         */
        renameFolder(folderId: number, createFolder: CreateFolder, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.renameFolder(folderId, createFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder unique identifier.
         * @param {OrderRequestDto} [orderRequestDto] The folder order information.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/
         * @throws {RequiredError}
         */
        setFolderOrder(folderId: number, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.setFolderOrder(folderId, orderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id The folder ID.
         * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-primary-external-link/
         * @throws {RequiredError}
         */
        setFolderPrimaryExternalLink(id: number, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.setFolderPrimaryExternalLink(id, folderLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} folderId The folder ID to upload a file.
         * @param {UploadRequestDto} [uploadRequestDto] The request parameters for uploading a file.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/
         * @throws {RequiredError}
         */
        uploadFile(folderId: number, uploadRequestDto?: UploadRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.uploadFile(folderId, uploadRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UploadRequestDto} [inDto] The request parameters for uploading a file.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadFileToMy operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/
         * @throws {RequiredError}
         */
        uploadFileToMy(inDto?: UploadRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.uploadFileToMy(inDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseAPI}
 */
export class FoldersApi extends BaseAPI {
    /**
     * 
     * @param {number} folderId The folder ID.
     * @param {CheckUploadRequest} checkUploadRequest The request parameters for checking file uploads.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public checkUpload(folderId: number, checkUploadRequest: CheckUploadRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).checkUpload(folderId, checkUploadRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID for the folder creation.
     * @param {CreateFolder} createFolder The parameters for creating a folder.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createFolder(folderId: number, createFolder: CreateFolder, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createFolder(folderId, createFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id The folder ID.
     * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createFolderPrimaryExternalLink(id: number, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createFolderPrimaryExternalLink(id, folderLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createReportFolderHistory(folderId: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createReportFolderHistory(folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID to delete.
     * @param {DeleteFolder} deleteFolder The parameters for deleting a folder.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public deleteFolder(folderId: number, deleteFolder: DeleteFolder, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).deleteFolder(folderId, deleteFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [userIdOrGroupId] The user or group ID.
     * @param {FilterType} [filterType] The filter type.
     * @param {number} [count] The maximum number of items to retrieve in the request.
     * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
     * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFavoritesFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFavoritesFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFilesUsedSpace(options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFilesUsedSpace(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The request folder ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolder(folderId: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolder(folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID of the request.
     * @param {string} [userIdOrGroupId] The user or group ID.
     * @param {FilterType} [filterType] The filter type.
     * @param {number} [roomId] The room ID.
     * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
     * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements from the specified folder.
     * @param {string} [extension] Specifies whether to search for the specific file extension.
     * @param {SearchArea} [searchArea] The search area.
     * @param {string} [formsItemKey] The forms item key.
     * @param {string} [formsItemType] The forms item type.
     * @param {number} [count] The maximum number of items to retrieve in the request.
     * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated request.
     * @param {string} [sortBy] Specifies the property used for sorting the folder request results.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text value used as a filter parameter for folder content queries.
     * @param {Location} [location] Represents the location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderByFolderId(folderId: number, userIdOrGroupId?: string, filterType?: FilterType, roomId?: number, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderByFolderId(folderId, userIdOrGroupId, filterType, roomId, excludeSubject, applyFilterOption, extension, searchArea, formsItemKey, formsItemType, count, startIndex, sortBy, sortOrder, filterValue, location, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID of the history request.
     * @param {ApiDateTime} [fromDate] The start date of the history request.
     * @param {ApiDateTime} [toDate] The end date of the history request.
     * @param {number} [count] The number of records to retrieve for the folder history.
     * @param {number} [startIndex] The starting index from which the history records are retrieved in the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderHistory(folderId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderHistory(folderId, fromDate, toDate, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The request folder ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderInfo(folderId: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderInfo(folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id The folder ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderLinks(id: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderLinks(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The request folder ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderPath(folderId: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderPath(folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id The request folder ID.
     * @param {number} [count] The number of items to retrieve in the request.
     * @param {number} [startIndex] The starting index for the query results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderPrimaryExternalLink(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderPrimaryExternalLink(id, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The request folder ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolders(folderId: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolders(folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [userIdOrGroupId] The user or group ID.
     * @param {FilterType} [filterType] The filter type.
     * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
     * @param {number} [count] The maximum number of items to retrieve in the response.
     * @param {number} [startIndex] The starting position of the items to be retrieved.
     * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text used for filtering or searching folder contents.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getMyFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getMyFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The request folder ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getNewFolderItems(folderId: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getNewFolderItems(folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [userIdOrGroupId] The user or group ID.
     * @param {FilterType} [filterType] The filter type.
     * @param {number} [count] The maximum number of items to retrieve in the request.
     * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
     * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text used as a filter or search criterion for folder content queries.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getPrivacyFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getPrivacyFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [userIdOrGroupId] The user or group ID.
     * @param {FilterType} [filterType] The filter type.
     * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
     * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
     * @param {SearchArea} [searchArea] The search area.
     * @param {Array<string>} [extension] Specifies whether to search for a specific file extension in the Recent folder.
     * @param {number} [count] The maximum number of items to return.
     * @param {number} [startIndex] The starting position of the results to be returned in the query response.
     * @param {string} [sortBy] Specifies the sorting criteria for the folder request.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text used for filtering or searching folder contents.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getRecentFolder(userIdOrGroupId?: string, filterType?: FilterType, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, searchArea?: SearchArea, extension?: Array<string>, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getRecentFolder(userIdOrGroupId, filterType, excludeSubject, applyFilterOption, searchArea, extension, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [userIdOrGroupId] The user or group ID.
     * @param {FilterType} [filterType] The filter type.
     * @param {boolean} [withoutTrash] Specifies whether to return the Trash section or not.
     * @param {number} [count] The maximum number of items to retrieve in the response.
     * @param {number} [startIndex] The starting position of the items to be retrieved.
     * @param {string} [sortBy] Specifies the field by which the folder content should be sorted.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text used as a filter for searching or retrieving folder contents.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getRootFolders(userIdOrGroupId?: string, filterType?: FilterType, withoutTrash?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getRootFolders(userIdOrGroupId, filterType, withoutTrash, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [userIdOrGroupId] The user or group ID.
     * @param {FilterType} [filterType] The filter type.
     * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
     * @param {number} [count] The maximum number of items to retrieve in the response.
     * @param {number} [startIndex] The starting position of the items to be retrieved.
     * @param {string} [sortBy] The property used to specify the sorting criteria for folder contents.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterValue] The text used for filtering or searching folder contents.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getTrashFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getTrashFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID for inserting a file.
     * @param {File} [insertFileFile] The file to be inserted.
     * @param {string} [insertFileTitle] The file title to be inserted.
     * @param {boolean} [insertFileCreateNewIfExist] Specifies whether to create a new file if it already exists or not.
     * @param {boolean} [insertFileKeepConvertStatus] Specifies whether to keep the file converting status or not.
     * @param {boolean} [insertFileStreamCanRead] 
     * @param {boolean} [insertFileStreamCanWrite] 
     * @param {boolean} [insertFileStreamCanSeek] 
     * @param {boolean} [insertFileStreamCanTimeout] 
     * @param {number} [insertFileStreamLength] 
     * @param {number} [insertFileStreamPosition] 
     * @param {number} [insertFileStreamReadTimeout] 
     * @param {number} [insertFileStreamWriteTimeout] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public insertFile(folderId: number, insertFileFile?: File, insertFileTitle?: string, insertFileCreateNewIfExist?: boolean, insertFileKeepConvertStatus?: boolean, insertFileStreamCanRead?: boolean, insertFileStreamCanWrite?: boolean, insertFileStreamCanSeek?: boolean, insertFileStreamCanTimeout?: boolean, insertFileStreamLength?: number, insertFileStreamPosition?: number, insertFileStreamReadTimeout?: number, insertFileStreamWriteTimeout?: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).insertFile(folderId, insertFileFile, insertFileTitle, insertFileCreateNewIfExist, insertFileKeepConvertStatus, insertFileStreamCanRead, insertFileStreamCanWrite, insertFileStreamCanSeek, insertFileStreamCanTimeout, insertFileStreamLength, insertFileStreamPosition, insertFileStreamReadTimeout, insertFileStreamWriteTimeout, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {File} [file] The file to be inserted.
     * @param {string} [title] The file title to be inserted.
     * @param {boolean} [createNewIfExist] Specifies whether to create a new file if it already exists or not.
     * @param {boolean} [keepConvertStatus] Specifies whether to keep the file converting status or not.
     * @param {boolean} [streamCanRead] 
     * @param {boolean} [streamCanWrite] 
     * @param {boolean} [streamCanSeek] 
     * @param {boolean} [streamCanTimeout] 
     * @param {number} [streamLength] 
     * @param {number} [streamPosition] 
     * @param {number} [streamReadTimeout] 
     * @param {number} [streamWriteTimeout] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public insertFileToMyFromBody(file?: File, title?: string, createNewIfExist?: boolean, keepConvertStatus?: boolean, streamCanRead?: boolean, streamCanWrite?: boolean, streamCanSeek?: boolean, streamCanTimeout?: boolean, streamLength?: number, streamPosition?: number, streamReadTimeout?: number, streamWriteTimeout?: number, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).insertFileToMyFromBody(file, title, createNewIfExist, keepConvertStatus, streamCanRead, streamCanWrite, streamCanSeek, streamCanTimeout, streamLength, streamPosition, streamReadTimeout, streamWriteTimeout, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID for the folder creation.
     * @param {CreateFolder} createFolder The parameters for creating a folder.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public renameFolder(folderId: number, createFolder: CreateFolder, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).renameFolder(folderId, createFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder unique identifier.
     * @param {OrderRequestDto} [orderRequestDto] The folder order information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public setFolderOrder(folderId: number, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).setFolderOrder(folderId, orderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id The folder ID.
     * @param {FolderLinkRequest} folderLinkRequest The folder link parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public setFolderPrimaryExternalLink(id: number, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).setFolderPrimaryExternalLink(id, folderLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} folderId The folder ID to upload a file.
     * @param {UploadRequestDto} [uploadRequestDto] The request parameters for uploading a file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public uploadFile(folderId: number, uploadRequestDto?: UploadRequestDto, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).uploadFile(folderId, uploadRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UploadRequestDto} [inDto] The request parameters for uploading a file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public uploadFileToMy(inDto?: UploadRequestDto, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).uploadFileToMy(inDto, options).then((request) => request(this.axios, this.basePath));
    }
}

