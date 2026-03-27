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
         * Initiates the OAuth2 authorization flow.
         * @summary OAuth2 authorization endpoint
         * @param {string} responseType The OAuth 2.0 response type, must be \'code\' for authorization code flow.
         * @param {string} clientId The client identifier issued to the client during registration.
         * @param {string} redirectUri The URL to redirect to after authorization is complete.
         * @param {string} scope The space-separated list of requested scope permissions.
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

            // authentication asc_auth_key required

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
         * Exchanges an authorization code specified in the request for the access token.
         * @summary OAuth2 token endpoint
         * @param {string} [grantType] The OAuth2 grant type, must be \\\'authorization_code\\\' for the authorization code flow.
         * @param {string} [code] A temporary authorization code that is sent to the client to be exchanged for a token.
         * @param {string} [redirectUri] The URL where the user will be redirected after successful or unsuccessful authentication.
         * @param {string} [clientId] The client identifier issued to the client during registration.
         * @param {string} [clientSecret] The client secret issued to the client during registration.
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
         * Sends a consent request with the specified parameters.
         * @summary OAuth2 consent endpoint
         * @param {string} [clientId] The client identifier issued to the client during registration.
         * @param {string} [state] The random string used to solve the CSRF vulnerability problem.
         * @param {string} [scope] The space-separated list of requested scope permissions.
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

            // authentication asc_auth_key required


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
         * Initiates the OAuth2 authorization flow.
         * @summary OAuth2 authorization endpoint
         * @param {string} responseType The OAuth 2.0 response type, must be \'code\' for authorization code flow.
         * @param {string} clientId The client identifier issued to the client during registration.
         * @param {string} redirectUri The URL to redirect to after authorization is complete.
         * @param {string} scope The space-separated list of requested scope permissions.
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
         * Exchanges an authorization code specified in the request for the access token.
         * @summary OAuth2 token endpoint
         * @param {string} [grantType] The OAuth2 grant type, must be \\\'authorization_code\\\' for the authorization code flow.
         * @param {string} [code] A temporary authorization code that is sent to the client to be exchanged for a token.
         * @param {string} [redirectUri] The URL where the user will be redirected after successful or unsuccessful authentication.
         * @param {string} [clientId] The client identifier issued to the client during registration.
         * @param {string} [clientSecret] The client secret issued to the client during registration.
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
         * Sends a consent request with the specified parameters.
         * @summary OAuth2 consent endpoint
         * @param {string} [clientId] The client identifier issued to the client during registration.
         * @param {string} [state] The random string used to solve the CSRF vulnerability problem.
         * @param {string} [scope] The space-separated list of requested scope permissions.
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
         * Initiates the OAuth2 authorization flow.
         * @summary OAuth2 authorization endpoint
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
         * Exchanges an authorization code specified in the request for the access token.
         * @summary OAuth2 token endpoint
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
         * Sends a consent request with the specified parameters.
         * @summary OAuth2 consent endpoint
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
     * The OAuth 2.0 response type, must be \'code\' for authorization code flow.
     * @type {string}
     * @memberof AuthorizationApiAuthorizeOAuth
     */
    readonly responseType: string

    /**
     * The client identifier issued to the client during registration.
     * @type {string}
     * @memberof AuthorizationApiAuthorizeOAuth
     */
    readonly clientId: string

    /**
     * The URL to redirect to after authorization is complete.
     * @type {string}
     * @memberof AuthorizationApiAuthorizeOAuth
     */
    readonly redirectUri: string

    /**
     * The space-separated list of requested scope permissions.
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
     * The OAuth2 grant type, must be \\\'authorization_code\\\' for the authorization code flow.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly grantType?: string

    /**
     * A temporary authorization code that is sent to the client to be exchanged for a token.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly code?: string

    /**
     * The URL where the user will be redirected after successful or unsuccessful authentication.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly redirectUri?: string

    /**
     * The client identifier issued to the client during registration.
     * @type {string}
     * @memberof AuthorizationApiExchangeToken
     */
    readonly clientId?: string

    /**
     * The client secret issued to the client during registration.
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
     * The client identifier issued to the client during registration.
     * @type {string}
     * @memberof AuthorizationApiSubmitConsent
     */
    readonly clientId?: string

    /**
     * The random string used to solve the CSRF vulnerability problem.
     * @type {string}
     * @memberof AuthorizationApiSubmitConsent
     */
    readonly state?: string

    /**
     * The space-separated list of requested scope permissions.
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
     * Initiates the OAuth2 authorization flow.
     * @summary OAuth2 authorization endpoint
     * @param {OAuth20AuthorizationApiAuthorizeOAuthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizationApi
     */
    public authorizeOAuth(requestParameters: AuthorizationApiAuthorizeOAuthRequest, options?: RawAxiosRequestConfig) {
        return AuthorizationApiFp(this.configuration).authorizeOAuth(requestParameters.responseType, requestParameters.clientId, requestParameters.redirectUri, requestParameters.scope, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Exchanges an authorization code specified in the request for the access token.
     * @summary OAuth2 token endpoint
     * @param {OAuth20AuthorizationApiExchangeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizationApi
     */
    public exchangeToken(requestParameters: AuthorizationApiExchangeTokenRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthorizationApiFp(this.configuration).exchangeToken(requestParameters.grantType, requestParameters.code, requestParameters.redirectUri, requestParameters.clientId, requestParameters.clientSecret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a consent request with the specified parameters.
     * @summary OAuth2 consent endpoint
     * @param {OAuth20AuthorizationApiSubmitConsentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorizationApi
     */
    public submitConsent(requestParameters: AuthorizationApiSubmitConsentRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthorizationApiFp(this.configuration).submitConsent(requestParameters.clientId, requestParameters.state, requestParameters.scope, options).then((request) => request(this.axios, this.basePath));
    }
}

