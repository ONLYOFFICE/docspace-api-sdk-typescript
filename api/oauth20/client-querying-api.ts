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
import type { ClientInfoResponse } from '../../models';
// @ts-ignore
import type { ClientResponse } from '../../models';
// @ts-ignore
import type { PageableModificationResponse } from '../../models';
// @ts-ignore
import type { PageableResponse } from '../../models';
// @ts-ignore
import type { PageableResponseClientInfoResponse } from '../../models';
// @ts-ignore
import type { ProblemDetail } from '../../models';
/**
 * ClientQueryingApi - axios parameter creator
 * @export
 */
export const ClientQueryingApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
         * @summary Get client details
         * @param {string} clientId ID of the client to retrieve
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

            // authentication x-signature required


    
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
         * @summary Retrieves detailed information for a specific client
         * @param {string} clientId ID of the client to retrieve
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

            // authentication x-signature required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the limit parameter and last seen client ID/creation date.
         * @summary List clients
         * @param {number} limit Pagination limit
         * @param {string} [lastClientId] ID of the last retrieved client
         * @param {string} [lastCreatedOn] Date of the last retrieved client
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

            // authentication x-signature required

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
         * @summary Retrieves a pageable list of client information
         * @param {number} limit Pagination limit
         * @param {string} [lastClientId] ID of the last retrieved client
         * @param {string} [lastCreatedOn] Date of the last retrieved client
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

            // authentication x-signature required

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
         * @summary Retrieves a pageable list of consents
         * @param {number} limit Pagination limit
         * @param {string} [lastModifiedOn] Date of the last retrieved consent
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

            // authentication x-signature required

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
         * 
         * @summary Handles the GET request for public client information
         * @param {string} clientId ID of the client to retrieve
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
         * @param {string} clientId ID of the client to retrieve
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
         * @summary Retrieves detailed information for a specific client
         * @param {string} clientId ID of the client to retrieve
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
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the limit parameter and last seen client ID/creation date.
         * @summary List clients
         * @param {number} limit Pagination limit
         * @param {string} [lastClientId] ID of the last retrieved client
         * @param {string} [lastCreatedOn] Date of the last retrieved client
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
         * @summary Retrieves a pageable list of client information
         * @param {number} limit Pagination limit
         * @param {string} [lastClientId] ID of the last retrieved client
         * @param {string} [lastCreatedOn] Date of the last retrieved client
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
         * @summary Retrieves a pageable list of consents
         * @param {number} limit Pagination limit
         * @param {string} [lastModifiedOn] Date of the last retrieved consent
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
         * 
         * @summary Handles the GET request for public client information
         * @param {string} clientId ID of the client to retrieve
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
         * @param {ClientQueryingApiGetClientRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client/
         * @throws {RequiredError}
         */
        getClient(requestParameters: ClientQueryingApiGetClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<ClientResponse> {
            return localVarFp.getClient(requestParameters.clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the detailed information for a client with the ID specified in the request.
         * @summary Retrieves detailed information for a specific client
         * @param {ClientQueryingApiGetClientInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client-info/
         * @throws {RequiredError}
         */
        getClientInfo(requestParameters: ClientQueryingApiGetClientInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<ClientInfoResponse> {
            return localVarFp.getClientInfo(requestParameters.clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the limit parameter and last seen client ID/creation date.
         * @summary List clients
         * @param {ClientQueryingApiGetClientsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients/
         * @throws {RequiredError}
         */
        getClients(requestParameters: ClientQueryingApiGetClientsRequest, options?: RawAxiosRequestConfig): AxiosPromise<PageableResponse> {
            return localVarFp.getClients(requestParameters.limit, requestParameters.lastClientId, requestParameters.lastCreatedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of information for all clients.
         * @summary Retrieves a pageable list of client information
         * @param {ClientQueryingApiGetClientsInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getClientsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients-info/
         * @throws {RequiredError}
         */
        getClientsInfo(requestParameters: ClientQueryingApiGetClientsInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<PageableResponseClientInfoResponse> {
            return localVarFp.getClientsInfo(requestParameters.limit, requestParameters.lastClientId, requestParameters.lastCreatedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a paginated list of user consents.
         * @summary Retrieves a pageable list of consents
         * @param {ClientQueryingApiGetConsentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getConsents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-consents/
         * @throws {RequiredError}
         */
        getConsents(requestParameters: ClientQueryingApiGetConsentsRequest, options?: RawAxiosRequestConfig): AxiosPromise<PageableModificationResponse> {
            return localVarFp.getConsents(requestParameters.limit, requestParameters.lastModifiedOn, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Handles the GET request for public client information
         * @param {ClientQueryingApiGetPublicClientInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPublicClientInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-client-info/
         * @throws {RequiredError}
         */
        getPublicClientInfo(requestParameters: ClientQueryingApiGetPublicClientInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<ClientInfoResponse> {
            return localVarFp.getPublicClientInfo(requestParameters.clientId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getClient operation in ClientQueryingApi.
 * @export
 * @interface ClientQueryingApiGetClientRequest
 */
export interface ClientQueryingApiGetClientRequest {
    /**
     * ID of the client to retrieve
     * @type {string}
     * @memberof ClientQueryingApiGetClient
     */
    readonly clientId: string
}

/**
 * Request parameters for getClientInfo operation in ClientQueryingApi.
 * @export
 * @interface ClientQueryingApiGetClientInfoRequest
 */
export interface ClientQueryingApiGetClientInfoRequest {
    /**
     * ID of the client to retrieve
     * @type {string}
     * @memberof ClientQueryingApiGetClientInfo
     */
    readonly clientId: string
}

/**
 * Request parameters for getClients operation in ClientQueryingApi.
 * @export
 * @interface ClientQueryingApiGetClientsRequest
 */
export interface ClientQueryingApiGetClientsRequest {
    /**
     * Pagination limit
     * @type {number}
     * @memberof ClientQueryingApiGetClients
     */
    readonly limit: number

    /**
     * ID of the last retrieved client
     * @type {string}
     * @memberof ClientQueryingApiGetClients
     */
    readonly lastClientId?: string

    /**
     * Date of the last retrieved client
     * @type {string}
     * @memberof ClientQueryingApiGetClients
     */
    readonly lastCreatedOn?: string
}

/**
 * Request parameters for getClientsInfo operation in ClientQueryingApi.
 * @export
 * @interface ClientQueryingApiGetClientsInfoRequest
 */
export interface ClientQueryingApiGetClientsInfoRequest {
    /**
     * Pagination limit
     * @type {number}
     * @memberof ClientQueryingApiGetClientsInfo
     */
    readonly limit: number

    /**
     * ID of the last retrieved client
     * @type {string}
     * @memberof ClientQueryingApiGetClientsInfo
     */
    readonly lastClientId?: string

    /**
     * Date of the last retrieved client
     * @type {string}
     * @memberof ClientQueryingApiGetClientsInfo
     */
    readonly lastCreatedOn?: string
}

/**
 * Request parameters for getConsents operation in ClientQueryingApi.
 * @export
 * @interface ClientQueryingApiGetConsentsRequest
 */
export interface ClientQueryingApiGetConsentsRequest {
    /**
     * Pagination limit
     * @type {number}
     * @memberof ClientQueryingApiGetConsents
     */
    readonly limit: number

    /**
     * Date of the last retrieved consent
     * @type {string}
     * @memberof ClientQueryingApiGetConsents
     */
    readonly lastModifiedOn?: string
}

/**
 * Request parameters for getPublicClientInfo operation in ClientQueryingApi.
 * @export
 * @interface ClientQueryingApiGetPublicClientInfoRequest
 */
export interface ClientQueryingApiGetPublicClientInfoRequest {
    /**
     * ID of the client to retrieve
     * @type {string}
     * @memberof ClientQueryingApiGetPublicClientInfo
     */
    readonly clientId: string
}

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
     * @param {OAuth20ClientQueryingApiGetClientRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClient(requestParameters: ClientQueryingApiGetClientRequest, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClient(requestParameters.clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the detailed information for a client with the ID specified in the request.
     * @summary Retrieves detailed information for a specific client
     * @param {OAuth20ClientQueryingApiGetClientInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClientInfo(requestParameters: ClientQueryingApiGetClientInfoRequest, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClientInfo(requestParameters.clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the limit parameter and last seen client ID/creation date.
     * @summary List clients
     * @param {OAuth20ClientQueryingApiGetClientsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClients(requestParameters: ClientQueryingApiGetClientsRequest, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClients(requestParameters.limit, requestParameters.lastClientId, requestParameters.lastCreatedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of information for all clients.
     * @summary Retrieves a pageable list of client information
     * @param {OAuth20ClientQueryingApiGetClientsInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getClientsInfo(requestParameters: ClientQueryingApiGetClientsInfoRequest, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getClientsInfo(requestParameters.limit, requestParameters.lastClientId, requestParameters.lastCreatedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a paginated list of user consents.
     * @summary Retrieves a pageable list of consents
     * @param {OAuth20ClientQueryingApiGetConsentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getConsents(requestParameters: ClientQueryingApiGetConsentsRequest, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getConsents(requestParameters.limit, requestParameters.lastModifiedOn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Handles the GET request for public client information
     * @param {OAuth20ClientQueryingApiGetPublicClientInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientQueryingApi
     */
    public getPublicClientInfo(requestParameters: ClientQueryingApiGetPublicClientInfoRequest, options?: RawAxiosRequestConfig) {
        return ClientQueryingApiFp(this.configuration).getPublicClientInfo(requestParameters.clientId, options).then((request) => request(this.axios, this.basePath));
    }
}

