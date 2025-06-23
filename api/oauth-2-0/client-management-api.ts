// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { ChangeClientActivationRequest } from '../../models';
// @ts-ignore
import type { ClientResponse } from '../../models';
// @ts-ignore
import type { ClientSecretResponse } from '../../models';
// @ts-ignore
import type { CreateClientRequest } from '../../models';
// @ts-ignore
import type { ErrorResponse } from '../../models';
// @ts-ignore
import type { UpdateClientRequest } from '../../models';
/**
 * OAuth20ClientManagementApi - axios parameter creator
 * @export
 */
export const OAuth20ClientManagementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.
         * @summary Change the client activation status
         * @param {string} clientId The client identifier.
         * @param {ChangeClientActivationRequest} changeClientActivationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeActivation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-activation/
         */
        changeActivation: async (clientId: string, changeClientActivationRequest: ChangeClientActivationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('changeActivation', 'clientId', clientId)
            // verify required parameter 'changeClientActivationRequest' is not null or undefined
            assertParamExists('changeActivation', 'changeClientActivationRequest', changeClientActivationRequest)
            const localVarPath = `/api/2.0/clients/{clientId}/activation`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication asc_auth_key required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(changeClientActivationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.
         * @summary Create a new OAuth2 client
         * @param {CreateClientRequest} createClientRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-client/
         */
        createClient: async (createClientRequest: CreateClientRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createClientRequest' is not null or undefined
            assertParamExists('createClient', 'createClientRequest', createClientRequest)
            const localVarPath = `/api/2.0/clients`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication asc_auth_key required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createClientRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.
         * @summary Delete an OAuth2 client
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-client/
         */
        deleteClient: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('deleteClient', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.
         * @summary Regenerate the client secret
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for regenerateSecret operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/regenerate-secret/
         */
        regenerateSecret: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('regenerateSecret', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}/regenerate`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
         * Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.
         * @summary Revoke client consent
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for revokeUserClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/revoke-user-client/
         */
        revokeUserClient: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('revokeUserClient', 'clientId', clientId)
            const localVarPath = `/api/2.0/clients/{clientId}/revoke`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.
         * @summary Update an existing OAuth2 client
         * @param {string} clientId The client identifier.
         * @param {UpdateClientRequest} updateClientRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-client/
         */
        updateClient: async (clientId: string, updateClientRequest: UpdateClientRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('updateClient', 'clientId', clientId)
            // verify required parameter 'updateClientRequest' is not null or undefined
            assertParamExists('updateClient', 'updateClientRequest', updateClientRequest)
            const localVarPath = `/api/2.0/clients/{clientId}`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication asc_auth_key required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateClientRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OAuth20ClientManagementApi - functional programming interface
 * @export
 */
export const OAuth20ClientManagementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OAuth20ClientManagementApiAxiosParamCreator(configuration)
    return {
        /**
         * Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.
         * @summary Change the client activation status
         * @param {string} clientId The client identifier.
         * @param {ChangeClientActivationRequest} changeClientActivationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeActivation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-activation/
         */
        async changeActivation(clientId: string, changeClientActivationRequest: ChangeClientActivationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeActivation(clientId, changeClientActivationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientManagementApi.changeActivation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.
         * @summary Create a new OAuth2 client
         * @param {CreateClientRequest} createClientRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-client/
         */
        async createClient(createClientRequest: CreateClientRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createClient(createClientRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientManagementApi.createClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.
         * @summary Delete an OAuth2 client
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-client/
         */
        async deleteClient(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteClient(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientManagementApi.deleteClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.
         * @summary Regenerate the client secret
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for regenerateSecret operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/regenerate-secret/
         */
        async regenerateSecret(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientSecretResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.regenerateSecret(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientManagementApi.regenerateSecret']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.
         * @summary Revoke client consent
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for revokeUserClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/revoke-user-client/
         */
        async revokeUserClient(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revokeUserClient(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientManagementApi.revokeUserClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.
         * @summary Update an existing OAuth2 client
         * @param {string} clientId The client identifier.
         * @param {UpdateClientRequest} updateClientRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-client/
         */
        async updateClient(clientId: string, updateClientRequest: UpdateClientRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClient(clientId, updateClientRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth20ClientManagementApi.updateClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OAuth20ClientManagementApi - factory interface
 * @export
 */
export const OAuth20ClientManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OAuth20ClientManagementApiFp(configuration)
    return {
        /**
         * Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.
         * @summary Change the client activation status
         * @param {string} clientId The client identifier.
         * @param {ChangeClientActivationRequest} changeClientActivationRequest 
         * @param {*} [options] Override http request option.
         * REST API Reference for changeActivation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-activation/
         * @throws {RequiredError}
         */
        changeActivation(clientId: string, changeClientActivationRequest: ChangeClientActivationRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.changeActivation(clientId, changeClientActivationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.
         * @summary Create a new OAuth2 client
         * @param {CreateClientRequest} createClientRequest 
         * @param {*} [options] Override http request option.
         * REST API Reference for createClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-client/
         * @throws {RequiredError}
         */
        createClient(createClientRequest: CreateClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<ClientResponse> {
            return localVarFp.createClient(createClientRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.
         * @summary Delete an OAuth2 client
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-client/
         * @throws {RequiredError}
         */
        deleteClient(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.deleteClient(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.
         * @summary Regenerate the client secret
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for regenerateSecret operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/regenerate-secret/
         * @throws {RequiredError}
         */
        regenerateSecret(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<ClientSecretResponse> {
            return localVarFp.regenerateSecret(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.
         * @summary Revoke client consent
         * @param {string} clientId The client identifier.
         * @param {*} [options] Override http request option.
         * REST API Reference for revokeUserClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/revoke-user-client/
         * @throws {RequiredError}
         */
        revokeUserClient(clientId: string, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.revokeUserClient(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.
         * @summary Update an existing OAuth2 client
         * @param {string} clientId The client identifier.
         * @param {UpdateClientRequest} updateClientRequest 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-client/
         * @throws {RequiredError}
         */
        updateClient(clientId: string, updateClientRequest: UpdateClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.updateClient(clientId, updateClientRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OAuth20ClientManagementApi - object-oriented interface
 * @export
 * @class OAuth20ClientManagementApi
 * @extends {BaseAPI}
 */
export class OAuth20ClientManagementApi extends BaseAPI {
    /**
     * Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.
     * @summary Change the client activation status
     * @param {string} clientId The client identifier.
     * @param {ChangeClientActivationRequest} changeClientActivationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientManagementApi
     */
    public changeActivation(clientId: string, changeClientActivationRequest: ChangeClientActivationRequest, options?: RawAxiosRequestConfig) {
        return OAuth20ClientManagementApiFp(this.configuration).changeActivation(clientId, changeClientActivationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.
     * @summary Create a new OAuth2 client
     * @param {CreateClientRequest} createClientRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientManagementApi
     */
    public createClient(createClientRequest: CreateClientRequest, options?: RawAxiosRequestConfig) {
        return OAuth20ClientManagementApiFp(this.configuration).createClient(createClientRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.
     * @summary Delete an OAuth2 client
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientManagementApi
     */
    public deleteClient(clientId: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientManagementApiFp(this.configuration).deleteClient(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.
     * @summary Regenerate the client secret
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientManagementApi
     */
    public regenerateSecret(clientId: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientManagementApiFp(this.configuration).regenerateSecret(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.
     * @summary Revoke client consent
     * @param {string} clientId The client identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientManagementApi
     */
    public revokeUserClient(clientId: string, options?: RawAxiosRequestConfig) {
        return OAuth20ClientManagementApiFp(this.configuration).revokeUserClient(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.
     * @summary Update an existing OAuth2 client
     * @param {string} clientId The client identifier.
     * @param {UpdateClientRequest} updateClientRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth20ClientManagementApi
     */
    public updateClient(clientId: string, updateClientRequest: UpdateClientRequest, options?: RawAxiosRequestConfig) {
        return OAuth20ClientManagementApiFp(this.configuration).updateClient(clientId, updateClientRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

