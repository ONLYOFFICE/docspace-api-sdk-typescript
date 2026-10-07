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
import type { AccessRequestKeyDto } from '../../models';
// @ts-ignore
import type { BaseBatchRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ChangeHistoryRequest } from '../../models';
// @ts-ignore
import type { CheckFillFormDraftRequest } from '../../models';
// @ts-ignore
import type { ChunkedUploadSessionResultWrapper } from '../../models';
// @ts-ignore
import type { ConfigurationWrapper } from '../../models';
// @ts-ignore
import type { CopyAsRequest } from '../../models';
// @ts-ignore
import type { CreateFileRequest } from '../../models';
// @ts-ignore
import type { CreateTextOrHtmlFileRequest } from '../../models';
// @ts-ignore
import type { CustomFilterRequest } from '../../models';
// @ts-ignore
import type { DeleteFileRequest } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { EditHistoryArrayWrapper } from '../../models';
// @ts-ignore
import type { EditHistoryDataWrapper } from '../../models';
// @ts-ignore
import type { EditorType } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { FileArrayWrapper } from '../../models';
// @ts-ignore
import type { FileEncryptionInfoWrapper } from '../../models';
// @ts-ignore
import type { FileEntryArrayWrapper } from '../../models';
// @ts-ignore
import type { FileEntryBaseWrapper } from '../../models';
// @ts-ignore
import type { FileLinkRequest } from '../../models';
// @ts-ignore
import type { FileLinkWrapper } from '../../models';
// @ts-ignore
import type { FileOperationArrayWrapper } from '../../models';
// @ts-ignore
import type { FileReferenceWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareWrapper } from '../../models';
// @ts-ignore
import type { FileWrapper } from '../../models';
// @ts-ignore
import type { FillingFormResultWrapper } from '../../models';
// @ts-ignore
import type { FormRoleArrayWrapper } from '../../models';
// @ts-ignore
import type { FormSubmissionsWrapper } from '../../models';
// @ts-ignore
import type { GetReferenceDataDto } from '../../models';
// @ts-ignore
import type { HistoryArrayWrapper } from '../../models';
// @ts-ignore
import type { ItemKeyValuePairBooleanStringWrapper } from '../../models';
// @ts-ignore
import type { LockFileRequest } from '../../models';
// @ts-ignore
import type { ManageFormFillingDto } from '../../models';
// @ts-ignore
import type { MentionArrayWrapper } from '../../models';
// @ts-ignore
import type { ObjectArrayWrapper } from '../../models';
// @ts-ignore
import type { OrderRequestDto } from '../../models';
// @ts-ignore
import type { OrdersRequestDto } from '../../models';
// @ts-ignore
import type { SaveAsPdfRequest } from '../../models';
// @ts-ignore
import type { SaveFormRoleMappingDto } from '../../models';
// @ts-ignore
import type { StartEditRequest } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TemplatesRequestDto } from '../../models';
// @ts-ignore
import type { ThirdPartyChunkedUploadSessionResultWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyConfigurationWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyFileArrayWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyFileWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartySaveAsPdfRequest } from '../../models';
// @ts-ignore
import type { UpdateFileRequest } from '../../models';
// @ts-ignore
import type { XlsxReportResponseWrapper } from '../../models';
/**
 * FilesApi - axios parameter creator
 * @export
 */
