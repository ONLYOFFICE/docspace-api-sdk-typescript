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
import type { AiCreatePromptInput } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiFolderMutationResult } from '../../models';
// @ts-ignore
import type { AiImportResult } from '../../models';
// @ts-ignore
import type { AiPrompt } from '../../models';
// @ts-ignore
import type { AiPromptBundle } from '../../models';
// @ts-ignore
import type { AiPromptFolder } from '../../models';
// @ts-ignore
import type { AiPromptMutationResult } from '../../models';
// @ts-ignore
import type { AiPromptsImportBundleRequest } from '../../models';
// @ts-ignore
import type { AiPromptsMoveRequest } from '../../models';
// @ts-ignore
import type { AiPromptsRenameFolderRequest } from '../../models';
// @ts-ignore
import type { AiPromptsUpdateRequest } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
/**
 * PromptsApi - axios parameter creator
 * @export
 */
export const PromptsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Saves a new prompt. The name must be non-empty and unique inside its folder, and `folderId` must point at an existing folder - omit it for the root.
         * @summary Create
         * @param {AiCreatePromptInput} aiCreatePromptInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create/
         */
        aiPromptsCreate: async (aiCreatePromptInput: AiCreatePromptInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiCreatePromptInput' is not null or undefined
            assertParamExists('aiPromptsCreate', 'aiCreatePromptInput', aiCreatePromptInput)

            const localVarPath = `/api/2.0/ai/prompts/create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiCreatePromptInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a prompt folder. The name must be non-empty and unique across the portal - prompt folders do not nest.
         * @summary Create folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create-folder/
         */
        aiPromptsCreateFolder: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiPromptsCreateFolder', 'body', body)

            const localVarPath = `/api/2.0/ai/prompts/create-folder`;
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
         * Deletes a saved prompt. Does nothing when it no longer exists.
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete/
         */
        aiPromptsDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiPromptsDelete', 'body', body)

            const localVarPath = `/api/2.0/ai/prompts/delete`;
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
         * Deletes a prompt folder together with the prompts inside it.
         * @summary Delete folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete-folder/
         */
        aiPromptsDeleteFolder: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiPromptsDeleteFolder', 'body', body)

            const localVarPath = `/api/2.0/ai/prompts/delete-folder`;
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
         * Builds a self-contained, versioned bundle of every saved prompt and folder, ready for `import-bundle`.
         * @summary Export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-export/
         */
        aiPromptsExport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/prompts/export`;
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
         * Returns one saved prompt, or an empty result when the identifier is unknown.
         * @summary Get by id
         * @param {string} id The saved prompt identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-by-id/
         */
        aiPromptsGetById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiPromptsGetById', 'id', id)

            const localVarPath = `/api/2.0/ai/prompts/get-by-id`;
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
         * Returns one prompt folder, or an empty result when the identifier is unknown.
         * @summary Get folder by id
         * @param {string} id The prompt folder identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsGetFolderById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-folder-by-id/
         */
        aiPromptsGetFolderById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('aiPromptsGetFolderById', 'id', id)

            const localVarPath = `/api/2.0/ai/prompts/get-folder-by-id`;
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
         * Restores a prompt bundle. `replace` wipes the current prompts and folders before writing the bundle, `merge` writes the bundle on top of what is already there; both validate the folder references inside the bundle before any write, so a corrupt bundle is rejected whole.
         * @summary Import bundle
         * @param {AiPromptsImportBundleRequest} aiPromptsImportBundleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsImportBundle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-import-bundle/
         */
        aiPromptsImportBundle: async (aiPromptsImportBundleRequest: AiPromptsImportBundleRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPromptsImportBundleRequest' is not null or undefined
            assertParamExists('aiPromptsImportBundle', 'aiPromptsImportBundleRequest', aiPromptsImportBundleRequest)

            const localVarPath = `/api/2.0/ai/prompts/import-bundle`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiPromptsImportBundleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists saved prompts. Scope the answer to one folder, ask for the root-level prompts only, or omit the folder to get every prompt newest first.
         * @summary List
         * @param {string} [folderId] The prompt folder identifier. Omit to list the prompts that sit outside any folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list/
         */
        aiPromptsList: async (folderId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/prompts/list`;
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
         * Lists the prompt folders, newest first.
         * @summary List folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsListFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list-folders/
         */
        aiPromptsListFolders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/prompts/list-folders`;
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
         * Moves a saved prompt into another folder, or to the root. The name is re-validated in the target folder, so the move fails when a prompt of that name is already there.
         * @summary Move
         * @param {AiPromptsMoveRequest} aiPromptsMoveRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsMove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-move/
         */
        aiPromptsMove: async (aiPromptsMoveRequest: AiPromptsMoveRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPromptsMoveRequest' is not null or undefined
            assertParamExists('aiPromptsMove', 'aiPromptsMoveRequest', aiPromptsMoveRequest)

            const localVarPath = `/api/2.0/ai/prompts/move`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiPromptsMoveRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Renames a prompt folder, validating the new name against the existing folders.
         * @summary Rename folder
         * @param {AiPromptsRenameFolderRequest} aiPromptsRenameFolderRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsRenameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-rename-folder/
         */
        aiPromptsRenameFolder: async (aiPromptsRenameFolderRequest: AiPromptsRenameFolderRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPromptsRenameFolderRequest' is not null or undefined
            assertParamExists('aiPromptsRenameFolder', 'aiPromptsRenameFolderRequest', aiPromptsRenameFolderRequest)

            const localVarPath = `/api/2.0/ai/prompts/rename-folder`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiPromptsRenameFolderRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a saved prompt. The name and the folder reference are re-validated whenever either of them changes.
         * @summary Update
         * @param {AiPromptsUpdateRequest} aiPromptsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-update/
         */
        aiPromptsUpdate: async (aiPromptsUpdateRequest: AiPromptsUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPromptsUpdateRequest' is not null or undefined
            assertParamExists('aiPromptsUpdate', 'aiPromptsUpdateRequest', aiPromptsUpdateRequest)

            const localVarPath = `/api/2.0/ai/prompts/update`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiPromptsUpdateRequest, localVarRequestOptions, configuration)

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
         * Saves a new prompt. The name must be non-empty and unique inside its folder, and `folderId` must point at an existing folder - omit it for the root.
         * @summary Create
         * @param {AiCreatePromptInput} aiCreatePromptInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create/
         */
        async aiPromptsCreate(aiCreatePromptInput: AiCreatePromptInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPromptMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsCreate(aiCreatePromptInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a prompt folder. The name must be non-empty and unique across the portal - prompt folders do not nest.
         * @summary Create folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create-folder/
         */
        async aiPromptsCreateFolder(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsCreateFolder(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsCreateFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a saved prompt. Does nothing when it no longer exists.
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete/
         */
        async aiPromptsDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a prompt folder together with the prompts inside it.
         * @summary Delete folder
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete-folder/
         */
        async aiPromptsDeleteFolder(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsDeleteFolder(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsDeleteFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Builds a self-contained, versioned bundle of every saved prompt and folder, ready for `import-bundle`.
         * @summary Export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-export/
         */
        async aiPromptsExport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPromptBundle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsExport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsExport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one saved prompt, or an empty result when the identifier is unknown.
         * @summary Get by id
         * @param {string} id The saved prompt identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-by-id/
         */
        async aiPromptsGetById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPrompt>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsGetById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsGetById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one prompt folder, or an empty result when the identifier is unknown.
         * @summary Get folder by id
         * @param {string} id The prompt folder identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsGetFolderById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-folder-by-id/
         */
        async aiPromptsGetFolderById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPromptFolder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsGetFolderById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsGetFolderById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Restores a prompt bundle. `replace` wipes the current prompts and folders before writing the bundle, `merge` writes the bundle on top of what is already there; both validate the folder references inside the bundle before any write, so a corrupt bundle is rejected whole.
         * @summary Import bundle
         * @param {AiPromptsImportBundleRequest} aiPromptsImportBundleRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsImportBundle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-import-bundle/
         */
        async aiPromptsImportBundle(aiPromptsImportBundleRequest: AiPromptsImportBundleRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiImportResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsImportBundle(aiPromptsImportBundleRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsImportBundle']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists saved prompts. Scope the answer to one folder, ask for the root-level prompts only, or omit the folder to get every prompt newest first.
         * @summary List
         * @param {string} [folderId] The prompt folder identifier. Omit to list the prompts that sit outside any folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list/
         */
        async aiPromptsList(folderId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiPrompt>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsList(folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the prompt folders, newest first.
         * @summary List folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsListFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list-folders/
         */
        async aiPromptsListFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiPromptFolder>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsListFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsListFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Moves a saved prompt into another folder, or to the root. The name is re-validated in the target folder, so the move fails when a prompt of that name is already there.
         * @summary Move
         * @param {AiPromptsMoveRequest} aiPromptsMoveRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsMove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-move/
         */
        async aiPromptsMove(aiPromptsMoveRequest: AiPromptsMoveRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPromptMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsMove(aiPromptsMoveRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsMove']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Renames a prompt folder, validating the new name against the existing folders.
         * @summary Rename folder
         * @param {AiPromptsRenameFolderRequest} aiPromptsRenameFolderRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsRenameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-rename-folder/
         */
        async aiPromptsRenameFolder(aiPromptsRenameFolderRequest: AiPromptsRenameFolderRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsRenameFolder(aiPromptsRenameFolderRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsRenameFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a saved prompt. The name and the folder reference are re-validated whenever either of them changes.
         * @summary Update
         * @param {AiPromptsUpdateRequest} aiPromptsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-update/
         */
        async aiPromptsUpdate(aiPromptsUpdateRequest: AiPromptsUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPromptMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsUpdate(aiPromptsUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsUpdate']?.[localVarOperationServerIndex]?.url;
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
         * Saves a new prompt. The name must be non-empty and unique inside its folder, and `folderId` must point at an existing folder - omit it for the root.
         * @summary Create
         * @param {PromptsApiAiPromptsCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsCreate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create/
         * @throws {RequiredError}
         */
        aiPromptsCreate(requestParameters: PromptsApiAiPromptsCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiPromptMutationResult> {
            return localVarFp.aiPromptsCreate(requestParameters.aiCreatePromptInput, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a prompt folder. The name must be non-empty and unique across the portal - prompt folders do not nest.
         * @summary Create folder
         * @param {PromptsApiAiPromptsCreateFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create-folder/
         * @throws {RequiredError}
         */
        aiPromptsCreateFolder(requestParameters: PromptsApiAiPromptsCreateFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderMutationResult> {
            return localVarFp.aiPromptsCreateFolder(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a saved prompt. Does nothing when it no longer exists.
         * @summary Delete
         * @param {PromptsApiAiPromptsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete/
         * @throws {RequiredError}
         */
        aiPromptsDelete(requestParameters: PromptsApiAiPromptsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiPromptsDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a prompt folder together with the prompts inside it.
         * @summary Delete folder
         * @param {PromptsApiAiPromptsDeleteFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete-folder/
         * @throws {RequiredError}
         */
        aiPromptsDeleteFolder(requestParameters: PromptsApiAiPromptsDeleteFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiPromptsDeleteFolder(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Builds a self-contained, versioned bundle of every saved prompt and folder, ready for `import-bundle`.
         * @summary Export
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-export/
         * @throws {RequiredError}
         */
        aiPromptsExport(options?: RawAxiosRequestConfig): AxiosPromise<AiPromptBundle> {
            return localVarFp.aiPromptsExport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one saved prompt, or an empty result when the identifier is unknown.
         * @summary Get by id
         * @param {PromptsApiAiPromptsGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsGetById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-by-id/
         * @throws {RequiredError}
         */
        aiPromptsGetById(requestParameters: PromptsApiAiPromptsGetByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiPrompt> {
            return localVarFp.aiPromptsGetById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one prompt folder, or an empty result when the identifier is unknown.
         * @summary Get folder by id
         * @param {PromptsApiAiPromptsGetFolderByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsGetFolderById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-folder-by-id/
         * @throws {RequiredError}
         */
        aiPromptsGetFolderById(requestParameters: PromptsApiAiPromptsGetFolderByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiPromptFolder> {
            return localVarFp.aiPromptsGetFolderById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores a prompt bundle. `replace` wipes the current prompts and folders before writing the bundle, `merge` writes the bundle on top of what is already there; both validate the folder references inside the bundle before any write, so a corrupt bundle is rejected whole.
         * @summary Import bundle
         * @param {PromptsApiAiPromptsImportBundleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsImportBundle operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-import-bundle/
         * @throws {RequiredError}
         */
        aiPromptsImportBundle(requestParameters: PromptsApiAiPromptsImportBundleRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiImportResult> {
            return localVarFp.aiPromptsImportBundle(requestParameters.aiPromptsImportBundleRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists saved prompts. Scope the answer to one folder, ask for the root-level prompts only, or omit the folder to get every prompt newest first.
         * @summary List
         * @param {PromptsApiAiPromptsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list/
         * @throws {RequiredError}
         */
        aiPromptsList(requestParameters: PromptsApiAiPromptsListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiPrompt>> {
            return localVarFp.aiPromptsList(requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the prompt folders, newest first.
         * @summary List folders
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsListFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list-folders/
         * @throws {RequiredError}
         */
        aiPromptsListFolders(options?: RawAxiosRequestConfig): AxiosPromise<Array<AiPromptFolder>> {
            return localVarFp.aiPromptsListFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * Moves a saved prompt into another folder, or to the root. The name is re-validated in the target folder, so the move fails when a prompt of that name is already there.
         * @summary Move
         * @param {PromptsApiAiPromptsMoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsMove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-move/
         * @throws {RequiredError}
         */
        aiPromptsMove(requestParameters: PromptsApiAiPromptsMoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiPromptMutationResult> {
            return localVarFp.aiPromptsMove(requestParameters.aiPromptsMoveRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Renames a prompt folder, validating the new name against the existing folders.
         * @summary Rename folder
         * @param {PromptsApiAiPromptsRenameFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsRenameFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-rename-folder/
         * @throws {RequiredError}
         */
        aiPromptsRenameFolder(requestParameters: PromptsApiAiPromptsRenameFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderMutationResult> {
            return localVarFp.aiPromptsRenameFolder(requestParameters.aiPromptsRenameFolderRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a saved prompt. The name and the folder reference are re-validated whenever either of them changes.
         * @summary Update
         * @param {PromptsApiAiPromptsUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-update/
         * @throws {RequiredError}
         */
        aiPromptsUpdate(requestParameters: PromptsApiAiPromptsUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiPromptMutationResult> {
            return localVarFp.aiPromptsUpdate(requestParameters.aiPromptsUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiPromptsCreate operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsCreateRequest
 */
export interface PromptsApiAiPromptsCreateRequest {
    /**
     * 
     * @type {AiCreatePromptInput}
     * @memberof PromptsApiAiPromptsCreate
     */
    readonly aiCreatePromptInput: AiCreatePromptInput
}

/**
 * Request parameters for aiPromptsCreateFolder operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsCreateFolderRequest
 */
export interface PromptsApiAiPromptsCreateFolderRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiAiPromptsCreateFolder
     */
    readonly body: string
}

/**
 * Request parameters for aiPromptsDelete operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsDeleteRequest
 */
export interface PromptsApiAiPromptsDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiAiPromptsDelete
     */
    readonly body: string
}

/**
 * Request parameters for aiPromptsDeleteFolder operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsDeleteFolderRequest
 */
export interface PromptsApiAiPromptsDeleteFolderRequest {
    /**
     * 
     * @type {string}
     * @memberof PromptsApiAiPromptsDeleteFolder
     */
    readonly body: string
}

/**
 * Request parameters for aiPromptsGetById operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsGetByIdRequest
 */
export interface PromptsApiAiPromptsGetByIdRequest {
    /**
     * The saved prompt identifier.
     * @type {string}
     * @memberof PromptsApiAiPromptsGetById
     */
    readonly id: string
}

/**
 * Request parameters for aiPromptsGetFolderById operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsGetFolderByIdRequest
 */
export interface PromptsApiAiPromptsGetFolderByIdRequest {
    /**
     * The prompt folder identifier.
     * @type {string}
     * @memberof PromptsApiAiPromptsGetFolderById
     */
    readonly id: string
}

/**
 * Request parameters for aiPromptsImportBundle operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsImportBundleRequest
 */
export interface PromptsApiAiPromptsImportBundleRequest {
    /**
     * 
     * @type {AiPromptsImportBundleRequest}
     * @memberof PromptsApiAiPromptsImportBundle
     */
    readonly aiPromptsImportBundleRequest: AiPromptsImportBundleRequest
}

/**
 * Request parameters for aiPromptsList operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsListRequest
 */
export interface PromptsApiAiPromptsListRequest {
    /**
     * The prompt folder identifier. Omit to list the prompts that sit outside any folder.
     * @type {string}
     * @memberof PromptsApiAiPromptsList
     */
    readonly folderId?: string
}

/**
 * Request parameters for aiPromptsMove operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsMoveRequest
 */
export interface PromptsApiAiPromptsMoveRequest {
    /**
     * 
     * @type {AiPromptsMoveRequest}
     * @memberof PromptsApiAiPromptsMove
     */
    readonly aiPromptsMoveRequest: AiPromptsMoveRequest
}

/**
 * Request parameters for aiPromptsRenameFolder operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsRenameFolderRequest
 */
export interface PromptsApiAiPromptsRenameFolderRequest {
    /**
     * 
     * @type {AiPromptsRenameFolderRequest}
     * @memberof PromptsApiAiPromptsRenameFolder
     */
    readonly aiPromptsRenameFolderRequest: AiPromptsRenameFolderRequest
}

/**
 * Request parameters for aiPromptsUpdate operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsUpdateRequest
 */
export interface PromptsApiAiPromptsUpdateRequest {
    /**
     * 
     * @type {AiPromptsUpdateRequest}
     * @memberof PromptsApiAiPromptsUpdate
     */
    readonly aiPromptsUpdateRequest: AiPromptsUpdateRequest
}

/**
 * PromptsApi - object-oriented interface
 * @export
 * @class PromptsApi
 * @extends {BaseAPI}
 */
export class PromptsApi extends BaseAPI {
    /**
     * Saves a new prompt. The name must be non-empty and unique inside its folder, and `folderId` must point at an existing folder - omit it for the root.
     * @summary Create
     * @param {AIPromptsApiAiPromptsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsCreate(requestParameters: PromptsApiAiPromptsCreateRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsCreate(requestParameters.aiCreatePromptInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a prompt folder. The name must be non-empty and unique across the portal - prompt folders do not nest.
     * @summary Create folder
     * @param {AIPromptsApiAiPromptsCreateFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsCreateFolder(requestParameters: PromptsApiAiPromptsCreateFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsCreateFolder(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a saved prompt. Does nothing when it no longer exists.
     * @summary Delete
     * @param {AIPromptsApiAiPromptsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsDelete(requestParameters: PromptsApiAiPromptsDeleteRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a prompt folder together with the prompts inside it.
     * @summary Delete folder
     * @param {AIPromptsApiAiPromptsDeleteFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsDeleteFolder(requestParameters: PromptsApiAiPromptsDeleteFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsDeleteFolder(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Builds a self-contained, versioned bundle of every saved prompt and folder, ready for `import-bundle`.
     * @summary Export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsExport(options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one saved prompt, or an empty result when the identifier is unknown.
     * @summary Get by id
     * @param {AIPromptsApiAiPromptsGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsGetById(requestParameters: PromptsApiAiPromptsGetByIdRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsGetById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one prompt folder, or an empty result when the identifier is unknown.
     * @summary Get folder by id
     * @param {AIPromptsApiAiPromptsGetFolderByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsGetFolderById(requestParameters: PromptsApiAiPromptsGetFolderByIdRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsGetFolderById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores a prompt bundle. `replace` wipes the current prompts and folders before writing the bundle, `merge` writes the bundle on top of what is already there; both validate the folder references inside the bundle before any write, so a corrupt bundle is rejected whole.
     * @summary Import bundle
     * @param {AIPromptsApiAiPromptsImportBundleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsImportBundle(requestParameters: PromptsApiAiPromptsImportBundleRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsImportBundle(requestParameters.aiPromptsImportBundleRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists saved prompts. Scope the answer to one folder, ask for the root-level prompts only, or omit the folder to get every prompt newest first.
     * @summary List
     * @param {AIPromptsApiAiPromptsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsList(requestParameters: PromptsApiAiPromptsListRequest = {}, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsList(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the prompt folders, newest first.
     * @summary List folders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsListFolders(options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsListFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves a saved prompt into another folder, or to the root. The name is re-validated in the target folder, so the move fails when a prompt of that name is already there.
     * @summary Move
     * @param {AIPromptsApiAiPromptsMoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsMove(requestParameters: PromptsApiAiPromptsMoveRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsMove(requestParameters.aiPromptsMoveRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Renames a prompt folder, validating the new name against the existing folders.
     * @summary Rename folder
     * @param {AIPromptsApiAiPromptsRenameFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsRenameFolder(requestParameters: PromptsApiAiPromptsRenameFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsRenameFolder(requestParameters.aiPromptsRenameFolderRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a saved prompt. The name and the folder reference are re-validated whenever either of them changes.
     * @summary Update
     * @param {AIPromptsApiAiPromptsUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsUpdate(requestParameters: PromptsApiAiPromptsUpdateRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsUpdate(requestParameters.aiPromptsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

