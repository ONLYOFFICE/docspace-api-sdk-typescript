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
         * Adds a new group with the group manager, name, and members specified in the request.
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
         * Adds new group members to the group with the ID specified in the request.
         * @summary Add group members
         * @param {string} id The group ID.
         * @param {MembersRequest} membersRequest The member request.
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
         * Deletes a group with the ID specified in the request from the list of groups on the portal.
         * @summary Delete a group
         * @param {string} id The group ID.
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
         * Returns the detailed information about the selected group.
         * @summary Get a group
         * @param {string} id The group ID.
         * @param {boolean} [includeMembers] Specifies whether to include the group members or not.
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
         * Returns a list of groups for the user with the ID specified in the request.
         * @summary Get user groups
         * @param {string} userid The user ID.
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
         * Returns the general information about all the groups, such as group ID and group manager.
         * @summary Get groups
         * @param {string} [userId] The user ID.
         * @param {boolean} [manager] Specifies if the user is a manager or not.
         * @param {number} [count] The number of records to retrieve.
         * @param {number} [startIndex] The starting index for paginated results.
         * @param {string} [sortBy] Specifies the property used to sort the query results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching group data.
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
         * Moves all the members from the selected group to another one specified in the request.
         * @summary Move group members
         * @param {string} fromId The group ID to move from.
         * @param {string} toId The group ID to move to.
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
         * Removes the group members specified in the request from the selected group.
         * @summary Remove group members
         * @param {string} id The group ID.
         * @param {MembersRequest} membersRequest The member request.
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
         * Sets a user with the ID specified in the request as a group manager.
         * @summary Set a group manager
         * @param {string} id The group ID.
         * @param {SetManagerRequest} setManagerRequest The request for setting a group manager.
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
         * Replaces the group members with those specified in the request.
         * @summary Replace group members
         * @param {string} id The group ID.
         * @param {MembersRequest} membersRequest The member request.
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
         * Updates the existing group changing the group manager, name, and/or members.
         * @summary Update a group
         * @param {string} id The group ID.
         * @param {UpdateGroupRequest} updateGroupRequest The request for updating a group.
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
         * Adds a new group with the group manager, name, and members specified in the request.
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
         * Adds new group members to the group with the ID specified in the request.
         * @summary Add group members
         * @param {string} id The group ID.
         * @param {MembersRequest} membersRequest The member request.
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
         * Deletes a group with the ID specified in the request from the list of groups on the portal.
         * @summary Delete a group
         * @param {string} id The group ID.
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
         * Returns the detailed information about the selected group.
         * @summary Get a group
         * @param {string} id The group ID.
         * @param {boolean} [includeMembers] Specifies whether to include the group members or not.
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
         * Returns a list of groups for the user with the ID specified in the request.
         * @summary Get user groups
         * @param {string} userid The user ID.
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
         * Returns the general information about all the groups, such as group ID and group manager.
         * @summary Get groups
         * @param {string} [userId] The user ID.
         * @param {boolean} [manager] Specifies if the user is a manager or not.
         * @param {number} [count] The number of records to retrieve.
         * @param {number} [startIndex] The starting index for paginated results.
         * @param {string} [sortBy] Specifies the property used to sort the query results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching group data.
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
         * Moves all the members from the selected group to another one specified in the request.
         * @summary Move group members
         * @param {string} fromId The group ID to move from.
         * @param {string} toId The group ID to move to.
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
         * Removes the group members specified in the request from the selected group.
         * @summary Remove group members
         * @param {string} id The group ID.
         * @param {MembersRequest} membersRequest The member request.
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
         * Sets a user with the ID specified in the request as a group manager.
         * @summary Set a group manager
         * @param {string} id The group ID.
         * @param {SetManagerRequest} setManagerRequest The request for setting a group manager.
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
         * Replaces the group members with those specified in the request.
         * @summary Replace group members
         * @param {string} id The group ID.
         * @param {MembersRequest} membersRequest The member request.
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
         * Updates the existing group changing the group manager, name, and/or members.
         * @summary Update a group
         * @param {string} id The group ID.
         * @param {UpdateGroupRequest} updateGroupRequest The request for updating a group.
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
         * Adds a new group with the group manager, name, and members specified in the request.
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
         * Adds new group members to the group with the ID specified in the request.
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
         * Deletes a group with the ID specified in the request from the list of groups on the portal.
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
         * Returns the detailed information about the selected group.
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
         * Returns a list of groups for the user with the ID specified in the request.
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
         * Returns the general information about all the groups, such as group ID and group manager.
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
         * Moves all the members from the selected group to another one specified in the request.
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
         * Removes the group members specified in the request from the selected group.
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
         * Sets a user with the ID specified in the request as a group manager.
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
         * Replaces the group members with those specified in the request.
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
         * Updates the existing group changing the group manager, name, and/or members.
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
     * The group ID.
     * @type {string}
     * @memberof GroupApiAddMembersTo
     */
    readonly id: string

    /**
     * The member request.
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
     * The group ID.
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
     * The group ID.
     * @type {string}
     * @memberof GroupApiGetGroup
     */
    readonly id: string

    /**
     * Specifies whether to include the group members or not.
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
     * The user ID.
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
     * The user ID.
     * @type {string}
     * @memberof GroupApiGetGroups
     */
    readonly userId?: string

    /**
     * Specifies if the user is a manager or not.
     * @type {boolean}
     * @memberof GroupApiGetGroups
     */
    readonly manager?: boolean

    /**
     * The number of records to retrieve.
     * @type {number}
     * @memberof GroupApiGetGroups
     */
    readonly count?: number

    /**
     * The starting index for paginated results.
     * @type {number}
     * @memberof GroupApiGetGroups
     */
    readonly startIndex?: number

    /**
     * Specifies the property used to sort the query results.
     * @type {string}
     * @memberof GroupApiGetGroups
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof GroupApiGetGroups
     */
    readonly sortOrder?: SortOrder

    /**
     * The text used for filtering or searching group data.
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
     * The group ID to move from.
     * @type {string}
     * @memberof GroupApiMoveMembersTo
     */
    readonly fromId: string

    /**
     * The group ID to move to.
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
     * The group ID.
     * @type {string}
     * @memberof GroupApiRemoveMembersFrom
     */
    readonly id: string

    /**
     * The member request.
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
     * The group ID.
     * @type {string}
     * @memberof GroupApiSetGroupManager
     */
    readonly id: string

    /**
     * The request for setting a group manager.
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
     * The group ID.
     * @type {string}
     * @memberof GroupApiSetMembersTo
     */
    readonly id: string

    /**
     * The member request.
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
     * The group ID.
     * @type {string}
     * @memberof GroupApiUpdateGroup
     */
    readonly id: string

    /**
     * The request for updating a group.
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
     * Adds a new group with the group manager, name, and members specified in the request.
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
     * Adds new group members to the group with the ID specified in the request.
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
     * Deletes a group with the ID specified in the request from the list of groups on the portal.
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
     * Returns the detailed information about the selected group.
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
     * Returns a list of groups for the user with the ID specified in the request.
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
     * Returns the general information about all the groups, such as group ID and group manager.
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
     * Moves all the members from the selected group to another one specified in the request.
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
     * Removes the group members specified in the request from the selected group.
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
     * Sets a user with the ID specified in the request as a group manager.
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
     * Replaces the group members with those specified in the request.
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
     * Updates the existing group changing the group manager, name, and/or members.
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

