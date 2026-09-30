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
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { QuotaSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { TenantAiAgentQuotaSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantQuotaSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { TenantQuotaSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantRoomQuotaSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantUserQuotaSettingsWrapper } from '../../models';
/**
 * SettingsQuotaApi - axios parameter creator
 * @export
 */
export const SettingsQuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the portal\'s per-user default storage quota: whether it is enabled and, if so, its size in bytes.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other authenticated role, and an  anonymous caller, is refused. This is a read-only, idempotent call. When `enableQuota` is false, the size  value is not enforced and users get unlimited personal storage regardless of what it holds. The response  supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified`  value, and an unchanged response comes back empty instead of resending the settings.
         * @summary Get the user quota settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-quota-settings/
         */
        getUserQuotaSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/userquotasettings`;
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
         * Sets the portal\'s default storage quota for AI agents, applied as the starting limit for newly created agents.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new agents. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not any agent\'s current usage.
         * @summary Save the AI Agent quota settings
         * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAiAgentQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ai-agent-quota-settings/
         */
        saveAiAgentQuotaSettings: async (quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/aiagentquotasettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(quotaSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the portal\'s default per-room storage quota, applied to newly created rooms as their starting limit.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new rooms. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not the individual rooms\' current usage.
         * @summary Save the room quota settings
         * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveRoomQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-room-quota-settings/
         */
        saveRoomQuotaSettings: async (quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/roomquotasettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(quotaSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets or removes the storage quota for a given tenant. Available only on a Standalone (self-hosted)  installation; on SaaS the call is always refused. Requires a DocSpace administrator, and the portal\'s plan  must include the statistics feature or the call is rejected as not covered by the plan. Pass a non-negative  `quota` in bytes to enable the limit for the tenant identified by `tenantId`, or a negative value to remove  any limit. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved quota settings for that tenant, not its current usage.
         * @summary Save the tenant quota settings
         * @param {TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-quota-settings/
         */
        setTenantQuotaSettings: async (tenantQuotaSettingsRequestsDto?: TenantQuotaSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tenantquotasettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantQuotaSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsQuotaApi - functional programming interface
 * @export
 */
export const SettingsQuotaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsQuotaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the portal\'s per-user default storage quota: whether it is enabled and, if so, its size in bytes.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other authenticated role, and an  anonymous caller, is refused. This is a read-only, idempotent call. When `enableQuota` is false, the size  value is not enforced and users get unlimited personal storage regardless of what it holds. The response  supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified`  value, and an unchanged response comes back empty instead of resending the settings.
         * @summary Get the user quota settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-quota-settings/
         */
        async getUserQuotaSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantUserQuotaSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserQuotaSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsQuotaApi.getUserQuotaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the portal\'s default storage quota for AI agents, applied as the starting limit for newly created agents.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new agents. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not any agent\'s current usage.
         * @summary Save the AI Agent quota settings
         * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAiAgentQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ai-agent-quota-settings/
         */
        async saveAiAgentQuotaSettings(quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAiAgentQuotaSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveAiAgentQuotaSettings(quotaSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsQuotaApi.saveAiAgentQuotaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the portal\'s default per-room storage quota, applied to newly created rooms as their starting limit.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new rooms. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not the individual rooms\' current usage.
         * @summary Save the room quota settings
         * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveRoomQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-room-quota-settings/
         */
        async saveRoomQuotaSettings(quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantRoomQuotaSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveRoomQuotaSettings(quotaSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsQuotaApi.saveRoomQuotaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets or removes the storage quota for a given tenant. Available only on a Standalone (self-hosted)  installation; on SaaS the call is always refused. Requires a DocSpace administrator, and the portal\'s plan  must include the statistics feature or the call is rejected as not covered by the plan. Pass a non-negative  `quota` in bytes to enable the limit for the tenant identified by `tenantId`, or a negative value to remove  any limit. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved quota settings for that tenant, not its current usage.
         * @summary Save the tenant quota settings
         * @param {TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-quota-settings/
         */
        async setTenantQuotaSettings(tenantQuotaSettingsRequestsDto?: TenantQuotaSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantQuotaSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTenantQuotaSettings(tenantQuotaSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsQuotaApi.setTenantQuotaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsQuotaApi - factory interface
 * @export
 */
export const SettingsQuotaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsQuotaApiFp(configuration)
    return {
        /**
         * Returns the portal\'s per-user default storage quota: whether it is enabled and, if so, its size in bytes.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other authenticated role, and an  anonymous caller, is refused. This is a read-only, idempotent call. When `enableQuota` is false, the size  value is not enforced and users get unlimited personal storage regardless of what it holds. The response  supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified`  value, and an unchanged response comes back empty instead of resending the settings.
         * @summary Get the user quota settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-quota-settings/
         * @throws {RequiredError}
         */
        getUserQuotaSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantUserQuotaSettingsWrapper> {
            return localVarFp.getUserQuotaSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the portal\'s default storage quota for AI agents, applied as the starting limit for newly created agents.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new agents. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not any agent\'s current usage.
         * @summary Save the AI Agent quota settings
         * @param {SettingsQuotaApiSaveAiAgentQuotaSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveAiAgentQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ai-agent-quota-settings/
         * @throws {RequiredError}
         */
        saveAiAgentQuotaSettings(requestParameters: SettingsQuotaApiSaveAiAgentQuotaSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantAiAgentQuotaSettingsWrapper> {
            return localVarFp.saveAiAgentQuotaSettings(requestParameters.quotaSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the portal\'s default per-room storage quota, applied to newly created rooms as their starting limit.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new rooms. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not the individual rooms\' current usage.
         * @summary Save the room quota settings
         * @param {SettingsQuotaApiSaveRoomQuotaSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveRoomQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-room-quota-settings/
         * @throws {RequiredError}
         */
        saveRoomQuotaSettings(requestParameters: SettingsQuotaApiSaveRoomQuotaSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantRoomQuotaSettingsWrapper> {
            return localVarFp.saveRoomQuotaSettings(requestParameters.quotaSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets or removes the storage quota for a given tenant. Available only on a Standalone (self-hosted)  installation; on SaaS the call is always refused. Requires a DocSpace administrator, and the portal\'s plan  must include the statistics feature or the call is rejected as not covered by the plan. Pass a non-negative  `quota` in bytes to enable the limit for the tenant identified by `tenantId`, or a negative value to remove  any limit. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved quota settings for that tenant, not its current usage.
         * @summary Save the tenant quota settings
         * @param {SettingsQuotaApiSetTenantQuotaSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-quota-settings/
         * @throws {RequiredError}
         */
        setTenantQuotaSettings(requestParameters: SettingsQuotaApiSetTenantQuotaSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantQuotaSettingsWrapper> {
            return localVarFp.setTenantQuotaSettings(requestParameters.tenantQuotaSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for saveAiAgentQuotaSettings operation in SettingsQuotaApi.
 * @export
 * @interface SettingsQuotaApiSaveAiAgentQuotaSettingsRequest
 */
export interface SettingsQuotaApiSaveAiAgentQuotaSettingsRequest {
    /**
     * 
     * @type {QuotaSettingsRequestsDto}
     * @memberof SettingsQuotaApiSaveAiAgentQuotaSettings
     */
    readonly quotaSettingsRequestsDto?: QuotaSettingsRequestsDto
}

/**
 * Request parameters for saveRoomQuotaSettings operation in SettingsQuotaApi.
 * @export
 * @interface SettingsQuotaApiSaveRoomQuotaSettingsRequest
 */
export interface SettingsQuotaApiSaveRoomQuotaSettingsRequest {
    /**
     * 
     * @type {QuotaSettingsRequestsDto}
     * @memberof SettingsQuotaApiSaveRoomQuotaSettings
     */
    readonly quotaSettingsRequestsDto?: QuotaSettingsRequestsDto
}

/**
 * Request parameters for setTenantQuotaSettings operation in SettingsQuotaApi.
 * @export
 * @interface SettingsQuotaApiSetTenantQuotaSettingsRequest
 */
export interface SettingsQuotaApiSetTenantQuotaSettingsRequest {
    /**
     * 
     * @type {TenantQuotaSettingsRequestsDto}
     * @memberof SettingsQuotaApiSetTenantQuotaSettings
     */
    readonly tenantQuotaSettingsRequestsDto?: TenantQuotaSettingsRequestsDto
}

/**
 * SettingsQuotaApi - object-oriented interface
 * @export
 * @class SettingsQuotaApi
 * @extends {BaseAPI}
 */
export class SettingsQuotaApi extends BaseAPI {
    /**
     * Returns the portal\'s per-user default storage quota: whether it is enabled and, if so, its size in bytes.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other authenticated role, and an  anonymous caller, is refused. This is a read-only, idempotent call. When `enableQuota` is false, the size  value is not enforced and users get unlimited personal storage regardless of what it holds. The response  supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified`  value, and an unchanged response comes back empty instead of resending the settings.
     * @summary Get the user quota settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsQuotaApi
     */
    public getUserQuotaSettings(options?: RawAxiosRequestConfig) {
        return SettingsQuotaApiFp(this.configuration).getUserQuotaSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the portal\'s default storage quota for AI agents, applied as the starting limit for newly created agents.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new agents. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not any agent\'s current usage.
     * @summary Save the AI Agent quota settings
     * @param {SettingsQuotaApiSaveAiAgentQuotaSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsQuotaApi
     */
    public saveAiAgentQuotaSettings(requestParameters: SettingsQuotaApiSaveAiAgentQuotaSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsQuotaApiFp(this.configuration).saveAiAgentQuotaSettings(requestParameters.quotaSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the portal\'s default per-room storage quota, applied to newly created rooms as their starting limit.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new rooms. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not the individual rooms\' current usage.
     * @summary Save the room quota settings
     * @param {SettingsQuotaApiSaveRoomQuotaSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsQuotaApi
     */
    public saveRoomQuotaSettings(requestParameters: SettingsQuotaApiSaveRoomQuotaSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsQuotaApiFp(this.configuration).saveRoomQuotaSettings(requestParameters.quotaSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets or removes the storage quota for a given tenant. Available only on a Standalone (self-hosted)  installation; on SaaS the call is always refused. Requires a DocSpace administrator, and the portal\'s plan  must include the statistics feature or the call is rejected as not covered by the plan. Pass a non-negative  `quota` in bytes to enable the limit for the tenant identified by `tenantId`, or a negative value to remove  any limit. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved quota settings for that tenant, not its current usage.
     * @summary Save the tenant quota settings
     * @param {SettingsQuotaApiSetTenantQuotaSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsQuotaApi
     */
    public setTenantQuotaSettings(requestParameters: SettingsQuotaApiSetTenantQuotaSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsQuotaApiFp(this.configuration).setTenantQuotaSettings(requestParameters.tenantQuotaSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

