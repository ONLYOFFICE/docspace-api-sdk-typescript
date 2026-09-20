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
import type { DoubleWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { TariffWrapper } from '../../models';
// @ts-ignore
import type { TenantQuotaWrapper } from '../../models';
// @ts-ignore
import type { UpcomingPaymentArrayWrapper } from '../../models';
/**
 * PortalQuotaApi - axios parameter creator
 * @export
 */
export const PortalQuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the quota this portal runs on - the allowance its tariff grants: how many users and paid users it may  have, how many rooms, the largest total and single-file size, the price of the quota and the feature flags  that go with it. The caller needs the portal-settings right and gets 403 without it; the call is read-only and  idempotent. Sizes are in bytes, and `maxTotalSize` comes back as `0` when the calling account\'s own role is  user, rather than as the real allowance. This is what the portal is allowed, not what it consumes: the  consumption is reported by `GET api/2.0/portal/usedspace` in gigabytes and by `GET api/2.0/portal/userscount`.  The quotas the portal could move to are listed by `GET api/2.0/portal/payment/quotas`, and  `GET api/2.0/portal/quota/right` picks the smallest of them that would still fit. A free or trial quota  carries no price, and the billing state that goes with the quota - paid, in grace period or not paid - is read  from `GET api/2.0/portal/tariff`.
         * @summary Get the portal quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-quota/
         */
        getPortalQuota: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/quota`;
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
         * Returns the tariff this portal runs on: its state, the end of the current period and the quotas - the plan and  its add-ons - it is made of. Nothing has to be called first, the call is read-only and idempotent, and it  keeps answering while the portal\'s payment has lapsed, which is what a client needs in order to show a payment  warning. How much of it is filled depends on the caller: every user gets `state`, which is `Trial`, `Paid`,  `Delay` for the grace period after the due date, or `NotPaid`; a room or DocSpace administrator also gets  `dueDate` and `delayDueDate`; and a caller with the portal-settings right additionally gets `id`,  `customerId`, `licenseDate`, the `openSource`, `enterprise` and `developer` flags and `quotas`, each entry  naming the quota, its quantity, its own due date and the quota it switches to next period. Dates are in the  portal time zone. Pass `refresh=true` to re-read the tariff from the billing system instead of the portal  cache - it is slower, so use it after a payment, not on every page. What the next period will cost is listed  by `GET api/2.0/portal/tariff/upcoming`.
         * @summary Get the portal tariff
         * @param {boolean} [refresh] Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower,  so ask for it right after a payment and leave it off for ordinary page loads.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalTariff operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-tariff/
         */
        getPortalTariff: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/tariff`;
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
         * Returns how much space the content of this portal occupies, in gigabytes rounded to two decimals, so a client  can show the storage bar next to the allowance. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent. The number is added up from the storage counters the portal  keeps per owner, which means content that belongs to no account - system data - is not part of it, and it is a  plain number, not an object. The counters are maintained as files are written and removed, so the value is  current but may lag a large operation that is still running. The allowance to compare it with is  `maxTotalSize` from `GET api/2.0/portal/quota`, in bytes rather than gigabytes, and the smallest quota that  would still fit the portal is suggested by `GET api/2.0/portal/quota/right`. This operation says nothing about  which room or user the space belongs to - the per-user figures come from the People API.
         * @summary Get the portal used space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-used-space/
         */
        getPortalUsedSpace: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/usedspace`;
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
         * Recommends the cheapest quota this portal could run on and still fit: the lowest-priced quota that is not  billed yearly, whose user allowance is above the number of active accounts and whose storage allowance is  above the space already used. The caller needs the portal-settings right and gets 403 without it. The call is  read-only, idempotent and buys nothing - it only picks one quota out of those the portal may switch to,  comparing them with the figures that `GET api/2.0/portal/userscount` and `GET api/2.0/portal/usedspace`  report. The answer is a single quota in the same shape as `GET api/2.0/portal/quota`, with sizes in bytes;  when no quota is large enough the answer is an empty body with 200 and not an error, so handle the empty  result as nothing to recommend. Yearly quotas are left out by design, so the recommendation is always a  monthly one - the full list to choose from comes from `GET api/2.0/portal/payment/quotas`, and the purchase  itself is started with `PUT api/2.0/portal/payment/url`.
         * @summary Get the recommended quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRightQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-right-quota/
         */
        getRightQuota: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/quota/right`;
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
         * Lists what this portal will be charged next for the quotas of its current tariff - one entry per quota that is  going to be billed, with the amount, the currency and the due date. The caller needs the portal-settings right  and gets 403 without it; the call is read-only and idempotent and keeps answering while the portal\'s payment  has lapsed. Only quotas that are really charged appear: an overdue quota is skipped, and so is a quota that  has no price of its own, such as a trial or a free plan - which is why the list can come back empty on a  portal that does have a tariff. When a switch to another quota is scheduled for the next period, the entry  describes that next quota and its quantity, so `id` and `name` may differ from what  `GET api/2.0/portal/tariff` reports for today. `amount` is the unit price multiplied by `quantity`, in the  currency named by `currency` as an ISO 4217 code, `dueDate` is in the portal time zone, and `wallet` marks a  service paid from the portal wallet instead of the subscription.
         * @summary Get upcoming payments
         * @param {boolean} [refresh] Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower,  so ask for it right after a payment and leave it off for ordinary page loads.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUpcomingPayments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-upcoming-payments/
         */
        getUpcomingPayments: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/tariff/upcoming`;
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
    }
};

/**
 * PortalQuotaApi - functional programming interface
 * @export
 */
export const PortalQuotaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortalQuotaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the quota this portal runs on - the allowance its tariff grants: how many users and paid users it may  have, how many rooms, the largest total and single-file size, the price of the quota and the feature flags  that go with it. The caller needs the portal-settings right and gets 403 without it; the call is read-only and  idempotent. Sizes are in bytes, and `maxTotalSize` comes back as `0` when the calling account\'s own role is  user, rather than as the real allowance. This is what the portal is allowed, not what it consumes: the  consumption is reported by `GET api/2.0/portal/usedspace` in gigabytes and by `GET api/2.0/portal/userscount`.  The quotas the portal could move to are listed by `GET api/2.0/portal/payment/quotas`, and  `GET api/2.0/portal/quota/right` picks the smallest of them that would still fit. A free or trial quota  carries no price, and the billing state that goes with the quota - paid, in grace period or not paid - is read  from `GET api/2.0/portal/tariff`.
         * @summary Get the portal quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-quota/
         */
        async getPortalQuota(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantQuotaWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalQuota(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getPortalQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the tariff this portal runs on: its state, the end of the current period and the quotas - the plan and  its add-ons - it is made of. Nothing has to be called first, the call is read-only and idempotent, and it  keeps answering while the portal\'s payment has lapsed, which is what a client needs in order to show a payment  warning. How much of it is filled depends on the caller: every user gets `state`, which is `Trial`, `Paid`,  `Delay` for the grace period after the due date, or `NotPaid`; a room or DocSpace administrator also gets  `dueDate` and `delayDueDate`; and a caller with the portal-settings right additionally gets `id`,  `customerId`, `licenseDate`, the `openSource`, `enterprise` and `developer` flags and `quotas`, each entry  naming the quota, its quantity, its own due date and the quota it switches to next period. Dates are in the  portal time zone. Pass `refresh=true` to re-read the tariff from the billing system instead of the portal  cache - it is slower, so use it after a payment, not on every page. What the next period will cost is listed  by `GET api/2.0/portal/tariff/upcoming`.
         * @summary Get the portal tariff
         * @param {boolean} [refresh] Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower,  so ask for it right after a payment and leave it off for ordinary page loads.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalTariff operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-tariff/
         */
        async getPortalTariff(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TariffWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalTariff(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getPortalTariff']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns how much space the content of this portal occupies, in gigabytes rounded to two decimals, so a client  can show the storage bar next to the allowance. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent. The number is added up from the storage counters the portal  keeps per owner, which means content that belongs to no account - system data - is not part of it, and it is a  plain number, not an object. The counters are maintained as files are written and removed, so the value is  current but may lag a large operation that is still running. The allowance to compare it with is  `maxTotalSize` from `GET api/2.0/portal/quota`, in bytes rather than gigabytes, and the smallest quota that  would still fit the portal is suggested by `GET api/2.0/portal/quota/right`. This operation says nothing about  which room or user the space belongs to - the per-user figures come from the People API.
         * @summary Get the portal used space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-used-space/
         */
        async getPortalUsedSpace(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DoubleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalUsedSpace(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getPortalUsedSpace']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recommends the cheapest quota this portal could run on and still fit: the lowest-priced quota that is not  billed yearly, whose user allowance is above the number of active accounts and whose storage allowance is  above the space already used. The caller needs the portal-settings right and gets 403 without it. The call is  read-only, idempotent and buys nothing - it only picks one quota out of those the portal may switch to,  comparing them with the figures that `GET api/2.0/portal/userscount` and `GET api/2.0/portal/usedspace`  report. The answer is a single quota in the same shape as `GET api/2.0/portal/quota`, with sizes in bytes;  when no quota is large enough the answer is an empty body with 200 and not an error, so handle the empty  result as nothing to recommend. Yearly quotas are left out by design, so the recommendation is always a  monthly one - the full list to choose from comes from `GET api/2.0/portal/payment/quotas`, and the purchase  itself is started with `PUT api/2.0/portal/payment/url`.
         * @summary Get the recommended quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRightQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-right-quota/
         */
        async getRightQuota(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantQuotaWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRightQuota(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getRightQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists what this portal will be charged next for the quotas of its current tariff - one entry per quota that is  going to be billed, with the amount, the currency and the due date. The caller needs the portal-settings right  and gets 403 without it; the call is read-only and idempotent and keeps answering while the portal\'s payment  has lapsed. Only quotas that are really charged appear: an overdue quota is skipped, and so is a quota that  has no price of its own, such as a trial or a free plan - which is why the list can come back empty on a  portal that does have a tariff. When a switch to another quota is scheduled for the next period, the entry  describes that next quota and its quantity, so `id` and `name` may differ from what  `GET api/2.0/portal/tariff` reports for today. `amount` is the unit price multiplied by `quantity`, in the  currency named by `currency` as an ISO 4217 code, `dueDate` is in the portal time zone, and `wallet` marks a  service paid from the portal wallet instead of the subscription.
         * @summary Get upcoming payments
         * @param {boolean} [refresh] Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower,  so ask for it right after a payment and leave it off for ordinary page loads.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUpcomingPayments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-upcoming-payments/
         */
        async getUpcomingPayments(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpcomingPaymentArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUpcomingPayments(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getUpcomingPayments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PortalQuotaApi - factory interface
 * @export
 */
export const PortalQuotaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortalQuotaApiFp(configuration)
    return {
        /**
         * Returns the quota this portal runs on - the allowance its tariff grants: how many users and paid users it may  have, how many rooms, the largest total and single-file size, the price of the quota and the feature flags  that go with it. The caller needs the portal-settings right and gets 403 without it; the call is read-only and  idempotent. Sizes are in bytes, and `maxTotalSize` comes back as `0` when the calling account\'s own role is  user, rather than as the real allowance. This is what the portal is allowed, not what it consumes: the  consumption is reported by `GET api/2.0/portal/usedspace` in gigabytes and by `GET api/2.0/portal/userscount`.  The quotas the portal could move to are listed by `GET api/2.0/portal/payment/quotas`, and  `GET api/2.0/portal/quota/right` picks the smallest of them that would still fit. A free or trial quota  carries no price, and the billing state that goes with the quota - paid, in grace period or not paid - is read  from `GET api/2.0/portal/tariff`.
         * @summary Get the portal quota
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-quota/
         * @throws {RequiredError}
         */
        getPortalQuota(options?: RawAxiosRequestConfig): AxiosPromise<TenantQuotaWrapper> {
            return localVarFp.getPortalQuota(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the tariff this portal runs on: its state, the end of the current period and the quotas - the plan and  its add-ons - it is made of. Nothing has to be called first, the call is read-only and idempotent, and it  keeps answering while the portal\'s payment has lapsed, which is what a client needs in order to show a payment  warning. How much of it is filled depends on the caller: every user gets `state`, which is `Trial`, `Paid`,  `Delay` for the grace period after the due date, or `NotPaid`; a room or DocSpace administrator also gets  `dueDate` and `delayDueDate`; and a caller with the portal-settings right additionally gets `id`,  `customerId`, `licenseDate`, the `openSource`, `enterprise` and `developer` flags and `quotas`, each entry  naming the quota, its quantity, its own due date and the quota it switches to next period. Dates are in the  portal time zone. Pass `refresh=true` to re-read the tariff from the billing system instead of the portal  cache - it is slower, so use it after a payment, not on every page. What the next period will cost is listed  by `GET api/2.0/portal/tariff/upcoming`.
         * @summary Get the portal tariff
         * @param {PortalQuotaApiGetPortalTariffRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalTariff operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-tariff/
         * @throws {RequiredError}
         */
        getPortalTariff(requestParameters: PortalQuotaApiGetPortalTariffRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TariffWrapper> {
            return localVarFp.getPortalTariff(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns how much space the content of this portal occupies, in gigabytes rounded to two decimals, so a client  can show the storage bar next to the allowance. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent. The number is added up from the storage counters the portal  keeps per owner, which means content that belongs to no account - system data - is not part of it, and it is a  plain number, not an object. The counters are maintained as files are written and removed, so the value is  current but may lag a large operation that is still running. The allowance to compare it with is  `maxTotalSize` from `GET api/2.0/portal/quota`, in bytes rather than gigabytes, and the smallest quota that  would still fit the portal is suggested by `GET api/2.0/portal/quota/right`. This operation says nothing about  which room or user the space belongs to - the per-user figures come from the People API.
         * @summary Get the portal used space
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-used-space/
         * @throws {RequiredError}
         */
        getPortalUsedSpace(options?: RawAxiosRequestConfig): AxiosPromise<DoubleWrapper> {
            return localVarFp.getPortalUsedSpace(options).then((request) => request(axios, basePath));
        },
        /**
         * Recommends the cheapest quota this portal could run on and still fit: the lowest-priced quota that is not  billed yearly, whose user allowance is above the number of active accounts and whose storage allowance is  above the space already used. The caller needs the portal-settings right and gets 403 without it. The call is  read-only, idempotent and buys nothing - it only picks one quota out of those the portal may switch to,  comparing them with the figures that `GET api/2.0/portal/userscount` and `GET api/2.0/portal/usedspace`  report. The answer is a single quota in the same shape as `GET api/2.0/portal/quota`, with sizes in bytes;  when no quota is large enough the answer is an empty body with 200 and not an error, so handle the empty  result as nothing to recommend. Yearly quotas are left out by design, so the recommendation is always a  monthly one - the full list to choose from comes from `GET api/2.0/portal/payment/quotas`, and the purchase  itself is started with `PUT api/2.0/portal/payment/url`.
         * @summary Get the recommended quota
         * @param {*} [options] Override http request option.
         * REST API Reference for getRightQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-right-quota/
         * @throws {RequiredError}
         */
        getRightQuota(options?: RawAxiosRequestConfig): AxiosPromise<TenantQuotaWrapper> {
            return localVarFp.getRightQuota(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists what this portal will be charged next for the quotas of its current tariff - one entry per quota that is  going to be billed, with the amount, the currency and the due date. The caller needs the portal-settings right  and gets 403 without it; the call is read-only and idempotent and keeps answering while the portal\'s payment  has lapsed. Only quotas that are really charged appear: an overdue quota is skipped, and so is a quota that  has no price of its own, such as a trial or a free plan - which is why the list can come back empty on a  portal that does have a tariff. When a switch to another quota is scheduled for the next period, the entry  describes that next quota and its quantity, so `id` and `name` may differ from what  `GET api/2.0/portal/tariff` reports for today. `amount` is the unit price multiplied by `quantity`, in the  currency named by `currency` as an ISO 4217 code, `dueDate` is in the portal time zone, and `wallet` marks a  service paid from the portal wallet instead of the subscription.
         * @summary Get upcoming payments
         * @param {PortalQuotaApiGetUpcomingPaymentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUpcomingPayments operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-upcoming-payments/
         * @throws {RequiredError}
         */
        getUpcomingPayments(requestParameters: PortalQuotaApiGetUpcomingPaymentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UpcomingPaymentArrayWrapper> {
            return localVarFp.getUpcomingPayments(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPortalTariff operation in PortalQuotaApi.
 * @export
 * @interface PortalQuotaApiGetPortalTariffRequest
 */
export interface PortalQuotaApiGetPortalTariffRequest {
    /**
     * Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower,  so ask for it right after a payment and leave it off for ordinary page loads.
     * @type {boolean}
     * @memberof PortalQuotaApiGetPortalTariff
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getUpcomingPayments operation in PortalQuotaApi.
 * @export
 * @interface PortalQuotaApiGetUpcomingPaymentsRequest
 */
export interface PortalQuotaApiGetUpcomingPaymentsRequest {
    /**
     * Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower,  so ask for it right after a payment and leave it off for ordinary page loads.
     * @type {boolean}
     * @memberof PortalQuotaApiGetUpcomingPayments
     */
    readonly refresh?: boolean
}

/**
 * PortalQuotaApi - object-oriented interface
 * @export
 * @class PortalQuotaApi
 * @extends {BaseAPI}
 */
export class PortalQuotaApi extends BaseAPI {
    /**
     * Returns the quota this portal runs on - the allowance its tariff grants: how many users and paid users it may  have, how many rooms, the largest total and single-file size, the price of the quota and the feature flags  that go with it. The caller needs the portal-settings right and gets 403 without it; the call is read-only and  idempotent. Sizes are in bytes, and `maxTotalSize` comes back as `0` when the calling account\'s own role is  user, rather than as the real allowance. This is what the portal is allowed, not what it consumes: the  consumption is reported by `GET api/2.0/portal/usedspace` in gigabytes and by `GET api/2.0/portal/userscount`.  The quotas the portal could move to are listed by `GET api/2.0/portal/payment/quotas`, and  `GET api/2.0/portal/quota/right` picks the smallest of them that would still fit. A free or trial quota  carries no price, and the billing state that goes with the quota - paid, in grace period or not paid - is read  from `GET api/2.0/portal/tariff`.
     * @summary Get the portal quota
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getPortalQuota(options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getPortalQuota(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the tariff this portal runs on: its state, the end of the current period and the quotas - the plan and  its add-ons - it is made of. Nothing has to be called first, the call is read-only and idempotent, and it  keeps answering while the portal\'s payment has lapsed, which is what a client needs in order to show a payment  warning. How much of it is filled depends on the caller: every user gets `state`, which is `Trial`, `Paid`,  `Delay` for the grace period after the due date, or `NotPaid`; a room or DocSpace administrator also gets  `dueDate` and `delayDueDate`; and a caller with the portal-settings right additionally gets `id`,  `customerId`, `licenseDate`, the `openSource`, `enterprise` and `developer` flags and `quotas`, each entry  naming the quota, its quantity, its own due date and the quota it switches to next period. Dates are in the  portal time zone. Pass `refresh=true` to re-read the tariff from the billing system instead of the portal  cache - it is slower, so use it after a payment, not on every page. What the next period will cost is listed  by `GET api/2.0/portal/tariff/upcoming`.
     * @summary Get the portal tariff
     * @param {PortalQuotaApiGetPortalTariffRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getPortalTariff(requestParameters: PortalQuotaApiGetPortalTariffRequest = {}, options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getPortalTariff(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns how much space the content of this portal occupies, in gigabytes rounded to two decimals, so a client  can show the storage bar next to the allowance. The caller needs the portal-settings right and is refused  without it; the call is read-only and idempotent. The number is added up from the storage counters the portal  keeps per owner, which means content that belongs to no account - system data - is not part of it, and it is a  plain number, not an object. The counters are maintained as files are written and removed, so the value is  current but may lag a large operation that is still running. The allowance to compare it with is  `maxTotalSize` from `GET api/2.0/portal/quota`, in bytes rather than gigabytes, and the smallest quota that  would still fit the portal is suggested by `GET api/2.0/portal/quota/right`. This operation says nothing about  which room or user the space belongs to - the per-user figures come from the People API.
     * @summary Get the portal used space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getPortalUsedSpace(options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getPortalUsedSpace(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recommends the cheapest quota this portal could run on and still fit: the lowest-priced quota that is not  billed yearly, whose user allowance is above the number of active accounts and whose storage allowance is  above the space already used. The caller needs the portal-settings right and gets 403 without it. The call is  read-only, idempotent and buys nothing - it only picks one quota out of those the portal may switch to,  comparing them with the figures that `GET api/2.0/portal/userscount` and `GET api/2.0/portal/usedspace`  report. The answer is a single quota in the same shape as `GET api/2.0/portal/quota`, with sizes in bytes;  when no quota is large enough the answer is an empty body with 200 and not an error, so handle the empty  result as nothing to recommend. Yearly quotas are left out by design, so the recommendation is always a  monthly one - the full list to choose from comes from `GET api/2.0/portal/payment/quotas`, and the purchase  itself is started with `PUT api/2.0/portal/payment/url`.
     * @summary Get the recommended quota
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getRightQuota(options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getRightQuota(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists what this portal will be charged next for the quotas of its current tariff - one entry per quota that is  going to be billed, with the amount, the currency and the due date. The caller needs the portal-settings right  and gets 403 without it; the call is read-only and idempotent and keeps answering while the portal\'s payment  has lapsed. Only quotas that are really charged appear: an overdue quota is skipped, and so is a quota that  has no price of its own, such as a trial or a free plan - which is why the list can come back empty on a  portal that does have a tariff. When a switch to another quota is scheduled for the next period, the entry  describes that next quota and its quantity, so `id` and `name` may differ from what  `GET api/2.0/portal/tariff` reports for today. `amount` is the unit price multiplied by `quantity`, in the  currency named by `currency` as an ISO 4217 code, `dueDate` is in the portal time zone, and `wallet` marks a  service paid from the portal wallet instead of the subscription.
     * @summary Get upcoming payments
     * @param {PortalQuotaApiGetUpcomingPaymentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getUpcomingPayments(requestParameters: PortalQuotaApiGetUpcomingPaymentsRequest = {}, options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getUpcomingPayments(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }
}

