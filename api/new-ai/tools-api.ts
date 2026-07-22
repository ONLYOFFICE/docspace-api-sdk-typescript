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
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
// @ts-ignore
import type { NewAiTMCPItem } from '../../models';
// @ts-ignore
import type { NewAiToolsAddCustomServerRequest } from '../../models';
// @ts-ignore
import type { NewAiToolsBulkResult } from '../../models';
// @ts-ignore
import type { NewAiToolsMutationResult } from '../../models';
// @ts-ignore
import type { NewAiToolsRemoveCustomServerRequest } from '../../models';
// @ts-ignore
import type { NewAiToolsReplaceAllCustomServersRequest } from '../../models';
// @ts-ignore
import type { NewAiToolsSetAllowAlwaysRequest } from '../../models';
// @ts-ignore
import type { NewAiToolsSetDisabledRequest } from '../../models';
// @ts-ignore
import type { NewAiToolsUpdateCustomServerRequest } from '../../models';
/**
 * ToolsApi - axios parameter creator
 * @export
 */
export const ToolsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Add custom server
         * @param {NewAiToolsAddCustomServerRequest} newAiToolsAddCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-add-custom-server/
         */
        newAiToolsAddCustomServer: async (newAiToolsAddCustomServerRequest: NewAiToolsAddCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiToolsAddCustomServerRequest' is not null or undefined
            assertParamExists('newAiToolsAddCustomServer', 'newAiToolsAddCustomServerRequest', newAiToolsAddCustomServerRequest)

            const localVarPath = `/api/2.0/new-ai/tools/add-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiToolsAddCustomServerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get allow always
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-allow-always/
         */
        newAiToolsGetAllowAlways: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiToolsGetAllowAlways', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/tools/get-allow-always`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary Get custom server
         * @param {string} name 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-custom-server/
         */
        newAiToolsGetCustomServer: async (name: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('newAiToolsGetCustomServer', 'name', name)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiToolsGetCustomServer', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/tools/get-custom-server`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary Get disabled
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-disabled/
         */
        newAiToolsGetDisabled: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiToolsGetDisabled', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/tools/get-disabled`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary Is allow always
         * @param {string} serverType 
         * @param {string} toolName 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-allow-always/
         */
        newAiToolsIsAllowAlways: async (serverType: string, toolName: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverType' is not null or undefined
            assertParamExists('newAiToolsIsAllowAlways', 'serverType', serverType)
            // verify required parameter 'toolName' is not null or undefined
            assertParamExists('newAiToolsIsAllowAlways', 'toolName', toolName)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiToolsIsAllowAlways', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/tools/is-allow-always`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (serverType !== undefined) {
                localVarQueryParameter['serverType'] = serverType;
            }

            if (toolName !== undefined) {
                localVarQueryParameter['toolName'] = toolName;
            }

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary Is tool disabled
         * @param {string} serverType 
         * @param {string} toolName 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-tool-disabled/
         */
        newAiToolsIsToolDisabled: async (serverType: string, toolName: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverType' is not null or undefined
            assertParamExists('newAiToolsIsToolDisabled', 'serverType', serverType)
            // verify required parameter 'toolName' is not null or undefined
            assertParamExists('newAiToolsIsToolDisabled', 'toolName', toolName)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiToolsIsToolDisabled', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/tools/is-tool-disabled`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (serverType !== undefined) {
                localVarQueryParameter['serverType'] = serverType;
            }

            if (toolName !== undefined) {
                localVarQueryParameter['toolName'] = toolName;
            }

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary List custom servers
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-custom-servers/
         */
        newAiToolsListCustomServers: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiToolsListCustomServers', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/tools/list-custom-servers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary List system tools
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-system-tools/
         */
        newAiToolsListSystemTools: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiToolsListSystemTools', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/tools/list-system-tools`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * @summary Remove custom server
         * @param {NewAiToolsRemoveCustomServerRequest} newAiToolsRemoveCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-remove-custom-server/
         */
        newAiToolsRemoveCustomServer: async (newAiToolsRemoveCustomServerRequest: NewAiToolsRemoveCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiToolsRemoveCustomServerRequest' is not null or undefined
            assertParamExists('newAiToolsRemoveCustomServer', 'newAiToolsRemoveCustomServerRequest', newAiToolsRemoveCustomServerRequest)

            const localVarPath = `/api/2.0/new-ai/tools/remove-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiToolsRemoveCustomServerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Replace all custom servers
         * @param {NewAiToolsReplaceAllCustomServersRequest} newAiToolsReplaceAllCustomServersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-replace-all-custom-servers/
         */
        newAiToolsReplaceAllCustomServers: async (newAiToolsReplaceAllCustomServersRequest: NewAiToolsReplaceAllCustomServersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiToolsReplaceAllCustomServersRequest' is not null or undefined
            assertParamExists('newAiToolsReplaceAllCustomServers', 'newAiToolsReplaceAllCustomServersRequest', newAiToolsReplaceAllCustomServersRequest)

            const localVarPath = `/api/2.0/new-ai/tools/replace-all-custom-servers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiToolsReplaceAllCustomServersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Set allow always
         * @param {NewAiToolsSetAllowAlwaysRequest} newAiToolsSetAllowAlwaysRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-allow-always/
         */
        newAiToolsSetAllowAlways: async (newAiToolsSetAllowAlwaysRequest: NewAiToolsSetAllowAlwaysRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiToolsSetAllowAlwaysRequest' is not null or undefined
            assertParamExists('newAiToolsSetAllowAlways', 'newAiToolsSetAllowAlwaysRequest', newAiToolsSetAllowAlwaysRequest)

            const localVarPath = `/api/2.0/new-ai/tools/set-allow-always`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiToolsSetAllowAlwaysRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Set disabled
         * @param {NewAiToolsSetDisabledRequest} newAiToolsSetDisabledRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-disabled/
         */
        newAiToolsSetDisabled: async (newAiToolsSetDisabledRequest: NewAiToolsSetDisabledRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiToolsSetDisabledRequest' is not null or undefined
            assertParamExists('newAiToolsSetDisabled', 'newAiToolsSetDisabledRequest', newAiToolsSetDisabledRequest)

            const localVarPath = `/api/2.0/new-ai/tools/set-disabled`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiToolsSetDisabledRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update custom server
         * @param {NewAiToolsUpdateCustomServerRequest} newAiToolsUpdateCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-update-custom-server/
         */
        newAiToolsUpdateCustomServer: async (newAiToolsUpdateCustomServerRequest: NewAiToolsUpdateCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiToolsUpdateCustomServerRequest' is not null or undefined
            assertParamExists('newAiToolsUpdateCustomServer', 'newAiToolsUpdateCustomServerRequest', newAiToolsUpdateCustomServerRequest)

            const localVarPath = `/api/2.0/new-ai/tools/update-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiToolsUpdateCustomServerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ToolsApi - functional programming interface
 * @export
 */
export const ToolsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ToolsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add custom server
         * @param {NewAiToolsAddCustomServerRequest} newAiToolsAddCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-add-custom-server/
         */
        async newAiToolsAddCustomServer(newAiToolsAddCustomServerRequest: NewAiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiToolsMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsAddCustomServer(newAiToolsAddCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsAddCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get allow always
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-allow-always/
         */
        async newAiToolsGetAllowAlways(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsGetAllowAlways(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsGetAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get custom server
         * @param {string} name 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-custom-server/
         */
        async newAiToolsGetCustomServer(name: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsGetCustomServer(name, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsGetCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get disabled
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-disabled/
         */
        async newAiToolsGetDisabled(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<string>; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsGetDisabled(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsGetDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Is allow always
         * @param {string} serverType 
         * @param {string} toolName 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-allow-always/
         */
        async newAiToolsIsAllowAlways(serverType: string, toolName: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsIsAllowAlways(serverType, toolName, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsIsAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Is tool disabled
         * @param {string} serverType 
         * @param {string} toolName 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-tool-disabled/
         */
        async newAiToolsIsToolDisabled(serverType: string, toolName: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsIsToolDisabled(serverType, toolName, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsIsToolDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List custom servers
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-custom-servers/
         */
        async newAiToolsListCustomServers(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: object; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsListCustomServers(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsListCustomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List system tools
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-system-tools/
         */
        async newAiToolsListSystemTools(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<NewAiTMCPItem>; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsListSystemTools(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsListSystemTools']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Remove custom server
         * @param {NewAiToolsRemoveCustomServerRequest} newAiToolsRemoveCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-remove-custom-server/
         */
        async newAiToolsRemoveCustomServer(newAiToolsRemoveCustomServerRequest: NewAiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsRemoveCustomServer(newAiToolsRemoveCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsRemoveCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Replace all custom servers
         * @param {NewAiToolsReplaceAllCustomServersRequest} newAiToolsReplaceAllCustomServersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-replace-all-custom-servers/
         */
        async newAiToolsReplaceAllCustomServers(newAiToolsReplaceAllCustomServersRequest: NewAiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiToolsBulkResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsReplaceAllCustomServers(newAiToolsReplaceAllCustomServersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsReplaceAllCustomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set allow always
         * @param {NewAiToolsSetAllowAlwaysRequest} newAiToolsSetAllowAlwaysRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-allow-always/
         */
        async newAiToolsSetAllowAlways(newAiToolsSetAllowAlwaysRequest: NewAiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsSetAllowAlways(newAiToolsSetAllowAlwaysRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsSetAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set disabled
         * @param {NewAiToolsSetDisabledRequest} newAiToolsSetDisabledRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-disabled/
         */
        async newAiToolsSetDisabled(newAiToolsSetDisabledRequest: NewAiToolsSetDisabledRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsSetDisabled(newAiToolsSetDisabledRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsSetDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update custom server
         * @param {NewAiToolsUpdateCustomServerRequest} newAiToolsUpdateCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-update-custom-server/
         */
        async newAiToolsUpdateCustomServer(newAiToolsUpdateCustomServerRequest: NewAiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiToolsMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiToolsUpdateCustomServer(newAiToolsUpdateCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.newAiToolsUpdateCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ToolsApi - factory interface
 * @export
 */
export const ToolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ToolsApiFp(configuration)
    return {
        /**
         * 
         * @summary Add custom server
         * @param {ToolsApiNewAiToolsAddCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-add-custom-server/
         * @throws {RequiredError}
         */
        newAiToolsAddCustomServer(requestParameters: ToolsApiNewAiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiToolsMutationResult> {
            return localVarFp.newAiToolsAddCustomServer(requestParameters.newAiToolsAddCustomServerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get allow always
         * @param {ToolsApiNewAiToolsGetAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-allow-always/
         * @throws {RequiredError}
         */
        newAiToolsGetAllowAlways(requestParameters: ToolsApiNewAiToolsGetAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<string>> {
            return localVarFp.newAiToolsGetAllowAlways(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get custom server
         * @param {ToolsApiNewAiToolsGetCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-custom-server/
         * @throws {RequiredError}
         */
        newAiToolsGetCustomServer(requestParameters: ToolsApiNewAiToolsGetCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.newAiToolsGetCustomServer(requestParameters.name, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get disabled
         * @param {ToolsApiNewAiToolsGetDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-disabled/
         * @throws {RequiredError}
         */
        newAiToolsGetDisabled(requestParameters: ToolsApiNewAiToolsGetDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: Array<string>; }> {
            return localVarFp.newAiToolsGetDisabled(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Is allow always
         * @param {ToolsApiNewAiToolsIsAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-allow-always/
         * @throws {RequiredError}
         */
        newAiToolsIsAllowAlways(requestParameters: ToolsApiNewAiToolsIsAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.newAiToolsIsAllowAlways(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Is tool disabled
         * @param {ToolsApiNewAiToolsIsToolDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-tool-disabled/
         * @throws {RequiredError}
         */
        newAiToolsIsToolDisabled(requestParameters: ToolsApiNewAiToolsIsToolDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.newAiToolsIsToolDisabled(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List custom servers
         * @param {ToolsApiNewAiToolsListCustomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-custom-servers/
         * @throws {RequiredError}
         */
        newAiToolsListCustomServers(requestParameters: ToolsApiNewAiToolsListCustomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: object; }> {
            return localVarFp.newAiToolsListCustomServers(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List system tools
         * @param {ToolsApiNewAiToolsListSystemToolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-system-tools/
         * @throws {RequiredError}
         */
        newAiToolsListSystemTools(requestParameters: ToolsApiNewAiToolsListSystemToolsRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: Array<NewAiTMCPItem>; }> {
            return localVarFp.newAiToolsListSystemTools(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove custom server
         * @param {ToolsApiNewAiToolsRemoveCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-remove-custom-server/
         * @throws {RequiredError}
         */
        newAiToolsRemoveCustomServer(requestParameters: ToolsApiNewAiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiToolsRemoveCustomServer(requestParameters.newAiToolsRemoveCustomServerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Replace all custom servers
         * @param {ToolsApiNewAiToolsReplaceAllCustomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-replace-all-custom-servers/
         * @throws {RequiredError}
         */
        newAiToolsReplaceAllCustomServers(requestParameters: ToolsApiNewAiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiToolsBulkResult> {
            return localVarFp.newAiToolsReplaceAllCustomServers(requestParameters.newAiToolsReplaceAllCustomServersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set allow always
         * @param {ToolsApiNewAiToolsSetAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-allow-always/
         * @throws {RequiredError}
         */
        newAiToolsSetAllowAlways(requestParameters: ToolsApiNewAiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiToolsSetAllowAlways(requestParameters.newAiToolsSetAllowAlwaysRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set disabled
         * @param {ToolsApiNewAiToolsSetDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-disabled/
         * @throws {RequiredError}
         */
        newAiToolsSetDisabled(requestParameters: ToolsApiNewAiToolsSetDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiToolsSetDisabled(requestParameters.newAiToolsSetDisabledRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update custom server
         * @param {ToolsApiNewAiToolsUpdateCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-update-custom-server/
         * @throws {RequiredError}
         */
        newAiToolsUpdateCustomServer(requestParameters: ToolsApiNewAiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiToolsMutationResult> {
            return localVarFp.newAiToolsUpdateCustomServer(requestParameters.newAiToolsUpdateCustomServerRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiToolsAddCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsAddCustomServerRequest
 */
export interface ToolsApiNewAiToolsAddCustomServerRequest {
    /**
     * 
     * @type {NewAiToolsAddCustomServerRequest}
     * @memberof ToolsApiNewAiToolsAddCustomServer
     */
    readonly newAiToolsAddCustomServerRequest: NewAiToolsAddCustomServerRequest
}

/**
 * Request parameters for newAiToolsGetAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsGetAllowAlwaysRequest
 */
export interface ToolsApiNewAiToolsGetAllowAlwaysRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsGetAllowAlways
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiToolsGetCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsGetCustomServerRequest
 */
export interface ToolsApiNewAiToolsGetCustomServerRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsGetCustomServer
     */
    readonly name: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsGetCustomServer
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiToolsGetDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsGetDisabledRequest
 */
export interface ToolsApiNewAiToolsGetDisabledRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsGetDisabled
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiToolsIsAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsIsAllowAlwaysRequest
 */
export interface ToolsApiNewAiToolsIsAllowAlwaysRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsIsAllowAlways
     */
    readonly serverType: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsIsAllowAlways
     */
    readonly toolName: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsIsAllowAlways
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiToolsIsToolDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsIsToolDisabledRequest
 */
export interface ToolsApiNewAiToolsIsToolDisabledRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsIsToolDisabled
     */
    readonly serverType: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsIsToolDisabled
     */
    readonly toolName: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsIsToolDisabled
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiToolsListCustomServers operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsListCustomServersRequest
 */
export interface ToolsApiNewAiToolsListCustomServersRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsListCustomServers
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiToolsListSystemTools operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsListSystemToolsRequest
 */
export interface ToolsApiNewAiToolsListSystemToolsRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiNewAiToolsListSystemTools
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiToolsRemoveCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsRemoveCustomServerRequest
 */
export interface ToolsApiNewAiToolsRemoveCustomServerRequest {
    /**
     * 
     * @type {NewAiToolsRemoveCustomServerRequest}
     * @memberof ToolsApiNewAiToolsRemoveCustomServer
     */
    readonly newAiToolsRemoveCustomServerRequest: NewAiToolsRemoveCustomServerRequest
}

/**
 * Request parameters for newAiToolsReplaceAllCustomServers operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsReplaceAllCustomServersRequest
 */
export interface ToolsApiNewAiToolsReplaceAllCustomServersRequest {
    /**
     * 
     * @type {NewAiToolsReplaceAllCustomServersRequest}
     * @memberof ToolsApiNewAiToolsReplaceAllCustomServers
     */
    readonly newAiToolsReplaceAllCustomServersRequest: NewAiToolsReplaceAllCustomServersRequest
}

/**
 * Request parameters for newAiToolsSetAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsSetAllowAlwaysRequest
 */
export interface ToolsApiNewAiToolsSetAllowAlwaysRequest {
    /**
     * 
     * @type {NewAiToolsSetAllowAlwaysRequest}
     * @memberof ToolsApiNewAiToolsSetAllowAlways
     */
    readonly newAiToolsSetAllowAlwaysRequest: NewAiToolsSetAllowAlwaysRequest
}

/**
 * Request parameters for newAiToolsSetDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsSetDisabledRequest
 */
export interface ToolsApiNewAiToolsSetDisabledRequest {
    /**
     * 
     * @type {NewAiToolsSetDisabledRequest}
     * @memberof ToolsApiNewAiToolsSetDisabled
     */
    readonly newAiToolsSetDisabledRequest: NewAiToolsSetDisabledRequest
}

/**
 * Request parameters for newAiToolsUpdateCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiNewAiToolsUpdateCustomServerRequest
 */
export interface ToolsApiNewAiToolsUpdateCustomServerRequest {
    /**
     * 
     * @type {NewAiToolsUpdateCustomServerRequest}
     * @memberof ToolsApiNewAiToolsUpdateCustomServer
     */
    readonly newAiToolsUpdateCustomServerRequest: NewAiToolsUpdateCustomServerRequest
}

/**
 * ToolsApi - object-oriented interface
 * @export
 * @class ToolsApi
 * @extends {BaseAPI}
 */
export class ToolsApi extends BaseAPI {
    /**
     * 
     * @summary Add custom server
     * @param {NewAIToolsApiNewAiToolsAddCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsAddCustomServer(requestParameters: ToolsApiNewAiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsAddCustomServer(requestParameters.newAiToolsAddCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get allow always
     * @param {NewAIToolsApiNewAiToolsGetAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsGetAllowAlways(requestParameters: ToolsApiNewAiToolsGetAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsGetAllowAlways(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get custom server
     * @param {NewAIToolsApiNewAiToolsGetCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsGetCustomServer(requestParameters: ToolsApiNewAiToolsGetCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsGetCustomServer(requestParameters.name, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get disabled
     * @param {NewAIToolsApiNewAiToolsGetDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsGetDisabled(requestParameters: ToolsApiNewAiToolsGetDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsGetDisabled(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Is allow always
     * @param {NewAIToolsApiNewAiToolsIsAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsIsAllowAlways(requestParameters: ToolsApiNewAiToolsIsAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsIsAllowAlways(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Is tool disabled
     * @param {NewAIToolsApiNewAiToolsIsToolDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsIsToolDisabled(requestParameters: ToolsApiNewAiToolsIsToolDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsIsToolDisabled(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List custom servers
     * @param {NewAIToolsApiNewAiToolsListCustomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsListCustomServers(requestParameters: ToolsApiNewAiToolsListCustomServersRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsListCustomServers(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List system tools
     * @param {NewAIToolsApiNewAiToolsListSystemToolsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsListSystemTools(requestParameters: ToolsApiNewAiToolsListSystemToolsRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsListSystemTools(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove custom server
     * @param {NewAIToolsApiNewAiToolsRemoveCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsRemoveCustomServer(requestParameters: ToolsApiNewAiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsRemoveCustomServer(requestParameters.newAiToolsRemoveCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Replace all custom servers
     * @param {NewAIToolsApiNewAiToolsReplaceAllCustomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsReplaceAllCustomServers(requestParameters: ToolsApiNewAiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsReplaceAllCustomServers(requestParameters.newAiToolsReplaceAllCustomServersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set allow always
     * @param {NewAIToolsApiNewAiToolsSetAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsSetAllowAlways(requestParameters: ToolsApiNewAiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsSetAllowAlways(requestParameters.newAiToolsSetAllowAlwaysRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set disabled
     * @param {NewAIToolsApiNewAiToolsSetDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsSetDisabled(requestParameters: ToolsApiNewAiToolsSetDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsSetDisabled(requestParameters.newAiToolsSetDisabledRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update custom server
     * @param {NewAIToolsApiNewAiToolsUpdateCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public newAiToolsUpdateCustomServer(requestParameters: ToolsApiNewAiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).newAiToolsUpdateCustomServer(requestParameters.newAiToolsUpdateCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

