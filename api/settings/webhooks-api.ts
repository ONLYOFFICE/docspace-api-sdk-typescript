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
import type { CreateWebhooksConfigRequestsDto } from '../../models';
// @ts-ignore
import type { UnknownWrapper } from '../../models';
// @ts-ignore
import type { UpdateWebhooksConfigRequestsDto } from '../../models';
// @ts-ignore
import type { WebhookGroupStatus } from '../../models';
// @ts-ignore
import type { WebhookRetryRequestsDto } from '../../models';
// @ts-ignore
import type { WebhookTrigger } from '../../models';
// @ts-ignore
import type { WebhooksConfigWithStatusArrayWrapper } from '../../models';
// @ts-ignore
import type { WebhooksConfigWrapper } from '../../models';
// @ts-ignore
import type { WebhooksLogArrayWrapper } from '../../models';
// @ts-ignore
import type { WebhooksLogWrapper } from '../../models';
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new tenant webhook with the parameters specified in the request.
         * @summary Create a webhook
         * @param {CreateWebhooksConfigRequestsDto} [createWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-webhook/
         */
        createWebhook: async (createWebhooksConfigRequestsDto?: CreateWebhooksConfigRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webhook`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createWebhooksConfigRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Enables or disables a tenant webhook with the parameters specified in the request.
         * @summary Enable a webhook
         * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for enableWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-webhook/
         */
        enableWebhook: async (updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webhook/enable`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateWebhooksConfigRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of the tenant webhooks.
         * @summary Get webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-webhooks/
         */
        getTenantWebhooks: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webhook`;
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
         * Returns a list of triggers for a webhook.
         * @summary Get webhook triggers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhookTriggers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhook-triggers/
         */
        getWebhookTriggers: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webhook/triggers`;
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
         * Returns the logs of the webhook activities.
         * @summary Get webhook logs
         * @param {string} [deliveryFrom] The delivery start time for filtering webhook logs.
         * @param {string} [deliveryTo] The delivery end time for filtering webhook logs.
         * @param {string} [hookUri] The destination URL where webhooks are delivered.
         * @param {number} [configId] The webhook configuration identifier.
         * @param {number} [eventId] The unique identifier of the event that triggered the webhook.
         * @param {WebhookGroupStatus} [groupStatus] The status of the webhook delivery group.
         * @param {string} [userId] The identifier of the user associated with the webhook event.
         * @param {WebhookTrigger} [trigger] The type of event that triggered the webhook.
         * @param {number} [count] The maximum number of webhook log records to return in the query response.
         * @param {number} [startIndex] Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhooksLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhooks-logs/
         */
        getWebhooksLogs: async (deliveryFrom?: string, deliveryTo?: string, hookUri?: string, configId?: number, eventId?: number, groupStatus?: WebhookGroupStatus, userId?: string, trigger?: WebhookTrigger, count?: number, startIndex?: number, fields?: string | null, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webhooks/log`;
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

            if (deliveryFrom !== undefined) {
                localVarQueryParameter['deliveryFrom'] = (deliveryFrom as any instanceof Date) ?
                    (deliveryFrom as any).toISOString() :
                    deliveryFrom;
            }

            if (deliveryTo !== undefined) {
                localVarQueryParameter['deliveryTo'] = (deliveryTo as any instanceof Date) ?
                    (deliveryTo as any).toISOString() :
                    deliveryTo;
            }

            if (hookUri !== undefined) {
                localVarQueryParameter['hookUri'] = hookUri;
            }

            if (configId !== undefined) {
                localVarQueryParameter['configId'] = configId;
            }

            if (eventId !== undefined) {
                localVarQueryParameter['eventId'] = eventId;
            }

            if (groupStatus !== undefined) {
                localVarQueryParameter['groupStatus'] = groupStatus;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (trigger !== undefined) {
                localVarQueryParameter['trigger'] = trigger;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
         * Removes a tenant webhook with the ID specified in the request.
         * @summary Remove a webhook
         * @param {number} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-webhook/
         */
        removeWebhook: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeWebhook', 'id', id)
            const localVarPath = `/api/2.0/settings/webhook/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retries a webhook with the ID specified in the request.
         * @summary Retry a webhook
         * @param {number} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhook/
         */
        retryWebhook: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('retryWebhook', 'id', id)
            const localVarPath = `/api/2.0/settings/webhook/{id}/retry`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retries all the webhooks with the IDs specified in the request.
         * @summary Retry webhooks
         * @param {WebhookRetryRequestsDto} [webhookRetryRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhooks/
         */
        retryWebhooks: async (webhookRetryRequestsDto?: WebhookRetryRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webhook/retry`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webhookRetryRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a tenant webhook with the parameters specified in the request.
         * @summary Update a webhook
         * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-webhook/
         */
        updateWebhook: async (updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/webhook`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateWebhooksConfigRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new tenant webhook with the parameters specified in the request.
         * @summary Create a webhook
         * @param {CreateWebhooksConfigRequestsDto} [createWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-webhook/
         */
        async createWebhook(createWebhooksConfigRequestsDto?: CreateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWebhook(createWebhooksConfigRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.createWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Enables or disables a tenant webhook with the parameters specified in the request.
         * @summary Enable a webhook
         * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for enableWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-webhook/
         */
        async enableWebhook(updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableWebhook(updateWebhooksConfigRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.enableWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of the tenant webhooks.
         * @summary Get webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-webhooks/
         */
        async getTenantWebhooks(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWithStatusArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantWebhooks(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.getTenantWebhooks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of triggers for a webhook.
         * @summary Get webhook triggers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhookTriggers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhook-triggers/
         */
        async getWebhookTriggers(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnknownWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebhookTriggers(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.getWebhookTriggers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the logs of the webhook activities.
         * @summary Get webhook logs
         * @param {string} [deliveryFrom] The delivery start time for filtering webhook logs.
         * @param {string} [deliveryTo] The delivery end time for filtering webhook logs.
         * @param {string} [hookUri] The destination URL where webhooks are delivered.
         * @param {number} [configId] The webhook configuration identifier.
         * @param {number} [eventId] The unique identifier of the event that triggered the webhook.
         * @param {WebhookGroupStatus} [groupStatus] The status of the webhook delivery group.
         * @param {string} [userId] The identifier of the user associated with the webhook event.
         * @param {WebhookTrigger} [trigger] The type of event that triggered the webhook.
         * @param {number} [count] The maximum number of webhook log records to return in the query response.
         * @param {number} [startIndex] Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhooksLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhooks-logs/
         */
        async getWebhooksLogs(deliveryFrom?: string, deliveryTo?: string, hookUri?: string, configId?: number, eventId?: number, groupStatus?: WebhookGroupStatus, userId?: string, trigger?: WebhookTrigger, count?: number, startIndex?: number, fields?: string | null, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksLogArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebhooksLogs(deliveryFrom, deliveryTo, hookUri, configId, eventId, groupStatus, userId, trigger, count, startIndex, fields, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.getWebhooksLogs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a tenant webhook with the ID specified in the request.
         * @summary Remove a webhook
         * @param {number} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-webhook/
         */
        async removeWebhook(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeWebhook(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.removeWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retries a webhook with the ID specified in the request.
         * @summary Retry a webhook
         * @param {number} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhook/
         */
        async retryWebhook(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksLogWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retryWebhook(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.retryWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retries all the webhooks with the IDs specified in the request.
         * @summary Retry webhooks
         * @param {WebhookRetryRequestsDto} [webhookRetryRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhooks/
         */
        async retryWebhooks(webhookRetryRequestsDto?: WebhookRetryRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksLogArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retryWebhooks(webhookRetryRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.retryWebhooks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a tenant webhook with the parameters specified in the request.
         * @summary Update a webhook
         * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-webhook/
         */
        async updateWebhook(updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(updateWebhooksConfigRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.updateWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * Creates a new tenant webhook with the parameters specified in the request.
         * @summary Create a webhook
         * @param {CreateWebhooksConfigRequestsDto} [createWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-webhook/
         * @throws {RequiredError}
         */
        createWebhook(createWebhooksConfigRequestsDto?: CreateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.createWebhook(createWebhooksConfigRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Enables or disables a tenant webhook with the parameters specified in the request.
         * @summary Enable a webhook
         * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for enableWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-webhook/
         * @throws {RequiredError}
         */
        enableWebhook(updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.enableWebhook(updateWebhooksConfigRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of the tenant webhooks.
         * @summary Get webhooks
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-webhooks/
         * @throws {RequiredError}
         */
        getTenantWebhooks(options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWithStatusArrayWrapper> {
            return localVarFp.getTenantWebhooks(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of triggers for a webhook.
         * @summary Get webhook triggers
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebhookTriggers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhook-triggers/
         * @throws {RequiredError}
         */
        getWebhookTriggers(options?: RawAxiosRequestConfig): AxiosPromise<UnknownWrapper> {
            return localVarFp.getWebhookTriggers(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the logs of the webhook activities.
         * @summary Get webhook logs
         * @param {string} [deliveryFrom] The delivery start time for filtering webhook logs.
         * @param {string} [deliveryTo] The delivery end time for filtering webhook logs.
         * @param {string} [hookUri] The destination URL where webhooks are delivered.
         * @param {number} [configId] The webhook configuration identifier.
         * @param {number} [eventId] The unique identifier of the event that triggered the webhook.
         * @param {WebhookGroupStatus} [groupStatus] The status of the webhook delivery group.
         * @param {string} [userId] The identifier of the user associated with the webhook event.
         * @param {WebhookTrigger} [trigger] The type of event that triggered the webhook.
         * @param {number} [count] The maximum number of webhook log records to return in the query response.
         * @param {number} [startIndex] Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebhooksLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhooks-logs/
         * @throws {RequiredError}
         */
        getWebhooksLogs(deliveryFrom?: string, deliveryTo?: string, hookUri?: string, configId?: number, eventId?: number, groupStatus?: WebhookGroupStatus, userId?: string, trigger?: WebhookTrigger, count?: number, startIndex?: number, fields?: string | null, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksLogArrayWrapper> {
            return localVarFp.getWebhooksLogs(deliveryFrom, deliveryTo, hookUri, configId, eventId, groupStatus, userId, trigger, count, startIndex, fields, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a tenant webhook with the ID specified in the request.
         * @summary Remove a webhook
         * @param {number} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for removeWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-webhook/
         * @throws {RequiredError}
         */
        removeWebhook(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.removeWebhook(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retries a webhook with the ID specified in the request.
         * @summary Retry a webhook
         * @param {number} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for retryWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhook/
         * @throws {RequiredError}
         */
        retryWebhook(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksLogWrapper> {
            return localVarFp.retryWebhook(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retries all the webhooks with the IDs specified in the request.
         * @summary Retry webhooks
         * @param {WebhookRetryRequestsDto} [webhookRetryRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for retryWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhooks/
         * @throws {RequiredError}
         */
        retryWebhooks(webhookRetryRequestsDto?: WebhookRetryRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksLogArrayWrapper> {
            return localVarFp.retryWebhooks(webhookRetryRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a tenant webhook with the parameters specified in the request.
         * @summary Update a webhook
         * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-webhook/
         * @throws {RequiredError}
         */
        updateWebhook(updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.updateWebhook(updateWebhooksConfigRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export class WebhooksApi extends BaseAPI {
    /**
     * Creates a new tenant webhook with the parameters specified in the request.
     * @summary Create a webhook
     * @param {CreateWebhooksConfigRequestsDto} [createWebhooksConfigRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public createWebhook(createWebhooksConfigRequestsDto?: CreateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).createWebhook(createWebhooksConfigRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Enables or disables a tenant webhook with the parameters specified in the request.
     * @summary Enable a webhook
     * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public enableWebhook(updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).enableWebhook(updateWebhooksConfigRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of the tenant webhooks.
     * @summary Get webhooks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getTenantWebhooks(options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).getTenantWebhooks(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of triggers for a webhook.
     * @summary Get webhook triggers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getWebhookTriggers(options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).getWebhookTriggers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the logs of the webhook activities.
     * @summary Get webhook logs
     * @param {string} [deliveryFrom] The delivery start time for filtering webhook logs.
     * @param {string} [deliveryTo] The delivery end time for filtering webhook logs.
     * @param {string} [hookUri] The destination URL where webhooks are delivered.
     * @param {number} [configId] The webhook configuration identifier.
     * @param {number} [eventId] The unique identifier of the event that triggered the webhook.
     * @param {WebhookGroupStatus} [groupStatus] The status of the webhook delivery group.
     * @param {string} [userId] The identifier of the user associated with the webhook event.
     * @param {WebhookTrigger} [trigger] The type of event that triggered the webhook.
     * @param {number} [count] The maximum number of webhook log records to return in the query response.
     * @param {number} [startIndex] Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries.
     * @param {string | null} [fields] Comma-separated list of fields to include in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getWebhooksLogs(deliveryFrom?: string, deliveryTo?: string, hookUri?: string, configId?: number, eventId?: number, groupStatus?: WebhookGroupStatus, userId?: string, trigger?: WebhookTrigger, count?: number, startIndex?: number, fields?: string | null, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).getWebhooksLogs(deliveryFrom, deliveryTo, hookUri, configId, eventId, groupStatus, userId, trigger, count, startIndex, fields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a tenant webhook with the ID specified in the request.
     * @summary Remove a webhook
     * @param {number} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public removeWebhook(id: number, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).removeWebhook(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retries a webhook with the ID specified in the request.
     * @summary Retry a webhook
     * @param {number} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public retryWebhook(id: number, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).retryWebhook(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retries all the webhooks with the IDs specified in the request.
     * @summary Retry webhooks
     * @param {WebhookRetryRequestsDto} [webhookRetryRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public retryWebhooks(webhookRetryRequestsDto?: WebhookRetryRequestsDto, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).retryWebhooks(webhookRetryRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a tenant webhook with the parameters specified in the request.
     * @summary Update a webhook
     * @param {UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public updateWebhook(updateWebhooksConfigRequestsDto?: UpdateWebhooksConfigRequestsDto, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).updateWebhook(updateWebhooksConfigRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

