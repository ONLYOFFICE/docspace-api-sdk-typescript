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
import type { AssignMetadataTemplates } from '../../models';
// @ts-ignore
import type { CreateMetadataTemplateRequestDto } from '../../models';
// @ts-ignore
import type { CustomFieldValueArrayWrapper } from '../../models';
// @ts-ignore
import type { EntryMetadataWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { MetadataFieldRequest } from '../../models';
// @ts-ignore
import type { MetadataFieldWrapper } from '../../models';
// @ts-ignore
import type { MetadataOperationWrapper } from '../../models';
// @ts-ignore
import type { MetadataTemplateArrayWrapper } from '../../models';
// @ts-ignore
import type { MetadataTemplateWrapper } from '../../models';
// @ts-ignore
import type { SetCustomFields } from '../../models';
// @ts-ignore
import type { SetMetadataValues } from '../../models';
// @ts-ignore
import type { UpdateMetadataFieldRequest } from '../../models';
// @ts-ignore
import type { UpdateMetadataTemplate } from '../../models';
/**
 * MetadataApi - axios parameter creator
 * @export
 */
export const MetadataApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Assigns one or more metadata templates to a file, so its fields can be filled with  `PUT api/2.0/files/metadata/file/{fileId}/values`. The caller needs the right to edit the file. The assignment writes  no values and is idempotent: a template the file already carries is skipped, the others are added, an empty list  changes nothing. The call finishes in the request, nothing runs in the background. A template a cascading folder above  the file already provides stays inherited. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404. To take a template off the file use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`.
         * @summary Assign templates to a file
         * @param {number} fileId The file ID.
         * @param {AssignMetadataTemplates} assignMetadataTemplates The parameters for assigning templates.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for assignFileTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/assign-file-templates/
         */
        assignFileTemplates: async (fileId: number, assignMetadataTemplates: AssignMetadataTemplates, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('assignFileTemplates', 'fileId', fileId)
            // verify required parameter 'assignMetadataTemplates' is not null or undefined
            assertParamExists('assignFileTemplates', 'assignMetadataTemplates', assignMetadataTemplates)

            const localVarPath = `/api/2.0/files/metadata/file/{fileId}/templates`
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
            localVarRequestOptions.data = serializeDataIfNeeded(assignMetadataTemplates, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Assigns one or more metadata templates to a folder or a room and, with `cascade` set, propagates them to every  folder and file below it. The caller needs the right to edit the folder; for a room that is its manager. The  assignment of the folder itself finishes in the request and writes no values. The cascade is asynchronous: a pass is  queued that assigns the templates to the whole subtree and copies the values the folder holds for their fields, and  the answer is the status of that pass. Poll `GET api/2.0/files/metadata/folder/{folderId}/templates/progress`  until `isCompleted` is true; a failed pass reports its `error` there. The `conflictResolveType` decides what happens  to a value an entry already holds: `Skip` keeps it, `Overwrite` replaces it with the folder\'s value. A folder inside  the subtree that cascades the same template keeps its own values for its content. Entries created in or moved into  the folder later inherit the templates and the values on their own. Without a cascade the answer is a completed  operation without an identifier. A folder the caller cannot edit is answered with 403; a folder, or a template, that  does not exist with 404.
         * @summary Assign templates to a folder
         * @param {number} folderId The folder ID.
         * @param {AssignMetadataTemplates} assignMetadataTemplates The parameters for assigning templates.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for assignFolderTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/assign-folder-templates/
         */
        assignFolderTemplates: async (folderId: number, assignMetadataTemplates: AssignMetadataTemplates, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('assignFolderTemplates', 'folderId', folderId)
            // verify required parameter 'assignMetadataTemplates' is not null or undefined
            assertParamExists('assignFolderTemplates', 'assignMetadataTemplates', assignMetadataTemplates)

            const localVarPath = `/api/2.0/files/metadata/folder/{folderId}/templates`
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
            localVarRequestOptions.data = serializeDataIfNeeded(assignMetadataTemplates, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a field to an existing metadata template. Only a DocSpace admin can change templates. The field name must be  unique within the template regardless of case and at most 255 characters, the type must be one of the published ones,  a choice field needs at least one option and unique option values, a field of another type takes no options. A  field without `order` is placed after the last field of the template. The entries the template is already  assigned to get the field without a value: nothing is written on them and no cascade runs. The answer is the  created field with its generated option identifiers. A template that does not exist is answered with 404, an  invalid field with 400.
         * @summary Add a metadata field
         * @param {number} templateId The template ID.
         * @param {MetadataFieldRequest} metadataFieldRequest The parameters of the field.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-field/
         */
        createField: async (templateId: number, metadataFieldRequest: MetadataFieldRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('createField', 'templateId', templateId)
            // verify required parameter 'metadataFieldRequest' is not null or undefined
            assertParamExists('createField', 'metadataFieldRequest', metadataFieldRequest)

            const localVarPath = `/api/2.0/files/metadata/templates/{templateId}/fields`
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(metadataFieldRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a metadata template for the whole portal, optionally with its fields in one call. Only a DocSpace admin can  create templates. The template name must be unique on the portal regardless of case, at most 255 characters, and the  name `System` is reserved. Every field needs a name unique within the template and a type from the published set; a  choice field requires at least one option and the options must be unique, a field of another type takes no options.  A field without `order` is placed after the fields that have one, in the order of the request. The template and  its fields are stored together: an invalid field rejects the whole request and nothing is created.  The answer is the created template with its fields and the generated option identifiers, which the values written  with `PUT api/2.0/files/metadata/file/{fileId}/values` refer to. A name already in use or an invalid field is  answered with 400; the request of a member who is not a DocSpace admin with 403.
         * @summary Create a metadata template
         * @param {CreateMetadataTemplateRequestDto} [createMetadataTemplateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-template/
         */
        createTemplate: async (createMetadataTemplateRequestDto?: CreateMetadataTemplateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/metadata/templates`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createMetadataTemplateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a metadata field from its template together with every value written for it on any file, folder or room of  the portal. Only a DocSpace admin can change templates. The deletion is irreversible: the affected entries lose the  value at once, their search documents are rebuilt and the clients viewing them are told to refresh. The template and  its other fields stay as they are. A field that does not exist, or that belongs to another template than the one in  the route, is answered with 404.
         * @summary Delete a metadata field
         * @param {number} templateId The template ID.
         * @param {number} fieldId The field ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-field/
         */
        deleteField: async (templateId: number, fieldId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('deleteField', 'templateId', templateId)
            // verify required parameter 'fieldId' is not null or undefined
            assertParamExists('deleteField', 'fieldId', fieldId)

            const localVarPath = `/api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)))
                .replace(`{${"fieldId"}}`, encodeURIComponent(String(fieldId)));
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
         * Deletes a metadata template together with its fields, its assignments and every value written for its fields on any  file, folder or room of the portal. Only a DocSpace admin can delete templates. The deletion is irreversible and there  is no confirmation: the affected entries lose the template at once, their search documents are rebuilt and the clients  viewing them are told to refresh. A template that does not exist, or was already deleted, is answered with 404.  To take the template off a single entry and keep it for the others use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}` instead.
         * @summary Delete a metadata template
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-template/
         */
        deleteTemplate: async (templateId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('deleteTemplate', 'templateId', templateId)

            const localVarPath = `/api/2.0/files/metadata/templates/{templateId}`
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)));
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
         * Reports the cascade pass of a folder started by `PUT api/2.0/files/metadata/folder/{folderId}/templates`: the  running one, otherwise the most recent one. The caller needs read access to the folder, the call is read-only.  `progress` is the share of the subtree processed, `isCompleted` tells the pass is over and `error` carries the reason  of a failed one; a completed pass without an error has written every template and value it was asked for. A folder  that never cascaded, or whose passes were already dropped, is answered with a completed operation without an  identifier rather than with an error. A folder that does not exist is answered with 404.
         * @summary Get cascade progress
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCascadeProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-cascade-progress/
         */
        getCascadeProgress: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getCascadeProgress', 'folderId', folderId)

            const localVarPath = `/api/2.0/files/metadata/folder/{folderId}/templates/progress`
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
         * Returns the metadata of a file: the templates assigned to it, directly or inherited from a cascading folder above  it, each with its fields, and the custom text fields set on the file. The caller needs read access to the file: a  member of the portal, or an anonymous caller through an external link that grants access to the file or to a  folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The call is  read-only. A field carries its value inside it; a field the file holds no value for comes without a `value`.  The custom fields are name and value pairs and are not part of any template. A file without metadata is answered with  empty lists, not with an error. The same shape is returned by `PUT api/2.0/files/metadata/file/{fileId}/values`  after a write. A request with neither a session nor a link key is answered with 401; a file the caller cannot read  with 403, a file that does not exist with 404.
         * @summary Get file metadata
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileMetadata operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-metadata/
         */
        getFileMetadata: async (fileId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFileMetadata', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/metadata/file/{fileId}`
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
         * Returns the metadata of a folder or a room: the templates assigned to it, directly or inherited from a cascading  folder above it, each with its fields, and the custom text fields set on it. The caller needs read access to the  folder: a member of the portal, or an anonymous caller through an external link that grants access to the folder  or to a folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The  call is read-only. A field carries its value inside it; a field the folder holds no value for comes without a  `value`. The custom fields are name and value pairs and are not part of any template. A folder without metadata is  answered with empty lists, not with an error. Whether a template cascades from this folder to its content is not  reported here. A request with neither a session nor a link key is answered with 401; a folder the caller cannot  read with 403, a folder that does not exist with 404.
         * @summary Get folder metadata
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderMetadata operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-metadata/
         */
        getFolderMetadata: async (folderId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderMetadata', 'folderId', folderId)

            const localVarPath = `/api/2.0/files/metadata/folder/{folderId}`
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
         * Returns one metadata template with its fields, in their display order, and the options of its choice fields. Any  member of the portal can read a template, the call is read-only. Use it to resolve the template identifiers a file or  a folder reports in `assignedMetadataTemplates` into names and fields. A template that does not exist is answered  with 404.
         * @summary Get a metadata template
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-template/
         */
        getTemplate: async (templateId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('getTemplate', 'templateId', templateId)

            const localVarPath = `/api/2.0/files/metadata/templates/{templateId}`
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)));
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
         * Lists the metadata templates of the portal with their fields, the dictionary a file, a folder or a room is described  with. Any member of the portal can read it, the list is the same for everyone. The call is read-only. The templates  come back ordered by their creation, each with its fields in their display order and the choice options of the choice  fields; the `visible` parameter narrows the list to the templates shown in the pickers or to the hidden ones, without  it both are returned. An empty list means the portal has no templates yet. The custom text fields set on the entries  are not templates and are not listed here: read them on the entry with `GET api/2.0/files/metadata/file/{fileId}`.
         * @summary Get metadata templates
         * @param {boolean} [visible] Filters the templates by their visibility.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-templates/
         */
        getTemplates: async (visible?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/metadata/templates`;
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

            if (visible !== undefined) {
                localVarQueryParameter['visible'] = visible;
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
         * Sets the custom text fields of a file: free-form name and value pairs that need no template. The caller needs the  right to edit the file. A field is addressed by its name regardless of case: a listed name gets the value, a null or  empty value removes the field from the file, the names not listed are left alone, so a partial request is safe. A name  the portal has not seen yet creates the field for the whole portal, and a name no entry holds a value for any more is  dropped, so the set of names follows the values. A name is at most 255 characters, a value at most 8000, a name may  be listed once and a file holds at most 50 custom fields. The write finishes in the request; the values take part in  the free text search and in the `metadataFilters` of the listings. The answer is the custom fields of the file  after the write. An empty list, a blank, repeated or over-long name, an over-long value or more than 50 fields is  answered with 400; a file the caller cannot edit with 403; a file that does not exist with 404.
         * @summary Set file custom fields
         * @param {number} fileId The file ID.
         * @param {SetCustomFields} setCustomFields The custom fields to set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileCustomFields operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-custom-fields/
         */
        setFileCustomFields: async (fileId: number, setCustomFields: SetCustomFields, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setFileCustomFields', 'fileId', fileId)
            // verify required parameter 'setCustomFields' is not null or undefined
            assertParamExists('setFileCustomFields', 'setCustomFields', setCustomFields)

            const localVarPath = `/api/2.0/files/metadata/file/{fileId}/customfields`
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
            localVarRequestOptions.data = serializeDataIfNeeded(setCustomFields, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Writes the values of metadata fields on a file. The caller needs the right to edit the file: a member with editing  access, or an anonymous caller through an external link that grants editing, with the link key in the  `Request-Token` header or in the `share` query parameter; a link that grants viewing, commenting, reviewing or  form filling only is refused. Every field must belong to a template the file carries, assigned with  `PUT api/2.0/files/metadata/file/{fileId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field, a single option  for a single choice; an empty value clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request, the file is re-indexed for the metadata filters at once. The custom text fields are not  written here: use `PUT api/2.0/files/metadata/file/{fileId}/customFields`. The answer is the whole metadata of the  file after the write, the same shape `GET api/2.0/files/metadata/file/{fileId}` returns. A value of the wrong type,  a field of a template the file does not carry, a field listed twice or a custom field is answered with 400; a  request with neither a session nor a link key with 401; a file the caller cannot edit with 403; a file or a field  that does not exist with 404.
         * @summary Set file metadata values
         * @param {number} fileId The file ID.
         * @param {SetMetadataValues} setMetadataValues The parameters for setting values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileValues operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-values/
         */
        setFileValues: async (fileId: number, setMetadataValues: SetMetadataValues, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('setFileValues', 'fileId', fileId)
            // verify required parameter 'setMetadataValues' is not null or undefined
            assertParamExists('setFileValues', 'setMetadataValues', setMetadataValues)

            const localVarPath = `/api/2.0/files/metadata/file/{fileId}/values`
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
            localVarRequestOptions.data = serializeDataIfNeeded(setMetadataValues, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the custom text fields of a folder or a room: free-form name and value pairs that need no template. The  caller needs the right to edit the folder; for a room that is its manager. A field is addressed by its name  regardless of case: a listed name gets the value, a null or empty value removes the field, the names not listed  are left alone. A name the portal has not seen yet creates the field for the whole portal, and a name no entry  holds a value for any more is dropped. A name is at most 255 characters, a value at most  8000, a name may be listed once and a folder holds at most 50 custom fields. The custom fields never cascade to the  content of the folder. The write finishes in the request; the values take part in the free text search and in the  `metadataFilters` of the listings. The answer is the custom fields of the folder after the write. An empty list, a  blank, repeated or over-long name, an over-long value or more than 50 fields is answered with 400; a folder the  caller cannot edit with 403; a folder that does not exist with 404.
         * @summary Set folder custom fields
         * @param {number} folderId The folder ID.
         * @param {SetCustomFields} setCustomFields The custom fields to set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderCustomFields operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-custom-fields/
         */
        setFolderCustomFields: async (folderId: number, setCustomFields: SetCustomFields, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('setFolderCustomFields', 'folderId', folderId)
            // verify required parameter 'setCustomFields' is not null or undefined
            assertParamExists('setFolderCustomFields', 'setCustomFields', setCustomFields)

            const localVarPath = `/api/2.0/files/metadata/folder/{folderId}/customfields`
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
            localVarRequestOptions.data = serializeDataIfNeeded(setCustomFields, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Writes the values of metadata fields on a folder or a room. The caller needs the right to edit the folder; for a  room that is its manager. Every field must belong to a template the folder carries, assigned with  `PUT api/2.0/files/metadata/folder/{folderId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field; an empty value  clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request and touches the folder only: to push the new values down a cascading folder run the  cascade again with `Overwrite`, while entries created or moved in later take them on their own. The custom text  fields are written with `PUT api/2.0/files/metadata/folder/{folderId}/customFields` instead. The answer is the  whole metadata of the folder after the write. A value of the wrong type, a field listed twice, a custom field or a  field of a template the folder does not carry is answered with 400; a folder the caller cannot edit with 403; a  folder or a field that does not exist with 404.
         * @summary Set folder metadata values
         * @param {number} folderId The folder ID.
         * @param {SetMetadataValues} setMetadataValues The parameters for setting values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderValues operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-values/
         */
        setFolderValues: async (folderId: number, setMetadataValues: SetMetadataValues, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('setFolderValues', 'folderId', folderId)
            // verify required parameter 'setMetadataValues' is not null or undefined
            assertParamExists('setFolderValues', 'setMetadataValues', setMetadataValues)

            const localVarPath = `/api/2.0/files/metadata/folder/{folderId}/values`
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
            localVarRequestOptions.data = serializeDataIfNeeded(setMetadataValues, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a metadata template from a file together with the values of its fields. The caller needs the right to edit  the file. The removal is irreversible for the values, the template itself stays on the portal and on the other  entries. It applies to a directly assigned template and to one inherited from a cascading folder alike; a later  cascade from that folder assigns it again. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404.
         * @summary Unassign a template from a file
         * @param {number} fileId The file ID.
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unassignFileTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unassign-file-template/
         */
        unassignFileTemplate: async (fileId: number, templateId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('unassignFileTemplate', 'fileId', fileId)
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('unassignFileTemplate', 'templateId', templateId)

            const localVarPath = `/api/2.0/files/metadata/file/{fileId}/templates/{templateId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)));
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
         * Removes a metadata template from a folder or a room together with the values of its fields. The caller needs the  right to edit the folder; for a room that is its manager. When the template was cascaded from this folder, the  cascade stops here: the folders and files below keep the template and their values as a direct assignment of their  own, and there is no bulk rollback. To take the template off them as well, remove it entry by entry with  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`. A pass of the cascade still running is stopped  for this template. A folder the caller cannot edit is answered with 403; a folder, or a template, that does not exist  with 404.
         * @summary Unassign a template from a folder
         * @param {number} folderId The folder ID.
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unassignFolderTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unassign-folder-template/
         */
        unassignFolderTemplate: async (folderId: number, templateId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('unassignFolderTemplate', 'folderId', folderId)
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('unassignFolderTemplate', 'templateId', templateId)

            const localVarPath = `/api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)))
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)));
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
         * Changes the name, the type, the options or the display order of a metadata field. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value. The type can be changed only while no entry  holds a value for the field, and an option can be removed only while no entry has selected it; a new option is sent  without an identifier and gets one in the answer. A new name must be unique within the template regardless of case.  The values already written are left as they are. The field is addressed through its own template: a field reached  through another template\'s route is answered with 404, the same as a field that does not exist. A conflicting name,  a type change on a field with values or the removal of an option in use is answered with 400.
         * @summary Update a metadata field
         * @param {number} templateId The template ID.
         * @param {number} fieldId The field ID.
         * @param {UpdateMetadataFieldRequest} updateMetadataFieldRequest The parameters of the field update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-field/
         */
        updateField: async (templateId: number, fieldId: number, updateMetadataFieldRequest: UpdateMetadataFieldRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('updateField', 'templateId', templateId)
            // verify required parameter 'fieldId' is not null or undefined
            assertParamExists('updateField', 'fieldId', fieldId)
            // verify required parameter 'updateMetadataFieldRequest' is not null or undefined
            assertParamExists('updateField', 'updateMetadataFieldRequest', updateMetadataFieldRequest)

            const localVarPath = `/api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)))
                .replace(`{${"fieldId"}}`, encodeURIComponent(String(fieldId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMetadataFieldRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Renames a metadata template or changes whether it is shown in the pickers. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value, the fields are not touched here and are  changed with `PUT api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`. The new name follows the rules  of the creation: unique on the portal regardless of case and at most 255 characters. The answer is the whole template  with its fields. A template that does not exist is answered with 404, a name already in use or too long with 400.
         * @summary Update a metadata template
         * @param {number} templateId The template ID.
         * @param {UpdateMetadataTemplate} updateMetadataTemplate The parameters for updating the template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-template/
         */
        updateTemplate: async (templateId: number, updateMetadataTemplate: UpdateMetadataTemplate, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'templateId' is not null or undefined
            assertParamExists('updateTemplate', 'templateId', templateId)
            // verify required parameter 'updateMetadataTemplate' is not null or undefined
            assertParamExists('updateTemplate', 'updateMetadataTemplate', updateMetadataTemplate)

            const localVarPath = `/api/2.0/files/metadata/templates/{templateId}`
                .replace(`{${"templateId"}}`, encodeURIComponent(String(templateId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMetadataTemplate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetadataApi - functional programming interface
 * @export
 */
export const MetadataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetadataApiAxiosParamCreator(configuration)
    return {
        /**
         * Assigns one or more metadata templates to a file, so its fields can be filled with  `PUT api/2.0/files/metadata/file/{fileId}/values`. The caller needs the right to edit the file. The assignment writes  no values and is idempotent: a template the file already carries is skipped, the others are added, an empty list  changes nothing. The call finishes in the request, nothing runs in the background. A template a cascading folder above  the file already provides stays inherited. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404. To take a template off the file use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`.
         * @summary Assign templates to a file
         * @param {number} fileId The file ID.
         * @param {AssignMetadataTemplates} assignMetadataTemplates The parameters for assigning templates.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for assignFileTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/assign-file-templates/
         */
        async assignFileTemplates(fileId: number, assignMetadataTemplates: AssignMetadataTemplates, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignFileTemplates(fileId, assignMetadataTemplates, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.assignFileTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Assigns one or more metadata templates to a folder or a room and, with `cascade` set, propagates them to every  folder and file below it. The caller needs the right to edit the folder; for a room that is its manager. The  assignment of the folder itself finishes in the request and writes no values. The cascade is asynchronous: a pass is  queued that assigns the templates to the whole subtree and copies the values the folder holds for their fields, and  the answer is the status of that pass. Poll `GET api/2.0/files/metadata/folder/{folderId}/templates/progress`  until `isCompleted` is true; a failed pass reports its `error` there. The `conflictResolveType` decides what happens  to a value an entry already holds: `Skip` keeps it, `Overwrite` replaces it with the folder\'s value. A folder inside  the subtree that cascades the same template keeps its own values for its content. Entries created in or moved into  the folder later inherit the templates and the values on their own. Without a cascade the answer is a completed  operation without an identifier. A folder the caller cannot edit is answered with 403; a folder, or a template, that  does not exist with 404.
         * @summary Assign templates to a folder
         * @param {number} folderId The folder ID.
         * @param {AssignMetadataTemplates} assignMetadataTemplates The parameters for assigning templates.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for assignFolderTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/assign-folder-templates/
         */
        async assignFolderTemplates(folderId: number, assignMetadataTemplates: AssignMetadataTemplates, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignFolderTemplates(folderId, assignMetadataTemplates, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.assignFolderTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds a field to an existing metadata template. Only a DocSpace admin can change templates. The field name must be  unique within the template regardless of case and at most 255 characters, the type must be one of the published ones,  a choice field needs at least one option and unique option values, a field of another type takes no options. A  field without `order` is placed after the last field of the template. The entries the template is already  assigned to get the field without a value: nothing is written on them and no cascade runs. The answer is the  created field with its generated option identifiers. A template that does not exist is answered with 404, an  invalid field with 400.
         * @summary Add a metadata field
         * @param {number} templateId The template ID.
         * @param {MetadataFieldRequest} metadataFieldRequest The parameters of the field.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-field/
         */
        async createField(templateId: number, metadataFieldRequest: MetadataFieldRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFieldWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createField(templateId, metadataFieldRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.createField']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a metadata template for the whole portal, optionally with its fields in one call. Only a DocSpace admin can  create templates. The template name must be unique on the portal regardless of case, at most 255 characters, and the  name `System` is reserved. Every field needs a name unique within the template and a type from the published set; a  choice field requires at least one option and the options must be unique, a field of another type takes no options.  A field without `order` is placed after the fields that have one, in the order of the request. The template and  its fields are stored together: an invalid field rejects the whole request and nothing is created.  The answer is the created template with its fields and the generated option identifiers, which the values written  with `PUT api/2.0/files/metadata/file/{fileId}/values` refer to. A name already in use or an invalid field is  answered with 400; the request of a member who is not a DocSpace admin with 403.
         * @summary Create a metadata template
         * @param {CreateMetadataTemplateRequestDto} [createMetadataTemplateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-template/
         */
        async createTemplate(createMetadataTemplateRequestDto?: CreateMetadataTemplateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataTemplateWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTemplate(createMetadataTemplateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.createTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a metadata field from its template together with every value written for it on any file, folder or room of  the portal. Only a DocSpace admin can change templates. The deletion is irreversible: the affected entries lose the  value at once, their search documents are rebuilt and the clients viewing them are told to refresh. The template and  its other fields stay as they are. A field that does not exist, or that belongs to another template than the one in  the route, is answered with 404.
         * @summary Delete a metadata field
         * @param {number} templateId The template ID.
         * @param {number} fieldId The field ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-field/
         */
        async deleteField(templateId: number, fieldId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteField(templateId, fieldId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.deleteField']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a metadata template together with its fields, its assignments and every value written for its fields on any  file, folder or room of the portal. Only a DocSpace admin can delete templates. The deletion is irreversible and there  is no confirmation: the affected entries lose the template at once, their search documents are rebuilt and the clients  viewing them are told to refresh. A template that does not exist, or was already deleted, is answered with 404.  To take the template off a single entry and keep it for the others use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}` instead.
         * @summary Delete a metadata template
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-template/
         */
        async deleteTemplate(templateId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTemplate(templateId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.deleteTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports the cascade pass of a folder started by `PUT api/2.0/files/metadata/folder/{folderId}/templates`: the  running one, otherwise the most recent one. The caller needs read access to the folder, the call is read-only.  `progress` is the share of the subtree processed, `isCompleted` tells the pass is over and `error` carries the reason  of a failed one; a completed pass without an error has written every template and value it was asked for. A folder  that never cascaded, or whose passes were already dropped, is answered with a completed operation without an  identifier rather than with an error. A folder that does not exist is answered with 404.
         * @summary Get cascade progress
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCascadeProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-cascade-progress/
         */
        async getCascadeProgress(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCascadeProgress(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.getCascadeProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the metadata of a file: the templates assigned to it, directly or inherited from a cascading folder above  it, each with its fields, and the custom text fields set on the file. The caller needs read access to the file: a  member of the portal, or an anonymous caller through an external link that grants access to the file or to a  folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The call is  read-only. A field carries its value inside it; a field the file holds no value for comes without a `value`.  The custom fields are name and value pairs and are not part of any template. A file without metadata is answered with  empty lists, not with an error. The same shape is returned by `PUT api/2.0/files/metadata/file/{fileId}/values`  after a write. A request with neither a session nor a link key is answered with 401; a file the caller cannot read  with 403, a file that does not exist with 404.
         * @summary Get file metadata
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileMetadata operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-metadata/
         */
        async getFileMetadata(fileId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EntryMetadataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileMetadata(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.getFileMetadata']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the metadata of a folder or a room: the templates assigned to it, directly or inherited from a cascading  folder above it, each with its fields, and the custom text fields set on it. The caller needs read access to the  folder: a member of the portal, or an anonymous caller through an external link that grants access to the folder  or to a folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The  call is read-only. A field carries its value inside it; a field the folder holds no value for comes without a  `value`. The custom fields are name and value pairs and are not part of any template. A folder without metadata is  answered with empty lists, not with an error. Whether a template cascades from this folder to its content is not  reported here. A request with neither a session nor a link key is answered with 401; a folder the caller cannot  read with 403, a folder that does not exist with 404.
         * @summary Get folder metadata
         * @param {number} folderId The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderMetadata operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-metadata/
         */
        async getFolderMetadata(folderId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EntryMetadataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderMetadata(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.getFolderMetadata']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one metadata template with its fields, in their display order, and the options of its choice fields. Any  member of the portal can read a template, the call is read-only. Use it to resolve the template identifiers a file or  a folder reports in `assignedMetadataTemplates` into names and fields. A template that does not exist is answered  with 404.
         * @summary Get a metadata template
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-template/
         */
        async getTemplate(templateId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataTemplateWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTemplate(templateId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.getTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the metadata templates of the portal with their fields, the dictionary a file, a folder or a room is described  with. Any member of the portal can read it, the list is the same for everyone. The call is read-only. The templates  come back ordered by their creation, each with its fields in their display order and the choice options of the choice  fields; the `visible` parameter narrows the list to the templates shown in the pickers or to the hidden ones, without  it both are returned. An empty list means the portal has no templates yet. The custom text fields set on the entries  are not templates and are not listed here: read them on the entry with `GET api/2.0/files/metadata/file/{fileId}`.
         * @summary Get metadata templates
         * @param {boolean} [visible] Filters the templates by their visibility.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-templates/
         */
        async getTemplates(visible?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataTemplateArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTemplates(visible, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.getTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the custom text fields of a file: free-form name and value pairs that need no template. The caller needs the  right to edit the file. A field is addressed by its name regardless of case: a listed name gets the value, a null or  empty value removes the field from the file, the names not listed are left alone, so a partial request is safe. A name  the portal has not seen yet creates the field for the whole portal, and a name no entry holds a value for any more is  dropped, so the set of names follows the values. A name is at most 255 characters, a value at most 8000, a name may  be listed once and a file holds at most 50 custom fields. The write finishes in the request; the values take part in  the free text search and in the `metadataFilters` of the listings. The answer is the custom fields of the file  after the write. An empty list, a blank, repeated or over-long name, an over-long value or more than 50 fields is  answered with 400; a file the caller cannot edit with 403; a file that does not exist with 404.
         * @summary Set file custom fields
         * @param {number} fileId The file ID.
         * @param {SetCustomFields} setCustomFields The custom fields to set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileCustomFields operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-custom-fields/
         */
        async setFileCustomFields(fileId: number, setCustomFields: SetCustomFields, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldValueArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileCustomFields(fileId, setCustomFields, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.setFileCustomFields']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Writes the values of metadata fields on a file. The caller needs the right to edit the file: a member with editing  access, or an anonymous caller through an external link that grants editing, with the link key in the  `Request-Token` header or in the `share` query parameter; a link that grants viewing, commenting, reviewing or  form filling only is refused. Every field must belong to a template the file carries, assigned with  `PUT api/2.0/files/metadata/file/{fileId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field, a single option  for a single choice; an empty value clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request, the file is re-indexed for the metadata filters at once. The custom text fields are not  written here: use `PUT api/2.0/files/metadata/file/{fileId}/customFields`. The answer is the whole metadata of the  file after the write, the same shape `GET api/2.0/files/metadata/file/{fileId}` returns. A value of the wrong type,  a field of a template the file does not carry, a field listed twice or a custom field is answered with 400; a  request with neither a session nor a link key with 401; a file the caller cannot edit with 403; a file or a field  that does not exist with 404.
         * @summary Set file metadata values
         * @param {number} fileId The file ID.
         * @param {SetMetadataValues} setMetadataValues The parameters for setting values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileValues operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-values/
         */
        async setFileValues(fileId: number, setMetadataValues: SetMetadataValues, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EntryMetadataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileValues(fileId, setMetadataValues, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.setFileValues']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the custom text fields of a folder or a room: free-form name and value pairs that need no template. The  caller needs the right to edit the folder; for a room that is its manager. A field is addressed by its name  regardless of case: a listed name gets the value, a null or empty value removes the field, the names not listed  are left alone. A name the portal has not seen yet creates the field for the whole portal, and a name no entry  holds a value for any more is dropped. A name is at most 255 characters, a value at most  8000, a name may be listed once and a folder holds at most 50 custom fields. The custom fields never cascade to the  content of the folder. The write finishes in the request; the values take part in the free text search and in the  `metadataFilters` of the listings. The answer is the custom fields of the folder after the write. An empty list, a  blank, repeated or over-long name, an over-long value or more than 50 fields is answered with 400; a folder the  caller cannot edit with 403; a folder that does not exist with 404.
         * @summary Set folder custom fields
         * @param {number} folderId The folder ID.
         * @param {SetCustomFields} setCustomFields The custom fields to set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderCustomFields operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-custom-fields/
         */
        async setFolderCustomFields(folderId: number, setCustomFields: SetCustomFields, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldValueArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderCustomFields(folderId, setCustomFields, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.setFolderCustomFields']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Writes the values of metadata fields on a folder or a room. The caller needs the right to edit the folder; for a  room that is its manager. Every field must belong to a template the folder carries, assigned with  `PUT api/2.0/files/metadata/folder/{folderId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field; an empty value  clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request and touches the folder only: to push the new values down a cascading folder run the  cascade again with `Overwrite`, while entries created or moved in later take them on their own. The custom text  fields are written with `PUT api/2.0/files/metadata/folder/{folderId}/customFields` instead. The answer is the  whole metadata of the folder after the write. A value of the wrong type, a field listed twice, a custom field or a  field of a template the folder does not carry is answered with 400; a folder the caller cannot edit with 403; a  folder or a field that does not exist with 404.
         * @summary Set folder metadata values
         * @param {number} folderId The folder ID.
         * @param {SetMetadataValues} setMetadataValues The parameters for setting values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderValues operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-values/
         */
        async setFolderValues(folderId: number, setMetadataValues: SetMetadataValues, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EntryMetadataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderValues(folderId, setMetadataValues, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.setFolderValues']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a metadata template from a file together with the values of its fields. The caller needs the right to edit  the file. The removal is irreversible for the values, the template itself stays on the portal and on the other  entries. It applies to a directly assigned template and to one inherited from a cascading folder alike; a later  cascade from that folder assigns it again. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404.
         * @summary Unassign a template from a file
         * @param {number} fileId The file ID.
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unassignFileTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unassign-file-template/
         */
        async unassignFileTemplate(fileId: number, templateId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unassignFileTemplate(fileId, templateId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.unassignFileTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a metadata template from a folder or a room together with the values of its fields. The caller needs the  right to edit the folder; for a room that is its manager. When the template was cascaded from this folder, the  cascade stops here: the folders and files below keep the template and their values as a direct assignment of their  own, and there is no bulk rollback. To take the template off them as well, remove it entry by entry with  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`. A pass of the cascade still running is stopped  for this template. A folder the caller cannot edit is answered with 403; a folder, or a template, that does not exist  with 404.
         * @summary Unassign a template from a folder
         * @param {number} folderId The folder ID.
         * @param {number} templateId The template ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unassignFolderTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unassign-folder-template/
         */
        async unassignFolderTemplate(folderId: number, templateId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unassignFolderTemplate(folderId, templateId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.unassignFolderTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the name, the type, the options or the display order of a metadata field. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value. The type can be changed only while no entry  holds a value for the field, and an option can be removed only while no entry has selected it; a new option is sent  without an identifier and gets one in the answer. A new name must be unique within the template regardless of case.  The values already written are left as they are. The field is addressed through its own template: a field reached  through another template\'s route is answered with 404, the same as a field that does not exist. A conflicting name,  a type change on a field with values or the removal of an option in use is answered with 400.
         * @summary Update a metadata field
         * @param {number} templateId The template ID.
         * @param {number} fieldId The field ID.
         * @param {UpdateMetadataFieldRequest} updateMetadataFieldRequest The parameters of the field update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-field/
         */
        async updateField(templateId: number, fieldId: number, updateMetadataFieldRequest: UpdateMetadataFieldRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFieldWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateField(templateId, fieldId, updateMetadataFieldRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.updateField']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Renames a metadata template or changes whether it is shown in the pickers. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value, the fields are not touched here and are  changed with `PUT api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`. The new name follows the rules  of the creation: unique on the portal regardless of case and at most 255 characters. The answer is the whole template  with its fields. A template that does not exist is answered with 404, a name already in use or too long with 400.
         * @summary Update a metadata template
         * @param {number} templateId The template ID.
         * @param {UpdateMetadataTemplate} updateMetadataTemplate The parameters for updating the template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-template/
         */
        async updateTemplate(templateId: number, updateMetadataTemplate: UpdateMetadataTemplate, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataTemplateWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTemplate(templateId, updateMetadataTemplate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.updateTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MetadataApi - factory interface
 * @export
 */
export const MetadataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetadataApiFp(configuration)
    return {
        /**
         * Assigns one or more metadata templates to a file, so its fields can be filled with  `PUT api/2.0/files/metadata/file/{fileId}/values`. The caller needs the right to edit the file. The assignment writes  no values and is idempotent: a template the file already carries is skipped, the others are added, an empty list  changes nothing. The call finishes in the request, nothing runs in the background. A template a cascading folder above  the file already provides stays inherited. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404. To take a template off the file use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`.
         * @summary Assign templates to a file
         * @param {MetadataApiAssignFileTemplatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for assignFileTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/assign-file-templates/
         * @throws {RequiredError}
         */
        assignFileTemplates(requestParameters: MetadataApiAssignFileTemplatesRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.assignFileTemplates(requestParameters.fileId, requestParameters.assignMetadataTemplates, options).then((request) => request(axios, basePath));
        },
        /**
         * Assigns one or more metadata templates to a folder or a room and, with `cascade` set, propagates them to every  folder and file below it. The caller needs the right to edit the folder; for a room that is its manager. The  assignment of the folder itself finishes in the request and writes no values. The cascade is asynchronous: a pass is  queued that assigns the templates to the whole subtree and copies the values the folder holds for their fields, and  the answer is the status of that pass. Poll `GET api/2.0/files/metadata/folder/{folderId}/templates/progress`  until `isCompleted` is true; a failed pass reports its `error` there. The `conflictResolveType` decides what happens  to a value an entry already holds: `Skip` keeps it, `Overwrite` replaces it with the folder\'s value. A folder inside  the subtree that cascades the same template keeps its own values for its content. Entries created in or moved into  the folder later inherit the templates and the values on their own. Without a cascade the answer is a completed  operation without an identifier. A folder the caller cannot edit is answered with 403; a folder, or a template, that  does not exist with 404.
         * @summary Assign templates to a folder
         * @param {MetadataApiAssignFolderTemplatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for assignFolderTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/assign-folder-templates/
         * @throws {RequiredError}
         */
        assignFolderTemplates(requestParameters: MetadataApiAssignFolderTemplatesRequest, options?: RawAxiosRequestConfig): AxiosPromise<MetadataOperationWrapper> {
            return localVarFp.assignFolderTemplates(requestParameters.folderId, requestParameters.assignMetadataTemplates, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a field to an existing metadata template. Only a DocSpace admin can change templates. The field name must be  unique within the template regardless of case and at most 255 characters, the type must be one of the published ones,  a choice field needs at least one option and unique option values, a field of another type takes no options. A  field without `order` is placed after the last field of the template. The entries the template is already  assigned to get the field without a value: nothing is written on them and no cascade runs. The answer is the  created field with its generated option identifiers. A template that does not exist is answered with 404, an  invalid field with 400.
         * @summary Add a metadata field
         * @param {MetadataApiCreateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-field/
         * @throws {RequiredError}
         */
        createField(requestParameters: MetadataApiCreateFieldRequest, options?: RawAxiosRequestConfig): AxiosPromise<MetadataFieldWrapper> {
            return localVarFp.createField(requestParameters.templateId, requestParameters.metadataFieldRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a metadata template for the whole portal, optionally with its fields in one call. Only a DocSpace admin can  create templates. The template name must be unique on the portal regardless of case, at most 255 characters, and the  name `System` is reserved. Every field needs a name unique within the template and a type from the published set; a  choice field requires at least one option and the options must be unique, a field of another type takes no options.  A field without `order` is placed after the fields that have one, in the order of the request. The template and  its fields are stored together: an invalid field rejects the whole request and nothing is created.  The answer is the created template with its fields and the generated option identifiers, which the values written  with `PUT api/2.0/files/metadata/file/{fileId}/values` refer to. A name already in use or an invalid field is  answered with 400; the request of a member who is not a DocSpace admin with 403.
         * @summary Create a metadata template
         * @param {MetadataApiCreateTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-template/
         * @throws {RequiredError}
         */
        createTemplate(requestParameters: MetadataApiCreateTemplateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MetadataTemplateWrapper> {
            return localVarFp.createTemplate(requestParameters.createMetadataTemplateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a metadata field from its template together with every value written for it on any file, folder or room of  the portal. Only a DocSpace admin can change templates. The deletion is irreversible: the affected entries lose the  value at once, their search documents are rebuilt and the clients viewing them are told to refresh. The template and  its other fields stay as they are. A field that does not exist, or that belongs to another template than the one in  the route, is answered with 404.
         * @summary Delete a metadata field
         * @param {MetadataApiDeleteFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-field/
         * @throws {RequiredError}
         */
        deleteField(requestParameters: MetadataApiDeleteFieldRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteField(requestParameters.templateId, requestParameters.fieldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a metadata template together with its fields, its assignments and every value written for its fields on any  file, folder or room of the portal. Only a DocSpace admin can delete templates. The deletion is irreversible and there  is no confirmation: the affected entries lose the template at once, their search documents are rebuilt and the clients  viewing them are told to refresh. A template that does not exist, or was already deleted, is answered with 404.  To take the template off a single entry and keep it for the others use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}` instead.
         * @summary Delete a metadata template
         * @param {MetadataApiDeleteTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-template/
         * @throws {RequiredError}
         */
        deleteTemplate(requestParameters: MetadataApiDeleteTemplateRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteTemplate(requestParameters.templateId, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports the cascade pass of a folder started by `PUT api/2.0/files/metadata/folder/{folderId}/templates`: the  running one, otherwise the most recent one. The caller needs read access to the folder, the call is read-only.  `progress` is the share of the subtree processed, `isCompleted` tells the pass is over and `error` carries the reason  of a failed one; a completed pass without an error has written every template and value it was asked for. A folder  that never cascaded, or whose passes were already dropped, is answered with a completed operation without an  identifier rather than with an error. A folder that does not exist is answered with 404.
         * @summary Get cascade progress
         * @param {MetadataApiGetCascadeProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCascadeProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-cascade-progress/
         * @throws {RequiredError}
         */
        getCascadeProgress(requestParameters: MetadataApiGetCascadeProgressRequest, options?: RawAxiosRequestConfig): AxiosPromise<MetadataOperationWrapper> {
            return localVarFp.getCascadeProgress(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the metadata of a file: the templates assigned to it, directly or inherited from a cascading folder above  it, each with its fields, and the custom text fields set on the file. The caller needs read access to the file: a  member of the portal, or an anonymous caller through an external link that grants access to the file or to a  folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The call is  read-only. A field carries its value inside it; a field the file holds no value for comes without a `value`.  The custom fields are name and value pairs and are not part of any template. A file without metadata is answered with  empty lists, not with an error. The same shape is returned by `PUT api/2.0/files/metadata/file/{fileId}/values`  after a write. A request with neither a session nor a link key is answered with 401; a file the caller cannot read  with 403, a file that does not exist with 404.
         * @summary Get file metadata
         * @param {MetadataApiGetFileMetadataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileMetadata operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-metadata/
         * @throws {RequiredError}
         */
        getFileMetadata(requestParameters: MetadataApiGetFileMetadataRequest, options?: RawAxiosRequestConfig): AxiosPromise<EntryMetadataWrapper> {
            return localVarFp.getFileMetadata(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the metadata of a folder or a room: the templates assigned to it, directly or inherited from a cascading  folder above it, each with its fields, and the custom text fields set on it. The caller needs read access to the  folder: a member of the portal, or an anonymous caller through an external link that grants access to the folder  or to a folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The  call is read-only. A field carries its value inside it; a field the folder holds no value for comes without a  `value`. The custom fields are name and value pairs and are not part of any template. A folder without metadata is  answered with empty lists, not with an error. Whether a template cascades from this folder to its content is not  reported here. A request with neither a session nor a link key is answered with 401; a folder the caller cannot  read with 403, a folder that does not exist with 404.
         * @summary Get folder metadata
         * @param {MetadataApiGetFolderMetadataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderMetadata operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-metadata/
         * @throws {RequiredError}
         */
        getFolderMetadata(requestParameters: MetadataApiGetFolderMetadataRequest, options?: RawAxiosRequestConfig): AxiosPromise<EntryMetadataWrapper> {
            return localVarFp.getFolderMetadata(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one metadata template with its fields, in their display order, and the options of its choice fields. Any  member of the portal can read a template, the call is read-only. Use it to resolve the template identifiers a file or  a folder reports in `assignedMetadataTemplates` into names and fields. A template that does not exist is answered  with 404.
         * @summary Get a metadata template
         * @param {MetadataApiGetTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-template/
         * @throws {RequiredError}
         */
        getTemplate(requestParameters: MetadataApiGetTemplateRequest, options?: RawAxiosRequestConfig): AxiosPromise<MetadataTemplateWrapper> {
            return localVarFp.getTemplate(requestParameters.templateId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the metadata templates of the portal with their fields, the dictionary a file, a folder or a room is described  with. Any member of the portal can read it, the list is the same for everyone. The call is read-only. The templates  come back ordered by their creation, each with its fields in their display order and the choice options of the choice  fields; the `visible` parameter narrows the list to the templates shown in the pickers or to the hidden ones, without  it both are returned. An empty list means the portal has no templates yet. The custom text fields set on the entries  are not templates and are not listed here: read them on the entry with `GET api/2.0/files/metadata/file/{fileId}`.
         * @summary Get metadata templates
         * @param {MetadataApiGetTemplatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-templates/
         * @throws {RequiredError}
         */
        getTemplates(requestParameters: MetadataApiGetTemplatesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MetadataTemplateArrayWrapper> {
            return localVarFp.getTemplates(requestParameters.visible, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the custom text fields of a file: free-form name and value pairs that need no template. The caller needs the  right to edit the file. A field is addressed by its name regardless of case: a listed name gets the value, a null or  empty value removes the field from the file, the names not listed are left alone, so a partial request is safe. A name  the portal has not seen yet creates the field for the whole portal, and a name no entry holds a value for any more is  dropped, so the set of names follows the values. A name is at most 255 characters, a value at most 8000, a name may  be listed once and a file holds at most 50 custom fields. The write finishes in the request; the values take part in  the free text search and in the `metadataFilters` of the listings. The answer is the custom fields of the file  after the write. An empty list, a blank, repeated or over-long name, an over-long value or more than 50 fields is  answered with 400; a file the caller cannot edit with 403; a file that does not exist with 404.
         * @summary Set file custom fields
         * @param {MetadataApiSetFileCustomFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileCustomFields operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-custom-fields/
         * @throws {RequiredError}
         */
        setFileCustomFields(requestParameters: MetadataApiSetFileCustomFieldsRequest, options?: RawAxiosRequestConfig): AxiosPromise<CustomFieldValueArrayWrapper> {
            return localVarFp.setFileCustomFields(requestParameters.fileId, requestParameters.setCustomFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Writes the values of metadata fields on a file. The caller needs the right to edit the file: a member with editing  access, or an anonymous caller through an external link that grants editing, with the link key in the  `Request-Token` header or in the `share` query parameter; a link that grants viewing, commenting, reviewing or  form filling only is refused. Every field must belong to a template the file carries, assigned with  `PUT api/2.0/files/metadata/file/{fileId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field, a single option  for a single choice; an empty value clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request, the file is re-indexed for the metadata filters at once. The custom text fields are not  written here: use `PUT api/2.0/files/metadata/file/{fileId}/customFields`. The answer is the whole metadata of the  file after the write, the same shape `GET api/2.0/files/metadata/file/{fileId}` returns. A value of the wrong type,  a field of a template the file does not carry, a field listed twice or a custom field is answered with 400; a  request with neither a session nor a link key with 401; a file the caller cannot edit with 403; a file or a field  that does not exist with 404.
         * @summary Set file metadata values
         * @param {MetadataApiSetFileValuesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileValues operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-values/
         * @throws {RequiredError}
         */
        setFileValues(requestParameters: MetadataApiSetFileValuesRequest, options?: RawAxiosRequestConfig): AxiosPromise<EntryMetadataWrapper> {
            return localVarFp.setFileValues(requestParameters.fileId, requestParameters.setMetadataValues, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the custom text fields of a folder or a room: free-form name and value pairs that need no template. The  caller needs the right to edit the folder; for a room that is its manager. A field is addressed by its name  regardless of case: a listed name gets the value, a null or empty value removes the field, the names not listed  are left alone. A name the portal has not seen yet creates the field for the whole portal, and a name no entry  holds a value for any more is dropped. A name is at most 255 characters, a value at most  8000, a name may be listed once and a folder holds at most 50 custom fields. The custom fields never cascade to the  content of the folder. The write finishes in the request; the values take part in the free text search and in the  `metadataFilters` of the listings. The answer is the custom fields of the folder after the write. An empty list, a  blank, repeated or over-long name, an over-long value or more than 50 fields is answered with 400; a folder the  caller cannot edit with 403; a folder that does not exist with 404.
         * @summary Set folder custom fields
         * @param {MetadataApiSetFolderCustomFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderCustomFields operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-custom-fields/
         * @throws {RequiredError}
         */
        setFolderCustomFields(requestParameters: MetadataApiSetFolderCustomFieldsRequest, options?: RawAxiosRequestConfig): AxiosPromise<CustomFieldValueArrayWrapper> {
            return localVarFp.setFolderCustomFields(requestParameters.folderId, requestParameters.setCustomFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Writes the values of metadata fields on a folder or a room. The caller needs the right to edit the folder; for a  room that is its manager. Every field must belong to a template the folder carries, assigned with  `PUT api/2.0/files/metadata/folder/{folderId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field; an empty value  clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request and touches the folder only: to push the new values down a cascading folder run the  cascade again with `Overwrite`, while entries created or moved in later take them on their own. The custom text  fields are written with `PUT api/2.0/files/metadata/folder/{folderId}/customFields` instead. The answer is the  whole metadata of the folder after the write. A value of the wrong type, a field listed twice, a custom field or a  field of a template the folder does not carry is answered with 400; a folder the caller cannot edit with 403; a  folder or a field that does not exist with 404.
         * @summary Set folder metadata values
         * @param {MetadataApiSetFolderValuesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderValues operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-values/
         * @throws {RequiredError}
         */
        setFolderValues(requestParameters: MetadataApiSetFolderValuesRequest, options?: RawAxiosRequestConfig): AxiosPromise<EntryMetadataWrapper> {
            return localVarFp.setFolderValues(requestParameters.folderId, requestParameters.setMetadataValues, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a metadata template from a file together with the values of its fields. The caller needs the right to edit  the file. The removal is irreversible for the values, the template itself stays on the portal and on the other  entries. It applies to a directly assigned template and to one inherited from a cascading folder alike; a later  cascade from that folder assigns it again. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404.
         * @summary Unassign a template from a file
         * @param {MetadataApiUnassignFileTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unassignFileTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unassign-file-template/
         * @throws {RequiredError}
         */
        unassignFileTemplate(requestParameters: MetadataApiUnassignFileTemplateRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unassignFileTemplate(requestParameters.fileId, requestParameters.templateId, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a metadata template from a folder or a room together with the values of its fields. The caller needs the  right to edit the folder; for a room that is its manager. When the template was cascaded from this folder, the  cascade stops here: the folders and files below keep the template and their values as a direct assignment of their  own, and there is no bulk rollback. To take the template off them as well, remove it entry by entry with  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`. A pass of the cascade still running is stopped  for this template. A folder the caller cannot edit is answered with 403; a folder, or a template, that does not exist  with 404.
         * @summary Unassign a template from a folder
         * @param {MetadataApiUnassignFolderTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unassignFolderTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unassign-folder-template/
         * @throws {RequiredError}
         */
        unassignFolderTemplate(requestParameters: MetadataApiUnassignFolderTemplateRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unassignFolderTemplate(requestParameters.folderId, requestParameters.templateId, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the name, the type, the options or the display order of a metadata field. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value. The type can be changed only while no entry  holds a value for the field, and an option can be removed only while no entry has selected it; a new option is sent  without an identifier and gets one in the answer. A new name must be unique within the template regardless of case.  The values already written are left as they are. The field is addressed through its own template: a field reached  through another template\'s route is answered with 404, the same as a field that does not exist. A conflicting name,  a type change on a field with values or the removal of an option in use is answered with 400.
         * @summary Update a metadata field
         * @param {MetadataApiUpdateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateField operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-field/
         * @throws {RequiredError}
         */
        updateField(requestParameters: MetadataApiUpdateFieldRequest, options?: RawAxiosRequestConfig): AxiosPromise<MetadataFieldWrapper> {
            return localVarFp.updateField(requestParameters.templateId, requestParameters.fieldId, requestParameters.updateMetadataFieldRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Renames a metadata template or changes whether it is shown in the pickers. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value, the fields are not touched here and are  changed with `PUT api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`. The new name follows the rules  of the creation: unique on the portal regardless of case and at most 255 characters. The answer is the whole template  with its fields. A template that does not exist is answered with 404, a name already in use or too long with 400.
         * @summary Update a metadata template
         * @param {MetadataApiUpdateTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-template/
         * @throws {RequiredError}
         */
        updateTemplate(requestParameters: MetadataApiUpdateTemplateRequest, options?: RawAxiosRequestConfig): AxiosPromise<MetadataTemplateWrapper> {
            return localVarFp.updateTemplate(requestParameters.templateId, requestParameters.updateMetadataTemplate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assignFileTemplates operation in MetadataApi.
 * @export
 * @interface MetadataApiAssignFileTemplatesRequest
 */
export interface MetadataApiAssignFileTemplatesRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof MetadataApiAssignFileTemplates
     */
    readonly fileId: number

    /**
     * The parameters for assigning templates.
     * @type {AssignMetadataTemplates}
     * @memberof MetadataApiAssignFileTemplates
     */
    readonly assignMetadataTemplates: AssignMetadataTemplates
}

/**
 * Request parameters for assignFolderTemplates operation in MetadataApi.
 * @export
 * @interface MetadataApiAssignFolderTemplatesRequest
 */
export interface MetadataApiAssignFolderTemplatesRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof MetadataApiAssignFolderTemplates
     */
    readonly folderId: number

    /**
     * The parameters for assigning templates.
     * @type {AssignMetadataTemplates}
     * @memberof MetadataApiAssignFolderTemplates
     */
    readonly assignMetadataTemplates: AssignMetadataTemplates
}

/**
 * Request parameters for createField operation in MetadataApi.
 * @export
 * @interface MetadataApiCreateFieldRequest
 */
export interface MetadataApiCreateFieldRequest {
    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiCreateField
     */
    readonly templateId: number

    /**
     * The parameters of the field.
     * @type {MetadataFieldRequest}
     * @memberof MetadataApiCreateField
     */
    readonly metadataFieldRequest: MetadataFieldRequest
}

/**
 * Request parameters for createTemplate operation in MetadataApi.
 * @export
 * @interface MetadataApiCreateTemplateRequest
 */
export interface MetadataApiCreateTemplateRequest {
    /**
     * 
     * @type {CreateMetadataTemplateRequestDto}
     * @memberof MetadataApiCreateTemplate
     */
    readonly createMetadataTemplateRequestDto?: CreateMetadataTemplateRequestDto
}

/**
 * Request parameters for deleteField operation in MetadataApi.
 * @export
 * @interface MetadataApiDeleteFieldRequest
 */
export interface MetadataApiDeleteFieldRequest {
    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiDeleteField
     */
    readonly templateId: number

    /**
     * The field ID.
     * @type {number}
     * @memberof MetadataApiDeleteField
     */
    readonly fieldId: number
}

/**
 * Request parameters for deleteTemplate operation in MetadataApi.
 * @export
 * @interface MetadataApiDeleteTemplateRequest
 */
export interface MetadataApiDeleteTemplateRequest {
    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiDeleteTemplate
     */
    readonly templateId: number
}

/**
 * Request parameters for getCascadeProgress operation in MetadataApi.
 * @export
 * @interface MetadataApiGetCascadeProgressRequest
 */
export interface MetadataApiGetCascadeProgressRequest {
    /**
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
     * @type {number}
     * @memberof MetadataApiGetCascadeProgress
     */
    readonly folderId: number
}

/**
 * Request parameters for getFileMetadata operation in MetadataApi.
 * @export
 * @interface MetadataApiGetFileMetadataRequest
 */
export interface MetadataApiGetFileMetadataRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number}
     * @memberof MetadataApiGetFileMetadata
     */
    readonly fileId: number
}

/**
 * Request parameters for getFolderMetadata operation in MetadataApi.
 * @export
 * @interface MetadataApiGetFolderMetadataRequest
 */
export interface MetadataApiGetFolderMetadataRequest {
    /**
     * The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or  `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected  third-party account is named by an opaque string.
     * @type {number}
     * @memberof MetadataApiGetFolderMetadata
     */
    readonly folderId: number
}

/**
 * Request parameters for getTemplate operation in MetadataApi.
 * @export
 * @interface MetadataApiGetTemplateRequest
 */
export interface MetadataApiGetTemplateRequest {
    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiGetTemplate
     */
    readonly templateId: number
}

/**
 * Request parameters for getTemplates operation in MetadataApi.
 * @export
 * @interface MetadataApiGetTemplatesRequest
 */
export interface MetadataApiGetTemplatesRequest {
    /**
     * Filters the templates by their visibility.
     * @type {boolean}
     * @memberof MetadataApiGetTemplates
     */
    readonly visible?: boolean
}

/**
 * Request parameters for setFileCustomFields operation in MetadataApi.
 * @export
 * @interface MetadataApiSetFileCustomFieldsRequest
 */
export interface MetadataApiSetFileCustomFieldsRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof MetadataApiSetFileCustomFields
     */
    readonly fileId: number

    /**
     * The custom fields to set.
     * @type {SetCustomFields}
     * @memberof MetadataApiSetFileCustomFields
     */
    readonly setCustomFields: SetCustomFields
}

/**
 * Request parameters for setFileValues operation in MetadataApi.
 * @export
 * @interface MetadataApiSetFileValuesRequest
 */
export interface MetadataApiSetFileValuesRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof MetadataApiSetFileValues
     */
    readonly fileId: number

    /**
     * The parameters for setting values.
     * @type {SetMetadataValues}
     * @memberof MetadataApiSetFileValues
     */
    readonly setMetadataValues: SetMetadataValues
}

/**
 * Request parameters for setFolderCustomFields operation in MetadataApi.
 * @export
 * @interface MetadataApiSetFolderCustomFieldsRequest
 */
export interface MetadataApiSetFolderCustomFieldsRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof MetadataApiSetFolderCustomFields
     */
    readonly folderId: number

    /**
     * The custom fields to set.
     * @type {SetCustomFields}
     * @memberof MetadataApiSetFolderCustomFields
     */
    readonly setCustomFields: SetCustomFields
}

/**
 * Request parameters for setFolderValues operation in MetadataApi.
 * @export
 * @interface MetadataApiSetFolderValuesRequest
 */
export interface MetadataApiSetFolderValuesRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof MetadataApiSetFolderValues
     */
    readonly folderId: number

    /**
     * The parameters for setting values.
     * @type {SetMetadataValues}
     * @memberof MetadataApiSetFolderValues
     */
    readonly setMetadataValues: SetMetadataValues
}

/**
 * Request parameters for unassignFileTemplate operation in MetadataApi.
 * @export
 * @interface MetadataApiUnassignFileTemplateRequest
 */
export interface MetadataApiUnassignFileTemplateRequest {
    /**
     * The file ID.
     * @type {number}
     * @memberof MetadataApiUnassignFileTemplate
     */
    readonly fileId: number

    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiUnassignFileTemplate
     */
    readonly templateId: number
}

/**
 * Request parameters for unassignFolderTemplate operation in MetadataApi.
 * @export
 * @interface MetadataApiUnassignFolderTemplateRequest
 */
export interface MetadataApiUnassignFolderTemplateRequest {
    /**
     * The folder ID.
     * @type {number}
     * @memberof MetadataApiUnassignFolderTemplate
     */
    readonly folderId: number

    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiUnassignFolderTemplate
     */
    readonly templateId: number
}

/**
 * Request parameters for updateField operation in MetadataApi.
 * @export
 * @interface MetadataApiUpdateFieldRequest
 */
export interface MetadataApiUpdateFieldRequest {
    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiUpdateField
     */
    readonly templateId: number

    /**
     * The field ID.
     * @type {number}
     * @memberof MetadataApiUpdateField
     */
    readonly fieldId: number

    /**
     * The parameters of the field update.
     * @type {UpdateMetadataFieldRequest}
     * @memberof MetadataApiUpdateField
     */
    readonly updateMetadataFieldRequest: UpdateMetadataFieldRequest
}

/**
 * Request parameters for updateTemplate operation in MetadataApi.
 * @export
 * @interface MetadataApiUpdateTemplateRequest
 */
export interface MetadataApiUpdateTemplateRequest {
    /**
     * The template ID.
     * @type {number}
     * @memberof MetadataApiUpdateTemplate
     */
    readonly templateId: number

    /**
     * The parameters for updating the template.
     * @type {UpdateMetadataTemplate}
     * @memberof MetadataApiUpdateTemplate
     */
    readonly updateMetadataTemplate: UpdateMetadataTemplate
}

/**
 * MetadataApi - object-oriented interface
 * @export
 * @class MetadataApi
 * @extends {BaseAPI}
 */
export class MetadataApi extends BaseAPI {
    /**
     * Assigns one or more metadata templates to a file, so its fields can be filled with  `PUT api/2.0/files/metadata/file/{fileId}/values`. The caller needs the right to edit the file. The assignment writes  no values and is idempotent: a template the file already carries is skipped, the others are added, an empty list  changes nothing. The call finishes in the request, nothing runs in the background. A template a cascading folder above  the file already provides stays inherited. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404. To take a template off the file use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`.
     * @summary Assign templates to a file
     * @param {FilesMetadataApiAssignFileTemplatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public assignFileTemplates(requestParameters: MetadataApiAssignFileTemplatesRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).assignFileTemplates(requestParameters.fileId, requestParameters.assignMetadataTemplates, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Assigns one or more metadata templates to a folder or a room and, with `cascade` set, propagates them to every  folder and file below it. The caller needs the right to edit the folder; for a room that is its manager. The  assignment of the folder itself finishes in the request and writes no values. The cascade is asynchronous: a pass is  queued that assigns the templates to the whole subtree and copies the values the folder holds for their fields, and  the answer is the status of that pass. Poll `GET api/2.0/files/metadata/folder/{folderId}/templates/progress`  until `isCompleted` is true; a failed pass reports its `error` there. The `conflictResolveType` decides what happens  to a value an entry already holds: `Skip` keeps it, `Overwrite` replaces it with the folder\'s value. A folder inside  the subtree that cascades the same template keeps its own values for its content. Entries created in or moved into  the folder later inherit the templates and the values on their own. Without a cascade the answer is a completed  operation without an identifier. A folder the caller cannot edit is answered with 403; a folder, or a template, that  does not exist with 404.
     * @summary Assign templates to a folder
     * @param {FilesMetadataApiAssignFolderTemplatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public assignFolderTemplates(requestParameters: MetadataApiAssignFolderTemplatesRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).assignFolderTemplates(requestParameters.folderId, requestParameters.assignMetadataTemplates, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a field to an existing metadata template. Only a DocSpace admin can change templates. The field name must be  unique within the template regardless of case and at most 255 characters, the type must be one of the published ones,  a choice field needs at least one option and unique option values, a field of another type takes no options. A  field without `order` is placed after the last field of the template. The entries the template is already  assigned to get the field without a value: nothing is written on them and no cascade runs. The answer is the  created field with its generated option identifiers. A template that does not exist is answered with 404, an  invalid field with 400.
     * @summary Add a metadata field
     * @param {FilesMetadataApiCreateFieldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public createField(requestParameters: MetadataApiCreateFieldRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).createField(requestParameters.templateId, requestParameters.metadataFieldRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a metadata template for the whole portal, optionally with its fields in one call. Only a DocSpace admin can  create templates. The template name must be unique on the portal regardless of case, at most 255 characters, and the  name `System` is reserved. Every field needs a name unique within the template and a type from the published set; a  choice field requires at least one option and the options must be unique, a field of another type takes no options.  A field without `order` is placed after the fields that have one, in the order of the request. The template and  its fields are stored together: an invalid field rejects the whole request and nothing is created.  The answer is the created template with its fields and the generated option identifiers, which the values written  with `PUT api/2.0/files/metadata/file/{fileId}/values` refer to. A name already in use or an invalid field is  answered with 400; the request of a member who is not a DocSpace admin with 403.
     * @summary Create a metadata template
     * @param {FilesMetadataApiCreateTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public createTemplate(requestParameters: MetadataApiCreateTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).createTemplate(requestParameters.createMetadataTemplateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a metadata field from its template together with every value written for it on any file, folder or room of  the portal. Only a DocSpace admin can change templates. The deletion is irreversible: the affected entries lose the  value at once, their search documents are rebuilt and the clients viewing them are told to refresh. The template and  its other fields stay as they are. A field that does not exist, or that belongs to another template than the one in  the route, is answered with 404.
     * @summary Delete a metadata field
     * @param {FilesMetadataApiDeleteFieldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public deleteField(requestParameters: MetadataApiDeleteFieldRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).deleteField(requestParameters.templateId, requestParameters.fieldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a metadata template together with its fields, its assignments and every value written for its fields on any  file, folder or room of the portal. Only a DocSpace admin can delete templates. The deletion is irreversible and there  is no confirmation: the affected entries lose the template at once, their search documents are rebuilt and the clients  viewing them are told to refresh. A template that does not exist, or was already deleted, is answered with 404.  To take the template off a single entry and keep it for the others use  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}` instead.
     * @summary Delete a metadata template
     * @param {FilesMetadataApiDeleteTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public deleteTemplate(requestParameters: MetadataApiDeleteTemplateRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).deleteTemplate(requestParameters.templateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports the cascade pass of a folder started by `PUT api/2.0/files/metadata/folder/{folderId}/templates`: the  running one, otherwise the most recent one. The caller needs read access to the folder, the call is read-only.  `progress` is the share of the subtree processed, `isCompleted` tells the pass is over and `error` carries the reason  of a failed one; a completed pass without an error has written every template and value it was asked for. A folder  that never cascaded, or whose passes were already dropped, is answered with a completed operation without an  identifier rather than with an error. A folder that does not exist is answered with 404.
     * @summary Get cascade progress
     * @param {FilesMetadataApiGetCascadeProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public getCascadeProgress(requestParameters: MetadataApiGetCascadeProgressRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).getCascadeProgress(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the metadata of a file: the templates assigned to it, directly or inherited from a cascading folder above  it, each with its fields, and the custom text fields set on the file. The caller needs read access to the file: a  member of the portal, or an anonymous caller through an external link that grants access to the file or to a  folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The call is  read-only. A field carries its value inside it; a field the file holds no value for comes without a `value`.  The custom fields are name and value pairs and are not part of any template. A file without metadata is answered with  empty lists, not with an error. The same shape is returned by `PUT api/2.0/files/metadata/file/{fileId}/values`  after a write. A request with neither a session nor a link key is answered with 401; a file the caller cannot read  with 403, a file that does not exist with 404.
     * @summary Get file metadata
     * @param {FilesMetadataApiGetFileMetadataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public getFileMetadata(requestParameters: MetadataApiGetFileMetadataRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).getFileMetadata(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the metadata of a folder or a room: the templates assigned to it, directly or inherited from a cascading  folder above it, each with its fields, and the custom text fields set on it. The caller needs read access to the  folder: a member of the portal, or an anonymous caller through an external link that grants access to the folder  or to a folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The  call is read-only. A field carries its value inside it; a field the folder holds no value for comes without a  `value`. The custom fields are name and value pairs and are not part of any template. A folder without metadata is  answered with empty lists, not with an error. Whether a template cascades from this folder to its content is not  reported here. A request with neither a session nor a link key is answered with 401; a folder the caller cannot  read with 403, a folder that does not exist with 404.
     * @summary Get folder metadata
     * @param {FilesMetadataApiGetFolderMetadataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public getFolderMetadata(requestParameters: MetadataApiGetFolderMetadataRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).getFolderMetadata(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one metadata template with its fields, in their display order, and the options of its choice fields. Any  member of the portal can read a template, the call is read-only. Use it to resolve the template identifiers a file or  a folder reports in `assignedMetadataTemplates` into names and fields. A template that does not exist is answered  with 404.
     * @summary Get a metadata template
     * @param {FilesMetadataApiGetTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public getTemplate(requestParameters: MetadataApiGetTemplateRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).getTemplate(requestParameters.templateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the metadata templates of the portal with their fields, the dictionary a file, a folder or a room is described  with. Any member of the portal can read it, the list is the same for everyone. The call is read-only. The templates  come back ordered by their creation, each with its fields in their display order and the choice options of the choice  fields; the `visible` parameter narrows the list to the templates shown in the pickers or to the hidden ones, without  it both are returned. An empty list means the portal has no templates yet. The custom text fields set on the entries  are not templates and are not listed here: read them on the entry with `GET api/2.0/files/metadata/file/{fileId}`.
     * @summary Get metadata templates
     * @param {FilesMetadataApiGetTemplatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public getTemplates(requestParameters: MetadataApiGetTemplatesRequest = {}, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).getTemplates(requestParameters.visible, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the custom text fields of a file: free-form name and value pairs that need no template. The caller needs the  right to edit the file. A field is addressed by its name regardless of case: a listed name gets the value, a null or  empty value removes the field from the file, the names not listed are left alone, so a partial request is safe. A name  the portal has not seen yet creates the field for the whole portal, and a name no entry holds a value for any more is  dropped, so the set of names follows the values. A name is at most 255 characters, a value at most 8000, a name may  be listed once and a file holds at most 50 custom fields. The write finishes in the request; the values take part in  the free text search and in the `metadataFilters` of the listings. The answer is the custom fields of the file  after the write. An empty list, a blank, repeated or over-long name, an over-long value or more than 50 fields is  answered with 400; a file the caller cannot edit with 403; a file that does not exist with 404.
     * @summary Set file custom fields
     * @param {FilesMetadataApiSetFileCustomFieldsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public setFileCustomFields(requestParameters: MetadataApiSetFileCustomFieldsRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).setFileCustomFields(requestParameters.fileId, requestParameters.setCustomFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Writes the values of metadata fields on a file. The caller needs the right to edit the file: a member with editing  access, or an anonymous caller through an external link that grants editing, with the link key in the  `Request-Token` header or in the `share` query parameter; a link that grants viewing, commenting, reviewing or  form filling only is refused. Every field must belong to a template the file carries, assigned with  `PUT api/2.0/files/metadata/file/{fileId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field, a single option  for a single choice; an empty value clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request, the file is re-indexed for the metadata filters at once. The custom text fields are not  written here: use `PUT api/2.0/files/metadata/file/{fileId}/customFields`. The answer is the whole metadata of the  file after the write, the same shape `GET api/2.0/files/metadata/file/{fileId}` returns. A value of the wrong type,  a field of a template the file does not carry, a field listed twice or a custom field is answered with 400; a  request with neither a session nor a link key with 401; a file the caller cannot edit with 403; a file or a field  that does not exist with 404.
     * @summary Set file metadata values
     * @param {FilesMetadataApiSetFileValuesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public setFileValues(requestParameters: MetadataApiSetFileValuesRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).setFileValues(requestParameters.fileId, requestParameters.setMetadataValues, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the custom text fields of a folder or a room: free-form name and value pairs that need no template. The  caller needs the right to edit the folder; for a room that is its manager. A field is addressed by its name  regardless of case: a listed name gets the value, a null or empty value removes the field, the names not listed  are left alone. A name the portal has not seen yet creates the field for the whole portal, and a name no entry  holds a value for any more is dropped. A name is at most 255 characters, a value at most  8000, a name may be listed once and a folder holds at most 50 custom fields. The custom fields never cascade to the  content of the folder. The write finishes in the request; the values take part in the free text search and in the  `metadataFilters` of the listings. The answer is the custom fields of the folder after the write. An empty list, a  blank, repeated or over-long name, an over-long value or more than 50 fields is answered with 400; a folder the  caller cannot edit with 403; a folder that does not exist with 404.
     * @summary Set folder custom fields
     * @param {FilesMetadataApiSetFolderCustomFieldsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public setFolderCustomFields(requestParameters: MetadataApiSetFolderCustomFieldsRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).setFolderCustomFields(requestParameters.folderId, requestParameters.setCustomFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Writes the values of metadata fields on a folder or a room. The caller needs the right to edit the folder; for a  room that is its manager. Every field must belong to a template the folder carries, assigned with  `PUT api/2.0/files/metadata/folder/{folderId}/templates` or inherited from a cascading folder, and a field may be  listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000  characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field; an empty value  clears the field. A date without a time zone offset is read as UTC. The write  finishes in the request and touches the folder only: to push the new values down a cascading folder run the  cascade again with `Overwrite`, while entries created or moved in later take them on their own. The custom text  fields are written with `PUT api/2.0/files/metadata/folder/{folderId}/customFields` instead. The answer is the  whole metadata of the folder after the write. A value of the wrong type, a field listed twice, a custom field or a  field of a template the folder does not carry is answered with 400; a folder the caller cannot edit with 403; a  folder or a field that does not exist with 404.
     * @summary Set folder metadata values
     * @param {FilesMetadataApiSetFolderValuesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public setFolderValues(requestParameters: MetadataApiSetFolderValuesRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).setFolderValues(requestParameters.folderId, requestParameters.setMetadataValues, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a metadata template from a file together with the values of its fields. The caller needs the right to edit  the file. The removal is irreversible for the values, the template itself stays on the portal and on the other  entries. It applies to a directly assigned template and to one inherited from a cascading folder alike; a later  cascade from that folder assigns it again. A file the caller cannot edit is answered with 403; a file, or a template,  that does not exist with 404.
     * @summary Unassign a template from a file
     * @param {FilesMetadataApiUnassignFileTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public unassignFileTemplate(requestParameters: MetadataApiUnassignFileTemplateRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).unassignFileTemplate(requestParameters.fileId, requestParameters.templateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a metadata template from a folder or a room together with the values of its fields. The caller needs the  right to edit the folder; for a room that is its manager. When the template was cascaded from this folder, the  cascade stops here: the folders and files below keep the template and their values as a direct assignment of their  own, and there is no bulk rollback. To take the template off them as well, remove it entry by entry with  `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`. A pass of the cascade still running is stopped  for this template. A folder the caller cannot edit is answered with 403; a folder, or a template, that does not exist  with 404.
     * @summary Unassign a template from a folder
     * @param {FilesMetadataApiUnassignFolderTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public unassignFolderTemplate(requestParameters: MetadataApiUnassignFolderTemplateRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).unassignFolderTemplate(requestParameters.folderId, requestParameters.templateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the name, the type, the options or the display order of a metadata field. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value. The type can be changed only while no entry  holds a value for the field, and an option can be removed only while no entry has selected it; a new option is sent  without an identifier and gets one in the answer. A new name must be unique within the template regardless of case.  The values already written are left as they are. The field is addressed through its own template: a field reached  through another template\'s route is answered with 404, the same as a field that does not exist. A conflicting name,  a type change on a field with values or the removal of an option in use is answered with 400.
     * @summary Update a metadata field
     * @param {FilesMetadataApiUpdateFieldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public updateField(requestParameters: MetadataApiUpdateFieldRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).updateField(requestParameters.templateId, requestParameters.fieldId, requestParameters.updateMetadataFieldRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Renames a metadata template or changes whether it is shown in the pickers. Only a DocSpace admin can change  templates. The request is partial: a property left out keeps its value, the fields are not touched here and are  changed with `PUT api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`. The new name follows the rules  of the creation: unique on the portal regardless of case and at most 255 characters. The answer is the whole template  with its fields. A template that does not exist is answered with 404, a name already in use or too long with 400.
     * @summary Update a metadata template
     * @param {FilesMetadataApiUpdateTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public updateTemplate(requestParameters: MetadataApiUpdateTemplateRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).updateTemplate(requestParameters.templateId, requestParameters.updateMetadataTemplate, options).then((request) => request(this.axios, this.basePath));
    }
}

