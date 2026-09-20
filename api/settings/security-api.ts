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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { EmployeeArrayWrapper } from '../../models';
// @ts-ignore
import type { EnabledModuleArrayWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { PasswordSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { PasswordSettingsWrapper } from '../../models';
// @ts-ignore
import type { ProductAdministratorWrapper } from '../../models';
// @ts-ignore
import type { SecurityArrayWrapper } from '../../models';
// @ts-ignore
import type { SecurityRequestsDto } from '../../models';
// @ts-ignore
import type { WebItemSecurityRequestsDto } from '../../models';
// @ts-ignore
import type { WebItemsSecurityRequestsDto } from '../../models';
/**
 * SecurityApi - axios parameter creator
 * @export
 */
export const SecurityApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Lists the portal modules the calling user can currently open, each as an `id` holding the module\'s product  class name and a `title` holding its display name, both HTML-encoded. Any signed-in member may call this;  anonymous callers are not admitted. The operation is read-only and takes no parameters, and the list is  specific to the caller: modules hidden for this portal, and modules whose access rules exclude the caller, are  left out, and sub-modules nested under another module are never listed. Entries follow the portal\'s own module  order rather than an alphabetical one. An empty list means the installation registers no such modules at all -  the case on DocSpace, where the classic modules do not exist - and is not a failure. The identifiers here are  display-oriented class names, not the GUIDs the access-settings operations work with, so do not feed them to  `GET api/2.0/settings/security/{id}`, which expects a module GUID.
         * @summary Get enabled modules
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnabledModules operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enabled-modules/
         */
        getEnabledModules: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/security/modules`;
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
         * Reports whether one user administers one portal module, as the identifiers asked about plus an `administrator`  flag. Both `productid` and `userid` are query parameters and both are required; the all-zero product GUID asks  about the portal itself rather than about a single module. The caller needs the portal-settings right of a  DocSpace administrator, otherwise the call is refused. The operation is read-only. The flag is `true` when the  user belongs to the DocSpace administrator group or to the module\'s own group, so a portal-wide administrator  is reported as an administrator of every module, whatever the module identifier says. Identifiers that name no  user and no group are answered with `false` instead of a failure, so a `false` does not prove the user exists.  The verdict is read out of group membership alone and says nothing about whether the module is enabled for  this portal, which `GET api/2.0/settings/security/{id}` reports. Use  `GET api/2.0/settings/security/administrator/{productid}` to list everyone who administers a module, and  `PUT api/2.0/settings/security/administrator` to change the membership.
         * @summary Check product administrator
         * @param {string} productid The module being asked about, by module GUID. The all-zero GUID asks about the portal itself rather than a  single module.
         * @param {string} userid The account being asked about, by portal user ID. An ID that names no account is answered as a plain negative  rather than a failure, so a negative answer does not prove the account exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         */
        getIsProductAdministrator: async (productid: string, userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productid' is not null or undefined
            assertParamExists('getIsProductAdministrator', 'productid', productid)
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getIsProductAdministrator', 'userid', userid)

            const localVarPath = `/api/2.0/settings/security/administrator`;
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

            if (productid !== undefined) {
                localVarQueryParameter['productid'] = productid;
            }

            if (userid !== undefined) {
                localVarQueryParameter['userid'] = userid;
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
         * Returns the password policy of the current portal: the minimum length together with the flags that demand an  uppercase letter, a digit and a special symbol, plus the regular expressions a client can check a password  against before sending it anywhere. Any signed-in member may read it, and it is also reachable with the  parameters of a confirmation link, so an invited user or one resetting a password can validate the new  password before having a session; a portal whose payment has lapsed still answers. The operation is read-only  and honours `If-Modified-Since`: send back the `Last-Modified` value of an earlier answer and an unchanged  policy comes back as an empty not-modified response rather than a body. A portal nobody has configured  requires 8 characters with all three flags off. Whatever the policy says, the portal refuses a password longer  than 30 characters, a ceiling this answer does not carry. Change the policy with  `PUT api/2.0/settings/security/password`.
         * @summary Get password settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-password-settings/
         */
        getPasswordSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/security/password`;
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
         * Lists the users who administer the portal module identified by `productid` in the path. The all-zero GUID  stands for the portal itself: the answer then covers the DocSpace administrator group together with every  product group, and includes the portal owner, who administers everything by default. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. `productid` has to be a  GUID, and one that names no group is answered with an empty list rather than a failure. The operation is  read-only and returns whole user profiles, a heavier answer than a membership check, and a user who belongs to  more than one of the groups asked about is listed once per group. Entries arrive in group order, the DocSpace  administrator group first, the list is neither paged nor filterable, and a promotion made through the sibling  `PUT` shows up here at once. Use `GET api/2.0/settings/security/administrator` to test a single user against a  single module, and `PUT api/2.0/settings/security/administrator` to promote or demote somebody.
         * @summary Get product administrators
         * @param {string} productid The module the operation acts on, by module GUID. The all-zero GUID stands for the portal itself rather than  for a single module, and a GUID that names no module group is answered with an empty result instead of a  failure.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProductAdministrators operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-product-administrators/
         */
        getProductAdministrators: async (productid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productid' is not null or undefined
            assertParamExists('getProductAdministrators', 'productid', productid)

            const localVarPath = `/api/2.0/settings/security/administrator/{productid}`
                .replace(`{${"productid"}}`, encodeURIComponent(String(productid)));
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
         * Answers whether the module with the given identifier is available to the calling user right now, as a single  boolean. `id` is the module GUID and travels in the path; a value that is not a GUID does not match the route  at all. Any signed-in member may call this; anonymous callers are not admitted. The operation is read-only and  its answer is specific to the caller: `true` means a module with that identifier is registered in this portal,  is visible, and the caller is allowed to read it, while `false` covers every other case - the module is not  registered here, it is hidden for this portal, or the caller is outside the users and groups allowed to open  it. A `false` therefore does not tell those apart, and an unknown identifier is reported as unavailable  instead of failing. Read the allow-list behind the decision with `GET api/2.0/settings/security`, list the  modules the caller can actually open with `GET api/2.0/settings/security/modules`, and change access with  `PUT api/2.0/settings/security`.
         * @summary Check module availability
         * @param {string} id The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-security-info/
         */
        getWebItemSecurityInfo: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getWebItemSecurityInfo', 'id', id)

            const localVarPath = `/api/2.0/settings/security/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports how access to the portal\'s own modules is configured: for every module identifier sent in `ids`,  whether access is restricted at all and which users and groups are allowed to open the module. Send the  identifiers as repeated `ids` query values; each one has to be a GUID, and anything else is rejected as an  invalid request. Omitting `ids` asks about every module registered in the portal, which on a DocSpace  installation is none, so the answer is then an empty list rather than a failure. Any signed-in member may call  this; anonymous callers are not admitted. The operation is read-only and answers one entry per identifier, in  the order the identifiers were sent. `enabled` is `false` for a module nobody has ever configured, `groups`  and `users` name the subjects the rule was stored for, and `isSubItem` marks a module that hangs under another  one. Users the caller is not allowed to see are left out of `users`, so the same module can come back with  different lists for different callers. Change any of this with `PUT api/2.0/settings/security`.
         * @summary Get module access settings
         * @param {Array<string>} [ids] The modules to report on, each given as a GUID and sent as a repeated query value. An entry that is not a  GUID fails the whole request as invalid. Leaving the list out asks about every module registered in the  portal, which on a DocSpace installation is none, so the answer is then empty rather than complete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSettingsSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-settings-security-info/
         */
        getWebItemSettingsSecurityInfo: async (ids?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/security`;
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

            if (ids) {
                localVarQueryParameter['ids'] = ids;
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
         * Switches several portal modules on or off in one call: `items` carries an entry per module, its `key` the  module GUID and its `value` the new enabled flag. The caller needs the portal-settings right of a DocSpace  administrator, and the call is answered with 403 on an open portal, where everyone is admitted and per-module  rules would mean nothing. Every key has to be a GUID; anything else is rejected as an invalid request, and a  module listed twice is applied once, from its first entry. This operation carries no subject list of its own:  switching a product module on restores the users and groups it was last restricted to, while every other case  is stored as a plain allow or deny for everyone, so use `PUT api/2.0/settings/security` when the allow-list  itself has to change. The batch is recorded in the audit trail as one list update rather than module by  module. The answer is the resulting configuration of every module listed, in the shape  `GET api/2.0/settings/security` returns.
         * @summary Set access to modules in bulk
         * @param {WebItemsSecurityRequestsDto} [webItemsSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAccessToWebItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-access-to-web-items/
         */
        setAccessToWebItems: async (webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/security/access`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webItemsSecurityRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Promotes a portal member to administrator of one module, or takes that role away, according to the  `administrator` flag; the all-zero product GUID targets the DocSpace administrator role, which covers the  whole portal. The caller needs the portal-settings right of a DocSpace administrator, and granting the  portal-wide role additionally requires being the portal owner - anyone else is refused with 403. A free cloud  plan does not offer the option at all and answers 402, as does a promotion for which no paid seat is left,  since promoting a guest or a plain member turns them into a paid one. Taking the portal-wide role away also  removes the member from every product group. The change is immediate, portal-wide, recorded in the audit  trail, and sending the same body twice changes nothing further; it never creates a user, so invite the member  first. The answer echoes the identifiers and the flag as stored - re-read membership with  `GET api/2.0/settings/security/administrator`.
         * @summary Set product administrator
         * @param {SecurityRequestsDto} [securityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-product-administrator/
         */
        setProductAdministrator: async (securityRequestsDto?: SecurityRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/security/administrator`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the access rules of one portal module: `id` names the module, `enabled` says whether it may be  opened, and `subjects` lists the users and groups the rule is stored for. The caller needs the portal-settings  right of a DocSpace administrator, and the call is answered with 403 on an open portal, where everyone is  admitted and per-module rules would mean nothing. `id` has to be a GUID; anything else is rejected as an  invalid request. The rules stored before are dropped rather than extended, so send the full list of subjects  every time. Watch the empty cases: leaving `subjects` out applies `enabled` to everyone, while an empty  `subjects` array is stored as access for everyone whatever `enabled` says. The change is recorded in the audit  trail unless `subjects` was left out entirely. The answer is the module\'s resulting configuration as a  single-entry list, in the shape `GET api/2.0/settings/security` returns. To switch several modules at once use  `PUT api/2.0/settings/security/access`.
         * @summary Set module access
         * @param {WebItemSecurityRequestsDto} [webItemSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setWebItemSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-item-security/
         */
        setWebItemSecurity: async (webItemSecurityRequestsDto?: WebItemSecurityRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/security`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webItemSecurityRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the password policy of the whole portal with the four values sent: `minLength` and the three flags  that demand an uppercase letter, a digit and a special symbol. There is no partial update - a flag left out of  the body is stored as `false` - so read the current policy with `GET api/2.0/settings/security/password` and  send it back with your change applied. The caller needs the portal-settings right of a DocSpace administrator,  otherwise the call is refused. `minLength` has to sit between the floor the installation is configured with, 8  characters unless it was changed, and the ceiling of 30; anything outside is rejected as an invalid request.  The new policy applies to passwords set from now on: existing passwords keep working until their owners change  them, and nobody is asked to renew. The change is portal-wide, recorded in the audit trail, and sending the  same body twice changes nothing further. The answer is the stored policy with its regular expressions.
         * @summary Update password settings
         * @param {PasswordSettingsRequestsDto} [passwordSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-password-settings/
         */
        updatePasswordSettings: async (passwordSettingsRequestsDto?: PasswordSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/security/password`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(passwordSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecurityApi - functional programming interface
 * @export
 */
export const SecurityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityApiAxiosParamCreator(configuration)
    return {
        /**
         * Lists the portal modules the calling user can currently open, each as an `id` holding the module\'s product  class name and a `title` holding its display name, both HTML-encoded. Any signed-in member may call this;  anonymous callers are not admitted. The operation is read-only and takes no parameters, and the list is  specific to the caller: modules hidden for this portal, and modules whose access rules exclude the caller, are  left out, and sub-modules nested under another module are never listed. Entries follow the portal\'s own module  order rather than an alphabetical one. An empty list means the installation registers no such modules at all -  the case on DocSpace, where the classic modules do not exist - and is not a failure. The identifiers here are  display-oriented class names, not the GUIDs the access-settings operations work with, so do not feed them to  `GET api/2.0/settings/security/{id}`, which expects a module GUID.
         * @summary Get enabled modules
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnabledModules operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enabled-modules/
         */
        async getEnabledModules(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnabledModuleArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnabledModules(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getEnabledModules']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether one user administers one portal module, as the identifiers asked about plus an `administrator`  flag. Both `productid` and `userid` are query parameters and both are required; the all-zero product GUID asks  about the portal itself rather than about a single module. The caller needs the portal-settings right of a  DocSpace administrator, otherwise the call is refused. The operation is read-only. The flag is `true` when the  user belongs to the DocSpace administrator group or to the module\'s own group, so a portal-wide administrator  is reported as an administrator of every module, whatever the module identifier says. Identifiers that name no  user and no group are answered with `false` instead of a failure, so a `false` does not prove the user exists.  The verdict is read out of group membership alone and says nothing about whether the module is enabled for  this portal, which `GET api/2.0/settings/security/{id}` reports. Use  `GET api/2.0/settings/security/administrator/{productid}` to list everyone who administers a module, and  `PUT api/2.0/settings/security/administrator` to change the membership.
         * @summary Check product administrator
         * @param {string} productid The module being asked about, by module GUID. The all-zero GUID asks about the portal itself rather than a  single module.
         * @param {string} userid The account being asked about, by portal user ID. An ID that names no account is answered as a plain negative  rather than a failure, so a negative answer does not prove the account exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         */
        async getIsProductAdministrator(productid: string, userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductAdministratorWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsProductAdministrator(productid, userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getIsProductAdministrator']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the password policy of the current portal: the minimum length together with the flags that demand an  uppercase letter, a digit and a special symbol, plus the regular expressions a client can check a password  against before sending it anywhere. Any signed-in member may read it, and it is also reachable with the  parameters of a confirmation link, so an invited user or one resetting a password can validate the new  password before having a session; a portal whose payment has lapsed still answers. The operation is read-only  and honours `If-Modified-Since`: send back the `Last-Modified` value of an earlier answer and an unchanged  policy comes back as an empty not-modified response rather than a body. A portal nobody has configured  requires 8 characters with all three flags off. Whatever the policy says, the portal refuses a password longer  than 30 characters, a ceiling this answer does not carry. Change the policy with  `PUT api/2.0/settings/security/password`.
         * @summary Get password settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-password-settings/
         */
        async getPasswordSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PasswordSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPasswordSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getPasswordSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the users who administer the portal module identified by `productid` in the path. The all-zero GUID  stands for the portal itself: the answer then covers the DocSpace administrator group together with every  product group, and includes the portal owner, who administers everything by default. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. `productid` has to be a  GUID, and one that names no group is answered with an empty list rather than a failure. The operation is  read-only and returns whole user profiles, a heavier answer than a membership check, and a user who belongs to  more than one of the groups asked about is listed once per group. Entries arrive in group order, the DocSpace  administrator group first, the list is neither paged nor filterable, and a promotion made through the sibling  `PUT` shows up here at once. Use `GET api/2.0/settings/security/administrator` to test a single user against a  single module, and `PUT api/2.0/settings/security/administrator` to promote or demote somebody.
         * @summary Get product administrators
         * @param {string} productid The module the operation acts on, by module GUID. The all-zero GUID stands for the portal itself rather than  for a single module, and a GUID that names no module group is answered with an empty result instead of a  failure.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProductAdministrators operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-product-administrators/
         */
        async getProductAdministrators(productid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductAdministrators(productid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getProductAdministrators']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers whether the module with the given identifier is available to the calling user right now, as a single  boolean. `id` is the module GUID and travels in the path; a value that is not a GUID does not match the route  at all. Any signed-in member may call this; anonymous callers are not admitted. The operation is read-only and  its answer is specific to the caller: `true` means a module with that identifier is registered in this portal,  is visible, and the caller is allowed to read it, while `false` covers every other case - the module is not  registered here, it is hidden for this portal, or the caller is outside the users and groups allowed to open  it. A `false` therefore does not tell those apart, and an unknown identifier is reported as unavailable  instead of failing. Read the allow-list behind the decision with `GET api/2.0/settings/security`, list the  modules the caller can actually open with `GET api/2.0/settings/security/modules`, and change access with  `PUT api/2.0/settings/security`.
         * @summary Check module availability
         * @param {string} id The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-security-info/
         */
        async getWebItemSecurityInfo(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebItemSecurityInfo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getWebItemSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports how access to the portal\'s own modules is configured: for every module identifier sent in `ids`,  whether access is restricted at all and which users and groups are allowed to open the module. Send the  identifiers as repeated `ids` query values; each one has to be a GUID, and anything else is rejected as an  invalid request. Omitting `ids` asks about every module registered in the portal, which on a DocSpace  installation is none, so the answer is then an empty list rather than a failure. Any signed-in member may call  this; anonymous callers are not admitted. The operation is read-only and answers one entry per identifier, in  the order the identifiers were sent. `enabled` is `false` for a module nobody has ever configured, `groups`  and `users` name the subjects the rule was stored for, and `isSubItem` marks a module that hangs under another  one. Users the caller is not allowed to see are left out of `users`, so the same module can come back with  different lists for different callers. Change any of this with `PUT api/2.0/settings/security`.
         * @summary Get module access settings
         * @param {Array<string>} [ids] The modules to report on, each given as a GUID and sent as a repeated query value. An entry that is not a  GUID fails the whole request as invalid. Leaving the list out asks about every module registered in the  portal, which on a DocSpace installation is none, so the answer is then empty rather than complete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSettingsSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-settings-security-info/
         */
        async getWebItemSettingsSecurityInfo(ids?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecurityArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebItemSettingsSecurityInfo(ids, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getWebItemSettingsSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches several portal modules on or off in one call: `items` carries an entry per module, its `key` the  module GUID and its `value` the new enabled flag. The caller needs the portal-settings right of a DocSpace  administrator, and the call is answered with 403 on an open portal, where everyone is admitted and per-module  rules would mean nothing. Every key has to be a GUID; anything else is rejected as an invalid request, and a  module listed twice is applied once, from its first entry. This operation carries no subject list of its own:  switching a product module on restores the users and groups it was last restricted to, while every other case  is stored as a plain allow or deny for everyone, so use `PUT api/2.0/settings/security` when the allow-list  itself has to change. The batch is recorded in the audit trail as one list update rather than module by  module. The answer is the resulting configuration of every module listed, in the shape  `GET api/2.0/settings/security` returns.
         * @summary Set access to modules in bulk
         * @param {WebItemsSecurityRequestsDto} [webItemsSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAccessToWebItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-access-to-web-items/
         */
        async setAccessToWebItems(webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecurityArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setAccessToWebItems(webItemsSecurityRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.setAccessToWebItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Promotes a portal member to administrator of one module, or takes that role away, according to the  `administrator` flag; the all-zero product GUID targets the DocSpace administrator role, which covers the  whole portal. The caller needs the portal-settings right of a DocSpace administrator, and granting the  portal-wide role additionally requires being the portal owner - anyone else is refused with 403. A free cloud  plan does not offer the option at all and answers 402, as does a promotion for which no paid seat is left,  since promoting a guest or a plain member turns them into a paid one. Taking the portal-wide role away also  removes the member from every product group. The change is immediate, portal-wide, recorded in the audit  trail, and sending the same body twice changes nothing further; it never creates a user, so invite the member  first. The answer echoes the identifiers and the flag as stored - re-read membership with  `GET api/2.0/settings/security/administrator`.
         * @summary Set product administrator
         * @param {SecurityRequestsDto} [securityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-product-administrator/
         */
        async setProductAdministrator(securityRequestsDto?: SecurityRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductAdministratorWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setProductAdministrator(securityRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.setProductAdministrator']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the access rules of one portal module: `id` names the module, `enabled` says whether it may be  opened, and `subjects` lists the users and groups the rule is stored for. The caller needs the portal-settings  right of a DocSpace administrator, and the call is answered with 403 on an open portal, where everyone is  admitted and per-module rules would mean nothing. `id` has to be a GUID; anything else is rejected as an  invalid request. The rules stored before are dropped rather than extended, so send the full list of subjects  every time. Watch the empty cases: leaving `subjects` out applies `enabled` to everyone, while an empty  `subjects` array is stored as access for everyone whatever `enabled` says. The change is recorded in the audit  trail unless `subjects` was left out entirely. The answer is the module\'s resulting configuration as a  single-entry list, in the shape `GET api/2.0/settings/security` returns. To switch several modules at once use  `PUT api/2.0/settings/security/access`.
         * @summary Set module access
         * @param {WebItemSecurityRequestsDto} [webItemSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setWebItemSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-item-security/
         */
        async setWebItemSecurity(webItemSecurityRequestsDto?: WebItemSecurityRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecurityArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setWebItemSecurity(webItemSecurityRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.setWebItemSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the password policy of the whole portal with the four values sent: `minLength` and the three flags  that demand an uppercase letter, a digit and a special symbol. There is no partial update - a flag left out of  the body is stored as `false` - so read the current policy with `GET api/2.0/settings/security/password` and  send it back with your change applied. The caller needs the portal-settings right of a DocSpace administrator,  otherwise the call is refused. `minLength` has to sit between the floor the installation is configured with, 8  characters unless it was changed, and the ceiling of 30; anything outside is rejected as an invalid request.  The new policy applies to passwords set from now on: existing passwords keep working until their owners change  them, and nobody is asked to renew. The change is portal-wide, recorded in the audit trail, and sending the  same body twice changes nothing further. The answer is the stored policy with its regular expressions.
         * @summary Update password settings
         * @param {PasswordSettingsRequestsDto} [passwordSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-password-settings/
         */
        async updatePasswordSettings(passwordSettingsRequestsDto?: PasswordSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PasswordSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePasswordSettings(passwordSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.updatePasswordSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityApi - factory interface
 * @export
 */
export const SecurityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityApiFp(configuration)
    return {
        /**
         * Lists the portal modules the calling user can currently open, each as an `id` holding the module\'s product  class name and a `title` holding its display name, both HTML-encoded. Any signed-in member may call this;  anonymous callers are not admitted. The operation is read-only and takes no parameters, and the list is  specific to the caller: modules hidden for this portal, and modules whose access rules exclude the caller, are  left out, and sub-modules nested under another module are never listed. Entries follow the portal\'s own module  order rather than an alphabetical one. An empty list means the installation registers no such modules at all -  the case on DocSpace, where the classic modules do not exist - and is not a failure. The identifiers here are  display-oriented class names, not the GUIDs the access-settings operations work with, so do not feed them to  `GET api/2.0/settings/security/{id}`, which expects a module GUID.
         * @summary Get enabled modules
         * @param {*} [options] Override http request option.
         * REST API Reference for getEnabledModules operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enabled-modules/
         * @throws {RequiredError}
         */
        getEnabledModules(options?: RawAxiosRequestConfig): AxiosPromise<EnabledModuleArrayWrapper> {
            return localVarFp.getEnabledModules(options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether one user administers one portal module, as the identifiers asked about plus an `administrator`  flag. Both `productid` and `userid` are query parameters and both are required; the all-zero product GUID asks  about the portal itself rather than about a single module. The caller needs the portal-settings right of a  DocSpace administrator, otherwise the call is refused. The operation is read-only. The flag is `true` when the  user belongs to the DocSpace administrator group or to the module\'s own group, so a portal-wide administrator  is reported as an administrator of every module, whatever the module identifier says. Identifiers that name no  user and no group are answered with `false` instead of a failure, so a `false` does not prove the user exists.  The verdict is read out of group membership alone and says nothing about whether the module is enabled for  this portal, which `GET api/2.0/settings/security/{id}` reports. Use  `GET api/2.0/settings/security/administrator/{productid}` to list everyone who administers a module, and  `PUT api/2.0/settings/security/administrator` to change the membership.
         * @summary Check product administrator
         * @param {SecurityApiGetIsProductAdministratorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         * @throws {RequiredError}
         */
        getIsProductAdministrator(requestParameters: SecurityApiGetIsProductAdministratorRequest, options?: RawAxiosRequestConfig): AxiosPromise<ProductAdministratorWrapper> {
            return localVarFp.getIsProductAdministrator(requestParameters.productid, requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the password policy of the current portal: the minimum length together with the flags that demand an  uppercase letter, a digit and a special symbol, plus the regular expressions a client can check a password  against before sending it anywhere. Any signed-in member may read it, and it is also reachable with the  parameters of a confirmation link, so an invited user or one resetting a password can validate the new  password before having a session; a portal whose payment has lapsed still answers. The operation is read-only  and honours `If-Modified-Since`: send back the `Last-Modified` value of an earlier answer and an unchanged  policy comes back as an empty not-modified response rather than a body. A portal nobody has configured  requires 8 characters with all three flags off. Whatever the policy says, the portal refuses a password longer  than 30 characters, a ceiling this answer does not carry. Change the policy with  `PUT api/2.0/settings/security/password`.
         * @summary Get password settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getPasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-password-settings/
         * @throws {RequiredError}
         */
        getPasswordSettings(options?: RawAxiosRequestConfig): AxiosPromise<PasswordSettingsWrapper> {
            return localVarFp.getPasswordSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the users who administer the portal module identified by `productid` in the path. The all-zero GUID  stands for the portal itself: the answer then covers the DocSpace administrator group together with every  product group, and includes the portal owner, who administers everything by default. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. `productid` has to be a  GUID, and one that names no group is answered with an empty list rather than a failure. The operation is  read-only and returns whole user profiles, a heavier answer than a membership check, and a user who belongs to  more than one of the groups asked about is listed once per group. Entries arrive in group order, the DocSpace  administrator group first, the list is neither paged nor filterable, and a promotion made through the sibling  `PUT` shows up here at once. Use `GET api/2.0/settings/security/administrator` to test a single user against a  single module, and `PUT api/2.0/settings/security/administrator` to promote or demote somebody.
         * @summary Get product administrators
         * @param {SecurityApiGetProductAdministratorsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProductAdministrators operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-product-administrators/
         * @throws {RequiredError}
         */
        getProductAdministrators(requestParameters: SecurityApiGetProductAdministratorsRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.getProductAdministrators(requestParameters.productid, options).then((request) => request(axios, basePath));
        },
        /**
         * Answers whether the module with the given identifier is available to the calling user right now, as a single  boolean. `id` is the module GUID and travels in the path; a value that is not a GUID does not match the route  at all. Any signed-in member may call this; anonymous callers are not admitted. The operation is read-only and  its answer is specific to the caller: `true` means a module with that identifier is registered in this portal,  is visible, and the caller is allowed to read it, while `false` covers every other case - the module is not  registered here, it is hidden for this portal, or the caller is outside the users and groups allowed to open  it. A `false` therefore does not tell those apart, and an unknown identifier is reported as unavailable  instead of failing. Read the allow-list behind the decision with `GET api/2.0/settings/security`, list the  modules the caller can actually open with `GET api/2.0/settings/security/modules`, and change access with  `PUT api/2.0/settings/security`.
         * @summary Check module availability
         * @param {SecurityApiGetWebItemSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebItemSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-security-info/
         * @throws {RequiredError}
         */
        getWebItemSecurityInfo(requestParameters: SecurityApiGetWebItemSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getWebItemSecurityInfo(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports how access to the portal\'s own modules is configured: for every module identifier sent in `ids`,  whether access is restricted at all and which users and groups are allowed to open the module. Send the  identifiers as repeated `ids` query values; each one has to be a GUID, and anything else is rejected as an  invalid request. Omitting `ids` asks about every module registered in the portal, which on a DocSpace  installation is none, so the answer is then an empty list rather than a failure. Any signed-in member may call  this; anonymous callers are not admitted. The operation is read-only and answers one entry per identifier, in  the order the identifiers were sent. `enabled` is `false` for a module nobody has ever configured, `groups`  and `users` name the subjects the rule was stored for, and `isSubItem` marks a module that hangs under another  one. Users the caller is not allowed to see are left out of `users`, so the same module can come back with  different lists for different callers. Change any of this with `PUT api/2.0/settings/security`.
         * @summary Get module access settings
         * @param {SecurityApiGetWebItemSettingsSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebItemSettingsSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-settings-security-info/
         * @throws {RequiredError}
         */
        getWebItemSettingsSecurityInfo(requestParameters: SecurityApiGetWebItemSettingsSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.getWebItemSettingsSecurityInfo(requestParameters.ids, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches several portal modules on or off in one call: `items` carries an entry per module, its `key` the  module GUID and its `value` the new enabled flag. The caller needs the portal-settings right of a DocSpace  administrator, and the call is answered with 403 on an open portal, where everyone is admitted and per-module  rules would mean nothing. Every key has to be a GUID; anything else is rejected as an invalid request, and a  module listed twice is applied once, from its first entry. This operation carries no subject list of its own:  switching a product module on restores the users and groups it was last restricted to, while every other case  is stored as a plain allow or deny for everyone, so use `PUT api/2.0/settings/security` when the allow-list  itself has to change. The batch is recorded in the audit trail as one list update rather than module by  module. The answer is the resulting configuration of every module listed, in the shape  `GET api/2.0/settings/security` returns.
         * @summary Set access to modules in bulk
         * @param {SecurityApiSetAccessToWebItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setAccessToWebItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-access-to-web-items/
         * @throws {RequiredError}
         */
        setAccessToWebItems(requestParameters: SecurityApiSetAccessToWebItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.setAccessToWebItems(requestParameters.webItemsSecurityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Promotes a portal member to administrator of one module, or takes that role away, according to the  `administrator` flag; the all-zero product GUID targets the DocSpace administrator role, which covers the  whole portal. The caller needs the portal-settings right of a DocSpace administrator, and granting the  portal-wide role additionally requires being the portal owner - anyone else is refused with 403. A free cloud  plan does not offer the option at all and answers 402, as does a promotion for which no paid seat is left,  since promoting a guest or a plain member turns them into a paid one. Taking the portal-wide role away also  removes the member from every product group. The change is immediate, portal-wide, recorded in the audit  trail, and sending the same body twice changes nothing further; it never creates a user, so invite the member  first. The answer echoes the identifiers and the flag as stored - re-read membership with  `GET api/2.0/settings/security/administrator`.
         * @summary Set product administrator
         * @param {SecurityApiSetProductAdministratorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-product-administrator/
         * @throws {RequiredError}
         */
        setProductAdministrator(requestParameters: SecurityApiSetProductAdministratorRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ProductAdministratorWrapper> {
            return localVarFp.setProductAdministrator(requestParameters.securityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the access rules of one portal module: `id` names the module, `enabled` says whether it may be  opened, and `subjects` lists the users and groups the rule is stored for. The caller needs the portal-settings  right of a DocSpace administrator, and the call is answered with 403 on an open portal, where everyone is  admitted and per-module rules would mean nothing. `id` has to be a GUID; anything else is rejected as an  invalid request. The rules stored before are dropped rather than extended, so send the full list of subjects  every time. Watch the empty cases: leaving `subjects` out applies `enabled` to everyone, while an empty  `subjects` array is stored as access for everyone whatever `enabled` says. The change is recorded in the audit  trail unless `subjects` was left out entirely. The answer is the module\'s resulting configuration as a  single-entry list, in the shape `GET api/2.0/settings/security` returns. To switch several modules at once use  `PUT api/2.0/settings/security/access`.
         * @summary Set module access
         * @param {SecurityApiSetWebItemSecurityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setWebItemSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-item-security/
         * @throws {RequiredError}
         */
        setWebItemSecurity(requestParameters: SecurityApiSetWebItemSecurityRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.setWebItemSecurity(requestParameters.webItemSecurityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the password policy of the whole portal with the four values sent: `minLength` and the three flags  that demand an uppercase letter, a digit and a special symbol. There is no partial update - a flag left out of  the body is stored as `false` - so read the current policy with `GET api/2.0/settings/security/password` and  send it back with your change applied. The caller needs the portal-settings right of a DocSpace administrator,  otherwise the call is refused. `minLength` has to sit between the floor the installation is configured with, 8  characters unless it was changed, and the ceiling of 30; anything outside is rejected as an invalid request.  The new policy applies to passwords set from now on: existing passwords keep working until their owners change  them, and nobody is asked to renew. The change is portal-wide, recorded in the audit trail, and sending the  same body twice changes nothing further. The answer is the stored policy with its regular expressions.
         * @summary Update password settings
         * @param {SecurityApiUpdatePasswordSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updatePasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-password-settings/
         * @throws {RequiredError}
         */
        updatePasswordSettings(requestParameters: SecurityApiUpdatePasswordSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PasswordSettingsWrapper> {
            return localVarFp.updatePasswordSettings(requestParameters.passwordSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getIsProductAdministrator operation in SecurityApi.
 * @export
 * @interface SecurityApiGetIsProductAdministratorRequest
 */
export interface SecurityApiGetIsProductAdministratorRequest {
    /**
     * The module being asked about, by module GUID. The all-zero GUID asks about the portal itself rather than a  single module.
     * @type {string}
     * @memberof SecurityApiGetIsProductAdministrator
     */
    readonly productid: string

    /**
     * The account being asked about, by portal user ID. An ID that names no account is answered as a plain negative  rather than a failure, so a negative answer does not prove the account exists.
     * @type {string}
     * @memberof SecurityApiGetIsProductAdministrator
     */
    readonly userid: string
}

/**
 * Request parameters for getProductAdministrators operation in SecurityApi.
 * @export
 * @interface SecurityApiGetProductAdministratorsRequest
 */
export interface SecurityApiGetProductAdministratorsRequest {
    /**
     * The module the operation acts on, by module GUID. The all-zero GUID stands for the portal itself rather than  for a single module, and a GUID that names no module group is answered with an empty result instead of a  failure.
     * @type {string}
     * @memberof SecurityApiGetProductAdministrators
     */
    readonly productid: string
}

/**
 * Request parameters for getWebItemSecurityInfo operation in SecurityApi.
 * @export
 * @interface SecurityApiGetWebItemSecurityInfoRequest
 */
export interface SecurityApiGetWebItemSecurityInfoRequest {
    /**
     * The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
     * @type {string}
     * @memberof SecurityApiGetWebItemSecurityInfo
     */
    readonly id: string
}

/**
 * Request parameters for getWebItemSettingsSecurityInfo operation in SecurityApi.
 * @export
 * @interface SecurityApiGetWebItemSettingsSecurityInfoRequest
 */
export interface SecurityApiGetWebItemSettingsSecurityInfoRequest {
    /**
     * The modules to report on, each given as a GUID and sent as a repeated query value. An entry that is not a  GUID fails the whole request as invalid. Leaving the list out asks about every module registered in the  portal, which on a DocSpace installation is none, so the answer is then empty rather than complete.
     * @type {Array<string>}
     * @memberof SecurityApiGetWebItemSettingsSecurityInfo
     */
    readonly ids?: Array<string>
}

/**
 * Request parameters for setAccessToWebItems operation in SecurityApi.
 * @export
 * @interface SecurityApiSetAccessToWebItemsRequest
 */
export interface SecurityApiSetAccessToWebItemsRequest {
    /**
     * 
     * @type {WebItemsSecurityRequestsDto}
     * @memberof SecurityApiSetAccessToWebItems
     */
    readonly webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto
}

/**
 * Request parameters for setProductAdministrator operation in SecurityApi.
 * @export
 * @interface SecurityApiSetProductAdministratorRequest
 */
export interface SecurityApiSetProductAdministratorRequest {
    /**
     * 
     * @type {SecurityRequestsDto}
     * @memberof SecurityApiSetProductAdministrator
     */
    readonly securityRequestsDto?: SecurityRequestsDto
}

/**
 * Request parameters for setWebItemSecurity operation in SecurityApi.
 * @export
 * @interface SecurityApiSetWebItemSecurityRequest
 */
export interface SecurityApiSetWebItemSecurityRequest {
    /**
     * 
     * @type {WebItemSecurityRequestsDto}
     * @memberof SecurityApiSetWebItemSecurity
     */
    readonly webItemSecurityRequestsDto?: WebItemSecurityRequestsDto
}

/**
 * Request parameters for updatePasswordSettings operation in SecurityApi.
 * @export
 * @interface SecurityApiUpdatePasswordSettingsRequest
 */
export interface SecurityApiUpdatePasswordSettingsRequest {
    /**
     * 
     * @type {PasswordSettingsRequestsDto}
     * @memberof SecurityApiUpdatePasswordSettings
     */
    readonly passwordSettingsRequestsDto?: PasswordSettingsRequestsDto
}

/**
 * SecurityApi - object-oriented interface
 * @export
 * @class SecurityApi
 * @extends {BaseAPI}
 */
export class SecurityApi extends BaseAPI {
    /**
     * Lists the portal modules the calling user can currently open, each as an `id` holding the module\'s product  class name and a `title` holding its display name, both HTML-encoded. Any signed-in member may call this;  anonymous callers are not admitted. The operation is read-only and takes no parameters, and the list is  specific to the caller: modules hidden for this portal, and modules whose access rules exclude the caller, are  left out, and sub-modules nested under another module are never listed. Entries follow the portal\'s own module  order rather than an alphabetical one. An empty list means the installation registers no such modules at all -  the case on DocSpace, where the classic modules do not exist - and is not a failure. The identifiers here are  display-oriented class names, not the GUIDs the access-settings operations work with, so do not feed them to  `GET api/2.0/settings/security/{id}`, which expects a module GUID.
     * @summary Get enabled modules
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getEnabledModules(options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getEnabledModules(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether one user administers one portal module, as the identifiers asked about plus an `administrator`  flag. Both `productid` and `userid` are query parameters and both are required; the all-zero product GUID asks  about the portal itself rather than about a single module. The caller needs the portal-settings right of a  DocSpace administrator, otherwise the call is refused. The operation is read-only. The flag is `true` when the  user belongs to the DocSpace administrator group or to the module\'s own group, so a portal-wide administrator  is reported as an administrator of every module, whatever the module identifier says. Identifiers that name no  user and no group are answered with `false` instead of a failure, so a `false` does not prove the user exists.  The verdict is read out of group membership alone and says nothing about whether the module is enabled for  this portal, which `GET api/2.0/settings/security/{id}` reports. Use  `GET api/2.0/settings/security/administrator/{productid}` to list everyone who administers a module, and  `PUT api/2.0/settings/security/administrator` to change the membership.
     * @summary Check product administrator
     * @param {SettingsSecurityApiGetIsProductAdministratorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getIsProductAdministrator(requestParameters: SecurityApiGetIsProductAdministratorRequest, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getIsProductAdministrator(requestParameters.productid, requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the password policy of the current portal: the minimum length together with the flags that demand an  uppercase letter, a digit and a special symbol, plus the regular expressions a client can check a password  against before sending it anywhere. Any signed-in member may read it, and it is also reachable with the  parameters of a confirmation link, so an invited user or one resetting a password can validate the new  password before having a session; a portal whose payment has lapsed still answers. The operation is read-only  and honours `If-Modified-Since`: send back the `Last-Modified` value of an earlier answer and an unchanged  policy comes back as an empty not-modified response rather than a body. A portal nobody has configured  requires 8 characters with all three flags off. Whatever the policy says, the portal refuses a password longer  than 30 characters, a ceiling this answer does not carry. Change the policy with  `PUT api/2.0/settings/security/password`.
     * @summary Get password settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getPasswordSettings(options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getPasswordSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the users who administer the portal module identified by `productid` in the path. The all-zero GUID  stands for the portal itself: the answer then covers the DocSpace administrator group together with every  product group, and includes the portal owner, who administers everything by default. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. `productid` has to be a  GUID, and one that names no group is answered with an empty list rather than a failure. The operation is  read-only and returns whole user profiles, a heavier answer than a membership check, and a user who belongs to  more than one of the groups asked about is listed once per group. Entries arrive in group order, the DocSpace  administrator group first, the list is neither paged nor filterable, and a promotion made through the sibling  `PUT` shows up here at once. Use `GET api/2.0/settings/security/administrator` to test a single user against a  single module, and `PUT api/2.0/settings/security/administrator` to promote or demote somebody.
     * @summary Get product administrators
     * @param {SettingsSecurityApiGetProductAdministratorsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getProductAdministrators(requestParameters: SecurityApiGetProductAdministratorsRequest, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getProductAdministrators(requestParameters.productid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Answers whether the module with the given identifier is available to the calling user right now, as a single  boolean. `id` is the module GUID and travels in the path; a value that is not a GUID does not match the route  at all. Any signed-in member may call this; anonymous callers are not admitted. The operation is read-only and  its answer is specific to the caller: `true` means a module with that identifier is registered in this portal,  is visible, and the caller is allowed to read it, while `false` covers every other case - the module is not  registered here, it is hidden for this portal, or the caller is outside the users and groups allowed to open  it. A `false` therefore does not tell those apart, and an unknown identifier is reported as unavailable  instead of failing. Read the allow-list behind the decision with `GET api/2.0/settings/security`, list the  modules the caller can actually open with `GET api/2.0/settings/security/modules`, and change access with  `PUT api/2.0/settings/security`.
     * @summary Check module availability
     * @param {SettingsSecurityApiGetWebItemSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getWebItemSecurityInfo(requestParameters: SecurityApiGetWebItemSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getWebItemSecurityInfo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports how access to the portal\'s own modules is configured: for every module identifier sent in `ids`,  whether access is restricted at all and which users and groups are allowed to open the module. Send the  identifiers as repeated `ids` query values; each one has to be a GUID, and anything else is rejected as an  invalid request. Omitting `ids` asks about every module registered in the portal, which on a DocSpace  installation is none, so the answer is then an empty list rather than a failure. Any signed-in member may call  this; anonymous callers are not admitted. The operation is read-only and answers one entry per identifier, in  the order the identifiers were sent. `enabled` is `false` for a module nobody has ever configured, `groups`  and `users` name the subjects the rule was stored for, and `isSubItem` marks a module that hangs under another  one. Users the caller is not allowed to see are left out of `users`, so the same module can come back with  different lists for different callers. Change any of this with `PUT api/2.0/settings/security`.
     * @summary Get module access settings
     * @param {SettingsSecurityApiGetWebItemSettingsSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getWebItemSettingsSecurityInfo(requestParameters: SecurityApiGetWebItemSettingsSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getWebItemSettingsSecurityInfo(requestParameters.ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches several portal modules on or off in one call: `items` carries an entry per module, its `key` the  module GUID and its `value` the new enabled flag. The caller needs the portal-settings right of a DocSpace  administrator, and the call is answered with 403 on an open portal, where everyone is admitted and per-module  rules would mean nothing. Every key has to be a GUID; anything else is rejected as an invalid request, and a  module listed twice is applied once, from its first entry. This operation carries no subject list of its own:  switching a product module on restores the users and groups it was last restricted to, while every other case  is stored as a plain allow or deny for everyone, so use `PUT api/2.0/settings/security` when the allow-list  itself has to change. The batch is recorded in the audit trail as one list update rather than module by  module. The answer is the resulting configuration of every module listed, in the shape  `GET api/2.0/settings/security` returns.
     * @summary Set access to modules in bulk
     * @param {SettingsSecurityApiSetAccessToWebItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public setAccessToWebItems(requestParameters: SecurityApiSetAccessToWebItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).setAccessToWebItems(requestParameters.webItemsSecurityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Promotes a portal member to administrator of one module, or takes that role away, according to the  `administrator` flag; the all-zero product GUID targets the DocSpace administrator role, which covers the  whole portal. The caller needs the portal-settings right of a DocSpace administrator, and granting the  portal-wide role additionally requires being the portal owner - anyone else is refused with 403. A free cloud  plan does not offer the option at all and answers 402, as does a promotion for which no paid seat is left,  since promoting a guest or a plain member turns them into a paid one. Taking the portal-wide role away also  removes the member from every product group. The change is immediate, portal-wide, recorded in the audit  trail, and sending the same body twice changes nothing further; it never creates a user, so invite the member  first. The answer echoes the identifiers and the flag as stored - re-read membership with  `GET api/2.0/settings/security/administrator`.
     * @summary Set product administrator
     * @param {SettingsSecurityApiSetProductAdministratorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public setProductAdministrator(requestParameters: SecurityApiSetProductAdministratorRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).setProductAdministrator(requestParameters.securityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the access rules of one portal module: `id` names the module, `enabled` says whether it may be  opened, and `subjects` lists the users and groups the rule is stored for. The caller needs the portal-settings  right of a DocSpace administrator, and the call is answered with 403 on an open portal, where everyone is  admitted and per-module rules would mean nothing. `id` has to be a GUID; anything else is rejected as an  invalid request. The rules stored before are dropped rather than extended, so send the full list of subjects  every time. Watch the empty cases: leaving `subjects` out applies `enabled` to everyone, while an empty  `subjects` array is stored as access for everyone whatever `enabled` says. The change is recorded in the audit  trail unless `subjects` was left out entirely. The answer is the module\'s resulting configuration as a  single-entry list, in the shape `GET api/2.0/settings/security` returns. To switch several modules at once use  `PUT api/2.0/settings/security/access`.
     * @summary Set module access
     * @param {SettingsSecurityApiSetWebItemSecurityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public setWebItemSecurity(requestParameters: SecurityApiSetWebItemSecurityRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).setWebItemSecurity(requestParameters.webItemSecurityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the password policy of the whole portal with the four values sent: `minLength` and the three flags  that demand an uppercase letter, a digit and a special symbol. There is no partial update - a flag left out of  the body is stored as `false` - so read the current policy with `GET api/2.0/settings/security/password` and  send it back with your change applied. The caller needs the portal-settings right of a DocSpace administrator,  otherwise the call is refused. `minLength` has to sit between the floor the installation is configured with, 8  characters unless it was changed, and the ceiling of 30; anything outside is rejected as an invalid request.  The new policy applies to passwords set from now on: existing passwords keep working until their owners change  them, and nobody is asked to renew. The change is portal-wide, recorded in the audit trail, and sending the  same body twice changes nothing further. The answer is the stored policy with its regular expressions.
     * @summary Update password settings
     * @param {SettingsSecurityApiUpdatePasswordSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public updatePasswordSettings(requestParameters: SecurityApiUpdatePasswordSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).updatePasswordSettings(requestParameters.passwordSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

