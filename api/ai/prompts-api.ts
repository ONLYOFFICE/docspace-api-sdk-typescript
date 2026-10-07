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
         * Saves a new prompt in the caller\'s own prompt library and returns it. The name has to be non-empty and unique inside its folder, and `folderId` has to name an existing folder - omit it to save the prompt at the root. Prompts are per-user: another user\'s library is never visible here, and no permission beyond having AI enabled is needed. The answer carries the stored prompt including the ID to use with the update, move and delete operations.
         * @summary Save a prompt
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Creates a folder in the caller\'s prompt library and returns it. The name has to be non-empty and unique across that library. Folders do not nest: there is one flat level, so a folder cannot be created inside another. The answer carries the folder ID to use as `folderId` when saving or moving prompts.
         * @summary Create folder
         * @param {string} aiPromptsCreateFolderRequest The name of the folder to create, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create-folder/
         */
        aiPromptsCreateFolder: async (aiPromptsCreateFolderRequest: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPromptsCreateFolderRequest' is not null or undefined
            assertParamExists('aiPromptsCreateFolder', 'aiPromptsCreateFolderRequest', aiPromptsCreateFolderRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiPromptsCreateFolderRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes one saved prompt from the caller\'s library. The ID may be sent in the body or as a query parameter, and it is required. An ID that does not exist, or that belongs to another user, is not reported: the call answers success without deleting anything. The deletion is permanent.
         * @summary Delete a saved prompt
         * @param {string} aiPromptsDeleteRequest The ID of the prompt to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete/
         */
        aiPromptsDelete: async (aiPromptsDeleteRequest: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPromptsDeleteRequest' is not null or undefined
            assertParamExists('aiPromptsDelete', 'aiPromptsDeleteRequest', aiPromptsDeleteRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiPromptsDeleteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a folder together with every prompt inside it, permanently. The ID is required and may be sent in the body or as a query parameter. Unlike deleting a prompt, this checks first: a folder that does not exist, and one that belongs to another user, both answer 404 - the two cases are deliberately indistinguishable, so a foreign folder cannot be probed. Move the prompts out with `PUT api/2.0/ai/prompts/move` first if they should survive.
         * @summary Delete folder
         * @param {string} aiPromptsDeleteFolderRequest The ID of the folder to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete-folder/
         */
        aiPromptsDeleteFolder: async (aiPromptsDeleteFolderRequest: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPromptsDeleteFolderRequest' is not null or undefined
            assertParamExists('aiPromptsDeleteFolder', 'aiPromptsDeleteFolderRequest', aiPromptsDeleteFolderRequest)

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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiPromptsDeleteFolderRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Builds a versioned bundle of every prompt and folder in the caller\'s library and returns it, with no parameters. The bundle is self-contained: it carries its own format version so an older export can still be read back, and it is the input `POST api/2.0/ai/prompts/import-bundle` expects. This is also the only way to read the whole library at once, since listing is folder-scoped. Nothing is changed by the call.
         * @summary Export the prompt library
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns one saved prompt by its ID. The ID is required and is read from the query. An ID that is unknown, or that belongs to another user, is not reported as 404: the answer is an empty body with status 200, so treat a missing payload as no such prompt. Prompt IDs come from `GET api/2.0/ai/prompts/list` or from the answer of the create operation.
         * @summary Get a saved prompt
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
         * Returns one folder of the caller\'s prompt library by its ID, without the prompts inside it. The ID is required and is read from the query. An unknown or foreign ID is not reported as 404: the answer is an empty body with status 200. This differs from the delete operation on the same ID, which does answer 404.
         * @summary Get a prompt folder
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
         * Writes a bundle produced by `GET api/2.0/ai/prompts/export` back into the caller\'s library. `mode` decides how: `replace` deletes the current prompts and folders before writing, and `merge` writes the bundle on top of what is already there. The folder references inside the bundle are validated before anything is written, so a corrupt bundle is rejected whole rather than applied halfway. `replace` is destructive and cannot be undone - export first if the current library matters.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Lists the caller\'s saved prompts, newest first. `folderId` scopes the answer to one folder, and omitting it - or sending it empty - lists the prompts that sit at the root rather than every prompt, because the client fetcher cannot tell an absent value from a null one. There is therefore no way to ask for the whole library in one call: walk the folders from `GET api/2.0/ai/prompts/list-folders`, or take everything at once with `GET api/2.0/ai/prompts/export`. The prompts of other users are never included.
         * @summary List saved prompts
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
         * Lists every folder of the caller\'s prompt library, newest first, with no parameters and no pagination. Folders are flat, so the answer is a single list rather than a tree. The prompts inside them are not included - read those with `GET api/2.0/ai/prompts/list` per folder. Another user\'s folders are never listed.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Moves a saved prompt into another folder, or to the root when `folderId` is omitted or null. The name is re-validated in the target folder, so the move fails when a prompt of that name already sits there - rename it first with `PUT api/2.0/ai/prompts/update`. Nothing about the prompt other than its folder changes. The answer carries the moved prompt.
         * @summary Move a prompt to a folder
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Renames a folder in the caller\'s prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Changes a saved prompt and returns the stored result. Only the fields present in `updates` are written, so a partial object leaves the rest of the prompt alone. The name and the folder reference are re-validated whenever either changes, which means an update can fail on a name another prompt in the same folder already uses. Use `PUT api/2.0/ai/prompts/move` to change only the folder.
         * @summary Update a saved prompt
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Saves a new prompt in the caller\'s own prompt library and returns it. The name has to be non-empty and unique inside its folder, and `folderId` has to name an existing folder - omit it to save the prompt at the root. Prompts are per-user: another user\'s library is never visible here, and no permission beyond having AI enabled is needed. The answer carries the stored prompt including the ID to use with the update, move and delete operations.
         * @summary Save a prompt
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
         * Creates a folder in the caller\'s prompt library and returns it. The name has to be non-empty and unique across that library. Folders do not nest: there is one flat level, so a folder cannot be created inside another. The answer carries the folder ID to use as `folderId` when saving or moving prompts.
         * @summary Create folder
         * @param {string} aiPromptsCreateFolderRequest The name of the folder to create, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create-folder/
         */
        async aiPromptsCreateFolder(aiPromptsCreateFolderRequest: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiFolderMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsCreateFolder(aiPromptsCreateFolderRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsCreateFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes one saved prompt from the caller\'s library. The ID may be sent in the body or as a query parameter, and it is required. An ID that does not exist, or that belongs to another user, is not reported: the call answers success without deleting anything. The deletion is permanent.
         * @summary Delete a saved prompt
         * @param {string} aiPromptsDeleteRequest The ID of the prompt to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete/
         */
        async aiPromptsDelete(aiPromptsDeleteRequest: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsDelete(aiPromptsDeleteRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a folder together with every prompt inside it, permanently. The ID is required and may be sent in the body or as a query parameter. Unlike deleting a prompt, this checks first: a folder that does not exist, and one that belongs to another user, both answer 404 - the two cases are deliberately indistinguishable, so a foreign folder cannot be probed. Move the prompts out with `PUT api/2.0/ai/prompts/move` first if they should survive.
         * @summary Delete folder
         * @param {string} aiPromptsDeleteFolderRequest The ID of the folder to delete, as a bare JSON string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete-folder/
         */
        async aiPromptsDeleteFolder(aiPromptsDeleteFolderRequest: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPromptsDeleteFolder(aiPromptsDeleteFolderRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PromptsApi.aiPromptsDeleteFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Builds a versioned bundle of every prompt and folder in the caller\'s library and returns it, with no parameters. The bundle is self-contained: it carries its own format version so an older export can still be read back, and it is the input `POST api/2.0/ai/prompts/import-bundle` expects. This is also the only way to read the whole library at once, since listing is folder-scoped. Nothing is changed by the call.
         * @summary Export the prompt library
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
         * Returns one saved prompt by its ID. The ID is required and is read from the query. An ID that is unknown, or that belongs to another user, is not reported as 404: the answer is an empty body with status 200, so treat a missing payload as no such prompt. Prompt IDs come from `GET api/2.0/ai/prompts/list` or from the answer of the create operation.
         * @summary Get a saved prompt
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
         * Returns one folder of the caller\'s prompt library by its ID, without the prompts inside it. The ID is required and is read from the query. An unknown or foreign ID is not reported as 404: the answer is an empty body with status 200. This differs from the delete operation on the same ID, which does answer 404.
         * @summary Get a prompt folder
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
         * Writes a bundle produced by `GET api/2.0/ai/prompts/export` back into the caller\'s library. `mode` decides how: `replace` deletes the current prompts and folders before writing, and `merge` writes the bundle on top of what is already there. The folder references inside the bundle are validated before anything is written, so a corrupt bundle is rejected whole rather than applied halfway. `replace` is destructive and cannot be undone - export first if the current library matters.
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
         * Lists the caller\'s saved prompts, newest first. `folderId` scopes the answer to one folder, and omitting it - or sending it empty - lists the prompts that sit at the root rather than every prompt, because the client fetcher cannot tell an absent value from a null one. There is therefore no way to ask for the whole library in one call: walk the folders from `GET api/2.0/ai/prompts/list-folders`, or take everything at once with `GET api/2.0/ai/prompts/export`. The prompts of other users are never included.
         * @summary List saved prompts
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
         * Lists every folder of the caller\'s prompt library, newest first, with no parameters and no pagination. Folders are flat, so the answer is a single list rather than a tree. The prompts inside them are not included - read those with `GET api/2.0/ai/prompts/list` per folder. Another user\'s folders are never listed.
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
         * Moves a saved prompt into another folder, or to the root when `folderId` is omitted or null. The name is re-validated in the target folder, so the move fails when a prompt of that name already sits there - rename it first with `PUT api/2.0/ai/prompts/update`. Nothing about the prompt other than its folder changes. The answer carries the moved prompt.
         * @summary Move a prompt to a folder
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
         * Renames a folder in the caller\'s prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected.
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
         * Changes a saved prompt and returns the stored result. Only the fields present in `updates` are written, so a partial object leaves the rest of the prompt alone. The name and the folder reference are re-validated whenever either changes, which means an update can fail on a name another prompt in the same folder already uses. Use `PUT api/2.0/ai/prompts/move` to change only the folder.
         * @summary Update a saved prompt
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
         * Saves a new prompt in the caller\'s own prompt library and returns it. The name has to be non-empty and unique inside its folder, and `folderId` has to name an existing folder - omit it to save the prompt at the root. Prompts are per-user: another user\'s library is never visible here, and no permission beyond having AI enabled is needed. The answer carries the stored prompt including the ID to use with the update, move and delete operations.
         * @summary Save a prompt
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
         * Creates a folder in the caller\'s prompt library and returns it. The name has to be non-empty and unique across that library. Folders do not nest: there is one flat level, so a folder cannot be created inside another. The answer carries the folder ID to use as `folderId` when saving or moving prompts.
         * @summary Create folder
         * @param {PromptsApiAiPromptsCreateFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsCreateFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create-folder/
         * @throws {RequiredError}
         */
        aiPromptsCreateFolder(requestParameters: PromptsApiAiPromptsCreateFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiFolderMutationResult> {
            return localVarFp.aiPromptsCreateFolder(requestParameters.aiPromptsCreateFolderRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes one saved prompt from the caller\'s library. The ID may be sent in the body or as a query parameter, and it is required. An ID that does not exist, or that belongs to another user, is not reported: the call answers success without deleting anything. The deletion is permanent.
         * @summary Delete a saved prompt
         * @param {PromptsApiAiPromptsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete/
         * @throws {RequiredError}
         */
        aiPromptsDelete(requestParameters: PromptsApiAiPromptsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiPromptsDelete(requestParameters.aiPromptsDeleteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a folder together with every prompt inside it, permanently. The ID is required and may be sent in the body or as a query parameter. Unlike deleting a prompt, this checks first: a folder that does not exist, and one that belongs to another user, both answer 404 - the two cases are deliberately indistinguishable, so a foreign folder cannot be probed. Move the prompts out with `PUT api/2.0/ai/prompts/move` first if they should survive.
         * @summary Delete folder
         * @param {PromptsApiAiPromptsDeleteFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsDeleteFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete-folder/
         * @throws {RequiredError}
         */
        aiPromptsDeleteFolder(requestParameters: PromptsApiAiPromptsDeleteFolderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiPromptsDeleteFolder(requestParameters.aiPromptsDeleteFolderRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Builds a versioned bundle of every prompt and folder in the caller\'s library and returns it, with no parameters. The bundle is self-contained: it carries its own format version so an older export can still be read back, and it is the input `POST api/2.0/ai/prompts/import-bundle` expects. This is also the only way to read the whole library at once, since listing is folder-scoped. Nothing is changed by the call.
         * @summary Export the prompt library
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPromptsExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-export/
         * @throws {RequiredError}
         */
        aiPromptsExport(options?: RawAxiosRequestConfig): AxiosPromise<AiPromptBundle> {
            return localVarFp.aiPromptsExport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one saved prompt by its ID. The ID is required and is read from the query. An ID that is unknown, or that belongs to another user, is not reported as 404: the answer is an empty body with status 200, so treat a missing payload as no such prompt. Prompt IDs come from `GET api/2.0/ai/prompts/list` or from the answer of the create operation.
         * @summary Get a saved prompt
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
         * Returns one folder of the caller\'s prompt library by its ID, without the prompts inside it. The ID is required and is read from the query. An unknown or foreign ID is not reported as 404: the answer is an empty body with status 200. This differs from the delete operation on the same ID, which does answer 404.
         * @summary Get a prompt folder
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
         * Writes a bundle produced by `GET api/2.0/ai/prompts/export` back into the caller\'s library. `mode` decides how: `replace` deletes the current prompts and folders before writing, and `merge` writes the bundle on top of what is already there. The folder references inside the bundle are validated before anything is written, so a corrupt bundle is rejected whole rather than applied halfway. `replace` is destructive and cannot be undone - export first if the current library matters.
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
         * Lists the caller\'s saved prompts, newest first. `folderId` scopes the answer to one folder, and omitting it - or sending it empty - lists the prompts that sit at the root rather than every prompt, because the client fetcher cannot tell an absent value from a null one. There is therefore no way to ask for the whole library in one call: walk the folders from `GET api/2.0/ai/prompts/list-folders`, or take everything at once with `GET api/2.0/ai/prompts/export`. The prompts of other users are never included.
         * @summary List saved prompts
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
         * Lists every folder of the caller\'s prompt library, newest first, with no parameters and no pagination. Folders are flat, so the answer is a single list rather than a tree. The prompts inside them are not included - read those with `GET api/2.0/ai/prompts/list` per folder. Another user\'s folders are never listed.
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
         * Moves a saved prompt into another folder, or to the root when `folderId` is omitted or null. The name is re-validated in the target folder, so the move fails when a prompt of that name already sits there - rename it first with `PUT api/2.0/ai/prompts/update`. Nothing about the prompt other than its folder changes. The answer carries the moved prompt.
         * @summary Move a prompt to a folder
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
         * Renames a folder in the caller\'s prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected.
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
         * Changes a saved prompt and returns the stored result. Only the fields present in `updates` are written, so a partial object leaves the rest of the prompt alone. The name and the folder reference are re-validated whenever either changes, which means an update can fail on a name another prompt in the same folder already uses. Use `PUT api/2.0/ai/prompts/move` to change only the folder.
         * @summary Update a saved prompt
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
     * The name of the folder to create, as a bare JSON string.
     * @type {string}
     * @memberof PromptsApiAiPromptsCreateFolder
     */
    readonly aiPromptsCreateFolderRequest: string
}

/**
 * Request parameters for aiPromptsDelete operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsDeleteRequest
 */
export interface PromptsApiAiPromptsDeleteRequest {
    /**
     * The ID of the prompt to delete, as a bare JSON string.
     * @type {string}
     * @memberof PromptsApiAiPromptsDelete
     */
    readonly aiPromptsDeleteRequest: string
}

/**
 * Request parameters for aiPromptsDeleteFolder operation in PromptsApi.
 * @export
 * @interface PromptsApiAiPromptsDeleteFolderRequest
 */
export interface PromptsApiAiPromptsDeleteFolderRequest {
    /**
     * The ID of the folder to delete, as a bare JSON string.
     * @type {string}
     * @memberof PromptsApiAiPromptsDeleteFolder
     */
    readonly aiPromptsDeleteFolderRequest: string
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
     * Saves a new prompt in the caller\'s own prompt library and returns it. The name has to be non-empty and unique inside its folder, and `folderId` has to name an existing folder - omit it to save the prompt at the root. Prompts are per-user: another user\'s library is never visible here, and no permission beyond having AI enabled is needed. The answer carries the stored prompt including the ID to use with the update, move and delete operations.
     * @summary Save a prompt
     * @param {AIPromptsApiAiPromptsCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsCreate(requestParameters: PromptsApiAiPromptsCreateRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsCreate(requestParameters.aiCreatePromptInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a folder in the caller\'s prompt library and returns it. The name has to be non-empty and unique across that library. Folders do not nest: there is one flat level, so a folder cannot be created inside another. The answer carries the folder ID to use as `folderId` when saving or moving prompts.
     * @summary Create folder
     * @param {AIPromptsApiAiPromptsCreateFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsCreateFolder(requestParameters: PromptsApiAiPromptsCreateFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsCreateFolder(requestParameters.aiPromptsCreateFolderRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes one saved prompt from the caller\'s library. The ID may be sent in the body or as a query parameter, and it is required. An ID that does not exist, or that belongs to another user, is not reported: the call answers success without deleting anything. The deletion is permanent.
     * @summary Delete a saved prompt
     * @param {AIPromptsApiAiPromptsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsDelete(requestParameters: PromptsApiAiPromptsDeleteRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsDelete(requestParameters.aiPromptsDeleteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a folder together with every prompt inside it, permanently. The ID is required and may be sent in the body or as a query parameter. Unlike deleting a prompt, this checks first: a folder that does not exist, and one that belongs to another user, both answer 404 - the two cases are deliberately indistinguishable, so a foreign folder cannot be probed. Move the prompts out with `PUT api/2.0/ai/prompts/move` first if they should survive.
     * @summary Delete folder
     * @param {AIPromptsApiAiPromptsDeleteFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsDeleteFolder(requestParameters: PromptsApiAiPromptsDeleteFolderRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsDeleteFolder(requestParameters.aiPromptsDeleteFolderRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Builds a versioned bundle of every prompt and folder in the caller\'s library and returns it, with no parameters. The bundle is self-contained: it carries its own format version so an older export can still be read back, and it is the input `POST api/2.0/ai/prompts/import-bundle` expects. This is also the only way to read the whole library at once, since listing is folder-scoped. Nothing is changed by the call.
     * @summary Export the prompt library
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsExport(options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one saved prompt by its ID. The ID is required and is read from the query. An ID that is unknown, or that belongs to another user, is not reported as 404: the answer is an empty body with status 200, so treat a missing payload as no such prompt. Prompt IDs come from `GET api/2.0/ai/prompts/list` or from the answer of the create operation.
     * @summary Get a saved prompt
     * @param {AIPromptsApiAiPromptsGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsGetById(requestParameters: PromptsApiAiPromptsGetByIdRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsGetById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one folder of the caller\'s prompt library by its ID, without the prompts inside it. The ID is required and is read from the query. An unknown or foreign ID is not reported as 404: the answer is an empty body with status 200. This differs from the delete operation on the same ID, which does answer 404.
     * @summary Get a prompt folder
     * @param {AIPromptsApiAiPromptsGetFolderByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsGetFolderById(requestParameters: PromptsApiAiPromptsGetFolderByIdRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsGetFolderById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Writes a bundle produced by `GET api/2.0/ai/prompts/export` back into the caller\'s library. `mode` decides how: `replace` deletes the current prompts and folders before writing, and `merge` writes the bundle on top of what is already there. The folder references inside the bundle are validated before anything is written, so a corrupt bundle is rejected whole rather than applied halfway. `replace` is destructive and cannot be undone - export first if the current library matters.
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
     * Lists the caller\'s saved prompts, newest first. `folderId` scopes the answer to one folder, and omitting it - or sending it empty - lists the prompts that sit at the root rather than every prompt, because the client fetcher cannot tell an absent value from a null one. There is therefore no way to ask for the whole library in one call: walk the folders from `GET api/2.0/ai/prompts/list-folders`, or take everything at once with `GET api/2.0/ai/prompts/export`. The prompts of other users are never included.
     * @summary List saved prompts
     * @param {AIPromptsApiAiPromptsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsList(requestParameters: PromptsApiAiPromptsListRequest = {}, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsList(requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists every folder of the caller\'s prompt library, newest first, with no parameters and no pagination. Folders are flat, so the answer is a single list rather than a tree. The prompts inside them are not included - read those with `GET api/2.0/ai/prompts/list` per folder. Another user\'s folders are never listed.
     * @summary List folders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsListFolders(options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsListFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves a saved prompt into another folder, or to the root when `folderId` is omitted or null. The name is re-validated in the target folder, so the move fails when a prompt of that name already sits there - rename it first with `PUT api/2.0/ai/prompts/update`. Nothing about the prompt other than its folder changes. The answer carries the moved prompt.
     * @summary Move a prompt to a folder
     * @param {AIPromptsApiAiPromptsMoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsMove(requestParameters: PromptsApiAiPromptsMoveRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsMove(requestParameters.aiPromptsMoveRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Renames a folder in the caller\'s prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected.
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
     * Changes a saved prompt and returns the stored result. Only the fields present in `updates` are written, so a partial object leaves the rest of the prompt alone. The name and the folder reference are re-validated whenever either changes, which means an update can fail on a name another prompt in the same folder already uses. Use `PUT api/2.0/ai/prompts/move` to change only the folder.
     * @summary Update a saved prompt
     * @param {AIPromptsApiAiPromptsUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApi
     */
    public aiPromptsUpdate(requestParameters: PromptsApiAiPromptsUpdateRequest, options?: RawAxiosRequestConfig) {
        return PromptsApiFp(this.configuration).aiPromptsUpdate(requestParameters.aiPromptsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