export const FilesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Stamps the file as just used by the calling account and puts it at the top of that account\'s Recent section,  then answers with the file as it stands now. The list is personal: no other member sees the change, and the  file itself is untouched. Read access is enough, so a room member with view-only rights and an invited guest  may call it, and a visitor who reaches the file through an external link is recorded against that link. A  caller without read access is refused with 403, and an identifier that resolves to nothing answers 404.  Repeating the call is safe: the file keeps a single entry and only moves back to the top. The section holds  the 1000 newest entries of an account and drops the oldest beyond that on its own; folders never enter it, and  an encrypted file of a private room is answered normally but never recorded. Read the section back with  `GET api/2.0/files/recent` and drop entries with `DELETE api/2.0/files/recent`; whether it is offered among  the sections of `GET api/2.0/files/@root` is decided by `PUT api/2.0/files/displayrecent`.
         * @summary Add a file to Recent
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addFileToRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/
         */
        addFileToRecent: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('addFileToRecent', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/recent`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds the listed files to the personal template list of the calling account, the set the portal offers when a  new document is started from an existing one. The list belongs to the account and no other member sees it.  Every authenticated member type may manage their own list, a guest is refused, and read access to each file is  required. Only formats the portal treats as template documents survive: the accepted extensions arrive in  `extsWebTemplate` of `GET api/2.0/files/settings`, and a file of any other format is dropped silently. Only  numeric ids are accepted, so a file on a connected third-party account cannot become a template. The answer is  `true` whenever the request was understood, which an empty list, an id that does not exist and an unreadable  file all achieve, so it confirms nothing about what was added; no operation of this document reads the list  back. Repeating the call is safe. Use `DELETE api/2.0/files/templates` to drop a file again.
         * @summary Add template files
         * @param {TemplatesRequestDto} [templatesRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-templates/
         */
        addTemplates: async (templatesRequestDto?: TemplatesRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/templates`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(templatesRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Closes or reopens a revision group in the version history of a file and answers with every stored version of  that file, newest first. With `continueVersion=false` the named version is completed: its content is stored  again as a fresh version that opens a new revision group, so the editing that follows no longer extends the  previous one. With `continueVersion=true` the last revision group is folded back into the group before it, so  the next save continues that revision instead of becoming a version of its own; a file that has only one group  is left as it is. A `version` of 0 means the current version. The caller needs the right to edit the history  of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator  rights have; plain editing access is refused with 403, as are a guest and a member without access to the room.  The call is mutating and not idempotent. A file that is locked, lies in Trash, is open in an editing session  or is kept in a connected third-party storage is refused.
         * @summary Change version history
         * @param {number | string} fileId The file whose version history is changed.
         * @param {ChangeHistoryRequest} changeHistoryRequest The change to make to the revision group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         */
        changeVersionHistory: async (fileId: number | string, changeHistoryRequest: ChangeHistoryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('changeVersionHistory', 'fileId', fileId)
            // verify required parameter 'changeHistoryRequest' is not null or undefined
            assertParamExists('changeVersionHistory', 'changeHistoryRequest', changeHistoryRequest)

            const localVarPath = `/api/2.0/files/file/{fileId}/history`
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
            localVarRequestOptions.data = serializeDataIfNeeded(changeHistoryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resolves the editor address the caller must open to fill out the given PDF form, and provisions the personal  draft that filling needs. The form has to live in a form-filling room and filling has to be started for it  with `PUT api/2.0/files/file/{fileId}/manageformfilling`; a caller who may edit the form, a form whose filling  has not started, and a request naming `view` or `embedded` as the action are all sent straight to the form  itself. Read access to the form is enough to get an address, fill-forms access is what puts the caller into  the filling flow, and a holder of an external link may call it without signing in, while a caller with neither  a session nor a link key is rejected. In the filling case the call is not read-only: it copies the form into  the room\'s in-progress folder under the caller\'s name, clears the new-item badge, closes the editing session  of the original, and answers with the address of that copy. A repeated call reuses that copy, and a call  naming an existing draft adds a discard notice when that draft is no longer valid. The answer is one URL  string that may carry a `#message/...` fragment the editor renders as a notice. For the full editor  configuration use `GET api/2.0/files/file/{fileId}/openedit`. A form the caller cannot open is refused with  403, and one that does not exist is answered as missing.
         * @summary Open a form draft for filling
         * @param {number | string} fileId The identifier of the PDF form to open, as it is returned by a room listing such as  `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well.
         * @param {CheckFillFormDraftRequest} checkFillFormDraftRequest The revision of the form to open and what the caller intends to do with it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         */
        checkFillFormDraft: async (fileId: number | string, checkFillFormDraftRequest: CheckFillFormDraftRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('checkFillFormDraft', 'fileId', fileId)
            // verify required parameter 'checkFillFormDraftRequest' is not null or undefined
            assertParamExists('checkFillFormDraft', 'checkFillFormDraftRequest', checkFillFormDraftRequest)

            const localVarPath = `/api/2.0/files/masterform/{fileId}/checkfillformdraft`
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkFillFormDraftRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Copies one file into another folder under a new title, converting its content when the new title names a  different format, and answers with the copy that was created. The extension of `destTitle` decides what  happens: the same extension as the source copies the bytes as they are, a different one has the document  service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source  file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a  string for a folder in a connected third-party storage; anything else is answered with an empty body and  nothing is copied. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a  format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another  copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.
         * @summary Copy a file
         * @param {number | string} fileId The file to copy.
         * @param {CopyAsRequest} copyAsRequest The title, the destination and the conversion options of the copy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         */
        copyFileAs: async (fileId: number | string, copyAsRequest: CopyAsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('copyFileAs', 'fileId', fileId)
            // verify required parameter 'copyAsRequest' is not null or undefined
            assertParamExists('copyFileAs', 'copyAsRequest', copyAsRequest)

            const localVarPath = `/api/2.0/files/file/{fileId}/copyas`
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
            localVarRequestOptions.data = serializeDataIfNeeded(copyAsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Opens a chunked session that replaces the content of an existing file, which is how WebDAV clients save over a  document. The answer carries the session id the later calls quote, the address of the standalone chunk  handler, the expiry and the reserved size, and nothing is written until the parts reach  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the session is closed with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`, where `folderId` is the folder the file lives in.  Unlike an upload into a folder, the finished content does not become a new version: it overwrites the current  one, and the file loses its encrypted flag and its stored conversion result in the process. The caller must be  allowed to edit the file, as the owner, a room manager and a member invited with editing rights are; a reader  and a guest get 403. A file that does not exist is answered as missing, and a payload above the portal limit  for chunked uploads is refused before the session is created.
         * @summary Create the editing session
         * @param {number | string} fileId The file whose content the session will replace; take the id from a folder listing or from the file itself.
         * @param {number} [fileSize] The number of bytes the new content will take. It is checked against the portal limit for chunked uploads  before the session opens, and a session left at 0 takes the whole content in a single part.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         */
        createEditSession: async (fileId: number | string, fileSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('createEditSession', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/edit_session`
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

            if (fileSize !== undefined) {
                localVarQueryParameter['fileSize'] = fileSize;
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
         * Creates a file in the folder named in the route and answers with the stored file. The extension in the title  decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the  portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension  and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title  verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId`  copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a  number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The caller needs the right  to create files in the folder, and the room roots, Archive and the template sections are refused even to an  admin. The call is mutating and not idempotent. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/file`.
         * @summary Create a file
         * @param {number | string} folderId The folder the file is created in.
         * @param {CreateFileRequest} createFileRequest The title of the new file and the source of its content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         */
        createFile: async (folderId: number | string, createFileRequest: CreateFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createFile', 'folderId', folderId)
            // verify required parameter 'createFileRequest' is not null or undefined
            assertParamExists('createFile', 'createFileRequest', createFileRequest)

            const localVarPath = `/api/2.0/files/{folderId}/file`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a file in the caller\'s own My documents section and answers with the stored file. The extension in  the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to  the portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown  extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the  title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order:  `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read  - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The call is mutating and  not idempotent: each call adds another file. A guest has no My documents section of their own, so a guest  cannot use this operation at all, and a template the caller cannot read is refused. To create a file in a  room or any other folder use  `POST api/2.0/files/{folderId}/file`.
         * @summary Create a file in My documents
         * @param {CreateFileRequest} [createFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         */
        createFileInMyDocuments: async (createFileRequest?: CreateFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/@my/file`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Answers with the primary external link of a file, creating it on the first call and returning the one that  already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does  not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/file/{id}/links`.  The parameters therefore only shape the link at the moment it is born - `access` its rights, `expirationDate`  its lifetime, which for a file in a personal section is unlimited here rather than the default of a few days,  `internal` whether only signed-in members may follow it, `denyDownload` whether the content may only be  viewed, and `password` a secret to be asked for. A PDF form gets the rights it needs for filling out whatever  was asked for, and a form in a form-filling room is answered with the link of the room instead. The caller  needs the right to share the file and is otherwise refused with 403; a link that was deliberately revoked is  not recreated but answered with 404. Read the address from `sharedTo.shareLink`.
         * @summary Create the file primary external link
         * @param {number | string} id The file the link points at.
         * @param {FileLinkRequest} fileLinkRequest The settings of the link. They are applied in full, so a field left out is reset rather than kept.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link/
         */
        createFilePrimaryExternalLink: async (id: number | string, fileLinkRequest: FileLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createFilePrimaryExternalLink', 'id', id)
            // verify required parameter 'fileLinkRequest' is not null or undefined
            assertParamExists('createFilePrimaryExternalLink', 'fileLinkRequest', fileLinkRequest)

            const localVarPath = `/api/2.0/files/file/{id}/link`
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
            localVarRequestOptions.data = serializeDataIfNeeded(fileLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates an HTML file in the folder named in the route out of the markup passed as the content, and answers  with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a  request carrying no content is rejected as an invalid request. `createNewIfExist` acts the other way round  than its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The caller needs the right to create files in the folder and is otherwise  refused with 403. The call is mutating. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/html`.
         * @summary Create an HTML file
         * @param {number | string} folderId The folder the file is created in.
         * @param {CreateTextOrHtmlFileRequest} createTextOrHtmlFileRequest The title, the content and the collision behaviour of the new file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         */
        createHtmlFile: async (folderId: number | string, createTextOrHtmlFileRequest: CreateTextOrHtmlFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createHtmlFile', 'folderId', folderId)
            // verify required parameter 'createTextOrHtmlFileRequest' is not null or undefined
            assertParamExists('createHtmlFile', 'createTextOrHtmlFileRequest', createTextOrHtmlFileRequest)

            const localVarPath = `/api/2.0/files/{folderId}/html`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates an HTML file in the caller\'s own My documents section out of the markup passed as the content, and  answers with the stored file. The `.html` extension is added to the title unless the title already ends with  it, and a request carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than  its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The call is mutating: repeating it with `true` keeps a single file and grows  its history, repeating it with `false` fills the section with numbered copies. A guest has no My documents  section and is refused. To create the file in a room or another folder use  `POST api/2.0/files/{folderId}/html`.
         * @summary Create an HTML file in My documents
         * @param {CreateTextOrHtmlFileRequest} [createTextOrHtmlFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         */
        createHtmlFileInMyDocuments: async (createTextOrHtmlFileRequest?: CreateTextOrHtmlFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/@my/html`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a text file in the folder named in the route out of the text passed as the content, and answers with  the stored file. The extension follows the content rather than the request: `.txt` normally, but `.html` as  soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends up as an  HTML file; the extension is added to the title unless the title already ends with it. A request carrying no  content is rejected as an invalid request. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in Notes  (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a new file  appears beside it instead. The caller needs the right to create files in the folder. The call is mutating. To  create the file in the caller\'s own section use `POST api/2.0/files/@my/text`.
         * @summary Create a text file
         * @param {number | string} folderId The folder the file is created in.
         * @param {CreateTextOrHtmlFileRequest} createTextOrHtmlFileRequest The title, the content and the collision behaviour of the new file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         */
        createTextFile: async (folderId: number | string, createTextOrHtmlFileRequest: CreateTextOrHtmlFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createTextFile', 'folderId', folderId)
            // verify required parameter 'createTextOrHtmlFileRequest' is not null or undefined
            assertParamExists('createTextFile', 'createTextOrHtmlFileRequest', createTextOrHtmlFileRequest)

            const localVarPath = `/api/2.0/files/{folderId}/text`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a text file in the caller\'s own My documents section out of the text passed as the content, and  answers with the stored file. The extension follows the content rather than the request: `.txt` normally, but  `.html` as soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends  up as an HTML file; the extension is added to the title unless the title already ends with it. A request  carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in  Notes (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a  new file appears beside it instead. The call is mutating. A guest has no My documents section and is  refused. To create the file in a room or another folder use `POST api/2.0/files/{folderId}/text`.
         * @summary Create a text file in My documents
         * @param {CreateTextOrHtmlFileRequest} [createTextOrHtmlFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         */
        createTextFileInMyDocuments: async (createTextOrHtmlFileRequest?: CreateTextOrHtmlFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/@my/text`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Asks the portal to build preview thumbnails for the listed files, and answers at once with the same file ids  that were sent. That answer echoes the request and does not confirm that anything was queued: the work is  handed over to a background worker, and a failure on the way there is written to the log rather than reported  to the caller. Only the file ids of the body are read - the folder ids are ignored, and a request naming no  files at all is answered with an empty list. Ids of files kept in a connected third-party storage are dropped  as well, because the worker handles portal storage only. Access to the individual files is not checked here;  the caller has to be signed in or to reach the portal through an external share link, and an anonymous caller  without such a link is refused. The call is asynchronous and safe to repeat. The thumbnails themselves are not  in the answer: read `thumbnailStatus` and `thumbnailUrl` of the file, for instance with  `GET api/2.0/files/file/{fileId}`, until the status reports the thumbnail as created.
         * @summary Queue file thumbnails
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-thumbnails/
         */
        createThumbnails: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thumbnails`;
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
         * Queues the deletion of one file and answers with the caller\'s file operations, the one just created among  them. The file is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation  reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the file is moved  to Trash, from where it can be restored; `immediately=true` deletes it for good instead, and inside a room,  where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing  session on the file has ended, so a file somebody is working on is not pulled away.  `returnSingleOperation=true` narrows the answer to this deletion instead of listing every active operation of  the caller. The caller needs the right to delete the file, which the room admin, a DocSpace admin acting as  room manager and a content creator acting on their own file have; editing access alone, read access, a guest  and a member without access to the room are all refused. The call is destructive. To delete several items at  once use `PUT api/2.0/files/fileops/delete`.
         * @summary Delete a file
         * @param {number | string} fileId The file to delete.
         * @param {DeleteFileRequest} deleteFileRequest When and how the file is deleted.
         * @param {boolean} [returnSingleOperation] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         */
        deleteFile: async (fileId: number | string, deleteFileRequest: DeleteFileRequest, returnSingleOperation?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('deleteFile', 'fileId', fileId)
            // verify required parameter 'deleteFileRequest' is not null or undefined
            assertParamExists('deleteFile', 'deleteFileRequest', deleteFileRequest)

            const localVarPath = `/api/2.0/files/file/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
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

            if (returnSingleOperation !== undefined) {
                localVarQueryParameter['returnSingleOperation'] = returnSingleOperation;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the listed entries from the Recent section of the calling account, the history of opened files that  `GET api/2.0/files/recent` returns. Nothing is deleted from storage and no other member\'s history is touched;  access to the entries is not checked at all, so a file the caller can no longer read can still be cleared from  their own history. Only numeric file ids are honoured, so a file on a connected third-party account cannot be  cleared this way, and folder ids are accepted but change nothing because the section lists files only. The  answer carries no body and reports nothing about how many entries were found: an empty request and an id that  was never in the section are accepted alike. Repeating the call is safe, but an entry returns the next time  the file is opened or `POST api/2.0/files/file/{fileId}/recent` is called for it. To hide the whole section  instead, call `PUT api/2.0/files/displayrecent`.
         * @summary Delete recent files
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/
         */
        deleteRecent: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/recent`;
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
         * Takes the listed files off the personal template list of the calling account, leaving the files themselves  untouched: only the template mark is dropped. The body of this request is a bare JSON array of numeric file  ids rather than an object with a field, and a request that carries no array at all is rejected as an invalid  request. Every authenticated member type may manage their own list, a guest is refused, and read access to a  file is required for its mark to be dropped. The answer is `true` whenever the array was understood, which an  empty array, an id that does not exist and a file that was never a template all achieve, so it confirms  nothing about what was removed. Repeating the call is safe. Use `POST api/2.0/files/templates` to put a file  back on the list; that operation expects an object with a `fileIds` field, so the two bodies are not  interchangeable.
         * @summary Delete template files
         * @param {Array<number>} [deleteTemplateFilesRequestDto] The files to take off the template list, by id; this array is the whole request body. Only a file stored in  the portal itself can be a template, which is why an id here is always numeric.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/
         */
        deleteTemplates: async (deleteTemplateFilesRequestDto?: Array<number>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/templates`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteTemplateFilesRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues generation of the spreadsheet that collects every answer submitted for a PDF form in a form-filling  room, and answers at once with the queued task, the original form and a flag telling whether the report file  is being created now or an existing one refreshed in place. Either identifier works: the id of the original  form, or the id of an XLSX or CSV result file inside the room\'s Complete folder, from which the portal  resolves the form behind it. The form must already have been opened for filling with  `PUT api/2.0/files/file/{fileId}/startfilling` and must still live in the form-filling room that started it.  The caller must be allowed to update that form\'s report. The call is mutating and asynchronous: the  spreadsheet is not ready when the response arrives, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the  original form\'s id until the task reports completion, then take the produced file from the task. Calling it  again while a run is still going answers with that run instead of starting a second one.
         * @summary Generate a form answers report
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for generateXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx/
         */
        generateXlsx: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('generateXlsx', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/xlsx`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the roles of a PDF form together with the state each of them is in, which is how a client shows who is  expected to fill the form next. Every entry carries the name of the role, the account holding it, the sequence  number that decides the turn and a status: the roles of earlier turns are reported as complete, those of later  turns as waiting, and the role whose turn it is as either yours to fill or already in progress, depending on  whether that person has opened the form; when the filling has been stopped, the role it was interrupted at is  reported as stopped instead. A form whose filling was never started answers with an empty list. The file has  to be a PDF form, or the completed copy of one, and anything else is refused. Read access to the form is  enough, so every member of the room sees the roles, while a caller without access to the room and a guest  outside it are refused with 403 and an unknown file is answered with 404. The operation is read-only. The  assignment itself is written by `POST api/2.0/files/file/{fileId}/formrolemapping`.
         * @summary Get form roles
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllFormRoles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/
         */
        getAllFormRoles: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getAllFormRoles', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/formroles`
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
         * Answers with everything an editor needs in order to show what changed in one version of a file: the address of  the version itself, its document key and format, the address of the recorded changes, the same trio for the  version it is compared against, and a token that signs the whole answer for the document service. `version`  picks the version, and 0, the default, means the current one. `changesUrl` and `previous` are filled in only  when the portal has stored the changes of that version, which is the case for versions written by an editing  session; for a version uploaded as a whole they stay empty and only the file itself can be shown. The  addresses are meant for the document service and carry their own time-limited keys. The caller needs the right  to read the history of the file, which editing access and above grant: read-only access, commenting access, a  guest and an anonymous caller are all refused, as is a file kept in a connected third-party storage. The  operation is read-only. For the list of versions themselves use  `GET api/2.0/files/file/{fileId}/edit/history`.
         * @summary Get changes URL
         * @param {number | string} fileId The file whose changes are read.
         * @param {number} [version] The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the  current version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditDiffUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/
         */
        getEditDiffUrl: async (fileId: number | string, version?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getEditDiffUrl', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/edit/diff`
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

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
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
         * Returns the editing revisions of a file, oldest first, as the document service understands them: each entry  carries the version and the revision group it belongs to, the account that saved it, when it was saved, the  comment left on it, the document key of that revision and, where the portal stored them, the changes it  introduced. Only the revisions a person saved are listed - the autosaves an editing session writes in between  are left out, which is what separates this list from the plain version list of  `GET api/2.0/files/file/{fileId}/history`. The caller needs the right to read the history of the file, which  editing access and above grant: commenting access, read-only access, a guest, a member without access to the  room and an anonymous caller are all refused, and so is a file kept in a connected third-party storage, which  keeps no history in the portal. The operation is read-only. Take one entry to  `GET api/2.0/files/file/{fileId}/edit/diff` to show its changes, or to  `POST api/2.0/files/file/{fileId}/restoreversion` to bring it back.
         * @summary Get version history
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/
         */
        getEditHistory: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getEditHistory', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/edit/history`
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
         * Returns what the caller needs in order to decrypt one file of an end-to-end encrypted private room: `userKeys`  holds the key pairs of the calling account, the private half of each of them encrypted with that person\'s own  password, and `fileKeys` holds the file keys that were issued to this account for this file, each naming the  public key it was encrypted for. Only the keys of the calling account are ever returned, never those of the  other people in the room. An account that holds no key pair yet, and a file no key was issued for, answer with  empty lists rather than with an error, so an empty `fileKeys` means the caller cannot open that file rather  than that the file is unencrypted. The caller needs read access to the file; a caller without it, and a file  that does not exist, are both refused with 403. The operation is read-only. Keys are issued by  `PUT api/2.0/files/{fileId}/access`, and the personal key pairs are managed under `api/2.0/privacyroom/keys`.
         * @summary Get file encryption information
         * @param {number | string} fileId The file whose encryption keys are read. Only a file in an end-to-end encrypted              private room has any.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEncryptionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-info/
         */
        getEncryptionInfo: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getEncryptionInfo', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/{fileId}/access`
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
         * Returns the activity log of a single file - who renamed, moved, shared, converted, locked or edited it, and  when - as the portal recorded it in its audit trail. Entries arrive newest first, and the events that belong  to one action are folded into a single entry whose `related` list carries the rest of them. `fromDate` and  `toDate` are read in the portal\'s time zone and narrow the range; `startIndex` and `count` page through the  result, and the number of matching entries is reported in the response headers rather than in the body. The  caller needs read access to the file, so a member of the room it lies in, the admin of that room and a  DocSpace admin all see the same log, while a caller without access to the room is refused with 403 and an  unknown id is answered with 404. The operation is read-only. Only files stored in the portal itself have a log  here - a file kept in a connected third-party storage has none. For the log of a folder or a room use  `GET api/2.0/files/folder/{folderId}/log`.
         * @summary Get file history
         * @param {number} fileId The file whose activity log is read; only files stored in the portal itself have one.
         * @param {string} [fromDate] The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps.
         * @param {string} [toDate] The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry.
         * @param {number} [count] How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body.
         * @param {number} [startIndex] How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/
         */
        getFileHistory: async (fileId: number, fromDate?: string, toDate?: string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFileHistory', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/log`
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
         * Returns one file as the portal stores it, together with the state it has for the caller: the title, the folder  it lies in, the size, the current version and revision group, the addresses for viewing and editing it, the  actions the caller is allowed to perform on it, the sharing rights it was reached through, and the thumbnail  state. `version` picks an older version instead of the current one; the default of -1 means the current  version. When the file belongs to another person\'s own section and the caller cannot read the folder holding  it, the answer reports the Shared with me section as its folder, so that a client can show it in a place the  caller can actually open. The caller needs read access to the file, which any member of the room it lies in  has; a caller without access to the room is refused and an anonymous caller without an external share link is  rejected. The operation is read-only. For every version at once use `GET api/2.0/files/file/{fileId}/history`.
         * @summary Get file information
         * @param {number | string} fileId The file to read.
         * @param {number} [version] The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the  current version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/
         */
        getFileInfo: async (fileId: number | string, version?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFileInfo', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}`
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

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
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
         * Lists the external links of a file, each with its identifier, title, address, rights, expiration date and  download restriction. `startIndex` and `count` page through the list, and the total number of links is  reported in the response headers rather than in the body. A file that has never been shared by link answers  with an empty list; the primary link is part of this list once it exists, and it is the only one that is  created on demand, by `GET api/2.0/files/file/{id}/link`. For a PDF form kept in a form-filling room the link  of the room is appended to the answer, because that is the address through which the form is filled out. The  caller needs the right to share the file, which its creator, the room admin and a DocSpace admin acting as  room manager have; a caller without access to the file is refused and an anonymous caller is rejected. The  operation is read-only. Take an identifier from here to `PUT api/2.0/files/file/{id}/links` to change or  remove that link.
         * @summary Get file external links
         * @param {number | string} id The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/
         */
        getFileLinks: async (id: number | string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFileLinks', 'id', id)

            const localVarPath = `/api/2.0/files/file/{id}/links`
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
         * Answers with the primary external link of a file - the one the Copy link action of a client hands out - with  its address in `sharedTo.shareLink`, its rights in `access`, and its expiration date, password flag and  download restriction beside them. The link is created on the first read if the file has none, with read  rights, no password and no expiry, so this operation mutates on that first call and is a plain read  afterwards; repeated calls answer with the same link identifier. A PDF form in a form-filling room is answered  with the link of that room, carried over to the form. The caller needs the right to share the file, which its  creator, the room admin and a DocSpace admin acting as room manager have; a caller without access to the file  is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is  answered with 404 rather than being recreated. The custom links of the same file, the primary one excepted,  are listed by `GET api/2.0/files/file/{id}/links`.
         * @summary Get the file primary external link
         * @param {number | string} id The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/
         */
        getFilePrimaryExternalLink: async (id: number | string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFilePrimaryExternalLink', 'id', id)

            const localVarPath = `/api/2.0/files/file/{id}/link`
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
         * Returns every stored version of a file, newest first, each of them shaped like the file itself - the version  and the revision group it belongs to, the size, the comment saved with it, the addresses for viewing it, and  the thumbnail and lock state. Unlike the editing revisions of `GET api/2.0/files/file/{fileId}/edit/history`,  this list also holds the autosave revisions an editing session writes, so it is the fuller of the two, and it  is the shape a client already knows how to render. The caller needs the right to read the history of the file,  which is a stricter rule than reading the file: in a room only its managers and content creators may read the  history, and in a personal section editing access is enough, so a member with read access to somebody else\'s  file, and even a DocSpace admin in that position, are refused, as is an anonymous caller. The operation is  read-only. To restore one of the versions use `POST api/2.0/files/file/{fileId}/restoreversion`, and to close  or reopen a revision group `PUT api/2.0/files/file/{fileId}/history`.
         * @summary Get file versions
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         */
        getFileVersionInfo: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFileVersionInfo', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/history`
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
         * Answers with the outcome of one completed form-filling session: the filled copy of the form, the original form  it was made from, the number this submission was given inside the room, the identifier of the room and the  account that started the filling. `isRoomMember` says whether the caller is a member of that room, which a  client uses to decide whether the room can be offered for opening. The session is named by `fillingSessionId`,  the value the document service reports when the filling ends; the portal remembers it only for a while after  that, so a session that was never completed, one already forgotten and a value of the wrong shape are all  answered as not found, while omitting the parameter is rejected as an invalid request. The operation is  read-only and needs no sign-in: it is meant for the caller that has just finished filling the form through an  external link, and the session identifier is the only secret involved. The filled copy itself is an ordinary  file - read it with `GET api/2.0/files/file/{fileId}`.
         * @summary Get form-filling result
         * @param {string} [fillingSessionId] The identifier of the finished filling session, the value the document service reports when the filling ends.  The portal remembers it only for a while afterwards, so an older session is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFillResult operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/
         */
        getFillResult: async (fillingSessionId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/file/fillresult`;
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

            if (fillingSessionId !== undefined) {
                localVarQueryParameter['fillingSessionId'] = fillingSessionId;
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
         * Returns everything that has been submitted against one PDF form: `metadata` describes the fields of the form,  in the order they are laid out, and `submissions` carries one record per completed copy, each of them holding  the values that were entered. It is the data behind the results table a client shows for a form, and the same  data the spreadsheet report of `POST api/2.0/files/file/{fileId}/xlsx` is built from. Only the submissions of  the version that is currently being filled are reported. The form has to be a PDF form whose filling has been  started and which is still the original form of its room; a form that was never started, a copy of a form and  a form whose room has been moved away are all refused. Read access to the form is enough, so every member of  the room can read the results, while a caller without access to it is refused with 403. The operation is  read-only. The list of roles and whose turn it is comes from `GET api/2.0/files/file/{fileId}/formroles`  instead.
         * @summary Get form submission results
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFormSubmissions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-form-submissions/
         */
        getFormSubmissions: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFormSubmissions', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/submissions`
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
         * Returns a direct download address for the current content of the file together with the signature token that  the document service validates, which is what the portal hands over when the editors have to fetch the  document themselves. The address points at the portal\'s file stream endpoint and is rewritten to the host the  document service can reach, so on a deployment where the editors sit behind a private address it is not the  address a browser should follow. The answer also carries the extension of the stored document, leading dot  included. The caller needs read access to the file, and an unknown file id is reported as missing. The call  only reads, and each call mints a fresh address and token rather than reusing the previous one, so the value  is worth requesting again once a token has expired. For a link meant for a person, a plain address with no  token to put behind a download button, use `GET api/2.0/files/file/{fileId}/presigneduri` instead.
         * @summary Get a signed download address
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedFileUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/
         */
        getPresignedFileUri: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getPresignedFileUri', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/presigned`
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
         * Builds a download address for the current version of a file and answers with it as a plain string. The address  points at the portal\'s own file handler and carries the file identifier, the version it was built for and a  time-limited authentication key, so it can be handed to a downloader that cannot sign in to the portal itself;  it stops working once that key has expired, and it keeps naming the version that was current when it was built  rather than following later edits. The caller needs read access to the file: a member of the room it lies in  gets an address, a caller without access to the room is refused, an unknown identifier is answered as not  found and an anonymous caller is rejected. The operation is read-only and safe to repeat, though every call  mints a new key. Nothing is downloaded here - follow the address to fetch the bytes. For the variant the  document service signs, which comes back as an object with the file type and a token, use  `GET api/2.0/files/file/{fileId}/presigned`.
         * @summary Get file download link
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/
         */
        getPresignedUri: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getPresignedUri', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/presigneduri`
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
         * Lists the users the file is shared with, which is what a client offers when the author protects a document and  picks who may still edit it. The list is built from the whole access list of the file: every entry that is not  an explicit denial, with groups expanded into their members, the caller themselves and deleted accounts left  out, ordered by display name. Access inherited from the room counts, so a member who never received a share on  the file itself is listed too. A file kept in the legacy project storage always answers with an empty list  rather than with its team. The call only reads. A guest is refused, an anonymous caller is answered with  nothing, and a file id that resolves to nothing is refused as well instead of being reported as missing. For  the readers to offer as mentions inside the editor use `GET api/2.0/files/file/{fileId}/sharedusers`.
         * @summary Get users for document protection
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         */
        getProtectedFileUsers: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getProtectedFileUsers', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/protectusers`
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
         * Resolves a reference that a formula in one spreadsheet makes to another document, and answers with the  descriptor the document service needs in order to read it: the title, the download address, the file type, the  document key of the co-editing session, the web editor link and the signature token. Three ways of naming the  target are tried in order, and the first that resolves wins: `fileKey` as a file id inside the portal named by  `instanceId`, then `path` looked up among the files sitting next to `sourceFileId`, then `link`, short links  included, from which the file id is read out. A link that points outside this portal is not resolved at all  and comes back unchanged as the address to follow. The caller needs read access to the source file and to its  folder, otherwise the call is refused. The call only reads. A reference that resolves to nothing is still  answered with 200, with the error text filled in and the rest of the descriptor empty, so read the error  before using any other field.
         * @summary Resolve a spreadsheet reference
         * @param {GetReferenceDataDto} [getReferenceDataDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReferenceData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/
         */
        getReferenceData: async (getReferenceDataDto?: GetReferenceDataDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/file/referencedata`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(getReferenceDataDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports how far the spreadsheet of submitted form answers has got, the one queued by  `POST api/2.0/files/file/{fileId}/xlsx`. A run is kept per portal, per caller and per form, so this reports  the caller\'s own run and not one started by another member of the room; address it with the id of the original  form rather than with the id of the produced spreadsheet. The answer carries the completion flag, the progress  percentage, the error text when the run failed, and the id, name and address of the produced file once it is  there. Nothing at all comes back when no run is on record for this caller and form, which is the normal answer  before the first run and not an error. The call only reads and is meant to be polled until completion is  reported. Any authenticated caller may ask; whether the report may be built is decided when the run is queued,  not here.
         * @summary Get form report generation status
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-xlsx/
         */
        getXlsx: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getXlsx', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/xlsx`
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
         * Tells whether a file is a PDF form that can be filled out in the portal, and answers with a single boolean.  The check is by content, not by extension: the beginning of the file is read and the answer is `true` only  when it carries the marker the editors write into the forms they produce, so an ordinary PDF, and a PDF form  made in other software, both answer `false`. A file whose name is not a PDF at all answers `false` without  being read. Use it before offering the form-filling operations on a file, because a document that answers  `false` cannot be started for filling. The caller needs read access to the file, and read access is enough - a  member of the room with read-only rights gets the answer; a caller without access to the room is refused and  an anonymous caller is rejected. The operation is read-only and idempotent. It says nothing about the state of  the filling - for that read `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Check the PDF file
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for isFormPDF operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/
         */
        isFormPDF: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('isFormPDF', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/isformpdf`
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
         * Locks a file so that nobody else can change it, or releases that lock, and answers with the file as it now  stands. With `lockFile=true` the lock is put on the file and everybody else who is editing it at that moment  is dropped out of the session, the caller excepted; the lock then blocks editing, renaming and deleting for  everybody but the account that set it and the room admins. With `lockFile=false` the lock is removed and a  note about the unlocking is appended to the current version comment, unless the file lives in a connected  third-party storage. Locking a file that is already locked, or unlocking one that is not, changes nothing and  still answers with the file, so the call is idempotent in effect while remaining a mutating one. The caller  needs the right to lock the file, which the room admin, a DocSpace admin acting as room manager and a member  with content-creator rights have; a member without access to the room and a guest are refused, and so is a  file in Trash. A lock set by somebody else can only be released by a room manager.
         * @summary Lock a file
         * @param {number | string} fileId The file to lock or unlock.
         * @param {LockFileRequest} lockFileRequest The lock state to reach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         */
        lockFile: async (fileId: number | string, lockFileRequest: LockFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('lockFile', 'fileId', fileId)
            // verify required parameter 'lockFileRequest' is not null or undefined
            assertParamExists('lockFile', 'lockFileRequest', lockFileRequest)

            const localVarPath = `/api/2.0/files/file/{fileId}/lock`
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
            localVarRequestOptions.data = serializeDataIfNeeded(lockFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Drives the filling of a PDF form through its states, the action deciding which way. Action 2 starts the  filling: in a form-filling room the form is opened for filling, the members whose rights are limited to  filling forms are let in, and a form that has been changed since it was last started has the drafts of its  previous round dropped. Action 0 stops it, which in a virtual data room records who interrupted it and at  which role and notifies the people who held the other roles, and in a form-filling room closes the form for  filling. Action 1 resumes a filling that was stopped, clearing that record. Action 3 puts the form back into  editing, closing it for filling and remembering the version it was edited from. The file has to be a PDF form  lying in a room. Starting needs the right to start the filling, which the room admin and a member with  content-creator rights have, while stopping a filling that somebody else started belongs to room managers  alone, so a content creator is refused with 403 there. The call is mutating; the state that resulted is read  with `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Perform form filling action
         * @param {string} fileId The form the action applies to. Send the same value as the `formId` of the request body, which is the one the handler reads.
         * @param {ManageFormFillingDto} [manageFormFillingDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for manageFormFilling operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/
         */
        manageFormFilling: async (fileId: string, manageFormFillingDto?: ManageFormFillingDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('manageFormFilling', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/manageformfilling`
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
            localVarRequestOptions.data = serializeDataIfNeeded(manageFormFillingDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Builds everything an editor client needs to open the file: the document descriptor with its download address,  title, type and document key, the editor configuration with the mode, the caller\'s permissions, the user and  the customization, the callback the editors report back to, and the signature token the document service  validates. `version` opens one entry of the file history and requires access to that history; left out, the  current revision is opened. `view`, `edit` and `fill` say what the client intends to do, and `editorType`  picks the desktop, mobile or embedded layout. For a PDF form the room decides the outcome and may overrule the  request: a form-filling room, a virtual data room, a public room and a user folder each produce their own  mode, and a form opened from the templates folder is read-only and, outside the mobile layout, framed as  embedded. When the portal is over its storage quota the configuration comes back read-only with the exceeded  scope named. In a private room the caller\'s encryption keys are added to the editor configuration. Payment is  not required and an anonymous caller opens through an external link.
         * @summary Get the editor configuration
         * @param {number | string} fileId The file the editor configuration is built for. Take the id from a folder listing such as  `GET api/2.0/files/{folderId}`.
         * @param {number} [version] Which entry of the file history to open, numbered the way the file versions are. Left out, the current  revision is opened; naming a version requires access to the history of the file.
         * @param {boolean} [view] Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller\'s  rights and the room the file lies in allow.
         * @param {EditorType} [editorType] Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the  embedded viewer meant to be framed inside another page.
         * @param {boolean} [edit] Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is  being edited; the room may still turn the request into viewing or into filling.
         * @param {boolean} [fill] Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a  form.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for openEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/
         */
        openEditFile: async (fileId: number | string, version?: number, view?: boolean, editorType?: EditorType, edit?: boolean, fill?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('openEditFile', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/openedit`
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

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (view !== undefined) {
                localVarQueryParameter['view'] = view;
            }

            if (editorType !== undefined) {
                localVarQueryParameter['editorType'] = editorType;
            }

            if (edit !== undefined) {
                localVarQueryParameter['edit'] = edit;
            }

            if (fill !== undefined) {
                localVarQueryParameter['fill'] = fill;
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
         * Brings an earlier version of a file back and answers with the editing revisions of the file after the restore.  Nothing is overwritten: the content of the chosen version is stored again as a new version on top of the  history, carrying a comment that says which version it was reverted to, so the intervening versions stay  readable. `url` changes the source - with it the content is fetched from that address, which is how the  document service returns a document with a set of changes rolled back, and the new version records that  instead. Any links that pointed at drafts of the file are dropped, and the file is marked as new for the other  people who can read it. `version` has to name an existing version and is refused with 400 when it is missing  or already the current one. The caller needs the right to edit the history of the file and is otherwise  refused with 403, an anonymous caller included. The call is mutating and not idempotent. A locked file, one in  Trash, one being edited, an encrypted one and one kept in a connected third-party storage are all refused.
         * @summary Restore a file version
         * @param {number | string} fileId The file whose version is restored.
         * @param {number} [version] The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an  existing version that is not the current one.
         * @param {string} [url] The address the content of the new version is fetched from instead of the stored version, which is how the  document service hands back a document with a set of changes rolled back; left out, the stored version is  used.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreFileVersion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/
         */
        restoreFileVersion: async (fileId: number | string, version?: number, url?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('restoreFileVersion', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/restoreversion`
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

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (url !== undefined) {
                localVarQueryParameter['url'] = url;
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
         * Replaces the content of an existing file with an edited copy and answers with the file as it now stands. The  content is the `File` part of a `multipart/form-data` body, and when no such part is sent the raw request body  is saved instead, so an empty body empties the file. The `DownloadUri` query parameter does not supply content  here; it is only read for the extension when `FileExtension` is empty. `fileExtension` names the format of the  content being sent, and when it differs from the stored format the portal converts the content, or keeps it  under a renamed copy when a third-party storage cannot convert it. The caller needs edit access to the file.  The call is mutating and not idempotent: an ordinary call adds a version to the file history, while  `forcesave=true` records an editor autosave, which overwrites the previous autosave revision instead of adding  another version and leaves a running editing session in place. It is refused with 403 when the file is locked,  lies in Trash, or is open in an editing session started by somebody else, and an unknown file id is reported  as missing. For content too large to post in one request use `POST api/2.0/files/file/{fileId}/edit_session`.
         * @summary Save edited file content
         * @param {number | string} fileId The file whose content is replaced. The submitted content is written onto this file, so it has to be the file  the editing session was opened on rather than a copy of it.
         * @param {string} [downloadUri] An address the document service saved the document at. This operation does not fetch the content from it - the  content always comes from the request body - and reads it only for the extension, when no file extension is  given.
         * @param {string} [fileExtension] The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format  the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off  the download address, and failing that the stored format is assumed.
         * @param {File} [file] The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw  request body is saved as the content instead, so an empty body empties the file.
         * @param {boolean} [forcesave] Records the write as an editor autosave: the file keeps its running editing session and the previous autosave  revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else  has the file open, and adds a version to the history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         */
        saveEditingFileFromForm: async (fileId: number | string, downloadUri?: string, fileExtension?: string, file?: File, forcesave?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('saveEditingFileFromForm', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/saveediting`
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

            if (downloadUri !== undefined) {
                localVarQueryParameter['downloadUri'] = downloadUri;
            }


            if (fileExtension !== undefined) { 
                localVarFormParams.append('fileExtension', fileExtension as any);
            }
    
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
            if (forcesave !== undefined) { 
                localVarFormParams.append('forcesave', String(forcesave) as any);
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
         * Converts a file into a PDF, stores that PDF as a new file in the folder named in the body, and answers with  the file that was created. The source is left untouched, so the two files then live side by side. `title`  names the result without an extension - the `.pdf` extension is added to it - and an empty title reuses the  name of the source with its extension replaced. The conversion is done by the document service while the  request waits, so the call takes as long as the document needs and answers with the finished file rather than  with a queue entry. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused; a source file or a destination folder that does not exist is  answered with 404. The call is mutating and not idempotent: each call adds another PDF, its title made unique  when one of that name is already there. The result is marked as new for the room, and for a form the portal  recognises it is stored as a PDF form. To convert in place instead use  `PUT api/2.0/files/file/{fileId}/checkconversion`.
         * @summary Save a file as PDF
         * @param {number | string} id The file to convert; it is left untouched.
         * @param {SaveAsPdfRequest | ThirdPartySaveAsPdfRequest} saveAsPdfRequest The destination folder and the name of the PDF.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         */
        saveFileAsPdf: async (id: number | string, saveAsPdfRequest: SaveAsPdfRequest | ThirdPartySaveAsPdfRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('saveFileAsPdf', 'id', id)
            // verify required parameter 'saveAsPdfRequest' is not null or undefined
            assertParamExists('saveFileAsPdf', 'saveAsPdfRequest', saveAsPdfRequest)

            const localVarPath = `/api/2.0/files/file/{id}/saveaspdf`
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
            localVarRequestOptions.data = serializeDataIfNeeded(saveAsPdfRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Assigns the roles of a PDF form to the people who are to fill them in, and starts the filling: the form is  marked as being filled out, the account that called is recorded as the one who started it, everybody named in  a role is notified, and the form becomes visible to the members whose room rights are limited to filling  forms. Each role carries its name, the account that takes it and the sequence number that decides the turn, so  the same sequence means the roles may be filled in parallel and different ones make a queue. Sending an empty  role list resets the filling instead, dropping the assignment altogether. The whole set is replaced on every  call, so the call is idempotent for a given set of roles but not additive. The file has to be a PDF form lying  in a room; the caller needs the right to start the filling of that form, which the room admin and a member  with content-creator rights have, and is otherwise refused with 403. Read back what was stored with  `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Save form role mapping
         * @param {string} fileId The form the role mapping belongs to. Send the same value as the `formId` of the request body, which is the one the handler reads.
         * @param {SaveFormRoleMappingDto} [saveFormRoleMappingDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFormRoleMapping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/
         */
        saveFormRoleMapping: async (fileId: string, saveFormRoleMappingDto?: SaveFormRoleMappingDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('saveFormRoleMapping', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/formrolemapping`
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
            localVarRequestOptions.data = serializeDataIfNeeded(saveFormRoleMappingDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Turns the Custom Filter editing mode of a spreadsheet on or off and answers with the file as it now stands. In  that mode the sorting and filtering one person applies to the sheet is visible to that person alone, so that  several people can work on the same data without moving the rows under each other; with the mode off,  filtering is shared again, as everywhere else. Turning it on also drops everybody else out of the running  editing session, the caller excepted, because the mode has to be established before the sheet is opened. Only  formats that support the mode are accepted; anything else is rejected as an invalid request. The caller needs  the right to use the mode in the room, which the room admin and a DocSpace admin acting as room manager have;  read-only access, a member without access to the room and an anonymous caller are refused. Once the mode has  been switched on by one person, only that person, a room manager or a DocSpace admin can switch it off again.  The call is mutating and, called twice with the same value, changes nothing the second time.
         * @summary Set the Custom Filter editing mode
         * @param {number | string} fileId The spreadsheet whose Custom Filter mode is switched.
         * @param {CustomFilterRequest} customFilterRequest The Custom Filter state to reach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         */
        setCustomFilterTag: async (fileId: number | string, customFilterRequest: CustomFilterRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setCustomFilterTag', 'fileId', fileId)
            // verify required parameter 'customFilterRequest' is not null or undefined
            assertParamExists('setCustomFilterTag', 'customFilterRequest', customFilterRequest)

            const localVarPath = `/api/2.0/files/file/{fileId}/customfilter`
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
            localVarRequestOptions.data = serializeDataIfNeeded(customFilterRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Issues the file keys that let the named people open one file of an end-to-end encrypted private room. Each  entry of the body names the account the key is for, the public key it was encrypted with and the encrypted key  itself, so the plain key never reaches the portal: the client encrypts it once per recipient with the public  key that `GET api/2.0/files/file/{fileId}/publickeys` reports for them. The keys of the accounts named in the  request are replaced, and the keys of everybody else are left as they are, which makes the call idempotent for  a given set of recipients while remaining a mutating one; sending no entry for a person does not revoke that  person\'s key. The file has to lie in a private room, and every account named in the request has to have read  access to it. The caller needs read access to the file and the right to create content in that room, which its  members with editing rights and its admins have; a caller without those rights, a file outside a private room  and a file that does not exist are all refused with 403. Read the result back with  `GET api/2.0/files/{fileId}/access`.
         * @summary Set file encryption information
         * @param {number | string} fileId The file the keys are issued for; it has to lie in a private room.
         * @param {Array<AccessRequestKeyDto>} [accessRequestKeyDto] One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of  everybody else are left as they are, so sending no entry for a person does not revoke that person\'s key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setEncryptionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-encryption-info/
         */
        setEncryptionInfo: async (fileId: number | string, accessRequestKeyDto?: Array<AccessRequestKeyDto>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setEncryptionInfo', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/{fileId}/access`
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
            localVarRequestOptions.data = serializeDataIfNeeded(accessRequestKeyDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates an external link to a file, or changes or revokes an existing one, and answers with the link as it now  stands. `linkId` decides which: an identifier that is not yet in use, the empty one included, creates a link,  while the identifier of an existing link rewrites it, so the whole set of parameters is applied every time and  a field left out is reset rather than kept. `access` carries the rights the link grants, and `access` set to  the value that denies everything revokes the link instead - the answer is then empty, and a revoked primary  link is not recreated by a later read. `title` names the link for the people who manage it, `expirationDate`  limits its lifetime and is refused when it lies more than a few years ahead, `password` asks visitors for a  secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members alone, and  `primary=true` makes it the primary link of the file. The caller needs the right to share the file and is  otherwise refused, an unknown file being answered as not found. The call is mutating.
         * @summary Set a file external link
         * @param {number | string} id The file the link points at.
         * @param {FileLinkRequest} fileLinkRequest The settings of the link. They are applied in full, so a field left out is reset rather than kept.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link/
         */
        setFileExternalLink: async (id: number | string, fileLinkRequest: FileLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setFileExternalLink', 'id', id)
            // verify required parameter 'fileLinkRequest' is not null or undefined
            assertParamExists('setFileExternalLink', 'fileLinkRequest', fileLinkRequest)

            const localVarPath = `/api/2.0/files/file/{id}/links`
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
            localVarRequestOptions.data = serializeDataIfNeeded(fileLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Puts a file at a given position inside its folder and answers with the file, its `order` reporting where it  now stands. Positions count from 1, and the file that held the wanted position, together with everything after  it, is shifted to make room, so the numbering of a folder stays without gaps; a position beyond the end of the  folder places the file last. The value may also be sent as a dotted path, as in 1.2.3, in which case only  its last segment is read. Ordering is what the manual sorting of a room is built on, and it only means  something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs  edit access to the file, which room managers, content creators and members with editing rights have; a member  acting on somebody else\'s file, a guest and an anonymous caller are refused with 403, and an unknown file is  answered with 404. The call is mutating and idempotent. To move several items in one go use  `PUT api/2.0/files/order`.
         * @summary Set file order
         * @param {number | string} fileId The file to move.
         * @param {OrderRequestDto} [orderRequestDto] The position the file is to take.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/
         */
        setFileOrder: async (fileId: number | string, orderRequestDto?: OrderRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setFileOrder', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/{fileId}/order`
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
            localVarRequestOptions.data = serializeDataIfNeeded(orderRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Puts several files and folders at given positions in one go and answers with the entries that were moved, each  with the position it now holds. Every item of `items` names an entry by its identifier and its kind - a file  or a folder - and the position it is to take, counting from 1; a position may also be sent as a dotted path,  as in 1.2.3, of which only the last segment is read. The items are applied one after another in the order  they are sent, and each of them shifts its neighbours, so the result depends on that order; the whole request  is not one transaction, and a failure in the middle leaves the items before it moved. Every item has to lie in  a room the caller may administer, which the room admin and a DocSpace admin acting as room manager do:  read-only access, a guest and an anonymous caller are refused, and an identifier that matches nothing is  answered as not found. Ordering only means something in rooms whose contents are indexed. The call is  mutating. For a single file use `PUT api/2.0/files/{fileId}/order`.
         * @summary Set order of files
         * @param {OrdersRequestDto} [ordersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         */
        setFilesOrder: async (ordersRequestDto?: OrdersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/order`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ordersRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Opens an editing session on the file and answers with the document key that identifies it, the value an editor  client passes to the document service in order to join the co-editing session for that exact revision. The  file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved.  With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of  the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking  the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403  when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an  anonymous caller whose external link does not grant editing are all refused. The call is mutating and not  idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling  that operation with `isFinish=true`.
         * @summary Open an editing session
         * @param {number | string} fileId The file to open the editing session on. The caller needs edit access to it.
         * @param {StartEditRequest} startEditRequest The session options. The body is required even when it only carries the default, so send an empty object to  open an ordinary co-editing session.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         */
        startEditFile: async (fileId: number | string, startEditRequest: StartEditRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('startEditFile', 'fileId', fileId)
            // verify required parameter 'startEditRequest' is not null or undefined
            assertParamExists('startEditFile', 'startEditRequest', startEditRequest)

            const localVarPath = `/api/2.0/files/file/{fileId}/startedit`
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
            localVarRequestOptions.data = serializeDataIfNeeded(startEditRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Marks a PDF form in a form-filling room as open for filling out and answers with the form file. The portal  stores the filling properties on it - the room it belongs to, its title, the account that started it and the  id it keeps as the original form - so that later submissions are collected against this form. The file has to  be a PDF whose parent folder is a form-filling room; anything else is answered unchanged and nothing is  stored. Access follows room membership rather than portal role: a member holding only form-filling access on  the room may not start filling, and a caller with no access to the room at all is refused with 403 unless they  can manage it, which the room owner, a room administrator and a DocSpace administrator can. The call is  mutating and safe to repeat, since a repeat rewrites the same properties. Once a form is started, the answers  submitted for it can be collected into a spreadsheet with `POST api/2.0/files/file/{fileId}/xlsx`.
         * @summary Start filling a form
         * @param {number | string} fileId The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy  kept elsewhere and not a submitted result.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFillingFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/
         */
        startFillingFile: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('startFillingFile', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/startfilling`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets or clears the favorite mark of one file for the calling account: `true` adds the file to the favorites,  `false` takes it out again. The call changes stored state even though it is a GET, so it is not one to issue  speculatively; repeating it with the same value changes nothing further. The mark is personal, no other member  sees it, and the file stays where it is stored. Read access is enough, so a room member with view-only rights  and a guest may call it. The answer only echoes the value that was asked for: an identifier that resolves to  nothing and a file the caller cannot read are skipped without a word, an encrypted file of a private room is  never marked, and the requested value still comes back, so read the outcome from  `GET api/2.0/files/@favorites` instead. A file moved to the Trash keeps its mark and is left out of that  listing until it is restored. To mark several entries at once, or to mark folders, use  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`.
         * @summary Set the file favorite status
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {boolean} [favorite] Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes  it from them. Leaving the field out of the request removes the mark rather than setting it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for toggleFileFavorite operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite/
         */
        toggleFileFavorite: async (fileId: number | string, favorite?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('toggleFileFavorite', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/favorites/{fileId}`
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

            if (favorite !== undefined) {
                localVarQueryParameter['favorite'] = favorite;
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
         * Keeps an editing session on the file alive, or ends it; an editor client calls it repeatedly while a document  is open. `docKeyForTrack` has to be the document key of the file as it currently stands, the value  `POST api/2.0/files/file/{fileId}/startedit` returned, and a key matching neither the current revision nor the  one being edited is refused with 403. `tabId` names the client tab that holds the session, so several tabs and  several users are tracked on one file independently. Refreshing an entry requires one of the editing rights on  the file - editing, reviewing, commenting, filling or filter editing - so a reader is refused. With  `isFinish=false` the entry is refreshed and the file stays marked as being edited; with `isFinish=true` the  entry for that tab is dropped and the other clients are told that editing has stopped. The call changes the  tracking state and never the document, and repeating it is safe. It answers `key` true with an empty `value`  whenever it succeeds, so a failure arrives as an error rather than as a false key. An anonymous caller is  accepted only through an external share link.
         * @summary Track an editing session
         * @param {number | string} fileId The file whose editing session is being tracked.
         * @param {string} [tabId] The client tab that holds the session, a value the client makes up once and repeats on every call about that  tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value  belongs to a session claimed for a single editor.
         * @param {string} [docKeyForTrack] The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It  is checked against the file\'s current key on every call, so a key left over from an older revision is refused.
         * @param {boolean} [isFinish] Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is  refreshed and the file stays marked as being edited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for trackEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/
         */
        trackEditFile: async (fileId: number | string, tabId?: string, docKeyForTrack?: string, isFinish?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('trackEditFile', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/trackeditfile`
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

            if (tabId !== undefined) {
                localVarQueryParameter['tabId'] = tabId;
            }

            if (docKeyForTrack !== undefined) {
                localVarQueryParameter['docKeyForTrack'] = docKeyForTrack;
            }

            if (isFinish !== undefined) {
                localVarQueryParameter['isFinish'] = isFinish;
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
         * Renames a file, restores one of its versions, or both at once, and answers with the file as it now stands. A  non-empty `title` renames the file, keeping the stored extension whatever the new title says, so a rename  cannot change the format; an empty or missing title leaves the name alone. A `lastVersion` above 0 restores  that version the way `POST api/2.0/files/file/{fileId}/restoreversion` does, storing its content again on top  of the history, while 0 or less leaves the versions untouched and answers with the file as it is - which makes  this operation a read of the file when both fields are left out. The caller needs edit access, and renaming  somebody else\'s file additionally needs room-manager rights: a member or room admin with plain editing access,  read-only access, a guest and a DocSpace admin who is not a member of the room are all refused with 403, while  a content creator may rename a file of their own. The call is mutating. Renaming marks the file as new for  everybody else who can read it.
         * @summary Update a file
         * @param {number | string} fileId The file to update.
         * @param {UpdateFileRequest} updateFileRequest The new title and the version to restore.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         */
        updateFile: async (fileId: number | string, updateFileRequest: UpdateFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateFile', 'fileId', fileId)
            // verify required parameter 'updateFileRequest' is not null or undefined
            assertParamExists('updateFile', 'updateFileRequest', updateFileRequest)

            const localVarPath = `/api/2.0/files/file/{fileId}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesApi - functional programming interface
 * @export
 */
export const FilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Stamps the file as just used by the calling account and puts it at the top of that account\'s Recent section,  then answers with the file as it stands now. The list is personal: no other member sees the change, and the  file itself is untouched. Read access is enough, so a room member with view-only rights and an invited guest  may call it, and a visitor who reaches the file through an external link is recorded against that link. A  caller without read access is refused with 403, and an identifier that resolves to nothing answers 404.  Repeating the call is safe: the file keeps a single entry and only moves back to the top. The section holds  the 1000 newest entries of an account and drops the oldest beyond that on its own; folders never enter it, and  an encrypted file of a private room is answered normally but never recorded. Read the section back with  `GET api/2.0/files/recent` and drop entries with `DELETE api/2.0/files/recent`; whether it is offered among  the sections of `GET api/2.0/files/@root` is decided by `PUT api/2.0/files/displayrecent`.
         * @summary Add a file to Recent
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addFileToRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/
         */
        async addFileToRecent(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFileToRecent(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.addFileToRecent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds the listed files to the personal template list of the calling account, the set the portal offers when a  new document is started from an existing one. The list belongs to the account and no other member sees it.  Every authenticated member type may manage their own list, a guest is refused, and read access to each file is  required. Only formats the portal treats as template documents survive: the accepted extensions arrive in  `extsWebTemplate` of `GET api/2.0/files/settings`, and a file of any other format is dropped silently. Only  numeric ids are accepted, so a file on a connected third-party account cannot become a template. The answer is  `true` whenever the request was understood, which an empty list, an id that does not exist and an unreadable  file all achieve, so it confirms nothing about what was added; no operation of this document reads the list  back. Repeating the call is safe. Use `DELETE api/2.0/files/templates` to drop a file again.
         * @summary Add template files
         * @param {TemplatesRequestDto} [templatesRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-templates/
         */
        async addTemplates(templatesRequestDto?: TemplatesRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addTemplates(templatesRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.addTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Closes or reopens a revision group in the version history of a file and answers with every stored version of  that file, newest first. With `continueVersion=false` the named version is completed: its content is stored  again as a fresh version that opens a new revision group, so the editing that follows no longer extends the  previous one. With `continueVersion=true` the last revision group is folded back into the group before it, so  the next save continues that revision instead of becoming a version of its own; a file that has only one group  is left as it is. A `version` of 0 means the current version. The caller needs the right to edit the history  of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator  rights have; plain editing access is refused with 403, as are a guest and a member without access to the room.  The call is mutating and not idempotent. A file that is locked, lies in Trash, is open in an editing session  or is kept in a connected third-party storage is refused.
         * @summary Change version history
         * @param {number | string} fileId The file whose version history is changed.
         * @param {ChangeHistoryRequest} changeHistoryRequest The change to make to the revision group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         */
        async changeVersionHistory(fileId: number | string, changeHistoryRequest: ChangeHistoryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeVersionHistory(fileId, changeHistoryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.changeVersionHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resolves the editor address the caller must open to fill out the given PDF form, and provisions the personal  draft that filling needs. The form has to live in a form-filling room and filling has to be started for it  with `PUT api/2.0/files/file/{fileId}/manageformfilling`; a caller who may edit the form, a form whose filling  has not started, and a request naming `view` or `embedded` as the action are all sent straight to the form  itself. Read access to the form is enough to get an address, fill-forms access is what puts the caller into  the filling flow, and a holder of an external link may call it without signing in, while a caller with neither  a session nor a link key is rejected. In the filling case the call is not read-only: it copies the form into  the room\'s in-progress folder under the caller\'s name, clears the new-item badge, closes the editing session  of the original, and answers with the address of that copy. A repeated call reuses that copy, and a call  naming an existing draft adds a discard notice when that draft is no longer valid. The answer is one URL  string that may carry a `#message/...` fragment the editor renders as a notice. For the full editor  configuration use `GET api/2.0/files/file/{fileId}/openedit`. A form the caller cannot open is refused with  403, and one that does not exist is answered as missing.
         * @summary Open a form draft for filling
         * @param {number | string} fileId The identifier of the PDF form to open, as it is returned by a room listing such as  `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well.
         * @param {CheckFillFormDraftRequest} checkFillFormDraftRequest The revision of the form to open and what the caller intends to do with it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         */
        async checkFillFormDraft(fileId: number | string, checkFillFormDraftRequest: CheckFillFormDraftRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkFillFormDraft(fileId, checkFillFormDraftRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.checkFillFormDraft']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Copies one file into another folder under a new title, converting its content when the new title names a  different format, and answers with the copy that was created. The extension of `destTitle` decides what  happens: the same extension as the source copies the bytes as they are, a different one has the document  service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source  file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a  string for a folder in a connected third-party storage; anything else is answered with an empty body and  nothing is copied. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a  format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another  copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.
         * @summary Copy a file
         * @param {number | string} fileId The file to copy.
         * @param {CopyAsRequest} copyAsRequest The title, the destination and the conversion options of the copy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         */
        async copyFileAs(fileId: number | string, copyAsRequest: CopyAsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copyFileAs(fileId, copyAsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.copyFileAs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Opens a chunked session that replaces the content of an existing file, which is how WebDAV clients save over a  document. The answer carries the session id the later calls quote, the address of the standalone chunk  handler, the expiry and the reserved size, and nothing is written until the parts reach  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the session is closed with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`, where `folderId` is the folder the file lives in.  Unlike an upload into a folder, the finished content does not become a new version: it overwrites the current  one, and the file loses its encrypted flag and its stored conversion result in the process. The caller must be  allowed to edit the file, as the owner, a room manager and a member invited with editing rights are; a reader  and a guest get 403. A file that does not exist is answered as missing, and a payload above the portal limit  for chunked uploads is refused before the session is created.
         * @summary Create the editing session
         * @param {number | string} fileId The file whose content the session will replace; take the id from a folder listing or from the file itself.
         * @param {number} [fileSize] The number of bytes the new content will take. It is checked against the portal limit for chunked uploads  before the session opens, and a session left at 0 takes the whole content in a single part.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         */
        async createEditSession(fileId: number | string, fileSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionResultWrapper | ThirdPartyChunkedUploadSessionResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEditSession(fileId, fileSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createEditSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a file in the folder named in the route and answers with the stored file. The extension in the title  decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the  portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension  and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title  verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId`  copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a  number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The caller needs the right  to create files in the folder, and the room roots, Archive and the template sections are refused even to an  admin. The call is mutating and not idempotent. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/file`.
         * @summary Create a file
         * @param {number | string} folderId The folder the file is created in.
         * @param {CreateFileRequest} createFileRequest The title of the new file and the source of its content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         */
        async createFile(folderId: number | string, createFileRequest: CreateFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFile(folderId, createFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a file in the caller\'s own My documents section and answers with the stored file. The extension in  the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to  the portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown  extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the  title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order:  `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read  - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The call is mutating and  not idempotent: each call adds another file. A guest has no My documents section of their own, so a guest  cannot use this operation at all, and a template the caller cannot read is refused. To create a file in a  room or any other folder use  `POST api/2.0/files/{folderId}/file`.
         * @summary Create a file in My documents
         * @param {CreateFileRequest} [createFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         */
        async createFileInMyDocuments(createFileRequest?: CreateFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFileInMyDocuments(createFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers with the primary external link of a file, creating it on the first call and returning the one that  already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does  not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/file/{id}/links`.  The parameters therefore only shape the link at the moment it is born - `access` its rights, `expirationDate`  its lifetime, which for a file in a personal section is unlimited here rather than the default of a few days,  `internal` whether only signed-in members may follow it, `denyDownload` whether the content may only be  viewed, and `password` a secret to be asked for. A PDF form gets the rights it needs for filling out whatever  was asked for, and a form in a form-filling room is answered with the link of the room instead. The caller  needs the right to share the file and is otherwise refused with 403; a link that was deliberately revoked is  not recreated but answered with 404. Read the address from `sharedTo.shareLink`.
         * @summary Create the file primary external link
         * @param {number | string} id The file the link points at.
         * @param {FileLinkRequest} fileLinkRequest The settings of the link. They are applied in full, so a field left out is reset rather than kept.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link/
         */
        async createFilePrimaryExternalLink(id: number | string, fileLinkRequest: FileLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFilePrimaryExternalLink(id, fileLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createFilePrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an HTML file in the folder named in the route out of the markup passed as the content, and answers  with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a  request carrying no content is rejected as an invalid request. `createNewIfExist` acts the other way round  than its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The caller needs the right to create files in the folder and is otherwise  refused with 403. The call is mutating. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/html`.
         * @summary Create an HTML file
         * @param {number | string} folderId The folder the file is created in.
         * @param {CreateTextOrHtmlFileRequest} createTextOrHtmlFileRequest The title, the content and the collision behaviour of the new file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         */
        async createHtmlFile(folderId: number | string, createTextOrHtmlFileRequest: CreateTextOrHtmlFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createHtmlFile(folderId, createTextOrHtmlFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createHtmlFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an HTML file in the caller\'s own My documents section out of the markup passed as the content, and  answers with the stored file. The `.html` extension is added to the title unless the title already ends with  it, and a request carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than  its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The call is mutating: repeating it with `true` keeps a single file and grows  its history, repeating it with `false` fills the section with numbered copies. A guest has no My documents  section and is refused. To create the file in a room or another folder use  `POST api/2.0/files/{folderId}/html`.
         * @summary Create an HTML file in My documents
         * @param {CreateTextOrHtmlFileRequest} [createTextOrHtmlFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         */
        async createHtmlFileInMyDocuments(createTextOrHtmlFileRequest?: CreateTextOrHtmlFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createHtmlFileInMyDocuments(createTextOrHtmlFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createHtmlFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a text file in the folder named in the route out of the text passed as the content, and answers with  the stored file. The extension follows the content rather than the request: `.txt` normally, but `.html` as  soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends up as an  HTML file; the extension is added to the title unless the title already ends with it. A request carrying no  content is rejected as an invalid request. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in Notes  (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a new file  appears beside it instead. The caller needs the right to create files in the folder. The call is mutating. To  create the file in the caller\'s own section use `POST api/2.0/files/@my/text`.
         * @summary Create a text file
         * @param {number | string} folderId The folder the file is created in.
         * @param {CreateTextOrHtmlFileRequest} createTextOrHtmlFileRequest The title, the content and the collision behaviour of the new file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         */
        async createTextFile(folderId: number | string, createTextOrHtmlFileRequest: CreateTextOrHtmlFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTextFile(folderId, createTextOrHtmlFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createTextFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a text file in the caller\'s own My documents section out of the text passed as the content, and  answers with the stored file. The extension follows the content rather than the request: `.txt` normally, but  `.html` as soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends  up as an HTML file; the extension is added to the title unless the title already ends with it. A request  carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in  Notes (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a  new file appears beside it instead. The call is mutating. A guest has no My documents section and is  refused. To create the file in a room or another folder use `POST api/2.0/files/{folderId}/text`.
         * @summary Create a text file in My documents
         * @param {CreateTextOrHtmlFileRequest} [createTextOrHtmlFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         */
        async createTextFileInMyDocuments(createTextOrHtmlFileRequest?: CreateTextOrHtmlFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTextFileInMyDocuments(createTextOrHtmlFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createTextFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Asks the portal to build preview thumbnails for the listed files, and answers at once with the same file ids  that were sent. That answer echoes the request and does not confirm that anything was queued: the work is  handed over to a background worker, and a failure on the way there is written to the log rather than reported  to the caller. Only the file ids of the body are read - the folder ids are ignored, and a request naming no  files at all is answered with an empty list. Ids of files kept in a connected third-party storage are dropped  as well, because the worker handles portal storage only. Access to the individual files is not checked here;  the caller has to be signed in or to reach the portal through an external share link, and an anonymous caller  without such a link is refused. The call is asynchronous and safe to repeat. The thumbnails themselves are not  in the answer: read `thumbnailStatus` and `thumbnailUrl` of the file, for instance with  `GET api/2.0/files/file/{fileId}`, until the status reports the thumbnail as created.
         * @summary Queue file thumbnails
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-thumbnails/
         */
        async createThumbnails(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createThumbnails(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createThumbnails']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues the deletion of one file and answers with the caller\'s file operations, the one just created among  them. The file is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation  reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the file is moved  to Trash, from where it can be restored; `immediately=true` deletes it for good instead, and inside a room,  where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing  session on the file has ended, so a file somebody is working on is not pulled away.  `returnSingleOperation=true` narrows the answer to this deletion instead of listing every active operation of  the caller. The caller needs the right to delete the file, which the room admin, a DocSpace admin acting as  room manager and a content creator acting on their own file have; editing access alone, read access, a guest  and a member without access to the room are all refused. The call is destructive. To delete several items at  once use `PUT api/2.0/files/fileops/delete`.
         * @summary Delete a file
         * @param {number | string} fileId The file to delete.
         * @param {DeleteFileRequest} deleteFileRequest When and how the file is deleted.
         * @param {boolean} [returnSingleOperation] Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         */
        async deleteFile(fileId: number | string, deleteFileRequest: DeleteFileRequest, returnSingleOperation?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFile(fileId, deleteFileRequest, returnSingleOperation, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.deleteFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the listed entries from the Recent section of the calling account, the history of opened files that  `GET api/2.0/files/recent` returns. Nothing is deleted from storage and no other member\'s history is touched;  access to the entries is not checked at all, so a file the caller can no longer read can still be cleared from  their own history. Only numeric file ids are honoured, so a file on a connected third-party account cannot be  cleared this way, and folder ids are accepted but change nothing because the section lists files only. The  answer carries no body and reports nothing about how many entries were found: an empty request and an id that  was never in the section are accepted alike. Repeating the call is safe, but an entry returns the next time  the file is opened or `POST api/2.0/files/file/{fileId}/recent` is called for it. To hide the whole section  instead, call `PUT api/2.0/files/displayrecent`.
         * @summary Delete recent files
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/
         */
        async deleteRecent(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRecent(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.deleteRecent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Takes the listed files off the personal template list of the calling account, leaving the files themselves  untouched: only the template mark is dropped. The body of this request is a bare JSON array of numeric file  ids rather than an object with a field, and a request that carries no array at all is rejected as an invalid  request. Every authenticated member type may manage their own list, a guest is refused, and read access to a  file is required for its mark to be dropped. The answer is `true` whenever the array was understood, which an  empty array, an id that does not exist and a file that was never a template all achieve, so it confirms  nothing about what was removed. Repeating the call is safe. Use `POST api/2.0/files/templates` to put a file  back on the list; that operation expects an object with a `fileIds` field, so the two bodies are not  interchangeable.
         * @summary Delete template files
         * @param {Array<number>} [deleteTemplateFilesRequestDto] The files to take off the template list, by id; this array is the whole request body. Only a file stored in  the portal itself can be a template, which is why an id here is always numeric.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/
         */
        async deleteTemplates(deleteTemplateFilesRequestDto?: Array<number>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTemplates(deleteTemplateFilesRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.deleteTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues generation of the spreadsheet that collects every answer submitted for a PDF form in a form-filling  room, and answers at once with the queued task, the original form and a flag telling whether the report file  is being created now or an existing one refreshed in place. Either identifier works: the id of the original  form, or the id of an XLSX or CSV result file inside the room\'s Complete folder, from which the portal  resolves the form behind it. The form must already have been opened for filling with  `PUT api/2.0/files/file/{fileId}/startfilling` and must still live in the form-filling room that started it.  The caller must be allowed to update that form\'s report. The call is mutating and asynchronous: the  spreadsheet is not ready when the response arrives, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the  original form\'s id until the task reports completion, then take the produced file from the task. Calling it  again while a run is still going answers with that run instead of starting a second one.
         * @summary Generate a form answers report
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for generateXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx/
         */
        async generateXlsx(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XlsxReportResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateXlsx(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.generateXlsx']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the roles of a PDF form together with the state each of them is in, which is how a client shows who is  expected to fill the form next. Every entry carries the name of the role, the account holding it, the sequence  number that decides the turn and a status: the roles of earlier turns are reported as complete, those of later  turns as waiting, and the role whose turn it is as either yours to fill or already in progress, depending on  whether that person has opened the form; when the filling has been stopped, the role it was interrupted at is  reported as stopped instead. A form whose filling was never started answers with an empty list. The file has  to be a PDF form, or the completed copy of one, and anything else is refused. Read access to the form is  enough, so every member of the room sees the roles, while a caller without access to the room and a guest  outside it are refused with 403 and an unknown file is answered with 404. The operation is read-only. The  assignment itself is written by `POST api/2.0/files/file/{fileId}/formrolemapping`.
         * @summary Get form roles
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllFormRoles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/
         */
        async getAllFormRoles(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormRoleArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllFormRoles(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getAllFormRoles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers with everything an editor needs in order to show what changed in one version of a file: the address of  the version itself, its document key and format, the address of the recorded changes, the same trio for the  version it is compared against, and a token that signs the whole answer for the document service. `version`  picks the version, and 0, the default, means the current one. `changesUrl` and `previous` are filled in only  when the portal has stored the changes of that version, which is the case for versions written by an editing  session; for a version uploaded as a whole they stay empty and only the file itself can be shown. The  addresses are meant for the document service and carry their own time-limited keys. The caller needs the right  to read the history of the file, which editing access and above grant: read-only access, commenting access, a  guest and an anonymous caller are all refused, as is a file kept in a connected third-party storage. The  operation is read-only. For the list of versions themselves use  `GET api/2.0/files/file/{fileId}/edit/history`.
         * @summary Get changes URL
         * @param {number | string} fileId The file whose changes are read.
         * @param {number} [version] The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the  current version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditDiffUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/
         */
        async getEditDiffUrl(fileId: number | string, version?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditHistoryDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEditDiffUrl(fileId, version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getEditDiffUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the editing revisions of a file, oldest first, as the document service understands them: each entry  carries the version and the revision group it belongs to, the account that saved it, when it was saved, the  comment left on it, the document key of that revision and, where the portal stored them, the changes it  introduced. Only the revisions a person saved are listed - the autosaves an editing session writes in between  are left out, which is what separates this list from the plain version list of  `GET api/2.0/files/file/{fileId}/history`. The caller needs the right to read the history of the file, which  editing access and above grant: commenting access, read-only access, a guest, a member without access to the  room and an anonymous caller are all refused, and so is a file kept in a connected third-party storage, which  keeps no history in the portal. The operation is read-only. Take one entry to  `GET api/2.0/files/file/{fileId}/edit/diff` to show its changes, or to  `POST api/2.0/files/file/{fileId}/restoreversion` to bring it back.
         * @summary Get version history
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/
         */
        async getEditHistory(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditHistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEditHistory(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getEditHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns what the caller needs in order to decrypt one file of an end-to-end encrypted private room: `userKeys`  holds the key pairs of the calling account, the private half of each of them encrypted with that person\'s own  password, and `fileKeys` holds the file keys that were issued to this account for this file, each naming the  public key it was encrypted for. Only the keys of the calling account are ever returned, never those of the  other people in the room. An account that holds no key pair yet, and a file no key was issued for, answer with  empty lists rather than with an error, so an empty `fileKeys` means the caller cannot open that file rather  than that the file is unencrypted. The caller needs read access to the file; a caller without it, and a file  that does not exist, are both refused with 403. The operation is read-only. Keys are issued by  `PUT api/2.0/files/{fileId}/access`, and the personal key pairs are managed under `api/2.0/privacyroom/keys`.
         * @summary Get file encryption information
         * @param {number | string} fileId The file whose encryption keys are read. Only a file in an end-to-end encrypted              private room has any.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEncryptionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-info/
         */
        async getEncryptionInfo(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEncryptionInfoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEncryptionInfo(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getEncryptionInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the activity log of a single file - who renamed, moved, shared, converted, locked or edited it, and  when - as the portal recorded it in its audit trail. Entries arrive newest first, and the events that belong  to one action are folded into a single entry whose `related` list carries the rest of them. `fromDate` and  `toDate` are read in the portal\'s time zone and narrow the range; `startIndex` and `count` page through the  result, and the number of matching entries is reported in the response headers rather than in the body. The  caller needs read access to the file, so a member of the room it lies in, the admin of that room and a  DocSpace admin all see the same log, while a caller without access to the room is refused with 403 and an  unknown id is answered with 404. The operation is read-only. Only files stored in the portal itself have a log  here - a file kept in a connected third-party storage has none. For the log of a folder or a room use  `GET api/2.0/files/folder/{folderId}/log`.
         * @summary Get file history
         * @param {number} fileId The file whose activity log is read; only files stored in the portal itself have one.
         * @param {string} [fromDate] The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps.
         * @param {string} [toDate] The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry.
         * @param {number} [count] How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body.
         * @param {number} [startIndex] How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/
         */
        async getFileHistory(fileId: number, fromDate?: string, toDate?: string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileHistory(fileId, fromDate, toDate, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one file as the portal stores it, together with the state it has for the caller: the title, the folder  it lies in, the size, the current version and revision group, the addresses for viewing and editing it, the  actions the caller is allowed to perform on it, the sharing rights it was reached through, and the thumbnail  state. `version` picks an older version instead of the current one; the default of -1 means the current  version. When the file belongs to another person\'s own section and the caller cannot read the folder holding  it, the answer reports the Shared with me section as its folder, so that a client can show it in a place the  caller can actually open. The caller needs read access to the file, which any member of the room it lies in  has; a caller without access to the room is refused and an anonymous caller without an external share link is  rejected. The operation is read-only. For every version at once use `GET api/2.0/files/file/{fileId}/history`.
         * @summary Get file information
         * @param {number | string} fileId The file to read.
         * @param {number} [version] The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the  current version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/
         */
        async getFileInfo(fileId: number | string, version?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileInfo(fileId, version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the external links of a file, each with its identifier, title, address, rights, expiration date and  download restriction. `startIndex` and `count` page through the list, and the total number of links is  reported in the response headers rather than in the body. A file that has never been shared by link answers  with an empty list; the primary link is part of this list once it exists, and it is the only one that is  created on demand, by `GET api/2.0/files/file/{id}/link`. For a PDF form kept in a form-filling room the link  of the room is appended to the answer, because that is the address through which the form is filled out. The  caller needs the right to share the file, which its creator, the room admin and a DocSpace admin acting as  room manager have; a caller without access to the file is refused and an anonymous caller is rejected. The  operation is read-only. Take an identifier from here to `PUT api/2.0/files/file/{id}/links` to change or  remove that link.
         * @summary Get file external links
         * @param {number | string} id The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/
         */
        async getFileLinks(id: number | string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileLinks(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers with the primary external link of a file - the one the Copy link action of a client hands out - with  its address in `sharedTo.shareLink`, its rights in `access`, and its expiration date, password flag and  download restriction beside them. The link is created on the first read if the file has none, with read  rights, no password and no expiry, so this operation mutates on that first call and is a plain read  afterwards; repeated calls answer with the same link identifier. A PDF form in a form-filling room is answered  with the link of that room, carried over to the form. The caller needs the right to share the file, which its  creator, the room admin and a DocSpace admin acting as room manager have; a caller without access to the file  is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is  answered with 404 rather than being recreated. The custom links of the same file, the primary one excepted,  are listed by `GET api/2.0/files/file/{id}/links`.
         * @summary Get the file primary external link
         * @param {number | string} id The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/
         */
        async getFilePrimaryExternalLink(id: number | string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilePrimaryExternalLink(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFilePrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns every stored version of a file, newest first, each of them shaped like the file itself - the version  and the revision group it belongs to, the size, the comment saved with it, the addresses for viewing it, and  the thumbnail and lock state. Unlike the editing revisions of `GET api/2.0/files/file/{fileId}/edit/history`,  this list also holds the autosave revisions an editing session writes, so it is the fuller of the two, and it  is the shape a client already knows how to render. The caller needs the right to read the history of the file,  which is a stricter rule than reading the file: in a room only its managers and content creators may read the  history, and in a personal section editing access is enough, so a member with read access to somebody else\'s  file, and even a DocSpace admin in that position, are refused, as is an anonymous caller. The operation is  read-only. To restore one of the versions use `POST api/2.0/files/file/{fileId}/restoreversion`, and to close  or reopen a revision group `PUT api/2.0/files/file/{fileId}/history`.
         * @summary Get file versions
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         */
        async getFileVersionInfo(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileVersionInfo(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileVersionInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers with the outcome of one completed form-filling session: the filled copy of the form, the original form  it was made from, the number this submission was given inside the room, the identifier of the room and the  account that started the filling. `isRoomMember` says whether the caller is a member of that room, which a  client uses to decide whether the room can be offered for opening. The session is named by `fillingSessionId`,  the value the document service reports when the filling ends; the portal remembers it only for a while after  that, so a session that was never completed, one already forgotten and a value of the wrong shape are all  answered as not found, while omitting the parameter is rejected as an invalid request. The operation is  read-only and needs no sign-in: it is meant for the caller that has just finished filling the form through an  external link, and the session identifier is the only secret involved. The filled copy itself is an ordinary  file - read it with `GET api/2.0/files/file/{fileId}`.
         * @summary Get form-filling result
         * @param {string} [fillingSessionId] The identifier of the finished filling session, the value the document service reports when the filling ends.  The portal remembers it only for a while afterwards, so an older session is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFillResult operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/
         */
        async getFillResult(fillingSessionId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FillingFormResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFillResult(fillingSessionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFillResult']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns everything that has been submitted against one PDF form: `metadata` describes the fields of the form,  in the order they are laid out, and `submissions` carries one record per completed copy, each of them holding  the values that were entered. It is the data behind the results table a client shows for a form, and the same  data the spreadsheet report of `POST api/2.0/files/file/{fileId}/xlsx` is built from. Only the submissions of  the version that is currently being filled are reported. The form has to be a PDF form whose filling has been  started and which is still the original form of its room; a form that was never started, a copy of a form and  a form whose room has been moved away are all refused. Read access to the form is enough, so every member of  the room can read the results, while a caller without access to it is refused with 403. The operation is  read-only. The list of roles and whose turn it is comes from `GET api/2.0/files/file/{fileId}/formroles`  instead.
         * @summary Get form submission results
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFormSubmissions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-form-submissions/
         */
        async getFormSubmissions(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormSubmissionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFormSubmissions(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFormSubmissions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a direct download address for the current content of the file together with the signature token that  the document service validates, which is what the portal hands over when the editors have to fetch the  document themselves. The address points at the portal\'s file stream endpoint and is rewritten to the host the  document service can reach, so on a deployment where the editors sit behind a private address it is not the  address a browser should follow. The answer also carries the extension of the stored document, leading dot  included. The caller needs read access to the file, and an unknown file id is reported as missing. The call  only reads, and each call mints a fresh address and token rather than reusing the previous one, so the value  is worth requesting again once a token has expired. For a link meant for a person, a plain address with no  token to put behind a download button, use `GET api/2.0/files/file/{fileId}/presigneduri` instead.
         * @summary Get a signed download address
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedFileUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/
         */
        async getPresignedFileUri(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPresignedFileUri(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getPresignedFileUri']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Builds a download address for the current version of a file and answers with it as a plain string. The address  points at the portal\'s own file handler and carries the file identifier, the version it was built for and a  time-limited authentication key, so it can be handed to a downloader that cannot sign in to the portal itself;  it stops working once that key has expired, and it keeps naming the version that was current when it was built  rather than following later edits. The caller needs read access to the file: a member of the room it lies in  gets an address, a caller without access to the room is refused, an unknown identifier is answered as not  found and an anonymous caller is rejected. The operation is read-only and safe to repeat, though every call  mints a new key. Nothing is downloaded here - follow the address to fetch the bytes. For the variant the  document service signs, which comes back as an object with the file type and a token, use  `GET api/2.0/files/file/{fileId}/presigned`.
         * @summary Get file download link
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/
         */
        async getPresignedUri(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPresignedUri(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getPresignedUri']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the users the file is shared with, which is what a client offers when the author protects a document and  picks who may still edit it. The list is built from the whole access list of the file: every entry that is not  an explicit denial, with groups expanded into their members, the caller themselves and deleted accounts left  out, ordered by display name. Access inherited from the room counts, so a member who never received a share on  the file itself is listed too. A file kept in the legacy project storage always answers with an empty list  rather than with its team. The call only reads. A guest is refused, an anonymous caller is answered with  nothing, and a file id that resolves to nothing is refused as well instead of being reported as missing. For  the readers to offer as mentions inside the editor use `GET api/2.0/files/file/{fileId}/sharedusers`.
         * @summary Get users for document protection
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         */
        async getProtectedFileUsers(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MentionArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProtectedFileUsers(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getProtectedFileUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resolves a reference that a formula in one spreadsheet makes to another document, and answers with the  descriptor the document service needs in order to read it: the title, the download address, the file type, the  document key of the co-editing session, the web editor link and the signature token. Three ways of naming the  target are tried in order, and the first that resolves wins: `fileKey` as a file id inside the portal named by  `instanceId`, then `path` looked up among the files sitting next to `sourceFileId`, then `link`, short links  included, from which the file id is read out. A link that points outside this portal is not resolved at all  and comes back unchanged as the address to follow. The caller needs read access to the source file and to its  folder, otherwise the call is refused. The call only reads. A reference that resolves to nothing is still  answered with 200, with the error text filled in and the rest of the descriptor empty, so read the error  before using any other field.
         * @summary Resolve a spreadsheet reference
         * @param {GetReferenceDataDto} [getReferenceDataDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReferenceData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/
         */
        async getReferenceData(getReferenceDataDto?: GetReferenceDataDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileReferenceWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReferenceData(getReferenceDataDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getReferenceData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports how far the spreadsheet of submitted form answers has got, the one queued by  `POST api/2.0/files/file/{fileId}/xlsx`. A run is kept per portal, per caller and per form, so this reports  the caller\'s own run and not one started by another member of the room; address it with the id of the original  form rather than with the id of the produced spreadsheet. The answer carries the completion flag, the progress  percentage, the error text when the run failed, and the id, name and address of the produced file once it is  there. Nothing at all comes back when no run is on record for this caller and form, which is the normal answer  before the first run and not an error. The call only reads and is meant to be polled until completion is  reported. Any authenticated caller may ask; whether the report may be built is decided when the run is queued,  not here.
         * @summary Get form report generation status
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-xlsx/
         */
        async getXlsx(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getXlsx(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getXlsx']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tells whether a file is a PDF form that can be filled out in the portal, and answers with a single boolean.  The check is by content, not by extension: the beginning of the file is read and the answer is `true` only  when it carries the marker the editors write into the forms they produce, so an ordinary PDF, and a PDF form  made in other software, both answer `false`. A file whose name is not a PDF at all answers `false` without  being read. Use it before offering the form-filling operations on a file, because a document that answers  `false` cannot be started for filling. The caller needs read access to the file, and read access is enough - a  member of the room with read-only rights gets the answer; a caller without access to the room is refused and  an anonymous caller is rejected. The operation is read-only and idempotent. It says nothing about the state of  the filling - for that read `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Check the PDF file
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for isFormPDF operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/
         */
        async isFormPDF(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.isFormPDF(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.isFormPDF']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Locks a file so that nobody else can change it, or releases that lock, and answers with the file as it now  stands. With `lockFile=true` the lock is put on the file and everybody else who is editing it at that moment  is dropped out of the session, the caller excepted; the lock then blocks editing, renaming and deleting for  everybody but the account that set it and the room admins. With `lockFile=false` the lock is removed and a  note about the unlocking is appended to the current version comment, unless the file lives in a connected  third-party storage. Locking a file that is already locked, or unlocking one that is not, changes nothing and  still answers with the file, so the call is idempotent in effect while remaining a mutating one. The caller  needs the right to lock the file, which the room admin, a DocSpace admin acting as room manager and a member  with content-creator rights have; a member without access to the room and a guest are refused, and so is a  file in Trash. A lock set by somebody else can only be released by a room manager.
         * @summary Lock a file
         * @param {number | string} fileId The file to lock or unlock.
         * @param {LockFileRequest} lockFileRequest The lock state to reach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         */
        async lockFile(fileId: number | string, lockFileRequest: LockFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lockFile(fileId, lockFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.lockFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Drives the filling of a PDF form through its states, the action deciding which way. Action 2 starts the  filling: in a form-filling room the form is opened for filling, the members whose rights are limited to  filling forms are let in, and a form that has been changed since it was last started has the drafts of its  previous round dropped. Action 0 stops it, which in a virtual data room records who interrupted it and at  which role and notifies the people who held the other roles, and in a form-filling room closes the form for  filling. Action 1 resumes a filling that was stopped, clearing that record. Action 3 puts the form back into  editing, closing it for filling and remembering the version it was edited from. The file has to be a PDF form  lying in a room. Starting needs the right to start the filling, which the room admin and a member with  content-creator rights have, while stopping a filling that somebody else started belongs to room managers  alone, so a content creator is refused with 403 there. The call is mutating; the state that resulted is read  with `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Perform form filling action
         * @param {string} fileId The form the action applies to. Send the same value as the `formId` of the request body, which is the one the handler reads.
         * @param {ManageFormFillingDto} [manageFormFillingDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for manageFormFilling operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/
         */
        async manageFormFilling(fileId: string, manageFormFillingDto?: ManageFormFillingDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.manageFormFilling(fileId, manageFormFillingDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.manageFormFilling']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Builds everything an editor client needs to open the file: the document descriptor with its download address,  title, type and document key, the editor configuration with the mode, the caller\'s permissions, the user and  the customization, the callback the editors report back to, and the signature token the document service  validates. `version` opens one entry of the file history and requires access to that history; left out, the  current revision is opened. `view`, `edit` and `fill` say what the client intends to do, and `editorType`  picks the desktop, mobile or embedded layout. For a PDF form the room decides the outcome and may overrule the  request: a form-filling room, a virtual data room, a public room and a user folder each produce their own  mode, and a form opened from the templates folder is read-only and, outside the mobile layout, framed as  embedded. When the portal is over its storage quota the configuration comes back read-only with the exceeded  scope named. In a private room the caller\'s encryption keys are added to the editor configuration. Payment is  not required and an anonymous caller opens through an external link.
         * @summary Get the editor configuration
         * @param {number | string} fileId The file the editor configuration is built for. Take the id from a folder listing such as  `GET api/2.0/files/{folderId}`.
         * @param {number} [version] Which entry of the file history to open, numbered the way the file versions are. Left out, the current  revision is opened; naming a version requires access to the history of the file.
         * @param {boolean} [view] Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller\'s  rights and the room the file lies in allow.
         * @param {EditorType} [editorType] Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the  embedded viewer meant to be framed inside another page.
         * @param {boolean} [edit] Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is  being edited; the room may still turn the request into viewing or into filling.
         * @param {boolean} [fill] Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a  form.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for openEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/
         */
        async openEditFile(fileId: number | string, version?: number, view?: boolean, editorType?: EditorType, edit?: boolean, fill?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigurationWrapper | ThirdPartyConfigurationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.openEditFile(fileId, version, view, editorType, edit, fill, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.openEditFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Brings an earlier version of a file back and answers with the editing revisions of the file after the restore.  Nothing is overwritten: the content of the chosen version is stored again as a new version on top of the  history, carrying a comment that says which version it was reverted to, so the intervening versions stay  readable. `url` changes the source - with it the content is fetched from that address, which is how the  document service returns a document with a set of changes rolled back, and the new version records that  instead. Any links that pointed at drafts of the file are dropped, and the file is marked as new for the other  people who can read it. `version` has to name an existing version and is refused with 400 when it is missing  or already the current one. The caller needs the right to edit the history of the file and is otherwise  refused with 403, an anonymous caller included. The call is mutating and not idempotent. A locked file, one in  Trash, one being edited, an encrypted one and one kept in a connected third-party storage are all refused.
         * @summary Restore a file version
         * @param {number | string} fileId The file whose version is restored.
         * @param {number} [version] The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an  existing version that is not the current one.
         * @param {string} [url] The address the content of the new version is fetched from instead of the stored version, which is how the  document service hands back a document with a set of changes rolled back; left out, the stored version is  used.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreFileVersion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/
         */
        async restoreFileVersion(fileId: number | string, version?: number, url?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditHistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreFileVersion(fileId, version, url, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.restoreFileVersion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the content of an existing file with an edited copy and answers with the file as it now stands. The  content is the `File` part of a `multipart/form-data` body, and when no such part is sent the raw request body  is saved instead, so an empty body empties the file. The `DownloadUri` query parameter does not supply content  here; it is only read for the extension when `FileExtension` is empty. `fileExtension` names the format of the  content being sent, and when it differs from the stored format the portal converts the content, or keeps it  under a renamed copy when a third-party storage cannot convert it. The caller needs edit access to the file.  The call is mutating and not idempotent: an ordinary call adds a version to the file history, while  `forcesave=true` records an editor autosave, which overwrites the previous autosave revision instead of adding  another version and leaves a running editing session in place. It is refused with 403 when the file is locked,  lies in Trash, or is open in an editing session started by somebody else, and an unknown file id is reported  as missing. For content too large to post in one request use `POST api/2.0/files/file/{fileId}/edit_session`.
         * @summary Save edited file content
         * @param {number | string} fileId The file whose content is replaced. The submitted content is written onto this file, so it has to be the file  the editing session was opened on rather than a copy of it.
         * @param {string} [downloadUri] An address the document service saved the document at. This operation does not fetch the content from it - the  content always comes from the request body - and reads it only for the extension, when no file extension is  given.
         * @param {string} [fileExtension] The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format  the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off  the download address, and failing that the stored format is assumed.
         * @param {File} [file] The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw  request body is saved as the content instead, so an empty body empties the file.
         * @param {boolean} [forcesave] Records the write as an editor autosave: the file keeps its running editing session and the previous autosave  revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else  has the file open, and adds a version to the history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         */
        async saveEditingFileFromForm(fileId: number | string, downloadUri?: string, fileExtension?: string, file?: File, forcesave?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveEditingFileFromForm(fileId, downloadUri, fileExtension, file, forcesave, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.saveEditingFileFromForm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Converts a file into a PDF, stores that PDF as a new file in the folder named in the body, and answers with  the file that was created. The source is left untouched, so the two files then live side by side. `title`  names the result without an extension - the `.pdf` extension is added to it - and an empty title reuses the  name of the source with its extension replaced. The conversion is done by the document service while the  request waits, so the call takes as long as the document needs and answers with the finished file rather than  with a queue entry. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused; a source file or a destination folder that does not exist is  answered with 404. The call is mutating and not idempotent: each call adds another PDF, its title made unique  when one of that name is already there. The result is marked as new for the room, and for a form the portal  recognises it is stored as a PDF form. To convert in place instead use  `PUT api/2.0/files/file/{fileId}/checkconversion`.
         * @summary Save a file as PDF
         * @param {number | string} id The file to convert; it is left untouched.
         * @param {SaveAsPdfRequest | ThirdPartySaveAsPdfRequest} saveAsPdfRequest The destination folder and the name of the PDF.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         */
        async saveFileAsPdf(id: number | string, saveAsPdfRequest: SaveAsPdfRequest | ThirdPartySaveAsPdfRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveFileAsPdf(id, saveAsPdfRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.saveFileAsPdf']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Assigns the roles of a PDF form to the people who are to fill them in, and starts the filling: the form is  marked as being filled out, the account that called is recorded as the one who started it, everybody named in  a role is notified, and the form becomes visible to the members whose room rights are limited to filling  forms. Each role carries its name, the account that takes it and the sequence number that decides the turn, so  the same sequence means the roles may be filled in parallel and different ones make a queue. Sending an empty  role list resets the filling instead, dropping the assignment altogether. The whole set is replaced on every  call, so the call is idempotent for a given set of roles but not additive. The file has to be a PDF form lying  in a room; the caller needs the right to start the filling of that form, which the room admin and a member  with content-creator rights have, and is otherwise refused with 403. Read back what was stored with  `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Save form role mapping
         * @param {string} fileId The form the role mapping belongs to. Send the same value as the `formId` of the request body, which is the one the handler reads.
         * @param {SaveFormRoleMappingDto} [saveFormRoleMappingDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFormRoleMapping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/
         */
        async saveFormRoleMapping(fileId: string, saveFormRoleMappingDto?: SaveFormRoleMappingDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveFormRoleMapping(fileId, saveFormRoleMappingDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.saveFormRoleMapping']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns the Custom Filter editing mode of a spreadsheet on or off and answers with the file as it now stands. In  that mode the sorting and filtering one person applies to the sheet is visible to that person alone, so that  several people can work on the same data without moving the rows under each other; with the mode off,  filtering is shared again, as everywhere else. Turning it on also drops everybody else out of the running  editing session, the caller excepted, because the mode has to be established before the sheet is opened. Only  formats that support the mode are accepted; anything else is rejected as an invalid request. The caller needs  the right to use the mode in the room, which the room admin and a DocSpace admin acting as room manager have;  read-only access, a member without access to the room and an anonymous caller are refused. Once the mode has  been switched on by one person, only that person, a room manager or a DocSpace admin can switch it off again.  The call is mutating and, called twice with the same value, changes nothing the second time.
         * @summary Set the Custom Filter editing mode
         * @param {number | string} fileId The spreadsheet whose Custom Filter mode is switched.
         * @param {CustomFilterRequest} customFilterRequest The Custom Filter state to reach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         */
        async setCustomFilterTag(fileId: number | string, customFilterRequest: CustomFilterRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setCustomFilterTag(fileId, customFilterRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setCustomFilterTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Issues the file keys that let the named people open one file of an end-to-end encrypted private room. Each  entry of the body names the account the key is for, the public key it was encrypted with and the encrypted key  itself, so the plain key never reaches the portal: the client encrypts it once per recipient with the public  key that `GET api/2.0/files/file/{fileId}/publickeys` reports for them. The keys of the accounts named in the  request are replaced, and the keys of everybody else are left as they are, which makes the call idempotent for  a given set of recipients while remaining a mutating one; sending no entry for a person does not revoke that  person\'s key. The file has to lie in a private room, and every account named in the request has to have read  access to it. The caller needs read access to the file and the right to create content in that room, which its  members with editing rights and its admins have; a caller without those rights, a file outside a private room  and a file that does not exist are all refused with 403. Read the result back with  `GET api/2.0/files/{fileId}/access`.
         * @summary Set file encryption information
         * @param {number | string} fileId The file the keys are issued for; it has to lie in a private room.
         * @param {Array<AccessRequestKeyDto>} [accessRequestKeyDto] One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of  everybody else are left as they are, so sending no entry for a person does not revoke that person\'s key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setEncryptionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-encryption-info/
         */
        async setEncryptionInfo(fileId: number | string, accessRequestKeyDto?: Array<AccessRequestKeyDto>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setEncryptionInfo(fileId, accessRequestKeyDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setEncryptionInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an external link to a file, or changes or revokes an existing one, and answers with the link as it now  stands. `linkId` decides which: an identifier that is not yet in use, the empty one included, creates a link,  while the identifier of an existing link rewrites it, so the whole set of parameters is applied every time and  a field left out is reset rather than kept. `access` carries the rights the link grants, and `access` set to  the value that denies everything revokes the link instead - the answer is then empty, and a revoked primary  link is not recreated by a later read. `title` names the link for the people who manage it, `expirationDate`  limits its lifetime and is refused when it lies more than a few years ahead, `password` asks visitors for a  secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members alone, and  `primary=true` makes it the primary link of the file. The caller needs the right to share the file and is  otherwise refused, an unknown file being answered as not found. The call is mutating.
         * @summary Set a file external link
         * @param {number | string} id The file the link points at.
         * @param {FileLinkRequest} fileLinkRequest The settings of the link. They are applied in full, so a field left out is reset rather than kept.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link/
         */
        async setFileExternalLink(id: number | string, fileLinkRequest: FileLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileExternalLink(id, fileLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setFileExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Puts a file at a given position inside its folder and answers with the file, its `order` reporting where it  now stands. Positions count from 1, and the file that held the wanted position, together with everything after  it, is shifted to make room, so the numbering of a folder stays without gaps; a position beyond the end of the  folder places the file last. The value may also be sent as a dotted path, as in 1.2.3, in which case only  its last segment is read. Ordering is what the manual sorting of a room is built on, and it only means  something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs  edit access to the file, which room managers, content creators and members with editing rights have; a member  acting on somebody else\'s file, a guest and an anonymous caller are refused with 403, and an unknown file is  answered with 404. The call is mutating and idempotent. To move several items in one go use  `PUT api/2.0/files/order`.
         * @summary Set file order
         * @param {number | string} fileId The file to move.
         * @param {OrderRequestDto} [orderRequestDto] The position the file is to take.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/
         */
        async setFileOrder(fileId: number | string, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileOrder(fileId, orderRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setFileOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Puts several files and folders at given positions in one go and answers with the entries that were moved, each  with the position it now holds. Every item of `items` names an entry by its identifier and its kind - a file  or a folder - and the position it is to take, counting from 1; a position may also be sent as a dotted path,  as in 1.2.3, of which only the last segment is read. The items are applied one after another in the order  they are sent, and each of them shifts its neighbours, so the result depends on that order; the whole request  is not one transaction, and a failure in the middle leaves the items before it moved. Every item has to lie in  a room the caller may administer, which the room admin and a DocSpace admin acting as room manager do:  read-only access, a guest and an anonymous caller are refused, and an identifier that matches nothing is  answered as not found. Ordering only means something in rooms whose contents are indexed. The call is  mutating. For a single file use `PUT api/2.0/files/{fileId}/order`.
         * @summary Set order of files
         * @param {OrdersRequestDto} [ordersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         */
        async setFilesOrder(ordersRequestDto?: OrdersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFilesOrder(ordersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setFilesOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Opens an editing session on the file and answers with the document key that identifies it, the value an editor  client passes to the document service in order to join the co-editing session for that exact revision. The  file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved.  With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of  the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking  the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403  when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an  anonymous caller whose external link does not grant editing are all refused. The call is mutating and not  idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling  that operation with `isFinish=true`.
         * @summary Open an editing session
         * @param {number | string} fileId The file to open the editing session on. The caller needs edit access to it.
         * @param {StartEditRequest} startEditRequest The session options. The body is required even when it only carries the default, so send an empty object to  open an ordinary co-editing session.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         */
        async startEditFile(fileId: number | string, startEditRequest: StartEditRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startEditFile(fileId, startEditRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.startEditFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Marks a PDF form in a form-filling room as open for filling out and answers with the form file. The portal  stores the filling properties on it - the room it belongs to, its title, the account that started it and the  id it keeps as the original form - so that later submissions are collected against this form. The file has to  be a PDF whose parent folder is a form-filling room; anything else is answered unchanged and nothing is  stored. Access follows room membership rather than portal role: a member holding only form-filling access on  the room may not start filling, and a caller with no access to the room at all is refused with 403 unless they  can manage it, which the room owner, a room administrator and a DocSpace administrator can. The call is  mutating and safe to repeat, since a repeat rewrites the same properties. Once a form is started, the answers  submitted for it can be collected into a spreadsheet with `POST api/2.0/files/file/{fileId}/xlsx`.
         * @summary Start filling a form
         * @param {number | string} fileId The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy  kept elsewhere and not a submitted result.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFillingFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/
         */
        async startFillingFile(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startFillingFile(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.startFillingFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets or clears the favorite mark of one file for the calling account: `true` adds the file to the favorites,  `false` takes it out again. The call changes stored state even though it is a GET, so it is not one to issue  speculatively; repeating it with the same value changes nothing further. The mark is personal, no other member  sees it, and the file stays where it is stored. Read access is enough, so a room member with view-only rights  and a guest may call it. The answer only echoes the value that was asked for: an identifier that resolves to  nothing and a file the caller cannot read are skipped without a word, an encrypted file of a private room is  never marked, and the requested value still comes back, so read the outcome from  `GET api/2.0/files/@favorites` instead. A file moved to the Trash keeps its mark and is left out of that  listing until it is restored. To mark several entries at once, or to mark folders, use  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`.
         * @summary Set the file favorite status
         * @param {number | string} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {boolean} [favorite] Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes  it from them. Leaving the field out of the request removes the mark rather than setting it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for toggleFileFavorite operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite/
         */
        async toggleFileFavorite(fileId: number | string, favorite?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.toggleFileFavorite(fileId, favorite, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.toggleFileFavorite']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Keeps an editing session on the file alive, or ends it; an editor client calls it repeatedly while a document  is open. `docKeyForTrack` has to be the document key of the file as it currently stands, the value  `POST api/2.0/files/file/{fileId}/startedit` returned, and a key matching neither the current revision nor the  one being edited is refused with 403. `tabId` names the client tab that holds the session, so several tabs and  several users are tracked on one file independently. Refreshing an entry requires one of the editing rights on  the file - editing, reviewing, commenting, filling or filter editing - so a reader is refused. With  `isFinish=false` the entry is refreshed and the file stays marked as being edited; with `isFinish=true` the  entry for that tab is dropped and the other clients are told that editing has stopped. The call changes the  tracking state and never the document, and repeating it is safe. It answers `key` true with an empty `value`  whenever it succeeds, so a failure arrives as an error rather than as a false key. An anonymous caller is  accepted only through an external share link.
         * @summary Track an editing session
         * @param {number | string} fileId The file whose editing session is being tracked.
         * @param {string} [tabId] The client tab that holds the session, a value the client makes up once and repeats on every call about that  tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value  belongs to a session claimed for a single editor.
         * @param {string} [docKeyForTrack] The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It  is checked against the file\'s current key on every call, so a key left over from an older revision is refused.
         * @param {boolean} [isFinish] Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is  refreshed and the file stays marked as being edited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for trackEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/
         */
        async trackEditFile(fileId: number | string, tabId?: string, docKeyForTrack?: string, isFinish?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemKeyValuePairBooleanStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.trackEditFile(fileId, tabId, docKeyForTrack, isFinish, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.trackEditFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Renames a file, restores one of its versions, or both at once, and answers with the file as it now stands. A  non-empty `title` renames the file, keeping the stored extension whatever the new title says, so a rename  cannot change the format; an empty or missing title leaves the name alone. A `lastVersion` above 0 restores  that version the way `POST api/2.0/files/file/{fileId}/restoreversion` does, storing its content again on top  of the history, while 0 or less leaves the versions untouched and answers with the file as it is - which makes  this operation a read of the file when both fields are left out. The caller needs edit access, and renaming  somebody else\'s file additionally needs room-manager rights: a member or room admin with plain editing access,  read-only access, a guest and a DocSpace admin who is not a member of the room are all refused with 403, while  a content creator may rename a file of their own. The call is mutating. Renaming marks the file as new for  everybody else who can read it.
         * @summary Update a file
         * @param {number | string} fileId The file to update.
         * @param {UpdateFileRequest} updateFileRequest The new title and the version to restore.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         */
        async updateFile(fileId: number | string, updateFileRequest: UpdateFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper | ThirdPartyFileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFile(fileId, updateFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.updateFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesApi - factory interface
 * @export
 */
export const FilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesApiFp(configuration)
    return {
        /**
         * Stamps the file as just used by the calling account and puts it at the top of that account\'s Recent section,  then answers with the file as it stands now. The list is personal: no other member sees the change, and the  file itself is untouched. Read access is enough, so a room member with view-only rights and an invited guest  may call it, and a visitor who reaches the file through an external link is recorded against that link. A  caller without read access is refused with 403, and an identifier that resolves to nothing answers 404.  Repeating the call is safe: the file keeps a single entry and only moves back to the top. The section holds  the 1000 newest entries of an account and drops the oldest beyond that on its own; folders never enter it, and  an encrypted file of a private room is answered normally but never recorded. Read the section back with  `GET api/2.0/files/recent` and drop entries with `DELETE api/2.0/files/recent`; whether it is offered among  the sections of `GET api/2.0/files/@root` is decided by `PUT api/2.0/files/displayrecent`.
         * @summary Add a file to Recent
         * @param {FilesApiAddFileToRecentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addFileToRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/
         * @throws {RequiredError}
         */
        addFileToRecent(requestParameters: FilesApiAddFileToRecentRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.addFileToRecent(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds the listed files to the personal template list of the calling account, the set the portal offers when a  new document is started from an existing one. The list belongs to the account and no other member sees it.  Every authenticated member type may manage their own list, a guest is refused, and read access to each file is  required. Only formats the portal treats as template documents survive: the accepted extensions arrive in  `extsWebTemplate` of `GET api/2.0/files/settings`, and a file of any other format is dropped silently. Only  numeric ids are accepted, so a file on a connected third-party account cannot become a template. The answer is  `true` whenever the request was understood, which an empty list, an id that does not exist and an unreadable  file all achieve, so it confirms nothing about what was added; no operation of this document reads the list  back. Repeating the call is safe. Use `DELETE api/2.0/files/templates` to drop a file again.
         * @summary Add template files
         * @param {FilesApiAddTemplatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-templates/
         * @throws {RequiredError}
         */
        addTemplates(requestParameters: FilesApiAddTemplatesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.addTemplates(requestParameters.templatesRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Closes or reopens a revision group in the version history of a file and answers with every stored version of  that file, newest first. With `continueVersion=false` the named version is completed: its content is stored  again as a fresh version that opens a new revision group, so the editing that follows no longer extends the  previous one. With `continueVersion=true` the last revision group is folded back into the group before it, so  the next save continues that revision instead of becoming a version of its own; a file that has only one group  is left as it is. A `version` of 0 means the current version. The caller needs the right to edit the history  of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator  rights have; plain editing access is refused with 403, as are a guest and a member without access to the room.  The call is mutating and not idempotent. A file that is locked, lies in Trash, is open in an editing session  or is kept in a connected third-party storage is refused.
         * @summary Change version history
         * @param {FilesApiChangeVersionHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         * @throws {RequiredError}
         */
        changeVersionHistory(requestParameters: FilesApiChangeVersionHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper> {
            return localVarFp.changeVersionHistory(requestParameters.fileId, requestParameters.changeHistoryRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Resolves the editor address the caller must open to fill out the given PDF form, and provisions the personal  draft that filling needs. The form has to live in a form-filling room and filling has to be started for it  with `PUT api/2.0/files/file/{fileId}/manageformfilling`; a caller who may edit the form, a form whose filling  has not started, and a request naming `view` or `embedded` as the action are all sent straight to the form  itself. Read access to the form is enough to get an address, fill-forms access is what puts the caller into  the filling flow, and a holder of an external link may call it without signing in, while a caller with neither  a session nor a link key is rejected. In the filling case the call is not read-only: it copies the form into  the room\'s in-progress folder under the caller\'s name, clears the new-item badge, closes the editing session  of the original, and answers with the address of that copy. A repeated call reuses that copy, and a call  naming an existing draft adds a discard notice when that draft is no longer valid. The answer is one URL  string that may carry a `#message/...` fragment the editor renders as a notice. For the full editor  configuration use `GET api/2.0/files/file/{fileId}/openedit`. A form the caller cannot open is refused with  403, and one that does not exist is answered as missing.
         * @summary Open a form draft for filling
         * @param {FilesApiCheckFillFormDraftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         * @throws {RequiredError}
         */
        checkFillFormDraft(requestParameters: FilesApiCheckFillFormDraftRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.checkFillFormDraft(requestParameters.fileId, requestParameters.checkFillFormDraftRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Copies one file into another folder under a new title, converting its content when the new title names a  different format, and answers with the copy that was created. The extension of `destTitle` decides what  happens: the same extension as the source copies the bytes as they are, a different one has the document  service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source  file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a  string for a folder in a connected third-party storage; anything else is answered with an empty body and  nothing is copied. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a  format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another  copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.
         * @summary Copy a file
         * @param {FilesApiCopyFileAsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         * @throws {RequiredError}
         */
        copyFileAs(requestParameters: FilesApiCopyFileAsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseWrapper> {
            return localVarFp.copyFileAs(requestParameters.fileId, requestParameters.copyAsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Opens a chunked session that replaces the content of an existing file, which is how WebDAV clients save over a  document. The answer carries the session id the later calls quote, the address of the standalone chunk  handler, the expiry and the reserved size, and nothing is written until the parts reach  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the session is closed with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`, where `folderId` is the folder the file lives in.  Unlike an upload into a folder, the finished content does not become a new version: it overwrites the current  one, and the file loses its encrypted flag and its stored conversion result in the process. The caller must be  allowed to edit the file, as the owner, a room manager and a member invited with editing rights are; a reader  and a guest get 403. A file that does not exist is answered as missing, and a payload above the portal limit  for chunked uploads is refused before the session is created.
         * @summary Create the editing session
         * @param {FilesApiCreateEditSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         * @throws {RequiredError}
         */
        createEditSession(requestParameters: FilesApiCreateEditSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResultWrapper | ThirdPartyChunkedUploadSessionResultWrapper> {
            return localVarFp.createEditSession(requestParameters.fileId, requestParameters.fileSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a file in the folder named in the route and answers with the stored file. The extension in the title  decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the  portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension  and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title  verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId`  copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a  number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The caller needs the right  to create files in the folder, and the room roots, Archive and the template sections are refused even to an  admin. The call is mutating and not idempotent. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/file`.
         * @summary Create a file
         * @param {FilesApiCreateFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         * @throws {RequiredError}
         */
        createFile(requestParameters: FilesApiCreateFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.createFile(requestParameters.folderId, requestParameters.createFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a file in the caller\'s own My documents section and answers with the stored file. The extension in  the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to  the portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown  extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the  title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order:  `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read  - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The call is mutating and  not idempotent: each call adds another file. A guest has no My documents section of their own, so a guest  cannot use this operation at all, and a template the caller cannot read is refused. To create a file in a  room or any other folder use  `POST api/2.0/files/{folderId}/file`.
         * @summary Create a file in My documents
         * @param {FilesApiCreateFileInMyDocumentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         * @throws {RequiredError}
         */
        createFileInMyDocuments(requestParameters: FilesApiCreateFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper> {
            return localVarFp.createFileInMyDocuments(requestParameters.createFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Answers with the primary external link of a file, creating it on the first call and returning the one that  already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does  not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/file/{id}/links`.  The parameters therefore only shape the link at the moment it is born - `access` its rights, `expirationDate`  its lifetime, which for a file in a personal section is unlimited here rather than the default of a few days,  `internal` whether only signed-in members may follow it, `denyDownload` whether the content may only be  viewed, and `password` a secret to be asked for. A PDF form gets the rights it needs for filling out whatever  was asked for, and a form in a form-filling room is answered with the link of the room instead. The caller  needs the right to share the file and is otherwise refused with 403; a link that was deliberately revoked is  not recreated but answered with 404. Read the address from `sharedTo.shareLink`.
         * @summary Create the file primary external link
         * @param {FilesApiCreateFilePrimaryExternalLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link/
         * @throws {RequiredError}
         */
        createFilePrimaryExternalLink(requestParameters: FilesApiCreateFilePrimaryExternalLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.createFilePrimaryExternalLink(requestParameters.id, requestParameters.fileLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an HTML file in the folder named in the route out of the markup passed as the content, and answers  with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a  request carrying no content is rejected as an invalid request. `createNewIfExist` acts the other way round  than its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The caller needs the right to create files in the folder and is otherwise  refused with 403. The call is mutating. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/html`.
         * @summary Create an HTML file
         * @param {FilesApiCreateHtmlFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         * @throws {RequiredError}
         */
        createHtmlFile(requestParameters: FilesApiCreateHtmlFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.createHtmlFile(requestParameters.folderId, requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an HTML file in the caller\'s own My documents section out of the markup passed as the content, and  answers with the stored file. The `.html` extension is added to the title unless the title already ends with  it, and a request carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than  its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The call is mutating: repeating it with `true` keeps a single file and grows  its history, repeating it with `false` fills the section with numbered copies. A guest has no My documents  section and is refused. To create the file in a room or another folder use  `POST api/2.0/files/{folderId}/html`.
         * @summary Create an HTML file in My documents
         * @param {FilesApiCreateHtmlFileInMyDocumentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         * @throws {RequiredError}
         */
        createHtmlFileInMyDocuments(requestParameters: FilesApiCreateHtmlFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper> {
            return localVarFp.createHtmlFileInMyDocuments(requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a text file in the folder named in the route out of the text passed as the content, and answers with  the stored file. The extension follows the content rather than the request: `.txt` normally, but `.html` as  soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends up as an  HTML file; the extension is added to the title unless the title already ends with it. A request carrying no  content is rejected as an invalid request. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in Notes  (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a new file  appears beside it instead. The caller needs the right to create files in the folder. The call is mutating. To  create the file in the caller\'s own section use `POST api/2.0/files/@my/text`.
         * @summary Create a text file
         * @param {FilesApiCreateTextFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         * @throws {RequiredError}
         */
        createTextFile(requestParameters: FilesApiCreateTextFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.createTextFile(requestParameters.folderId, requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a text file in the caller\'s own My documents section out of the text passed as the content, and  answers with the stored file. The extension follows the content rather than the request: `.txt` normally, but  `.html` as soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends  up as an HTML file; the extension is added to the title unless the title already ends with it. A request  carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in  Notes (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a  new file appears beside it instead. The call is mutating. A guest has no My documents section and is  refused. To create the file in a room or another folder use `POST api/2.0/files/{folderId}/text`.
         * @summary Create a text file in My documents
         * @param {FilesApiCreateTextFileInMyDocumentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         * @throws {RequiredError}
         */
        createTextFileInMyDocuments(requestParameters: FilesApiCreateTextFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper> {
            return localVarFp.createTextFileInMyDocuments(requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Asks the portal to build preview thumbnails for the listed files, and answers at once with the same file ids  that were sent. That answer echoes the request and does not confirm that anything was queued: the work is  handed over to a background worker, and a failure on the way there is written to the log rather than reported  to the caller. Only the file ids of the body are read - the folder ids are ignored, and a request naming no  files at all is answered with an empty list. Ids of files kept in a connected third-party storage are dropped  as well, because the worker handles portal storage only. Access to the individual files is not checked here;  the caller has to be signed in or to reach the portal through an external share link, and an anonymous caller  without such a link is refused. The call is asynchronous and safe to repeat. The thumbnails themselves are not  in the answer: read `thumbnailStatus` and `thumbnailUrl` of the file, for instance with  `GET api/2.0/files/file/{fileId}`, until the status reports the thumbnail as created.
         * @summary Queue file thumbnails
         * @param {FilesApiCreateThumbnailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-thumbnails/
         * @throws {RequiredError}
         */
        createThumbnails(requestParameters: FilesApiCreateThumbnailsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.createThumbnails(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues the deletion of one file and answers with the caller\'s file operations, the one just created among  them. The file is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation  reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the file is moved  to Trash, from where it can be restored; `immediately=true` deletes it for good instead, and inside a room,  where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing  session on the file has ended, so a file somebody is working on is not pulled away.  `returnSingleOperation=true` narrows the answer to this deletion instead of listing every active operation of  the caller. The caller needs the right to delete the file, which the room admin, a DocSpace admin acting as  room manager and a content creator acting on their own file have; editing access alone, read access, a guest  and a member without access to the room are all refused. The call is destructive. To delete several items at  once use `PUT api/2.0/files/fileops/delete`.
         * @summary Delete a file
         * @param {FilesApiDeleteFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         * @throws {RequiredError}
         */
        deleteFile(requestParameters: FilesApiDeleteFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteFile(requestParameters.fileId, requestParameters.deleteFileRequest, requestParameters.returnSingleOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the listed entries from the Recent section of the calling account, the history of opened files that  `GET api/2.0/files/recent` returns. Nothing is deleted from storage and no other member\'s history is touched;  access to the entries is not checked at all, so a file the caller can no longer read can still be cleared from  their own history. Only numeric file ids are honoured, so a file on a connected third-party account cannot be  cleared this way, and folder ids are accepted but change nothing because the section lists files only. The  answer carries no body and reports nothing about how many entries were found: an empty request and an id that  was never in the section are accepted alike. Repeating the call is safe, but an entry returns the next time  the file is opened or `POST api/2.0/files/file/{fileId}/recent` is called for it. To hide the whole section  instead, call `PUT api/2.0/files/displayrecent`.
         * @summary Delete recent files
         * @param {FilesApiDeleteRecentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/
         * @throws {RequiredError}
         */
        deleteRecent(requestParameters: FilesApiDeleteRecentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRecent(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes the listed files off the personal template list of the calling account, leaving the files themselves  untouched: only the template mark is dropped. The body of this request is a bare JSON array of numeric file  ids rather than an object with a field, and a request that carries no array at all is rejected as an invalid  request. Every authenticated member type may manage their own list, a guest is refused, and read access to a  file is required for its mark to be dropped. The answer is `true` whenever the array was understood, which an  empty array, an id that does not exist and a file that was never a template all achieve, so it confirms  nothing about what was removed. Repeating the call is safe. Use `POST api/2.0/files/templates` to put a file  back on the list; that operation expects an object with a `fileIds` field, so the two bodies are not  interchangeable.
         * @summary Delete template files
         * @param {FilesApiDeleteTemplatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/
         * @throws {RequiredError}
         */
        deleteTemplates(requestParameters: FilesApiDeleteTemplatesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteTemplates(requestParameters.deleteTemplateFilesRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues generation of the spreadsheet that collects every answer submitted for a PDF form in a form-filling  room, and answers at once with the queued task, the original form and a flag telling whether the report file  is being created now or an existing one refreshed in place. Either identifier works: the id of the original  form, or the id of an XLSX or CSV result file inside the room\'s Complete folder, from which the portal  resolves the form behind it. The form must already have been opened for filling with  `PUT api/2.0/files/file/{fileId}/startfilling` and must still live in the form-filling room that started it.  The caller must be allowed to update that form\'s report. The call is mutating and asynchronous: the  spreadsheet is not ready when the response arrives, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the  original form\'s id until the task reports completion, then take the produced file from the task. Calling it  again while a run is still going answers with that run instead of starting a second one.
         * @summary Generate a form answers report
         * @param {FilesApiGenerateXlsxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for generateXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx/
         * @throws {RequiredError}
         */
        generateXlsx(requestParameters: FilesApiGenerateXlsxRequest, options?: RawAxiosRequestConfig): AxiosPromise<XlsxReportResponseWrapper> {
            return localVarFp.generateXlsx(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the roles of a PDF form together with the state each of them is in, which is how a client shows who is  expected to fill the form next. Every entry carries the name of the role, the account holding it, the sequence  number that decides the turn and a status: the roles of earlier turns are reported as complete, those of later  turns as waiting, and the role whose turn it is as either yours to fill or already in progress, depending on  whether that person has opened the form; when the filling has been stopped, the role it was interrupted at is  reported as stopped instead. A form whose filling was never started answers with an empty list. The file has  to be a PDF form, or the completed copy of one, and anything else is refused. Read access to the form is  enough, so every member of the room sees the roles, while a caller without access to the room and a guest  outside it are refused with 403 and an unknown file is answered with 404. The operation is read-only. The  assignment itself is written by `POST api/2.0/files/file/{fileId}/formrolemapping`.
         * @summary Get form roles
         * @param {FilesApiGetAllFormRolesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllFormRoles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/
         * @throws {RequiredError}
         */
        getAllFormRoles(requestParameters: FilesApiGetAllFormRolesRequest, options?: RawAxiosRequestConfig): AxiosPromise<FormRoleArrayWrapper> {
            return localVarFp.getAllFormRoles(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Answers with everything an editor needs in order to show what changed in one version of a file: the address of  the version itself, its document key and format, the address of the recorded changes, the same trio for the  version it is compared against, and a token that signs the whole answer for the document service. `version`  picks the version, and 0, the default, means the current one. `changesUrl` and `previous` are filled in only  when the portal has stored the changes of that version, which is the case for versions written by an editing  session; for a version uploaded as a whole they stay empty and only the file itself can be shown. The  addresses are meant for the document service and carry their own time-limited keys. The caller needs the right  to read the history of the file, which editing access and above grant: read-only access, commenting access, a  guest and an anonymous caller are all refused, as is a file kept in a connected third-party storage. The  operation is read-only. For the list of versions themselves use  `GET api/2.0/files/file/{fileId}/edit/history`.
         * @summary Get changes URL
         * @param {FilesApiGetEditDiffUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getEditDiffUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/
         * @throws {RequiredError}
         */
        getEditDiffUrl(requestParameters: FilesApiGetEditDiffUrlRequest, options?: RawAxiosRequestConfig): AxiosPromise<EditHistoryDataWrapper> {
            return localVarFp.getEditDiffUrl(requestParameters.fileId, requestParameters.version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the editing revisions of a file, oldest first, as the document service understands them: each entry  carries the version and the revision group it belongs to, the account that saved it, when it was saved, the  comment left on it, the document key of that revision and, where the portal stored them, the changes it  introduced. Only the revisions a person saved are listed - the autosaves an editing session writes in between  are left out, which is what separates this list from the plain version list of  `GET api/2.0/files/file/{fileId}/history`. The caller needs the right to read the history of the file, which  editing access and above grant: commenting access, read-only access, a guest, a member without access to the  room and an anonymous caller are all refused, and so is a file kept in a connected third-party storage, which  keeps no history in the portal. The operation is read-only. Take one entry to  `GET api/2.0/files/file/{fileId}/edit/diff` to show its changes, or to  `POST api/2.0/files/file/{fileId}/restoreversion` to bring it back.
         * @summary Get version history
         * @param {FilesApiGetEditHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getEditHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/
         * @throws {RequiredError}
         */
        getEditHistory(requestParameters: FilesApiGetEditHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<EditHistoryArrayWrapper> {
            return localVarFp.getEditHistory(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns what the caller needs in order to decrypt one file of an end-to-end encrypted private room: `userKeys`  holds the key pairs of the calling account, the private half of each of them encrypted with that person\'s own  password, and `fileKeys` holds the file keys that were issued to this account for this file, each naming the  public key it was encrypted for. Only the keys of the calling account are ever returned, never those of the  other people in the room. An account that holds no key pair yet, and a file no key was issued for, answer with  empty lists rather than with an error, so an empty `fileKeys` means the caller cannot open that file rather  than that the file is unencrypted. The caller needs read access to the file; a caller without it, and a file  that does not exist, are both refused with 403. The operation is read-only. Keys are issued by  `PUT api/2.0/files/{fileId}/access`, and the personal key pairs are managed under `api/2.0/privacyroom/keys`.
         * @summary Get file encryption information
         * @param {FilesApiGetEncryptionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getEncryptionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-info/
         * @throws {RequiredError}
         */
        getEncryptionInfo(requestParameters: FilesApiGetEncryptionInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileEncryptionInfoWrapper> {
            return localVarFp.getEncryptionInfo(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the activity log of a single file - who renamed, moved, shared, converted, locked or edited it, and  when - as the portal recorded it in its audit trail. Entries arrive newest first, and the events that belong  to one action are folded into a single entry whose `related` list carries the rest of them. `fromDate` and  `toDate` are read in the portal\'s time zone and narrow the range; `startIndex` and `count` page through the  result, and the number of matching entries is reported in the response headers rather than in the body. The  caller needs read access to the file, so a member of the room it lies in, the admin of that room and a  DocSpace admin all see the same log, while a caller without access to the room is refused with 403 and an  unknown id is answered with 404. The operation is read-only. Only files stored in the portal itself have a log  here - a file kept in a connected third-party storage has none. For the log of a folder or a room use  `GET api/2.0/files/folder/{folderId}/log`.
         * @summary Get file history
         * @param {FilesApiGetFileHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/
         * @throws {RequiredError}
         */
        getFileHistory(requestParameters: FilesApiGetFileHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<HistoryArrayWrapper> {
            return localVarFp.getFileHistory(requestParameters.fileId, requestParameters.fromDate, requestParameters.toDate, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one file as the portal stores it, together with the state it has for the caller: the title, the folder  it lies in, the size, the current version and revision group, the addresses for viewing and editing it, the  actions the caller is allowed to perform on it, the sharing rights it was reached through, and the thumbnail  state. `version` picks an older version instead of the current one; the default of -1 means the current  version. When the file belongs to another person\'s own section and the caller cannot read the folder holding  it, the answer reports the Shared with me section as its folder, so that a client can show it in a place the  caller can actually open. The caller needs read access to the file, which any member of the room it lies in  has; a caller without access to the room is refused and an anonymous caller without an external share link is  rejected. The operation is read-only. For every version at once use `GET api/2.0/files/file/{fileId}/history`.
         * @summary Get file information
         * @param {FilesApiGetFileInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/
         * @throws {RequiredError}
         */
        getFileInfo(requestParameters: FilesApiGetFileInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.getFileInfo(requestParameters.fileId, requestParameters.version, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the external links of a file, each with its identifier, title, address, rights, expiration date and  download restriction. `startIndex` and `count` page through the list, and the total number of links is  reported in the response headers rather than in the body. A file that has never been shared by link answers  with an empty list; the primary link is part of this list once it exists, and it is the only one that is  created on demand, by `GET api/2.0/files/file/{id}/link`. For a PDF form kept in a form-filling room the link  of the room is appended to the answer, because that is the address through which the form is filled out. The  caller needs the right to share the file, which its creator, the room admin and a DocSpace admin acting as  room manager have; a caller without access to the file is refused and an anonymous caller is rejected. The  operation is read-only. Take an identifier from here to `PUT api/2.0/files/file/{id}/links` to change or  remove that link.
         * @summary Get file external links
         * @param {FilesApiGetFileLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/
         * @throws {RequiredError}
         */
        getFileLinks(requestParameters: FilesApiGetFileLinksRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFileLinks(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Answers with the primary external link of a file - the one the Copy link action of a client hands out - with  its address in `sharedTo.shareLink`, its rights in `access`, and its expiration date, password flag and  download restriction beside them. The link is created on the first read if the file has none, with read  rights, no password and no expiry, so this operation mutates on that first call and is a plain read  afterwards; repeated calls answer with the same link identifier. A PDF form in a form-filling room is answered  with the link of that room, carried over to the form. The caller needs the right to share the file, which its  creator, the room admin and a DocSpace admin acting as room manager have; a caller without access to the file  is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is  answered with 404 rather than being recreated. The custom links of the same file, the primary one excepted,  are listed by `GET api/2.0/files/file/{id}/links`.
         * @summary Get the file primary external link
         * @param {FilesApiGetFilePrimaryExternalLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/
         * @throws {RequiredError}
         */
        getFilePrimaryExternalLink(requestParameters: FilesApiGetFilePrimaryExternalLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.getFilePrimaryExternalLink(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns every stored version of a file, newest first, each of them shaped like the file itself - the version  and the revision group it belongs to, the size, the comment saved with it, the addresses for viewing it, and  the thumbnail and lock state. Unlike the editing revisions of `GET api/2.0/files/file/{fileId}/edit/history`,  this list also holds the autosave revisions an editing session writes, so it is the fuller of the two, and it  is the shape a client already knows how to render. The caller needs the right to read the history of the file,  which is a stricter rule than reading the file: in a room only its managers and content creators may read the  history, and in a personal section editing access is enough, so a member with read access to somebody else\'s  file, and even a DocSpace admin in that position, are refused, as is an anonymous caller. The operation is  read-only. To restore one of the versions use `POST api/2.0/files/file/{fileId}/restoreversion`, and to close  or reopen a revision group `PUT api/2.0/files/file/{fileId}/history`.
         * @summary Get file versions
         * @param {FilesApiGetFileVersionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         * @throws {RequiredError}
         */
        getFileVersionInfo(requestParameters: FilesApiGetFileVersionInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper> {
            return localVarFp.getFileVersionInfo(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Answers with the outcome of one completed form-filling session: the filled copy of the form, the original form  it was made from, the number this submission was given inside the room, the identifier of the room and the  account that started the filling. `isRoomMember` says whether the caller is a member of that room, which a  client uses to decide whether the room can be offered for opening. The session is named by `fillingSessionId`,  the value the document service reports when the filling ends; the portal remembers it only for a while after  that, so a session that was never completed, one already forgotten and a value of the wrong shape are all  answered as not found, while omitting the parameter is rejected as an invalid request. The operation is  read-only and needs no sign-in: it is meant for the caller that has just finished filling the form through an  external link, and the session identifier is the only secret involved. The filled copy itself is an ordinary  file - read it with `GET api/2.0/files/file/{fileId}`.
         * @summary Get form-filling result
         * @param {FilesApiGetFillResultRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFillResult operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/
         * @throws {RequiredError}
         */
        getFillResult(requestParameters: FilesApiGetFillResultRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FillingFormResultWrapper> {
            return localVarFp.getFillResult(requestParameters.fillingSessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns everything that has been submitted against one PDF form: `metadata` describes the fields of the form,  in the order they are laid out, and `submissions` carries one record per completed copy, each of them holding  the values that were entered. It is the data behind the results table a client shows for a form, and the same  data the spreadsheet report of `POST api/2.0/files/file/{fileId}/xlsx` is built from. Only the submissions of  the version that is currently being filled are reported. The form has to be a PDF form whose filling has been  started and which is still the original form of its room; a form that was never started, a copy of a form and  a form whose room has been moved away are all refused. Read access to the form is enough, so every member of  the room can read the results, while a caller without access to it is refused with 403. The operation is  read-only. The list of roles and whose turn it is comes from `GET api/2.0/files/file/{fileId}/formroles`  instead.
         * @summary Get form submission results
         * @param {FilesApiGetFormSubmissionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFormSubmissions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-form-submissions/
         * @throws {RequiredError}
         */
        getFormSubmissions(requestParameters: FilesApiGetFormSubmissionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FormSubmissionsWrapper> {
            return localVarFp.getFormSubmissions(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a direct download address for the current content of the file together with the signature token that  the document service validates, which is what the portal hands over when the editors have to fetch the  document themselves. The address points at the portal\'s file stream endpoint and is rewritten to the host the  document service can reach, so on a deployment where the editors sit behind a private address it is not the  address a browser should follow. The answer also carries the extension of the stored document, leading dot  included. The caller needs read access to the file, and an unknown file id is reported as missing. The call  only reads, and each call mints a fresh address and token rather than reusing the previous one, so the value  is worth requesting again once a token has expired. For a link meant for a person, a plain address with no  token to put behind a download button, use `GET api/2.0/files/file/{fileId}/presigneduri` instead.
         * @summary Get a signed download address
         * @param {FilesApiGetPresignedFileUriRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPresignedFileUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/
         * @throws {RequiredError}
         */
        getPresignedFileUri(requestParameters: FilesApiGetPresignedFileUriRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileLinkWrapper> {
            return localVarFp.getPresignedFileUri(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Builds a download address for the current version of a file and answers with it as a plain string. The address  points at the portal\'s own file handler and carries the file identifier, the version it was built for and a  time-limited authentication key, so it can be handed to a downloader that cannot sign in to the portal itself;  it stops working once that key has expired, and it keeps naming the version that was current when it was built  rather than following later edits. The caller needs read access to the file: a member of the room it lies in  gets an address, a caller without access to the room is refused, an unknown identifier is answered as not  found and an anonymous caller is rejected. The operation is read-only and safe to repeat, though every call  mints a new key. Nothing is downloaded here - follow the address to fetch the bytes. For the variant the  document service signs, which comes back as an object with the file type and a token, use  `GET api/2.0/files/file/{fileId}/presigned`.
         * @summary Get file download link
         * @param {FilesApiGetPresignedUriRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPresignedUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/
         * @throws {RequiredError}
         */
        getPresignedUri(requestParameters: FilesApiGetPresignedUriRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPresignedUri(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the users the file is shared with, which is what a client offers when the author protects a document and  picks who may still edit it. The list is built from the whole access list of the file: every entry that is not  an explicit denial, with groups expanded into their members, the caller themselves and deleted accounts left  out, ordered by display name. Access inherited from the room counts, so a member who never received a share on  the file itself is listed too. A file kept in the legacy project storage always answers with an empty list  rather than with its team. The call only reads. A guest is refused, an anonymous caller is answered with  nothing, and a file id that resolves to nothing is refused as well instead of being reported as missing. For  the readers to offer as mentions inside the editor use `GET api/2.0/files/file/{fileId}/sharedusers`.
         * @summary Get users for document protection
         * @param {FilesApiGetProtectedFileUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         * @throws {RequiredError}
         */
        getProtectedFileUsers(requestParameters: FilesApiGetProtectedFileUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<MentionArrayWrapper> {
            return localVarFp.getProtectedFileUsers(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Resolves a reference that a formula in one spreadsheet makes to another document, and answers with the  descriptor the document service needs in order to read it: the title, the download address, the file type, the  document key of the co-editing session, the web editor link and the signature token. Three ways of naming the  target are tried in order, and the first that resolves wins: `fileKey` as a file id inside the portal named by  `instanceId`, then `path` looked up among the files sitting next to `sourceFileId`, then `link`, short links  included, from which the file id is read out. A link that points outside this portal is not resolved at all  and comes back unchanged as the address to follow. The caller needs read access to the source file and to its  folder, otherwise the call is refused. The call only reads. A reference that resolves to nothing is still  answered with 200, with the error text filled in and the rest of the descriptor empty, so read the error  before using any other field.
         * @summary Resolve a spreadsheet reference
         * @param {FilesApiGetReferenceDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getReferenceData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/
         * @throws {RequiredError}
         */
        getReferenceData(requestParameters: FilesApiGetReferenceDataRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileReferenceWrapper> {
            return localVarFp.getReferenceData(requestParameters.getReferenceDataDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports how far the spreadsheet of submitted form answers has got, the one queued by  `POST api/2.0/files/file/{fileId}/xlsx`. A run is kept per portal, per caller and per form, so this reports  the caller\'s own run and not one started by another member of the room; address it with the id of the original  form rather than with the id of the produced spreadsheet. The answer carries the completion flag, the progress  percentage, the error text when the run failed, and the id, name and address of the produced file once it is  there. Nothing at all comes back when no run is on record for this caller and form, which is the normal answer  before the first run and not an error. The call only reads and is meant to be polled until completion is  reported. Any authenticated caller may ask; whether the report may be built is decided when the run is queued,  not here.
         * @summary Get form report generation status
         * @param {FilesApiGetXlsxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-xlsx/
         * @throws {RequiredError}
         */
        getXlsx(requestParameters: FilesApiGetXlsxRequest, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getXlsx(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Tells whether a file is a PDF form that can be filled out in the portal, and answers with a single boolean.  The check is by content, not by extension: the beginning of the file is read and the answer is `true` only  when it carries the marker the editors write into the forms they produce, so an ordinary PDF, and a PDF form  made in other software, both answer `false`. A file whose name is not a PDF at all answers `false` without  being read. Use it before offering the form-filling operations on a file, because a document that answers  `false` cannot be started for filling. The caller needs read access to the file, and read access is enough - a  member of the room with read-only rights gets the answer; a caller without access to the room is refused and  an anonymous caller is rejected. The operation is read-only and idempotent. It says nothing about the state of  the filling - for that read `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Check the PDF file
         * @param {FilesApiIsFormPDFRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for isFormPDF operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/
         * @throws {RequiredError}
         */
        isFormPDF(requestParameters: FilesApiIsFormPDFRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.isFormPDF(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Locks a file so that nobody else can change it, or releases that lock, and answers with the file as it now  stands. With `lockFile=true` the lock is put on the file and everybody else who is editing it at that moment  is dropped out of the session, the caller excepted; the lock then blocks editing, renaming and deleting for  everybody but the account that set it and the room admins. With `lockFile=false` the lock is removed and a  note about the unlocking is appended to the current version comment, unless the file lives in a connected  third-party storage. Locking a file that is already locked, or unlocking one that is not, changes nothing and  still answers with the file, so the call is idempotent in effect while remaining a mutating one. The caller  needs the right to lock the file, which the room admin, a DocSpace admin acting as room manager and a member  with content-creator rights have; a member without access to the room and a guest are refused, and so is a  file in Trash. A lock set by somebody else can only be released by a room manager.
         * @summary Lock a file
         * @param {FilesApiLockFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         * @throws {RequiredError}
         */
        lockFile(requestParameters: FilesApiLockFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.lockFile(requestParameters.fileId, requestParameters.lockFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Drives the filling of a PDF form through its states, the action deciding which way. Action 2 starts the  filling: in a form-filling room the form is opened for filling, the members whose rights are limited to  filling forms are let in, and a form that has been changed since it was last started has the drafts of its  previous round dropped. Action 0 stops it, which in a virtual data room records who interrupted it and at  which role and notifies the people who held the other roles, and in a form-filling room closes the form for  filling. Action 1 resumes a filling that was stopped, clearing that record. Action 3 puts the form back into  editing, closing it for filling and remembering the version it was edited from. The file has to be a PDF form  lying in a room. Starting needs the right to start the filling, which the room admin and a member with  content-creator rights have, while stopping a filling that somebody else started belongs to room managers  alone, so a content creator is refused with 403 there. The call is mutating; the state that resulted is read  with `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Perform form filling action
         * @param {FilesApiManageFormFillingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for manageFormFilling operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/
         * @throws {RequiredError}
         */
        manageFormFilling(requestParameters: FilesApiManageFormFillingRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.manageFormFilling(requestParameters.fileId, requestParameters.manageFormFillingDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Builds everything an editor client needs to open the file: the document descriptor with its download address,  title, type and document key, the editor configuration with the mode, the caller\'s permissions, the user and  the customization, the callback the editors report back to, and the signature token the document service  validates. `version` opens one entry of the file history and requires access to that history; left out, the  current revision is opened. `view`, `edit` and `fill` say what the client intends to do, and `editorType`  picks the desktop, mobile or embedded layout. For a PDF form the room decides the outcome and may overrule the  request: a form-filling room, a virtual data room, a public room and a user folder each produce their own  mode, and a form opened from the templates folder is read-only and, outside the mobile layout, framed as  embedded. When the portal is over its storage quota the configuration comes back read-only with the exceeded  scope named. In a private room the caller\'s encryption keys are added to the editor configuration. Payment is  not required and an anonymous caller opens through an external link.
         * @summary Get the editor configuration
         * @param {FilesApiOpenEditFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for openEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/
         * @throws {RequiredError}
         */
        openEditFile(requestParameters: FilesApiOpenEditFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigurationWrapper | ThirdPartyConfigurationWrapper> {
            return localVarFp.openEditFile(requestParameters.fileId, requestParameters.version, requestParameters.view, requestParameters.editorType, requestParameters.edit, requestParameters.fill, options).then((request) => request(axios, basePath));
        },
        /**
         * Brings an earlier version of a file back and answers with the editing revisions of the file after the restore.  Nothing is overwritten: the content of the chosen version is stored again as a new version on top of the  history, carrying a comment that says which version it was reverted to, so the intervening versions stay  readable. `url` changes the source - with it the content is fetched from that address, which is how the  document service returns a document with a set of changes rolled back, and the new version records that  instead. Any links that pointed at drafts of the file are dropped, and the file is marked as new for the other  people who can read it. `version` has to name an existing version and is refused with 400 when it is missing  or already the current one. The caller needs the right to edit the history of the file and is otherwise  refused with 403, an anonymous caller included. The call is mutating and not idempotent. A locked file, one in  Trash, one being edited, an encrypted one and one kept in a connected third-party storage are all refused.
         * @summary Restore a file version
         * @param {FilesApiRestoreFileVersionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreFileVersion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/
         * @throws {RequiredError}
         */
        restoreFileVersion(requestParameters: FilesApiRestoreFileVersionRequest, options?: RawAxiosRequestConfig): AxiosPromise<EditHistoryArrayWrapper> {
            return localVarFp.restoreFileVersion(requestParameters.fileId, requestParameters.version, requestParameters.url, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the content of an existing file with an edited copy and answers with the file as it now stands. The  content is the `File` part of a `multipart/form-data` body, and when no such part is sent the raw request body  is saved instead, so an empty body empties the file. The `DownloadUri` query parameter does not supply content  here; it is only read for the extension when `FileExtension` is empty. `fileExtension` names the format of the  content being sent, and when it differs from the stored format the portal converts the content, or keeps it  under a renamed copy when a third-party storage cannot convert it. The caller needs edit access to the file.  The call is mutating and not idempotent: an ordinary call adds a version to the file history, while  `forcesave=true` records an editor autosave, which overwrites the previous autosave revision instead of adding  another version and leaves a running editing session in place. It is refused with 403 when the file is locked,  lies in Trash, or is open in an editing session started by somebody else, and an unknown file id is reported  as missing. For content too large to post in one request use `POST api/2.0/files/file/{fileId}/edit_session`.
         * @summary Save edited file content
         * @param {FilesApiSaveEditingFileFromFormRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         * @throws {RequiredError}
         */
        saveEditingFileFromForm(requestParameters: FilesApiSaveEditingFileFromFormRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.saveEditingFileFromForm(requestParameters.fileId, requestParameters.downloadUri, requestParameters.fileExtension, requestParameters.file, requestParameters.forcesave, options).then((request) => request(axios, basePath));
        },
        /**
         * Converts a file into a PDF, stores that PDF as a new file in the folder named in the body, and answers with  the file that was created. The source is left untouched, so the two files then live side by side. `title`  names the result without an extension - the `.pdf` extension is added to it - and an empty title reuses the  name of the source with its extension replaced. The conversion is done by the document service while the  request waits, so the call takes as long as the document needs and answers with the finished file rather than  with a queue entry. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused; a source file or a destination folder that does not exist is  answered with 404. The call is mutating and not idempotent: each call adds another PDF, its title made unique  when one of that name is already there. The result is marked as new for the room, and for a form the portal  recognises it is stored as a PDF form. To convert in place instead use  `PUT api/2.0/files/file/{fileId}/checkconversion`.
         * @summary Save a file as PDF
         * @param {FilesApiSaveFileAsPdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         * @throws {RequiredError}
         */
        saveFileAsPdf(requestParameters: FilesApiSaveFileAsPdfRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.saveFileAsPdf(requestParameters.id, requestParameters.saveAsPdfRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Assigns the roles of a PDF form to the people who are to fill them in, and starts the filling: the form is  marked as being filled out, the account that called is recorded as the one who started it, everybody named in  a role is notified, and the form becomes visible to the members whose room rights are limited to filling  forms. Each role carries its name, the account that takes it and the sequence number that decides the turn, so  the same sequence means the roles may be filled in parallel and different ones make a queue. Sending an empty  role list resets the filling instead, dropping the assignment altogether. The whole set is replaced on every  call, so the call is idempotent for a given set of roles but not additive. The file has to be a PDF form lying  in a room; the caller needs the right to start the filling of that form, which the room admin and a member  with content-creator rights have, and is otherwise refused with 403. Read back what was stored with  `GET api/2.0/files/file/{fileId}/formroles`.
         * @summary Save form role mapping
         * @param {FilesApiSaveFormRoleMappingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveFormRoleMapping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/
         * @throws {RequiredError}
         */
        saveFormRoleMapping(requestParameters: FilesApiSaveFormRoleMappingRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.saveFormRoleMapping(requestParameters.fileId, requestParameters.saveFormRoleMappingDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns the Custom Filter editing mode of a spreadsheet on or off and answers with the file as it now stands. In  that mode the sorting and filtering one person applies to the sheet is visible to that person alone, so that  several people can work on the same data without moving the rows under each other; with the mode off,  filtering is shared again, as everywhere else. Turning it on also drops everybody else out of the running  editing session, the caller excepted, because the mode has to be established before the sheet is opened. Only  formats that support the mode are accepted; anything else is rejected as an invalid request. The caller needs  the right to use the mode in the room, which the room admin and a DocSpace admin acting as room manager have;  read-only access, a member without access to the room and an anonymous caller are refused. Once the mode has  been switched on by one person, only that person, a room manager or a DocSpace admin can switch it off again.  The call is mutating and, called twice with the same value, changes nothing the second time.
         * @summary Set the Custom Filter editing mode
         * @param {FilesApiSetCustomFilterTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         * @throws {RequiredError}
         */
        setCustomFilterTag(requestParameters: FilesApiSetCustomFilterTagRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.setCustomFilterTag(requestParameters.fileId, requestParameters.customFilterRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Issues the file keys that let the named people open one file of an end-to-end encrypted private room. Each  entry of the body names the account the key is for, the public key it was encrypted with and the encrypted key  itself, so the plain key never reaches the portal: the client encrypts it once per recipient with the public  key that `GET api/2.0/files/file/{fileId}/publickeys` reports for them. The keys of the accounts named in the  request are replaced, and the keys of everybody else are left as they are, which makes the call idempotent for  a given set of recipients while remaining a mutating one; sending no entry for a person does not revoke that  person\'s key. The file has to lie in a private room, and every account named in the request has to have read  access to it. The caller needs read access to the file and the right to create content in that room, which its  members with editing rights and its admins have; a caller without those rights, a file outside a private room  and a file that does not exist are all refused with 403. Read the result back with  `GET api/2.0/files/{fileId}/access`.
         * @summary Set file encryption information
         * @param {FilesApiSetEncryptionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setEncryptionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-encryption-info/
         * @throws {RequiredError}
         */
        setEncryptionInfo(requestParameters: FilesApiSetEncryptionInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.setEncryptionInfo(requestParameters.fileId, requestParameters.accessRequestKeyDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an external link to a file, or changes or revokes an existing one, and answers with the link as it now  stands. `linkId` decides which: an identifier that is not yet in use, the empty one included, creates a link,  while the identifier of an existing link rewrites it, so the whole set of parameters is applied every time and  a field left out is reset rather than kept. `access` carries the rights the link grants, and `access` set to  the value that denies everything revokes the link instead - the answer is then empty, and a revoked primary  link is not recreated by a later read. `title` names the link for the people who manage it, `expirationDate`  limits its lifetime and is refused when it lies more than a few years ahead, `password` asks visitors for a  secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members alone, and  `primary=true` makes it the primary link of the file. The caller needs the right to share the file and is  otherwise refused, an unknown file being answered as not found. The call is mutating.
         * @summary Set a file external link
         * @param {FilesApiSetFileExternalLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link/
         * @throws {RequiredError}
         */
        setFileExternalLink(requestParameters: FilesApiSetFileExternalLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.setFileExternalLink(requestParameters.id, requestParameters.fileLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Puts a file at a given position inside its folder and answers with the file, its `order` reporting where it  now stands. Positions count from 1, and the file that held the wanted position, together with everything after  it, is shifted to make room, so the numbering of a folder stays without gaps; a position beyond the end of the  folder places the file last. The value may also be sent as a dotted path, as in 1.2.3, in which case only  its last segment is read. Ordering is what the manual sorting of a room is built on, and it only means  something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs  edit access to the file, which room managers, content creators and members with editing rights have; a member  acting on somebody else\'s file, a guest and an anonymous caller are refused with 403, and an unknown file is  answered with 404. The call is mutating and idempotent. To move several items in one go use  `PUT api/2.0/files/order`.
         * @summary Set file order
         * @param {FilesApiSetFileOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/
         * @throws {RequiredError}
         */
        setFileOrder(requestParameters: FilesApiSetFileOrderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.setFileOrder(requestParameters.fileId, requestParameters.orderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Puts several files and folders at given positions in one go and answers with the entries that were moved, each  with the position it now holds. Every item of `items` names an entry by its identifier and its kind - a file  or a folder - and the position it is to take, counting from 1; a position may also be sent as a dotted path,  as in 1.2.3, of which only the last segment is read. The items are applied one after another in the order  they are sent, and each of them shifts its neighbours, so the result depends on that order; the whole request  is not one transaction, and a failure in the middle leaves the items before it moved. Every item has to lie in  a room the caller may administer, which the room admin and a DocSpace admin acting as room manager do:  read-only access, a guest and an anonymous caller are refused, and an identifier that matches nothing is  answered as not found. Ordering only means something in rooms whose contents are indexed. The call is  mutating. For a single file use `PUT api/2.0/files/{fileId}/order`.
         * @summary Set order of files
         * @param {FilesApiSetFilesOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         * @throws {RequiredError}
         */
        setFilesOrder(requestParameters: FilesApiSetFilesOrderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryArrayWrapper> {
            return localVarFp.setFilesOrder(requestParameters.ordersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Opens an editing session on the file and answers with the document key that identifies it, the value an editor  client passes to the document service in order to join the co-editing session for that exact revision. The  file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved.  With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of  the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking  the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403  when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an  anonymous caller whose external link does not grant editing are all refused. The call is mutating and not  idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling  that operation with `isFinish=true`.
         * @summary Open an editing session
         * @param {FilesApiStartEditFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         * @throws {RequiredError}
         */
        startEditFile(requestParameters: FilesApiStartEditFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.startEditFile(requestParameters.fileId, requestParameters.startEditRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Marks a PDF form in a form-filling room as open for filling out and answers with the form file. The portal  stores the filling properties on it - the room it belongs to, its title, the account that started it and the  id it keeps as the original form - so that later submissions are collected against this form. The file has to  be a PDF whose parent folder is a form-filling room; anything else is answered unchanged and nothing is  stored. Access follows room membership rather than portal role: a member holding only form-filling access on  the room may not start filling, and a caller with no access to the room at all is refused with 403 unless they  can manage it, which the room owner, a room administrator and a DocSpace administrator can. The call is  mutating and safe to repeat, since a repeat rewrites the same properties. Once a form is started, the answers  submitted for it can be collected into a spreadsheet with `POST api/2.0/files/file/{fileId}/xlsx`.
         * @summary Start filling a form
         * @param {FilesApiStartFillingFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startFillingFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/
         * @throws {RequiredError}
         */
        startFillingFile(requestParameters: FilesApiStartFillingFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.startFillingFile(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets or clears the favorite mark of one file for the calling account: `true` adds the file to the favorites,  `false` takes it out again. The call changes stored state even though it is a GET, so it is not one to issue  speculatively; repeating it with the same value changes nothing further. The mark is personal, no other member  sees it, and the file stays where it is stored. Read access is enough, so a room member with view-only rights  and a guest may call it. The answer only echoes the value that was asked for: an identifier that resolves to  nothing and a file the caller cannot read are skipped without a word, an encrypted file of a private room is  never marked, and the requested value still comes back, so read the outcome from  `GET api/2.0/files/@favorites` instead. A file moved to the Trash keeps its mark and is left out of that  listing until it is restored. To mark several entries at once, or to mark folders, use  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`.
         * @summary Set the file favorite status
         * @param {FilesApiToggleFileFavoriteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for toggleFileFavorite operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite/
         * @throws {RequiredError}
         */
        toggleFileFavorite(requestParameters: FilesApiToggleFileFavoriteRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.toggleFileFavorite(requestParameters.fileId, requestParameters.favorite, options).then((request) => request(axios, basePath));
        },
        /**
         * Keeps an editing session on the file alive, or ends it; an editor client calls it repeatedly while a document  is open. `docKeyForTrack` has to be the document key of the file as it currently stands, the value  `POST api/2.0/files/file/{fileId}/startedit` returned, and a key matching neither the current revision nor the  one being edited is refused with 403. `tabId` names the client tab that holds the session, so several tabs and  several users are tracked on one file independently. Refreshing an entry requires one of the editing rights on  the file - editing, reviewing, commenting, filling or filter editing - so a reader is refused. With  `isFinish=false` the entry is refreshed and the file stays marked as being edited; with `isFinish=true` the  entry for that tab is dropped and the other clients are told that editing has stopped. The call changes the  tracking state and never the document, and repeating it is safe. It answers `key` true with an empty `value`  whenever it succeeds, so a failure arrives as an error rather than as a false key. An anonymous caller is  accepted only through an external share link.
         * @summary Track an editing session
         * @param {FilesApiTrackEditFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for trackEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/
         * @throws {RequiredError}
         */
        trackEditFile(requestParameters: FilesApiTrackEditFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<ItemKeyValuePairBooleanStringWrapper> {
            return localVarFp.trackEditFile(requestParameters.fileId, requestParameters.tabId, requestParameters.docKeyForTrack, requestParameters.isFinish, options).then((request) => request(axios, basePath));
        },
        /**
         * Renames a file, restores one of its versions, or both at once, and answers with the file as it now stands. A  non-empty `title` renames the file, keeping the stored extension whatever the new title says, so a rename  cannot change the format; an empty or missing title leaves the name alone. A `lastVersion` above 0 restores  that version the way `POST api/2.0/files/file/{fileId}/restoreversion` does, storing its content again on top  of the history, while 0 or less leaves the versions untouched and answers with the file as it is - which makes  this operation a read of the file when both fields are left out. The caller needs edit access, and renaming  somebody else\'s file additionally needs room-manager rights: a member or room admin with plain editing access,  read-only access, a guest and a DocSpace admin who is not a member of the room are all refused with 403, while  a content creator may rename a file of their own. The call is mutating. Renaming marks the file as new for  everybody else who can read it.
         * @summary Update a file
         * @param {FilesApiUpdateFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         * @throws {RequiredError}
         */
        updateFile(requestParameters: FilesApiUpdateFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper> {
            return localVarFp.updateFile(requestParameters.fileId, requestParameters.updateFileRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addFileToRecent operation in FilesApi.
 * @export
 * @interface FilesApiAddFileToRecentRequest
 */
export interface FilesApiAddFileToRecentRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiAddFileToRecent
     */
    readonly fileId: number | string
}

/**
 * Request parameters for addTemplates operation in FilesApi.
 * @export
 * @interface FilesApiAddTemplatesRequest
 */
export interface FilesApiAddTemplatesRequest {
    /**
     * 
     * @type {TemplatesRequestDto}
     * @memberof FilesApiAddTemplates
     */
    readonly templatesRequestDto?: TemplatesRequestDto
}

/**
 * Request parameters for changeVersionHistory operation in FilesApi.
 * @export
 * @interface FilesApiChangeVersionHistoryRequest
 */
export interface FilesApiChangeVersionHistoryRequest {
    /**
     * The file whose version history is changed.
     * @type {number | string}
     * @memberof FilesApiChangeVersionHistory
     */
    readonly fileId: number | string

    /**
     * The change to make to the revision group.
     * @type {ChangeHistoryRequest}
     * @memberof FilesApiChangeVersionHistory
     */
    readonly changeHistoryRequest: ChangeHistoryRequest
}

/**
 * Request parameters for checkFillFormDraft operation in FilesApi.
 * @export
 * @interface FilesApiCheckFillFormDraftRequest
 */
export interface FilesApiCheckFillFormDraftRequest {
    /**
     * The identifier of the PDF form to open, as it is returned by a room listing such as  `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well.
     * @type {number | string}
     * @memberof FilesApiCheckFillFormDraft
     */
    readonly fileId: number | string

    /**
     * The revision of the form to open and what the caller intends to do with it.
     * @type {CheckFillFormDraftRequest}
     * @memberof FilesApiCheckFillFormDraft
     */
    readonly checkFillFormDraftRequest: CheckFillFormDraftRequest
}

/**
 * Request parameters for copyFileAs operation in FilesApi.
 * @export
 * @interface FilesApiCopyFileAsRequest
 */
export interface FilesApiCopyFileAsRequest {
    /**
     * The file to copy.
     * @type {number | string}
     * @memberof FilesApiCopyFileAs
     */
    readonly fileId: number | string

    /**
     * The title, the destination and the conversion options of the copy.
     * @type {CopyAsRequest}
     * @memberof FilesApiCopyFileAs
     */
    readonly copyAsRequest: CopyAsRequest
}

/**
 * Request parameters for createEditSession operation in FilesApi.
 * @export
 * @interface FilesApiCreateEditSessionRequest
 */
export interface FilesApiCreateEditSessionRequest {
    /**
     * The file whose content the session will replace; take the id from a folder listing or from the file itself.
     * @type {number | string}
     * @memberof FilesApiCreateEditSession
     */
    readonly fileId: number | string

    /**
     * The number of bytes the new content will take. It is checked against the portal limit for chunked uploads  before the session opens, and a session left at 0 takes the whole content in a single part.
     * @type {number}
     * @memberof FilesApiCreateEditSession
     */
    readonly fileSize?: number
}

/**
 * Request parameters for createFile operation in FilesApi.
 * @export
 * @interface FilesApiCreateFileRequest
 */
export interface FilesApiCreateFileRequest {
    /**
     * The folder the file is created in.
     * @type {number | string}
     * @memberof FilesApiCreateFile
     */
    readonly folderId: number | string

    /**
     * The title of the new file and the source of its content.
     * @type {CreateFileRequest}
     * @memberof FilesApiCreateFile
     */
    readonly createFileRequest: CreateFileRequest
}

/**
 * Request parameters for createFileInMyDocuments operation in FilesApi.
 * @export
 * @interface FilesApiCreateFileInMyDocumentsRequest
 */
export interface FilesApiCreateFileInMyDocumentsRequest {
    /**
     * 
     * @type {CreateFileRequest}
     * @memberof FilesApiCreateFileInMyDocuments
     */
    readonly createFileRequest?: CreateFileRequest
}

/**
 * Request parameters for createFilePrimaryExternalLink operation in FilesApi.
 * @export
 * @interface FilesApiCreateFilePrimaryExternalLinkRequest
 */
export interface FilesApiCreateFilePrimaryExternalLinkRequest {
    /**
     * The file the link points at.
     * @type {number | string}
     * @memberof FilesApiCreateFilePrimaryExternalLink
     */
    readonly id: number | string

    /**
     * The settings of the link. They are applied in full, so a field left out is reset rather than kept.
     * @type {FileLinkRequest}
     * @memberof FilesApiCreateFilePrimaryExternalLink
     */
    readonly fileLinkRequest: FileLinkRequest
}

/**
 * Request parameters for createHtmlFile operation in FilesApi.
 * @export
 * @interface FilesApiCreateHtmlFileRequest
 */
export interface FilesApiCreateHtmlFileRequest {
    /**
     * The folder the file is created in.
     * @type {number | string}
     * @memberof FilesApiCreateHtmlFile
     */
    readonly folderId: number | string

    /**
     * The title, the content and the collision behaviour of the new file.
     * @type {CreateTextOrHtmlFileRequest}
     * @memberof FilesApiCreateHtmlFile
     */
    readonly createTextOrHtmlFileRequest: CreateTextOrHtmlFileRequest
}

/**
 * Request parameters for createHtmlFileInMyDocuments operation in FilesApi.
 * @export
 * @interface FilesApiCreateHtmlFileInMyDocumentsRequest
 */
export interface FilesApiCreateHtmlFileInMyDocumentsRequest {
    /**
     * 
     * @type {CreateTextOrHtmlFileRequest}
     * @memberof FilesApiCreateHtmlFileInMyDocuments
     */
    readonly createTextOrHtmlFileRequest?: CreateTextOrHtmlFileRequest
}

/**
 * Request parameters for createTextFile operation in FilesApi.
 * @export
 * @interface FilesApiCreateTextFileRequest
 */
export interface FilesApiCreateTextFileRequest {
    /**
     * The folder the file is created in.
     * @type {number | string}
     * @memberof FilesApiCreateTextFile
     */
    readonly folderId: number | string

    /**
     * The title, the content and the collision behaviour of the new file.
     * @type {CreateTextOrHtmlFileRequest}
     * @memberof FilesApiCreateTextFile
     */
    readonly createTextOrHtmlFileRequest: CreateTextOrHtmlFileRequest
}

/**
 * Request parameters for createTextFileInMyDocuments operation in FilesApi.
 * @export
 * @interface FilesApiCreateTextFileInMyDocumentsRequest
 */
export interface FilesApiCreateTextFileInMyDocumentsRequest {
    /**
     * 
     * @type {CreateTextOrHtmlFileRequest}
     * @memberof FilesApiCreateTextFileInMyDocuments
     */
    readonly createTextOrHtmlFileRequest?: CreateTextOrHtmlFileRequest
}

/**
 * Request parameters for createThumbnails operation in FilesApi.
 * @export
 * @interface FilesApiCreateThumbnailsRequest
 */
export interface FilesApiCreateThumbnailsRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof FilesApiCreateThumbnails
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for deleteFile operation in FilesApi.
 * @export
 * @interface FilesApiDeleteFileRequest
 */
export interface FilesApiDeleteFileRequest {
    /**
     * The file to delete.
     * @type {number | string}
     * @memberof FilesApiDeleteFile
     */
    readonly fileId: number | string

    /**
     * When and how the file is deleted.
     * @type {DeleteFileRequest}
     * @memberof FilesApiDeleteFile
     */
    readonly deleteFileRequest: DeleteFileRequest

    /**
     * Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list.
     * @type {boolean}
     * @memberof FilesApiDeleteFile
     */
    readonly returnSingleOperation?: boolean
}

/**
 * Request parameters for deleteRecent operation in FilesApi.
 * @export
 * @interface FilesApiDeleteRecentRequest
 */
export interface FilesApiDeleteRecentRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof FilesApiDeleteRecent
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for deleteTemplates operation in FilesApi.
 * @export
 * @interface FilesApiDeleteTemplatesRequest
 */
export interface FilesApiDeleteTemplatesRequest {
    /**
     * The files to take off the template list, by id; this array is the whole request body. Only a file stored in  the portal itself can be a template, which is why an id here is always numeric.
     * @type {Array<number>}
     * @memberof FilesApiDeleteTemplates
     */
    readonly deleteTemplateFilesRequestDto?: Array<number>
}

/**
 * Request parameters for generateXlsx operation in FilesApi.
 * @export
 * @interface FilesApiGenerateXlsxRequest
 */
export interface FilesApiGenerateXlsxRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number}
     * @memberof FilesApiGenerateXlsx
     */
    readonly fileId: number
}

/**
 * Request parameters for getAllFormRoles operation in FilesApi.
 * @export
 * @interface FilesApiGetAllFormRolesRequest
 */
export interface FilesApiGetAllFormRolesRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetAllFormRoles
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getEditDiffUrl operation in FilesApi.
 * @export
 * @interface FilesApiGetEditDiffUrlRequest
 */
export interface FilesApiGetEditDiffUrlRequest {
    /**
     * The file whose changes are read.
     * @type {number | string}
     * @memberof FilesApiGetEditDiffUrl
     */
    readonly fileId: number | string

    /**
     * The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the  current version.
     * @type {number}
     * @memberof FilesApiGetEditDiffUrl
     */
    readonly version?: number
}

/**
 * Request parameters for getEditHistory operation in FilesApi.
 * @export
 * @interface FilesApiGetEditHistoryRequest
 */
export interface FilesApiGetEditHistoryRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetEditHistory
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getEncryptionInfo operation in FilesApi.
 * @export
 * @interface FilesApiGetEncryptionInfoRequest
 */
export interface FilesApiGetEncryptionInfoRequest {
    /**
     * The file whose encryption keys are read. Only a file in an end-to-end encrypted              private room has any.
     * @type {number | string}
     * @memberof FilesApiGetEncryptionInfo
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getFileHistory operation in FilesApi.
 * @export
 * @interface FilesApiGetFileHistoryRequest
 */
export interface FilesApiGetFileHistoryRequest {
    /**
     * The file whose activity log is read; only files stored in the portal itself have one.
     * @type {number}
     * @memberof FilesApiGetFileHistory
     */
    readonly fileId: number

    /**
     * The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps.
     * @type {string}
     * @memberof FilesApiGetFileHistory
     */
    readonly fromDate?: string

    /**
     * The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry.
     * @type {string}
     * @memberof FilesApiGetFileHistory
     */
    readonly toDate?: string

    /**
     * How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body.
     * @type {number}
     * @memberof FilesApiGetFileHistory
     */
    readonly count?: number

    /**
     * How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it.
     * @type {number}
     * @memberof FilesApiGetFileHistory
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getFileInfo operation in FilesApi.
 * @export
 * @interface FilesApiGetFileInfoRequest
 */
export interface FilesApiGetFileInfoRequest {
    /**
     * The file to read.
     * @type {number | string}
     * @memberof FilesApiGetFileInfo
     */
    readonly fileId: number | string

    /**
     * The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the  current version.
     * @type {number}
     * @memberof FilesApiGetFileInfo
     */
    readonly version?: number
}

/**
 * Request parameters for getFileLinks operation in FilesApi.
 * @export
 * @interface FilesApiGetFileLinksRequest
 */
export interface FilesApiGetFileLinksRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetFileLinks
     */
    readonly id: number | string

    /**
     * How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
     * @type {number}
     * @memberof FilesApiGetFileLinks
     */
    readonly count?: number

    /**
     * How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
     * @type {number}
     * @memberof FilesApiGetFileLinks
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getFilePrimaryExternalLink operation in FilesApi.
 * @export
 * @interface FilesApiGetFilePrimaryExternalLinkRequest
 */
export interface FilesApiGetFilePrimaryExternalLinkRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetFilePrimaryExternalLink
     */
    readonly id: number | string

    /**
     * How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
     * @type {number}
     * @memberof FilesApiGetFilePrimaryExternalLink
     */
    readonly count?: number

    /**
     * How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
     * @type {number}
     * @memberof FilesApiGetFilePrimaryExternalLink
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getFileVersionInfo operation in FilesApi.
 * @export
 * @interface FilesApiGetFileVersionInfoRequest
 */
export interface FilesApiGetFileVersionInfoRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetFileVersionInfo
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getFillResult operation in FilesApi.
 * @export
 * @interface FilesApiGetFillResultRequest
 */
export interface FilesApiGetFillResultRequest {
    /**
     * The identifier of the finished filling session, the value the document service reports when the filling ends.  The portal remembers it only for a while afterwards, so an older session is answered as not found.
     * @type {string}
     * @memberof FilesApiGetFillResult
     */
    readonly fillingSessionId?: string
}

/**
 * Request parameters for getFormSubmissions operation in FilesApi.
 * @export
 * @interface FilesApiGetFormSubmissionsRequest
 */
export interface FilesApiGetFormSubmissionsRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number}
     * @memberof FilesApiGetFormSubmissions
     */
    readonly fileId: number
}

/**
 * Request parameters for getPresignedFileUri operation in FilesApi.
 * @export
 * @interface FilesApiGetPresignedFileUriRequest
 */
export interface FilesApiGetPresignedFileUriRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetPresignedFileUri
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getPresignedUri operation in FilesApi.
 * @export
 * @interface FilesApiGetPresignedUriRequest
 */
export interface FilesApiGetPresignedUriRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetPresignedUri
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getProtectedFileUsers operation in FilesApi.
 * @export
 * @interface FilesApiGetProtectedFileUsersRequest
 */
export interface FilesApiGetProtectedFileUsersRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiGetProtectedFileUsers
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getReferenceData operation in FilesApi.
 * @export
 * @interface FilesApiGetReferenceDataRequest
 */
export interface FilesApiGetReferenceDataRequest {
    /**
     * 
     * @type {GetReferenceDataDto}
     * @memberof FilesApiGetReferenceData
     */
    readonly getReferenceDataDto?: GetReferenceDataDto
}

/**
 * Request parameters for getXlsx operation in FilesApi.
 * @export
 * @interface FilesApiGetXlsxRequest
 */
export interface FilesApiGetXlsxRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number}
     * @memberof FilesApiGetXlsx
     */
    readonly fileId: number
}

/**
 * Request parameters for isFormPDF operation in FilesApi.
 * @export
 * @interface FilesApiIsFormPDFRequest
 */
export interface FilesApiIsFormPDFRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiIsFormPDF
     */
    readonly fileId: number | string
}

/**
 * Request parameters for lockFile operation in FilesApi.
 * @export
 * @interface FilesApiLockFileRequest
 */
export interface FilesApiLockFileRequest {
    /**
     * The file to lock or unlock.
     * @type {number | string}
     * @memberof FilesApiLockFile
     */
    readonly fileId: number | string

    /**
     * The lock state to reach.
     * @type {LockFileRequest}
     * @memberof FilesApiLockFile
     */
    readonly lockFileRequest: LockFileRequest
}

/**
 * Request parameters for manageFormFilling operation in FilesApi.
 * @export
 * @interface FilesApiManageFormFillingRequest
 */
export interface FilesApiManageFormFillingRequest {
    /**
     * The form the action applies to. Send the same value as the `formId` of the request body, which is the one the handler reads.
     * @type {string}
     * @memberof FilesApiManageFormFilling
     */
    readonly fileId: string

    /**
     * 
     * @type {ManageFormFillingDto}
     * @memberof FilesApiManageFormFilling
     */
    readonly manageFormFillingDto?: ManageFormFillingDto
}

/**
 * Request parameters for openEditFile operation in FilesApi.
 * @export
 * @interface FilesApiOpenEditFileRequest
 */
export interface FilesApiOpenEditFileRequest {
    /**
     * The file the editor configuration is built for. Take the id from a folder listing such as  `GET api/2.0/files/{folderId}`.
     * @type {number | string}
     * @memberof FilesApiOpenEditFile
     */
    readonly fileId: number | string

    /**
     * Which entry of the file history to open, numbered the way the file versions are. Left out, the current  revision is opened; naming a version requires access to the history of the file.
     * @type {number}
     * @memberof FilesApiOpenEditFile
     */
    readonly version?: number

    /**
     * Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller\'s  rights and the room the file lies in allow.
     * @type {boolean}
     * @memberof FilesApiOpenEditFile
     */
    readonly view?: boolean

    /**
     * Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the  embedded viewer meant to be framed inside another page.
     * @type {EditorType}
     * @memberof FilesApiOpenEditFile
     */
    readonly editorType?: EditorType

    /**
     * Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is  being edited; the room may still turn the request into viewing or into filling.
     * @type {boolean}
     * @memberof FilesApiOpenEditFile
     */
    readonly edit?: boolean

    /**
     * Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a  form.
     * @type {boolean}
     * @memberof FilesApiOpenEditFile
     */
    readonly fill?: boolean
}

/**
 * Request parameters for restoreFileVersion operation in FilesApi.
 * @export
 * @interface FilesApiRestoreFileVersionRequest
 */
export interface FilesApiRestoreFileVersionRequest {
    /**
     * The file whose version is restored.
     * @type {number | string}
     * @memberof FilesApiRestoreFileVersion
     */
    readonly fileId: number | string

    /**
     * The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an  existing version that is not the current one.
     * @type {number}
     * @memberof FilesApiRestoreFileVersion
     */
    readonly version?: number

    /**
     * The address the content of the new version is fetched from instead of the stored version, which is how the  document service hands back a document with a set of changes rolled back; left out, the stored version is  used.
     * @type {string}
     * @memberof FilesApiRestoreFileVersion
     */
    readonly url?: string
}

/**
 * Request parameters for saveEditingFileFromForm operation in FilesApi.
 * @export
 * @interface FilesApiSaveEditingFileFromFormRequest
 */
export interface FilesApiSaveEditingFileFromFormRequest {
    /**
     * The file whose content is replaced. The submitted content is written onto this file, so it has to be the file  the editing session was opened on rather than a copy of it.
     * @type {number | string}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly fileId: number | string

    /**
     * An address the document service saved the document at. This operation does not fetch the content from it - the  content always comes from the request body - and reads it only for the extension, when no file extension is  given.
     * @type {string}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly downloadUri?: string

    /**
     * The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format  the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off  the download address, and failing that the stored format is assumed.
     * @type {string}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly fileExtension?: string

    /**
     * The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw  request body is saved as the content instead, so an empty body empties the file.
     * @type {File}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly file?: File

    /**
     * Records the write as an editor autosave: the file keeps its running editing session and the previous autosave  revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else  has the file open, and adds a version to the history.
     * @type {boolean}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly forcesave?: boolean
}

/**
 * Request parameters for saveFileAsPdf operation in FilesApi.
 * @export
 * @interface FilesApiSaveFileAsPdfRequest
 */
export interface FilesApiSaveFileAsPdfRequest {
    /**
     * The file to convert; it is left untouched.
     * @type {number | string}
     * @memberof FilesApiSaveFileAsPdf
     */
    readonly id: number | string

    /**
     * The destination folder and the name of the PDF.
     * @type {SaveAsPdfRequest | ThirdPartySaveAsPdfRequest}
     * @memberof FilesApiSaveFileAsPdf
     */
    readonly saveAsPdfRequest: SaveAsPdfRequest | ThirdPartySaveAsPdfRequest
}

/**
 * Request parameters for saveFormRoleMapping operation in FilesApi.
 * @export
 * @interface FilesApiSaveFormRoleMappingRequest
 */
export interface FilesApiSaveFormRoleMappingRequest {
    /**
     * The form the role mapping belongs to. Send the same value as the `formId` of the request body, which is the one the handler reads.
     * @type {string}
     * @memberof FilesApiSaveFormRoleMapping
     */
    readonly fileId: string

    /**
     * 
     * @type {SaveFormRoleMappingDto}
     * @memberof FilesApiSaveFormRoleMapping
     */
    readonly saveFormRoleMappingDto?: SaveFormRoleMappingDto
}

/**
 * Request parameters for setCustomFilterTag operation in FilesApi.
 * @export
 * @interface FilesApiSetCustomFilterTagRequest
 */
export interface FilesApiSetCustomFilterTagRequest {
    /**
     * The spreadsheet whose Custom Filter mode is switched.
     * @type {number | string}
     * @memberof FilesApiSetCustomFilterTag
     */
    readonly fileId: number | string

    /**
     * The Custom Filter state to reach.
     * @type {CustomFilterRequest}
     * @memberof FilesApiSetCustomFilterTag
     */
    readonly customFilterRequest: CustomFilterRequest
}

/**
 * Request parameters for setEncryptionInfo operation in FilesApi.
 * @export
 * @interface FilesApiSetEncryptionInfoRequest
 */
export interface FilesApiSetEncryptionInfoRequest {
    /**
     * The file the keys are issued for; it has to lie in a private room.
     * @type {number | string}
     * @memberof FilesApiSetEncryptionInfo
     */
    readonly fileId: number | string

    /**
     * One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of  everybody else are left as they are, so sending no entry for a person does not revoke that person\'s key.
     * @type {Array<AccessRequestKeyDto>}
     * @memberof FilesApiSetEncryptionInfo
     */
    readonly accessRequestKeyDto?: Array<AccessRequestKeyDto>
}

/**
 * Request parameters for setFileExternalLink operation in FilesApi.
 * @export
 * @interface FilesApiSetFileExternalLinkRequest
 */
export interface FilesApiSetFileExternalLinkRequest {
    /**
     * The file the link points at.
     * @type {number | string}
     * @memberof FilesApiSetFileExternalLink
     */
    readonly id: number | string

    /**
     * The settings of the link. They are applied in full, so a field left out is reset rather than kept.
     * @type {FileLinkRequest}
     * @memberof FilesApiSetFileExternalLink
     */
    readonly fileLinkRequest: FileLinkRequest
}

/**
 * Request parameters for setFileOrder operation in FilesApi.
 * @export
 * @interface FilesApiSetFileOrderRequest
 */
export interface FilesApiSetFileOrderRequest {
    /**
     * The file to move.
     * @type {number | string}
     * @memberof FilesApiSetFileOrder
     */
    readonly fileId: number | string

    /**
     * The position the file is to take.
     * @type {OrderRequestDto}
     * @memberof FilesApiSetFileOrder
     */
    readonly orderRequestDto?: OrderRequestDto
}

/**
 * Request parameters for setFilesOrder operation in FilesApi.
 * @export
 * @interface FilesApiSetFilesOrderRequest
 */
export interface FilesApiSetFilesOrderRequest {
    /**
     * 
     * @type {OrdersRequestDto}
     * @memberof FilesApiSetFilesOrder
     */
    readonly ordersRequestDto?: OrdersRequestDto
}

/**
 * Request parameters for startEditFile operation in FilesApi.
 * @export
 * @interface FilesApiStartEditFileRequest
 */
export interface FilesApiStartEditFileRequest {
    /**
     * The file to open the editing session on. The caller needs edit access to it.
     * @type {number | string}
     * @memberof FilesApiStartEditFile
     */
    readonly fileId: number | string

    /**
     * The session options. The body is required even when it only carries the default, so send an empty object to  open an ordinary co-editing session.
     * @type {StartEditRequest}
     * @memberof FilesApiStartEditFile
     */
    readonly startEditRequest: StartEditRequest
}

/**
 * Request parameters for startFillingFile operation in FilesApi.
 * @export
 * @interface FilesApiStartFillingFileRequest
 */
export interface FilesApiStartFillingFileRequest {
    /**
     * The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy  kept elsewhere and not a submitted result.
     * @type {number | string}
     * @memberof FilesApiStartFillingFile
     */
    readonly fileId: number | string
}

/**
 * Request parameters for toggleFileFavorite operation in FilesApi.
 * @export
 * @interface FilesApiToggleFileFavoriteRequest
 */
export interface FilesApiToggleFileFavoriteRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof FilesApiToggleFileFavorite
     */
    readonly fileId: number | string

    /**
     * Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes  it from them. Leaving the field out of the request removes the mark rather than setting it.
     * @type {boolean}
     * @memberof FilesApiToggleFileFavorite
     */
    readonly favorite?: boolean
}

/**
 * Request parameters for trackEditFile operation in FilesApi.
 * @export
 * @interface FilesApiTrackEditFileRequest
 */
export interface FilesApiTrackEditFileRequest {
    /**
     * The file whose editing session is being tracked.
     * @type {number | string}
     * @memberof FilesApiTrackEditFile
     */
    readonly fileId: number | string

    /**
     * The client tab that holds the session, a value the client makes up once and repeats on every call about that  tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value  belongs to a session claimed for a single editor.
     * @type {string}
     * @memberof FilesApiTrackEditFile
     */
    readonly tabId?: string

    /**
     * The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It  is checked against the file\'s current key on every call, so a key left over from an older revision is refused.
     * @type {string}
     * @memberof FilesApiTrackEditFile
     */
    readonly docKeyForTrack?: string

    /**
     * Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is  refreshed and the file stays marked as being edited.
     * @type {boolean}
     * @memberof FilesApiTrackEditFile
     */
    readonly isFinish?: boolean
}

/**
 * Request parameters for updateFile operation in FilesApi.
 * @export
 * @interface FilesApiUpdateFileRequest
 */
export interface FilesApiUpdateFileRequest {
    /**
     * The file to update.
     * @type {number | string}
     * @memberof FilesApiUpdateFile
     */
    readonly fileId: number | string

    /**
     * The new title and the version to restore.
     * @type {UpdateFileRequest}
     * @memberof FilesApiUpdateFile
     */
    readonly updateFileRequest: UpdateFileRequest
}

/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export class FilesApi extends BaseAPI {
    /**
     * Stamps the file as just used by the calling account and puts it at the top of that account\'s Recent section,  then answers with the file as it stands now. The list is personal: no other member sees the change, and the  file itself is untouched. Read access is enough, so a room member with view-only rights and an invited guest  may call it, and a visitor who reaches the file through an external link is recorded against that link. A  caller without read access is refused with 403, and an identifier that resolves to nothing answers 404.  Repeating the call is safe: the file keeps a single entry and only moves back to the top. The section holds  the 1000 newest entries of an account and drops the oldest beyond that on its own; folders never enter it, and  an encrypted file of a private room is answered normally but never recorded. Read the section back with  `GET api/2.0/files/recent` and drop entries with `DELETE api/2.0/files/recent`; whether it is offered among  the sections of `GET api/2.0/files/@root` is decided by `PUT api/2.0/files/displayrecent`.
     * @summary Add a file to Recent
     * @param {FilesFilesApiAddFileToRecentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public addFileToRecent(requestParameters: FilesApiAddFileToRecentRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Add a file to Recent (third-party storage)
     * @param {FilesFilesApiAddFileToRecentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public addFileToRecent(requestParameters: FilesApiAddFileToRecentRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public addFileToRecent(requestParameters: FilesApiAddFileToRecentRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public addFileToRecent(requestParameters: FilesApiAddFileToRecentRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).addFileToRecent(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds the listed files to the personal template list of the calling account, the set the portal offers when a  new document is started from an existing one. The list belongs to the account and no other member sees it.  Every authenticated member type may manage their own list, a guest is refused, and read access to each file is  required. Only formats the portal treats as template documents survive: the accepted extensions arrive in  `extsWebTemplate` of `GET api/2.0/files/settings`, and a file of any other format is dropped silently. Only  numeric ids are accepted, so a file on a connected third-party account cannot become a template. The answer is  `true` whenever the request was understood, which an empty list, an id that does not exist and an unreadable  file all achieve, so it confirms nothing about what was added; no operation of this document reads the list  back. Repeating the call is safe. Use `DELETE api/2.0/files/templates` to drop a file again.
     * @summary Add template files
     * @param {FilesFilesApiAddTemplatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public addTemplates(requestParameters: FilesApiAddTemplatesRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).addTemplates(requestParameters.templatesRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Closes or reopens a revision group in the version history of a file and answers with every stored version of  that file, newest first. With `continueVersion=false` the named version is completed: its content is stored  again as a fresh version that opens a new revision group, so the editing that follows no longer extends the  previous one. With `continueVersion=true` the last revision group is folded back into the group before it, so  the next save continues that revision instead of becoming a version of its own; a file that has only one group  is left as it is. A `version` of 0 means the current version. The caller needs the right to edit the history  of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator  rights have; plain editing access is refused with 403, as are a guest and a member without access to the room.  The call is mutating and not idempotent. A file that is locked, lies in Trash, is open in an editing session  or is kept in a connected third-party storage is refused.
     * @summary Change version history
     * @param {FilesFilesApiChangeVersionHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public changeVersionHistory(requestParameters: FilesApiChangeVersionHistoryRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Change version history (third-party storage)
     * @param {FilesFilesApiChangeVersionHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public changeVersionHistory(requestParameters: FilesApiChangeVersionHistoryRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileArrayWrapper>;
    public changeVersionHistory(requestParameters: FilesApiChangeVersionHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper>;
    public changeVersionHistory(requestParameters: FilesApiChangeVersionHistoryRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).changeVersionHistory(requestParameters.fileId, requestParameters.changeHistoryRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resolves the editor address the caller must open to fill out the given PDF form, and provisions the personal  draft that filling needs. The form has to live in a form-filling room and filling has to be started for it  with `PUT api/2.0/files/file/{fileId}/manageformfilling`; a caller who may edit the form, a form whose filling  has not started, and a request naming `view` or `embedded` as the action are all sent straight to the form  itself. Read access to the form is enough to get an address, fill-forms access is what puts the caller into  the filling flow, and a holder of an external link may call it without signing in, while a caller with neither  a session nor a link key is rejected. In the filling case the call is not read-only: it copies the form into  the room\'s in-progress folder under the caller\'s name, clears the new-item badge, closes the editing session  of the original, and answers with the address of that copy. A repeated call reuses that copy, and a call  naming an existing draft adds a discard notice when that draft is no longer valid. The answer is one URL  string that may carry a `#message/...` fragment the editor renders as a notice. For the full editor  configuration use `GET api/2.0/files/file/{fileId}/openedit`. A form the caller cannot open is refused with  403, and one that does not exist is answered as missing.
     * @summary Open a form draft for filling
     * @param {FilesFilesApiCheckFillFormDraftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public checkFillFormDraft(requestParameters: FilesApiCheckFillFormDraftRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).checkFillFormDraft(requestParameters.fileId, requestParameters.checkFillFormDraftRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Copies one file into another folder under a new title, converting its content when the new title names a  different format, and answers with the copy that was created. The extension of `destTitle` decides what  happens: the same extension as the source copies the bytes as they are, a different one has the document  service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source  file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a  string for a folder in a connected third-party storage; anything else is answered with an empty body and  nothing is copied. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a  format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another  copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.
     * @summary Copy a file
     * @param {FilesFilesApiCopyFileAsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public copyFileAs(requestParameters: FilesApiCopyFileAsRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).copyFileAs(requestParameters.fileId, requestParameters.copyAsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Opens a chunked session that replaces the content of an existing file, which is how WebDAV clients save over a  document. The answer carries the session id the later calls quote, the address of the standalone chunk  handler, the expiry and the reserved size, and nothing is written until the parts reach  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the session is closed with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`, where `folderId` is the folder the file lives in.  Unlike an upload into a folder, the finished content does not become a new version: it overwrites the current  one, and the file loses its encrypted flag and its stored conversion result in the process. The caller must be  allowed to edit the file, as the owner, a room manager and a member invited with editing rights are; a reader  and a guest get 403. A file that does not exist is answered as missing, and a payload above the portal limit  for chunked uploads is refused before the session is created.
     * @summary Create the editing session
     * @param {FilesFilesApiCreateEditSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createEditSession(requestParameters: FilesApiCreateEditSessionRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResultWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Create the editing session (third-party storage)
     * @param {FilesFilesApiCreateEditSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createEditSession(requestParameters: FilesApiCreateEditSessionRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyChunkedUploadSessionResultWrapper>;
    public createEditSession(requestParameters: FilesApiCreateEditSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResultWrapper | ThirdPartyChunkedUploadSessionResultWrapper>;
    public createEditSession(requestParameters: FilesApiCreateEditSessionRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createEditSession(requestParameters.fileId, requestParameters.fileSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a file in the folder named in the route and answers with the stored file. The extension in the title  decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the  portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension  and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title  verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId`  copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a  number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The caller needs the right  to create files in the folder, and the room roots, Archive and the template sections are refused even to an  admin. The call is mutating and not idempotent. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/file`.
     * @summary Create a file
     * @param {FilesFilesApiCreateFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFile(requestParameters: FilesApiCreateFileRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Create a file (third-party storage)
     * @param {FilesFilesApiCreateFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFile(requestParameters: FilesApiCreateFileRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public createFile(requestParameters: FilesApiCreateFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public createFile(requestParameters: FilesApiCreateFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFile(requestParameters.folderId, requestParameters.createFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a file in the caller\'s own My documents section and answers with the stored file. The extension in  the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to  the portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown  extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the  title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order:  `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read  - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The call is mutating and  not idempotent: each call adds another file. A guest has no My documents section of their own, so a guest  cannot use this operation at all, and a template the caller cannot read is refused. To create a file in a  room or any other folder use  `POST api/2.0/files/{folderId}/file`.
     * @summary Create a file in My documents
     * @param {FilesFilesApiCreateFileInMyDocumentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFileInMyDocuments(requestParameters: FilesApiCreateFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFileInMyDocuments(requestParameters.createFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Answers with the primary external link of a file, creating it on the first call and returning the one that  already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does  not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/file/{id}/links`.  The parameters therefore only shape the link at the moment it is born - `access` its rights, `expirationDate`  its lifetime, which for a file in a personal section is unlimited here rather than the default of a few days,  `internal` whether only signed-in members may follow it, `denyDownload` whether the content may only be  viewed, and `password` a secret to be asked for. A PDF form gets the rights it needs for filling out whatever  was asked for, and a form in a form-filling room is answered with the link of the room instead. The caller  needs the right to share the file and is otherwise refused with 403; a link that was deliberately revoked is  not recreated but answered with 404. Read the address from `sharedTo.shareLink`.
     * @summary Create the file primary external link
     * @param {FilesFilesApiCreateFilePrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFilePrimaryExternalLink(requestParameters: FilesApiCreateFilePrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFilePrimaryExternalLink(requestParameters.id, requestParameters.fileLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an HTML file in the folder named in the route out of the markup passed as the content, and answers  with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a  request carrying no content is rejected as an invalid request. `createNewIfExist` acts the other way round  than its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The caller needs the right to create files in the folder and is otherwise  refused with 403. The call is mutating. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/html`.
     * @summary Create an HTML file
     * @param {FilesFilesApiCreateHtmlFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createHtmlFile(requestParameters: FilesApiCreateHtmlFileRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Create an HTML file (third-party storage)
     * @param {FilesFilesApiCreateHtmlFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createHtmlFile(requestParameters: FilesApiCreateHtmlFileRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public createHtmlFile(requestParameters: FilesApiCreateHtmlFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public createHtmlFile(requestParameters: FilesApiCreateHtmlFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createHtmlFile(requestParameters.folderId, requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an HTML file in the caller\'s own My documents section out of the markup passed as the content, and  answers with the stored file. The `.html` extension is added to the title unless the title already ends with  it, and a request carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than  its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The call is mutating: repeating it with `true` keeps a single file and grows  its history, repeating it with `false` fills the section with numbered copies. A guest has no My documents  section and is refused. To create the file in a room or another folder use  `POST api/2.0/files/{folderId}/html`.
     * @summary Create an HTML file in My documents
     * @param {FilesFilesApiCreateHtmlFileInMyDocumentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createHtmlFileInMyDocuments(requestParameters: FilesApiCreateHtmlFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createHtmlFileInMyDocuments(requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a text file in the folder named in the route out of the text passed as the content, and answers with  the stored file. The extension follows the content rather than the request: `.txt` normally, but `.html` as  soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends up as an  HTML file; the extension is added to the title unless the title already ends with it. A request carrying no  content is rejected as an invalid request. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in Notes  (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a new file  appears beside it instead. The caller needs the right to create files in the folder. The call is mutating. To  create the file in the caller\'s own section use `POST api/2.0/files/@my/text`.
     * @summary Create a text file
     * @param {FilesFilesApiCreateTextFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createTextFile(requestParameters: FilesApiCreateTextFileRequest & { folderId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Create a text file (third-party storage)
     * @param {FilesFilesApiCreateTextFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createTextFile(requestParameters: FilesApiCreateTextFileRequest & { folderId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public createTextFile(requestParameters: FilesApiCreateTextFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public createTextFile(requestParameters: FilesApiCreateTextFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createTextFile(requestParameters.folderId, requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a text file in the caller\'s own My documents section out of the text passed as the content, and  answers with the stored file. The extension follows the content rather than the request: `.txt` normally, but  `.html` as soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends  up as an HTML file; the extension is added to the title unless the title already ends with it. A request  carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in  Notes (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a  new file appears beside it instead. The call is mutating. A guest has no My documents section and is  refused. To create the file in a room or another folder use `POST api/2.0/files/{folderId}/text`.
     * @summary Create a text file in My documents
     * @param {FilesFilesApiCreateTextFileInMyDocumentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createTextFileInMyDocuments(requestParameters: FilesApiCreateTextFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createTextFileInMyDocuments(requestParameters.createTextOrHtmlFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Asks the portal to build preview thumbnails for the listed files, and answers at once with the same file ids  that were sent. That answer echoes the request and does not confirm that anything was queued: the work is  handed over to a background worker, and a failure on the way there is written to the log rather than reported  to the caller. Only the file ids of the body are read - the folder ids are ignored, and a request naming no  files at all is answered with an empty list. Ids of files kept in a connected third-party storage are dropped  as well, because the worker handles portal storage only. Access to the individual files is not checked here;  the caller has to be signed in or to reach the portal through an external share link, and an anonymous caller  without such a link is refused. The call is asynchronous and safe to repeat. The thumbnails themselves are not  in the answer: read `thumbnailStatus` and `thumbnailUrl` of the file, for instance with  `GET api/2.0/files/file/{fileId}`, until the status reports the thumbnail as created.
     * @summary Queue file thumbnails
     * @param {FilesFilesApiCreateThumbnailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createThumbnails(requestParameters: FilesApiCreateThumbnailsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createThumbnails(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues the deletion of one file and answers with the caller\'s file operations, the one just created among  them. The file is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation  reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the file is moved  to Trash, from where it can be restored; `immediately=true` deletes it for good instead, and inside a room,  where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing  session on the file has ended, so a file somebody is working on is not pulled away.  `returnSingleOperation=true` narrows the answer to this deletion instead of listing every active operation of  the caller. The caller needs the right to delete the file, which the room admin, a DocSpace admin acting as  room manager and a content creator acting on their own file have; editing access alone, read access, a guest  and a member without access to the room are all refused. The call is destructive. To delete several items at  once use `PUT api/2.0/files/fileops/delete`.
     * @summary Delete a file
     * @param {FilesFilesApiDeleteFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteFile(requestParameters: FilesApiDeleteFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteFile(requestParameters.fileId, requestParameters.deleteFileRequest, requestParameters.returnSingleOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the listed entries from the Recent section of the calling account, the history of opened files that  `GET api/2.0/files/recent` returns. Nothing is deleted from storage and no other member\'s history is touched;  access to the entries is not checked at all, so a file the caller can no longer read can still be cleared from  their own history. Only numeric file ids are honoured, so a file on a connected third-party account cannot be  cleared this way, and folder ids are accepted but change nothing because the section lists files only. The  answer carries no body and reports nothing about how many entries were found: an empty request and an id that  was never in the section are accepted alike. Repeating the call is safe, but an entry returns the next time  the file is opened or `POST api/2.0/files/file/{fileId}/recent` is called for it. To hide the whole section  instead, call `PUT api/2.0/files/displayrecent`.
     * @summary Delete recent files
     * @param {FilesFilesApiDeleteRecentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteRecent(requestParameters: FilesApiDeleteRecentRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteRecent(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes the listed files off the personal template list of the calling account, leaving the files themselves  untouched: only the template mark is dropped. The body of this request is a bare JSON array of numeric file  ids rather than an object with a field, and a request that carries no array at all is rejected as an invalid  request. Every authenticated member type may manage their own list, a guest is refused, and read access to a  file is required for its mark to be dropped. The answer is `true` whenever the array was understood, which an  empty array, an id that does not exist and a file that was never a template all achieve, so it confirms  nothing about what was removed. Repeating the call is safe. Use `POST api/2.0/files/templates` to put a file  back on the list; that operation expects an object with a `fileIds` field, so the two bodies are not  interchangeable.
     * @summary Delete template files
     * @param {FilesFilesApiDeleteTemplatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteTemplates(requestParameters: FilesApiDeleteTemplatesRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteTemplates(requestParameters.deleteTemplateFilesRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues generation of the spreadsheet that collects every answer submitted for a PDF form in a form-filling  room, and answers at once with the queued task, the original form and a flag telling whether the report file  is being created now or an existing one refreshed in place. Either identifier works: the id of the original  form, or the id of an XLSX or CSV result file inside the room\'s Complete folder, from which the portal  resolves the form behind it. The form must already have been opened for filling with  `PUT api/2.0/files/file/{fileId}/startfilling` and must still live in the form-filling room that started it.  The caller must be allowed to update that form\'s report. The call is mutating and asynchronous: the  spreadsheet is not ready when the response arrives, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the  original form\'s id until the task reports completion, then take the produced file from the task. Calling it  again while a run is still going answers with that run instead of starting a second one.
     * @summary Generate a form answers report
     * @param {FilesFilesApiGenerateXlsxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public generateXlsx(requestParameters: FilesApiGenerateXlsxRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).generateXlsx(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the roles of a PDF form together with the state each of them is in, which is how a client shows who is  expected to fill the form next. Every entry carries the name of the role, the account holding it, the sequence  number that decides the turn and a status: the roles of earlier turns are reported as complete, those of later  turns as waiting, and the role whose turn it is as either yours to fill or already in progress, depending on  whether that person has opened the form; when the filling has been stopped, the role it was interrupted at is  reported as stopped instead. A form whose filling was never started answers with an empty list. The file has  to be a PDF form, or the completed copy of one, and anything else is refused. Read access to the form is  enough, so every member of the room sees the roles, while a caller without access to the room and a guest  outside it are refused with 403 and an unknown file is answered with 404. The operation is read-only. The  assignment itself is written by `POST api/2.0/files/file/{fileId}/formrolemapping`.
     * @summary Get form roles
     * @param {FilesFilesApiGetAllFormRolesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getAllFormRoles(requestParameters: FilesApiGetAllFormRolesRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getAllFormRoles(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Answers with everything an editor needs in order to show what changed in one version of a file: the address of  the version itself, its document key and format, the address of the recorded changes, the same trio for the  version it is compared against, and a token that signs the whole answer for the document service. `version`  picks the version, and 0, the default, means the current one. `changesUrl` and `previous` are filled in only  when the portal has stored the changes of that version, which is the case for versions written by an editing  session; for a version uploaded as a whole they stay empty and only the file itself can be shown. The  addresses are meant for the document service and carry their own time-limited keys. The caller needs the right  to read the history of the file, which editing access and above grant: read-only access, commenting access, a  guest and an anonymous caller are all refused, as is a file kept in a connected third-party storage. The  operation is read-only. For the list of versions themselves use  `GET api/2.0/files/file/{fileId}/edit/history`.
     * @summary Get changes URL
     * @param {FilesFilesApiGetEditDiffUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getEditDiffUrl(requestParameters: FilesApiGetEditDiffUrlRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getEditDiffUrl(requestParameters.fileId, requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the editing revisions of a file, oldest first, as the document service understands them: each entry  carries the version and the revision group it belongs to, the account that saved it, when it was saved, the  comment left on it, the document key of that revision and, where the portal stored them, the changes it  introduced. Only the revisions a person saved are listed - the autosaves an editing session writes in between  are left out, which is what separates this list from the plain version list of  `GET api/2.0/files/file/{fileId}/history`. The caller needs the right to read the history of the file, which  editing access and above grant: commenting access, read-only access, a guest, a member without access to the  room and an anonymous caller are all refused, and so is a file kept in a connected third-party storage, which  keeps no history in the portal. The operation is read-only. Take one entry to  `GET api/2.0/files/file/{fileId}/edit/diff` to show its changes, or to  `POST api/2.0/files/file/{fileId}/restoreversion` to bring it back.
     * @summary Get version history
     * @param {FilesFilesApiGetEditHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getEditHistory(requestParameters: FilesApiGetEditHistoryRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getEditHistory(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns what the caller needs in order to decrypt one file of an end-to-end encrypted private room: `userKeys`  holds the key pairs of the calling account, the private half of each of them encrypted with that person\'s own  password, and `fileKeys` holds the file keys that were issued to this account for this file, each naming the  public key it was encrypted for. Only the keys of the calling account are ever returned, never those of the  other people in the room. An account that holds no key pair yet, and a file no key was issued for, answer with  empty lists rather than with an error, so an empty `fileKeys` means the caller cannot open that file rather  than that the file is unencrypted. The caller needs read access to the file; a caller without it, and a file  that does not exist, are both refused with 403. The operation is read-only. Keys are issued by  `PUT api/2.0/files/{fileId}/access`, and the personal key pairs are managed under `api/2.0/privacyroom/keys`.
     * @summary Get file encryption information
     * @param {FilesFilesApiGetEncryptionInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getEncryptionInfo(requestParameters: FilesApiGetEncryptionInfoRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getEncryptionInfo(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the activity log of a single file - who renamed, moved, shared, converted, locked or edited it, and  when - as the portal recorded it in its audit trail. Entries arrive newest first, and the events that belong  to one action are folded into a single entry whose `related` list carries the rest of them. `fromDate` and  `toDate` are read in the portal\'s time zone and narrow the range; `startIndex` and `count` page through the  result, and the number of matching entries is reported in the response headers rather than in the body. The  caller needs read access to the file, so a member of the room it lies in, the admin of that room and a  DocSpace admin all see the same log, while a caller without access to the room is refused with 403 and an  unknown id is answered with 404. The operation is read-only. Only files stored in the portal itself have a log  here - a file kept in a connected third-party storage has none. For the log of a folder or a room use  `GET api/2.0/files/folder/{folderId}/log`.
     * @summary Get file history
     * @param {FilesFilesApiGetFileHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileHistory(requestParameters: FilesApiGetFileHistoryRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFileHistory(requestParameters.fileId, requestParameters.fromDate, requestParameters.toDate, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one file as the portal stores it, together with the state it has for the caller: the title, the folder  it lies in, the size, the current version and revision group, the addresses for viewing and editing it, the  actions the caller is allowed to perform on it, the sharing rights it was reached through, and the thumbnail  state. `version` picks an older version instead of the current one; the default of -1 means the current  version. When the file belongs to another person\'s own section and the caller cannot read the folder holding  it, the answer reports the Shared with me section as its folder, so that a client can show it in a place the  caller can actually open. The caller needs read access to the file, which any member of the room it lies in  has; a caller without access to the room is refused and an anonymous caller without an external share link is  rejected. The operation is read-only. For every version at once use `GET api/2.0/files/file/{fileId}/history`.
     * @summary Get file information
     * @param {FilesFilesApiGetFileInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileInfo(requestParameters: FilesApiGetFileInfoRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Get file information (third-party storage)
     * @param {FilesFilesApiGetFileInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileInfo(requestParameters: FilesApiGetFileInfoRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public getFileInfo(requestParameters: FilesApiGetFileInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public getFileInfo(requestParameters: FilesApiGetFileInfoRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFileInfo(requestParameters.fileId, requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the external links of a file, each with its identifier, title, address, rights, expiration date and  download restriction. `startIndex` and `count` page through the list, and the total number of links is  reported in the response headers rather than in the body. A file that has never been shared by link answers  with an empty list; the primary link is part of this list once it exists, and it is the only one that is  created on demand, by `GET api/2.0/files/file/{id}/link`. For a PDF form kept in a form-filling room the link  of the room is appended to the answer, because that is the address through which the form is filled out. The  caller needs the right to share the file, which its creator, the room admin and a DocSpace admin acting as  room manager have; a caller without access to the file is refused and an anonymous caller is rejected. The  operation is read-only. Take an identifier from here to `PUT api/2.0/files/file/{id}/links` to change or  remove that link.
     * @summary Get file external links
     * @param {FilesFilesApiGetFileLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileLinks(requestParameters: FilesApiGetFileLinksRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFileLinks(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Answers with the primary external link of a file - the one the Copy link action of a client hands out - with  its address in `sharedTo.shareLink`, its rights in `access`, and its expiration date, password flag and  download restriction beside them. The link is created on the first read if the file has none, with read  rights, no password and no expiry, so this operation mutates on that first call and is a plain read  afterwards; repeated calls answer with the same link identifier. A PDF form in a form-filling room is answered  with the link of that room, carried over to the form. The caller needs the right to share the file, which its  creator, the room admin and a DocSpace admin acting as room manager have; a caller without access to the file  is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is  answered with 404 rather than being recreated. The custom links of the same file, the primary one excepted,  are listed by `GET api/2.0/files/file/{id}/links`.
     * @summary Get the file primary external link
     * @param {FilesFilesApiGetFilePrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFilePrimaryExternalLink(requestParameters: FilesApiGetFilePrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFilePrimaryExternalLink(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns every stored version of a file, newest first, each of them shaped like the file itself - the version  and the revision group it belongs to, the size, the comment saved with it, the addresses for viewing it, and  the thumbnail and lock state. Unlike the editing revisions of `GET api/2.0/files/file/{fileId}/edit/history`,  this list also holds the autosave revisions an editing session writes, so it is the fuller of the two, and it  is the shape a client already knows how to render. The caller needs the right to read the history of the file,  which is a stricter rule than reading the file: in a room only its managers and content creators may read the  history, and in a personal section editing access is enough, so a member with read access to somebody else\'s  file, and even a DocSpace admin in that position, are refused, as is an anonymous caller. The operation is  read-only. To restore one of the versions use `POST api/2.0/files/file/{fileId}/restoreversion`, and to close  or reopen a revision group `PUT api/2.0/files/file/{fileId}/history`.
     * @summary Get file versions
     * @param {FilesFilesApiGetFileVersionInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileVersionInfo(requestParameters: FilesApiGetFileVersionInfoRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Get file versions (third-party storage)
     * @param {FilesFilesApiGetFileVersionInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileVersionInfo(requestParameters: FilesApiGetFileVersionInfoRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileArrayWrapper>;
    public getFileVersionInfo(requestParameters: FilesApiGetFileVersionInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileArrayWrapper | ThirdPartyFileArrayWrapper>;
    public getFileVersionInfo(requestParameters: FilesApiGetFileVersionInfoRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFileVersionInfo(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Answers with the outcome of one completed form-filling session: the filled copy of the form, the original form  it was made from, the number this submission was given inside the room, the identifier of the room and the  account that started the filling. `isRoomMember` says whether the caller is a member of that room, which a  client uses to decide whether the room can be offered for opening. The session is named by `fillingSessionId`,  the value the document service reports when the filling ends; the portal remembers it only for a while after  that, so a session that was never completed, one already forgotten and a value of the wrong shape are all  answered as not found, while omitting the parameter is rejected as an invalid request. The operation is  read-only and needs no sign-in: it is meant for the caller that has just finished filling the form through an  external link, and the session identifier is the only secret involved. The filled copy itself is an ordinary  file - read it with `GET api/2.0/files/file/{fileId}`.
     * @summary Get form-filling result
     * @param {FilesFilesApiGetFillResultRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFillResult(requestParameters: FilesApiGetFillResultRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFillResult(requestParameters.fillingSessionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns everything that has been submitted against one PDF form: `metadata` describes the fields of the form,  in the order they are laid out, and `submissions` carries one record per completed copy, each of them holding  the values that were entered. It is the data behind the results table a client shows for a form, and the same  data the spreadsheet report of `POST api/2.0/files/file/{fileId}/xlsx` is built from. Only the submissions of  the version that is currently being filled are reported. The form has to be a PDF form whose filling has been  started and which is still the original form of its room; a form that was never started, a copy of a form and  a form whose room has been moved away are all refused. Read access to the form is enough, so every member of  the room can read the results, while a caller without access to it is refused with 403. The operation is  read-only. The list of roles and whose turn it is comes from `GET api/2.0/files/file/{fileId}/formroles`  instead.
     * @summary Get form submission results
     * @param {FilesFilesApiGetFormSubmissionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFormSubmissions(requestParameters: FilesApiGetFormSubmissionsRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFormSubmissions(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a direct download address for the current content of the file together with the signature token that  the document service validates, which is what the portal hands over when the editors have to fetch the  document themselves. The address points at the portal\'s file stream endpoint and is rewritten to the host the  document service can reach, so on a deployment where the editors sit behind a private address it is not the  address a browser should follow. The answer also carries the extension of the stored document, leading dot  included. The caller needs read access to the file, and an unknown file id is reported as missing. The call  only reads, and each call mints a fresh address and token rather than reusing the previous one, so the value  is worth requesting again once a token has expired. For a link meant for a person, a plain address with no  token to put behind a download button, use `GET api/2.0/files/file/{fileId}/presigneduri` instead.
     * @summary Get a signed download address
     * @param {FilesFilesApiGetPresignedFileUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getPresignedFileUri(requestParameters: FilesApiGetPresignedFileUriRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getPresignedFileUri(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Builds a download address for the current version of a file and answers with it as a plain string. The address  points at the portal\'s own file handler and carries the file identifier, the version it was built for and a  time-limited authentication key, so it can be handed to a downloader that cannot sign in to the portal itself;  it stops working once that key has expired, and it keeps naming the version that was current when it was built  rather than following later edits. The caller needs read access to the file: a member of the room it lies in  gets an address, a caller without access to the room is refused, an unknown identifier is answered as not  found and an anonymous caller is rejected. The operation is read-only and safe to repeat, though every call  mints a new key. Nothing is downloaded here - follow the address to fetch the bytes. For the variant the  document service signs, which comes back as an object with the file type and a token, use  `GET api/2.0/files/file/{fileId}/presigned`.
     * @summary Get file download link
     * @param {FilesFilesApiGetPresignedUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getPresignedUri(requestParameters: FilesApiGetPresignedUriRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getPresignedUri(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the users the file is shared with, which is what a client offers when the author protects a document and  picks who may still edit it. The list is built from the whole access list of the file: every entry that is not  an explicit denial, with groups expanded into their members, the caller themselves and deleted accounts left  out, ordered by display name. Access inherited from the room counts, so a member who never received a share on  the file itself is listed too. A file kept in the legacy project storage always answers with an empty list  rather than with its team. The call only reads. A guest is refused, an anonymous caller is answered with  nothing, and a file id that resolves to nothing is refused as well instead of being reported as missing. For  the readers to offer as mentions inside the editor use `GET api/2.0/files/file/{fileId}/sharedusers`.
     * @summary Get users for document protection
     * @param {FilesFilesApiGetProtectedFileUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getProtectedFileUsers(requestParameters: FilesApiGetProtectedFileUsersRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getProtectedFileUsers(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resolves a reference that a formula in one spreadsheet makes to another document, and answers with the  descriptor the document service needs in order to read it: the title, the download address, the file type, the  document key of the co-editing session, the web editor link and the signature token. Three ways of naming the  target are tried in order, and the first that resolves wins: `fileKey` as a file id inside the portal named by  `instanceId`, then `path` looked up among the files sitting next to `sourceFileId`, then `link`, short links  included, from which the file id is read out. A link that points outside this portal is not resolved at all  and comes back unchanged as the address to follow. The caller needs read access to the source file and to its  folder, otherwise the call is refused. The call only reads. A reference that resolves to nothing is still  answered with 200, with the error text filled in and the rest of the descriptor empty, so read the error  before using any other field.
     * @summary Resolve a spreadsheet reference
     * @param {FilesFilesApiGetReferenceDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getReferenceData(requestParameters: FilesApiGetReferenceDataRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getReferenceData(requestParameters.getReferenceDataDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports how far the spreadsheet of submitted form answers has got, the one queued by  `POST api/2.0/files/file/{fileId}/xlsx`. A run is kept per portal, per caller and per form, so this reports  the caller\'s own run and not one started by another member of the room; address it with the id of the original  form rather than with the id of the produced spreadsheet. The answer carries the completion flag, the progress  percentage, the error text when the run failed, and the id, name and address of the produced file once it is  there. Nothing at all comes back when no run is on record for this caller and form, which is the normal answer  before the first run and not an error. The call only reads and is meant to be polled until completion is  reported. Any authenticated caller may ask; whether the report may be built is decided when the run is queued,  not here.
     * @summary Get form report generation status
     * @param {FilesFilesApiGetXlsxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getXlsx(requestParameters: FilesApiGetXlsxRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getXlsx(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tells whether a file is a PDF form that can be filled out in the portal, and answers with a single boolean.  The check is by content, not by extension: the beginning of the file is read and the answer is `true` only  when it carries the marker the editors write into the forms they produce, so an ordinary PDF, and a PDF form  made in other software, both answer `false`. A file whose name is not a PDF at all answers `false` without  being read. Use it before offering the form-filling operations on a file, because a document that answers  `false` cannot be started for filling. The caller needs read access to the file, and read access is enough - a  member of the room with read-only rights gets the answer; a caller without access to the room is refused and  an anonymous caller is rejected. The operation is read-only and idempotent. It says nothing about the state of  the filling - for that read `GET api/2.0/files/file/{fileId}/formroles`.
     * @summary Check the PDF file
     * @param {FilesFilesApiIsFormPDFRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public isFormPDF(requestParameters: FilesApiIsFormPDFRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).isFormPDF(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Locks a file so that nobody else can change it, or releases that lock, and answers with the file as it now  stands. With `lockFile=true` the lock is put on the file and everybody else who is editing it at that moment  is dropped out of the session, the caller excepted; the lock then blocks editing, renaming and deleting for  everybody but the account that set it and the room admins. With `lockFile=false` the lock is removed and a  note about the unlocking is appended to the current version comment, unless the file lives in a connected  third-party storage. Locking a file that is already locked, or unlocking one that is not, changes nothing and  still answers with the file, so the call is idempotent in effect while remaining a mutating one. The caller  needs the right to lock the file, which the room admin, a DocSpace admin acting as room manager and a member  with content-creator rights have; a member without access to the room and a guest are refused, and so is a  file in Trash. A lock set by somebody else can only be released by a room manager.
     * @summary Lock a file
     * @param {FilesFilesApiLockFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public lockFile(requestParameters: FilesApiLockFileRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Lock a file (third-party storage)
     * @param {FilesFilesApiLockFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public lockFile(requestParameters: FilesApiLockFileRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public lockFile(requestParameters: FilesApiLockFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public lockFile(requestParameters: FilesApiLockFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).lockFile(requestParameters.fileId, requestParameters.lockFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Drives the filling of a PDF form through its states, the action deciding which way. Action 2 starts the  filling: in a form-filling room the form is opened for filling, the members whose rights are limited to  filling forms are let in, and a form that has been changed since it was last started has the drafts of its  previous round dropped. Action 0 stops it, which in a virtual data room records who interrupted it and at  which role and notifies the people who held the other roles, and in a form-filling room closes the form for  filling. Action 1 resumes a filling that was stopped, clearing that record. Action 3 puts the form back into  editing, closing it for filling and remembering the version it was edited from. The file has to be a PDF form  lying in a room. Starting needs the right to start the filling, which the room admin and a member with  content-creator rights have, while stopping a filling that somebody else started belongs to room managers  alone, so a content creator is refused with 403 there. The call is mutating; the state that resulted is read  with `GET api/2.0/files/file/{fileId}/formroles`.
     * @summary Perform form filling action
     * @param {FilesFilesApiManageFormFillingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public manageFormFilling(requestParameters: FilesApiManageFormFillingRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).manageFormFilling(requestParameters.fileId, requestParameters.manageFormFillingDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Builds everything an editor client needs to open the file: the document descriptor with its download address,  title, type and document key, the editor configuration with the mode, the caller\'s permissions, the user and  the customization, the callback the editors report back to, and the signature token the document service  validates. `version` opens one entry of the file history and requires access to that history; left out, the  current revision is opened. `view`, `edit` and `fill` say what the client intends to do, and `editorType`  picks the desktop, mobile or embedded layout. For a PDF form the room decides the outcome and may overrule the  request: a form-filling room, a virtual data room, a public room and a user folder each produce their own  mode, and a form opened from the templates folder is read-only and, outside the mobile layout, framed as  embedded. When the portal is over its storage quota the configuration comes back read-only with the exceeded  scope named. In a private room the caller\'s encryption keys are added to the editor configuration. Payment is  not required and an anonymous caller opens through an external link.
     * @summary Get the editor configuration
     * @param {FilesFilesApiOpenEditFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public openEditFile(requestParameters: FilesApiOpenEditFileRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<ConfigurationWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Get the editor configuration (third-party storage)
     * @param {FilesFilesApiOpenEditFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public openEditFile(requestParameters: FilesApiOpenEditFileRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyConfigurationWrapper>;
    public openEditFile(requestParameters: FilesApiOpenEditFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigurationWrapper | ThirdPartyConfigurationWrapper>;
    public openEditFile(requestParameters: FilesApiOpenEditFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).openEditFile(requestParameters.fileId, requestParameters.version, requestParameters.view, requestParameters.editorType, requestParameters.edit, requestParameters.fill, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Brings an earlier version of a file back and answers with the editing revisions of the file after the restore.  Nothing is overwritten: the content of the chosen version is stored again as a new version on top of the  history, carrying a comment that says which version it was reverted to, so the intervening versions stay  readable. `url` changes the source - with it the content is fetched from that address, which is how the  document service returns a document with a set of changes rolled back, and the new version records that  instead. Any links that pointed at drafts of the file are dropped, and the file is marked as new for the other  people who can read it. `version` has to name an existing version and is refused with 400 when it is missing  or already the current one. The caller needs the right to edit the history of the file and is otherwise  refused with 403, an anonymous caller included. The call is mutating and not idempotent. A locked file, one in  Trash, one being edited, an encrypted one and one kept in a connected third-party storage are all refused.
     * @summary Restore a file version
     * @param {FilesFilesApiRestoreFileVersionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public restoreFileVersion(requestParameters: FilesApiRestoreFileVersionRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).restoreFileVersion(requestParameters.fileId, requestParameters.version, requestParameters.url, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the content of an existing file with an edited copy and answers with the file as it now stands. The  content is the `File` part of a `multipart/form-data` body, and when no such part is sent the raw request body  is saved instead, so an empty body empties the file. The `DownloadUri` query parameter does not supply content  here; it is only read for the extension when `FileExtension` is empty. `fileExtension` names the format of the  content being sent, and when it differs from the stored format the portal converts the content, or keeps it  under a renamed copy when a third-party storage cannot convert it. The caller needs edit access to the file.  The call is mutating and not idempotent: an ordinary call adds a version to the file history, while  `forcesave=true` records an editor autosave, which overwrites the previous autosave revision instead of adding  another version and leaves a running editing session in place. It is refused with 403 when the file is locked,  lies in Trash, or is open in an editing session started by somebody else, and an unknown file id is reported  as missing. For content too large to post in one request use `POST api/2.0/files/file/{fileId}/edit_session`.
     * @summary Save edited file content
     * @param {FilesFilesApiSaveEditingFileFromFormRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveEditingFileFromForm(requestParameters: FilesApiSaveEditingFileFromFormRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Save edited file content (third-party storage)
     * @param {FilesFilesApiSaveEditingFileFromFormRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveEditingFileFromForm(requestParameters: FilesApiSaveEditingFileFromFormRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public saveEditingFileFromForm(requestParameters: FilesApiSaveEditingFileFromFormRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public saveEditingFileFromForm(requestParameters: FilesApiSaveEditingFileFromFormRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).saveEditingFileFromForm(requestParameters.fileId, requestParameters.downloadUri, requestParameters.fileExtension, requestParameters.file, requestParameters.forcesave, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Converts a file into a PDF, stores that PDF as a new file in the folder named in the body, and answers with  the file that was created. The source is left untouched, so the two files then live side by side. `title`  names the result without an extension - the `.pdf` extension is added to it - and an empty title reuses the  name of the source with its extension replaced. The conversion is done by the document service while the  request waits, so the call takes as long as the document needs and answers with the finished file rather than  with a queue entry. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused; a source file or a destination folder that does not exist is  answered with 404. The call is mutating and not idempotent: each call adds another PDF, its title made unique  when one of that name is already there. The result is marked as new for the room, and for a form the portal  recognises it is stored as a PDF form. To convert in place instead use  `PUT api/2.0/files/file/{fileId}/checkconversion`.
     * @summary Save a file as PDF
     * @param {FilesFilesApiSaveFileAsPdfRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveFileAsPdf(requestParameters: FilesApiSaveFileAsPdfRequest & { id: number; saveAsPdfRequest: SaveAsPdfRequest }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Save a file as PDF (third-party storage)
     * @param {FilesFilesApiSaveFileAsPdfRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveFileAsPdf(requestParameters: FilesApiSaveFileAsPdfRequest & { id: string; saveAsPdfRequest: ThirdPartySaveAsPdfRequest }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public saveFileAsPdf(requestParameters: FilesApiSaveFileAsPdfRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public saveFileAsPdf(requestParameters: FilesApiSaveFileAsPdfRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).saveFileAsPdf(requestParameters.id, requestParameters.saveAsPdfRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Assigns the roles of a PDF form to the people who are to fill them in, and starts the filling: the form is  marked as being filled out, the account that called is recorded as the one who started it, everybody named in  a role is notified, and the form becomes visible to the members whose room rights are limited to filling  forms. Each role carries its name, the account that takes it and the sequence number that decides the turn, so  the same sequence means the roles may be filled in parallel and different ones make a queue. Sending an empty  role list resets the filling instead, dropping the assignment altogether. The whole set is replaced on every  call, so the call is idempotent for a given set of roles but not additive. The file has to be a PDF form lying  in a room; the caller needs the right to start the filling of that form, which the room admin and a member  with content-creator rights have, and is otherwise refused with 403. Read back what was stored with  `GET api/2.0/files/file/{fileId}/formroles`.
     * @summary Save form role mapping
     * @param {FilesFilesApiSaveFormRoleMappingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveFormRoleMapping(requestParameters: FilesApiSaveFormRoleMappingRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).saveFormRoleMapping(requestParameters.fileId, requestParameters.saveFormRoleMappingDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns the Custom Filter editing mode of a spreadsheet on or off and answers with the file as it now stands. In  that mode the sorting and filtering one person applies to the sheet is visible to that person alone, so that  several people can work on the same data without moving the rows under each other; with the mode off,  filtering is shared again, as everywhere else. Turning it on also drops everybody else out of the running  editing session, the caller excepted, because the mode has to be established before the sheet is opened. Only  formats that support the mode are accepted; anything else is rejected as an invalid request. The caller needs  the right to use the mode in the room, which the room admin and a DocSpace admin acting as room manager have;  read-only access, a member without access to the room and an anonymous caller are refused. Once the mode has  been switched on by one person, only that person, a room manager or a DocSpace admin can switch it off again.  The call is mutating and, called twice with the same value, changes nothing the second time.
     * @summary Set the Custom Filter editing mode
     * @param {FilesFilesApiSetCustomFilterTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setCustomFilterTag(requestParameters: FilesApiSetCustomFilterTagRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Set the Custom Filter editing mode (third-party storage)
     * @param {FilesFilesApiSetCustomFilterTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setCustomFilterTag(requestParameters: FilesApiSetCustomFilterTagRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public setCustomFilterTag(requestParameters: FilesApiSetCustomFilterTagRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public setCustomFilterTag(requestParameters: FilesApiSetCustomFilterTagRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setCustomFilterTag(requestParameters.fileId, requestParameters.customFilterRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Issues the file keys that let the named people open one file of an end-to-end encrypted private room. Each  entry of the body names the account the key is for, the public key it was encrypted with and the encrypted key  itself, so the plain key never reaches the portal: the client encrypts it once per recipient with the public  key that `GET api/2.0/files/file/{fileId}/publickeys` reports for them. The keys of the accounts named in the  request are replaced, and the keys of everybody else are left as they are, which makes the call idempotent for  a given set of recipients while remaining a mutating one; sending no entry for a person does not revoke that  person\'s key. The file has to lie in a private room, and every account named in the request has to have read  access to it. The caller needs read access to the file and the right to create content in that room, which its  members with editing rights and its admins have; a caller without those rights, a file outside a private room  and a file that does not exist are all refused with 403. Read the result back with  `GET api/2.0/files/{fileId}/access`.
     * @summary Set file encryption information
     * @param {FilesFilesApiSetEncryptionInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setEncryptionInfo(requestParameters: FilesApiSetEncryptionInfoRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setEncryptionInfo(requestParameters.fileId, requestParameters.accessRequestKeyDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an external link to a file, or changes or revokes an existing one, and answers with the link as it now  stands. `linkId` decides which: an identifier that is not yet in use, the empty one included, creates a link,  while the identifier of an existing link rewrites it, so the whole set of parameters is applied every time and  a field left out is reset rather than kept. `access` carries the rights the link grants, and `access` set to  the value that denies everything revokes the link instead - the answer is then empty, and a revoked primary  link is not recreated by a later read. `title` names the link for the people who manage it, `expirationDate`  limits its lifetime and is refused when it lies more than a few years ahead, `password` asks visitors for a  secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members alone, and  `primary=true` makes it the primary link of the file. The caller needs the right to share the file and is  otherwise refused, an unknown file being answered as not found. The call is mutating.
     * @summary Set a file external link
     * @param {FilesFilesApiSetFileExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setFileExternalLink(requestParameters: FilesApiSetFileExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setFileExternalLink(requestParameters.id, requestParameters.fileLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Puts a file at a given position inside its folder and answers with the file, its `order` reporting where it  now stands. Positions count from 1, and the file that held the wanted position, together with everything after  it, is shifted to make room, so the numbering of a folder stays without gaps; a position beyond the end of the  folder places the file last. The value may also be sent as a dotted path, as in 1.2.3, in which case only  its last segment is read. Ordering is what the manual sorting of a room is built on, and it only means  something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs  edit access to the file, which room managers, content creators and members with editing rights have; a member  acting on somebody else\'s file, a guest and an anonymous caller are refused with 403, and an unknown file is  answered with 404. The call is mutating and idempotent. To move several items in one go use  `PUT api/2.0/files/order`.
     * @summary Set file order
     * @param {FilesFilesApiSetFileOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setFileOrder(requestParameters: FilesApiSetFileOrderRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Set file order (third-party storage)
     * @param {FilesFilesApiSetFileOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setFileOrder(requestParameters: FilesApiSetFileOrderRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public setFileOrder(requestParameters: FilesApiSetFileOrderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public setFileOrder(requestParameters: FilesApiSetFileOrderRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setFileOrder(requestParameters.fileId, requestParameters.orderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Puts several files and folders at given positions in one go and answers with the entries that were moved, each  with the position it now holds. Every item of `items` names an entry by its identifier and its kind - a file  or a folder - and the position it is to take, counting from 1; a position may also be sent as a dotted path,  as in 1.2.3, of which only the last segment is read. The items are applied one after another in the order  they are sent, and each of them shifts its neighbours, so the result depends on that order; the whole request  is not one transaction, and a failure in the middle leaves the items before it moved. Every item has to lie in  a room the caller may administer, which the room admin and a DocSpace admin acting as room manager do:  read-only access, a guest and an anonymous caller are refused, and an identifier that matches nothing is  answered as not found. Ordering only means something in rooms whose contents are indexed. The call is  mutating. For a single file use `PUT api/2.0/files/{fileId}/order`.
     * @summary Set order of files
     * @param {FilesFilesApiSetFilesOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setFilesOrder(requestParameters: FilesApiSetFilesOrderRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setFilesOrder(requestParameters.ordersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Opens an editing session on the file and answers with the document key that identifies it, the value an editor  client passes to the document service in order to join the co-editing session for that exact revision. The  file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved.  With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of  the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking  the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403  when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an  anonymous caller whose external link does not grant editing are all refused. The call is mutating and not  idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling  that operation with `isFinish=true`.
     * @summary Open an editing session
     * @param {FilesFilesApiStartEditFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public startEditFile(requestParameters: FilesApiStartEditFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).startEditFile(requestParameters.fileId, requestParameters.startEditRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks a PDF form in a form-filling room as open for filling out and answers with the form file. The portal  stores the filling properties on it - the room it belongs to, its title, the account that started it and the  id it keeps as the original form - so that later submissions are collected against this form. The file has to  be a PDF whose parent folder is a form-filling room; anything else is answered unchanged and nothing is  stored. Access follows room membership rather than portal role: a member holding only form-filling access on  the room may not start filling, and a caller with no access to the room at all is refused with 403 unless they  can manage it, which the room owner, a room administrator and a DocSpace administrator can. The call is  mutating and safe to repeat, since a repeat rewrites the same properties. Once a form is started, the answers  submitted for it can be collected into a spreadsheet with `POST api/2.0/files/file/{fileId}/xlsx`.
     * @summary Start filling a form
     * @param {FilesFilesApiStartFillingFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public startFillingFile(requestParameters: FilesApiStartFillingFileRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Start filling a form (third-party storage)
     * @param {FilesFilesApiStartFillingFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public startFillingFile(requestParameters: FilesApiStartFillingFileRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public startFillingFile(requestParameters: FilesApiStartFillingFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public startFillingFile(requestParameters: FilesApiStartFillingFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).startFillingFile(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets or clears the favorite mark of one file for the calling account: `true` adds the file to the favorites,  `false` takes it out again. The call changes stored state even though it is a GET, so it is not one to issue  speculatively; repeating it with the same value changes nothing further. The mark is personal, no other member  sees it, and the file stays where it is stored. Read access is enough, so a room member with view-only rights  and a guest may call it. The answer only echoes the value that was asked for: an identifier that resolves to  nothing and a file the caller cannot read are skipped without a word, an encrypted file of a private room is  never marked, and the requested value still comes back, so read the outcome from  `GET api/2.0/files/@favorites` instead. A file moved to the Trash keeps its mark and is left out of that  listing until it is restored. To mark several entries at once, or to mark folders, use  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`.
     * @summary Set the file favorite status
     * @param {FilesFilesApiToggleFileFavoriteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public toggleFileFavorite(requestParameters: FilesApiToggleFileFavoriteRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).toggleFileFavorite(requestParameters.fileId, requestParameters.favorite, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Keeps an editing session on the file alive, or ends it; an editor client calls it repeatedly while a document  is open. `docKeyForTrack` has to be the document key of the file as it currently stands, the value  `POST api/2.0/files/file/{fileId}/startedit` returned, and a key matching neither the current revision nor the  one being edited is refused with 403. `tabId` names the client tab that holds the session, so several tabs and  several users are tracked on one file independently. Refreshing an entry requires one of the editing rights on  the file - editing, reviewing, commenting, filling or filter editing - so a reader is refused. With  `isFinish=false` the entry is refreshed and the file stays marked as being edited; with `isFinish=true` the  entry for that tab is dropped and the other clients are told that editing has stopped. The call changes the  tracking state and never the document, and repeating it is safe. It answers `key` true with an empty `value`  whenever it succeeds, so a failure arrives as an error rather than as a false key. An anonymous caller is  accepted only through an external share link.
     * @summary Track an editing session
     * @param {FilesFilesApiTrackEditFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public trackEditFile(requestParameters: FilesApiTrackEditFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).trackEditFile(requestParameters.fileId, requestParameters.tabId, requestParameters.docKeyForTrack, requestParameters.isFinish, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Renames a file, restores one of its versions, or both at once, and answers with the file as it now stands. A  non-empty `title` renames the file, keeping the stored extension whatever the new title says, so a rename  cannot change the format; an empty or missing title leaves the name alone. A `lastVersion` above 0 restores  that version the way `POST api/2.0/files/file/{fileId}/restoreversion` does, storing its content again on top  of the history, while 0 or less leaves the versions untouched and answers with the file as it is - which makes  this operation a read of the file when both fields are left out. The caller needs edit access, and renaming  somebody else\'s file additionally needs room-manager rights: a member or room admin with plain editing access,  read-only access, a guest and a DocSpace admin who is not a member of the room are all refused with 403, while  a content creator may rename a file of their own. The call is mutating. Renaming marks the file as new for  everybody else who can read it.
     * @summary Update a file
     * @param {FilesFilesApiUpdateFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public updateFile(requestParameters: FilesApiUpdateFileRequest & { fileId: number }, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Update a file (third-party storage)
     * @param {FilesFilesApiUpdateFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public updateFile(requestParameters: FilesApiUpdateFileRequest & { fileId: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFileWrapper>;
    public updateFile(requestParameters: FilesApiUpdateFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper | ThirdPartyFileWrapper>;
    public updateFile(requestParameters: FilesApiUpdateFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).updateFile(requestParameters.fileId, requestParameters.updateFileRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

