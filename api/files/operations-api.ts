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
import type { BaseBatchRequestDto } from '../../models';
// @ts-ignore
import type { BatchRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CheckConversionRequestDtoInteger } from '../../models';
// @ts-ignore
import type { CheckDestFolderWrapper } from '../../models';
// @ts-ignore
import type { ChunkedUploadSessionResponseIntegerWrapper } from '../../models';
// @ts-ignore
import type { ChunkedUploadSessionResponseWrapperIntegerWrapper } from '../../models';
// @ts-ignore
import type { ConversationResultArrayWrapper } from '../../models';
// @ts-ignore
import type { DeleteBatchRequestDto } from '../../models';
// @ts-ignore
import type { DeleteVersionBatchRequestDto } from '../../models';
// @ts-ignore
import type { DownloadRequestDto } from '../../models';
// @ts-ignore
import type { DuplicateRequestDto } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { FileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { FileOperationArrayWrapper } from '../../models';
// @ts-ignore
import type { FileOperationType } from '../../models';
// @ts-ignore
import type { FileOperationWrapper } from '../../models';
// @ts-ignore
import type { SessionRequest } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UpdateComment } from '../../models';
// @ts-ignore
import type { UploadSessionResponseIntegerWrapper } from '../../models';
/**
 * OperationsApi - axios parameter creator
 * @export
 */
