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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { StartReassignRequestDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TaskProgressResponseWrapper } from '../../models';
// @ts-ignore
import type { TerminateRequestDto } from '../../models';
/**
 * UserDataApi - axios parameter creator
 * @export
 */
export const UserDataApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the progress of deleting the personal folder.
         * @summary Get the progress of deleting the personal folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeletePersonalFolderProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-delete-personal-folder-progress/
         */
        getDeletePersonalFolderProgress: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/delete/personal/progress`;
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
         * Returns the progress of the started data reassignment for the user with the ID specified in the request.
         * @summary Get the reassignment progress
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReassignProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reassign-progress/
         */
        getReassignProgress: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getReassignProgress', 'userid', userid)

            const localVarPath = `/api/2.0/people/reassign/progress/{userid}`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
         * Returns the progress of the started data deletion for the user with the ID specified in the request.
         * @summary Get the deletion progress
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRemoveProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-remove-progress/
         */
        getRemoveProgress: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getRemoveProgress', 'userid', userid)

            const localVarPath = `/api/2.0/people/remove/progress/{userid}`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
         * Checks whether the reassignment of rooms and shared files is required.
         * @summary Check data for reassignment need
         * @param {string} [userId] The user ID.
         * @param {EmployeeType} [type] The expected user type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for necessaryReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/necessary-reassign/
         */
        necessaryReassign: async (userId?: string, type?: EmployeeType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/reassign/necessary`;
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

            if (userId !== undefined) {
                localVarQueryParameter['UserId'] = userId;
            }

            if (type !== undefined) {
                localVarQueryParameter['Type'] = type;
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
         * Sends the instructions for deleting a user profile.
         * @summary Send the deletion instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendInstructionsToDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-instructions-to-delete/
         */
        sendInstructionsToDelete: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/self/delete`;
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
         * Starts deleting the personal folder.
         * @summary Delete the personal folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startDeletePersonalFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-delete-personal-folder/
         */
        startDeletePersonalFolder: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/delete/personal/start`;
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
         * Starts the data reassignment for the user with the ID specified in the request.
         * @summary Start the data reassignment
         * @param {StartReassignRequestDto} [startReassignRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-reassign/
         */
        startReassign: async (startReassignRequestDto?: StartReassignRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/reassign/start`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(startReassignRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts the data deletion for the user with the ID specified in the request.
         * @summary Start the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-remove/
         */
        startRemove: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/remove/start`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(terminateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Terminates the data reassignment for the user with the ID specified in the request.
         * @summary Terminate the data reassignment
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-reassign/
         */
        terminateReassign: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/reassign/terminate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(terminateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Terminates the data deletion for the user with the ID specified in the request.
         * @summary Terminate the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-remove/
         */
        terminateRemove: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/remove/terminate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(terminateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserDataApi - functional programming interface
 * @export
 */
export const UserDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the progress of deleting the personal folder.
         * @summary Get the progress of deleting the personal folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeletePersonalFolderProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-delete-personal-folder-progress/
         */
        async getDeletePersonalFolderProgress(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeletePersonalFolderProgress(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.getDeletePersonalFolderProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the progress of the started data reassignment for the user with the ID specified in the request.
         * @summary Get the reassignment progress
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReassignProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reassign-progress/
         */
        async getReassignProgress(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReassignProgress(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.getReassignProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the progress of the started data deletion for the user with the ID specified in the request.
         * @summary Get the deletion progress
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRemoveProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-remove-progress/
         */
        async getRemoveProgress(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRemoveProgress(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.getRemoveProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks whether the reassignment of rooms and shared files is required.
         * @summary Check data for reassignment need
         * @param {string} [userId] The user ID.
         * @param {EmployeeType} [type] The expected user type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for necessaryReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/necessary-reassign/
         */
        async necessaryReassign(userId?: string, type?: EmployeeType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.necessaryReassign(userId, type, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.necessaryReassign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the instructions for deleting a user profile.
         * @summary Send the deletion instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendInstructionsToDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-instructions-to-delete/
         */
        async sendInstructionsToDelete(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendInstructionsToDelete(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.sendInstructionsToDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts deleting the personal folder.
         * @summary Delete the personal folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startDeletePersonalFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-delete-personal-folder/
         */
        async startDeletePersonalFolder(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startDeletePersonalFolder(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.startDeletePersonalFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the data reassignment for the user with the ID specified in the request.
         * @summary Start the data reassignment
         * @param {StartReassignRequestDto} [startReassignRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-reassign/
         */
        async startReassign(startReassignRequestDto?: StartReassignRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startReassign(startReassignRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.startReassign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the data deletion for the user with the ID specified in the request.
         * @summary Start the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-remove/
         */
        async startRemove(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startRemove(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.startRemove']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Terminates the data reassignment for the user with the ID specified in the request.
         * @summary Terminate the data reassignment
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-reassign/
         */
        async terminateReassign(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateReassign(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.terminateReassign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Terminates the data deletion for the user with the ID specified in the request.
         * @summary Terminate the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-remove/
         */
        async terminateRemove(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateRemove(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.terminateRemove']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserDataApi - factory interface
 * @export
 */
export const UserDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserDataApiFp(configuration)
    return {
        /**
         * Returns the progress of deleting the personal folder.
         * @summary Get the progress of deleting the personal folder
         * @param {*} [options] Override http request option.
         * REST API Reference for getDeletePersonalFolderProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-delete-personal-folder-progress/
         * @throws {RequiredError}
         */
        getDeletePersonalFolderProgress(options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getDeletePersonalFolderProgress(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the progress of the started data reassignment for the user with the ID specified in the request.
         * @summary Get the reassignment progress
         * @param {UserDataApiGetReassignProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getReassignProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reassign-progress/
         * @throws {RequiredError}
         */
        getReassignProgress(requestParameters: UserDataApiGetReassignProgressRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getReassignProgress(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the progress of the started data deletion for the user with the ID specified in the request.
         * @summary Get the deletion progress
         * @param {UserDataApiGetRemoveProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRemoveProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-remove-progress/
         * @throws {RequiredError}
         */
        getRemoveProgress(requestParameters: UserDataApiGetRemoveProgressRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getRemoveProgress(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks whether the reassignment of rooms and shared files is required.
         * @summary Check data for reassignment need
         * @param {UserDataApiNecessaryReassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for necessaryReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/necessary-reassign/
         * @throws {RequiredError}
         */
        necessaryReassign(requestParameters: UserDataApiNecessaryReassignRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.necessaryReassign(requestParameters.userId, requestParameters.type, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the instructions for deleting a user profile.
         * @summary Send the deletion instructions
         * @param {*} [options] Override http request option.
         * REST API Reference for sendInstructionsToDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-instructions-to-delete/
         * @throws {RequiredError}
         */
        sendInstructionsToDelete(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendInstructionsToDelete(options).then((request) => request(axios, basePath));
        },
        /**
         * Starts deleting the personal folder.
         * @summary Delete the personal folder
         * @param {*} [options] Override http request option.
         * REST API Reference for startDeletePersonalFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-delete-personal-folder/
         * @throws {RequiredError}
         */
        startDeletePersonalFolder(options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.startDeletePersonalFolder(options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the data reassignment for the user with the ID specified in the request.
         * @summary Start the data reassignment
         * @param {UserDataApiStartReassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-reassign/
         * @throws {RequiredError}
         */
        startReassign(requestParameters: UserDataApiStartReassignRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.startReassign(requestParameters.startReassignRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the data deletion for the user with the ID specified in the request.
         * @summary Start the data deletion
         * @param {UserDataApiStartRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-remove/
         * @throws {RequiredError}
         */
        startRemove(requestParameters: UserDataApiStartRemoveRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.startRemove(requestParameters.terminateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Terminates the data reassignment for the user with the ID specified in the request.
         * @summary Terminate the data reassignment
         * @param {UserDataApiTerminateReassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-reassign/
         * @throws {RequiredError}
         */
        terminateReassign(requestParameters: UserDataApiTerminateReassignRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.terminateReassign(requestParameters.terminateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Terminates the data deletion for the user with the ID specified in the request.
         * @summary Terminate the data deletion
         * @param {UserDataApiTerminateRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-remove/
         * @throws {RequiredError}
         */
        terminateRemove(requestParameters: UserDataApiTerminateRemoveRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateRemove(requestParameters.terminateRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getReassignProgress operation in UserDataApi.
 * @export
 * @interface UserDataApiGetReassignProgressRequest
 */
export interface UserDataApiGetReassignProgressRequest {
    /**
     * The user ID.
     * @type {string}
     * @memberof UserDataApiGetReassignProgress
     */
    readonly userid: string
}

/**
 * Request parameters for getRemoveProgress operation in UserDataApi.
 * @export
 * @interface UserDataApiGetRemoveProgressRequest
 */
export interface UserDataApiGetRemoveProgressRequest {
    /**
     * The user ID.
     * @type {string}
     * @memberof UserDataApiGetRemoveProgress
     */
    readonly userid: string
}

/**
 * Request parameters for necessaryReassign operation in UserDataApi.
 * @export
 * @interface UserDataApiNecessaryReassignRequest
 */
export interface UserDataApiNecessaryReassignRequest {
    /**
     * The user ID.
     * @type {string}
     * @memberof UserDataApiNecessaryReassign
     */
    readonly userId?: string

    /**
     * The expected user type.
     * @type {EmployeeType}
     * @memberof UserDataApiNecessaryReassign
     */
    readonly type?: EmployeeType
}

/**
 * Request parameters for startReassign operation in UserDataApi.
 * @export
 * @interface UserDataApiStartReassignRequest
 */
export interface UserDataApiStartReassignRequest {
    /**
     * 
     * @type {StartReassignRequestDto}
     * @memberof UserDataApiStartReassign
     */
    readonly startReassignRequestDto?: StartReassignRequestDto
}

/**
 * Request parameters for startRemove operation in UserDataApi.
 * @export
 * @interface UserDataApiStartRemoveRequest
 */
export interface UserDataApiStartRemoveRequest {
    /**
     * 
     * @type {TerminateRequestDto}
     * @memberof UserDataApiStartRemove
     */
    readonly terminateRequestDto?: TerminateRequestDto
}

/**
 * Request parameters for terminateReassign operation in UserDataApi.
 * @export
 * @interface UserDataApiTerminateReassignRequest
 */
export interface UserDataApiTerminateReassignRequest {
    /**
     * 
     * @type {TerminateRequestDto}
     * @memberof UserDataApiTerminateReassign
     */
    readonly terminateRequestDto?: TerminateRequestDto
}

/**
 * Request parameters for terminateRemove operation in UserDataApi.
 * @export
 * @interface UserDataApiTerminateRemoveRequest
 */
export interface UserDataApiTerminateRemoveRequest {
    /**
     * 
     * @type {TerminateRequestDto}
     * @memberof UserDataApiTerminateRemove
     */
    readonly terminateRequestDto?: TerminateRequestDto
}

/**
 * UserDataApi - object-oriented interface
 * @export
 * @class UserDataApi
 * @extends {BaseAPI}
 */
export class UserDataApi extends BaseAPI {
    /**
     * Returns the progress of deleting the personal folder.
     * @summary Get the progress of deleting the personal folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public getDeletePersonalFolderProgress(options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).getDeletePersonalFolderProgress(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress of the started data reassignment for the user with the ID specified in the request.
     * @summary Get the reassignment progress
     * @param {PeopleUserDataApiGetReassignProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public getReassignProgress(requestParameters: UserDataApiGetReassignProgressRequest, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).getReassignProgress(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress of the started data deletion for the user with the ID specified in the request.
     * @summary Get the deletion progress
     * @param {PeopleUserDataApiGetRemoveProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public getRemoveProgress(requestParameters: UserDataApiGetRemoveProgressRequest, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).getRemoveProgress(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks whether the reassignment of rooms and shared files is required.
     * @summary Check data for reassignment need
     * @param {PeopleUserDataApiNecessaryReassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public necessaryReassign(requestParameters: UserDataApiNecessaryReassignRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).necessaryReassign(requestParameters.userId, requestParameters.type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the instructions for deleting a user profile.
     * @summary Send the deletion instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public sendInstructionsToDelete(options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).sendInstructionsToDelete(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts deleting the personal folder.
     * @summary Delete the personal folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public startDeletePersonalFolder(options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).startDeletePersonalFolder(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the data reassignment for the user with the ID specified in the request.
     * @summary Start the data reassignment
     * @param {PeopleUserDataApiStartReassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public startReassign(requestParameters: UserDataApiStartReassignRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).startReassign(requestParameters.startReassignRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the data deletion for the user with the ID specified in the request.
     * @summary Start the data deletion
     * @param {PeopleUserDataApiStartRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public startRemove(requestParameters: UserDataApiStartRemoveRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).startRemove(requestParameters.terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates the data reassignment for the user with the ID specified in the request.
     * @summary Terminate the data reassignment
     * @param {PeopleUserDataApiTerminateReassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public terminateReassign(requestParameters: UserDataApiTerminateReassignRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).terminateReassign(requestParameters.terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates the data deletion for the user with the ID specified in the request.
     * @summary Terminate the data deletion
     * @param {PeopleUserDataApiTerminateRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public terminateRemove(requestParameters: UserDataApiTerminateRemoveRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).terminateRemove(requestParameters.terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

