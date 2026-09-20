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
import type { AuthRequestsDto } from '../../models';
// @ts-ignore
import type { AuthWithCodeRequestsDto } from '../../models';
// @ts-ignore
import type { AuthenticationTokenWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ConfirmWrapper } from '../../models';
// @ts-ignore
import type { EmailValidationKeyModel } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { MobileRequestsDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Signs a user in to the current portal and either issues the authentication token or reports which second  factor is still missing. Credentials go in the body as `userName` with `password` or `passwordHash`, as the  key of a confirmation link in `confirmData`, or as a third-party account (`provider` with `accessToken`, or  `serializedProfile`), which only a standalone installation or a tariff with third-party sign-in allows. Open  to unauthenticated callers, mutating and not  idempotent: it writes a login event, sets the portal cookies and counts every failure against the brute-force  limit. When a second factor is required for this user the answer carries no `token` but `sms` with the masked  phone number - or a `confirmUrl` pointing at `POST api/2.0/authentication/setphone` while no number is  activated yet - or `tfa` with the setup key while the authenticator app is not connected; submit the code to  `POST api/2.0/authentication/{code}` to finish such a sign-in. Otherwise the answer carries `token` for the  `Authorization` header and `expires`, which is omitted when `session=true` ties the token to the browser  session. An unknown user fails with 404, rejected credentials with 401, a disabled or blocked user with 403.
         * @summary Authenticate a user
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMe operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me/
         */
        authenticateMe: async (authRequestsDto?: AuthRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/authentication`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finishes a two-factor sign-in: checks the one-time code and, when it matches, issues the authentication token.  Call it only after `POST api/2.0/authentication` answered with `sms` or `tfa` set, and repeat the same  credentials in the body next to `code` - the code alone does not identify the user. The code comes from the  SMS the portal sent, which `POST api/2.0/authentication/sendsms` resends, or from the authenticator app;  whichever second factor the portal has enabled for this user is the one checked here. Open to unauthenticated  callers, mutating and not idempotent: a code is single-use, the sign-in is written to the login history, and  the first code accepted from an authenticator app also connects that app to the user. The answer carries  `token` for the `Authorization` header, `expires` unless `session=true` tied the token to the browser session,  and either `sms` with the masked phone number or `tfa`. A wrong, empty or expired code fails with 401 and  counts against the brute-force limit, which then refuses further attempts with 403.
         * @summary Authenticate a user by code
         * @param {string} code The two-factor authentication code. Send the same value as the `code` of the request body, which is the one the handler reads.
         * @param {AuthWithCodeRequestsDto} [authWithCodeRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMeFromBodyWithCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me-from-body-with-code/
         */
        authenticateMeFromBodyWithCode: async (code: string, authWithCodeRequestsDto?: AuthWithCodeRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('authenticateMeFromBodyWithCode', 'code', code)

            const localVarPath = `/api/2.0/authentication/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(authWithCodeRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks the key of a confirmation link that the portal sent by email and reports whether the action behind that  link can still be carried out - an employee invitation, phone activation, a password change, portal removal  and so on. Take `key` and `type` from the query string of the link; when `key` is left empty, the key saved in  the confirmation cookie of the same `type` is used instead. Open to unauthenticated callers and read-only: it  neither accepts the invitation nor signs anyone in. `result` is `Ok` when the link may be used, `Invalid` when  the key does not match the type or the email, `Expired` when it is too old, and `TariffLimit`, `UserExisted`,  `UserExcluded` or `QuotaFailed` when the key is sound but the invitation behind it cannot be accepted. Only  `Ok` should be followed by the operation that performs the action - `POST api/2.0/people` with  `fromInviteLink` for an invitation, `POST api/2.0/authentication` with `confirmData` for a sign-in link - and  for an invitation to a room the answer also carries the identifier and the title of that room.
         * @summary Check a confirmation link
         * @param {EmailValidationKeyModel} [emailValidationKeyModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-confirm/
         */
        checkConfirm: async (emailValidationKeyModel?: EmailValidationKeyModel, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/authentication/confirm`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(emailValidationKeyModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports whether the credentials that came with this very request identify a signed-in user of the current  portal - the authentication cookie, or the token in the `Authorization` header. Nothing has to be called  first: the operation is open to unauthenticated callers, who simply get `false`, it is read-only and  idempotent, and it answers even while the portal\'s payment has lapsed. The result is a bare boolean that  carries no reason, so `false` covers a missing, malformed, expired and revoked token alike; the way to recover  from it is to sign in again with `POST api/2.0/authentication`. It says nothing about who the caller is or how  long the session still lasts - read `GET api/2.0/people/@self` for the profile behind the token.
         * @summary Check authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsAuthentificated operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-authentificated/
         */
        getIsAuthentificated: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/authentication`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Ends the session the request itself was made with: the login event behind the authentication cookie is closed,  the sockets opened for it are disconnected, the portal cookies are cleared and a logout event is written to  the login history. Send it with the cookie or token of the session that is to be closed; an anonymous call is  accepted and closes nothing. The operation is mutating and idempotent - the same session cannot be closed  twice - and it touches only that one session: the other sessions of the same user stay alive and are ended by  `PUT api/2.0/security/activeconnections/logoutallexceptthis` or  `PUT api/2.0/security/activeconnections/logout/{loginEventId}`. The answer is a single logout URL when the  user signed in through SSO and the portal has an SLO endpoint configured, and the client has to open that URL  to end the session on the identity provider as well; for everyone else it is empty and nothing more is needed.
         * @summary Log out
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logout operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/logout/
         */
        logout: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/authentication/logout`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores the mobile phone number of a user who is going through phone activation and sends the first SMS  authentication code to it. It is reachable only with the phone-activation confirmation link that  `POST api/2.0/authentication` returns in `confirmUrl` when SMS two-factor is required and the user has no  activated number yet: that link authorizes the call in place of an authentication token, and no token is  issued here. The operation is mutating and not idempotent - it saves the number as not activated, writes an  audit event and sends a message - and an already activated number is not replaced this way, the stored number  has to be erased first. The answer carries `sms`, the masked number and `expires`, the moment the code stops  being accepted. Submit that code to `POST api/2.0/authentication/{code}`, which signs the user in and marks  the number activated, or ask for another one with `POST api/2.0/authentication/sendsms`.
         * @summary Set a mobile phone
         * @param {MobileRequestsDto} [mobileRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMobilePhone operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mobile-phone/
         */
        saveMobilePhone: async (mobileRequestsDto?: MobileRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/authentication/setphone`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(mobileRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends a new SMS authentication code to the phone number stored for the user and reports when that code  expires. The credentials in the body are checked exactly as by `POST api/2.0/authentication`, so use this  operation to resend the code after that call answered with `sms`; the user needs SMS two-factor enabled and a  phone number already stored, which `POST api/2.0/authentication/setphone` registers. Open to unauthenticated  callers, mutating and not idempotent: every call sends a message, is counted in the portal\'s SMS usage and  spends one of the few codes a number is allowed within the code lifetime (ten minutes by default), after which  the call fails until those codes expire. Codes sent earlier stay valid, so a resent code does not invalidate  them, and the first one to be accepted invalidates all of them. The answer carries `sms`, the masked number  and `expires`, and no token - submit the code to `POST api/2.0/authentication/{code}`.
         * @summary Send SMS code
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendSmsCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-sms-code/
         */
        sendSmsCode: async (authRequestsDto?: AuthRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/authentication/sendsms`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Signs a user in to the current portal and either issues the authentication token or reports which second  factor is still missing. Credentials go in the body as `userName` with `password` or `passwordHash`, as the  key of a confirmation link in `confirmData`, or as a third-party account (`provider` with `accessToken`, or  `serializedProfile`), which only a standalone installation or a tariff with third-party sign-in allows. Open  to unauthenticated callers, mutating and not  idempotent: it writes a login event, sets the portal cookies and counts every failure against the brute-force  limit. When a second factor is required for this user the answer carries no `token` but `sms` with the masked  phone number - or a `confirmUrl` pointing at `POST api/2.0/authentication/setphone` while no number is  activated yet - or `tfa` with the setup key while the authenticator app is not connected; submit the code to  `POST api/2.0/authentication/{code}` to finish such a sign-in. Otherwise the answer carries `token` for the  `Authorization` header and `expires`, which is omitted when `session=true` ties the token to the browser  session. An unknown user fails with 404, rejected credentials with 401, a disabled or blocked user with 403.
         * @summary Authenticate a user
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMe operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me/
         */
        async authenticateMe(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authenticateMe(authRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.authenticateMe']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Finishes a two-factor sign-in: checks the one-time code and, when it matches, issues the authentication token.  Call it only after `POST api/2.0/authentication` answered with `sms` or `tfa` set, and repeat the same  credentials in the body next to `code` - the code alone does not identify the user. The code comes from the  SMS the portal sent, which `POST api/2.0/authentication/sendsms` resends, or from the authenticator app;  whichever second factor the portal has enabled for this user is the one checked here. Open to unauthenticated  callers, mutating and not idempotent: a code is single-use, the sign-in is written to the login history, and  the first code accepted from an authenticator app also connects that app to the user. The answer carries  `token` for the `Authorization` header, `expires` unless `session=true` tied the token to the browser session,  and either `sms` with the masked phone number or `tfa`. A wrong, empty or expired code fails with 401 and  counts against the brute-force limit, which then refuses further attempts with 403.
         * @summary Authenticate a user by code
         * @param {string} code The two-factor authentication code. Send the same value as the `code` of the request body, which is the one the handler reads.
         * @param {AuthWithCodeRequestsDto} [authWithCodeRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMeFromBodyWithCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me-from-body-with-code/
         */
        async authenticateMeFromBodyWithCode(code: string, authWithCodeRequestsDto?: AuthWithCodeRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authenticateMeFromBodyWithCode(code, authWithCodeRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.authenticateMeFromBodyWithCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks the key of a confirmation link that the portal sent by email and reports whether the action behind that  link can still be carried out - an employee invitation, phone activation, a password change, portal removal  and so on. Take `key` and `type` from the query string of the link; when `key` is left empty, the key saved in  the confirmation cookie of the same `type` is used instead. Open to unauthenticated callers and read-only: it  neither accepts the invitation nor signs anyone in. `result` is `Ok` when the link may be used, `Invalid` when  the key does not match the type or the email, `Expired` when it is too old, and `TariffLimit`, `UserExisted`,  `UserExcluded` or `QuotaFailed` when the key is sound but the invitation behind it cannot be accepted. Only  `Ok` should be followed by the operation that performs the action - `POST api/2.0/people` with  `fromInviteLink` for an invitation, `POST api/2.0/authentication` with `confirmData` for a sign-in link - and  for an invitation to a room the answer also carries the identifier and the title of that room.
         * @summary Check a confirmation link
         * @param {EmailValidationKeyModel} [emailValidationKeyModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-confirm/
         */
        async checkConfirm(emailValidationKeyModel?: EmailValidationKeyModel, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfirmWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkConfirm(emailValidationKeyModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.checkConfirm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether the credentials that came with this very request identify a signed-in user of the current  portal - the authentication cookie, or the token in the `Authorization` header. Nothing has to be called  first: the operation is open to unauthenticated callers, who simply get `false`, it is read-only and  idempotent, and it answers even while the portal\'s payment has lapsed. The result is a bare boolean that  carries no reason, so `false` covers a missing, malformed, expired and revoked token alike; the way to recover  from it is to sign in again with `POST api/2.0/authentication`. It says nothing about who the caller is or how  long the session still lasts - read `GET api/2.0/people/@self` for the profile behind the token.
         * @summary Check authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsAuthentificated operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-authentificated/
         */
        async getIsAuthentificated(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsAuthentificated(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.getIsAuthentificated']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Ends the session the request itself was made with: the login event behind the authentication cookie is closed,  the sockets opened for it are disconnected, the portal cookies are cleared and a logout event is written to  the login history. Send it with the cookie or token of the session that is to be closed; an anonymous call is  accepted and closes nothing. The operation is mutating and idempotent - the same session cannot be closed  twice - and it touches only that one session: the other sessions of the same user stay alive and are ended by  `PUT api/2.0/security/activeconnections/logoutallexceptthis` or  `PUT api/2.0/security/activeconnections/logout/{loginEventId}`. The answer is a single logout URL when the  user signed in through SSO and the portal has an SLO endpoint configured, and the client has to open that URL  to end the session on the identity provider as well; for everyone else it is empty and nothing more is needed.
         * @summary Log out
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logout operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/logout/
         */
        async logout(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.logout']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores the mobile phone number of a user who is going through phone activation and sends the first SMS  authentication code to it. It is reachable only with the phone-activation confirmation link that  `POST api/2.0/authentication` returns in `confirmUrl` when SMS two-factor is required and the user has no  activated number yet: that link authorizes the call in place of an authentication token, and no token is  issued here. The operation is mutating and not idempotent - it saves the number as not activated, writes an  audit event and sends a message - and an already activated number is not replaced this way, the stored number  has to be erased first. The answer carries `sms`, the masked number and `expires`, the moment the code stops  being accepted. Submit that code to `POST api/2.0/authentication/{code}`, which signs the user in and marks  the number activated, or ask for another one with `POST api/2.0/authentication/sendsms`.
         * @summary Set a mobile phone
         * @param {MobileRequestsDto} [mobileRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMobilePhone operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mobile-phone/
         */
        async saveMobilePhone(mobileRequestsDto?: MobileRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveMobilePhone(mobileRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.saveMobilePhone']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a new SMS authentication code to the phone number stored for the user and reports when that code  expires. The credentials in the body are checked exactly as by `POST api/2.0/authentication`, so use this  operation to resend the code after that call answered with `sms`; the user needs SMS two-factor enabled and a  phone number already stored, which `POST api/2.0/authentication/setphone` registers. Open to unauthenticated  callers, mutating and not idempotent: every call sends a message, is counted in the portal\'s SMS usage and  spends one of the few codes a number is allowed within the code lifetime (ten minutes by default), after which  the call fails until those codes expire. Codes sent earlier stay valid, so a resent code does not invalidate  them, and the first one to be accepted invalidates all of them. The answer carries `sms`, the masked number  and `expires`, and no token - submit the code to `POST api/2.0/authentication/{code}`.
         * @summary Send SMS code
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendSmsCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-sms-code/
         */
        async sendSmsCode(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSmsCode(authRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.sendSmsCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Signs a user in to the current portal and either issues the authentication token or reports which second  factor is still missing. Credentials go in the body as `userName` with `password` or `passwordHash`, as the  key of a confirmation link in `confirmData`, or as a third-party account (`provider` with `accessToken`, or  `serializedProfile`), which only a standalone installation or a tariff with third-party sign-in allows. Open  to unauthenticated callers, mutating and not  idempotent: it writes a login event, sets the portal cookies and counts every failure against the brute-force  limit. When a second factor is required for this user the answer carries no `token` but `sms` with the masked  phone number - or a `confirmUrl` pointing at `POST api/2.0/authentication/setphone` while no number is  activated yet - or `tfa` with the setup key while the authenticator app is not connected; submit the code to  `POST api/2.0/authentication/{code}` to finish such a sign-in. Otherwise the answer carries `token` for the  `Authorization` header and `expires`, which is omitted when `session=true` ties the token to the browser  session. An unknown user fails with 404, rejected credentials with 401, a disabled or blocked user with 403.
         * @summary Authenticate a user
         * @param {AuthenticationApiAuthenticateMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for authenticateMe operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me/
         * @throws {RequiredError}
         */
        authenticateMe(requestParameters: AuthenticationApiAuthenticateMeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.authenticateMe(requestParameters.authRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes a two-factor sign-in: checks the one-time code and, when it matches, issues the authentication token.  Call it only after `POST api/2.0/authentication` answered with `sms` or `tfa` set, and repeat the same  credentials in the body next to `code` - the code alone does not identify the user. The code comes from the  SMS the portal sent, which `POST api/2.0/authentication/sendsms` resends, or from the authenticator app;  whichever second factor the portal has enabled for this user is the one checked here. Open to unauthenticated  callers, mutating and not idempotent: a code is single-use, the sign-in is written to the login history, and  the first code accepted from an authenticator app also connects that app to the user. The answer carries  `token` for the `Authorization` header, `expires` unless `session=true` tied the token to the browser session,  and either `sms` with the masked phone number or `tfa`. A wrong, empty or expired code fails with 401 and  counts against the brute-force limit, which then refuses further attempts with 403.
         * @summary Authenticate a user by code
         * @param {AuthenticationApiAuthenticateMeFromBodyWithCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for authenticateMeFromBodyWithCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me-from-body-with-code/
         * @throws {RequiredError}
         */
        authenticateMeFromBodyWithCode(requestParameters: AuthenticationApiAuthenticateMeFromBodyWithCodeRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.authenticateMeFromBodyWithCode(requestParameters.code, requestParameters.authWithCodeRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks the key of a confirmation link that the portal sent by email and reports whether the action behind that  link can still be carried out - an employee invitation, phone activation, a password change, portal removal  and so on. Take `key` and `type` from the query string of the link; when `key` is left empty, the key saved in  the confirmation cookie of the same `type` is used instead. Open to unauthenticated callers and read-only: it  neither accepts the invitation nor signs anyone in. `result` is `Ok` when the link may be used, `Invalid` when  the key does not match the type or the email, `Expired` when it is too old, and `TariffLimit`, `UserExisted`,  `UserExcluded` or `QuotaFailed` when the key is sound but the invitation behind it cannot be accepted. Only  `Ok` should be followed by the operation that performs the action - `POST api/2.0/people` with  `fromInviteLink` for an invitation, `POST api/2.0/authentication` with `confirmData` for a sign-in link - and  for an invitation to a room the answer also carries the identifier and the title of that room.
         * @summary Check a confirmation link
         * @param {AuthenticationApiCheckConfirmRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-confirm/
         * @throws {RequiredError}
         */
        checkConfirm(requestParameters: AuthenticationApiCheckConfirmRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ConfirmWrapper> {
            return localVarFp.checkConfirm(requestParameters.emailValidationKeyModel, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether the credentials that came with this very request identify a signed-in user of the current  portal - the authentication cookie, or the token in the `Authorization` header. Nothing has to be called  first: the operation is open to unauthenticated callers, who simply get `false`, it is read-only and  idempotent, and it answers even while the portal\'s payment has lapsed. The result is a bare boolean that  carries no reason, so `false` covers a missing, malformed, expired and revoked token alike; the way to recover  from it is to sign in again with `POST api/2.0/authentication`. It says nothing about who the caller is or how  long the session still lasts - read `GET api/2.0/people/@self` for the profile behind the token.
         * @summary Check authentication
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsAuthentificated operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-authentificated/
         * @throws {RequiredError}
         */
        getIsAuthentificated(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getIsAuthentificated(options).then((request) => request(axios, basePath));
        },
        /**
         * Ends the session the request itself was made with: the login event behind the authentication cookie is closed,  the sockets opened for it are disconnected, the portal cookies are cleared and a logout event is written to  the login history. Send it with the cookie or token of the session that is to be closed; an anonymous call is  accepted and closes nothing. The operation is mutating and idempotent - the same session cannot be closed  twice - and it touches only that one session: the other sessions of the same user stay alive and are ended by  `PUT api/2.0/security/activeconnections/logoutallexceptthis` or  `PUT api/2.0/security/activeconnections/logout/{loginEventId}`. The answer is a single logout URL when the  user signed in through SSO and the portal has an SLO endpoint configured, and the client has to open that URL  to end the session on the identity provider as well; for everyone else it is empty and nothing more is needed.
         * @summary Log out
         * @param {*} [options] Override http request option.
         * REST API Reference for logout operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/logout/
         * @throws {RequiredError}
         */
        logout(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * Stores the mobile phone number of a user who is going through phone activation and sends the first SMS  authentication code to it. It is reachable only with the phone-activation confirmation link that  `POST api/2.0/authentication` returns in `confirmUrl` when SMS two-factor is required and the user has no  activated number yet: that link authorizes the call in place of an authentication token, and no token is  issued here. The operation is mutating and not idempotent - it saves the number as not activated, writes an  audit event and sends a message - and an already activated number is not replaced this way, the stored number  has to be erased first. The answer carries `sms`, the masked number and `expires`, the moment the code stops  being accepted. Submit that code to `POST api/2.0/authentication/{code}`, which signs the user in and marks  the number activated, or ask for another one with `POST api/2.0/authentication/sendsms`.
         * @summary Set a mobile phone
         * @param {AuthenticationApiSaveMobilePhoneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveMobilePhone operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mobile-phone/
         * @throws {RequiredError}
         */
        saveMobilePhone(requestParameters: AuthenticationApiSaveMobilePhoneRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.saveMobilePhone(requestParameters.mobileRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a new SMS authentication code to the phone number stored for the user and reports when that code  expires. The credentials in the body are checked exactly as by `POST api/2.0/authentication`, so use this  operation to resend the code after that call answered with `sms`; the user needs SMS two-factor enabled and a  phone number already stored, which `POST api/2.0/authentication/setphone` registers. Open to unauthenticated  callers, mutating and not idempotent: every call sends a message, is counted in the portal\'s SMS usage and  spends one of the few codes a number is allowed within the code lifetime (ten minutes by default), after which  the call fails until those codes expire. Codes sent earlier stay valid, so a resent code does not invalidate  them, and the first one to be accepted invalidates all of them. The answer carries `sms`, the masked number  and `expires`, and no token - submit the code to `POST api/2.0/authentication/{code}`.
         * @summary Send SMS code
         * @param {AuthenticationApiSendSmsCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendSmsCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-sms-code/
         * @throws {RequiredError}
         */
        sendSmsCode(requestParameters: AuthenticationApiSendSmsCodeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.sendSmsCode(requestParameters.authRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authenticateMe operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiAuthenticateMeRequest
 */
export interface AuthenticationApiAuthenticateMeRequest {
    /**
     * 
     * @type {AuthRequestsDto}
     * @memberof AuthenticationApiAuthenticateMe
     */
    readonly authRequestsDto?: AuthRequestsDto
}

/**
 * Request parameters for authenticateMeFromBodyWithCode operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiAuthenticateMeFromBodyWithCodeRequest
 */
export interface AuthenticationApiAuthenticateMeFromBodyWithCodeRequest {
    /**
     * The two-factor authentication code. Send the same value as the `code` of the request body, which is the one the handler reads.
     * @type {string}
     * @memberof AuthenticationApiAuthenticateMeFromBodyWithCode
     */
    readonly code: string

    /**
     * 
     * @type {AuthWithCodeRequestsDto}
     * @memberof AuthenticationApiAuthenticateMeFromBodyWithCode
     */
    readonly authWithCodeRequestsDto?: AuthWithCodeRequestsDto
}

/**
 * Request parameters for checkConfirm operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiCheckConfirmRequest
 */
export interface AuthenticationApiCheckConfirmRequest {
    /**
     * 
     * @type {EmailValidationKeyModel}
     * @memberof AuthenticationApiCheckConfirm
     */
    readonly emailValidationKeyModel?: EmailValidationKeyModel
}

/**
 * Request parameters for saveMobilePhone operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiSaveMobilePhoneRequest
 */
export interface AuthenticationApiSaveMobilePhoneRequest {
    /**
     * 
     * @type {MobileRequestsDto}
     * @memberof AuthenticationApiSaveMobilePhone
     */
    readonly mobileRequestsDto?: MobileRequestsDto
}

/**
 * Request parameters for sendSmsCode operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiSendSmsCodeRequest
 */
export interface AuthenticationApiSendSmsCodeRequest {
    /**
     * 
     * @type {AuthRequestsDto}
     * @memberof AuthenticationApiSendSmsCode
     */
    readonly authRequestsDto?: AuthRequestsDto
}

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * Signs a user in to the current portal and either issues the authentication token or reports which second  factor is still missing. Credentials go in the body as `userName` with `password` or `passwordHash`, as the  key of a confirmation link in `confirmData`, or as a third-party account (`provider` with `accessToken`, or  `serializedProfile`), which only a standalone installation or a tariff with third-party sign-in allows. Open  to unauthenticated callers, mutating and not  idempotent: it writes a login event, sets the portal cookies and counts every failure against the brute-force  limit. When a second factor is required for this user the answer carries no `token` but `sms` with the masked  phone number - or a `confirmUrl` pointing at `POST api/2.0/authentication/setphone` while no number is  activated yet - or `tfa` with the setup key while the authenticator app is not connected; submit the code to  `POST api/2.0/authentication/{code}` to finish such a sign-in. Otherwise the answer carries `token` for the  `Authorization` header and `expires`, which is omitted when `session=true` ties the token to the browser  session. An unknown user fails with 404, rejected credentials with 401, a disabled or blocked user with 403.
     * @summary Authenticate a user
     * @param {AuthenticationApiAuthenticateMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public authenticateMe(requestParameters: AuthenticationApiAuthenticateMeRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).authenticateMe(requestParameters.authRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes a two-factor sign-in: checks the one-time code and, when it matches, issues the authentication token.  Call it only after `POST api/2.0/authentication` answered with `sms` or `tfa` set, and repeat the same  credentials in the body next to `code` - the code alone does not identify the user. The code comes from the  SMS the portal sent, which `POST api/2.0/authentication/sendsms` resends, or from the authenticator app;  whichever second factor the portal has enabled for this user is the one checked here. Open to unauthenticated  callers, mutating and not idempotent: a code is single-use, the sign-in is written to the login history, and  the first code accepted from an authenticator app also connects that app to the user. The answer carries  `token` for the `Authorization` header, `expires` unless `session=true` tied the token to the browser session,  and either `sms` with the masked phone number or `tfa`. A wrong, empty or expired code fails with 401 and  counts against the brute-force limit, which then refuses further attempts with 403.
     * @summary Authenticate a user by code
     * @param {AuthenticationApiAuthenticateMeFromBodyWithCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public authenticateMeFromBodyWithCode(requestParameters: AuthenticationApiAuthenticateMeFromBodyWithCodeRequest, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).authenticateMeFromBodyWithCode(requestParameters.code, requestParameters.authWithCodeRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks the key of a confirmation link that the portal sent by email and reports whether the action behind that  link can still be carried out - an employee invitation, phone activation, a password change, portal removal  and so on. Take `key` and `type` from the query string of the link; when `key` is left empty, the key saved in  the confirmation cookie of the same `type` is used instead. Open to unauthenticated callers and read-only: it  neither accepts the invitation nor signs anyone in. `result` is `Ok` when the link may be used, `Invalid` when  the key does not match the type or the email, `Expired` when it is too old, and `TariffLimit`, `UserExisted`,  `UserExcluded` or `QuotaFailed` when the key is sound but the invitation behind it cannot be accepted. Only  `Ok` should be followed by the operation that performs the action - `POST api/2.0/people` with  `fromInviteLink` for an invitation, `POST api/2.0/authentication` with `confirmData` for a sign-in link - and  for an invitation to a room the answer also carries the identifier and the title of that room.
     * @summary Check a confirmation link
     * @param {AuthenticationApiCheckConfirmRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public checkConfirm(requestParameters: AuthenticationApiCheckConfirmRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).checkConfirm(requestParameters.emailValidationKeyModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether the credentials that came with this very request identify a signed-in user of the current  portal - the authentication cookie, or the token in the `Authorization` header. Nothing has to be called  first: the operation is open to unauthenticated callers, who simply get `false`, it is read-only and  idempotent, and it answers even while the portal\'s payment has lapsed. The result is a bare boolean that  carries no reason, so `false` covers a missing, malformed, expired and revoked token alike; the way to recover  from it is to sign in again with `POST api/2.0/authentication`. It says nothing about who the caller is or how  long the session still lasts - read `GET api/2.0/people/@self` for the profile behind the token.
     * @summary Check authentication
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public getIsAuthentificated(options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).getIsAuthentificated(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Ends the session the request itself was made with: the login event behind the authentication cookie is closed,  the sockets opened for it are disconnected, the portal cookies are cleared and a logout event is written to  the login history. Send it with the cookie or token of the session that is to be closed; an anonymous call is  accepted and closes nothing. The operation is mutating and idempotent - the same session cannot be closed  twice - and it touches only that one session: the other sessions of the same user stay alive and are ended by  `PUT api/2.0/security/activeconnections/logoutallexceptthis` or  `PUT api/2.0/security/activeconnections/logout/{loginEventId}`. The answer is a single logout URL when the  user signed in through SSO and the portal has an SLO endpoint configured, and the client has to open that URL  to end the session on the identity provider as well; for everyone else it is empty and nothing more is needed.
     * @summary Log out
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public logout(options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores the mobile phone number of a user who is going through phone activation and sends the first SMS  authentication code to it. It is reachable only with the phone-activation confirmation link that  `POST api/2.0/authentication` returns in `confirmUrl` when SMS two-factor is required and the user has no  activated number yet: that link authorizes the call in place of an authentication token, and no token is  issued here. The operation is mutating and not idempotent - it saves the number as not activated, writes an  audit event and sends a message - and an already activated number is not replaced this way, the stored number  has to be erased first. The answer carries `sms`, the masked number and `expires`, the moment the code stops  being accepted. Submit that code to `POST api/2.0/authentication/{code}`, which signs the user in and marks  the number activated, or ask for another one with `POST api/2.0/authentication/sendsms`.
     * @summary Set a mobile phone
     * @param {AuthenticationApiSaveMobilePhoneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public saveMobilePhone(requestParameters: AuthenticationApiSaveMobilePhoneRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).saveMobilePhone(requestParameters.mobileRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a new SMS authentication code to the phone number stored for the user and reports when that code  expires. The credentials in the body are checked exactly as by `POST api/2.0/authentication`, so use this  operation to resend the code after that call answered with `sms`; the user needs SMS two-factor enabled and a  phone number already stored, which `POST api/2.0/authentication/setphone` registers. Open to unauthenticated  callers, mutating and not idempotent: every call sends a message, is counted in the portal\'s SMS usage and  spends one of the few codes a number is allowed within the code lifetime (ten minutes by default), after which  the call fails until those codes expire. Codes sent earlier stay valid, so a resent code does not invalidate  them, and the first one to be accepted invalidates all of them. The answer carries `sms`, the masked number  and `expires`, and no token - submit the code to `POST api/2.0/authentication/{code}`.
     * @summary Send SMS code
     * @param {AuthenticationApiSendSmsCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public sendSmsCode(requestParameters: AuthenticationApiSendSmsCodeRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).sendSmsCode(requestParameters.authRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

