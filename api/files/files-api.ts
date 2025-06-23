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
import type { FileEntryWrapper } from '../../models';
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
import type { FormRoleWrapper } from '../../models';
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
import type { ObjectWrapper } from '../../models';
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
 * FilesFilesApi - axios parameter creator
 * @export
 */
export const FilesFilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
         * @param {ChangeHistory} [changeHistory] The parameters for changing version history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         */
        changeVersionHistory: async (fileId: number, changeHistory?: ChangeHistory, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('changeVersionHistory', 'fileId', fileId)
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
         * @param {CheckFillFormDraft} [checkFillFormDraft] The parameters for checking the form draft filling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         */
        checkFillFormDraft: async (fileId: number, checkFillFormDraft?: CheckFillFormDraft, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('checkFillFormDraft', 'fileId', fileId)
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
         * @param {CopyAsJsonElement} [copyAsJsonElement] The parameters for copying a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         */
        copyFileAs: async (fileId: number, copyAsJsonElement?: CopyAsJsonElement, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('copyFileAs', 'fileId', fileId)
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
         * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).   **Note**: Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
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
         * Creates a new file in the specified folder with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
         * @summary Create a file
         * @param {number} folderId The folder ID for the file creation.
         * @param {CreateFileJsonElement} [createFileJsonElement] The parameters for creating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         */
        createFile: async (folderId: number, createFileJsonElement?: CreateFileJsonElement, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createFile', 'folderId', folderId)
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
         * Creates a new file in the \"My documents\" section with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
         * @summary Create a file in the \"My documents\" section
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
         * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
         * @summary Create an HTML file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         */
        createHtmlFile: async (folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createHtmlFile', 'folderId', folderId)
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
         * Creates an HTML (.html) file in the \"My documents\" section with the title and contents specified in the request.
         * @summary Create an HTML file in the \"My documents\" section
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
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-primary-external-link/
         */
        createPrimaryExternalLink: async (id: number, fileLinkRequest?: FileLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createPrimaryExternalLink', 'id', id)
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
         * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
         * @summary Create a text file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         */
        createTextFile: async (folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('createTextFile', 'folderId', folderId)
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
         * Creates a text (.txt) file in the \"My documents\" section with the title and contents specified in the request.
         * @summary Create a text file in the \"My documents\" section
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         */
        deleteFile: async (fileId: number, _delete: Delete, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Removes files with the IDs specified in the request from the \"Recent\" section.
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
         * Returns all roles for the specified form.
         * @summary Get form roles
         * @param {number} fileId The file ID of the request.
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
         * @param {number} fileId The file ID of the request.
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
         * @param {number} id The file ID of the request.
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
         * @param {number} id The file ID of the request.
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
         * @param {number} fileId The file ID of the request.
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
         * Returns a link to download a file with the ID specified in the request asynchronously.
         * @summary Get file download link asynchronously
         * @param {number} fileId The file ID of the request.
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
         * @param {number} fileId The file ID of the request.
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
         * @param {number} fileId The file ID of the request.
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
         * @param {number} fileId The file ID of the request.
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
         * @param {LockFileParameters} [lockFileParameters] The parameters for locking a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         */
        lockFile: async (fileId: number, lockFileParameters?: LockFileParameters, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('lockFile', 'fileId', fileId)
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

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * @param {string} [fileExtension] The editing file extension from the request.
         * @param {string} [downloadUri] The URI to download the editing file.
         * @param {File} [file] The request file stream.
         * @param {boolean} [forcesave] Specifies whether to force save the file or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         */
        saveEditingFileFromForm: async (fileId: number, fileExtension?: string, downloadUri?: string, file?: File, forcesave?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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


            if (fileExtension !== undefined) { 
                localVarFormParams.append('FileExtension', fileExtension as any);
            }
    
            if (downloadUri !== undefined) { 
                localVarFormParams.append('DownloadUri', downloadUri as any);
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
         * @param {SaveAsPdfInteger} [saveAsPdfInteger] The parameters for saving file as PDF.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         */
        saveFileAsPdf: async (id: number, saveAsPdfInteger?: SaveAsPdfInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('saveFileAsPdf', 'id', id)
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
         * @param {CustomFilterParameters} [customFilterParameters] The parameters for setting the Custom Filter editing mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         */
        setCustomFilterTag: async (fileId: number, customFilterParameters?: CustomFilterParameters, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setCustomFilterTag', 'fileId', fileId)
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
         * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-external-link/
         */
        setExternalLink: async (id: number, fileLinkRequest?: FileLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setExternalLink', 'id', id)
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
         * Sets order of the file with ID specified in the request.
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
         * Sets order of the files.
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
         * @param {StartEdit} [startEdit] The file parameters to start editing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         */
        startEditFile: async (fileId: number, startEdit?: StartEdit, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('startEditFile', 'fileId', fileId)
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
         * @param {UpdateFile} [updateFile] The parameters for updating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         */
        updateFile: async (fileId: number, updateFile?: UpdateFile, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateFile', 'fileId', fileId)
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
 * FilesFilesApi - functional programming interface
 * @export
 */
export const FilesFilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesFilesApiAxiosParamCreator(configuration)
    return {
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.addTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the version history of a file with the ID specified in the request.
         * @summary Change version history
         * @param {number} fileId The file Id to change its version history.
         * @param {ChangeHistory} [changeHistory] The parameters for changing version history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         */
        async changeVersionHistory(fileId: number, changeHistory?: ChangeHistory, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeVersionHistory(fileId, changeHistory, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.changeVersionHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the current file is a form draft which can be filled out.
         * @summary Check the form draft filling
         * @param {number} fileId The file ID of the form draft.
         * @param {CheckFillFormDraft} [checkFillFormDraft] The parameters for checking the form draft filling.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         */
        async checkFillFormDraft(fileId: number, checkFillFormDraft?: CheckFillFormDraft, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkFillFormDraft(fileId, checkFillFormDraft, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.checkFillFormDraft']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Copies (and converts if possible) an existing file to the specified folder.
         * @summary Copy a file
         * @param {number} fileId The file ID to copy.
         * @param {CopyAsJsonElement} [copyAsJsonElement] The parameters for copying a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         */
        async copyFileAs(fileId: number, copyAsJsonElement?: CopyAsJsonElement, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copyFileAs(fileId, copyAsJsonElement, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.copyFileAs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).   **Note**: Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
         * @summary Create the editing session
         * @param {number} fileId The file ID.
         * @param {number} [fileSize] The file size in bytes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         */
        async createEditSession(fileId: number, fileSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEditSession(fileId, fileSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createEditSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a new file in the specified folder with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
         * @summary Create a file
         * @param {number} folderId The folder ID for the file creation.
         * @param {CreateFileJsonElement} [createFileJsonElement] The parameters for creating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         */
        async createFile(folderId: number, createFileJsonElement?: CreateFileJsonElement, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFile(folderId, createFileJsonElement, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a new file in the \"My documents\" section with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
         * @summary Create a file in the \"My documents\" section
         * @param {CreateFileJsonElement} [createFileJsonElement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         */
        async createFileInMyDocuments(createFileJsonElement?: CreateFileJsonElement, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFileInMyDocuments(createFileJsonElement, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
         * @summary Create an HTML file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         */
        async createHtmlFile(folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createHtmlFile(folderId, createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createHtmlFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an HTML (.html) file in the \"My documents\" section with the title and contents specified in the request.
         * @summary Create an HTML file in the \"My documents\" section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         */
        async createHtmlFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createHtmlFileInMyDocuments(createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createHtmlFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-primary-external-link/
         */
        async createPrimaryExternalLink(id: number, fileLinkRequest?: FileLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPrimaryExternalLink(id, fileLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
         * @summary Create a text file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         */
        async createTextFile(folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTextFile(folderId, createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createTextFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a text (.txt) file in the \"My documents\" section with the title and contents specified in the request.
         * @summary Create a text file in the \"My documents\" section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         */
        async createTextFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTextFileInMyDocuments(createTextOrHtmlFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createTextFileInMyDocuments']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.createThumbnails']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a file with the ID specified in the request.
         * @summary Delete a file
         * @param {number} fileId The file ID to delete.
         * @param {Delete} _delete The parameters for deleting a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         */
        async deleteFile(fileId: number, _delete: Delete, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFile(fileId, _delete, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.deleteFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes files with the IDs specified in the request from the \"Recent\" section.
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.deleteRecent']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.deleteTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns all roles for the specified form.
         * @summary Get form roles
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllFormRoles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/
         */
        async getAllFormRoles(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormRoleArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllFormRoles(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getAllFormRoles']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getEditDiffUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the version history of a file with the ID specified in the request.
         * @summary Get version history
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEditHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/
         */
        async getEditHistory(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditHistoryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEditHistory(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getEditHistory']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getFileHistory']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getFileInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the external links of a file with the ID specified in the request.
         * @summary Get file external links
         * @param {number} id The file ID of the request.
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getFileLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
         * @param {number} id The file ID of the request.
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getFilePrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about all the available file versions with the ID specified in the request.
         * @summary Get file versions
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         */
        async getFileVersionInfo(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileVersionInfo(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getFileVersionInfo']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getFillResult']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a link to download a file with the ID specified in the request asynchronously.
         * @summary Get file download link asynchronously
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedFileUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/
         */
        async getPresignedFileUri(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPresignedFileUri(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getPresignedFileUri']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
         * @summary Get file download link
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPresignedUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/
         */
        async getPresignedUri(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPresignedUri(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getPresignedUri']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users with their access rights to the protected file with the ID specified in the request.
         * @summary Get users access rights to the protected file
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         */
        async getProtectedFileUsers(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MentionWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProtectedFileUsers(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getProtectedFileUsers']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.getReferenceData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the PDF file is a form or not.
         * @summary Check the PDF file
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for isFormPDF operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/
         */
        async isFormPDF(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.isFormPDF(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.isFormPDF']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Locks a file with the ID specified in the request.
         * @summary Lock a file
         * @param {number} fileId The file ID for locking.
         * @param {LockFileParameters} [lockFileParameters] The parameters for locking a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         */
        async lockFile(fileId: number, lockFileParameters?: LockFileParameters, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lockFile(fileId, lockFileParameters, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.lockFile']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.manageFormFilling']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.openEditFile']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.restoreFileVersion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves edits to a file with the ID specified in the request.
         * @summary Save file edits
         * @param {number} fileId The editing file ID from the request.
         * @param {string} [fileExtension] The editing file extension from the request.
         * @param {string} [downloadUri] The URI to download the editing file.
         * @param {File} [file] The request file stream.
         * @param {boolean} [forcesave] Specifies whether to force save the file or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         */
        async saveEditingFileFromForm(fileId: number, fileExtension?: string, downloadUri?: string, file?: File, forcesave?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveEditingFileFromForm(fileId, fileExtension, downloadUri, file, forcesave, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.saveEditingFileFromForm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves a file with the identifier specified in the request as a PDF document.
         * @summary Save a file as PDF
         * @param {number} id The file ID to save as PDF.
         * @param {SaveAsPdfInteger} [saveAsPdfInteger] The parameters for saving file as PDF.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         */
        async saveFileAsPdf(id: number, saveAsPdfInteger?: SaveAsPdfInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveFileAsPdf(id, saveAsPdfInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.saveFileAsPdf']?.[localVarOperationServerIndex]?.url;
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
        async saveFormRoleMapping(fileId: string, saveFormRoleMappingDtoInteger?: SaveFormRoleMappingDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormRoleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveFormRoleMapping(fileId, saveFormRoleMappingDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.saveFormRoleMapping']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the Custom Filter editing mode to a file with the ID specified in the request.
         * @summary Set the Custom Filter editing mode
         * @param {number} fileId The file ID.
         * @param {CustomFilterParameters} [customFilterParameters] The parameters for setting the Custom Filter editing mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         */
        async setCustomFilterTag(fileId: number, customFilterParameters?: CustomFilterParameters, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setCustomFilterTag(fileId, customFilterParameters, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.setCustomFilterTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets an external link to a file with the ID specified in the request.
         * @summary Set an external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-external-link/
         */
        async setExternalLink(id: number, fileLinkRequest?: FileLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setExternalLink(id, fileLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.setExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets order of the file with ID specified in the request.
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.setFileOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets order of the files.
         * @summary Set order of files
         * @param {OrdersRequestDtoInteger} [ordersRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         */
        async setFilesOrder(ordersRequestDtoInteger?: OrdersRequestDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFilesOrder(ordersRequestDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.setFilesOrder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
         * @summary Start file editing
         * @param {number} fileId The file ID to start editing.
         * @param {StartEdit} [startEdit] The file parameters to start editing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         */
        async startEditFile(fileId: number, startEdit?: StartEdit, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startEditFile(fileId, startEdit, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.startEditFile']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.startFillingFile']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.trackEditFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the information of the selected file with the parameters specified in the request.
         * @summary Update a file
         * @param {number} fileId The file ID to update.
         * @param {UpdateFile} [updateFile] The parameters for updating a file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         */
        async updateFile(fileId: number, updateFile?: UpdateFile, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFile(fileId, updateFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesFilesApi.updateFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesFilesApi - factory interface
 * @export
 */
export const FilesFilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesFilesApiFp(configuration)
    return {
        /**
         * Adds files with the IDs specified in the request to the template list.
         * @summary Add template files
         * @param {TemplatesRequestDto} [templatesRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for addTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-templates/
         * @throws {RequiredError}
         */
        addTemplates(templatesRequestDto?: TemplatesRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.addTemplates(templatesRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the version history of a file with the ID specified in the request.
         * @summary Change version history
         * @param {number} fileId The file Id to change its version history.
         * @param {ChangeHistory} [changeHistory] The parameters for changing version history.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeVersionHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/
         * @throws {RequiredError}
         */
        changeVersionHistory(fileId: number, changeHistory?: ChangeHistory, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerArrayWrapper> {
            return localVarFp.changeVersionHistory(fileId, changeHistory, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the current file is a form draft which can be filled out.
         * @summary Check the form draft filling
         * @param {number} fileId The file ID of the form draft.
         * @param {CheckFillFormDraft} [checkFillFormDraft] The parameters for checking the form draft filling.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkFillFormDraft operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/
         * @throws {RequiredError}
         */
        checkFillFormDraft(fileId: number, checkFillFormDraft?: CheckFillFormDraft, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.checkFillFormDraft(fileId, checkFillFormDraft, options).then((request) => request(axios, basePath));
        },
        /**
         * Copies (and converts if possible) an existing file to the specified folder.
         * @summary Copy a file
         * @param {number} fileId The file ID to copy.
         * @param {CopyAsJsonElement} [copyAsJsonElement] The parameters for copying a file.
         * @param {*} [options] Override http request option.
         * REST API Reference for copyFileAs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/
         * @throws {RequiredError}
         */
        copyFileAs(fileId: number, copyAsJsonElement?: CopyAsJsonElement, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryWrapper> {
            return localVarFp.copyFileAs(fileId, copyAsJsonElement, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).   **Note**: Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
         * @summary Create the editing session
         * @param {number} fileId The file ID.
         * @param {number} [fileSize] The file size in bytes.
         * @param {*} [options] Override http request option.
         * REST API Reference for createEditSession operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/
         * @throws {RequiredError}
         */
        createEditSession(fileId: number, fileSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.createEditSession(fileId, fileSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new file in the specified folder with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
         * @summary Create a file
         * @param {number} folderId The folder ID for the file creation.
         * @param {CreateFileJsonElement} [createFileJsonElement] The parameters for creating a file.
         * @param {*} [options] Override http request option.
         * REST API Reference for createFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/
         * @throws {RequiredError}
         */
        createFile(folderId: number, createFileJsonElement?: CreateFileJsonElement, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createFile(folderId, createFileJsonElement, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new file in the \"My documents\" section with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
         * @summary Create a file in the \"My documents\" section
         * @param {CreateFileJsonElement} [createFileJsonElement] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/
         * @throws {RequiredError}
         */
        createFileInMyDocuments(createFileJsonElement?: CreateFileJsonElement, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createFileInMyDocuments(createFileJsonElement, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
         * @summary Create an HTML file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * REST API Reference for createHtmlFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/
         * @throws {RequiredError}
         */
        createHtmlFile(folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createHtmlFile(folderId, createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an HTML (.html) file in the \"My documents\" section with the title and contents specified in the request.
         * @summary Create an HTML file in the \"My documents\" section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createHtmlFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/
         * @throws {RequiredError}
         */
        createHtmlFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createHtmlFileInMyDocuments(createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a primary external link by the identifier specified in the request.
         * @summary Create primary external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-primary-external-link/
         * @throws {RequiredError}
         */
        createPrimaryExternalLink(id: number, fileLinkRequest?: FileLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.createPrimaryExternalLink(id, fileLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
         * @summary Create a text file
         * @param {number} folderId The folder ID to create the text or HTML file.
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
         * @param {*} [options] Override http request option.
         * REST API Reference for createTextFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/
         * @throws {RequiredError}
         */
        createTextFile(folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createTextFile(folderId, createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a text (.txt) file in the \"My documents\" section with the title and contents specified in the request.
         * @summary Create a text file in the \"My documents\" section
         * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createTextFileInMyDocuments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/
         * @throws {RequiredError}
         */
        createTextFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.createTextFileInMyDocuments(createTextOrHtmlFile, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates thumbnails for the files with the IDs specified in the request.
         * @summary Create file thumbnails
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-thumbnails/
         * @throws {RequiredError}
         */
        createThumbnails(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.createThumbnails(baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a file with the ID specified in the request.
         * @summary Delete a file
         * @param {number} fileId The file ID to delete.
         * @param {Delete} _delete The parameters for deleting a file.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/
         * @throws {RequiredError}
         */
        deleteFile(fileId: number, _delete: Delete, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationArrayWrapper> {
            return localVarFp.deleteFile(fileId, _delete, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes files with the IDs specified in the request from the \"Recent\" section.
         * @summary Delete recent files
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/
         * @throws {RequiredError}
         */
        deleteRecent(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<NoContentResultWrapper> {
            return localVarFp.deleteRecent(baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes files with the IDs specified in the request from the template list.
         * @summary Delete template files
         * @param {Array<number>} [requestBody] The file IDs.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/
         * @throws {RequiredError}
         */
        deleteTemplates(requestBody?: Array<number>, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteTemplates(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all roles for the specified form.
         * @summary Get form roles
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllFormRoles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/
         * @throws {RequiredError}
         */
        getAllFormRoles(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<FormRoleArrayWrapper> {
            return localVarFp.getAllFormRoles(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a URL to the changes of a file version specified in the request.
         * @summary Get changes URL
         * @param {number} fileId The file ID.
         * @param {number} [version] The file version.
         * @param {*} [options] Override http request option.
         * REST API Reference for getEditDiffUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/
         * @throws {RequiredError}
         */
        getEditDiffUrl(fileId: number, version?: number, options?: RawAxiosRequestConfig): AxiosPromise<EditHistoryDataWrapper> {
            return localVarFp.getEditDiffUrl(fileId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the version history of a file with the ID specified in the request.
         * @summary Get version history
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getEditHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/
         * @throws {RequiredError}
         */
        getEditHistory(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<EditHistoryArrayWrapper> {
            return localVarFp.getEditHistory(fileId, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getFileHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/
         * @throws {RequiredError}
         */
        getFileHistory(fileId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<HistoryArrayWrapper> {
            return localVarFp.getFileHistory(fileId, fromDate, toDate, count, startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about a file with the ID specified in the request.
         * @summary Get file information
         * @param {number} fileId The file ID.
         * @param {number} [version] The file version.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/
         * @throws {RequiredError}
         */
        getFileInfo(fileId: number, version?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.getFileInfo(fileId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the external links of a file with the ID specified in the request.
         * @summary Get file external links
         * @param {number} id The file ID of the request.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/
         * @throws {RequiredError}
         */
        getFileLinks(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFileLinks(id, count, startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the primary external link by the identifier specified in the request.
         * @summary Get primary external link
         * @param {number} id The file ID of the request.
         * @param {number} [count] The number of items to retrieve in the request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilePrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/
         * @throws {RequiredError}
         */
        getFilePrimaryExternalLink(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.getFilePrimaryExternalLink(id, count, startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about all the available file versions with the ID specified in the request.
         * @summary Get file versions
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileVersionInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/
         * @throws {RequiredError}
         */
        getFileVersionInfo(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerArrayWrapper> {
            return localVarFp.getFileVersionInfo(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the result of a form-filling session.
         * @summary Get form-filling result
         * @param {string} [fillingSessionId] The form-filling session ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFillResult operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/
         * @throws {RequiredError}
         */
        getFillResult(fillingSessionId?: string, options?: RawAxiosRequestConfig): AxiosPromise<FillingFormResultIntegerWrapper> {
            return localVarFp.getFillResult(fillingSessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a link to download a file with the ID specified in the request asynchronously.
         * @summary Get file download link asynchronously
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPresignedFileUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/
         * @throws {RequiredError}
         */
        getPresignedFileUri(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<FileLinkWrapper> {
            return localVarFp.getPresignedFileUri(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
         * @summary Get file download link
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPresignedUri operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/
         * @throws {RequiredError}
         */
        getPresignedUri(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPresignedUri(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users with their access rights to the protected file with the ID specified in the request.
         * @summary Get users access rights to the protected file
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProtectedFileUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/
         * @throws {RequiredError}
         */
        getProtectedFileUsers(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<MentionWrapperArrayWrapper> {
            return localVarFp.getProtectedFileUsers(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.
         * @summary Get reference data
         * @param {GetReferenceDataDtoInteger} [getReferenceDataDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for getReferenceData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/
         * @throws {RequiredError}
         */
        getReferenceData(getReferenceDataDtoInteger?: GetReferenceDataDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<FileReferenceWrapper> {
            return localVarFp.getReferenceData(getReferenceDataDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the PDF file is a form or not.
         * @summary Check the PDF file
         * @param {number} fileId The file ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for isFormPDF operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/
         * @throws {RequiredError}
         */
        isFormPDF(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.isFormPDF(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Locks a file with the ID specified in the request.
         * @summary Lock a file
         * @param {number} fileId The file ID for locking.
         * @param {LockFileParameters} [lockFileParameters] The parameters for locking a file.
         * @param {*} [options] Override http request option.
         * REST API Reference for lockFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/
         * @throws {RequiredError}
         */
        lockFile(fileId: number, lockFileParameters?: LockFileParameters, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.lockFile(fileId, lockFileParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Performs the specified form filling action.
         * @summary Perform form filling action
         * @param {string} fileId 
         * @param {ManageFormFillingDtoInteger} [manageFormFillingDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for manageFormFilling operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/
         * @throws {RequiredError}
         */
        manageFormFilling(fileId: string, manageFormFillingDtoInteger?: ManageFormFillingDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.manageFormFilling(fileId, manageFormFillingDtoInteger, options).then((request) => request(axios, basePath));
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
         * REST API Reference for openEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/
         * @throws {RequiredError}
         */
        openEditFile(fileId: number, version?: number, view?: boolean, editorType?: EditorType, edit?: boolean, fill?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<ConfigurationIntegerWrapper> {
            return localVarFp.openEditFile(fileId, version, view, editorType, edit, fill, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores a file version specified in the request.
         * @summary Restore a file version
         * @param {number} fileId The file ID of the restore version.
         * @param {number} [version] The file version of the restore.
         * @param {string} [url] The file version URL of the restore.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreFileVersion operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/
         * @throws {RequiredError}
         */
        restoreFileVersion(fileId: number, version?: number, url?: string, options?: RawAxiosRequestConfig): AxiosPromise<EditHistoryArrayWrapper> {
            return localVarFp.restoreFileVersion(fileId, version, url, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves edits to a file with the ID specified in the request.
         * @summary Save file edits
         * @param {number} fileId The editing file ID from the request.
         * @param {string} [fileExtension] The editing file extension from the request.
         * @param {string} [downloadUri] The URI to download the editing file.
         * @param {File} [file] The request file stream.
         * @param {boolean} [forcesave] Specifies whether to force save the file or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveEditingFileFromForm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/
         * @throws {RequiredError}
         */
        saveEditingFileFromForm(fileId: number, fileExtension?: string, downloadUri?: string, file?: File, forcesave?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.saveEditingFileFromForm(fileId, fileExtension, downloadUri, file, forcesave, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves a file with the identifier specified in the request as a PDF document.
         * @summary Save a file as PDF
         * @param {number} id The file ID to save as PDF.
         * @param {SaveAsPdfInteger} [saveAsPdfInteger] The parameters for saving file as PDF.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveFileAsPdf operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/
         * @throws {RequiredError}
         */
        saveFileAsPdf(id: number, saveAsPdfInteger?: SaveAsPdfInteger, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.saveFileAsPdf(id, saveAsPdfInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the form role mapping.
         * @summary Save form role mapping
         * @param {string} fileId 
         * @param {SaveFormRoleMappingDtoInteger} [saveFormRoleMappingDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveFormRoleMapping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/
         * @throws {RequiredError}
         */
        saveFormRoleMapping(fileId: string, saveFormRoleMappingDtoInteger?: SaveFormRoleMappingDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<FormRoleWrapper> {
            return localVarFp.saveFormRoleMapping(fileId, saveFormRoleMappingDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the Custom Filter editing mode to a file with the ID specified in the request.
         * @summary Set the Custom Filter editing mode
         * @param {number} fileId The file ID.
         * @param {CustomFilterParameters} [customFilterParameters] The parameters for setting the Custom Filter editing mode.
         * @param {*} [options] Override http request option.
         * REST API Reference for setCustomFilterTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/
         * @throws {RequiredError}
         */
        setCustomFilterTag(fileId: number, customFilterParameters?: CustomFilterParameters, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.setCustomFilterTag(fileId, customFilterParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets an external link to a file with the ID specified in the request.
         * @summary Set an external link
         * @param {number} id The file ID.
         * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-external-link/
         * @throws {RequiredError}
         */
        setExternalLink(id: number, fileLinkRequest?: FileLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.setExternalLink(id, fileLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets order of the file with ID specified in the request.
         * @summary Set file order
         * @param {number} fileId The file unique identifier.
         * @param {OrderRequestDto} [orderRequestDto] The file order information.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/
         * @throws {RequiredError}
         */
        setFileOrder(fileId: number, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.setFileOrder(fileId, orderRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets order of the files.
         * @summary Set order of files
         * @param {OrdersRequestDtoInteger} [ordersRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setFilesOrder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/
         * @throws {RequiredError}
         */
        setFilesOrder(ordersRequestDtoInteger?: OrdersRequestDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerArrayWrapper> {
            return localVarFp.setFilesOrder(ordersRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
         * @summary Start file editing
         * @param {number} fileId The file ID to start editing.
         * @param {StartEdit} [startEdit] The file parameters to start editing.
         * @param {*} [options] Override http request option.
         * REST API Reference for startEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/
         * @throws {RequiredError}
         */
        startEditFile(fileId: number, startEdit?: StartEdit, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.startEditFile(fileId, startEdit, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts filling a file with the ID specified in the request.
         * @summary Start file filling
         * @param {number} fileId The file ID to start filling.
         * @param {*} [options] Override http request option.
         * REST API Reference for startFillingFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/
         * @throws {RequiredError}
         */
        startFillingFile(fileId: number, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.startFillingFile(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Tracks file changes when editing.
         * @summary Track file editing
         * @param {number} fileId The file ID to track editing changes.
         * @param {string} [tabId] The tab ID to track editing changes.
         * @param {string} [docKeyForTrack] The document key for tracking changes.
         * @param {boolean} [isFinish] Specifies whether to finish file tracking or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for trackEditFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/
         * @throws {RequiredError}
         */
        trackEditFile(fileId: number, tabId?: string, docKeyForTrack?: string, isFinish?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<KeyValuePairBooleanStringWrapper> {
            return localVarFp.trackEditFile(fileId, tabId, docKeyForTrack, isFinish, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the information of the selected file with the parameters specified in the request.
         * @summary Update a file
         * @param {number} fileId The file ID to update.
         * @param {UpdateFile} [updateFile] The parameters for updating a file.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/
         * @throws {RequiredError}
         */
        updateFile(fileId: number, updateFile?: UpdateFile, options?: RawAxiosRequestConfig): AxiosPromise<FileIntegerWrapper> {
            return localVarFp.updateFile(fileId, updateFile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesFilesApi - object-oriented interface
 * @export
 * @class FilesFilesApi
 * @extends {BaseAPI}
 */
export class FilesFilesApi extends BaseAPI {
    /**
     * Adds files with the IDs specified in the request to the template list.
     * @summary Add template files
     * @param {TemplatesRequestDto} [templatesRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public addTemplates(templatesRequestDto?: TemplatesRequestDto, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).addTemplates(templatesRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the version history of a file with the ID specified in the request.
     * @summary Change version history
     * @param {number} fileId The file Id to change its version history.
     * @param {ChangeHistory} [changeHistory] The parameters for changing version history.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public changeVersionHistory(fileId: number, changeHistory?: ChangeHistory, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).changeVersionHistory(fileId, changeHistory, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the current file is a form draft which can be filled out.
     * @summary Check the form draft filling
     * @param {number} fileId The file ID of the form draft.
     * @param {CheckFillFormDraft} [checkFillFormDraft] The parameters for checking the form draft filling.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public checkFillFormDraft(fileId: number, checkFillFormDraft?: CheckFillFormDraft, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).checkFillFormDraft(fileId, checkFillFormDraft, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Copies (and converts if possible) an existing file to the specified folder.
     * @summary Copy a file
     * @param {number} fileId The file ID to copy.
     * @param {CopyAsJsonElement} [copyAsJsonElement] The parameters for copying a file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public copyFileAs(fileId: number, copyAsJsonElement?: CopyAsJsonElement, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).copyFileAs(fileId, copyAsJsonElement, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).   **Note**: Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
     * @summary Create the editing session
     * @param {number} fileId The file ID.
     * @param {number} [fileSize] The file size in bytes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createEditSession(fileId: number, fileSize?: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createEditSession(fileId, fileSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new file in the specified folder with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
     * @summary Create a file
     * @param {number} folderId The folder ID for the file creation.
     * @param {CreateFileJsonElement} [createFileJsonElement] The parameters for creating a file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createFile(folderId: number, createFileJsonElement?: CreateFileJsonElement, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createFile(folderId, createFileJsonElement, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new file in the \"My documents\" section with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
     * @summary Create a file in the \"My documents\" section
     * @param {CreateFileJsonElement} [createFileJsonElement] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createFileInMyDocuments(createFileJsonElement?: CreateFileJsonElement, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createFileInMyDocuments(createFileJsonElement, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
     * @summary Create an HTML file
     * @param {number} folderId The folder ID to create the text or HTML file.
     * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createHtmlFile(folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createHtmlFile(folderId, createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an HTML (.html) file in the \"My documents\" section with the title and contents specified in the request.
     * @summary Create an HTML file in the \"My documents\" section
     * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createHtmlFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createHtmlFileInMyDocuments(createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a primary external link by the identifier specified in the request.
     * @summary Create primary external link
     * @param {number} id The file ID.
     * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createPrimaryExternalLink(id: number, fileLinkRequest?: FileLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createPrimaryExternalLink(id, fileLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
     * @summary Create a text file
     * @param {number} folderId The folder ID to create the text or HTML file.
     * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createTextFile(folderId: number, createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createTextFile(folderId, createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a text (.txt) file in the \"My documents\" section with the title and contents specified in the request.
     * @summary Create a text file in the \"My documents\" section
     * @param {CreateTextOrHtmlFile} [createTextOrHtmlFile] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createTextFileInMyDocuments(createTextOrHtmlFile?: CreateTextOrHtmlFile, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createTextFileInMyDocuments(createTextOrHtmlFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates thumbnails for the files with the IDs specified in the request.
     * @summary Create file thumbnails
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public createThumbnails(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).createThumbnails(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a file with the ID specified in the request.
     * @summary Delete a file
     * @param {number} fileId The file ID to delete.
     * @param {Delete} _delete The parameters for deleting a file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public deleteFile(fileId: number, _delete: Delete, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).deleteFile(fileId, _delete, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes files with the IDs specified in the request from the \"Recent\" section.
     * @summary Delete recent files
     * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public deleteRecent(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).deleteRecent(baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes files with the IDs specified in the request from the template list.
     * @summary Delete template files
     * @param {Array<number>} [requestBody] The file IDs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public deleteTemplates(requestBody?: Array<number>, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).deleteTemplates(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all roles for the specified form.
     * @summary Get form roles
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getAllFormRoles(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getAllFormRoles(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a URL to the changes of a file version specified in the request.
     * @summary Get changes URL
     * @param {number} fileId The file ID.
     * @param {number} [version] The file version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getEditDiffUrl(fileId: number, version?: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getEditDiffUrl(fileId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the version history of a file with the ID specified in the request.
     * @summary Get version history
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getEditHistory(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getEditHistory(fileId, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof FilesFilesApi
     */
    public getFileHistory(fileId: number, fromDate?: ApiDateTime, toDate?: ApiDateTime, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getFileHistory(fileId, fromDate, toDate, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about a file with the ID specified in the request.
     * @summary Get file information
     * @param {number} fileId The file ID.
     * @param {number} [version] The file version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getFileInfo(fileId: number, version?: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getFileInfo(fileId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the external links of a file with the ID specified in the request.
     * @summary Get file external links
     * @param {number} id The file ID of the request.
     * @param {number} [count] The number of items to retrieve in the request.
     * @param {number} [startIndex] The starting index for the query results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getFileLinks(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getFileLinks(id, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the primary external link by the identifier specified in the request.
     * @summary Get primary external link
     * @param {number} id The file ID of the request.
     * @param {number} [count] The number of items to retrieve in the request.
     * @param {number} [startIndex] The starting index for the query results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getFilePrimaryExternalLink(id: number, count?: number, startIndex?: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getFilePrimaryExternalLink(id, count, startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about all the available file versions with the ID specified in the request.
     * @summary Get file versions
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getFileVersionInfo(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getFileVersionInfo(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the result of a form-filling session.
     * @summary Get form-filling result
     * @param {string} [fillingSessionId] The form-filling session ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getFillResult(fillingSessionId?: string, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getFillResult(fillingSessionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a link to download a file with the ID specified in the request asynchronously.
     * @summary Get file download link asynchronously
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getPresignedFileUri(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getPresignedFileUri(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
     * @summary Get file download link
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getPresignedUri(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getPresignedUri(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users with their access rights to the protected file with the ID specified in the request.
     * @summary Get users access rights to the protected file
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getProtectedFileUsers(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getProtectedFileUsers(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.
     * @summary Get reference data
     * @param {GetReferenceDataDtoInteger} [getReferenceDataDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public getReferenceData(getReferenceDataDtoInteger?: GetReferenceDataDtoInteger, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).getReferenceData(getReferenceDataDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the PDF file is a form or not.
     * @summary Check the PDF file
     * @param {number} fileId The file ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public isFormPDF(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).isFormPDF(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Locks a file with the ID specified in the request.
     * @summary Lock a file
     * @param {number} fileId The file ID for locking.
     * @param {LockFileParameters} [lockFileParameters] The parameters for locking a file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public lockFile(fileId: number, lockFileParameters?: LockFileParameters, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).lockFile(fileId, lockFileParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Performs the specified form filling action.
     * @summary Perform form filling action
     * @param {string} fileId 
     * @param {ManageFormFillingDtoInteger} [manageFormFillingDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public manageFormFilling(fileId: string, manageFormFillingDtoInteger?: ManageFormFillingDtoInteger, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).manageFormFilling(fileId, manageFormFillingDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof FilesFilesApi
     */
    public openEditFile(fileId: number, version?: number, view?: boolean, editorType?: EditorType, edit?: boolean, fill?: boolean, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).openEditFile(fileId, version, view, editorType, edit, fill, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores a file version specified in the request.
     * @summary Restore a file version
     * @param {number} fileId The file ID of the restore version.
     * @param {number} [version] The file version of the restore.
     * @param {string} [url] The file version URL of the restore.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public restoreFileVersion(fileId: number, version?: number, url?: string, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).restoreFileVersion(fileId, version, url, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves edits to a file with the ID specified in the request.
     * @summary Save file edits
     * @param {number} fileId The editing file ID from the request.
     * @param {string} [fileExtension] The editing file extension from the request.
     * @param {string} [downloadUri] The URI to download the editing file.
     * @param {File} [file] The request file stream.
     * @param {boolean} [forcesave] Specifies whether to force save the file or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public saveEditingFileFromForm(fileId: number, fileExtension?: string, downloadUri?: string, file?: File, forcesave?: boolean, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).saveEditingFileFromForm(fileId, fileExtension, downloadUri, file, forcesave, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves a file with the identifier specified in the request as a PDF document.
     * @summary Save a file as PDF
     * @param {number} id The file ID to save as PDF.
     * @param {SaveAsPdfInteger} [saveAsPdfInteger] The parameters for saving file as PDF.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public saveFileAsPdf(id: number, saveAsPdfInteger?: SaveAsPdfInteger, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).saveFileAsPdf(id, saveAsPdfInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the form role mapping.
     * @summary Save form role mapping
     * @param {string} fileId 
     * @param {SaveFormRoleMappingDtoInteger} [saveFormRoleMappingDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public saveFormRoleMapping(fileId: string, saveFormRoleMappingDtoInteger?: SaveFormRoleMappingDtoInteger, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).saveFormRoleMapping(fileId, saveFormRoleMappingDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the Custom Filter editing mode to a file with the ID specified in the request.
     * @summary Set the Custom Filter editing mode
     * @param {number} fileId The file ID.
     * @param {CustomFilterParameters} [customFilterParameters] The parameters for setting the Custom Filter editing mode.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public setCustomFilterTag(fileId: number, customFilterParameters?: CustomFilterParameters, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).setCustomFilterTag(fileId, customFilterParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets an external link to a file with the ID specified in the request.
     * @summary Set an external link
     * @param {number} id The file ID.
     * @param {FileLinkRequest} [fileLinkRequest] The file external link parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public setExternalLink(id: number, fileLinkRequest?: FileLinkRequest, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).setExternalLink(id, fileLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets order of the file with ID specified in the request.
     * @summary Set file order
     * @param {number} fileId The file unique identifier.
     * @param {OrderRequestDto} [orderRequestDto] The file order information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public setFileOrder(fileId: number, orderRequestDto?: OrderRequestDto, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).setFileOrder(fileId, orderRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets order of the files.
     * @summary Set order of files
     * @param {OrdersRequestDtoInteger} [ordersRequestDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public setFilesOrder(ordersRequestDtoInteger?: OrdersRequestDtoInteger, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).setFilesOrder(ordersRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
     * @summary Start file editing
     * @param {number} fileId The file ID to start editing.
     * @param {StartEdit} [startEdit] The file parameters to start editing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public startEditFile(fileId: number, startEdit?: StartEdit, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).startEditFile(fileId, startEdit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts filling a file with the ID specified in the request.
     * @summary Start file filling
     * @param {number} fileId The file ID to start filling.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public startFillingFile(fileId: number, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).startFillingFile(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tracks file changes when editing.
     * @summary Track file editing
     * @param {number} fileId The file ID to track editing changes.
     * @param {string} [tabId] The tab ID to track editing changes.
     * @param {string} [docKeyForTrack] The document key for tracking changes.
     * @param {boolean} [isFinish] Specifies whether to finish file tracking or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public trackEditFile(fileId: number, tabId?: string, docKeyForTrack?: string, isFinish?: boolean, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).trackEditFile(fileId, tabId, docKeyForTrack, isFinish, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the information of the selected file with the parameters specified in the request.
     * @summary Update a file
     * @param {number} fileId The file ID to update.
     * @param {UpdateFile} [updateFile] The parameters for updating a file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesFilesApi
     */
    public updateFile(fileId: number, updateFile?: UpdateFile, options?: RawAxiosRequestConfig) {
        return FilesFilesApiFp(this.configuration).updateFile(fileId, updateFile, options).then((request) => request(this.axios, this.basePath));
    }
}

