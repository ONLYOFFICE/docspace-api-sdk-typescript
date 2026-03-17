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
import type { BaseBatchRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ChangeHistory } from '../../models';
// @ts-ignore
import type { CheckFillFormDraft } from '../../models';
// @ts-ignore
import type { ChunkedUploadSessionResponseWrapperIntegerWrapper } from '../../models';
// @ts-ignore
import type { ConfigurationIntegerWrapper } from '../../models';
// @ts-ignore
import type { CopyAsJsonElement } from '../../models';
// @ts-ignore
import type { CreateFileJsonElement } from '../../models';
// @ts-ignore
import type { CreateTextOrHtmlFile } from '../../models';
// @ts-ignore
import type { CustomFilterParameters } from '../../models';
// @ts-ignore
import type { Delete } from '../../models';
// @ts-ignore
import type { EditHistoryArrayWrapper } from '../../models';
// @ts-ignore
import type { EditHistoryDataWrapper } from '../../models';
// @ts-ignore
import type { EditorType } from '../../models';
// @ts-ignore
import type { FileEntryBaseWrapper } from '../../models';
// @ts-ignore
import type { FileEntryIntegerArrayWrapper } from '../../models';
// @ts-ignore
import type { FileIntegerArrayWrapper } from '../../models';
// @ts-ignore
import type { FileIntegerWrapper } from '../../models';
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
import type { FillingFormResultIntegerWrapper } from '../../models';
// @ts-ignore
import type { FormRoleArrayWrapper } from '../../models';
// @ts-ignore
import type { FormSubmissionsWrapper } from '../../models';
// @ts-ignore
import type { GetReferenceDataDtoInteger } from '../../models';
// @ts-ignore
import type { HistoryArrayWrapper } from '../../models';
// @ts-ignore
import type { KeyValuePairBooleanStringWrapper } from '../../models';
// @ts-ignore
import type { LockFileParameters } from '../../models';
// @ts-ignore
import type { ManageFormFillingDtoInteger } from '../../models';
// @ts-ignore
import type { MentionWrapperArrayWrapper } from '../../models';
// @ts-ignore
import type { NoContentResultWrapper } from '../../models';
// @ts-ignore
import type { ObjectArrayWrapper } from '../../models';
// @ts-ignore
import type { OrderRequestDto } from '../../models';
// @ts-ignore
import type { OrdersRequestDtoInteger } from '../../models';
// @ts-ignore
import type { SaveAsPdfInteger } from '../../models';
// @ts-ignore
import type { SaveFormRoleMappingDtoInteger } from '../../models';
// @ts-ignore
import type { StartEdit } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TemplatesRequestDto } from '../../models';
// @ts-ignore
import type { UpdateFile } from '../../models';
/**
 * FilesApi - axios parameter creator
 * @export
 */
