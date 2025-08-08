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
import type { BalanceWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CurrenciesArrayWrapper } from '../../models';
// @ts-ignore
import type { CustomerInfoWrapper } from '../../models';
// @ts-ignore
import type { CustomerOperationsReportRequestDto } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { PaymentCalculationWrapper } from '../../models';
// @ts-ignore
import type { PaymentUrlRequestsDto } from '../../models';
// @ts-ignore
import type { QuantityRequestDto } from '../../models';
// @ts-ignore
import type { QuotaArrayWrapper } from '../../models';
// @ts-ignore
import type { QuotaWrapper } from '../../models';
// @ts-ignore
import type { ReportWrapper } from '../../models';
// @ts-ignore
import type { SalesRequestsDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TenantWalletSettingsWrapper } from '../../models';
// @ts-ignore
import type { TopUpDepositRequestDto } from '../../models';
// @ts-ignore
import type { WalletQuantityRequestDto } from '../../models';
/**
 * PaymentApi - axios parameter creator
 * @export
 */
export const PaymentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Calculate amount of the wallet payment with the parameters specified in the request.
         * @summary Calculate amount of the wallet payment
         * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for calculateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-wallet-payment/
         */
        calculateWalletPayment: async (walletQuantityRequestDto?: WalletQuantityRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/calculatewallet`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(walletQuantityRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Generates the customer operations report as csv file and save in Documents.
         * @summary Generate the customer operations report
         * @param {CustomerOperationsReportRequestDto} [customerOperationsReportRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-operations-report/
         */
        createCustomerOperationsReport: async (customerOperationsReportRequestDto?: CustomerOperationsReportRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/customer/operationsreport`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(customerOperationsReportRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the URL to the checkout setup page.
         * @summary Get the checkout setup page URL
         * @param {string} [backUrl] Back URL
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         */
        getCheckoutSetupUrl: async (backUrl?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/chechoutsetupurl`;
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

            if (backUrl !== undefined) {
                localVarQueryParameter['BackUrl'] = backUrl;
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
         * Returns the customer balance from the accounting service.
         * @summary Get the customer balance
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerBalance operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-balance/
         */
        getCustomerBalance: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/customer/balance`;
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
         * Returns the customer info.
         * @summary Get the customer info
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-info/
         */
        getCustomerInfo: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/customerinfo`;
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
         * Returns the report of customer operations from the accounting service.
         * @summary Get the customer operations
         * @param {string} [startDate] Start date
         * @param {string} [endDate] End date
         * @param {boolean} [credit] Include credit operations (true by default)
         * @param {boolean} [withdrawal] Include withdrawal operations (true by default)
         * @param {number} [offset] Offset (0 by default)
         * @param {number} [limit] Limit (25 by default)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         */
        getCustomerOperations: async (startDate?: string, endDate?: string, credit?: boolean, withdrawal?: boolean, offset?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/customer/operations`;
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

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString() :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString() :
                    endDate;
            }

            if (credit !== undefined) {
                localVarQueryParameter['credit'] = credit;
            }

            if (withdrawal !== undefined) {
                localVarQueryParameter['withdrawal'] = withdrawal;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * Returns the URL to the payment account.
         * @summary Get the payment account
         * @param {string} [backUrl] The URL where the user will be redirected after payment processing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-account/
         */
        getPaymentAccount: async (backUrl?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/account`;
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

            if (backUrl !== undefined) {
                localVarQueryParameter['backUrl'] = backUrl;
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
         * Returns the available portal currencies.
         * @summary Get currencies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentCurrencies operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-currencies/
         */
        getPaymentCurrencies: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/currencies`;
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
         * Returns the available portal quotas.
         * @summary Get quotas
         * @param {boolean} [wallet] Get wallet quotas only
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentQuotas operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/
         */
        getPaymentQuotas: async (wallet?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/quotas`;
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

            if (wallet !== undefined) {
                localVarQueryParameter['wallet'] = wallet;
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
         * Returns the URL to the payment page.
         * @summary Get the payment page URL
         * @param {PaymentUrlRequestsDto} [paymentUrlRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-url/
         */
        getPaymentUrl: async (paymentUrlRequestsDto?: PaymentUrlRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/url`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(paymentUrlRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the available portal prices.
         * @summary Get prices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-prices/
         */
        getPortalPrices: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/prices`;
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
         * Returns the payment information about the current portal quota.
         * @summary Get quota payment information
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getQuotaPaymentInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-quota-payment-information/
         */
        getQuotaPaymentInformation: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/quota`;
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
         * Returns the wallet auto top up settings.
         * @summary Get wallet auto top up settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-settings/
         */
        getTenantWalletSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/topupsettings`;
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
         * Sends a request for the portal payment.
         * @summary Send a payment request
         * @param {SalesRequestsDto} [salesRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendPaymentRequest operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/
         */
        sendPaymentRequest: async (salesRequestsDto?: SalesRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/request`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(salesRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Set the wallet auto top up settings.
         * @summary Set wallet auto top up settings
         * @param {TenantWalletSettingsWrapper} [tenantWalletSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/
         */
        setTenantWalletSettings: async (tenantWalletSettingsWrapper?: TenantWalletSettingsWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/topupsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantWalletSettingsWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns result of putting money on deposit.
         * @summary Put money on deposit
         * @param {TopUpDepositRequestDto} [topUpDepositRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for topUpDeposit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/top-up-deposit/
         */
        topUpDeposit: async (topUpDepositRequestDto?: TopUpDepositRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/deposit`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(topUpDepositRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the payment quantity with the parameters specified in the request.
         * @summary Update the payment quantity
         * @param {QuantityRequestDto} [quantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-payment/
         */
        updatePayment: async (quantityRequestDto?: QuantityRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/update`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(quantityRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the wallet payment quantity with the parameters specified in the request.
         * @summary Update the wallet payment quantity
         * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-wallet-payment/
         */
        updateWalletPayment: async (walletQuantityRequestDto?: WalletQuantityRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/payment/updatewallet`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(walletQuantityRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentApi - functional programming interface
 * @export
 */
export const PaymentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentApiAxiosParamCreator(configuration)
    return {
        /**
         * Calculate amount of the wallet payment with the parameters specified in the request.
         * @summary Calculate amount of the wallet payment
         * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for calculateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-wallet-payment/
         */
        async calculateWalletPayment(walletQuantityRequestDto?: WalletQuantityRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentCalculationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.calculateWalletPayment(walletQuantityRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.calculateWalletPayment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Generates the customer operations report as csv file and save in Documents.
         * @summary Generate the customer operations report
         * @param {CustomerOperationsReportRequestDto} [customerOperationsReportRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-operations-report/
         */
        async createCustomerOperationsReport(customerOperationsReportRequestDto?: CustomerOperationsReportRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomerOperationsReport(customerOperationsReportRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.createCustomerOperationsReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the URL to the checkout setup page.
         * @summary Get the checkout setup page URL
         * @param {string} [backUrl] Back URL
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         */
        async getCheckoutSetupUrl(backUrl?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCheckoutSetupUrl(backUrl, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCheckoutSetupUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the customer balance from the accounting service.
         * @summary Get the customer balance
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerBalance operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-balance/
         */
        async getCustomerBalance(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BalanceWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerBalance(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerBalance']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the customer info.
         * @summary Get the customer info
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-info/
         */
        async getCustomerInfo(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerInfoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerInfo(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the report of customer operations from the accounting service.
         * @summary Get the customer operations
         * @param {string} [startDate] Start date
         * @param {string} [endDate] End date
         * @param {boolean} [credit] Include credit operations (true by default)
         * @param {boolean} [withdrawal] Include withdrawal operations (true by default)
         * @param {number} [offset] Offset (0 by default)
         * @param {number} [limit] Limit (25 by default)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         */
        async getCustomerOperations(startDate?: string, endDate?: string, credit?: boolean, withdrawal?: boolean, offset?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerOperations(startDate, endDate, credit, withdrawal, offset, limit, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerOperations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the URL to the payment account.
         * @summary Get the payment account
         * @param {string} [backUrl] The URL where the user will be redirected after payment processing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-account/
         */
        async getPaymentAccount(backUrl?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentAccount(backUrl, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getPaymentAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the available portal currencies.
         * @summary Get currencies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentCurrencies operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-currencies/
         */
        async getPaymentCurrencies(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrenciesArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentCurrencies(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getPaymentCurrencies']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the available portal quotas.
         * @summary Get quotas
         * @param {boolean} [wallet] Get wallet quotas only
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentQuotas operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/
         */
        async getPaymentQuotas(wallet?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuotaArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentQuotas(wallet, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getPaymentQuotas']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the URL to the payment page.
         * @summary Get the payment page URL
         * @param {PaymentUrlRequestsDto} [paymentUrlRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-url/
         */
        async getPaymentUrl(paymentUrlRequestsDto?: PaymentUrlRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentUrl(paymentUrlRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getPaymentUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the available portal prices.
         * @summary Get prices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-prices/
         */
        async getPortalPrices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalPrices(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getPortalPrices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the payment information about the current portal quota.
         * @summary Get quota payment information
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getQuotaPaymentInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-quota-payment-information/
         */
        async getQuotaPaymentInformation(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuotaWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getQuotaPaymentInformation(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getQuotaPaymentInformation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the wallet auto top up settings.
         * @summary Get wallet auto top up settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-settings/
         */
        async getTenantWalletSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWalletSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantWalletSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getTenantWalletSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a request for the portal payment.
         * @summary Send a payment request
         * @param {SalesRequestsDto} [salesRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendPaymentRequest operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/
         */
        async sendPaymentRequest(salesRequestsDto?: SalesRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendPaymentRequest(salesRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.sendPaymentRequest']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Set the wallet auto top up settings.
         * @summary Set wallet auto top up settings
         * @param {TenantWalletSettingsWrapper} [tenantWalletSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/
         */
        async setTenantWalletSettings(tenantWalletSettingsWrapper?: TenantWalletSettingsWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWalletSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTenantWalletSettings(tenantWalletSettingsWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.setTenantWalletSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns result of putting money on deposit.
         * @summary Put money on deposit
         * @param {TopUpDepositRequestDto} [topUpDepositRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for topUpDeposit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/top-up-deposit/
         */
        async topUpDeposit(topUpDepositRequestDto?: TopUpDepositRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.topUpDeposit(topUpDepositRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.topUpDeposit']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the payment quantity with the parameters specified in the request.
         * @summary Update the payment quantity
         * @param {QuantityRequestDto} [quantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-payment/
         */
        async updatePayment(quantityRequestDto?: QuantityRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePayment(quantityRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.updatePayment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the wallet payment quantity with the parameters specified in the request.
         * @summary Update the wallet payment quantity
         * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-wallet-payment/
         */
        async updateWalletPayment(walletQuantityRequestDto?: WalletQuantityRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWalletPayment(walletQuantityRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.updateWalletPayment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PaymentApi - factory interface
 * @export
 */
export const PaymentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentApiFp(configuration)
    return {
        /**
         * Calculate amount of the wallet payment with the parameters specified in the request.
         * @summary Calculate amount of the wallet payment
         * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for calculateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-wallet-payment/
         * @throws {RequiredError}
         */
        calculateWalletPayment(walletQuantityRequestDto?: WalletQuantityRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<PaymentCalculationWrapper> {
            return localVarFp.calculateWalletPayment(walletQuantityRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates the customer operations report as csv file and save in Documents.
         * @summary Generate the customer operations report
         * @param {CustomerOperationsReportRequestDto} [customerOperationsReportRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-operations-report/
         * @throws {RequiredError}
         */
        createCustomerOperationsReport(customerOperationsReportRequestDto?: CustomerOperationsReportRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.createCustomerOperationsReport(customerOperationsReportRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URL to the checkout setup page.
         * @summary Get the checkout setup page URL
         * @param {string} [backUrl] Back URL
         * @param {*} [options] Override http request option.
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         * @throws {RequiredError}
         */
        getCheckoutSetupUrl(backUrl?: string, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getCheckoutSetupUrl(backUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the customer balance from the accounting service.
         * @summary Get the customer balance
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerBalance operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-balance/
         * @throws {RequiredError}
         */
        getCustomerBalance(refresh?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BalanceWrapper> {
            return localVarFp.getCustomerBalance(refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the customer info.
         * @summary Get the customer info
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-info/
         * @throws {RequiredError}
         */
        getCustomerInfo(refresh?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<CustomerInfoWrapper> {
            return localVarFp.getCustomerInfo(refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the report of customer operations from the accounting service.
         * @summary Get the customer operations
         * @param {string} [startDate] Start date
         * @param {string} [endDate] End date
         * @param {boolean} [credit] Include credit operations (true by default)
         * @param {boolean} [withdrawal] Include withdrawal operations (true by default)
         * @param {number} [offset] Offset (0 by default)
         * @param {number} [limit] Limit (25 by default)
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         * @throws {RequiredError}
         */
        getCustomerOperations(startDate?: string, endDate?: string, credit?: boolean, withdrawal?: boolean, offset?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<ReportWrapper> {
            return localVarFp.getCustomerOperations(startDate, endDate, credit, withdrawal, offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URL to the payment account.
         * @summary Get the payment account
         * @param {string} [backUrl] The URL where the user will be redirected after payment processing.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-account/
         * @throws {RequiredError}
         */
        getPaymentAccount(backUrl?: string, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPaymentAccount(backUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the available portal currencies.
         * @summary Get currencies
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentCurrencies operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-currencies/
         * @throws {RequiredError}
         */
        getPaymentCurrencies(options?: RawAxiosRequestConfig): AxiosPromise<CurrenciesArrayWrapper> {
            return localVarFp.getPaymentCurrencies(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the available portal quotas.
         * @summary Get quotas
         * @param {boolean} [wallet] Get wallet quotas only
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentQuotas operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/
         * @throws {RequiredError}
         */
        getPaymentQuotas(wallet?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<QuotaArrayWrapper> {
            return localVarFp.getPaymentQuotas(wallet, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URL to the payment page.
         * @summary Get the payment page URL
         * @param {PaymentUrlRequestsDto} [paymentUrlRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-url/
         * @throws {RequiredError}
         */
        getPaymentUrl(paymentUrlRequestsDto?: PaymentUrlRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPaymentUrl(paymentUrlRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the available portal prices.
         * @summary Get prices
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-prices/
         * @throws {RequiredError}
         */
        getPortalPrices(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getPortalPrices(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the payment information about the current portal quota.
         * @summary Get quota payment information
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getQuotaPaymentInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-quota-payment-information/
         * @throws {RequiredError}
         */
        getQuotaPaymentInformation(refresh?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<QuotaWrapper> {
            return localVarFp.getQuotaPaymentInformation(refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the wallet auto top up settings.
         * @summary Get wallet auto top up settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-settings/
         * @throws {RequiredError}
         */
        getTenantWalletSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletSettingsWrapper> {
            return localVarFp.getTenantWalletSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a request for the portal payment.
         * @summary Send a payment request
         * @param {SalesRequestsDto} [salesRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendPaymentRequest operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/
         * @throws {RequiredError}
         */
        sendPaymentRequest(salesRequestsDto?: SalesRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendPaymentRequest(salesRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Set the wallet auto top up settings.
         * @summary Set wallet auto top up settings
         * @param {TenantWalletSettingsWrapper} [tenantWalletSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/
         * @throws {RequiredError}
         */
        setTenantWalletSettings(tenantWalletSettingsWrapper?: TenantWalletSettingsWrapper, options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletSettingsWrapper> {
            return localVarFp.setTenantWalletSettings(tenantWalletSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns result of putting money on deposit.
         * @summary Put money on deposit
         * @param {TopUpDepositRequestDto} [topUpDepositRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for topUpDeposit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/top-up-deposit/
         * @throws {RequiredError}
         */
        topUpDeposit(topUpDepositRequestDto?: TopUpDepositRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.topUpDeposit(topUpDepositRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the payment quantity with the parameters specified in the request.
         * @summary Update the payment quantity
         * @param {QuantityRequestDto} [quantityRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updatePayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-payment/
         * @throws {RequiredError}
         */
        updatePayment(quantityRequestDto?: QuantityRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updatePayment(quantityRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the wallet payment quantity with the parameters specified in the request.
         * @summary Update the wallet payment quantity
         * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-wallet-payment/
         * @throws {RequiredError}
         */
        updateWalletPayment(walletQuantityRequestDto?: WalletQuantityRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateWalletPayment(walletQuantityRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentApi - object-oriented interface
 * @export
 * @class PaymentApi
 * @extends {BaseAPI}
 */
export class PaymentApi extends BaseAPI {
    /**
     * Calculate amount of the wallet payment with the parameters specified in the request.
     * @summary Calculate amount of the wallet payment
     * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public calculateWalletPayment(walletQuantityRequestDto?: WalletQuantityRequestDto, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).calculateWalletPayment(walletQuantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generates the customer operations report as csv file and save in Documents.
     * @summary Generate the customer operations report
     * @param {CustomerOperationsReportRequestDto} [customerOperationsReportRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public createCustomerOperationsReport(customerOperationsReportRequestDto?: CustomerOperationsReportRequestDto, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).createCustomerOperationsReport(customerOperationsReportRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URL to the checkout setup page.
     * @summary Get the checkout setup page URL
     * @param {string} [backUrl] Back URL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCheckoutSetupUrl(backUrl?: string, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCheckoutSetupUrl(backUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the customer balance from the accounting service.
     * @summary Get the customer balance
     * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerBalance(refresh?: boolean, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerBalance(refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the customer info.
     * @summary Get the customer info
     * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerInfo(refresh?: boolean, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerInfo(refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the report of customer operations from the accounting service.
     * @summary Get the customer operations
     * @param {string} [startDate] Start date
     * @param {string} [endDate] End date
     * @param {boolean} [credit] Include credit operations (true by default)
     * @param {boolean} [withdrawal] Include withdrawal operations (true by default)
     * @param {number} [offset] Offset (0 by default)
     * @param {number} [limit] Limit (25 by default)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerOperations(startDate?: string, endDate?: string, credit?: boolean, withdrawal?: boolean, offset?: number, limit?: number, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerOperations(startDate, endDate, credit, withdrawal, offset, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URL to the payment account.
     * @summary Get the payment account
     * @param {string} [backUrl] The URL where the user will be redirected after payment processing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentAccount(backUrl?: string, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentAccount(backUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the available portal currencies.
     * @summary Get currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentCurrencies(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentCurrencies(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the available portal quotas.
     * @summary Get quotas
     * @param {boolean} [wallet] Get wallet quotas only
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentQuotas(wallet?: boolean, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentQuotas(wallet, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URL to the payment page.
     * @summary Get the payment page URL
     * @param {PaymentUrlRequestsDto} [paymentUrlRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentUrl(paymentUrlRequestsDto?: PaymentUrlRequestsDto, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentUrl(paymentUrlRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the available portal prices.
     * @summary Get prices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPortalPrices(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPortalPrices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the payment information about the current portal quota.
     * @summary Get quota payment information
     * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getQuotaPaymentInformation(refresh?: boolean, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getQuotaPaymentInformation(refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the wallet auto top up settings.
     * @summary Get wallet auto top up settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getTenantWalletSettings(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getTenantWalletSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a request for the portal payment.
     * @summary Send a payment request
     * @param {SalesRequestsDto} [salesRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public sendPaymentRequest(salesRequestsDto?: SalesRequestsDto, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).sendPaymentRequest(salesRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Set the wallet auto top up settings.
     * @summary Set wallet auto top up settings
     * @param {TenantWalletSettingsWrapper} [tenantWalletSettingsWrapper] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public setTenantWalletSettings(tenantWalletSettingsWrapper?: TenantWalletSettingsWrapper, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).setTenantWalletSettings(tenantWalletSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns result of putting money on deposit.
     * @summary Put money on deposit
     * @param {TopUpDepositRequestDto} [topUpDepositRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public topUpDeposit(topUpDepositRequestDto?: TopUpDepositRequestDto, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).topUpDeposit(topUpDepositRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the payment quantity with the parameters specified in the request.
     * @summary Update the payment quantity
     * @param {QuantityRequestDto} [quantityRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public updatePayment(quantityRequestDto?: QuantityRequestDto, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).updatePayment(quantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the wallet payment quantity with the parameters specified in the request.
     * @summary Update the wallet payment quantity
     * @param {WalletQuantityRequestDto} [walletQuantityRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public updateWalletPayment(walletQuantityRequestDto?: WalletQuantityRequestDto, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).updateWalletPayment(walletQuantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

