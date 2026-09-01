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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { DocsCloudConfig } from '../../models';
// @ts-ignore
import type { DocsCloudConfigWrapper } from '../../models';
// @ts-ignore
import type { DocsCloudDevPackRequestDto } from '../../models';
// @ts-ignore
import type { DocsCloudQuotaWrapper } from '../../models';
// @ts-ignore
import type { DocsCloudTenantInfoWrapper } from '../../models';
// @ts-ignore
import type { DocsCloudTenantWrapper } from '../../models';
// @ts-ignore
import type { DocsCloudUsageWrapper } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { PaymentCalculationWrapper } from '../../models';
/**
 * DocsCloudApi - axios parameter creator
 * @export
 */
export const DocsCloudApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Calculates the top-up cost of switching the current DocsCloud subscription to DocsCloudDevPack,  without making any changes. The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
         * @summary Calculate the DocsCloud subscription switch cost
         * @param {DocsCloudDevPackRequestDto} [docsCloudDevPackRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for calculateDevPack operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-dev-pack/
         */
        calculateDevPack: async (docsCloudDevPackRequestDto?: DocsCloudDevPackRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/calculatedevpack`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(docsCloudDevPackRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts generating the DocsCloud user quota report as an xlsx file and saves it in My Documents.
         * @summary Start the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-tenant-quota-report/
         */
        createTenantQuotaReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/quota/report`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the DocsCloud tenant of the current portal.
         * @summary Get the DocsCloud tenant
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the tenant from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenant operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant/
         */
        getTenant: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant`;
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

            if (refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
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
         * Returns the DocsCloud tenant configuration of the current portal.
         * @summary Get the DocsCloud tenant configuration
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the tenant configuration from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-config/
         */
        getTenantConfig: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/config`;
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

            if (refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
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
         * Returns the DocsCloud license and server information with usage statistics of the current portal.
         * @summary Get the DocsCloud tenant information
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the tenant information from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-info/
         */
        getTenantInfo: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/info`;
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

            if (refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
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
         * Returns the DocsCloud user quota (active users) of the current portal.
         * @summary Get the DocsCloud tenant quota
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the user quota from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota/
         */
        getTenantQuota: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/quota`;
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

            if (refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
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
         * Returns the status of generating the DocsCloud user quota report.
         * @summary Get the status of the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota-report/
         */
        getTenantQuotaReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/quota/report`;
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
         * Returns the DocsCloud usage statistics of the current portal.
         * @summary Get the DocsCloud tenant usage
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the usage statistics from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-usage/
         */
        getTenantUsage: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/usage`;
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

            if (refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
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
         * Starts the DocsCloud trial.
         * @summary Start the DocsCloud trial
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startDocsCloudTrial operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-docs-cloud-trial/
         */
        startDocsCloudTrial: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/trial`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Switches the current DocsCloud subscription to DocsCloudDevPack: charges the price difference  from the wallet and transfers the subscription (with its license) to the target product.  The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
         * @summary Switch the DocsCloud subscription to DocsCloudDevPack
         * @param {DocsCloudDevPackRequestDto} [docsCloudDevPackRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for switchToDevPack operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/switch-to-dev-pack/
         */
        switchToDevPack: async (docsCloudDevPackRequestDto?: DocsCloudDevPackRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/switchtodevpack`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(docsCloudDevPackRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Terminates generating the DocsCloud user quota report.
         * @summary Terminate the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tenant-quota-report/
         */
        terminateTenantQuotaReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/quota/report`;
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
         * Updates the DocsCloud tenant configuration of the current portal with the parameters specified in the request.
         * @summary Update the DocsCloud tenant configuration
         * @param {DocsCloudConfig} [docsCloudConfig] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTenantConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tenant-config/
         */
        updateTenantConfig: async (docsCloudConfig?: DocsCloudConfig, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/docscloud/tenant/config`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(docsCloudConfig, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocsCloudApi - functional programming interface
 * @export
 */
export const DocsCloudApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocsCloudApiAxiosParamCreator(configuration)
    return {
        /**
         * Calculates the top-up cost of switching the current DocsCloud subscription to DocsCloudDevPack,  without making any changes. The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
         * @summary Calculate the DocsCloud subscription switch cost
         * @param {DocsCloudDevPackRequestDto} [docsCloudDevPackRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for calculateDevPack operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-dev-pack/
         */
        async calculateDevPack(docsCloudDevPackRequestDto?: DocsCloudDevPackRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentCalculationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.calculateDevPack(docsCloudDevPackRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.calculateDevPack']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts generating the DocsCloud user quota report as an xlsx file and saves it in My Documents.
         * @summary Start the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-tenant-quota-report/
         */
        async createTenantQuotaReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTenantQuotaReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.createTenantQuotaReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the DocsCloud tenant of the current portal.
         * @summary Get the DocsCloud tenant
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the tenant from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenant operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant/
         */
        async getTenant(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocsCloudTenantWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenant(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.getTenant']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the DocsCloud tenant configuration of the current portal.
         * @summary Get the DocsCloud tenant configuration
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the tenant configuration from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-config/
         */
        async getTenantConfig(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocsCloudConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantConfig(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.getTenantConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the DocsCloud license and server information with usage statistics of the current portal.
         * @summary Get the DocsCloud tenant information
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the tenant information from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-info/
         */
        async getTenantInfo(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocsCloudTenantInfoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantInfo(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.getTenantInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the DocsCloud user quota (active users) of the current portal.
         * @summary Get the DocsCloud tenant quota
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the user quota from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota/
         */
        async getTenantQuota(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocsCloudQuotaWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantQuota(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.getTenantQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the status of generating the DocsCloud user quota report.
         * @summary Get the status of the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota-report/
         */
        async getTenantQuotaReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantQuotaReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.getTenantQuotaReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the DocsCloud usage statistics of the current portal.
         * @summary Get the DocsCloud tenant usage
         * @param {boolean} [refresh] Specifies whether to bypass the cache and request the usage statistics from DocsCloud again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-usage/
         */
        async getTenantUsage(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocsCloudUsageWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUsage(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.getTenantUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the DocsCloud trial.
         * @summary Start the DocsCloud trial
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startDocsCloudTrial operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-docs-cloud-trial/
         */
        async startDocsCloudTrial(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startDocsCloudTrial(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.startDocsCloudTrial']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches the current DocsCloud subscription to DocsCloudDevPack: charges the price difference  from the wallet and transfers the subscription (with its license) to the target product.  The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
         * @summary Switch the DocsCloud subscription to DocsCloudDevPack
         * @param {DocsCloudDevPackRequestDto} [docsCloudDevPackRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for switchToDevPack operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/switch-to-dev-pack/
         */
        async switchToDevPack(docsCloudDevPackRequestDto?: DocsCloudDevPackRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.switchToDevPack(docsCloudDevPackRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.switchToDevPack']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Terminates generating the DocsCloud user quota report.
         * @summary Terminate the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tenant-quota-report/
         */
        async terminateTenantQuotaReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateTenantQuotaReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.terminateTenantQuotaReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the DocsCloud tenant configuration of the current portal with the parameters specified in the request.
         * @summary Update the DocsCloud tenant configuration
         * @param {DocsCloudConfig} [docsCloudConfig] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTenantConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tenant-config/
         */
        async updateTenantConfig(docsCloudConfig?: DocsCloudConfig, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocsCloudConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTenantConfig(docsCloudConfig, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsCloudApi.updateTenantConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DocsCloudApi - factory interface
 * @export
 */
export const DocsCloudApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocsCloudApiFp(configuration)
    return {
        /**
         * Calculates the top-up cost of switching the current DocsCloud subscription to DocsCloudDevPack,  without making any changes. The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
         * @summary Calculate the DocsCloud subscription switch cost
         * @param {DocsCloudApiCalculateDevPackRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for calculateDevPack operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-dev-pack/
         * @throws {RequiredError}
         */
        calculateDevPack(requestParameters: DocsCloudApiCalculateDevPackRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PaymentCalculationWrapper> {
            return localVarFp.calculateDevPack(requestParameters.docsCloudDevPackRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts generating the DocsCloud user quota report as an xlsx file and saves it in My Documents.
         * @summary Start the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * REST API Reference for createTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-tenant-quota-report/
         * @throws {RequiredError}
         */
        createTenantQuotaReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createTenantQuotaReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the DocsCloud tenant of the current portal.
         * @summary Get the DocsCloud tenant
         * @param {DocsCloudApiGetTenantRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenant operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant/
         * @throws {RequiredError}
         */
        getTenant(requestParameters: DocsCloudApiGetTenantRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocsCloudTenantWrapper> {
            return localVarFp.getTenant(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the DocsCloud tenant configuration of the current portal.
         * @summary Get the DocsCloud tenant configuration
         * @param {DocsCloudApiGetTenantConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-config/
         * @throws {RequiredError}
         */
        getTenantConfig(requestParameters: DocsCloudApiGetTenantConfigRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocsCloudConfigWrapper> {
            return localVarFp.getTenantConfig(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the DocsCloud license and server information with usage statistics of the current portal.
         * @summary Get the DocsCloud tenant information
         * @param {DocsCloudApiGetTenantInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-info/
         * @throws {RequiredError}
         */
        getTenantInfo(requestParameters: DocsCloudApiGetTenantInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocsCloudTenantInfoWrapper> {
            return localVarFp.getTenantInfo(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the DocsCloud user quota (active users) of the current portal.
         * @summary Get the DocsCloud tenant quota
         * @param {DocsCloudApiGetTenantQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota/
         * @throws {RequiredError}
         */
        getTenantQuota(requestParameters: DocsCloudApiGetTenantQuotaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocsCloudQuotaWrapper> {
            return localVarFp.getTenantQuota(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the status of generating the DocsCloud user quota report.
         * @summary Get the status of the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota-report/
         * @throws {RequiredError}
         */
        getTenantQuotaReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getTenantQuotaReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the DocsCloud usage statistics of the current portal.
         * @summary Get the DocsCloud tenant usage
         * @param {DocsCloudApiGetTenantUsageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-usage/
         * @throws {RequiredError}
         */
        getTenantUsage(requestParameters: DocsCloudApiGetTenantUsageRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocsCloudUsageWrapper> {
            return localVarFp.getTenantUsage(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the DocsCloud trial.
         * @summary Start the DocsCloud trial
         * @param {*} [options] Override http request option.
         * REST API Reference for startDocsCloudTrial operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-docs-cloud-trial/
         * @throws {RequiredError}
         */
        startDocsCloudTrial(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.startDocsCloudTrial(options).then((request) => request(axios, basePath));
        },
        /**
         * Switches the current DocsCloud subscription to DocsCloudDevPack: charges the price difference  from the wallet and transfers the subscription (with its license) to the target product.  The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
         * @summary Switch the DocsCloud subscription to DocsCloudDevPack
         * @param {DocsCloudApiSwitchToDevPackRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for switchToDevPack operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/switch-to-dev-pack/
         * @throws {RequiredError}
         */
        switchToDevPack(requestParameters: DocsCloudApiSwitchToDevPackRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.switchToDevPack(requestParameters.docsCloudDevPackRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Terminates generating the DocsCloud user quota report.
         * @summary Terminate the DocsCloud tenant quota report generation
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tenant-quota-report/
         * @throws {RequiredError}
         */
        terminateTenantQuotaReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateTenantQuotaReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the DocsCloud tenant configuration of the current portal with the parameters specified in the request.
         * @summary Update the DocsCloud tenant configuration
         * @param {DocsCloudApiUpdateTenantConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTenantConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tenant-config/
         * @throws {RequiredError}
         */
        updateTenantConfig(requestParameters: DocsCloudApiUpdateTenantConfigRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocsCloudConfigWrapper> {
            return localVarFp.updateTenantConfig(requestParameters.docsCloudConfig, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for calculateDevPack operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiCalculateDevPackRequest
 */
export interface DocsCloudApiCalculateDevPackRequest {
    /**
     * 
     * @type {DocsCloudDevPackRequestDto}
     * @memberof DocsCloudApiCalculateDevPack
     */
    readonly docsCloudDevPackRequestDto?: DocsCloudDevPackRequestDto
}

/**
 * Request parameters for getTenant operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiGetTenantRequest
 */
export interface DocsCloudApiGetTenantRequest {
    /**
     * Specifies whether to bypass the cache and request the tenant from DocsCloud again.
     * @type {boolean}
     * @memberof DocsCloudApiGetTenant
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getTenantConfig operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiGetTenantConfigRequest
 */
export interface DocsCloudApiGetTenantConfigRequest {
    /**
     * Specifies whether to bypass the cache and request the tenant configuration from DocsCloud again.
     * @type {boolean}
     * @memberof DocsCloudApiGetTenantConfig
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getTenantInfo operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiGetTenantInfoRequest
 */
export interface DocsCloudApiGetTenantInfoRequest {
    /**
     * Specifies whether to bypass the cache and request the tenant information from DocsCloud again.
     * @type {boolean}
     * @memberof DocsCloudApiGetTenantInfo
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getTenantQuota operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiGetTenantQuotaRequest
 */
export interface DocsCloudApiGetTenantQuotaRequest {
    /**
     * Specifies whether to bypass the cache and request the user quota from DocsCloud again.
     * @type {boolean}
     * @memberof DocsCloudApiGetTenantQuota
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getTenantUsage operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiGetTenantUsageRequest
 */
export interface DocsCloudApiGetTenantUsageRequest {
    /**
     * Specifies whether to bypass the cache and request the usage statistics from DocsCloud again.
     * @type {boolean}
     * @memberof DocsCloudApiGetTenantUsage
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for switchToDevPack operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiSwitchToDevPackRequest
 */
export interface DocsCloudApiSwitchToDevPackRequest {
    /**
     * 
     * @type {DocsCloudDevPackRequestDto}
     * @memberof DocsCloudApiSwitchToDevPack
     */
    readonly docsCloudDevPackRequestDto?: DocsCloudDevPackRequestDto
}

/**
 * Request parameters for updateTenantConfig operation in DocsCloudApi.
 * @export
 * @interface DocsCloudApiUpdateTenantConfigRequest
 */
export interface DocsCloudApiUpdateTenantConfigRequest {
    /**
     * 
     * @type {DocsCloudConfig}
     * @memberof DocsCloudApiUpdateTenantConfig
     */
    readonly docsCloudConfig?: DocsCloudConfig
}

/**
 * DocsCloudApi - object-oriented interface
 * @export
 * @class DocsCloudApi
 * @extends {BaseAPI}
 */
export class DocsCloudApi extends BaseAPI {
    /**
     * Calculates the top-up cost of switching the current DocsCloud subscription to DocsCloudDevPack,  without making any changes. The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
     * @summary Calculate the DocsCloud subscription switch cost
     * @param {SettingsDocsCloudApiCalculateDevPackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public calculateDevPack(requestParameters: DocsCloudApiCalculateDevPackRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).calculateDevPack(requestParameters.docsCloudDevPackRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts generating the DocsCloud user quota report as an xlsx file and saves it in My Documents.
     * @summary Start the DocsCloud tenant quota report generation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public createTenantQuotaReport(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).createTenantQuotaReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the DocsCloud tenant of the current portal.
     * @summary Get the DocsCloud tenant
     * @param {SettingsDocsCloudApiGetTenantRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public getTenant(requestParameters: DocsCloudApiGetTenantRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).getTenant(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the DocsCloud tenant configuration of the current portal.
     * @summary Get the DocsCloud tenant configuration
     * @param {SettingsDocsCloudApiGetTenantConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public getTenantConfig(requestParameters: DocsCloudApiGetTenantConfigRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).getTenantConfig(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the DocsCloud license and server information with usage statistics of the current portal.
     * @summary Get the DocsCloud tenant information
     * @param {SettingsDocsCloudApiGetTenantInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public getTenantInfo(requestParameters: DocsCloudApiGetTenantInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).getTenantInfo(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the DocsCloud user quota (active users) of the current portal.
     * @summary Get the DocsCloud tenant quota
     * @param {SettingsDocsCloudApiGetTenantQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public getTenantQuota(requestParameters: DocsCloudApiGetTenantQuotaRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).getTenantQuota(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the status of generating the DocsCloud user quota report.
     * @summary Get the status of the DocsCloud tenant quota report generation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public getTenantQuotaReport(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).getTenantQuotaReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the DocsCloud usage statistics of the current portal.
     * @summary Get the DocsCloud tenant usage
     * @param {SettingsDocsCloudApiGetTenantUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public getTenantUsage(requestParameters: DocsCloudApiGetTenantUsageRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).getTenantUsage(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the DocsCloud trial.
     * @summary Start the DocsCloud trial
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public startDocsCloudTrial(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).startDocsCloudTrial(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches the current DocsCloud subscription to DocsCloudDevPack: charges the price difference  from the wallet and transfers the subscription (with its license) to the target product.  The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.
     * @summary Switch the DocsCloud subscription to DocsCloudDevPack
     * @param {SettingsDocsCloudApiSwitchToDevPackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public switchToDevPack(requestParameters: DocsCloudApiSwitchToDevPackRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).switchToDevPack(requestParameters.docsCloudDevPackRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates generating the DocsCloud user quota report.
     * @summary Terminate the DocsCloud tenant quota report generation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public terminateTenantQuotaReport(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).terminateTenantQuotaReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the DocsCloud tenant configuration of the current portal with the parameters specified in the request.
     * @summary Update the DocsCloud tenant configuration
     * @param {SettingsDocsCloudApiUpdateTenantConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public updateTenantConfig(requestParameters: DocsCloudApiUpdateTenantConfigRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).updateTenantConfig(requestParameters.docsCloudConfig, options).then((request) => request(this.axios, this.basePath));
    }
}

