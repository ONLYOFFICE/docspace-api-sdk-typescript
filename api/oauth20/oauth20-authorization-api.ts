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
import type { ExchangeToken200Response } from '../../models';
/**
 * OAuth20AuthorizationApi - axios parameter creator
 * @export
 */
export const OAuth20AuthorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Initiates the OAuth2 authorization flow.
         * @summary OAuth2 authorization endpoint
         * @param {string} responseType The OAuth 2.0 response type, must be \&#39;code\&#39; for authorization code flow.
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
         * @param {string} [grantType] The OAuth2 grant type, must be \\\&#39;authorization_code\\\&#39; for the authorization code flow.
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
 * OAuth20AuthorizationApi - functional programming interface
 * @export
 */
export const OAuth20AuthorizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OAuth20AuthorizationApiAxiosParamCreator(configuration)
    return {
        /**
         * Initiates the OAuth2 authorization flow.
         * @summary OAuth2 authorization endpoint
         * @param {string} responseType The OAuth 2.0 response type, must be \&#39;code\&#39; for authorization code flow.
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
            const localVarOperationServerBasePath = operationServerMap['OAuth20AuthorizationApi.authorizeOAuth']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Exchanges an authorization code specified in the request for the access token.
         * @summary OAuth2 token endpoint
         * @param {string} [grantType] The OAuth2 grant type, must be \\\&#39;authorization_code\\\&#39; for the authorization code flow.
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
            const localVarOperationServerBasePath = operationServerMap['OAuth20AuthorizationApi.exchangeToken']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['OAuth20AuthorizationApi.submitConsent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OAuth20AuthorizationApi - factory interface
 * @export
 */
export const OAuth20AuthorizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OAuth20AuthorizationApiFp(configuration)
    return {
        /**
         * Initiates the OAuth2 authorization flow.
         * @summary OAuth2 authorization endpoint
         * @param {string} responseType The OAuth 2.0 response type, must be \&#39;code\&#39; for authorization code flow.
         * @param {string} clientId The client identifier issued to the client during registration.
         * @param {string} redirectUri The URL to redirect to after authorization is complete.
         * @param {string} scope The space-separated list of requested scope permissions.
         * @param {*} [options] Override http request option.
         * REST API Reference for authorizeOAuth operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authorize-oauth/
         * @throws {RequiredError}
         */
        authorizeOAuth(responseType: string, clientId: string, redirectUri: string, scope: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.authorizeOAuth(responseType, clientId, redirectUri, scope, options).then((request) => request(axios, basePath));
        },
        /**
         * Exchanges an authorization code specified in the request for the access token.
         * @summary OAuth2 token endpoint
         * @param {string} [grantType] The OAuth2 grant type, must be \\\&#39;authorization_code\\\&#39; for the authorization code flow.
         * @param {string} [code] A temporary authorization code that is sent to the client to be exchanged for a token.
         * @param {string} [redirectUri] The URL where the user will be redirected after successful or unsuccessful authentication.
         * @param {string} [clientId] The client identifier issued to the client during registration.
         * @param {string} [clientSecret] The client secret issued to the client during registration.
         * @param {*} [options] Override http request option.
         * REST API Reference for exchangeToken operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/exchange-token/
         * @throws {RequiredError}
         */
        exchangeToken(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, options?: RawAxiosRequestConfig): AxiosPromise<ExchangeToken200Response> {
            return localVarFp.exchangeToken(grantType, code, redirectUri, clientId, clientSecret, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a consent request with the specified parameters.
         * @summary OAuth2 consent endpoint
         * @param {string} [clientId] The client identifier issued to the client during registration.
         * @param {string} [state] The random string used to solve the CSRF vulnerability problem.
         * @param {string} [scope] The space-separated list of requested scope permissions.
         * @param {*} [options] Override http request option.
         * REST API Reference for submitConsent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/submit-consent/
         * @throws {RequiredError}
         */
        submitConsent(clientId?: string, state?: string, scope?: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.submitConsent(clientId, state, scope, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OAuth20AuthorizationApi - object-oriented interface
 * @export
 * @class OAuth20AuthorizationApi
 * @extends {BaseAPI}
 */
export class OAuth20AuthorizationApi extends BaseAPI {
    /**
     * Initiates the OAuth2 authorization flow.
     * @summary OAuth2 authorization endpoint
     * @param {string} responseType The OAuth 2.0 response type, must be \&#39;code\&#39; for authorization code flow.
     * @param {string} clientId The client identifier issued to the client during registration.
     * @param {string} redirectUri The URL to redirect to after authorization is complete.
     * @param {string} scope The space-separated list of requested scope permissions.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20AuthorizationApi
     */
    public authorizeOAuth(responseType: string, clientId: string, redirectUri: string, scope: string, options?: RawAxiosRequestConfig) {
        return OAuth20AuthorizationApiFp(this.configuration).authorizeOAuth(responseType, clientId, redirectUri, scope, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Exchanges an authorization code specified in the request for the access token.
     * @summary OAuth2 token endpoint
     * @param {string} [grantType] The OAuth2 grant type, must be \\\&#39;authorization_code\\\&#39; for the authorization code flow.
     * @param {string} [code] A temporary authorization code that is sent to the client to be exchanged for a token.
     * @param {string} [redirectUri] The URL where the user will be redirected after successful or unsuccessful authentication.
     * @param {string} [clientId] The client identifier issued to the client during registration.
     * @param {string} [clientSecret] The client secret issued to the client during registration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20AuthorizationApi
     */
    public exchangeToken(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, options?: RawAxiosRequestConfig) {
        return OAuth20AuthorizationApiFp(this.configuration).exchangeToken(grantType, code, redirectUri, clientId, clientSecret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a consent request with the specified parameters.
     * @summary OAuth2 consent endpoint
     * @param {string} [clientId] The client identifier issued to the client during registration.
     * @param {string} [state] The random string used to solve the CSRF vulnerability problem.
     * @param {string} [scope] The space-separated list of requested scope permissions.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20AuthorizationApi
     */
    public submitConsent(clientId?: string, state?: string, scope?: string, options?: RawAxiosRequestConfig) {
        return OAuth20AuthorizationApiFp(this.configuration).submitConsent(clientId, state, scope, options).then((request) => request(this.axios, this.basePath));
    }
}

