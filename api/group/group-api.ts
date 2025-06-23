// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
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
import type { NoContentResultWrapper } from '../../models';
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
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-members-to/
         */
        addMembersTo: async (id: string, membersRequest?: MembersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addMembersTo', 'id', id)
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
         * Returns the detailed information about the selected group.   **Note**: This method returns full group information.
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
         * Returns the general information about all the groups, such as group ID and group manager.   **Note**: This method returns partial group information.
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
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeMembersFrom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-members-from/
         */
        removeMembersFrom: async (id: string, membersRequest?: MembersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeMembersFrom', 'id', id)
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
         * @param {SetManagerRequest} [setManagerRequest] The request for setting a group manager.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setGroupManager operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-group-manager/
         */
        setGroupManager: async (id: string, setManagerRequest?: SetManagerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setGroupManager', 'id', id)
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
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-members-to/
         */
        setMembersTo: async (id: string, membersRequest?: MembersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setMembersTo', 'id', id)
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
         * @param {UpdateGroupRequest} [updateGroupRequest] The request for updating a group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-group/
         */
        updateGroup: async (id: string, updateGroupRequest?: UpdateGroupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateGroup', 'id', id)
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
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-members-to/
         */
        async addMembersTo(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
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
        async deleteGroup(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NoContentResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGroup(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.deleteGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about the selected group.   **Note**: This method returns full group information.
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
         * Returns the general information about all the groups, such as group ID and group manager.   **Note**: This method returns partial group information.
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
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeMembersFrom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-members-from/
         */
        async removeMembersFrom(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeMembersFrom(id, membersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.removeMembersFrom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets a user with the ID specified in the request as a group manager.
         * @summary Set a group manager
         * @param {string} id The group ID.
         * @param {SetManagerRequest} [setManagerRequest] The request for setting a group manager.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setGroupManager operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-group-manager/
         */
        async setGroupManager(id: string, setManagerRequest?: SetManagerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setGroupManager(id, setManagerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.setGroupManager']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the group members with those specified in the request.
         * @summary Replace group members
         * @param {string} id The group ID.
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-members-to/
         */
        async setMembersTo(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setMembersTo(id, membersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupApi.setMembersTo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the existing group changing the group manager, name, and/or members.
         * @summary Update a group
         * @param {string} id The group ID.
         * @param {UpdateGroupRequest} [updateGroupRequest] The request for updating a group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-group/
         */
        async updateGroup(id: string, updateGroupRequest?: UpdateGroupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupWrapper>> {
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
         * @param {GroupRequestDto} [groupRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for addGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-group/
         * @throws {RequiredError}
         */
        addGroup(groupRequestDto?: GroupRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.addGroup(groupRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds new group members to the group with the ID specified in the request.
         * @summary Add group members
         * @param {string} id The group ID.
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * REST API Reference for addMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-members-to/
         * @throws {RequiredError}
         */
        addMembersTo(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.addMembersTo(id, membersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a group with the ID specified in the request from the list of groups on the portal.
         * @summary Delete a group
         * @param {string} id The group ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-group/
         * @throws {RequiredError}
         */
        deleteGroup(id: string, options?: RawAxiosRequestConfig): AxiosPromise<NoContentResultWrapper> {
            return localVarFp.deleteGroup(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about the selected group.   **Note**: This method returns full group information.
         * @summary Get a group
         * @param {string} id The group ID.
         * @param {boolean} [includeMembers] Specifies whether to include the group members or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group/
         * @throws {RequiredError}
         */
        getGroup(id: string, includeMembers?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.getGroup(id, includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of groups for the user with the ID specified in the request.
         * @summary Get user groups
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group-by-user-id/
         * @throws {RequiredError}
         */
        getGroupByUserId(userid: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupSummaryArrayWrapper> {
            return localVarFp.getGroupByUserId(userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the general information about all the groups, such as group ID and group manager.   **Note**: This method returns partial group information.
         * @summary Get groups
         * @param {string} [userId] The user ID.
         * @param {boolean} [manager] Specifies if the user is a manager or not.
         * @param {number} [count] The number of records to retrieve.
         * @param {number} [startIndex] The starting index for paginated results.
         * @param {string} [sortBy] Specifies the property used to sort the query results.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text used for filtering or searching group data.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups/
         * @throws {RequiredError}
         */
        getGroups(userId?: string, manager?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroups(userId, manager, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Moves all the members from the selected group to another one specified in the request.
         * @summary Move group members
         * @param {string} fromId The group ID to move from.
         * @param {string} toId The group ID to move to.
         * @param {*} [options] Override http request option.
         * REST API Reference for moveMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-members-to/
         * @throws {RequiredError}
         */
        moveMembersTo(fromId: string, toId: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.moveMembersTo(fromId, toId, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the group members specified in the request from the selected group.
         * @summary Remove group members
         * @param {string} id The group ID.
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * REST API Reference for removeMembersFrom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-members-from/
         * @throws {RequiredError}
         */
        removeMembersFrom(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.removeMembersFrom(id, membersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets a user with the ID specified in the request as a group manager.
         * @summary Set a group manager
         * @param {string} id The group ID.
         * @param {SetManagerRequest} [setManagerRequest] The request for setting a group manager.
         * @param {*} [options] Override http request option.
         * REST API Reference for setGroupManager operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-group-manager/
         * @throws {RequiredError}
         */
        setGroupManager(id: string, setManagerRequest?: SetManagerRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.setGroupManager(id, setManagerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the group members with those specified in the request.
         * @summary Replace group members
         * @param {string} id The group ID.
         * @param {MembersRequest} [membersRequest] The member request.
         * @param {*} [options] Override http request option.
         * REST API Reference for setMembersTo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-members-to/
         * @throws {RequiredError}
         */
        setMembersTo(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.setMembersTo(id, membersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the existing group changing the group manager, name, and/or members.
         * @summary Update a group
         * @param {string} id The group ID.
         * @param {UpdateGroupRequest} [updateGroupRequest] The request for updating a group.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-group/
         * @throws {RequiredError}
         */
        updateGroup(id: string, updateGroupRequest?: UpdateGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupWrapper> {
            return localVarFp.updateGroup(id, updateGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

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
     * @param {GroupRequestDto} [groupRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public addGroup(groupRequestDto?: GroupRequestDto, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).addGroup(groupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds new group members to the group with the ID specified in the request.
     * @summary Add group members
     * @param {string} id The group ID.
     * @param {MembersRequest} [membersRequest] The member request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public addMembersTo(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).addMembersTo(id, membersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a group with the ID specified in the request from the list of groups on the portal.
     * @summary Delete a group
     * @param {string} id The group ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public deleteGroup(id: string, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).deleteGroup(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about the selected group.   **Note**: This method returns full group information.
     * @summary Get a group
     * @param {string} id The group ID.
     * @param {boolean} [includeMembers] Specifies whether to include the group members or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroup(id: string, includeMembers?: boolean, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroup(id, includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of groups for the user with the ID specified in the request.
     * @summary Get user groups
     * @param {string} userid The user ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroupByUserId(userid: string, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroupByUserId(userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the general information about all the groups, such as group ID and group manager.   **Note**: This method returns partial group information.
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
     * @memberof GroupApi
     */
    public getGroups(userId?: string, manager?: boolean, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroups(userId, manager, count, startIndex, sortBy, sortOrder, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves all the members from the selected group to another one specified in the request.
     * @summary Move group members
     * @param {string} fromId The group ID to move from.
     * @param {string} toId The group ID to move to.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public moveMembersTo(fromId: string, toId: string, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).moveMembersTo(fromId, toId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the group members specified in the request from the selected group.
     * @summary Remove group members
     * @param {string} id The group ID.
     * @param {MembersRequest} [membersRequest] The member request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public removeMembersFrom(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).removeMembersFrom(id, membersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets a user with the ID specified in the request as a group manager.
     * @summary Set a group manager
     * @param {string} id The group ID.
     * @param {SetManagerRequest} [setManagerRequest] The request for setting a group manager.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public setGroupManager(id: string, setManagerRequest?: SetManagerRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).setGroupManager(id, setManagerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the group members with those specified in the request.
     * @summary Replace group members
     * @param {string} id The group ID.
     * @param {MembersRequest} [membersRequest] The member request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public setMembersTo(id: string, membersRequest?: MembersRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).setMembersTo(id, membersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the existing group changing the group manager, name, and/or members.
     * @summary Update a group
     * @param {string} id The group ID.
     * @param {UpdateGroupRequest} [updateGroupRequest] The request for updating a group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public updateGroup(id: string, updateGroupRequest?: UpdateGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupApiFp(this.configuration).updateGroup(id, updateGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

