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
import type { ChangeClientActivationRequest } from '../../models';
// @ts-ignore
import type { ClientResponse } from '../../models';
// @ts-ignore
import type { ClientSecretResponse } from '../../models';
// @ts-ignore
import type { CreateClientRequest } from '../../models';
// @ts-ignore
import type { ProblemDetail } from '../../models';
// @ts-ignore
import type { UpdateClientRequest } from '../../models';
/**
 * ClientManagementApi - axios parameter creator
 * @export
 */
export const ClientManagementApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Enables or disables an existing client and answers 200 with an empty body. A disabled client can no longer obtain new tokens, but the tokens and consents it already holds stay valid until they expire on their own: disable a client to stop new authorizations, delete it to end the existing ones. An administrator may change any client of the tenant, a plain user only the clients they created. The body carries the single activation flag, and a client the caller may not see is reported as not found rather than as forbidden.
         * @summary Change client activation status
         * @param {string} clientId ID of the client to change activation for
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

            const localVarPath = `/api/2.0/oauth2/clients/{clientId}/activation`
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

            // authentication x-signature required


    
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
         * Registers a new OAuth2 client in the caller\'s tenant and returns it. The body must carry a name, a description, a logo and at least one redirect URI, allowed origin and scope, and every scope named must already exist in the tenant\'s scope catalogue. Administrators and users may both register clients; the caller is recorded as the creator, which is what later restricts a plain user to the clients they created. The response is the stored client with its generated client ID and secret, and it is the first place either value can be read. Some deployments cap how many clients one tenant may hold, and reaching that cap is reported as 400 together with the validation failures.
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

            const localVarPath = `/api/2.0/oauth2/clients`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-signature required


    
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
         * Deletes one client from the tenant permanently and answers 200 with an empty body. An administrator may delete any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The authorizations and consents issued for the client are removed too, but that cleanup is driven by a message and completes on the authorization service after this call has already returned. A delete that removes no row answers 400. The operation cannot be undone.
         * @summary Delete an OAuth2 client
         * @param {string} clientId ID of the client to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-client/
         */
        deleteClient: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('deleteClient', 'clientId', clientId)

            const localVarPath = `/api/2.0/oauth2/clients/{clientId}`
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
         * Deletes every client registered in the current tenant and answers 200 with an empty body. Only an administrator may call it - for a plain user or a guest it is refused with 403 - and it removes the clients of all users of the tenant, not only those of the caller. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
         * @summary Delete all tenant OAuth2 clients
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTenantClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-tenant-clients/
         */
        deleteTenantClients: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/oauth2/clients/tenant`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Deletes every client the calling user created in the current tenant and answers 200 with an empty body. The caller\'s own identity always selects the set, so this never reaches clients created by somebody else, not even for an administrator. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
         * @summary Delete all user OAuth2 clients
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteUserClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-user-clients/
         */
        deleteUserClients: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/oauth2/clients`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Issues a new secret for the client and returns it. The previous secret stops working as soon as this call succeeds, there is no grace period and no way to recover it, so every deployed copy of the client has to be updated with the value returned here. An administrator may do this for any client of the tenant, a plain user only for the clients they created. Tokens already issued to the client keep working; only future client authentication is affected. The response carries the new secret and nothing else.
         * @summary Regenerate client secret
         * @param {string} clientId ID of the client to regenerate secret for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for regenerateSecret operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/regenerate-secret/
         */
        regenerateSecret: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('regenerateSecret', 'clientId', clientId)

            const localVarPath = `/api/2.0/oauth2/clients/{clientId}/regenerate`
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
         * Revokes the calling user\'s own consent for one client and answers 200 with an empty body. It touches only the caller\'s grant: other users keep their consents and the client itself stays registered. Guests may call it as well as users and administrators, because it can never reach anyone else\'s data. The revocation is carried out by the authorization service over gRPC, so a service that reports nothing was revoked produces 400 and a service that cannot be reached produces 503. Once it succeeds the user has to authorize the client again before it can act on their behalf.
         * @summary Revoke client consent
         * @param {string} clientId ID of the client to revoke consent for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for revokeUserClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/revoke-user-client/
         */
        revokeUserClient: async (clientId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('revokeUserClient', 'clientId', clientId)

            const localVarPath = `/api/2.0/oauth2/clients/{clientId}/revoke`
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
         * Updates the mutable settings of an existing client and answers 200 with an empty body. Only the fields carried in the request body change; the client ID, the secret, the tenant and the creator cannot be changed this way. An administrator may update any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The write runs under optimistic locking and is retried a few times, so a request that still loses the race is rejected with 400 instead of silently overwriting a concurrent change. Nothing is returned in the body - read the client back to see the stored result.
         * @summary Update an existing OAuth2 client
         * @param {string} clientId ID of the client to update
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

            const localVarPath = `/api/2.0/oauth2/clients/{clientId}`
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

            // authentication x-signature required


    
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
 * ClientManagementApi - functional programming interface
 * @export
 */
export const ClientManagementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientManagementApiAxiosParamCreator(configuration)
    return {
        /**
         * Enables or disables an existing client and answers 200 with an empty body. A disabled client can no longer obtain new tokens, but the tokens and consents it already holds stay valid until they expire on their own: disable a client to stop new authorizations, delete it to end the existing ones. An administrator may change any client of the tenant, a plain user only the clients they created. The body carries the single activation flag, and a client the caller may not see is reported as not found rather than as forbidden.
         * @summary Change client activation status
         * @param {string} clientId ID of the client to change activation for
         * @param {ChangeClientActivationRequest} changeClientActivationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeActivation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-activation/
         */
        async changeActivation(clientId: string, changeClientActivationRequest: ChangeClientActivationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeActivation(clientId, changeClientActivationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.changeActivation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Registers a new OAuth2 client in the caller\'s tenant and returns it. The body must carry a name, a description, a logo and at least one redirect URI, allowed origin and scope, and every scope named must already exist in the tenant\'s scope catalogue. Administrators and users may both register clients; the caller is recorded as the creator, which is what later restricts a plain user to the clients they created. The response is the stored client with its generated client ID and secret, and it is the first place either value can be read. Some deployments cap how many clients one tenant may hold, and reaching that cap is reported as 400 together with the validation failures.
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
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.createClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes one client from the tenant permanently and answers 200 with an empty body. An administrator may delete any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The authorizations and consents issued for the client are removed too, but that cleanup is driven by a message and completes on the authorization service after this call has already returned. A delete that removes no row answers 400. The operation cannot be undone.
         * @summary Delete an OAuth2 client
         * @param {string} clientId ID of the client to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-client/
         */
        async deleteClient(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteClient(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.deleteClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes every client registered in the current tenant and answers 200 with an empty body. Only an administrator may call it - for a plain user or a guest it is refused with 403 - and it removes the clients of all users of the tenant, not only those of the caller. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
         * @summary Delete all tenant OAuth2 clients
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteTenantClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-tenant-clients/
         */
        async deleteTenantClients(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTenantClients(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.deleteTenantClients']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes every client the calling user created in the current tenant and answers 200 with an empty body. The caller\'s own identity always selects the set, so this never reaches clients created by somebody else, not even for an administrator. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
         * @summary Delete all user OAuth2 clients
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteUserClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-user-clients/
         */
        async deleteUserClients(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserClients(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.deleteUserClients']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Issues a new secret for the client and returns it. The previous secret stops working as soon as this call succeeds, there is no grace period and no way to recover it, so every deployed copy of the client has to be updated with the value returned here. An administrator may do this for any client of the tenant, a plain user only for the clients they created. Tokens already issued to the client keep working; only future client authentication is affected. The response carries the new secret and nothing else.
         * @summary Regenerate client secret
         * @param {string} clientId ID of the client to regenerate secret for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for regenerateSecret operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/regenerate-secret/
         */
        async regenerateSecret(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientSecretResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.regenerateSecret(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.regenerateSecret']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Revokes the calling user\'s own consent for one client and answers 200 with an empty body. It touches only the caller\'s grant: other users keep their consents and the client itself stays registered. Guests may call it as well as users and administrators, because it can never reach anyone else\'s data. The revocation is carried out by the authorization service over gRPC, so a service that reports nothing was revoked produces 400 and a service that cannot be reached produces 503. Once it succeeds the user has to authorize the client again before it can act on their behalf.
         * @summary Revoke client consent
         * @param {string} clientId ID of the client to revoke consent for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for revokeUserClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/revoke-user-client/
         */
        async revokeUserClient(clientId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revokeUserClient(clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.revokeUserClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the mutable settings of an existing client and answers 200 with an empty body. Only the fields carried in the request body change; the client ID, the secret, the tenant and the creator cannot be changed this way. An administrator may update any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The write runs under optimistic locking and is retried a few times, so a request that still loses the race is rejected with 400 instead of silently overwriting a concurrent change. Nothing is returned in the body - read the client back to see the stored result.
         * @summary Update an existing OAuth2 client
         * @param {string} clientId ID of the client to update
         * @param {UpdateClientRequest} updateClientRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-client/
         */
        async updateClient(clientId: string, updateClientRequest: UpdateClientRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClient(clientId, updateClientRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientManagementApi.updateClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ClientManagementApi - factory interface
 * @export
 */
export const ClientManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientManagementApiFp(configuration)
    return {
        /**
         * Enables or disables an existing client and answers 200 with an empty body. A disabled client can no longer obtain new tokens, but the tokens and consents it already holds stay valid until they expire on their own: disable a client to stop new authorizations, delete it to end the existing ones. An administrator may change any client of the tenant, a plain user only the clients they created. The body carries the single activation flag, and a client the caller may not see is reported as not found rather than as forbidden.
         * @summary Change client activation status
         * @param {ClientManagementApiChangeActivationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeActivation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-activation/
         * @throws {RequiredError}
         */
        changeActivation(requestParameters: ClientManagementApiChangeActivationRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.changeActivation(requestParameters.clientId, requestParameters.changeClientActivationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Registers a new OAuth2 client in the caller\'s tenant and returns it. The body must carry a name, a description, a logo and at least one redirect URI, allowed origin and scope, and every scope named must already exist in the tenant\'s scope catalogue. Administrators and users may both register clients; the caller is recorded as the creator, which is what later restricts a plain user to the clients they created. The response is the stored client with its generated client ID and secret, and it is the first place either value can be read. Some deployments cap how many clients one tenant may hold, and reaching that cap is reported as 400 together with the validation failures.
         * @summary Create a new OAuth2 client
         * @param {ClientManagementApiCreateClientRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-client/
         * @throws {RequiredError}
         */
        createClient(requestParameters: ClientManagementApiCreateClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<ClientResponse> {
            return localVarFp.createClient(requestParameters.createClientRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes one client from the tenant permanently and answers 200 with an empty body. An administrator may delete any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The authorizations and consents issued for the client are removed too, but that cleanup is driven by a message and completes on the authorization service after this call has already returned. A delete that removes no row answers 400. The operation cannot be undone.
         * @summary Delete an OAuth2 client
         * @param {ClientManagementApiDeleteClientRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-client/
         * @throws {RequiredError}
         */
        deleteClient(requestParameters: ClientManagementApiDeleteClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteClient(requestParameters.clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes every client registered in the current tenant and answers 200 with an empty body. Only an administrator may call it - for a plain user or a guest it is refused with 403 - and it removes the clients of all users of the tenant, not only those of the caller. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
         * @summary Delete all tenant OAuth2 clients
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteTenantClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-tenant-clients/
         * @throws {RequiredError}
         */
        deleteTenantClients(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteTenantClients(options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes every client the calling user created in the current tenant and answers 200 with an empty body. The caller\'s own identity always selects the set, so this never reaches clients created by somebody else, not even for an administrator. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
         * @summary Delete all user OAuth2 clients
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteUserClients operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-user-clients/
         * @throws {RequiredError}
         */
        deleteUserClients(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteUserClients(options).then((request) => request(axios, basePath));
        },
        /**
         * Issues a new secret for the client and returns it. The previous secret stops working as soon as this call succeeds, there is no grace period and no way to recover it, so every deployed copy of the client has to be updated with the value returned here. An administrator may do this for any client of the tenant, a plain user only for the clients they created. Tokens already issued to the client keep working; only future client authentication is affected. The response carries the new secret and nothing else.
         * @summary Regenerate client secret
         * @param {ClientManagementApiRegenerateSecretRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for regenerateSecret operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/regenerate-secret/
         * @throws {RequiredError}
         */
        regenerateSecret(requestParameters: ClientManagementApiRegenerateSecretRequest, options?: RawAxiosRequestConfig): AxiosPromise<ClientSecretResponse> {
            return localVarFp.regenerateSecret(requestParameters.clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes the calling user\'s own consent for one client and answers 200 with an empty body. It touches only the caller\'s grant: other users keep their consents and the client itself stays registered. Guests may call it as well as users and administrators, because it can never reach anyone else\'s data. The revocation is carried out by the authorization service over gRPC, so a service that reports nothing was revoked produces 400 and a service that cannot be reached produces 503. Once it succeeds the user has to authorize the client again before it can act on their behalf.
         * @summary Revoke client consent
         * @param {ClientManagementApiRevokeUserClientRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for revokeUserClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/revoke-user-client/
         * @throws {RequiredError}
         */
        revokeUserClient(requestParameters: ClientManagementApiRevokeUserClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.revokeUserClient(requestParameters.clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the mutable settings of an existing client and answers 200 with an empty body. Only the fields carried in the request body change; the client ID, the secret, the tenant and the creator cannot be changed this way. An administrator may update any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The write runs under optimistic locking and is retried a few times, so a request that still loses the race is rejected with 400 instead of silently overwriting a concurrent change. Nothing is returned in the body - read the client back to see the stored result.
         * @summary Update an existing OAuth2 client
         * @param {ClientManagementApiUpdateClientRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateClient operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-client/
         * @throws {RequiredError}
         */
        updateClient(requestParameters: ClientManagementApiUpdateClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateClient(requestParameters.clientId, requestParameters.updateClientRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for changeActivation operation in ClientManagementApi.
 * @export
 * @interface ClientManagementApiChangeActivationRequest
 */
export interface ClientManagementApiChangeActivationRequest {
    /**
     * ID of the client to change activation for
     * @type {string}
     * @memberof ClientManagementApiChangeActivation
     */
    readonly clientId: string

    /**
     * 
     * @type {ChangeClientActivationRequest}
     * @memberof ClientManagementApiChangeActivation
     */
    readonly changeClientActivationRequest: ChangeClientActivationRequest
}

/**
 * Request parameters for createClient operation in ClientManagementApi.
 * @export
 * @interface ClientManagementApiCreateClientRequest
 */
export interface ClientManagementApiCreateClientRequest {
    /**
     * 
     * @type {CreateClientRequest}
     * @memberof ClientManagementApiCreateClient
     */
    readonly createClientRequest: CreateClientRequest
}

/**
 * Request parameters for deleteClient operation in ClientManagementApi.
 * @export
 * @interface ClientManagementApiDeleteClientRequest
 */
export interface ClientManagementApiDeleteClientRequest {
    /**
     * ID of the client to delete
     * @type {string}
     * @memberof ClientManagementApiDeleteClient
     */
    readonly clientId: string
}

/**
 * Request parameters for regenerateSecret operation in ClientManagementApi.
 * @export
 * @interface ClientManagementApiRegenerateSecretRequest
 */
export interface ClientManagementApiRegenerateSecretRequest {
    /**
     * ID of the client to regenerate secret for
     * @type {string}
     * @memberof ClientManagementApiRegenerateSecret
     */
    readonly clientId: string
}

/**
 * Request parameters for revokeUserClient operation in ClientManagementApi.
 * @export
 * @interface ClientManagementApiRevokeUserClientRequest
 */
export interface ClientManagementApiRevokeUserClientRequest {
    /**
     * ID of the client to revoke consent for
     * @type {string}
     * @memberof ClientManagementApiRevokeUserClient
     */
    readonly clientId: string
}

/**
 * Request parameters for updateClient operation in ClientManagementApi.
 * @export
 * @interface ClientManagementApiUpdateClientRequest
 */
export interface ClientManagementApiUpdateClientRequest {
    /**
     * ID of the client to update
     * @type {string}
     * @memberof ClientManagementApiUpdateClient
     */
    readonly clientId: string

    /**
     * 
     * @type {UpdateClientRequest}
     * @memberof ClientManagementApiUpdateClient
     */
    readonly updateClientRequest: UpdateClientRequest
}

/**
 * ClientManagementApi - object-oriented interface
 * @export
 * @class ClientManagementApi
 * @extends {BaseAPI}
 */
export class ClientManagementApi extends BaseAPI {
    /**
     * Enables or disables an existing client and answers 200 with an empty body. A disabled client can no longer obtain new tokens, but the tokens and consents it already holds stay valid until they expire on their own: disable a client to stop new authorizations, delete it to end the existing ones. An administrator may change any client of the tenant, a plain user only the clients they created. The body carries the single activation flag, and a client the caller may not see is reported as not found rather than as forbidden.
     * @summary Change client activation status
     * @param {OAuth20ClientManagementApiChangeActivationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public changeActivation(requestParameters: ClientManagementApiChangeActivationRequest, options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).changeActivation(requestParameters.clientId, requestParameters.changeClientActivationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Registers a new OAuth2 client in the caller\'s tenant and returns it. The body must carry a name, a description, a logo and at least one redirect URI, allowed origin and scope, and every scope named must already exist in the tenant\'s scope catalogue. Administrators and users may both register clients; the caller is recorded as the creator, which is what later restricts a plain user to the clients they created. The response is the stored client with its generated client ID and secret, and it is the first place either value can be read. Some deployments cap how many clients one tenant may hold, and reaching that cap is reported as 400 together with the validation failures.
     * @summary Create a new OAuth2 client
     * @param {OAuth20ClientManagementApiCreateClientRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public createClient(requestParameters: ClientManagementApiCreateClientRequest, options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).createClient(requestParameters.createClientRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes one client from the tenant permanently and answers 200 with an empty body. An administrator may delete any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The authorizations and consents issued for the client are removed too, but that cleanup is driven by a message and completes on the authorization service after this call has already returned. A delete that removes no row answers 400. The operation cannot be undone.
     * @summary Delete an OAuth2 client
     * @param {OAuth20ClientManagementApiDeleteClientRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public deleteClient(requestParameters: ClientManagementApiDeleteClientRequest, options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).deleteClient(requestParameters.clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes every client registered in the current tenant and answers 200 with an empty body. Only an administrator may call it - for a plain user or a guest it is refused with 403 - and it removes the clients of all users of the tenant, not only those of the caller. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
     * @summary Delete all tenant OAuth2 clients
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public deleteTenantClients(options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).deleteTenantClients(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes every client the calling user created in the current tenant and answers 200 with an empty body. The caller\'s own identity always selects the set, so this never reaches clients created by somebody else, not even for an administrator. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant\'s client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.
     * @summary Delete all user OAuth2 clients
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public deleteUserClients(options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).deleteUserClients(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Issues a new secret for the client and returns it. The previous secret stops working as soon as this call succeeds, there is no grace period and no way to recover it, so every deployed copy of the client has to be updated with the value returned here. An administrator may do this for any client of the tenant, a plain user only for the clients they created. Tokens already issued to the client keep working; only future client authentication is affected. The response carries the new secret and nothing else.
     * @summary Regenerate client secret
     * @param {OAuth20ClientManagementApiRegenerateSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public regenerateSecret(requestParameters: ClientManagementApiRegenerateSecretRequest, options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).regenerateSecret(requestParameters.clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Revokes the calling user\'s own consent for one client and answers 200 with an empty body. It touches only the caller\'s grant: other users keep their consents and the client itself stays registered. Guests may call it as well as users and administrators, because it can never reach anyone else\'s data. The revocation is carried out by the authorization service over gRPC, so a service that reports nothing was revoked produces 400 and a service that cannot be reached produces 503. Once it succeeds the user has to authorize the client again before it can act on their behalf.
     * @summary Revoke client consent
     * @param {OAuth20ClientManagementApiRevokeUserClientRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public revokeUserClient(requestParameters: ClientManagementApiRevokeUserClientRequest, options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).revokeUserClient(requestParameters.clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the mutable settings of an existing client and answers 200 with an empty body. Only the fields carried in the request body change; the client ID, the secret, the tenant and the creator cannot be changed this way. An administrator may update any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The write runs under optimistic locking and is retried a few times, so a request that still loses the race is rejected with 400 instead of silently overwriting a concurrent change. Nothing is returned in the body - read the client back to see the stored result.
     * @summary Update an existing OAuth2 client
     * @param {OAuth20ClientManagementApiUpdateClientRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientManagementApi
     */
    public updateClient(requestParameters: ClientManagementApiUpdateClientRequest, options?: RawAxiosRequestConfig) {
        return ClientManagementApiFp(this.configuration).updateClient(requestParameters.clientId, requestParameters.updateClientRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

