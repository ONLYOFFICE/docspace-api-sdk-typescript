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
import type { BaseBatchRequestDto } from '../../models';
// @ts-ignore
import type { BatchRequestDto } from '../../models';
// @ts-ignore
import type { CheckConversionRequestDtoInteger } from '../../models';
// @ts-ignore
import type { CheckDestFolderWrapper } from '../../models';
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
import type { FileEntryArrayWrapper } from '../../models';
// @ts-ignore
import type { FileOperationArrayWrapper } from '../../models';
// @ts-ignore
import type { FileOperationType } from '../../models';
// @ts-ignore
import type { FileOperationWrapper } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { SessionRequest } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UpdateComment } from '../../models';
/**
 * FilesOperationsApi - axios parameter creator
 * @export
 */
export const FilesOperationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
         * @summary Check and move or copy to a folder
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
         * @summary Check for moving or copying to a folder
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
         * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.   **Note**: Each chunk can have different length but the length should be multiple of <b>512</b> and greater or equal to <b>10 mb</b>. Last chunk can have any size.  After the initial response to the request with the <b>200 OK</b> status, you must get the <em>location</em> field value from the response. Send all your chunks to this location.  Each chunk must be sent in the exact order the chunks appear in the file.  After receiving each chunk, the server will respond with the current information about the upload session if no errors occurred.  When the number of bytes uploaded is equal to the number of bytes you sent in the initial request, the server responds with the <b>201 Created</b> status and sends you information about the uploaded file.  Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
         * @summary Chunked upload
         * @param {number} folderId The folder ID of the session.
         * @param {SessionRequest} [sessionRequest] The session parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         */
        createUploadSession: async (folderId: number, sessionRequest?: SessionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createUploadSession', 'folderId', folderId)
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
         * Deletes all the files and folders from the \"Trash\" folder.
         * @summary Empty the \"Trash\" folder
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
         * @param {string} id The operation ID of the request.
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
         * @param {UpdateComment} [updateComment] The parameters for updating a comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         */
        updateFileComment: async (fileId: number, updateComment?: UpdateComment, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateFileComment', 'fileId', fileId)
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
    }
};

/**
 * FilesOperationsApi - functional programming interface
 * @export
 */
