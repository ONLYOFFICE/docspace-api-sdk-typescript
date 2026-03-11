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
         * Deletes all the files and folders from the Trash folder.
         * @summary Empty the Trash folder
         * @param {boolean} [single] Specifies whether to return only the current operation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for emptyTrash operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/
         */
        emptyTrash: async (single?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
         * Deletes all the files and folders from the Trash folder.
         * @summary Empty the Trash folder
         * @param {boolean} [single] Specifies whether to return only the current operation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for emptyTrash operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/
         */
        async emptyTrash(single?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.emptyTrash(single, options);
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
         * @param {string} sessionId The session ID.
         * @param {number} folderId The folder ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for abortUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/abort-upload-session/
         * @throws {RequiredError}
         */
        abortUploadSession(sessionId: string, folderId: number, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.abortUploadSession(sessionId, folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds files and folders with the IDs specified in the request to the favorite list.
         * @summary Add favorite files and folders
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for addFavorites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-favorites/
         * @throws {RequiredError}
         */
        addFavorites(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.addFavorites(baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the download process of files and folders with the IDs specified in the request.
         * @summary Bulk download
         * @param {DownloadRequestDto} [downloadRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for bulkDownload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/bulk-download/
         * @throws {RequiredError}
         */
        bulkDownload(downloadRequestDto?: DownloadRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.bulkDownload(downloadRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks the conversion status of a file with the ID specified in the request.
         * @summary Get conversion status
         * @param {number} fileId The file ID to check conversion status.
         * @param {boolean} [start] Specifies whether a conversion operation is started or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkConversionStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-conversion-status/
         * @throws {RequiredError}
         */
        checkConversionStatus(fileId: number, start?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<ConversationResultArrayWrapper> {
            return localVarFp.checkConversionStatus(fileId, start, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
         * @summary Move or copy files to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         * @throws {RequiredError}
         */
        checkMoveOrCopyBatchItems(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.checkMoveOrCopyBatchItems(inDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if files can be moved or copied to the specified folder.
         * @summary Check for moving or copying files to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         * @throws {RequiredError}
         */
        checkMoveOrCopyDestFolder(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<CheckDestFolderWrapper> {
            return localVarFp.checkMoveOrCopyDestFolder(inDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Copy to the folder
         * @param {BatchRequestDto} [batchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for copyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-batch-items/
         * @throws {RequiredError}
         */
        copyBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.copyBatchItems(batchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.
         * @summary Chunked upload
         * @param {number} folderId The session folder ID.
         * @param {SessionRequest} sessionRequest The session parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         * @throws {RequiredError}
         */
        createUploadSession(folderId: number, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResponseWrapperIntegerWrapper> {
            return localVarFp.createUploadSession(folderId, sessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * The session allows the user to upload a file in smaller chunks to the folder identified by its ID.  The file information, such as name, size, and additional metadata, must be provided in the request.  This method facilitates large file upload scenarios by enabling chunked file uploads.
         * @summary Creates a session for uploading a file to a specific folder in chunks.
         * @param {number} folderId The session folder ID.
         * @param {SessionRequest} sessionRequest The session parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createUploadSessionInFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session-in-folder/
         * @throws {RequiredError}
         */
        createUploadSessionInFolder(folderId: number, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResponseIntegerWrapper> {
            return localVarFp.createUploadSessionInFolder(folderId, sessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the files and folders with the IDs specified in the request.
         * @summary Delete files and folders
         * @param {DeleteBatchRequestDto} [deleteBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-batch-items/
         * @throws {RequiredError}
         */
        deleteBatchItems(deleteBatchRequestDto?: DeleteBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteBatchItems(deleteBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes files and folders with the IDs specified in the request from the favorite list. This method uses the body parameters.
         * @summary Delete favorite files and folders (using body parameters)
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFavoritesFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-favorites-from-body/
         * @throws {RequiredError}
         */
        deleteFavoritesFromBody(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteFavoritesFromBody(baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the file versions with the IDs specified in the request.
         * @summary Delete file versions
         * @param {DeleteVersionBatchRequestDto} [deleteVersionBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFileVersions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-versions/
         * @throws {RequiredError}
         */
        deleteFileVersions(deleteVersionBatchRequestDto?: DeleteVersionBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.deleteFileVersions(deleteVersionBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Duplicates all the selected files and folders.
         * @summary Duplicate files and folders
         * @param {DuplicateRequestDto} [duplicateRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for duplicateBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/duplicate-batch-items/
         * @throws {RequiredError}
         */
        duplicateBatchItems(duplicateRequestDto?: DuplicateRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.duplicateBatchItems(duplicateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes all the files and folders from the Trash folder.
         * @summary Empty the Trash folder
         * @param {boolean} [single] Specifies whether to return only the current operation
         * @param {*} [options] Override http request option.
         * REST API Reference for emptyTrash operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/
         * @throws {RequiredError}
         */
        emptyTrash(single?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.emptyTrash(single, options).then((request) => request(axios, basePath));
        },
        /**
         * Finalizes the upload session by processing the uploaded file chunks and marking the upload as complete.  This method consolidates chunked uploads into a complete file if required, sends notifications about the upload event,  and performs any additional cleanup or related actions, such as socket updates and webhook publishing.
         * @summary Finalize an upload session
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The session ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for finalizeSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finalize-session/
         * @throws {RequiredError}
         */
        finalizeSession(folderId: number, sessionId: string, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseIntegerWrapper> {
            return localVarFp.finalizeSession(folderId, sessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the active file operations.
         * @summary Get active file operations
         * @param {string} [id] The ID of the file operation.
         * @param {*} [options] Override http request option.
         * REST API Reference for getOperationStatuses operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses/
         * @throws {RequiredError}
         */
        getOperationStatuses(id?: string, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.getOperationStatuses(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the statuses of operations filtered by the specified operation type.
         * @summary Get file operation statuses
         * @param {FileOperationType} operationType Specifies the type of file operation to be retrieved.
         * @param {string} [id] The ID of the file operation.
         * @param {*} [options] Override http request option.
         * REST API Reference for getOperationStatusesByType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses-by-type/
         * @throws {RequiredError}
         */
        getOperationStatusesByType(operationType: FileOperationType, id?: string, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.getOperationStatusesByType(operationType, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Marks the files and folders with the IDs specified in the request as read.
         * @summary Mark as read
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for markAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-as-read/
         * @throws {RequiredError}
         */
        markAsRead(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.markAsRead(baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
         * @summary Move or copy to a folder
         * @param {BatchRequestDto} [batchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for moveBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-batch-items/
         * @throws {RequiredError}
         */
        moveBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.moveBatchItems(batchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts a conversion operation of a file with the ID specified in the request.
         * @summary Start file conversion
         * @param {number} fileId The file ID to start conversion proccess.
         * @param {CheckConversionRequestDtoInteger} [checkConversionRequestDtoInteger] The parameters for checking file conversion.
         * @param {*} [options] Override http request option.
         * REST API Reference for startFileConversion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/
         * @throws {RequiredError}
         */
        startFileConversion(fileId: number, checkConversionRequestDtoInteger?: CheckConversionRequestDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<ConversationResultArrayWrapper> {
            return localVarFp.startFileConversion(fileId, checkConversionRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes an operation with the ID specified in the request or all the active operations.
         * @summary Finish active operations
         * @param {string} id The operation unique identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateTasks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tasks/
         * @throws {RequiredError}
         */
        terminateTasks(id: string, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.terminateTasks(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a comment in a file with the ID specified in the request.
         * @summary Update a comment
         * @param {number} fileId The file ID where the comment is located.
         * @param {UpdateComment} updateComment The parameters for updating a comment.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         * @throws {RequiredError}
         */
        updateFileComment(fileId: number, updateComment: UpdateComment, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.updateFileComment(fileId, updateComment, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows the caller to upload a specific chunk of a file to an ongoing upload session.  The session is identified by the session ID provided in the request. The chunk can be of any size  within the limits allowed during the session initialization. Each chunk must be uploaded in the  correct order for the server to process it appropriately.  The server updates the upload session status and stores the progress information after processing  each chunk. The updated session details are returned in the response.
         * @summary Handles the upload of a chunk for an existing upload session.
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The upload session ID.
         * @param {number} [chunkNumber] The chunk number.
         * @param {File} [file] The file chunk to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file chunk content from the HTTP request form for chunked upload operations.  The file chunk is accessed via the IFormFile interface which provides access to the chunk content and length.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadAsyncSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-async-session/
         * @throws {RequiredError}
         */
        uploadAsyncSession(folderId: number, sessionId: string, chunkNumber?: number, file?: File, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResponseIntegerWrapper> {
            return localVarFp.uploadAsyncSession(folderId, sessionId, chunkNumber, file, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows continuing an interrupted or partially completed file upload session by uploading subsequent data chunks.  The server will validate each uploaded chunk, update the session state, and respond with the status of the current upload. Once  the total bytes uploaded match the total file size, the file upload process is finalized and related events are triggered.  If the file is newly uploaded, the server responds with a 201 Created status upon completion. If it overwrites an existing file,  versioning information is updated accordingly. The method also triggers associated webhooks and socket notifications to reflect  the updated file state.
         * @summary Resumes an ongoing file upload session for uploading additional chunks of data.
         * @param {number} folderId The folder ID.
         * @param {string} sessionId The upload session ID.
         * @param {File} [file] The file to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file content from the HTTP request form.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-session/
         * @throws {RequiredError}
         */
        uploadSession(folderId: number, sessionId: string, file?: File, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseIntegerWrapper> {
            return localVarFp.uploadSession(folderId, sessionId, file, options).then((request) => request(axios, basePath));
        },
    };
};

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
     * @param {string} sessionId The session ID.
     * @param {number} folderId The folder ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public abortUploadSession(sessionId: string, folderId: number, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).abortUploadSession(sessionId, folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds files and folders with the IDs specified in the request to the favorite list.
     * @summary Add favorite files and folders
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public addFavorites(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).addFavorites(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the download process of files and folders with the IDs specified in the request.
     * @summary Bulk download
     * @param {DownloadRequestDto} [downloadRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public bulkDownload(downloadRequestDto?: DownloadRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).bulkDownload(downloadRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks the conversion status of a file with the ID specified in the request.
     * @summary Get conversion status
     * @param {number} fileId The file ID to check conversion status.
     * @param {boolean} [start] Specifies whether a conversion operation is started or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkConversionStatus(fileId: number, start?: boolean, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkConversionStatus(fileId, start, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
     * @summary Move or copy files to a folder
     * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkMoveOrCopyBatchItems(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkMoveOrCopyBatchItems(inDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if files can be moved or copied to the specified folder.
     * @summary Check for moving or copying files to a folder
     * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkMoveOrCopyDestFolder(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkMoveOrCopyDestFolder(inDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Copies all the selected files and folders to the folder with the ID specified in the request.
     * @summary Copy to the folder
     * @param {BatchRequestDto} [batchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public copyBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).copyBatchItems(batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.
     * @summary Chunked upload
     * @param {number} folderId The session folder ID.
     * @param {SessionRequest} sessionRequest The session parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSession(folderId: number, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).createUploadSession(folderId, sessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The session allows the user to upload a file in smaller chunks to the folder identified by its ID.  The file information, such as name, size, and additional metadata, must be provided in the request.  This method facilitates large file upload scenarios by enabling chunked file uploads.
     * @summary Creates a session for uploading a file to a specific folder in chunks.
     * @param {number} folderId The session folder ID.
     * @param {SessionRequest} sessionRequest The session parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSessionInFolder(folderId: number, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).createUploadSessionInFolder(folderId, sessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the files and folders with the IDs specified in the request.
     * @summary Delete files and folders
     * @param {DeleteBatchRequestDto} [deleteBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public deleteBatchItems(deleteBatchRequestDto?: DeleteBatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).deleteBatchItems(deleteBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes files and folders with the IDs specified in the request from the favorite list. This method uses the body parameters.
     * @summary Delete favorite files and folders (using body parameters)
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public deleteFavoritesFromBody(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).deleteFavoritesFromBody(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the file versions with the IDs specified in the request.
     * @summary Delete file versions
     * @param {DeleteVersionBatchRequestDto} [deleteVersionBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public deleteFileVersions(deleteVersionBatchRequestDto?: DeleteVersionBatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).deleteFileVersions(deleteVersionBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Duplicates all the selected files and folders.
     * @summary Duplicate files and folders
     * @param {DuplicateRequestDto} [duplicateRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public duplicateBatchItems(duplicateRequestDto?: DuplicateRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).duplicateBatchItems(duplicateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes all the files and folders from the Trash folder.
     * @summary Empty the Trash folder
     * @param {boolean} [single] Specifies whether to return only the current operation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public emptyTrash(single?: boolean, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).emptyTrash(single, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finalizes the upload session by processing the uploaded file chunks and marking the upload as complete.  This method consolidates chunked uploads into a complete file if required, sends notifications about the upload event,  and performs any additional cleanup or related actions, such as socket updates and webhook publishing.
     * @summary Finalize an upload session
     * @param {number} folderId The folder ID.
     * @param {string} sessionId The session ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public finalizeSession(folderId: number, sessionId: string, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).finalizeSession(folderId, sessionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the active file operations.
     * @summary Get active file operations
     * @param {string} [id] The ID of the file operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public getOperationStatuses(id?: string, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).getOperationStatuses(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the statuses of operations filtered by the specified operation type.
     * @summary Get file operation statuses
     * @param {FileOperationType} operationType Specifies the type of file operation to be retrieved.
     * @param {string} [id] The ID of the file operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public getOperationStatusesByType(operationType: FileOperationType, id?: string, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).getOperationStatusesByType(operationType, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks the files and folders with the IDs specified in the request as read.
     * @summary Mark as read
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public markAsRead(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).markAsRead(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
     * @summary Move or copy to a folder
     * @param {BatchRequestDto} [batchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public moveBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).moveBatchItems(batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts a conversion operation of a file with the ID specified in the request.
     * @summary Start file conversion
     * @param {number} fileId The file ID to start conversion proccess.
     * @param {CheckConversionRequestDtoInteger} [checkConversionRequestDtoInteger] The parameters for checking file conversion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public startFileConversion(fileId: number, checkConversionRequestDtoInteger?: CheckConversionRequestDtoInteger, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).startFileConversion(fileId, checkConversionRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes an operation with the ID specified in the request or all the active operations.
     * @summary Finish active operations
     * @param {string} id The operation unique identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public terminateTasks(id: string, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).terminateTasks(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a comment in a file with the ID specified in the request.
     * @summary Update a comment
     * @param {number} fileId The file ID where the comment is located.
     * @param {UpdateComment} updateComment The parameters for updating a comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public updateFileComment(fileId: number, updateComment: UpdateComment, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).updateFileComment(fileId, updateComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows the caller to upload a specific chunk of a file to an ongoing upload session.  The session is identified by the session ID provided in the request. The chunk can be of any size  within the limits allowed during the session initialization. Each chunk must be uploaded in the  correct order for the server to process it appropriately.  The server updates the upload session status and stores the progress information after processing  each chunk. The updated session details are returned in the response.
     * @summary Handles the upload of a chunk for an existing upload session.
     * @param {number} folderId The folder ID.
     * @param {string} sessionId The upload session ID.
     * @param {number} [chunkNumber] The chunk number.
     * @param {File} [file] The file chunk to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file chunk content from the HTTP request form for chunked upload operations.  The file chunk is accessed via the IFormFile interface which provides access to the chunk content and length.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadAsyncSession(folderId: number, sessionId: string, chunkNumber?: number, file?: File, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).uploadAsyncSession(folderId, sessionId, chunkNumber, file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows continuing an interrupted or partially completed file upload session by uploading subsequent data chunks.  The server will validate each uploaded chunk, update the session state, and respond with the status of the current upload. Once  the total bytes uploaded match the total file size, the file upload process is finalized and related events are triggered.  If the file is newly uploaded, the server responds with a 201 Created status upon completion. If it overwrites an existing file,  versioning information is updated accordingly. The method also triggers associated webhooks and socket notifications to reflect  the updated file state.
     * @summary Resumes an ongoing file upload session for uploading additional chunks of data.
     * @param {number} folderId The folder ID.
     * @param {string} sessionId The upload session ID.
     * @param {File} [file] The file to be uploaded as part of the multipart/form-data request.  This property represents the uploaded file content from the HTTP request form.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadSession(folderId: number, sessionId: string, file?: File, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).uploadSession(folderId, sessionId, file, options).then((request) => request(this.axios, this.basePath));
    }
}

