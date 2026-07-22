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
import type { NewAiCreatePromptInput } from '../../models';
// @ts-ignore
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiFolderMutationResult } from '../../models';
// @ts-ignore
import type { NewAiImportResult } from '../../models';
// @ts-ignore
import type { NewAiPrompt } from '../../models';
// @ts-ignore
import type { NewAiPromptBundle } from '../../models';
// @ts-ignore
import type { NewAiPromptFolder } from '../../models';
// @ts-ignore
import type { NewAiPromptMutationResult } from '../../models';
// @ts-ignore
import type { NewAiPromptsImportBundleRequest } from '../../models';
// @ts-ignore
import type { NewAiPromptsMoveRequest } from '../../models';
// @ts-ignore
import type { NewAiPromptsRenameFolderRequest } from '../../models';
// @ts-ignore
import type { NewAiPromptsUpdateRequest } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
/**
 * PromptsApi - axios parameter creator
 * @export
 */
export const PromptsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Create
         * @param {NewAiCreatePromptInput} newAiCreatePromptInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create/
         */
        newAiPromptsCreate: async (newAiCreatePromptInput: NewAiCreatePromptInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiCreatePromptInput' is not null or undefined
            assertParamExists('newAiPromptsCreate', 'newAiCreatePromptInput', newAiCreatePromptInput)

            const localVarPath = `/api/2.0/new-ai/prompts/create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiCreatePromptInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create-folder/
         */
        newAiPromptsCreateFolder: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiPromptsCreateFolder', 'body', body)

            const localVarPath = `/api/2.0/new-ai/prompts/create-folder`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete/
         */
        newAiPromptsDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiPromptsDelete', 'body', body)

            const localVarPath = `/api/2.0/new-ai/prompts/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete-folder/
         */
        newAiPromptsDeleteFolder: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiPromptsDeleteFolder', 'body', body)

            const localVarPath = `/api/2.0/new-ai/prompts/delete-folder`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-export/
         */
        newAiPromptsExport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/new-ai/prompts/export`;
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
         * 
         * @summary Get by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-by-id/
         */
        newAiPromptsGetById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('newAiPromptsGetById', 'id', id)

            const localVarPath = `/api/2.0/new-ai/prompts/get-by-id`;
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
         * 
         * @summary Get folder by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsGetFolderById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-folder-by-id/
         */
        newAiPromptsGetFolderById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('newAiPromptsGetFolderById', 'id', id)

            const localVarPath = `/api/2.0/new-ai/prompts/get-folder-by-id`;
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
         * 
         * @summary Import bundle
         * @param {NewAiPromptsImportBundleRequest} newAiPromptsImportBundleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsImportBundle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-import-bundle/
         */
        newAiPromptsImportBundle: async (newAiPromptsImportBundleRequest: NewAiPromptsImportBundleRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiPromptsImportBundleRequest' is not null or undefined
            assertParamExists('newAiPromptsImportBundle', 'newAiPromptsImportBundleRequest', newAiPromptsImportBundleRequest)

            const localVarPath = `/api/2.0/new-ai/prompts/import-bundle`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiPromptsImportBundleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List
         * @param {string} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list/
         */
        newAiPromptsList: async (folderId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('newAiPromptsList', 'folderId', folderId)

            const localVarPath = `/api/2.0/new-ai/prompts/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (folderId !== undefined) {
                localVarQueryParameter['folderId'] = folderId;
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
         * 
         * @summary List folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsListFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list-folders/
         */
        newAiPromptsListFolders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/new-ai/prompts/list-folders`;
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
         * 
         * @summary Move
         * @param {NewAiPromptsMoveRequest} newAiPromptsMoveRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsMove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-move/
         */
        newAiPromptsMove: async (newAiPromptsMoveRequest: NewAiPromptsMoveRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiPromptsMoveRequest' is not null or undefined
            assertParamExists('newAiPromptsMove', 'newAiPromptsMoveRequest', newAiPromptsMoveRequest)

            const localVarPath = `/api/2.0/new-ai/prompts/move`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiPromptsMoveRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Rename folder
         * @param {NewAiPromptsRenameFolderRequest} newAiPromptsRenameFolderRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsRenameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-rename-folder/
         */
        newAiPromptsRenameFolder: async (newAiPromptsRenameFolderRequest: NewAiPromptsRenameFolderRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiPromptsRenameFolderRequest' is not null or undefined
            assertParamExists('newAiPromptsRenameFolder', 'newAiPromptsRenameFolderRequest', newAiPromptsRenameFolderRequest)

            const localVarPath = `/api/2.0/new-ai/prompts/rename-folder`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiPromptsRenameFolderRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update
         * @param {NewAiPromptsUpdateRequest} newAiPromptsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-update/
         */
        newAiPromptsUpdate: async (newAiPromptsUpdateRequest: NewAiPromptsUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiPromptsUpdateRequest' is not null or undefined
            assertParamExists('newAiPromptsUpdate', 'newAiPromptsUpdateRequest', newAiPromptsUpdateRequest)

            const localVarPath = `/api/2.0/new-ai/prompts/update`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiPromptsUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PromptsApi - functional programming interface
 * @export
 */
export const PromptsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PromptsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create
         * @param {NewAiCreatePromptInput} newAiCreatePromptInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create/
         */
        async newAiPromptsCreate(newAiCreatePromptInput: NewAiCreatePromptInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiPromptMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsCreate(newAiCreatePromptInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Create folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create-folder/
         */
        async newAiPromptsCreateFolder(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsCreateFolder(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsCreateFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete/
         */
        async newAiPromptsDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete-folder/
         */
        async newAiPromptsDeleteFolder(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsDeleteFolder(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsDeleteFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-export/
         */
        async newAiPromptsExport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiPromptBundle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsExport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsExport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-by-id/
         */
        async newAiPromptsGetById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiPrompt>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsGetById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsGetById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get folder by id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsGetFolderById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-folder-by-id/
         */
        async newAiPromptsGetFolderById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiPromptFolder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsGetFolderById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsGetFolderById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Import bundle
         * @param {NewAiPromptsImportBundleRequest} newAiPromptsImportBundleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsImportBundle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-import-bundle/
         */
        async newAiPromptsImportBundle(newAiPromptsImportBundleRequest: NewAiPromptsImportBundleRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiImportResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsImportBundle(newAiPromptsImportBundleRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsImportBundle']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List
         * @param {string} folderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list/
         */
        async newAiPromptsList(folderId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiPrompt>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsList(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsListFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list-folders/
         */
        async newAiPromptsListFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiPromptFolder>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsListFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsListFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Move
         * @param {NewAiPromptsMoveRequest} newAiPromptsMoveRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsMove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-move/
         */
        async newAiPromptsMove(newAiPromptsMoveRequest: NewAiPromptsMoveRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiPromptMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsMove(newAiPromptsMoveRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsMove']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Rename folder
         * @param {NewAiPromptsRenameFolderRequest} newAiPromptsRenameFolderRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsRenameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-rename-folder/
         */
        async newAiPromptsRenameFolder(newAiPromptsRenameFolderRequest: NewAiPromptsRenameFolderRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiFolderMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsRenameFolder(newAiPromptsRenameFolderRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsRenameFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update
         * @param {NewAiPromptsUpdateRequest} newAiPromptsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiPromptsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-update/
         */
        async newAiPromptsUpdate(newAiPromptsUpdateRequest: NewAiPromptsUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiPromptMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiPromptsUpdate(newAiPromptsUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.newAiPromptsUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PromptsApi - factory interface
 * @export
 */
export const PromptsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PromptsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create
         * @param {PromptsApiNewAiPromptsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create/
         * @throws {RequiredError}
         */
        newAiPromptsCreate(requestParameters: PromptsApiNewAiPromptsCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiPromptMutationResult> {
            return localVarFp.newAiPromptsCreate(requestParameters.newAiCreatePromptInput, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create folder
         * @param {PromptsApiNewAiPromptsCreateFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create-folder/
         * @throws {RequiredError}
         */
        newAiPromptsCreateFolder(requestParameters: PromptsApiNewAiPromptsCreateFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderMutationResult> {
            return localVarFp.newAiPromptsCreateFolder(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete
         * @param {PromptsApiNewAiPromptsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete/
         * @throws {RequiredError}
         */
        newAiPromptsDelete(requestParameters: PromptsApiNewAiPromptsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiPromptsDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete folder
         * @param {PromptsApiNewAiPromptsDeleteFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete-folder/
         * @throws {RequiredError}
         */
        newAiPromptsDeleteFolder(requestParameters: PromptsApiNewAiPromptsDeleteFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiPromptsDeleteFolder(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Export
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-export/
         * @throws {RequiredError}
         */
        newAiPromptsExport(options?: RawAxiosRequestConfig): AxiosPromise<NewAiPromptBundle> {
            return localVarFp.newAiPromptsExport(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get by id
         * @param {PromptsApiNewAiPromptsGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-by-id/
         * @throws {RequiredError}
         */
        newAiPromptsGetById(requestParameters: PromptsApiNewAiPromptsGetByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiPrompt> {
            return localVarFp.newAiPromptsGetById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get folder by id
         * @param {PromptsApiNewAiPromptsGetFolderByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsGetFolderById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-folder-by-id/
         * @throws {RequiredError}
         */
        newAiPromptsGetFolderById(requestParameters: PromptsApiNewAiPromptsGetFolderByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiPromptFolder> {
            return localVarFp.newAiPromptsGetFolderById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Import bundle
         * @param {PromptsApiNewAiPromptsImportBundleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsImportBundle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-import-bundle/
         * @throws {RequiredError}
         */
        newAiPromptsImportBundle(requestParameters: PromptsApiNewAiPromptsImportBundleRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiImportResult> {
            return localVarFp.newAiPromptsImportBundle(requestParameters.newAiPromptsImportBundleRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List
         * @param {PromptsApiNewAiPromptsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list/
         * @throws {RequiredError}
         */
        newAiPromptsList(requestParameters: PromptsApiNewAiPromptsListRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiPrompt>> {
            return localVarFp.newAiPromptsList(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List folders
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsListFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list-folders/
         * @throws {RequiredError}
         */
        newAiPromptsListFolders(options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiPromptFolder>> {
            return localVarFp.newAiPromptsListFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Move
         * @param {PromptsApiNewAiPromptsMoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsMove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-move/
         * @throws {RequiredError}
         */
        newAiPromptsMove(requestParameters: PromptsApiNewAiPromptsMoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiPromptMutationResult> {
            return localVarFp.newAiPromptsMove(requestParameters.newAiPromptsMoveRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Rename folder
         * @param {PromptsApiNewAiPromptsRenameFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsRenameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-rename-folder/
         * @throws {RequiredError}
         */
        newAiPromptsRenameFolder(requestParameters: PromptsApiNewAiPromptsRenameFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiFolderMutationResult> {
            return localVarFp.newAiPromptsRenameFolder(requestParameters.newAiPromptsRenameFolderRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update
         * @param {PromptsApiNewAiPromptsUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiPromptsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-update/
         * @throws {RequiredError}
         */
        newAiPromptsUpdate(requestParameters: PromptsApiNewAiPromptsUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiPromptMutationResult> {
            return localVarFp.newAiPromptsUpdate(requestParameters.newAiPromptsUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiPromptsCreate operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsCreateRequest
 */
export interface PromptsApiNewAiPromptsCreateRequest {
    /**
     * 
     * @type {NewAiCreatePromptInput}
     * @memberof PromptsApiNewAiPromptsCreate
     */
    readonly newAiCreatePromptInput: NewAiCreatePromptInput
}

/**
 * Request parameters for newAiPromptsCreateFolder operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsCreateFolderRequest
 */
export interface PromptsApiNewAiPromptsCreateFolderRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiNewAiPromptsCreateFolder
     */
    readonly body: string
}

/**
 * Request parameters for newAiPromptsDelete operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsDeleteRequest
 */
export interface PromptsApiNewAiPromptsDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiNewAiPromptsDelete
     */
    readonly body: string
}

/**
 * Request parameters for newAiPromptsDeleteFolder operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsDeleteFolderRequest
 */
export interface PromptsApiNewAiPromptsDeleteFolderRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiNewAiPromptsDeleteFolder
     */
    readonly body: string
}

/**
 * Request parameters for newAiPromptsGetById operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsGetByIdRequest
 */
export interface PromptsApiNewAiPromptsGetByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiNewAiPromptsGetById
     */
    readonly id: string
}

/**
 * Request parameters for newAiPromptsGetFolderById operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsGetFolderByIdRequest
 */
export interface PromptsApiNewAiPromptsGetFolderByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiNewAiPromptsGetFolderById
     */
    readonly id: string
}

/**
 * Request parameters for newAiPromptsImportBundle operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsImportBundleRequest
 */
export interface PromptsApiNewAiPromptsImportBundleRequest {
    /**
     * 
     * @type {NewAiPromptsImportBundleRequest}
     * @memberof PromptsApiNewAiPromptsImportBundle
     */
    readonly newAiPromptsImportBundleRequest: NewAiPromptsImportBundleRequest
}

/**
 * Request parameters for newAiPromptsList operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsListRequest
 */
export interface PromptsApiNewAiPromptsListRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiNewAiPromptsList
     */
    readonly folderId: string
}

/**
 * Request parameters for newAiPromptsMove operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsMoveRequest
 */
export interface PromptsApiNewAiPromptsMoveRequest {
    /**
     * 
     * @type {NewAiPromptsMoveRequest}
     * @memberof PromptsApiNewAiPromptsMove
     */
    readonly newAiPromptsMoveRequest: NewAiPromptsMoveRequest
}

/**
 * Request parameters for newAiPromptsRenameFolder operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsRenameFolderRequest
 */
export interface PromptsApiNewAiPromptsRenameFolderRequest {
    /**
     * 
     * @type {NewAiPromptsRenameFolderRequest}
     * @memberof PromptsApiNewAiPromptsRenameFolder
     */
    readonly newAiPromptsRenameFolderRequest: NewAiPromptsRenameFolderRequest
}

/**
 * Request parameters for newAiPromptsUpdate operation in PromptsApi.
 * @export
 * @interface PromptsApiNewAiPromptsUpdateRequest
 */
export interface PromptsApiNewAiPromptsUpdateRequest {
    /**
     * 
     * @type {NewAiPromptsUpdateRequest}
     * @memberof PromptsApiNewAiPromptsUpdate
     */
    readonly newAiPromptsUpdateRequest: NewAiPromptsUpdateRequest
}

/**
 * PromptsApi - object-oriented interface
 * @export
 * @class PromptsApi
 * @extends {BaseAPI}
 */
export class PromptsApi extends BaseAPI {
    /**
     * 
     * @summary Create
     * @param {NewAIPromptsApiNewAiPromptsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsCreate(requestParameters: PromptsApiNewAiPromptsCreateRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsCreate(requestParameters.newAiCreatePromptInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create folder
     * @param {NewAIPromptsApiNewAiPromptsCreateFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsCreateFolder(requestParameters: PromptsApiNewAiPromptsCreateFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsCreateFolder(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete
     * @param {NewAIPromptsApiNewAiPromptsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsDelete(requestParameters: PromptsApiNewAiPromptsDeleteRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete folder
     * @param {NewAIPromptsApiNewAiPromptsDeleteFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsDeleteFolder(requestParameters: PromptsApiNewAiPromptsDeleteFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsDeleteFolder(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsExport(options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get by id
     * @param {NewAIPromptsApiNewAiPromptsGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsGetById(requestParameters: PromptsApiNewAiPromptsGetByIdRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsGetById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get folder by id
     * @param {NewAIPromptsApiNewAiPromptsGetFolderByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsGetFolderById(requestParameters: PromptsApiNewAiPromptsGetFolderByIdRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsGetFolderById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Import bundle
     * @param {NewAIPromptsApiNewAiPromptsImportBundleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsImportBundle(requestParameters: PromptsApiNewAiPromptsImportBundleRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsImportBundle(requestParameters.newAiPromptsImportBundleRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List
     * @param {NewAIPromptsApiNewAiPromptsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsList(requestParameters: PromptsApiNewAiPromptsListRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsList(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List folders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsListFolders(options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsListFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Move
     * @param {NewAIPromptsApiNewAiPromptsMoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsMove(requestParameters: PromptsApiNewAiPromptsMoveRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsMove(requestParameters.newAiPromptsMoveRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Rename folder
     * @param {NewAIPromptsApiNewAiPromptsRenameFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsRenameFolder(requestParameters: PromptsApiNewAiPromptsRenameFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsRenameFolder(requestParameters.newAiPromptsRenameFolderRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update
     * @param {NewAIPromptsApiNewAiPromptsUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public newAiPromptsUpdate(requestParameters: PromptsApiNewAiPromptsUpdateRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).newAiPromptsUpdate(requestParameters.newAiPromptsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

