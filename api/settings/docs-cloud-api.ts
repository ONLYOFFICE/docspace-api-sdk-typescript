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
         * Prices the upgrade of the paid DocsCloud subscription of the current portal to DocsCloudDevPack for  the requested number of users, without changing the subscription or charging anything. It applies the  same preconditions as the switch itself: the portal must hold an active DocsCloud subscription, must  not already hold a DocsCloudDevPack one, and its tariff must not be delayed or unpaid; the quotas and  the state of the current tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a  DocSpace administrator of a portal registered with the billing service. The call is read-only and  idempotent, so it can be repeated for different quantities before any switch is made. It returns the  amount that switching would cost, the three-letter ISO 4217 currency of that amount, the quantity the  amount was calculated for, and the identifier of the billing operation; an empty result means the  billing service could not price the switch, which should then not be attempted. The switch itself is  performed by `POST api/2.0/settings/docscloud/switchtodevpack` with the same `quantity` and takes no  identifier from this response; to price a change in the number of users of a subscription the portal  already has, use `PUT api/2.0/portal/payment/calculatewallet` instead.
         * @summary Calculate the DocsCloudDevPack switch cost
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
         * Queues a background job that renders the current DocsCloud user quota of the portal into an xlsx file and  saves that file in the My documents folder of the calling user; the report lists the editor and the viewer  users with the type and the expiration date of each, and summarizes the internal, external and remaining users  against the license limits. The file is not ready when the response arrives: poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until `isCompleted` is true, then take the file from  `resultFileId` or `resultFileUrl`, and use `DELETE api/2.0/settings/docscloud/tenant/quota/report` to cancel a  job that is still running. The caller must be a portal administrator allowed to edit the portal settings. The  portal should have an activated DocsCloud tenant: this call does not check that, and without a tenant the job  itself fails and reports the reason in the `error` of the status response. One report per caller runs at a  time: while a report of this user is still being built, the call describes that running job and no second  generation is started, so a repeated call is safe. What comes back is the initial state of the job, with  `percentage` 0 and a created `status`, not the report; the report is a point-in-time snapshot and carries the  generation date in its file name. To read the same data as JSON, without building a file, use  `GET api/2.0/settings/docscloud/tenant/quota`.
         * @summary Start the DocsCloud quota report
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
         * Returns the DocsCloud tenant of the current portal: the DocsCloud server assigned to the portal, with its  address, the date the tenant subscription ends and the payment the tenant was created for. A tenant exists  only after a DocsCloud subscription has been granted, by `POST api/2.0/settings/docscloud/trial` or by a  DocsCloud purchase, and only on an installation where the DocsCloud service is configured. The caller must  be a portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it  is served from a cache that keeps the tenant for an hour and the absence of a tenant for a minute, so pass  `refresh=true` right after a subscription change to read the current state from DocsCloud instead. In the  result, `address` is the absolute URL of the assigned server, `isActive` tells whether `endDate` is still in  the future, and the dates are in UTC. An empty result means the portal has no DocsCloud tenant yet, which is  the normal state before a subscription and not an error, so this is the operation to call to find out whether  DocsCloud is activated at all. The license and server details, the editing settings, the user quota and the  usage statistics are not part of it: they live in `GET api/2.0/settings/docscloud/tenant/info`,  `.../tenant/config`, `.../tenant/quota` and `.../tenant/usage`, each of which fails with 400 while the  portal has no activated tenant.
         * @summary Get the DocsCloud tenant
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the tenant from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to an hour old, or up to a minute old while the portal has no tenant.
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
         * Returns the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  an hour, so pass `refresh=true` to read the current state from DocsCloud; the same values are changed by  `PUT api/2.0/settings/docscloud/tenant/config`, which drops the cached copy itself, so no refresh is needed  after an update. In the result, `security.secret` is a credential, so the response should be treated as  sensitive; `server.fileSizeLimit` is in bytes and an update cannot raise it above 209715200 (200 MB); and an  empty or absent `ipFilter.rules` means no address restriction is configured. The license and server version,  the address of the assigned server, the per-user quota and the usage counters are not part of it: they live in  `.../tenant/info`, `.../tenant`, `.../tenant/quota` and `.../tenant/usage`.
         * @summary Get the DocsCloud tenant configuration
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the configuration from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to an hour old.
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
         * Returns the DocsCloud license of the current portal, the DocsCloud server serving it, the user limits of  that license and the editor and viewer usage counted against them for the current period. The portal must  have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud  purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call  fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an  installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for a  minute, so pass `refresh=true` right after a subscription change to read the current state from DocsCloud.  In the result, `license.valid` is when the license expires and `license.trial` is reported as `false` once  the portal holds a paid DocsCloud or DocsCloudDevPack subscription, even when the license itself still says  trial; `usersLimit` caps the editors and the viewers allowed, `stats` counts the active, internal, external  and remaining users of each of those two kinds over the last `stats.periodDay` days, and the dates are in  UTC. The editing settings, the per-user quota lists and the address of the assigned server live in  `.../tenant/config`, `.../tenant/quota` and `.../tenant`, while `.../tenant/usage` gives one active-user  total instead of this per-role breakdown.
         * @summary Get the DocsCloud tenant information
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the license, server and usage information from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
         * Returns the DocsCloud user quota of the current portal: the users who currently count as DocsCloud editors and  the users who count as viewers, each with the identifier DocsCloud knows them by and the date their quota entry  expires. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  a minute, so pass `refresh=true` to read the current state from DocsCloud. In the result, `users` holds the  editor entries and `usersView` the viewer entries, both unordered; `userId` is the DocSpace user ID for a  portal member and an identifier of DocsCloud\'s own for anyone else; `expire` is the date and time the entry  expires, as a UTC string; and empty lists mean no user has been counted yet. It lists the users themselves,  not the counters: the license limits with the per-role totals are in  `GET api/2.0/settings/docscloud/tenant/info`, a single active-user total is in `.../tenant/usage`, and the  same lists as a downloadable xlsx file are produced by  `POST api/2.0/settings/docscloud/tenant/quota/report`.
         * @summary Get the DocsCloud tenant quota
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the user quota from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
         * Returns the state of the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report`, so that the caller can follow the generation and pick  up the resulting file. It reports the caller\'s own job only: a report started by another administrator is not  visible here, and an empty result means this user has no job, because none was started, because it was  terminated, or because a finished one has already been cleared (a job state is kept for a day, and starting a  new report drops the previous finished one); that is a normal state and not an error. The caller must be a  portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it is  meant to be polled while the job runs. In the result, `percentage` goes from 0 to 100 and `isCompleted`  becomes true both on success and on failure, so check `error`: it is empty when the report was built and  carries the failure message otherwise;  `resultFileId`, `resultFileName` and `resultFileUrl` are filled in only once the file exists, and that file  also stays in the My documents folder of the caller. Use the `POST` operation on this path to start a report  and the `DELETE` one to cancel it.
         * @summary Get the DocsCloud quota report status
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
         * Returns the DocsCloud usage of the current portal: the number of users who have been active in DocsCloud in  the current period, and the moment that period is counted from. The portal must have an activated DocsCloud  tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a  portal administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is read-only, idempotent and cached for a minute, so pass `refresh=true` to read the  current state from DocsCloud. In the result, `activeCount` counts the users seen since `since`, which is in  UTC, and it is one total for the whole tenant, with no split by role and no limit to compare it against. For  the editor and viewer breakdown with the license limits use `GET api/2.0/settings/docscloud/tenant/info`, and  for the users counted one by one `GET api/2.0/settings/docscloud/tenant/quota`.
         * @summary Get the DocsCloud tenant usage
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the usage statistics from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
         * Activates the free DocsCloud trial subscription for the current portal, and, once a DocsCloud server is  assigned to the portal, allows the address of that server in the Content Security Policy settings.  The portal tariff must be in the trial or paid state (not delayed and not unpaid), and the portal must not  already hold a DocsCloud trial, DocsCloud or DocsCloudDevPack subscription: the quotas of the current  tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a portal administrator allowed to edit  the portal settings, on an installation where the billing service is configured. The operation changes the  portal subscription and is not idempotent: repeating it after a successful activation fails with 400.  It returns `true` when the trial has been granted, and `false` when the billing service declines it  (for example, when this portal has already used its trial), in which case nothing is changed. It never buys  a paid plan: an existing paid DocsCloud subscription is moved to DocsCloudDevPack by  `POST api/2.0/settings/docscloud/switchtodevpack` instead.
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
         * Upgrades the paid DocsCloud subscription of the current portal to DocsCloudDevPack for the requested  number of users, charging the price difference to the portal wallet and moving the DocsCloud license  to the new product. The portal must hold an active DocsCloud subscription, must not already hold a  DocsCloudDevPack one, and its tariff must not be delayed or unpaid: the quotas and the state of the  current tariff are listed by `GET api/2.0/portal/tariff`, and the amount that will be charged is  returned by `POST api/2.0/settings/docscloud/calculatedevpack` for the same `quantity`. The caller  must be a DocSpace administrator of a portal registered with the billing service. The switch is  synchronous, mutating and not idempotent: repeating it after a successful call fails with 400, and  concurrent calls for one portal are serialized so that the wallet is charged only once. It returns  `true` when the subscription has been switched, and `false` when the billing service declines or  fails to perform the switch, in which case nothing is charged and the portal stays on DocsCloud.  Only the DocsCloud to DocsCloudDevPack direction is supported: to change the number of users of a  subscription the portal already has, or to schedule a reversion from DocsCloudDevPack back to  DocsCloud at the next billing period, use `PUT api/2.0/portal/payment/updatewallet` instead.
         * @summary Switch DocsCloud to DocsCloudDevPack
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
         * Cancels the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report` and removes its job, so that a new report can be started  right away. There is no precondition: the call is accepted even when this user has no report job at all, and  it affects the caller\'s own job only, never one started by another administrator. The caller must be a portal  administrator allowed to edit the portal settings. The cancellation is asynchronous and idempotent: 200 means  the request has been queued for the report worker, not that the job has already stopped, so poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until it returns an empty result. Nothing is returned in  the body. A report file that has already been saved in the My documents folder of the caller is left there  and has to be deleted through the file operations if it is no longer wanted.
         * @summary Terminate the DocsCloud quota report
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
         * Replaces the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules; it returns the configuration as DocsCloud stored it. The portal must have an activated DocsCloud tenant,  granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. Read the current  values with `GET api/2.0/settings/docscloud/tenant/config` first and send back whole sections: the sections  left out of the request are not sent to DocsCloud at all, while a section that is present is sent with all of  its fields, so a field left unset inside it goes out as `0`, `false` or empty. The caller must be a portal  administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is mutating,  synchronous and idempotent, it is recorded in the portal audit trail, and it drops the cached configuration  itself, so the next read returns the new values without `refresh=true`. The `tenantName`, `security.secret`,  `security.header` and every `ipFilter.rules` address are capped at 255 characters and `server.fileSizeLimit`  at 209715200 bytes (200 MB); a value outside those bounds is rejected with 400 before anything reaches  DocsCloud. It changes these settings only, never the subscription, the user quota or the license.
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
         * Prices the upgrade of the paid DocsCloud subscription of the current portal to DocsCloudDevPack for  the requested number of users, without changing the subscription or charging anything. It applies the  same preconditions as the switch itself: the portal must hold an active DocsCloud subscription, must  not already hold a DocsCloudDevPack one, and its tariff must not be delayed or unpaid; the quotas and  the state of the current tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a  DocSpace administrator of a portal registered with the billing service. The call is read-only and  idempotent, so it can be repeated for different quantities before any switch is made. It returns the  amount that switching would cost, the three-letter ISO 4217 currency of that amount, the quantity the  amount was calculated for, and the identifier of the billing operation; an empty result means the  billing service could not price the switch, which should then not be attempted. The switch itself is  performed by `POST api/2.0/settings/docscloud/switchtodevpack` with the same `quantity` and takes no  identifier from this response; to price a change in the number of users of a subscription the portal  already has, use `PUT api/2.0/portal/payment/calculatewallet` instead.
         * @summary Calculate the DocsCloudDevPack switch cost
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
         * Queues a background job that renders the current DocsCloud user quota of the portal into an xlsx file and  saves that file in the My documents folder of the calling user; the report lists the editor and the viewer  users with the type and the expiration date of each, and summarizes the internal, external and remaining users  against the license limits. The file is not ready when the response arrives: poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until `isCompleted` is true, then take the file from  `resultFileId` or `resultFileUrl`, and use `DELETE api/2.0/settings/docscloud/tenant/quota/report` to cancel a  job that is still running. The caller must be a portal administrator allowed to edit the portal settings. The  portal should have an activated DocsCloud tenant: this call does not check that, and without a tenant the job  itself fails and reports the reason in the `error` of the status response. One report per caller runs at a  time: while a report of this user is still being built, the call describes that running job and no second  generation is started, so a repeated call is safe. What comes back is the initial state of the job, with  `percentage` 0 and a created `status`, not the report; the report is a point-in-time snapshot and carries the  generation date in its file name. To read the same data as JSON, without building a file, use  `GET api/2.0/settings/docscloud/tenant/quota`.
         * @summary Start the DocsCloud quota report
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
         * Returns the DocsCloud tenant of the current portal: the DocsCloud server assigned to the portal, with its  address, the date the tenant subscription ends and the payment the tenant was created for. A tenant exists  only after a DocsCloud subscription has been granted, by `POST api/2.0/settings/docscloud/trial` or by a  DocsCloud purchase, and only on an installation where the DocsCloud service is configured. The caller must  be a portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it  is served from a cache that keeps the tenant for an hour and the absence of a tenant for a minute, so pass  `refresh=true` right after a subscription change to read the current state from DocsCloud instead. In the  result, `address` is the absolute URL of the assigned server, `isActive` tells whether `endDate` is still in  the future, and the dates are in UTC. An empty result means the portal has no DocsCloud tenant yet, which is  the normal state before a subscription and not an error, so this is the operation to call to find out whether  DocsCloud is activated at all. The license and server details, the editing settings, the user quota and the  usage statistics are not part of it: they live in `GET api/2.0/settings/docscloud/tenant/info`,  `.../tenant/config`, `.../tenant/quota` and `.../tenant/usage`, each of which fails with 400 while the  portal has no activated tenant.
         * @summary Get the DocsCloud tenant
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the tenant from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to an hour old, or up to a minute old while the portal has no tenant.
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
         * Returns the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  an hour, so pass `refresh=true` to read the current state from DocsCloud; the same values are changed by  `PUT api/2.0/settings/docscloud/tenant/config`, which drops the cached copy itself, so no refresh is needed  after an update. In the result, `security.secret` is a credential, so the response should be treated as  sensitive; `server.fileSizeLimit` is in bytes and an update cannot raise it above 209715200 (200 MB); and an  empty or absent `ipFilter.rules` means no address restriction is configured. The license and server version,  the address of the assigned server, the per-user quota and the usage counters are not part of it: they live in  `.../tenant/info`, `.../tenant`, `.../tenant/quota` and `.../tenant/usage`.
         * @summary Get the DocsCloud tenant configuration
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the configuration from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to an hour old.
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
         * Returns the DocsCloud license of the current portal, the DocsCloud server serving it, the user limits of  that license and the editor and viewer usage counted against them for the current period. The portal must  have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud  purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call  fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an  installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for a  minute, so pass `refresh=true` right after a subscription change to read the current state from DocsCloud.  In the result, `license.valid` is when the license expires and `license.trial` is reported as `false` once  the portal holds a paid DocsCloud or DocsCloudDevPack subscription, even when the license itself still says  trial; `usersLimit` caps the editors and the viewers allowed, `stats` counts the active, internal, external  and remaining users of each of those two kinds over the last `stats.periodDay` days, and the dates are in  UTC. The editing settings, the per-user quota lists and the address of the assigned server live in  `.../tenant/config`, `.../tenant/quota` and `.../tenant`, while `.../tenant/usage` gives one active-user  total instead of this per-role breakdown.
         * @summary Get the DocsCloud tenant information
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the license, server and usage information from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
         * Returns the DocsCloud user quota of the current portal: the users who currently count as DocsCloud editors and  the users who count as viewers, each with the identifier DocsCloud knows them by and the date their quota entry  expires. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  a minute, so pass `refresh=true` to read the current state from DocsCloud. In the result, `users` holds the  editor entries and `usersView` the viewer entries, both unordered; `userId` is the DocSpace user ID for a  portal member and an identifier of DocsCloud\'s own for anyone else; `expire` is the date and time the entry  expires, as a UTC string; and empty lists mean no user has been counted yet. It lists the users themselves,  not the counters: the license limits with the per-role totals are in  `GET api/2.0/settings/docscloud/tenant/info`, a single active-user total is in `.../tenant/usage`, and the  same lists as a downloadable xlsx file are produced by  `POST api/2.0/settings/docscloud/tenant/quota/report`.
         * @summary Get the DocsCloud tenant quota
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the user quota from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
         * Returns the state of the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report`, so that the caller can follow the generation and pick  up the resulting file. It reports the caller\'s own job only: a report started by another administrator is not  visible here, and an empty result means this user has no job, because none was started, because it was  terminated, or because a finished one has already been cleared (a job state is kept for a day, and starting a  new report drops the previous finished one); that is a normal state and not an error. The caller must be a  portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it is  meant to be polled while the job runs. In the result, `percentage` goes from 0 to 100 and `isCompleted`  becomes true both on success and on failure, so check `error`: it is empty when the report was built and  carries the failure message otherwise;  `resultFileId`, `resultFileName` and `resultFileUrl` are filled in only once the file exists, and that file  also stays in the My documents folder of the caller. Use the `POST` operation on this path to start a report  and the `DELETE` one to cancel it.
         * @summary Get the DocsCloud quota report status
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
         * Returns the DocsCloud usage of the current portal: the number of users who have been active in DocsCloud in  the current period, and the moment that period is counted from. The portal must have an activated DocsCloud  tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a  portal administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is read-only, idempotent and cached for a minute, so pass `refresh=true` to read the  current state from DocsCloud. In the result, `activeCount` counts the users seen since `since`, which is in  UTC, and it is one total for the whole tenant, with no split by role and no limit to compare it against. For  the editor and viewer breakdown with the license limits use `GET api/2.0/settings/docscloud/tenant/info`, and  for the users counted one by one `GET api/2.0/settings/docscloud/tenant/quota`.
         * @summary Get the DocsCloud tenant usage
         * @param {boolean} [refresh] Pass `true` to skip the cached copy and request the usage statistics from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
         * Activates the free DocsCloud trial subscription for the current portal, and, once a DocsCloud server is  assigned to the portal, allows the address of that server in the Content Security Policy settings.  The portal tariff must be in the trial or paid state (not delayed and not unpaid), and the portal must not  already hold a DocsCloud trial, DocsCloud or DocsCloudDevPack subscription: the quotas of the current  tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a portal administrator allowed to edit  the portal settings, on an installation where the billing service is configured. The operation changes the  portal subscription and is not idempotent: repeating it after a successful activation fails with 400.  It returns `true` when the trial has been granted, and `false` when the billing service declines it  (for example, when this portal has already used its trial), in which case nothing is changed. It never buys  a paid plan: an existing paid DocsCloud subscription is moved to DocsCloudDevPack by  `POST api/2.0/settings/docscloud/switchtodevpack` instead.
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
         * Upgrades the paid DocsCloud subscription of the current portal to DocsCloudDevPack for the requested  number of users, charging the price difference to the portal wallet and moving the DocsCloud license  to the new product. The portal must hold an active DocsCloud subscription, must not already hold a  DocsCloudDevPack one, and its tariff must not be delayed or unpaid: the quotas and the state of the  current tariff are listed by `GET api/2.0/portal/tariff`, and the amount that will be charged is  returned by `POST api/2.0/settings/docscloud/calculatedevpack` for the same `quantity`. The caller  must be a DocSpace administrator of a portal registered with the billing service. The switch is  synchronous, mutating and not idempotent: repeating it after a successful call fails with 400, and  concurrent calls for one portal are serialized so that the wallet is charged only once. It returns  `true` when the subscription has been switched, and `false` when the billing service declines or  fails to perform the switch, in which case nothing is charged and the portal stays on DocsCloud.  Only the DocsCloud to DocsCloudDevPack direction is supported: to change the number of users of a  subscription the portal already has, or to schedule a reversion from DocsCloudDevPack back to  DocsCloud at the next billing period, use `PUT api/2.0/portal/payment/updatewallet` instead.
         * @summary Switch DocsCloud to DocsCloudDevPack
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
         * Cancels the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report` and removes its job, so that a new report can be started  right away. There is no precondition: the call is accepted even when this user has no report job at all, and  it affects the caller\'s own job only, never one started by another administrator. The caller must be a portal  administrator allowed to edit the portal settings. The cancellation is asynchronous and idempotent: 200 means  the request has been queued for the report worker, not that the job has already stopped, so poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until it returns an empty result. Nothing is returned in  the body. A report file that has already been saved in the My documents folder of the caller is left there  and has to be deleted through the file operations if it is no longer wanted.
         * @summary Terminate the DocsCloud quota report
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
         * Replaces the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules; it returns the configuration as DocsCloud stored it. The portal must have an activated DocsCloud tenant,  granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. Read the current  values with `GET api/2.0/settings/docscloud/tenant/config` first and send back whole sections: the sections  left out of the request are not sent to DocsCloud at all, while a section that is present is sent with all of  its fields, so a field left unset inside it goes out as `0`, `false` or empty. The caller must be a portal  administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is mutating,  synchronous and idempotent, it is recorded in the portal audit trail, and it drops the cached configuration  itself, so the next read returns the new values without `refresh=true`. The `tenantName`, `security.secret`,  `security.header` and every `ipFilter.rules` address are capped at 255 characters and `server.fileSizeLimit`  at 209715200 bytes (200 MB); a value outside those bounds is rejected with 400 before anything reaches  DocsCloud. It changes these settings only, never the subscription, the user quota or the license.
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
         * Prices the upgrade of the paid DocsCloud subscription of the current portal to DocsCloudDevPack for  the requested number of users, without changing the subscription or charging anything. It applies the  same preconditions as the switch itself: the portal must hold an active DocsCloud subscription, must  not already hold a DocsCloudDevPack one, and its tariff must not be delayed or unpaid; the quotas and  the state of the current tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a  DocSpace administrator of a portal registered with the billing service. The call is read-only and  idempotent, so it can be repeated for different quantities before any switch is made. It returns the  amount that switching would cost, the three-letter ISO 4217 currency of that amount, the quantity the  amount was calculated for, and the identifier of the billing operation; an empty result means the  billing service could not price the switch, which should then not be attempted. The switch itself is  performed by `POST api/2.0/settings/docscloud/switchtodevpack` with the same `quantity` and takes no  identifier from this response; to price a change in the number of users of a subscription the portal  already has, use `PUT api/2.0/portal/payment/calculatewallet` instead.
         * @summary Calculate the DocsCloudDevPack switch cost
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
         * Queues a background job that renders the current DocsCloud user quota of the portal into an xlsx file and  saves that file in the My documents folder of the calling user; the report lists the editor and the viewer  users with the type and the expiration date of each, and summarizes the internal, external and remaining users  against the license limits. The file is not ready when the response arrives: poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until `isCompleted` is true, then take the file from  `resultFileId` or `resultFileUrl`, and use `DELETE api/2.0/settings/docscloud/tenant/quota/report` to cancel a  job that is still running. The caller must be a portal administrator allowed to edit the portal settings. The  portal should have an activated DocsCloud tenant: this call does not check that, and without a tenant the job  itself fails and reports the reason in the `error` of the status response. One report per caller runs at a  time: while a report of this user is still being built, the call describes that running job and no second  generation is started, so a repeated call is safe. What comes back is the initial state of the job, with  `percentage` 0 and a created `status`, not the report; the report is a point-in-time snapshot and carries the  generation date in its file name. To read the same data as JSON, without building a file, use  `GET api/2.0/settings/docscloud/tenant/quota`.
         * @summary Start the DocsCloud quota report
         * @param {*} [options] Override http request option.
         * REST API Reference for createTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-tenant-quota-report/
         * @throws {RequiredError}
         */
        createTenantQuotaReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createTenantQuotaReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the DocsCloud tenant of the current portal: the DocsCloud server assigned to the portal, with its  address, the date the tenant subscription ends and the payment the tenant was created for. A tenant exists  only after a DocsCloud subscription has been granted, by `POST api/2.0/settings/docscloud/trial` or by a  DocsCloud purchase, and only on an installation where the DocsCloud service is configured. The caller must  be a portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it  is served from a cache that keeps the tenant for an hour and the absence of a tenant for a minute, so pass  `refresh=true` right after a subscription change to read the current state from DocsCloud instead. In the  result, `address` is the absolute URL of the assigned server, `isActive` tells whether `endDate` is still in  the future, and the dates are in UTC. An empty result means the portal has no DocsCloud tenant yet, which is  the normal state before a subscription and not an error, so this is the operation to call to find out whether  DocsCloud is activated at all. The license and server details, the editing settings, the user quota and the  usage statistics are not part of it: they live in `GET api/2.0/settings/docscloud/tenant/info`,  `.../tenant/config`, `.../tenant/quota` and `.../tenant/usage`, each of which fails with 400 while the  portal has no activated tenant.
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
         * Returns the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  an hour, so pass `refresh=true` to read the current state from DocsCloud; the same values are changed by  `PUT api/2.0/settings/docscloud/tenant/config`, which drops the cached copy itself, so no refresh is needed  after an update. In the result, `security.secret` is a credential, so the response should be treated as  sensitive; `server.fileSizeLimit` is in bytes and an update cannot raise it above 209715200 (200 MB); and an  empty or absent `ipFilter.rules` means no address restriction is configured. The license and server version,  the address of the assigned server, the per-user quota and the usage counters are not part of it: they live in  `.../tenant/info`, `.../tenant`, `.../tenant/quota` and `.../tenant/usage`.
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
         * Returns the DocsCloud license of the current portal, the DocsCloud server serving it, the user limits of  that license and the editor and viewer usage counted against them for the current period. The portal must  have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud  purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call  fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an  installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for a  minute, so pass `refresh=true` right after a subscription change to read the current state from DocsCloud.  In the result, `license.valid` is when the license expires and `license.trial` is reported as `false` once  the portal holds a paid DocsCloud or DocsCloudDevPack subscription, even when the license itself still says  trial; `usersLimit` caps the editors and the viewers allowed, `stats` counts the active, internal, external  and remaining users of each of those two kinds over the last `stats.periodDay` days, and the dates are in  UTC. The editing settings, the per-user quota lists and the address of the assigned server live in  `.../tenant/config`, `.../tenant/quota` and `.../tenant`, while `.../tenant/usage` gives one active-user  total instead of this per-role breakdown.
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
         * Returns the DocsCloud user quota of the current portal: the users who currently count as DocsCloud editors and  the users who count as viewers, each with the identifier DocsCloud knows them by and the date their quota entry  expires. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  a minute, so pass `refresh=true` to read the current state from DocsCloud. In the result, `users` holds the  editor entries and `usersView` the viewer entries, both unordered; `userId` is the DocSpace user ID for a  portal member and an identifier of DocsCloud\'s own for anyone else; `expire` is the date and time the entry  expires, as a UTC string; and empty lists mean no user has been counted yet. It lists the users themselves,  not the counters: the license limits with the per-role totals are in  `GET api/2.0/settings/docscloud/tenant/info`, a single active-user total is in `.../tenant/usage`, and the  same lists as a downloadable xlsx file are produced by  `POST api/2.0/settings/docscloud/tenant/quota/report`.
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
         * Returns the state of the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report`, so that the caller can follow the generation and pick  up the resulting file. It reports the caller\'s own job only: a report started by another administrator is not  visible here, and an empty result means this user has no job, because none was started, because it was  terminated, or because a finished one has already been cleared (a job state is kept for a day, and starting a  new report drops the previous finished one); that is a normal state and not an error. The caller must be a  portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it is  meant to be polled while the job runs. In the result, `percentage` goes from 0 to 100 and `isCompleted`  becomes true both on success and on failure, so check `error`: it is empty when the report was built and  carries the failure message otherwise;  `resultFileId`, `resultFileName` and `resultFileUrl` are filled in only once the file exists, and that file  also stays in the My documents folder of the caller. Use the `POST` operation on this path to start a report  and the `DELETE` one to cancel it.
         * @summary Get the DocsCloud quota report status
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota-report/
         * @throws {RequiredError}
         */
        getTenantQuotaReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getTenantQuotaReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the DocsCloud usage of the current portal: the number of users who have been active in DocsCloud in  the current period, and the moment that period is counted from. The portal must have an activated DocsCloud  tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a  portal administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is read-only, idempotent and cached for a minute, so pass `refresh=true` to read the  current state from DocsCloud. In the result, `activeCount` counts the users seen since `since`, which is in  UTC, and it is one total for the whole tenant, with no split by role and no limit to compare it against. For  the editor and viewer breakdown with the license limits use `GET api/2.0/settings/docscloud/tenant/info`, and  for the users counted one by one `GET api/2.0/settings/docscloud/tenant/quota`.
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
         * Activates the free DocsCloud trial subscription for the current portal, and, once a DocsCloud server is  assigned to the portal, allows the address of that server in the Content Security Policy settings.  The portal tariff must be in the trial or paid state (not delayed and not unpaid), and the portal must not  already hold a DocsCloud trial, DocsCloud or DocsCloudDevPack subscription: the quotas of the current  tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a portal administrator allowed to edit  the portal settings, on an installation where the billing service is configured. The operation changes the  portal subscription and is not idempotent: repeating it after a successful activation fails with 400.  It returns `true` when the trial has been granted, and `false` when the billing service declines it  (for example, when this portal has already used its trial), in which case nothing is changed. It never buys  a paid plan: an existing paid DocsCloud subscription is moved to DocsCloudDevPack by  `POST api/2.0/settings/docscloud/switchtodevpack` instead.
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
         * Upgrades the paid DocsCloud subscription of the current portal to DocsCloudDevPack for the requested  number of users, charging the price difference to the portal wallet and moving the DocsCloud license  to the new product. The portal must hold an active DocsCloud subscription, must not already hold a  DocsCloudDevPack one, and its tariff must not be delayed or unpaid: the quotas and the state of the  current tariff are listed by `GET api/2.0/portal/tariff`, and the amount that will be charged is  returned by `POST api/2.0/settings/docscloud/calculatedevpack` for the same `quantity`. The caller  must be a DocSpace administrator of a portal registered with the billing service. The switch is  synchronous, mutating and not idempotent: repeating it after a successful call fails with 400, and  concurrent calls for one portal are serialized so that the wallet is charged only once. It returns  `true` when the subscription has been switched, and `false` when the billing service declines or  fails to perform the switch, in which case nothing is charged and the portal stays on DocsCloud.  Only the DocsCloud to DocsCloudDevPack direction is supported: to change the number of users of a  subscription the portal already has, or to schedule a reversion from DocsCloudDevPack back to  DocsCloud at the next billing period, use `PUT api/2.0/portal/payment/updatewallet` instead.
         * @summary Switch DocsCloud to DocsCloudDevPack
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
         * Cancels the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report` and removes its job, so that a new report can be started  right away. There is no precondition: the call is accepted even when this user has no report job at all, and  it affects the caller\'s own job only, never one started by another administrator. The caller must be a portal  administrator allowed to edit the portal settings. The cancellation is asynchronous and idempotent: 200 means  the request has been queued for the report worker, not that the job has already stopped, so poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until it returns an empty result. Nothing is returned in  the body. A report file that has already been saved in the My documents folder of the caller is left there  and has to be deleted through the file operations if it is no longer wanted.
         * @summary Terminate the DocsCloud quota report
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateTenantQuotaReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tenant-quota-report/
         * @throws {RequiredError}
         */
        terminateTenantQuotaReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateTenantQuotaReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules; it returns the configuration as DocsCloud stored it. The portal must have an activated DocsCloud tenant,  granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. Read the current  values with `GET api/2.0/settings/docscloud/tenant/config` first and send back whole sections: the sections  left out of the request are not sent to DocsCloud at all, while a section that is present is sent with all of  its fields, so a field left unset inside it goes out as `0`, `false` or empty. The caller must be a portal  administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is mutating,  synchronous and idempotent, it is recorded in the portal audit trail, and it drops the cached configuration  itself, so the next read returns the new values without `refresh=true`. The `tenantName`, `security.secret`,  `security.header` and every `ipFilter.rules` address are capped at 255 characters and `server.fileSizeLimit`  at 209715200 bytes (200 MB); a value outside those bounds is rejected with 400 before anything reaches  DocsCloud. It changes these settings only, never the subscription, the user quota or the license.
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
     * Pass `true` to skip the cached copy and request the tenant from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to an hour old, or up to a minute old while the portal has no tenant.
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
     * Pass `true` to skip the cached copy and request the configuration from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to an hour old.
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
     * Pass `true` to skip the cached copy and request the license, server and usage information from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
     * Pass `true` to skip the cached copy and request the user quota from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
     * Pass `true` to skip the cached copy and request the usage statistics from DocsCloud again, replacing the cached one; with the default `false` the answer may be up to a minute old.
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
     * Prices the upgrade of the paid DocsCloud subscription of the current portal to DocsCloudDevPack for  the requested number of users, without changing the subscription or charging anything. It applies the  same preconditions as the switch itself: the portal must hold an active DocsCloud subscription, must  not already hold a DocsCloudDevPack one, and its tariff must not be delayed or unpaid; the quotas and  the state of the current tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a  DocSpace administrator of a portal registered with the billing service. The call is read-only and  idempotent, so it can be repeated for different quantities before any switch is made. It returns the  amount that switching would cost, the three-letter ISO 4217 currency of that amount, the quantity the  amount was calculated for, and the identifier of the billing operation; an empty result means the  billing service could not price the switch, which should then not be attempted. The switch itself is  performed by `POST api/2.0/settings/docscloud/switchtodevpack` with the same `quantity` and takes no  identifier from this response; to price a change in the number of users of a subscription the portal  already has, use `PUT api/2.0/portal/payment/calculatewallet` instead.
     * @summary Calculate the DocsCloudDevPack switch cost
     * @param {SettingsDocsCloudApiCalculateDevPackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public calculateDevPack(requestParameters: DocsCloudApiCalculateDevPackRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).calculateDevPack(requestParameters.docsCloudDevPackRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that renders the current DocsCloud user quota of the portal into an xlsx file and  saves that file in the My documents folder of the calling user; the report lists the editor and the viewer  users with the type and the expiration date of each, and summarizes the internal, external and remaining users  against the license limits. The file is not ready when the response arrives: poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until `isCompleted` is true, then take the file from  `resultFileId` or `resultFileUrl`, and use `DELETE api/2.0/settings/docscloud/tenant/quota/report` to cancel a  job that is still running. The caller must be a portal administrator allowed to edit the portal settings. The  portal should have an activated DocsCloud tenant: this call does not check that, and without a tenant the job  itself fails and reports the reason in the `error` of the status response. One report per caller runs at a  time: while a report of this user is still being built, the call describes that running job and no second  generation is started, so a repeated call is safe. What comes back is the initial state of the job, with  `percentage` 0 and a created `status`, not the report; the report is a point-in-time snapshot and carries the  generation date in its file name. To read the same data as JSON, without building a file, use  `GET api/2.0/settings/docscloud/tenant/quota`.
     * @summary Start the DocsCloud quota report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public createTenantQuotaReport(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).createTenantQuotaReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the DocsCloud tenant of the current portal: the DocsCloud server assigned to the portal, with its  address, the date the tenant subscription ends and the payment the tenant was created for. A tenant exists  only after a DocsCloud subscription has been granted, by `POST api/2.0/settings/docscloud/trial` or by a  DocsCloud purchase, and only on an installation where the DocsCloud service is configured. The caller must  be a portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it  is served from a cache that keeps the tenant for an hour and the absence of a tenant for a minute, so pass  `refresh=true` right after a subscription change to read the current state from DocsCloud instead. In the  result, `address` is the absolute URL of the assigned server, `isActive` tells whether `endDate` is still in  the future, and the dates are in UTC. An empty result means the portal has no DocsCloud tenant yet, which is  the normal state before a subscription and not an error, so this is the operation to call to find out whether  DocsCloud is activated at all. The license and server details, the editing settings, the user quota and the  usage statistics are not part of it: they live in `GET api/2.0/settings/docscloud/tenant/info`,  `.../tenant/config`, `.../tenant/quota` and `.../tenant/usage`, each of which fails with 400 while the  portal has no activated tenant.
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
     * Returns the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  an hour, so pass `refresh=true` to read the current state from DocsCloud; the same values are changed by  `PUT api/2.0/settings/docscloud/tenant/config`, which drops the cached copy itself, so no refresh is needed  after an update. In the result, `security.secret` is a credential, so the response should be treated as  sensitive; `server.fileSizeLimit` is in bytes and an update cannot raise it above 209715200 (200 MB); and an  empty or absent `ipFilter.rules` means no address restriction is configured. The license and server version,  the address of the assigned server, the per-user quota and the usage counters are not part of it: they live in  `.../tenant/info`, `.../tenant`, `.../tenant/quota` and `.../tenant/usage`.
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
     * Returns the DocsCloud license of the current portal, the DocsCloud server serving it, the user limits of  that license and the editor and viewer usage counted against them for the current period. The portal must  have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud  purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call  fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an  installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for a  minute, so pass `refresh=true` right after a subscription change to read the current state from DocsCloud.  In the result, `license.valid` is when the license expires and `license.trial` is reported as `false` once  the portal holds a paid DocsCloud or DocsCloudDevPack subscription, even when the license itself still says  trial; `usersLimit` caps the editors and the viewers allowed, `stats` counts the active, internal, external  and remaining users of each of those two kinds over the last `stats.periodDay` days, and the dates are in  UTC. The editing settings, the per-user quota lists and the address of the assigned server live in  `.../tenant/config`, `.../tenant/quota` and `.../tenant`, while `.../tenant/usage` gives one active-user  total instead of this per-role breakdown.
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
     * Returns the DocsCloud user quota of the current portal: the users who currently count as DocsCloud editors and  the users who count as viewers, each with the identifier DocsCloud knows them by and the date their quota entry  expires. The portal must have an activated DocsCloud tenant, granted by `POST api/2.0/settings/docscloud/trial`  or by a DocsCloud purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none  and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings,  on an installation where the DocsCloud service is configured. The call is read-only, idempotent and cached for  a minute, so pass `refresh=true` to read the current state from DocsCloud. In the result, `users` holds the  editor entries and `usersView` the viewer entries, both unordered; `userId` is the DocSpace user ID for a  portal member and an identifier of DocsCloud\'s own for anyone else; `expire` is the date and time the entry  expires, as a UTC string; and empty lists mean no user has been counted yet. It lists the users themselves,  not the counters: the license limits with the per-role totals are in  `GET api/2.0/settings/docscloud/tenant/info`, a single active-user total is in `.../tenant/usage`, and the  same lists as a downloadable xlsx file are produced by  `POST api/2.0/settings/docscloud/tenant/quota/report`.
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
     * Returns the state of the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report`, so that the caller can follow the generation and pick  up the resulting file. It reports the caller\'s own job only: a report started by another administrator is not  visible here, and an empty result means this user has no job, because none was started, because it was  terminated, or because a finished one has already been cleared (a job state is kept for a day, and starting a  new report drops the previous finished one); that is a normal state and not an error. The caller must be a  portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it is  meant to be polled while the job runs. In the result, `percentage` goes from 0 to 100 and `isCompleted`  becomes true both on success and on failure, so check `error`: it is empty when the report was built and  carries the failure message otherwise;  `resultFileId`, `resultFileName` and `resultFileUrl` are filled in only once the file exists, and that file  also stays in the My documents folder of the caller. Use the `POST` operation on this path to start a report  and the `DELETE` one to cancel it.
     * @summary Get the DocsCloud quota report status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public getTenantQuotaReport(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).getTenantQuotaReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the DocsCloud usage of the current portal: the number of users who have been active in DocsCloud in  the current period, and the moment that period is counted from. The portal must have an activated DocsCloud  tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a  portal administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is read-only, idempotent and cached for a minute, so pass `refresh=true` to read the  current state from DocsCloud. In the result, `activeCount` counts the users seen since `since`, which is in  UTC, and it is one total for the whole tenant, with no split by role and no limit to compare it against. For  the editor and viewer breakdown with the license limits use `GET api/2.0/settings/docscloud/tenant/info`, and  for the users counted one by one `GET api/2.0/settings/docscloud/tenant/quota`.
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
     * Activates the free DocsCloud trial subscription for the current portal, and, once a DocsCloud server is  assigned to the portal, allows the address of that server in the Content Security Policy settings.  The portal tariff must be in the trial or paid state (not delayed and not unpaid), and the portal must not  already hold a DocsCloud trial, DocsCloud or DocsCloudDevPack subscription: the quotas of the current  tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a portal administrator allowed to edit  the portal settings, on an installation where the billing service is configured. The operation changes the  portal subscription and is not idempotent: repeating it after a successful activation fails with 400.  It returns `true` when the trial has been granted, and `false` when the billing service declines it  (for example, when this portal has already used its trial), in which case nothing is changed. It never buys  a paid plan: an existing paid DocsCloud subscription is moved to DocsCloudDevPack by  `POST api/2.0/settings/docscloud/switchtodevpack` instead.
     * @summary Start the DocsCloud trial
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public startDocsCloudTrial(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).startDocsCloudTrial(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Upgrades the paid DocsCloud subscription of the current portal to DocsCloudDevPack for the requested  number of users, charging the price difference to the portal wallet and moving the DocsCloud license  to the new product. The portal must hold an active DocsCloud subscription, must not already hold a  DocsCloudDevPack one, and its tariff must not be delayed or unpaid: the quotas and the state of the  current tariff are listed by `GET api/2.0/portal/tariff`, and the amount that will be charged is  returned by `POST api/2.0/settings/docscloud/calculatedevpack` for the same `quantity`. The caller  must be a DocSpace administrator of a portal registered with the billing service. The switch is  synchronous, mutating and not idempotent: repeating it after a successful call fails with 400, and  concurrent calls for one portal are serialized so that the wallet is charged only once. It returns  `true` when the subscription has been switched, and `false` when the billing service declines or  fails to perform the switch, in which case nothing is charged and the portal stays on DocsCloud.  Only the DocsCloud to DocsCloudDevPack direction is supported: to change the number of users of a  subscription the portal already has, or to schedule a reversion from DocsCloudDevPack back to  DocsCloud at the next billing period, use `PUT api/2.0/portal/payment/updatewallet` instead.
     * @summary Switch DocsCloud to DocsCloudDevPack
     * @param {SettingsDocsCloudApiSwitchToDevPackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public switchToDevPack(requestParameters: DocsCloudApiSwitchToDevPackRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).switchToDevPack(requestParameters.docsCloudDevPackRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels the DocsCloud user quota report that the current user started with  `POST api/2.0/settings/docscloud/tenant/quota/report` and removes its job, so that a new report can be started  right away. There is no precondition: the call is accepted even when this user has no report job at all, and  it affects the caller\'s own job only, never one started by another administrator. The caller must be a portal  administrator allowed to edit the portal settings. The cancellation is asynchronous and idempotent: 200 means  the request has been queued for the report worker, not that the job has already stopped, so poll  `GET api/2.0/settings/docscloud/tenant/quota/report` until it returns an empty result. Nothing is returned in  the body. A report file that has already been saved in the My documents folder of the caller is left there  and has to be deleted through the file operations if it is no longer wanted.
     * @summary Terminate the DocsCloud quota report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsCloudApi
     */
    public terminateTenantQuotaReport(options?: RawAxiosRequestConfig) {
        return DocsCloudApiFp(this.configuration).terminateTenantQuotaReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the configuration of the DocsCloud tenant of the current portal: its name, the security secret and  header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter  rules; it returns the configuration as DocsCloud stored it. The portal must have an activated DocsCloud tenant,  granted by `POST api/2.0/settings/docscloud/trial` or by a DocsCloud purchase: an empty result from  `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. Read the current  values with `GET api/2.0/settings/docscloud/tenant/config` first and send back whole sections: the sections  left out of the request are not sent to DocsCloud at all, while a section that is present is sent with all of  its fields, so a field left unset inside it goes out as `0`, `false` or empty. The caller must be a portal  administrator allowed to edit the portal settings, on an installation where the DocsCloud service is  configured. The call is mutating,  synchronous and idempotent, it is recorded in the portal audit trail, and it drops the cached configuration  itself, so the next read returns the new values without `refresh=true`. The `tenantName`, `security.secret`,  `security.header` and every `ipFilter.rules` address are capped at 255 characters and `server.fileSizeLimit`  at 209715200 bytes (200 MB); a value outside those bounds is rejected with 400 before anything reaches  DocsCloud. It changes these settings only, never the subscription, the user quota or the license.
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

