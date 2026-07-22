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
import type { NewAiActionType } from '../../models';
// @ts-ignore
import type { NewAiAssignmentMutationResult } from '../../models';
// @ts-ignore
import type { NewAiAssignmentsAssignRequest } from '../../models';
// @ts-ignore
import type { NewAiBulkAssignmentResult } from '../../models';
// @ts-ignore
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiResolvedAssignment } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
/**
 * AssignmentsApi - axios parameter creator
 * @export
 */
export const AssignmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Assign
         * @param {NewAiAssignmentsAssignRequest} newAiAssignmentsAssignRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-assign/
         */
        newAiAssignmentsAssign: async (newAiAssignmentsAssignRequest: NewAiAssignmentsAssignRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAssignmentsAssignRequest' is not null or undefined
            assertParamExists('newAiAssignmentsAssign', 'newAiAssignmentsAssignRequest', newAiAssignmentsAssignRequest)

            const localVarPath = `/api/2.0/new-ai/assignments/assign`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAssignmentsAssignRequest, localVarRequestOptions, configuration)

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
         * REST API Reference for newAiAssignmentsBulkAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-bulk-assign/
         */
        newAiAssignmentsBulkAssign: async (requestBody: { [key: string]: string; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('newAiAssignmentsBulkAssign', 'requestBody', requestBody)

            const localVarPath = `/api/2.0/new-ai/assignments/bulk-assign`;
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
         * REST API Reference for newAiAssignmentsCascadeProfileDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-cascade-profile-delete/
         */
        newAiAssignmentsCascadeProfileDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiAssignmentsCascadeProfileDelete', 'body', body)

            const localVarPath = `/api/2.0/new-ai/assignments/cascade-profile-delete`;
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
         * REST API Reference for newAiAssignmentsGetAllAssignments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-all-assignments/
         */
        newAiAssignmentsGetAllAssignments: async (entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiAssignmentsGetAllAssignments', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/assignments/get-all-assignments`;
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
         * REST API Reference for newAiAssignmentsGetAssignment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-assignment/
         */
        newAiAssignmentsGetAssignment: async (actionType: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'actionType' is not null or undefined
            assertParamExists('newAiAssignmentsGetAssignment', 'actionType', actionType)

            const localVarPath = `/api/2.0/new-ai/assignments/get-assignment`;
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
         * REST API Reference for newAiAssignmentsResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-resolve-for-action/
         */
        newAiAssignmentsResolveForAction: async (actionType: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'actionType' is not null or undefined
            assertParamExists('newAiAssignmentsResolveForAction', 'actionType', actionType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiAssignmentsResolveForAction', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/assignments/resolve-for-action`;
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
         * REST API Reference for newAiAssignmentsTryResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-try-resolve-for-action/
         */
        newAiAssignmentsTryResolveForAction: async (actionType: string, entityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'actionType' is not null or undefined
            assertParamExists('newAiAssignmentsTryResolveForAction', 'actionType', actionType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('newAiAssignmentsTryResolveForAction', 'entityId', entityId)

            const localVarPath = `/api/2.0/new-ai/assignments/try-resolve-for-action`;
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
         * REST API Reference for newAiAssignmentsUnassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-unassign/
         */
        newAiAssignmentsUnassign: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiAssignmentsUnassign', 'body', body)

            const localVarPath = `/api/2.0/new-ai/assignments/unassign`;
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
         * @param {NewAiAssignmentsAssignRequest} newAiAssignmentsAssignRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-assign/
         */
        async newAiAssignmentsAssign(newAiAssignmentsAssignRequest: NewAiAssignmentsAssignRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiAssignmentMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsAssign(newAiAssignmentsAssignRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsAssign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Bulk assign
         * @param {{ [key: string]: string; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsBulkAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-bulk-assign/
         */
        async newAiAssignmentsBulkAssign(requestBody: { [key: string]: string; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiBulkAssignmentResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsBulkAssign(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsBulkAssign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Cascade profile delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsCascadeProfileDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-cascade-profile-delete/
         */
        async newAiAssignmentsCascadeProfileDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsCascadeProfileDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsCascadeProfileDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all assignments
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsGetAllAssignments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-all-assignments/
         */
        async newAiAssignmentsGetAllAssignments(entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: string; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsGetAllAssignments(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsGetAllAssignments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get assignment
         * @param {string} actionType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsGetAssignment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-assignment/
         */
        async newAiAssignmentsGetAssignment(actionType: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsGetAssignment(actionType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsGetAssignment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Resolve for action
         * @param {string} actionType 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-resolve-for-action/
         */
        async newAiAssignmentsResolveForAction(actionType: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiResolvedAssignment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsResolveForAction(actionType, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsResolveForAction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Try resolve for action
         * @param {string} actionType 
         * @param {string} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsTryResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-try-resolve-for-action/
         */
        async newAiAssignmentsTryResolveForAction(actionType: string, entityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiResolvedAssignment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsTryResolveForAction(actionType, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsTryResolveForAction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Unassign
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAssignmentsUnassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-unassign/
         */
        async newAiAssignmentsUnassign(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAssignmentsUnassign(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AssignmentsApi.newAiAssignmentsUnassign']?.[localVarOperationServerIndex]?.url;
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
         * @param {AssignmentsApiNewAiAssignmentsAssignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-assign/
         * @throws {RequiredError}
         */
        newAiAssignmentsAssign(requestParameters: AssignmentsApiNewAiAssignmentsAssignRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiAssignmentMutationResult> {
            return localVarFp.newAiAssignmentsAssign(requestParameters.newAiAssignmentsAssignRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Bulk assign
         * @param {AssignmentsApiNewAiAssignmentsBulkAssignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsBulkAssign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-bulk-assign/
         * @throws {RequiredError}
         */
        newAiAssignmentsBulkAssign(requestParameters: AssignmentsApiNewAiAssignmentsBulkAssignRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiBulkAssignmentResult> {
            return localVarFp.newAiAssignmentsBulkAssign(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Cascade profile delete
         * @param {AssignmentsApiNewAiAssignmentsCascadeProfileDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsCascadeProfileDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-cascade-profile-delete/
         * @throws {RequiredError}
         */
        newAiAssignmentsCascadeProfileDelete(requestParameters: AssignmentsApiNewAiAssignmentsCascadeProfileDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiAssignmentsCascadeProfileDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all assignments
         * @param {AssignmentsApiNewAiAssignmentsGetAllAssignmentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsGetAllAssignments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-all-assignments/
         * @throws {RequiredError}
         */
        newAiAssignmentsGetAllAssignments(requestParameters: AssignmentsApiNewAiAssignmentsGetAllAssignmentsRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: string; }> {
            return localVarFp.newAiAssignmentsGetAllAssignments(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get assignment
         * @param {AssignmentsApiNewAiAssignmentsGetAssignmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsGetAssignment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-assignment/
         * @throws {RequiredError}
         */
        newAiAssignmentsGetAssignment(requestParameters: AssignmentsApiNewAiAssignmentsGetAssignmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.newAiAssignmentsGetAssignment(requestParameters.actionType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Resolve for action
         * @param {AssignmentsApiNewAiAssignmentsResolveForActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-resolve-for-action/
         * @throws {RequiredError}
         */
        newAiAssignmentsResolveForAction(requestParameters: AssignmentsApiNewAiAssignmentsResolveForActionRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiResolvedAssignment> {
            return localVarFp.newAiAssignmentsResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Try resolve for action
         * @param {AssignmentsApiNewAiAssignmentsTryResolveForActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsTryResolveForAction operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-try-resolve-for-action/
         * @throws {RequiredError}
         */
        newAiAssignmentsTryResolveForAction(requestParameters: AssignmentsApiNewAiAssignmentsTryResolveForActionRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiResolvedAssignment> {
            return localVarFp.newAiAssignmentsTryResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Unassign
         * @param {AssignmentsApiNewAiAssignmentsUnassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAssignmentsUnassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-unassign/
         * @throws {RequiredError}
         */
        newAiAssignmentsUnassign(requestParameters: AssignmentsApiNewAiAssignmentsUnassignRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiAssignmentsUnassign(requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiAssignmentsAssign operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsAssignRequest
 */
export interface AssignmentsApiNewAiAssignmentsAssignRequest {
    /**
     * 
     * @type {NewAiAssignmentsAssignRequest}
     * @memberof AssignmentsApiNewAiAssignmentsAssign
     */
    readonly newAiAssignmentsAssignRequest: NewAiAssignmentsAssignRequest
}

/**
 * Request parameters for newAiAssignmentsBulkAssign operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsBulkAssignRequest
 */
export interface AssignmentsApiNewAiAssignmentsBulkAssignRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssignmentsApiNewAiAssignmentsBulkAssign
     */
    readonly requestBody: { [key: string]: string; }
}

/**
 * Request parameters for newAiAssignmentsCascadeProfileDelete operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsCascadeProfileDeleteRequest
 */
export interface AssignmentsApiNewAiAssignmentsCascadeProfileDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsCascadeProfileDelete
     */
    readonly body: string
}

/**
 * Request parameters for newAiAssignmentsGetAllAssignments operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsGetAllAssignmentsRequest
 */
export interface AssignmentsApiNewAiAssignmentsGetAllAssignmentsRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsGetAllAssignments
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiAssignmentsGetAssignment operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsGetAssignmentRequest
 */
export interface AssignmentsApiNewAiAssignmentsGetAssignmentRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsGetAssignment
     */
    readonly actionType: string
}

/**
 * Request parameters for newAiAssignmentsResolveForAction operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsResolveForActionRequest
 */
export interface AssignmentsApiNewAiAssignmentsResolveForActionRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsResolveForAction
     */
    readonly actionType: string

    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsResolveForAction
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiAssignmentsTryResolveForAction operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsTryResolveForActionRequest
 */
export interface AssignmentsApiNewAiAssignmentsTryResolveForActionRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsTryResolveForAction
     */
    readonly actionType: string

    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsTryResolveForAction
     */
    readonly entityId: string
}

/**
 * Request parameters for newAiAssignmentsUnassign operation in AssignmentsApi.
 * @export
 * @interface AssignmentsApiNewAiAssignmentsUnassignRequest
 */
export interface AssignmentsApiNewAiAssignmentsUnassignRequest {
    /**
     * 
     * @type {string}
     * @memberof AssignmentsApiNewAiAssignmentsUnassign
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
     * @param {NewAIAssignmentsApiNewAiAssignmentsAssignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsAssign(requestParameters: AssignmentsApiNewAiAssignmentsAssignRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsAssign(requestParameters.newAiAssignmentsAssignRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Bulk assign
     * @param {NewAIAssignmentsApiNewAiAssignmentsBulkAssignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsBulkAssign(requestParameters: AssignmentsApiNewAiAssignmentsBulkAssignRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsBulkAssign(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Cascade profile delete
     * @param {NewAIAssignmentsApiNewAiAssignmentsCascadeProfileDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsCascadeProfileDelete(requestParameters: AssignmentsApiNewAiAssignmentsCascadeProfileDeleteRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsCascadeProfileDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all assignments
     * @param {NewAIAssignmentsApiNewAiAssignmentsGetAllAssignmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsGetAllAssignments(requestParameters: AssignmentsApiNewAiAssignmentsGetAllAssignmentsRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsGetAllAssignments(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get assignment
     * @param {NewAIAssignmentsApiNewAiAssignmentsGetAssignmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsGetAssignment(requestParameters: AssignmentsApiNewAiAssignmentsGetAssignmentRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsGetAssignment(requestParameters.actionType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Resolve for action
     * @param {NewAIAssignmentsApiNewAiAssignmentsResolveForActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsResolveForAction(requestParameters: AssignmentsApiNewAiAssignmentsResolveForActionRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Try resolve for action
     * @param {NewAIAssignmentsApiNewAiAssignmentsTryResolveForActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsTryResolveForAction(requestParameters: AssignmentsApiNewAiAssignmentsTryResolveForActionRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsTryResolveForAction(requestParameters.actionType, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Unassign
     * @param {NewAIAssignmentsApiNewAiAssignmentsUnassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssignmentsApi
     */
    public newAiAssignmentsUnassign(requestParameters: AssignmentsApiNewAiAssignmentsUnassignRequest, options?: RawAxiosRequestConfig) {
        return AssignmentsApiFp(this.configuration).newAiAssignmentsUnassign(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

