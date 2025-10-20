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
import type { EmployeeActivationStatus } from '../../models';
// @ts-ignore
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeStatus } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
/**
 * UserStatusApi - axios parameter creator
 * @export
 */
export const UserStatusApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Returns a list of profiles filtered by the user status.
         * @summary Get profiles by status
         * @param {EmployeeStatus} status The user status.
         * @param {string} [filterBy] Specifies the criteria used to filter the profiles in the request.
         * @param {number} [count] The maximum number of user profiles to retrieve.
         * @param {number} [startIndex] The starting index for retrieving data in a paginated request.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] Represents the separator used to split multiple filter criteria in a query string.
         * @param {string} [filterValue] A string value representing additional filter criteria used in query parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-by-status/
         */
        getByStatus: async (status: EmployeeStatus, filterBy?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'status' is not null or undefined
            assertParamExists('getByStatus', 'status', status)
            const localVarPath = `/api/2.0/people/status/{status}`
                .replace(`{${"status"}}`, encodeURIComponent(String(status)));
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

            if (filterBy !== undefined) {
                localVarQueryParameter['filterBy'] = filterBy;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterSeparator !== undefined) {
                localVarQueryParameter['filterSeparator'] = filterSeparator;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Sets the required activation status to the list of users with the IDs specified in the request.
         * @summary Set an activation status to the users
         * @param {EmployeeActivationStatus} activationstatus The new user activation status.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserActivationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-activation-status/
         */
        updateUserActivationStatus: async (activationstatus: EmployeeActivationStatus, updateMembersRequestDto: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'activationstatus' is not null or undefined
            assertParamExists('updateUserActivationStatus', 'activationstatus', activationstatus)
            // verify required parameter 'updateMembersRequestDto' is not null or undefined
            assertParamExists('updateUserActivationStatus', 'updateMembersRequestDto', updateMembersRequestDto)
            const localVarPath = `/api/2.0/people/activationstatus/{activationstatus}`
                .replace(`{${"activationstatus"}}`, encodeURIComponent(String(activationstatus)));
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
        /**
         * Changes a status of the users with the IDs specified in the request.
         * @summary Change a user status
         * @param {EmployeeStatus} status The new user status.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-status/
         */
        updateUserStatus: async (status: EmployeeStatus, updateMembersRequestDto: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'status' is not null or undefined
            assertParamExists('updateUserStatus', 'status', status)
            // verify required parameter 'updateMembersRequestDto' is not null or undefined
            assertParamExists('updateUserStatus', 'updateMembersRequestDto', updateMembersRequestDto)
            const localVarPath = `/api/2.0/people/status/{status}`
                .replace(`{${"status"}}`, encodeURIComponent(String(status)));
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
 * UserStatusApi - functional programming interface
 * @export
 */
export const UserStatusApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserStatusApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of profiles filtered by the user status.
         * @summary Get profiles by status
         * @param {EmployeeStatus} status The user status.
         * @param {string} [filterBy] Specifies the criteria used to filter the profiles in the request.
         * @param {number} [count] The maximum number of user profiles to retrieve.
         * @param {number} [startIndex] The starting index for retrieving data in a paginated request.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] Represents the separator used to split multiple filter criteria in a query string.
         * @param {string} [filterValue] A string value representing additional filter criteria used in query parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-by-status/
         */
        async getByStatus(status: EmployeeStatus, filterBy?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getByStatus(status, filterBy, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserStatusApi.getByStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the required activation status to the list of users with the IDs specified in the request.
         * @summary Set an activation status to the users
         * @param {EmployeeActivationStatus} activationstatus The new user activation status.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserActivationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-activation-status/
         */
        async updateUserActivationStatus(activationstatus: EmployeeActivationStatus, updateMembersRequestDto: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserActivationStatus(activationstatus, updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserStatusApi.updateUserActivationStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes a status of the users with the IDs specified in the request.
         * @summary Change a user status
         * @param {EmployeeStatus} status The new user status.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-status/
         */
        async updateUserStatus(status: EmployeeStatus, updateMembersRequestDto: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserStatus(status, updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserStatusApi.updateUserStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserStatusApi - factory interface
 * @export
 */
export const UserStatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserStatusApiFp(configuration)
    return {
        /**
         * Returns a list of profiles filtered by the user status.
         * @summary Get profiles by status
         * @param {EmployeeStatus} status The user status.
         * @param {string} [filterBy] Specifies the criteria used to filter the profiles in the request.
         * @param {number} [count] The maximum number of user profiles to retrieve.
         * @param {number} [startIndex] The starting index for retrieving data in a paginated request.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] Represents the separator used to split multiple filter criteria in a query string.
         * @param {string} [filterValue] A string value representing additional filter criteria used in query parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-by-status/
         * @throws {RequiredError}
         */
        getByStatus(status: EmployeeStatus, filterBy?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getByStatus(status, filterBy, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the required activation status to the list of users with the IDs specified in the request.
         * @summary Set an activation status to the users
         * @param {EmployeeActivationStatus} activationstatus The new user activation status.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserActivationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-activation-status/
         * @throws {RequiredError}
         */
        updateUserActivationStatus(activationstatus: EmployeeActivationStatus, updateMembersRequestDto: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserActivationStatus(activationstatus, updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes a status of the users with the IDs specified in the request.
         * @summary Change a user status
         * @param {EmployeeStatus} status The new user status.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-status/
         * @throws {RequiredError}
         */
        updateUserStatus(status: EmployeeStatus, updateMembersRequestDto: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserStatus(status, updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserStatusApi - object-oriented interface
 * @export
 * @class UserStatusApi
 * @extends {BaseAPI}
 */
export class UserStatusApi extends BaseAPI {
    /**
     * Returns a list of profiles filtered by the user status.
     * @summary Get profiles by status
     * @param {EmployeeStatus} status The user status.
     * @param {string} [filterBy] Specifies the criteria used to filter the profiles in the request.
     * @param {number} [count] The maximum number of user profiles to retrieve.
     * @param {number} [startIndex] The starting index for retrieving data in a paginated request.
     * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterSeparator] Represents the separator used to split multiple filter criteria in a query string.
     * @param {string} [filterValue] A string value representing additional filter criteria used in query parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStatusApi
     */
    public getByStatus(status: EmployeeStatus, filterBy?: string, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return UserStatusApiFp(this.configuration).getByStatus(status, filterBy, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the required activation status to the list of users with the IDs specified in the request.
     * @summary Set an activation status to the users
     * @param {EmployeeActivationStatus} activationstatus The new user activation status.
     * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStatusApi
     */
    public updateUserActivationStatus(activationstatus: EmployeeActivationStatus, updateMembersRequestDto: UpdateMembersRequestDto, options?: RawAxiosRequestConfig) {
        return UserStatusApiFp(this.configuration).updateUserActivationStatus(activationstatus, updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes a status of the users with the IDs specified in the request.
     * @summary Change a user status
     * @param {EmployeeStatus} status The new user status.
     * @param {UpdateMembersRequestDto} updateMembersRequestDto The request parameters for updating the user information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStatusApi
     */
    public updateUserStatus(status: EmployeeStatus, updateMembersRequestDto: UpdateMembersRequestDto, options?: RawAxiosRequestConfig) {
        return UserStatusApiFp(this.configuration).updateUserStatus(status, updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

