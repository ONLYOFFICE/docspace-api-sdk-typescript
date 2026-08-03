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
import type { AiActionType } from '../../models';
// @ts-ignore
import type { AiAssignmentMutationResult } from '../../models';
// @ts-ignore
import type { AiAssignmentsAssignRequest } from '../../models';
// @ts-ignore
import type { AiBulkAssignmentResult } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiResolvedAssignment } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
/**
 * AssignmentsApi - axios parameter creator
 * @export
 */
export const AssignmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Assign
         * @param {AiAssignmentsAssignRequest} aiAssignmentsAssignRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-assign/
         */
        aiAssignmentsAssign: async (aiAssignmentsAssignRequest: AiAssignmentsAssignRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAssignmentsAssignRequest' is not null or undefined
            assertParamExists('aiAssignmentsAssign', 'aiAssignmentsAssignRequest', aiAssignmentsAssignRequest)

            const localVarPath = `/api/2.0/ai/assignments/assign`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAssignmentsAssignRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Bulk assign
         * @param {{ [key: string]: string; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsBulkAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-bulk-assign/
         */
        aiAssignmentsBulkAssign: async (requestBody: { [key: string]: string; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiAssignmentsBulkAssign', 'requestBody', requestBody)

            const localVarPath = `/api/2.0/ai/assignments/bulk-assign`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Cascade profile delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsCascadeProfileDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-cascade-profile-delete/
         */
        aiAssignmentsCascadeProfileDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiAssignmentsCascadeProfileDelete', 'body', body)

            const localVarPath = `/api/2.0/ai/assignments/cascade-profile-delete`;
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
         * @summary Get all assignments
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsGetAllAssignments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-all-assignments/
         */
        aiAssignmentsGetAllAssignments: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiAssignmentsGetAllAssignments', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/assignments/get-all-assignments`;
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
         * @summary Get assignment
         * @param {string} actionType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsGetAssignment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-assignment/
         */
        aiAssignmentsGetAssignment: async (actionType: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'actionType' is not null or undefined
            assertParamExists('aiAssignmentsGetAssignment', 'actionType', actionType)

            const localVarPath = `/api/2.0/ai/assignments/get-assignment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (actionType !== undefined) {
                localVarQueryParameter['actionType'] = actionType;
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
         * @summary Resolve for action
         * @param {string} actionType 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-resolve-for-action/
         */
        aiAssignmentsResolveForAction: async (actionType: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'actionType' is not null or undefined
            assertParamExists('aiAssignmentsResolveForAction', 'actionType', actionType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiAssignmentsResolveForAction', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/assignments/resolve-for-action`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (actionType !== undefined) {
                localVarQueryParameter['actionType'] = actionType;
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
         * @summary Try resolve for action
         * @param {string} actionType 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsTryResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-try-resolve-for-action/
         */
        aiAssignmentsTryResolveForAction: async (actionType: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'actionType' is not null or undefined
            assertParamExists('aiAssignmentsTryResolveForAction', 'actionType', actionType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('aiAssignmentsTryResolveForAction', 'entityId', entityId)

            const localVarPath = `/api/2.0/ai/assignments/try-resolve-for-action`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (actionType !== undefined) {
                localVarQueryParameter['actionType'] = actionType;
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
         * @summary Unassign
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsUnassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-unassign/
         */
        aiAssignmentsUnassign: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiAssignmentsUnassign', 'body', body)

            const localVarPath = `/api/2.0/ai/assignments/unassign`;
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
    }
};

/**
 * AssignmentsApi - functional programming interface
 * @export
 */
export const AssignmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AssignmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Assign
         * @param {AiAssignmentsAssignRequest} aiAssignmentsAssignRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-assign/
         */
        async aiAssignmentsAssign(aiAssignmentsAssignRequest: AiAssignmentsAssignRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAssignmentMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsAssign(aiAssignmentsAssignRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsAssign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Bulk assign
         * @param {{ [key: string]: string; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsBulkAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-bulk-assign/
         */
        async aiAssignmentsBulkAssign(requestBody: { [key: string]: string; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiBulkAssignmentResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsBulkAssign(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsBulkAssign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Cascade profile delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsCascadeProfileDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-cascade-profile-delete/
         */
        async aiAssignmentsCascadeProfileDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsCascadeProfileDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsCascadeProfileDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all assignments
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsGetAllAssignments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-all-assignments/
         */
        async aiAssignmentsGetAllAssignments(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: string; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsGetAllAssignments(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsGetAllAssignments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get assignment
         * @param {string} actionType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsGetAssignment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-assignment/
         */
        async aiAssignmentsGetAssignment(actionType: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsGetAssignment(actionType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsGetAssignment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Resolve for action
         * @param {string} actionType 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-resolve-for-action/
         */
        async aiAssignmentsResolveForAction(actionType: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiResolvedAssignment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsResolveForAction(actionType, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsResolveForAction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Try resolve for action
         * @param {string} actionType 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsTryResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-try-resolve-for-action/
         */
        async aiAssignmentsTryResolveForAction(actionType: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiResolvedAssignment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsTryResolveForAction(actionType, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsTryResolveForAction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Unassign
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAssignmentsUnassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-unassign/
         */
        async aiAssignmentsUnassign(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAssignmentsUnassign(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.aiAssignmentsUnassign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AssignmentsApi - factory interface
 * @export
 */
export const AssignmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AssignmentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Assign
         * @param {AssignmentsApiAiAssignmentsAssignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-assign/
         * @throws {RequiredError}
         */
        aiAssignmentsAssign(requestParameters: AssignmentsApiAiAssignmentsAssignRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiAssignmentMutationResult> {
            return localVarFp.aiAssignmentsAssign(requestParameters.aiAssignmentsAssignRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Bulk assign
         * @param {AssignmentsApiAiAssignmentsBulkAssignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsBulkAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-bulk-assign/
         * @throws {RequiredError}
         */
        aiAssignmentsBulkAssign(requestParameters: AssignmentsApiAiAssignmentsBulkAssignRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiBulkAssignmentResult> {
            return localVarFp.aiAssignmentsBulkAssign(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Cascade profile delete
         * @param {AssignmentsApiAiAssignmentsCascadeProfileDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsCascadeProfileDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-cascade-profile-delete/
         * @throws {RequiredError}
         */
        aiAssignmentsCascadeProfileDelete(requestParameters: AssignmentsApiAiAssignmentsCascadeProfileDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiAssignmentsCascadeProfileDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all assignments
         * @param {AssignmentsApiAiAssignmentsGetAllAssignmentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsGetAllAssignments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-all-assignments/
         * @throws {RequiredError}
         */
        aiAssignmentsGetAllAssignments(requestParameters: AssignmentsApiAiAssignmentsGetAllAssignmentsRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: string; }> {
            return localVarFp.aiAssignmentsGetAllAssignments(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get assignment
         * @param {AssignmentsApiAiAssignmentsGetAssignmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsGetAssignment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-assignment/
         * @throws {RequiredError}
         */
        aiAssignmentsGetAssignment(requestParameters: AssignmentsApiAiAssignmentsGetAssignmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.aiAssignmentsGetAssignment(requestParameters.actionType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Resolve for action
         * @param {AssignmentsApiAiAssignmentsResolveForActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-resolve-for-action/
         * @throws {RequiredError}
         */
        aiAssignmentsResolveForAction(requestParameters: AssignmentsApiAiAssignmentsResolveForActionRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiResolvedAssignment> {
            return localVarFp.aiAssignmentsResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Try resolve for action
         * @param {AssignmentsApiAiAssignmentsTryResolveForActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsTryResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-try-resolve-for-action/
         * @throws {RequiredError}
         */
        aiAssignmentsTryResolveForAction(requestParameters: AssignmentsApiAiAssignmentsTryResolveForActionRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiResolvedAssignment> {
            return localVarFp.aiAssignmentsTryResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Unassign
         * @param {AssignmentsApiAiAssignmentsUnassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAssignmentsUnassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-unassign/
         * @throws {RequiredError}
         */
        aiAssignmentsUnassign(requestParameters: AssignmentsApiAiAssignmentsUnassignRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiAssignmentsUnassign(requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiAssignmentsAssign operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsAssignRequest
 */
export interface AssignmentsApiAiAssignmentsAssignRequest {
    /**
     * 
     * @type {AiAssignmentsAssignRequest}
     * @memberof AssignmentsApiAiAssignmentsAssign
     */
    readonly aiAssignmentsAssignRequest: AiAssignmentsAssignRequest
}

/**
 * Request parameters for aiAssignmentsBulkAssign operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsBulkAssignRequest
 */
export interface AssignmentsApiAiAssignmentsBulkAssignRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssignmentsApiAiAssignmentsBulkAssign
     */
    readonly requestBody: { [key: string]: string; }
}

/**
 * Request parameters for aiAssignmentsCascadeProfileDelete operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsCascadeProfileDeleteRequest
 */
export interface AssignmentsApiAiAssignmentsCascadeProfileDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsCascadeProfileDelete
     */
    readonly body: string
}

/**
 * Request parameters for aiAssignmentsGetAllAssignments operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsGetAllAssignmentsRequest
 */
export interface AssignmentsApiAiAssignmentsGetAllAssignmentsRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsGetAllAssignments
     */
    readonly entityId: string
}

/**
 * Request parameters for aiAssignmentsGetAssignment operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsGetAssignmentRequest
 */
export interface AssignmentsApiAiAssignmentsGetAssignmentRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsGetAssignment
     */
    readonly actionType: string
}

/**
 * Request parameters for aiAssignmentsResolveForAction operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsResolveForActionRequest
 */
export interface AssignmentsApiAiAssignmentsResolveForActionRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsResolveForAction
     */
    readonly actionType: string

    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsResolveForAction
     */
    readonly entityId: string
}

/**
 * Request parameters for aiAssignmentsTryResolveForAction operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsTryResolveForActionRequest
 */
export interface AssignmentsApiAiAssignmentsTryResolveForActionRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsTryResolveForAction
     */
    readonly actionType: string

    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsTryResolveForAction
     */
    readonly entityId: string
}

/**
 * Request parameters for aiAssignmentsUnassign operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiAiAssignmentsUnassignRequest
 */
export interface AssignmentsApiAiAssignmentsUnassignRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiAiAssignmentsUnassign
     */
    readonly body: string
}

/**
 * AssignmentsApi - object-oriented interface
 * @export
 * @class AssignmentsApi
 * @extends {BaseAPI}
 */
export class AssignmentsApi extends BaseAPI {
    /**
     * 
     * @summary Assign
     * @param {AIAssignmentsApiAiAssignmentsAssignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsAssign(requestParameters: AssignmentsApiAiAssignmentsAssignRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsAssign(requestParameters.aiAssignmentsAssignRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Bulk assign
     * @param {AIAssignmentsApiAiAssignmentsBulkAssignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsBulkAssign(requestParameters: AssignmentsApiAiAssignmentsBulkAssignRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsBulkAssign(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Cascade profile delete
     * @param {AIAssignmentsApiAiAssignmentsCascadeProfileDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsCascadeProfileDelete(requestParameters: AssignmentsApiAiAssignmentsCascadeProfileDeleteRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsCascadeProfileDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all assignments
     * @param {AIAssignmentsApiAiAssignmentsGetAllAssignmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsGetAllAssignments(requestParameters: AssignmentsApiAiAssignmentsGetAllAssignmentsRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsGetAllAssignments(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get assignment
     * @param {AIAssignmentsApiAiAssignmentsGetAssignmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsGetAssignment(requestParameters: AssignmentsApiAiAssignmentsGetAssignmentRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsGetAssignment(requestParameters.actionType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Resolve for action
     * @param {AIAssignmentsApiAiAssignmentsResolveForActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsResolveForAction(requestParameters: AssignmentsApiAiAssignmentsResolveForActionRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Try resolve for action
     * @param {AIAssignmentsApiAiAssignmentsTryResolveForActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsTryResolveForAction(requestParameters: AssignmentsApiAiAssignmentsTryResolveForActionRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsTryResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Unassign
     * @param {AIAssignmentsApiAiAssignmentsUnassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public aiAssignmentsUnassign(requestParameters: AssignmentsApiAiAssignmentsUnassignRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).aiAssignmentsUnassign(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

