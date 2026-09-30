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
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { GroupArrayWrapper } from '../../models';
// @ts-ignore
import type { GroupRequestDto } from '../../models';
// @ts-ignore
import type { GroupSummaryArrayWrapper } from '../../models';
// @ts-ignore
import type { GroupWrapper } from '../../models';
// @ts-ignore
import type { MembersRequest } from '../../models';
// @ts-ignore
import type { SetManagerRequest } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { UpdateGroupRequest } from '../../models';
/**
 * GroupApi - axios parameter creator
 * @export
 */
export const GroupApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Creates a group with the given name and, optionally, a manager and a first set of members.  The caller needs the permissions to edit groups and to add and remove users.  The name is required and cannot be blank, and unlike the operations that add members later, this one checks  every listed account upfront and rejects the whole call with 400 if any of them is unusable - a guest, a  disabled account or an ID that matches nobody.  The call is not idempotent: names are not unique, so repeating it creates a second group with the same name.  Creating a group raises a `GroupCreated` webhook, and the answer holds the new group with its members  included.  Members can be changed afterwards through `PUT api/2.0/group/{id}` or the dedicated member operations.
         * @summary Add a new group
         * @param {GroupRequestDto} [groupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-group/
         */
        addGroup: async (groupRequestDto?: GroupRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/group`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(groupRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds the listed accounts to a group, keeping the members it already has.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Accounts that cannot be group members - a guest, a disabled account or an ID that matches nobody - are  silently skipped instead of failing the call, so compare the members in the answer with what was sent to see  what was actually applied.  The call is idempotent for an account that is already a member, and it does not change who manages the group;  use `PUT api/2.0/group/{id}/manager` for that.  The answer is the group with its members after the addition.  To replace the whole list instead of extending it, use `POST api/2.0/group/{id}/members`.
         * @summary Add group members
         * @param {string} id The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {MembersRequest} membersRequest The accounts to add, replace with, or remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-members-to/
         */
        addMembersTo: async (id: string, membersRequest: MembersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addMembersTo', 'id', id)
            // verify required parameter 'membersRequest' is not null or undefined
            assertParamExists('addMembersTo', 'membersRequest', membersRequest)

            const localVarPath = `/api/2.0/group/{id}/members`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(membersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a group and withdraws the access it had been granted to rooms, folders and files.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The removal is permanent and cannot be undone, and it affects sharing: everything that was shared with the  group loses that share, so members who had access only through this group lose it too.  The accounts themselves are kept - only their membership disappears.  The call answers 204 with no body and raises a `GroupDeleted` webhook; a second call with the same ID answers  404 rather than succeeding again.  To empty a group without deleting it, move its members away with  `PUT api/2.0/group/{fromId}/members/{toId}` or remove them through `DELETE api/2.0/group/{id}/members`.
         * @summary Delete a group
         * @param {string} id The ID of the group to delete, taken from the route. It has to be a group that has not been deleted already,  otherwise the operation answers 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-group/
         */
        deleteGroup: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteGroup', 'id', id)

            const localVarPath = `/api/2.0/group/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Returns one group by its ID, with its name, its manager and - when asked for - the accounts that belong to  it.  The caller needs the permission to read groups, and the ID has to belong to a group that has not been  deleted, otherwise the operation answers 404.  The call is read-only, and the member list is left out unless `includeMembers` is set to true, so ask for it  only when the members are actually needed.  Use `GET api/2.0/group` to look a group up by name or to page through them all.
         * @summary Get a group
         * @param {string} id The ID of the group to read, taken from the route. It has to be a group that has not been deleted, otherwise  the operation answers 404.
         * @param {boolean} [includeMembers] Whether to fill in the member list of the group. It defaults to true, so set it to false when only the name  and the manager are needed and the group may be large.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group/
         */
        getGroup: async (id: string, includeMembers?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroup', 'id', id)

            const localVarPath = `/api/2.0/group/{id}`
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

            if (includeMembers !== undefined) {
                localVarQueryParameter['includeMembers'] = includeMembers;
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
         * Returns every group the account with the ID in the route belongs to, as a flat list of ID and name pairs.  The caller needs the permission to read groups.  The call is read-only, is not paged, and answers an empty list both for an account that belongs to no group  and for an ID that matches no account, so an empty answer does not prove the account exists.  The entries are summaries and carry neither the manager nor the members - read `GET api/2.0/group/{id}` for  the full picture of one of them.
         * @summary Get user groups
         * @param {string} userid The ID of the account whose groups are listed, taken from the route. An ID that matches no account yields an  empty list rather than 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group-by-user-id/
         */
        getGroupByUserId: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getGroupByUserId', 'userid', userid)

            const localVarPath = `/api/2.0/group/user/{userid}`
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
         * Returns the groups of the portal, one page at a time, with the summary information about each of them - the  ID, the name and the manager - but without the member list.  The caller needs the permission to read groups.  The call is read-only, and the number of groups that match the filters is reported in the total count of the  response, so a client can page through them with `count` and `startIndex`.  Narrow the result with `filterValue` on the group name, with `userId` to keep only the groups that account  belongs to, and with `manager` set to true to keep only the groups it manages; order it with `sortBy` and  `sortOrder`, and an unknown `sortBy` falls back to sorting by title.  The entries carry no members - read `GET api/2.0/group/{id}` with `includeMembers` for one group, or  `GET api/2.0/group/user/{userid}` to find the groups of a single account.
         * @summary Get groups
         * @param {string} [userId] Keeps only the groups the account with this ID takes part in. Omit it to search every group of the portal.
         * @param {boolean} [manager] Narrows `userId` down to the groups that account manages, instead of every group it belongs to. It has no  effect on its own and defaults to false.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [sortBy] What to order the groups by: `Title`, `Manager` or `MembersCount`, compared without regard to case. Any other  value, and omitting the field, orders by title.
         * @param {SortOrder} [sortOrder] The direction of the ordering: `Ascending`, which is the default, or `Descending`.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups/
         */
        getGroups: async (userId?: string, manager?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/group`;
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
                localVarQueryParameter['userId'] = userId;
            }

            if (manager !== undefined) {
                localVarQueryParameter['manager'] = manager;
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
         * Moves every member of one group into another group, emptying the first one.  The caller needs the permissions to edit groups and to add and remove users, and both IDs have to belong to  groups that have not been deleted, otherwise the operation answers 404.  The source group is kept, only without members, so delete it separately through  `DELETE api/2.0/group/{id}` if it is no longer needed.  Members that cannot be group members any more are silently skipped rather than failing the call, and an  account that already belongs to the destination is simply left there.  The answer is the destination group with its members, not the source one.  To move a chosen few instead of everybody, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
         * @summary Move group members
         * @param {string} fromId The ID of the group the members are taken from. It is emptied but not deleted, and it has to be a group that  has not been deleted already.
         * @param {string} toId The ID of the group the members are moved into. It is the group the answer describes, and it has to be a  group that has not been deleted already.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for moveMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-members-to/
         */
        moveMembersTo: async (fromId: string, toId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fromId' is not null or undefined
            assertParamExists('moveMembersTo', 'fromId', fromId)
            // verify required parameter 'toId' is not null or undefined
            assertParamExists('moveMembersTo', 'toId', toId)

            const localVarPath = `/api/2.0/group/{fromId}/members/{toId}`
                .replace(`{${"fromId"}}`, encodeURIComponent(String(fromId)))
                .replace(`{${"toId"}}`, encodeURIComponent(String(toId)));
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
         * Removes the listed accounts from a group, leaving the rest of its members in place.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The accounts themselves are kept; only their membership in this group ends, together with the access they had  through it.  The call is idempotent and forgiving: an ID that is not a member, and one that matches no account at all, are  both skipped without an error, and an empty list simply changes nothing.  The answer is the group with the members that remain.  Emptying a group cannot be done through `POST api/2.0/group/{id}/members`, which needs at least one valid  account, so list every member here, or move them away with `PUT api/2.0/group/{fromId}/members/{toId}`.
         * @summary Remove group members
         * @param {string} id The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {MembersRequest} membersRequest The accounts to add, replace with, or remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeMembersFrom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-members-from/
         */
        removeMembersFrom: async (id: string, membersRequest: MembersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeMembersFrom', 'id', id)
            // verify required parameter 'membersRequest' is not null or undefined
            assertParamExists('removeMembersFrom', 'membersRequest', membersRequest)

            const localVarPath = `/api/2.0/group/{id}/members`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(membersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Makes an account the manager of a group, replacing whoever managed it before.  The caller needs the permissions to edit groups and to add and remove users.  Both the group and the account have to exist: the operation answers 404 when the ID in the route matches no  live group and also when `userId` matches no account, so the message of the error says which of the two was  not found.  The account is added to the group at the same time, so a manager does not have to be a member beforehand, and  the previous manager stays in the group as an ordinary member.  A group has one manager, which makes the call idempotent when it names the account that manages it already.  The answer is the group with its new manager.  To change the members rather than the manager, use `PUT api/2.0/group/{id}/members`.
         * @summary Set a group manager
         * @param {string} id The ID of the group whose manager is set, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {SetManagerRequest} setManagerRequest The account to make the manager of the group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setGroupManager operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-group-manager/
         */
        setGroupManager: async (id: string, setManagerRequest: SetManagerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setGroupManager', 'id', id)
            // verify required parameter 'setManagerRequest' is not null or undefined
            assertParamExists('setGroupManager', 'setManagerRequest', setManagerRequest)

            const localVarPath = `/api/2.0/group/{id}/manager`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(setManagerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the whole member list of a group with the accounts given in the request, removing everybody who is  not in that list.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  At least one of the listed accounts has to be usable as a group member, otherwise the call is rejected with  400 and the group is left untouched; the accounts that cannot be members - a guest, a disabled account or an  ID that matches nobody - are then silently skipped while the rest are applied.  The replacement is not atomic: the current members are removed first and the new ones added afterwards, so a  failure in between can leave the group empty.  The answer is the group with the members it ends up with, which is why it should be read instead of assuming  the request was applied verbatim.  To add or remove a few accounts without touching the others, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
         * @summary Replace group members
         * @param {string} id The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {MembersRequest} membersRequest The accounts to add, replace with, or remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-members-to/
         */
        setMembersTo: async (id: string, membersRequest: MembersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setMembersTo', 'id', id)
            // verify required parameter 'membersRequest' is not null or undefined
            assertParamExists('setMembersTo', 'membersRequest', membersRequest)

            const localVarPath = `/api/2.0/group/{id}/members`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(membersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the name and the manager of a group and adds or removes members, in one call.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Every field is optional and the ones that are left out are kept: omitting `groupName` keeps the current name,  and omitting `groupManager` keeps the current manager rather than clearing it.  Accounts in `membersToAdd` that cannot be group members - a guest, a disabled account or an ID that matches  nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was  sent to see what was actually applied.  Members are added first and removed afterwards, an account listed in both lists therefore ends up removed,  and removing an account that is not a member changes nothing.  The change raises a `GroupUpdated` webhook, and the answer holds the group as it is after the update.
         * @summary Update a group
         * @param {string} id The ID of the group to update, taken from the route. It has to be a group that has not been deleted,  otherwise the operation answers 404.
         * @param {UpdateGroupRequest} updateGroupRequest The fields to change. Every field is optional and the ones that are left out keep their current values, so an  empty object changes nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-group/
         */
        updateGroup: async (id: string, updateGroupRequest: UpdateGroupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateGroup', 'id', id)
            // verify required parameter 'updateGroupRequest' is not null or undefined
            assertParamExists('updateGroup', 'updateGroupRequest', updateGroupRequest)

            const localVarPath = `/api/2.0/group/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupApi - functional programming interface
 * @export
 */
export const GroupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a group with the given name and, optionally, a manager and a first set of members.  The caller needs the permissions to edit groups and to add and remove users.  The name is required and cannot be blank, and unlike the operations that add members later, this one checks  every listed account upfront and rejects the whole call with 400 if any of them is unusable - a guest, a  disabled account or an ID that matches nobody.  The call is not idempotent: names are not unique, so repeating it creates a second group with the same name.  Creating a group raises a `GroupCreated` webhook, and the answer holds the new group with its members  included.  Members can be changed afterwards through `PUT api/2.0/group/{id}` or the dedicated member operations.
         * @summary Add a new group
         * @param {GroupRequestDto} [groupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-group/
         */
        async addGroup(groupRequestDto?: GroupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addGroup(groupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.addGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds the listed accounts to a group, keeping the members it already has.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Accounts that cannot be group members - a guest, a disabled account or an ID that matches nobody - are  silently skipped instead of failing the call, so compare the members in the answer with what was sent to see  what was actually applied.  The call is idempotent for an account that is already a member, and it does not change who manages the group;  use `PUT api/2.0/group/{id}/manager` for that.  The answer is the group with its members after the addition.  To replace the whole list instead of extending it, use `POST api/2.0/group/{id}/members`.
         * @summary Add group members
         * @param {string} id The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {MembersRequest} membersRequest The accounts to add, replace with, or remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-members-to/
         */
        async addMembersTo(id: string, membersRequest: MembersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addMembersTo(id, membersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.addMembersTo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a group and withdraws the access it had been granted to rooms, folders and files.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The removal is permanent and cannot be undone, and it affects sharing: everything that was shared with the  group loses that share, so members who had access only through this group lose it too.  The accounts themselves are kept - only their membership disappears.  The call answers 204 with no body and raises a `GroupDeleted` webhook; a second call with the same ID answers  404 rather than succeeding again.  To empty a group without deleting it, move its members away with  `PUT api/2.0/group/{fromId}/members/{toId}` or remove them through `DELETE api/2.0/group/{id}/members`.
         * @summary Delete a group
         * @param {string} id The ID of the group to delete, taken from the route. It has to be a group that has not been deleted already,  otherwise the operation answers 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-group/
         */
        async deleteGroup(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGroup(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.deleteGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one group by its ID, with its name, its manager and - when asked for - the accounts that belong to  it.  The caller needs the permission to read groups, and the ID has to belong to a group that has not been  deleted, otherwise the operation answers 404.  The call is read-only, and the member list is left out unless `includeMembers` is set to true, so ask for it  only when the members are actually needed.  Use `GET api/2.0/group` to look a group up by name or to page through them all.
         * @summary Get a group
         * @param {string} id The ID of the group to read, taken from the route. It has to be a group that has not been deleted, otherwise  the operation answers 404.
         * @param {boolean} [includeMembers] Whether to fill in the member list of the group. It defaults to true, so set it to false when only the name  and the manager are needed and the group may be large.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group/
         */
        async getGroup(id: string, includeMembers?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroup(id, includeMembers, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.getGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns every group the account with the ID in the route belongs to, as a flat list of ID and name pairs.  The caller needs the permission to read groups.  The call is read-only, is not paged, and answers an empty list both for an account that belongs to no group  and for an ID that matches no account, so an empty answer does not prove the account exists.  The entries are summaries and carry neither the manager nor the members - read `GET api/2.0/group/{id}` for  the full picture of one of them.
         * @summary Get user groups
         * @param {string} userid The ID of the account whose groups are listed, taken from the route. An ID that matches no account yields an  empty list rather than 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group-by-user-id/
         */
        async getGroupByUserId(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupSummaryArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupByUserId(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.getGroupByUserId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the groups of the portal, one page at a time, with the summary information about each of them - the  ID, the name and the manager - but without the member list.  The caller needs the permission to read groups.  The call is read-only, and the number of groups that match the filters is reported in the total count of the  response, so a client can page through them with `count` and `startIndex`.  Narrow the result with `filterValue` on the group name, with `userId` to keep only the groups that account  belongs to, and with `manager` set to true to keep only the groups it manages; order it with `sortBy` and  `sortOrder`, and an unknown `sortBy` falls back to sorting by title.  The entries carry no members - read `GET api/2.0/group/{id}` with `includeMembers` for one group, or  `GET api/2.0/group/user/{userid}` to find the groups of a single account.
         * @summary Get groups
         * @param {string} [userId] Keeps only the groups the account with this ID takes part in. Omit it to search every group of the portal.
         * @param {boolean} [manager] Narrows `userId` down to the groups that account manages, instead of every group it belongs to. It has no  effect on its own and defaults to false.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [sortBy] What to order the groups by: `Title`, `Manager` or `MembersCount`, compared without regard to case. Any other  value, and omitting the field, orders by title.
         * @param {SortOrder} [sortOrder] The direction of the ordering: `Ascending`, which is the default, or `Descending`.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups/
         */
        async getGroups(userId?: string, manager?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroups(userId, manager, count, startIndex, sortBy, sortOrder, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.getGroups']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Moves every member of one group into another group, emptying the first one.  The caller needs the permissions to edit groups and to add and remove users, and both IDs have to belong to  groups that have not been deleted, otherwise the operation answers 404.  The source group is kept, only without members, so delete it separately through  `DELETE api/2.0/group/{id}` if it is no longer needed.  Members that cannot be group members any more are silently skipped rather than failing the call, and an  account that already belongs to the destination is simply left there.  The answer is the destination group with its members, not the source one.  To move a chosen few instead of everybody, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
         * @summary Move group members
         * @param {string} fromId The ID of the group the members are taken from. It is emptied but not deleted, and it has to be a group that  has not been deleted already.
         * @param {string} toId The ID of the group the members are moved into. It is the group the answer describes, and it has to be a  group that has not been deleted already.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for moveMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-members-to/
         */
        async moveMembersTo(fromId: string, toId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moveMembersTo(fromId, toId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.moveMembersTo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the listed accounts from a group, leaving the rest of its members in place.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The accounts themselves are kept; only their membership in this group ends, together with the access they had  through it.  The call is idempotent and forgiving: an ID that is not a member, and one that matches no account at all, are  both skipped without an error, and an empty list simply changes nothing.  The answer is the group with the members that remain.  Emptying a group cannot be done through `POST api/2.0/group/{id}/members`, which needs at least one valid  account, so list every member here, or move them away with `PUT api/2.0/group/{fromId}/members/{toId}`.
         * @summary Remove group members
         * @param {string} id The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {MembersRequest} membersRequest The accounts to add, replace with, or remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeMembersFrom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-members-from/
         */
        async removeMembersFrom(id: string, membersRequest: MembersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeMembersFrom(id, membersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.removeMembersFrom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Makes an account the manager of a group, replacing whoever managed it before.  The caller needs the permissions to edit groups and to add and remove users.  Both the group and the account have to exist: the operation answers 404 when the ID in the route matches no  live group and also when `userId` matches no account, so the message of the error says which of the two was  not found.  The account is added to the group at the same time, so a manager does not have to be a member beforehand, and  the previous manager stays in the group as an ordinary member.  A group has one manager, which makes the call idempotent when it names the account that manages it already.  The answer is the group with its new manager.  To change the members rather than the manager, use `PUT api/2.0/group/{id}/members`.
         * @summary Set a group manager
         * @param {string} id The ID of the group whose manager is set, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {SetManagerRequest} setManagerRequest The account to make the manager of the group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setGroupManager operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-group-manager/
         */
        async setGroupManager(id: string, setManagerRequest: SetManagerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setGroupManager(id, setManagerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.setGroupManager']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the whole member list of a group with the accounts given in the request, removing everybody who is  not in that list.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  At least one of the listed accounts has to be usable as a group member, otherwise the call is rejected with  400 and the group is left untouched; the accounts that cannot be members - a guest, a disabled account or an  ID that matches nobody - are then silently skipped while the rest are applied.  The replacement is not atomic: the current members are removed first and the new ones added afterwards, so a  failure in between can leave the group empty.  The answer is the group with the members it ends up with, which is why it should be read instead of assuming  the request was applied verbatim.  To add or remove a few accounts without touching the others, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
         * @summary Replace group members
         * @param {string} id The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
         * @param {MembersRequest} membersRequest The accounts to add, replace with, or remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-members-to/
         */
        async setMembersTo(id: string, membersRequest: MembersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setMembersTo(id, membersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.setMembersTo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the name and the manager of a group and adds or removes members, in one call.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Every field is optional and the ones that are left out are kept: omitting `groupName` keeps the current name,  and omitting `groupManager` keeps the current manager rather than clearing it.  Accounts in `membersToAdd` that cannot be group members - a guest, a disabled account or an ID that matches  nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was  sent to see what was actually applied.  Members are added first and removed afterwards, an account listed in both lists therefore ends up removed,  and removing an account that is not a member changes nothing.  The change raises a `GroupUpdated` webhook, and the answer holds the group as it is after the update.
         * @summary Update a group
         * @param {string} id The ID of the group to update, taken from the route. It has to be a group that has not been deleted,  otherwise the operation answers 404.
         * @param {UpdateGroupRequest} updateGroupRequest The fields to change. Every field is optional and the ones that are left out keep their current values, so an  empty object changes nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-group/
         */
        async updateGroup(id: string, updateGroupRequest: UpdateGroupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGroup(id, updateGroupRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.updateGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GroupApi - factory interface
 * @export
 */
export const GroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupApiFp(configuration)
    return {
        /**
         * Creates a group with the given name and, optionally, a manager and a first set of members.  The caller needs the permissions to edit groups and to add and remove users.  The name is required and cannot be blank, and unlike the operations that add members later, this one checks  every listed account upfront and rejects the whole call with 400 if any of them is unusable - a guest, a  disabled account or an ID that matches nobody.  The call is not idempotent: names are not unique, so repeating it creates a second group with the same name.  Creating a group raises a `GroupCreated` webhook, and the answer holds the new group with its members  included.  Members can be changed afterwards through `PUT api/2.0/group/{id}` or the dedicated member operations.
         * @summary Add a new group
         * @param {GroupApiAddGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-group/
         * @throws {RequiredError}
         */
        addGroup(requestParameters: GroupApiAddGroupRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.addGroup(requestParameters.groupRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds the listed accounts to a group, keeping the members it already has.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Accounts that cannot be group members - a guest, a disabled account or an ID that matches nobody - are  silently skipped instead of failing the call, so compare the members in the answer with what was sent to see  what was actually applied.  The call is idempotent for an account that is already a member, and it does not change who manages the group;  use `PUT api/2.0/group/{id}/manager` for that.  The answer is the group with its members after the addition.  To replace the whole list instead of extending it, use `POST api/2.0/group/{id}/members`.
         * @summary Add group members
         * @param {GroupApiAddMembersToRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-members-to/
         * @throws {RequiredError}
         */
        addMembersTo(requestParameters: GroupApiAddMembersToRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.addMembersTo(requestParameters.id, requestParameters.membersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a group and withdraws the access it had been granted to rooms, folders and files.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The removal is permanent and cannot be undone, and it affects sharing: everything that was shared with the  group loses that share, so members who had access only through this group lose it too.  The accounts themselves are kept - only their membership disappears.  The call answers 204 with no body and raises a `GroupDeleted` webhook; a second call with the same ID answers  404 rather than succeeding again.  To empty a group without deleting it, move its members away with  `PUT api/2.0/group/{fromId}/members/{toId}` or remove them through `DELETE api/2.0/group/{id}/members`.
         * @summary Delete a group
         * @param {GroupApiDeleteGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-group/
         * @throws {RequiredError}
         */
        deleteGroup(requestParameters: GroupApiDeleteGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteGroup(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one group by its ID, with its name, its manager and - when asked for - the accounts that belong to  it.  The caller needs the permission to read groups, and the ID has to belong to a group that has not been  deleted, otherwise the operation answers 404.  The call is read-only, and the member list is left out unless `includeMembers` is set to true, so ask for it  only when the members are actually needed.  Use `GET api/2.0/group` to look a group up by name or to page through them all.
         * @summary Get a group
         * @param {GroupApiGetGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group/
         * @throws {RequiredError}
         */
        getGroup(requestParameters: GroupApiGetGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.getGroup(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns every group the account with the ID in the route belongs to, as a flat list of ID and name pairs.  The caller needs the permission to read groups.  The call is read-only, is not paged, and answers an empty list both for an account that belongs to no group  and for an ID that matches no account, so an empty answer does not prove the account exists.  The entries are summaries and carry neither the manager nor the members - read `GET api/2.0/group/{id}` for  the full picture of one of them.
         * @summary Get user groups
         * @param {GroupApiGetGroupByUserIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group-by-user-id/
         * @throws {RequiredError}
         */
        getGroupByUserId(requestParameters: GroupApiGetGroupByUserIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupSummaryArrayWrapper> {
            return localVarFp.getGroupByUserId(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the groups of the portal, one page at a time, with the summary information about each of them - the  ID, the name and the manager - but without the member list.  The caller needs the permission to read groups.  The call is read-only, and the number of groups that match the filters is reported in the total count of the  response, so a client can page through them with `count` and `startIndex`.  Narrow the result with `filterValue` on the group name, with `userId` to keep only the groups that account  belongs to, and with `manager` set to true to keep only the groups it manages; order it with `sortBy` and  `sortOrder`, and an unknown `sortBy` falls back to sorting by title.  The entries carry no members - read `GET api/2.0/group/{id}` with `includeMembers` for one group, or  `GET api/2.0/group/user/{userid}` to find the groups of a single account.
         * @summary Get groups
         * @param {GroupApiGetGroupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups/
         * @throws {RequiredError}
         */
        getGroups(requestParameters: GroupApiGetGroupsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroups(requestParameters.userId, requestParameters.manager, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Moves every member of one group into another group, emptying the first one.  The caller needs the permissions to edit groups and to add and remove users, and both IDs have to belong to  groups that have not been deleted, otherwise the operation answers 404.  The source group is kept, only without members, so delete it separately through  `DELETE api/2.0/group/{id}` if it is no longer needed.  Members that cannot be group members any more are silently skipped rather than failing the call, and an  account that already belongs to the destination is simply left there.  The answer is the destination group with its members, not the source one.  To move a chosen few instead of everybody, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
         * @summary Move group members
         * @param {GroupApiMoveMembersToRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for moveMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-members-to/
         * @throws {RequiredError}
         */
        moveMembersTo(requestParameters: GroupApiMoveMembersToRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.moveMembersTo(requestParameters.fromId, requestParameters.toId, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the listed accounts from a group, leaving the rest of its members in place.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The accounts themselves are kept; only their membership in this group ends, together with the access they had  through it.  The call is idempotent and forgiving: an ID that is not a member, and one that matches no account at all, are  both skipped without an error, and an empty list simply changes nothing.  The answer is the group with the members that remain.  Emptying a group cannot be done through `POST api/2.0/group/{id}/members`, which needs at least one valid  account, so list every member here, or move them away with `PUT api/2.0/group/{fromId}/members/{toId}`.
         * @summary Remove group members
         * @param {GroupApiRemoveMembersFromRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for removeMembersFrom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-members-from/
         * @throws {RequiredError}
         */
        removeMembersFrom(requestParameters: GroupApiRemoveMembersFromRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.removeMembersFrom(requestParameters.id, requestParameters.membersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Makes an account the manager of a group, replacing whoever managed it before.  The caller needs the permissions to edit groups and to add and remove users.  Both the group and the account have to exist: the operation answers 404 when the ID in the route matches no  live group and also when `userId` matches no account, so the message of the error says which of the two was  not found.  The account is added to the group at the same time, so a manager does not have to be a member beforehand, and  the previous manager stays in the group as an ordinary member.  A group has one manager, which makes the call idempotent when it names the account that manages it already.  The answer is the group with its new manager.  To change the members rather than the manager, use `PUT api/2.0/group/{id}/members`.
         * @summary Set a group manager
         * @param {GroupApiSetGroupManagerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setGroupManager operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-group-manager/
         * @throws {RequiredError}
         */
        setGroupManager(requestParameters: GroupApiSetGroupManagerRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.setGroupManager(requestParameters.id, requestParameters.setManagerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the whole member list of a group with the accounts given in the request, removing everybody who is  not in that list.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  At least one of the listed accounts has to be usable as a group member, otherwise the call is rejected with  400 and the group is left untouched; the accounts that cannot be members - a guest, a disabled account or an  ID that matches nobody - are then silently skipped while the rest are applied.  The replacement is not atomic: the current members are removed first and the new ones added afterwards, so a  failure in between can leave the group empty.  The answer is the group with the members it ends up with, which is why it should be read instead of assuming  the request was applied verbatim.  To add or remove a few accounts without touching the others, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
         * @summary Replace group members
         * @param {GroupApiSetMembersToRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-members-to/
         * @throws {RequiredError}
         */
        setMembersTo(requestParameters: GroupApiSetMembersToRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.setMembersTo(requestParameters.id, requestParameters.membersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the name and the manager of a group and adds or removes members, in one call.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Every field is optional and the ones that are left out are kept: omitting `groupName` keeps the current name,  and omitting `groupManager` keeps the current manager rather than clearing it.  Accounts in `membersToAdd` that cannot be group members - a guest, a disabled account or an ID that matches  nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was  sent to see what was actually applied.  Members are added first and removed afterwards, an account listed in both lists therefore ends up removed,  and removing an account that is not a member changes nothing.  The change raises a `GroupUpdated` webhook, and the answer holds the group as it is after the update.
         * @summary Update a group
         * @param {GroupApiUpdateGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-group/
         * @throws {RequiredError}
         */
        updateGroup(requestParameters: GroupApiUpdateGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.updateGroup(requestParameters.id, requestParameters.updateGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addGroup operation in GroupApi.
 * @export
 * @interface GroupApiAddGroupRequest
 */
export interface GroupApiAddGroupRequest {
    /**
     * 
     * @type {GroupRequestDto}
     * @memberof GroupApiAddGroup
     */
    readonly groupRequestDto?: GroupRequestDto
}

/**
 * Request parameters for addMembersTo operation in GroupApi.
 * @export
 * @interface GroupApiAddMembersToRequest
 */
export interface GroupApiAddMembersToRequest {
    /**
     * The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
     * @type {string}
     * @memberof GroupApiAddMembersTo
     */
    readonly id: string

    /**
     * The accounts to add, replace with, or remove.
     * @type {MembersRequest}
     * @memberof GroupApiAddMembersTo
     */
    readonly membersRequest: MembersRequest
}

/**
 * Request parameters for deleteGroup operation in GroupApi.
 * @export
 * @interface GroupApiDeleteGroupRequest
 */
export interface GroupApiDeleteGroupRequest {
    /**
     * The ID of the group to delete, taken from the route. It has to be a group that has not been deleted already,  otherwise the operation answers 404.
     * @type {string}
     * @memberof GroupApiDeleteGroup
     */
    readonly id: string
}

/**
 * Request parameters for getGroup operation in GroupApi.
 * @export
 * @interface GroupApiGetGroupRequest
 */
export interface GroupApiGetGroupRequest {
    /**
     * The ID of the group to read, taken from the route. It has to be a group that has not been deleted, otherwise  the operation answers 404.
     * @type {string}
     * @memberof GroupApiGetGroup
     */
    readonly id: string

    /**
     * Whether to fill in the member list of the group. It defaults to true, so set it to false when only the name  and the manager are needed and the group may be large.
     * @type {boolean}
     * @memberof GroupApiGetGroup
     */
    readonly includeMembers?: boolean
}

/**
 * Request parameters for getGroupByUserId operation in GroupApi.
 * @export
 * @interface GroupApiGetGroupByUserIdRequest
 */
export interface GroupApiGetGroupByUserIdRequest {
    /**
     * The ID of the account whose groups are listed, taken from the route. An ID that matches no account yields an  empty list rather than 404.
     * @type {string}
     * @memberof GroupApiGetGroupByUserId
     */
    readonly userid: string
}

/**
 * Request parameters for getGroups operation in GroupApi.
 * @export
 * @interface GroupApiGetGroupsRequest
 */
export interface GroupApiGetGroupsRequest {
    /**
     * Keeps only the groups the account with this ID takes part in. Omit it to search every group of the portal.
     * @type {string}
     * @memberof GroupApiGetGroups
     */
    readonly userId?: string

    /**
     * Narrows `userId` down to the groups that account manages, instead of every group it belongs to. It has no  effect on its own and defaults to false.
     * @type {boolean}
     * @memberof GroupApiGetGroups
     */
    readonly manager?: boolean

    /**
     * The size of the page. It defaults to 100, which is also the largest value the operation accepts.
     * @type {number}
     * @memberof GroupApiGetGroups
     */
    readonly count?: number

    /**
     * The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
     * @type {number}
     * @memberof GroupApiGetGroups
     */
    readonly startIndex?: number

    /**
     * What to order the groups by: `Title`, `Manager` or `MembersCount`, compared without regard to case. Any other  value, and omitting the field, orders by title.
     * @type {string}
     * @memberof GroupApiGetGroups
     */
    readonly sortBy?: string

    /**
     * The direction of the ordering: `Ascending`, which is the default, or `Descending`.
     * @type {SortOrder}
     * @memberof GroupApiGetGroups
     */
    readonly sortOrder?: SortOrder

    /**
     * The text to match against the group name. Omit it to get every group.
     * @type {string}
     * @memberof GroupApiGetGroups
     */
    readonly filterValue?: string
}

/**
 * Request parameters for moveMembersTo operation in GroupApi.
 * @export
 * @interface GroupApiMoveMembersToRequest
 */
export interface GroupApiMoveMembersToRequest {
    /**
     * The ID of the group the members are taken from. It is emptied but not deleted, and it has to be a group that  has not been deleted already.
     * @type {string}
     * @memberof GroupApiMoveMembersTo
     */
    readonly fromId: string

    /**
     * The ID of the group the members are moved into. It is the group the answer describes, and it has to be a  group that has not been deleted already.
     * @type {string}
     * @memberof GroupApiMoveMembersTo
     */
    readonly toId: string
}

/**
 * Request parameters for removeMembersFrom operation in GroupApi.
 * @export
 * @interface GroupApiRemoveMembersFromRequest
 */
export interface GroupApiRemoveMembersFromRequest {
    /**
     * The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
     * @type {string}
     * @memberof GroupApiRemoveMembersFrom
     */
    readonly id: string

    /**
     * The accounts to add, replace with, or remove.
     * @type {MembersRequest}
     * @memberof GroupApiRemoveMembersFrom
     */
    readonly membersRequest: MembersRequest
}

/**
 * Request parameters for setGroupManager operation in GroupApi.
 * @export
 * @interface GroupApiSetGroupManagerRequest
 */
export interface GroupApiSetGroupManagerRequest {
    /**
     * The ID of the group whose manager is set, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
     * @type {string}
     * @memberof GroupApiSetGroupManager
     */
    readonly id: string

    /**
     * The account to make the manager of the group.
     * @type {SetManagerRequest}
     * @memberof GroupApiSetGroupManager
     */
    readonly setManagerRequest: SetManagerRequest
}

/**
 * Request parameters for setMembersTo operation in GroupApi.
 * @export
 * @interface GroupApiSetMembersToRequest
 */
export interface GroupApiSetMembersToRequest {
    /**
     * The ID of the group whose members are changed, taken from the route. It has to be a group that has not been  deleted, otherwise the operation answers 404.
     * @type {string}
     * @memberof GroupApiSetMembersTo
     */
    readonly id: string

    /**
     * The accounts to add, replace with, or remove.
     * @type {MembersRequest}
     * @memberof GroupApiSetMembersTo
     */
    readonly membersRequest: MembersRequest
}

/**
 * Request parameters for updateGroup operation in GroupApi.
 * @export
 * @interface GroupApiUpdateGroupRequest
 */
export interface GroupApiUpdateGroupRequest {
    /**
     * The ID of the group to update, taken from the route. It has to be a group that has not been deleted,  otherwise the operation answers 404.
     * @type {string}
     * @memberof GroupApiUpdateGroup
     */
    readonly id: string

    /**
     * The fields to change. Every field is optional and the ones that are left out keep their current values, so an  empty object changes nothing.
     * @type {UpdateGroupRequest}
     * @memberof GroupApiUpdateGroup
     */
    readonly updateGroupRequest: UpdateGroupRequest
}

/**
 * GroupApi - object-oriented interface
 * @export
 * @class GroupApi
 * @extends {BaseAPI}
 */
export class GroupApi extends BaseAPI {
    /**
     * Creates a group with the given name and, optionally, a manager and a first set of members.  The caller needs the permissions to edit groups and to add and remove users.  The name is required and cannot be blank, and unlike the operations that add members later, this one checks  every listed account upfront and rejects the whole call with 400 if any of them is unusable - a guest, a  disabled account or an ID that matches nobody.  The call is not idempotent: names are not unique, so repeating it creates a second group with the same name.  Creating a group raises a `GroupCreated` webhook, and the answer holds the new group with its members  included.  Members can be changed afterwards through `PUT api/2.0/group/{id}` or the dedicated member operations.
     * @summary Add a new group
     * @param {GroupApiAddGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public addGroup(requestParameters: GroupApiAddGroupRequest = {}, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).addGroup(requestParameters.groupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds the listed accounts to a group, keeping the members it already has.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Accounts that cannot be group members - a guest, a disabled account or an ID that matches nobody - are  silently skipped instead of failing the call, so compare the members in the answer with what was sent to see  what was actually applied.  The call is idempotent for an account that is already a member, and it does not change who manages the group;  use `PUT api/2.0/group/{id}/manager` for that.  The answer is the group with its members after the addition.  To replace the whole list instead of extending it, use `POST api/2.0/group/{id}/members`.
     * @summary Add group members
     * @param {GroupApiAddMembersToRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public addMembersTo(requestParameters: GroupApiAddMembersToRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).addMembersTo(requestParameters.id, requestParameters.membersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a group and withdraws the access it had been granted to rooms, folders and files.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The removal is permanent and cannot be undone, and it affects sharing: everything that was shared with the  group loses that share, so members who had access only through this group lose it too.  The accounts themselves are kept - only their membership disappears.  The call answers 204 with no body and raises a `GroupDeleted` webhook; a second call with the same ID answers  404 rather than succeeding again.  To empty a group without deleting it, move its members away with  `PUT api/2.0/group/{fromId}/members/{toId}` or remove them through `DELETE api/2.0/group/{id}/members`.
     * @summary Delete a group
     * @param {GroupApiDeleteGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public deleteGroup(requestParameters: GroupApiDeleteGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).deleteGroup(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one group by its ID, with its name, its manager and - when asked for - the accounts that belong to  it.  The caller needs the permission to read groups, and the ID has to belong to a group that has not been  deleted, otherwise the operation answers 404.  The call is read-only, and the member list is left out unless `includeMembers` is set to true, so ask for it  only when the members are actually needed.  Use `GET api/2.0/group` to look a group up by name or to page through them all.
     * @summary Get a group
     * @param {GroupApiGetGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroup(requestParameters: GroupApiGetGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroup(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns every group the account with the ID in the route belongs to, as a flat list of ID and name pairs.  The caller needs the permission to read groups.  The call is read-only, is not paged, and answers an empty list both for an account that belongs to no group  and for an ID that matches no account, so an empty answer does not prove the account exists.  The entries are summaries and carry neither the manager nor the members - read `GET api/2.0/group/{id}` for  the full picture of one of them.
     * @summary Get user groups
     * @param {GroupApiGetGroupByUserIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroupByUserId(requestParameters: GroupApiGetGroupByUserIdRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroupByUserId(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the groups of the portal, one page at a time, with the summary information about each of them - the  ID, the name and the manager - but without the member list.  The caller needs the permission to read groups.  The call is read-only, and the number of groups that match the filters is reported in the total count of the  response, so a client can page through them with `count` and `startIndex`.  Narrow the result with `filterValue` on the group name, with `userId` to keep only the groups that account  belongs to, and with `manager` set to true to keep only the groups it manages; order it with `sortBy` and  `sortOrder`, and an unknown `sortBy` falls back to sorting by title.  The entries carry no members - read `GET api/2.0/group/{id}` with `includeMembers` for one group, or  `GET api/2.0/group/user/{userid}` to find the groups of a single account.
     * @summary Get groups
     * @param {GroupApiGetGroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroups(requestParameters: GroupApiGetGroupsRequest = {}, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroups(requestParameters.userId, requestParameters.manager, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves every member of one group into another group, emptying the first one.  The caller needs the permissions to edit groups and to add and remove users, and both IDs have to belong to  groups that have not been deleted, otherwise the operation answers 404.  The source group is kept, only without members, so delete it separately through  `DELETE api/2.0/group/{id}` if it is no longer needed.  Members that cannot be group members any more are silently skipped rather than failing the call, and an  account that already belongs to the destination is simply left there.  The answer is the destination group with its members, not the source one.  To move a chosen few instead of everybody, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
     * @summary Move group members
     * @param {GroupApiMoveMembersToRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public moveMembersTo(requestParameters: GroupApiMoveMembersToRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).moveMembersTo(requestParameters.fromId, requestParameters.toId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the listed accounts from a group, leaving the rest of its members in place.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  The accounts themselves are kept; only their membership in this group ends, together with the access they had  through it.  The call is idempotent and forgiving: an ID that is not a member, and one that matches no account at all, are  both skipped without an error, and an empty list simply changes nothing.  The answer is the group with the members that remain.  Emptying a group cannot be done through `POST api/2.0/group/{id}/members`, which needs at least one valid  account, so list every member here, or move them away with `PUT api/2.0/group/{fromId}/members/{toId}`.
     * @summary Remove group members
     * @param {GroupApiRemoveMembersFromRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public removeMembersFrom(requestParameters: GroupApiRemoveMembersFromRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).removeMembersFrom(requestParameters.id, requestParameters.membersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Makes an account the manager of a group, replacing whoever managed it before.  The caller needs the permissions to edit groups and to add and remove users.  Both the group and the account have to exist: the operation answers 404 when the ID in the route matches no  live group and also when `userId` matches no account, so the message of the error says which of the two was  not found.  The account is added to the group at the same time, so a manager does not have to be a member beforehand, and  the previous manager stays in the group as an ordinary member.  A group has one manager, which makes the call idempotent when it names the account that manages it already.  The answer is the group with its new manager.  To change the members rather than the manager, use `PUT api/2.0/group/{id}/members`.
     * @summary Set a group manager
     * @param {GroupApiSetGroupManagerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public setGroupManager(requestParameters: GroupApiSetGroupManagerRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).setGroupManager(requestParameters.id, requestParameters.setManagerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the whole member list of a group with the accounts given in the request, removing everybody who is  not in that list.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  At least one of the listed accounts has to be usable as a group member, otherwise the call is rejected with  400 and the group is left untouched; the accounts that cannot be members - a guest, a disabled account or an  ID that matches nobody - are then silently skipped while the rest are applied.  The replacement is not atomic: the current members are removed first and the new ones added afterwards, so a  failure in between can leave the group empty.  The answer is the group with the members it ends up with, which is why it should be read instead of assuming  the request was applied verbatim.  To add or remove a few accounts without touching the others, use `PUT api/2.0/group/{id}/members` and  `DELETE api/2.0/group/{id}/members`.
     * @summary Replace group members
     * @param {GroupApiSetMembersToRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public setMembersTo(requestParameters: GroupApiSetMembersToRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).setMembersTo(requestParameters.id, requestParameters.membersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the name and the manager of a group and adds or removes members, in one call.  The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a  group that has not been deleted, otherwise the operation answers 404.  Every field is optional and the ones that are left out are kept: omitting `groupName` keeps the current name,  and omitting `groupManager` keeps the current manager rather than clearing it.  Accounts in `membersToAdd` that cannot be group members - a guest, a disabled account or an ID that matches  nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was  sent to see what was actually applied.  Members are added first and removed afterwards, an account listed in both lists therefore ends up removed,  and removing an account that is not a member changes nothing.  The change raises a `GroupUpdated` webhook, and the answer holds the group as it is after the update.
     * @summary Update a group
     * @param {GroupApiUpdateGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public updateGroup(requestParameters: GroupApiUpdateGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).updateGroup(requestParameters.id, requestParameters.updateGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

