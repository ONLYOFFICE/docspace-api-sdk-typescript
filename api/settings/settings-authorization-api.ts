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
import type { AuthServiceRequestsArrayWrapper } from '../../models';
// @ts-ignore
import type { AuthServiceRequestsDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ConnectionTestResultWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ExternalDatabaseSettings } from '../../models';
/**
 * SettingsAuthorizationApi - axios parameter creator
 * @export
 */
export const SettingsAuthorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the authorization services.
         * @summary Get the authorization services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuthServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-auth-services/
         */
        getAuthServices: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/authservice`;
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
         * Saves the authorization keys.
         * @summary Save the authorization keys
         * @param {AuthServiceRequestsDto} [authServiceRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAuthKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-auth-keys/
         */
        saveAuthKeys: async (authServiceRequestsDto?: AuthServiceRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/authservice`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authServiceRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Tests an external database connection with the provided settings without saving them.
         * @summary Test external database connection
         * @param {ExternalDatabaseSettings} [externalDatabaseSettings] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for testExternalDatabaseConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/test-external-database-connection/
         */
        testExternalDatabaseConnection: async (externalDatabaseSettings?: ExternalDatabaseSettings, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/authservice/externaldb/test`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(externalDatabaseSettings, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsAuthorizationApi - functional programming interface
 * @export
 */
export const SettingsAuthorizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsAuthorizationApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the authorization services.
         * @summary Get the authorization services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuthServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-auth-services/
         */
        async getAuthServices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthServiceRequestsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthServices(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsAuthorizationApi.getAuthServices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the authorization keys.
         * @summary Save the authorization keys
         * @param {AuthServiceRequestsDto} [authServiceRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAuthKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-auth-keys/
         */
        async saveAuthKeys(authServiceRequestsDto?: AuthServiceRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveAuthKeys(authServiceRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsAuthorizationApi.saveAuthKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tests an external database connection with the provided settings without saving them.
         * @summary Test external database connection
         * @param {ExternalDatabaseSettings} [externalDatabaseSettings] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for testExternalDatabaseConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/test-external-database-connection/
         */
        async testExternalDatabaseConnection(externalDatabaseSettings?: ExternalDatabaseSettings, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectionTestResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testExternalDatabaseConnection(externalDatabaseSettings, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsAuthorizationApi.testExternalDatabaseConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsAuthorizationApi - factory interface
 * @export
 */
export const SettingsAuthorizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsAuthorizationApiFp(configuration)
    return {
        /**
         * Returns the authorization services.
         * @summary Get the authorization services
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuthServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-auth-services/
         * @throws {RequiredError}
         */
        getAuthServices(options?: RawAxiosRequestConfig): AxiosPromise<AuthServiceRequestsArrayWrapper> {
            return localVarFp.getAuthServices(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the authorization keys.
         * @summary Save the authorization keys
         * @param {SettingsAuthorizationApiSaveAuthKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveAuthKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-auth-keys/
         * @throws {RequiredError}
         */
        saveAuthKeys(requestParameters: SettingsAuthorizationApiSaveAuthKeysRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveAuthKeys(requestParameters.authServiceRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Tests an external database connection with the provided settings without saving them.
         * @summary Test external database connection
         * @param {SettingsAuthorizationApiTestExternalDatabaseConnectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for testExternalDatabaseConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/test-external-database-connection/
         * @throws {RequiredError}
         */
        testExternalDatabaseConnection(requestParameters: SettingsAuthorizationApiTestExternalDatabaseConnectionRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ConnectionTestResultWrapper> {
            return localVarFp.testExternalDatabaseConnection(requestParameters.externalDatabaseSettings, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for saveAuthKeys operation in SettingsAuthorizationApi.
 * @export
 * @interface SettingsAuthorizationApiSaveAuthKeysRequest
 */
export interface SettingsAuthorizationApiSaveAuthKeysRequest {
    /**
     * 
     * @type {AuthServiceRequestsDto}
     * @memberof SettingsAuthorizationApiSaveAuthKeys
     */
    readonly authServiceRequestsDto?: AuthServiceRequestsDto
}

/**
 * Request parameters for testExternalDatabaseConnection operation in SettingsAuthorizationApi.
 * @export
 * @interface SettingsAuthorizationApiTestExternalDatabaseConnectionRequest
 */
export interface SettingsAuthorizationApiTestExternalDatabaseConnectionRequest {
    /**
     * 
     * @type {ExternalDatabaseSettings}
     * @memberof SettingsAuthorizationApiTestExternalDatabaseConnection
     */
    readonly externalDatabaseSettings?: ExternalDatabaseSettings
}

/**
 * SettingsAuthorizationApi - object-oriented interface
 * @export
 * @class SettingsAuthorizationApi
 * @extends {BaseAPI}
 */
export class SettingsAuthorizationApi extends BaseAPI {
    /**
     * Returns the authorization services.
     * @summary Get the authorization services
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsAuthorizationApi
     */
    public getAuthServices(options?: RawAxiosRequestConfig) {
        return SettingsAuthorizationApiFp(this.configuration).getAuthServices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the authorization keys.
     * @summary Save the authorization keys
     * @param {SettingsAuthorizationApiSaveAuthKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsAuthorizationApi
     */
    public saveAuthKeys(requestParameters: SettingsAuthorizationApiSaveAuthKeysRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsAuthorizationApiFp(this.configuration).saveAuthKeys(requestParameters.authServiceRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tests an external database connection with the provided settings without saving them.
     * @summary Test external database connection
     * @param {SettingsAuthorizationApiTestExternalDatabaseConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsAuthorizationApi
     */
    public testExternalDatabaseConnection(requestParameters: SettingsAuthorizationApiTestExternalDatabaseConnectionRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsAuthorizationApiFp(this.configuration).testExternalDatabaseConnection(requestParameters.externalDatabaseSettings, options).then((request) => request(this.axios, this.basePath));
    }
}