export const FilesOperationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesOperationsApiAxiosParamCreator(configuration)
    return {
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.bulkDownload']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.checkConversionStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
         * @summary Check and move or copy to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         */
        async checkMoveOrCopyBatchItems(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkMoveOrCopyBatchItems(inDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.checkMoveOrCopyBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if files can be moved or copied to the specified folder.
         * @summary Check for moving or copying to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         */
        async checkMoveOrCopyDestFolder(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckDestFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkMoveOrCopyDestFolder(inDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.checkMoveOrCopyDestFolder']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.copyBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.   **Note**: Each chunk can have different length but the length should be multiple of <b>512</b> and greater or equal to <b>10 mb</b>. Last chunk can have any size.  After the initial response to the request with the <b>200 OK</b> status, you must get the <em>location</em> field value from the response. Send all your chunks to this location.  Each chunk must be sent in the exact order the chunks appear in the file.  After receiving each chunk, the server will respond with the current information about the upload session if no errors occurred.  When the number of bytes uploaded is equal to the number of bytes you sent in the initial request, the server responds with the <b>201 Created</b> status and sends you information about the uploaded file.  Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
         * @summary Chunked upload
         * @param {number} folderId The folder ID of the session.
         * @param {SessionRequest} [sessionRequest] The session parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         */
        async createUploadSession(folderId: number, sessionRequest?: SessionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUploadSession(folderId, sessionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.createUploadSession']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.deleteBatchItems']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.deleteFileVersions']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.duplicateBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes all the files and folders from the \"Trash\" folder.
         * @summary Empty the \"Trash\" folder
         * @param {boolean} [single] Specifies whether to return only the current operation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for emptyTrash operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/
         */
        async emptyTrash(single?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.emptyTrash(single, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.emptyTrash']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.getOperationStatuses']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.getOperationStatusesByType']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.markAsRead']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.moveBatchItems']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.startFileConversion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Finishes an operation with the ID specified in the request or all the active operations.
         * @summary Finish active operations
         * @param {string} id The operation ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateTasks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tasks/
         */
        async terminateTasks(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateTasks(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.terminateTasks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a comment in a file with the ID specified in the request.
         * @summary Update a comment
         * @param {number} fileId The file ID where the comment is located.
         * @param {UpdateComment} [updateComment] The parameters for updating a comment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         */
        async updateFileComment(fileId: number, updateComment?: UpdateComment, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFileComment(fileId, updateComment, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesOperationsApi.updateFileComment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesOperationsApi - factory interface
 * @export
 */
export const FilesOperationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesOperationsApiFp(configuration)
    return {
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
         * @summary Check and move or copy to a folder
         * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         * @throws {RequiredError}
         */
        checkMoveOrCopyBatchItems(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryArrayWrapper> {
            return localVarFp.checkMoveOrCopyBatchItems(inDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if files can be moved or copied to the specified folder.
         * @summary Check for moving or copying to a folder
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
         * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.   **Note**: Each chunk can have different length but the length should be multiple of <b>512</b> and greater or equal to <b>10 mb</b>. Last chunk can have any size.  After the initial response to the request with the <b>200 OK</b> status, you must get the <em>location</em> field value from the response. Send all your chunks to this location.  Each chunk must be sent in the exact order the chunks appear in the file.  After receiving each chunk, the server will respond with the current information about the upload session if no errors occurred.  When the number of bytes uploaded is equal to the number of bytes you sent in the initial request, the server responds with the <b>201 Created</b> status and sends you information about the uploaded file.  Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
         * @summary Chunked upload
         * @param {number} folderId The folder ID of the session.
         * @param {SessionRequest} [sessionRequest] The session parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         * @throws {RequiredError}
         */
        createUploadSession(folderId: number, sessionRequest?: SessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.createUploadSession(folderId, sessionRequest, options).then((request) => request(axios, basePath));
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
         * Deletes all the files and folders from the \"Trash\" folder.
         * @summary Empty the \"Trash\" folder
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
         * @param {string} id The operation ID of the request.
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
         * @param {UpdateComment} [updateComment] The parameters for updating a comment.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         * @throws {RequiredError}
         */
        updateFileComment(fileId: number, updateComment?: UpdateComment, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.updateFileComment(fileId, updateComment, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesOperationsApi - object-oriented interface
 * @export
 * @class FilesOperationsApi
 * @extends {BaseAPI}
 */
export class FilesOperationsApi extends BaseAPI {
    /**
     * Starts the download process of files and folders with the IDs specified in the request.
     * @summary Bulk download
     * @param {DownloadRequestDto} [downloadRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public bulkDownload(downloadRequestDto?: DownloadRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).bulkDownload(downloadRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks the conversion status of a file with the ID specified in the request.
     * @summary Get conversion status
     * @param {number} fileId The file ID to check conversion status.
     * @param {boolean} [start] Specifies whether a conversion operation is started or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public checkConversionStatus(fileId: number, start?: boolean, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).checkConversionStatus(fileId, start, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
     * @summary Check and move or copy to a folder
     * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public checkMoveOrCopyBatchItems(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).checkMoveOrCopyBatchItems(inDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if files can be moved or copied to the specified folder.
     * @summary Check for moving or copying to a folder
     * @param {BatchRequestDto} [inDto] The request parameters for copying/moving files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public checkMoveOrCopyDestFolder(inDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).checkMoveOrCopyDestFolder(inDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Copies all the selected files and folders to the folder with the ID specified in the request.
     * @summary Copy to the folder
     * @param {BatchRequestDto} [batchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public copyBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).copyBatchItems(batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.   **Note**: Each chunk can have different length but the length should be multiple of <b>512</b> and greater or equal to <b>10 mb</b>. Last chunk can have any size.  After the initial response to the request with the <b>200 OK</b> status, you must get the <em>location</em> field value from the response. Send all your chunks to this location.  Each chunk must be sent in the exact order the chunks appear in the file.  After receiving each chunk, the server will respond with the current information about the upload session if no errors occurred.  When the number of bytes uploaded is equal to the number of bytes you sent in the initial request, the server responds with the <b>201 Created</b> status and sends you information about the uploaded file.  Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
     * @summary Chunked upload
     * @param {number} folderId The folder ID of the session.
     * @param {SessionRequest} [sessionRequest] The session parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public createUploadSession(folderId: number, sessionRequest?: SessionRequest, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).createUploadSession(folderId, sessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the files and folders with the IDs specified in the request.
     * @summary Delete files and folders
     * @param {DeleteBatchRequestDto} [deleteBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public deleteBatchItems(deleteBatchRequestDto?: DeleteBatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).deleteBatchItems(deleteBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the file versions with the IDs specified in the request.
     * @summary Delete file versions
     * @param {DeleteVersionBatchRequestDto} [deleteVersionBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public deleteFileVersions(deleteVersionBatchRequestDto?: DeleteVersionBatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).deleteFileVersions(deleteVersionBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Duplicates all the selected files and folders.
     * @summary Duplicate files and folders
     * @param {DuplicateRequestDto} [duplicateRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public duplicateBatchItems(duplicateRequestDto?: DuplicateRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).duplicateBatchItems(duplicateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes all the files and folders from the \"Trash\" folder.
     * @summary Empty the \"Trash\" folder
     * @param {boolean} [single] Specifies whether to return only the current operation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public emptyTrash(single?: boolean, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).emptyTrash(single, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the active file operations.
     * @summary Get active file operations
     * @param {string} [id] The ID of the file operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public getOperationStatuses(id?: string, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).getOperationStatuses(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the statuses of operations filtered by the specified operation type.
     * @summary Get file operation statuses
     * @param {FileOperationType} operationType Specifies the type of file operation to be retrieved.
     * @param {string} [id] The ID of the file operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public getOperationStatusesByType(operationType: FileOperationType, id?: string, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).getOperationStatusesByType(operationType, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks the files and folders with the IDs specified in the request as read.
     * @summary Mark as read
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public markAsRead(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).markAsRead(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
     * @summary Move or copy to a folder
     * @param {BatchRequestDto} [batchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public moveBatchItems(batchRequestDto?: BatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).moveBatchItems(batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts a conversion operation of a file with the ID specified in the request.
     * @summary Start file conversion
     * @param {number} fileId The file ID to start conversion proccess.
     * @param {CheckConversionRequestDtoInteger} [checkConversionRequestDtoInteger] The parameters for checking file conversion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public startFileConversion(fileId: number, checkConversionRequestDtoInteger?: CheckConversionRequestDtoInteger, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).startFileConversion(fileId, checkConversionRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes an operation with the ID specified in the request or all the active operations.
     * @summary Finish active operations
     * @param {string} id The operation ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public terminateTasks(id: string, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).terminateTasks(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a comment in a file with the ID specified in the request.
     * @summary Update a comment
     * @param {number} fileId The file ID where the comment is located.
     * @param {UpdateComment} [updateComment] The parameters for updating a comment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesOperationsApi
     */
    public updateFileComment(fileId: number, updateComment?: UpdateComment, options?: RawAxiosRequestConfig) {
        return FilesOperationsApiFp(this.configuration).updateFileComment(fileId, updateComment, options).then((request) => request(this.axios, this.basePath));
    }
}