export const OperationsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * This method allows users to cancel an ongoing upload session identified by the session ID.  Once the session is aborted, the associated resources will be cleaned up, and the session will no longer accept further uploads.
         * @summary Aborts an in-progress file upload session.
         * @param {string} sessionId The session ID.
         * @param {number} folderId The folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for abortUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/abort-upload-session/
         */
        abortUploadSession: async (sessionId: string, folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('abortUploadSession', 'sessionId', sessionId)
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('abortUploadSession', 'folderId', folderId)

            const localVarPath = `/api/2.0/files/{folderId}/session/{sessionId}`
                .replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)))
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds files and folders with the IDs specified in the request to the favorite list.
         * @summary Add favorite files and folders
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addFavorites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-favorites/
         */
        addFavorites: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/favorites`;
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
         * Starts the download process of files and folders with the IDs specified in the request.
         * @summary Bulk download
         * @param {DownloadRequestDto} [downloadRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for bulkDownload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/bulk-download/
         */
        bulkDownload: async (downloadRequestDto?: DownloadRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/bulkdownload`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(downloadRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks the conversion status of a file with the ID specified in the request.
         * @summary Get conversion status
         * @param {number} fileId The file ID to check conversion status.
         * @param {boolean} [start] Specifies whether a conversion operation is started or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConversionStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-conversion-status/
         */
        checkConversionStatus: async (fileId: number, start?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('checkConversionStatus', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/checkconversion`
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

            if (start !== undefined) {
                localVarQueryParameter['start'] = start;
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
         * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
         * @summary Move or copy files to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         */
        checkMoveOrCopyBatchItems: async (inDto?: BatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/move`;
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
        /**
         * Checks if files can be moved or copied to the specified folder.
         * @summary Check for moving or copying files to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         */
        checkMoveOrCopyDestFolder: async (inDto?: BatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/checkdestfolder`;
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
        /**
         * Copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Copy to the folder
         * @param {BatchRequestDto} [batchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-batch-items/
         */
        copyBatchItems: async (batchRequestDto?: BatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/copy`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(batchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.
         * @summary Chunked upload
         * @param {number} folderId The session folder ID.
         * @param {SessionRequest} sessionRequest The session parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         */
        createUploadSession: async (folderId: number, sessionRequest: SessionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createUploadSession', 'folderId', folderId)
            // verify required parameter 'sessionRequest' is not null or undefined
            assertParamExists('createUploadSession', 'sessionRequest', sessionRequest)

            const localVarPath = `/api/2.0/files/{folderId}/upload/create_session`
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
            localVarRequestOptions.data = serializeDataIfNeeded(sessionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The session allows the user to upload a file in smaller chunks to the folder identified by its ID.  The file information, such as name, size, and additional metadata, must be provided in the request.  This method facilitates large file upload scenarios by enabling chunked file uploads.
         * @summary Creates a session for uploading a file to a specific folder in chunks.
         * @param {number} folderId The session folder ID.
         * @param {SessionRequest} sessionRequest The session parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createUploadSessionInFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session-in-folder/
         */
        createUploadSessionInFolder: async (folderId: number, sessionRequest: SessionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createUploadSessionInFolder', 'folderId', folderId)
            // verify required parameter 'sessionRequest' is not null or undefined
            assertParamExists('createUploadSessionInFolder', 'sessionRequest', sessionRequest)

            const localVarPath = `/api/2.0/files/{folderId}/session`
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
            localVarRequestOptions.data = serializeDataIfNeeded(sessionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the files and folders with the IDs specified in the request.
         * @summary Delete files and folders
         * @param {DeleteBatchRequestDto} [deleteBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-batch-items/
         */
        deleteBatchItems: async (deleteBatchRequestDto?: DeleteBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/delete`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes files and folders with the IDs specified in the request from the favorite list. This method uses the body parameters.
         * @summary Delete favorite files and folders (using body parameters)
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFavoritesFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-favorites-from-body/
         */
        deleteFavoritesFromBody: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/favorites`;
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
         * Deletes the file versions with the IDs specified in the request.
         * @summary Delete file versions
         * @param {DeleteVersionBatchRequestDto} [deleteVersionBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFileVersions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-versions/
         */
        deleteFileVersions: async (deleteVersionBatchRequestDto?: DeleteVersionBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/deleteversion`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteVersionBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Duplicates all the selected files and folders.
         * @summary Duplicate files and folders
         * @param {DuplicateRequestDto} [duplicateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for duplicateBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/duplicate-batch-items/
         */
        duplicateBatchItems: async (duplicateRequestDto?: DuplicateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/duplicate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(duplicateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes all the files and folders from the Trash folder. If the folder types are specified, only the items originally located in the sections of these types are deleted.
         * @summary Empty the Trash folder
         * @param {boolean} [single] Specifies whether to return only the current operation
         * @param {Array<EmptyTrashFolderTypeEnum>} [folderType] The parent folder types used to empty the trash only from the items originally located in the sections of the specified types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for emptyTrash operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/
         */
        emptyTrash: async (single?: boolean, folderType?: Array<EmptyTrashFolderTypeEnum>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/emptytrash`;
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

            if (single !== undefined) {
                localVarQueryParameter['Single'] = single;
            }

            if (folderType) {
                localVarQueryParameter['folderType'] = folderType;
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
         * Finalizes the upload session by processing the uploaded file chunks and marking the upload as complete.  This method consolidates chunked uploads into a complete file if required, sends notifications about the upload event,  and performs any additional cleanup or related actions, such as socket updates and webhook publishing.
         * @summary Finalize an upload session
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The session ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for finalizeSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finalize-session/
         */
        finalizeSession: async (folderId: number, sessionId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('finalizeSession', 'folderId', folderId)
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('finalizeSession', 'sessionId', sessionId)

            const localVarPath = `/api/2.0/files/{folderId}/session/{sessionId}/finalize`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)))
                .replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all the active file operations.
         * @summary Get active file operations
         * @param {string} [id] The ID of the file operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getOperationStatuses operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses/
         */
        getOperationStatuses: async (id?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * Retrieves the statuses of operations filtered by the specified operation type.
         * @summary Get file operation statuses
         * @param {FileOperationType} operationType Specifies the type of file operation to be retrieved.
         * @param {string} [id] The ID of the file operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getOperationStatusesByType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses-by-type/
         */
        getOperationStatusesByType: async (operationType: FileOperationType, id?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'operationType' is not null or undefined
            assertParamExists('getOperationStatusesByType', 'operationType', operationType)

            const localVarPath = `/api/2.0/files/fileops/{operationType}`
                .replace(`{${"operationType"}}`, encodeURIComponent(String(operationType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * Marks the files and folders with the IDs specified in the request as read.
         * @summary Mark as read
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for markAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-as-read/
         */
        markAsRead: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/markasread`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(baseBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Move or copy to a folder
         * @param {BatchRequestDto} [batchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for moveBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-batch-items/
         */
        moveBatchItems: async (batchRequestDto?: BatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/fileops/move`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(batchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts a conversion operation of a file with the ID specified in the request.
         * @summary Start file conversion
         * @param {number} fileId The file ID to start conversion proccess.
         * @param {CheckConversionRequestDtoInteger} [checkConversionRequestDtoInteger] The parameters for checking file conversion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFileConversion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/
         */
        startFileConversion: async (fileId: number, checkConversionRequestDtoInteger?: CheckConversionRequestDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('startFileConversion', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/checkconversion`
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkConversionRequestDtoInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finishes an operation with the ID specified in the request or all the active operations.
         * @summary Finish active operations
         * @param {string} id The operation unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateTasks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tasks/
         */
        terminateTasks: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('terminateTasks', 'id', id)

            const localVarPath = `/api/2.0/files/fileops/terminate/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a comment in a file with the ID specified in the request.
         * @summary Update a comment
         * @param {number} fileId The file ID where the comment is located.
         * @param {UpdateComment} updateComment The parameters for updating a comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         */
        updateFileComment: async (fileId: number, updateComment: UpdateComment, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateFileComment', 'fileId', fileId)
            // verify required parameter 'updateComment' is not null or undefined
            assertParamExists('updateFileComment', 'updateComment', updateComment)

            const localVarPath = `/api/2.0/files/file/{fileId}/comment`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateComment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows the caller to upload a specific chunk of a file to an ongoing upload session.  The session is identified by the session ID provided in the request. The chunk can be of any size  within the limits allowed during the session initialization. Each chunk must be uploaded in the  correct order for the server to process it appropriately.  The server updates the upload session status and stores the progress information after processing  each chunk. The updated session details are returned in the response.
         * @summary Handles the upload of a chunk for an existing upload session.
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The upload session ID.
         * @param {number} [chunkNumber] The chunk number.
         * @param {File} [file] The file chunk to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file chunk content from the HTTP request form for chunked upload operations.  The file chunk is accessed via the IFormFile interface which provides access to the chunk content and length.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadAsyncSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-async-session/
         */
        uploadAsyncSession: async (folderId: number, sessionId: string, chunkNumber?: number, file?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('uploadAsyncSession', 'folderId', folderId)
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('uploadAsyncSession', 'sessionId', sessionId)

            const localVarPath = `/api/2.0/files/{folderId}/session/{sessionId}/upload`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)))
                .replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
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

            if (chunkNumber !== undefined) {
                localVarQueryParameter['ChunkNumber'] = chunkNumber;
            }


            if (file !== undefined) { 
                localVarFormParams.append('File', file as any);
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
         * This method allows continuing an interrupted or partially completed file upload session by uploading subsequent data chunks.  The server will validate each uploaded chunk, update the session state, and respond with the status of the current upload. Once  the total bytes uploaded match the total file size, the file upload process is finalized and related events are triggered.  If the file is newly uploaded, the server responds with a 201 Created status upon completion. If it overwrites an existing file,  versioning information is updated accordingly. The method also triggers associated webhooks and socket notifications to reflect  the updated file state.
         * @summary Resumes an ongoing file upload session for uploading additional chunks of data.
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The upload session ID.
         * @param {File} [file] The file to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file content from the HTTP request form.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-session/
         */
        uploadSession: async (folderId: number, sessionId: string, file?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('uploadSession', 'folderId', folderId)
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('uploadSession', 'sessionId', sessionId)

            const localVarPath = `/api/2.0/files/{folderId}/session/{sessionId}`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)))
                .replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
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
    }
};

/**
 * OperationsApi - functional programming interface
 * @export
 */
export const OperationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OperationsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows users to cancel an ongoing upload session identified by the session ID.  Once the session is aborted, the associated resources will be cleaned up, and the session will no longer accept further uploads.
         * @summary Aborts an in-progress file upload session.
         * @param {string} sessionId The session ID.
         * @param {number} folderId The folder ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for abortUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/abort-upload-session/
         */
        async abortUploadSession(sessionId: string, folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.abortUploadSession(sessionId, folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.abortUploadSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds files and folders with the IDs specified in the request to the favorite list.
         * @summary Add favorite files and folders
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addFavorites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-favorites/
         */
        async addFavorites(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFavorites(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.addFavorites']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the download process of files and folders with the IDs specified in the request.
         * @summary Bulk download
         * @param {DownloadRequestDto} [downloadRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for bulkDownload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/bulk-download/
         */
        async bulkDownload(downloadRequestDto?: DownloadRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkDownload(downloadRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.bulkDownload']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks the conversion status of a file with the ID specified in the request.
         * @summary Get conversion status
         * @param {number} fileId The file ID to check conversion status.
         * @param {boolean} [start] Specifies whether a conversion operation is started or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConversionStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-conversion-status/
         */
        async checkConversionStatus(fileId: number, start?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConversationResultArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkConversionStatus(fileId, start, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.checkConversionStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
         * @summary Move or copy files to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         */
        async checkMoveOrCopyBatchItems(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkMoveOrCopyBatchItems(inDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.checkMoveOrCopyBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if files can be moved or copied to the specified folder.
         * @summary Check for moving or copying files to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         */
        async checkMoveOrCopyDestFolder(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckDestFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkMoveOrCopyDestFolder(inDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.checkMoveOrCopyDestFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Copy to the folder
         * @param {BatchRequestDto} [batchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-batch-items/
         */
        async copyBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copyBatchItems(batchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.copyBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.
         * @summary Chunked upload
         * @param {number} folderId The session folder ID.
         * @param {SessionRequest} sessionRequest The session parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         */
        async createUploadSession(folderId: number, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionResponseWrapperIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUploadSession(folderId, sessionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.createUploadSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * The session allows the user to upload a file in smaller chunks to the folder identified by its ID.  The file information, such as name, size, and additional metadata, must be provided in the request.  This method facilitates large file upload scenarios by enabling chunked file uploads.
         * @summary Creates a session for uploading a file to a specific folder in chunks.
         * @param {number} folderId The session folder ID.
         * @param {SessionRequest} sessionRequest The session parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createUploadSessionInFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session-in-folder/
         */
        async createUploadSessionInFolder(folderId: number, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionResponseIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUploadSessionInFolder(folderId, sessionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.createUploadSessionInFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the files and folders with the IDs specified in the request.
         * @summary Delete files and folders
         * @param {DeleteBatchRequestDto} [deleteBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-batch-items/
         */
        async deleteBatchItems(deleteBatchRequestDto?: DeleteBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBatchItems(deleteBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.deleteBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes files and folders with the IDs specified in the request from the favorite list. This method uses the body parameters.
         * @summary Delete favorite files and folders (using body parameters)
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFavoritesFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-favorites-from-body/
         */
        async deleteFavoritesFromBody(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFavoritesFromBody(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.deleteFavoritesFromBody']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the file versions with the IDs specified in the request.
         * @summary Delete file versions
         * @param {DeleteVersionBatchRequestDto} [deleteVersionBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFileVersions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-versions/
         */
        async deleteFileVersions(deleteVersionBatchRequestDto?: DeleteVersionBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFileVersions(deleteVersionBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.deleteFileVersions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Duplicates all the selected files and folders.
         * @summary Duplicate files and folders
         * @param {DuplicateRequestDto} [duplicateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for duplicateBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/duplicate-batch-items/
         */
        async duplicateBatchItems(duplicateRequestDto?: DuplicateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.duplicateBatchItems(duplicateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.duplicateBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes all the files and folders from the Trash folder. If the folder types are specified, only the items originally located in the sections of these types are deleted.
         * @summary Empty the Trash folder
         * @param {boolean} [single] Specifies whether to return only the current operation
         * @param {Array<EmptyTrashFolderTypeEnum>} [folderType] The parent folder types used to empty the trash only from the items originally located in the sections of the specified types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for emptyTrash operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/
         */
        async emptyTrash(single?: boolean, folderType?: Array<EmptyTrashFolderTypeEnum>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.emptyTrash(single, folderType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.emptyTrash']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Finalizes the upload session by processing the uploaded file chunks and marking the upload as complete.  This method consolidates chunked uploads into a complete file if required, sends notifications about the upload event,  and performs any additional cleanup or related actions, such as socket updates and webhook publishing.
         * @summary Finalize an upload session
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The session ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for finalizeSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finalize-session/
         */
        async finalizeSession(folderId: number, sessionId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadSessionResponseIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.finalizeSession(folderId, sessionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.finalizeSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the active file operations.
         * @summary Get active file operations
         * @param {string} [id] The ID of the file operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getOperationStatuses operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses/
         */
        async getOperationStatuses(id?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOperationStatuses(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.getOperationStatuses']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the statuses of operations filtered by the specified operation type.
         * @summary Get file operation statuses
         * @param {FileOperationType} operationType Specifies the type of file operation to be retrieved.
         * @param {string} [id] The ID of the file operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getOperationStatusesByType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses-by-type/
         */
        async getOperationStatusesByType(operationType: FileOperationType, id?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOperationStatusesByType(operationType, id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.getOperationStatusesByType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Marks the files and folders with the IDs specified in the request as read.
         * @summary Mark as read
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for markAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-as-read/
         */
        async markAsRead(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markAsRead(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.markAsRead']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Move or copy to a folder
         * @param {BatchRequestDto} [batchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for moveBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-batch-items/
         */
        async moveBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moveBatchItems(batchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.moveBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts a conversion operation of a file with the ID specified in the request.
         * @summary Start file conversion
         * @param {number} fileId The file ID to start conversion proccess.
         * @param {CheckConversionRequestDtoInteger} [checkConversionRequestDtoInteger] The parameters for checking file conversion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFileConversion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/
         */
        async startFileConversion(fileId: number, checkConversionRequestDtoInteger?: CheckConversionRequestDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConversationResultArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startFileConversion(fileId, checkConversionRequestDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.startFileConversion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Finishes an operation with the ID specified in the request or all the active operations.
         * @summary Finish active operations
         * @param {string} id The operation unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateTasks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tasks/
         */
        async terminateTasks(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateTasks(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.terminateTasks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a comment in a file with the ID specified in the request.
         * @summary Update a comment
         * @param {number} fileId The file ID where the comment is located.
         * @param {UpdateComment} updateComment The parameters for updating a comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         */
        async updateFileComment(fileId: number, updateComment: UpdateComment, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFileComment(fileId, updateComment, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.updateFileComment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This method allows the caller to upload a specific chunk of a file to an ongoing upload session.  The session is identified by the session ID provided in the request. The chunk can be of any size  within the limits allowed during the session initialization. Each chunk must be uploaded in the  correct order for the server to process it appropriately.  The server updates the upload session status and stores the progress information after processing  each chunk. The updated session details are returned in the response.
         * @summary Handles the upload of a chunk for an existing upload session.
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The upload session ID.
         * @param {number} [chunkNumber] The chunk number.
         * @param {File} [file] The file chunk to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file chunk content from the HTTP request form for chunked upload operations.  The file chunk is accessed via the IFormFile interface which provides access to the chunk content and length.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadAsyncSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-async-session/
         */
        async uploadAsyncSession(folderId: number, sessionId: string, chunkNumber?: number, file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionResponseIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadAsyncSession(folderId, sessionId, chunkNumber, file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.uploadAsyncSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This method allows continuing an interrupted or partially completed file upload session by uploading subsequent data chunks.  The server will validate each uploaded chunk, update the session state, and respond with the status of the current upload. Once  the total bytes uploaded match the total file size, the file upload process is finalized and related events are triggered.  If the file is newly uploaded, the server responds with a 201 Created status upon completion. If it overwrites an existing file,  versioning information is updated accordingly. The method also triggers associated webhooks and socket notifications to reflect  the updated file state.
         * @summary Resumes an ongoing file upload session for uploading additional chunks of data.
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The upload session ID.
         * @param {File} [file] The file to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file content from the HTTP request form.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-session/
         */
        async uploadSession(folderId: number, sessionId: string, file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadSessionResponseIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadSession(folderId, sessionId, file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.uploadSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OperationsApi - factory interface
 * @export
 */
export const OperationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OperationsApiFp(configuration)
    return {
        /**
         * This method allows users to cancel an ongoing upload session identified by the session ID.  Once the session is aborted, the associated resources will be cleaned up, and the session will no longer accept further uploads.
         * @summary Aborts an in-progress file upload session.
         * @param {OperationsApiAbortUploadSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for abortUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/abort-upload-session/
         * @throws {RequiredError}
         */
        abortUploadSession(requestParameters: OperationsApiAbortUploadSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.abortUploadSession(requestParameters.sessionId, requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds files and folders with the IDs specified in the request to the favorite list.
         * @summary Add favorite files and folders
         * @param {OperationsApiAddFavoritesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addFavorites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-favorites/
         * @throws {RequiredError}
         */
        addFavorites(requestParameters: OperationsApiAddFavoritesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.addFavorites(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the download process of files and folders with the IDs specified in the request.
         * @summary Bulk download
         * @param {OperationsApiBulkDownloadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for bulkDownload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/bulk-download/
         * @throws {RequiredError}
         */
        bulkDownload(requestParameters: OperationsApiBulkDownloadRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.bulkDownload(requestParameters.downloadRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks the conversion status of a file with the ID specified in the request.
         * @summary Get conversion status
         * @param {OperationsApiCheckConversionStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkConversionStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-conversion-status/
         * @throws {RequiredError}
         */
        checkConversionStatus(requestParameters: OperationsApiCheckConversionStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConversationResultArrayWrapper> {
            return localVarFp.checkConversionStatus(requestParameters.fileId, requestParameters.start, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
         * @summary Move or copy files to a folder
         * @param {OperationsApiCheckMoveOrCopyBatchItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         * @throws {RequiredError}
         */
        checkMoveOrCopyBatchItems(requestParameters: OperationsApiCheckMoveOrCopyBatchItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.checkMoveOrCopyBatchItems(requestParameters.inDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if files can be moved or copied to the specified folder.
         * @summary Check for moving or copying files to a folder
         * @param {OperationsApiCheckMoveOrCopyDestFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         * @throws {RequiredError}
         */
        checkMoveOrCopyDestFolder(requestParameters: OperationsApiCheckMoveOrCopyDestFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CheckDestFolderWrapper> {
            return localVarFp.checkMoveOrCopyDestFolder(requestParameters.inDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Copy to the folder
         * @param {OperationsApiCopyBatchItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for copyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-batch-items/
         * @throws {RequiredError}
         */
        copyBatchItems(requestParameters: OperationsApiCopyBatchItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.copyBatchItems(requestParameters.batchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.
         * @summary Chunked upload
         * @param {OperationsApiCreateUploadSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         * @throws {RequiredError}
         */
        createUploadSession(requestParameters: OperationsApiCreateUploadSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResponseWrapperIntegerWrapper> {
            return localVarFp.createUploadSession(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * The session allows the user to upload a file in smaller chunks to the folder identified by its ID.  The file information, such as name, size, and additional metadata, must be provided in the request.  This method facilitates large file upload scenarios by enabling chunked file uploads.
         * @summary Creates a session for uploading a file to a specific folder in chunks.
         * @param {OperationsApiCreateUploadSessionInFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createUploadSessionInFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session-in-folder/
         * @throws {RequiredError}
         */
        createUploadSessionInFolder(requestParameters: OperationsApiCreateUploadSessionInFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResponseIntegerWrapper> {
            return localVarFp.createUploadSessionInFolder(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the files and folders with the IDs specified in the request.
         * @summary Delete files and folders
         * @param {OperationsApiDeleteBatchItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-batch-items/
         * @throws {RequiredError}
         */
        deleteBatchItems(requestParameters: OperationsApiDeleteBatchItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteBatchItems(requestParameters.deleteBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes files and folders with the IDs specified in the request from the favorite list. This method uses the body parameters.
         * @summary Delete favorite files and folders (using body parameters)
         * @param {OperationsApiDeleteFavoritesFromBodyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFavoritesFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-favorites-from-body/
         * @throws {RequiredError}
         */
        deleteFavoritesFromBody(requestParameters: OperationsApiDeleteFavoritesFromBodyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteFavoritesFromBody(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the file versions with the IDs specified in the request.
         * @summary Delete file versions
         * @param {OperationsApiDeleteFileVersionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFileVersions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-versions/
         * @throws {RequiredError}
         */
        deleteFileVersions(requestParameters: OperationsApiDeleteFileVersionsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.deleteFileVersions(requestParameters.deleteVersionBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Duplicates all the selected files and folders.
         * @summary Duplicate files and folders
         * @param {OperationsApiDuplicateBatchItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for duplicateBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/duplicate-batch-items/
         * @throws {RequiredError}
         */
        duplicateBatchItems(requestParameters: OperationsApiDuplicateBatchItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.duplicateBatchItems(requestParameters.duplicateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes all the files and folders from the Trash folder. If the folder types are specified, only the items originally located in the sections of these types are deleted.
         * @summary Empty the Trash folder
         * @param {OperationsApiEmptyTrashRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for emptyTrash operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/
         * @throws {RequiredError}
         */
        emptyTrash(requestParameters: OperationsApiEmptyTrashRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.emptyTrash(requestParameters.single, requestParameters.folderType, options).then((request) => request(axios, basePath));
        },
        /**
         * Finalizes the upload session by processing the uploaded file chunks and marking the upload as complete.  This method consolidates chunked uploads into a complete file if required, sends notifications about the upload event,  and performs any additional cleanup or related actions, such as socket updates and webhook publishing.
         * @summary Finalize an upload session
         * @param {OperationsApiFinalizeSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for finalizeSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finalize-session/
         * @throws {RequiredError}
         */
        finalizeSession(requestParameters: OperationsApiFinalizeSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseIntegerWrapper> {
            return localVarFp.finalizeSession(requestParameters.folderId, requestParameters.sessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the active file operations.
         * @summary Get active file operations
         * @param {OperationsApiGetOperationStatusesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getOperationStatuses operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses/
         * @throws {RequiredError}
         */
        getOperationStatuses(requestParameters: OperationsApiGetOperationStatusesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.getOperationStatuses(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the statuses of operations filtered by the specified operation type.
         * @summary Get file operation statuses
         * @param {OperationsApiGetOperationStatusesByTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getOperationStatusesByType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses-by-type/
         * @throws {RequiredError}
         */
        getOperationStatusesByType(requestParameters: OperationsApiGetOperationStatusesByTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.getOperationStatusesByType(requestParameters.operationType, requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Marks the files and folders with the IDs specified in the request as read.
         * @summary Mark as read
         * @param {OperationsApiMarkAsReadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for markAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-as-read/
         * @throws {RequiredError}
         */
        markAsRead(requestParameters: OperationsApiMarkAsReadRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.markAsRead(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Move or copy to a folder
         * @param {OperationsApiMoveBatchItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for moveBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-batch-items/
         * @throws {RequiredError}
         */
        moveBatchItems(requestParameters: OperationsApiMoveBatchItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.moveBatchItems(requestParameters.batchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts a conversion operation of a file with the ID specified in the request.
         * @summary Start file conversion
         * @param {OperationsApiStartFileConversionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startFileConversion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/
         * @throws {RequiredError}
         */
        startFileConversion(requestParameters: OperationsApiStartFileConversionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConversationResultArrayWrapper> {
            return localVarFp.startFileConversion(requestParameters.fileId, requestParameters.checkConversionRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes an operation with the ID specified in the request or all the active operations.
         * @summary Finish active operations
         * @param {OperationsApiTerminateTasksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateTasks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tasks/
         * @throws {RequiredError}
         */
        terminateTasks(requestParameters: OperationsApiTerminateTasksRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.terminateTasks(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a comment in a file with the ID specified in the request.
         * @summary Update a comment
         * @param {OperationsApiUpdateFileCommentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         * @throws {RequiredError}
         */
        updateFileComment(requestParameters: OperationsApiUpdateFileCommentRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.updateFileComment(requestParameters.fileId, requestParameters.updateComment, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows the caller to upload a specific chunk of a file to an ongoing upload session.  The session is identified by the session ID provided in the request. The chunk can be of any size  within the limits allowed during the session initialization. Each chunk must be uploaded in the  correct order for the server to process it appropriately.  The server updates the upload session status and stores the progress information after processing  each chunk. The updated session details are returned in the response.
         * @summary Handles the upload of a chunk for an existing upload session.
         * @param {OperationsApiUploadAsyncSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadAsyncSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-async-session/
         * @throws {RequiredError}
         */
        uploadAsyncSession(requestParameters: OperationsApiUploadAsyncSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResponseIntegerWrapper> {
            return localVarFp.uploadAsyncSession(requestParameters.folderId, requestParameters.sessionId, requestParameters.chunkNumber, requestParameters.file, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows continuing an interrupted or partially completed file upload session by uploading subsequent data chunks.  The server will validate each uploaded chunk, update the session state, and respond with the status of the current upload. Once  the total bytes uploaded match the total file size, the file upload process is finalized and related events are triggered.  If the file is newly uploaded, the server responds with a 201 Created status upon completion. If it overwrites an existing file,  versioning information is updated accordingly. The method also triggers associated webhooks and socket notifications to reflect  the updated file state.
         * @summary Resumes an ongoing file upload session for uploading additional chunks of data.
         * @param {OperationsApiUploadSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-session/
         * @throws {RequiredError}
         */
        uploadSession(requestParameters: OperationsApiUploadSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseIntegerWrapper> {
            return localVarFp.uploadSession(requestParameters.folderId, requestParameters.sessionId, requestParameters.file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for abortUploadSession operation in OperationsApi.
 * @export
 * @interface OperationsApiAbortUploadSessionRequest
 */
export interface OperationsApiAbortUploadSessionRequest {
    /**
     * The session ID.
     * @type {string}
     * @memberof OperationsApiAbortUploadSession
     */
    readonly sessionId: string

    /**
     * The folder ID.
     * @type {number}
     * @memberof OperationsApiAbortUploadSession
     */
    readonly folderId: number
}

/**
 * Request parameters for addFavorites operation in OperationsApi.
 * @export
 * @interface OperationsApiAddFavoritesRequest
 */
export interface OperationsApiAddFavoritesRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof OperationsApiAddFavorites
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for bulkDownload operation in OperationsApi.
 * @export
 * @interface OperationsApiBulkDownloadRequest
 */
export interface OperationsApiBulkDownloadRequest {
    /**
     * 
     * @type {DownloadRequestDto}
     * @memberof OperationsApiBulkDownload
     */
    readonly downloadRequestDto?: DownloadRequestDto
}

/**
 * Request parameters for checkConversionStatus operation in OperationsApi.
 * @export
 * @interface OperationsApiCheckConversionStatusRequest
 */
export interface OperationsApiCheckConversionStatusRequest {
    /**
     * The file ID to check conversion status.
     * @type {number}
     * @memberof OperationsApiCheckConversionStatus
     */
    readonly fileId: number

    /**
     * Specifies whether a conversion operation is started or not.
     * @type {boolean}
     * @memberof OperationsApiCheckConversionStatus
     */
    readonly start?: boolean
}

/**
 * Request parameters for checkMoveOrCopyBatchItems operation in OperationsApi.
 * @export
 * @interface OperationsApiCheckMoveOrCopyBatchItemsRequest
 */
export interface OperationsApiCheckMoveOrCopyBatchItemsRequest {
    /**
     * The request parameters for copying/moving files.
     * @type {BatchRequestDto}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly inDto?: BatchRequestDto
}

/**
 * Request parameters for checkMoveOrCopyDestFolder operation in OperationsApi.
 * @export
 * @interface OperationsApiCheckMoveOrCopyDestFolderRequest
 */
export interface OperationsApiCheckMoveOrCopyDestFolderRequest {
    /**
     * The request parameters for copying/moving files.
     * @type {BatchRequestDto}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly inDto?: BatchRequestDto
}

/**
 * Request parameters for copyBatchItems operation in OperationsApi.
 * @export
 * @interface OperationsApiCopyBatchItemsRequest
 */
export interface OperationsApiCopyBatchItemsRequest {
    /**
     * 
     * @type {BatchRequestDto}
     * @memberof OperationsApiCopyBatchItems
     */
    readonly batchRequestDto?: BatchRequestDto
}

/**
 * Request parameters for createUploadSession operation in OperationsApi.
 * @export
 * @interface OperationsApiCreateUploadSessionRequest
 */
export interface OperationsApiCreateUploadSessionRequest {
    /**
     * The session folder ID.
     * @type {number}
     * @memberof OperationsApiCreateUploadSession
     */
    readonly folderId: number

    /**
     * The session parameters.
     * @type {SessionRequest}
     * @memberof OperationsApiCreateUploadSession
     */
    readonly sessionRequest: SessionRequest
}

/**
 * Request parameters for createUploadSessionInFolder operation in OperationsApi.
 * @export
 * @interface OperationsApiCreateUploadSessionInFolderRequest
 */
export interface OperationsApiCreateUploadSessionInFolderRequest {
    /**
     * The session folder ID.
     * @type {number}
     * @memberof OperationsApiCreateUploadSessionInFolder
     */
    readonly folderId: number

    /**
     * The session parameters.
     * @type {SessionRequest}
     * @memberof OperationsApiCreateUploadSessionInFolder
     */
    readonly sessionRequest: SessionRequest
}

/**
 * Request parameters for deleteBatchItems operation in OperationsApi.
 * @export
 * @interface OperationsApiDeleteBatchItemsRequest
 */
export interface OperationsApiDeleteBatchItemsRequest {
    /**
     * 
     * @type {DeleteBatchRequestDto}
     * @memberof OperationsApiDeleteBatchItems
     */
    readonly deleteBatchRequestDto?: DeleteBatchRequestDto
}

/**
 * Request parameters for deleteFavoritesFromBody operation in OperationsApi.
 * @export
 * @interface OperationsApiDeleteFavoritesFromBodyRequest
 */
export interface OperationsApiDeleteFavoritesFromBodyRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof OperationsApiDeleteFavoritesFromBody
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for deleteFileVersions operation in OperationsApi.
 * @export
 * @interface OperationsApiDeleteFileVersionsRequest
 */
export interface OperationsApiDeleteFileVersionsRequest {
    /**
     * 
     * @type {DeleteVersionBatchRequestDto}
     * @memberof OperationsApiDeleteFileVersions
     */
    readonly deleteVersionBatchRequestDto?: DeleteVersionBatchRequestDto
}

/**
 * Request parameters for duplicateBatchItems operation in OperationsApi.
 * @export
 * @interface OperationsApiDuplicateBatchItemsRequest
 */
export interface OperationsApiDuplicateBatchItemsRequest {
    /**
     * 
     * @type {DuplicateRequestDto}
     * @memberof OperationsApiDuplicateBatchItems
     */
    readonly duplicateRequestDto?: DuplicateRequestDto
}

/**
 * Request parameters for emptyTrash operation in OperationsApi.
 * @export
 * @interface OperationsApiEmptyTrashRequest
 */
export interface OperationsApiEmptyTrashRequest {
    /**
     * Specifies whether to return only the current operation
     * @type {boolean}
     * @memberof OperationsApiEmptyTrash
     */
    readonly single?: boolean

    /**
     * The parent folder types used to empty the trash only from the items originally located in the sections of the specified types.
     * @type {Array<0 | 1 | 2 | 3 | 5 | 6 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 19 | 20 | 21 | 22 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36>}
     * @memberof OperationsApiEmptyTrash
     */
    readonly folderType?: Array<EmptyTrashFolderTypeEnum>
}

/**
 * Request parameters for finalizeSession operation in OperationsApi.
 * @export
 * @interface OperationsApiFinalizeSessionRequest
 */
export interface OperationsApiFinalizeSessionRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof OperationsApiFinalizeSession
     */
    readonly folderId: number

    /**
     * The session ID.
     * @type {string}
     * @memberof OperationsApiFinalizeSession
     */
    readonly sessionId: string
}

/**
 * Request parameters for getOperationStatuses operation in OperationsApi.
 * @export
 * @interface OperationsApiGetOperationStatusesRequest
 */
export interface OperationsApiGetOperationStatusesRequest {
    /**
     * The ID of the file operation.
     * @type {string}
     * @memberof OperationsApiGetOperationStatuses
     */
    readonly id?: string
}

/**
 * Request parameters for getOperationStatusesByType operation in OperationsApi.
 * @export
 * @interface OperationsApiGetOperationStatusesByTypeRequest
 */
export interface OperationsApiGetOperationStatusesByTypeRequest {
    /**
     * Specifies the type of file operation to be retrieved.
     * @type {FileOperationType}
     * @memberof OperationsApiGetOperationStatusesByType
     */
    readonly operationType: FileOperationType

    /**
     * The ID of the file operation.
     * @type {string}
     * @memberof OperationsApiGetOperationStatusesByType
     */
    readonly id?: string
}

/**
 * Request parameters for markAsRead operation in OperationsApi.
 * @export
 * @interface OperationsApiMarkAsReadRequest
 */
export interface OperationsApiMarkAsReadRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof OperationsApiMarkAsRead
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for moveBatchItems operation in OperationsApi.
 * @export
 * @interface OperationsApiMoveBatchItemsRequest
 */
export interface OperationsApiMoveBatchItemsRequest {
    /**
     * 
     * @type {BatchRequestDto}
     * @memberof OperationsApiMoveBatchItems
     */
    readonly batchRequestDto?: BatchRequestDto
}

/**
 * Request parameters for startFileConversion operation in OperationsApi.
 * @export
 * @interface OperationsApiStartFileConversionRequest
 */
export interface OperationsApiStartFileConversionRequest {
    /**
     * The file ID to start conversion proccess.
     * @type {number}
     * @memberof OperationsApiStartFileConversion
     */
    readonly fileId: number

    /**
     * The parameters for checking file conversion.
     * @type {CheckConversionRequestDtoInteger}
     * @memberof OperationsApiStartFileConversion
     */
    readonly checkConversionRequestDtoInteger?: CheckConversionRequestDtoInteger
}

/**
 * Request parameters for terminateTasks operation in OperationsApi.
 * @export
 * @interface OperationsApiTerminateTasksRequest
 */
export interface OperationsApiTerminateTasksRequest {
    /**
     * The operation unique identifier.
     * @type {string}
     * @memberof OperationsApiTerminateTasks
     */
    readonly id: string
}

/**
 * Request parameters for updateFileComment operation in OperationsApi.
 * @export
 * @interface OperationsApiUpdateFileCommentRequest
 */
export interface OperationsApiUpdateFileCommentRequest {
    /**
     * The file ID where the comment is located.
     * @type {number}
     * @memberof OperationsApiUpdateFileComment
     */
    readonly fileId: number

    /**
     * The parameters for updating a comment.
     * @type {UpdateComment}
     * @memberof OperationsApiUpdateFileComment
     */
    readonly updateComment: UpdateComment
}

/**
 * Request parameters for uploadAsyncSession operation in OperationsApi.
 * @export
 * @interface OperationsApiUploadAsyncSessionRequest
 */
export interface OperationsApiUploadAsyncSessionRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof OperationsApiUploadAsyncSession
     */
    readonly folderId: number

    /**
     * The upload session ID.
     * @type {string}
     * @memberof OperationsApiUploadAsyncSession
     */
    readonly sessionId: string

    /**
     * The chunk number.
     * @type {number}
     * @memberof OperationsApiUploadAsyncSession
     */
    readonly chunkNumber?: number

    /**
     * The file chunk to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file chunk content from the HTTP request form for chunked upload operations.  The file chunk is accessed via the IFormFile interface which provides access to the chunk content and length.
     * @type {File}
     * @memberof OperationsApiUploadAsyncSession
     */
    readonly file?: File
}

/**
 * Request parameters for uploadSession operation in OperationsApi.
 * @export
 * @interface OperationsApiUploadSessionRequest
 */
export interface OperationsApiUploadSessionRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof OperationsApiUploadSession
     */
    readonly folderId: number

    /**
     * The upload session ID.
     * @type {string}
     * @memberof OperationsApiUploadSession
     */
    readonly sessionId: string

    /**
     * The file to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file content from the HTTP request form.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
     * @type {File}
     * @memberof OperationsApiUploadSession
     */
    readonly file?: File
}

/**
 * OperationsApi - object-oriented interface
 * @export
 * @class OperationsApi
 * @extends {BaseAPI}
 */
export class OperationsApi extends BaseAPI {
    /**
     * This method allows users to cancel an ongoing upload session identified by the session ID.  Once the session is aborted, the associated resources will be cleaned up, and the session will no longer accept further uploads.
     * @summary Aborts an in-progress file upload session.
     * @param {FilesOperationsApiAbortUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public abortUploadSession(requestParameters: OperationsApiAbortUploadSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).abortUploadSession(requestParameters.sessionId, requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds files and folders with the IDs specified in the request to the favorite list.
     * @summary Add favorite files and folders
     * @param {FilesOperationsApiAddFavoritesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public addFavorites(requestParameters: OperationsApiAddFavoritesRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).addFavorites(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the download process of files and folders with the IDs specified in the request.
     * @summary Bulk download
     * @param {FilesOperationsApiBulkDownloadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public bulkDownload(requestParameters: OperationsApiBulkDownloadRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).bulkDownload(requestParameters.downloadRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks the conversion status of a file with the ID specified in the request.
     * @summary Get conversion status
     * @param {FilesOperationsApiCheckConversionStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkConversionStatus(requestParameters: OperationsApiCheckConversionStatusRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkConversionStatus(requestParameters.fileId, requestParameters.start, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
     * @summary Move or copy files to a folder
     * @param {FilesOperationsApiCheckMoveOrCopyBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkMoveOrCopyBatchItems(requestParameters: OperationsApiCheckMoveOrCopyBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkMoveOrCopyBatchItems(requestParameters.inDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if files can be moved or copied to the specified folder.
     * @summary Check for moving or copying files to a folder
     * @param {FilesOperationsApiCheckMoveOrCopyDestFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkMoveOrCopyDestFolder(requestParameters: OperationsApiCheckMoveOrCopyDestFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkMoveOrCopyDestFolder(requestParameters.inDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Copies all the selected files and folders to the folder with the ID specified in the request.
     * @summary Copy to the folder
     * @param {FilesOperationsApiCopyBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public copyBatchItems(requestParameters: OperationsApiCopyBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).copyBatchItems(requestParameters.batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.
     * @summary Chunked upload
     * @param {FilesOperationsApiCreateUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSession(requestParameters: OperationsApiCreateUploadSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).createUploadSession(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The session allows the user to upload a file in smaller chunks to the folder identified by its ID.  The file information, such as name, size, and additional metadata, must be provided in the request.  This method facilitates large file upload scenarios by enabling chunked file uploads.
     * @summary Creates a session for uploading a file to a specific folder in chunks.
     * @param {FilesOperationsApiCreateUploadSessionInFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSessionInFolder(requestParameters: OperationsApiCreateUploadSessionInFolderRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).createUploadSessionInFolder(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the files and folders with the IDs specified in the request.
     * @summary Delete files and folders
     * @param {FilesOperationsApiDeleteBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public deleteBatchItems(requestParameters: OperationsApiDeleteBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).deleteBatchItems(requestParameters.deleteBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes files and folders with the IDs specified in the request from the favorite list. This method uses the body parameters.
     * @summary Delete favorite files and folders (using body parameters)
     * @param {FilesOperationsApiDeleteFavoritesFromBodyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public deleteFavoritesFromBody(requestParameters: OperationsApiDeleteFavoritesFromBodyRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).deleteFavoritesFromBody(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the file versions with the IDs specified in the request.
     * @summary Delete file versions
     * @param {FilesOperationsApiDeleteFileVersionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public deleteFileVersions(requestParameters: OperationsApiDeleteFileVersionsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).deleteFileVersions(requestParameters.deleteVersionBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Duplicates all the selected files and folders.
     * @summary Duplicate files and folders
     * @param {FilesOperationsApiDuplicateBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public duplicateBatchItems(requestParameters: OperationsApiDuplicateBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).duplicateBatchItems(requestParameters.duplicateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes all the files and folders from the Trash folder. If the folder types are specified, only the items originally located in the sections of these types are deleted.
     * @summary Empty the Trash folder
     * @param {FilesOperationsApiEmptyTrashRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public emptyTrash(requestParameters: OperationsApiEmptyTrashRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).emptyTrash(requestParameters.single, requestParameters.folderType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finalizes the upload session by processing the uploaded file chunks and marking the upload as complete.  This method consolidates chunked uploads into a complete file if required, sends notifications about the upload event,  and performs any additional cleanup or related actions, such as socket updates and webhook publishing.
     * @summary Finalize an upload session
     * @param {FilesOperationsApiFinalizeSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public finalizeSession(requestParameters: OperationsApiFinalizeSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).finalizeSession(requestParameters.folderId, requestParameters.sessionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the active file operations.
     * @summary Get active file operations
     * @param {FilesOperationsApiGetOperationStatusesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public getOperationStatuses(requestParameters: OperationsApiGetOperationStatusesRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).getOperationStatuses(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the statuses of operations filtered by the specified operation type.
     * @summary Get file operation statuses
     * @param {FilesOperationsApiGetOperationStatusesByTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public getOperationStatusesByType(requestParameters: OperationsApiGetOperationStatusesByTypeRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).getOperationStatusesByType(requestParameters.operationType, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks the files and folders with the IDs specified in the request as read.
     * @summary Mark as read
     * @param {FilesOperationsApiMarkAsReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public markAsRead(requestParameters: OperationsApiMarkAsReadRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).markAsRead(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
     * @summary Move or copy to a folder
     * @param {FilesOperationsApiMoveBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public moveBatchItems(requestParameters: OperationsApiMoveBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).moveBatchItems(requestParameters.batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts a conversion operation of a file with the ID specified in the request.
     * @summary Start file conversion
     * @param {FilesOperationsApiStartFileConversionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public startFileConversion(requestParameters: OperationsApiStartFileConversionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).startFileConversion(requestParameters.fileId, requestParameters.checkConversionRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes an operation with the ID specified in the request or all the active operations.
     * @summary Finish active operations
     * @param {FilesOperationsApiTerminateTasksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public terminateTasks(requestParameters: OperationsApiTerminateTasksRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).terminateTasks(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a comment in a file with the ID specified in the request.
     * @summary Update a comment
     * @param {FilesOperationsApiUpdateFileCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public updateFileComment(requestParameters: OperationsApiUpdateFileCommentRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).updateFileComment(requestParameters.fileId, requestParameters.updateComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows the caller to upload a specific chunk of a file to an ongoing upload session.  The session is identified by the session ID provided in the request. The chunk can be of any size  within the limits allowed during the session initialization. Each chunk must be uploaded in the  correct order for the server to process it appropriately.  The server updates the upload session status and stores the progress information after processing  each chunk. The updated session details are returned in the response.
     * @summary Handles the upload of a chunk for an existing upload session.
     * @param {FilesOperationsApiUploadAsyncSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadAsyncSession(requestParameters: OperationsApiUploadAsyncSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).uploadAsyncSession(requestParameters.folderId, requestParameters.sessionId, requestParameters.chunkNumber, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows continuing an interrupted or partially completed file upload session by uploading subsequent data chunks.  The server will validate each uploaded chunk, update the session state, and respond with the status of the current upload. Once  the total bytes uploaded match the total file size, the file upload process is finalized and related events are triggered.  If the file is newly uploaded, the server responds with a 201 Created status upon completion. If it overwrites an existing file,  versioning information is updated accordingly. The method also triggers associated webhooks and socket notifications to reflect  the updated file state.
     * @summary Resumes an ongoing file upload session for uploading additional chunks of data.
     * @param {FilesOperationsApiUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadSession(requestParameters: OperationsApiUploadSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).uploadSession(requestParameters.folderId, requestParameters.sessionId, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const EmptyTrashFolderTypeEnum = {
    DEFAULT: 0,
    COMMON: 1,
    BUNCH: 2,
    TRASH: 3,
    USER: 5,
    SHARE: 6,
    Projects: 8,
    Favorites: 10,
    Recent: 11,
    Templates: 12,
    Privacy: 13,
    VirtualRooms: 14,
    FillingFormsRoom: 15,
    EditingRoom: 16,
    CustomRoom: 19,
    Archive: 20,
    ThirdpartyBackup: 21,
    PublicRoom: 22,
    ReadyFormFolder: 25,
    InProcessFormFolder: 26,
    FormFillingFolderDone: 27,
    FormFillingFolderInProgress: 28,
    VirtualDataRoom: 29,
    RoomTemplates: 30,
    AiRoom: 31,
    Knowledge: 32,
    ResultStorage: 33,
    AiAgents: 34,
    DefaultTemplates: 35,
    Forms: 36
} as const;
export type EmptyTrashFolderTypeEnum = typeof EmptyTrashFolderTypeEnum[keyof typeof EmptyTrashFolderTypeEnum];