export const FilesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Adds a file with the ID specified in the request to the Recent section.
         * @summary Add a file to the Recent section
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addFileToRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/
         */
        addFileToRecent: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Adds files with the IDs specified in the request to the template list.
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
         * Changes the version history of a file with the ID specified in the request.
         * @summary Change version history
         * @param {number} fileId The file Id to change its version history.
         * @param {ChangeHistory} changeHistory The parameters for changing version history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         */
        changeVersionHistory: async (fileId: number, changeHistory: ChangeHistory, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('changeVersionHistory', 'fileId', fileId)
            // verify required parameter 'changeHistory' is not null or undefined
            assertParamExists('changeVersionHistory', 'changeHistory', changeHistory)

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
            localVarRequestOptions.data = serializeDataIfNeeded(changeHistory, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if the current file is a form draft which can be filled out.
         * @summary Check the form draft filling
         * @param {number} fileId The file ID of the form draft.
         * @param {CheckFillFormDraft} checkFillFormDraft The parameters for checking the form draft filling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         */
        checkFillFormDraft: async (fileId: number, checkFillFormDraft: CheckFillFormDraft, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('checkFillFormDraft', 'fileId', fileId)
            // verify required parameter 'checkFillFormDraft' is not null or undefined
            assertParamExists('checkFillFormDraft', 'checkFillFormDraft', checkFillFormDraft)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(checkFillFormDraft, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Copies (and converts if possible) an existing file to the specified folder.
         * @summary Copy a file
         * @param {number} fileId The file ID to copy.
         * @param {CopyAsJsonElement} copyAsJsonElement The parameters for copying a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         */
        copyFileAs: async (fileId: number, copyAsJsonElement: CopyAsJsonElement, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('copyFileAs', 'fileId', fileId)
            // verify required parameter 'copyAsJsonElement' is not null or undefined
            assertParamExists('copyFileAs', 'copyAsJsonElement', copyAsJsonElement)

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
            localVarRequestOptions.data = serializeDataIfNeeded(copyAsJsonElement, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).
         * @summary Create the editing session
         * @param {number} fileId The file ID.
         * @param {number} [fileSize] The file size in bytes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         */
        createEditSession: async (fileId: number, fileSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Creates a new file in the specified folder with the title specified in the request.
         * @summary Create a file
         * @param {number} folderId The folder ID for the file creation.
         * @param {CreateFileJsonElement} createFileJsonElement The parameters for creating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         */
        createFile: async (folderId: number, createFileJsonElement: CreateFileJsonElement, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createFile', 'folderId', folderId)
            // verify required parameter 'createFileJsonElement' is not null or undefined
            assertParamExists('createFile', 'createFileJsonElement', createFileJsonElement)

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
            localVarRequestOptions.data = serializeDataIfNeeded(createFileJsonElement, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new file in the My documents section with the title specified in the request.
         * @summary Create a file in the My documents section
         * @param {CreateFileJsonElement} [createFileJsonElement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         */
        createFileInMyDocuments: async (createFileJsonElement?: CreateFileJsonElement, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(createFileJsonElement, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} fileLinkRequest The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link/
         */
        createFilePrimaryExternalLink: async (id: number, fileLinkRequest: FileLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
         * @summary Create an HTML file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} createTextOrHtmlFile The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         */
        createHtmlFile: async (folderId: number, createTextOrHtmlFile: CreateTextOrHtmlFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createHtmlFile', 'folderId', folderId)
            // verify required parameter 'createTextOrHtmlFile' is not null or undefined
            assertParamExists('createHtmlFile', 'createTextOrHtmlFile', createTextOrHtmlFile)

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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates an HTML (.html) file in the My documents section with the title and contents specified in the request.
         * @summary Create an HTML file in the My documents section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         */
        createHtmlFileInMyDocuments: async (createTextOrHtmlFile?: CreateTextOrHtmlFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
         * @summary Create a text file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} createTextOrHtmlFile The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         */
        createTextFile: async (folderId: number, createTextOrHtmlFile: CreateTextOrHtmlFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createTextFile', 'folderId', folderId)
            // verify required parameter 'createTextOrHtmlFile' is not null or undefined
            assertParamExists('createTextFile', 'createTextOrHtmlFile', createTextOrHtmlFile)

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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a text (.txt) file in the My documents section with the title and contents specified in the request.
         * @summary Create a text file in the My documents section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         */
        createTextFileInMyDocuments: async (createTextOrHtmlFile?: CreateTextOrHtmlFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(createTextOrHtmlFile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates thumbnails for the files with the IDs specified in the request.
         * @summary Create file thumbnails
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
         * Deletes a file with the ID specified in the request.
         * @summary Delete a file
         * @param {number} fileId The file ID to delete.
         * @param {Delete} _delete The parameters for deleting a file.
         * @param {boolean} [returnSingleOperation] Specifies whether to return only the current operation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         */
        deleteFile: async (fileId: number, _delete: Delete, returnSingleOperation?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('deleteFile', 'fileId', fileId)
            // verify required parameter '_delete' is not null or undefined
            assertParamExists('deleteFile', '_delete', _delete)

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
                localVarQueryParameter['ReturnSingleOperation'] = returnSingleOperation;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(_delete, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes files with the IDs specified in the request from the Recent section.
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
         * Removes files with the IDs specified in the request from the template list.
         * @summary Delete template files
         * @param {Array<number>} [requestBody] The file IDs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/
         */
        deleteTemplates: async (requestBody?: Array<number>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Triggers asynchronous XLSX report generation for the specified form file.
         * @summary Generate XLSX report
         * @param {number} fileId The file unique identifier.
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
         * Returns all roles for the specified form.
         * @summary Get form roles
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllFormRoles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/
         */
        getAllFormRoles: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns a URL to the changes of a file version specified in the request.
         * @summary Get changes URL
         * @param {number} fileId The file ID.
         * @param {number} [version] The file version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditDiffUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/
         */
        getEditDiffUrl: async (fileId: number, version?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the version history of a file with the ID specified in the request.
         * @summary Get version history
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/
         */
        getEditHistory: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the list of actions performed on the file with the specified identifier.
         * @summary Get file history
         * @param {number} fileId The file ID of the history request.
         * @param {ApiDateTime} [fromDate] The start date of the history.
         * @param {ApiDateTime} [toDate] The end date of the history.
         * @param {number} [count] The number of history entries to retrieve for the file log.
         * @param {number} [startIndex] The starting index for retrieving a subset of file history entries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/
         */
        getFileHistory: async (fileId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the detailed information about a file with the ID specified in the request.
         * @summary Get file information
         * @param {number} fileId The file ID.
         * @param {number} [version] The file version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/
         */
        getFileInfo: async (fileId: number, version?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the external links of a file with the ID specified in the request.
         * @summary Get file external links
         * @param {number} id The file unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/
         */
        getFileLinks: async (id: number, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
         * @param {number} id The file unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/
         */
        getFilePrimaryExternalLink: async (id: number, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the detailed information about all the available file versions with the ID specified in the request.
         * @summary Get file versions
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         */
        getFileVersionInfo: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the result of a form-filling session.
         * @summary Get form-filling result
         * @param {string} [fillingSessionId] The form-filling session ID.
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
         * Returns the results of form submissions.
         * @summary Get form submission results
         * @param {number} fileId The file unique identifier.
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
         * Returns a link to download a file with the ID specified in the request asynchronously.
         * @summary Get file download link asynchronously
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedFileUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/
         */
        getPresignedFileUri: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
         * @summary Get file download link
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/
         */
        getPresignedUri: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns a list of users with their access rights to the protected file with the ID specified in the request.
         * @summary Get users access rights to the protected file
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         */
        getProtectedFileUsers: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.
         * @summary Get reference data
         * @param {GetReferenceDataDtoInteger} [getReferenceDataDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReferenceData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/
         */
        getReferenceData: async (getReferenceDataDtoInteger?: GetReferenceDataDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(getReferenceDataDtoInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if the PDF file is a form or not.
         * @summary Check the PDF file
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for isFormPDF operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/
         */
        isFormPDF: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Locks a file with the ID specified in the request.
         * @summary Lock a file
         * @param {number} fileId The file ID for locking.
         * @param {LockFileParameters} lockFileParameters The parameters for locking a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         */
        lockFile: async (fileId: number, lockFileParameters: LockFileParameters, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('lockFile', 'fileId', fileId)
            // verify required parameter 'lockFileParameters' is not null or undefined
            assertParamExists('lockFile', 'lockFileParameters', lockFileParameters)

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
            localVarRequestOptions.data = serializeDataIfNeeded(lockFileParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Performs the specified form filling action.
         * @summary Perform form filling action
         * @param {string} fileId 
         * @param {ManageFormFillingDtoInteger} [manageFormFillingDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for manageFormFilling operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/
         */
        manageFormFilling: async (fileId: string, manageFormFillingDtoInteger?: ManageFormFillingDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
            localVarRequestOptions.data = serializeDataIfNeeded(manageFormFillingDtoInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the initialization configuration of a file to open it in the editor.
         * @summary Open a file configuration
         * @param {number} fileId The file ID to open.
         * @param {number} [version] The file version to open.
         * @param {boolean} [view] Specifies if the document will be opened for viewing only or not.
         * @param {EditorType} [editorType] The editor type to open the file.
         * @param {boolean} [edit] Specifies if the document is opened in the editing mode or not.
         * @param {boolean} [fill] Specifies if the document is opened in the form-filling mode or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for openEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/
         */
        openEditFile: async (fileId: number, version?: number, view?: boolean, editorType?: EditorType, edit?: boolean, fill?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Restores a file version specified in the request.
         * @summary Restore a file version
         * @param {number} fileId The file ID of the restore version.
         * @param {number} [version] The file version of the restore.
         * @param {string} [url] The file version URL of the restore.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreFileVersion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/
         */
        restoreFileVersion: async (fileId: number, version?: number, url?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Saves edits to a file with the ID specified in the request.
         * @summary Save file edits
         * @param {number} fileId The editing file ID from the request.
         * @param {string} [downloadUri] The URI to download the editing file.
         * @param {string} [fileExtension] The editing file extension from the request.
         * @param {File} [file] The edited file to be saved, uploaded as part of the multipart/form-data request.  This property represents the modified file content from the HTTP request form after editing operations.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
         * @param {boolean} [forcesave] Specifies whether to force save the file or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         */
        saveEditingFileFromForm: async (fileId: number, downloadUri?: string, fileExtension?: string, file?: File, forcesave?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
                localVarQueryParameter['DownloadUri'] = downloadUri;
            }


            if (fileExtension !== undefined) { 
                localVarFormParams.append('FileExtension', fileExtension as any);
            }
    
            if (file !== undefined) { 
                localVarFormParams.append('File', file as any);
            }
    
            if (forcesave !== undefined) { 
                localVarFormParams.append('Forcesave', String(forcesave) as any);
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
         * Saves a file with the identifier specified in the request as a PDF document.
         * @summary Save a file as PDF
         * @param {number} id The file ID to save as PDF.
         * @param {SaveAsPdfInteger} saveAsPdfInteger The parameters for saving the file as PDF.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         */
        saveFileAsPdf: async (id: number, saveAsPdfInteger: SaveAsPdfInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('saveFileAsPdf', 'id', id)
            // verify required parameter 'saveAsPdfInteger' is not null or undefined
            assertParamExists('saveFileAsPdf', 'saveAsPdfInteger', saveAsPdfInteger)

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
            localVarRequestOptions.data = serializeDataIfNeeded(saveAsPdfInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the form role mapping.
         * @summary Save form role mapping
         * @param {string} fileId 
         * @param {SaveFormRoleMappingDtoInteger} [saveFormRoleMappingDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFormRoleMapping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/
         */
        saveFormRoleMapping: async (fileId: string, saveFormRoleMappingDtoInteger?: SaveFormRoleMappingDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
            localVarRequestOptions.data = serializeDataIfNeeded(saveFormRoleMappingDtoInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the Custom Filter editing mode to a file with the ID specified in the request.
         * @summary Set the Custom Filter editing mode
         * @param {number} fileId The file ID.
         * @param {CustomFilterParameters} customFilterParameters The parameters for setting the Custom Filter editing mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         */
        setCustomFilterTag: async (fileId: number, customFilterParameters: CustomFilterParameters, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setCustomFilterTag', 'fileId', fileId)
            // verify required parameter 'customFilterParameters' is not null or undefined
            assertParamExists('setCustomFilterTag', 'customFilterParameters', customFilterParameters)

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
            localVarRequestOptions.data = serializeDataIfNeeded(customFilterParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets an external link to a file with the ID specified in the request.
         * @summary Set an external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} fileLinkRequest The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link/
         */
        setFileExternalLink: async (id: number, fileLinkRequest: FileLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Sets the order of the file with the ID specified in the request.
         * @summary Set file order
         * @param {number} fileId The file unique identifier.
         * @param {OrderRequestDto} [orderRequestDto] The file order information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/
         */
        setFileOrder: async (fileId: number, orderRequestDto?: OrderRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Sets the order of the files specified in the request.
         * @summary Set order of files
         * @param {OrdersRequestDtoInteger} [ordersRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         */
        setFilesOrder: async (ordersRequestDtoInteger?: OrdersRequestDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(ordersRequestDtoInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
         * @summary Start file editing
         * @param {number} fileId The file ID to start editing.
         * @param {StartEdit} startEdit The file parameters to start editing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         */
        startEditFile: async (fileId: number, startEdit: StartEdit, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('startEditFile', 'fileId', fileId)
            // verify required parameter 'startEdit' is not null or undefined
            assertParamExists('startEditFile', 'startEdit', startEdit)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(startEdit, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts filling a file with the ID specified in the request.
         * @summary Start file filling
         * @param {number} fileId The file ID to start filling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFillingFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/
         */
        startFillingFile: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Changes the favorite status of the file with the ID specified in the request.
         * @summary Change the file favorite status
         * @param {number} fileId The file ID.
         * @param {boolean} [favorite] Specifies if the file is marked as favorite or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for toggleFileFavorite operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite/
         */
        toggleFileFavorite: async (fileId: number, favorite?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Tracks file changes when editing.
         * @summary Track file editing
         * @param {number} fileId The file ID to track editing changes.
         * @param {string} [tabId] The tab ID to track editing changes.
         * @param {string} [docKeyForTrack] The document key for tracking changes.
         * @param {boolean} [isFinish] Specifies whether to finish file tracking or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for trackEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/
         */
        trackEditFile: async (fileId: number, tabId?: string, docKeyForTrack?: string, isFinish?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Updates the information of the selected file with the parameters specified in the request.
         * @summary Update a file
         * @param {number} fileId The file ID to update.
         * @param {UpdateFile} updateFile The parameters for updating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         */
        updateFile: async (fileId: number, updateFile: UpdateFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateFile', 'fileId', fileId)
            // verify required parameter 'updateFile' is not null or undefined
            assertParamExists('updateFile', 'updateFile', updateFile)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateFile, localVarRequestOptions, configuration)

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
         * Adds a file with the ID specified in the request to the Recent section.
         * @summary Add a file to the Recent section
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addFileToRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/
         */
        async addFileToRecent(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFileToRecent(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.addFileToRecent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds files with the IDs specified in the request to the template list.
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
         * Changes the version history of a file with the ID specified in the request.
         * @summary Change version history
         * @param {number} fileId The file Id to change its version history.
         * @param {ChangeHistory} changeHistory The parameters for changing version history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         */
        async changeVersionHistory(fileId: number, changeHistory: ChangeHistory, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeVersionHistory(fileId, changeHistory, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.changeVersionHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the current file is a form draft which can be filled out.
         * @summary Check the form draft filling
         * @param {number} fileId The file ID of the form draft.
         * @param {CheckFillFormDraft} checkFillFormDraft The parameters for checking the form draft filling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         */
        async checkFillFormDraft(fileId: number, checkFillFormDraft: CheckFillFormDraft, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkFillFormDraft(fileId, checkFillFormDraft, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.checkFillFormDraft']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Copies (and converts if possible) an existing file to the specified folder.
         * @summary Copy a file
         * @param {number} fileId The file ID to copy.
         * @param {CopyAsJsonElement} copyAsJsonElement The parameters for copying a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         */
        async copyFileAs(fileId: number, copyAsJsonElement: CopyAsJsonElement, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copyFileAs(fileId, copyAsJsonElement, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.copyFileAs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).
         * @summary Create the editing session
         * @param {number} fileId The file ID.
         * @param {number} [fileSize] The file size in bytes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         */
        async createEditSession(fileId: number, fileSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChunkedUploadSessionResponseWrapperIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEditSession(fileId, fileSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createEditSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a new file in the specified folder with the title specified in the request.
         * @summary Create a file
         * @param {number} folderId The folder ID for the file creation.
         * @param {CreateFileJsonElement} createFileJsonElement The parameters for creating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         */
        async createFile(folderId: number, createFileJsonElement: CreateFileJsonElement, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFile(folderId, createFileJsonElement, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a new file in the My documents section with the title specified in the request.
         * @summary Create a file in the My documents section
         * @param {CreateFileJsonElement} [createFileJsonElement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         */
        async createFileInMyDocuments(createFileJsonElement?: CreateFileJsonElement, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFileInMyDocuments(createFileJsonElement, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} fileLinkRequest The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link/
         */
        async createFilePrimaryExternalLink(id: number, fileLinkRequest: FileLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFilePrimaryExternalLink(id, fileLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createFilePrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
         * @summary Create an HTML file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} createTextOrHtmlFile The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         */
        async createHtmlFile(folderId: number, createTextOrHtmlFile: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createHtmlFile(folderId, createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createHtmlFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an HTML (.html) file in the My documents section with the title and contents specified in the request.
         * @summary Create an HTML file in the My documents section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         */
        async createHtmlFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createHtmlFileInMyDocuments(createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createHtmlFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
         * @summary Create a text file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} createTextOrHtmlFile The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         */
        async createTextFile(folderId: number, createTextOrHtmlFile: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTextFile(folderId, createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createTextFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a text (.txt) file in the My documents section with the title and contents specified in the request.
         * @summary Create a text file in the My documents section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         */
        async createTextFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTextFileInMyDocuments(createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.createTextFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates thumbnails for the files with the IDs specified in the request.
         * @summary Create file thumbnails
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
         * Deletes a file with the ID specified in the request.
         * @summary Delete a file
         * @param {number} fileId The file ID to delete.
         * @param {Delete} _delete The parameters for deleting a file.
         * @param {boolean} [returnSingleOperation] Specifies whether to return only the current operation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         */
        async deleteFile(fileId: number, _delete: Delete, returnSingleOperation?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFile(fileId, _delete, returnSingleOperation, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.deleteFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes files with the IDs specified in the request from the Recent section.
         * @summary Delete recent files
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/
         */
        async deleteRecent(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NoContentResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRecent(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.deleteRecent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes files with the IDs specified in the request from the template list.
         * @summary Delete template files
         * @param {Array<number>} [requestBody] The file IDs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/
         */
        async deleteTemplates(requestBody?: Array<number>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTemplates(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.deleteTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Triggers asynchronous XLSX report generation for the specified form file.
         * @summary Generate XLSX report
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for generateXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx/
         */
        async generateXlsx(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateXlsx(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.generateXlsx']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns all roles for the specified form.
         * @summary Get form roles
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllFormRoles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/
         */
        async getAllFormRoles(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormRoleArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllFormRoles(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getAllFormRoles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a URL to the changes of a file version specified in the request.
         * @summary Get changes URL
         * @param {number} fileId The file ID.
         * @param {number} [version] The file version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditDiffUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/
         */
        async getEditDiffUrl(fileId: number, version?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditHistoryDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEditDiffUrl(fileId, version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getEditDiffUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the version history of a file with the ID specified in the request.
         * @summary Get version history
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/
         */
        async getEditHistory(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditHistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEditHistory(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getEditHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the list of actions performed on the file with the specified identifier.
         * @summary Get file history
         * @param {number} fileId The file ID of the history request.
         * @param {ApiDateTime} [fromDate] The start date of the history.
         * @param {ApiDateTime} [toDate] The end date of the history.
         * @param {number} [count] The number of history entries to retrieve for the file log.
         * @param {number} [startIndex] The starting index for retrieving a subset of file history entries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/
         */
        async getFileHistory(fileId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileHistory(fileId, fromDate, toDate, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about a file with the ID specified in the request.
         * @summary Get file information
         * @param {number} fileId The file ID.
         * @param {number} [version] The file version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/
         */
        async getFileInfo(fileId: number, version?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileInfo(fileId, version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the external links of a file with the ID specified in the request.
         * @summary Get file external links
         * @param {number} id The file unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/
         */
        async getFileLinks(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileLinks(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
         * @param {number} id The file unique identifier.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/
         */
        async getFilePrimaryExternalLink(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilePrimaryExternalLink(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFilePrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about all the available file versions with the ID specified in the request.
         * @summary Get file versions
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         */
        async getFileVersionInfo(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileVersionInfo(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFileVersionInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the result of a form-filling session.
         * @summary Get form-filling result
         * @param {string} [fillingSessionId] The form-filling session ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFillResult operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/
         */
        async getFillResult(fillingSessionId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FillingFormResultIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFillResult(fillingSessionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getFillResult']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the results of form submissions.
         * @summary Get form submission results
         * @param {number} fileId The file unique identifier.
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
         * Returns a link to download a file with the ID specified in the request asynchronously.
         * @summary Get file download link asynchronously
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedFileUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/
         */
        async getPresignedFileUri(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPresignedFileUri(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getPresignedFileUri']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
         * @summary Get file download link
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/
         */
        async getPresignedUri(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPresignedUri(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getPresignedUri']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users with their access rights to the protected file with the ID specified in the request.
         * @summary Get users access rights to the protected file
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         */
        async getProtectedFileUsers(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MentionWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProtectedFileUsers(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getProtectedFileUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.
         * @summary Get reference data
         * @param {GetReferenceDataDtoInteger} [getReferenceDataDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReferenceData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/
         */
        async getReferenceData(getReferenceDataDtoInteger?: GetReferenceDataDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileReferenceWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReferenceData(getReferenceDataDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getReferenceData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the PDF file is a form or not.
         * @summary Check the PDF file
         * @param {number} fileId The file unique identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for isFormPDF operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/
         */
        async isFormPDF(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.isFormPDF(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.isFormPDF']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Locks a file with the ID specified in the request.
         * @summary Lock a file
         * @param {number} fileId The file ID for locking.
         * @param {LockFileParameters} lockFileParameters The parameters for locking a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         */
        async lockFile(fileId: number, lockFileParameters: LockFileParameters, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lockFile(fileId, lockFileParameters, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.lockFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Performs the specified form filling action.
         * @summary Perform form filling action
         * @param {string} fileId 
         * @param {ManageFormFillingDtoInteger} [manageFormFillingDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for manageFormFilling operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/
         */
        async manageFormFilling(fileId: string, manageFormFillingDtoInteger?: ManageFormFillingDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.manageFormFilling(fileId, manageFormFillingDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.manageFormFilling']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the initialization configuration of a file to open it in the editor.
         * @summary Open a file configuration
         * @param {number} fileId The file ID to open.
         * @param {number} [version] The file version to open.
         * @param {boolean} [view] Specifies if the document will be opened for viewing only or not.
         * @param {EditorType} [editorType] The editor type to open the file.
         * @param {boolean} [edit] Specifies if the document is opened in the editing mode or not.
         * @param {boolean} [fill] Specifies if the document is opened in the form-filling mode or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for openEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/
         */
        async openEditFile(fileId: number, version?: number, view?: boolean, editorType?: EditorType, edit?: boolean, fill?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigurationIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.openEditFile(fileId, version, view, editorType, edit, fill, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.openEditFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Restores a file version specified in the request.
         * @summary Restore a file version
         * @param {number} fileId The file ID of the restore version.
         * @param {number} [version] The file version of the restore.
         * @param {string} [url] The file version URL of the restore.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreFileVersion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/
         */
        async restoreFileVersion(fileId: number, version?: number, url?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditHistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreFileVersion(fileId, version, url, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.restoreFileVersion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves edits to a file with the ID specified in the request.
         * @summary Save file edits
         * @param {number} fileId The editing file ID from the request.
         * @param {string} [downloadUri] The URI to download the editing file.
         * @param {string} [fileExtension] The editing file extension from the request.
         * @param {File} [file] The edited file to be saved, uploaded as part of the multipart/form-data request.  This property represents the modified file content from the HTTP request form after editing operations.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
         * @param {boolean} [forcesave] Specifies whether to force save the file or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         */
        async saveEditingFileFromForm(fileId: number, downloadUri?: string, fileExtension?: string, file?: File, forcesave?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveEditingFileFromForm(fileId, downloadUri, fileExtension, file, forcesave, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.saveEditingFileFromForm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves a file with the identifier specified in the request as a PDF document.
         * @summary Save a file as PDF
         * @param {number} id The file ID to save as PDF.
         * @param {SaveAsPdfInteger} saveAsPdfInteger The parameters for saving the file as PDF.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         */
        async saveFileAsPdf(id: number, saveAsPdfInteger: SaveAsPdfInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveFileAsPdf(id, saveAsPdfInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.saveFileAsPdf']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the form role mapping.
         * @summary Save form role mapping
         * @param {string} fileId 
         * @param {SaveFormRoleMappingDtoInteger} [saveFormRoleMappingDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFormRoleMapping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/
         */
        async saveFormRoleMapping(fileId: string, saveFormRoleMappingDtoInteger?: SaveFormRoleMappingDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveFormRoleMapping(fileId, saveFormRoleMappingDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.saveFormRoleMapping']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the Custom Filter editing mode to a file with the ID specified in the request.
         * @summary Set the Custom Filter editing mode
         * @param {number} fileId The file ID.
         * @param {CustomFilterParameters} customFilterParameters The parameters for setting the Custom Filter editing mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         */
        async setCustomFilterTag(fileId: number, customFilterParameters: CustomFilterParameters, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setCustomFilterTag(fileId, customFilterParameters, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setCustomFilterTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets an external link to a file with the ID specified in the request.
         * @summary Set an external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} fileLinkRequest The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link/
         */
        async setFileExternalLink(id: number, fileLinkRequest: FileLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileExternalLink(id, fileLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setFileExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the order of the file with the ID specified in the request.
         * @summary Set file order
         * @param {number} fileId The file unique identifier.
         * @param {OrderRequestDto} [orderRequestDto] The file order information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/
         */
        async setFileOrder(fileId: number, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileOrder(fileId, orderRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setFileOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the order of the files specified in the request.
         * @summary Set order of files
         * @param {OrdersRequestDtoInteger} [ordersRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         */
        async setFilesOrder(ordersRequestDtoInteger?: OrdersRequestDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFilesOrder(ordersRequestDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.setFilesOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
         * @summary Start file editing
         * @param {number} fileId The file ID to start editing.
         * @param {StartEdit} startEdit The file parameters to start editing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         */
        async startEditFile(fileId: number, startEdit: StartEdit, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startEditFile(fileId, startEdit, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.startEditFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts filling a file with the ID specified in the request.
         * @summary Start file filling
         * @param {number} fileId The file ID to start filling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startFillingFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/
         */
        async startFillingFile(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startFillingFile(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.startFillingFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the favorite status of the file with the ID specified in the request.
         * @summary Change the file favorite status
         * @param {number} fileId The file ID.
         * @param {boolean} [favorite] Specifies if the file is marked as favorite or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for toggleFileFavorite operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite/
         */
        async toggleFileFavorite(fileId: number, favorite?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.toggleFileFavorite(fileId, favorite, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.toggleFileFavorite']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tracks file changes when editing.
         * @summary Track file editing
         * @param {number} fileId The file ID to track editing changes.
         * @param {string} [tabId] The tab ID to track editing changes.
         * @param {string} [docKeyForTrack] The document key for tracking changes.
         * @param {boolean} [isFinish] Specifies whether to finish file tracking or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for trackEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/
         */
        async trackEditFile(fileId: number, tabId?: string, docKeyForTrack?: string, isFinish?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KeyValuePairBooleanStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.trackEditFile(fileId, tabId, docKeyForTrack, isFinish, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.trackEditFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the information of the selected file with the parameters specified in the request.
         * @summary Update a file
         * @param {number} fileId The file ID to update.
         * @param {UpdateFile} updateFile The parameters for updating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         */
        async updateFile(fileId: number, updateFile: UpdateFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFile(fileId, updateFile, options);
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
         * Adds a file with the ID specified in the request to the Recent section.
         * @summary Add a file to the Recent section
         * @param {FilesApiAddFileToRecentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addFileToRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/
         * @throws {RequiredError}
         */
        addFileToRecent(requestParameters: FilesApiAddFileToRecentRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.addFileToRecent(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds files with the IDs specified in the request to the template list.
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
         * Changes the version history of a file with the ID specified in the request.
         * @summary Change version history
         * @param {FilesApiChangeVersionHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         * @throws {RequiredError}
         */
        changeVersionHistory(requestParameters: FilesApiChangeVersionHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerArrayWrapper> {
            return localVarFp.changeVersionHistory(requestParameters.fileId, requestParameters.changeHistory, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the current file is a form draft which can be filled out.
         * @summary Check the form draft filling
         * @param {FilesApiCheckFillFormDraftRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         * @throws {RequiredError}
         */
        checkFillFormDraft(requestParameters: FilesApiCheckFillFormDraftRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.checkFillFormDraft(requestParameters.fileId, requestParameters.checkFillFormDraft, options).then((request) => request(axios, basePath));
        },
        /**
         * Copies (and converts if possible) an existing file to the specified folder.
         * @summary Copy a file
         * @param {FilesApiCopyFileAsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         * @throws {RequiredError}
         */
        copyFileAs(requestParameters: FilesApiCopyFileAsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseWrapper> {
            return localVarFp.copyFileAs(requestParameters.fileId, requestParameters.copyAsJsonElement, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).
         * @summary Create the editing session
         * @param {FilesApiCreateEditSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         * @throws {RequiredError}
         */
        createEditSession(requestParameters: FilesApiCreateEditSessionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChunkedUploadSessionResponseWrapperIntegerWrapper> {
            return localVarFp.createEditSession(requestParameters.fileId, requestParameters.fileSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new file in the specified folder with the title specified in the request.
         * @summary Create a file
         * @param {FilesApiCreateFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         * @throws {RequiredError}
         */
        createFile(requestParameters: FilesApiCreateFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createFile(requestParameters.folderId, requestParameters.createFileJsonElement, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new file in the My documents section with the title specified in the request.
         * @summary Create a file in the My documents section
         * @param {FilesApiCreateFileInMyDocumentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         * @throws {RequiredError}
         */
        createFileInMyDocuments(requestParameters: FilesApiCreateFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createFileInMyDocuments(requestParameters.createFileJsonElement, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
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
         * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
         * @summary Create an HTML file
         * @param {FilesApiCreateHtmlFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         * @throws {RequiredError}
         */
        createHtmlFile(requestParameters: FilesApiCreateHtmlFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createHtmlFile(requestParameters.folderId, requestParameters.createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an HTML (.html) file in the My documents section with the title and contents specified in the request.
         * @summary Create an HTML file in the My documents section
         * @param {FilesApiCreateHtmlFileInMyDocumentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         * @throws {RequiredError}
         */
        createHtmlFileInMyDocuments(requestParameters: FilesApiCreateHtmlFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createHtmlFileInMyDocuments(requestParameters.createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
         * @summary Create a text file
         * @param {FilesApiCreateTextFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         * @throws {RequiredError}
         */
        createTextFile(requestParameters: FilesApiCreateTextFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createTextFile(requestParameters.folderId, requestParameters.createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a text (.txt) file in the My documents section with the title and contents specified in the request.
         * @summary Create a text file in the My documents section
         * @param {FilesApiCreateTextFileInMyDocumentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         * @throws {RequiredError}
         */
        createTextFileInMyDocuments(requestParameters: FilesApiCreateTextFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createTextFileInMyDocuments(requestParameters.createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates thumbnails for the files with the IDs specified in the request.
         * @summary Create file thumbnails
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
         * Deletes a file with the ID specified in the request.
         * @summary Delete a file
         * @param {FilesApiDeleteFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         * @throws {RequiredError}
         */
        deleteFile(requestParameters: FilesApiDeleteFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteFile(requestParameters.fileId, requestParameters._delete, requestParameters.returnSingleOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes files with the IDs specified in the request from the Recent section.
         * @summary Delete recent files
         * @param {FilesApiDeleteRecentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/
         * @throws {RequiredError}
         */
        deleteRecent(requestParameters: FilesApiDeleteRecentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<NoContentResultWrapper> {
            return localVarFp.deleteRecent(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes files with the IDs specified in the request from the template list.
         * @summary Delete template files
         * @param {FilesApiDeleteTemplatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/
         * @throws {RequiredError}
         */
        deleteTemplates(requestParameters: FilesApiDeleteTemplatesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteTemplates(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Triggers asynchronous XLSX report generation for the specified form file.
         * @summary Generate XLSX report
         * @param {FilesApiGenerateXlsxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for generateXlsx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx/
         * @throws {RequiredError}
         */
        generateXlsx(requestParameters: FilesApiGenerateXlsxRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.generateXlsx(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all roles for the specified form.
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
         * Returns a URL to the changes of a file version specified in the request.
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
         * Returns the version history of a file with the ID specified in the request.
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
         * Returns the list of actions performed on the file with the specified identifier.
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
         * Returns the detailed information about a file with the ID specified in the request.
         * @summary Get file information
         * @param {FilesApiGetFileInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/
         * @throws {RequiredError}
         */
        getFileInfo(requestParameters: FilesApiGetFileInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.getFileInfo(requestParameters.fileId, requestParameters.version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the external links of a file with the ID specified in the request.
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
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
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
         * Returns the detailed information about all the available file versions with the ID specified in the request.
         * @summary Get file versions
         * @param {FilesApiGetFileVersionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         * @throws {RequiredError}
         */
        getFileVersionInfo(requestParameters: FilesApiGetFileVersionInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerArrayWrapper> {
            return localVarFp.getFileVersionInfo(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the result of a form-filling session.
         * @summary Get form-filling result
         * @param {FilesApiGetFillResultRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFillResult operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/
         * @throws {RequiredError}
         */
        getFillResult(requestParameters: FilesApiGetFillResultRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FillingFormResultIntegerWrapper> {
            return localVarFp.getFillResult(requestParameters.fillingSessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the results of form submissions.
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
         * Returns a link to download a file with the ID specified in the request asynchronously.
         * @summary Get file download link asynchronously
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
         * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
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
         * Returns a list of users with their access rights to the protected file with the ID specified in the request.
         * @summary Get users access rights to the protected file
         * @param {FilesApiGetProtectedFileUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         * @throws {RequiredError}
         */
        getProtectedFileUsers(requestParameters: FilesApiGetProtectedFileUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<MentionWrapperArrayWrapper> {
            return localVarFp.getProtectedFileUsers(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.
         * @summary Get reference data
         * @param {FilesApiGetReferenceDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getReferenceData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/
         * @throws {RequiredError}
         */
        getReferenceData(requestParameters: FilesApiGetReferenceDataRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileReferenceWrapper> {
            return localVarFp.getReferenceData(requestParameters.getReferenceDataDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the PDF file is a form or not.
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
         * Locks a file with the ID specified in the request.
         * @summary Lock a file
         * @param {FilesApiLockFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         * @throws {RequiredError}
         */
        lockFile(requestParameters: FilesApiLockFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.lockFile(requestParameters.fileId, requestParameters.lockFileParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Performs the specified form filling action.
         * @summary Perform form filling action
         * @param {FilesApiManageFormFillingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for manageFormFilling operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/
         * @throws {RequiredError}
         */
        manageFormFilling(requestParameters: FilesApiManageFormFillingRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.manageFormFilling(requestParameters.fileId, requestParameters.manageFormFillingDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the initialization configuration of a file to open it in the editor.
         * @summary Open a file configuration
         * @param {FilesApiOpenEditFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for openEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/
         * @throws {RequiredError}
         */
        openEditFile(requestParameters: FilesApiOpenEditFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigurationIntegerWrapper> {
            return localVarFp.openEditFile(requestParameters.fileId, requestParameters.version, requestParameters.view, requestParameters.editorType, requestParameters.edit, requestParameters.fill, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores a file version specified in the request.
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
         * Saves edits to a file with the ID specified in the request.
         * @summary Save file edits
         * @param {FilesApiSaveEditingFileFromFormRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         * @throws {RequiredError}
         */
        saveEditingFileFromForm(requestParameters: FilesApiSaveEditingFileFromFormRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.saveEditingFileFromForm(requestParameters.fileId, requestParameters.downloadUri, requestParameters.fileExtension, requestParameters.file, requestParameters.forcesave, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves a file with the identifier specified in the request as a PDF document.
         * @summary Save a file as PDF
         * @param {FilesApiSaveFileAsPdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         * @throws {RequiredError}
         */
        saveFileAsPdf(requestParameters: FilesApiSaveFileAsPdfRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.saveFileAsPdf(requestParameters.id, requestParameters.saveAsPdfInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the form role mapping.
         * @summary Save form role mapping
         * @param {FilesApiSaveFormRoleMappingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveFormRoleMapping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/
         * @throws {RequiredError}
         */
        saveFormRoleMapping(requestParameters: FilesApiSaveFormRoleMappingRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.saveFormRoleMapping(requestParameters.fileId, requestParameters.saveFormRoleMappingDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the Custom Filter editing mode to a file with the ID specified in the request.
         * @summary Set the Custom Filter editing mode
         * @param {FilesApiSetCustomFilterTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         * @throws {RequiredError}
         */
        setCustomFilterTag(requestParameters: FilesApiSetCustomFilterTagRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.setCustomFilterTag(requestParameters.fileId, requestParameters.customFilterParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets an external link to a file with the ID specified in the request.
         * @summary Set an external link
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
         * Sets the order of the file with the ID specified in the request.
         * @summary Set file order
         * @param {FilesApiSetFileOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/
         * @throws {RequiredError}
         */
        setFileOrder(requestParameters: FilesApiSetFileOrderRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.setFileOrder(requestParameters.fileId, requestParameters.orderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the order of the files specified in the request.
         * @summary Set order of files
         * @param {FilesApiSetFilesOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         * @throws {RequiredError}
         */
        setFilesOrder(requestParameters: FilesApiSetFilesOrderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryIntegerArrayWrapper> {
            return localVarFp.setFilesOrder(requestParameters.ordersRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
         * @summary Start file editing
         * @param {FilesApiStartEditFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         * @throws {RequiredError}
         */
        startEditFile(requestParameters: FilesApiStartEditFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.startEditFile(requestParameters.fileId, requestParameters.startEdit, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts filling a file with the ID specified in the request.
         * @summary Start file filling
         * @param {FilesApiStartFillingFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startFillingFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/
         * @throws {RequiredError}
         */
        startFillingFile(requestParameters: FilesApiStartFillingFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.startFillingFile(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the favorite status of the file with the ID specified in the request.
         * @summary Change the file favorite status
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
         * Tracks file changes when editing.
         * @summary Track file editing
         * @param {FilesApiTrackEditFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for trackEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/
         * @throws {RequiredError}
         */
        trackEditFile(requestParameters: FilesApiTrackEditFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<KeyValuePairBooleanStringWrapper> {
            return localVarFp.trackEditFile(requestParameters.fileId, requestParameters.tabId, requestParameters.docKeyForTrack, requestParameters.isFinish, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the information of the selected file with the parameters specified in the request.
         * @summary Update a file
         * @param {FilesApiUpdateFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         * @throws {RequiredError}
         */
        updateFile(requestParameters: FilesApiUpdateFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.updateFile(requestParameters.fileId, requestParameters.updateFile, options).then((request) => request(axios, basePath));
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiAddFileToRecent
     */
    readonly fileId: number
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
     * The file Id to change its version history.
     * @type {number}
     * @memberof FilesApiChangeVersionHistory
     */
    readonly fileId: number

    /**
     * The parameters for changing version history.
     * @type {ChangeHistory}
     * @memberof FilesApiChangeVersionHistory
     */
    readonly changeHistory: ChangeHistory
}

/**
 * Request parameters for checkFillFormDraft operation in FilesApi.
 * @export
 * @interface FilesApiCheckFillFormDraftRequest
 */
export interface FilesApiCheckFillFormDraftRequest {
    /**
     * The file ID of the form draft.
     * @type {number}
     * @memberof FilesApiCheckFillFormDraft
     */
    readonly fileId: number

    /**
     * The parameters for checking the form draft filling.
     * @type {CheckFillFormDraft}
     * @memberof FilesApiCheckFillFormDraft
     */
    readonly checkFillFormDraft: CheckFillFormDraft
}

/**
 * Request parameters for copyFileAs operation in FilesApi.
 * @export
 * @interface FilesApiCopyFileAsRequest
 */
export interface FilesApiCopyFileAsRequest {
    /**
     * The file ID to copy.
     * @type {number}
     * @memberof FilesApiCopyFileAs
     */
    readonly fileId: number

    /**
     * The parameters for copying a file.
     * @type {CopyAsJsonElement}
     * @memberof FilesApiCopyFileAs
     */
    readonly copyAsJsonElement: CopyAsJsonElement
}

/**
 * Request parameters for createEditSession operation in FilesApi.
 * @export
 * @interface FilesApiCreateEditSessionRequest
 */
export interface FilesApiCreateEditSessionRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof FilesApiCreateEditSession
     */
    readonly fileId: number

    /**
     * The file size in bytes.
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
     * The folder ID for the file creation.
     * @type {number}
     * @memberof FilesApiCreateFile
     */
    readonly folderId: number

    /**
     * The parameters for creating a file.
     * @type {CreateFileJsonElement}
     * @memberof FilesApiCreateFile
     */
    readonly createFileJsonElement: CreateFileJsonElement
}

/**
 * Request parameters for createFileInMyDocuments operation in FilesApi.
 * @export
 * @interface FilesApiCreateFileInMyDocumentsRequest
 */
export interface FilesApiCreateFileInMyDocumentsRequest {
    /**
     * 
     * @type {CreateFileJsonElement}
     * @memberof FilesApiCreateFileInMyDocuments
     */
    readonly createFileJsonElement?: CreateFileJsonElement
}

/**
 * Request parameters for createFilePrimaryExternalLink operation in FilesApi.
 * @export
 * @interface FilesApiCreateFilePrimaryExternalLinkRequest
 */
export interface FilesApiCreateFilePrimaryExternalLinkRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof FilesApiCreateFilePrimaryExternalLink
     */
    readonly id: number

    /**
     * The file external link parameters.
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
     * The folder ID to create the text or HTML file.
     * @type {number}
     * @memberof FilesApiCreateHtmlFile
     */
    readonly folderId: number

    /**
     * The parameters for creating an HTML or text file.
     * @type {CreateTextOrHtmlFile}
     * @memberof FilesApiCreateHtmlFile
     */
    readonly createTextOrHtmlFile: CreateTextOrHtmlFile
}

/**
 * Request parameters for createHtmlFileInMyDocuments operation in FilesApi.
 * @export
 * @interface FilesApiCreateHtmlFileInMyDocumentsRequest
 */
export interface FilesApiCreateHtmlFileInMyDocumentsRequest {
    /**
     * 
     * @type {CreateTextOrHtmlFile}
     * @memberof FilesApiCreateHtmlFileInMyDocuments
     */
    readonly createTextOrHtmlFile?: CreateTextOrHtmlFile
}

/**
 * Request parameters for createTextFile operation in FilesApi.
 * @export
 * @interface FilesApiCreateTextFileRequest
 */
export interface FilesApiCreateTextFileRequest {
    /**
     * The folder ID to create the text or HTML file.
     * @type {number}
     * @memberof FilesApiCreateTextFile
     */
    readonly folderId: number

    /**
     * The parameters for creating an HTML or text file.
     * @type {CreateTextOrHtmlFile}
     * @memberof FilesApiCreateTextFile
     */
    readonly createTextOrHtmlFile: CreateTextOrHtmlFile
}

/**
 * Request parameters for createTextFileInMyDocuments operation in FilesApi.
 * @export
 * @interface FilesApiCreateTextFileInMyDocumentsRequest
 */
export interface FilesApiCreateTextFileInMyDocumentsRequest {
    /**
     * 
     * @type {CreateTextOrHtmlFile}
     * @memberof FilesApiCreateTextFileInMyDocuments
     */
    readonly createTextOrHtmlFile?: CreateTextOrHtmlFile
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
     * The file ID to delete.
     * @type {number}
     * @memberof FilesApiDeleteFile
     */
    readonly fileId: number

    /**
     * The parameters for deleting a file.
     * @type {Delete}
     * @memberof FilesApiDeleteFile
     */
    readonly _delete: Delete

    /**
     * Specifies whether to return only the current operation
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
     * The file IDs.
     * @type {Array<number>}
     * @memberof FilesApiDeleteTemplates
     */
    readonly requestBody?: Array<number>
}

/**
 * Request parameters for generateXlsx operation in FilesApi.
 * @export
 * @interface FilesApiGenerateXlsxRequest
 */
export interface FilesApiGenerateXlsxRequest {
    /**
     * The file unique identifier.
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetAllFormRoles
     */
    readonly fileId: number
}

/**
 * Request parameters for getEditDiffUrl operation in FilesApi.
 * @export
 * @interface FilesApiGetEditDiffUrlRequest
 */
export interface FilesApiGetEditDiffUrlRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof FilesApiGetEditDiffUrl
     */
    readonly fileId: number

    /**
     * The file version.
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetEditHistory
     */
    readonly fileId: number
}

/**
 * Request parameters for getFileHistory operation in FilesApi.
 * @export
 * @interface FilesApiGetFileHistoryRequest
 */
export interface FilesApiGetFileHistoryRequest {
    /**
     * The file ID of the history request.
     * @type {number}
     * @memberof FilesApiGetFileHistory
     */
    readonly fileId: number

    /**
     * The start date of the history.
     * @type {ApiDateTime}
     * @memberof FilesApiGetFileHistory
     */
    readonly fromDate?: ApiDateTime

    /**
     * The end date of the history.
     * @type {ApiDateTime}
     * @memberof FilesApiGetFileHistory
     */
    readonly toDate?: ApiDateTime

    /**
     * The number of history entries to retrieve for the file log.
     * @type {number}
     * @memberof FilesApiGetFileHistory
     */
    readonly count?: number

    /**
     * The starting index for retrieving a subset of file history entries.
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
     * The file ID.
     * @type {number}
     * @memberof FilesApiGetFileInfo
     */
    readonly fileId: number

    /**
     * The file version.
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetFileLinks
     */
    readonly id: number

    /**
     * The number of items to retrieve in the request.
     * @type {number}
     * @memberof FilesApiGetFileLinks
     */
    readonly count?: number

    /**
     * The starting index for the query results.
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetFilePrimaryExternalLink
     */
    readonly id: number

    /**
     * The number of items to retrieve in the request.
     * @type {number}
     * @memberof FilesApiGetFilePrimaryExternalLink
     */
    readonly count?: number

    /**
     * The starting index for the query results.
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetFileVersionInfo
     */
    readonly fileId: number
}

/**
 * Request parameters for getFillResult operation in FilesApi.
 * @export
 * @interface FilesApiGetFillResultRequest
 */
export interface FilesApiGetFillResultRequest {
    /**
     * The form-filling session ID.
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
     * The file unique identifier.
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetPresignedFileUri
     */
    readonly fileId: number
}

/**
 * Request parameters for getPresignedUri operation in FilesApi.
 * @export
 * @interface FilesApiGetPresignedUriRequest
 */
export interface FilesApiGetPresignedUriRequest {
    /**
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetPresignedUri
     */
    readonly fileId: number
}

/**
 * Request parameters for getProtectedFileUsers operation in FilesApi.
 * @export
 * @interface FilesApiGetProtectedFileUsersRequest
 */
export interface FilesApiGetProtectedFileUsersRequest {
    /**
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiGetProtectedFileUsers
     */
    readonly fileId: number
}

/**
 * Request parameters for getReferenceData operation in FilesApi.
 * @export
 * @interface FilesApiGetReferenceDataRequest
 */
export interface FilesApiGetReferenceDataRequest {
    /**
     * 
     * @type {GetReferenceDataDtoInteger}
     * @memberof FilesApiGetReferenceData
     */
    readonly getReferenceDataDtoInteger?: GetReferenceDataDtoInteger
}

/**
 * Request parameters for isFormPDF operation in FilesApi.
 * @export
 * @interface FilesApiIsFormPDFRequest
 */
export interface FilesApiIsFormPDFRequest {
    /**
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiIsFormPDF
     */
    readonly fileId: number
}

/**
 * Request parameters for lockFile operation in FilesApi.
 * @export
 * @interface FilesApiLockFileRequest
 */
export interface FilesApiLockFileRequest {
    /**
     * The file ID for locking.
     * @type {number}
     * @memberof FilesApiLockFile
     */
    readonly fileId: number

    /**
     * The parameters for locking a file.
     * @type {LockFileParameters}
     * @memberof FilesApiLockFile
     */
    readonly lockFileParameters: LockFileParameters
}

/**
 * Request parameters for manageFormFilling operation in FilesApi.
 * @export
 * @interface FilesApiManageFormFillingRequest
 */
export interface FilesApiManageFormFillingRequest {
    /**
     * 
     * @type {string}
     * @memberof FilesApiManageFormFilling
     */
    readonly fileId: string

    /**
     * 
     * @type {ManageFormFillingDtoInteger}
     * @memberof FilesApiManageFormFilling
     */
    readonly manageFormFillingDtoInteger?: ManageFormFillingDtoInteger
}

/**
 * Request parameters for openEditFile operation in FilesApi.
 * @export
 * @interface FilesApiOpenEditFileRequest
 */
export interface FilesApiOpenEditFileRequest {
    /**
     * The file ID to open.
     * @type {number}
     * @memberof FilesApiOpenEditFile
     */
    readonly fileId: number

    /**
     * The file version to open.
     * @type {number}
     * @memberof FilesApiOpenEditFile
     */
    readonly version?: number

    /**
     * Specifies if the document will be opened for viewing only or not.
     * @type {boolean}
     * @memberof FilesApiOpenEditFile
     */
    readonly view?: boolean

    /**
     * The editor type to open the file.
     * @type {EditorType}
     * @memberof FilesApiOpenEditFile
     */
    readonly editorType?: EditorType

    /**
     * Specifies if the document is opened in the editing mode or not.
     * @type {boolean}
     * @memberof FilesApiOpenEditFile
     */
    readonly edit?: boolean

    /**
     * Specifies if the document is opened in the form-filling mode or not.
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
     * The file ID of the restore version.
     * @type {number}
     * @memberof FilesApiRestoreFileVersion
     */
    readonly fileId: number

    /**
     * The file version of the restore.
     * @type {number}
     * @memberof FilesApiRestoreFileVersion
     */
    readonly version?: number

    /**
     * The file version URL of the restore.
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
     * The editing file ID from the request.
     * @type {number}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly fileId: number

    /**
     * The URI to download the editing file.
     * @type {string}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly downloadUri?: string

    /**
     * The editing file extension from the request.
     * @type {string}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly fileExtension?: string

    /**
     * The edited file to be saved, uploaded as part of the multipart/form-data request.  This property represents the modified file content from the HTTP request form after editing operations.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream.
     * @type {File}
     * @memberof FilesApiSaveEditingFileFromForm
     */
    readonly file?: File

    /**
     * Specifies whether to force save the file or not.
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
     * The file ID to save as PDF.
     * @type {number}
     * @memberof FilesApiSaveFileAsPdf
     */
    readonly id: number

    /**
     * The parameters for saving the file as PDF.
     * @type {SaveAsPdfInteger}
     * @memberof FilesApiSaveFileAsPdf
     */
    readonly saveAsPdfInteger: SaveAsPdfInteger
}

/**
 * Request parameters for saveFormRoleMapping operation in FilesApi.
 * @export
 * @interface FilesApiSaveFormRoleMappingRequest
 */
export interface FilesApiSaveFormRoleMappingRequest {
    /**
     * 
     * @type {string}
     * @memberof FilesApiSaveFormRoleMapping
     */
    readonly fileId: string

    /**
     * 
     * @type {SaveFormRoleMappingDtoInteger}
     * @memberof FilesApiSaveFormRoleMapping
     */
    readonly saveFormRoleMappingDtoInteger?: SaveFormRoleMappingDtoInteger
}

/**
 * Request parameters for setCustomFilterTag operation in FilesApi.
 * @export
 * @interface FilesApiSetCustomFilterTagRequest
 */
export interface FilesApiSetCustomFilterTagRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof FilesApiSetCustomFilterTag
     */
    readonly fileId: number

    /**
     * The parameters for setting the Custom Filter editing mode.
     * @type {CustomFilterParameters}
     * @memberof FilesApiSetCustomFilterTag
     */
    readonly customFilterParameters: CustomFilterParameters
}

/**
 * Request parameters for setFileExternalLink operation in FilesApi.
 * @export
 * @interface FilesApiSetFileExternalLinkRequest
 */
export interface FilesApiSetFileExternalLinkRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof FilesApiSetFileExternalLink
     */
    readonly id: number

    /**
     * The file external link parameters.
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
     * The file unique identifier.
     * @type {number}
     * @memberof FilesApiSetFileOrder
     */
    readonly fileId: number

    /**
     * The file order information.
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
     * @type {OrdersRequestDtoInteger}
     * @memberof FilesApiSetFilesOrder
     */
    readonly ordersRequestDtoInteger?: OrdersRequestDtoInteger
}

/**
 * Request parameters for startEditFile operation in FilesApi.
 * @export
 * @interface FilesApiStartEditFileRequest
 */
export interface FilesApiStartEditFileRequest {
    /**
     * The file ID to start editing.
     * @type {number}
     * @memberof FilesApiStartEditFile
     */
    readonly fileId: number

    /**
     * The file parameters to start editing.
     * @type {StartEdit}
     * @memberof FilesApiStartEditFile
     */
    readonly startEdit: StartEdit
}

/**
 * Request parameters for startFillingFile operation in FilesApi.
 * @export
 * @interface FilesApiStartFillingFileRequest
 */
export interface FilesApiStartFillingFileRequest {
    /**
     * The file ID to start filling.
     * @type {number}
     * @memberof FilesApiStartFillingFile
     */
    readonly fileId: number
}

/**
 * Request parameters for toggleFileFavorite operation in FilesApi.
 * @export
 * @interface FilesApiToggleFileFavoriteRequest
 */
export interface FilesApiToggleFileFavoriteRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof FilesApiToggleFileFavorite
     */
    readonly fileId: number

    /**
     * Specifies if the file is marked as favorite or not.
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
     * The file ID to track editing changes.
     * @type {number}
     * @memberof FilesApiTrackEditFile
     */
    readonly fileId: number

    /**
     * The tab ID to track editing changes.
     * @type {string}
     * @memberof FilesApiTrackEditFile
     */
    readonly tabId?: string

    /**
     * The document key for tracking changes.
     * @type {string}
     * @memberof FilesApiTrackEditFile
     */
    readonly docKeyForTrack?: string

    /**
     * Specifies whether to finish file tracking or not.
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
     * The file ID to update.
     * @type {number}
     * @memberof FilesApiUpdateFile
     */
    readonly fileId: number

    /**
     * The parameters for updating a file.
     * @type {UpdateFile}
     * @memberof FilesApiUpdateFile
     */
    readonly updateFile: UpdateFile
}

/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export class FilesApi extends BaseAPI {
    /**
     * Adds a file with the ID specified in the request to the Recent section.
     * @summary Add a file to the Recent section
     * @param {FilesFilesApiAddFileToRecentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public addFileToRecent(requestParameters: FilesApiAddFileToRecentRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).addFileToRecent(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds files with the IDs specified in the request to the template list.
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
     * Changes the version history of a file with the ID specified in the request.
     * @summary Change version history
     * @param {FilesFilesApiChangeVersionHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public changeVersionHistory(requestParameters: FilesApiChangeVersionHistoryRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).changeVersionHistory(requestParameters.fileId, requestParameters.changeHistory, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the current file is a form draft which can be filled out.
     * @summary Check the form draft filling
     * @param {FilesFilesApiCheckFillFormDraftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public checkFillFormDraft(requestParameters: FilesApiCheckFillFormDraftRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).checkFillFormDraft(requestParameters.fileId, requestParameters.checkFillFormDraft, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Copies (and converts if possible) an existing file to the specified folder.
     * @summary Copy a file
     * @param {FilesFilesApiCopyFileAsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public copyFileAs(requestParameters: FilesApiCopyFileAsRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).copyFileAs(requestParameters.fileId, requestParameters.copyAsJsonElement, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).
     * @summary Create the editing session
     * @param {FilesFilesApiCreateEditSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createEditSession(requestParameters: FilesApiCreateEditSessionRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createEditSession(requestParameters.fileId, requestParameters.fileSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new file in the specified folder with the title specified in the request.
     * @summary Create a file
     * @param {FilesFilesApiCreateFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFile(requestParameters: FilesApiCreateFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFile(requestParameters.folderId, requestParameters.createFileJsonElement, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new file in the My documents section with the title specified in the request.
     * @summary Create a file in the My documents section
     * @param {FilesFilesApiCreateFileInMyDocumentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFileInMyDocuments(requestParameters: FilesApiCreateFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFileInMyDocuments(requestParameters.createFileJsonElement, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a primary external link by the identifier specified in the request.
     * @summary Create primary external link
     * @param {FilesFilesApiCreateFilePrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFilePrimaryExternalLink(requestParameters: FilesApiCreateFilePrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFilePrimaryExternalLink(requestParameters.id, requestParameters.fileLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
     * @summary Create an HTML file
     * @param {FilesFilesApiCreateHtmlFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createHtmlFile(requestParameters: FilesApiCreateHtmlFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createHtmlFile(requestParameters.folderId, requestParameters.createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an HTML (.html) file in the My documents section with the title and contents specified in the request.
     * @summary Create an HTML file in the My documents section
     * @param {FilesFilesApiCreateHtmlFileInMyDocumentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createHtmlFileInMyDocuments(requestParameters: FilesApiCreateHtmlFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createHtmlFileInMyDocuments(requestParameters.createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
     * @summary Create a text file
     * @param {FilesFilesApiCreateTextFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createTextFile(requestParameters: FilesApiCreateTextFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createTextFile(requestParameters.folderId, requestParameters.createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a text (.txt) file in the My documents section with the title and contents specified in the request.
     * @summary Create a text file in the My documents section
     * @param {FilesFilesApiCreateTextFileInMyDocumentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createTextFileInMyDocuments(requestParameters: FilesApiCreateTextFileInMyDocumentsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createTextFileInMyDocuments(requestParameters.createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates thumbnails for the files with the IDs specified in the request.
     * @summary Create file thumbnails
     * @param {FilesFilesApiCreateThumbnailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createThumbnails(requestParameters: FilesApiCreateThumbnailsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).createThumbnails(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a file with the ID specified in the request.
     * @summary Delete a file
     * @param {FilesFilesApiDeleteFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteFile(requestParameters: FilesApiDeleteFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteFile(requestParameters.fileId, requestParameters._delete, requestParameters.returnSingleOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes files with the IDs specified in the request from the Recent section.
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
     * Removes files with the IDs specified in the request from the template list.
     * @summary Delete template files
     * @param {FilesFilesApiDeleteTemplatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteTemplates(requestParameters: FilesApiDeleteTemplatesRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteTemplates(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Triggers asynchronous XLSX report generation for the specified form file.
     * @summary Generate XLSX report
     * @param {FilesFilesApiGenerateXlsxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public generateXlsx(requestParameters: FilesApiGenerateXlsxRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).generateXlsx(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all roles for the specified form.
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
     * Returns a URL to the changes of a file version specified in the request.
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
     * Returns the version history of a file with the ID specified in the request.
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
     * Returns the list of actions performed on the file with the specified identifier.
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
     * Returns the detailed information about a file with the ID specified in the request.
     * @summary Get file information
     * @param {FilesFilesApiGetFileInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileInfo(requestParameters: FilesApiGetFileInfoRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFileInfo(requestParameters.fileId, requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the external links of a file with the ID specified in the request.
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
     * Returns the primary external link by the identifier specified in the request.
     * @summary Get primary external link
     * @param {FilesFilesApiGetFilePrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFilePrimaryExternalLink(requestParameters: FilesApiGetFilePrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFilePrimaryExternalLink(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about all the available file versions with the ID specified in the request.
     * @summary Get file versions
     * @param {FilesFilesApiGetFileVersionInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileVersionInfo(requestParameters: FilesApiGetFileVersionInfoRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFileVersionInfo(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the result of a form-filling session.
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
     * Returns the results of form submissions.
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
     * Returns a link to download a file with the ID specified in the request asynchronously.
     * @summary Get file download link asynchronously
     * @param {FilesFilesApiGetPresignedFileUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getPresignedFileUri(requestParameters: FilesApiGetPresignedFileUriRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getPresignedFileUri(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
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
     * Returns a list of users with their access rights to the protected file with the ID specified in the request.
     * @summary Get users access rights to the protected file
     * @param {FilesFilesApiGetProtectedFileUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getProtectedFileUsers(requestParameters: FilesApiGetProtectedFileUsersRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getProtectedFileUsers(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.
     * @summary Get reference data
     * @param {FilesFilesApiGetReferenceDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getReferenceData(requestParameters: FilesApiGetReferenceDataRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getReferenceData(requestParameters.getReferenceDataDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the PDF file is a form or not.
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
     * Locks a file with the ID specified in the request.
     * @summary Lock a file
     * @param {FilesFilesApiLockFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public lockFile(requestParameters: FilesApiLockFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).lockFile(requestParameters.fileId, requestParameters.lockFileParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Performs the specified form filling action.
     * @summary Perform form filling action
     * @param {FilesFilesApiManageFormFillingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public manageFormFilling(requestParameters: FilesApiManageFormFillingRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).manageFormFilling(requestParameters.fileId, requestParameters.manageFormFillingDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the initialization configuration of a file to open it in the editor.
     * @summary Open a file configuration
     * @param {FilesFilesApiOpenEditFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public openEditFile(requestParameters: FilesApiOpenEditFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).openEditFile(requestParameters.fileId, requestParameters.version, requestParameters.view, requestParameters.editorType, requestParameters.edit, requestParameters.fill, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores a file version specified in the request.
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
     * Saves edits to a file with the ID specified in the request.
     * @summary Save file edits
     * @param {FilesFilesApiSaveEditingFileFromFormRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveEditingFileFromForm(requestParameters: FilesApiSaveEditingFileFromFormRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).saveEditingFileFromForm(requestParameters.fileId, requestParameters.downloadUri, requestParameters.fileExtension, requestParameters.file, requestParameters.forcesave, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves a file with the identifier specified in the request as a PDF document.
     * @summary Save a file as PDF
     * @param {FilesFilesApiSaveFileAsPdfRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveFileAsPdf(requestParameters: FilesApiSaveFileAsPdfRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).saveFileAsPdf(requestParameters.id, requestParameters.saveAsPdfInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the form role mapping.
     * @summary Save form role mapping
     * @param {FilesFilesApiSaveFormRoleMappingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public saveFormRoleMapping(requestParameters: FilesApiSaveFormRoleMappingRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).saveFormRoleMapping(requestParameters.fileId, requestParameters.saveFormRoleMappingDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the Custom Filter editing mode to a file with the ID specified in the request.
     * @summary Set the Custom Filter editing mode
     * @param {FilesFilesApiSetCustomFilterTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setCustomFilterTag(requestParameters: FilesApiSetCustomFilterTagRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setCustomFilterTag(requestParameters.fileId, requestParameters.customFilterParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets an external link to a file with the ID specified in the request.
     * @summary Set an external link
     * @param {FilesFilesApiSetFileExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setFileExternalLink(requestParameters: FilesApiSetFileExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setFileExternalLink(requestParameters.id, requestParameters.fileLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the order of the file with the ID specified in the request.
     * @summary Set file order
     * @param {FilesFilesApiSetFileOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setFileOrder(requestParameters: FilesApiSetFileOrderRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setFileOrder(requestParameters.fileId, requestParameters.orderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the order of the files specified in the request.
     * @summary Set order of files
     * @param {FilesFilesApiSetFilesOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public setFilesOrder(requestParameters: FilesApiSetFilesOrderRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).setFilesOrder(requestParameters.ordersRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
     * @summary Start file editing
     * @param {FilesFilesApiStartEditFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public startEditFile(requestParameters: FilesApiStartEditFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).startEditFile(requestParameters.fileId, requestParameters.startEdit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts filling a file with the ID specified in the request.
     * @summary Start file filling
     * @param {FilesFilesApiStartFillingFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public startFillingFile(requestParameters: FilesApiStartFillingFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).startFillingFile(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the favorite status of the file with the ID specified in the request.
     * @summary Change the file favorite status
     * @param {FilesFilesApiToggleFileFavoriteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public toggleFileFavorite(requestParameters: FilesApiToggleFileFavoriteRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).toggleFileFavorite(requestParameters.fileId, requestParameters.favorite, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tracks file changes when editing.
     * @summary Track file editing
     * @param {FilesFilesApiTrackEditFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public trackEditFile(requestParameters: FilesApiTrackEditFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).trackEditFile(requestParameters.fileId, requestParameters.tabId, requestParameters.docKeyForTrack, requestParameters.isFinish, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the information of the selected file with the parameters specified in the request.
     * @summary Update a file
     * @param {FilesFilesApiUpdateFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public updateFile(requestParameters: FilesApiUpdateFileRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).updateFile(requestParameters.fileId, requestParameters.updateFile, options).then((request) => request(this.axios, this.basePath));
    }
}

