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
import type { ClientInfoResponse } from '../../models';
// @ts-ignore
import type { ClientResponse } from '../../models';
// @ts-ignore
import type { ErrorResponse } from '../../models';
// @ts-ignore
import type { PageableModificationResponse } from '../../models';
// @ts-ignore
import type { PageableResponse } from '../../models';
// @ts-ignore
import type { PageableResponseClientInfoResponse } from '../../models';
/**
 * ClientQueryingApi - axios parameter creator
 * @export
 */
export const ClientQueryingApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
         * @summary Get client details
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client/
         */
        getClient: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getClient', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the detailed information for a client with the ID specified in the request.
         * @summary Get detailed client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client-info/
         */
        getClientInfo: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getClientInfo', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}/info`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
         * @summary Get clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The ID of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients/
         */
        getClients: async (limit: number, lastClientId?: string, lastCreatedOn?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getClients', 'limit', limit)
            const localVarPath = `/api/2.0/clients`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (lastClientId !== undefined) {
                localVarQueryParameter['last_client_id'] = lastClientId;
            }

            if (lastCreatedOn !== undefined) {
                localVarQueryParameter['last_created_on'] = (lastCreatedOn as any instanceof Date) ?
                    (lastCreatedOn as any).toISOString() :
                    lastCreatedOn;
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
         * Retrieves a paginated list of information for all clients.
         * @summary Get detailed information of clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The identifier of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClientsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients-info/
         */
        getClientsInfo: async (limit: number, lastClientId?: string, lastCreatedOn?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getClientsInfo', 'limit', limit)
            const localVarPath = `/api/2.0/clients/info`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (lastClientId !== undefined) {
                localVarQueryParameter['last_client_id'] = lastClientId;
            }

            if (lastCreatedOn !== undefined) {
                localVarQueryParameter['last_created_on'] = (lastCreatedOn as any instanceof Date) ?
                    (lastCreatedOn as any).toISOString() :
                    lastCreatedOn;
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
         * Retrieves a paginated list of user consents.
         * @summary Get user consents
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastModifiedOn] The date when the user consent was last modified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getConsents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-consents/
         */
        getConsents: async (limit: number, lastModifiedOn?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getConsents', 'limit', limit)
            const localVarPath = `/api/2.0/clients/consents`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (lastModifiedOn !== undefined) {
                localVarQueryParameter['last_modified_on'] = (lastModifiedOn as any instanceof Date) ?
                    (lastModifiedOn as any).toISOString() :
                    lastModifiedOn;
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
         * Returns the public information for a client with the ID secified din the request.
         * @summary Get public client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPublicClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-client-info/
         */
        getPublicClientInfo: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getPublicClientInfo', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}/public/info`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * ClientQueryingApi - functional programming interface
 * @export
 */
export const ClientQueryingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientQueryingApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
         * @summary Get client details
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client/
         */
        async getClient(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClient(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientQueryingApi.getClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the detailed information for a client with the ID specified in the request.
         * @summary Get detailed client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client-info/
         */
        async getClientInfo(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClientInfo(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientQueryingApi.getClientInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
         * @summary Get clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The ID of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients/
         */
        async getClients(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageableResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClients(limit, lastClientId, lastCreatedOn, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientQueryingApi.getClients']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a paginated list of information for all clients.
         * @summary Get detailed information of clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The identifier of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getClientsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients-info/
         */
        async getClientsInfo(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageableResponseClientInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClientsInfo(limit, lastClientId, lastCreatedOn, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientQueryingApi.getClientsInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a paginated list of user consents.
         * @summary Get user consents
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastModifiedOn] The date when the user consent was last modified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getConsents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-consents/
         */
        async getConsents(limit: number, lastModifiedOn?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageableModificationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsents(limit, lastModifiedOn, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientQueryingApi.getConsents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the public information for a client with the ID secified din the request.
         * @summary Get public client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPublicClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-client-info/
         */
        async getPublicClientInfo(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPublicClientInfo(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientQueryingApi.getPublicClientInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ClientQueryingApi - factory interface
 * @export
 */
export const ClientQueryingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientQueryingApiFp(configuration)
    return {
        /**
         * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
         * @summary Get client details
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client/
         * @throws {RequiredError}
         */
        getClient(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<ClientResponse> {
            return localVarFp.getClient(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the detailed information for a client with the ID specified in the request.
         * @summary Get detailed client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client-info/
         * @throws {RequiredError}
         */
        getClientInfo(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<ClientInfoResponse> {
            return localVarFp.getClientInfo(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
         * @summary Get clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The ID of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients/
         * @throws {RequiredError}
         */
        getClients(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): AxiosPromise<PageableResponse> {
            return localVarFp.getClients(limit, lastClientId, lastCreatedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of information for all clients.
         * @summary Get detailed information of clients
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastClientId] The identifier of the last retrieved client.
         * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClientsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients-info/
         * @throws {RequiredError}
         */
        getClientsInfo(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig): AxiosPromise<PageableResponseClientInfoResponse> {
            return localVarFp.getClientsInfo(limit, lastClientId, lastCreatedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of user consents.
         * @summary Get user consents
         * @param {number} limit The maximum number of results returned per page.
         * @param {string} [lastModifiedOn] The date when the user consent was last modified.
         * @param {*} [options] Override http request option.
         * REST API Reference for getConsents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-consents/
         * @throws {RequiredError}
         */
        getConsents(limit: number, lastModifiedOn?: string, options?: RawAxiosRequestConfig): AxiosPromise<PageableModificationResponse> {
            return localVarFp.getConsents(limit, lastModifiedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the public information for a client with the ID secified din the request.
         * @summary Get public client information
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPublicClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-client-info/
         * @throws {RequiredError}
         */
        getPublicClientInfo(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<ClientInfoResponse> {
            return localVarFp.getPublicClientInfo(clientId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientQueryingApi - object-oriented interface
 * @export
 * @class ClientQueryingApi
 * @extends {BaseAPI}
 */
export class ClientQueryingApi extends BaseAPI {
    /**
     * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
     * @summary Get client details
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClient(clientId: string, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClient(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the detailed information for a client with the ID specified in the request.
     * @summary Get detailed client information
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClientInfo(clientId: string, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClientInfo(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.
     * @summary Get clients
     * @param {number} limit The maximum number of results returned per page.
     * @param {string} [lastClientId] The ID of the last retrieved client.
     * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClients(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClients(limit, lastClientId, lastCreatedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of information for all clients.
     * @summary Get detailed information of clients
     * @param {number} limit The maximum number of results returned per page.
     * @param {string} [lastClientId] The identifier of the last retrieved client.
     * @param {string} [lastCreatedOn] The creation date of the last retrieved client.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClientsInfo(limit: number, lastClientId?: string, lastCreatedOn?: string, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClientsInfo(limit, lastClientId, lastCreatedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of user consents.
     * @summary Get user consents
     * @param {number} limit The maximum number of results returned per page.
     * @param {string} [lastModifiedOn] The date when the user consent was last modified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getConsents(limit: number, lastModifiedOn?: string, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getConsents(limit, lastModifiedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the public information for a client with the ID secified din the request.
     * @summary Get public client information
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getPublicClientInfo(clientId: string, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getPublicClientInfo(clientId, options).then((request) => request(this.axios, this.basePath));
    }
}

