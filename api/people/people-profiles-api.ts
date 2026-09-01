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
import type { Culture } from '../../models';
// @ts-ignore
import type { EmployeeArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { InviteUsersRequestDto } from '../../models';
// @ts-ignore
import type { MemberRequestDto } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { UpdateMemberRequestDto } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
// @ts-ignore
import type { UserExistsResponseWrapper } from '../../models';
/**
 * PeopleProfilesApi - axios parameter creator
 * @export
 */
export const PeopleProfilesApiAxiosParamCreator = function (configuration?: Configuration) {
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
         * Returns data indicating whether a user with the specified email exists on the portal.
         * @summary Check if a user exists by email
         * @param {string} [email] The user email address.
         * @param {string} [encemail] The user encrypted email address.
         * @param {string} [culture] Culture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkUserExistsByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-user-exists-by-email/
         */
        checkUserExistsByEmail: async (email?: string, encemail?: string, culture?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/exists`;
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

            if (encemail !== undefined) {
                localVarQueryParameter['encemail'] = encemail;
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
         * @param {string} [encemail] The user encrypted email address.
         * @param {string} [culture] Culture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProfileByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-email/
         */
        getProfileByEmail: async (email?: string, encemail?: string, culture?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (encemail !== undefined) {
                localVarQueryParameter['encemail'] = encemail;
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
         * Updates the user culture with the parameters specified in the request.
         * @summary Update a user culture
         * @param {string} userid The user ID.
         * @param {Culture} [culture] The culture name parameters.
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
 * PeopleProfilesApi - functional programming interface
 * @export
 */
export const PeopleProfilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleProfilesApiAxiosParamCreator(configuration)
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.addMember']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns data indicating whether a user with the specified email exists on the portal.
         * @summary Check if a user exists by email
         * @param {string} [email] The user email address.
         * @param {string} [encemail] The user encrypted email address.
         * @param {string} [culture] Culture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkUserExistsByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-user-exists-by-email/
         */
        async checkUserExistsByEmail(email?: string, encemail?: string, culture?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserExistsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkUserExistsByEmail(email, encemail, culture, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.checkUserExistsByEmail']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.deleteMember']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.deleteProfile']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.getAllProfiles']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.getClaims']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the detailed information about a profile of the user with the email specified in the request.
         * @summary Get a profile by user email
         * @param {string} [email] The user email address.
         * @param {string} [encemail] The user encrypted email address.
         * @param {string} [culture] Culture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProfileByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-email/
         */
        async getProfileByEmail(email?: string, encemail?: string, culture?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfileByEmail(email, encemail, culture, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.getProfileByEmail']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.getProfileByUserId']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.getSelfProfile']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.inviteUsers']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.removeUsers']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.resendUserInvites']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.updateMember']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the user culture with the parameters specified in the request.
         * @summary Update a user culture
         * @param {string} userid The user ID.
         * @param {Culture} [culture] The culture name parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMemberCulture operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-culture/
         */
        async updateMemberCulture(userid: string, culture?: Culture, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMemberCulture(userid, culture, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleProfilesApi.updateMemberCulture']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleProfilesApi - factory interface
 * @export
 */
export const PeopleProfilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleProfilesApiFp(configuration)
    return {
        /**
         * Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.
         * @summary Add a user
         * @param {PeopleProfilesApiAddMemberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-member/
         * @throws {RequiredError}
         */
        addMember(requestParameters: PeopleProfilesApiAddMemberRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.addMember(requestParameters.memberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns data indicating whether a user with the specified email exists on the portal.
         * @summary Check if a user exists by email
         * @param {PeopleProfilesApiCheckUserExistsByEmailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkUserExistsByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-user-exists-by-email/
         * @throws {RequiredError}
         */
        checkUserExistsByEmail(requestParameters: PeopleProfilesApiCheckUserExistsByEmailRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UserExistsResponseWrapper> {
            return localVarFp.checkUserExistsByEmail(requestParameters.email, requestParameters.encemail, requestParameters.culture, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a user with the ID specified in the request from the portal.
         * @summary Delete a user
         * @param {PeopleProfilesApiDeleteMemberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member/
         * @throws {RequiredError}
         */
        deleteMember(requestParameters: PeopleProfilesApiDeleteMemberRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.deleteMember(requestParameters.userid, options).then((request) => request(axios, basePath));
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
         * @param {PeopleProfilesApiGetAllProfilesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAllProfiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-profiles/
         * @throws {RequiredError}
         */
        getAllProfiles(requestParameters: PeopleProfilesApiGetAllProfilesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.getAllProfiles(requestParameters.count, requestParameters.startIndex, requestParameters.filterBy, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(axios, basePath));
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
         * @param {PeopleProfilesApiGetProfileByEmailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProfileByEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-email/
         * @throws {RequiredError}
         */
        getProfileByEmail(requestParameters: PeopleProfilesApiGetProfileByEmailRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.getProfileByEmail(requestParameters.email, requestParameters.encemail, requestParameters.culture, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the detailed information about a profile of the user with the ID specified in the request.
         * @summary Get a profile by user ID
         * @param {PeopleProfilesApiGetProfileByUserIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProfileByUserId operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-user-id/
         * @throws {RequiredError}
         */
        getProfileByUserId(requestParameters: PeopleProfilesApiGetProfileByUserIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.getProfileByUserId(requestParameters.userid, options).then((request) => request(axios, basePath));
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
         * @param {PeopleProfilesApiInviteUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for inviteUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/invite-users/
         * @throws {RequiredError}
         */
        inviteUsers(requestParameters: PeopleProfilesApiInviteUsersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.inviteUsers(requestParameters.inviteUsersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a list of the users with the IDs specified in the request.
         * @summary Delete users
         * @param {PeopleProfilesApiRemoveUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for removeUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-users/
         * @throws {RequiredError}
         */
        removeUsers(requestParameters: PeopleProfilesApiRemoveUsersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.removeUsers(requestParameters.updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Resends emails to the users who have not activated their emails.
         * @summary Resend activation emails
         * @param {PeopleProfilesApiResendUserInvitesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for resendUserInvites operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-user-invites/
         * @throws {RequiredError}
         */
        resendUserInvites(requestParameters: PeopleProfilesApiResendUserInvitesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.resendUserInvites(requestParameters.updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.
         * @summary Update a user
         * @param {PeopleProfilesApiUpdateMemberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateMember operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member/
         * @throws {RequiredError}
         */
        updateMember(requestParameters: PeopleProfilesApiUpdateMemberRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.updateMember(requestParameters.userid, requestParameters.updateMemberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the user culture with the parameters specified in the request.
         * @summary Update a user culture
         * @param {PeopleProfilesApiUpdateMemberCultureRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateMemberCulture operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-culture/
         * @throws {RequiredError}
         */
        updateMemberCulture(requestParameters: PeopleProfilesApiUpdateMemberCultureRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.updateMemberCulture(requestParameters.userid, requestParameters.culture, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addMember operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiAddMemberRequest
 */
export interface PeopleProfilesApiAddMemberRequest {
    /**
     * 
     * @type {MemberRequestDto}
     * @memberof PeopleProfilesApiAddMember
     */
    readonly memberRequestDto?: MemberRequestDto
}

/**
 * Request parameters for checkUserExistsByEmail operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiCheckUserExistsByEmailRequest
 */
export interface PeopleProfilesApiCheckUserExistsByEmailRequest {
    /**
     * The user email address.
     * @type {string}
     * @memberof PeopleProfilesApiCheckUserExistsByEmail
     */
    readonly email?: string

    /**
     * The user encrypted email address.
     * @type {string}
     * @memberof PeopleProfilesApiCheckUserExistsByEmail
     */
    readonly encemail?: string

    /**
     * Culture
     * @type {string}
     * @memberof PeopleProfilesApiCheckUserExistsByEmail
     */
    readonly culture?: string
}

/**
 * Request parameters for deleteMember operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiDeleteMemberRequest
 */
export interface PeopleProfilesApiDeleteMemberRequest {
    /**
     * The user ID.
     * @type {string}
     * @memberof PeopleProfilesApiDeleteMember
     */
    readonly userid: string
}

/**
 * Request parameters for getAllProfiles operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiGetAllProfilesRequest
 */
export interface PeopleProfilesApiGetAllProfilesRequest {
    /**
     * The maximum number of items to be retrieved in the response.
     * @type {number}
     * @memberof PeopleProfilesApiGetAllProfiles
     */
    readonly count?: number

    /**
     * The zero-based index of the first item to be retrieved in a filtered result set.
     * @type {number}
     * @memberof PeopleProfilesApiGetAllProfiles
     */
    readonly startIndex?: number

    /**
     * Specifies the filter criteria for user-related queries.
     * @type {string}
     * @memberof PeopleProfilesApiGetAllProfiles
     */
    readonly filterBy?: string

    /**
     * Specifies the property or field name by which the results should be sorted.
     * @type {string}
     * @memberof PeopleProfilesApiGetAllProfiles
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof PeopleProfilesApiGetAllProfiles
     */
    readonly sortOrder?: SortOrder

    /**
     * The character or string used to separate multiple filter values in a filtering query.
     * @type {string}
     * @memberof PeopleProfilesApiGetAllProfiles
     */
    readonly filterSeparator?: string

    /**
     * The text value used as an additional filter criterion for profiles retrieval.
     * @type {string}
     * @memberof PeopleProfilesApiGetAllProfiles
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getProfileByEmail operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiGetProfileByEmailRequest
 */
export interface PeopleProfilesApiGetProfileByEmailRequest {
    /**
     * The user email address.
     * @type {string}
     * @memberof PeopleProfilesApiGetProfileByEmail
     */
    readonly email?: string

    /**
     * The user encrypted email address.
     * @type {string}
     * @memberof PeopleProfilesApiGetProfileByEmail
     */
    readonly encemail?: string

    /**
     * Culture
     * @type {string}
     * @memberof PeopleProfilesApiGetProfileByEmail
     */
    readonly culture?: string
}

/**
 * Request parameters for getProfileByUserId operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiGetProfileByUserIdRequest
 */
export interface PeopleProfilesApiGetProfileByUserIdRequest {
    /**
     * The user ID.
     * @type {string}
     * @memberof PeopleProfilesApiGetProfileByUserId
     */
    readonly userid: string
}

/**
 * Request parameters for inviteUsers operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiInviteUsersRequest
 */
export interface PeopleProfilesApiInviteUsersRequest {
    /**
     * 
     * @type {InviteUsersRequestDto}
     * @memberof PeopleProfilesApiInviteUsers
     */
    readonly inviteUsersRequestDto?: InviteUsersRequestDto
}

/**
 * Request parameters for removeUsers operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiRemoveUsersRequest
 */
export interface PeopleProfilesApiRemoveUsersRequest {
    /**
     * 
     * @type {UpdateMembersRequestDto}
     * @memberof PeopleProfilesApiRemoveUsers
     */
    readonly updateMembersRequestDto?: UpdateMembersRequestDto
}

/**
 * Request parameters for resendUserInvites operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiResendUserInvitesRequest
 */
export interface PeopleProfilesApiResendUserInvitesRequest {
    /**
     * 
     * @type {UpdateMembersRequestDto}
     * @memberof PeopleProfilesApiResendUserInvites
     */
    readonly updateMembersRequestDto?: UpdateMembersRequestDto
}

/**
 * Request parameters for updateMember operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiUpdateMemberRequest
 */
export interface PeopleProfilesApiUpdateMemberRequest {
    /**
     * The user ID.
     * @type {string}
     * @memberof PeopleProfilesApiUpdateMember
     */
    readonly userid: string

    /**
     * The request parameters for updating the user information.
     * @type {UpdateMemberRequestDto}
     * @memberof PeopleProfilesApiUpdateMember
     */
    readonly updateMemberRequestDto: UpdateMemberRequestDto
}

/**
 * Request parameters for updateMemberCulture operation in PeopleProfilesApi.
 * @export
 * @interface PeopleProfilesApiUpdateMemberCultureRequest
 */
export interface PeopleProfilesApiUpdateMemberCultureRequest {
    /**
     * The user ID.
     * @type {string}
     * @memberof PeopleProfilesApiUpdateMemberCulture
     */
    readonly userid: string

    /**
     * The culture name parameters.
     * @type {Culture}
     * @memberof PeopleProfilesApiUpdateMemberCulture
     */
    readonly culture?: Culture
}

/**
 * PeopleProfilesApi - object-oriented interface
 * @export
 * @class PeopleProfilesApi
 * @extends {BaseAPI}
 */
export class PeopleProfilesApi extends BaseAPI {
    /**
     * Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.
     * @summary Add a user
     * @param {PeopleProfilesApiAddMemberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public addMember(requestParameters: PeopleProfilesApiAddMemberRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).addMember(requestParameters.memberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns data indicating whether a user with the specified email exists on the portal.
     * @summary Check if a user exists by email
     * @param {PeopleProfilesApiCheckUserExistsByEmailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public checkUserExistsByEmail(requestParameters: PeopleProfilesApiCheckUserExistsByEmailRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).checkUserExistsByEmail(requestParameters.email, requestParameters.encemail, requestParameters.culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a user with the ID specified in the request from the portal.
     * @summary Delete a user
     * @param {PeopleProfilesApiDeleteMemberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public deleteMember(requestParameters: PeopleProfilesApiDeleteMemberRequest, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).deleteMember(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the current user profile.
     * @summary Delete my profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public deleteProfile(options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).deleteProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of profiles for all the portal users.
     * @summary Get profiles
     * @param {PeopleProfilesApiGetAllProfilesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public getAllProfiles(requestParameters: PeopleProfilesApiGetAllProfilesRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).getAllProfiles(requestParameters.count, requestParameters.startIndex, requestParameters.filterBy, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterSeparator, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the user claims.
     * @summary Get user claims
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public getClaims(options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).getClaims(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about a profile of the user with the email specified in the request.
     * @summary Get a profile by user email
     * @param {PeopleProfilesApiGetProfileByEmailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public getProfileByEmail(requestParameters: PeopleProfilesApiGetProfileByEmailRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).getProfileByEmail(requestParameters.email, requestParameters.encemail, requestParameters.culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about a profile of the user with the ID specified in the request.
     * @summary Get a profile by user ID
     * @param {PeopleProfilesApiGetProfileByUserIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public getProfileByUserId(requestParameters: PeopleProfilesApiGetProfileByUserIdRequest, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).getProfileByUserId(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the detailed information about the current user profile.
     * @summary Get my profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public getSelfProfile(options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).getSelfProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invites users specified in the request to the current portal.
     * @summary Invite users
     * @param {PeopleProfilesApiInviteUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public inviteUsers(requestParameters: PeopleProfilesApiInviteUsersRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).inviteUsers(requestParameters.inviteUsersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a list of the users with the IDs specified in the request.
     * @summary Delete users
     * @param {PeopleProfilesApiRemoveUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public removeUsers(requestParameters: PeopleProfilesApiRemoveUsersRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).removeUsers(requestParameters.updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resends emails to the users who have not activated their emails.
     * @summary Resend activation emails
     * @param {PeopleProfilesApiResendUserInvitesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public resendUserInvites(requestParameters: PeopleProfilesApiResendUserInvitesRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).resendUserInvites(requestParameters.updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.
     * @summary Update a user
     * @param {PeopleProfilesApiUpdateMemberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public updateMember(requestParameters: PeopleProfilesApiUpdateMemberRequest, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).updateMember(requestParameters.userid, requestParameters.updateMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the user culture with the parameters specified in the request.
     * @summary Update a user culture
     * @param {PeopleProfilesApiUpdateMemberCultureRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleProfilesApi
     */
    public updateMemberCulture(requestParameters: PeopleProfilesApiUpdateMemberCultureRequest, options?: RawAxiosRequestConfig) {
        return PeopleProfilesApiFp(this.configuration).updateMemberCulture(requestParameters.userid, requestParameters.culture, options).then((request) => request(this.axios, this.basePath));
    }
}

