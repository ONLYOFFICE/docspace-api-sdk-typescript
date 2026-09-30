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
import type { ApplyFilterOption } from '../../models';
// @ts-ignore
import type { AuditReportFormat } from '../../models';
// @ts-ignore
import type { CheckUploadRequest } from '../../models';
// @ts-ignore
import type { CreateFolder } from '../../models';
// @ts-ignore
import type { DeleteFolder } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { FileArrayWrapper } from '../../models';
// @ts-ignore
import type { FileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { FileOperationArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareWrapper } from '../../models';
// @ts-ignore
import type { FileWrapper } from '../../models';
// @ts-ignore
import type { FilesStatisticsResultWrapper } from '../../models';
// @ts-ignore
import type { FilterType } from '../../models';
// @ts-ignore
import type { FolderContentArrayWrapper } from '../../models';
// @ts-ignore
import type { FolderContentWrapper } from '../../models';
// @ts-ignore
import type { FolderLinkRequest } from '../../models';
// @ts-ignore
import type { FolderWrapper } from '../../models';
// @ts-ignore
import type { FormsItemArrayWrapper } from '../../models';
// @ts-ignore
import type { HistoryArrayWrapper } from '../../models';
// @ts-ignore
import type { Location } from '../../models';
// @ts-ignore
import type { OrderRequestDto } from '../../models';
// @ts-ignore
import type { STRINGArrayWrapper } from '../../models';
// @ts-ignore
import type { SearchArea } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { ThirdPartyFileArrayWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyFileWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyFolderContentWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyFolderWrapper } from '../../models';
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
         * Reports which of the submitted titles already belong to a file in the folder, so an upload can decide in  advance whether to overwrite or to ask for another name. Only the clashing titles come back, unordered and  without repetitions, and an empty array means every name is free. Matching is by title and ignores case, so a  name that differs only in capitalisation is still reported; an existing file that is encrypted is left out,  because an upload cannot take it over. The call changes nothing. It needs the same right as the upload itself,  the right to add content to the folder, which room managers and content creators have and readers, editors and  guests do not; an archived room, a section root and a folder the caller cannot write to are all refused, while  an unknown folder is answered as missing. A request without `filesTitle` is rejected as an invalid request, an  empty list is accepted and answers with an empty array.
         * @summary Check for upload conflicts
         * @param {number | string} folderId The folder whose contents the names are tested against; take the id from a listing such as  `GET api/2.0/files/@root`.
         * @param {CheckUploadRequest} checkUploadRequest The names to test against the files the folder already holds.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkUpload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-upload/
         */
        checkUpload: async (folderId: number | string, checkUploadRequest: CheckUploadRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Creates a folder inside the folder named in the path and answers with the folder as it was stored. The title  is trimmed, may not be blank and is refused when it is longer than the limit the schema prints; titles are not  required to be unique, so creating the same title twice leaves two folders side by side, which makes the call  mutating and not idempotent. The caller needs the right to create content in the parent, which the room  manager, a content creator and the owner of a personal section have; a member without that right, an archived  parent, and a section root that only holds rooms - Rooms, Forms and AI agents - are all refused, as is a  parent that does not exist. Rooms are not created here: use `POST api/2.0/files/rooms` for those, and this  operation for ordinary folders within them. Members of the room are notified of the new folder. Read the  identifier of the new folder from `id` and fill it with `POST api/2.0/files/{folderId}/upload`.
         * @summary Create a folder
         * @param {number | string} folderId The folder the request is addressed to: when a folder is created it is the parent that receives the new  folder, and when a folder is renamed it is the folder that gets the new title.
         * @param {CreateFolder} createFolder The title carried by the request body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/
         */
        createFolder: async (folderId: number | string, createFolder: CreateFolder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Answers with the primary external link of a folder or a room, creating it on the first call and returning the  one that already exists afterwards, so the operation is idempotent in effect: a second call with other  parameters does not reconfigure the existing link, and changing one is the business of  `PUT api/2.0/files/folder/{id}/links`. The parameters therefore only shape the link at the moment it is born -  `access` its rights, `title` its name, `expirationDate` its lifetime, which is unlimited here unless one is  given, `internal` whether only signed-in members may follow it, `denyDownload` whether the contents may only  be viewed, and `password` a secret to be asked for. Sending `access` with the value that grants nothing  creates no link and answers with nothing. The caller needs the right to manage the links of the room the  folder belongs to, which its manager and a portal administrator acting as room manager have, and a member with  content-creator or read access is refused with 403; an unknown folder is answered with 404. Read the address  from `sharedTo.shareLink`.
         * @summary Create the folder primary external link
         * @param {number | string} id The folder or room the link belongs to.
         * @param {FolderLinkRequest} folderLinkRequest The link and the way it is to be shaped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder-primary-external-link/
         */
        createFolderPrimaryExternalLink: async (id: number | string, folderLinkRequest: FolderLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Queues a background job that renders the history of a folder into a spreadsheet, or into a CSV file when  `format` asks for one, and saves the result in the caller\'s My documents. The answer is the queued task, not  the report: poll `GET api/2.0/files/folder/{folderId}/log/report` until `isCompleted` is true, then take the  file from `resultFileId`, `resultFileName` and `resultFileUrl`, of which a CSV report fills only the last two.  `from` and `to` limit the exported period; leaving both out exports the whole history. While a report for the  same folder and caller is still running, this call joins it and answers with the running task instead of  starting a second one, so retrying is safe. The caller needs read access to the folder and may not be a guest,  and the portal plan has to include the audit feature - otherwise the call is refused, with 403 for the access  rule and 404 for a folder that does not exist. Only a portal administrator gets the address, browser and  platform columns. Give up a running report with `DELETE api/2.0/files/folder/{folderId}/log/report`.
         * @summary Start the folder history report generation
         * @param {number} folderId The folder whose history is exported; the report covers the folder itself and the entries inside it.
         * @param {AuditReportFormat} [format] The shape the report is written in: `Xlsx` produces a spreadsheet that is saved as a file of the portal, while  `Csv` produces a comma-separated text file that is uploaded to My documents without being reported back with  a file identifier.
         * @param {string} [from] The earliest moment an exported entry may have, read in the time zone of the portal; left out, the report  starts at the oldest entry the portal still keeps.
         * @param {string} [to] The latest moment an exported entry may have, read in the time zone of the portal; left out, the report ends  at the newest entry.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/
         */
        createReportFolderHistory: async (folderId: number, format?: AuditReportFormat, from?: string, to?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
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
         * Queues the deletion of one folder together with everything inside it, and answers with the file operations of  the caller, the one just created among them. The folder is not gone when the response arrives: poll  `GET api/2.0/files/fileops` until the operation reports `finished`, and read its `error` to learn whether the  deletion succeeded. By default the folder is moved to the Trash section, from where it can be restored;  `immediately=true` discards it for good instead, and inside a room, where there is no Trash, deletion is  always final. `deleteAfter=true` postpones the deletion until the editing sessions on the contents have ended,  so files somebody is working on are not pulled away. The caller needs the right to delete the folder, which  the room manager, a portal administrator acting as room manager and a content creator acting on a folder of  their own have; editing access alone, read access and a guest are refused. The call is destructive. To delete  several items at once use `PUT api/2.0/files/fileops/delete`.
         * @summary Delete a folder
         * @param {number | string} folderId The folder to delete, together with everything it holds.
         * @param {DeleteFolder} deleteFolder How the deletion is to be carried out.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-folder/
         */
        deleteFolder: async (folderId: number | string, deleteFolder: DeleteFolder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Rebuilds the spreadsheet that gathers the answers submitted to a form, starting from the Complete folder  that holds the filled copies. The answer names the original form the results belong to, says in `isNewFile`  whether the spreadsheet is being created or an existing one rewritten in place, and carries the queued job in  `task`; the file itself is not ready yet, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the identifier  of the form until the task reports completion. The folder has to be the Complete folder of a form-filling  room and has to hold at least one submitted copy whose original form still exists, and the caller needs the  right to maintain that form, which the room manager has. A folder that does not exist, or one that holds  nothing to report on, is answered with 404, and a folder of the wrong kind or a caller without those rights  with 403. The call is mutating: it writes the results file of the form.
         * @summary Generate XLSX report by folder
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
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
         * Returns the caller\'s own Favorites section: the files and folders this account has marked as favorite,  together with the section folder itself. Favorites are per-account, so the entries another member marked are  not listed here, and a guest sees only their own, usually empty, list. Mark a single file with  `GET api/2.0/files/favorites/{fileId}`, or add and remove batches of files and folders with  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`. Nothing in the section is modified,  though passing `sortBy` saves the requested order as the default order for this account. Entries the caller  can no longer read, and entries that have been moved to the Trash section, drop out of the listing even  though their favorite mark stays, so the section can shrink without an explicit unmark. `folders` and `files`  hold one page of the section, `total` counts the entries matching the request before `count` and `startIndex`  are applied, and `current` describes the section folder itself.
         * @summary Get the Favorites section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the section unfiltered.
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
         * Reports how much storage the portal spends on documents, split by section - My documents, Trash, Rooms,  Archive and, where the feature is on, AI agents - each entry naming the section and the space it takes in  bytes. The figures cover the whole portal rather than the calling account, and moving an entry between  sections moves its space with it, which is why deleting a file to the Trash does not free anything until the  Trash is emptied. Only a caller who may change portal settings, that is the owner and the portal  administrators, is allowed here; a room administrator, an ordinary member and a guest are all refused. The  call is read-only, takes no parameters and answers with the sections in a fixed order. The quota of the portal  as a whole, storage outside documents included, is not part of this answer.
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
         * Lists the fields the completed forms of a form-filling room carry, each of them a key and the kind of value  behind it, so that a client can offer them as filters. Feed a pair from this list back as `formsItemKey` and  `formsItemType` of `GET api/2.0/files/{folderId}` to keep only the completed forms whose field of that name  holds a value. The fields are read from the search index of one of the forms already gathered, so they appear  once indexing has caught up with the first submission. Only the Complete folder of a form-filling room  carries such fields: for any other folder, for a folder that does not exist and for one that has been deleted  the answer is an empty list rather than a refusal, and the same holds while nothing has been submitted yet.  The operation reads the index alone, changes nothing and needs no authorization.
         * @summary Get folder form filter
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
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
         * Returns one page of the contents of a folder - its subfolders in `folders`, its files in `files`, the folder  itself in `current` and the chain of parents in `pathParts` - and is the operation a client browses the file  tree with. `filterType`, `filterValue`, `extension`, `userIdOrGroupId`, `sharedBy` and `folderType` narrow  what is listed, `applyFilterOption` decides whether those filters bite on the files, on the folders or on  both, and `withSubFolders`, which is on unless it is switched off, lets a narrowed request descend through the  whole subtree instead of the top level alone. `filterValue` is matched against titles and against indexed  document content, and indexing is asynchronous, so a file uploaded a moment ago can be missing from a search  for a short while. `count` and `startIndex` page through the result while `total` counts everything that  matches, and `sortBy` with `sortOrder` both order the page and are saved as the default order of the account.  Reading a room or an ordinary folder clears its new-item marks for the caller. A caller who may not read the  folder is answered with 403, and a folder that does not exist with 404.
         * @summary Get a folder by ID
         * @param {number | string} folderId The folder whose contents are listed. Each section root has an operation of its own, such as  `GET api/2.0/files/@my`, and every other folder is opened by the identifier a listing gave for it.
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {string} [sharedBy] Restricts the listing to the entries this member shared, which narrows a shared listing down to what one  person handed out.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, spreadsheets, images or one type of room.  Omit it to list every kind the folder holds.
         * @param {number | string} [roomId] Keeps only the entries that lie in this room, which matters when the listing being read gathers entries from  more than one of them.
         * @param {Array<GetFolderByFolderIdFolderTypeEnum>} [folderType] Keeps only the folders of these kinds, each given as the number of a folder type; it is how a listing is  narrowed down to, say, the form-filling folders of a room.
         * @param {boolean} [excludeSubject] Turns `userIdOrGroupId` around: with true the entries of that member or group are the ones left out, with  false they are the only ones kept.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
         * @param {boolean} [withSubFolders] Whether a narrowed request reaches into the subfolders: with true, which is what an omitted parameter means,  matching entries are gathered from the whole subtree, with false only the top level is read. It makes a  difference only once `filterType`, `userIdOrGroupId` or `filterValue` narrows the request, because an  unfiltered listing always shows the top level alone.
         * @param {string} [extension] Keeps only the files carrying one of these extensions, several of them separated by commas; the leading dot is  optional.
         * @param {SearchArea} [searchArea] Which area a listing that spans several of them is taken from - the active rooms, the archive, the room  templates or the form-filling rooms. A folder that belongs to one area only settles the area itself and  ignores the parameter.
         * @param {string} [formsItemKey] Keeps only the completed forms whose form field of this name holds a value. Take the name from  `GET api/2.0/files/{folderId}/formfilter`, and use it in the folder that gathers the completed copies of a  form-filling room.
         * @param {string} [formsItemType] The kind of the form field named by `formsItemKey`, taken from the same list; the two are sent together.
         * @param {number} [count] The size of one page of the listing. Pair it with `startIndex` to walk through the result, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the listing is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the folder unfiltered.
         * @param {Location} [location] Where the entries of a tag-based listing have to live to be kept: `Room` keeps what lies in a room,  `Documents` what lies in a personal section, and `Link` what was reached through an external link that is  still valid. It shapes the Favorites and Recent listings and does nothing in an ordinary folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         */
        getFolderByFolderId: async (folderId: number | string, userIdOrGroupId?: string, sharedBy?: string, filterType?: FilterType, roomId?: number | string, folderType?: Array<GetFolderByFolderIdFolderTypeEnum>, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, withSubFolders?: boolean, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (sharedBy !== undefined) {
                localVarQueryParameter['sharedBy'] = sharedBy;
            }

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

            if (roomId !== undefined) {
                localVarQueryParameter['roomId'] = roomId;
            }

            if (folderType) {
                localVarQueryParameter['folderType'] = folderType;
            }

            if (excludeSubject !== undefined) {
                localVarQueryParameter['excludeSubject'] = excludeSubject;
            }

            if (applyFilterOption !== undefined) {
                localVarQueryParameter['applyFilterOption'] = applyFilterOption;
            }

            if (withSubFolders !== undefined) {
                localVarQueryParameter['withSubFolders'] = withSubFolders;
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
         * Lists what has happened to a folder and to the entries inside it - creations, renames, uploads, moves,  deletions and changes of access - each record naming the action, the moment it happened and the member behind  it. Records that belong to one action are grouped, so a batch arrives as a single entry carrying the rest of  itself in `related`, and the list runs from the most recent record backwards. `fromDate` and `toDate` narrow  the period, `startIndex` and `count` page through the result, and the number of records matching the request  is reported in the response headers rather than in the body. Any member who can read the folder may read its  history; a caller without access is answered with 403 and a folder that does not exist with 404. When the  folder is a form-filling folder the caller reached through a filling invitation, the history is narrowed to  what that caller may see. The call is read-only. To take the same history away as a spreadsheet, start a  report with `POST api/2.0/files/folder/{folderId}/log/report`.
         * @summary Get folder history
         * @param {number} folderId The folder whose activity log is read; the log covers the folder itself and the entries inside it.
         * @param {string} [fromDate] The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps.
         * @param {string} [toDate] The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry.
         * @param {number} [count] How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body.
         * @param {number} [startIndex] How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-history/
         */
        getFolderHistory: async (folderId: number, fromDate?: string, toDate?: string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
                localVarQueryParameter['fromDate'] = (fromDate as any instanceof Date) ?
                    (fromDate as any).toISOString() :
                    fromDate;
            }

            if (toDate !== undefined) {
                localVarQueryParameter['toDate'] = (toDate as any instanceof Date) ?
                    (toDate as any).toISOString() :
                    toDate;
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
         * Returns one folder as an object - its title, its parent, the moments it was created and last changed, the  access the caller has to it, the number of items that are new for them, and the room settings when the folder  is a room - without listing anything inside it. Use it to resolve a folder identifier into something  displayable, and `GET api/2.0/files/{folderId}` when the contents are what is wanted; unlike that operation,  this one leaves the new-item marks of the folder alone. Any member who can read the folder may call it, and an  anonymous caller only through an external link that grants access, everybody else being refused; a folder that  does not exist is answered as not found. The call is read-only. The chain of parents above the folder is not  part of the answer and is read with `GET api/2.0/files/folder/{folderId}/path`.
         * @summary Get folder information
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/
         */
        getFolderInfo: async (folderId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Lists the external links of a folder or a room, each with its identifier, title, address, rights, expiration  date, password flag and download restriction, the primary link among them once it exists. At most the first  hundred links are answered and the number returned is reported in the response headers; there are no paging  parameters here. A folder that has never been shared by link answers with an empty list, and so does a member  who may read the folder but not manage its links - the empty answer therefore means nothing to show you  rather than no links exist. A member without access to the room is refused, an anonymous caller is rejected,  and a folder that does not exist is answered as not found. The call is read-only. Take an identifier from here  to `PUT api/2.0/files/folder/{id}/links` to change or remove that link, and read the primary one alone with  `GET api/2.0/files/folder/{id}/link`.
         * @summary Get folder external links
         * @param {number | string} id The folder or room whose external links are listed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-links/
         */
        getFolderLinks: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the chain of folders that leads to the folder named in the path, ordered from the section root down to  the folder itself, which is the last entry. It is what a breadcrumb trail is built from, and it also tells a  client which section - a room, the personal section, the archive - a bare folder identifier belongs to. Only  the folders the caller may see are part of the chain, so a member who was given access to a folder deep inside  a room gets a shorter path than the room manager does. The caller needs read access to the folder and is  otherwise answered with 403, while a folder that does not exist is answered as not found. The call is  read-only and takes no paging parameters. To go the other way, from a folder down into its contents, call  `GET api/2.0/files/{folderId}`.
         * @summary Get the folder path
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-path/
         */
        getFolderPath: async (folderId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Answers with the primary external link of a folder or a room - the one the Copy link action of a client  hands out - with its address in `sharedTo.shareLink`, its rights in `access`, and its title, expiration date,  password flag and download restriction beside them. The link is created on the first read if the folder has  none, with read rights, no password and no expiry, so this operation mutates on that first call and is a plain  read afterwards; repeated calls answer with the same link identifier. The caller needs the right to manage the  links of the room the folder belongs to, which its manager and a portal administrator acting as room manager  have; a member with read access alone is refused with 403 and an anonymous caller is rejected, while a link  that was deliberately revoked is answered with 404 rather than being recreated. The paging parameters are  accepted for compatibility and leave the single link answered here unchanged. Every external link of the same  folder is listed by `GET api/2.0/files/folder/{id}/links`.
         * @summary Get the folder primary external link
         * @param {number | string} id The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this folder that return a list; an operation  that answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-primary-external-link/
         */
        getFolderPrimaryExternalLink: async (id: number | string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Lists the folders that sit directly inside the folder named in the path, ordered by title, without their own  contents and without the files that lie beside them. The whole list arrives at once - there are no paging or  filtering parameters here - so for a large folder, or when the files are wanted as well, use  `GET api/2.0/files/{folderId}`, which pages and filters. A folder that holds no subfolders answers with an  empty list. The caller needs read access to the folder, and only the subfolders they may see are listed, so a  member of a room can get fewer entries than its manager; a caller without access is answered with 403, and a  folder that does not exist, or one that has been deleted for good, is answered as not found. The call is  read-only and leaves the new-item marks of the folder alone.
         * @summary Get subfolders
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folders/
         */
        getFolders: async (folderId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the Forms section: the flat list of form-filling rooms the caller may read. Such rooms are stored  under the Rooms tree but are surfaced only here, so `GET api/2.0/files/rooms` leaves them out of the active  area and lists them when `searchArea` names the forms area instead. The section is not expanded into room  content, so `folders` carries the rooms while `files` comes back empty; to read what is inside one of them,  call `GET api/2.0/files/{folderId}` with the room identifier. Nothing is modified, though passing `sortBy`  saves the requested order as the default order for this account. `filterType`, `filterValue`,  `userIdOrGroupId` and the sorting parameters narrow and order the room list, `count` and `startIndex` page  through it, `total` reports how many rooms match the request in full, and `current` describes the section  folder itself.
         * @summary Get the Forms section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the section unfiltered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFormsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-forms-folder/
         */
        getFormsFolder: async (userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/@forms`;
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
         * Returns the contents of the caller\'s My documents section, the personal storage that belongs to this account  alone and stays invisible to other members until something in it is shared explicitly. Any authenticated  member that has a personal section can read it; guest accounts are not given one, and the call then answers  404. Nothing in the section is modified, though passing `sortBy` saves the requested order as the default  order for this account. Without a filter only the top level of the section is listed; as soon as `filterType`,  `userIdOrGroupId` or `filterValue` narrows the request, the search descends through the whole subtree.  `filterValue` is matched against titles and against indexed document content, and the index is written  asynchronously, so a file uploaded a moment ago can be missing from a search for a short while. `folders` and  `files` hold one page of the result, `total` counts everything that matches before `count` and `startIndex`  are applied, and `current` describes the section folder. To open a folder inside the section, call  `GET api/2.0/files/{folderId}` with its identifier.
         * @summary Get the My documents section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by, matched as a substring of entry titles. Omit it to list the  section unfiltered.
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
         * Lists the entries of a folder that are new for the calling member - the files and folders created or changed  there since they last opened it - ordered from the most recently changed backwards. It is what the badge of a  room is filled from, and it is personal: two members of the same room get different answers. Reading this list  does not clear the marks, so the same entries come back until the folder itself is opened with  `GET api/2.0/files/{folderId}`, which does clear them. A folder with nothing new answers with an empty list,  and marks disappear on their own when the entry behind them is deleted or moved out of reach. The caller needs  read access to the folder and is otherwise answered with 403. The whole list arrives at once, without paging  or filtering, and the call is read-only.
         * @summary Get new folder items
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewFolderItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-folder-items/
         */
        getNewFolderItems: async (folderId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the Recent section: the files the calling account has opened lately. The section holds files only,  so `folders` comes back empty, and it is personal, so another member\'s history is not visible here. A file is  added when it is opened and can also be added explicitly with `POST api/2.0/files/file/{fileId}/recent`;  `DELETE api/2.0/files/recent` clears the whole history, and `PUT api/2.0/files/displayrecent` switches the  section on and off for the account, which also decides whether `GET api/2.0/files/@root` includes it. Nothing  in the section is modified, though passing `sortBy` saves the requested order as the default order for this  account. The listing is ordered by the moment the caller last opened each file, newest first, and `sortBy` and  `sortOrder` do not change that order. `files` holds one page, `total` counts the files matching the request  before `count` and `startIndex` are applied, and `current` describes the section folder itself.
         * @summary Get the Recent section
         * @param {string} [userIdOrGroupId] Restricts the listing to the files authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list the whole history.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of file, such as documents, spreadsheets or images. Omit it to list every  kind the history holds.
         * @param {boolean} [excludeSubject] Inverts `userIdOrGroupId`: with `true` the files of that member or group are the ones left out of the listing  instead of the only ones kept.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of a listing `filterType` and `filterValue` are applied to. The Recent section holds  files only, so the value does not change what comes back.
         * @param {SearchArea} [searchArea] The area a listing is taken from. The Recent section is assembled from the caller\'s own open history rather  than from an area, so the value does not change which files are returned.
         * @param {Array<string>} [extension] The file extensions the listing is limited to, matched against the end of the file name. The leading dot is  optional, and the parameter is repeated once per extension.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place. The Recent section keeps its own newest-first order, so the value does not  reorder this listing.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account. The Recent section keeps its own newest-first order, so the value does not reorder this  listing.
         * @param {string} [filterValue] The search string the history is filtered by: it is matched as a substring of file titles and against the  indexed document content as well. Omit it to list the whole history.
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
         * Reports how far the history report of a folder has got, and is the operation to poll after  `POST api/2.0/files/folder/{folderId}/log/report` has queued one. `percentage` climbs to 100, `isCompleted`  turns true when the job is over however it ended, `error` carries the reason when it failed, and  `resultFileId`, `resultFileName` and `resultFileUrl` name the file that was saved in the caller\'s My  documents - a CSV report leaving the identifier empty. An empty answer means there is no report for this  folder and caller, either because none was started or because a finished one has already been picked up by an  earlier poll. The caller needs read access to the folder and may not be a guest, and the portal plan has to  include the audit feature; a caller who fails the access rule is answered with 403 and a folder that does not  exist with 404. The call is read-only, and each caller sees only their own report.
         * @summary Get the folder history report generation status
         * @param {number} folderId The folder whose history report is being polled. It is the folder that was              passed to the operation that started the report.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-report-folder-history/
         */
        getReportFolderHistory: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getReportFolderHistory', 'folderId', folderId)

            const localVarPath = `/api/2.0/files/folder/{folderId}/log/report`
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
         * Returns every top-level section the calling account can see in one response, each of them a full section  object carrying its own first page of content: Favorites, Recent, Shared with me, My documents,  Trash, Rooms, Forms, Archive and, while AI access is enabled for the portal, AI agents. A section is  left out when the account has none of it, which is why a guest gets no personal section, and Recent is  listed only while it is switched on with `PUT api/2.0/files/displayrecent`. Pass `withoutTrash=true` to drop  the Trash section. The filters, `count` and `startIndex` are applied to each section separately, so  `count=1` returns one entry per section and every section reports its own `total`. Because it builds the  content of all of them, this is the most expensive listing in the module: when a single section is enough,  read it directly, for example with `GET api/2.0/files/@my`. The call modifies nothing in the sections and  leaves their new-item badges untouched, though passing `sortBy` saves the requested order as the default order  for this account.
         * @summary Get filtered sections
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the content listed inside every returned section to a single kind of entry, such as documents, images  or one type of room. Omit it to list every kind the sections hold.
         * @param {boolean} [withoutTrash] Set it to `true` to leave the Trash section out of the returned set of sections; with `false`, or when the  parameter is omitted, the section is returned whenever the account has one of its own.
         * @param {number} [count] The size of the content page returned for each section separately, so a value of 1 yields one entry per  section rather than one entry in total.
         * @param {number} [startIndex] The number of matching entries skipped in each section before its page begins; add `count` to it to ask for  the next page of every section.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the content of every section is filtered by: it is matched as a substring of entry titles  and, for files, against the indexed document content as well. Omit it to list the sections unfiltered.
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
         * Returns the caller\'s Trash section: the files and folders this account has deleted, kept there until they  are restored or discarded. Each member has a Trash of their own and sees only what they deleted themselves.  Restore an entry by moving it back with `PUT api/2.0/files/fileops/move`, or discard the whole section with  `PUT api/2.0/files/fileops/emptytrash`; both start a background operation that is polled through  `GET api/2.0/files/fileops`. This call itself modifies nothing, though passing `sortBy` saves the requested  order as the default order for this account. Only the top level of the section is listed, so the contents of a  deleted folder are not expanded into it, and `filterValue` is matched against titles alone here rather than  against document content. `folders` and `files` hold one page of the result, `total` counts everything that  matches before `count` and `startIndex` are applied, and `current` describes the section folder. An account  that is given no Trash of its own, an outsider for instance, receives 404.
         * @summary Get the Trash section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by, matched as a substring of entry titles. Omit it to list the  section unfiltered.
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
         * Stores a file in the folder named by the path in a single request, taking its name from `title` rather than  from the uploaded part, which is what separates it from `POST api/2.0/files/{folderId}/upload`. The content  may arrive either as a multipart part or as the raw request body. The name is stripped of characters a title  cannot hold and truncated, and `createNewIfExist` settles the clash: false adds a new version to the file that  already carries the name, true keeps both by giving the new one a numeric suffix. The caller needs the right  to add content to the folder, so a reader, an editor and a guest get 403, a section root and an archived room  are refused as well, and an unknown folder gives 404. Formats the portal converts are converted afterwards in  the background; pass `keepConvertStatus` to keep the outcome readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. The answer is the stored file. A large payload belongs in a  chunked session instead.
         * @summary Insert a file
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {File} [insertFileFile] The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw  request body, which is what a client that cannot build a form does; when both are present the form part wins.
         * @param {string} [insertFileTitle] The name to store the file under, extension included. It wins over the name of the uploaded part, which is the  reason to choose this operation over the plain upload, and it is the only name available when the content  arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170  characters before the file is stored.
         * @param {boolean} [insertFileCreateNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [insertFileKeepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
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
        insertFile: async (folderId: number | string, insertFileFile?: File, insertFileTitle?: string, insertFileCreateNewIfExist?: boolean, insertFileKeepConvertStatus?: boolean, insertFileStreamCanRead?: boolean, insertFileStreamCanWrite?: boolean, insertFileStreamCanSeek?: boolean, insertFileStreamCanTimeout?: boolean, insertFileStreamLength?: number, insertFileStreamPosition?: number, insertFileStreamReadTimeout?: number, insertFileStreamWriteTimeout?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Stores one file in the caller\'s own My documents section, the personal storage every portal member has, and  returns the stored file. The destination takes no identifier: it is resolved from the calling account and  created on first use, while a guest account has none and is answered as missing (404). Send the content as a  `multipart/form-data` part or as the raw request body, and name it with `title`, which wins over the name of  the uploaded part and has invalid characters replaced before storing. The call is not idempotent: by default a  file of the same title is overwritten as a new version, while `createNewIfExist=true` stores a separate copy  under a title made unique with a numeric suffix; a title held by a file that is locked or open in the editor  cannot be overwritten either, and a second file appears under the same title. Formats listed in  `extsMustConvert` of `GET api/2.0/files/settings` are converted after the response is sent;  `keepConvertStatus=true` keeps that result readable through `GET api/2.0/files/file/{fileId}/checkconversion`,  which otherwise drops it. Files over the single-request size limit or the account\'s storage quota are refused:  send those through `POST api/2.0/files/{folderId}/upload/create_session`, and use  `POST api/2.0/files/{folderId}/insert` for any other destination.
         * @summary Insert a file into My documents
         * @param {File} [file] The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw  request body, which is what a client that cannot build a form does; when both are present the form part wins.
         * @param {string} [title] The name to store the file under, extension included. It wins over the name of the uploaded part, which is the  reason to choose this operation over the plain upload, and it is the only name available when the content  arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170  characters before the file is stored.
         * @param {boolean} [createNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [keepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
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
         * Gives a folder a new title and answers with the folder as it now stands. The title is trimmed, may not be  blank and is refused when it is longer than the limit the schema prints; a title that matches the current one  leaves the folder untouched, and titles need not be unique among the neighbours. The caller needs the right to  rename the folder, which the room manager, a content creator acting on a folder of their own and the owner of  a personal section have, while a guest is refused with 403 whatever their access; a folder in the Trash  section or in an archived room cannot be renamed either, and a folder that does not exist is answered as  not found. A room may be renamed here as well, in which case the caller needs the right to edit the  room, and `PUT api/2.0/files/rooms/{id}` is the operation that changes its other settings. The call is  mutating and idempotent; on a folder stored in a connected third-party account the identifier of the folder  may change with the title.
         * @summary Rename a folder
         * @param {number | string} folderId The folder the request is addressed to: when a folder is created it is the parent that receives the new  folder, and when a folder is renamed it is the folder that gets the new title.
         * @param {CreateFolder} createFolder The title carried by the request body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for renameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/
         */
        renameFolder: async (folderId: number | string, createFolder: CreateFolder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Puts a folder at a given position among the entries of its parent and answers with the folder, its `order`  reporting where it now stands. Positions count from 1, and the entry that held the wanted position, together  with everything after it, is shifted to make room, so the numbering of the parent stays without gaps; a  position beyond the end places the folder last. The value may also be sent as a dotted path, as in 1.2.3, in  which case only its last segment is read. Ordering is what the manual arrangement of a room is built on, and  it only means something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The  caller needs edit access to the folder, which room managers and content creators have, and a member without it  is refused, while a folder that does not exist is answered as not found. The call is mutating and idempotent.  To move several entries in one go use `PUT api/2.0/files/order`.
         * @summary Set folder order
         * @param {number | string} folderId The folder to move.
         * @param {OrderRequestDto} [orderRequestDto] The position the folder is to take.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/
         */
        setFolderOrder: async (folderId: number | string, orderRequestDto?: OrderRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Creates an external link to a folder or a room, or changes or revokes an existing one, and answers with the  link as it now stands. `linkId` decides which: an identifier that is not yet in use, the empty one included,  creates a link, while the identifier of an existing link rewrites it, so the whole set of parameters is  applied every time and a field left out is reset rather than kept. `access` carries the rights the link  grants, and `access` set to the value that denies everything revokes the link instead - the answer is then  empty, and a revoked primary link is not recreated by a later read. `title` names the link for the people who  manage it, `expirationDate` limits its lifetime and is ignored when it lies in the past, `password` asks  visitors for a secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members  alone, and `primary=true` makes it the primary link of the folder. The caller needs the right to manage the  links of the room, which its manager and a portal administrator acting as room manager have; anyone else is  refused and an unknown folder is answered as not found. The call is mutating.
         * @summary Set the folder external link
         * @param {number | string} id The folder or room the link belongs to.
         * @param {FolderLinkRequest} folderLinkRequest The link and the way it is to be shaped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-primary-external-link/
         */
        setFolderPrimaryExternalLink: async (id: number | string, folderLinkRequest: FolderLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Gives up the history report the caller has started for a folder with  `POST api/2.0/files/folder/{folderId}/log/report`. The request only asks the background worker to stop, and  the answer carries no body, so a following `GET api/2.0/files/folder/{folderId}/log/report` is what shows the  task ending as cancelled. Asking to terminate when nothing is running is accepted and changes nothing, which  makes the call safe to repeat. A report that has already finished is not undone by this call and its file  stays in My documents. The caller needs read access to the folder and may not be a guest, and the portal  plan has to include the audit feature; a caller who fails the access rule is answered with 403 and a folder  that does not exist with 404. Each caller can only terminate their own report.
         * @summary Terminate the folder history report generation
         * @param {number} folderId The folder whose running history report is to be given up. It is the folder that              was passed to the operation that started the report.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-report-folder-history/
         */
        terminateReportFolderHistory: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('terminateReportFolderHistory', 'folderId', folderId)

            const localVarPath = `/api/2.0/files/folder/{folderId}/log/report`
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
         * Stores a file in the folder named by the path in a single multipart request, taking its name from the uploaded  part; use `POST api/2.0/files/{folderId}/insert` when the name has to be given separately or the content is  sent as a raw body. The answer is a list that always holds exactly one file. `createNewIfExist` settles the  clash: false adds a new version to the file that already carries the name, true keeps both by giving the new  one a numeric suffix. `storeOriginalFile` reaches further than this call, because it saves the setting on the  calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later  uploads. The caller needs the right to add content to the folder, so a reader, an editor and a guest get 403,  a section root and an archived room are refused as well, and an unknown folder gives 404. A request without a  file is rejected as invalid, and a payload above the portal upload limit is refused.
         * @summary Upload a file
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {boolean} [createNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [storeOriginalFile] Reaches further than this request: it writes a setting on the calling account, the same one  `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the  uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted  one, and leaving it out keeps whatever the account already has.
         * @param {boolean} [keepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
         * @param {File} [file] The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the  stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request  without it is rejected as invalid.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/
         */
        uploadFile: async (folderId: number | string, createNewIfExist?: boolean, storeOriginalFile?: boolean, keepConvertStatus?: boolean, file?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (createNewIfExist !== undefined) {
                localVarQueryParameter['createNewIfExist'] = createNewIfExist;
            }

            if (storeOriginalFile !== undefined) {
                localVarQueryParameter['storeOriginalFile'] = storeOriginalFile;
            }

            if (keepConvertStatus !== undefined) {
                localVarQueryParameter['keepConvertStatus'] = keepConvertStatus;
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
         * Uploads one file into the caller\'s own My documents section and returns it inside a single-element array; one  request stores exactly one file. The destination takes no identifier: it is resolved from the calling account  and created on first use, while a guest account has none and is answered as missing (404). The body has to be  `multipart/form-data` carrying the file part; a request without it is rejected as invalid, and the stored name  comes from that part, since unlike `POST api/2.0/files/@my/insert` there is no separate title. The call is not  idempotent: by default a file of the same title is overwritten as a new version, while `createNewIfExist=true`  stores a separate copy under a title made unique with a numeric suffix. `storeOriginalFile` is not a  per-request switch: it writes the same account setting as `PUT api/2.0/files/storeoriginal`, which decides  what happens to the formats listed in `extsMustConvert` of `GET api/2.0/files/settings` when they are  converted after the response - false replaces the uploaded file with the converted one, true keeps both;  `keepConvertStatus=true` keeps that conversion result readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. Files over the single-request size limit or the account\'s  storage quota are refused; send those through `POST api/2.0/files/{folderId}/upload/create_session`.
         * @summary Upload a file to My documents
         * @param {boolean} [createNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [storeOriginalFile] Reaches further than this request: it writes a setting on the calling account, the same one  `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the  uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted  one, and leaving it out keeps whatever the account already has.
         * @param {boolean} [keepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
         * @param {File} [file] The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the  stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request  without it is rejected as invalid.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFileToMy operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/
         */
        uploadFileToMy: async (createNewIfExist?: boolean, storeOriginalFile?: boolean, keepConvertStatus?: boolean, file?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (createNewIfExist !== undefined) {
                localVarQueryParameter['createNewIfExist'] = createNewIfExist;
            }

            if (storeOriginalFile !== undefined) {
                localVarQueryParameter['storeOriginalFile'] = storeOriginalFile;
            }

            if (keepConvertStatus !== undefined) {
                localVarQueryParameter['keepConvertStatus'] = keepConvertStatus;
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
         * Reports which of the submitted titles already belong to a file in the folder, so an upload can decide in  advance whether to overwrite or to ask for another name. Only the clashing titles come back, unordered and  without repetitions, and an empty array means every name is free. Matching is by title and ignores case, so a  name that differs only in capitalisation is still reported; an existing file that is encrypted is left out,  because an upload cannot take it over. The call changes nothing. It needs the same right as the upload itself,  the right to add content to the folder, which room managers and content creators have and readers, editors and  guests do not; an archived room, a section root and a folder the caller cannot write to are all refused, while  an unknown folder is answered as missing. A request without `filesTitle` is rejected as an invalid request, an  empty list is accepted and answers with an empty array.
         * @summary Check for upload conflicts
         * @param {number | string} folderId The folder whose contents the names are tested against; take the id from a listing such as  `GET api/2.0/files/@root`.
         * @param {CheckUploadRequest} checkUploadRequest The names to test against the files the folder already holds.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkUpload operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-upload/
         */
        async checkUpload(folderId: number | string, checkUploadRequest: CheckUploadRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<STRINGArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkUpload(folderId, checkUploadRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.checkUpload']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a folder inside the folder named in the path and answers with the folder as it was stored. The title  is trimmed, may not be blank and is refused when it is longer than the limit the schema prints; titles are not  required to be unique, so creating the same title twice leaves two folders side by side, which makes the call  mutating and not idempotent. The caller needs the right to create content in the parent, which the room  manager, a content creator and the owner of a personal section have; a member without that right, an archived  parent, and a section root that only holds rooms - Rooms, Forms and AI agents - are all refused, as is a  parent that does not exist. Rooms are not created here: use `POST api/2.0/files/rooms` for those, and this  operation for ordinary folders within them. Members of the room are notified of the new folder. Read the  identifier of the new folder from `id` and fill it with `POST api/2.0/files/{folderId}/upload`.
         * @summary Create a folder
         * @param {number | string} folderId The folder the request is addressed to: when a folder is created it is the parent that receives the new  folder, and when a folder is renamed it is the folder that gets the new title.
         * @param {CreateFolder} createFolder The title carried by the request body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/
         */
        async createFolder(folderId: number | string, createFolder: CreateFolder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFolder(folderId, createFolder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.createFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers with the primary external link of a folder or a room, creating it on the first call and returning the  one that already exists afterwards, so the operation is idempotent in effect: a second call with other  parameters does not reconfigure the existing link, and changing one is the business of  `PUT api/2.0/files/folder/{id}/links`. The parameters therefore only shape the link at the moment it is born -  `access` its rights, `title` its name, `expirationDate` its lifetime, which is unlimited here unless one is  given, `internal` whether only signed-in members may follow it, `denyDownload` whether the contents may only  be viewed, and `password` a secret to be asked for. Sending `access` with the value that grants nothing  creates no link and answers with nothing. The caller needs the right to manage the links of the room the  folder belongs to, which its manager and a portal administrator acting as room manager have, and a member with  content-creator or read access is refused with 403; an unknown folder is answered with 404. Read the address  from `sharedTo.shareLink`.
         * @summary Create the folder primary external link
         * @param {number | string} id The folder or room the link belongs to.
         * @param {FolderLinkRequest} folderLinkRequest The link and the way it is to be shaped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder-primary-external-link/
         */
        async createFolderPrimaryExternalLink(id: number | string, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFolderPrimaryExternalLink(id, folderLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.createFolderPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that renders the history of a folder into a spreadsheet, or into a CSV file when  `format` asks for one, and saves the result in the caller\'s My documents. The answer is the queued task, not  the report: poll `GET api/2.0/files/folder/{folderId}/log/report` until `isCompleted` is true, then take the  file from `resultFileId`, `resultFileName` and `resultFileUrl`, of which a CSV report fills only the last two.  `from` and `to` limit the exported period; leaving both out exports the whole history. While a report for the  same folder and caller is still running, this call joins it and answers with the running task instead of  starting a second one, so retrying is safe. The caller needs read access to the folder and may not be a guest,  and the portal plan has to include the audit feature - otherwise the call is refused, with 403 for the access  rule and 404 for a folder that does not exist. Only a portal administrator gets the address, browser and  platform columns. Give up a running report with `DELETE api/2.0/files/folder/{folderId}/log/report`.
         * @summary Start the folder history report generation
         * @param {number} folderId The folder whose history is exported; the report covers the folder itself and the entries inside it.
         * @param {AuditReportFormat} [format] The shape the report is written in: `Xlsx` produces a spreadsheet that is saved as a file of the portal, while  `Csv` produces a comma-separated text file that is uploaded to My documents without being reported back with  a file identifier.
         * @param {string} [from] The earliest moment an exported entry may have, read in the time zone of the portal; left out, the report  starts at the oldest entry the portal still keeps.
         * @param {string} [to] The latest moment an exported entry may have, read in the time zone of the portal; left out, the report ends  at the newest entry.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/
         */
        async createReportFolderHistory(folderId: number, format?: AuditReportFormat, from?: string, to?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReportFolderHistory(folderId, format, from, to, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.createReportFolderHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues the deletion of one folder together with everything inside it, and answers with the file operations of  the caller, the one just created among them. The folder is not gone when the response arrives: poll  `GET api/2.0/files/fileops` until the operation reports `finished`, and read its `error` to learn whether the  deletion succeeded. By default the folder is moved to the Trash section, from where it can be restored;  `immediately=true` discards it for good instead, and inside a room, where there is no Trash, deletion is  always final. `deleteAfter=true` postpones the deletion until the editing sessions on the contents have ended,  so files somebody is working on are not pulled away. The caller needs the right to delete the folder, which  the room manager, a portal administrator acting as room manager and a content creator acting on a folder of  their own have; editing access alone, read access and a guest are refused. The call is destructive. To delete  several items at once use `PUT api/2.0/files/fileops/delete`.
         * @summary Delete a folder
         * @param {number | string} folderId The folder to delete, together with everything it holds.
         * @param {DeleteFolder} deleteFolder How the deletion is to be carried out.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-folder/
         */
        async deleteFolder(folderId: number | string, deleteFolder: DeleteFolder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFolder(folderId, deleteFolder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.deleteFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Rebuilds the spreadsheet that gathers the answers submitted to a form, starting from the Complete folder  that holds the filled copies. The answer names the original form the results belong to, says in `isNewFile`  whether the spreadsheet is being created or an existing one rewritten in place, and carries the queued job in  `task`; the file itself is not ready yet, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the identifier  of the form until the task reports completion. The folder has to be the Complete folder of a form-filling  room and has to hold at least one submitted copy whose original form still exists, and the caller needs the  right to maintain that form, which the room manager has. A folder that does not exist, or one that holds  nothing to report on, is answered with 404, and a folder of the wrong kind or a caller without those rights  with 403. The call is mutating: it writes the results file of the form.
         * @summary Generate XLSX report by folder
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
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
         * Returns the caller\'s own Favorites section: the files and folders this account has marked as favorite,  together with the section folder itself. Favorites are per-account, so the entries another member marked are  not listed here, and a guest sees only their own, usually empty, list. Mark a single file with  `GET api/2.0/files/favorites/{fileId}`, or add and remove batches of files and folders with  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`. Nothing in the section is modified,  though passing `sortBy` saves the requested order as the default order for this account. Entries the caller  can no longer read, and entries that have been moved to the Trash section, drop out of the listing even  though their favorite mark stays, so the section can shrink without an explicit unmark. `folders` and `files`  hold one page of the section, `total` counts the entries matching the request before `count` and `startIndex`  are applied, and `current` describes the section folder itself.
         * @summary Get the Favorites section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the section unfiltered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFavoritesFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-favorites-folder/
         */
        async getFavoritesFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritesFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFavoritesFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports how much storage the portal spends on documents, split by section - My documents, Trash, Rooms,  Archive and, where the feature is on, AI agents - each entry naming the section and the space it takes in  bytes. The figures cover the whole portal rather than the calling account, and moving an entry between  sections moves its space with it, which is why deleting a file to the Trash does not free anything until the  Trash is emptied. Only a caller who may change portal settings, that is the owner and the portal  administrators, is allowed here; a room administrator, an ordinary member and a guest are all refused. The  call is read-only, takes no parameters and answers with the sections in a fixed order. The quota of the portal  as a whole, storage outside documents included, is not part of this answer.
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
         * Lists the fields the completed forms of a form-filling room carry, each of them a key and the kind of value  behind it, so that a client can offer them as filters. Feed a pair from this list back as `formsItemKey` and  `formsItemType` of `GET api/2.0/files/{folderId}` to keep only the completed forms whose field of that name  holds a value. The fields are read from the search index of one of the forms already gathered, so they appear  once indexing has caught up with the first submission. Only the Complete folder of a form-filling room  carries such fields: for any other folder, for a folder that does not exist and for one that has been deleted  the answer is an empty list rather than a refusal, and the same holds while nothing has been submitted yet.  The operation reads the index alone, changes nothing and needs no authorization.
         * @summary Get folder form filter
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
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
         * Returns one page of the contents of a folder - its subfolders in `folders`, its files in `files`, the folder  itself in `current` and the chain of parents in `pathParts` - and is the operation a client browses the file  tree with. `filterType`, `filterValue`, `extension`, `userIdOrGroupId`, `sharedBy` and `folderType` narrow  what is listed, `applyFilterOption` decides whether those filters bite on the files, on the folders or on  both, and `withSubFolders`, which is on unless it is switched off, lets a narrowed request descend through the  whole subtree instead of the top level alone. `filterValue` is matched against titles and against indexed  document content, and indexing is asynchronous, so a file uploaded a moment ago can be missing from a search  for a short while. `count` and `startIndex` page through the result while `total` counts everything that  matches, and `sortBy` with `sortOrder` both order the page and are saved as the default order of the account.  Reading a room or an ordinary folder clears its new-item marks for the caller. A caller who may not read the  folder is answered with 403, and a folder that does not exist with 404.
         * @summary Get a folder by ID
         * @param {number | string} folderId The folder whose contents are listed. Each section root has an operation of its own, such as  `GET api/2.0/files/@my`, and every other folder is opened by the identifier a listing gave for it.
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {string} [sharedBy] Restricts the listing to the entries this member shared, which narrows a shared listing down to what one  person handed out.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, spreadsheets, images or one type of room.  Omit it to list every kind the folder holds.
         * @param {number | string} [roomId] Keeps only the entries that lie in this room, which matters when the listing being read gathers entries from  more than one of them.
         * @param {Array<GetFolderByFolderIdFolderTypeEnum>} [folderType] Keeps only the folders of these kinds, each given as the number of a folder type; it is how a listing is  narrowed down to, say, the form-filling folders of a room.
         * @param {boolean} [excludeSubject] Turns `userIdOrGroupId` around: with true the entries of that member or group are the ones left out, with  false they are the only ones kept.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
         * @param {boolean} [withSubFolders] Whether a narrowed request reaches into the subfolders: with true, which is what an omitted parameter means,  matching entries are gathered from the whole subtree, with false only the top level is read. It makes a  difference only once `filterType`, `userIdOrGroupId` or `filterValue` narrows the request, because an  unfiltered listing always shows the top level alone.
         * @param {string} [extension] Keeps only the files carrying one of these extensions, several of them separated by commas; the leading dot is  optional.
         * @param {SearchArea} [searchArea] Which area a listing that spans several of them is taken from - the active rooms, the archive, the room  templates or the form-filling rooms. A folder that belongs to one area only settles the area itself and  ignores the parameter.
         * @param {string} [formsItemKey] Keeps only the completed forms whose form field of this name holds a value. Take the name from  `GET api/2.0/files/{folderId}/formfilter`, and use it in the folder that gathers the completed copies of a  form-filling room.
         * @param {string} [formsItemType] The kind of the form field named by `formsItemKey`, taken from the same list; the two are sent together.
         * @param {number} [count] The size of one page of the listing. Pair it with `startIndex` to walk through the result, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the listing is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the folder unfiltered.
         * @param {Location} [location] Where the entries of a tag-based listing have to live to be kept: `Room` keeps what lies in a room,  `Documents` what lies in a personal section, and `Link` what was reached through an external link that is  still valid. It shapes the Favorites and Recent listings and does nothing in an ordinary folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         */
        async getFolderByFolderId(folderId: number | string, userIdOrGroupId?: string, sharedBy?: string, filterType?: FilterType, roomId?: number | string, folderType?: Array<GetFolderByFolderIdFolderTypeEnum>, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, withSubFolders?: boolean, extension?: string, searchArea?: SearchArea, formsItemKey?: string, formsItemType?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, location?: Location, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentWrapper | ThirdPartyFolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderByFolderId(folderId, userIdOrGroupId, sharedBy, filterType, roomId, folderType, excludeSubject, applyFilterOption, withSubFolders, extension, searchArea, formsItemKey, formsItemType, count, startIndex, sortBy, sortOrder, filterValue, location, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderByFolderId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists what has happened to a folder and to the entries inside it - creations, renames, uploads, moves,  deletions and changes of access - each record naming the action, the moment it happened and the member behind  it. Records that belong to one action are grouped, so a batch arrives as a single entry carrying the rest of  itself in `related`, and the list runs from the most recent record backwards. `fromDate` and `toDate` narrow  the period, `startIndex` and `count` page through the result, and the number of records matching the request  is reported in the response headers rather than in the body. Any member who can read the folder may read its  history; a caller without access is answered with 403 and a folder that does not exist with 404. When the  folder is a form-filling folder the caller reached through a filling invitation, the history is narrowed to  what that caller may see. The call is read-only. To take the same history away as a spreadsheet, start a  report with `POST api/2.0/files/folder/{folderId}/log/report`.
         * @summary Get folder history
         * @param {number} folderId The folder whose activity log is read; the log covers the folder itself and the entries inside it.
         * @param {string} [fromDate] The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps.
         * @param {string} [toDate] The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry.
         * @param {number} [count] How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body.
         * @param {number} [startIndex] How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-history/
         */
        async getFolderHistory(folderId: number, fromDate?: string, toDate?: string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderHistory(folderId, fromDate, toDate, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one folder as an object - its title, its parent, the moments it was created and last changed, the  access the caller has to it, the number of items that are new for them, and the room settings when the folder  is a room - without listing anything inside it. Use it to resolve a folder identifier into something  displayable, and `GET api/2.0/files/{folderId}` when the contents are what is wanted; unlike that operation,  this one leaves the new-item marks of the folder alone. Any member who can read the folder may call it, and an  anonymous caller only through an external link that grants access, everybody else being refused; a folder that  does not exist is answered as not found. The call is read-only. The chain of parents above the folder is not  part of the answer and is read with `GET api/2.0/files/folder/{folderId}/path`.
         * @summary Get folder information
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/
         */
        async getFolderInfo(folderId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderInfo(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the external links of a folder or a room, each with its identifier, title, address, rights, expiration  date, password flag and download restriction, the primary link among them once it exists. At most the first  hundred links are answered and the number returned is reported in the response headers; there are no paging  parameters here. A folder that has never been shared by link answers with an empty list, and so does a member  who may read the folder but not manage its links - the empty answer therefore means nothing to show you  rather than no links exist. A member without access to the room is refused, an anonymous caller is rejected,  and a folder that does not exist is answered as not found. The call is read-only. Take an identifier from here  to `PUT api/2.0/files/folder/{id}/links` to change or remove that link, and read the primary one alone with  `GET api/2.0/files/folder/{id}/link`.
         * @summary Get folder external links
         * @param {number | string} id The folder or room whose external links are listed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-links/
         */
        async getFolderLinks(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderLinks(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the chain of folders that leads to the folder named in the path, ordered from the section root down to  the folder itself, which is the last entry. It is what a breadcrumb trail is built from, and it also tells a  client which section - a room, the personal section, the archive - a bare folder identifier belongs to. Only  the folders the caller may see are part of the chain, so a member who was given access to a folder deep inside  a room gets a shorter path than the room manager does. The caller needs read access to the folder and is  otherwise answered with 403, while a folder that does not exist is answered as not found. The call is  read-only and takes no paging parameters. To go the other way, from a folder down into its contents, call  `GET api/2.0/files/{folderId}`.
         * @summary Get the folder path
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPath operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-path/
         */
        async getFolderPath(folderId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderPath(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderPath']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers with the primary external link of a folder or a room - the one the Copy link action of a client  hands out - with its address in `sharedTo.shareLink`, its rights in `access`, and its title, expiration date,  password flag and download restriction beside them. The link is created on the first read if the folder has  none, with read rights, no password and no expiry, so this operation mutates on that first call and is a plain  read afterwards; repeated calls answer with the same link identifier. The caller needs the right to manage the  links of the room the folder belongs to, which its manager and a portal administrator acting as room manager  have; a member with read access alone is refused with 403 and an anonymous caller is rejected, while a link  that was deliberately revoked is answered with 404 rather than being recreated. The paging parameters are  accepted for compatibility and leave the single link answered here unchanged. Every external link of the same  folder is listed by `GET api/2.0/files/folder/{id}/links`.
         * @summary Get the folder primary external link
         * @param {number | string} id The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this folder that return a list; an operation  that answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-primary-external-link/
         */
        async getFolderPrimaryExternalLink(id: number | string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderPrimaryExternalLink(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolderPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the folders that sit directly inside the folder named in the path, ordered by title, without their own  contents and without the files that lie beside them. The whole list arrives at once - there are no paging or  filtering parameters here - so for a large folder, or when the files are wanted as well, use  `GET api/2.0/files/{folderId}`, which pages and filters. A folder that holds no subfolders answers with an  empty list. The caller needs read access to the folder, and only the subfolders they may see are listed, so a  member of a room can get fewer entries than its manager; a caller without access is answered with 403, and a  folder that does not exist, or one that has been deleted for good, is answered as not found. The call is  read-only and leaves the new-item marks of the folder alone.
         * @summary Get subfolders
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folders/
         */
        async getFolders(folderId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolders(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the Forms section: the flat list of form-filling rooms the caller may read. Such rooms are stored  under the Rooms tree but are surfaced only here, so `GET api/2.0/files/rooms` leaves them out of the active  area and lists them when `searchArea` names the forms area instead. The section is not expanded into room  content, so `folders` carries the rooms while `files` comes back empty; to read what is inside one of them,  call `GET api/2.0/files/{folderId}` with the room identifier. Nothing is modified, though passing `sortBy`  saves the requested order as the default order for this account. `filterType`, `filterValue`,  `userIdOrGroupId` and the sorting parameters narrow and order the room list, `count` and `startIndex` page  through it, `total` reports how many rooms match the request in full, and `current` describes the section  folder itself.
         * @summary Get the Forms section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the section unfiltered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFormsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-forms-folder/
         */
        async getFormsFolder(userIdOrGroupId?: string, filterType?: FilterType, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFormsFolder(userIdOrGroupId, filterType, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getFormsFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the contents of the caller\'s My documents section, the personal storage that belongs to this account  alone and stays invisible to other members until something in it is shared explicitly. Any authenticated  member that has a personal section can read it; guest accounts are not given one, and the call then answers  404. Nothing in the section is modified, though passing `sortBy` saves the requested order as the default  order for this account. Without a filter only the top level of the section is listed; as soon as `filterType`,  `userIdOrGroupId` or `filterValue` narrows the request, the search descends through the whole subtree.  `filterValue` is matched against titles and against indexed document content, and the index is written  asynchronously, so a file uploaded a moment ago can be missing from a search for a short while. `folders` and  `files` hold one page of the result, `total` counts everything that matches before `count` and `startIndex`  are applied, and `current` describes the section folder. To open a folder inside the section, call  `GET api/2.0/files/{folderId}` with its identifier.
         * @summary Get the My documents section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by, matched as a substring of entry titles. Omit it to list the  section unfiltered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-my-folder/
         */
        async getMyFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMyFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getMyFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the entries of a folder that are new for the calling member - the files and folders created or changed  there since they last opened it - ordered from the most recently changed backwards. It is what the badge of a  room is filled from, and it is personal: two members of the same room get different answers. Reading this list  does not clear the marks, so the same entries come back until the folder itself is opened with  `GET api/2.0/files/{folderId}`, which does clear them. A folder with nothing new answers with an empty list,  and marks disappear on their own when the entry behind them is deleted or moved out of reach. The caller needs  read access to the folder and is otherwise answered with 403. The whole list arrives at once, without paging  or filtering, and the call is read-only.
         * @summary Get new folder items
         * @param {number | string} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewFolderItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-folder-items/
         */
        async getNewFolderItems(folderId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNewFolderItems(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getNewFolderItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the Recent section: the files the calling account has opened lately. The section holds files only,  so `folders` comes back empty, and it is personal, so another member\'s history is not visible here. A file is  added when it is opened and can also be added explicitly with `POST api/2.0/files/file/{fileId}/recent`;  `DELETE api/2.0/files/recent` clears the whole history, and `PUT api/2.0/files/displayrecent` switches the  section on and off for the account, which also decides whether `GET api/2.0/files/@root` includes it. Nothing  in the section is modified, though passing `sortBy` saves the requested order as the default order for this  account. The listing is ordered by the moment the caller last opened each file, newest first, and `sortBy` and  `sortOrder` do not change that order. `files` holds one page, `total` counts the files matching the request  before `count` and `startIndex` are applied, and `current` describes the section folder itself.
         * @summary Get the Recent section
         * @param {string} [userIdOrGroupId] Restricts the listing to the files authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list the whole history.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of file, such as documents, spreadsheets or images. Omit it to list every  kind the history holds.
         * @param {boolean} [excludeSubject] Inverts `userIdOrGroupId`: with `true` the files of that member or group are the ones left out of the listing  instead of the only ones kept.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of a listing `filterType` and `filterValue` are applied to. The Recent section holds  files only, so the value does not change what comes back.
         * @param {SearchArea} [searchArea] The area a listing is taken from. The Recent section is assembled from the caller\'s own open history rather  than from an area, so the value does not change which files are returned.
         * @param {Array<string>} [extension] The file extensions the listing is limited to, matched against the end of the file name. The leading dot is  optional, and the parameter is repeated once per extension.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place. The Recent section keeps its own newest-first order, so the value does not  reorder this listing.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account. The Recent section keeps its own newest-first order, so the value does not reorder this  listing.
         * @param {string} [filterValue] The search string the history is filtered by: it is matched as a substring of file titles and against the  indexed document content as well. Omit it to list the whole history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRecentFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-recent-folder/
         */
        async getRecentFolder(userIdOrGroupId?: string, filterType?: FilterType, excludeSubject?: boolean, applyFilterOption?: ApplyFilterOption, searchArea?: SearchArea, extension?: Array<string>, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecentFolder(userIdOrGroupId, filterType, excludeSubject, applyFilterOption, searchArea, extension, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getRecentFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports how far the history report of a folder has got, and is the operation to poll after  `POST api/2.0/files/folder/{folderId}/log/report` has queued one. `percentage` climbs to 100, `isCompleted`  turns true when the job is over however it ended, `error` carries the reason when it failed, and  `resultFileId`, `resultFileName` and `resultFileUrl` name the file that was saved in the caller\'s My  documents - a CSV report leaving the identifier empty. An empty answer means there is no report for this  folder and caller, either because none was started or because a finished one has already been picked up by an  earlier poll. The caller needs read access to the folder and may not be a guest, and the portal plan has to  include the audit feature; a caller who fails the access rule is answered with 403 and a folder that does not  exist with 404. The call is read-only, and each caller sees only their own report.
         * @summary Get the folder history report generation status
         * @param {number} folderId The folder whose history report is being polled. It is the folder that was              passed to the operation that started the report.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-report-folder-history/
         */
        async getReportFolderHistory(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReportFolderHistory(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getReportFolderHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns every top-level section the calling account can see in one response, each of them a full section  object carrying its own first page of content: Favorites, Recent, Shared with me, My documents,  Trash, Rooms, Forms, Archive and, while AI access is enabled for the portal, AI agents. A section is  left out when the account has none of it, which is why a guest gets no personal section, and Recent is  listed only while it is switched on with `PUT api/2.0/files/displayrecent`. Pass `withoutTrash=true` to drop  the Trash section. The filters, `count` and `startIndex` are applied to each section separately, so  `count=1` returns one entry per section and every section reports its own `total`. Because it builds the  content of all of them, this is the most expensive listing in the module: when a single section is enough,  read it directly, for example with `GET api/2.0/files/@my`. The call modifies nothing in the sections and  leaves their new-item badges untouched, though passing `sortBy` saves the requested order as the default order  for this account.
         * @summary Get filtered sections
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the content listed inside every returned section to a single kind of entry, such as documents, images  or one type of room. Omit it to list every kind the sections hold.
         * @param {boolean} [withoutTrash] Set it to `true` to leave the Trash section out of the returned set of sections; with `false`, or when the  parameter is omitted, the section is returned whenever the account has one of its own.
         * @param {number} [count] The size of the content page returned for each section separately, so a value of 1 yields one entry per  section rather than one entry in total.
         * @param {number} [startIndex] The number of matching entries skipped in each section before its page begins; add `count` to it to ask for  the next page of every section.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the content of every section is filtered by: it is matched as a substring of entry titles  and, for files, against the indexed document content as well. Omit it to list the sections unfiltered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRootFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-root-folders/
         */
        async getRootFolders(userIdOrGroupId?: string, filterType?: FilterType, withoutTrash?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRootFolders(userIdOrGroupId, filterType, withoutTrash, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getRootFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the caller\'s Trash section: the files and folders this account has deleted, kept there until they  are restored or discarded. Each member has a Trash of their own and sees only what they deleted themselves.  Restore an entry by moving it back with `PUT api/2.0/files/fileops/move`, or discard the whole section with  `PUT api/2.0/files/fileops/emptytrash`; both start a background operation that is polled through  `GET api/2.0/files/fileops`. This call itself modifies nothing, though passing `sortBy` saves the requested  order as the default order for this account. Only the top level of the section is listed, so the contents of a  deleted folder are not expanded into it, and `filterValue` is matched against titles alone here rather than  against document content. `folders` and `files` hold one page of the result, `total` counts everything that  matches before `count` and `startIndex` are applied, and `current` describes the section folder. An account  that is given no Trash of its own, an outsider for instance, receives 404.
         * @summary Get the Trash section
         * @param {string} [userIdOrGroupId] Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
         * @param {FilterType} [filterType] Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
         * @param {ApplyFilterOption} [applyFilterOption] Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
         * @param {number} [count] The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
         * @param {number} [startIndex] The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
         * @param {string} [sortBy] The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
         * @param {SortOrder} [sortOrder] The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
         * @param {string} [filterValue] The search string the section is filtered by, matched as a substring of entry titles. Omit it to list the  section unfiltered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTrashFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-trash-folder/
         */
        async getTrashFolder(userIdOrGroupId?: string, filterType?: FilterType, applyFilterOption?: ApplyFilterOption, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTrashFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.getTrashFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores a file in the folder named by the path in a single request, taking its name from `title` rather than  from the uploaded part, which is what separates it from `POST api/2.0/files/{folderId}/upload`. The content  may arrive either as a multipart part or as the raw request body. The name is stripped of characters a title  cannot hold and truncated, and `createNewIfExist` settles the clash: false adds a new version to the file that  already carries the name, true keeps both by giving the new one a numeric suffix. The caller needs the right  to add content to the folder, so a reader, an editor and a guest get 403, a section root and an archived room  are refused as well, and an unknown folder gives 404. Formats the portal converts are converted afterwards in  the background; pass `keepConvertStatus` to keep the outcome readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. The answer is the stored file. A large payload belongs in a  chunked session instead.
         * @summary Insert a file
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {File} [insertFileFile] The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw  request body, which is what a client that cannot build a form does; when both are present the form part wins.
         * @param {string} [insertFileTitle] The name to store the file under, extension included. It wins over the name of the uploaded part, which is the  reason to choose this operation over the plain upload, and it is the only name available when the content  arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170  characters before the file is stored.
         * @param {boolean} [insertFileCreateNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [insertFileKeepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
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
        async insertFile(folderId: number | string, insertFileFile?: File, insertFileTitle?: string, insertFileCreateNewIfExist?: boolean, insertFileKeepConvertStatus?: boolean, insertFileStreamCanRead?: boolean, insertFileStreamCanWrite?: boolean, insertFileStreamCanSeek?: boolean, insertFileStreamCanTimeout?: boolean, insertFileStreamLength?: number, insertFileStreamPosition?: number, insertFileStreamReadTimeout?: number, insertFileStreamWriteTimeout?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.insertFile(folderId, insertFileFile, insertFileTitle, insertFileCreateNewIfExist, insertFileKeepConvertStatus, insertFileStreamCanRead, insertFileStreamCanWrite, insertFileStreamCanSeek, insertFileStreamCanTimeout, insertFileStreamLength, insertFileStreamPosition, insertFileStreamReadTimeout, insertFileStreamWriteTimeout, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.insertFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores one file in the caller\'s own My documents section, the personal storage every portal member has, and  returns the stored file. The destination takes no identifier: it is resolved from the calling account and  created on first use, while a guest account has none and is answered as missing (404). Send the content as a  `multipart/form-data` part or as the raw request body, and name it with `title`, which wins over the name of  the uploaded part and has invalid characters replaced before storing. The call is not idempotent: by default a  file of the same title is overwritten as a new version, while `createNewIfExist=true` stores a separate copy  under a title made unique with a numeric suffix; a title held by a file that is locked or open in the editor  cannot be overwritten either, and a second file appears under the same title. Formats listed in  `extsMustConvert` of `GET api/2.0/files/settings` are converted after the response is sent;  `keepConvertStatus=true` keeps that result readable through `GET api/2.0/files/file/{fileId}/checkconversion`,  which otherwise drops it. Files over the single-request size limit or the account\'s storage quota are refused:  send those through `POST api/2.0/files/{folderId}/upload/create_session`, and use  `POST api/2.0/files/{folderId}/insert` for any other destination.
         * @summary Insert a file into My documents
         * @param {File} [file] The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw  request body, which is what a client that cannot build a form does; when both are present the form part wins.
         * @param {string} [title] The name to store the file under, extension included. It wins over the name of the uploaded part, which is the  reason to choose this operation over the plain upload, and it is the only name available when the content  arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170  characters before the file is stored.
         * @param {boolean} [createNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [keepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
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
        async insertFileToMyFromBody(file?: File, title?: string, createNewIfExist?: boolean, keepConvertStatus?: boolean, streamCanRead?: boolean, streamCanWrite?: boolean, streamCanSeek?: boolean, streamCanTimeout?: boolean, streamLength?: number, streamPosition?: number, streamReadTimeout?: number, streamWriteTimeout?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.insertFileToMyFromBody(file, title, createNewIfExist, keepConvertStatus, streamCanRead, streamCanWrite, streamCanSeek, streamCanTimeout, streamLength, streamPosition, streamReadTimeout, streamWriteTimeout, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.insertFileToMyFromBody']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gives a folder a new title and answers with the folder as it now stands. The title is trimmed, may not be  blank and is refused when it is longer than the limit the schema prints; a title that matches the current one  leaves the folder untouched, and titles need not be unique among the neighbours. The caller needs the right to  rename the folder, which the room manager, a content creator acting on a folder of their own and the owner of  a personal section have, while a guest is refused with 403 whatever their access; a folder in the Trash  section or in an archived room cannot be renamed either, and a folder that does not exist is answered as  not found. A room may be renamed here as well, in which case the caller needs the right to edit the  room, and `PUT api/2.0/files/rooms/{id}` is the operation that changes its other settings. The call is  mutating and idempotent; on a folder stored in a connected third-party account the identifier of the folder  may change with the title.
         * @summary Rename a folder
         * @param {number | string} folderId The folder the request is addressed to: when a folder is created it is the parent that receives the new  folder, and when a folder is renamed it is the folder that gets the new title.
         * @param {CreateFolder} createFolder The title carried by the request body.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for renameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/
         */
        async renameFolder(folderId: number | string, createFolder: CreateFolder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renameFolder(folderId, createFolder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.renameFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Puts a folder at a given position among the entries of its parent and answers with the folder, its `order`  reporting where it now stands. Positions count from 1, and the entry that held the wanted position, together  with everything after it, is shifted to make room, so the numbering of the parent stays without gaps; a  position beyond the end places the folder last. The value may also be sent as a dotted path, as in 1.2.3, in  which case only its last segment is read. Ordering is what the manual arrangement of a room is built on, and  it only means something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The  caller needs edit access to the folder, which room managers and content creators have, and a member without it  is refused, while a folder that does not exist is answered as not found. The call is mutating and idempotent.  To move several entries in one go use `PUT api/2.0/files/order`.
         * @summary Set folder order
         * @param {number | string} folderId The folder to move.
         * @param {OrderRequestDto} [orderRequestDto] The position the folder is to take.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/
         */
        async setFolderOrder(folderId: number | string, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderOrder(folderId, orderRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.setFolderOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an external link to a folder or a room, or changes or revokes an existing one, and answers with the  link as it now stands. `linkId` decides which: an identifier that is not yet in use, the empty one included,  creates a link, while the identifier of an existing link rewrites it, so the whole set of parameters is  applied every time and a field left out is reset rather than kept. `access` carries the rights the link  grants, and `access` set to the value that denies everything revokes the link instead - the answer is then  empty, and a revoked primary link is not recreated by a later read. `title` names the link for the people who  manage it, `expirationDate` limits its lifetime and is ignored when it lies in the past, `password` asks  visitors for a secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members  alone, and `primary=true` makes it the primary link of the folder. The caller needs the right to manage the  links of the room, which its manager and a portal administrator acting as room manager have; anyone else is  refused and an unknown folder is answered as not found. The call is mutating.
         * @summary Set the folder external link
         * @param {number | string} id The folder or room the link belongs to.
         * @param {FolderLinkRequest} folderLinkRequest The link and the way it is to be shaped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-primary-external-link/
         */
        async setFolderPrimaryExternalLink(id: number | string, folderLinkRequest: FolderLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderPrimaryExternalLink(id, folderLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.setFolderPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gives up the history report the caller has started for a folder with  `POST api/2.0/files/folder/{folderId}/log/report`. The request only asks the background worker to stop, and  the answer carries no body, so a following `GET api/2.0/files/folder/{folderId}/log/report` is what shows the  task ending as cancelled. Asking to terminate when nothing is running is accepted and changes nothing, which  makes the call safe to repeat. A report that has already finished is not undone by this call and its file  stays in My documents. The caller needs read access to the folder and may not be a guest, and the portal  plan has to include the audit feature; a caller who fails the access rule is answered with 403 and a folder  that does not exist with 404. Each caller can only terminate their own report.
         * @summary Terminate the folder history report generation
         * @param {number} folderId The folder whose running history report is to be given up. It is the folder that              was passed to the operation that started the report.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-report-folder-history/
         */
        async terminateReportFolderHistory(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateReportFolderHistory(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.terminateReportFolderHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores a file in the folder named by the path in a single multipart request, taking its name from the uploaded  part; use `POST api/2.0/files/{folderId}/insert` when the name has to be given separately or the content is  sent as a raw body. The answer is a list that always holds exactly one file. `createNewIfExist` settles the  clash: false adds a new version to the file that already carries the name, true keeps both by giving the new  one a numeric suffix. `storeOriginalFile` reaches further than this call, because it saves the setting on the  calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later  uploads. The caller needs the right to add content to the folder, so a reader, an editor and a guest get 403,  a section root and an archived room are refused as well, and an unknown folder gives 404. A request without a  file is rejected as invalid, and a payload above the portal upload limit is refused.
         * @summary Upload a file
         * @param {number | string} folderId The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
         * @param {boolean} [createNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [storeOriginalFile] Reaches further than this request: it writes a setting on the calling account, the same one  `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the  uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted  one, and leaving it out keeps whatever the account already has.
         * @param {boolean} [keepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
         * @param {File} [file] The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the  stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request  without it is rejected as invalid.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/
         */
        async uploadFile(folderId: number | string, createNewIfExist?: boolean, storeOriginalFile?: boolean, keepConvertStatus?: boolean, file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFile(folderId, createNewIfExist, storeOriginalFile, keepConvertStatus, file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FoldersApi.uploadFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Uploads one file into the caller\'s own My documents section and returns it inside a single-element array; one  request stores exactly one file. The destination takes no identifier: it is resolved from the calling account  and created on first use, while a guest account has none and is answered as missing (404). The body has to be  `multipart/form-data` carrying the file part; a request without it is rejected as invalid, and the stored name  comes from that part, since unlike `POST api/2.0/files/@my/insert` there is no separate title. The call is not  idempotent: by default a file of the same title is overwritten as a new version, while `createNewIfExist=true`  stores a separate copy under a title made unique with a numeric suffix. `storeOriginalFile` is not a  per-request switch: it writes the same account setting as `PUT api/2.0/files/storeoriginal`, which decides  what happens to the formats listed in `extsMustConvert` of `GET api/2.0/files/settings` when they are  converted after the response - false replaces the uploaded file with the converted one, true keeps both;  `keepConvertStatus=true` keeps that conversion result readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. Files over the single-request size limit or the account\'s  storage quota are refused; send those through `POST api/2.0/files/{folderId}/upload/create_session`.
         * @summary Upload a file to My documents
         * @param {boolean} [createNewIfExist] Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
         * @param {boolean} [storeOriginalFile] Reaches further than this request: it writes a setting on the calling account, the same one  `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the  uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted  one, and leaving it out keeps whatever the account already has.
         * @param {boolean} [keepConvertStatus] Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
         * @param {File} [file] The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the  stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request  without it is rejected as invalid.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadFileToMy operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/
         */
        async uploadFileToMy(createNewIfExist?: boolean, storeOriginalFile?: boolean, keepConvertStatus?: boolean, file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFileToMy(createNewIfExist, storeOriginalFile, keepConvertStatus, file, options);
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
         * Reports which of the submitted titles already belong to a file in the folder, so an upload can decide in  advance whether to overwrite or to ask for another name. Only the clashing titles come back, unordered and  without repetitions, and an empty array means every name is free. Matching is by title and ignores case, so a  name that differs only in capitalisation is still reported; an existing file that is encrypted is left out,  because an upload cannot take it over. The call changes nothing. It needs the same right as the upload itself,  the right to add content to the folder, which room managers and content creators have and readers, editors and  guests do not; an archived room, a section root and a folder the caller cannot write to are all refused, while  an unknown folder is answered as missing. A request without `filesTitle` is rejected as an invalid request, an  empty list is accepted and answers with an empty array.
         * @summary Check for upload conflicts
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
         * Creates a folder inside the folder named in the path and answers with the folder as it was stored. The title  is trimmed, may not be blank and is refused when it is longer than the limit the schema prints; titles are not  required to be unique, so creating the same title twice leaves two folders side by side, which makes the call  mutating and not idempotent. The caller needs the right to create content in the parent, which the room  manager, a content creator and the owner of a personal section have; a member without that right, an archived  parent, and a section root that only holds rooms - Rooms, Forms and AI agents - are all refused, as is a  parent that does not exist. Rooms are not created here: use `POST api/2.0/files/rooms` for those, and this  operation for ordinary folders within them. Members of the room are notified of the new folder. Read the  identifier of the new folder from `id` and fill it with `POST api/2.0/files/{folderId}/upload`.
         * @summary Create a folder
         * @param {FoldersApiCreateFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/
         * @throws {RequiredError}
         */
        createFolder(requestParameters: FoldersApiCreateFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.createFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * Answers with the primary external link of a folder or a room, creating it on the first call and returning the  one that already exists afterwards, so the operation is idempotent in effect: a second call with other  parameters does not reconfigure the existing link, and changing one is the business of  `PUT api/2.0/files/folder/{id}/links`. The parameters therefore only shape the link at the moment it is born -  `access` its rights, `title` its name, `expirationDate` its lifetime, which is unlimited here unless one is  given, `internal` whether only signed-in members may follow it, `denyDownload` whether the contents may only  be viewed, and `password` a secret to be asked for. Sending `access` with the value that grants nothing  creates no link and answers with nothing. The caller needs the right to manage the links of the room the  folder belongs to, which its manager and a portal administrator acting as room manager have, and a member with  content-creator or read access is refused with 403; an unknown folder is answered with 404. Read the address  from `sharedTo.shareLink`.
         * @summary Create the folder primary external link
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
         * Queues a background job that renders the history of a folder into a spreadsheet, or into a CSV file when  `format` asks for one, and saves the result in the caller\'s My documents. The answer is the queued task, not  the report: poll `GET api/2.0/files/folder/{folderId}/log/report` until `isCompleted` is true, then take the  file from `resultFileId`, `resultFileName` and `resultFileUrl`, of which a CSV report fills only the last two.  `from` and `to` limit the exported period; leaving both out exports the whole history. While a report for the  same folder and caller is still running, this call joins it and answers with the running task instead of  starting a second one, so retrying is safe. The caller needs read access to the folder and may not be a guest,  and the portal plan has to include the audit feature - otherwise the call is refused, with 403 for the access  rule and 404 for a folder that does not exist. Only a portal administrator gets the address, browser and  platform columns. Give up a running report with `DELETE api/2.0/files/folder/{folderId}/log/report`.
         * @summary Start the folder history report generation
         * @param {FoldersApiCreateReportFolderHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/
         * @throws {RequiredError}
         */
        createReportFolderHistory(requestParameters: FoldersApiCreateReportFolderHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createReportFolderHistory(requestParameters.folderId, requestParameters.format, requestParameters.from, requestParameters.to, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues the deletion of one folder together with everything inside it, and answers with the file operations of  the caller, the one just created among them. The folder is not gone when the response arrives: poll  `GET api/2.0/files/fileops` until the operation reports `finished`, and read its `error` to learn whether the  deletion succeeded. By default the folder is moved to the Trash section, from where it can be restored;  `immediately=true` discards it for good instead, and inside a room, where there is no Trash, deletion is  always final. `deleteAfter=true` postpones the deletion until the editing sessions on the contents have ended,  so files somebody is working on are not pulled away. The caller needs the right to delete the folder, which  the room manager, a portal administrator acting as room manager and a content creator acting on a folder of  their own have; editing access alone, read access and a guest are refused. The call is destructive. To delete  several items at once use `PUT api/2.0/files/fileops/delete`.
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
         * Rebuilds the spreadsheet that gathers the answers submitted to a form, starting from the Complete folder  that holds the filled copies. The answer names the original form the results belong to, says in `isNewFile`  whether the spreadsheet is being created or an existing one rewritten in place, and carries the queued job in  `task`; the file itself is not ready yet, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the identifier  of the form until the task reports completion. The folder has to be the Complete folder of a form-filling  room and has to hold at least one submitted copy whose original form still exists, and the caller needs the  right to maintain that form, which the room manager has. A folder that does not exist, or one that holds  nothing to report on, is answered with 404, and a folder of the wrong kind or a caller without those rights  with 403. The call is mutating: it writes the results file of the form.
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
         * Returns the caller\'s own Favorites section: the files and folders this account has marked as favorite,  together with the section folder itself. Favorites are per-account, so the entries another member marked are  not listed here, and a guest sees only their own, usually empty, list. Mark a single file with  `GET api/2.0/files/favorites/{fileId}`, or add and remove batches of files and folders with  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`. Nothing in the section is modified,  though passing `sortBy` saves the requested order as the default order for this account. Entries the caller  can no longer read, and entries that have been moved to the Trash section, drop out of the listing even  though their favorite mark stays, so the section can shrink without an explicit unmark. `folders` and `files`  hold one page of the section, `total` counts the entries matching the request before `count` and `startIndex`  are applied, and `current` describes the section folder itself.
         * @summary Get the Favorites section
         * @param {FoldersApiGetFavoritesFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFavoritesFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-favorites-folder/
         * @throws {RequiredError}
         */
        getFavoritesFolder(requestParameters: FoldersApiGetFavoritesFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper> {
            return localVarFp.getFavoritesFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports how much storage the portal spends on documents, split by section - My documents, Trash, Rooms,  Archive and, where the feature is on, AI agents - each entry naming the section and the space it takes in  bytes. The figures cover the whole portal rather than the calling account, and moving an entry between  sections moves its space with it, which is why deleting a file to the Trash does not free anything until the  Trash is emptied. Only a caller who may change portal settings, that is the owner and the portal  administrators, is allowed here; a room administrator, an ordinary member and a guest are all refused. The  call is read-only, takes no parameters and answers with the sections in a fixed order. The quota of the portal  as a whole, storage outside documents included, is not part of this answer.
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
         * Lists the fields the completed forms of a form-filling room carry, each of them a key and the kind of value  behind it, so that a client can offer them as filters. Feed a pair from this list back as `formsItemKey` and  `formsItemType` of `GET api/2.0/files/{folderId}` to keep only the completed forms whose field of that name  holds a value. The fields are read from the search index of one of the forms already gathered, so they appear  once indexing has caught up with the first submission. Only the Complete folder of a form-filling room  carries such fields: for any other folder, for a folder that does not exist and for one that has been deleted  the answer is an empty list rather than a refusal, and the same holds while nothing has been submitted yet.  The operation reads the index alone, changes nothing and needs no authorization.
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
         * Returns one page of the contents of a folder - its subfolders in `folders`, its files in `files`, the folder  itself in `current` and the chain of parents in `pathParts` - and is the operation a client browses the file  tree with. `filterType`, `filterValue`, `extension`, `userIdOrGroupId`, `sharedBy` and `folderType` narrow  what is listed, `applyFilterOption` decides whether those filters bite on the files, on the folders or on  both, and `withSubFolders`, which is on unless it is switched off, lets a narrowed request descend through the  whole subtree instead of the top level alone. `filterValue` is matched against titles and against indexed  document content, and indexing is asynchronous, so a file uploaded a moment ago can be missing from a search  for a short while. `count` and `startIndex` page through the result while `total` counts everything that  matches, and `sortBy` with `sortOrder` both order the page and are saved as the default order of the account.  Reading a room or an ordinary folder clears its new-item marks for the caller. A caller who may not read the  folder is answered with 403, and a folder that does not exist with 404.
         * @summary Get a folder by ID
         * @param {FoldersApiGetFolderByFolderIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderByFolderId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/
         * @throws {RequiredError}
         */
        getFolderByFolderId(requestParameters: FoldersApiGetFolderByFolderIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper | ThirdPartyFolderContentWrapper> {
            return localVarFp.getFolderByFolderId(requestParameters.folderId, requestParameters.userIdOrGroupId, requestParameters.sharedBy, requestParameters.filterType, requestParameters.roomId, requestParameters.folderType, requestParameters.excludeSubject, requestParameters.applyFilterOption, requestParameters.withSubFolders, requestParameters.extension, requestParameters.searchArea, requestParameters.formsItemKey, requestParameters.formsItemType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.location, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists what has happened to a folder and to the entries inside it - creations, renames, uploads, moves,  deletions and changes of access - each record naming the action, the moment it happened and the member behind  it. Records that belong to one action are grouped, so a batch arrives as a single entry carrying the rest of  itself in `related`, and the list runs from the most recent record backwards. `fromDate` and `toDate` narrow  the period, `startIndex` and `count` page through the result, and the number of records matching the request  is reported in the response headers rather than in the body. Any member who can read the folder may read its  history; a caller without access is answered with 403 and a folder that does not exist with 404. When the  folder is a form-filling folder the caller reached through a filling invitation, the history is narrowed to  what that caller may see. The call is read-only. To take the same history away as a spreadsheet, start a  report with `POST api/2.0/files/folder/{folderId}/log/report`.
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
         * Returns one folder as an object - its title, its parent, the moments it was created and last changed, the  access the caller has to it, the number of items that are new for them, and the room settings when the folder  is a room - without listing anything inside it. Use it to resolve a folder identifier into something  displayable, and `GET api/2.0/files/{folderId}` when the contents are what is wanted; unlike that operation,  this one leaves the new-item marks of the folder alone. Any member who can read the folder may call it, and an  anonymous caller only through an external link that grants access, everybody else being refused; a folder that  does not exist is answered as not found. The call is read-only. The chain of parents above the folder is not  part of the answer and is read with `GET api/2.0/files/folder/{folderId}/path`.
         * @summary Get folder information
         * @param {FoldersApiGetFolderInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/
         * @throws {RequiredError}
         */
        getFolderInfo(requestParameters: FoldersApiGetFolderInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.getFolderInfo(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the external links of a folder or a room, each with its identifier, title, address, rights, expiration  date, password flag and download restriction, the primary link among them once it exists. At most the first  hundred links are answered and the number returned is reported in the response headers; there are no paging  parameters here. A folder that has never been shared by link answers with an empty list, and so does a member  who may read the folder but not manage its links - the empty answer therefore means nothing to show you  rather than no links exist. A member without access to the room is refused, an anonymous caller is rejected,  and a folder that does not exist is answered as not found. The call is read-only. Take an identifier from here  to `PUT api/2.0/files/folder/{id}/links` to change or remove that link, and read the primary one alone with  `GET api/2.0/files/folder/{id}/link`.
         * @summary Get folder external links
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
         * Returns the chain of folders that leads to the folder named in the path, ordered from the section root down to  the folder itself, which is the last entry. It is what a breadcrumb trail is built from, and it also tells a  client which section - a room, the personal section, the archive - a bare folder identifier belongs to. Only  the folders the caller may see are part of the chain, so a member who was given access to a folder deep inside  a room gets a shorter path than the room manager does. The caller needs read access to the folder and is  otherwise answered with 403, while a folder that does not exist is answered as not found. The call is  read-only and takes no paging parameters. To go the other way, from a folder down into its contents, call  `GET api/2.0/files/{folderId}`.
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
         * Answers with the primary external link of a folder or a room - the one the Copy link action of a client  hands out - with its address in `sharedTo.shareLink`, its rights in `access`, and its title, expiration date,  password flag and download restriction beside them. The link is created on the first read if the folder has  none, with read rights, no password and no expiry, so this operation mutates on that first call and is a plain  read afterwards; repeated calls answer with the same link identifier. The caller needs the right to manage the  links of the room the folder belongs to, which its manager and a portal administrator acting as room manager  have; a member with read access alone is refused with 403 and an anonymous caller is rejected, while a link  that was deliberately revoked is answered with 404 rather than being recreated. The paging parameters are  accepted for compatibility and leave the single link answered here unchanged. Every external link of the same  folder is listed by `GET api/2.0/files/folder/{id}/links`.
         * @summary Get the folder primary external link
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
         * Lists the folders that sit directly inside the folder named in the path, ordered by title, without their own  contents and without the files that lie beside them. The whole list arrives at once - there are no paging or  filtering parameters here - so for a large folder, or when the files are wanted as well, use  `GET api/2.0/files/{folderId}`, which pages and filters. A folder that holds no subfolders answers with an  empty list. The caller needs read access to the folder, and only the subfolders they may see are listed, so a  member of a room can get fewer entries than its manager; a caller without access is answered with 403, and a  folder that does not exist, or one that has been deleted for good, is answered as not found. The call is  read-only and leaves the new-item marks of the folder alone.
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
         * Returns the Forms section: the flat list of form-filling rooms the caller may read. Such rooms are stored  under the Rooms tree but are surfaced only here, so `GET api/2.0/files/rooms` leaves them out of the active  area and lists them when `searchArea` names the forms area instead. The section is not expanded into room  content, so `folders` carries the rooms while `files` comes back empty; to read what is inside one of them,  call `GET api/2.0/files/{folderId}` with the room identifier. Nothing is modified, though passing `sortBy`  saves the requested order as the default order for this account. `filterType`, `filterValue`,  `userIdOrGroupId` and the sorting parameters narrow and order the room list, `count` and `startIndex` page  through it, `total` reports how many rooms match the request in full, and `current` describes the section  folder itself.
         * @summary Get the Forms section
         * @param {FoldersApiGetFormsFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFormsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-forms-folder/
         * @throws {RequiredError}
         */
        getFormsFolder(requestParameters: FoldersApiGetFormsFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper> {
            return localVarFp.getFormsFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the contents of the caller\'s My documents section, the personal storage that belongs to this account  alone and stays invisible to other members until something in it is shared explicitly. Any authenticated  member that has a personal section can read it; guest accounts are not given one, and the call then answers  404. Nothing in the section is modified, though passing `sortBy` saves the requested order as the default  order for this account. Without a filter only the top level of the section is listed; as soon as `filterType`,  `userIdOrGroupId` or `filterValue` narrows the request, the search descends through the whole subtree.  `filterValue` is matched against titles and against indexed document content, and the index is written  asynchronously, so a file uploaded a moment ago can be missing from a search for a short while. `folders` and  `files` hold one page of the result, `total` counts everything that matches before `count` and `startIndex`  are applied, and `current` describes the section folder. To open a folder inside the section, call  `GET api/2.0/files/{folderId}` with its identifier.
         * @summary Get the My documents section
         * @param {FoldersApiGetMyFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getMyFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-my-folder/
         * @throws {RequiredError}
         */
        getMyFolder(requestParameters: FoldersApiGetMyFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper> {
            return localVarFp.getMyFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.applyFilterOption, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the entries of a folder that are new for the calling member - the files and folders created or changed  there since they last opened it - ordered from the most recently changed backwards. It is what the badge of a  room is filled from, and it is personal: two members of the same room get different answers. Reading this list  does not clear the marks, so the same entries come back until the folder itself is opened with  `GET api/2.0/files/{folderId}`, which does clear them. A folder with nothing new answers with an empty list,  and marks disappear on their own when the entry behind them is deleted or moved out of reach. The caller needs  read access to the folder and is otherwise answered with 403. The whole list arrives at once, without paging  or filtering, and the call is read-only.
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
         * Returns the Recent section: the files the calling account has opened lately. The section holds files only,  so `folders` comes back empty, and it is personal, so another member\'s history is not visible here. A file is  added when it is opened and can also be added explicitly with `POST api/2.0/files/file/{fileId}/recent`;  `DELETE api/2.0/files/recent` clears the whole history, and `PUT api/2.0/files/displayrecent` switches the  section on and off for the account, which also decides whether `GET api/2.0/files/@root` includes it. Nothing  in the section is modified, though passing `sortBy` saves the requested order as the default order for this  account. The listing is ordered by the moment the caller last opened each file, newest first, and `sortBy` and  `sortOrder` do not change that order. `files` holds one page, `total` counts the files matching the request  before `count` and `startIndex` are applied, and `current` describes the section folder itself.
         * @summary Get the Recent section
         * @param {FoldersApiGetRecentFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRecentFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-recent-folder/
         * @throws {RequiredError}
         */
        getRecentFolder(requestParameters: FoldersApiGetRecentFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper> {
            return localVarFp.getRecentFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.excludeSubject, requestParameters.applyFilterOption, requestParameters.searchArea, requestParameters.extension, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports how far the history report of a folder has got, and is the operation to poll after  `POST api/2.0/files/folder/{folderId}/log/report` has queued one. `percentage` climbs to 100, `isCompleted`  turns true when the job is over however it ended, `error` carries the reason when it failed, and  `resultFileId`, `resultFileName` and `resultFileUrl` name the file that was saved in the caller\'s My  documents - a CSV report leaving the identifier empty. An empty answer means there is no report for this  folder and caller, either because none was started or because a finished one has already been picked up by an  earlier poll. The caller needs read access to the folder and may not be a guest, and the portal plan has to  include the audit feature; a caller who fails the access rule is answered with 403 and a folder that does not  exist with 404. The call is read-only, and each caller sees only their own report.
         * @summary Get the folder history report generation status
         * @param {FoldersApiGetReportFolderHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-report-folder-history/
         * @throws {RequiredError}
         */
        getReportFolderHistory(requestParameters: FoldersApiGetReportFolderHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getReportFolderHistory(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns every top-level section the calling account can see in one response, each of them a full section  object carrying its own first page of content: Favorites, Recent, Shared with me, My documents,  Trash, Rooms, Forms, Archive and, while AI access is enabled for the portal, AI agents. A section is  left out when the account has none of it, which is why a guest gets no personal section, and Recent is  listed only while it is switched on with `PUT api/2.0/files/displayrecent`. Pass `withoutTrash=true` to drop  the Trash section. The filters, `count` and `startIndex` are applied to each section separately, so  `count=1` returns one entry per section and every section reports its own `total`. Because it builds the  content of all of them, this is the most expensive listing in the module: when a single section is enough,  read it directly, for example with `GET api/2.0/files/@my`. The call modifies nothing in the sections and  leaves their new-item badges untouched, though passing `sortBy` saves the requested order as the default order  for this account.
         * @summary Get filtered sections
         * @param {FoldersApiGetRootFoldersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRootFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-root-folders/
         * @throws {RequiredError}
         */
        getRootFolders(requestParameters: FoldersApiGetRootFoldersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentArrayWrapper> {
            return localVarFp.getRootFolders(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.withoutTrash, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the caller\'s Trash section: the files and folders this account has deleted, kept there until they  are restored or discarded. Each member has a Trash of their own and sees only what they deleted themselves.  Restore an entry by moving it back with `PUT api/2.0/files/fileops/move`, or discard the whole section with  `PUT api/2.0/files/fileops/emptytrash`; both start a background operation that is polled through  `GET api/2.0/files/fileops`. This call itself modifies nothing, though passing `sortBy` saves the requested  order as the default order for this account. Only the top level of the section is listed, so the contents of a  deleted folder are not expanded into it, and `filterValue` is matched against titles alone here rather than  against document content. `folders` and `files` hold one page of the result, `total` counts everything that  matches before `count` and `startIndex` are applied, and `current` describes the section folder. An account  that is given no Trash of its own, an outsider for instance, receives 404.
         * @summary Get the Trash section
         * @param {FoldersApiGetTrashFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTrashFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-trash-folder/
         * @throws {RequiredError}
         */
        getTrashFolder(requestParameters: FoldersApiGetTrashFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper> {
            return localVarFp.getTrashFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.applyFilterOption, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores a file in the folder named by the path in a single request, taking its name from `title` rather than  from the uploaded part, which is what separates it from `POST api/2.0/files/{folderId}/upload`. The content  may arrive either as a multipart part or as the raw request body. The name is stripped of characters a title  cannot hold and truncated, and `createNewIfExist` settles the clash: false adds a new version to the file that  already carries the name, true keeps both by giving the new one a numeric suffix. The caller needs the right  to add content to the folder, so a reader, an editor and a guest get 403, a section root and an archived room  are refused as well, and an unknown folder gives 404. Formats the portal converts are converted afterwards in  the background; pass `keepConvertStatus` to keep the outcome readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. The answer is the stored file. A large payload belongs in a  chunked session instead.
         * @summary Insert a file
         * @param {FoldersApiInsertFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for insertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file/
         * @throws {RequiredError}
         */
        insertFile(requestParameters: FoldersApiInsertFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.insertFile(requestParameters.folderId, requestParameters.insertFileFile, requestParameters.insertFileTitle, requestParameters.insertFileCreateNewIfExist, requestParameters.insertFileKeepConvertStatus, requestParameters.insertFileStreamCanRead, requestParameters.insertFileStreamCanWrite, requestParameters.insertFileStreamCanSeek, requestParameters.insertFileStreamCanTimeout, requestParameters.insertFileStreamLength, requestParameters.insertFileStreamPosition, requestParameters.insertFileStreamReadTimeout, requestParameters.insertFileStreamWriteTimeout, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores one file in the caller\'s own My documents section, the personal storage every portal member has, and  returns the stored file. The destination takes no identifier: it is resolved from the calling account and  created on first use, while a guest account has none and is answered as missing (404). Send the content as a  `multipart/form-data` part or as the raw request body, and name it with `title`, which wins over the name of  the uploaded part and has invalid characters replaced before storing. The call is not idempotent: by default a  file of the same title is overwritten as a new version, while `createNewIfExist=true` stores a separate copy  under a title made unique with a numeric suffix; a title held by a file that is locked or open in the editor  cannot be overwritten either, and a second file appears under the same title. Formats listed in  `extsMustConvert` of `GET api/2.0/files/settings` are converted after the response is sent;  `keepConvertStatus=true` keeps that result readable through `GET api/2.0/files/file/{fileId}/checkconversion`,  which otherwise drops it. Files over the single-request size limit or the account\'s storage quota are refused:  send those through `POST api/2.0/files/{folderId}/upload/create_session`, and use  `POST api/2.0/files/{folderId}/insert` for any other destination.
         * @summary Insert a file into My documents
         * @param {FoldersApiInsertFileToMyFromBodyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for insertFileToMyFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file-to-my-from-body/
         * @throws {RequiredError}
         */
        insertFileToMyFromBody(requestParameters: FoldersApiInsertFileToMyFromBodyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper> {
            return localVarFp.insertFileToMyFromBody(requestParameters.file, requestParameters.title, requestParameters.createNewIfExist, requestParameters.keepConvertStatus, requestParameters.streamCanRead, requestParameters.streamCanWrite, requestParameters.streamCanSeek, requestParameters.streamCanTimeout, requestParameters.streamLength, requestParameters.streamPosition, requestParameters.streamReadTimeout, requestParameters.streamWriteTimeout, options).then((request) => request(axios, basePath));
        },
        /**
         * Gives a folder a new title and answers with the folder as it now stands. The title is trimmed, may not be  blank and is refused when it is longer than the limit the schema prints; a title that matches the current one  leaves the folder untouched, and titles need not be unique among the neighbours. The caller needs the right to  rename the folder, which the room manager, a content creator acting on a folder of their own and the owner of  a personal section have, while a guest is refused with 403 whatever their access; a folder in the Trash  section or in an archived room cannot be renamed either, and a folder that does not exist is answered as  not found. A room may be renamed here as well, in which case the caller needs the right to edit the  room, and `PUT api/2.0/files/rooms/{id}` is the operation that changes its other settings. The call is  mutating and idempotent; on a folder stored in a connected third-party account the identifier of the folder  may change with the title.
         * @summary Rename a folder
         * @param {FoldersApiRenameFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for renameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/
         * @throws {RequiredError}
         */
        renameFolder(requestParameters: FoldersApiRenameFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.renameFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(axios, basePath));
        },
        /**
         * Puts a folder at a given position among the entries of its parent and answers with the folder, its `order`  reporting where it now stands. Positions count from 1, and the entry that held the wanted position, together  with everything after it, is shifted to make room, so the numbering of the parent stays without gaps; a  position beyond the end places the folder last. The value may also be sent as a dotted path, as in 1.2.3, in  which case only its last segment is read. Ordering is what the manual arrangement of a room is built on, and  it only means something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The  caller needs edit access to the folder, which room managers and content creators have, and a member without it  is refused, while a folder that does not exist is answered as not found. The call is mutating and idempotent.  To move several entries in one go use `PUT api/2.0/files/order`.
         * @summary Set folder order
         * @param {FoldersApiSetFolderOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/
         * @throws {RequiredError}
         */
        setFolderOrder(requestParameters: FoldersApiSetFolderOrderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.setFolderOrder(requestParameters.folderId, requestParameters.orderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an external link to a folder or a room, or changes or revokes an existing one, and answers with the  link as it now stands. `linkId` decides which: an identifier that is not yet in use, the empty one included,  creates a link, while the identifier of an existing link rewrites it, so the whole set of parameters is  applied every time and a field left out is reset rather than kept. `access` carries the rights the link  grants, and `access` set to the value that denies everything revokes the link instead - the answer is then  empty, and a revoked primary link is not recreated by a later read. `title` names the link for the people who  manage it, `expirationDate` limits its lifetime and is ignored when it lies in the past, `password` asks  visitors for a secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members  alone, and `primary=true` makes it the primary link of the folder. The caller needs the right to manage the  links of the room, which its manager and a portal administrator acting as room manager have; anyone else is  refused and an unknown folder is answered as not found. The call is mutating.
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
         * Gives up the history report the caller has started for a folder with  `POST api/2.0/files/folder/{folderId}/log/report`. The request only asks the background worker to stop, and  the answer carries no body, so a following `GET api/2.0/files/folder/{folderId}/log/report` is what shows the  task ending as cancelled. Asking to terminate when nothing is running is accepted and changes nothing, which  makes the call safe to repeat. A report that has already finished is not undone by this call and its file  stays in My documents. The caller needs read access to the folder and may not be a guest, and the portal  plan has to include the audit feature; a caller who fails the access rule is answered with 403 and a folder  that does not exist with 404. Each caller can only terminate their own report.
         * @summary Terminate the folder history report generation
         * @param {FoldersApiTerminateReportFolderHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateReportFolderHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-report-folder-history/
         * @throws {RequiredError}
         */
        terminateReportFolderHistory(requestParameters: FoldersApiTerminateReportFolderHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateReportFolderHistory(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores a file in the folder named by the path in a single multipart request, taking its name from the uploaded  part; use `POST api/2.0/files/{folderId}/insert` when the name has to be given separately or the content is  sent as a raw body. The answer is a list that always holds exactly one file. `createNewIfExist` settles the  clash: false adds a new version to the file that already carries the name, true keeps both by giving the new  one a numeric suffix. `storeOriginalFile` reaches further than this call, because it saves the setting on the  calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later  uploads. The caller needs the right to add content to the folder, so a reader, an editor and a guest get 403,  a section root and an archived room are refused as well, and an unknown folder gives 404. A request without a  file is rejected as invalid, and a payload above the portal upload limit is refused.
         * @summary Upload a file
         * @param {FoldersApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/
         * @throws {RequiredError}
         */
        uploadFile(requestParameters: FoldersApiUploadFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper> {
            return localVarFp.uploadFile(requestParameters.folderId, requestParameters.createNewIfExist, requestParameters.storeOriginalFile, requestParameters.keepConvertStatus, requestParameters.file, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads one file into the caller\'s own My documents section and returns it inside a single-element array; one  request stores exactly one file. The destination takes no identifier: it is resolved from the calling account  and created on first use, while a guest account has none and is answered as missing (404). The body has to be  `multipart/form-data` carrying the file part; a request without it is rejected as invalid, and the stored name  comes from that part, since unlike `POST api/2.0/files/@my/insert` there is no separate title. The call is not  idempotent: by default a file of the same title is overwritten as a new version, while `createNewIfExist=true`  stores a separate copy under a title made unique with a numeric suffix. `storeOriginalFile` is not a  per-request switch: it writes the same account setting as `PUT api/2.0/files/storeoriginal`, which decides  what happens to the formats listed in `extsMustConvert` of `GET api/2.0/files/settings` when they are  converted after the response - false replaces the uploaded file with the converted one, true keeps both;  `keepConvertStatus=true` keeps that conversion result readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. Files over the single-request size limit or the account\'s  storage quota are refused; send those through `POST api/2.0/files/{folderId}/upload/create_session`.
         * @summary Upload a file to My documents
         * @param {FoldersApiUploadFileToMyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadFileToMy operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/
         * @throws {RequiredError}
         */
        uploadFileToMy(requestParameters: FoldersApiUploadFileToMyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper> {
            return localVarFp.uploadFileToMy(requestParameters.createNewIfExist, requestParameters.storeOriginalFile, requestParameters.keepConvertStatus, requestParameters.file, options).then((request) => request(axios, basePath));
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
     * The folder whose contents the names are tested against; take the id from a listing such as  `GET api/2.0/files/@root`.
     * @type {number | string}
     * @memberof FoldersApiCheckUpload
     */
    readonly folderId: number | string

    /**
     * The names to test against the files the folder already holds.
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
     * The folder the request is addressed to: when a folder is created it is the parent that receives the new  folder, and when a folder is renamed it is the folder that gets the new title.
     * @type {number | string}
     * @memberof FoldersApiCreateFolder
     */
    readonly folderId: number | string

    /**
     * The title carried by the request body.
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
     * The folder or room the link belongs to.
     * @type {number | string}
     * @memberof FoldersApiCreateFolderPrimaryExternalLink
     */
    readonly id: number | string

    /**
     * The link and the way it is to be shaped.
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
     * The folder whose history is exported; the report covers the folder itself and the entries inside it.
     * @type {number}
     * @memberof FoldersApiCreateReportFolderHistory
     */
    readonly folderId: number

    /**
     * The shape the report is written in: `Xlsx` produces a spreadsheet that is saved as a file of the portal, while  `Csv` produces a comma-separated text file that is uploaded to My documents without being reported back with  a file identifier.
     * @type {AuditReportFormat}
     * @memberof FoldersApiCreateReportFolderHistory
     */
    readonly format?: AuditReportFormat

    /**
     * The earliest moment an exported entry may have, read in the time zone of the portal; left out, the report  starts at the oldest entry the portal still keeps.
     * @type {string}
     * @memberof FoldersApiCreateReportFolderHistory
     */
    readonly from?: string

    /**
     * The latest moment an exported entry may have, read in the time zone of the portal; left out, the report ends  at the newest entry.
     * @type {string}
     * @memberof FoldersApiCreateReportFolderHistory
     */
    readonly to?: string
}

/**
 * Request parameters for deleteFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiDeleteFolderRequest
 */
export interface FoldersApiDeleteFolderRequest {
    /**
     * The folder to delete, together with everything it holds.
     * @type {number | string}
     * @memberof FoldersApiDeleteFolder
     */
    readonly folderId: number | string

    /**
     * How the deletion is to be carried out.
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
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
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
     * Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
     * @type {string}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
     * @type {FilterType}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly filterType?: FilterType

    /**
     * The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
     * @type {number}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly count?: number

    /**
     * The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
     * @type {number}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly startIndex?: number

    /**
     * The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
     * @type {string}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly sortBy?: string

    /**
     * The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
     * @type {SortOrder}
     * @memberof FoldersApiGetFavoritesFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The search string the section is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the section unfiltered.
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
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
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
     * The folder whose contents are listed. Each section root has an operation of its own, such as  `GET api/2.0/files/@my`, and every other folder is opened by the identifier a listing gave for it.
     * @type {number | string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly folderId: number | string

    /**
     * Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly userIdOrGroupId?: string

    /**
     * Restricts the listing to the entries this member shared, which narrows a shared listing down to what one  person handed out.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly sharedBy?: string

    /**
     * Narrows the listing to a single kind of entry, such as documents, spreadsheets, images or one type of room.  Omit it to list every kind the folder holds.
     * @type {FilterType}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly filterType?: FilterType

    /**
     * Keeps only the entries that lie in this room, which matters when the listing being read gathers entries from  more than one of them.
     * @type {number | string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly roomId?: number | string

    /**
     * Keeps only the folders of these kinds, each given as the number of a folder type; it is how a listing is  narrowed down to, say, the form-filling folders of a room.
     * @type {Array<0 | 1 | 2 | 3 | 5 | 6 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 19 | 20 | 21 | 22 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36>}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly folderType?: Array<GetFolderByFolderIdFolderTypeEnum>

    /**
     * Turns `userIdOrGroupId` around: with true the entries of that member or group are the ones left out, with  false they are the only ones kept.
     * @type {boolean}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly excludeSubject?: boolean

    /**
     * Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * Whether a narrowed request reaches into the subfolders: with true, which is what an omitted parameter means,  matching entries are gathered from the whole subtree, with false only the top level is read. It makes a  difference only once `filterType`, `userIdOrGroupId` or `filterValue` narrows the request, because an  unfiltered listing always shows the top level alone.
     * @type {boolean}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly withSubFolders?: boolean

    /**
     * Keeps only the files carrying one of these extensions, several of them separated by commas; the leading dot is  optional.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly extension?: string

    /**
     * Which area a listing that spans several of them is taken from - the active rooms, the archive, the room  templates or the form-filling rooms. A folder that belongs to one area only settles the area itself and  ignores the parameter.
     * @type {SearchArea}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly searchArea?: SearchArea

    /**
     * Keeps only the completed forms whose form field of this name holds a value. Take the name from  `GET api/2.0/files/{folderId}/formfilter`, and use it in the folder that gathers the completed copies of a  form-filling room.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly formsItemKey?: string

    /**
     * The kind of the form field named by `formsItemKey`, taken from the same list; the two are sent together.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly formsItemType?: string

    /**
     * The size of one page of the listing. Pair it with `startIndex` to walk through the result, and compare the two  with `total` in the response to see when the last page has been read.
     * @type {number}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly count?: number

    /**
     * The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
     * @type {number}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly startIndex?: number

    /**
     * The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly sortBy?: string

    /**
     * The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
     * @type {SortOrder}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly sortOrder?: SortOrder

    /**
     * The search string the listing is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the folder unfiltered.
     * @type {string}
     * @memberof FoldersApiGetFolderByFolderId
     */
    readonly filterValue?: string

    /**
     * Where the entries of a tag-based listing have to live to be kept: `Room` keeps what lies in a room,  `Documents` what lies in a personal section, and `Link` what was reached through an external link that is  still valid. It shapes the Favorites and Recent listings and does nothing in an ordinary folder.
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
     * The folder whose activity log is read; the log covers the folder itself and the entries inside it.
     * @type {number}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly folderId: number

    /**
     * The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps.
     * @type {string}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly fromDate?: string

    /**
     * The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry.
     * @type {string}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly toDate?: string

    /**
     * How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body.
     * @type {number}
     * @memberof FoldersApiGetFolderHistory
     */
    readonly count?: number

    /**
     * How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it.
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
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof FoldersApiGetFolderInfo
     */
    readonly folderId: number | string
}

/**
 * Request parameters for getFolderLinks operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderLinksRequest
 */
export interface FoldersApiGetFolderLinksRequest {
    /**
     * The folder or room whose external links are listed.
     * @type {number | string}
     * @memberof FoldersApiGetFolderLinks
     */
    readonly id: number | string
}

/**
 * Request parameters for getFolderPath operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderPathRequest
 */
export interface FoldersApiGetFolderPathRequest {
    /**
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof FoldersApiGetFolderPath
     */
    readonly folderId: number | string
}

/**
 * Request parameters for getFolderPrimaryExternalLink operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFolderPrimaryExternalLinkRequest
 */
export interface FoldersApiGetFolderPrimaryExternalLinkRequest {
    /**
     * The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof FoldersApiGetFolderPrimaryExternalLink
     */
    readonly id: number | string

    /**
     * How many entries at most to answer with, in the operations of this folder that return a list; an operation  that answers with a single object is not affected by it.
     * @type {number}
     * @memberof FoldersApiGetFolderPrimaryExternalLink
     */
    readonly count?: number

    /**
     * How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
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
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof FoldersApiGetFolders
     */
    readonly folderId: number | string
}

/**
 * Request parameters for getFormsFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetFormsFolderRequest
 */
export interface FoldersApiGetFormsFolderRequest {
    /**
     * Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
     * @type {string}
     * @memberof FoldersApiGetFormsFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
     * @type {FilterType}
     * @memberof FoldersApiGetFormsFolder
     */
    readonly filterType?: FilterType

    /**
     * The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
     * @type {number}
     * @memberof FoldersApiGetFormsFolder
     */
    readonly count?: number

    /**
     * The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
     * @type {number}
     * @memberof FoldersApiGetFormsFolder
     */
    readonly startIndex?: number

    /**
     * The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
     * @type {string}
     * @memberof FoldersApiGetFormsFolder
     */
    readonly sortBy?: string

    /**
     * The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
     * @type {SortOrder}
     * @memberof FoldersApiGetFormsFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The search string the section is filtered by: it is matched as a substring of entry titles and, for files,  against the indexed document content as well. Omit it to list the section unfiltered.
     * @type {string}
     * @memberof FoldersApiGetFormsFolder
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getMyFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetMyFolderRequest
 */
export interface FoldersApiGetMyFolderRequest {
    /**
     * Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
     * @type {string}
     * @memberof FoldersApiGetMyFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
     * @type {FilterType}
     * @memberof FoldersApiGetMyFolder
     */
    readonly filterType?: FilterType

    /**
     * Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetMyFolder
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
     * @type {number}
     * @memberof FoldersApiGetMyFolder
     */
    readonly count?: number

    /**
     * The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
     * @type {number}
     * @memberof FoldersApiGetMyFolder
     */
    readonly startIndex?: number

    /**
     * The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
     * @type {string}
     * @memberof FoldersApiGetMyFolder
     */
    readonly sortBy?: string

    /**
     * The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
     * @type {SortOrder}
     * @memberof FoldersApiGetMyFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The search string the section is filtered by, matched as a substring of entry titles. Omit it to list the  section unfiltered.
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
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof FoldersApiGetNewFolderItems
     */
    readonly folderId: number | string
}

/**
 * Request parameters for getRecentFolder operation in FoldersApi.
 * @export
 * @interface FoldersApiGetRecentFolderRequest
 */
export interface FoldersApiGetRecentFolderRequest {
    /**
     * Restricts the listing to the files authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list the whole history.
     * @type {string}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * Narrows the listing to a single kind of file, such as documents, spreadsheets or images. Omit it to list every  kind the history holds.
     * @type {FilterType}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly filterType?: FilterType

    /**
     * Inverts `userIdOrGroupId`: with `true` the files of that member or group are the ones left out of the listing  instead of the only ones kept.
     * @type {boolean}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly excludeSubject?: boolean

    /**
     * Chooses which half of a listing `filterType` and `filterValue` are applied to. The Recent section holds  files only, so the value does not change what comes back.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * The area a listing is taken from. The Recent section is assembled from the caller\'s own open history rather  than from an area, so the value does not change which files are returned.
     * @type {SearchArea}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly searchArea?: SearchArea

    /**
     * The file extensions the listing is limited to, matched against the end of the file name. The leading dot is  optional, and the parameter is repeated once per extension.
     * @type {Array<string>}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly extension?: Array<string>

    /**
     * The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
     * @type {number}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly count?: number

    /**
     * The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
     * @type {number}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly startIndex?: number

    /**
     * The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place. The Recent section keeps its own newest-first order, so the value does not  reorder this listing.
     * @type {string}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly sortBy?: string

    /**
     * The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account. The Recent section keeps its own newest-first order, so the value does not reorder this  listing.
     * @type {SortOrder}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The search string the history is filtered by: it is matched as a substring of file titles and against the  indexed document content as well. Omit it to list the whole history.
     * @type {string}
     * @memberof FoldersApiGetRecentFolder
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getReportFolderHistory operation in FoldersApi.
 * @export
 * @interface FoldersApiGetReportFolderHistoryRequest
 */
export interface FoldersApiGetReportFolderHistoryRequest {
    /**
     * The folder whose history report is being polled. It is the folder that was              passed to the operation that started the report.
     * @type {number}
     * @memberof FoldersApiGetReportFolderHistory
     */
    readonly folderId: number
}

/**
 * Request parameters for getRootFolders operation in FoldersApi.
 * @export
 * @interface FoldersApiGetRootFoldersRequest
 */
export interface FoldersApiGetRootFoldersRequest {
    /**
     * Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
     * @type {string}
     * @memberof FoldersApiGetRootFolders
     */
    readonly userIdOrGroupId?: string

    /**
     * Narrows the content listed inside every returned section to a single kind of entry, such as documents, images  or one type of room. Omit it to list every kind the sections hold.
     * @type {FilterType}
     * @memberof FoldersApiGetRootFolders
     */
    readonly filterType?: FilterType

    /**
     * Set it to `true` to leave the Trash section out of the returned set of sections; with `false`, or when the  parameter is omitted, the section is returned whenever the account has one of its own.
     * @type {boolean}
     * @memberof FoldersApiGetRootFolders
     */
    readonly withoutTrash?: boolean

    /**
     * The size of the content page returned for each section separately, so a value of 1 yields one entry per  section rather than one entry in total.
     * @type {number}
     * @memberof FoldersApiGetRootFolders
     */
    readonly count?: number

    /**
     * The number of matching entries skipped in each section before its page begins; add `count` to it to ask for  the next page of every section.
     * @type {number}
     * @memberof FoldersApiGetRootFolders
     */
    readonly startIndex?: number

    /**
     * The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
     * @type {string}
     * @memberof FoldersApiGetRootFolders
     */
    readonly sortBy?: string

    /**
     * The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
     * @type {SortOrder}
     * @memberof FoldersApiGetRootFolders
     */
    readonly sortOrder?: SortOrder

    /**
     * The search string the content of every section is filtered by: it is matched as a substring of entry titles  and, for files, against the indexed document content as well. Omit it to list the sections unfiltered.
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
     * Restricts the listing to the entries authored by this portal member, or by the members of this group; the same  parameter accepts either kind of identifier. Omit it to list everything the caller can read.
     * @type {string}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly userIdOrGroupId?: string

    /**
     * Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list  every kind the section holds.
     * @type {FilterType}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly filterType?: FilterType

    /**
     * Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come  back unfiltered, with `Folders` the files do, and with `All` both halves are filtered.
     * @type {ApplyFilterOption}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly applyFilterOption?: ApplyFilterOption

    /**
     * The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two  with `total` in the response to see when the last page has been read.
     * @type {number}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly count?: number

    /**
     * The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next  page.
     * @type {number}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly startIndex?: number

    /**
     * The name of the field the entries are ordered by, matched case-insensitively against the file sort fields:  `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`,  `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the  account and reused by later listings that omit the parameter, while a value matching none of the fields leaves  that saved order in place.
     * @type {string}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly sortBy?: string

    /**
     * The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order  of the account.
     * @type {SortOrder}
     * @memberof FoldersApiGetTrashFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The search string the section is filtered by, matched as a substring of entry titles. Omit it to list the  section unfiltered.
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
     * The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
     * @type {number | string}
     * @memberof FoldersApiInsertFile
     */
    readonly folderId: number | string

    /**
     * The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw  request body, which is what a client that cannot build a form does; when both are present the form part wins.
     * @type {File}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileFile?: File

    /**
     * The name to store the file under, extension included. It wins over the name of the uploaded part, which is the  reason to choose this operation over the plain upload, and it is the only name available when the content  arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170  characters before the file is stored.
     * @type {string}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileTitle?: string

    /**
     * Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
     * @type {boolean}
     * @memberof FoldersApiInsertFile
     */
    readonly insertFileCreateNewIfExist?: boolean

    /**
     * Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
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
     * The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw  request body, which is what a client that cannot build a form does; when both are present the form part wins.
     * @type {File}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly file?: File

    /**
     * The name to store the file under, extension included. It wins over the name of the uploaded part, which is the  reason to choose this operation over the plain upload, and it is the only name available when the content  arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170  characters before the file is stored.
     * @type {string}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly title?: string

    /**
     * Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
     * @type {boolean}
     * @memberof FoldersApiInsertFileToMyFromBody
     */
    readonly createNewIfExist?: boolean

    /**
     * Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
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
     * The folder the request is addressed to: when a folder is created it is the parent that receives the new  folder, and when a folder is renamed it is the folder that gets the new title.
     * @type {number | string}
     * @memberof FoldersApiRenameFolder
     */
    readonly folderId: number | string

    /**
     * The title carried by the request body.
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
     * The folder to move.
     * @type {number | string}
     * @memberof FoldersApiSetFolderOrder
     */
    readonly folderId: number | string

    /**
     * The position the folder is to take.
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
     * The folder or room the link belongs to.
     * @type {number | string}
     * @memberof FoldersApiSetFolderPrimaryExternalLink
     */
    readonly id: number | string

    /**
     * The link and the way it is to be shaped.
     * @type {FolderLinkRequest}
     * @memberof FoldersApiSetFolderPrimaryExternalLink
     */
    readonly folderLinkRequest: FolderLinkRequest
}

/**
 * Request parameters for terminateReportFolderHistory operation in FoldersApi.
 * @export
 * @interface FoldersApiTerminateReportFolderHistoryRequest
 */
export interface FoldersApiTerminateReportFolderHistoryRequest {
    /**
     * The folder whose running history report is to be given up. It is the folder that              was passed to the operation that started the report.
     * @type {number}
     * @memberof FoldersApiTerminateReportFolderHistory
     */
    readonly folderId: number
}

/**
 * Request parameters for uploadFile operation in FoldersApi.
 * @export
 * @interface FoldersApiUploadFileRequest
 */
export interface FoldersApiUploadFileRequest {
    /**
     * The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an  ordinary folder inside one is accepted, a section root is not.
     * @type {number | string}
     * @memberof FoldersApiUploadFile
     */
    readonly folderId: number | string

    /**
     * Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
     * @type {boolean}
     * @memberof FoldersApiUploadFile
     */
    readonly createNewIfExist?: boolean

    /**
     * Reaches further than this request: it writes a setting on the calling account, the same one  `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the  uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted  one, and leaving it out keeps whatever the account already has.
     * @type {boolean}
     * @memberof FoldersApiUploadFile
     */
    readonly storeOriginalFile?: boolean

    /**
     * Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
     * @type {boolean}
     * @memberof FoldersApiUploadFile
     */
    readonly keepConvertStatus?: boolean

    /**
     * The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the  stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request  without it is rejected as invalid.
     * @type {File}
     * @memberof FoldersApiUploadFile
     */
    readonly file?: File
}

/**
 * Request parameters for uploadFileToMy operation in FoldersApi.
 * @export
 * @interface FoldersApiUploadFileToMyRequest
 */
export interface FoldersApiUploadFileToMyRequest {
    /**
     * Settles the clash with a file already carrying that title: left out, the content is written as the next  version of that file; set to true, both survive and the new one gets a numeric suffix in its title.
     * @type {boolean}
     * @memberof FoldersApiUploadFileToMy
     */
    readonly createNewIfExist?: boolean

    /**
     * Reaches further than this request: it writes a setting on the calling account, the same one  `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the  uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted  one, and leaving it out keeps whatever the account already has.
     * @type {boolean}
     * @memberof FoldersApiUploadFileToMy
     */
    readonly storeOriginalFile?: boolean

    /**
     * Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue  record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left  out, the record is cleared the moment the conversion ends and that call finds nothing.
     * @type {boolean}
     * @memberof FoldersApiUploadFileToMy
     */
    readonly keepConvertStatus?: boolean

    /**
     * The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the  stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request  without it is rejected as invalid.
     * @type {File}
     * @memberof FoldersApiUploadFileToMy
     */
    readonly file?: File
}

/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseAPI}
 */
export class FoldersApi extends BaseAPI {
    /**
     * Reports which of the submitted titles already belong to a file in the folder, so an upload can decide in  advance whether to overwrite or to ask for another name. Only the clashing titles come back, unordered and  without repetitions, and an empty array means every name is free. Matching is by title and ignores case, so a  name that differs only in capitalisation is still reported; an existing file that is encrypted is left out,  because an upload cannot take it over. The call changes nothing. It needs the same right as the upload itself,  the right to add content to the folder, which room managers and content creators have and readers, editors and  guests do not; an archived room, a section root and a folder the caller cannot write to are all refused, while  an unknown folder is answered as missing. A request without `filesTitle` is rejected as an invalid request, an  empty list is accepted and answers with an empty array.
     * @summary Check for upload conflicts
     * @param {FilesFoldersApiCheckUploadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public checkUpload(requestParameters: FoldersApiCheckUploadRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).checkUpload(requestParameters.folderId, requestParameters.checkUploadRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a folder inside the folder named in the path and answers with the folder as it was stored. The title  is trimmed, may not be blank and is refused when it is longer than the limit the schema prints; titles are not  required to be unique, so creating the same title twice leaves two folders side by side, which makes the call  mutating and not idempotent. The caller needs the right to create content in the parent, which the room  manager, a content creator and the owner of a personal section have; a member without that right, an archived  parent, and a section root that only holds rooms - Rooms, Forms and AI agents - are all refused, as is a  parent that does not exist. Rooms are not created here: use `POST api/2.0/files/rooms` for those, and this  operation for ordinary folders within them. Members of the room are notified of the new folder. Read the  identifier of the new folder from `id` and fill it with `POST api/2.0/files/{folderId}/upload`.
     * @summary Create a folder
     * @param {FilesFoldersApiCreateFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createFolder(requestParameters: FoldersApiCreateFolderRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Create a folder (third-party storage)
     * @param {FilesFoldersApiCreateFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createFolder(requestParameters: FoldersApiCreateFolderRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public createFolder(requestParameters: FoldersApiCreateFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public createFolder(requestParameters: FoldersApiCreateFolderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Answers with the primary external link of a folder or a room, creating it on the first call and returning the  one that already exists afterwards, so the operation is idempotent in effect: a second call with other  parameters does not reconfigure the existing link, and changing one is the business of  `PUT api/2.0/files/folder/{id}/links`. The parameters therefore only shape the link at the moment it is born -  `access` its rights, `title` its name, `expirationDate` its lifetime, which is unlimited here unless one is  given, `internal` whether only signed-in members may follow it, `denyDownload` whether the contents may only  be viewed, and `password` a secret to be asked for. Sending `access` with the value that grants nothing  creates no link and answers with nothing. The caller needs the right to manage the links of the room the  folder belongs to, which its manager and a portal administrator acting as room manager have, and a member with  content-creator or read access is refused with 403; an unknown folder is answered with 404. Read the address  from `sharedTo.shareLink`.
     * @summary Create the folder primary external link
     * @param {FilesFoldersApiCreateFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createFolderPrimaryExternalLink(requestParameters: FoldersApiCreateFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createFolderPrimaryExternalLink(requestParameters.id, requestParameters.folderLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that renders the history of a folder into a spreadsheet, or into a CSV file when  `format` asks for one, and saves the result in the caller\'s My documents. The answer is the queued task, not  the report: poll `GET api/2.0/files/folder/{folderId}/log/report` until `isCompleted` is true, then take the  file from `resultFileId`, `resultFileName` and `resultFileUrl`, of which a CSV report fills only the last two.  `from` and `to` limit the exported period; leaving both out exports the whole history. While a report for the  same folder and caller is still running, this call joins it and answers with the running task instead of  starting a second one, so retrying is safe. The caller needs read access to the folder and may not be a guest,  and the portal plan has to include the audit feature - otherwise the call is refused, with 403 for the access  rule and 404 for a folder that does not exist. Only a portal administrator gets the address, browser and  platform columns. Give up a running report with `DELETE api/2.0/files/folder/{folderId}/log/report`.
     * @summary Start the folder history report generation
     * @param {FilesFoldersApiCreateReportFolderHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public createReportFolderHistory(requestParameters: FoldersApiCreateReportFolderHistoryRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).createReportFolderHistory(requestParameters.folderId, requestParameters.format, requestParameters.from, requestParameters.to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues the deletion of one folder together with everything inside it, and answers with the file operations of  the caller, the one just created among them. The folder is not gone when the response arrives: poll  `GET api/2.0/files/fileops` until the operation reports `finished`, and read its `error` to learn whether the  deletion succeeded. By default the folder is moved to the Trash section, from where it can be restored;  `immediately=true` discards it for good instead, and inside a room, where there is no Trash, deletion is  always final. `deleteAfter=true` postpones the deletion until the editing sessions on the contents have ended,  so files somebody is working on are not pulled away. The caller needs the right to delete the folder, which  the room manager, a portal administrator acting as room manager and a content creator acting on a folder of  their own have; editing access alone, read access and a guest are refused. The call is destructive. To delete  several items at once use `PUT api/2.0/files/fileops/delete`.
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
     * Rebuilds the spreadsheet that gathers the answers submitted to a form, starting from the Complete folder  that holds the filled copies. The answer names the original form the results belong to, says in `isNewFile`  whether the spreadsheet is being created or an existing one rewritten in place, and carries the queued job in  `task`; the file itself is not ready yet, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the identifier  of the form until the task reports completion. The folder has to be the Complete folder of a form-filling  room and has to hold at least one submitted copy whose original form still exists, and the caller needs the  right to maintain that form, which the room manager has. A folder that does not exist, or one that holds  nothing to report on, is answered with 404, and a folder of the wrong kind or a caller without those rights  with 403. The call is mutating: it writes the results file of the form.
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
     * Returns the caller\'s own Favorites section: the files and folders this account has marked as favorite,  together with the section folder itself. Favorites are per-account, so the entries another member marked are  not listed here, and a guest sees only their own, usually empty, list. Mark a single file with  `GET api/2.0/files/favorites/{fileId}`, or add and remove batches of files and folders with  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`. Nothing in the section is modified,  though passing `sortBy` saves the requested order as the default order for this account. Entries the caller  can no longer read, and entries that have been moved to the Trash section, drop out of the listing even  though their favorite mark stays, so the section can shrink without an explicit unmark. `folders` and `files`  hold one page of the section, `total` counts the entries matching the request before `count` and `startIndex`  are applied, and `current` describes the section folder itself.
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
     * Reports how much storage the portal spends on documents, split by section - My documents, Trash, Rooms,  Archive and, where the feature is on, AI agents - each entry naming the section and the space it takes in  bytes. The figures cover the whole portal rather than the calling account, and moving an entry between  sections moves its space with it, which is why deleting a file to the Trash does not free anything until the  Trash is emptied. Only a caller who may change portal settings, that is the owner and the portal  administrators, is allowed here; a room administrator, an ordinary member and a guest are all refused. The  call is read-only, takes no parameters and answers with the sections in a fixed order. The quota of the portal  as a whole, storage outside documents included, is not part of this answer.
     * @summary Get used space of files
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFilesUsedSpace(options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFilesUsedSpace(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the fields the completed forms of a form-filling room carry, each of them a key and the kind of value  behind it, so that a client can offer them as filters. Feed a pair from this list back as `formsItemKey` and  `formsItemType` of `GET api/2.0/files/{folderId}` to keep only the completed forms whose field of that name  holds a value. The fields are read from the search index of one of the forms already gathered, so they appear  once indexing has caught up with the first submission. Only the Complete folder of a form-filling room  carries such fields: for any other folder, for a folder that does not exist and for one that has been deleted  the answer is an empty list rather than a refusal, and the same holds while nothing has been submitted yet.  The operation reads the index alone, changes nothing and needs no authorization.
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
     * Returns one page of the contents of a folder - its subfolders in `folders`, its files in `files`, the folder  itself in `current` and the chain of parents in `pathParts` - and is the operation a client browses the file  tree with. `filterType`, `filterValue`, `extension`, `userIdOrGroupId`, `sharedBy` and `folderType` narrow  what is listed, `applyFilterOption` decides whether those filters bite on the files, on the folders or on  both, and `withSubFolders`, which is on unless it is switched off, lets a narrowed request descend through the  whole subtree instead of the top level alone. `filterValue` is matched against titles and against indexed  document content, and indexing is asynchronous, so a file uploaded a moment ago can be missing from a search  for a short while. `count` and `startIndex` page through the result while `total` counts everything that  matches, and `sortBy` with `sortOrder` both order the page and are saved as the default order of the account.  Reading a room or an ordinary folder clears its new-item marks for the caller. A caller who may not read the  folder is answered with 403, and a folder that does not exist with 404.
     * @summary Get a folder by ID
     * @param {FilesFoldersApiGetFolderByFolderIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderByFolderId(requestParameters: FoldersApiGetFolderByFolderIdRequest & { folderId: number; roomId?: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Get a folder by ID (third-party storage)
     * @param {FilesFoldersApiGetFolderByFolderIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderByFolderId(requestParameters: FoldersApiGetFolderByFolderIdRequest & { folderId: string; roomId?: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderContentWrapper>;
    public getFolderByFolderId(requestParameters: FoldersApiGetFolderByFolderIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper | ThirdPartyFolderContentWrapper>;
    public getFolderByFolderId(requestParameters: FoldersApiGetFolderByFolderIdRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderByFolderId(requestParameters.folderId, requestParameters.userIdOrGroupId, requestParameters.sharedBy, requestParameters.filterType, requestParameters.roomId, requestParameters.folderType, requestParameters.excludeSubject, requestParameters.applyFilterOption, requestParameters.withSubFolders, requestParameters.extension, requestParameters.searchArea, requestParameters.formsItemKey, requestParameters.formsItemType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.location, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists what has happened to a folder and to the entries inside it - creations, renames, uploads, moves,  deletions and changes of access - each record naming the action, the moment it happened and the member behind  it. Records that belong to one action are grouped, so a batch arrives as a single entry carrying the rest of  itself in `related`, and the list runs from the most recent record backwards. `fromDate` and `toDate` narrow  the period, `startIndex` and `count` page through the result, and the number of records matching the request  is reported in the response headers rather than in the body. Any member who can read the folder may read its  history; a caller without access is answered with 403 and a folder that does not exist with 404. When the  folder is a form-filling folder the caller reached through a filling invitation, the history is narrowed to  what that caller may see. The call is read-only. To take the same history away as a spreadsheet, start a  report with `POST api/2.0/files/folder/{folderId}/log/report`.
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
     * Returns one folder as an object - its title, its parent, the moments it was created and last changed, the  access the caller has to it, the number of items that are new for them, and the room settings when the folder  is a room - without listing anything inside it. Use it to resolve a folder identifier into something  displayable, and `GET api/2.0/files/{folderId}` when the contents are what is wanted; unlike that operation,  this one leaves the new-item marks of the folder alone. Any member who can read the folder may call it, and an  anonymous caller only through an external link that grants access, everybody else being refused; a folder that  does not exist is answered as not found. The call is read-only. The chain of parents above the folder is not  part of the answer and is read with `GET api/2.0/files/folder/{folderId}/path`.
     * @summary Get folder information
     * @param {FilesFoldersApiGetFolderInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderInfo(requestParameters: FoldersApiGetFolderInfoRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Get folder information (third-party storage)
     * @param {FilesFoldersApiGetFolderInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderInfo(requestParameters: FoldersApiGetFolderInfoRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public getFolderInfo(requestParameters: FoldersApiGetFolderInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public getFolderInfo(requestParameters: FoldersApiGetFolderInfoRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderInfo(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the external links of a folder or a room, each with its identifier, title, address, rights, expiration  date, password flag and download restriction, the primary link among them once it exists. At most the first  hundred links are answered and the number returned is reported in the response headers; there are no paging  parameters here. A folder that has never been shared by link answers with an empty list, and so does a member  who may read the folder but not manage its links - the empty answer therefore means nothing to show you  rather than no links exist. A member without access to the room is refused, an anonymous caller is rejected,  and a folder that does not exist is answered as not found. The call is read-only. Take an identifier from here  to `PUT api/2.0/files/folder/{id}/links` to change or remove that link, and read the primary one alone with  `GET api/2.0/files/folder/{id}/link`.
     * @summary Get folder external links
     * @param {FilesFoldersApiGetFolderLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderLinks(requestParameters: FoldersApiGetFolderLinksRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderLinks(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the chain of folders that leads to the folder named in the path, ordered from the section root down to  the folder itself, which is the last entry. It is what a breadcrumb trail is built from, and it also tells a  client which section - a room, the personal section, the archive - a bare folder identifier belongs to. Only  the folders the caller may see are part of the chain, so a member who was given access to a folder deep inside  a room gets a shorter path than the room manager does. The caller needs read access to the folder and is  otherwise answered with 403, while a folder that does not exist is answered as not found. The call is  read-only and takes no paging parameters. To go the other way, from a folder down into its contents, call  `GET api/2.0/files/{folderId}`.
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
     * Answers with the primary external link of a folder or a room - the one the Copy link action of a client  hands out - with its address in `sharedTo.shareLink`, its rights in `access`, and its title, expiration date,  password flag and download restriction beside them. The link is created on the first read if the folder has  none, with read rights, no password and no expiry, so this operation mutates on that first call and is a plain  read afterwards; repeated calls answer with the same link identifier. The caller needs the right to manage the  links of the room the folder belongs to, which its manager and a portal administrator acting as room manager  have; a member with read access alone is refused with 403 and an anonymous caller is rejected, while a link  that was deliberately revoked is answered with 404 rather than being recreated. The paging parameters are  accepted for compatibility and leave the single link answered here unchanged. Every external link of the same  folder is listed by `GET api/2.0/files/folder/{id}/links`.
     * @summary Get the folder primary external link
     * @param {FilesFoldersApiGetFolderPrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFolderPrimaryExternalLink(requestParameters: FoldersApiGetFolderPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFolderPrimaryExternalLink(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the folders that sit directly inside the folder named in the path, ordered by title, without their own  contents and without the files that lie beside them. The whole list arrives at once - there are no paging or  filtering parameters here - so for a large folder, or when the files are wanted as well, use  `GET api/2.0/files/{folderId}`, which pages and filters. A folder that holds no subfolders answers with an  empty list. The caller needs read access to the folder, and only the subfolders they may see are listed, so a  member of a room can get fewer entries than its manager; a caller without access is answered with 403, and a  folder that does not exist, or one that has been deleted for good, is answered as not found. The call is  read-only and leaves the new-item marks of the folder alone.
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
     * Returns the Forms section: the flat list of form-filling rooms the caller may read. Such rooms are stored  under the Rooms tree but are surfaced only here, so `GET api/2.0/files/rooms` leaves them out of the active  area and lists them when `searchArea` names the forms area instead. The section is not expanded into room  content, so `folders` carries the rooms while `files` comes back empty; to read what is inside one of them,  call `GET api/2.0/files/{folderId}` with the room identifier. Nothing is modified, though passing `sortBy`  saves the requested order as the default order for this account. `filterType`, `filterValue`,  `userIdOrGroupId` and the sorting parameters narrow and order the room list, `count` and `startIndex` page  through it, `total` reports how many rooms match the request in full, and `current` describes the section  folder itself.
     * @summary Get the Forms section
     * @param {FilesFoldersApiGetFormsFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getFormsFolder(requestParameters: FoldersApiGetFormsFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getFormsFolder(requestParameters.userIdOrGroupId, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the contents of the caller\'s My documents section, the personal storage that belongs to this account  alone and stays invisible to other members until something in it is shared explicitly. Any authenticated  member that has a personal section can read it; guest accounts are not given one, and the call then answers  404. Nothing in the section is modified, though passing `sortBy` saves the requested order as the default  order for this account. Without a filter only the top level of the section is listed; as soon as `filterType`,  `userIdOrGroupId` or `filterValue` narrows the request, the search descends through the whole subtree.  `filterValue` is matched against titles and against indexed document content, and the index is written  asynchronously, so a file uploaded a moment ago can be missing from a search for a short while. `folders` and  `files` hold one page of the result, `total` counts everything that matches before `count` and `startIndex`  are applied, and `current` describes the section folder. To open a folder inside the section, call  `GET api/2.0/files/{folderId}` with its identifier.
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
     * Lists the entries of a folder that are new for the calling member - the files and folders created or changed  there since they last opened it - ordered from the most recently changed backwards. It is what the badge of a  room is filled from, and it is personal: two members of the same room get different answers. Reading this list  does not clear the marks, so the same entries come back until the folder itself is opened with  `GET api/2.0/files/{folderId}`, which does clear them. A folder with nothing new answers with an empty list,  and marks disappear on their own when the entry behind them is deleted or moved out of reach. The caller needs  read access to the folder and is otherwise answered with 403. The whole list arrives at once, without paging  or filtering, and the call is read-only.
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
     * Returns the Recent section: the files the calling account has opened lately. The section holds files only,  so `folders` comes back empty, and it is personal, so another member\'s history is not visible here. A file is  added when it is opened and can also be added explicitly with `POST api/2.0/files/file/{fileId}/recent`;  `DELETE api/2.0/files/recent` clears the whole history, and `PUT api/2.0/files/displayrecent` switches the  section on and off for the account, which also decides whether `GET api/2.0/files/@root` includes it. Nothing  in the section is modified, though passing `sortBy` saves the requested order as the default order for this  account. The listing is ordered by the moment the caller last opened each file, newest first, and `sortBy` and  `sortOrder` do not change that order. `files` holds one page, `total` counts the files matching the request  before `count` and `startIndex` are applied, and `current` describes the section folder itself.
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
     * Reports how far the history report of a folder has got, and is the operation to poll after  `POST api/2.0/files/folder/{folderId}/log/report` has queued one. `percentage` climbs to 100, `isCompleted`  turns true when the job is over however it ended, `error` carries the reason when it failed, and  `resultFileId`, `resultFileName` and `resultFileUrl` name the file that was saved in the caller\'s My  documents - a CSV report leaving the identifier empty. An empty answer means there is no report for this  folder and caller, either because none was started or because a finished one has already been picked up by an  earlier poll. The caller needs read access to the folder and may not be a guest, and the portal plan has to  include the audit feature; a caller who fails the access rule is answered with 403 and a folder that does not  exist with 404. The call is read-only, and each caller sees only their own report.
     * @summary Get the folder history report generation status
     * @param {FilesFoldersApiGetReportFolderHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public getReportFolderHistory(requestParameters: FoldersApiGetReportFolderHistoryRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).getReportFolderHistory(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns every top-level section the calling account can see in one response, each of them a full section  object carrying its own first page of content: Favorites, Recent, Shared with me, My documents,  Trash, Rooms, Forms, Archive and, while AI access is enabled for the portal, AI agents. A section is  left out when the account has none of it, which is why a guest gets no personal section, and Recent is  listed only while it is switched on with `PUT api/2.0/files/displayrecent`. Pass `withoutTrash=true` to drop  the Trash section. The filters, `count` and `startIndex` are applied to each section separately, so  `count=1` returns one entry per section and every section reports its own `total`. Because it builds the  content of all of them, this is the most expensive listing in the module: when a single section is enough,  read it directly, for example with `GET api/2.0/files/@my`. The call modifies nothing in the sections and  leaves their new-item badges untouched, though passing `sortBy` saves the requested order as the default order  for this account.
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
     * Returns the caller\'s Trash section: the files and folders this account has deleted, kept there until they  are restored or discarded. Each member has a Trash of their own and sees only what they deleted themselves.  Restore an entry by moving it back with `PUT api/2.0/files/fileops/move`, or discard the whole section with  `PUT api/2.0/files/fileops/emptytrash`; both start a background operation that is polled through  `GET api/2.0/files/fileops`. This call itself modifies nothing, though passing `sortBy` saves the requested  order as the default order for this account. Only the top level of the section is listed, so the contents of a  deleted folder are not expanded into it, and `filterValue` is matched against titles alone here rather than  against document content. `folders` and `files` hold one page of the result, `total` counts everything that  matches before `count` and `startIndex` are applied, and `current` describes the section folder. An account  that is given no Trash of its own, an outsider for instance, receives 404.
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
     * Stores a file in the folder named by the path in a single request, taking its name from `title` rather than  from the uploaded part, which is what separates it from `POST api/2.0/files/{folderId}/upload`. The content  may arrive either as a multipart part or as the raw request body. The name is stripped of characters a title  cannot hold and truncated, and `createNewIfExist` settles the clash: false adds a new version to the file that  already carries the name, true keeps both by giving the new one a numeric suffix. The caller needs the right  to add content to the folder, so a reader, an editor and a guest get 403, a section root and an archived room  are refused as well, and an unknown folder gives 404. Formats the portal converts are converted afterwards in  the background; pass `keepConvertStatus` to keep the outcome readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. The answer is the stored file. A large payload belongs in a  chunked session instead.
     * @summary Insert a file
     * @param {FilesFoldersApiInsertFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public insertFile(requestParameters: FoldersApiInsertFileRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Insert a file (third-party storage)
     * @param {FilesFoldersApiInsertFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public insertFile(requestParameters: FoldersApiInsertFileRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public insertFile(requestParameters: FoldersApiInsertFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public insertFile(requestParameters: FoldersApiInsertFileRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).insertFile(requestParameters.folderId, requestParameters.insertFileFile, requestParameters.insertFileTitle, requestParameters.insertFileCreateNewIfExist, requestParameters.insertFileKeepConvertStatus, requestParameters.insertFileStreamCanRead, requestParameters.insertFileStreamCanWrite, requestParameters.insertFileStreamCanSeek, requestParameters.insertFileStreamCanTimeout, requestParameters.insertFileStreamLength, requestParameters.insertFileStreamPosition, requestParameters.insertFileStreamReadTimeout, requestParameters.insertFileStreamWriteTimeout, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores one file in the caller\'s own My documents section, the personal storage every portal member has, and  returns the stored file. The destination takes no identifier: it is resolved from the calling account and  created on first use, while a guest account has none and is answered as missing (404). Send the content as a  `multipart/form-data` part or as the raw request body, and name it with `title`, which wins over the name of  the uploaded part and has invalid characters replaced before storing. The call is not idempotent: by default a  file of the same title is overwritten as a new version, while `createNewIfExist=true` stores a separate copy  under a title made unique with a numeric suffix; a title held by a file that is locked or open in the editor  cannot be overwritten either, and a second file appears under the same title. Formats listed in  `extsMustConvert` of `GET api/2.0/files/settings` are converted after the response is sent;  `keepConvertStatus=true` keeps that result readable through `GET api/2.0/files/file/{fileId}/checkconversion`,  which otherwise drops it. Files over the single-request size limit or the account\'s storage quota are refused:  send those through `POST api/2.0/files/{folderId}/upload/create_session`, and use  `POST api/2.0/files/{folderId}/insert` for any other destination.
     * @summary Insert a file into My documents
     * @param {FilesFoldersApiInsertFileToMyFromBodyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public insertFileToMyFromBody(requestParameters: FoldersApiInsertFileToMyFromBodyRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).insertFileToMyFromBody(requestParameters.file, requestParameters.title, requestParameters.createNewIfExist, requestParameters.keepConvertStatus, requestParameters.streamCanRead, requestParameters.streamCanWrite, requestParameters.streamCanSeek, requestParameters.streamCanTimeout, requestParameters.streamLength, requestParameters.streamPosition, requestParameters.streamReadTimeout, requestParameters.streamWriteTimeout, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gives a folder a new title and answers with the folder as it now stands. The title is trimmed, may not be  blank and is refused when it is longer than the limit the schema prints; a title that matches the current one  leaves the folder untouched, and titles need not be unique among the neighbours. The caller needs the right to  rename the folder, which the room manager, a content creator acting on a folder of their own and the owner of  a personal section have, while a guest is refused with 403 whatever their access; a folder in the Trash  section or in an archived room cannot be renamed either, and a folder that does not exist is answered as  not found. A room may be renamed here as well, in which case the caller needs the right to edit the  room, and `PUT api/2.0/files/rooms/{id}` is the operation that changes its other settings. The call is  mutating and idempotent; on a folder stored in a connected third-party account the identifier of the folder  may change with the title.
     * @summary Rename a folder
     * @param {FilesFoldersApiRenameFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public renameFolder(requestParameters: FoldersApiRenameFolderRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Rename a folder (third-party storage)
     * @param {FilesFoldersApiRenameFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public renameFolder(requestParameters: FoldersApiRenameFolderRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public renameFolder(requestParameters: FoldersApiRenameFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public renameFolder(requestParameters: FoldersApiRenameFolderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).renameFolder(requestParameters.folderId, requestParameters.createFolder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Puts a folder at a given position among the entries of its parent and answers with the folder, its `order`  reporting where it now stands. Positions count from 1, and the entry that held the wanted position, together  with everything after it, is shifted to make room, so the numbering of the parent stays without gaps; a  position beyond the end places the folder last. The value may also be sent as a dotted path, as in 1.2.3, in  which case only its last segment is read. Ordering is what the manual arrangement of a room is built on, and  it only means something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The  caller needs edit access to the folder, which room managers and content creators have, and a member without it  is refused, while a folder that does not exist is answered as not found. The call is mutating and idempotent.  To move several entries in one go use `PUT api/2.0/files/order`.
     * @summary Set folder order
     * @param {FilesFoldersApiSetFolderOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public setFolderOrder(requestParameters: FoldersApiSetFolderOrderRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Set folder order (third-party storage)
     * @param {FilesFoldersApiSetFolderOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public setFolderOrder(requestParameters: FoldersApiSetFolderOrderRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public setFolderOrder(requestParameters: FoldersApiSetFolderOrderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public setFolderOrder(requestParameters: FoldersApiSetFolderOrderRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).setFolderOrder(requestParameters.folderId, requestParameters.orderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an external link to a folder or a room, or changes or revokes an existing one, and answers with the  link as it now stands. `linkId` decides which: an identifier that is not yet in use, the empty one included,  creates a link, while the identifier of an existing link rewrites it, so the whole set of parameters is  applied every time and a field left out is reset rather than kept. `access` carries the rights the link  grants, and `access` set to the value that denies everything revokes the link instead - the answer is then  empty, and a revoked primary link is not recreated by a later read. `title` names the link for the people who  manage it, `expirationDate` limits its lifetime and is ignored when it lies in the past, `password` asks  visitors for a secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members  alone, and `primary=true` makes it the primary link of the folder. The caller needs the right to manage the  links of the room, which its manager and a portal administrator acting as room manager have; anyone else is  refused and an unknown folder is answered as not found. The call is mutating.
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
     * Gives up the history report the caller has started for a folder with  `POST api/2.0/files/folder/{folderId}/log/report`. The request only asks the background worker to stop, and  the answer carries no body, so a following `GET api/2.0/files/folder/{folderId}/log/report` is what shows the  task ending as cancelled. Asking to terminate when nothing is running is accepted and changes nothing, which  makes the call safe to repeat. A report that has already finished is not undone by this call and its file  stays in My documents. The caller needs read access to the folder and may not be a guest, and the portal  plan has to include the audit feature; a caller who fails the access rule is answered with 403 and a folder  that does not exist with 404. Each caller can only terminate their own report.
     * @summary Terminate the folder history report generation
     * @param {FilesFoldersApiTerminateReportFolderHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public terminateReportFolderHistory(requestParameters: FoldersApiTerminateReportFolderHistoryRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).terminateReportFolderHistory(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores a file in the folder named by the path in a single multipart request, taking its name from the uploaded  part; use `POST api/2.0/files/{folderId}/insert` when the name has to be given separately or the content is  sent as a raw body. The answer is a list that always holds exactly one file. `createNewIfExist` settles the  clash: false adds a new version to the file that already carries the name, true keeps both by giving the new  one a numeric suffix. `storeOriginalFile` reaches further than this call, because it saves the setting on the  calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later  uploads. The caller needs the right to add content to the folder, so a reader, an editor and a guest get 403,  a section root and an archived room are refused as well, and an unknown folder gives 404. A request without a  file is rejected as invalid, and a payload above the portal upload limit is refused.
     * @summary Upload a file
     * @param {FilesFoldersApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public uploadFile(requestParameters: FoldersApiUploadFileRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Upload a file (third-party storage)
     * @param {FilesFoldersApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public uploadFile(requestParameters: FoldersApiUploadFileRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileArrayWrapper>;
    public uploadFile(requestParameters: FoldersApiUploadFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper>;
    public uploadFile(requestParameters: FoldersApiUploadFileRequest, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).uploadFile(requestParameters.folderId, requestParameters.createNewIfExist, requestParameters.storeOriginalFile, requestParameters.keepConvertStatus, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads one file into the caller\'s own My documents section and returns it inside a single-element array; one  request stores exactly one file. The destination takes no identifier: it is resolved from the calling account  and created on first use, while a guest account has none and is answered as missing (404). The body has to be  `multipart/form-data` carrying the file part; a request without it is rejected as invalid, and the stored name  comes from that part, since unlike `POST api/2.0/files/@my/insert` there is no separate title. The call is not  idempotent: by default a file of the same title is overwritten as a new version, while `createNewIfExist=true`  stores a separate copy under a title made unique with a numeric suffix. `storeOriginalFile` is not a  per-request switch: it writes the same account setting as `PUT api/2.0/files/storeoriginal`, which decides  what happens to the formats listed in `extsMustConvert` of `GET api/2.0/files/settings` when they are  converted after the response - false replaces the uploaded file with the converted one, true keeps both;  `keepConvertStatus=true` keeps that conversion result readable through  `GET api/2.0/files/file/{fileId}/checkconversion`. Files over the single-request size limit or the account\'s  storage quota are refused; send those through `POST api/2.0/files/{folderId}/upload/create_session`.
     * @summary Upload a file to My documents
     * @param {FilesFoldersApiUploadFileToMyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public uploadFileToMy(requestParameters: FoldersApiUploadFileToMyRequest = {}, options?: RawAxiosRequestConfig) {
        return FoldersApiFp(this.configuration).uploadFileToMy(requestParameters.createNewIfExist, requestParameters.storeOriginalFile, requestParameters.keepConvertStatus, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetFolderByFolderIdFolderTypeEnum = {
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
    Forms: 36
} as const;
export type GetFolderByFolderIdFolderTypeEnum = typeof GetFolderByFolderIdFolderTypeEnum[keyof typeof GetFolderByFolderIdFolderTypeEnum];
