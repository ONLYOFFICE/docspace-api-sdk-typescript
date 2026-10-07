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
import type { CheckConversionRequestDto } from '../../models';
// @ts-ignore
import type { CheckDestFolderWrapper } from '../../models';
// @ts-ignore
import type { CheckMoveOrCopyBatchItemsDestFolderIdParameter } from '../../models';
// @ts-ignore
import type { CheckMoveOrCopyBatchItemsFolderIdsParameterInner } from '../../models';
// @ts-ignore
import type { ChunkedUploadSessionResultWrapper } from '../../models';
// @ts-ignore
import type { ChunkedUploadSessionWrapper } from '../../models';
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
import type { FileConflictResolveType } from '../../models';
// @ts-ignore
import type { FileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { FileOperationArrayWrapper } from '../../models';
// @ts-ignore
import type { FileOperationType } from '../../models';
// @ts-ignore
import type { SessionRequest } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyCheckConversionRequestDto } from '../../models';
// @ts-ignore
import type { ThirdPartyChunkedUploadSessionResultWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyChunkedUploadSessionWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyUploadSessionResponseWrapper } from '../../models';
// @ts-ignore
import type { UpdateCommentRequest } from '../../models';
// @ts-ignore
import type { UploadSessionResponseWrapper } from '../../models';
/**
 * OperationsApi - axios parameter creator
 * @export
 */
