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
import type { ExchangeToken200Response } from '../../models';
/**
 * AuthorizationApi - axios parameter creator
 * @export
 */
export const AuthorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Starts the OAuth2 authorization code flow for the client named by client_id. The caller has to present the portal signature cookie, and a request without a valid one is not refused with 401 or 403 but redirected to the portal login page, carrying the client ID so the flow can resume after signing in. When the user has not yet consented to the requested scopes the browser is redirected to the consent page; once the consent exists the browser is redirected to the client\'s redirect URI with the authorization code and, when one was sent, the original state. A caller that cannot follow redirects may send the X-Disable-Redirect header, and then the response is 200 with an empty body and the target URL in the X-Redirect-URI header. The code returned here is exchanged for tokens at the token endpoint.
         * @summary Start the authorization flow
         * @param {string} responseType The OAuth 2.0 response type. Only code is supported: this server issues an authorization code, never a token, from this endpoint.
         * @param {string} clientId The identifier the client was given when it was registered. It selects both the client shown on the consent screen and the set of redirect URIs the request is checked against.
         * @param {string} redirectUri Where to send the user once authorization is complete. It has to be one of the redirect URIs registered for the client, otherwise the request is refused.
         * @param {string} scope The permissions being asked for, as a space-separated list. Every scope has to be one the client is registered for, and the consent screen lists exactly these.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authorizeOAuth operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authorize-oauth/
         */
        authorizeOAuth: async (responseType: string, clientId: string, redirectUri: string, scope: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'responseType' is not null or undefined
            assertParamExists('authorizeOAuth', 'responseType', responseType)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('authorizeOAuth', 'clientId', clientId)
            // verify required parameter 'redirectUri' is not null or undefined
            assertParamExists('authorizeOAuth', 'redirectUri', redirectUri)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('authorizeOAuth', 'scope', scope)

            const localVarPath = `/oauth2/authorize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-signature required

            if (responseType !== undefined) {
                localVarQueryParameter['response_type'] = responseType;
            }

            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (redirectUri !== undefined) {
                localVarQueryParameter['redirect_uri'] = redirectUri;
            }

            if (scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
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
         * Exchanges an authorization code for an access token. The request is form-encoded and has to carry the grant type, the code, the same redirect URI that was used to obtain the code, and the client credentials: the client authenticates itself here rather than through the portal signature cookie the authorization endpoint uses. The response carries the access token, its type and its lifetime in seconds, plus a refresh token when the client is configured for the refresh token grant. Client authentication that fails is answered with 401, while a malformed, unknown or expired code is answered with 400. The code is single use, so replaying it fails.
         * @summary Exchange the authorization code
         * @param {string} [grantType] Which exchange is being performed: authorization_code to redeem a code, refresh_token to renew an access token.
         * @param {string} [code] The authorization code returned by the authorization endpoint. It may be redeemed once.
         * @param {string} [redirectUri] The same redirect URI that was used to obtain the code. The exchange fails when it differs.
         * @param {string} [clientId] The identifier of the client redeeming the code.
         * @param {string} [clientSecret] The secret of the client redeeming the code. It is omitted by a public client, which proves itself with a PKCE code verifier instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for exchangeToken operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/exchange-token/
         */
        exchangeToken: async (grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/oauth2/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


            if (grantType !== undefined) { 
                localVarFormParams.set('grant_type', grantType as any);
            }
    
            if (code !== undefined) { 
                localVarFormParams.set('code', code as any);
            }
    
            if (redirectUri !== undefined) { 
                localVarFormParams.set('redirect_uri', redirectUri as any);
            }
    
            if (clientId !== undefined) { 
                localVarFormParams.set('client_id', clientId as any);
            }
    
            if (clientSecret !== undefined) { 
                localVarFormParams.set('client_secret', clientSecret as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Submits the user\'s consent decision for the scopes an authorization request asked for. It is the form post the consent page makes, so it carries the client ID, the state and the agreed scopes as multipart form data, along with the same portal signature cookie the authorization request needed. On success the browser is redirected to the client\'s redirect URI with an authorization code, or, when the request carries the X-Disable-Redirect header, answered 200 with that URL in the X-Redirect-URI header. The consent is stored per user and client, so a later authorization request for the same scopes no longer stops at the consent page.
         * @summary Submit the consent decision
         * @param {string} [clientId] The client the consent is being given to. It has to be the same client the authorization request named.
         * @param {string} [state] The opaque value carried through from the authorization request, returned unchanged on the redirect so the client can match the answer to its request.
         * @param {string} [scope] The scopes the user agreed to, as a space-separated list. Anything the user declined is left out, so this may be narrower than what was requested.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for submitConsent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/submit-consent/
         */
        submitConsent: async (clientId?: string, state?: string, scope?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/oauth2/authorize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication x-signature required


            if (clientId !== undefined) { 
                localVarFormParams.append('client_id', clientId as any);
            }
    
            if (state !== undefined) { 
                localVarFormParams.append('state', state as any);
            }
    
            if (scope !== undefined) { 
                localVarFormParams.append('scope', scope as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthorizationApi - functional programming interface
 * @export
 */
export const AuthorizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthorizationApiAxiosParamCreator(configuration)
    return {
        /**
         * Starts the OAuth2 authorization code flow for the client named by client_id. The caller has to present the portal signature cookie, and a request without a valid one is not refused with 401 or 403 but redirected to the portal login page, carrying the client ID so the flow can resume after signing in. When the user has not yet consented to the requested scopes the browser is redirected to the consent page; once the consent exists the browser is redirected to the client\'s redirect URI with the authorization code and, when one was sent, the original state. A caller that cannot follow redirects may send the X-Disable-Redirect header, and then the response is 200 with an empty body and the target URL in the X-Redirect-URI header. The code returned here is exchanged for tokens at the token endpoint.
         * @summary Start the authorization flow
         * @param {string} responseType The OAuth 2.0 response type. Only code is supported: this server issues an authorization code, never a token, from this endpoint.
         * @param {string} clientId The identifier the client was given when it was registered. It selects both the client shown on the consent screen and the set of redirect URIs the request is checked against.
         * @param {string} redirectUri Where to send the user once authorization is complete. It has to be one of the redirect URIs registered for the client, otherwise the request is refused.
         * @param {string} scope The permissions being asked for, as a space-separated list. Every scope has to be one the client is registered for, and the consent screen lists exactly these.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authorizeOAuth operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authorize-oauth/
         */
        async authorizeOAuth(responseType: string, clientId: string, redirectUri: string, scope: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authorizeOAuth(responseType, clientId, redirectUri, scope, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthorizationApi.authorizeOAuth']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Exchanges an authorization code for an access token. The request is form-encoded and has to carry the grant type, the code, the same redirect URI that was used to obtain the code, and the client credentials: the client authenticates itself here rather than through the portal signature cookie the authorization endpoint uses. The response carries the access token, its type and its lifetime in seconds, plus a refresh token when the client is configured for the refresh token grant. Client authentication that fails is answered with 401, while a malformed, unknown or expired code is answered with 400. The code is single use, so replaying it fails.
         * @summary Exchange the authorization code
         * @param {string} [grantType] Which exchange is being performed: authorization_code to redeem a code, refresh_token to renew an access token.
         * @param {string} [code] The authorization code returned by the authorization endpoint. It may be redeemed once.
         * @param {string} [redirectUri] The same redirect URI that was used to obtain the code. The exchange fails when it differs.
         * @param {string} [clientId] The identifier of the client redeeming the code.
         * @param {string} [clientSecret] The secret of the client redeeming the code. It is omitted by a public client, which proves itself with a PKCE code verifier instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for exchangeToken operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/exchange-token/
         */
        async exchangeToken(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExchangeToken200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exchangeToken(grantType, code, redirectUri, clientId, clientSecret, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthorizationApi.exchangeToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Submits the user\'s consent decision for the scopes an authorization request asked for. It is the form post the consent page makes, so it carries the client ID, the state and the agreed scopes as multipart form data, along with the same portal signature cookie the authorization request needed. On success the browser is redirected to the client\'s redirect URI with an authorization code, or, when the request carries the X-Disable-Redirect header, answered 200 with that URL in the X-Redirect-URI header. The consent is stored per user and client, so a later authorization request for the same scopes no longer stops at the consent page.
         * @summary Submit the consent decision
         * @param {string} [clientId] The client the consent is being given to. It has to be the same client the authorization request named.
         * @param {string} [state] The opaque value carried through from the authorization request, returned unchanged on the redirect so the client can match the answer to its request.
         * @param {string} [scope] The scopes the user agreed to, as a space-separated list. Anything the user declined is left out, so this may be narrower than what was requested.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for submitConsent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/submit-consent/
         */
        async submitConsent(clientId?: string, state?: string, scope?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitConsent(clientId, state, scope, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthorizationApi.submitConsent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthorizationApi - factory interface
 * @export
 */
export const AuthorizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthorizationApiFp(configuration)
    return {
        /**
         * Starts the OAuth2 authorization code flow for the client named by client_id. The caller has to present the portal signature cookie, and a request without a valid one is not refused with 401 or 403 but redirected to the portal login page, carrying the client ID so the flow can resume after signing in. When the user has not yet consented to the requested scopes the browser is redirected to the consent page; once the consent exists the browser is redirected to the client\'s redirect URI with the authorization code and, when one was sent, the original state. A caller that cannot follow redirects may send the X-Disable-Redirect header, and then the response is 200 with an empty body and the target URL in the X-Redirect-URI header. The code returned here is exchanged for tokens at the token endpoint.
         * @summary Start the authorization flow
         * @param {AuthorizationApiAuthorizeOAuthRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for authorizeOAuth operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authorize-oauth/
         * @throws {RequiredError}
         */
        authorizeOAuth(requestParameters: AuthorizationApiAuthorizeOAuthRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.authorizeOAuth(requestParameters.responseType, requestParameters.clientId, requestParameters.redirectUri, requestParameters.scope, options).then((request) => request(axios, basePath));
        },
        /**
         * Exchanges an authorization code for an access token. The request is form-encoded and has to carry the grant type, the code, the same redirect URI that was used to obtain the code, and the client credentials: the client authenticates itself here rather than through the portal signature cookie the authorization endpoint uses. The response carries the access token, its type and its lifetime in seconds, plus a refresh token when the client is configured for the refresh token grant. Client authentication that fails is answered with 401, while a malformed, unknown or expired code is answered with 400. The code is single use, so replaying it fails.
         * @summary Exchange the authorization code
         * @param {AuthorizationApiExchangeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for exchangeToken operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/exchange-token/
         * @throws {RequiredError}
         */
        exchangeToken(requestParameters: AuthorizationApiExchangeTokenRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ExchangeToken200Response> {
            return localVarFp.exchangeToken(requestParameters.grantType, requestParameters.code, requestParameters.redirectUri, requestParameters.clientId, requestParameters.clientSecret, options).then((request) => request(axios, basePath));
        },
        /**
         * Submits the user\'s consent decision for the scopes an authorization request asked for. It is the form post the consent page makes, so it carries the client ID, the state and the agreed scopes as multipart form data, along with the same portal signature cookie the authorization request needed. On success the browser is redirected to the client\'s redirect URI with an authorization code, or, when the request carries the X-Disable-Redirect header, answered 200 with that URL in the X-Redirect-URI header. The consent is stored per user and client, so a later authorization request for the same scopes no longer stops at the consent page.
         * @summary Submit the consent decision
         * @param {AuthorizationApiSubmitConsentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for submitConsent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/submit-consent/
         * @throws {RequiredError}
         */
        submitConsent(requestParameters: AuthorizationApiSubmitConsentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.submitConsent(requestParameters.clientId, requestParameters.state, requestParameters.scope, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authorizeOAuth operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiAuthorizeOAuthRequest
 */
export interface AuthorizationApiAuthorizeOAuthRequest {
    /**
     * The OAuth 2.0 response type. Only code is supported: this server issues an authorization code, never a token, from this endpoint.
     * @type {string}
     * @memberof AuthorizationApiAuthorizeOAuth
     */
    readonly responseType: string

    /**
     * The identifier the client was given when it was registered. It selects both the client shown on the consent screen and the set of redirect URIs the request is checked against.
     * @type {string}
     * @memberof AuthorizationApiAuthorizeOAuth
     */
    readonly clientId: string

    /**
     * Where to send the user once authorization is complete. It has to be one of the redirect URIs registered for the client, otherwise the request is refused.
     * @type {string}
     * @memberof AuthorizationApiAuthorizeOAuth
     */
    readonly redirectUri: string

    /**
     * The permissions being asked for, as a space-separated list. Every scope has to be one the client is registered for, and the consent screen lists exactly these.
     * @type {string}
     * @memberof AuthorizationApiAuthorizeOAuth
     */
    readonly scope: string
}

/**
 * Request parameters for exchangeToken operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiExchangeTokenRequest
 */
export interface AuthorizationApiExchangeTokenRequest {
    /**
     * Which exchange is being performed: authorization_code to redeem a code, refresh_token to renew an access token.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly grantType?: string

    /**
     * The authorization code returned by the authorization endpoint. It may be redeemed once.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly code?: string

    /**
     * The same redirect URI that was used to obtain the code. The exchange fails when it differs.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly redirectUri?: string

    /**
     * The identifier of the client redeeming the code.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly clientId?: string

    /**
     * The secret of the client redeeming the code. It is omitted by a public client, which proves itself with a PKCE code verifier instead.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly clientSecret?: string
}

/**
 * Request parameters for submitConsent operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiSubmitConsentRequest
 */
export interface AuthorizationApiSubmitConsentRequest {
    /**
     * The client the consent is being given to. It has to be the same client the authorization request named.
     * @type {string}
     * @memberof AuthorizationApiSubmitConsent
     */
    readonly clientId?: string

    /**
     * The opaque value carried through from the authorization request, returned unchanged on the redirect so the client can match the answer to its request.
     * @type {string}
     * @memberof AuthorizationApiSubmitConsent
     */
    readonly state?: string

    /**
     * The scopes the user agreed to, as a space-separated list. Anything the user declined is left out, so this may be narrower than what was requested.
     * @type {string}
     * @memberof AuthorizationApiSubmitConsent
     */
    readonly scope?: string
}

/**
 * AuthorizationApi - object-oriented interface
 * @export
 * @class AuthorizationApi
 * @extends {BaseAPI}
 */
export class AuthorizationApi extends BaseAPI {
    /**
     * Starts the OAuth2 authorization code flow for the client named by client_id. The caller has to present the portal signature cookie, and a request without a valid one is not refused with 401 or 403 but redirected to the portal login page, carrying the client ID so the flow can resume after signing in. When the user has not yet consented to the requested scopes the browser is redirected to the consent page; once the consent exists the browser is redirected to the client\'s redirect URI with the authorization code and, when one was sent, the original state. A caller that cannot follow redirects may send the X-Disable-Redirect header, and then the response is 200 with an empty body and the target URL in the X-Redirect-URI header. The code returned here is exchanged for tokens at the token endpoint.
     * @summary Start the authorization flow
     * @param {OAuth20AuthorizationApiAuthorizeOAuthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizationApi
     */
    public authorizeOAuth(requestParameters: AuthorizationApiAuthorizeOAuthRequest, options?: RawAxiosRequestConfig) {
        return AuthorizationApiFp(this.configuration).authorizeOAuth(requestParameters.responseType, requestParameters.clientId, requestParameters.redirectUri, requestParameters.scope, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Exchanges an authorization code for an access token. The request is form-encoded and has to carry the grant type, the code, the same redirect URI that was used to obtain the code, and the client credentials: the client authenticates itself here rather than through the portal signature cookie the authorization endpoint uses. The response carries the access token, its type and its lifetime in seconds, plus a refresh token when the client is configured for the refresh token grant. Client authentication that fails is answered with 401, while a malformed, unknown or expired code is answered with 400. The code is single use, so replaying it fails.
     * @summary Exchange the authorization code
     * @param {OAuth20AuthorizationApiExchangeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizationApi
     */
    public exchangeToken(requestParameters: AuthorizationApiExchangeTokenRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthorizationApiFp(this.configuration).exchangeToken(requestParameters.grantType, requestParameters.code, requestParameters.redirectUri, requestParameters.clientId, requestParameters.clientSecret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Submits the user\'s consent decision for the scopes an authorization request asked for. It is the form post the consent page makes, so it carries the client ID, the state and the agreed scopes as multipart form data, along with the same portal signature cookie the authorization request needed. On success the browser is redirected to the client\'s redirect URI with an authorization code, or, when the request carries the X-Disable-Redirect header, answered 200 with that URL in the X-Redirect-URI header. The consent is stored per user and client, so a later authorization request for the same scopes no longer stops at the consent page.
     * @summary Submit the consent decision
     * @param {OAuth20AuthorizationApiSubmitConsentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizationApi
     */
    public submitConsent(requestParameters: AuthorizationApiSubmitConsentRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthorizationApiFp(this.configuration).submitConsent(requestParameters.clientId, requestParameters.state, requestParameters.scope, options).then((request) => request(this.axios, this.basePath));
    }
}

