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
import type { Culture } from '../../models';
// @ts-ignore
import type { EmployeeArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { InviteUsersRequestDto } from '../../models';
// @ts-ignore
import type { MemberRequestDto } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UpdateMemberRequestDto } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
/**
 * ProfilesApi - axios parameter creator
 * @export
 */
export const ProfilesApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.
         * @summary Add a user
         * @param {MemberRequestDto} [memberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-member/
         */
        addMember: async (memberRequestDto?: MemberRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(memberRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a user with the ID specified in the request from the portal.
         * @summary Delete a user
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member/
         */
        deleteMember: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('deleteMember', 'userid', userid)
            const localVarPath = `/api/2.0/people/{userid}`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
         * Deletes the current user profile.
         * @summary Delete my profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteProfile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-profile/
         */
        deleteProfile: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/@self`;
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
         * Returns a list of profiles for all the portal users.
         * @summary Get profiles
         * @param {number} [count] The maximum number of items to be retrieved in the response.
         * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
         * @param {string} [filterBy] Specifies the filter criteria for user-related queries.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The text value used as an additional filter criterion for profiles retrieval.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllProfiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-profiles/
         */
        getAllProfiles: async (count?: number, startIndex?: number, filterBy?: string, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people`;
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterBy !== undefined) {
                localVarQueryParameter['filterBy'] = filterBy;
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
         * Returns the user claims.
         * @summary Get user claims
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClaims operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-claims/
         */
        getClaims: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/tokendiagnostics`;
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
         * Returns the detailed information about a profile of the user with the email specified in the request.
         * @summary Get a profile by user email
         * @param {string} [email] The user email address.
         * @param {string} [culture] Culture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProfileByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-email/
         */
        getProfileByEmail: async (email?: string, culture?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/email`;
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

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (culture !== undefined) {
                localVarQueryParameter['culture'] = culture;
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
         * Returns the detailed information about a profile of the user with the ID specified in the request.
         * @summary Get a profile by user ID
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProfileByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-user-id/
         */
        getProfileByUserId: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getProfileByUserId', 'userid', userid)
            const localVarPath = `/api/2.0/people/{userid}`
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
         * Returns the detailed information about the current user profile.
         * @summary Get my profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSelfProfile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-self-profile/
         */
        getSelfProfile: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/@self`;
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
         * Invites users specified in the request to the current portal.
         * @summary Invite users
         * @param {InviteUsersRequestDto} [inviteUsersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for inviteUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/invite-users/
         */
        inviteUsers: async (inviteUsersRequestDto?: InviteUsersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/invite`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(inviteUsersRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a list of the users with the IDs specified in the request.
         * @summary Delete users
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-users/
         */
        removeUsers: async (updateMembersRequestDto?: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/delete`;
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
         * Resends emails to the users who have not activated their emails.
         * @summary Resend activation emails
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendUserInvites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-user-invites/
         */
        resendUserInvites: async (updateMembersRequestDto?: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/invite`;
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
         * Sends a message to the user email with the instructions to change the email address connected to the portal.
         * @summary Send instructions to change email
         * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEmailChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-email-change-instructions/
         */
        sendEmailChangeInstructions: async (updateMemberRequestDto?: UpdateMemberRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/email`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMemberRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.
         * @summary Update a user
         * @param {string} userid The user ID.
         * @param {UpdateMemberRequestDto} updateMemberRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member/
         */
        updateMember: async (userid: string, updateMemberRequestDto: UpdateMemberRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('updateMember', 'userid', userid)
            // verify required parameter 'updateMemberRequestDto' is not null or undefined
            assertParamExists('updateMember', 'updateMemberRequestDto', updateMemberRequestDto)
            const localVarPath = `/api/2.0/people/{userid}`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMemberRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the user culture code with the parameters specified in the request.
         * @summary Update a user culture code
         * @param {string} userid The user ID.
         * @param {Culture} [culture] The culture code parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMemberCulture operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-culture/
         */
        updateMemberCulture: async (userid: string, culture?: Culture, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('updateMemberCulture', 'userid', userid)
            const localVarPath = `/api/2.0/people/{userid}/culture`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(culture, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfilesApi - functional programming interface
 * @export
 */
export const ProfilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProfilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.
         * @summary Add a user
         * @param {MemberRequestDto} [memberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-member/
         */
        async addMember(memberRequestDto?: MemberRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addMember(memberRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.addMember']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a user with the ID specified in the request from the portal.
         * @summary Delete a user
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member/
         */
        async deleteMember(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMember(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.deleteMember']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the current user profile.
         * @summary Delete my profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteProfile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-profile/
         */
        async deleteProfile(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProfile(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.deleteProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of profiles for all the portal users.
         * @summary Get profiles
         * @param {number} [count] The maximum number of items to be retrieved in the response.
         * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
         * @param {string} [filterBy] Specifies the filter criteria for user-related queries.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The text value used as an additional filter criterion for profiles retrieval.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAllProfiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-profiles/
         */
        async getAllProfiles(count?: number, startIndex?: number, filterBy?: string, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProfiles(count, startIndex, filterBy, sortBy, sortOrder, filterSeparator, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.getAllProfiles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the user claims.
         * @summary Get user claims
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClaims operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-claims/
         */
        async getClaims(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClaims(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.getClaims']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about a profile of the user with the email specified in the request.
         * @summary Get a profile by user email
         * @param {string} [email] The user email address.
         * @param {string} [culture] Culture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProfileByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-email/
         */
        async getProfileByEmail(email?: string, culture?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfileByEmail(email, culture, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.getProfileByEmail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about a profile of the user with the ID specified in the request.
         * @summary Get a profile by user ID
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProfileByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-user-id/
         */
        async getProfileByUserId(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfileByUserId(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.getProfileByUserId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about the current user profile.
         * @summary Get my profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSelfProfile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-self-profile/
         */
        async getSelfProfile(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSelfProfile(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.getSelfProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Invites users specified in the request to the current portal.
         * @summary Invite users
         * @param {InviteUsersRequestDto} [inviteUsersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for inviteUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/invite-users/
         */
        async inviteUsers(inviteUsersRequestDto?: InviteUsersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inviteUsers(inviteUsersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.inviteUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a list of the users with the IDs specified in the request.
         * @summary Delete users
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-users/
         */
        async removeUsers(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeUsers(updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.removeUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resends emails to the users who have not activated their emails.
         * @summary Resend activation emails
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendUserInvites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-user-invites/
         */
        async resendUserInvites(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendUserInvites(updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.resendUserInvites']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a message to the user email with the instructions to change the email address connected to the portal.
         * @summary Send instructions to change email
         * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEmailChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-email-change-instructions/
         */
        async sendEmailChangeInstructions(updateMemberRequestDto?: UpdateMemberRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendEmailChangeInstructions(updateMemberRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.sendEmailChangeInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.
         * @summary Update a user
         * @param {string} userid The user ID.
         * @param {UpdateMemberRequestDto} updateMemberRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member/
         */
        async updateMember(userid: string, updateMemberRequestDto: UpdateMemberRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMember(userid, updateMemberRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.updateMember']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the user culture code with the parameters specified in the request.
         * @summary Update a user culture code
         * @param {string} userid The user ID.
         * @param {Culture} [culture] The culture code parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMemberCulture operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-culture/
         */
        async updateMemberCulture(userid: string, culture?: Culture, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMemberCulture(userid, culture, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProfilesApi.updateMemberCulture']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProfilesApi - factory interface
 * @export
 */
export const ProfilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProfilesApiFp(configuration)
    return {
        /**
         * Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.
         * @summary Add a user
         * @param {MemberRequestDto} [memberRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for addMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-member/
         * @throws {RequiredError}
         */
        addMember(memberRequestDto?: MemberRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.addMember(memberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a user with the ID specified in the request from the portal.
         * @summary Delete a user
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member/
         * @throws {RequiredError}
         */
        deleteMember(userid: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.deleteMember(userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the current user profile.
         * @summary Delete my profile
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteProfile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-profile/
         * @throws {RequiredError}
         */
        deleteProfile(options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.deleteProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of profiles for all the portal users.
         * @summary Get profiles
         * @param {number} [count] The maximum number of items to be retrieved in the response.
         * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
         * @param {string} [filterBy] Specifies the filter criteria for user-related queries.
         * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
         * @param {string} [filterValue] The text value used as an additional filter criterion for profiles retrieval.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllProfiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-profiles/
         * @throws {RequiredError}
         */
        getAllProfiles(count?: number, startIndex?: number, filterBy?: string, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getAllProfiles(count, startIndex, filterBy, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the user claims.
         * @summary Get user claims
         * @param {*} [options] Override http request option.
         * REST API Reference for getClaims operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-claims/
         * @throws {RequiredError}
         */
        getClaims(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getClaims(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about a profile of the user with the email specified in the request.
         * @summary Get a profile by user email
         * @param {string} [email] The user email address.
         * @param {string} [culture] Culture
         * @param {*} [options] Override http request option.
         * REST API Reference for getProfileByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-email/
         * @throws {RequiredError}
         */
        getProfileByEmail(email?: string, culture?: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.getProfileByEmail(email, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about a profile of the user with the ID specified in the request.
         * @summary Get a profile by user ID
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProfileByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-user-id/
         * @throws {RequiredError}
         */
        getProfileByUserId(userid: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.getProfileByUserId(userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about the current user profile.
         * @summary Get my profile
         * @param {*} [options] Override http request option.
         * REST API Reference for getSelfProfile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-self-profile/
         * @throws {RequiredError}
         */
        getSelfProfile(options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.getSelfProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * Invites users specified in the request to the current portal.
         * @summary Invite users
         * @param {InviteUsersRequestDto} [inviteUsersRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for inviteUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/invite-users/
         * @throws {RequiredError}
         */
        inviteUsers(inviteUsersRequestDto?: InviteUsersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.inviteUsers(inviteUsersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a list of the users with the IDs specified in the request.
         * @summary Delete users
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for removeUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-users/
         * @throws {RequiredError}
         */
        removeUsers(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.removeUsers(updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Resends emails to the users who have not activated their emails.
         * @summary Resend activation emails
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for resendUserInvites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-user-invites/
         * @throws {RequiredError}
         */
        resendUserInvites(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.resendUserInvites(updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a message to the user email with the instructions to change the email address connected to the portal.
         * @summary Send instructions to change email
         * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendEmailChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-email-change-instructions/
         * @throws {RequiredError}
         */
        sendEmailChangeInstructions(updateMemberRequestDto?: UpdateMemberRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendEmailChangeInstructions(updateMemberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.
         * @summary Update a user
         * @param {string} userid The user ID.
         * @param {UpdateMemberRequestDto} updateMemberRequestDto The request parameters for updating the user information.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member/
         * @throws {RequiredError}
         */
        updateMember(userid: string, updateMemberRequestDto: UpdateMemberRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.updateMember(userid, updateMemberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the user culture code with the parameters specified in the request.
         * @summary Update a user culture code
         * @param {string} userid The user ID.
         * @param {Culture} [culture] The culture code parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateMemberCulture operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-culture/
         * @throws {RequiredError}
         */
        updateMemberCulture(userid: string, culture?: Culture, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.updateMemberCulture(userid, culture, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfilesApi - object-oriented interface
 * @export
 * @class ProfilesApi
 * @extends {BaseAPI}
 */
export class ProfilesApi extends BaseAPI {
    /**
     * Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.
     * @summary Add a user
     * @param {MemberRequestDto} [memberRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public addMember(memberRequestDto?: MemberRequestDto, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).addMember(memberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a user with the ID specified in the request from the portal.
     * @summary Delete a user
     * @param {string} userid The user ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public deleteMember(userid: string, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).deleteMember(userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the current user profile.
     * @summary Delete my profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public deleteProfile(options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).deleteProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of profiles for all the portal users.
     * @summary Get profiles
     * @param {number} [count] The maximum number of items to be retrieved in the response.
     * @param {number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
     * @param {string} [filterBy] Specifies the filter criteria for user-related queries.
     * @param {string} [sortBy] Specifies the property or field name by which the results should be sorted.
     * @param {SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {string} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
     * @param {string} [filterValue] The text value used as an additional filter criterion for profiles retrieval.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public getAllProfiles(count?: number, startIndex?: number, filterBy?: string, sortBy?: string, sortOrder?: SortOrder, filterSeparator?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).getAllProfiles(count, startIndex, filterBy, sortBy, sortOrder, filterSeparator, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the user claims.
     * @summary Get user claims
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public getClaims(options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).getClaims(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about a profile of the user with the email specified in the request.
     * @summary Get a profile by user email
     * @param {string} [email] The user email address.
     * @param {string} [culture] Culture
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public getProfileByEmail(email?: string, culture?: string, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).getProfileByEmail(email, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about a profile of the user with the ID specified in the request.
     * @summary Get a profile by user ID
     * @param {string} userid The user ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public getProfileByUserId(userid: string, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).getProfileByUserId(userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about the current user profile.
     * @summary Get my profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public getSelfProfile(options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).getSelfProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invites users specified in the request to the current portal.
     * @summary Invite users
     * @param {InviteUsersRequestDto} [inviteUsersRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public inviteUsers(inviteUsersRequestDto?: InviteUsersRequestDto, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).inviteUsers(inviteUsersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a list of the users with the IDs specified in the request.
     * @summary Delete users
     * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public removeUsers(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).removeUsers(updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resends emails to the users who have not activated their emails.
     * @summary Resend activation emails
     * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public resendUserInvites(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).resendUserInvites(updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a message to the user email with the instructions to change the email address connected to the portal.
     * @summary Send instructions to change email
     * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public sendEmailChangeInstructions(updateMemberRequestDto?: UpdateMemberRequestDto, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).sendEmailChangeInstructions(updateMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.
     * @summary Update a user
     * @param {string} userid The user ID.
     * @param {UpdateMemberRequestDto} updateMemberRequestDto The request parameters for updating the user information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public updateMember(userid: string, updateMemberRequestDto: UpdateMemberRequestDto, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).updateMember(userid, updateMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the user culture code with the parameters specified in the request.
     * @summary Update a user culture code
     * @param {string} userid The user ID.
     * @param {Culture} [culture] The culture code parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public updateMemberCulture(userid: string, culture?: Culture, options?: RawAxiosRequestConfig) {
        return ProfilesApiFp(this.configuration).updateMemberCulture(userid, culture, options).then((request) => request(this.axios, this.basePath));
    }
}

