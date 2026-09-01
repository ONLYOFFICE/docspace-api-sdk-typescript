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
import type { AccountLoginType } from '../../models';
// @ts-ignore
import type { Area } from '../../models';
// @ts-ignore
import type { EmployeeActivationStatus } from '../../models';
// @ts-ignore
import type { EmployeeArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeStatus } from '../../models';
// @ts-ignore
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ObjectArrayWrapper } from '../../models';
// @ts-ignore
import type { Payments } from '../../models';
// @ts-ignore
import type { QuotaFilter } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
/**
 * PeopleSearchApi - axios parameter creator
 * @export
 */
export const PeopleSearchApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Returns the account entries with their sharing settings for a file with the ID specified in request.
         * @summary Get account entries with file sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the account sharing settings from the response.
         * @param {boolean} [includeShared] Specifies whether to include the account sharing settings in the response.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The area of the account entries.
         * @param {Array<EmployeeType>} [employeeTypes] The list of the user types.
         * @param {number} [count] The number of items to retrieve in a request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {string} [filterSeparator] Specifies the separator used in filter expressions.
         * @param {string} [filterValue] The text filter applied to the accounts search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountsEntriesWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-files-shared/
         */
        getAccountsEntriesWithFilesShared: async (id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAccountsEntriesWithFilesShared', 'id', id)

            const localVarPath = `/api/2.0/accounts/file/{id}/search`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (includeShared !== undefined) {
                localVarQueryParameter['includeShared'] = includeShared;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns the account entries with their sharing settings in a folder with the ID specified in request.
         * @summary Get account entries with folder sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the account sharing settings from the response.
         * @param {boolean} [includeShared] Specifies whether to include the account sharing settings in the response.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The area of the account entries.
         * @param {Array<EmployeeType>} [employeeTypes] The list of the user types.
         * @param {number} [count] The number of items to retrieve in a request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {string} [filterSeparator] Specifies the separator used in filter expressions.
         * @param {string} [filterValue] The text filter applied to the accounts search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountsEntriesWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-folders-shared/
         */
        getAccountsEntriesWithFoldersShared: async (id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAccountsEntriesWithFoldersShared', 'id', id)

            const localVarPath = `/api/2.0/accounts/folder/{id}/search`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (includeShared !== undefined) {
                localVarQueryParameter['includeShared'] = includeShared;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns the account entries with their sharing settings in a room with the ID specified in request.
         * @summary Get account entries
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the account sharing settings from the response.
         * @param {boolean} [includeShared] Specifies whether to include the account sharing settings in the response.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The area of the account entries.
         * @param {Array<EmployeeType>} [employeeTypes] The list of the user types.
         * @param {number} [count] The number of items to retrieve in a request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {string} [filterSeparator] Specifies the separator used in filter expressions.
         * @param {string} [filterValue] The text filter applied to the accounts search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountsEntriesWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-rooms-shared/
         */
        getAccountsEntriesWithRoomsShared: async (id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAccountsEntriesWithRoomsShared', 'id', id)

            const localVarPath = `/api/2.0/accounts/room/{id}/search`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (includeShared !== undefined) {
                localVarQueryParameter['includeShared'] = includeShared;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns a list of users matching the search query.
         * @summary Search users
         * @param {string} query The search query.
         * @param {string} [filterBy] Specifies a filter criteria for the user search query.
         * @param {string} [filterValue] The value used for filtering users, allowing additional constraints for the query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSearch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-search/
         */
        getSearch: async (query: string, filterBy?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'query' is not null or undefined
            assertParamExists('getSearch', 'query', query)

            const localVarPath = `/api/2.0/people/@search/{query}`
                .replace(`{${"query"}}`, encodeURIComponent(String(query)));
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
         * Returns a list of users matching the parameters specified in the request.
         * @summary Search users by extended filter
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {string} [groupId] The group ID.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {EmployeeType} [employeeType] The user type.
         * @param {Array<GetSimpleByFilterEmployeeTypesEnum>} [employeeTypes] The list of user types.
         * @param {boolean} [isAdministrator] Specifies if the user is an administrator or not.
         * @param {Payments} [payments] The user payment status.
         * @param {AccountLoginType} [accountLoginType] The account login type.
         * @param {QuotaFilter} [quotaFilter] The quota filter (All - 0, Default - 1, Custom - 2).
         * @param {boolean} [withoutGroup] Specifies whether the user should be a member of a group or not.
         * @param {boolean} [excludeGroup] Specifies whether the user should be a member of the group with the specified ID.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The filter area.
         * @param {number} [count] The maximum number of items to be retrieved in the response.
         * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] Represents the separator used to split filter criteria in query parameters.
         * @param {string} [filterValue] The search text used to filter results based on user input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSimpleByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-simple-by-filter/
         */
        getSimpleByFilter: async (employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<GetSimpleByFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/simple/filter`;
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (employeeType !== undefined) {
                localVarQueryParameter['employeeType'] = employeeType;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (isAdministrator !== undefined) {
                localVarQueryParameter['isAdministrator'] = isAdministrator;
            }

            if (payments !== undefined) {
                localVarQueryParameter['payments'] = payments;
            }

            if (accountLoginType !== undefined) {
                localVarQueryParameter['accountLoginType'] = accountLoginType;
            }

            if (quotaFilter !== undefined) {
                localVarQueryParameter['quotaFilter'] = quotaFilter;
            }

            if (withoutGroup !== undefined) {
                localVarQueryParameter['withoutGroup'] = withoutGroup;
            }

            if (excludeGroup !== undefined) {
                localVarQueryParameter['excludeGroup'] = excludeGroup;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
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


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * Returns the users with the sharing settings in a file with the ID specified in request.
         * @summary Get users with file sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the user sharing settings or not.
         * @param {boolean} [includeShared] Specifies whether to include the user sharing settings or not.
         * @param {boolean} [invitedByMe] Specifies whether the user was invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The user area.
         * @param {Array<EmployeeType>} [employeeTypes] The list of user types.
         * @param {number} [count] The maximum number of users to be retrieved in the request.
         * @param {number} [startIndex] The zero-based index of the first record to retrieve in a paged query.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The filter text value used for searching or filtering user results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUsersWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-files-shared/
         */
        getUsersWithFilesShared: async (id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUsersWithFilesShared', 'id', id)

            const localVarPath = `/api/2.0/people/file/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (includeShared !== undefined) {
                localVarQueryParameter['includeShared'] = includeShared;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns the users with the sharing settings in a folder with the ID specified in request.
         * @summary Get users with folder sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the user sharing settings or not.
         * @param {boolean} [includeShared] Specifies whether to include the user sharing settings or not.
         * @param {boolean} [invitedByMe] Specifies whether the user was invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The user area.
         * @param {Array<EmployeeType>} [employeeTypes] The list of user types.
         * @param {number} [count] The maximum number of users to be retrieved in the request.
         * @param {number} [startIndex] The zero-based index of the first record to retrieve in a paged query.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The filter text value used for searching or filtering user results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUsersWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-folders-shared/
         */
        getUsersWithFoldersShared: async (id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUsersWithFoldersShared', 'id', id)

            const localVarPath = `/api/2.0/people/folder/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (includeShared !== undefined) {
                localVarQueryParameter['includeShared'] = includeShared;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns the users with the sharing settings in a room with the ID specified in request.
         * @summary Get users with room sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the user sharing settings or not.
         * @param {boolean} [includeShared] Specifies whether to include the user sharing settings or not.
         * @param {boolean} [invitedByMe] Specifies whether the user was invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The user area.
         * @param {Array<EmployeeType>} [employeeTypes] The list of user types.
         * @param {number} [count] The maximum number of users to be retrieved in the request.
         * @param {number} [startIndex] The zero-based index of the first record to retrieve in a paged query.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The filter text value used for searching or filtering user results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUsersWithRoomShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-room-shared/
         */
        getUsersWithRoomShared: async (id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUsersWithRoomShared', 'id', id)

            const localVarPath = `/api/2.0/people/room/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (includeShared !== undefined) {
                localVarQueryParameter['includeShared'] = includeShared;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns a list of users with full information about them matching the parameters specified in the request.
         * @summary Search users with detailed information by extended filter
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {string} [groupId] The group ID.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {EmployeeType} [employeeType] The user type.
         * @param {Array<SearchUsersByExtendedFilterEmployeeTypesEnum>} [employeeTypes] The list of user types.
         * @param {boolean} [isAdministrator] Specifies if the user is an administrator or not.
         * @param {Payments} [payments] The user payment status.
         * @param {AccountLoginType} [accountLoginType] The account login type.
         * @param {QuotaFilter} [quotaFilter] The quota filter (All - 0, Default - 1, Custom - 2).
         * @param {boolean} [withoutGroup] Specifies whether the user should be a member of a group or not.
         * @param {boolean} [excludeGroup] Specifies whether the user should be a member of the group with the specified ID.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The filter area.
         * @param {number} [count] The maximum number of items to be retrieved in the response.
         * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] Represents the separator used to split filter criteria in query parameters.
         * @param {string} [filterValue] The search text used to filter results based on user input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for searchUsersByExtendedFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-extended-filter/
         */
        searchUsersByExtendedFilter: async (employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<SearchUsersByExtendedFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/filter`;
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

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
            }

            if (activationStatus !== undefined) {
                localVarQueryParameter['activationStatus'] = activationStatus;
            }

            if (employeeType !== undefined) {
                localVarQueryParameter['employeeType'] = employeeType;
            }

            if (employeeTypes) {
                localVarQueryParameter['employeeTypes'] = employeeTypes;
            }

            if (isAdministrator !== undefined) {
                localVarQueryParameter['isAdministrator'] = isAdministrator;
            }

            if (payments !== undefined) {
                localVarQueryParameter['payments'] = payments;
            }

            if (accountLoginType !== undefined) {
                localVarQueryParameter['accountLoginType'] = accountLoginType;
            }

            if (quotaFilter !== undefined) {
                localVarQueryParameter['quotaFilter'] = quotaFilter;
            }

            if (withoutGroup !== undefined) {
                localVarQueryParameter['withoutGroup'] = withoutGroup;
            }

            if (excludeGroup !== undefined) {
                localVarQueryParameter['excludeGroup'] = excludeGroup;
            }

            if (invitedByMe !== undefined) {
                localVarQueryParameter['invitedByMe'] = invitedByMe;
            }

            if (inviterId !== undefined) {
                localVarQueryParameter['inviterId'] = inviterId;
            }

            if (area !== undefined) {
                localVarQueryParameter['area'] = area;
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


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * Returns a list of users matching the search query. This method uses the query parameters.
         * @summary Search users (using query parameters)
         * @param {string} [query] The search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for searchUsersByQuery operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-query/
         */
        searchUsersByQuery: async (query?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/search`;
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

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
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
         * Returns a list of users matching the status filter and search query.
         * @summary Search users by status filter
         * @param {EmployeeStatus} status The user status.
         * @param {string} [query] The advanced search query.
         * @param {string} [filterBy] Specifies the criteria used to filter search results in advanced queries.
         * @param {string} [filterValue] The value used to filter the search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for searchUsersByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-status/
         */
        searchUsersByStatus: async (status: EmployeeStatus, query?: string, filterBy?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'status' is not null or undefined
            assertParamExists('searchUsersByStatus', 'status', status)

            const localVarPath = `/api/2.0/people/status/{status}/search`
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

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            if (filterBy !== undefined) {
                localVarQueryParameter['filterBy'] = filterBy;
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
    }
};

/**
 * PeopleSearchApi - functional programming interface
 * @export
 */
export const PeopleSearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleSearchApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the account entries with their sharing settings for a file with the ID specified in request.
         * @summary Get account entries with file sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the account sharing settings from the response.
         * @param {boolean} [includeShared] Specifies whether to include the account sharing settings in the response.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The area of the account entries.
         * @param {Array<EmployeeType>} [employeeTypes] The list of the user types.
         * @param {number} [count] The number of items to retrieve in a request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {string} [filterSeparator] Specifies the separator used in filter expressions.
         * @param {string} [filterValue] The text filter applied to the accounts search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountsEntriesWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-files-shared/
         */
        async getAccountsEntriesWithFilesShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountsEntriesWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getAccountsEntriesWithFilesShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the account entries with their sharing settings in a folder with the ID specified in request.
         * @summary Get account entries with folder sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the account sharing settings from the response.
         * @param {boolean} [includeShared] Specifies whether to include the account sharing settings in the response.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The area of the account entries.
         * @param {Array<EmployeeType>} [employeeTypes] The list of the user types.
         * @param {number} [count] The number of items to retrieve in a request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {string} [filterSeparator] Specifies the separator used in filter expressions.
         * @param {string} [filterValue] The text filter applied to the accounts search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountsEntriesWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-folders-shared/
         */
        async getAccountsEntriesWithFoldersShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountsEntriesWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getAccountsEntriesWithFoldersShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the account entries with their sharing settings in a room with the ID specified in request.
         * @summary Get account entries
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the account sharing settings from the response.
         * @param {boolean} [includeShared] Specifies whether to include the account sharing settings in the response.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The area of the account entries.
         * @param {Array<EmployeeType>} [employeeTypes] The list of the user types.
         * @param {number} [count] The number of items to retrieve in a request.
         * @param {number} [startIndex] The starting index for the query results.
         * @param {string} [filterSeparator] Specifies the separator used in filter expressions.
         * @param {string} [filterValue] The text filter applied to the accounts search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountsEntriesWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-rooms-shared/
         */
        async getAccountsEntriesWithRoomsShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountsEntriesWithRoomsShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getAccountsEntriesWithRoomsShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users matching the search query.
         * @summary Search users
         * @param {string} query The search query.
         * @param {string} [filterBy] Specifies a filter criteria for the user search query.
         * @param {string} [filterValue] The value used for filtering users, allowing additional constraints for the query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSearch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-search/
         */
        async getSearch(query: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSearch(query, filterBy, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getSearch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users matching the parameters specified in the request.
         * @summary Search users by extended filter
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {string} [groupId] The group ID.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {EmployeeType} [employeeType] The user type.
         * @param {Array<GetSimpleByFilterEmployeeTypesEnum>} [employeeTypes] The list of user types.
         * @param {boolean} [isAdministrator] Specifies if the user is an administrator or not.
         * @param {Payments} [payments] The user payment status.
         * @param {AccountLoginType} [accountLoginType] The account login type.
         * @param {QuotaFilter} [quotaFilter] The quota filter (All - 0, Default - 1, Custom - 2).
         * @param {boolean} [withoutGroup] Specifies whether the user should be a member of a group or not.
         * @param {boolean} [excludeGroup] Specifies whether the user should be a member of the group with the specified ID.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The filter area.
         * @param {number} [count] The maximum number of items to be retrieved in the response.
         * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] Represents the separator used to split filter criteria in query parameters.
         * @param {string} [filterValue] The search text used to filter results based on user input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSimpleByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-simple-by-filter/
         */
        async getSimpleByFilter(employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<GetSimpleByFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSimpleByFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getSimpleByFilter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the users with the sharing settings in a file with the ID specified in request.
         * @summary Get users with file sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the user sharing settings or not.
         * @param {boolean} [includeShared] Specifies whether to include the user sharing settings or not.
         * @param {boolean} [invitedByMe] Specifies whether the user was invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The user area.
         * @param {Array<EmployeeType>} [employeeTypes] The list of user types.
         * @param {number} [count] The maximum number of users to be retrieved in the request.
         * @param {number} [startIndex] The zero-based index of the first record to retrieve in a paged query.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The filter text value used for searching or filtering user results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUsersWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-files-shared/
         */
        async getUsersWithFilesShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsersWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getUsersWithFilesShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the users with the sharing settings in a folder with the ID specified in request.
         * @summary Get users with folder sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the user sharing settings or not.
         * @param {boolean} [includeShared] Specifies whether to include the user sharing settings or not.
         * @param {boolean} [invitedByMe] Specifies whether the user was invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The user area.
         * @param {Array<EmployeeType>} [employeeTypes] The list of user types.
         * @param {number} [count] The maximum number of users to be retrieved in the request.
         * @param {number} [startIndex] The zero-based index of the first record to retrieve in a paged query.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The filter text value used for searching or filtering user results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUsersWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-folders-shared/
         */
        async getUsersWithFoldersShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsersWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getUsersWithFoldersShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the users with the sharing settings in a room with the ID specified in request.
         * @summary Get users with room sharing settings
         * @param {number} id The user ID.
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {boolean} [excludeShared] Specifies whether to exclude the user sharing settings or not.
         * @param {boolean} [includeShared] Specifies whether to include the user sharing settings or not.
         * @param {boolean} [invitedByMe] Specifies whether the user was invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The user area.
         * @param {Array<EmployeeType>} [employeeTypes] The list of user types.
         * @param {number} [count] The maximum number of users to be retrieved in the request.
         * @param {number} [startIndex] The zero-based index of the first record to retrieve in a paged query.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The filter text value used for searching or filtering user results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUsersWithRoomShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-room-shared/
         */
        async getUsersWithRoomShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsersWithRoomShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.getUsersWithRoomShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users with full information about them matching the parameters specified in the request.
         * @summary Search users with detailed information by extended filter
         * @param {EmployeeStatus} [employeeStatus] The user status.
         * @param {string} [groupId] The group ID.
         * @param {EmployeeActivationStatus} [activationStatus] The user activation status.
         * @param {EmployeeType} [employeeType] The user type.
         * @param {Array<SearchUsersByExtendedFilterEmployeeTypesEnum>} [employeeTypes] The list of user types.
         * @param {boolean} [isAdministrator] Specifies if the user is an administrator or not.
         * @param {Payments} [payments] The user payment status.
         * @param {AccountLoginType} [accountLoginType] The account login type.
         * @param {QuotaFilter} [quotaFilter] The quota filter (All - 0, Default - 1, Custom - 2).
         * @param {boolean} [withoutGroup] Specifies whether the user should be a member of a group or not.
         * @param {boolean} [excludeGroup] Specifies whether the user should be a member of the group with the specified ID.
         * @param {boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
         * @param {string} [inviterId] The inviter ID.
         * @param {Area} [area] The filter area.
         * @param {number} [count] The maximum number of items to be retrieved in the response.
         * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] Represents the separator used to split filter criteria in query parameters.
         * @param {string} [filterValue] The search text used to filter results based on user input.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for searchUsersByExtendedFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-extended-filter/
         */
        async searchUsersByExtendedFilter(employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<SearchUsersByExtendedFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchUsersByExtendedFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.searchUsersByExtendedFilter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users matching the search query. This method uses the query parameters.
         * @summary Search users (using query parameters)
         * @param {string} [query] The search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for searchUsersByQuery operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-query/
         */
        async searchUsersByQuery(query?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchUsersByQuery(query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.searchUsersByQuery']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of users matching the status filter and search query.
         * @summary Search users by status filter
         * @param {EmployeeStatus} status The user status.
         * @param {string} [query] The advanced search query.
         * @param {string} [filterBy] Specifies the criteria used to filter search results in advanced queries.
         * @param {string} [filterValue] The value used to filter the search query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for searchUsersByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-status/
         */
        async searchUsersByStatus(status: EmployeeStatus, query?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchUsersByStatus(status, query, filterBy, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleSearchApi.searchUsersByStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleSearchApi - factory interface
 * @export
 */
export const PeopleSearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleSearchApiFp(configuration)
    return {
        /**
         * Returns the account entries with their sharing settings for a file with the ID specified in request.
         * @summary Get account entries with file sharing settings
         * @param {PeopleSearchApiGetAccountsEntriesWithFilesSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAccountsEntriesWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-files-shared/
         * @throws {RequiredError}
         */
        getAccountsEntriesWithFilesShared(requestParameters: PeopleSearchApiGetAccountsEntriesWithFilesSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getAccountsEntriesWithFilesShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the account entries with their sharing settings in a folder with the ID specified in request.
         * @summary Get account entries with folder sharing settings
         * @param {PeopleSearchApiGetAccountsEntriesWithFoldersSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAccountsEntriesWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-folders-shared/
         * @throws {RequiredError}
         */
        getAccountsEntriesWithFoldersShared(requestParameters: PeopleSearchApiGetAccountsEntriesWithFoldersSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getAccountsEntriesWithFoldersShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the account entries with their sharing settings in a room with the ID specified in request.
         * @summary Get account entries
         * @param {PeopleSearchApiGetAccountsEntriesWithRoomsSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAccountsEntriesWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-rooms-shared/
         * @throws {RequiredError}
         */
        getAccountsEntriesWithRoomsShared(requestParameters: PeopleSearchApiGetAccountsEntriesWithRoomsSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getAccountsEntriesWithRoomsShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users matching the search query.
         * @summary Search users
         * @param {PeopleSearchApiGetSearchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSearch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-search/
         * @throws {RequiredError}
         */
        getSearch(requestParameters: PeopleSearchApiGetSearchRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getSearch(requestParameters.query, requestParameters.filterBy, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users matching the parameters specified in the request.
         * @summary Search users by extended filter
         * @param {PeopleSearchApiGetSimpleByFilterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSimpleByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-simple-by-filter/
         * @throws {RequiredError}
         */
        getSimpleByFilter(requestParameters: PeopleSearchApiGetSimpleByFilterRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.getSimpleByFilter(requestParameters.employeeStatus, requestParameters.groupId, requestParameters.activationStatus, requestParameters.employeeType, requestParameters.employeeTypes, requestParameters.isAdministrator, requestParameters.payments, requestParameters.accountLoginType, requestParameters.quotaFilter, requestParameters.withoutGroup, requestParameters.excludeGroup, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the users with the sharing settings in a file with the ID specified in request.
         * @summary Get users with file sharing settings
         * @param {PeopleSearchApiGetUsersWithFilesSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUsersWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-files-shared/
         * @throws {RequiredError}
         */
        getUsersWithFilesShared(requestParameters: PeopleSearchApiGetUsersWithFilesSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getUsersWithFilesShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the users with the sharing settings in a folder with the ID specified in request.
         * @summary Get users with folder sharing settings
         * @param {PeopleSearchApiGetUsersWithFoldersSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUsersWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-folders-shared/
         * @throws {RequiredError}
         */
        getUsersWithFoldersShared(requestParameters: PeopleSearchApiGetUsersWithFoldersSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getUsersWithFoldersShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the users with the sharing settings in a room with the ID specified in request.
         * @summary Get users with room sharing settings
         * @param {PeopleSearchApiGetUsersWithRoomSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUsersWithRoomShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-room-shared/
         * @throws {RequiredError}
         */
        getUsersWithRoomShared(requestParameters: PeopleSearchApiGetUsersWithRoomSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getUsersWithRoomShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users with full information about them matching the parameters specified in the request.
         * @summary Search users with detailed information by extended filter
         * @param {PeopleSearchApiSearchUsersByExtendedFilterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for searchUsersByExtendedFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-extended-filter/
         * @throws {RequiredError}
         */
        searchUsersByExtendedFilter(requestParameters: PeopleSearchApiSearchUsersByExtendedFilterRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.searchUsersByExtendedFilter(requestParameters.employeeStatus, requestParameters.groupId, requestParameters.activationStatus, requestParameters.employeeType, requestParameters.employeeTypes, requestParameters.isAdministrator, requestParameters.payments, requestParameters.accountLoginType, requestParameters.quotaFilter, requestParameters.withoutGroup, requestParameters.excludeGroup, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users matching the search query. This method uses the query parameters.
         * @summary Search users (using query parameters)
         * @param {PeopleSearchApiSearchUsersByQueryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for searchUsersByQuery operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-query/
         * @throws {RequiredError}
         */
        searchUsersByQuery(requestParameters: PeopleSearchApiSearchUsersByQueryRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.searchUsersByQuery(requestParameters.query, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users matching the status filter and search query.
         * @summary Search users by status filter
         * @param {PeopleSearchApiSearchUsersByStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for searchUsersByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-status/
         * @throws {RequiredError}
         */
        searchUsersByStatus(requestParameters: PeopleSearchApiSearchUsersByStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.searchUsersByStatus(requestParameters.status, requestParameters.query, requestParameters.filterBy, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAccountsEntriesWithFilesShared operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetAccountsEntriesWithFilesSharedRequest
 */
export interface PeopleSearchApiGetAccountsEntriesWithFilesSharedRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly id: number

    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * Specifies whether to exclude the account sharing settings from the response.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly excludeShared?: boolean

    /**
     * Specifies whether to include the account sharing settings in the response.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly includeShared?: boolean

    /**
     * Specifies whether the user is invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly inviterId?: string

    /**
     * The area of the account entries.
     * @type {Area}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly area?: Area

    /**
     * The list of the user types.
     * @type {Array<EmployeeType>}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly employeeTypes?: Array<EmployeeType>

    /**
     * The number of items to retrieve in a request.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly count?: number

    /**
     * The starting index for the query results.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly startIndex?: number

    /**
     * Specifies the separator used in filter expressions.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly filterSeparator?: string

    /**
     * The text filter applied to the accounts search query.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFilesShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getAccountsEntriesWithFoldersShared operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetAccountsEntriesWithFoldersSharedRequest
 */
export interface PeopleSearchApiGetAccountsEntriesWithFoldersSharedRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly id: number

    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * Specifies whether to exclude the account sharing settings from the response.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly excludeShared?: boolean

    /**
     * Specifies whether to include the account sharing settings in the response.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly includeShared?: boolean

    /**
     * Specifies whether the user is invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly inviterId?: string

    /**
     * The area of the account entries.
     * @type {Area}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly area?: Area

    /**
     * The list of the user types.
     * @type {Array<EmployeeType>}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly employeeTypes?: Array<EmployeeType>

    /**
     * The number of items to retrieve in a request.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly count?: number

    /**
     * The starting index for the query results.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly startIndex?: number

    /**
     * Specifies the separator used in filter expressions.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly filterSeparator?: string

    /**
     * The text filter applied to the accounts search query.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithFoldersShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getAccountsEntriesWithRoomsShared operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetAccountsEntriesWithRoomsSharedRequest
 */
export interface PeopleSearchApiGetAccountsEntriesWithRoomsSharedRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly id: number

    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * Specifies whether to exclude the account sharing settings from the response.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly excludeShared?: boolean

    /**
     * Specifies whether to include the account sharing settings in the response.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly includeShared?: boolean

    /**
     * Specifies whether the user is invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly inviterId?: string

    /**
     * The area of the account entries.
     * @type {Area}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly area?: Area

    /**
     * The list of the user types.
     * @type {Array<EmployeeType>}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly employeeTypes?: Array<EmployeeType>

    /**
     * The number of items to retrieve in a request.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly count?: number

    /**
     * The starting index for the query results.
     * @type {number}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly startIndex?: number

    /**
     * Specifies the separator used in filter expressions.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly filterSeparator?: string

    /**
     * The text filter applied to the accounts search query.
     * @type {string}
     * @memberof PeopleSearchApiGetAccountsEntriesWithRoomsShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getSearch operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetSearchRequest
 */
export interface PeopleSearchApiGetSearchRequest {
    /**
     * The search query.
     * @type {string}
     * @memberof PeopleSearchApiGetSearch
     */
    readonly query: string

    /**
     * Specifies a filter criteria for the user search query.
     * @type {string}
     * @memberof PeopleSearchApiGetSearch
     */
    readonly filterBy?: string

    /**
     * The value used for filtering users, allowing additional constraints for the query.
     * @type {string}
     * @memberof PeopleSearchApiGetSearch
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getSimpleByFilter operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetSimpleByFilterRequest
 */
export interface PeopleSearchApiGetSimpleByFilterRequest {
    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The group ID.
     * @type {string}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly groupId?: string

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * The user type.
     * @type {EmployeeType}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly employeeType?: EmployeeType

    /**
     * The list of user types.
     * @type {Array<0 | 1 | 2 | 3 | 4>}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly employeeTypes?: Array<GetSimpleByFilterEmployeeTypesEnum>

    /**
     * Specifies if the user is an administrator or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly isAdministrator?: boolean

    /**
     * The user payment status.
     * @type {Payments}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly payments?: Payments

    /**
     * The account login type.
     * @type {AccountLoginType}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly accountLoginType?: AccountLoginType

    /**
     * The quota filter (All - 0, Default - 1, Custom - 2).
     * @type {QuotaFilter}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly quotaFilter?: QuotaFilter

    /**
     * Specifies whether the user should be a member of a group or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly withoutGroup?: boolean

    /**
     * Specifies whether the user should be a member of the group with the specified ID.
     * @type {boolean}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly excludeGroup?: boolean

    /**
     * Specifies whether the user is invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly inviterId?: string

    /**
     * The filter area.
     * @type {Area}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly area?: Area

    /**
     * The maximum number of items to be retrieved in the response.
     * @type {number}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly count?: number

    /**
     * The zero-based index of the first item to be retrieved in a filtered result set.
     * @type {number}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly startIndex?: number

    /**
     * Specifies the property or field name by which the results should be sorted.
     * @type {string}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly sortOrder?: SortOrder

    /**
     * Represents the separator used to split filter criteria in query parameters.
     * @type {string}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly filterSeparator?: string

    /**
     * The search text used to filter results based on user input.
     * @type {string}
     * @memberof PeopleSearchApiGetSimpleByFilter
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getUsersWithFilesShared operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetUsersWithFilesSharedRequest
 */
export interface PeopleSearchApiGetUsersWithFilesSharedRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly id: number

    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * Specifies whether to exclude the user sharing settings or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly excludeShared?: boolean

    /**
     * Specifies whether to include the user sharing settings or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly includeShared?: boolean

    /**
     * Specifies whether the user was invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly inviterId?: string

    /**
     * The user area.
     * @type {Area}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly area?: Area

    /**
     * The list of user types.
     * @type {Array<EmployeeType>}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly employeeTypes?: Array<EmployeeType>

    /**
     * The maximum number of users to be retrieved in the request.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly count?: number

    /**
     * The zero-based index of the first record to retrieve in a paged query.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly startIndex?: number

    /**
     * The character or string used to separate multiple filter values in a filtering query.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly filterSeparator?: string

    /**
     * The filter text value used for searching or filtering user results.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithFilesShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getUsersWithFoldersShared operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetUsersWithFoldersSharedRequest
 */
export interface PeopleSearchApiGetUsersWithFoldersSharedRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly id: number

    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * Specifies whether to exclude the user sharing settings or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly excludeShared?: boolean

    /**
     * Specifies whether to include the user sharing settings or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly includeShared?: boolean

    /**
     * Specifies whether the user was invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly inviterId?: string

    /**
     * The user area.
     * @type {Area}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly area?: Area

    /**
     * The list of user types.
     * @type {Array<EmployeeType>}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly employeeTypes?: Array<EmployeeType>

    /**
     * The maximum number of users to be retrieved in the request.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly count?: number

    /**
     * The zero-based index of the first record to retrieve in a paged query.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly startIndex?: number

    /**
     * The character or string used to separate multiple filter values in a filtering query.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly filterSeparator?: string

    /**
     * The filter text value used for searching or filtering user results.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithFoldersShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getUsersWithRoomShared operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiGetUsersWithRoomSharedRequest
 */
export interface PeopleSearchApiGetUsersWithRoomSharedRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly id: number

    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * Specifies whether to exclude the user sharing settings or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly excludeShared?: boolean

    /**
     * Specifies whether to include the user sharing settings or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly includeShared?: boolean

    /**
     * Specifies whether the user was invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly inviterId?: string

    /**
     * The user area.
     * @type {Area}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly area?: Area

    /**
     * The list of user types.
     * @type {Array<EmployeeType>}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly employeeTypes?: Array<EmployeeType>

    /**
     * The maximum number of users to be retrieved in the request.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly count?: number

    /**
     * The zero-based index of the first record to retrieve in a paged query.
     * @type {number}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly startIndex?: number

    /**
     * The character or string used to separate multiple filter values in a filtering query.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly filterSeparator?: string

    /**
     * The filter text value used for searching or filtering user results.
     * @type {string}
     * @memberof PeopleSearchApiGetUsersWithRoomShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for searchUsersByExtendedFilter operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiSearchUsersByExtendedFilterRequest
 */
export interface PeopleSearchApiSearchUsersByExtendedFilterRequest {
    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly employeeStatus?: EmployeeStatus

    /**
     * The group ID.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly groupId?: string

    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly activationStatus?: EmployeeActivationStatus

    /**
     * The user type.
     * @type {EmployeeType}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly employeeType?: EmployeeType

    /**
     * The list of user types.
     * @type {Array<0 | 1 | 2 | 3 | 4>}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly employeeTypes?: Array<SearchUsersByExtendedFilterEmployeeTypesEnum>

    /**
     * Specifies if the user is an administrator or not.
     * @type {boolean}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly isAdministrator?: boolean

    /**
     * The user payment status.
     * @type {Payments}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly payments?: Payments

    /**
     * The account login type.
     * @type {AccountLoginType}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly accountLoginType?: AccountLoginType

    /**
     * The quota filter (All - 0, Default - 1, Custom - 2).
     * @type {QuotaFilter}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly quotaFilter?: QuotaFilter

    /**
     * Specifies whether the user should be a member of a group or not.
     * @type {boolean}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly withoutGroup?: boolean

    /**
     * Specifies whether the user should be a member of the group with the specified ID.
     * @type {boolean}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly excludeGroup?: boolean

    /**
     * Specifies whether the user is invited by the current user or not.
     * @type {boolean}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly invitedByMe?: boolean

    /**
     * The inviter ID.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly inviterId?: string

    /**
     * The filter area.
     * @type {Area}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly area?: Area

    /**
     * The maximum number of items to be retrieved in the response.
     * @type {number}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly count?: number

    /**
     * The zero-based index of the first item to be retrieved in a filtered result set.
     * @type {number}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly startIndex?: number

    /**
     * Specifies the property or field name by which the results should be sorted.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly sortOrder?: SortOrder

    /**
     * Represents the separator used to split filter criteria in query parameters.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly filterSeparator?: string

    /**
     * The search text used to filter results based on user input.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByExtendedFilter
     */
    readonly filterValue?: string
}

/**
 * Request parameters for searchUsersByQuery operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiSearchUsersByQueryRequest
 */
export interface PeopleSearchApiSearchUsersByQueryRequest {
    /**
     * The search query.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByQuery
     */
    readonly query?: string
}

/**
 * Request parameters for searchUsersByStatus operation in PeopleSearchApi.
 * @export
 * @interface PeopleSearchApiSearchUsersByStatusRequest
 */
export interface PeopleSearchApiSearchUsersByStatusRequest {
    /**
     * The user status.
     * @type {EmployeeStatus}
     * @memberof PeopleSearchApiSearchUsersByStatus
     */
    readonly status: EmployeeStatus

    /**
     * The advanced search query.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByStatus
     */
    readonly query?: string

    /**
     * Specifies the criteria used to filter search results in advanced queries.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByStatus
     */
    readonly filterBy?: string

    /**
     * The value used to filter the search query.
     * @type {string}
     * @memberof PeopleSearchApiSearchUsersByStatus
     */
    readonly filterValue?: string
}

/**
 * PeopleSearchApi - object-oriented interface
 * @export
 * @class PeopleSearchApi
 * @extends {BaseAPI}
 */
export class PeopleSearchApi extends BaseAPI {
    /**
     * Returns the account entries with their sharing settings for a file with the ID specified in request.
     * @summary Get account entries with file sharing settings
     * @param {PeopleSearchApiGetAccountsEntriesWithFilesSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getAccountsEntriesWithFilesShared(requestParameters: PeopleSearchApiGetAccountsEntriesWithFilesSharedRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getAccountsEntriesWithFilesShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the account entries with their sharing settings in a folder with the ID specified in request.
     * @summary Get account entries with folder sharing settings
     * @param {PeopleSearchApiGetAccountsEntriesWithFoldersSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getAccountsEntriesWithFoldersShared(requestParameters: PeopleSearchApiGetAccountsEntriesWithFoldersSharedRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getAccountsEntriesWithFoldersShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the account entries with their sharing settings in a room with the ID specified in request.
     * @summary Get account entries
     * @param {PeopleSearchApiGetAccountsEntriesWithRoomsSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getAccountsEntriesWithRoomsShared(requestParameters: PeopleSearchApiGetAccountsEntriesWithRoomsSharedRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getAccountsEntriesWithRoomsShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users matching the search query.
     * @summary Search users
     * @param {PeopleSearchApiGetSearchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getSearch(requestParameters: PeopleSearchApiGetSearchRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getSearch(requestParameters.query, requestParameters.filterBy, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users matching the parameters specified in the request.
     * @summary Search users by extended filter
     * @param {PeopleSearchApiGetSimpleByFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getSimpleByFilter(requestParameters: PeopleSearchApiGetSimpleByFilterRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getSimpleByFilter(requestParameters.employeeStatus, requestParameters.groupId, requestParameters.activationStatus, requestParameters.employeeType, requestParameters.employeeTypes, requestParameters.isAdministrator, requestParameters.payments, requestParameters.accountLoginType, requestParameters.quotaFilter, requestParameters.withoutGroup, requestParameters.excludeGroup, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the users with the sharing settings in a file with the ID specified in request.
     * @summary Get users with file sharing settings
     * @param {PeopleSearchApiGetUsersWithFilesSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getUsersWithFilesShared(requestParameters: PeopleSearchApiGetUsersWithFilesSharedRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getUsersWithFilesShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the users with the sharing settings in a folder with the ID specified in request.
     * @summary Get users with folder sharing settings
     * @param {PeopleSearchApiGetUsersWithFoldersSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getUsersWithFoldersShared(requestParameters: PeopleSearchApiGetUsersWithFoldersSharedRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getUsersWithFoldersShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the users with the sharing settings in a room with the ID specified in request.
     * @summary Get users with room sharing settings
     * @param {PeopleSearchApiGetUsersWithRoomSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getUsersWithRoomShared(requestParameters: PeopleSearchApiGetUsersWithRoomSharedRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getUsersWithRoomShared(requestParameters.id, requestParameters.employeeStatus, requestParameters.activationStatus, requestParameters.excludeShared, requestParameters.includeShared, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.employeeTypes, requestParameters.count, requestParameters.startIndex, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users with full information about them matching the parameters specified in the request.
     * @summary Search users with detailed information by extended filter
     * @param {PeopleSearchApiSearchUsersByExtendedFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public searchUsersByExtendedFilter(requestParameters: PeopleSearchApiSearchUsersByExtendedFilterRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).searchUsersByExtendedFilter(requestParameters.employeeStatus, requestParameters.groupId, requestParameters.activationStatus, requestParameters.employeeType, requestParameters.employeeTypes, requestParameters.isAdministrator, requestParameters.payments, requestParameters.accountLoginType, requestParameters.quotaFilter, requestParameters.withoutGroup, requestParameters.excludeGroup, requestParameters.invitedByMe, requestParameters.inviterId, requestParameters.area, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users matching the search query. This method uses the query parameters.
     * @summary Search users (using query parameters)
     * @param {PeopleSearchApiSearchUsersByQueryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public searchUsersByQuery(requestParameters: PeopleSearchApiSearchUsersByQueryRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).searchUsersByQuery(requestParameters.query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users matching the status filter and search query.
     * @summary Search users by status filter
     * @param {PeopleSearchApiSearchUsersByStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public searchUsersByStatus(requestParameters: PeopleSearchApiSearchUsersByStatusRequest, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).searchUsersByStatus(requestParameters.status, requestParameters.query, requestParameters.filterBy, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetSimpleByFilterEmployeeTypesEnum = {
    All: 0,
    RoomAdmin: 1,
    Guest: 2,
    DocSpaceAdmin: 3,
    User: 4
} as const;
export type GetSimpleByFilterEmployeeTypesEnum = typeof GetSimpleByFilterEmployeeTypesEnum[keyof typeof GetSimpleByFilterEmployeeTypesEnum];
/**
 * @export
 */
export const SearchUsersByExtendedFilterEmployeeTypesEnum = {
    All: 0,
    RoomAdmin: 1,
    Guest: 2,
    DocSpaceAdmin: 3,
    User: 4
} as const;
export type SearchUsersByExtendedFilterEmployeeTypesEnum = typeof SearchUsersByExtendedFilterEmployeeTypesEnum[keyof typeof SearchUsersByExtendedFilterEmployeeTypesEnum];
