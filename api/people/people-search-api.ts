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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
         * @summary Search users with detaailed information by extended filter
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
                localVarQueryParameter['employeeTypes'] = employeeTypes.join(COLLECTION_FORMATS.csv);
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
         * @summary Search users with detaailed information by extended filter
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
         * REST API Reference for getAccountsEntriesWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-files-shared/
         * @throws {RequiredError}
         */
        getAccountsEntriesWithFilesShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getAccountsEntriesWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getAccountsEntriesWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-folders-shared/
         * @throws {RequiredError}
         */
        getAccountsEntriesWithFoldersShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getAccountsEntriesWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getAccountsEntriesWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounts-entries-with-rooms-shared/
         * @throws {RequiredError}
         */
        getAccountsEntriesWithRoomsShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getAccountsEntriesWithRoomsShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users matching the search query.
         * @summary Search users
         * @param {string} query The search query.
         * @param {string} [filterBy] Specifies a filter criteria for the user search query.
         * @param {string} [filterValue] The value used for filtering users, allowing additional constraints for the query.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSearch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-search/
         * @throws {RequiredError}
         */
        getSearch(query: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getSearch(query, filterBy, filterValue, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getSimpleByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-simple-by-filter/
         * @throws {RequiredError}
         */
        getSimpleByFilter(employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<GetSimpleByFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.getSimpleByFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getUsersWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-files-shared/
         * @throws {RequiredError}
         */
        getUsersWithFilesShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getUsersWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getUsersWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-folders-shared/
         * @throws {RequiredError}
         */
        getUsersWithFoldersShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getUsersWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getUsersWithRoomShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-users-with-room-shared/
         * @throws {RequiredError}
         */
        getUsersWithRoomShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getUsersWithRoomShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users with full information about them matching the parameters specified in the request.
         * @summary Search users with detaailed information by extended filter
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
         * REST API Reference for searchUsersByExtendedFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-extended-filter/
         * @throws {RequiredError}
         */
        searchUsersByExtendedFilter(employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<SearchUsersByExtendedFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.searchUsersByExtendedFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users matching the search query. This method uses the query parameters.
         * @summary Search users (using query parameters)
         * @param {string} [query] The search query.
         * @param {*} [options] Override http request option.
         * REST API Reference for searchUsersByQuery operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-query/
         * @throws {RequiredError}
         */
        searchUsersByQuery(query?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.searchUsersByQuery(query, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users matching the status filter and search query.
         * @summary Search users by status filter
         * @param {EmployeeStatus} status The user status.
         * @param {string} [query] The advanced search query.
         * @param {string} [filterBy] Specifies the criteria used to filter search results in advanced queries.
         * @param {string} [filterValue] The value used to filter the search query.
         * @param {*} [options] Override http request option.
         * REST API Reference for searchUsersByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/search-users-by-status/
         * @throws {RequiredError}
         */
        searchUsersByStatus(status: EmployeeStatus, query?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.searchUsersByStatus(status, query, filterBy, filterValue, options).then((request) => request(axios, basePath));
        },
    };
};

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
     * @memberof PeopleSearchApi
     */
    public getAccountsEntriesWithFilesShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getAccountsEntriesWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof PeopleSearchApi
     */
    public getAccountsEntriesWithFoldersShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getAccountsEntriesWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof PeopleSearchApi
     */
    public getAccountsEntriesWithRoomsShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getAccountsEntriesWithRoomsShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users matching the search query.
     * @summary Search users
     * @param {string} query The search query.
     * @param {string} [filterBy] Specifies a filter criteria for the user search query.
     * @param {string} [filterValue] The value used for filtering users, allowing additional constraints for the query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public getSearch(query: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getSearch(query, filterBy, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof PeopleSearchApi
     */
    public getSimpleByFilter(employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<GetSimpleByFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getSimpleByFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof PeopleSearchApi
     */
    public getUsersWithFilesShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getUsersWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof PeopleSearchApi
     */
    public getUsersWithFoldersShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getUsersWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof PeopleSearchApi
     */
    public getUsersWithRoomShared(id: number, employeeStatus?: EmployeeStatus, activationStatus?: EmployeeActivationStatus, excludeShared?: boolean, includeShared?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, employeeTypes?: Array<EmployeeType>, count?: number, startIndex?: number, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).getUsersWithRoomShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users with full information about them matching the parameters specified in the request.
     * @summary Search users with detaailed information by extended filter
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
     * @memberof PeopleSearchApi
     */
    public searchUsersByExtendedFilter(employeeStatus?: EmployeeStatus, groupId?: string, activationStatus?: EmployeeActivationStatus, employeeType?: EmployeeType, employeeTypes?: Array<SearchUsersByExtendedFilterEmployeeTypesEnum>, isAdministrator?: boolean, payments?: Payments, accountLoginType?: AccountLoginType, quotaFilter?: QuotaFilter, withoutGroup?: boolean, excludeGroup?: boolean, invitedByMe?: boolean, inviterId?: string, area?: Area, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).searchUsersByExtendedFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users matching the search query. This method uses the query parameters.
     * @summary Search users (using query parameters)
     * @param {string} [query] The search query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public searchUsersByQuery(query?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).searchUsersByQuery(query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users matching the status filter and search query.
     * @summary Search users by status filter
     * @param {EmployeeStatus} status The user status.
     * @param {string} [query] The advanced search query.
     * @param {string} [filterBy] Specifies the criteria used to filter search results in advanced queries.
     * @param {string} [filterValue] The value used to filter the search query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSearchApi
     */
    public searchUsersByStatus(status: EmployeeStatus, query?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return PeopleSearchApiFp(this.configuration).searchUsersByStatus(status, query, filterBy, filterValue, options).then((request) => request(this.axios, this.basePath));
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
