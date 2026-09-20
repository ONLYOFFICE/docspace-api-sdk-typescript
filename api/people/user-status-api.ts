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
import type { EmployeeActivationStatus } from '../../models';
// @ts-ignore
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeStatus } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
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
         * Returns a page of the accounts that are in one particular state - the status is taken from the route - with  the full profile of each of them.  The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403.  The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports  the number of matches in the total count of the response.  Narrow it with `filterValue` on the name and the email; setting `filterBy` to `group` makes the same  `filterValue` the ID of the group to keep the members of, and because the value is then applied as the text  filter as well, that combination normally matches nothing - use `GET api/2.0/people/filter` with `groupId`  to filter by group.  `GET api/2.0/people` is the same operation fixed to the `Active` status.
         * @summary Get profiles by status
         * @param {EmployeeStatus} status The account state to list, taken from the route: `Active` for working accounts, `Terminated` for disabled  ones, `Pending` for open invitations, or `All` for every state.
         * @param {string} [filterBy] The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of.  Any other value, and omitting the field, applies no group filter.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is  reported in the total count of the response.
         * @param {string} [sortBy] What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`,  `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`.
         * @param {SortOrder} [sortOrder] The direction of the ordering: `Ascending`, which is the default, or `Descending`.
         * @param {string} [filterSeparator] The character that splits `filterValue` into several terms, of which any one may match. Omit it to split  the value on spaces instead, in which case every term has to match.
         * @param {string} [filterValue] The text to match against the name and the email of the account, case-insensitively. Omit it to apply no  text filter.
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
         * Sets the activation state of the calling account, which is how a person finishes confirming their email  address after following the link they were sent.  The request has to carry the confirmation token from that link rather than an ordinary session, and the  account must be allowed to edit its own profile.  Despite taking a list, it accepts exactly one ID and that ID has to be the calling account: an empty list,  more than one entry, or somebody else\'s ID is answered with 400, so it cannot be used to activate other  people.  Setting `Activated` on the portal owner sends the administrator welcome email, once per portal.  The change raises a `UserUpdated` webhook, and the answer holds the profile in its new state - or nothing at  all when the account has meanwhile disappeared, which is skipped without an error.  The account status is a different thing and is changed through `PUT api/2.0/people/status/{status}`.
         * @summary Set my activation status
         * @param {EmployeeActivationStatus} activationstatus The activation state to set on the calling account, taken from the route: `NotActivated`, `Activated`,  `Pending` or `AutoGenerated`.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The account to change. Only `userIds` is read, it has to hold exactly one entry, and that entry has to be the  calling account; `resendAll` is ignored here.
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
         * Enables or disables several portal accounts at once, which is the way to suspend somebody without deleting  them and to bring them back later.  Only `Active` and `Terminated` are accepted in the route; any other status answers 400.  The caller needs the permission to edit users, and the whole list is checked before anything is applied: a  system account, an LDAP account, the portal owner, the caller themselves, or - unless the caller is the  portal owner - a DocSpace administrator rejects the entire call with 403 and changes nothing.  Disabling ends every session of the account and takes its seat back, while enabling takes a seat again and  can therefore answer 402 when the tariff or the user quota has none left; the accounts are then processed one  by one, so a quota failure partway through leaves the earlier ones enabled.  Enabling only affects accounts that were disabled, and an account that had never filled in its name comes  back as `Pending` rather than `Active` when it still has an unused invitation, so read the `status` in the  answer instead of assuming it matches the request.  Each changed account raises a `UserUpdated` webhook, and disabling is what  `DELETE api/2.0/people/{userid}` requires before it will delete an account.
         * @summary Change a user status
         * @param {EmployeeStatus} status The state to put the listed accounts into, taken from the route. Only `Active`, which enables an account,  and `Terminated`, which disables it, are accepted; any other value is rejected with 400.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The accounts to enable or disable. Only `userIds` is read by this operation; `resendAll` belongs to the  invitation operations and is ignored here.
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
         * Returns a page of the accounts that are in one particular state - the status is taken from the route - with  the full profile of each of them.  The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403.  The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports  the number of matches in the total count of the response.  Narrow it with `filterValue` on the name and the email; setting `filterBy` to `group` makes the same  `filterValue` the ID of the group to keep the members of, and because the value is then applied as the text  filter as well, that combination normally matches nothing - use `GET api/2.0/people/filter` with `groupId`  to filter by group.  `GET api/2.0/people` is the same operation fixed to the `Active` status.
         * @summary Get profiles by status
         * @param {EmployeeStatus} status The account state to list, taken from the route: `Active` for working accounts, `Terminated` for disabled  ones, `Pending` for open invitations, or `All` for every state.
         * @param {string} [filterBy] The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of.  Any other value, and omitting the field, applies no group filter.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is  reported in the total count of the response.
         * @param {string} [sortBy] What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`,  `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`.
         * @param {SortOrder} [sortOrder] The direction of the ordering: `Ascending`, which is the default, or `Descending`.
         * @param {string} [filterSeparator] The character that splits `filterValue` into several terms, of which any one may match. Omit it to split  the value on spaces instead, in which case every term has to match.
         * @param {string} [filterValue] The text to match against the name and the email of the account, case-insensitively. Omit it to apply no  text filter.
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
         * Sets the activation state of the calling account, which is how a person finishes confirming their email  address after following the link they were sent.  The request has to carry the confirmation token from that link rather than an ordinary session, and the  account must be allowed to edit its own profile.  Despite taking a list, it accepts exactly one ID and that ID has to be the calling account: an empty list,  more than one entry, or somebody else\'s ID is answered with 400, so it cannot be used to activate other  people.  Setting `Activated` on the portal owner sends the administrator welcome email, once per portal.  The change raises a `UserUpdated` webhook, and the answer holds the profile in its new state - or nothing at  all when the account has meanwhile disappeared, which is skipped without an error.  The account status is a different thing and is changed through `PUT api/2.0/people/status/{status}`.
         * @summary Set my activation status
         * @param {EmployeeActivationStatus} activationstatus The activation state to set on the calling account, taken from the route: `NotActivated`, `Activated`,  `Pending` or `AutoGenerated`.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The account to change. Only `userIds` is read, it has to hold exactly one entry, and that entry has to be the  calling account; `resendAll` is ignored here.
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
         * Enables or disables several portal accounts at once, which is the way to suspend somebody without deleting  them and to bring them back later.  Only `Active` and `Terminated` are accepted in the route; any other status answers 400.  The caller needs the permission to edit users, and the whole list is checked before anything is applied: a  system account, an LDAP account, the portal owner, the caller themselves, or - unless the caller is the  portal owner - a DocSpace administrator rejects the entire call with 403 and changes nothing.  Disabling ends every session of the account and takes its seat back, while enabling takes a seat again and  can therefore answer 402 when the tariff or the user quota has none left; the accounts are then processed one  by one, so a quota failure partway through leaves the earlier ones enabled.  Enabling only affects accounts that were disabled, and an account that had never filled in its name comes  back as `Pending` rather than `Active` when it still has an unused invitation, so read the `status` in the  answer instead of assuming it matches the request.  Each changed account raises a `UserUpdated` webhook, and disabling is what  `DELETE api/2.0/people/{userid}` requires before it will delete an account.
         * @summary Change a user status
         * @param {EmployeeStatus} status The state to put the listed accounts into, taken from the route. Only `Active`, which enables an account,  and `Terminated`, which disables it, are accepted; any other value is rejected with 400.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The accounts to enable or disable. Only `userIds` is read by this operation; `resendAll` belongs to the  invitation operations and is ignored here.
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
         * Returns a page of the accounts that are in one particular state - the status is taken from the route - with  the full profile of each of them.  The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403.  The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports  the number of matches in the total count of the response.  Narrow it with `filterValue` on the name and the email; setting `filterBy` to `group` makes the same  `filterValue` the ID of the group to keep the members of, and because the value is then applied as the text  filter as well, that combination normally matches nothing - use `GET api/2.0/people/filter` with `groupId`  to filter by group.  `GET api/2.0/people` is the same operation fixed to the `Active` status.
         * @summary Get profiles by status
         * @param {UserStatusApiGetByStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getByStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-by-status/
         * @throws {RequiredError}
         */
        getByStatus(requestParameters: UserStatusApiGetByStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getByStatus(requestParameters.status, requestParameters.filterBy, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the activation state of the calling account, which is how a person finishes confirming their email  address after following the link they were sent.  The request has to carry the confirmation token from that link rather than an ordinary session, and the  account must be allowed to edit its own profile.  Despite taking a list, it accepts exactly one ID and that ID has to be the calling account: an empty list,  more than one entry, or somebody else\'s ID is answered with 400, so it cannot be used to activate other  people.  Setting `Activated` on the portal owner sends the administrator welcome email, once per portal.  The change raises a `UserUpdated` webhook, and the answer holds the profile in its new state - or nothing at  all when the account has meanwhile disappeared, which is skipped without an error.  The account status is a different thing and is changed through `PUT api/2.0/people/status/{status}`.
         * @summary Set my activation status
         * @param {UserStatusApiUpdateUserActivationStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserActivationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-activation-status/
         * @throws {RequiredError}
         */
        updateUserActivationStatus(requestParameters: UserStatusApiUpdateUserActivationStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserActivationStatus(requestParameters.activationstatus, requestParameters.updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Enables or disables several portal accounts at once, which is the way to suspend somebody without deleting  them and to bring them back later.  Only `Active` and `Terminated` are accepted in the route; any other status answers 400.  The caller needs the permission to edit users, and the whole list is checked before anything is applied: a  system account, an LDAP account, the portal owner, the caller themselves, or - unless the caller is the  portal owner - a DocSpace administrator rejects the entire call with 403 and changes nothing.  Disabling ends every session of the account and takes its seat back, while enabling takes a seat again and  can therefore answer 402 when the tariff or the user quota has none left; the accounts are then processed one  by one, so a quota failure partway through leaves the earlier ones enabled.  Enabling only affects accounts that were disabled, and an account that had never filled in its name comes  back as `Pending` rather than `Active` when it still has an unused invitation, so read the `status` in the  answer instead of assuming it matches the request.  Each changed account raises a `UserUpdated` webhook, and disabling is what  `DELETE api/2.0/people/{userid}` requires before it will delete an account.
         * @summary Change a user status
         * @param {UserStatusApiUpdateUserStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-status/
         * @throws {RequiredError}
         */
        updateUserStatus(requestParameters: UserStatusApiUpdateUserStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserStatus(requestParameters.status, requestParameters.updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getByStatus operation in UserStatusApi.
 * @export
 * @interface UserStatusApiGetByStatusRequest
 */
export interface UserStatusApiGetByStatusRequest {
    /**
     * The account state to list, taken from the route: `Active` for working accounts, `Terminated` for disabled  ones, `Pending` for open invitations, or `All` for every state.
     * @type {EmployeeStatus}
     * @memberof UserStatusApiGetByStatus
     */
    readonly status: EmployeeStatus

    /**
     * The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of.  Any other value, and omitting the field, applies no group filter.
     * @type {string}
     * @memberof UserStatusApiGetByStatus
     */
    readonly filterBy?: string

    /**
     * The size of the page. It defaults to 100, which is also the largest value the operation accepts.
     * @type {number}
     * @memberof UserStatusApiGetByStatus
     */
    readonly count?: number

    /**
     * The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is  reported in the total count of the response.
     * @type {number}
     * @memberof UserStatusApiGetByStatus
     */
    readonly startIndex?: number

    /**
     * What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`,  `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`.
     * @type {string}
     * @memberof UserStatusApiGetByStatus
     */
    readonly sortBy?: string

    /**
     * The direction of the ordering: `Ascending`, which is the default, or `Descending`.
     * @type {SortOrder}
     * @memberof UserStatusApiGetByStatus
     */
    readonly sortOrder?: SortOrder

    /**
     * The character that splits `filterValue` into several terms, of which any one may match. Omit it to split  the value on spaces instead, in which case every term has to match.
     * @type {string}
     * @memberof UserStatusApiGetByStatus
     */
    readonly filterSeparator?: string

    /**
     * The text to match against the name and the email of the account, case-insensitively. Omit it to apply no  text filter.
     * @type {string}
     * @memberof UserStatusApiGetByStatus
     */
    readonly filterValue?: string
}

/**
 * Request parameters for updateUserActivationStatus operation in UserStatusApi.
 * @export
 * @interface UserStatusApiUpdateUserActivationStatusRequest
 */
export interface UserStatusApiUpdateUserActivationStatusRequest {
    /**
     * The activation state to set on the calling account, taken from the route: `NotActivated`, `Activated`,  `Pending` or `AutoGenerated`.
     * @type {EmployeeActivationStatus}
     * @memberof UserStatusApiUpdateUserActivationStatus
     */
    readonly activationstatus: EmployeeActivationStatus

    /**
     * The account to change. Only `userIds` is read, it has to hold exactly one entry, and that entry has to be the  calling account; `resendAll` is ignored here.
     * @type {UpdateMembersRequestDto}
     * @memberof UserStatusApiUpdateUserActivationStatus
     */
    readonly updateMembersRequestDto: UpdateMembersRequestDto
}

/**
 * Request parameters for updateUserStatus operation in UserStatusApi.
 * @export
 * @interface UserStatusApiUpdateUserStatusRequest
 */
export interface UserStatusApiUpdateUserStatusRequest {
    /**
     * The state to put the listed accounts into, taken from the route. Only `Active`, which enables an account,  and `Terminated`, which disables it, are accepted; any other value is rejected with 400.
     * @type {EmployeeStatus}
     * @memberof UserStatusApiUpdateUserStatus
     */
    readonly status: EmployeeStatus

    /**
     * The accounts to enable or disable. Only `userIds` is read by this operation; `resendAll` belongs to the  invitation operations and is ignored here.
     * @type {UpdateMembersRequestDto}
     * @memberof UserStatusApiUpdateUserStatus
     */
    readonly updateMembersRequestDto: UpdateMembersRequestDto
}

/**
 * UserStatusApi - object-oriented interface
 * @export
 * @class UserStatusApi
 * @extends {BaseAPI}
 */
export class UserStatusApi extends BaseAPI {
    /**
     * Returns a page of the accounts that are in one particular state - the status is taken from the route - with  the full profile of each of them.  The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403.  The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports  the number of matches in the total count of the response.  Narrow it with `filterValue` on the name and the email; setting `filterBy` to `group` makes the same  `filterValue` the ID of the group to keep the members of, and because the value is then applied as the text  filter as well, that combination normally matches nothing - use `GET api/2.0/people/filter` with `groupId`  to filter by group.  `GET api/2.0/people` is the same operation fixed to the `Active` status.
     * @summary Get profiles by status
     * @param {PeopleUserStatusApiGetByStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStatusApi
     */
    public getByStatus(requestParameters: UserStatusApiGetByStatusRequest, options?: RawAxiosRequestConfig) {
        return UserStatusApiFp(this.configuration).getByStatus(requestParameters.status, requestParameters.filterBy, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the activation state of the calling account, which is how a person finishes confirming their email  address after following the link they were sent.  The request has to carry the confirmation token from that link rather than an ordinary session, and the  account must be allowed to edit its own profile.  Despite taking a list, it accepts exactly one ID and that ID has to be the calling account: an empty list,  more than one entry, or somebody else\'s ID is answered with 400, so it cannot be used to activate other  people.  Setting `Activated` on the portal owner sends the administrator welcome email, once per portal.  The change raises a `UserUpdated` webhook, and the answer holds the profile in its new state - or nothing at  all when the account has meanwhile disappeared, which is skipped without an error.  The account status is a different thing and is changed through `PUT api/2.0/people/status/{status}`.
     * @summary Set my activation status
     * @param {PeopleUserStatusApiUpdateUserActivationStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStatusApi
     */
    public updateUserActivationStatus(requestParameters: UserStatusApiUpdateUserActivationStatusRequest, options?: RawAxiosRequestConfig) {
        return UserStatusApiFp(this.configuration).updateUserActivationStatus(requestParameters.activationstatus, requestParameters.updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Enables or disables several portal accounts at once, which is the way to suspend somebody without deleting  them and to bring them back later.  Only `Active` and `Terminated` are accepted in the route; any other status answers 400.  The caller needs the permission to edit users, and the whole list is checked before anything is applied: a  system account, an LDAP account, the portal owner, the caller themselves, or - unless the caller is the  portal owner - a DocSpace administrator rejects the entire call with 403 and changes nothing.  Disabling ends every session of the account and takes its seat back, while enabling takes a seat again and  can therefore answer 402 when the tariff or the user quota has none left; the accounts are then processed one  by one, so a quota failure partway through leaves the earlier ones enabled.  Enabling only affects accounts that were disabled, and an account that had never filled in its name comes  back as `Pending` rather than `Active` when it still has an unused invitation, so read the `status` in the  answer instead of assuming it matches the request.  Each changed account raises a `UserUpdated` webhook, and disabling is what  `DELETE api/2.0/people/{userid}` requires before it will delete an account.
     * @summary Change a user status
     * @param {PeopleUserStatusApiUpdateUserStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStatusApi
     */
    public updateUserStatus(requestParameters: UserStatusApiUpdateUserStatusRequest, options?: RawAxiosRequestConfig) {
        return UserStatusApiFp(this.configuration).updateUserStatus(requestParameters.status, requestParameters.updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

