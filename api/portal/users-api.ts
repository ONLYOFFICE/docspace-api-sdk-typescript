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
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { Int64Wrapper } from '../../models';
// @ts-ignore
import type { InvitationLinkCreateRequestDto } from '../../models';
// @ts-ignore
import type { InvitationLinkDeleteRequestDto } from '../../models';
// @ts-ignore
import type { InvitationLinkUpdateRequestDto } from '../../models';
// @ts-ignore
import type { InvitationLinkWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UserInfoWrapper } from '../../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Creates the portal\'s invitation link for one role and returns it together with the URL to share. A portal  keeps at most one link per role, so a call for a role that already has one is refused - read the existing link  with `GET api/2.0/portal/users/invitationlink/{employeeType}` and change it with  `PUT api/2.0/portal/users/invitationlink` instead. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`), `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or `User`,  and `expiration`, when given, has to lie in the future and is read in the portal time zone. The caller needs  the right to add users of that role, only the portal owner may create the DocSpace administrator link, and a  link for a paying role additionally needs a free paid seat in the portal quota. The call is mutating and not  idempotent. The answer carries the `id` needed to update or delete the link, the shortened `url`,  `maxUseCount` and `currentUseCount`, `expiration` in the portal time zone - empty for a link that never  expires - and `isExpired`.
         * @summary Create an invitation link
         * @param {InvitationLinkCreateRequestDto} [invitationLinkCreateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-invitation-link/
         */
        createInvitationLink: async (invitationLinkCreateRequestDto?: InvitationLinkCreateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/users/invitationlink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(invitationLinkCreateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the portal\'s invitation link with the given `id`, so the URL shared from it stops letting anyone in;  accounts that already joined through it are not touched. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and the link has to exist - a second call with the same `id` is  answered as not found. The caller needs the right to add users of the link\'s role, and only the portal owner  may delete the DocSpace administrator link. The call is destructive and cannot be undone: a link for the same  role has to be created again with `POST api/2.0/portal/users/invitationlink`, and it gets a new `id`, a new  URL and a `currentUseCount` that starts from zero. Nothing is returned in the body. To stop invitations  without losing the links, switch inviting members off for the whole portal with  `PUT api/2.0/settings/invitationsettings` - the links then stay stored but are refused until it is switched on  again.
         * @summary Delete an invitation link
         * @param {InvitationLinkDeleteRequestDto} [invitationLinkDeleteRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-invitation-link/
         */
        deleteInvitationLink: async (invitationLinkDeleteRequestDto?: InvitationLinkDeleteRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/users/invitationlink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(invitationLinkDeleteRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deprecated - use `POST api/2.0/portal/users/invitationlink` and the neighbouring operations under that path,  which store the link and let it be read, changed and revoked. Builds a shortened URL that lets whoever opens  it join this portal with the role given in the path, and returns it as a bare string; nothing is stored, so  the link can afterwards be neither listed nor withdrawn. Inviting members has to be enabled for the portal -  `GET api/2.0/settings/invitationsettings` reports that - otherwise the call is refused. The caller needs the  right to add users of the requested role and only the portal owner may ask for a DocSpace administrator link;  a caller without that right gets an empty string instead of an error, so treat an empty answer as a refusal.  The call changes nothing on the portal and may be repeated, each time returning an equivalent link. The URL  carries a confirmation key bound to the calling account and the portal alias; it has no use limit and stops  being accepted once the portal\'s e-mail key lifetime has passed, seven days by default - neither of the two  can be set per link, which is what the replacement operations add.
         * @summary Get a legacy invitation link
         * @param {EmployeeType} employeeType The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any  other role is refused. The portal keeps at most one link per role, so this value alone identifies it.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         */
        getInvitationLink: async (employeeType: EmployeeType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeeType' is not null or undefined
            assertParamExists('getInvitationLink', 'employeeType', employeeType)

            const localVarPath = `/api/2.0/portal/users/invite/{employeeType}`
                .replace(`{${"employeeType"}}`, encodeURIComponent(String(employeeType)));
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
         * Returns the portal\'s invitation link for one role - the URL to share, how long it lasts and how often it has  already been used. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or  `User`; the caller needs the right to add users of that role, only the portal owner may read the DocSpace  administrator link, and a link for a paying role is shown only while the portal quota still has a free paid  seat. The call is read-only and idempotent, but the `url` it returns is signed for the calling account, so two  administrators are handed two different URLs for one and the same link. A role that has no link yet is  answered with an empty body and 200 rather than a 404 - create the link with  `POST api/2.0/portal/users/invitationlink`. `expiration` is in the portal time zone and empty for a link  without a deadline, `isExpired` says whether that deadline has passed, and `currentUseCount` counts how many  accounts have already joined through the link.
         * @summary Get an invitation link by role
         * @param {EmployeeType} employeeType The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any  other role is refused. The portal keeps at most one link per role, so this value alone identifies it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getInvitationLinkByEmployeeType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link-by-employee-type/
         */
        getInvitationLinkByEmployeeType: async (employeeType: EmployeeType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeeType' is not null or undefined
            assertParamExists('getInvitationLinkByEmployeeType', 'employeeType', employeeType)

            const localVarPath = `/api/2.0/portal/users/invitationlink/{employeeType}`
                .replace(`{${"employeeType"}}`, encodeURIComponent(String(employeeType)));
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
         * Returns how many accounts this portal currently has in the active state, whatever their role, so a client can  show the seat usage next to the allowance. Accounts that were invited but have not joined yet and accounts  that were disabled or removed are not counted. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent, and the number moves as soon as an account joins, is  disabled or is deleted. The answer is a plain number, not an object. Compare it with `countUser` and  `countPaidUser` from `GET api/2.0/portal/quota` to see how much of the allowance is left, and with  `GET api/2.0/portal/quota/right` for the smallest quota that would still hold everyone. When the accounts  themselves are needed, and not only how many there are, list them with the People API instead - this operation  cannot filter by role, group or status.
         * @summary Get a number of portal users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsersCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-users-count/
         */
        getPortalUsersCount: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/userscount`;
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
         * Returns one user of this portal, addressed by ID, in the shape the portal stores the account: display name,  e-mail, contacts, role and status flags, and the dates of the profile. Nothing has to be called first, and the  call is read-only and idempotent. Who may be read is decided per pair of accounts: a caller always reads their  own profile, a DocSpace administrator reads anyone, a room administrator reads anyone except a guest they have  no relation with, and a user or a guest reads nobody but themselves - a pair that is not allowed is refused.  An ID that belongs to no account of this portal and an ID of a system account are both answered as not found,  so a 404 does not tell the two apart. `userID` in the path has to be a GUID; the calling user\'s own profile is  easier to fetch with `GET api/2.0/people/@self`. This operation hands back the internal user record - use  `GET api/2.0/people/{userid}` for the same user in the People format, with the group, quota and access  information a client usually needs.
         * @summary Get a portal user
         * @param {string} userID The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. An ID belonging to  no account of this portal and an ID of an internal system account are both answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/
         */
        getUserById: async (userID: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userID' is not null or undefined
            assertParamExists('getUserById', 'userID', userID)

            const localVarPath = `/api/2.0/portal/users/{userID}`
                .replace(`{${"userID"}}`, encodeURIComponent(String(userID)));
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
         * Marks the open-source gift message - the notice a server installation shows about its free edition - as read  for the calling user, so the client stops displaying it. Any signed-in user may call it and nothing has to be  called first. The flag is stored per user, so marking it read for one account leaves it unread for everybody  else on the portal. The call is mutating but idempotent: repeating it changes nothing. It never fails on the  caller\'s behalf - a storage error is written to the portal log and the operation still answers with a success,  so the answer is no proof that the flag was saved. Nothing is returned in the body, and no operation reads the  flag back or clears it again, which makes the change effectively permanent for that user. It touches only this  one notice: portal-wide announcements and the letters the portal sends are unaffected, and other per-user  settings are stored through the operations under `api/2.0/settings`.
         * @summary Mark a gift message as read
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for markGiftMessageAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-gift-message-as-read/
         */
        markGiftMessageAsRead: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/present/mark`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends the welcome letter that follows the registration of a new portal to the account named by `userid` and  switches on the second authentication factor the installation is configured to require after registration; on  a hosted portal in custom mode the registration data is mailed to the sales address as well. Open to  unauthenticated callers: in place of a token it needs `key`, the confirmation key of the sign-in link the  portal issued for that account, and that key is accepted for one hour after it was created - a wrong, foreign  or expired key answers 403 and sends nothing. Both parameters go in the query string. The call is meant to be  made once, right after registration; it is not idempotent, and every call within that hour sends the letters  again. When the installation asks for SMS or an authenticator app after registration, this call is what  enables that method for the whole portal, unless the new account is an internal test address. Nothing is  returned in the body and there is no operation that reports afterwards whether the letters were delivered.
         * @summary Send congratulations
         * @param {string} userid The account the welcome letter is addressed to, by portal user ID. The key in `key` has to have been issued  for this same account, so the pair is what authorises the call.
         * @param {string} key The confirmation key from the sign-in link the portal issued for that account, which stands in for a token  here. It is accepted for one hour after it was created; a wrong, foreign or expired key answers 403 and sends  nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         */
        sendCongratulations: async (userid: string, key: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('sendCongratulations', 'userid', userid)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('sendCongratulations', 'key', key)

            const localVarPath = `/api/2.0/portal/sendcongratulations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (userid !== undefined) {
                localVarQueryParameter['Userid'] = userid;
            }

            if (key !== undefined) {
                localVarQueryParameter['Key'] = key;
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
         * Changes the deadline and the use limit of an existing invitation link, addressed by its `id`. The role of a  link cannot be changed - delete it and create a link for the other role instead. Inviting members has to be  enabled for the portal (`GET api/2.0/settings/invitationsettings`), the link has to exist, and `maxUseCount`  may not be lower than the number of uses the link already has, which  `GET api/2.0/portal/users/invitationlink/{employeeType}` reports as `currentUseCount`. An `expiration` in the  past is refused; the body is applied as a whole, so omitting `expiration` clears the deadline and omitting  `maxUseCount` removes the use limit. The caller needs the right to add users of the link\'s role and only the  portal owner may change the DocSpace administrator link. The call is mutating, and repeating it with the same  body leaves the link as it is. The whole link comes back as it now stands, with `url` signed for the calling  account - the URL therefore differs between administrators while the link behind it is the same.
         * @summary Update an invitation link
         * @param {InvitationLinkUpdateRequestDto} [invitationLinkUpdateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-link/
         */
        updateInvitationLink: async (invitationLinkUpdateRequestDto?: InvitationLinkUpdateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/users/invitationlink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(invitationLinkUpdateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates the portal\'s invitation link for one role and returns it together with the URL to share. A portal  keeps at most one link per role, so a call for a role that already has one is refused - read the existing link  with `GET api/2.0/portal/users/invitationlink/{employeeType}` and change it with  `PUT api/2.0/portal/users/invitationlink` instead. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`), `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or `User`,  and `expiration`, when given, has to lie in the future and is read in the portal time zone. The caller needs  the right to add users of that role, only the portal owner may create the DocSpace administrator link, and a  link for a paying role additionally needs a free paid seat in the portal quota. The call is mutating and not  idempotent. The answer carries the `id` needed to update or delete the link, the shortened `url`,  `maxUseCount` and `currentUseCount`, `expiration` in the portal time zone - empty for a link that never  expires - and `isExpired`.
         * @summary Create an invitation link
         * @param {InvitationLinkCreateRequestDto} [invitationLinkCreateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-invitation-link/
         */
        async createInvitationLink(invitationLinkCreateRequestDto?: InvitationLinkCreateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInvitationLink(invitationLinkCreateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.createInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the portal\'s invitation link with the given `id`, so the URL shared from it stops letting anyone in;  accounts that already joined through it are not touched. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and the link has to exist - a second call with the same `id` is  answered as not found. The caller needs the right to add users of the link\'s role, and only the portal owner  may delete the DocSpace administrator link. The call is destructive and cannot be undone: a link for the same  role has to be created again with `POST api/2.0/portal/users/invitationlink`, and it gets a new `id`, a new  URL and a `currentUseCount` that starts from zero. Nothing is returned in the body. To stop invitations  without losing the links, switch inviting members off for the whole portal with  `PUT api/2.0/settings/invitationsettings` - the links then stay stored but are refused until it is switched on  again.
         * @summary Delete an invitation link
         * @param {InvitationLinkDeleteRequestDto} [invitationLinkDeleteRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-invitation-link/
         */
        async deleteInvitationLink(invitationLinkDeleteRequestDto?: InvitationLinkDeleteRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteInvitationLink(invitationLinkDeleteRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.deleteInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deprecated - use `POST api/2.0/portal/users/invitationlink` and the neighbouring operations under that path,  which store the link and let it be read, changed and revoked. Builds a shortened URL that lets whoever opens  it join this portal with the role given in the path, and returns it as a bare string; nothing is stored, so  the link can afterwards be neither listed nor withdrawn. Inviting members has to be enabled for the portal -  `GET api/2.0/settings/invitationsettings` reports that - otherwise the call is refused. The caller needs the  right to add users of the requested role and only the portal owner may ask for a DocSpace administrator link;  a caller without that right gets an empty string instead of an error, so treat an empty answer as a refusal.  The call changes nothing on the portal and may be repeated, each time returning an equivalent link. The URL  carries a confirmation key bound to the calling account and the portal alias; it has no use limit and stops  being accepted once the portal\'s e-mail key lifetime has passed, seven days by default - neither of the two  can be set per link, which is what the replacement operations add.
         * @summary Get a legacy invitation link
         * @param {EmployeeType} employeeType The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any  other role is refused. The portal keeps at most one link per role, so this value alone identifies it.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         */
        async getInvitationLink(employeeType: EmployeeType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationLink(employeeType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal\'s invitation link for one role - the URL to share, how long it lasts and how often it has  already been used. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or  `User`; the caller needs the right to add users of that role, only the portal owner may read the DocSpace  administrator link, and a link for a paying role is shown only while the portal quota still has a free paid  seat. The call is read-only and idempotent, but the `url` it returns is signed for the calling account, so two  administrators are handed two different URLs for one and the same link. A role that has no link yet is  answered with an empty body and 200 rather than a 404 - create the link with  `POST api/2.0/portal/users/invitationlink`. `expiration` is in the portal time zone and empty for a link  without a deadline, `isExpired` says whether that deadline has passed, and `currentUseCount` counts how many  accounts have already joined through the link.
         * @summary Get an invitation link by role
         * @param {EmployeeType} employeeType The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any  other role is refused. The portal keeps at most one link per role, so this value alone identifies it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getInvitationLinkByEmployeeType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link-by-employee-type/
         */
        async getInvitationLinkByEmployeeType(employeeType: EmployeeType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationLinkByEmployeeType(employeeType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getInvitationLinkByEmployeeType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns how many accounts this portal currently has in the active state, whatever their role, so a client can  show the seat usage next to the allowance. Accounts that were invited but have not joined yet and accounts  that were disabled or removed are not counted. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent, and the number moves as soon as an account joins, is  disabled or is deleted. The answer is a plain number, not an object. Compare it with `countUser` and  `countPaidUser` from `GET api/2.0/portal/quota` to see how much of the allowance is left, and with  `GET api/2.0/portal/quota/right` for the smallest quota that would still hold everyone. When the accounts  themselves are needed, and not only how many there are, list them with the People API instead - this operation  cannot filter by role, group or status.
         * @summary Get a number of portal users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsersCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-users-count/
         */
        async getPortalUsersCount(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Int64Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalUsersCount(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getPortalUsersCount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one user of this portal, addressed by ID, in the shape the portal stores the account: display name,  e-mail, contacts, role and status flags, and the dates of the profile. Nothing has to be called first, and the  call is read-only and idempotent. Who may be read is decided per pair of accounts: a caller always reads their  own profile, a DocSpace administrator reads anyone, a room administrator reads anyone except a guest they have  no relation with, and a user or a guest reads nobody but themselves - a pair that is not allowed is refused.  An ID that belongs to no account of this portal and an ID of a system account are both answered as not found,  so a 404 does not tell the two apart. `userID` in the path has to be a GUID; the calling user\'s own profile is  easier to fetch with `GET api/2.0/people/@self`. This operation hands back the internal user record - use  `GET api/2.0/people/{userid}` for the same user in the People format, with the group, quota and access  information a client usually needs.
         * @summary Get a portal user
         * @param {string} userID The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. An ID belonging to  no account of this portal and an ID of an internal system account are both answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/
         */
        async getUserById(userID: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserById(userID, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getUserById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Marks the open-source gift message - the notice a server installation shows about its free edition - as read  for the calling user, so the client stops displaying it. Any signed-in user may call it and nothing has to be  called first. The flag is stored per user, so marking it read for one account leaves it unread for everybody  else on the portal. The call is mutating but idempotent: repeating it changes nothing. It never fails on the  caller\'s behalf - a storage error is written to the portal log and the operation still answers with a success,  so the answer is no proof that the flag was saved. Nothing is returned in the body, and no operation reads the  flag back or clears it again, which makes the change effectively permanent for that user. It touches only this  one notice: portal-wide announcements and the letters the portal sends are unaffected, and other per-user  settings are stored through the operations under `api/2.0/settings`.
         * @summary Mark a gift message as read
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for markGiftMessageAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-gift-message-as-read/
         */
        async markGiftMessageAsRead(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markGiftMessageAsRead(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.markGiftMessageAsRead']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the welcome letter that follows the registration of a new portal to the account named by `userid` and  switches on the second authentication factor the installation is configured to require after registration; on  a hosted portal in custom mode the registration data is mailed to the sales address as well. Open to  unauthenticated callers: in place of a token it needs `key`, the confirmation key of the sign-in link the  portal issued for that account, and that key is accepted for one hour after it was created - a wrong, foreign  or expired key answers 403 and sends nothing. Both parameters go in the query string. The call is meant to be  made once, right after registration; it is not idempotent, and every call within that hour sends the letters  again. When the installation asks for SMS or an authenticator app after registration, this call is what  enables that method for the whole portal, unless the new account is an internal test address. Nothing is  returned in the body and there is no operation that reports afterwards whether the letters were delivered.
         * @summary Send congratulations
         * @param {string} userid The account the welcome letter is addressed to, by portal user ID. The key in `key` has to have been issued  for this same account, so the pair is what authorises the call.
         * @param {string} key The confirmation key from the sign-in link the portal issued for that account, which stands in for a token  here. It is accepted for one hour after it was created; a wrong, foreign or expired key answers 403 and sends  nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         */
        async sendCongratulations(userid: string, key: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendCongratulations(userid, key, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.sendCongratulations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the deadline and the use limit of an existing invitation link, addressed by its `id`. The role of a  link cannot be changed - delete it and create a link for the other role instead. Inviting members has to be  enabled for the portal (`GET api/2.0/settings/invitationsettings`), the link has to exist, and `maxUseCount`  may not be lower than the number of uses the link already has, which  `GET api/2.0/portal/users/invitationlink/{employeeType}` reports as `currentUseCount`. An `expiration` in the  past is refused; the body is applied as a whole, so omitting `expiration` clears the deadline and omitting  `maxUseCount` removes the use limit. The caller needs the right to add users of the link\'s role and only the  portal owner may change the DocSpace administrator link. The call is mutating, and repeating it with the same  body leaves the link as it is. The whole link comes back as it now stands, with `url` signed for the calling  account - the URL therefore differs between administrators while the link behind it is the same.
         * @summary Update an invitation link
         * @param {InvitationLinkUpdateRequestDto} [invitationLinkUpdateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-link/
         */
        async updateInvitationLink(invitationLinkUpdateRequestDto?: InvitationLinkUpdateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInvitationLink(invitationLinkUpdateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.updateInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Creates the portal\'s invitation link for one role and returns it together with the URL to share. A portal  keeps at most one link per role, so a call for a role that already has one is refused - read the existing link  with `GET api/2.0/portal/users/invitationlink/{employeeType}` and change it with  `PUT api/2.0/portal/users/invitationlink` instead. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`), `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or `User`,  and `expiration`, when given, has to lie in the future and is read in the portal time zone. The caller needs  the right to add users of that role, only the portal owner may create the DocSpace administrator link, and a  link for a paying role additionally needs a free paid seat in the portal quota. The call is mutating and not  idempotent. The answer carries the `id` needed to update or delete the link, the shortened `url`,  `maxUseCount` and `currentUseCount`, `expiration` in the portal time zone - empty for a link that never  expires - and `isExpired`.
         * @summary Create an invitation link
         * @param {UsersApiCreateInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-invitation-link/
         * @throws {RequiredError}
         */
        createInvitationLink(requestParameters: UsersApiCreateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<InvitationLinkWrapper> {
            return localVarFp.createInvitationLink(requestParameters.invitationLinkCreateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the portal\'s invitation link with the given `id`, so the URL shared from it stops letting anyone in;  accounts that already joined through it are not touched. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and the link has to exist - a second call with the same `id` is  answered as not found. The caller needs the right to add users of the link\'s role, and only the portal owner  may delete the DocSpace administrator link. The call is destructive and cannot be undone: a link for the same  role has to be created again with `POST api/2.0/portal/users/invitationlink`, and it gets a new `id`, a new  URL and a `currentUseCount` that starts from zero. Nothing is returned in the body. To stop invitations  without losing the links, switch inviting members off for the whole portal with  `PUT api/2.0/settings/invitationsettings` - the links then stay stored but are refused until it is switched on  again.
         * @summary Delete an invitation link
         * @param {UsersApiDeleteInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-invitation-link/
         * @throws {RequiredError}
         */
        deleteInvitationLink(requestParameters: UsersApiDeleteInvitationLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.deleteInvitationLink(requestParameters.invitationLinkDeleteRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deprecated - use `POST api/2.0/portal/users/invitationlink` and the neighbouring operations under that path,  which store the link and let it be read, changed and revoked. Builds a shortened URL that lets whoever opens  it join this portal with the role given in the path, and returns it as a bare string; nothing is stored, so  the link can afterwards be neither listed nor withdrawn. Inviting members has to be enabled for the portal -  `GET api/2.0/settings/invitationsettings` reports that - otherwise the call is refused. The caller needs the  right to add users of the requested role and only the portal owner may ask for a DocSpace administrator link;  a caller without that right gets an empty string instead of an error, so treat an empty answer as a refusal.  The call changes nothing on the portal and may be repeated, each time returning an equivalent link. The URL  carries a confirmation key bound to the calling account and the portal alias; it has no use limit and stops  being accepted once the portal\'s e-mail key lifetime has passed, seven days by default - neither of the two  can be set per link, which is what the replacement operations add.
         * @summary Get a legacy invitation link
         * @param {UsersApiGetInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         * @throws {RequiredError}
         */
        getInvitationLink(requestParameters: UsersApiGetInvitationLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getInvitationLink(requestParameters.employeeType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal\'s invitation link for one role - the URL to share, how long it lasts and how often it has  already been used. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or  `User`; the caller needs the right to add users of that role, only the portal owner may read the DocSpace  administrator link, and a link for a paying role is shown only while the portal quota still has a free paid  seat. The call is read-only and idempotent, but the `url` it returns is signed for the calling account, so two  administrators are handed two different URLs for one and the same link. A role that has no link yet is  answered with an empty body and 200 rather than a 404 - create the link with  `POST api/2.0/portal/users/invitationlink`. `expiration` is in the portal time zone and empty for a link  without a deadline, `isExpired` says whether that deadline has passed, and `currentUseCount` counts how many  accounts have already joined through the link.
         * @summary Get an invitation link by role
         * @param {UsersApiGetInvitationLinkByEmployeeTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getInvitationLinkByEmployeeType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link-by-employee-type/
         * @throws {RequiredError}
         */
        getInvitationLinkByEmployeeType(requestParameters: UsersApiGetInvitationLinkByEmployeeTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<InvitationLinkWrapper> {
            return localVarFp.getInvitationLinkByEmployeeType(requestParameters.employeeType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns how many accounts this portal currently has in the active state, whatever their role, so a client can  show the seat usage next to the allowance. Accounts that were invited but have not joined yet and accounts  that were disabled or removed are not counted. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent, and the number moves as soon as an account joins, is  disabled or is deleted. The answer is a plain number, not an object. Compare it with `countUser` and  `countPaidUser` from `GET api/2.0/portal/quota` to see how much of the allowance is left, and with  `GET api/2.0/portal/quota/right` for the smallest quota that would still hold everyone. When the accounts  themselves are needed, and not only how many there are, list them with the People API instead - this operation  cannot filter by role, group or status.
         * @summary Get a number of portal users
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalUsersCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-users-count/
         * @throws {RequiredError}
         */
        getPortalUsersCount(options?: RawAxiosRequestConfig): AxiosPromise<Int64Wrapper> {
            return localVarFp.getPortalUsersCount(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one user of this portal, addressed by ID, in the shape the portal stores the account: display name,  e-mail, contacts, role and status flags, and the dates of the profile. Nothing has to be called first, and the  call is read-only and idempotent. Who may be read is decided per pair of accounts: a caller always reads their  own profile, a DocSpace administrator reads anyone, a room administrator reads anyone except a guest they have  no relation with, and a user or a guest reads nobody but themselves - a pair that is not allowed is refused.  An ID that belongs to no account of this portal and an ID of a system account are both answered as not found,  so a 404 does not tell the two apart. `userID` in the path has to be a GUID; the calling user\'s own profile is  easier to fetch with `GET api/2.0/people/@self`. This operation hands back the internal user record - use  `GET api/2.0/people/{userid}` for the same user in the People format, with the group, quota and access  information a client usually needs.
         * @summary Get a portal user
         * @param {UsersApiGetUserByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/
         * @throws {RequiredError}
         */
        getUserById(requestParameters: UsersApiGetUserByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserInfoWrapper> {
            return localVarFp.getUserById(requestParameters.userID, options).then((request) => request(axios, basePath));
        },
        /**
         * Marks the open-source gift message - the notice a server installation shows about its free edition - as read  for the calling user, so the client stops displaying it. Any signed-in user may call it and nothing has to be  called first. The flag is stored per user, so marking it read for one account leaves it unread for everybody  else on the portal. The call is mutating but idempotent: repeating it changes nothing. It never fails on the  caller\'s behalf - a storage error is written to the portal log and the operation still answers with a success,  so the answer is no proof that the flag was saved. Nothing is returned in the body, and no operation reads the  flag back or clears it again, which makes the change effectively permanent for that user. It touches only this  one notice: portal-wide announcements and the letters the portal sends are unaffected, and other per-user  settings are stored through the operations under `api/2.0/settings`.
         * @summary Mark a gift message as read
         * @param {*} [options] Override http request option.
         * REST API Reference for markGiftMessageAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-gift-message-as-read/
         * @throws {RequiredError}
         */
        markGiftMessageAsRead(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.markGiftMessageAsRead(options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the welcome letter that follows the registration of a new portal to the account named by `userid` and  switches on the second authentication factor the installation is configured to require after registration; on  a hosted portal in custom mode the registration data is mailed to the sales address as well. Open to  unauthenticated callers: in place of a token it needs `key`, the confirmation key of the sign-in link the  portal issued for that account, and that key is accepted for one hour after it was created - a wrong, foreign  or expired key answers 403 and sends nothing. Both parameters go in the query string. The call is meant to be  made once, right after registration; it is not idempotent, and every call within that hour sends the letters  again. When the installation asks for SMS or an authenticator app after registration, this call is what  enables that method for the whole portal, unless the new account is an internal test address. Nothing is  returned in the body and there is no operation that reports afterwards whether the letters were delivered.
         * @summary Send congratulations
         * @param {UsersApiSendCongratulationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         * @throws {RequiredError}
         */
        sendCongratulations(requestParameters: UsersApiSendCongratulationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendCongratulations(requestParameters.userid, requestParameters.key, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the deadline and the use limit of an existing invitation link, addressed by its `id`. The role of a  link cannot be changed - delete it and create a link for the other role instead. Inviting members has to be  enabled for the portal (`GET api/2.0/settings/invitationsettings`), the link has to exist, and `maxUseCount`  may not be lower than the number of uses the link already has, which  `GET api/2.0/portal/users/invitationlink/{employeeType}` reports as `currentUseCount`. An `expiration` in the  past is refused; the body is applied as a whole, so omitting `expiration` clears the deadline and omitting  `maxUseCount` removes the use limit. The caller needs the right to add users of the link\'s role and only the  portal owner may change the DocSpace administrator link. The call is mutating, and repeating it with the same  body leaves the link as it is. The whole link comes back as it now stands, with `url` signed for the calling  account - the URL therefore differs between administrators while the link behind it is the same.
         * @summary Update an invitation link
         * @param {UsersApiUpdateInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-link/
         * @throws {RequiredError}
         */
        updateInvitationLink(requestParameters: UsersApiUpdateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<InvitationLinkWrapper> {
            return localVarFp.updateInvitationLink(requestParameters.invitationLinkUpdateRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiCreateInvitationLinkRequest
 */
export interface UsersApiCreateInvitationLinkRequest {
    /**
     * 
     * @type {InvitationLinkCreateRequestDto}
     * @memberof UsersApiCreateInvitationLink
     */
    readonly invitationLinkCreateRequestDto?: InvitationLinkCreateRequestDto
}

/**
 * Request parameters for deleteInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiDeleteInvitationLinkRequest
 */
export interface UsersApiDeleteInvitationLinkRequest {
    /**
     * 
     * @type {InvitationLinkDeleteRequestDto}
     * @memberof UsersApiDeleteInvitationLink
     */
    readonly invitationLinkDeleteRequestDto?: InvitationLinkDeleteRequestDto
}

/**
 * Request parameters for getInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiGetInvitationLinkRequest
 */
export interface UsersApiGetInvitationLinkRequest {
    /**
     * The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any  other role is refused. The portal keeps at most one link per role, so this value alone identifies it.
     * @type {EmployeeType}
     * @memberof UsersApiGetInvitationLink
     */
    readonly employeeType: EmployeeType
}

/**
 * Request parameters for getInvitationLinkByEmployeeType operation in UsersApi.
 * @export
 * @interface UsersApiGetInvitationLinkByEmployeeTypeRequest
 */
export interface UsersApiGetInvitationLinkByEmployeeTypeRequest {
    /**
     * The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any  other role is refused. The portal keeps at most one link per role, so this value alone identifies it.
     * @type {EmployeeType}
     * @memberof UsersApiGetInvitationLinkByEmployeeType
     */
    readonly employeeType: EmployeeType
}

/**
 * Request parameters for getUserById operation in UsersApi.
 * @export
 * @interface UsersApiGetUserByIdRequest
 */
export interface UsersApiGetUserByIdRequest {
    /**
     * The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. An ID belonging to  no account of this portal and an ID of an internal system account are both answered as not found.
     * @type {string}
     * @memberof UsersApiGetUserById
     */
    readonly userID: string
}

/**
 * Request parameters for sendCongratulations operation in UsersApi.
 * @export
 * @interface UsersApiSendCongratulationsRequest
 */
export interface UsersApiSendCongratulationsRequest {
    /**
     * The account the welcome letter is addressed to, by portal user ID. The key in `key` has to have been issued  for this same account, so the pair is what authorises the call.
     * @type {string}
     * @memberof UsersApiSendCongratulations
     */
    readonly userid: string

    /**
     * The confirmation key from the sign-in link the portal issued for that account, which stands in for a token  here. It is accepted for one hour after it was created; a wrong, foreign or expired key answers 403 and sends  nothing.
     * @type {string}
     * @memberof UsersApiSendCongratulations
     */
    readonly key: string
}

/**
 * Request parameters for updateInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiUpdateInvitationLinkRequest
 */
export interface UsersApiUpdateInvitationLinkRequest {
    /**
     * 
     * @type {InvitationLinkUpdateRequestDto}
     * @memberof UsersApiUpdateInvitationLink
     */
    readonly invitationLinkUpdateRequestDto?: InvitationLinkUpdateRequestDto
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Creates the portal\'s invitation link for one role and returns it together with the URL to share. A portal  keeps at most one link per role, so a call for a role that already has one is refused - read the existing link  with `GET api/2.0/portal/users/invitationlink/{employeeType}` and change it with  `PUT api/2.0/portal/users/invitationlink` instead. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`), `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or `User`,  and `expiration`, when given, has to lie in the future and is read in the portal time zone. The caller needs  the right to add users of that role, only the portal owner may create the DocSpace administrator link, and a  link for a paying role additionally needs a free paid seat in the portal quota. The call is mutating and not  idempotent. The answer carries the `id` needed to update or delete the link, the shortened `url`,  `maxUseCount` and `currentUseCount`, `expiration` in the portal time zone - empty for a link that never  expires - and `isExpired`.
     * @summary Create an invitation link
     * @param {PortalUsersApiCreateInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public createInvitationLink(requestParameters: UsersApiCreateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).createInvitationLink(requestParameters.invitationLinkCreateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the portal\'s invitation link with the given `id`, so the URL shared from it stops letting anyone in;  accounts that already joined through it are not touched. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and the link has to exist - a second call with the same `id` is  answered as not found. The caller needs the right to add users of the link\'s role, and only the portal owner  may delete the DocSpace administrator link. The call is destructive and cannot be undone: a link for the same  role has to be created again with `POST api/2.0/portal/users/invitationlink`, and it gets a new `id`, a new  URL and a `currentUseCount` that starts from zero. Nothing is returned in the body. To stop invitations  without losing the links, switch inviting members off for the whole portal with  `PUT api/2.0/settings/invitationsettings` - the links then stay stored but are refused until it is switched on  again.
     * @summary Delete an invitation link
     * @param {PortalUsersApiDeleteInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteInvitationLink(requestParameters: UsersApiDeleteInvitationLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteInvitationLink(requestParameters.invitationLinkDeleteRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deprecated - use `POST api/2.0/portal/users/invitationlink` and the neighbouring operations under that path,  which store the link and let it be read, changed and revoked. Builds a shortened URL that lets whoever opens  it join this portal with the role given in the path, and returns it as a bare string; nothing is stored, so  the link can afterwards be neither listed nor withdrawn. Inviting members has to be enabled for the portal -  `GET api/2.0/settings/invitationsettings` reports that - otherwise the call is refused. The caller needs the  right to add users of the requested role and only the portal owner may ask for a DocSpace administrator link;  a caller without that right gets an empty string instead of an error, so treat an empty answer as a refusal.  The call changes nothing on the portal and may be repeated, each time returning an equivalent link. The URL  carries a confirmation key bound to the calling account and the portal alias; it has no use limit and stops  being accepted once the portal\'s e-mail key lifetime has passed, seven days by default - neither of the two  can be set per link, which is what the replacement operations add.
     * @summary Get a legacy invitation link
     * @param {PortalUsersApiGetInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getInvitationLink(requestParameters: UsersApiGetInvitationLinkRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getInvitationLink(requestParameters.employeeType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal\'s invitation link for one role - the URL to share, how long it lasts and how often it has  already been used. Inviting members has to be enabled for the portal  (`GET api/2.0/settings/invitationsettings`) and `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or  `User`; the caller needs the right to add users of that role, only the portal owner may read the DocSpace  administrator link, and a link for a paying role is shown only while the portal quota still has a free paid  seat. The call is read-only and idempotent, but the `url` it returns is signed for the calling account, so two  administrators are handed two different URLs for one and the same link. A role that has no link yet is  answered with an empty body and 200 rather than a 404 - create the link with  `POST api/2.0/portal/users/invitationlink`. `expiration` is in the portal time zone and empty for a link  without a deadline, `isExpired` says whether that deadline has passed, and `currentUseCount` counts how many  accounts have already joined through the link.
     * @summary Get an invitation link by role
     * @param {PortalUsersApiGetInvitationLinkByEmployeeTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getInvitationLinkByEmployeeType(requestParameters: UsersApiGetInvitationLinkByEmployeeTypeRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getInvitationLinkByEmployeeType(requestParameters.employeeType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns how many accounts this portal currently has in the active state, whatever their role, so a client can  show the seat usage next to the allowance. Accounts that were invited but have not joined yet and accounts  that were disabled or removed are not counted. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent, and the number moves as soon as an account joins, is  disabled or is deleted. The answer is a plain number, not an object. Compare it with `countUser` and  `countPaidUser` from `GET api/2.0/portal/quota` to see how much of the allowance is left, and with  `GET api/2.0/portal/quota/right` for the smallest quota that would still hold everyone. When the accounts  themselves are needed, and not only how many there are, list them with the People API instead - this operation  cannot filter by role, group or status.
     * @summary Get a number of portal users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getPortalUsersCount(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getPortalUsersCount(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one user of this portal, addressed by ID, in the shape the portal stores the account: display name,  e-mail, contacts, role and status flags, and the dates of the profile. Nothing has to be called first, and the  call is read-only and idempotent. Who may be read is decided per pair of accounts: a caller always reads their  own profile, a DocSpace administrator reads anyone, a room administrator reads anyone except a guest they have  no relation with, and a user or a guest reads nobody but themselves - a pair that is not allowed is refused.  An ID that belongs to no account of this portal and an ID of a system account are both answered as not found,  so a 404 does not tell the two apart. `userID` in the path has to be a GUID; the calling user\'s own profile is  easier to fetch with `GET api/2.0/people/@self`. This operation hands back the internal user record - use  `GET api/2.0/people/{userid}` for the same user in the People format, with the group, quota and access  information a client usually needs.
     * @summary Get a portal user
     * @param {PortalUsersApiGetUserByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserById(requestParameters: UsersApiGetUserByIdRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserById(requestParameters.userID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks the open-source gift message - the notice a server installation shows about its free edition - as read  for the calling user, so the client stops displaying it. Any signed-in user may call it and nothing has to be  called first. The flag is stored per user, so marking it read for one account leaves it unread for everybody  else on the portal. The call is mutating but idempotent: repeating it changes nothing. It never fails on the  caller\'s behalf - a storage error is written to the portal log and the operation still answers with a success,  so the answer is no proof that the flag was saved. Nothing is returned in the body, and no operation reads the  flag back or clears it again, which makes the change effectively permanent for that user. It touches only this  one notice: portal-wide announcements and the letters the portal sends are unaffected, and other per-user  settings are stored through the operations under `api/2.0/settings`.
     * @summary Mark a gift message as read
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public markGiftMessageAsRead(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).markGiftMessageAsRead(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the welcome letter that follows the registration of a new portal to the account named by `userid` and  switches on the second authentication factor the installation is configured to require after registration; on  a hosted portal in custom mode the registration data is mailed to the sales address as well. Open to  unauthenticated callers: in place of a token it needs `key`, the confirmation key of the sign-in link the  portal issued for that account, and that key is accepted for one hour after it was created - a wrong, foreign  or expired key answers 403 and sends nothing. Both parameters go in the query string. The call is meant to be  made once, right after registration; it is not idempotent, and every call within that hour sends the letters  again. When the installation asks for SMS or an authenticator app after registration, this call is what  enables that method for the whole portal, unless the new account is an internal test address. Nothing is  returned in the body and there is no operation that reports afterwards whether the letters were delivered.
     * @summary Send congratulations
     * @param {PortalUsersApiSendCongratulationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public sendCongratulations(requestParameters: UsersApiSendCongratulationsRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).sendCongratulations(requestParameters.userid, requestParameters.key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the deadline and the use limit of an existing invitation link, addressed by its `id`. The role of a  link cannot be changed - delete it and create a link for the other role instead. Inviting members has to be  enabled for the portal (`GET api/2.0/settings/invitationsettings`), the link has to exist, and `maxUseCount`  may not be lower than the number of uses the link already has, which  `GET api/2.0/portal/users/invitationlink/{employeeType}` reports as `currentUseCount`. An `expiration` in the  past is refused; the body is applied as a whole, so omitting `expiration` clears the deadline and omitting  `maxUseCount` removes the use limit. The caller needs the right to add users of the link\'s role and only the  portal owner may change the DocSpace administrator link. The call is mutating, and repeating it with the same  body leaves the link as it is. The whole link comes back as it now stands, with `url` signed for the calling  account - the URL therefore differs between administrators while the link behind it is the same.
     * @summary Update an invitation link
     * @param {PortalUsersApiUpdateInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateInvitationLink(requestParameters: UsersApiUpdateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateInvitationLink(requestParameters.invitationLinkUpdateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

