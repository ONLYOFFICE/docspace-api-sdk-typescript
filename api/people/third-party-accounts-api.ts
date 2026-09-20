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
import type { AccountInfoArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { LinkAccountRequestDto } from '../../models';
// @ts-ignore
import type { SignupAccountRequestDto } from '../../models';
/**
 * ThirdPartyAccountsApi - axios parameter creator
 * @export
 */
export const ThirdPartyAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the third-party identity providers this portal has enabled, each with the URL that starts the login  with it, so a client can render the social sign-in buttons.  It needs no authentication and is the operation to call before showing a login or an invitation page; an  empty list means the portal has no provider configured, not that the call failed.  The call is read-only, and `linked` says whether the provider is already connected to the calling profile -  for an anonymous caller there is nothing to compare against, so every entry comes back with false.  The order is fixed by the portal, except that a caller located in China gets `weixin` first.  Pass `fromOnly` to keep a single provider, `inviteView` to leave out the providers that cannot be used on an  invitation page, and `settingsView` or `clientCallback` to get URLs that open in a popup instead of  redirecting the desktop application.  Use `PUT api/2.0/people/thirdparty/linkaccount` to connect one of these providers to an existing profile and  `POST api/2.0/people/thirdparty/signup` to create a profile through one.
         * @summary Get third-party providers
         * @param {boolean} [inviteView] Set it to true when the list is rendered on an invitation page: the providers that cannot be used to accept an  invitation, `twitter` and `appleid`, are then left out. It defaults to false, which returns every enabled  provider.
         * @param {boolean} [settingsView] Set it to true when the list is rendered on a settings page, to get login URLs that open in a popup window.  With the default false the URL still opens in a popup for a desktop browser, and switches to a redirect only  for a mobile browser or for the DocSpace desktop application.
         * @param {string} [clientCallback] The name of the client-side function the popup calls back when the provider authorization finishes. It is  placed into the returned URLs as they are, and it is only used by the popup mode.
         * @param {string} [fromOnly] Keeps only the named provider, compared case-insensitively against the lowercase provider names such as  `google` or `microsoft`; the special value `openid` selects `google`. Omit it to get every enabled provider.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAuthProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-auth-providers/
         */
        getThirdPartyAuthProviders: async (inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/thirdparty/providers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (inviteView !== undefined) {
                localVarQueryParameter['inviteView'] = inviteView;
            }

            if (settingsView !== undefined) {
                localVarQueryParameter['settingsView'] = settingsView;
            }

            if (clientCallback !== undefined) {
                localVarQueryParameter['clientCallback'] = clientCallback;
            }

            if (fromOnly !== undefined) {
                localVarQueryParameter['fromOnly'] = fromOnly;
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
         * Connects a third-party identity to the calling profile, so that the account can afterwards sign in through  that provider.  The profile has to come from a completed provider authorization: pass the serialized `LoginProfile` the login  flow started from `GET api/2.0/people/thirdparty/providers` handed back, not a hand-written object.  It acts on the authenticated account only, and the portal has to be a standalone installation or have a  tariff that includes third-party authorization, otherwise the operation answers 403.  The call returns no body and is not idempotent: one third-party identity can be linked to a single portal  profile, so repeating it, or linking an identity somebody else already uses, answers 400.  A profile whose authorization was cancelled by the user is accepted and ignored, so a cancelled login also  answers 200 and links nothing - read `GET api/2.0/people/thirdparty/providers` afterwards and check `linked`  to find out whether the link exists.  Use `DELETE api/2.0/people/thirdparty/unlinkaccount` to remove a link.
         * @summary Link a third-party account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-third-party-account/
         */
        linkThirdPartyAccount: async (linkAccountRequestDto?: LinkAccountRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/thirdparty/linkaccount`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(linkAccountRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a portal profile from a third-party identity and joins the invitation the `key` belongs to, which is  how a person accepts an invitation by signing in with a provider instead of setting a password.  It needs no authentication, but it does need a valid invitation: `key` has to be the key of a live invitation  link, and `serializedProfile` has to be the profile a completed provider authorization produced.  The resulting type comes from the invitation link itself, and `employeeType` only says which type to look the  link up as, defaulting to `RoomAdmin`.  When the identity or its email already belongs to a portal profile, that existing profile is returned and the  provider is linked to it instead of a second account being created, so the call can be repeated safely.  The answer is the profile the caller ends up with - and it is empty, still with status 200, when the provider  authorization was cancelled or when the profile could not be created, so check for an empty body instead of  relying on the status alone.  A `weixin` or `nextcloud` identity carries no email address, so the portal generates one and the profile stays  in the `AutoGenerated` activation state; every other provider has to supply an email.
         * @summary Sign up with a provider
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for signupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/signup-third-party-account/
         */
        signupThirdPartyAccount: async (signupAccountRequestDto?: SignupAccountRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/thirdparty/signup`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signupAccountRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the link between the calling profile and the named third-party provider, so that the account can no  longer sign in through it.  It acts on the authenticated account only and takes the provider name in the query, using the same lowercase  values `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`.  The call returns no body and is idempotent: unlinking a provider that is not linked answers 200 and changes  nothing.  The portal profile itself is kept, together with its password, so the account stays usable through the  ordinary sign-in; only the third-party route is removed.  Link the provider again through `PUT api/2.0/people/thirdparty/linkaccount`.
         * @summary Unlink a third-party account
         * @param {string} [provider] The name of the provider to unlink, in the lowercase form `GET api/2.0/people/thirdparty/providers` returns,  such as `google` or `microsoft`. A name that is not linked to the calling profile is accepted and changes  nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-third-party-account/
         */
        unlinkThirdPartyAccount: async (provider?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/thirdparty/unlinkaccount`;
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

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
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
 * ThirdPartyAccountsApi - functional programming interface
 * @export
 */
export const ThirdPartyAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThirdPartyAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the third-party identity providers this portal has enabled, each with the URL that starts the login  with it, so a client can render the social sign-in buttons.  It needs no authentication and is the operation to call before showing a login or an invitation page; an  empty list means the portal has no provider configured, not that the call failed.  The call is read-only, and `linked` says whether the provider is already connected to the calling profile -  for an anonymous caller there is nothing to compare against, so every entry comes back with false.  The order is fixed by the portal, except that a caller located in China gets `weixin` first.  Pass `fromOnly` to keep a single provider, `inviteView` to leave out the providers that cannot be used on an  invitation page, and `settingsView` or `clientCallback` to get URLs that open in a popup instead of  redirecting the desktop application.  Use `PUT api/2.0/people/thirdparty/linkaccount` to connect one of these providers to an existing profile and  `POST api/2.0/people/thirdparty/signup` to create a profile through one.
         * @summary Get third-party providers
         * @param {boolean} [inviteView] Set it to true when the list is rendered on an invitation page: the providers that cannot be used to accept an  invitation, `twitter` and `appleid`, are then left out. It defaults to false, which returns every enabled  provider.
         * @param {boolean} [settingsView] Set it to true when the list is rendered on a settings page, to get login URLs that open in a popup window.  With the default false the URL still opens in a popup for a desktop browser, and switches to a redirect only  for a mobile browser or for the DocSpace desktop application.
         * @param {string} [clientCallback] The name of the client-side function the popup calls back when the provider authorization finishes. It is  placed into the returned URLs as they are, and it is only used by the popup mode.
         * @param {string} [fromOnly] Keeps only the named provider, compared case-insensitively against the lowercase provider names such as  `google` or `microsoft`; the special value `openid` selects `google`. Omit it to get every enabled provider.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAuthProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-auth-providers/
         */
        async getThirdPartyAuthProviders(inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountInfoArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getThirdPartyAuthProviders(inviteView, settingsView, clientCallback, fromOnly, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyAccountsApi.getThirdPartyAuthProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Connects a third-party identity to the calling profile, so that the account can afterwards sign in through  that provider.  The profile has to come from a completed provider authorization: pass the serialized `LoginProfile` the login  flow started from `GET api/2.0/people/thirdparty/providers` handed back, not a hand-written object.  It acts on the authenticated account only, and the portal has to be a standalone installation or have a  tariff that includes third-party authorization, otherwise the operation answers 403.  The call returns no body and is not idempotent: one third-party identity can be linked to a single portal  profile, so repeating it, or linking an identity somebody else already uses, answers 400.  A profile whose authorization was cancelled by the user is accepted and ignored, so a cancelled login also  answers 200 and links nothing - read `GET api/2.0/people/thirdparty/providers` afterwards and check `linked`  to find out whether the link exists.  Use `DELETE api/2.0/people/thirdparty/unlinkaccount` to remove a link.
         * @summary Link a third-party account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-third-party-account/
         */
        async linkThirdPartyAccount(linkAccountRequestDto?: LinkAccountRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.linkThirdPartyAccount(linkAccountRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyAccountsApi.linkThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a portal profile from a third-party identity and joins the invitation the `key` belongs to, which is  how a person accepts an invitation by signing in with a provider instead of setting a password.  It needs no authentication, but it does need a valid invitation: `key` has to be the key of a live invitation  link, and `serializedProfile` has to be the profile a completed provider authorization produced.  The resulting type comes from the invitation link itself, and `employeeType` only says which type to look the  link up as, defaulting to `RoomAdmin`.  When the identity or its email already belongs to a portal profile, that existing profile is returned and the  provider is linked to it instead of a second account being created, so the call can be repeated safely.  The answer is the profile the caller ends up with - and it is empty, still with status 200, when the provider  authorization was cancelled or when the profile could not be created, so check for an empty body instead of  relying on the status alone.  A `weixin` or `nextcloud` identity carries no email address, so the portal generates one and the profile stays  in the `AutoGenerated` activation state; every other provider has to supply an email.
         * @summary Sign up with a provider
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for signupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/signup-third-party-account/
         */
        async signupThirdPartyAccount(signupAccountRequestDto?: SignupAccountRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signupThirdPartyAccount(signupAccountRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyAccountsApi.signupThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the link between the calling profile and the named third-party provider, so that the account can no  longer sign in through it.  It acts on the authenticated account only and takes the provider name in the query, using the same lowercase  values `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`.  The call returns no body and is idempotent: unlinking a provider that is not linked answers 200 and changes  nothing.  The portal profile itself is kept, together with its password, so the account stays usable through the  ordinary sign-in; only the third-party route is removed.  Link the provider again through `PUT api/2.0/people/thirdparty/linkaccount`.
         * @summary Unlink a third-party account
         * @param {string} [provider] The name of the provider to unlink, in the lowercase form `GET api/2.0/people/thirdparty/providers` returns,  such as `google` or `microsoft`. A name that is not linked to the calling profile is accepted and changes  nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-third-party-account/
         */
        async unlinkThirdPartyAccount(provider?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkThirdPartyAccount(provider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyAccountsApi.unlinkThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ThirdPartyAccountsApi - factory interface
 * @export
 */
export const ThirdPartyAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThirdPartyAccountsApiFp(configuration)
    return {
        /**
         * Returns the third-party identity providers this portal has enabled, each with the URL that starts the login  with it, so a client can render the social sign-in buttons.  It needs no authentication and is the operation to call before showing a login or an invitation page; an  empty list means the portal has no provider configured, not that the call failed.  The call is read-only, and `linked` says whether the provider is already connected to the calling profile -  for an anonymous caller there is nothing to compare against, so every entry comes back with false.  The order is fixed by the portal, except that a caller located in China gets `weixin` first.  Pass `fromOnly` to keep a single provider, `inviteView` to leave out the providers that cannot be used on an  invitation page, and `settingsView` or `clientCallback` to get URLs that open in a popup instead of  redirecting the desktop application.  Use `PUT api/2.0/people/thirdparty/linkaccount` to connect one of these providers to an existing profile and  `POST api/2.0/people/thirdparty/signup` to create a profile through one.
         * @summary Get third-party providers
         * @param {ThirdPartyAccountsApiGetThirdPartyAuthProvidersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getThirdPartyAuthProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-auth-providers/
         * @throws {RequiredError}
         */
        getThirdPartyAuthProviders(requestParameters: ThirdPartyAccountsApiGetThirdPartyAuthProvidersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AccountInfoArrayWrapper> {
            return localVarFp.getThirdPartyAuthProviders(requestParameters.inviteView, requestParameters.settingsView, requestParameters.clientCallback, requestParameters.fromOnly, options).then((request) => request(axios, basePath));
        },
        /**
         * Connects a third-party identity to the calling profile, so that the account can afterwards sign in through  that provider.  The profile has to come from a completed provider authorization: pass the serialized `LoginProfile` the login  flow started from `GET api/2.0/people/thirdparty/providers` handed back, not a hand-written object.  It acts on the authenticated account only, and the portal has to be a standalone installation or have a  tariff that includes third-party authorization, otherwise the operation answers 403.  The call returns no body and is not idempotent: one third-party identity can be linked to a single portal  profile, so repeating it, or linking an identity somebody else already uses, answers 400.  A profile whose authorization was cancelled by the user is accepted and ignored, so a cancelled login also  answers 200 and links nothing - read `GET api/2.0/people/thirdparty/providers` afterwards and check `linked`  to find out whether the link exists.  Use `DELETE api/2.0/people/thirdparty/unlinkaccount` to remove a link.
         * @summary Link a third-party account
         * @param {ThirdPartyAccountsApiLinkThirdPartyAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for linkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-third-party-account/
         * @throws {RequiredError}
         */
        linkThirdPartyAccount(requestParameters: ThirdPartyAccountsApiLinkThirdPartyAccountRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.linkThirdPartyAccount(requestParameters.linkAccountRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a portal profile from a third-party identity and joins the invitation the `key` belongs to, which is  how a person accepts an invitation by signing in with a provider instead of setting a password.  It needs no authentication, but it does need a valid invitation: `key` has to be the key of a live invitation  link, and `serializedProfile` has to be the profile a completed provider authorization produced.  The resulting type comes from the invitation link itself, and `employeeType` only says which type to look the  link up as, defaulting to `RoomAdmin`.  When the identity or its email already belongs to a portal profile, that existing profile is returned and the  provider is linked to it instead of a second account being created, so the call can be repeated safely.  The answer is the profile the caller ends up with - and it is empty, still with status 200, when the provider  authorization was cancelled or when the profile could not be created, so check for an empty body instead of  relying on the status alone.  A `weixin` or `nextcloud` identity carries no email address, so the portal generates one and the profile stays  in the `AutoGenerated` activation state; every other provider has to supply an email.
         * @summary Sign up with a provider
         * @param {ThirdPartyAccountsApiSignupThirdPartyAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for signupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/signup-third-party-account/
         * @throws {RequiredError}
         */
        signupThirdPartyAccount(requestParameters: ThirdPartyAccountsApiSignupThirdPartyAccountRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeWrapper> {
            return localVarFp.signupThirdPartyAccount(requestParameters.signupAccountRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the link between the calling profile and the named third-party provider, so that the account can no  longer sign in through it.  It acts on the authenticated account only and takes the provider name in the query, using the same lowercase  values `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`.  The call returns no body and is idempotent: unlinking a provider that is not linked answers 200 and changes  nothing.  The portal profile itself is kept, together with its password, so the account stays usable through the  ordinary sign-in; only the third-party route is removed.  Link the provider again through `PUT api/2.0/people/thirdparty/linkaccount`.
         * @summary Unlink a third-party account
         * @param {ThirdPartyAccountsApiUnlinkThirdPartyAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unlinkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-third-party-account/
         * @throws {RequiredError}
         */
        unlinkThirdPartyAccount(requestParameters: ThirdPartyAccountsApiUnlinkThirdPartyAccountRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unlinkThirdPartyAccount(requestParameters.provider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getThirdPartyAuthProviders operation in ThirdPartyAccountsApi.
 * @export
 * @interface ThirdPartyAccountsApiGetThirdPartyAuthProvidersRequest
 */
export interface ThirdPartyAccountsApiGetThirdPartyAuthProvidersRequest {
    /**
     * Set it to true when the list is rendered on an invitation page: the providers that cannot be used to accept an  invitation, `twitter` and `appleid`, are then left out. It defaults to false, which returns every enabled  provider.
     * @type {boolean}
     * @memberof ThirdPartyAccountsApiGetThirdPartyAuthProviders
     */
    readonly inviteView?: boolean

    /**
     * Set it to true when the list is rendered on a settings page, to get login URLs that open in a popup window.  With the default false the URL still opens in a popup for a desktop browser, and switches to a redirect only  for a mobile browser or for the DocSpace desktop application.
     * @type {boolean}
     * @memberof ThirdPartyAccountsApiGetThirdPartyAuthProviders
     */
    readonly settingsView?: boolean

    /**
     * The name of the client-side function the popup calls back when the provider authorization finishes. It is  placed into the returned URLs as they are, and it is only used by the popup mode.
     * @type {string}
     * @memberof ThirdPartyAccountsApiGetThirdPartyAuthProviders
     */
    readonly clientCallback?: string

    /**
     * Keeps only the named provider, compared case-insensitively against the lowercase provider names such as  `google` or `microsoft`; the special value `openid` selects `google`. Omit it to get every enabled provider.
     * @type {string}
     * @memberof ThirdPartyAccountsApiGetThirdPartyAuthProviders
     */
    readonly fromOnly?: string
}

/**
 * Request parameters for linkThirdPartyAccount operation in ThirdPartyAccountsApi.
 * @export
 * @interface ThirdPartyAccountsApiLinkThirdPartyAccountRequest
 */
export interface ThirdPartyAccountsApiLinkThirdPartyAccountRequest {
    /**
     * 
     * @type {LinkAccountRequestDto}
     * @memberof ThirdPartyAccountsApiLinkThirdPartyAccount
     */
    readonly linkAccountRequestDto?: LinkAccountRequestDto
}

/**
 * Request parameters for signupThirdPartyAccount operation in ThirdPartyAccountsApi.
 * @export
 * @interface ThirdPartyAccountsApiSignupThirdPartyAccountRequest
 */
export interface ThirdPartyAccountsApiSignupThirdPartyAccountRequest {
    /**
     * 
     * @type {SignupAccountRequestDto}
     * @memberof ThirdPartyAccountsApiSignupThirdPartyAccount
     */
    readonly signupAccountRequestDto?: SignupAccountRequestDto
}

/**
 * Request parameters for unlinkThirdPartyAccount operation in ThirdPartyAccountsApi.
 * @export
 * @interface ThirdPartyAccountsApiUnlinkThirdPartyAccountRequest
 */
export interface ThirdPartyAccountsApiUnlinkThirdPartyAccountRequest {
    /**
     * The name of the provider to unlink, in the lowercase form `GET api/2.0/people/thirdparty/providers` returns,  such as `google` or `microsoft`. A name that is not linked to the calling profile is accepted and changes  nothing.
     * @type {string}
     * @memberof ThirdPartyAccountsApiUnlinkThirdPartyAccount
     */
    readonly provider?: string
}

/**
 * ThirdPartyAccountsApi - object-oriented interface
 * @export
 * @class ThirdPartyAccountsApi
 * @extends {BaseAPI}
 */
export class ThirdPartyAccountsApi extends BaseAPI {
    /**
     * Returns the third-party identity providers this portal has enabled, each with the URL that starts the login  with it, so a client can render the social sign-in buttons.  It needs no authentication and is the operation to call before showing a login or an invitation page; an  empty list means the portal has no provider configured, not that the call failed.  The call is read-only, and `linked` says whether the provider is already connected to the calling profile -  for an anonymous caller there is nothing to compare against, so every entry comes back with false.  The order is fixed by the portal, except that a caller located in China gets `weixin` first.  Pass `fromOnly` to keep a single provider, `inviteView` to leave out the providers that cannot be used on an  invitation page, and `settingsView` or `clientCallback` to get URLs that open in a popup instead of  redirecting the desktop application.  Use `PUT api/2.0/people/thirdparty/linkaccount` to connect one of these providers to an existing profile and  `POST api/2.0/people/thirdparty/signup` to create a profile through one.
     * @summary Get third-party providers
     * @param {PeopleThirdPartyAccountsApiGetThirdPartyAuthProvidersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyAccountsApi
     */
    public getThirdPartyAuthProviders(requestParameters: ThirdPartyAccountsApiGetThirdPartyAuthProvidersRequest = {}, options?: RawAxiosRequestConfig) {
        return ThirdPartyAccountsApiFp(this.configuration).getThirdPartyAuthProviders(requestParameters.inviteView, requestParameters.settingsView, requestParameters.clientCallback, requestParameters.fromOnly, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Connects a third-party identity to the calling profile, so that the account can afterwards sign in through  that provider.  The profile has to come from a completed provider authorization: pass the serialized `LoginProfile` the login  flow started from `GET api/2.0/people/thirdparty/providers` handed back, not a hand-written object.  It acts on the authenticated account only, and the portal has to be a standalone installation or have a  tariff that includes third-party authorization, otherwise the operation answers 403.  The call returns no body and is not idempotent: one third-party identity can be linked to a single portal  profile, so repeating it, or linking an identity somebody else already uses, answers 400.  A profile whose authorization was cancelled by the user is accepted and ignored, so a cancelled login also  answers 200 and links nothing - read `GET api/2.0/people/thirdparty/providers` afterwards and check `linked`  to find out whether the link exists.  Use `DELETE api/2.0/people/thirdparty/unlinkaccount` to remove a link.
     * @summary Link a third-party account
     * @param {PeopleThirdPartyAccountsApiLinkThirdPartyAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyAccountsApi
     */
    public linkThirdPartyAccount(requestParameters: ThirdPartyAccountsApiLinkThirdPartyAccountRequest = {}, options?: RawAxiosRequestConfig) {
        return ThirdPartyAccountsApiFp(this.configuration).linkThirdPartyAccount(requestParameters.linkAccountRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a portal profile from a third-party identity and joins the invitation the `key` belongs to, which is  how a person accepts an invitation by signing in with a provider instead of setting a password.  It needs no authentication, but it does need a valid invitation: `key` has to be the key of a live invitation  link, and `serializedProfile` has to be the profile a completed provider authorization produced.  The resulting type comes from the invitation link itself, and `employeeType` only says which type to look the  link up as, defaulting to `RoomAdmin`.  When the identity or its email already belongs to a portal profile, that existing profile is returned and the  provider is linked to it instead of a second account being created, so the call can be repeated safely.  The answer is the profile the caller ends up with - and it is empty, still with status 200, when the provider  authorization was cancelled or when the profile could not be created, so check for an empty body instead of  relying on the status alone.  A `weixin` or `nextcloud` identity carries no email address, so the portal generates one and the profile stays  in the `AutoGenerated` activation state; every other provider has to supply an email.
     * @summary Sign up with a provider
     * @param {PeopleThirdPartyAccountsApiSignupThirdPartyAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyAccountsApi
     */
    public signupThirdPartyAccount(requestParameters: ThirdPartyAccountsApiSignupThirdPartyAccountRequest = {}, options?: RawAxiosRequestConfig) {
        return ThirdPartyAccountsApiFp(this.configuration).signupThirdPartyAccount(requestParameters.signupAccountRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the link between the calling profile and the named third-party provider, so that the account can no  longer sign in through it.  It acts on the authenticated account only and takes the provider name in the query, using the same lowercase  values `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`.  The call returns no body and is idempotent: unlinking a provider that is not linked answers 200 and changes  nothing.  The portal profile itself is kept, together with its password, so the account stays usable through the  ordinary sign-in; only the third-party route is removed.  Link the provider again through `PUT api/2.0/people/thirdparty/linkaccount`.
     * @summary Unlink a third-party account
     * @param {PeopleThirdPartyAccountsApiUnlinkThirdPartyAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyAccountsApi
     */
    public unlinkThirdPartyAccount(requestParameters: ThirdPartyAccountsApiUnlinkThirdPartyAccountRequest = {}, options?: RawAxiosRequestConfig) {
        return ThirdPartyAccountsApiFp(this.configuration).unlinkThirdPartyAccount(requestParameters.provider, options).then((request) => request(this.axios, this.basePath));
    }
}

