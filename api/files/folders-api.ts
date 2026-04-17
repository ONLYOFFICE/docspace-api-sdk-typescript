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
// @ts-ignore
import type { XlsxReportResponseWrapper } from '../../models';
/**
 * FoldersApi - axios parameter creator
 * @export
 */
export const FoldersApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    let useAtRecent = false;
    return {
        withFields: (f: string) => {
            fields = f;
        },
        withAtRecent: () => {
            useAtRecent = true;
        },
        /**
         * Checks the file uploads to the folder with the ID specified in the request.
         * @summary Check file uploads
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkUploadRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new folder with the title specified in the request. The parent folder ID can be also specified.
         * @summary Create a folder
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
            localVarRequestOptions.data = serializeDataIfNeeded(createFolder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
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
            localVarRequestOptions.data = serializeDataIfNeeded(folderLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Generates the activity history of a folder.
         * @summary Generates folder history
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
         * Deletes a folder with the ID specified in the request.
         * @summary Delete a folder
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteFolder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Triggers asynchronous XLSX report generation for the specified form results folder.
         * @summary Generate XLSX report by folder
         * @param {number} folderId The folder unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for generateXlsxByFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx-by-folder/
         */
        generateXlsxByFolder: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('generateXlsxByFolder', 'folderId', folderId)

            const localVarPath = `/api/2.0/files/folder/{folderId}/xlsx`
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
         * Returns the detailed list of files and folders located in the Favorites section.
         * @summary Get the Favorites section
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
         * Returns the used space of files in the root folders.
         * @summary Get used space of files
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
         * Returns the form filter of a folder with the ID specified in the request.
         * @summary Get folder form filter
         * @param {number} folderId The folder unique identifier.
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
         * Returns the detailed list of files and folders located in the folder with the ID specified in the request.
         * @summary Get a folder by ID
         * @param {number} folderId The folder ID.
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {string} [sharedBy] The identifier of the user who shared the folder or file.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [roomId] The room ID.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders, or all elements from the specified folder.
         * @param {string} [extension] Specifies whether to search for the specific file extension.
         * @param {SearchArea} [searchArea] The search area.
         * @param {string} [formsItemKey] The forms item key.
         * @param {string} [formsItemType] The forms item type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated request.
         * @param {string} [sortBy] The property used for sorting the folder request results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text value used as a filter parameter for folder content queries.
         * @param {Location} [location] The location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         */
        getFolderByFolderId: async (folderId: number, userIdOrGroupId?: string, sharedBy?: string, filterType?: FilterType, roomId?: number, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (sharedBy !== undefined) {
                localVarQueryParameter['sharedBy'] = sharedBy;
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
         * Returns the activity history of a folder with a specified identifier.
         * @summary Get folder history
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

            if (fromDate !== undefined) {
                localVarQueryParameter['fromDate'] = fromDate;
            }

            if (toDate !== undefined) {
                localVarQueryParameter['toDate'] = toDate;
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
         * Returns the detailed information about a folder with the ID specified in the request.
         * @summary Get folder information
         * @param {number} folderId The folder unique identifier.
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
         * Returns the links of the folder with the ID specified in the request.
         * @summary Get the folder links
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
         * Returns a path to the folder with the ID specified in the request.
         * @summary Get the folder path
         * @param {number} folderId The folder unique identifier.
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
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
         * @param {number} id The folder unique identifier.
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
         * Returns a list of all the subfolders from a folder with the ID specified in the request.
         * @summary Get subfolders
         * @param {number} folderId The folder unique identifier.
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
         * Returns the detailed list of files and folders located in the My documents section.
         * @summary Get the My documents section
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
         * Returns a list of all the new items from a folder with the ID specified in the request.
         * @summary Get new folder items
         * @param {number} folderId The folder unique identifier.
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
         * Returns the detailed list of files and folders located in the Private Room section.
         * @summary Get the Private Room section
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
         * Returns the detailed list of files located in the Recent section.
         * @summary Get the Recent section
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
            const localVarPath = (useAtRecent ? '/api/2.0/files/@recent' : '/api/2.0/files/recent');
            useAtRecent = false;

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
                localVarQueryParameter['extension'] = extension;
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
         * Returns all the sections matching the parameters specified in the request.
         * @summary Get filtered sections
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
         * Returns the detailed list of files and folders located in the Trash section.
         * @summary Get the Trash section
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
         * Inserts a file specified in the request to the selected folder by single file uploading.
         * @summary Insert a file
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
         * Inserts a file specified in the request to the My documents section by single file uploading.
         * @summary Insert a file to the My documents section
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
         * Renames the selected folder with a new title specified in the request.
         * @summary Rename a folder
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
            localVarRequestOptions.data = serializeDataIfNeeded(createFolder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the order of a folder with ID specified in the request.
         * @summary Set folder order
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
            localVarRequestOptions.data = serializeDataIfNeeded(orderRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the folder external link with the ID specified in the request.
         * @summary Set the folder external link
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
            localVarRequestOptions.data = serializeDataIfNeeded(folderLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.
         * @summary Upload a file
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
            localVarRequestOptions.data = serializeDataIfNeeded(uploadRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Uploads a file specified in the request to the My documents section by single file uploading or standart multipart/form-data method.
         * @summary Upload a file to the My documents section
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

            if (inDto !== undefined) {
                localVarQueryParameter['inDto'] = inDto;
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
         * Checks the file uploads to the folder with the ID specified in the request.
         * @summary Check file uploads
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
         * Creates a new folder with the title specified in the request. The parent folder ID can be also specified.
         * @summary Create a folder
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
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
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
         * Generates the activity history of a folder.
         * @summary Generates folder history
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
         * Deletes a folder with the ID specified in the request.
         * @summary Delete a folder
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
         * Triggers asynchronous XLSX report generation for the specified form results folder.
         * @summary Generate XLSX report by folder
         * @param {number} folderId The folder unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for generateXlsxByFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx-by-folder/
         */
        async generateXlsxByFolder(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XlsxReportResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateXlsxByFolder(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.generateXlsxByFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed list of files and folders located in the Favorites section.
         * @summary Get the Favorites section
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
         * Returns the used space of files in the root folders.
         * @summary Get used space of files
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
         * Returns the form filter of a folder with the ID specified in the request.
         * @summary Get folder form filter
         * @param {number} folderId The folder unique identifier.
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
         * Returns the detailed list of files and folders located in the folder with the ID specified in the request.
         * @summary Get a folder by ID
         * @param {number} folderId The folder ID.
         * @param {string} [userIdOrGroupId] The user or group ID.
         * @param {string} [sharedBy] The identifier of the user who shared the folder or file.
         * @param {FilterType} [filterType] The filter type.
         * @param {number} [roomId] The room ID.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders, or all elements from the specified folder.
         * @param {string} [extension] Specifies whether to search for the specific file extension.
         * @param {SearchArea} [searchArea] The search area.
         * @param {string} [formsItemKey] The forms item key.
         * @param {string} [formsItemType] The forms item type.
         * @param {number} [count] The maximum number of items to retrieve in the request.
         * @param {number} [startIndex] The zero-based index of the first item to retrieve in a paginated request.
         * @param {string} [sortBy] The property used for sorting the folder request results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text value used as a filter parameter for folder content queries.
         * @param {Location} [location] The location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         */
        async getFolderByFolderId(folderId: number, userIdOrGroupId?: string, sharedBy?: string, filterType?: FilterType, roomId?: number, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderByFolderId(folderId, userIdOrGroupId, sharedBy, filterType, roomId, excludeSubject, applyFilterOption, extension, searchArea, formsItemKey, formsItemType, count, startIndex, sortBy, sortOrder, filterValue, location, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderByFolderId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the activity history of a folder with a specified identifier.
         * @summary Get folder history
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
         * Returns the detailed information about a folder with the ID specified in the request.
         * @summary Get folder information
         * @param {number} folderId The folder unique identifier.
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
         * Returns the links of the folder with the ID specified in the request.
         * @summary Get the folder links
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
         * Returns a path to the folder with the ID specified in the request.
         * @summary Get the folder path
         * @param {number} folderId The folder unique identifier.
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
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
         * @param {number} id The folder unique identifier.
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
         * Returns a list of all the subfolders from a folder with the ID specified in the request.
         * @summary Get subfolders
         * @param {number} folderId The folder unique identifier.
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
         * Returns the detailed list of files and folders located in the My documents section.
         * @summary Get the My documents section
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
         * Returns a list of all the new items from a folder with the ID specified in the request.
         * @summary Get new folder items
         * @param {number} folderId The folder unique identifier.
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
         * Returns the detailed list of files and folders located in the Private Room section.
         * @summary Get the Private Room section
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
         * Returns the detailed list of files located in the Recent section.
         * @summary Get the Recent section
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
         * Returns all the sections matching the parameters specified in the request.
         * @summary Get filtered sections
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
         * Returns the detailed list of files and folders located in the Trash section.
         * @summary Get the Trash section
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
         * Inserts a file specified in the request to the selected folder by single file uploading.
         * @summary Insert a file
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
         * Inserts a file specified in the request to the My documents section by single file uploading.
         * @summary Insert a file to the My documents section
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
         * Renames the selected folder with a new title specified in the request.
         * @summary Rename a folder
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
         * Sets the order of a folder with ID specified in the request.
         * @summary Set folder order
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
         * Sets the folder external link with the ID specified in the request.
         * @summary Set the folder external link
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
         * Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.
         * @summary Upload a file
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
         * Uploads a file specified in the request to the My documents section by single file uploading or standart multipart/form-data method.
         * @summary Upload a file to the My documents section
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
         * Checks the file uploads to the folder with the ID specified in the request.
         * @summary Check file uploads
         * @param {FoldersApiCheckUploadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkUpload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-upload/
         * @throws {RequiredError}
         */
        checkUpload(requestParameters: FoldersApiCheckUploadRequest, options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.checkUpload(requestParameters.folderId, requestParameters.checkUploadRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new folder with the title specified in the request. The parent folder ID can be also specified.
         * @summary Create a folder
         * @param {FoldersApiCreateFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/
         * @throws {RequiredError}
         */
        createFolder(requestParameters: FoldersApiCreateFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.createFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
         * @param {FoldersApiCreateFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder-primary-external-link/
         * @throws {RequiredError}
         */
        createFolderPrimaryExternalLink(requestParameters: FoldersApiCreateFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.createFolderPrimaryExternalLink(requestParameters.id, requestParameters.folderLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates the activity history of a folder.
         * @summary Generates folder history
         * @param {FoldersApiCreateReportFolderHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/
         * @throws {RequiredError}
         */
        createReportFolderHistory(requestParameters: FoldersApiCreateReportFolderHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.createReportFolderHistory(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a folder with the ID specified in the request.
         * @summary Delete a folder
         * @param {FoldersApiDeleteFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-folder/
         * @throws {RequiredError}
         */
        deleteFolder(requestParameters: FoldersApiDeleteFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteFolder(requestParameters.folderId, requestParameters.deleteFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * Triggers asynchronous XLSX report generation for the specified form results folder.
         * @summary Generate XLSX report by folder
         * @param {FoldersApiGenerateXlsxByFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for generateXlsxByFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx-by-folder/
         * @throws {RequiredError}
         */
        generateXlsxByFolder(requestParameters: FoldersApiGenerateXlsxByFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<XlsxReportResponseWrapper> {
            return localVarFp.generateXlsxByFolder(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed list of files and folders located in the Favorites section.
         * @summary Get the Favorites section
         * @param {FoldersApiGetFavoritesFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFavoritesFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-favorites-folder/
         * @throws {RequiredError}
         */
        getFavoritesFolder(requestParameters: FoldersApiGetFavoritesFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getFavoritesFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the used space of files in the root folders.
         * @summary Get used space of files
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-used-space/
         * @throws {RequiredError}
         */
        getFilesUsedSpace(options?: RawAxiosRequestConfig): AxiosPromise<FilesStatisticsResultWrapper> {
            return localVarFp.getFilesUsedSpace(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the form filter of a folder with the ID specified in the request.
         * @summary Get folder form filter
         * @param {FoldersApiGetFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder/
         * @throws {RequiredError}
         */
        getFolder(requestParameters: FoldersApiGetFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FormsItemArrayWrapper> {
            return localVarFp.getFolder(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed list of files and folders located in the folder with the ID specified in the request.
         * @summary Get a folder by ID
         * @param {FoldersApiGetFolderByFolderIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         * @throws {RequiredError}
         */
        getFolderByFolderId(requestParameters: FoldersApiGetFolderByFolderIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getFolderByFolderId(requestParameters.folderId, requestParameters.userIdOrGroupId, requestParameters.sharedBy, requestParameters.filterType, requestParameters.roomId, requestParameters.excludeSubject, requestParameters.applyFilterOption, requestParameters.extension, requestParameters.searchArea, requestParameters.formsItemKey, requestParameters.formsItemType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.location, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the activity history of a folder with a specified identifier.
         * @summary Get folder history
         * @param {FoldersApiGetFolderHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-history/
         * @throws {RequiredError}
         */
        getFolderHistory(requestParameters: FoldersApiGetFolderHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<HistoryArrayWrapper> {
            return localVarFp.getFolderHistory(requestParameters.folderId, requestParameters.fromDate, requestParameters.toDate, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about a folder with the ID specified in the request.
         * @summary Get folder information
         * @param {FoldersApiGetFolderInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/
         * @throws {RequiredError}
         */
        getFolderInfo(requestParameters: FoldersApiGetFolderInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.getFolderInfo(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the links of the folder with the ID specified in the request.
         * @summary Get the folder links
         * @param {FoldersApiGetFolderLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-links/
         * @throws {RequiredError}
         */
        getFolderLinks(requestParameters: FoldersApiGetFolderLinksRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFolderLinks(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a path to the folder with the ID specified in the request.
         * @summary Get the folder path
         * @param {FoldersApiGetFolderPathRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-path/
         * @throws {RequiredError}
         */
        getFolderPath(requestParameters: FoldersApiGetFolderPathRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.getFolderPath(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
         * @param {FoldersApiGetFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-primary-external-link/
         * @throws {RequiredError}
         */
        getFolderPrimaryExternalLink(requestParameters: FoldersApiGetFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.getFolderPrimaryExternalLink(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the subfolders from a folder with the ID specified in the request.
         * @summary Get subfolders
         * @param {FoldersApiGetFoldersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folders/
         * @throws {RequiredError}
         */
        getFolders(requestParameters: FoldersApiGetFoldersRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.getFolders(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed list of files and folders located in the My documents section.
         * @summary Get the My documents section
         * @param {FoldersApiGetMyFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getMyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-my-folder/
         * @throws {RequiredError}
         */
        getMyFolder(requestParameters: FoldersApiGetMyFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getMyFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.applyFilterOption, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the new items from a folder with the ID specified in the request.
         * @summary Get new folder items
         * @param {FoldersApiGetNewFolderItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getNewFolderItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-folder-items/
         * @throws {RequiredError}
         */
        getNewFolderItems(requestParameters: FoldersApiGetNewFolderItemsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.getNewFolderItems(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed list of files and folders located in the Private Room section.
         * @summary Get the Private Room section
         * @param {FoldersApiGetPrivacyFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPrivacyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-privacy-folder/
         * @throws {RequiredError}
         */
        getPrivacyFolder(requestParameters: FoldersApiGetPrivacyFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getPrivacyFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed list of files located in the Recent section.
         * @summary Get the Recent section
         * @param {FoldersApiGetRecentFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRecentFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-recent-folder/
         * @throws {RequiredError}
         */
        getRecentFolder(requestParameters: FoldersApiGetRecentFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getRecentFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.excludeSubject, requestParameters.applyFilterOption, requestParameters.searchArea, requestParameters.extension, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all the sections matching the parameters specified in the request.
         * @summary Get filtered sections
         * @param {FoldersApiGetRootFoldersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRootFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-root-folders/
         * @throws {RequiredError}
         */
        getRootFolders(requestParameters: FoldersApiGetRootFoldersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerArrayWrapper> {
            return localVarFp.getRootFolders(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.withoutTrash, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed list of files and folders located in the Trash section.
         * @summary Get the Trash section
         * @param {FoldersApiGetTrashFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTrashFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-trash-folder/
         * @throws {RequiredError}
         */
        getTrashFolder(requestParameters: FoldersApiGetTrashFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getTrashFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.applyFilterOption, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Inserts a file specified in the request to the selected folder by single file uploading.
         * @summary Insert a file
         * @param {FoldersApiInsertFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for insertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file/
         * @throws {RequiredError}
         */
        insertFile(requestParameters: FoldersApiInsertFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.insertFile(requestParameters.folderId, requestParameters.insertFileFile, requestParameters.insertFileTitle, requestParameters.insertFileCreateNewIfExist, requestParameters.insertFileKeepConvertStatus, requestParameters.insertFileStreamCanRead, requestParameters.insertFileStreamCanWrite, requestParameters.insertFileStreamCanSeek, requestParameters.insertFileStreamCanTimeout, requestParameters.insertFileStreamLength, requestParameters.insertFileStreamPosition, requestParameters.insertFileStreamReadTimeout, requestParameters.insertFileStreamWriteTimeout, options).then((request) => request(axios, basePath));
        },
        /**
         * Inserts a file specified in the request to the My documents section by single file uploading.
         * @summary Insert a file to the My documents section
         * @param {FoldersApiInsertFileToMyFromBodyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for insertFileToMyFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file-to-my-from-body/
         * @throws {RequiredError}
         */
        insertFileToMyFromBody(requestParameters: FoldersApiInsertFileToMyFromBodyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.insertFileToMyFromBody(requestParameters.file, requestParameters.title, requestParameters.createNewIfExist, requestParameters.keepConvertStatus, requestParameters.streamCanRead, requestParameters.streamCanWrite, requestParameters.streamCanSeek, requestParameters.streamCanTimeout, requestParameters.streamLength, requestParameters.streamPosition, requestParameters.streamReadTimeout, requestParameters.streamWriteTimeout, options).then((request) => request(axios, basePath));
        },
        /**
         * Renames the selected folder with a new title specified in the request.
         * @summary Rename a folder
         * @param {FoldersApiRenameFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for renameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/
         * @throws {RequiredError}
         */
        renameFolder(requestParameters: FoldersApiRenameFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.renameFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the order of a folder with ID specified in the request.
         * @summary Set folder order
         * @param {FoldersApiSetFolderOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/
         * @throws {RequiredError}
         */
        setFolderOrder(requestParameters: FoldersApiSetFolderOrderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.setFolderOrder(requestParameters.folderId, requestParameters.orderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the folder external link with the ID specified in the request.
         * @summary Set the folder external link
         * @param {FoldersApiSetFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-primary-external-link/
         * @throws {RequiredError}
         */
        setFolderPrimaryExternalLink(requestParameters: FoldersApiSetFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.setFolderPrimaryExternalLink(requestParameters.id, requestParameters.folderLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.
         * @summary Upload a file
         * @param {FoldersApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/
         * @throws {RequiredError}
         */
        uploadFile(requestParameters: FoldersApiUploadFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.uploadFile(requestParameters.folderId, requestParameters.uploadRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a file specified in the request to the My documents section by single file uploading or standart multipart/form-data method.
         * @summary Upload a file to the My documents section
         * @param {FoldersApiUploadFileToMyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadFileToMy operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/
         * @throws {RequiredError}
         */
        uploadFileToMy(requestParameters: FoldersApiUploadFileToMyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.uploadFileToMy(requestParameters.inDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for checkUpload operation in FoldersApi.
 * @export
 * @interface FoldersApiCheckUploadRequest
 */
export interface FoldersApiCheckUploadRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof FoldersApiCheckUpload
     */
    readonly folderId: number

    /**
     * The request parameters for checking file uploads.
     * @type {CheckUploadRequest}
     * @memberof FoldersApiCheckUpload
     */
    readonly checkUploadRequest: CheckUploadRequest
}

/**
 * Request parameters for createFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiCreateFolderRequest
 */
export interface FoldersApiCreateFolderRequest {
    /**
     * The folder ID for the folder creation.
     * @type {number}
     * @memberof FoldersApiCreateFolder
     */
    readonly folderId: number

    /**
     * The parameters for creating a folder.
     * @type {CreateFolder}
     * @memberof FoldersApiCreateFolder
     */
    readonly createFolder: CreateFolder
}

/**
 * Request parameters for createFolderPrimaryExternalLink operation in FoldersApi.
 * @export
 * @interface FoldersApiCreateFolderPrimaryExternalLinkRequest
 */
export interface FoldersApiCreateFolderPrimaryExternalLinkRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof FoldersApiCreateFolderPrimaryExternalLink
     */
    readonly id: number

    /**
     * The folder link parameters.
     * @type {FolderLinkRequest}
     * @memberof FoldersApiCreateFolderPrimaryExternalLink
     */
    readonly folderLinkRequest: FolderLinkRequest
}

/**
 * Request parameters for createReportFolderHistory operation in FoldersApi.
 * @export
 * @interface FoldersApiCreateReportFolderHistoryRequest
 */
export interface FoldersApiCreateReportFolderHistoryRequest {
    /**
     * 
     * @type {number}
     * @memberof FoldersApiCreateReportFolderHistory
     */
    readonly folderId: number
}

/**
 * Request parameters for deleteFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiDeleteFolderRequest
 */
export interface FoldersApiDeleteFolderRequest {
    /**
     * The folder ID to delete.
     * @type {number}
     * @memberof FoldersApiDeleteFolder
     */
    readonly folderId: number

    /**
     * The parameters for deleting a folder.
     * @type {DeleteFolder}
     * @memberof FoldersApiDeleteFolder
     */
    readonly deleteFolder: DeleteFolder
}

/**
 * Request parameters for generateXlsxByFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGenerateXlsxByFolderRequest
 */
export interface FoldersApiGenerateXlsxByFolderRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiGenerateXlsxByFolder
     */
    readonly folderId: number
}

/**
 * Request parameters for getFavoritesFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFavoritesFolderRequest
 */
export interface FoldersApiGetFavoritesFolderRequest {
    /**
     * The user or group ID.
     * @type {string}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * The filter type.
     * @type {FilterType}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly filterType?: FilterType

    /**
     * The maximum number of items to retrieve in the request.
     * @type {number}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly count?: number

    /**
     * The zero-based index of the first item to retrieve in a paginated list.
     * @type {number}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly startIndex?: number

    /**
     * Specifies the field by which the folder content should be sorted.
     * @type {string}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The text used as a filter or search criterion for folder content queries.
     * @type {string}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderRequest
 */
export interface FoldersApiGetFolderRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiGetFolder
     */
    readonly folderId: number
}

/**
 * Request parameters for getFolderByFolderId operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderByFolderIdRequest
 */
export interface FoldersApiGetFolderByFolderIdRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly folderId: number

    /**
     * The user or group ID.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly userIdOrGroupId?: string

    /**
     * The identifier of the user who shared the folder or file.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly sharedBy?: string

    /**
     * The filter type.
     * @type {FilterType}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly filterType?: FilterType

    /**
     * The room ID.
     * @type {number}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly roomId?: number

    /**
     * Specifies whether to exclude search by user or group ID.
     * @type {boolean}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly excludeSubject?: boolean

    /**
     * Specifies whether to return only files, only folders, or all elements from the specified folder.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * Specifies whether to search for the specific file extension.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly extension?: string

    /**
     * The search area.
     * @type {SearchArea}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly searchArea?: SearchArea

    /**
     * The forms item key.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly formsItemKey?: string

    /**
     * The forms item type.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly formsItemType?: string

    /**
     * The maximum number of items to retrieve in the request.
     * @type {number}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly count?: number

    /**
     * The zero-based index of the first item to retrieve in a paginated request.
     * @type {number}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly startIndex?: number

    /**
     * The property used for sorting the folder request results.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly sortOrder?: SortOrder

    /**
     * The text value used as a filter parameter for folder content queries.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly filterValue?: string

    /**
     * The location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link.
     * @type {Location}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly location?: Location
}

/**
 * Request parameters for getFolderHistory operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderHistoryRequest
 */
export interface FoldersApiGetFolderHistoryRequest {
    /**
     * The folder ID of the history request.
     * @type {number}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly folderId: number

    /**
     * The start date of the history request.
     * @type {ApiDateTime}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly fromDate?: ApiDateTime

    /**
     * The end date of the history request.
     * @type {ApiDateTime}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly toDate?: ApiDateTime

    /**
     * The number of records to retrieve for the folder history.
     * @type {number}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly count?: number

    /**
     * The starting index from which the history records are retrieved in the request.
     * @type {number}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getFolderInfo operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderInfoRequest
 */
export interface FoldersApiGetFolderInfoRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiGetFolderInfo
     */
    readonly folderId: number
}

/**
 * Request parameters for getFolderLinks operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderLinksRequest
 */
export interface FoldersApiGetFolderLinksRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof FoldersApiGetFolderLinks
     */
    readonly id: number
}

/**
 * Request parameters for getFolderPath operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderPathRequest
 */
export interface FoldersApiGetFolderPathRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiGetFolderPath
     */
    readonly folderId: number
}

/**
 * Request parameters for getFolderPrimaryExternalLink operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderPrimaryExternalLinkRequest
 */
export interface FoldersApiGetFolderPrimaryExternalLinkRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiGetFolderPrimaryExternalLink
     */
    readonly id: number

    /**
     * The number of items to retrieve in the request.
     * @type {number}
     * @memberof FoldersApiGetFolderPrimaryExternalLink
     */
    readonly count?: number

    /**
     * The starting index for the query results.
     * @type {number}
     * @memberof FoldersApiGetFolderPrimaryExternalLink
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getFolders operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFoldersRequest
 */
export interface FoldersApiGetFoldersRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiGetFolders
     */
    readonly folderId: number
}

/**
 * Request parameters for getMyFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetMyFolderRequest
 */
export interface FoldersApiGetMyFolderRequest {
    /**
     * The user or group ID.
     * @type {string}
     * @memberof FoldersApiGetMyFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * The filter type.
     * @type {FilterType}
     * @memberof FoldersApiGetMyFolder
     */
    readonly filterType?: FilterType

    /**
     * Specifies whether to return only files, only folders or all elements.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetMyFolder
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * The maximum number of items to retrieve in the response.
     * @type {number}
     * @memberof FoldersApiGetMyFolder
     */
    readonly count?: number

    /**
     * The starting position of the items to be retrieved.
     * @type {number}
     * @memberof FoldersApiGetMyFolder
     */
    readonly startIndex?: number

    /**
     * The property used to specify the sorting criteria for folder contents.
     * @type {string}
     * @memberof FoldersApiGetMyFolder
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof FoldersApiGetMyFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The text used for filtering or searching folder contents.
     * @type {string}
     * @memberof FoldersApiGetMyFolder
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getNewFolderItems operation in FoldersApi.
 * @export
 * @interface FoldersApiGetNewFolderItemsRequest
 */
export interface FoldersApiGetNewFolderItemsRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiGetNewFolderItems
     */
    readonly folderId: number
}

/**
 * Request parameters for getPrivacyFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetPrivacyFolderRequest
 */
export interface FoldersApiGetPrivacyFolderRequest {
    /**
     * The user or group ID.
     * @type {string}
     * @memberof FoldersApiGetPrivacyFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * The filter type.
     * @type {FilterType}
     * @memberof FoldersApiGetPrivacyFolder
     */
    readonly filterType?: FilterType

    /**
     * The maximum number of items to retrieve in the request.
     * @type {number}
     * @memberof FoldersApiGetPrivacyFolder
     */
    readonly count?: number

    /**
     * The zero-based index of the first item to retrieve in a paginated list.
     * @type {number}
     * @memberof FoldersApiGetPrivacyFolder
     */
    readonly startIndex?: number

    /**
     * Specifies the field by which the folder content should be sorted.
     * @type {string}
     * @memberof FoldersApiGetPrivacyFolder
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof FoldersApiGetPrivacyFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The text used as a filter or search criterion for folder content queries.
     * @type {string}
     * @memberof FoldersApiGetPrivacyFolder
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getRecentFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetRecentFolderRequest
 */
export interface FoldersApiGetRecentFolderRequest {
    /**
     * The user or group ID.
     * @type {string}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * The filter type.
     * @type {FilterType}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly filterType?: FilterType

    /**
     * Specifies whether to exclude search by user or group ID.
     * @type {boolean}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly excludeSubject?: boolean

    /**
     * Specifies whether to return only files, only folders or all elements.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * The search area.
     * @type {SearchArea}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly searchArea?: SearchArea

    /**
     * Specifies whether to search for a specific file extension in the Recent folder.
     * @type {Array<string>}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly extension?: Array<string>

    /**
     * The maximum number of items to return.
     * @type {number}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly count?: number

    /**
     * The starting position of the results to be returned in the query response.
     * @type {number}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly startIndex?: number

    /**
     * Specifies the sorting criteria for the folder request.
     * @type {string}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The text used for filtering or searching folder contents.
     * @type {string}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getRootFolders operation in FoldersApi.
 * @export
 * @interface FoldersApiGetRootFoldersRequest
 */
export interface FoldersApiGetRootFoldersRequest {
    /**
     * The user or group ID.
     * @type {string}
     * @memberof FoldersApiGetRootFolders
     */
    readonly userIdOrGroupId?: string

    /**
     * The filter type.
     * @type {FilterType}
     * @memberof FoldersApiGetRootFolders
     */
    readonly filterType?: FilterType

    /**
     * Specifies whether to return the Trash section or not.
     * @type {boolean}
     * @memberof FoldersApiGetRootFolders
     */
    readonly withoutTrash?: boolean

    /**
     * The maximum number of items to retrieve in the response.
     * @type {number}
     * @memberof FoldersApiGetRootFolders
     */
    readonly count?: number

    /**
     * The starting position of the items to be retrieved.
     * @type {number}
     * @memberof FoldersApiGetRootFolders
     */
    readonly startIndex?: number

    /**
     * Specifies the field by which the folder content should be sorted.
     * @type {string}
     * @memberof FoldersApiGetRootFolders
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof FoldersApiGetRootFolders
     */
    readonly sortOrder?: SortOrder

    /**
     * The text used as a filter for searching or retrieving folder contents.
     * @type {string}
     * @memberof FoldersApiGetRootFolders
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getTrashFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetTrashFolderRequest
 */
export interface FoldersApiGetTrashFolderRequest {
    /**
     * The user or group ID.
     * @type {string}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * The filter type.
     * @type {FilterType}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly filterType?: FilterType

    /**
     * Specifies whether to return only files, only folders or all elements.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * The maximum number of items to retrieve in the response.
     * @type {number}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly count?: number

    /**
     * The starting position of the items to be retrieved.
     * @type {number}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly startIndex?: number

    /**
     * The property used to specify the sorting criteria for folder contents.
     * @type {string}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The text used for filtering or searching folder contents.
     * @type {string}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly filterValue?: string
}

/**
 * Request parameters for insertFile operation in FoldersApi.
 * @export
 * @interface FoldersApiInsertFileRequest
 */
export interface FoldersApiInsertFileRequest {
    /**
     * The folder ID for inserting a file.
     * @type {number}
     * @memberof FoldersApiInsertFile
     */
    readonly folderId: number

    /**
     * The file to be inserted.
     * @type {File}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileFile?: File

    /**
     * The file title to be inserted.
     * @type {string}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileTitle?: string

    /**
     * Specifies whether to create a new file if it already exists or not.
     * @type {boolean}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileCreateNewIfExist?: boolean

    /**
     * Specifies whether to keep the file converting status or not.
     * @type {boolean}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileKeepConvertStatus?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamCanRead?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamCanWrite?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamCanSeek?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamCanTimeout?: boolean

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamLength?: number

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamPosition?: number

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamReadTimeout?: number

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileStreamWriteTimeout?: number
}

/**
 * Request parameters for insertFileToMyFromBody operation in FoldersApi.
 * @export
 * @interface FoldersApiInsertFileToMyFromBodyRequest
 */
export interface FoldersApiInsertFileToMyFromBodyRequest {
    /**
     * The file to be inserted.
     * @type {File}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly file?: File

    /**
     * The file title to be inserted.
     * @type {string}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly title?: string

    /**
     * Specifies whether to create a new file if it already exists or not.
     * @type {boolean}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly createNewIfExist?: boolean

    /**
     * Specifies whether to keep the file converting status or not.
     * @type {boolean}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly keepConvertStatus?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamCanRead?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamCanWrite?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamCanSeek?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamCanTimeout?: boolean

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamLength?: number

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamPosition?: number

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamReadTimeout?: number

    /**
     * 
     * @type {number}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly streamWriteTimeout?: number
}

/**
 * Request parameters for renameFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiRenameFolderRequest
 */
export interface FoldersApiRenameFolderRequest {
    /**
     * The folder ID for the folder creation.
     * @type {number}
     * @memberof FoldersApiRenameFolder
     */
    readonly folderId: number

    /**
     * The parameters for creating a folder.
     * @type {CreateFolder}
     * @memberof FoldersApiRenameFolder
     */
    readonly createFolder: CreateFolder
}

/**
 * Request parameters for setFolderOrder operation in FoldersApi.
 * @export
 * @interface FoldersApiSetFolderOrderRequest
 */
export interface FoldersApiSetFolderOrderRequest {
    /**
     * The folder unique identifier.
     * @type {number}
     * @memberof FoldersApiSetFolderOrder
     */
    readonly folderId: number

    /**
     * The folder order information.
     * @type {OrderRequestDto}
     * @memberof FoldersApiSetFolderOrder
     */
    readonly orderRequestDto?: OrderRequestDto
}

/**
 * Request parameters for setFolderPrimaryExternalLink operation in FoldersApi.
 * @export
 * @interface FoldersApiSetFolderPrimaryExternalLinkRequest
 */
export interface FoldersApiSetFolderPrimaryExternalLinkRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof FoldersApiSetFolderPrimaryExternalLink
     */
    readonly id: number

    /**
     * The folder link parameters.
     * @type {FolderLinkRequest}
     * @memberof FoldersApiSetFolderPrimaryExternalLink
     */
    readonly folderLinkRequest: FolderLinkRequest
}

/**
 * Request parameters for uploadFile operation in FoldersApi.
 * @export
 * @interface FoldersApiUploadFileRequest
 */
export interface FoldersApiUploadFileRequest {
    /**
     * The folder ID to upload a file.
     * @type {number}
     * @memberof FoldersApiUploadFile
     */
    readonly folderId: number

    /**
     * The request parameters for uploading a file.
     * @type {UploadRequestDto}
     * @memberof FoldersApiUploadFile
     */
    readonly uploadRequestDto?: UploadRequestDto
}

/**
 * Request parameters for uploadFileToMy operation in FoldersApi.
 * @export
 * @interface FoldersApiUploadFileToMyRequest
 */
export interface FoldersApiUploadFileToMyRequest {
    /**
     * The request parameters for uploading a file.
     * @type {UploadRequestDto}
     * @memberof FoldersApiUploadFileToMy
     */
    readonly inDto?: UploadRequestDto
}

/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseAPI}
 */
export class FoldersApi extends BaseAPI {
    /**
     * Checks the file uploads to the folder with the ID specified in the request.
     * @summary Check file uploads
     * @param {FilesFoldersApiCheckUploadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public checkUpload(requestParameters: FoldersApiCheckUploadRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).checkUpload(requestParameters.folderId, requestParameters.checkUploadRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new folder with the title specified in the request. The parent folder ID can be also specified.
     * @summary Create a folder
     * @param {FilesFoldersApiCreateFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createFolder(requestParameters: FoldersApiCreateFolderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a primary external link by the identifier specified in the request.
     * @summary Create primary external link
     * @param {FilesFoldersApiCreateFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createFolderPrimaryExternalLink(requestParameters: FoldersApiCreateFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createFolderPrimaryExternalLink(requestParameters.id, requestParameters.folderLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generates the activity history of a folder.
     * @summary Generates folder history
     * @param {FilesFoldersApiCreateReportFolderHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createReportFolderHistory(requestParameters: FoldersApiCreateReportFolderHistoryRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createReportFolderHistory(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a folder with the ID specified in the request.
     * @summary Delete a folder
     * @param {FilesFoldersApiDeleteFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public deleteFolder(requestParameters: FoldersApiDeleteFolderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).deleteFolder(requestParameters.folderId, requestParameters.deleteFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Triggers asynchronous XLSX report generation for the specified form results folder.
     * @summary Generate XLSX report by folder
     * @param {FilesFoldersApiGenerateXlsxByFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public generateXlsxByFolder(requestParameters: FoldersApiGenerateXlsxByFolderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).generateXlsxByFolder(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed list of files and folders located in the Favorites section.
     * @summary Get the Favorites section
     * @param {FilesFoldersApiGetFavoritesFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFavoritesFolder(requestParameters: FoldersApiGetFavoritesFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFavoritesFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the used space of files in the root folders.
     * @summary Get used space of files
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFilesUsedSpace(options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFilesUsedSpace(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the form filter of a folder with the ID specified in the request.
     * @summary Get folder form filter
     * @param {FilesFoldersApiGetFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolder(requestParameters: FoldersApiGetFolderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolder(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed list of files and folders located in the folder with the ID specified in the request.
     * @summary Get a folder by ID
     * @param {FilesFoldersApiGetFolderByFolderIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderByFolderId(requestParameters: FoldersApiGetFolderByFolderIdRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderByFolderId(requestParameters.folderId, requestParameters.userIdOrGroupId, requestParameters.sharedBy, requestParameters.filterType, requestParameters.roomId, requestParameters.excludeSubject, requestParameters.applyFilterOption, requestParameters.extension, requestParameters.searchArea, requestParameters.formsItemKey, requestParameters.formsItemType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.location, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the activity history of a folder with a specified identifier.
     * @summary Get folder history
     * @param {FilesFoldersApiGetFolderHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderHistory(requestParameters: FoldersApiGetFolderHistoryRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderHistory(requestParameters.folderId, requestParameters.fromDate, requestParameters.toDate, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about a folder with the ID specified in the request.
     * @summary Get folder information
     * @param {FilesFoldersApiGetFolderInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderInfo(requestParameters: FoldersApiGetFolderInfoRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderInfo(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the links of the folder with the ID specified in the request.
     * @summary Get the folder links
     * @param {FilesFoldersApiGetFolderLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderLinks(requestParameters: FoldersApiGetFolderLinksRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderLinks(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a path to the folder with the ID specified in the request.
     * @summary Get the folder path
     * @param {FilesFoldersApiGetFolderPathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderPath(requestParameters: FoldersApiGetFolderPathRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderPath(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the primary external link by the identifier specified in the request.
     * @summary Get primary external link
     * @param {FilesFoldersApiGetFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderPrimaryExternalLink(requestParameters: FoldersApiGetFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderPrimaryExternalLink(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the subfolders from a folder with the ID specified in the request.
     * @summary Get subfolders
     * @param {FilesFoldersApiGetFoldersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolders(requestParameters: FoldersApiGetFoldersRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolders(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed list of files and folders located in the My documents section.
     * @summary Get the My documents section
     * @param {FilesFoldersApiGetMyFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getMyFolder(requestParameters: FoldersApiGetMyFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getMyFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.applyFilterOption, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the new items from a folder with the ID specified in the request.
     * @summary Get new folder items
     * @param {FilesFoldersApiGetNewFolderItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getNewFolderItems(requestParameters: FoldersApiGetNewFolderItemsRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getNewFolderItems(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed list of files and folders located in the Private Room section.
     * @summary Get the Private Room section
     * @param {FilesFoldersApiGetPrivacyFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getPrivacyFolder(requestParameters: FoldersApiGetPrivacyFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getPrivacyFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed list of files located in the Recent section.
     * @summary Get the Recent section
     * @param {FilesFoldersApiGetRecentFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getRecentFolder(requestParameters: FoldersApiGetRecentFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getRecentFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.excludeSubject, requestParameters.applyFilterOption, requestParameters.searchArea, requestParameters.extension, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all the sections matching the parameters specified in the request.
     * @summary Get filtered sections
     * @param {FilesFoldersApiGetRootFoldersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getRootFolders(requestParameters: FoldersApiGetRootFoldersRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getRootFolders(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.withoutTrash, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed list of files and folders located in the Trash section.
     * @summary Get the Trash section
     * @param {FilesFoldersApiGetTrashFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getTrashFolder(requestParameters: FoldersApiGetTrashFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getTrashFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.applyFilterOption, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Inserts a file specified in the request to the selected folder by single file uploading.
     * @summary Insert a file
     * @param {FilesFoldersApiInsertFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public insertFile(requestParameters: FoldersApiInsertFileRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).insertFile(requestParameters.folderId, requestParameters.insertFileFile, requestParameters.insertFileTitle, requestParameters.insertFileCreateNewIfExist, requestParameters.insertFileKeepConvertStatus, requestParameters.insertFileStreamCanRead, requestParameters.insertFileStreamCanWrite, requestParameters.insertFileStreamCanSeek, requestParameters.insertFileStreamCanTimeout, requestParameters.insertFileStreamLength, requestParameters.insertFileStreamPosition, requestParameters.insertFileStreamReadTimeout, requestParameters.insertFileStreamWriteTimeout, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Inserts a file specified in the request to the My documents section by single file uploading.
     * @summary Insert a file to the My documents section
     * @param {FilesFoldersApiInsertFileToMyFromBodyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public insertFileToMyFromBody(requestParameters: FoldersApiInsertFileToMyFromBodyRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).insertFileToMyFromBody(requestParameters.file, requestParameters.title, requestParameters.createNewIfExist, requestParameters.keepConvertStatus, requestParameters.streamCanRead, requestParameters.streamCanWrite, requestParameters.streamCanSeek, requestParameters.streamCanTimeout, requestParameters.streamLength, requestParameters.streamPosition, requestParameters.streamReadTimeout, requestParameters.streamWriteTimeout, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Renames the selected folder with a new title specified in the request.
     * @summary Rename a folder
     * @param {FilesFoldersApiRenameFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public renameFolder(requestParameters: FoldersApiRenameFolderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).renameFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the order of a folder with ID specified in the request.
     * @summary Set folder order
     * @param {FilesFoldersApiSetFolderOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public setFolderOrder(requestParameters: FoldersApiSetFolderOrderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).setFolderOrder(requestParameters.folderId, requestParameters.orderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the folder external link with the ID specified in the request.
     * @summary Set the folder external link
     * @param {FilesFoldersApiSetFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public setFolderPrimaryExternalLink(requestParameters: FoldersApiSetFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).setFolderPrimaryExternalLink(requestParameters.id, requestParameters.folderLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.
     * @summary Upload a file
     * @param {FilesFoldersApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public uploadFile(requestParameters: FoldersApiUploadFileRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).uploadFile(requestParameters.folderId, requestParameters.uploadRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a file specified in the request to the My documents section by single file uploading or standart multipart/form-data method.
     * @summary Upload a file to the My documents section
     * @param {FilesFoldersApiUploadFileToMyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public uploadFileToMy(requestParameters: FoldersApiUploadFileToMyRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).uploadFileToMy(requestParameters.inDto, options).then((request) => request(this.axios, this.basePath));
    }
}