export const OperationsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Cancels a chunked upload opened with `POST api/2.0/files/{folderId}/session` and discards the parts already  received, so nothing of it reaches the folder. The session is found by the id in the path alone: the folder  segment is not matched against it, and neither is the account that opened it, which makes the id the only  secret protecting the transfer. The call is destructive and is not safe to repeat, because the record is gone  afterwards: a second attempt, a session already closed by  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize` and a session that expired after twelve hours of  silence all fail rather than answer as missing. Finalizing removes the session too, so there is nothing left  to abort once the file exists. The answer carries no body. An upload that is simply abandoned needs no call at  all, since the session and its buffered parts are dropped when it expires.
         * @summary Abort an upload session
         * @param {string} sessionId The session to cancel, as returned in `id` when it was created: a 32-character hexadecimal string that  identifies the session on its own.
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for abortUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/abort-upload-session/
         */
        abortUploadSession: async (sessionId: string, folderId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Marks the listed files and folders as favorites for the calling account. The favorite list is personal:  nothing changes for other members, and the entries stay where they are stored. Read access to each item is  enough, so a room member with view-only rights and a guest may call it. Items the caller cannot read, ids that  do not exist and encrypted files of a private room are skipped without a word, and the answer is `true` even  when nothing was marked, so read the outcome back from `GET api/2.0/files/@favorites` instead of trusting it.  Numeric ids address entries stored in the portal itself, string ids entries on a connected third-party  account, and both kinds may be sent in one request. The call is mutating but safe to repeat: an item already  marked stays listed once. An entry moved to the Trash keeps its mark and is left out of the listing until it  is restored. `returnSingleOperation` arrives with the shared body and does nothing here. Use  `DELETE api/2.0/files/favorites` to undo, or `GET api/2.0/files/favorites/{fileId}` for a single file.
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
         * Queues a background job that packs the requested files and folders into a single archive, and answers with the  caller\'s download operations, including the one just started. The archive is not ready when the response  arrives: poll `GET api/2.0/files/fileops` until the operation reports `finished`, then take the address of the  archive from its `url`. Items listed in `fileConvertIds` are converted to the format named there before they  are packed, while the items of `fileIds` are packed as they are. Read access to every listed item is required:  an item the caller may not read fails the whole call with 403, and an id that resolves to nothing is answered  as missing, so filter the selection beforehand. Only one download at a time is allowed per caller, and a  second call made while the first is still running is refused with 403 as well. An empty selection queues  nothing and simply answers with the operations that are already there. An anonymous caller may use the call  for the items covered by the external link they hold.
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
            localVarRequestOptions.data = serializeDataIfNeeded(downloadRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports how far the conversion of a file has got, as a list that holds one entry while the portal still knows  about that conversion and nothing once it is over. Read `progress`, which counts from 0 to 100, `error` for  the reason a conversion failed, and `file`, which carries the converted file as soon as it exists. Queue the  conversion with `PUT api/2.0/files/file/{fileId}/checkconversion` and poll this operation until the entry  reaches 100 or disappears: a finished entry is handed out once and then dropped, and an entry whose conversion  stopped is discarded a few minutes later, so an empty list means either already reported or never started  rather than an error. The same empty list is the answer for an identifier no file matches. Passing  `start=true` starts the conversion as well, with the format from the portal settings and no password, which  makes that one flag mutating; without it the operation is read-only. The caller needs read access to the file,  and anyone else is refused.
         * @summary Get conversion status
         * @param {number | string} fileId The file whose conversion is asked about.
         * @param {boolean} [start] Whether to start the conversion as well: `true` queues it with the default output format and no password,  `false` only reports what the portal already knows.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConversionStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-conversion-status/
         */
        checkConversionStatus: async (fileId: number | string, start?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Reports which of the requested files and folders already have a same-named entry in `destFolderId`, so that  the clash can be settled before the move or the copy is started. Nothing is moved, copied or changed by the  call, although the address is shared with `PUT api/2.0/files/fileops/move`: the answer is the part of the  request that clashes, and an empty array means the batch would go through without one. The  `conflictResolveType` of the request is not taken into account — clashing items are reported whatever it says  — and encrypted files are left out of the report. A source id that resolves to nothing is not an error and is  passed over. The caller needs create access to the destination: an archived room and a room the caller cannot  write to are refused with 403, a destination that does not exist is answered as missing, and a request without  `destFolderId` is rejected as an invalid request. To learn whether the destination accepts the files at all  use `GET api/2.0/files/fileops/checkdestfolder`.
         * @summary Check move or copy conflicts
         * @param {boolean} [returnSingleOperation] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [folderIds] The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string  addresses a folder on a connected third-party account, and both kinds may be sent in one list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [fileIds] The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a  file on a connected third-party account, and both kinds may be sent in one list.
         * @param {CheckMoveOrCopyBatchItemsDestFolderIdParameter} [destFolderId] The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder  on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the  caller has to be allowed to create items in it, and the id of a room addresses the root of that room.
         * @param {FileConflictResolveType} [conflictResolveType] What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is,  `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name  with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash.
         * @param {boolean} [deleteAfter] Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It deletes nothing: a move takes the sources away in any case, and a copy always leaves them.
         * @param {boolean} [content] What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it  contains, so its files and subfolders land in the destination and the folder is not recreated there.
         * @param {boolean} [toFillOut] Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling  status in a virtual data room. Files that are not forms are left unaffected.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         */
        checkMoveOrCopyBatchItems: async (returnSingleOperation?: boolean, folderIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, fileIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, destFolderId?: CheckMoveOrCopyBatchItemsDestFolderIdParameter, conflictResolveType?: FileConflictResolveType, deleteAfter?: boolean, content?: boolean, toFillOut?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (returnSingleOperation !== undefined) {
                localVarQueryParameter['returnSingleOperation'] = returnSingleOperation;
            }

            if (folderIds) {
                localVarQueryParameter['folderIds'] = folderIds;
            }

            if (fileIds) {
                localVarQueryParameter['fileIds'] = fileIds;
            }

            if (destFolderId !== undefined) {
                for (const [key, value] of Object.entries(destFolderId)) {
                    localVarQueryParameter[key] = value;
                }
            }

            if (conflictResolveType !== undefined) {
                localVarQueryParameter['conflictResolveType'] = conflictResolveType;
            }

            if (deleteAfter !== undefined) {
                localVarQueryParameter['deleteAfter'] = deleteAfter;
            }

            if (content !== undefined) {
                localVarQueryParameter['content'] = content;
            }

            if (toFillOut !== undefined) {
                localVarQueryParameter['toFillOut'] = toFillOut;
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
         * Reports whether the destination folder accepts the listed files, before a move or a copy is started. Only  `fileIds` and `destFolderId` are read from the request: `result` says whether all of the files are accepted,  only some of them or none, and `files` names the ones that are. The check is about what the destination allows  to be stored in it rather than about name clashes — everywhere except a form-filling room every file is  accepted, while a form-filling room accepts only PDF forms, so a text document offered to one comes back as  none accepted. The caller needs create access to the destination, so a room the caller cannot write to and an  archived room are refused with 403, a destination that does not exist is answered as missing, and a request  without `destFolderId` is rejected as an invalid request. Folder ids and the copying options of the request  play no part here. The call changes nothing; for same-named entries at the destination use  `GET api/2.0/files/fileops/move`.
         * @summary Check the destination folder
         * @param {boolean} [returnSingleOperation] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [folderIds] The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string  addresses a folder on a connected third-party account, and both kinds may be sent in one list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [fileIds] The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a  file on a connected third-party account, and both kinds may be sent in one list.
         * @param {CheckMoveOrCopyBatchItemsDestFolderIdParameter} [destFolderId] The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder  on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the  caller has to be allowed to create items in it, and the id of a room addresses the root of that room.
         * @param {FileConflictResolveType} [conflictResolveType] What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is,  `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name  with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash.
         * @param {boolean} [deleteAfter] Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It deletes nothing: a move takes the sources away in any case, and a copy always leaves them.
         * @param {boolean} [content] What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it  contains, so its files and subfolders land in the destination and the folder is not recreated there.
         * @param {boolean} [toFillOut] Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling  status in a virtual data room. Files that are not forms are left unaffected.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         */
        checkMoveOrCopyDestFolder: async (returnSingleOperation?: boolean, folderIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, fileIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, destFolderId?: CheckMoveOrCopyBatchItemsDestFolderIdParameter, conflictResolveType?: FileConflictResolveType, deleteAfter?: boolean, content?: boolean, toFillOut?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (returnSingleOperation !== undefined) {
                localVarQueryParameter['returnSingleOperation'] = returnSingleOperation;
            }

            if (folderIds) {
                localVarQueryParameter['folderIds'] = folderIds;
            }

            if (fileIds) {
                localVarQueryParameter['fileIds'] = fileIds;
            }

            if (destFolderId !== undefined) {
                for (const [key, value] of Object.entries(destFolderId)) {
                    localVarQueryParameter[key] = value;
                }
            }

            if (conflictResolveType !== undefined) {
                localVarQueryParameter['conflictResolveType'] = conflictResolveType;
            }

            if (deleteAfter !== undefined) {
                localVarQueryParameter['deleteAfter'] = deleteAfter;
            }

            if (content !== undefined) {
                localVarQueryParameter['content'] = content;
            }

            if (toFillOut !== undefined) {
                localVarQueryParameter['toFillOut'] = toFillOut;
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
         * Queues a background job that copies the requested files and folders into `destFolderId`, leaving the originals  where they are, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`; its `files` and `folders` then name what  was produced. Before starting, `GET api/2.0/files/fileops/move` reports which items already have a same-named  entry at the destination and `conflictResolveType` decides what happens to them, while  `GET api/2.0/files/fileops/checkdestfolder` reports whether the destination accepts the files at all. The  caller needs create access to the destination — room manager or content-creator rights inside a room — and  read access to every source item; anything less is refused with 403. With `content=true` each listed folder is  replaced by its own files and subfolders, so the folder itself is not recreated at the destination. An empty  selection queues nothing and answers with the operations that are already there. To remove the originals  instead use `PUT api/2.0/files/fileops/move`.
         * @summary Copy files and folders
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
         * Deprecated in favour of `POST api/2.0/files/{folderId}/session`, which opens the same session and returns it  without the success envelope used here; new callers should go there. Reserves a chunked upload of a file in  the folder named by the path: the title comes from `fileName`, the declared payload size from `fileSize`, and  the answer carries the session id every later call quotes, the address of the standalone chunk handler, the  moment an idle session is dropped and the reserved byte count. No content is stored yet. Send the payload as  multipart parts to `POST api/2.0/files/{folderId}/session/{sessionId}/upload`, keeping each part within  `chunkUploadSize` from `GET api/2.0/files/settings`, then close the session with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller needs the right to add content to the  target folder, which room managers and content creators have and readers, editors and guests do not: they get  403, as does a section root such as Rooms or Archive, while an unknown folder is answered as missing. A  payload above the portal limit for chunked uploads is refused before the session exists.
         * @summary Chunked upload
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {SessionRequest} sessionRequest The file the session is opened for, and how a clash with an existing name is settled.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         */
        createUploadSession: async (folderId: number | string, sessionRequest: SessionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Opens a chunked upload session for a file in the folder named by the path and returns the session itself,  which is the difference from the deprecated `POST api/2.0/files/{folderId}/upload/create_session` and its  success envelope. The answer gives `id`, quoted by every later call, `location` for the standalone chunk  handler used by clients that bypass this API, `expired`, and `bytes_total` echoing the reserved size. Whether  parts are really needed follows from `fileSize`: below `chunkUploadSize` from `GET api/2.0/files/settings` the  whole payload goes in one `POST api/2.0/files/{folderId}/session/{sessionId}`, which stores the file and  answers 201, and above it the parts go one by one to  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the file appears only after  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller must be allowed to add content to the  folder, so readers, editors and guests are refused, a section root is refused as well, and an unknown folder  is answered as missing. Nothing is written until the parts arrive, and an abandoned session disappears twelve  hours later.
         * @summary Create an upload session
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {SessionRequest} sessionRequest The file the session is opened for, and how a clash with an existing name is settled.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createUploadSessionInFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session-in-folder/
         */
        createUploadSessionInFolder: async (folderId: number | string, sessionRequest: SessionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Queues a background job that deletes the requested files and folders, and answers with the caller\'s delete  operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports  `finished`, and read its `error`: a failure on a single item is reported there rather than as a status code.  With `immediately=false` the items are moved to the caller\'s Trash and can be restored from it, while  `immediately=true` removes them at once and for good; deleting a folder takes everything inside it either way.  The call is destructive and it is not a no-op on repetition — a second call with the same ids deletes whatever  has been restored in the meantime. Access is checked before the job is queued: deleting from a room requires  room manager or content-creator rights, editing or read rights are refused with 403, and an id that resolves  to nothing is answered as missing. An empty selection queues nothing and answers with the operations that are  already there. To clear the Trash itself use `PUT api/2.0/files/fileops/emptytrash`.
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
         * Removes the favorite mark from the listed files and folders for the calling account. Nothing is deleted from  storage: the entries keep their place, their content and their sharing, and only disappear from  `GET api/2.0/files/@favorites`; to delete the entries themselves call `PUT api/2.0/files/fileops/delete`  instead. Marks of other members are untouched, and read access to each item is enough to call it. The ids go  into the JSON body documented here; the same route also accepts them as repeated `fileIds` and `folderIds`  query parameters, but only in a request that carries no JSON body at all. Numeric ids address entries stored  in the portal itself, string ids entries on a connected third-party account. The answer is `true` whenever the  request was understood, which an empty request, an id that does not exist and an item that was never marked  all achieve, so it does not report how many marks were dropped. `returnSingleOperation` arrives with the  shared body and does nothing here. Repeating the call is safe. Use `POST api/2.0/files/favorites` to mark  entries again.
         * @summary Delete favorite files and folders
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
         * Queues a background job that removes the listed versions from the history of one file, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`; a failure met while the job runs is reported in its `error` rather than as a  status code. Removal is permanent — deleted versions do not travel through Trash and cannot be restored, while  the file itself stays in place with the versions that are left. Send the numbers that  `GET api/2.0/files/file/{fileId}/history` reports, and send at least one: an empty list is not an empty  request, it deletes the whole file instead. The number of the current version is refused before anything is  queued, while numbers that no longer exist are passed over without a complaint. The caller needs the rights  that deleting the file itself would need, so a member with read-only rights is refused, as are a file in an  archived room and a file that is already in Trash, and a file that does not exist is answered as missing. To  delete the file itself use `PUT api/2.0/files/fileops/delete`.
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
         * Queues a background job that copies each requested file and folder next to itself, into the folder where it  already is, and answers with the caller\'s duplicate operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. The copies keep the name of the original  with a numeric suffix, so nothing is overwritten and every repetition adds one more copy; duplicating a folder  duplicates its content as well. No destination is taken — to place a copy somewhere else use  `PUT api/2.0/files/fileops/copy`. The caller needs the rights that creating an item in that folder would need,  which inside a room means room manager or content-creator rights: read or editing rights, and an item the  caller has no access to at all, are refused with 403. An empty selection queues nothing and answers with the  operations that are already there.
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
         * Queues a background job that permanently removes the content of the caller\'s own Trash, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`. Every authenticated account may empty its own Trash and only its own: no  per-item access check takes place because nothing outside the caller\'s Trash is touched. With `folderType` the  sweep is narrowed to the items that were originally stored in sections and rooms of the named types, so  clearing what came from personal documents leaves what came from rooms untouched; without the parameter the  whole Trash is emptied. What is removed here cannot be restored afterwards, which is the difference from  `PUT api/2.0/files/fileops/delete`, where `immediately=false` puts items into Trash in the first place.  Calling it on an already empty Trash queues nothing and answers with the operations that are already there.
         * @summary Empty the Trash folder
         * @param {boolean} [single] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every delete operation that the caller has running or unread.
         * @param {Array<EmptyTrashFolderTypeEnum>} [folderType] Limits the sweep to the items whose original location was inside a section or a room of one of the named  types, leaving the rest of the Trash untouched; without the parameter the whole Trash is emptied. `5` covers  what was deleted from personal documents, `14` what was deleted from rooms.
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
                localVarQueryParameter['single'] = single;
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
         * Assembles the parts received so far into the file the session was opened for and closes the session. What  comes out depends on how the session started: one opened against an existing file through  `POST api/2.0/files/file/{fileId}/edit_session` replaces that content in place and keeps the version number,  while one opened against a folder either creates the file or, when a file of the same name was taken over,  stores the content as its next version. A form loses its filling state on the way in. The answer arrives with  201 and carries the identifiers of the file together with the file itself. The call ends the session: the  record and the buffered parts are removed, so it cannot be repeated and there is nothing left to abort  afterwards. Running it before all the declared bytes have arrived assembles whatever is there, so read the  progress from the chunk calls first. An unknown, already closed or expired session id fails instead of  answering as missing.
         * @summary Finalize an upload session
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {string} sessionId The session to assemble, as returned in `id` when it was created: a 32-character hexadecimal string that  identifies the session on its own.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for finalizeSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finalize-session/
         */
        finalizeSession: async (folderId: number | string, sessionId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the background file operations of the caller that are still running or whose finished result has not  been read yet, grouped by kind: duplications first, then moves and copies, deletions, downloads and  mark-as-read. This is the polling target for every operation in this section — an operation appears here as  soon as it is queued and carries `progress` from 0 to 100, `finished`, the `error` of a failed item and, for a  download, the address of the archive in `url`. A record is dropped once its finished state has been handed  out, so a completed operation is reported once and an empty array means there is nothing left to report rather  than that the work failed. Pass `id` to follow a single operation; an id that is not among the caller\'s  operations gives an empty array. Operations are private to the account that started them, an anonymous caller  being scoped to the session of the external link. The call changes nothing. To follow one kind only use  `GET api/2.0/files/fileops/{operationType}`.
         * @summary Get active file operations
         * @param {string} [id] The operation to report on, as returned in `id` when it was started; without it every operation of the caller  is reported. An id that is not among the caller\'s operations gives an empty answer rather than an error.
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
         * Returns the background file operations of the caller that are of one kind, named by the number in the route:  `1` for a copy, `2` for a deletion, `3` for a download, `4` for a mark-as-read and `7` for a duplication. The  answer carries the same records as `GET api/2.0/files/fileops`, with the same rule that a finished operation  is reported once and then dropped, and `id` narrows it further to a single operation. Moves, kind `0`, cannot  be read through this route: the address `api/2.0/files/fileops/move` belongs to another operation, so read  moves from `GET api/2.0/files/fileops` and pick the records whose `operation` is `0`. A kind that has no queue  of its own — `5` for an import, `6` for a conversion — is accepted and answers with an empty array, while a  number outside the operation type is rejected as an invalid request. The call changes nothing and never shows  another account\'s operations.
         * @summary Get file operations by type
         * @param {FileOperationType} operationType The kind of operation the answer is limited to. Only the kinds that have a queue of their own ever carry  records — a copy, a deletion, a download, a mark-as-read and a duplication — and moves cannot be read through  this route at all, because its address belongs to another operation.
         * @param {string} [id] The operation to report on, as returned in `id` when it was started; without it every operation of the caller  is reported. An id that is not among the caller\'s operations gives an empty answer rather than an error.
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
         * Queues a background job that clears the new-item badge from the requested files and folders for the calling  account, and answers with the caller\'s mark-as-read operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Marking a folder clears the badges of  everything inside it as well. Items the caller cannot read are passed over in silence rather than refused, so  the call succeeds even when the whole selection is inaccessible, and an empty selection queues nothing and  answers with the operations that are already there. Repeating the call on items that are already read changes  nothing, and nothing is opened, moved or modified by it — only the caller\'s own badges are affected, while  other members keep theirs. To see what is currently marked as new use `GET api/2.0/files/{folderId}/news` for  one folder and `GET api/2.0/files/rooms/news` for the rooms of the caller.
         * @summary Mark files and folders as read
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
         * Queues a background job that moves the requested files and folders into `destFolderId`, removing them from  where they were, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Before starting,  `GET api/2.0/files/fileops/move` reports which items already have a same-named entry at the destination and  `conflictResolveType` decides what happens to them, while `GET api/2.0/files/fileops/checkdestfolder` reports  whether the destination accepts the files at all. The caller needs create access to the destination and the  right to take the items out of their source, which is why room members with editing or review rights are  refused with 403, and why content-creator rights inside a room allow copying an item out of it but not moving  it. A room cannot be moved this way — use `PUT api/2.0/files/rooms/{id}/archive` instead. To keep the  originals use `PUT api/2.0/files/fileops/copy`. An empty selection queues nothing.
         * @summary Move files and folders
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
         * Queues the conversion of a file into the portal\'s own editable format and answers with the conversion entry  the caller is to poll. The whole body may be omitted, in which case the defaults apply. `outputType` names the  target format and, left empty, the portal\'s default for that kind of document is used; `password` unlocks a  protected source file; `version` converts an older version instead of the current one. `createNewIfExist`  decides where the result goes: with `true` a new file is created beside the source, while with `false`, the  default, the converted file that already exists is replaced. `sync=true` converts inside the request and  answers with the finished result instead of a queue entry, which is only sensible for small documents.  Otherwise poll `GET api/2.0/files/file/{fileId}/checkconversion` until `progress` reaches 100 and take the  converted file from `file`. Only formats the portal has to convert are accepted; anything already editable,  and anything it cannot convert, is answered without work being queued or rejected as an invalid request. The  caller needs read access to the file. The call is mutating and not idempotent.
         * @summary Start file conversion
         * @param {number | string} fileId The file to convert.
         * @param {CheckConversionRequestDto | ThirdPartyCheckConversionRequestDto} [checkConversionRequestDto] The parameters of the conversion. The whole body may be omitted, in which case the defaults of the portal  apply.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFileConversion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/
         */
        startFileConversion: async (fileId: number | string, checkConversionRequestDto?: CheckConversionRequestDto | ThirdPartyCheckConversionRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkConversionRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Cancels a background file operation of the caller and answers with the operations that are left. Pass the `id`  that was reported when the operation started to stop that one; a call that leaves the trailing route segment  out stops every operation the caller has running, of every kind. Cancelling stops the job where it stands and  does not undo it: what has already been copied, moved or deleted stays that way, so a cancelled batch can  leave part of itself at the destination and part of it at the source, and the result has to be read back  rather than assumed. The cancelled record is dropped from `GET api/2.0/files/fileops` at once, which is why  the answer here is usually empty. An id that is not among the caller\'s operations cancels nothing and is not  an error. Operations are private to the account that started them, an anonymous caller being scoped to the  session of the external link, so the call can never reach an operation of anyone else.
         * @summary Cancel file operations
         * @param {string} id The operation to cancel, as returned in `id` when it was started. A call that leaves the route segment out  cancels every operation of the caller, and an id that is not among their operations cancels nothing without  being an error.
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
         * Replaces the comment stored on one version of a file - the note that explains what changed in it - and answers  with the comment as it was stored, which is the text cut to the length the portal keeps. `version` names the  version and has to be an existing one: a version that does not exist is rejected as an invalid request, while  a file that does not exist at all is answered as not found. Sending an empty comment clears the note. The  caller needs the right to edit the history of the file, which the room admin, a DocSpace admin acting as room  manager and a member with content-creator rights have; a member with editing access to somebody else\'s file,  read-only access, a guest and an anonymous caller are all refused. A file that is locked by somebody else or  lies in Trash is refused as well. The call is mutating and idempotent - repeating it with the same text leaves  the same comment. The comments of all versions come back with `GET api/2.0/files/file/{fileId}/edit/history`.
         * @summary Update a comment
         * @param {number | string} fileId The file whose version comment is replaced.
         * @param {UpdateCommentRequest} updateCommentRequest The version and the comment to store on it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         */
        updateFileComment: async (fileId: number | string, updateCommentRequest: UpdateCommentRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateFileComment', 'fileId', fileId)
            // verify required parameter 'updateCommentRequest' is not null or undefined
            assertParamExists('updateFileComment', 'updateCommentRequest', updateCommentRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(updateCommentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores one part of a file under the number given in `chunkNumber`, which is what the ordinary chunked flow  uses: parts are kept by their number rather than by arrival, so a part that failed can be resent under the  same number without restarting the session. Numbering starts at 1, and leaving the number out makes the server  count the parts itself. The answer is always the session, never the file, and this call never completes the  upload: the file appears only after `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. Use  `POST api/2.0/files/{folderId}/session/{sessionId}` instead when the parts go strictly in order and the upload  should complete by itself. A part bigger than `chunkUploadSize` from `GET api/2.0/files/settings` is refused,  so that value is also the size to split the payload by. The first part of a PDF is inspected, and a PDF that  is not a fillable form is refused when the session targets a form-filling room. The session is found by its id  alone.
         * @summary Upload a numbered chunk
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {string} sessionId The session this part belongs to, as returned in `id` when it was created; a 32-character hexadecimal string.
         * @param {number} [chunkNumber] The position of this part in the file, counted from 1. Sending the same number again replaces that part  instead of adding one, which is how a failed part is retried; leaving the number out makes the server count  the parts itself.
         * @param {File} [file] The part of the file to store, sent as the multipart field of the same name. It is kept under the number given  beside it, and a part larger than the portal chunk size is refused.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadAsyncSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-async-session/
         */
        uploadAsyncSession: async (folderId: number | string, sessionId: string, chunkNumber?: number, file?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
                localVarQueryParameter['chunkNumber'] = chunkNumber;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
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
         * Sends the next part of a file into the session opened for it, as the multipart `File` field, and lets the  server keep count: parts are appended in the order they arrive, so two of these calls must never run in  parallel on one session. While bytes are still missing the answer describes the session and `uploaded` is  false; when the last part completes the declared size the file is written, its upload links are cleared, it is  marked as new for the room, and the answer comes back with 201, `uploaded` true and the whole file in `file`.  A session created for a payload smaller than `chunkUploadSize` from `GET api/2.0/files/settings` finishes on  the first such call and needs no separate finalize step. A part larger than that limit is refused. The first  part of a PDF is inspected, and a PDF that is not a fillable form is refused when the session targets a  form-filling room. The session is addressed by its id, and the folder in the path is not matched against it.
         * @summary Upload the next chunk
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {string} sessionId The session this part belongs to, as returned in `id` when it was created; the parts of one session must be  sent one after another, not in parallel.
         * @param {File} [file] The next part of the file, sent as the multipart field of the same name. Parts are appended in the order they  arrive, and a part larger than the portal chunk size is refused.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-session/
         */
        uploadSession: async (folderId: number | string, sessionId: string, file?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
                localVarFormParams.append('file', file as any);
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
         * Cancels a chunked upload opened with `POST api/2.0/files/{folderId}/session` and discards the parts already  received, so nothing of it reaches the folder. The session is found by the id in the path alone: the folder  segment is not matched against it, and neither is the account that opened it, which makes the id the only  secret protecting the transfer. The call is destructive and is not safe to repeat, because the record is gone  afterwards: a second attempt, a session already closed by  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize` and a session that expired after twelve hours of  silence all fail rather than answer as missing. Finalizing removes the session too, so there is nothing left  to abort once the file exists. The answer carries no body. An upload that is simply abandoned needs no call at  all, since the session and its buffered parts are dropped when it expires.
         * @summary Abort an upload session
         * @param {string} sessionId The session to cancel, as returned in `id` when it was created: a 32-character hexadecimal string that  identifies the session on its own.
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for abortUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/abort-upload-session/
         */
        async abortUploadSession(sessionId: string, folderId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.abortUploadSession(sessionId, folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.abortUploadSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Marks the listed files and folders as favorites for the calling account. The favorite list is personal:  nothing changes for other members, and the entries stay where they are stored. Read access to each item is  enough, so a room member with view-only rights and a guest may call it. Items the caller cannot read, ids that  do not exist and encrypted files of a private room are skipped without a word, and the answer is `true` even  when nothing was marked, so read the outcome back from `GET api/2.0/files/@favorites` instead of trusting it.  Numeric ids address entries stored in the portal itself, string ids entries on a connected third-party  account, and both kinds may be sent in one request. The call is mutating but safe to repeat: an item already  marked stays listed once. An entry moved to the Trash keeps its mark and is left out of the listing until it  is restored. `returnSingleOperation` arrives with the shared body and does nothing here. Use  `DELETE api/2.0/files/favorites` to undo, or `GET api/2.0/files/favorites/{fileId}` for a single file.
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
         * Queues a background job that packs the requested files and folders into a single archive, and answers with the  caller\'s download operations, including the one just started. The archive is not ready when the response  arrives: poll `GET api/2.0/files/fileops` until the operation reports `finished`, then take the address of the  archive from its `url`. Items listed in `fileConvertIds` are converted to the format named there before they  are packed, while the items of `fileIds` are packed as they are. Read access to every listed item is required:  an item the caller may not read fails the whole call with 403, and an id that resolves to nothing is answered  as missing, so filter the selection beforehand. Only one download at a time is allowed per caller, and a  second call made while the first is still running is refused with 403 as well. An empty selection queues  nothing and simply answers with the operations that are already there. An anonymous caller may use the call  for the items covered by the external link they hold.
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
         * Reports how far the conversion of a file has got, as a list that holds one entry while the portal still knows  about that conversion and nothing once it is over. Read `progress`, which counts from 0 to 100, `error` for  the reason a conversion failed, and `file`, which carries the converted file as soon as it exists. Queue the  conversion with `PUT api/2.0/files/file/{fileId}/checkconversion` and poll this operation until the entry  reaches 100 or disappears: a finished entry is handed out once and then dropped, and an entry whose conversion  stopped is discarded a few minutes later, so an empty list means either already reported or never started  rather than an error. The same empty list is the answer for an identifier no file matches. Passing  `start=true` starts the conversion as well, with the format from the portal settings and no password, which  makes that one flag mutating; without it the operation is read-only. The caller needs read access to the file,  and anyone else is refused.
         * @summary Get conversion status
         * @param {number | string} fileId The file whose conversion is asked about.
         * @param {boolean} [start] Whether to start the conversion as well: `true` queues it with the default output format and no password,  `false` only reports what the portal already knows.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConversionStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-conversion-status/
         */
        async checkConversionStatus(fileId: number | string, start?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConversationResultArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkConversionStatus(fileId, start, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.checkConversionStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports which of the requested files and folders already have a same-named entry in `destFolderId`, so that  the clash can be settled before the move or the copy is started. Nothing is moved, copied or changed by the  call, although the address is shared with `PUT api/2.0/files/fileops/move`: the answer is the part of the  request that clashes, and an empty array means the batch would go through without one. The  `conflictResolveType` of the request is not taken into account — clashing items are reported whatever it says  — and encrypted files are left out of the report. A source id that resolves to nothing is not an error and is  passed over. The caller needs create access to the destination: an archived room and a room the caller cannot  write to are refused with 403, a destination that does not exist is answered as missing, and a request without  `destFolderId` is rejected as an invalid request. To learn whether the destination accepts the files at all  use `GET api/2.0/files/fileops/checkdestfolder`.
         * @summary Check move or copy conflicts
         * @param {boolean} [returnSingleOperation] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [folderIds] The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string  addresses a folder on a connected third-party account, and both kinds may be sent in one list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [fileIds] The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a  file on a connected third-party account, and both kinds may be sent in one list.
         * @param {CheckMoveOrCopyBatchItemsDestFolderIdParameter} [destFolderId] The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder  on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the  caller has to be allowed to create items in it, and the id of a room addresses the root of that room.
         * @param {FileConflictResolveType} [conflictResolveType] What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is,  `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name  with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash.
         * @param {boolean} [deleteAfter] Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It deletes nothing: a move takes the sources away in any case, and a copy always leaves them.
         * @param {boolean} [content] What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it  contains, so its files and subfolders land in the destination and the folder is not recreated there.
         * @param {boolean} [toFillOut] Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling  status in a virtual data room. Files that are not forms are left unaffected.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         */
        async checkMoveOrCopyBatchItems(returnSingleOperation?: boolean, folderIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, fileIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, destFolderId?: CheckMoveOrCopyBatchItemsDestFolderIdParameter, conflictResolveType?: FileConflictResolveType, deleteAfter?: boolean, content?: boolean, toFillOut?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkMoveOrCopyBatchItems(returnSingleOperation, folderIds, fileIds, destFolderId, conflictResolveType, deleteAfter, content, toFillOut, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.checkMoveOrCopyBatchItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether the destination folder accepts the listed files, before a move or a copy is started. Only  `fileIds` and `destFolderId` are read from the request: `result` says whether all of the files are accepted,  only some of them or none, and `files` names the ones that are. The check is about what the destination allows  to be stored in it rather than about name clashes — everywhere except a form-filling room every file is  accepted, while a form-filling room accepts only PDF forms, so a text document offered to one comes back as  none accepted. The caller needs create access to the destination, so a room the caller cannot write to and an  archived room are refused with 403, a destination that does not exist is answered as missing, and a request  without `destFolderId` is rejected as an invalid request. Folder ids and the copying options of the request  play no part here. The call changes nothing; for same-named entries at the destination use  `GET api/2.0/files/fileops/move`.
         * @summary Check the destination folder
         * @param {boolean} [returnSingleOperation] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [folderIds] The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string  addresses a folder on a connected third-party account, and both kinds may be sent in one list.
         * @param {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null} [fileIds] The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a  file on a connected third-party account, and both kinds may be sent in one list.
         * @param {CheckMoveOrCopyBatchItemsDestFolderIdParameter} [destFolderId] The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder  on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the  caller has to be allowed to create items in it, and the id of a room addresses the root of that room.
         * @param {FileConflictResolveType} [conflictResolveType] What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is,  `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name  with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash.
         * @param {boolean} [deleteAfter] Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It deletes nothing: a move takes the sources away in any case, and a copy always leaves them.
         * @param {boolean} [content] What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it  contains, so its files and subfolders land in the destination and the folder is not recreated there.
         * @param {boolean} [toFillOut] Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling  status in a virtual data room. Files that are not forms are left unaffected.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         */
        async checkMoveOrCopyDestFolder(returnSingleOperation?: boolean, folderIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, fileIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null, destFolderId?: CheckMoveOrCopyBatchItemsDestFolderIdParameter, conflictResolveType?: FileConflictResolveType, deleteAfter?: boolean, content?: boolean, toFillOut?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckDestFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkMoveOrCopyDestFolder(returnSingleOperation, folderIds, fileIds, destFolderId, conflictResolveType, deleteAfter, content, toFillOut, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.checkMoveOrCopyDestFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that copies the requested files and folders into `destFolderId`, leaving the originals  where they are, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`; its `files` and `folders` then name what  was produced. Before starting, `GET api/2.0/files/fileops/move` reports which items already have a same-named  entry at the destination and `conflictResolveType` decides what happens to them, while  `GET api/2.0/files/fileops/checkdestfolder` reports whether the destination accepts the files at all. The  caller needs create access to the destination — room manager or content-creator rights inside a room — and  read access to every source item; anything less is refused with 403. With `content=true` each listed folder is  replaced by its own files and subfolders, so the folder itself is not recreated at the destination. An empty  selection queues nothing and answers with the operations that are already there. To remove the originals  instead use `PUT api/2.0/files/fileops/move`.
         * @summary Copy files and folders
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
         * Deprecated in favour of `POST api/2.0/files/{folderId}/session`, which opens the same session and returns it  without the success envelope used here; new callers should go there. Reserves a chunked upload of a file in  the folder named by the path: the title comes from `fileName`, the declared payload size from `fileSize`, and  the answer carries the session id every later call quotes, the address of the standalone chunk handler, the  moment an idle session is dropped and the reserved byte count. No content is stored yet. Send the payload as  multipart parts to `POST api/2.0/files/{folderId}/session/{sessionId}/upload`, keeping each part within  `chunkUploadSize` from `GET api/2.0/files/settings`, then close the session with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller needs the right to add content to the  target folder, which room managers and content creators have and readers, editors and guests do not: they get  403, as does a section root such as Rooms or Archive, while an unknown folder is answered as missing. A  payload above the portal limit for chunked uploads is refused before the session exists.
         * @summary Chunked upload
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {SessionRequest} sessionRequest The file the session is opened for, and how a clash with an existing name is settled.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         */
        async createUploadSession(folderId: number | string, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionResultWrapper | ThirdPartyChunkedUploadSessionResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUploadSession(folderId, sessionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.createUploadSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Opens a chunked upload session for a file in the folder named by the path and returns the session itself,  which is the difference from the deprecated `POST api/2.0/files/{folderId}/upload/create_session` and its  success envelope. The answer gives `id`, quoted by every later call, `location` for the standalone chunk  handler used by clients that bypass this API, `expired`, and `bytes_total` echoing the reserved size. Whether  parts are really needed follows from `fileSize`: below `chunkUploadSize` from `GET api/2.0/files/settings` the  whole payload goes in one `POST api/2.0/files/{folderId}/session/{sessionId}`, which stores the file and  answers 201, and above it the parts go one by one to  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the file appears only after  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller must be allowed to add content to the  folder, so readers, editors and guests are refused, a section root is refused as well, and an unknown folder  is answered as missing. Nothing is written until the parts arrive, and an abandoned session disappears twelve  hours later.
         * @summary Create an upload session
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {SessionRequest} sessionRequest The file the session is opened for, and how a clash with an existing name is settled.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createUploadSessionInFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session-in-folder/
         */
        async createUploadSessionInFolder(folderId: number | string, sessionRequest: SessionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionWrapper | ThirdPartyChunkedUploadSessionWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUploadSessionInFolder(folderId, sessionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.createUploadSessionInFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that deletes the requested files and folders, and answers with the caller\'s delete  operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports  `finished`, and read its `error`: a failure on a single item is reported there rather than as a status code.  With `immediately=false` the items are moved to the caller\'s Trash and can be restored from it, while  `immediately=true` removes them at once and for good; deleting a folder takes everything inside it either way.  The call is destructive and it is not a no-op on repetition — a second call with the same ids deletes whatever  has been restored in the meantime. Access is checked before the job is queued: deleting from a room requires  room manager or content-creator rights, editing or read rights are refused with 403, and an id that resolves  to nothing is answered as missing. An empty selection queues nothing and answers with the operations that are  already there. To clear the Trash itself use `PUT api/2.0/files/fileops/emptytrash`.
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
         * Removes the favorite mark from the listed files and folders for the calling account. Nothing is deleted from  storage: the entries keep their place, their content and their sharing, and only disappear from  `GET api/2.0/files/@favorites`; to delete the entries themselves call `PUT api/2.0/files/fileops/delete`  instead. Marks of other members are untouched, and read access to each item is enough to call it. The ids go  into the JSON body documented here; the same route also accepts them as repeated `fileIds` and `folderIds`  query parameters, but only in a request that carries no JSON body at all. Numeric ids address entries stored  in the portal itself, string ids entries on a connected third-party account. The answer is `true` whenever the  request was understood, which an empty request, an id that does not exist and an item that was never marked  all achieve, so it does not report how many marks were dropped. `returnSingleOperation` arrives with the  shared body and does nothing here. Repeating the call is safe. Use `POST api/2.0/files/favorites` to mark  entries again.
         * @summary Delete favorite files and folders
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
         * Queues a background job that removes the listed versions from the history of one file, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`; a failure met while the job runs is reported in its `error` rather than as a  status code. Removal is permanent — deleted versions do not travel through Trash and cannot be restored, while  the file itself stays in place with the versions that are left. Send the numbers that  `GET api/2.0/files/file/{fileId}/history` reports, and send at least one: an empty list is not an empty  request, it deletes the whole file instead. The number of the current version is refused before anything is  queued, while numbers that no longer exist are passed over without a complaint. The caller needs the rights  that deleting the file itself would need, so a member with read-only rights is refused, as are a file in an  archived room and a file that is already in Trash, and a file that does not exist is answered as missing. To  delete the file itself use `PUT api/2.0/files/fileops/delete`.
         * @summary Delete file versions
         * @param {DeleteVersionBatchRequestDto} [deleteVersionBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFileVersions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-versions/
         */
        async deleteFileVersions(deleteVersionBatchRequestDto?: DeleteVersionBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFileVersions(deleteVersionBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.deleteFileVersions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that copies each requested file and folder next to itself, into the folder where it  already is, and answers with the caller\'s duplicate operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. The copies keep the name of the original  with a numeric suffix, so nothing is overwritten and every repetition adds one more copy; duplicating a folder  duplicates its content as well. No destination is taken — to place a copy somewhere else use  `PUT api/2.0/files/fileops/copy`. The caller needs the rights that creating an item in that folder would need,  which inside a room means room manager or content-creator rights: read or editing rights, and an item the  caller has no access to at all, are refused with 403. An empty selection queues nothing and answers with the  operations that are already there.
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
         * Queues a background job that permanently removes the content of the caller\'s own Trash, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`. Every authenticated account may empty its own Trash and only its own: no  per-item access check takes place because nothing outside the caller\'s Trash is touched. With `folderType` the  sweep is narrowed to the items that were originally stored in sections and rooms of the named types, so  clearing what came from personal documents leaves what came from rooms untouched; without the parameter the  whole Trash is emptied. What is removed here cannot be restored afterwards, which is the difference from  `PUT api/2.0/files/fileops/delete`, where `immediately=false` puts items into Trash in the first place.  Calling it on an already empty Trash queues nothing and answers with the operations that are already there.
         * @summary Empty the Trash folder
         * @param {boolean} [single] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every delete operation that the caller has running or unread.
         * @param {Array<EmptyTrashFolderTypeEnum>} [folderType] Limits the sweep to the items whose original location was inside a section or a room of one of the named  types, leaving the rest of the Trash untouched; without the parameter the whole Trash is emptied. `5` covers  what was deleted from personal documents, `14` what was deleted from rooms.
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
         * Assembles the parts received so far into the file the session was opened for and closes the session. What  comes out depends on how the session started: one opened against an existing file through  `POST api/2.0/files/file/{fileId}/edit_session` replaces that content in place and keeps the version number,  while one opened against a folder either creates the file or, when a file of the same name was taken over,  stores the content as its next version. A form loses its filling state on the way in. The answer arrives with  201 and carries the identifiers of the file together with the file itself. The call ends the session: the  record and the buffered parts are removed, so it cannot be repeated and there is nothing left to abort  afterwards. Running it before all the declared bytes have arrived assembles whatever is there, so read the  progress from the chunk calls first. An unknown, already closed or expired session id fails instead of  answering as missing.
         * @summary Finalize an upload session
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {string} sessionId The session to assemble, as returned in `id` when it was created: a 32-character hexadecimal string that  identifies the session on its own.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for finalizeSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finalize-session/
         */
        async finalizeSession(folderId: number | string, sessionId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadSessionResponseWrapper | ThirdPartyUploadSessionResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.finalizeSession(folderId, sessionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.finalizeSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the background file operations of the caller that are still running or whose finished result has not  been read yet, grouped by kind: duplications first, then moves and copies, deletions, downloads and  mark-as-read. This is the polling target for every operation in this section — an operation appears here as  soon as it is queued and carries `progress` from 0 to 100, `finished`, the `error` of a failed item and, for a  download, the address of the archive in `url`. A record is dropped once its finished state has been handed  out, so a completed operation is reported once and an empty array means there is nothing left to report rather  than that the work failed. Pass `id` to follow a single operation; an id that is not among the caller\'s  operations gives an empty array. Operations are private to the account that started them, an anonymous caller  being scoped to the session of the external link. The call changes nothing. To follow one kind only use  `GET api/2.0/files/fileops/{operationType}`.
         * @summary Get active file operations
         * @param {string} [id] The operation to report on, as returned in `id` when it was started; without it every operation of the caller  is reported. An id that is not among the caller\'s operations gives an empty answer rather than an error.
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
         * Returns the background file operations of the caller that are of one kind, named by the number in the route:  `1` for a copy, `2` for a deletion, `3` for a download, `4` for a mark-as-read and `7` for a duplication. The  answer carries the same records as `GET api/2.0/files/fileops`, with the same rule that a finished operation  is reported once and then dropped, and `id` narrows it further to a single operation. Moves, kind `0`, cannot  be read through this route: the address `api/2.0/files/fileops/move` belongs to another operation, so read  moves from `GET api/2.0/files/fileops` and pick the records whose `operation` is `0`. A kind that has no queue  of its own — `5` for an import, `6` for a conversion — is accepted and answers with an empty array, while a  number outside the operation type is rejected as an invalid request. The call changes nothing and never shows  another account\'s operations.
         * @summary Get file operations by type
         * @param {FileOperationType} operationType The kind of operation the answer is limited to. Only the kinds that have a queue of their own ever carry  records — a copy, a deletion, a download, a mark-as-read and a duplication — and moves cannot be read through  this route at all, because its address belongs to another operation.
         * @param {string} [id] The operation to report on, as returned in `id` when it was started; without it every operation of the caller  is reported. An id that is not among the caller\'s operations gives an empty answer rather than an error.
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
         * Queues a background job that clears the new-item badge from the requested files and folders for the calling  account, and answers with the caller\'s mark-as-read operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Marking a folder clears the badges of  everything inside it as well. Items the caller cannot read are passed over in silence rather than refused, so  the call succeeds even when the whole selection is inaccessible, and an empty selection queues nothing and  answers with the operations that are already there. Repeating the call on items that are already read changes  nothing, and nothing is opened, moved or modified by it — only the caller\'s own badges are affected, while  other members keep theirs. To see what is currently marked as new use `GET api/2.0/files/{folderId}/news` for  one folder and `GET api/2.0/files/rooms/news` for the rooms of the caller.
         * @summary Mark files and folders as read
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
         * Queues a background job that moves the requested files and folders into `destFolderId`, removing them from  where they were, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Before starting,  `GET api/2.0/files/fileops/move` reports which items already have a same-named entry at the destination and  `conflictResolveType` decides what happens to them, while `GET api/2.0/files/fileops/checkdestfolder` reports  whether the destination accepts the files at all. The caller needs create access to the destination and the  right to take the items out of their source, which is why room members with editing or review rights are  refused with 403, and why content-creator rights inside a room allow copying an item out of it but not moving  it. A room cannot be moved this way — use `PUT api/2.0/files/rooms/{id}/archive` instead. To keep the  originals use `PUT api/2.0/files/fileops/copy`. An empty selection queues nothing.
         * @summary Move files and folders
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
         * Queues the conversion of a file into the portal\'s own editable format and answers with the conversion entry  the caller is to poll. The whole body may be omitted, in which case the defaults apply. `outputType` names the  target format and, left empty, the portal\'s default for that kind of document is used; `password` unlocks a  protected source file; `version` converts an older version instead of the current one. `createNewIfExist`  decides where the result goes: with `true` a new file is created beside the source, while with `false`, the  default, the converted file that already exists is replaced. `sync=true` converts inside the request and  answers with the finished result instead of a queue entry, which is only sensible for small documents.  Otherwise poll `GET api/2.0/files/file/{fileId}/checkconversion` until `progress` reaches 100 and take the  converted file from `file`. Only formats the portal has to convert are accepted; anything already editable,  and anything it cannot convert, is answered without work being queued or rejected as an invalid request. The  caller needs read access to the file. The call is mutating and not idempotent.
         * @summary Start file conversion
         * @param {number | string} fileId The file to convert.
         * @param {CheckConversionRequestDto | ThirdPartyCheckConversionRequestDto} [checkConversionRequestDto] The parameters of the conversion. The whole body may be omitted, in which case the defaults of the portal  apply.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFileConversion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/
         */
        async startFileConversion(fileId: number | string, checkConversionRequestDto?: CheckConversionRequestDto | ThirdPartyCheckConversionRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConversationResultArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startFileConversion(fileId, checkConversionRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.startFileConversion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Cancels a background file operation of the caller and answers with the operations that are left. Pass the `id`  that was reported when the operation started to stop that one; a call that leaves the trailing route segment  out stops every operation the caller has running, of every kind. Cancelling stops the job where it stands and  does not undo it: what has already been copied, moved or deleted stays that way, so a cancelled batch can  leave part of itself at the destination and part of it at the source, and the result has to be read back  rather than assumed. The cancelled record is dropped from `GET api/2.0/files/fileops` at once, which is why  the answer here is usually empty. An id that is not among the caller\'s operations cancels nothing and is not  an error. Operations are private to the account that started them, an anonymous caller being scoped to the  session of the external link, so the call can never reach an operation of anyone else.
         * @summary Cancel file operations
         * @param {string} id The operation to cancel, as returned in `id` when it was started. A call that leaves the route segment out  cancels every operation of the caller, and an id that is not among their operations cancels nothing without  being an error.
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
         * Replaces the comment stored on one version of a file - the note that explains what changed in it - and answers  with the comment as it was stored, which is the text cut to the length the portal keeps. `version` names the  version and has to be an existing one: a version that does not exist is rejected as an invalid request, while  a file that does not exist at all is answered as not found. Sending an empty comment clears the note. The  caller needs the right to edit the history of the file, which the room admin, a DocSpace admin acting as room  manager and a member with content-creator rights have; a member with editing access to somebody else\'s file,  read-only access, a guest and an anonymous caller are all refused. A file that is locked by somebody else or  lies in Trash is refused as well. The call is mutating and idempotent - repeating it with the same text leaves  the same comment. The comments of all versions come back with `GET api/2.0/files/file/{fileId}/edit/history`.
         * @summary Update a comment
         * @param {number | string} fileId The file whose version comment is replaced.
         * @param {UpdateCommentRequest} updateCommentRequest The version and the comment to store on it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         */
        async updateFileComment(fileId: number | string, updateCommentRequest: UpdateCommentRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFileComment(fileId, updateCommentRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.updateFileComment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores one part of a file under the number given in `chunkNumber`, which is what the ordinary chunked flow  uses: parts are kept by their number rather than by arrival, so a part that failed can be resent under the  same number without restarting the session. Numbering starts at 1, and leaving the number out makes the server  count the parts itself. The answer is always the session, never the file, and this call never completes the  upload: the file appears only after `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. Use  `POST api/2.0/files/{folderId}/session/{sessionId}` instead when the parts go strictly in order and the upload  should complete by itself. A part bigger than `chunkUploadSize` from `GET api/2.0/files/settings` is refused,  so that value is also the size to split the payload by. The first part of a PDF is inspected, and a PDF that  is not a fillable form is refused when the session targets a form-filling room. The session is found by its id  alone.
         * @summary Upload a numbered chunk
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {string} sessionId The session this part belongs to, as returned in `id` when it was created; a 32-character hexadecimal string.
         * @param {number} [chunkNumber] The position of this part in the file, counted from 1. Sending the same number again replaces that part  instead of adding one, which is how a failed part is retried; leaving the number out makes the server count  the parts itself.
         * @param {File} [file] The part of the file to store, sent as the multipart field of the same name. It is kept under the number given  beside it, and a part larger than the portal chunk size is refused.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadAsyncSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-async-session/
         */
        async uploadAsyncSession(folderId: number | string, sessionId: string, chunkNumber?: number, file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionWrapper | ThirdPartyChunkedUploadSessionWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadAsyncSession(folderId, sessionId, chunkNumber, file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OperationsApi.uploadAsyncSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the next part of a file into the session opened for it, as the multipart `File` field, and lets the  server keep count: parts are appended in the order they arrive, so two of these calls must never run in  parallel on one session. While bytes are still missing the answer describes the session and `uploaded` is  false; when the last part completes the declared size the file is written, its upload links are cleared, it is  marked as new for the room, and the answer comes back with 201, `uploaded` true and the whole file in `file`.  A session created for a payload smaller than `chunkUploadSize` from `GET api/2.0/files/settings` finishes on  the first such call and needs no separate finalize step. A part larger than that limit is refused. The first  part of a PDF is inspected, and a PDF that is not a fillable form is refused when the session targets a  form-filling room. The session is addressed by its id, and the folder in the path is not matched against it.
         * @summary Upload the next chunk
         * @param {number | string} folderId The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
         * @param {string} sessionId The session this part belongs to, as returned in `id` when it was created; the parts of one session must be  sent one after another, not in parallel.
         * @param {File} [file] The next part of the file, sent as the multipart field of the same name. Parts are appended in the order they  arrive, and a part larger than the portal chunk size is refused.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-session/
         */
        async uploadSession(folderId: number | string, sessionId: string, file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadSessionResponseWrapper | ThirdPartyUploadSessionResponseWrapper>> {
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
         * Cancels a chunked upload opened with `POST api/2.0/files/{folderId}/session` and discards the parts already  received, so nothing of it reaches the folder. The session is found by the id in the path alone: the folder  segment is not matched against it, and neither is the account that opened it, which makes the id the only  secret protecting the transfer. The call is destructive and is not safe to repeat, because the record is gone  afterwards: a second attempt, a session already closed by  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize` and a session that expired after twelve hours of  silence all fail rather than answer as missing. Finalizing removes the session too, so there is nothing left  to abort once the file exists. The answer carries no body. An upload that is simply abandoned needs no call at  all, since the session and its buffered parts are dropped when it expires.
         * @summary Abort an upload session
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
         * Marks the listed files and folders as favorites for the calling account. The favorite list is personal:  nothing changes for other members, and the entries stay where they are stored. Read access to each item is  enough, so a room member with view-only rights and a guest may call it. Items the caller cannot read, ids that  do not exist and encrypted files of a private room are skipped without a word, and the answer is `true` even  when nothing was marked, so read the outcome back from `GET api/2.0/files/@favorites` instead of trusting it.  Numeric ids address entries stored in the portal itself, string ids entries on a connected third-party  account, and both kinds may be sent in one request. The call is mutating but safe to repeat: an item already  marked stays listed once. An entry moved to the Trash keeps its mark and is left out of the listing until it  is restored. `returnSingleOperation` arrives with the shared body and does nothing here. Use  `DELETE api/2.0/files/favorites` to undo, or `GET api/2.0/files/favorites/{fileId}` for a single file.
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
         * Queues a background job that packs the requested files and folders into a single archive, and answers with the  caller\'s download operations, including the one just started. The archive is not ready when the response  arrives: poll `GET api/2.0/files/fileops` until the operation reports `finished`, then take the address of the  archive from its `url`. Items listed in `fileConvertIds` are converted to the format named there before they  are packed, while the items of `fileIds` are packed as they are. Read access to every listed item is required:  an item the caller may not read fails the whole call with 403, and an id that resolves to nothing is answered  as missing, so filter the selection beforehand. Only one download at a time is allowed per caller, and a  second call made while the first is still running is refused with 403 as well. An empty selection queues  nothing and simply answers with the operations that are already there. An anonymous caller may use the call  for the items covered by the external link they hold.
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
         * Reports how far the conversion of a file has got, as a list that holds one entry while the portal still knows  about that conversion and nothing once it is over. Read `progress`, which counts from 0 to 100, `error` for  the reason a conversion failed, and `file`, which carries the converted file as soon as it exists. Queue the  conversion with `PUT api/2.0/files/file/{fileId}/checkconversion` and poll this operation until the entry  reaches 100 or disappears: a finished entry is handed out once and then dropped, and an entry whose conversion  stopped is discarded a few minutes later, so an empty list means either already reported or never started  rather than an error. The same empty list is the answer for an identifier no file matches. Passing  `start=true` starts the conversion as well, with the format from the portal settings and no password, which  makes that one flag mutating; without it the operation is read-only. The caller needs read access to the file,  and anyone else is refused.
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
         * Reports which of the requested files and folders already have a same-named entry in `destFolderId`, so that  the clash can be settled before the move or the copy is started. Nothing is moved, copied or changed by the  call, although the address is shared with `PUT api/2.0/files/fileops/move`: the answer is the part of the  request that clashes, and an empty array means the batch would go through without one. The  `conflictResolveType` of the request is not taken into account — clashing items are reported whatever it says  — and encrypted files are left out of the report. A source id that resolves to nothing is not an error and is  passed over. The caller needs create access to the destination: an archived room and a room the caller cannot  write to are refused with 403, a destination that does not exist is answered as missing, and a request without  `destFolderId` is rejected as an invalid request. To learn whether the destination accepts the files at all  use `GET api/2.0/files/fileops/checkdestfolder`.
         * @summary Check move or copy conflicts
         * @param {OperationsApiCheckMoveOrCopyBatchItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkMoveOrCopyBatchItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/
         * @throws {RequiredError}
         */
        checkMoveOrCopyBatchItems(requestParameters: OperationsApiCheckMoveOrCopyBatchItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.checkMoveOrCopyBatchItems(requestParameters.returnSingleOperation, requestParameters.folderIds, requestParameters.fileIds, requestParameters.destFolderId, requestParameters.conflictResolveType, requestParameters.deleteAfter, requestParameters.content, requestParameters.toFillOut, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether the destination folder accepts the listed files, before a move or a copy is started. Only  `fileIds` and `destFolderId` are read from the request: `result` says whether all of the files are accepted,  only some of them or none, and `files` names the ones that are. The check is about what the destination allows  to be stored in it rather than about name clashes — everywhere except a form-filling room every file is  accepted, while a form-filling room accepts only PDF forms, so a text document offered to one comes back as  none accepted. The caller needs create access to the destination, so a room the caller cannot write to and an  archived room are refused with 403, a destination that does not exist is answered as missing, and a request  without `destFolderId` is rejected as an invalid request. Folder ids and the copying options of the request  play no part here. The call changes nothing; for same-named entries at the destination use  `GET api/2.0/files/fileops/move`.
         * @summary Check the destination folder
         * @param {OperationsApiCheckMoveOrCopyDestFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkMoveOrCopyDestFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/
         * @throws {RequiredError}
         */
        checkMoveOrCopyDestFolder(requestParameters: OperationsApiCheckMoveOrCopyDestFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CheckDestFolderWrapper> {
            return localVarFp.checkMoveOrCopyDestFolder(requestParameters.returnSingleOperation, requestParameters.folderIds, requestParameters.fileIds, requestParameters.destFolderId, requestParameters.conflictResolveType, requestParameters.deleteAfter, requestParameters.content, requestParameters.toFillOut, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that copies the requested files and folders into `destFolderId`, leaving the originals  where they are, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`; its `files` and `folders` then name what  was produced. Before starting, `GET api/2.0/files/fileops/move` reports which items already have a same-named  entry at the destination and `conflictResolveType` decides what happens to them, while  `GET api/2.0/files/fileops/checkdestfolder` reports whether the destination accepts the files at all. The  caller needs create access to the destination — room manager or content-creator rights inside a room — and  read access to every source item; anything less is refused with 403. With `content=true` each listed folder is  replaced by its own files and subfolders, so the folder itself is not recreated at the destination. An empty  selection queues nothing and answers with the operations that are already there. To remove the originals  instead use `PUT api/2.0/files/fileops/move`.
         * @summary Copy files and folders
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
         * Deprecated in favour of `POST api/2.0/files/{folderId}/session`, which opens the same session and returns it  without the success envelope used here; new callers should go there. Reserves a chunked upload of a file in  the folder named by the path: the title comes from `fileName`, the declared payload size from `fileSize`, and  the answer carries the session id every later call quotes, the address of the standalone chunk handler, the  moment an idle session is dropped and the reserved byte count. No content is stored yet. Send the payload as  multipart parts to `POST api/2.0/files/{folderId}/session/{sessionId}/upload`, keeping each part within  `chunkUploadSize` from `GET api/2.0/files/settings`, then close the session with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller needs the right to add content to the  target folder, which room managers and content creators have and readers, editors and guests do not: they get  403, as does a section root such as Rooms or Archive, while an unknown folder is answered as missing. A  payload above the portal limit for chunked uploads is refused before the session exists.
         * @summary Chunked upload
         * @param {OperationsApiCreateUploadSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * REST API Reference for createUploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/
         * @throws {RequiredError}
         */
        createUploadSession(requestParameters: OperationsApiCreateUploadSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResultWrapper | ThirdPartyChunkedUploadSessionResultWrapper> {
            return localVarFp.createUploadSession(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Opens a chunked upload session for a file in the folder named by the path and returns the session itself,  which is the difference from the deprecated `POST api/2.0/files/{folderId}/upload/create_session` and its  success envelope. The answer gives `id`, quoted by every later call, `location` for the standalone chunk  handler used by clients that bypass this API, `expired`, and `bytes_total` echoing the reserved size. Whether  parts are really needed follows from `fileSize`: below `chunkUploadSize` from `GET api/2.0/files/settings` the  whole payload goes in one `POST api/2.0/files/{folderId}/session/{sessionId}`, which stores the file and  answers 201, and above it the parts go one by one to  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the file appears only after  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller must be allowed to add content to the  folder, so readers, editors and guests are refused, a section root is refused as well, and an unknown folder  is answered as missing. Nothing is written until the parts arrive, and an abandoned session disappears twelve  hours later.
         * @summary Create an upload session
         * @param {OperationsApiCreateUploadSessionInFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createUploadSessionInFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session-in-folder/
         * @throws {RequiredError}
         */
        createUploadSessionInFolder(requestParameters: OperationsApiCreateUploadSessionInFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionWrapper | ThirdPartyChunkedUploadSessionWrapper> {
            return localVarFp.createUploadSessionInFolder(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that deletes the requested files and folders, and answers with the caller\'s delete  operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports  `finished`, and read its `error`: a failure on a single item is reported there rather than as a status code.  With `immediately=false` the items are moved to the caller\'s Trash and can be restored from it, while  `immediately=true` removes them at once and for good; deleting a folder takes everything inside it either way.  The call is destructive and it is not a no-op on repetition — a second call with the same ids deletes whatever  has been restored in the meantime. Access is checked before the job is queued: deleting from a room requires  room manager or content-creator rights, editing or read rights are refused with 403, and an id that resolves  to nothing is answered as missing. An empty selection queues nothing and answers with the operations that are  already there. To clear the Trash itself use `PUT api/2.0/files/fileops/emptytrash`.
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
         * Removes the favorite mark from the listed files and folders for the calling account. Nothing is deleted from  storage: the entries keep their place, their content and their sharing, and only disappear from  `GET api/2.0/files/@favorites`; to delete the entries themselves call `PUT api/2.0/files/fileops/delete`  instead. Marks of other members are untouched, and read access to each item is enough to call it. The ids go  into the JSON body documented here; the same route also accepts them as repeated `fileIds` and `folderIds`  query parameters, but only in a request that carries no JSON body at all. Numeric ids address entries stored  in the portal itself, string ids entries on a connected third-party account. The answer is `true` whenever the  request was understood, which an empty request, an id that does not exist and an item that was never marked  all achieve, so it does not report how many marks were dropped. `returnSingleOperation` arrives with the  shared body and does nothing here. Repeating the call is safe. Use `POST api/2.0/files/favorites` to mark  entries again.
         * @summary Delete favorite files and folders
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
         * Queues a background job that removes the listed versions from the history of one file, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`; a failure met while the job runs is reported in its `error` rather than as a  status code. Removal is permanent — deleted versions do not travel through Trash and cannot be restored, while  the file itself stays in place with the versions that are left. Send the numbers that  `GET api/2.0/files/file/{fileId}/history` reports, and send at least one: an empty list is not an empty  request, it deletes the whole file instead. The number of the current version is refused before anything is  queued, while numbers that no longer exist are passed over without a complaint. The caller needs the rights  that deleting the file itself would need, so a member with read-only rights is refused, as are a file in an  archived room and a file that is already in Trash, and a file that does not exist is answered as missing. To  delete the file itself use `PUT api/2.0/files/fileops/delete`.
         * @summary Delete file versions
         * @param {OperationsApiDeleteFileVersionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFileVersions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-versions/
         * @throws {RequiredError}
         */
        deleteFileVersions(requestParameters: OperationsApiDeleteFileVersionsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteFileVersions(requestParameters.deleteVersionBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that copies each requested file and folder next to itself, into the folder where it  already is, and answers with the caller\'s duplicate operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. The copies keep the name of the original  with a numeric suffix, so nothing is overwritten and every repetition adds one more copy; duplicating a folder  duplicates its content as well. No destination is taken — to place a copy somewhere else use  `PUT api/2.0/files/fileops/copy`. The caller needs the rights that creating an item in that folder would need,  which inside a room means room manager or content-creator rights: read or editing rights, and an item the  caller has no access to at all, are refused with 403. An empty selection queues nothing and answers with the  operations that are already there.
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
         * Queues a background job that permanently removes the content of the caller\'s own Trash, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`. Every authenticated account may empty its own Trash and only its own: no  per-item access check takes place because nothing outside the caller\'s Trash is touched. With `folderType` the  sweep is narrowed to the items that were originally stored in sections and rooms of the named types, so  clearing what came from personal documents leaves what came from rooms untouched; without the parameter the  whole Trash is emptied. What is removed here cannot be restored afterwards, which is the difference from  `PUT api/2.0/files/fileops/delete`, where `immediately=false` puts items into Trash in the first place.  Calling it on an already empty Trash queues nothing and answers with the operations that are already there.
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
         * Assembles the parts received so far into the file the session was opened for and closes the session. What  comes out depends on how the session started: one opened against an existing file through  `POST api/2.0/files/file/{fileId}/edit_session` replaces that content in place and keeps the version number,  while one opened against a folder either creates the file or, when a file of the same name was taken over,  stores the content as its next version. A form loses its filling state on the way in. The answer arrives with  201 and carries the identifiers of the file together with the file itself. The call ends the session: the  record and the buffered parts are removed, so it cannot be repeated and there is nothing left to abort  afterwards. Running it before all the declared bytes have arrived assembles whatever is there, so read the  progress from the chunk calls first. An unknown, already closed or expired session id fails instead of  answering as missing.
         * @summary Finalize an upload session
         * @param {OperationsApiFinalizeSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for finalizeSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finalize-session/
         * @throws {RequiredError}
         */
        finalizeSession(requestParameters: OperationsApiFinalizeSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseWrapper | ThirdPartyUploadSessionResponseWrapper> {
            return localVarFp.finalizeSession(requestParameters.folderId, requestParameters.sessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the background file operations of the caller that are still running or whose finished result has not  been read yet, grouped by kind: duplications first, then moves and copies, deletions, downloads and  mark-as-read. This is the polling target for every operation in this section — an operation appears here as  soon as it is queued and carries `progress` from 0 to 100, `finished`, the `error` of a failed item and, for a  download, the address of the archive in `url`. A record is dropped once its finished state has been handed  out, so a completed operation is reported once and an empty array means there is nothing left to report rather  than that the work failed. Pass `id` to follow a single operation; an id that is not among the caller\'s  operations gives an empty array. Operations are private to the account that started them, an anonymous caller  being scoped to the session of the external link. The call changes nothing. To follow one kind only use  `GET api/2.0/files/fileops/{operationType}`.
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
         * Returns the background file operations of the caller that are of one kind, named by the number in the route:  `1` for a copy, `2` for a deletion, `3` for a download, `4` for a mark-as-read and `7` for a duplication. The  answer carries the same records as `GET api/2.0/files/fileops`, with the same rule that a finished operation  is reported once and then dropped, and `id` narrows it further to a single operation. Moves, kind `0`, cannot  be read through this route: the address `api/2.0/files/fileops/move` belongs to another operation, so read  moves from `GET api/2.0/files/fileops` and pick the records whose `operation` is `0`. A kind that has no queue  of its own — `5` for an import, `6` for a conversion — is accepted and answers with an empty array, while a  number outside the operation type is rejected as an invalid request. The call changes nothing and never shows  another account\'s operations.
         * @summary Get file operations by type
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
         * Queues a background job that clears the new-item badge from the requested files and folders for the calling  account, and answers with the caller\'s mark-as-read operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Marking a folder clears the badges of  everything inside it as well. Items the caller cannot read are passed over in silence rather than refused, so  the call succeeds even when the whole selection is inaccessible, and an empty selection queues nothing and  answers with the operations that are already there. Repeating the call on items that are already read changes  nothing, and nothing is opened, moved or modified by it — only the caller\'s own badges are affected, while  other members keep theirs. To see what is currently marked as new use `GET api/2.0/files/{folderId}/news` for  one folder and `GET api/2.0/files/rooms/news` for the rooms of the caller.
         * @summary Mark files and folders as read
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
         * Queues a background job that moves the requested files and folders into `destFolderId`, removing them from  where they were, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Before starting,  `GET api/2.0/files/fileops/move` reports which items already have a same-named entry at the destination and  `conflictResolveType` decides what happens to them, while `GET api/2.0/files/fileops/checkdestfolder` reports  whether the destination accepts the files at all. The caller needs create access to the destination and the  right to take the items out of their source, which is why room members with editing or review rights are  refused with 403, and why content-creator rights inside a room allow copying an item out of it but not moving  it. A room cannot be moved this way — use `PUT api/2.0/files/rooms/{id}/archive` instead. To keep the  originals use `PUT api/2.0/files/fileops/copy`. An empty selection queues nothing.
         * @summary Move files and folders
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
         * Queues the conversion of a file into the portal\'s own editable format and answers with the conversion entry  the caller is to poll. The whole body may be omitted, in which case the defaults apply. `outputType` names the  target format and, left empty, the portal\'s default for that kind of document is used; `password` unlocks a  protected source file; `version` converts an older version instead of the current one. `createNewIfExist`  decides where the result goes: with `true` a new file is created beside the source, while with `false`, the  default, the converted file that already exists is replaced. `sync=true` converts inside the request and  answers with the finished result instead of a queue entry, which is only sensible for small documents.  Otherwise poll `GET api/2.0/files/file/{fileId}/checkconversion` until `progress` reaches 100 and take the  converted file from `file`. Only formats the portal has to convert are accepted; anything already editable,  and anything it cannot convert, is answered without work being queued or rejected as an invalid request. The  caller needs read access to the file. The call is mutating and not idempotent.
         * @summary Start file conversion
         * @param {OperationsApiStartFileConversionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startFileConversion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/
         * @throws {RequiredError}
         */
        startFileConversion(requestParameters: OperationsApiStartFileConversionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConversationResultArrayWrapper> {
            return localVarFp.startFileConversion(requestParameters.fileId, requestParameters.checkConversionRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels a background file operation of the caller and answers with the operations that are left. Pass the `id`  that was reported when the operation started to stop that one; a call that leaves the trailing route segment  out stops every operation the caller has running, of every kind. Cancelling stops the job where it stands and  does not undo it: what has already been copied, moved or deleted stays that way, so a cancelled batch can  leave part of itself at the destination and part of it at the source, and the result has to be read back  rather than assumed. The cancelled record is dropped from `GET api/2.0/files/fileops` at once, which is why  the answer here is usually empty. An id that is not among the caller\'s operations cancels nothing and is not  an error. Operations are private to the account that started them, an anonymous caller being scoped to the  session of the external link, so the call can never reach an operation of anyone else.
         * @summary Cancel file operations
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
         * Replaces the comment stored on one version of a file - the note that explains what changed in it - and answers  with the comment as it was stored, which is the text cut to the length the portal keeps. `version` names the  version and has to be an existing one: a version that does not exist is rejected as an invalid request, while  a file that does not exist at all is answered as not found. Sending an empty comment clears the note. The  caller needs the right to edit the history of the file, which the room admin, a DocSpace admin acting as room  manager and a member with content-creator rights have; a member with editing access to somebody else\'s file,  read-only access, a guest and an anonymous caller are all refused. A file that is locked by somebody else or  lies in Trash is refused as well. The call is mutating and idempotent - repeating it with the same text leaves  the same comment. The comments of all versions come back with `GET api/2.0/files/file/{fileId}/edit/history`.
         * @summary Update a comment
         * @param {OperationsApiUpdateFileCommentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFileComment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/
         * @throws {RequiredError}
         */
        updateFileComment(requestParameters: OperationsApiUpdateFileCommentRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.updateFileComment(requestParameters.fileId, requestParameters.updateCommentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores one part of a file under the number given in `chunkNumber`, which is what the ordinary chunked flow  uses: parts are kept by their number rather than by arrival, so a part that failed can be resent under the  same number without restarting the session. Numbering starts at 1, and leaving the number out makes the server  count the parts itself. The answer is always the session, never the file, and this call never completes the  upload: the file appears only after `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. Use  `POST api/2.0/files/{folderId}/session/{sessionId}` instead when the parts go strictly in order and the upload  should complete by itself. A part bigger than `chunkUploadSize` from `GET api/2.0/files/settings` is refused,  so that value is also the size to split the payload by. The first part of a PDF is inspected, and a PDF that  is not a fillable form is refused when the session targets a form-filling room. The session is found by its id  alone.
         * @summary Upload a numbered chunk
         * @param {OperationsApiUploadAsyncSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadAsyncSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-async-session/
         * @throws {RequiredError}
         */
        uploadAsyncSession(requestParameters: OperationsApiUploadAsyncSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionWrapper | ThirdPartyChunkedUploadSessionWrapper> {
            return localVarFp.uploadAsyncSession(requestParameters.folderId, requestParameters.sessionId, requestParameters.chunkNumber, requestParameters.file, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the next part of a file into the session opened for it, as the multipart `File` field, and lets the  server keep count: parts are appended in the order they arrive, so two of these calls must never run in  parallel on one session. While bytes are still missing the answer describes the session and `uploaded` is  false; when the last part completes the declared size the file is written, its upload links are cleared, it is  marked as new for the room, and the answer comes back with 201, `uploaded` true and the whole file in `file`.  A session created for a payload smaller than `chunkUploadSize` from `GET api/2.0/files/settings` finishes on  the first such call and needs no separate finalize step. A part larger than that limit is refused. The first  part of a PDF is inspected, and a PDF that is not a fillable form is refused when the session targets a  form-filling room. The session is addressed by its id, and the folder in the path is not matched against it.
         * @summary Upload the next chunk
         * @param {OperationsApiUploadSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-session/
         * @throws {RequiredError}
         */
        uploadSession(requestParameters: OperationsApiUploadSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseWrapper | ThirdPartyUploadSessionResponseWrapper> {
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
     * The session to cancel, as returned in `id` when it was created: a 32-character hexadecimal string that  identifies the session on its own.
     * @type {string}
     * @memberof OperationsApiAbortUploadSession
     */
    readonly sessionId: string

    /**
     * The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
     * @type {number | string}
     * @memberof OperationsApiAbortUploadSession
     */
    readonly folderId: number | string
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
     * The file whose conversion is asked about.
     * @type {number | string}
     * @memberof OperationsApiCheckConversionStatus
     */
    readonly fileId: number | string

    /**
     * Whether to start the conversion as well: `true` queues it with the default output format and no password,  `false` only reports what the portal already knows.
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
     * Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly returnSingleOperation?: boolean

    /**
     * The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string  addresses a folder on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner>}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly folderIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null

    /**
     * The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a  file on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner>}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly fileIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null

    /**
     * The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder  on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the  caller has to be allowed to create items in it, and the id of a room addresses the root of that room.
     * @type {CheckMoveOrCopyBatchItemsDestFolderIdParameter}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly destFolderId?: CheckMoveOrCopyBatchItemsDestFolderIdParameter

    /**
     * What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is,  `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name  with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash.
     * @type {FileConflictResolveType}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly conflictResolveType?: FileConflictResolveType

    /**
     * Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It deletes nothing: a move takes the sources away in any case, and a copy always leaves them.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly deleteAfter?: boolean

    /**
     * What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it  contains, so its files and subfolders land in the destination and the folder is not recreated there.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly content?: boolean

    /**
     * Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling  status in a virtual data room. Files that are not forms are left unaffected.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyBatchItems
     */
    readonly toFillOut?: boolean
}

/**
 * Request parameters for checkMoveOrCopyDestFolder operation in OperationsApi.
 * @export
 * @interface OperationsApiCheckMoveOrCopyDestFolderRequest
 */
export interface OperationsApiCheckMoveOrCopyDestFolderRequest {
    /**
     * Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly returnSingleOperation?: boolean

    /**
     * The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string  addresses a folder on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner>}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly folderIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null

    /**
     * The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a  file on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner>}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly fileIds?: Array<CheckMoveOrCopyBatchItemsFolderIdsParameterInner> | null

    /**
     * The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder  on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the  caller has to be allowed to create items in it, and the id of a room addresses the root of that room.
     * @type {CheckMoveOrCopyBatchItemsDestFolderIdParameter}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly destFolderId?: CheckMoveOrCopyBatchItemsDestFolderIdParameter

    /**
     * What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is,  `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name  with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash.
     * @type {FileConflictResolveType}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly conflictResolveType?: FileConflictResolveType

    /**
     * Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It deletes nothing: a move takes the sources away in any case, and a copy always leaves them.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly deleteAfter?: boolean

    /**
     * What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it  contains, so its files and subfolders land in the destination and the folder is not recreated there.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly content?: boolean

    /**
     * Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling  status in a virtual data room. Files that are not forms are left unaffected.
     * @type {boolean}
     * @memberof OperationsApiCheckMoveOrCopyDestFolder
     */
    readonly toFillOut?: boolean
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
     * The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
     * @type {number | string}
     * @memberof OperationsApiCreateUploadSession
     */
    readonly folderId: number | string

    /**
     * The file the session is opened for, and how a clash with an existing name is settled.
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
     * The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
     * @type {number | string}
     * @memberof OperationsApiCreateUploadSessionInFolder
     */
    readonly folderId: number | string

    /**
     * The file the session is opened for, and how a clash with an existing name is settled.
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
     * Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every delete operation that the caller has running or unread.
     * @type {boolean}
     * @memberof OperationsApiEmptyTrash
     */
    readonly single?: boolean

    /**
     * Limits the sweep to the items whose original location was inside a section or a room of one of the named  types, leaving the rest of the Trash untouched; without the parameter the whole Trash is emptied. `5` covers  what was deleted from personal documents, `14` what was deleted from rooms.
     * @type {Array<0 | 1 | 2 | 3 | 5 | 6 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 19 | 20 | 21 | 22 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37>}
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
     * The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
     * @type {number | string}
     * @memberof OperationsApiFinalizeSession
     */
    readonly folderId: number | string

    /**
     * The session to assemble, as returned in `id` when it was created: a 32-character hexadecimal string that  identifies the session on its own.
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
     * The operation to report on, as returned in `id` when it was started; without it every operation of the caller  is reported. An id that is not among the caller\'s operations gives an empty answer rather than an error.
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
     * The kind of operation the answer is limited to. Only the kinds that have a queue of their own ever carry  records — a copy, a deletion, a download, a mark-as-read and a duplication — and moves cannot be read through  this route at all, because its address belongs to another operation.
     * @type {FileOperationType}
     * @memberof OperationsApiGetOperationStatusesByType
     */
    readonly operationType: FileOperationType

    /**
     * The operation to report on, as returned in `id` when it was started; without it every operation of the caller  is reported. An id that is not among the caller\'s operations gives an empty answer rather than an error.
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
     * The file to convert.
     * @type {number | string}
     * @memberof OperationsApiStartFileConversion
     */
    readonly fileId: number | string

    /**
     * The parameters of the conversion. The whole body may be omitted, in which case the defaults of the portal  apply.
     * @type {CheckConversionRequestDto | ThirdPartyCheckConversionRequestDto}
     * @memberof OperationsApiStartFileConversion
     */
    readonly checkConversionRequestDto?: CheckConversionRequestDto | ThirdPartyCheckConversionRequestDto
}

/**
 * Request parameters for terminateTasks operation in OperationsApi.
 * @export
 * @interface OperationsApiTerminateTasksRequest
 */
export interface OperationsApiTerminateTasksRequest {
    /**
     * The operation to cancel, as returned in `id` when it was started. A call that leaves the route segment out  cancels every operation of the caller, and an id that is not among their operations cancels nothing without  being an error.
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
     * The file whose version comment is replaced.
     * @type {number | string}
     * @memberof OperationsApiUpdateFileComment
     */
    readonly fileId: number | string

    /**
     * The version and the comment to store on it.
     * @type {UpdateCommentRequest}
     * @memberof OperationsApiUpdateFileComment
     */
    readonly updateCommentRequest: UpdateCommentRequest
}

/**
 * Request parameters for uploadAsyncSession operation in OperationsApi.
 * @export
 * @interface OperationsApiUploadAsyncSessionRequest
 */
export interface OperationsApiUploadAsyncSessionRequest {
    /**
     * The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
     * @type {number | string}
     * @memberof OperationsApiUploadAsyncSession
     */
    readonly folderId: number | string

    /**
     * The session this part belongs to, as returned in `id` when it was created; a 32-character hexadecimal string.
     * @type {string}
     * @memberof OperationsApiUploadAsyncSession
     */
    readonly sessionId: string

    /**
     * The position of this part in the file, counted from 1. Sending the same number again replaces that part  instead of adding one, which is how a failed part is retried; leaving the number out makes the server count  the parts itself.
     * @type {number}
     * @memberof OperationsApiUploadAsyncSession
     */
    readonly chunkNumber?: number

    /**
     * The part of the file to store, sent as the multipart field of the same name. It is kept under the number given  beside it, and a part larger than the portal chunk size is refused.
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
     * The folder the session was opened against. It is part of the route only and is not matched against the  session, which is found by its own id.
     * @type {number | string}
     * @memberof OperationsApiUploadSession
     */
    readonly folderId: number | string

    /**
     * The session this part belongs to, as returned in `id` when it was created; the parts of one session must be  sent one after another, not in parallel.
     * @type {string}
     * @memberof OperationsApiUploadSession
     */
    readonly sessionId: string

    /**
     * The next part of the file, sent as the multipart field of the same name. Parts are appended in the order they  arrive, and a part larger than the portal chunk size is refused.
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
     * Cancels a chunked upload opened with `POST api/2.0/files/{folderId}/session` and discards the parts already  received, so nothing of it reaches the folder. The session is found by the id in the path alone: the folder  segment is not matched against it, and neither is the account that opened it, which makes the id the only  secret protecting the transfer. The call is destructive and is not safe to repeat, because the record is gone  afterwards: a second attempt, a session already closed by  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize` and a session that expired after twelve hours of  silence all fail rather than answer as missing. Finalizing removes the session too, so there is nothing left  to abort once the file exists. The answer carries no body. An upload that is simply abandoned needs no call at  all, since the session and its buffered parts are dropped when it expires.
     * @summary Abort an upload session
     * @param {FilesOperationsApiAbortUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public abortUploadSession(requestParameters: OperationsApiAbortUploadSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).abortUploadSession(requestParameters.sessionId, requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks the listed files and folders as favorites for the calling account. The favorite list is personal:  nothing changes for other members, and the entries stay where they are stored. Read access to each item is  enough, so a room member with view-only rights and a guest may call it. Items the caller cannot read, ids that  do not exist and encrypted files of a private room are skipped without a word, and the answer is `true` even  when nothing was marked, so read the outcome back from `GET api/2.0/files/@favorites` instead of trusting it.  Numeric ids address entries stored in the portal itself, string ids entries on a connected third-party  account, and both kinds may be sent in one request. The call is mutating but safe to repeat: an item already  marked stays listed once. An entry moved to the Trash keeps its mark and is left out of the listing until it  is restored. `returnSingleOperation` arrives with the shared body and does nothing here. Use  `DELETE api/2.0/files/favorites` to undo, or `GET api/2.0/files/favorites/{fileId}` for a single file.
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
     * Queues a background job that packs the requested files and folders into a single archive, and answers with the  caller\'s download operations, including the one just started. The archive is not ready when the response  arrives: poll `GET api/2.0/files/fileops` until the operation reports `finished`, then take the address of the  archive from its `url`. Items listed in `fileConvertIds` are converted to the format named there before they  are packed, while the items of `fileIds` are packed as they are. Read access to every listed item is required:  an item the caller may not read fails the whole call with 403, and an id that resolves to nothing is answered  as missing, so filter the selection beforehand. Only one download at a time is allowed per caller, and a  second call made while the first is still running is refused with 403 as well. An empty selection queues  nothing and simply answers with the operations that are already there. An anonymous caller may use the call  for the items covered by the external link they hold.
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
     * Reports how far the conversion of a file has got, as a list that holds one entry while the portal still knows  about that conversion and nothing once it is over. Read `progress`, which counts from 0 to 100, `error` for  the reason a conversion failed, and `file`, which carries the converted file as soon as it exists. Queue the  conversion with `PUT api/2.0/files/file/{fileId}/checkconversion` and poll this operation until the entry  reaches 100 or disappears: a finished entry is handed out once and then dropped, and an entry whose conversion  stopped is discarded a few minutes later, so an empty list means either already reported or never started  rather than an error. The same empty list is the answer for an identifier no file matches. Passing  `start=true` starts the conversion as well, with the format from the portal settings and no password, which  makes that one flag mutating; without it the operation is read-only. The caller needs read access to the file,  and anyone else is refused.
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
     * Reports which of the requested files and folders already have a same-named entry in `destFolderId`, so that  the clash can be settled before the move or the copy is started. Nothing is moved, copied or changed by the  call, although the address is shared with `PUT api/2.0/files/fileops/move`: the answer is the part of the  request that clashes, and an empty array means the batch would go through without one. The  `conflictResolveType` of the request is not taken into account — clashing items are reported whatever it says  — and encrypted files are left out of the report. A source id that resolves to nothing is not an error and is  passed over. The caller needs create access to the destination: an archived room and a room the caller cannot  write to are refused with 403, a destination that does not exist is answered as missing, and a request without  `destFolderId` is rejected as an invalid request. To learn whether the destination accepts the files at all  use `GET api/2.0/files/fileops/checkdestfolder`.
     * @summary Check move or copy conflicts
     * @param {FilesOperationsApiCheckMoveOrCopyBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkMoveOrCopyBatchItems(requestParameters: OperationsApiCheckMoveOrCopyBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkMoveOrCopyBatchItems(requestParameters.returnSingleOperation, requestParameters.folderIds, requestParameters.fileIds, requestParameters.destFolderId, requestParameters.conflictResolveType, requestParameters.deleteAfter, requestParameters.content, requestParameters.toFillOut, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether the destination folder accepts the listed files, before a move or a copy is started. Only  `fileIds` and `destFolderId` are read from the request: `result` says whether all of the files are accepted,  only some of them or none, and `files` names the ones that are. The check is about what the destination allows  to be stored in it rather than about name clashes — everywhere except a form-filling room every file is  accepted, while a form-filling room accepts only PDF forms, so a text document offered to one comes back as  none accepted. The caller needs create access to the destination, so a room the caller cannot write to and an  archived room are refused with 403, a destination that does not exist is answered as missing, and a request  without `destFolderId` is rejected as an invalid request. Folder ids and the copying options of the request  play no part here. The call changes nothing; for same-named entries at the destination use  `GET api/2.0/files/fileops/move`.
     * @summary Check the destination folder
     * @param {FilesOperationsApiCheckMoveOrCopyDestFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public checkMoveOrCopyDestFolder(requestParameters: OperationsApiCheckMoveOrCopyDestFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).checkMoveOrCopyDestFolder(requestParameters.returnSingleOperation, requestParameters.folderIds, requestParameters.fileIds, requestParameters.destFolderId, requestParameters.conflictResolveType, requestParameters.deleteAfter, requestParameters.content, requestParameters.toFillOut, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that copies the requested files and folders into `destFolderId`, leaving the originals  where they are, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`; its `files` and `folders` then name what  was produced. Before starting, `GET api/2.0/files/fileops/move` reports which items already have a same-named  entry at the destination and `conflictResolveType` decides what happens to them, while  `GET api/2.0/files/fileops/checkdestfolder` reports whether the destination accepts the files at all. The  caller needs create access to the destination — room manager or content-creator rights inside a room — and  read access to every source item; anything less is refused with 403. With `content=true` each listed folder is  replaced by its own files and subfolders, so the folder itself is not recreated at the destination. An empty  selection queues nothing and answers with the operations that are already there. To remove the originals  instead use `PUT api/2.0/files/fileops/move`.
     * @summary Copy files and folders
     * @param {FilesOperationsApiCopyBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public copyBatchItems(requestParameters: OperationsApiCopyBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).copyBatchItems(requestParameters.batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deprecated in favour of `POST api/2.0/files/{folderId}/session`, which opens the same session and returns it  without the success envelope used here; new callers should go there. Reserves a chunked upload of a file in  the folder named by the path: the title comes from `fileName`, the declared payload size from `fileSize`, and  the answer carries the session id every later call quotes, the address of the standalone chunk handler, the  moment an idle session is dropped and the reserved byte count. No content is stored yet. Send the payload as  multipart parts to `POST api/2.0/files/{folderId}/session/{sessionId}/upload`, keeping each part within  `chunkUploadSize` from `GET api/2.0/files/settings`, then close the session with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller needs the right to add content to the  target folder, which room managers and content creators have and readers, editors and guests do not: they get  403, as does a section root such as Rooms or Archive, while an unknown folder is answered as missing. A  payload above the portal limit for chunked uploads is refused before the session exists.
     * @summary Chunked upload
     * @param {FilesOperationsApiCreateUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSession(requestParameters: OperationsApiCreateUploadSessionRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResultWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Chunked upload (third-party storage)
     * @param {FilesOperationsApiCreateUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSession(requestParameters: OperationsApiCreateUploadSessionRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyChunkedUploadSessionResultWrapper>;
    public createUploadSession(requestParameters: OperationsApiCreateUploadSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResultWrapper | ThirdPartyChunkedUploadSessionResultWrapper>;
    public createUploadSession(requestParameters: OperationsApiCreateUploadSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).createUploadSession(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Opens a chunked upload session for a file in the folder named by the path and returns the session itself,  which is the difference from the deprecated `POST api/2.0/files/{folderId}/upload/create_session` and its  success envelope. The answer gives `id`, quoted by every later call, `location` for the standalone chunk  handler used by clients that bypass this API, `expired`, and `bytes_total` echoing the reserved size. Whether  parts are really needed follows from `fileSize`: below `chunkUploadSize` from `GET api/2.0/files/settings` the  whole payload goes in one `POST api/2.0/files/{folderId}/session/{sessionId}`, which stores the file and  answers 201, and above it the parts go one by one to  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the file appears only after  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller must be allowed to add content to the  folder, so readers, editors and guests are refused, a section root is refused as well, and an unknown folder  is answered as missing. Nothing is written until the parts arrive, and an abandoned session disappears twelve  hours later.
     * @summary Create an upload session
     * @param {FilesOperationsApiCreateUploadSessionInFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSessionInFolder(requestParameters: OperationsApiCreateUploadSessionInFolderRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Create an upload session (third-party storage)
     * @param {FilesOperationsApiCreateUploadSessionInFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public createUploadSessionInFolder(requestParameters: OperationsApiCreateUploadSessionInFolderRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyChunkedUploadSessionWrapper>;
    public createUploadSessionInFolder(requestParameters: OperationsApiCreateUploadSessionInFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionWrapper | ThirdPartyChunkedUploadSessionWrapper>;
    public createUploadSessionInFolder(requestParameters: OperationsApiCreateUploadSessionInFolderRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).createUploadSessionInFolder(requestParameters.folderId, requestParameters.sessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that deletes the requested files and folders, and answers with the caller\'s delete  operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports  `finished`, and read its `error`: a failure on a single item is reported there rather than as a status code.  With `immediately=false` the items are moved to the caller\'s Trash and can be restored from it, while  `immediately=true` removes them at once and for good; deleting a folder takes everything inside it either way.  The call is destructive and it is not a no-op on repetition — a second call with the same ids deletes whatever  has been restored in the meantime. Access is checked before the job is queued: deleting from a room requires  room manager or content-creator rights, editing or read rights are refused with 403, and an id that resolves  to nothing is answered as missing. An empty selection queues nothing and answers with the operations that are  already there. To clear the Trash itself use `PUT api/2.0/files/fileops/emptytrash`.
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
     * Removes the favorite mark from the listed files and folders for the calling account. Nothing is deleted from  storage: the entries keep their place, their content and their sharing, and only disappear from  `GET api/2.0/files/@favorites`; to delete the entries themselves call `PUT api/2.0/files/fileops/delete`  instead. Marks of other members are untouched, and read access to each item is enough to call it. The ids go  into the JSON body documented here; the same route also accepts them as repeated `fileIds` and `folderIds`  query parameters, but only in a request that carries no JSON body at all. Numeric ids address entries stored  in the portal itself, string ids entries on a connected third-party account. The answer is `true` whenever the  request was understood, which an empty request, an id that does not exist and an item that was never marked  all achieve, so it does not report how many marks were dropped. `returnSingleOperation` arrives with the  shared body and does nothing here. Repeating the call is safe. Use `POST api/2.0/files/favorites` to mark  entries again.
     * @summary Delete favorite files and folders
     * @param {FilesOperationsApiDeleteFavoritesFromBodyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public deleteFavoritesFromBody(requestParameters: OperationsApiDeleteFavoritesFromBodyRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).deleteFavoritesFromBody(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that removes the listed versions from the history of one file, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`; a failure met while the job runs is reported in its `error` rather than as a  status code. Removal is permanent — deleted versions do not travel through Trash and cannot be restored, while  the file itself stays in place with the versions that are left. Send the numbers that  `GET api/2.0/files/file/{fileId}/history` reports, and send at least one: an empty list is not an empty  request, it deletes the whole file instead. The number of the current version is refused before anything is  queued, while numbers that no longer exist are passed over without a complaint. The caller needs the rights  that deleting the file itself would need, so a member with read-only rights is refused, as are a file in an  archived room and a file that is already in Trash, and a file that does not exist is answered as missing. To  delete the file itself use `PUT api/2.0/files/fileops/delete`.
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
     * Queues a background job that copies each requested file and folder next to itself, into the folder where it  already is, and answers with the caller\'s duplicate operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. The copies keep the name of the original  with a numeric suffix, so nothing is overwritten and every repetition adds one more copy; duplicating a folder  duplicates its content as well. No destination is taken — to place a copy somewhere else use  `PUT api/2.0/files/fileops/copy`. The caller needs the rights that creating an item in that folder would need,  which inside a room means room manager or content-creator rights: read or editing rights, and an item the  caller has no access to at all, are refused with 403. An empty selection queues nothing and answers with the  operations that are already there.
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
     * Queues a background job that permanently removes the content of the caller\'s own Trash, and answers with the  caller\'s delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the  operation reports `finished`. Every authenticated account may empty its own Trash and only its own: no  per-item access check takes place because nothing outside the caller\'s Trash is touched. With `folderType` the  sweep is narrowed to the items that were originally stored in sections and rooms of the named types, so  clearing what came from personal documents leaves what came from rooms untouched; without the parameter the  whole Trash is emptied. What is removed here cannot be restored afterwards, which is the difference from  `PUT api/2.0/files/fileops/delete`, where `immediately=false` puts items into Trash in the first place.  Calling it on an already empty Trash queues nothing and answers with the operations that are already there.
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
     * Assembles the parts received so far into the file the session was opened for and closes the session. What  comes out depends on how the session started: one opened against an existing file through  `POST api/2.0/files/file/{fileId}/edit_session` replaces that content in place and keeps the version number,  while one opened against a folder either creates the file or, when a file of the same name was taken over,  stores the content as its next version. A form loses its filling state on the way in. The answer arrives with  201 and carries the identifiers of the file together with the file itself. The call ends the session: the  record and the buffered parts are removed, so it cannot be repeated and there is nothing left to abort  afterwards. Running it before all the declared bytes have arrived assembles whatever is there, so read the  progress from the chunk calls first. An unknown, already closed or expired session id fails instead of  answering as missing.
     * @summary Finalize an upload session
     * @param {FilesOperationsApiFinalizeSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public finalizeSession(requestParameters: OperationsApiFinalizeSessionRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Finalize an upload session (third-party storage)
     * @param {FilesOperationsApiFinalizeSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public finalizeSession(requestParameters: OperationsApiFinalizeSessionRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyUploadSessionResponseWrapper>;
    public finalizeSession(requestParameters: OperationsApiFinalizeSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseWrapper | ThirdPartyUploadSessionResponseWrapper>;
    public finalizeSession(requestParameters: OperationsApiFinalizeSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).finalizeSession(requestParameters.folderId, requestParameters.sessionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the background file operations of the caller that are still running or whose finished result has not  been read yet, grouped by kind: duplications first, then moves and copies, deletions, downloads and  mark-as-read. This is the polling target for every operation in this section — an operation appears here as  soon as it is queued and carries `progress` from 0 to 100, `finished`, the `error` of a failed item and, for a  download, the address of the archive in `url`. A record is dropped once its finished state has been handed  out, so a completed operation is reported once and an empty array means there is nothing left to report rather  than that the work failed. Pass `id` to follow a single operation; an id that is not among the caller\'s  operations gives an empty array. Operations are private to the account that started them, an anonymous caller  being scoped to the session of the external link. The call changes nothing. To follow one kind only use  `GET api/2.0/files/fileops/{operationType}`.
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
     * Returns the background file operations of the caller that are of one kind, named by the number in the route:  `1` for a copy, `2` for a deletion, `3` for a download, `4` for a mark-as-read and `7` for a duplication. The  answer carries the same records as `GET api/2.0/files/fileops`, with the same rule that a finished operation  is reported once and then dropped, and `id` narrows it further to a single operation. Moves, kind `0`, cannot  be read through this route: the address `api/2.0/files/fileops/move` belongs to another operation, so read  moves from `GET api/2.0/files/fileops` and pick the records whose `operation` is `0`. A kind that has no queue  of its own — `5` for an import, `6` for a conversion — is accepted and answers with an empty array, while a  number outside the operation type is rejected as an invalid request. The call changes nothing and never shows  another account\'s operations.
     * @summary Get file operations by type
     * @param {FilesOperationsApiGetOperationStatusesByTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public getOperationStatusesByType(requestParameters: OperationsApiGetOperationStatusesByTypeRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).getOperationStatusesByType(requestParameters.operationType, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that clears the new-item badge from the requested files and folders for the calling  account, and answers with the caller\'s mark-as-read operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Marking a folder clears the badges of  everything inside it as well. Items the caller cannot read are passed over in silence rather than refused, so  the call succeeds even when the whole selection is inaccessible, and an empty selection queues nothing and  answers with the operations that are already there. Repeating the call on items that are already read changes  nothing, and nothing is opened, moved or modified by it — only the caller\'s own badges are affected, while  other members keep theirs. To see what is currently marked as new use `GET api/2.0/files/{folderId}/news` for  one folder and `GET api/2.0/files/rooms/news` for the rooms of the caller.
     * @summary Mark files and folders as read
     * @param {FilesOperationsApiMarkAsReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public markAsRead(requestParameters: OperationsApiMarkAsReadRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).markAsRead(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that moves the requested files and folders into `destFolderId`, removing them from  where they were, and answers with the caller\'s move and copy operations, including the one just started. Poll  `GET api/2.0/files/fileops` until the operation reports `finished`. Before starting,  `GET api/2.0/files/fileops/move` reports which items already have a same-named entry at the destination and  `conflictResolveType` decides what happens to them, while `GET api/2.0/files/fileops/checkdestfolder` reports  whether the destination accepts the files at all. The caller needs create access to the destination and the  right to take the items out of their source, which is why room members with editing or review rights are  refused with 403, and why content-creator rights inside a room allow copying an item out of it but not moving  it. A room cannot be moved this way — use `PUT api/2.0/files/rooms/{id}/archive` instead. To keep the  originals use `PUT api/2.0/files/fileops/copy`. An empty selection queues nothing.
     * @summary Move files and folders
     * @param {FilesOperationsApiMoveBatchItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public moveBatchItems(requestParameters: OperationsApiMoveBatchItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).moveBatchItems(requestParameters.batchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues the conversion of a file into the portal\'s own editable format and answers with the conversion entry  the caller is to poll. The whole body may be omitted, in which case the defaults apply. `outputType` names the  target format and, left empty, the portal\'s default for that kind of document is used; `password` unlocks a  protected source file; `version` converts an older version instead of the current one. `createNewIfExist`  decides where the result goes: with `true` a new file is created beside the source, while with `false`, the  default, the converted file that already exists is replaced. `sync=true` converts inside the request and  answers with the finished result instead of a queue entry, which is only sensible for small documents.  Otherwise poll `GET api/2.0/files/file/{fileId}/checkconversion` until `progress` reaches 100 and take the  converted file from `file`. Only formats the portal has to convert are accepted; anything already editable,  and anything it cannot convert, is answered without work being queued or rejected as an invalid request. The  caller needs read access to the file. The call is mutating and not idempotent.
     * @summary Start file conversion
     * @param {FilesOperationsApiStartFileConversionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public startFileConversion(requestParameters: OperationsApiStartFileConversionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).startFileConversion(requestParameters.fileId, requestParameters.checkConversionRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels a background file operation of the caller and answers with the operations that are left. Pass the `id`  that was reported when the operation started to stop that one; a call that leaves the trailing route segment  out stops every operation the caller has running, of every kind. Cancelling stops the job where it stands and  does not undo it: what has already been copied, moved or deleted stays that way, so a cancelled batch can  leave part of itself at the destination and part of it at the source, and the result has to be read back  rather than assumed. The cancelled record is dropped from `GET api/2.0/files/fileops` at once, which is why  the answer here is usually empty. An id that is not among the caller\'s operations cancels nothing and is not  an error. Operations are private to the account that started them, an anonymous caller being scoped to the  session of the external link, so the call can never reach an operation of anyone else.
     * @summary Cancel file operations
     * @param {FilesOperationsApiTerminateTasksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public terminateTasks(requestParameters: OperationsApiTerminateTasksRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).terminateTasks(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the comment stored on one version of a file - the note that explains what changed in it - and answers  with the comment as it was stored, which is the text cut to the length the portal keeps. `version` names the  version and has to be an existing one: a version that does not exist is rejected as an invalid request, while  a file that does not exist at all is answered as not found. Sending an empty comment clears the note. The  caller needs the right to edit the history of the file, which the room admin, a DocSpace admin acting as room  manager and a member with content-creator rights have; a member with editing access to somebody else\'s file,  read-only access, a guest and an anonymous caller are all refused. A file that is locked by somebody else or  lies in Trash is refused as well. The call is mutating and idempotent - repeating it with the same text leaves  the same comment. The comments of all versions come back with `GET api/2.0/files/file/{fileId}/edit/history`.
     * @summary Update a comment
     * @param {FilesOperationsApiUpdateFileCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public updateFileComment(requestParameters: OperationsApiUpdateFileCommentRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).updateFileComment(requestParameters.fileId, requestParameters.updateCommentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores one part of a file under the number given in `chunkNumber`, which is what the ordinary chunked flow  uses: parts are kept by their number rather than by arrival, so a part that failed can be resent under the  same number without restarting the session. Numbering starts at 1, and leaving the number out makes the server  count the parts itself. The answer is always the session, never the file, and this call never completes the  upload: the file appears only after `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. Use  `POST api/2.0/files/{folderId}/session/{sessionId}` instead when the parts go strictly in order and the upload  should complete by itself. A part bigger than `chunkUploadSize` from `GET api/2.0/files/settings` is refused,  so that value is also the size to split the payload by. The first part of a PDF is inspected, and a PDF that  is not a fillable form is refused when the session targets a form-filling room. The session is found by its id  alone.
     * @summary Upload a numbered chunk
     * @param {FilesOperationsApiUploadAsyncSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadAsyncSession(requestParameters: OperationsApiUploadAsyncSessionRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Upload a numbered chunk (third-party storage)
     * @param {FilesOperationsApiUploadAsyncSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadAsyncSession(requestParameters: OperationsApiUploadAsyncSessionRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyChunkedUploadSessionWrapper>;
    public uploadAsyncSession(requestParameters: OperationsApiUploadAsyncSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionWrapper | ThirdPartyChunkedUploadSessionWrapper>;
    public uploadAsyncSession(requestParameters: OperationsApiUploadAsyncSessionRequest, options?: RawAxiosRequestConfig) {
        return OperationsApiFp(this.configuration).uploadAsyncSession(requestParameters.folderId, requestParameters.sessionId, requestParameters.chunkNumber, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the next part of a file into the session opened for it, as the multipart `File` field, and lets the  server keep count: parts are appended in the order they arrive, so two of these calls must never run in  parallel on one session. While bytes are still missing the answer describes the session and `uploaded` is  false; when the last part completes the declared size the file is written, its upload links are cleared, it is  marked as new for the room, and the answer comes back with 201, `uploaded` true and the whole file in `file`.  A session created for a payload smaller than `chunkUploadSize` from `GET api/2.0/files/settings` finishes on  the first such call and needs no separate finalize step. A part larger than that limit is refused. The first  part of a PDF is inspected, and a PDF that is not a fillable form is refused when the session targets a  form-filling room. The session is addressed by its id, and the folder in the path is not matched against it.
     * @summary Upload the next chunk
     * @param {FilesOperationsApiUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadSession(requestParameters: OperationsApiUploadSessionRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Upload the next chunk (third-party storage)
     * @param {FilesOperationsApiUploadSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OperationsApi
     */
    public uploadSession(requestParameters: OperationsApiUploadSessionRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyUploadSessionResponseWrapper>;
    public uploadSession(requestParameters: OperationsApiUploadSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<UploadSessionResponseWrapper | ThirdPartyUploadSessionResponseWrapper>;
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
    ChatOutputs: 33,
    AiAgents: 34,
    DefaultTemplates: 35,
    Forms: 36,
    Ai: 37
} as const;
export type EmptyTrashFolderTypeEnum = typeof EmptyTrashFolderTypeEnum[keyof typeof EmptyTrashFolderTypeEnum];
