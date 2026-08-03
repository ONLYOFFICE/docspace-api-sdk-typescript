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
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
// @ts-ignore
import type { AiTMCPItem } from '../../models';
// @ts-ignore
import type { AiToolsAddCustomServerRequest } from '../../models';
// @ts-ignore
import type { AiToolsBulkResult } from '../../models';
// @ts-ignore
import type { AiToolsMutationResult } from '../../models';
// @ts-ignore
import type { AiToolsRemoveCustomServerRequest } from '../../models';
// @ts-ignore
import type { AiToolsReplaceAllCustomServersRequest } from '../../models';
// @ts-ignore
import type { AiToolsSetAllowAlwaysRequest } from '../../models';
// @ts-ignore
import type { AiToolsSetDisabledRequest } from '../../models';
// @ts-ignore
import type { AiToolsUpdateCustomServerRequest } from '../../models';
/**
 * ToolsApi - axios parameter creator
 * @export
 */
export const ToolsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Add custom server
         * @param {AiToolsAddCustomServerRequest} aiToolsAddCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-add-custom-server/
         */
        aiToolsAddCustomServer: async (aiToolsAddCustomServerRequest: AiToolsAddCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsAddCustomServerRequest' is not null or undefined
            assertParamExists('aiToolsAddCustomServer', 'aiToolsAddCustomServerRequest', aiToolsAddCustomServerRequest)

            const localVarPath = `/api/2.0/ai/tools/add-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsAddCustomServerRequest, localVarRequestOptions, configuration)

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
         * REST API Reference for aiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-allow-always/
         */
        aiToolsGetAllowAlways: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiToolsGetAllowAlways', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/tools/get-allow-always`;
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
         * REST API Reference for aiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-custom-server/
         */
        aiToolsGetCustomServer: async (name: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('aiToolsGetCustomServer', 'name', name)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiToolsGetCustomServer', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/tools/get-custom-server`;
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
         * REST API Reference for aiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-disabled/
         */
        aiToolsGetDisabled: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiToolsGetDisabled', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/tools/get-disabled`;
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
         * REST API Reference for aiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-allow-always/
         */
        aiToolsIsAllowAlways: async (serverType: string, toolName: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverType' is not null or undefined
            assertParamExists('aiToolsIsAllowAlways', 'serverType', serverType)
            // verify required parameter 'toolName' is not null or undefined
            assertParamExists('aiToolsIsAllowAlways', 'toolName', toolName)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiToolsIsAllowAlways', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/tools/is-allow-always`;
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
         * REST API Reference for aiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-tool-disabled/
         */
        aiToolsIsToolDisabled: async (serverType: string, toolName: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverType' is not null or undefined
            assertParamExists('aiToolsIsToolDisabled', 'serverType', serverType)
            // verify required parameter 'toolName' is not null or undefined
            assertParamExists('aiToolsIsToolDisabled', 'toolName', toolName)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiToolsIsToolDisabled', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/tools/is-tool-disabled`;
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
         * REST API Reference for aiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-custom-servers/
         */
        aiToolsListCustomServers: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiToolsListCustomServers', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/tools/list-custom-servers`;
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
         * REST API Reference for aiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-system-tools/
         */
        aiToolsListSystemTools: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiToolsListSystemTools', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/tools/list-system-tools`;
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
         * @param {AiToolsRemoveCustomServerRequest} aiToolsRemoveCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-remove-custom-server/
         */
        aiToolsRemoveCustomServer: async (aiToolsRemoveCustomServerRequest: AiToolsRemoveCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsRemoveCustomServerRequest' is not null or undefined
            assertParamExists('aiToolsRemoveCustomServer', 'aiToolsRemoveCustomServerRequest', aiToolsRemoveCustomServerRequest)

            const localVarPath = `/api/2.0/ai/tools/remove-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsRemoveCustomServerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Replace all custom servers
         * @param {AiToolsReplaceAllCustomServersRequest} aiToolsReplaceAllCustomServersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-replace-all-custom-servers/
         */
        aiToolsReplaceAllCustomServers: async (aiToolsReplaceAllCustomServersRequest: AiToolsReplaceAllCustomServersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsReplaceAllCustomServersRequest' is not null or undefined
            assertParamExists('aiToolsReplaceAllCustomServers', 'aiToolsReplaceAllCustomServersRequest', aiToolsReplaceAllCustomServersRequest)

            const localVarPath = `/api/2.0/ai/tools/replace-all-custom-servers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsReplaceAllCustomServersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Set allow always
         * @param {AiToolsSetAllowAlwaysRequest} aiToolsSetAllowAlwaysRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-allow-always/
         */
        aiToolsSetAllowAlways: async (aiToolsSetAllowAlwaysRequest: AiToolsSetAllowAlwaysRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsSetAllowAlwaysRequest' is not null or undefined
            assertParamExists('aiToolsSetAllowAlways', 'aiToolsSetAllowAlwaysRequest', aiToolsSetAllowAlwaysRequest)

            const localVarPath = `/api/2.0/ai/tools/set-allow-always`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsSetAllowAlwaysRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Set disabled
         * @param {AiToolsSetDisabledRequest} aiToolsSetDisabledRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-disabled/
         */
        aiToolsSetDisabled: async (aiToolsSetDisabledRequest: AiToolsSetDisabledRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsSetDisabledRequest' is not null or undefined
            assertParamExists('aiToolsSetDisabled', 'aiToolsSetDisabledRequest', aiToolsSetDisabledRequest)

            const localVarPath = `/api/2.0/ai/tools/set-disabled`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsSetDisabledRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update custom server
         * @param {AiToolsUpdateCustomServerRequest} aiToolsUpdateCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-update-custom-server/
         */
        aiToolsUpdateCustomServer: async (aiToolsUpdateCustomServerRequest: AiToolsUpdateCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsUpdateCustomServerRequest' is not null or undefined
            assertParamExists('aiToolsUpdateCustomServer', 'aiToolsUpdateCustomServerRequest', aiToolsUpdateCustomServerRequest)

            const localVarPath = `/api/2.0/ai/tools/update-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsUpdateCustomServerRequest, localVarRequestOptions, configuration)

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
         * @param {AiToolsAddCustomServerRequest} aiToolsAddCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-add-custom-server/
         */
        async aiToolsAddCustomServer(aiToolsAddCustomServerRequest: AiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiToolsMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsAddCustomServer(aiToolsAddCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsAddCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get allow always
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-allow-always/
         */
        async aiToolsGetAllowAlways(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsGetAllowAlways(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsGetAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get custom server
         * @param {string} name 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-custom-server/
         */
        async aiToolsGetCustomServer(name: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsGetCustomServer(name, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsGetCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get disabled
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-disabled/
         */
        async aiToolsGetDisabled(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<string>; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsGetDisabled(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsGetDisabled']?.[localVarOperationServerIndex]?.url;
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
         * REST API Reference for aiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-allow-always/
         */
        async aiToolsIsAllowAlways(serverType: string, toolName: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsIsAllowAlways(serverType, toolName, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsIsAllowAlways']?.[localVarOperationServerIndex]?.url;
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
         * REST API Reference for aiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-tool-disabled/
         */
        async aiToolsIsToolDisabled(serverType: string, toolName: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsIsToolDisabled(serverType, toolName, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsIsToolDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List custom servers
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-custom-servers/
         */
        async aiToolsListCustomServers(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: object; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsListCustomServers(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsListCustomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List system tools
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-system-tools/
         */
        async aiToolsListSystemTools(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<AiTMCPItem>; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsListSystemTools(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsListSystemTools']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Remove custom server
         * @param {AiToolsRemoveCustomServerRequest} aiToolsRemoveCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-remove-custom-server/
         */
        async aiToolsRemoveCustomServer(aiToolsRemoveCustomServerRequest: AiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsRemoveCustomServer(aiToolsRemoveCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsRemoveCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Replace all custom servers
         * @param {AiToolsReplaceAllCustomServersRequest} aiToolsReplaceAllCustomServersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-replace-all-custom-servers/
         */
        async aiToolsReplaceAllCustomServers(aiToolsReplaceAllCustomServersRequest: AiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiToolsBulkResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsReplaceAllCustomServers(aiToolsReplaceAllCustomServersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsReplaceAllCustomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set allow always
         * @param {AiToolsSetAllowAlwaysRequest} aiToolsSetAllowAlwaysRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-allow-always/
         */
        async aiToolsSetAllowAlways(aiToolsSetAllowAlwaysRequest: AiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsSetAllowAlways(aiToolsSetAllowAlwaysRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsSetAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Set disabled
         * @param {AiToolsSetDisabledRequest} aiToolsSetDisabledRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-disabled/
         */
        async aiToolsSetDisabled(aiToolsSetDisabledRequest: AiToolsSetDisabledRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsSetDisabled(aiToolsSetDisabledRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsSetDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update custom server
         * @param {AiToolsUpdateCustomServerRequest} aiToolsUpdateCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-update-custom-server/
         */
        async aiToolsUpdateCustomServer(aiToolsUpdateCustomServerRequest: AiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiToolsMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsUpdateCustomServer(aiToolsUpdateCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsUpdateCustomServer']?.[localVarOperationServerIndex]?.url;
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
         * @param {ToolsApiAiToolsAddCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-add-custom-server/
         * @throws {RequiredError}
         */
        aiToolsAddCustomServer(requestParameters: ToolsApiAiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiToolsMutationResult> {
            return localVarFp.aiToolsAddCustomServer(requestParameters.aiToolsAddCustomServerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get allow always
         * @param {ToolsApiAiToolsGetAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-allow-always/
         * @throws {RequiredError}
         */
        aiToolsGetAllowAlways(requestParameters: ToolsApiAiToolsGetAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<string>> {
            return localVarFp.aiToolsGetAllowAlways(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get custom server
         * @param {ToolsApiAiToolsGetCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-custom-server/
         * @throws {RequiredError}
         */
        aiToolsGetCustomServer(requestParameters: ToolsApiAiToolsGetCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.aiToolsGetCustomServer(requestParameters.name, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get disabled
         * @param {ToolsApiAiToolsGetDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-disabled/
         * @throws {RequiredError}
         */
        aiToolsGetDisabled(requestParameters: ToolsApiAiToolsGetDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: Array<string>; }> {
            return localVarFp.aiToolsGetDisabled(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Is allow always
         * @param {ToolsApiAiToolsIsAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-allow-always/
         * @throws {RequiredError}
         */
        aiToolsIsAllowAlways(requestParameters: ToolsApiAiToolsIsAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiToolsIsAllowAlways(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Is tool disabled
         * @param {ToolsApiAiToolsIsToolDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-tool-disabled/
         * @throws {RequiredError}
         */
        aiToolsIsToolDisabled(requestParameters: ToolsApiAiToolsIsToolDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiToolsIsToolDisabled(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List custom servers
         * @param {ToolsApiAiToolsListCustomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-custom-servers/
         * @throws {RequiredError}
         */
        aiToolsListCustomServers(requestParameters: ToolsApiAiToolsListCustomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: object; }> {
            return localVarFp.aiToolsListCustomServers(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List system tools
         * @param {ToolsApiAiToolsListSystemToolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-system-tools/
         * @throws {RequiredError}
         */
        aiToolsListSystemTools(requestParameters: ToolsApiAiToolsListSystemToolsRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: Array<AiTMCPItem>; }> {
            return localVarFp.aiToolsListSystemTools(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove custom server
         * @param {ToolsApiAiToolsRemoveCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-remove-custom-server/
         * @throws {RequiredError}
         */
        aiToolsRemoveCustomServer(requestParameters: ToolsApiAiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiToolsRemoveCustomServer(requestParameters.aiToolsRemoveCustomServerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Replace all custom servers
         * @param {ToolsApiAiToolsReplaceAllCustomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-replace-all-custom-servers/
         * @throws {RequiredError}
         */
        aiToolsReplaceAllCustomServers(requestParameters: ToolsApiAiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiToolsBulkResult> {
            return localVarFp.aiToolsReplaceAllCustomServers(requestParameters.aiToolsReplaceAllCustomServersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set allow always
         * @param {ToolsApiAiToolsSetAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-allow-always/
         * @throws {RequiredError}
         */
        aiToolsSetAllowAlways(requestParameters: ToolsApiAiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiToolsSetAllowAlways(requestParameters.aiToolsSetAllowAlwaysRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set disabled
         * @param {ToolsApiAiToolsSetDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-disabled/
         * @throws {RequiredError}
         */
        aiToolsSetDisabled(requestParameters: ToolsApiAiToolsSetDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiToolsSetDisabled(requestParameters.aiToolsSetDisabledRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update custom server
         * @param {ToolsApiAiToolsUpdateCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-update-custom-server/
         * @throws {RequiredError}
         */
        aiToolsUpdateCustomServer(requestParameters: ToolsApiAiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiToolsMutationResult> {
            return localVarFp.aiToolsUpdateCustomServer(requestParameters.aiToolsUpdateCustomServerRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiToolsAddCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsAddCustomServerRequest
 */
export interface ToolsApiAiToolsAddCustomServerRequest {
    /**
     * 
     * @type {AiToolsAddCustomServerRequest}
     * @memberof ToolsApiAiToolsAddCustomServer
     */
    readonly aiToolsAddCustomServerRequest: AiToolsAddCustomServerRequest
}

/**
 * Request parameters for aiToolsGetAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsGetAllowAlwaysRequest
 */
export interface ToolsApiAiToolsGetAllowAlwaysRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsGetAllowAlways
     */
    readonly entityId: string
}

/**
 * Request parameters for aiToolsGetCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsGetCustomServerRequest
 */
export interface ToolsApiAiToolsGetCustomServerRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsGetCustomServer
     */
    readonly name: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsGetCustomServer
     */
    readonly entityId: string
}

/**
 * Request parameters for aiToolsGetDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsGetDisabledRequest
 */
export interface ToolsApiAiToolsGetDisabledRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsGetDisabled
     */
    readonly entityId: string
}

/**
 * Request parameters for aiToolsIsAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsIsAllowAlwaysRequest
 */
export interface ToolsApiAiToolsIsAllowAlwaysRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsIsAllowAlways
     */
    readonly serverType: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsIsAllowAlways
     */
    readonly toolName: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsIsAllowAlways
     */
    readonly entityId: string
}

/**
 * Request parameters for aiToolsIsToolDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsIsToolDisabledRequest
 */
export interface ToolsApiAiToolsIsToolDisabledRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsIsToolDisabled
     */
    readonly serverType: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsIsToolDisabled
     */
    readonly toolName: string

    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsIsToolDisabled
     */
    readonly entityId: string
}

/**
 * Request parameters for aiToolsListCustomServers operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsListCustomServersRequest
 */
export interface ToolsApiAiToolsListCustomServersRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsListCustomServers
     */
    readonly entityId: string
}

/**
 * Request parameters for aiToolsListSystemTools operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsListSystemToolsRequest
 */
export interface ToolsApiAiToolsListSystemToolsRequest {
    /**
     * 
     * @type {string}
     * @memberof ToolsApiAiToolsListSystemTools
     */
    readonly entityId: string
}

/**
 * Request parameters for aiToolsRemoveCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsRemoveCustomServerRequest
 */
export interface ToolsApiAiToolsRemoveCustomServerRequest {
    /**
     * 
     * @type {AiToolsRemoveCustomServerRequest}
     * @memberof ToolsApiAiToolsRemoveCustomServer
     */
    readonly aiToolsRemoveCustomServerRequest: AiToolsRemoveCustomServerRequest
}

/**
 * Request parameters for aiToolsReplaceAllCustomServers operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsReplaceAllCustomServersRequest
 */
export interface ToolsApiAiToolsReplaceAllCustomServersRequest {
    /**
     * 
     * @type {AiToolsReplaceAllCustomServersRequest}
     * @memberof ToolsApiAiToolsReplaceAllCustomServers
     */
    readonly aiToolsReplaceAllCustomServersRequest: AiToolsReplaceAllCustomServersRequest
}

/**
 * Request parameters for aiToolsSetAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsSetAllowAlwaysRequest
 */
export interface ToolsApiAiToolsSetAllowAlwaysRequest {
    /**
     * 
     * @type {AiToolsSetAllowAlwaysRequest}
     * @memberof ToolsApiAiToolsSetAllowAlways
     */
    readonly aiToolsSetAllowAlwaysRequest: AiToolsSetAllowAlwaysRequest
}

/**
 * Request parameters for aiToolsSetDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsSetDisabledRequest
 */
export interface ToolsApiAiToolsSetDisabledRequest {
    /**
     * 
     * @type {AiToolsSetDisabledRequest}
     * @memberof ToolsApiAiToolsSetDisabled
     */
    readonly aiToolsSetDisabledRequest: AiToolsSetDisabledRequest
}

/**
 * Request parameters for aiToolsUpdateCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsUpdateCustomServerRequest
 */
export interface ToolsApiAiToolsUpdateCustomServerRequest {
    /**
     * 
     * @type {AiToolsUpdateCustomServerRequest}
     * @memberof ToolsApiAiToolsUpdateCustomServer
     */
    readonly aiToolsUpdateCustomServerRequest: AiToolsUpdateCustomServerRequest
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
     * @param {AIToolsApiAiToolsAddCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsAddCustomServer(requestParameters: ToolsApiAiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsAddCustomServer(requestParameters.aiToolsAddCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get allow always
     * @param {AIToolsApiAiToolsGetAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsGetAllowAlways(requestParameters: ToolsApiAiToolsGetAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsGetAllowAlways(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get custom server
     * @param {AIToolsApiAiToolsGetCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsGetCustomServer(requestParameters: ToolsApiAiToolsGetCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsGetCustomServer(requestParameters.name, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get disabled
     * @param {AIToolsApiAiToolsGetDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsGetDisabled(requestParameters: ToolsApiAiToolsGetDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsGetDisabled(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Is allow always
     * @param {AIToolsApiAiToolsIsAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsIsAllowAlways(requestParameters: ToolsApiAiToolsIsAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsIsAllowAlways(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Is tool disabled
     * @param {AIToolsApiAiToolsIsToolDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsIsToolDisabled(requestParameters: ToolsApiAiToolsIsToolDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsIsToolDisabled(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List custom servers
     * @param {AIToolsApiAiToolsListCustomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsListCustomServers(requestParameters: ToolsApiAiToolsListCustomServersRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsListCustomServers(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List system tools
     * @param {AIToolsApiAiToolsListSystemToolsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsListSystemTools(requestParameters: ToolsApiAiToolsListSystemToolsRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsListSystemTools(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove custom server
     * @param {AIToolsApiAiToolsRemoveCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsRemoveCustomServer(requestParameters: ToolsApiAiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsRemoveCustomServer(requestParameters.aiToolsRemoveCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Replace all custom servers
     * @param {AIToolsApiAiToolsReplaceAllCustomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsReplaceAllCustomServers(requestParameters: ToolsApiAiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsReplaceAllCustomServers(requestParameters.aiToolsReplaceAllCustomServersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set allow always
     * @param {AIToolsApiAiToolsSetAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsSetAllowAlways(requestParameters: ToolsApiAiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsSetAllowAlways(requestParameters.aiToolsSetAllowAlwaysRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set disabled
     * @param {AIToolsApiAiToolsSetDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsSetDisabled(requestParameters: ToolsApiAiToolsSetDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsSetDisabled(requestParameters.aiToolsSetDisabledRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update custom server
     * @param {AIToolsApiAiToolsUpdateCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsUpdateCustomServer(requestParameters: ToolsApiAiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsUpdateCustomServer(requestParameters.aiToolsUpdateCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

