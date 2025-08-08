/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { StartUpdateUserTypeDto } from '../../models';
// @ts-ignore
import type { TaskProgressResponseWrapper } from '../../models';
// @ts-ignore
import type { TerminateRequestDto } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
/**
 * UserTypeApi - axios parameter creator
 * @export
 */
export const UserTypeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the progress of updating the user type.
         * @summary Get the progress of updating user type
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserTypeUpdateProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-type-update-progress/
         */
        getUserTypeUpdateProgress: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getUserTypeUpdateProgress', 'userid', userid)
            const localVarPath = `/api/2.0/people/type/progress/{userid}`
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
         * Starts updating the type of the user or guest when reassigning rooms and shared files.
         * @summary Update user type
         * @param {StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for starUserTypetUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/star-user-typet-update/
         */
        starUserTypetUpdate: async (startUpdateUserTypeDto?: StartUpdateUserTypeDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/type`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(startUpdateUserTypeDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Terminates the process of updating the type of the user or guest.
         * @summary Terminate update user type
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-user-type-update/
         */
        terminateUserTypeUpdate: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/type/terminate`;
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
         * Changes a type of the users with the IDs specified in the request.
         * @summary Change a user type
         * @param {EmployeeType} type The new user type.
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-type/
         */
        updateUserType: async (type: EmployeeType, updateMembersRequestDto?: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('updateUserType', 'type', type)
            const localVarPath = `/api/2.0/people/type/{type}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMembersRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserTypeApi - functional programming interface
 * @export
 */
export const UserTypeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserTypeApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the progress of updating the user type.
         * @summary Get the progress of updating user type
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserTypeUpdateProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-type-update-progress/
         */
        async getUserTypeUpdateProgress(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserTypeUpdateProgress(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.getUserTypeUpdateProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts updating the type of the user or guest when reassigning rooms and shared files.
         * @summary Update user type
         * @param {StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for starUserTypetUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/star-user-typet-update/
         */
        async starUserTypetUpdate(startUpdateUserTypeDto?: StartUpdateUserTypeDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.starUserTypetUpdate(startUpdateUserTypeDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.starUserTypetUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Terminates the process of updating the type of the user or guest.
         * @summary Terminate update user type
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-user-type-update/
         */
        async terminateUserTypeUpdate(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateUserTypeUpdate(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.terminateUserTypeUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes a type of the users with the IDs specified in the request.
         * @summary Change a user type
         * @param {EmployeeType} type The new user type.
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-type/
         */
        async updateUserType(type: EmployeeType, updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserType(type, updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.updateUserType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserTypeApi - factory interface
 * @export
 */
export const UserTypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserTypeApiFp(configuration)
    return {
        /**
         * Returns the progress of updating the user type.
         * @summary Get the progress of updating user type
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserTypeUpdateProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-type-update-progress/
         * @throws {RequiredError}
         */
        getUserTypeUpdateProgress(userid: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getUserTypeUpdateProgress(userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts updating the type of the user or guest when reassigning rooms and shared files.
         * @summary Update user type
         * @param {StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for starUserTypetUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/star-user-typet-update/
         * @throws {RequiredError}
         */
        starUserTypetUpdate(startUpdateUserTypeDto?: StartUpdateUserTypeDto, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.starUserTypetUpdate(startUpdateUserTypeDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Terminates the process of updating the type of the user or guest.
         * @summary Terminate update user type
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-user-type-update/
         * @throws {RequiredError}
         */
        terminateUserTypeUpdate(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.terminateUserTypeUpdate(terminateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes a type of the users with the IDs specified in the request.
         * @summary Change a user type
         * @param {EmployeeType} type The new user type.
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-type/
         * @throws {RequiredError}
         */
        updateUserType(type: EmployeeType, updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserType(type, updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserTypeApi - object-oriented interface
 * @export
 * @class UserTypeApi
 * @extends {BaseAPI}
 */
export class UserTypeApi extends BaseAPI {
    /**
     * Returns the progress of updating the user type.
     * @summary Get the progress of updating user type
     * @param {string} userid The user ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public getUserTypeUpdateProgress(userid: string, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).getUserTypeUpdateProgress(userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts updating the type of the user or guest when reassigning rooms and shared files.
     * @summary Update user type
     * @param {StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public starUserTypetUpdate(startUpdateUserTypeDto?: StartUpdateUserTypeDto, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).starUserTypetUpdate(startUpdateUserTypeDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates the process of updating the type of the user or guest.
     * @summary Terminate update user type
     * @param {TerminateRequestDto} [terminateRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public terminateUserTypeUpdate(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).terminateUserTypeUpdate(terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes a type of the users with the IDs specified in the request.
     * @summary Change a user type
     * @param {EmployeeType} type The new user type.
     * @param {UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public updateUserType(type: EmployeeType, updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).updateUserType(type, updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

