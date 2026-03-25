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
import type { AiPricesResponseWrapper } from '../../models';
// @ts-ignore
import type { BalanceWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { BuyWalletServiceRequestDto } from '../../models';
// @ts-ignore
import type { ChangeWalletServiceStateRequestDto } from '../../models';
// @ts-ignore
import type { CurrenciesArrayWrapper } from '../../models';
// @ts-ignore
import type { CustomerInfoWrapper } from '../../models';
// @ts-ignore
import type { CustomerOperationsReportRequestDto } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { GetPortalPrices200Response } from '../../models';
// @ts-ignore
import type { OperationOrderType } from '../../models';
// @ts-ignore
import type { OperationStatus } from '../../models';
// @ts-ignore
import type { OperationType } from '../../models';
// @ts-ignore
import type { PaymentCalculationWrapper } from '../../models';
// @ts-ignore
import type { PaymentUrlRequestDto } from '../../models';
// @ts-ignore
import type { QuantityRequestDto } from '../../models';
// @ts-ignore
import type { QuotaArrayWrapper } from '../../models';
// @ts-ignore
import type { QuotaWrapper } from '../../models';
// @ts-ignore
import type { ReportWrapper } from '../../models';
// @ts-ignore
import type { RestrictedModelsResponseWrapper } from '../../models';
// @ts-ignore
import type { SalesRequestsDto } from '../../models';
// @ts-ignore
import type { ServicePaymentWrapper } from '../../models';
// @ts-ignore
import type { SetRestrictedAiModelsRequestDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TenantWalletService } from '../../models';
// @ts-ignore
import type { TenantWalletServiceSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantWalletSettingsWrapper } from '../../models';
// @ts-ignore
import type { TopUpDepositRequestDto } from '../../models';
// @ts-ignore
import type { WalletQuantityRequestDto } from '../../models';
// @ts-ignore
import type { WalletServiceArrayWrapper } from '../../models';
// @ts-ignore
import type { WalletServiceWrapper } from '../../models';
/**
 * PaymentApi - axios parameter creator
 * @export
 */
export const PaymentApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * This method processes a payment for a wallet service using the configured payment method.  Requires the tariff service to be configured and a valid payment method to be set for the customer.  Rate limiting is applied according to the payments API policy.
         * @summary Purchases a wallet service with the specified quantity.
         * @param {BuyWalletServiceRequestDto} [buyWalletServiceRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for buyWalletService operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/buy-wallet-service/
         */
        buyWalletService: async (buyWalletServiceRequestDto?: BuyWalletServiceRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/buywalletservice`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(buyWalletServiceRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Calculates an amount of the wallet payment with the parameters specified in the request.
         * @summary Calculate the wallet payment amount
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
         * Changes the state of a wallet service for the current tenant.  Requires permission to edit portal settings and a configured tariff service.  Adds or removes the specified service from the enabled services list based on the enabled flag.
         * @summary Change tenant wallet service state
         * @param {ChangeWalletServiceStateRequestDto} [changeWalletServiceStateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeTenantWalletServiceState operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-tenant-wallet-service-state/
         */
        changeTenantWalletServiceState: async (changeWalletServiceStateRequestDto?: ChangeWalletServiceStateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicestate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(changeWalletServiceStateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts generating a customer operations report as an xlsx file and saves it in Documents.
         * @summary Start the customer operations report generation
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
         * Retrieves the pricing information for AI models including chat, embedding, and web search services.  The prices are returned in the configured currency and normalized per million tokens.  Requires administrator permissions to access.
         * @summary Get AI model prices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAiPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-prices/
         */
        getAiPrices: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/ai-prices`;
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
         * Returns the URL to the checkout setup page.
         * @summary Get the checkout setup page URL
         * @param {string} [backUrl] The URL where the user will be redirected after completing the setup.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         */
        getCheckoutSetupUrl: async (backUrl?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/checkoutsetupurl`;
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
         * Returns the customer information.
         * @summary Get the customer information
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
         * @param {number} [offset] The number of items to skip for pagination. The default value is 0.
         * @param {number} [limit] The maximum number of items to return for pagination. The default value is 25.
         * @param {string} [serviceName] The service name.
         * @param {boolean} [writeOffServiceQuota] Write-off of the quota for the service
         * @param {string} [startDate] The report start date.
         * @param {string} [endDate] The report end date.
         * @param {string} [participantName] The participant name.
         * @param {boolean} [credit] Specifies whether to include credit operations in the report.
         * @param {boolean} [debit] Specifies whether to include debit operations in the report.
         * @param {OperationType} [types] List of operation types to filter by.
         * @param {OperationStatus} [status] List of operation status to filter by.
         * @param {string} [orderBy] The field to order by.
         * @param {OperationOrderType} [orderType] Order direction: Ascending or Descending.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         */
        getCustomerOperations: async (offset?: number, limit?: number, serviceName?: string, writeOffServiceQuota?: boolean, startDate?: string, endDate?: string, participantName?: string, credit?: boolean, debit?: boolean, types?: OperationType, status?: OperationStatus, orderBy?: string, orderType?: OperationOrderType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (serviceName !== undefined) {
                localVarQueryParameter['ServiceName'] = serviceName;
            }

            if (writeOffServiceQuota !== undefined) {
                localVarQueryParameter['WriteOffServiceQuota'] = writeOffServiceQuota;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['StartDate'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString() :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['EndDate'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString() :
                    endDate;
            }

            if (participantName !== undefined) {
                localVarQueryParameter['ParticipantName'] = participantName;
            }

            if (credit !== undefined) {
                localVarQueryParameter['Credit'] = credit;
            }

            if (debit !== undefined) {
                localVarQueryParameter['Debit'] = debit;
            }

            if (types !== undefined) {
                localVarQueryParameter['Types'] = types;
            }

            if (status !== undefined) {
                localVarQueryParameter['Status'] = status;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['OrderBy'] = orderBy;
            }

            if (orderType !== undefined) {
                localVarQueryParameter['OrderType'] = orderType;
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
         * Returns the status of generating a customer operations report.
         * @summary Get the status of the customer operations report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations-report/
         */
        getCustomerOperationsReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/operationsreport`;
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
         * Returns the service quota from the accounting service.
         * @summary Get the service quota
         * @param {string} [serviceName] The service name.
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerServiceQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-quota/
         */
        getCustomerServiceQuota: async (serviceName?: string, refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/servicequota`;
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

            if (serviceName !== undefined) {
                localVarQueryParameter['serviceName'] = serviceName;
            }

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
         * @param {boolean} [wallet] Specifies whether to return the wallet quotas only.
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
         * @param {PaymentUrlRequestDto} [paymentUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-url/
         */
        getPaymentUrl: async (paymentUrlRequestDto?: PaymentUrlRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(paymentUrlRequestDto, localVarRequestOptions, configuration)

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
         * Returns the list of AI chat model IDs that are restricted (disabled) for the current tenant.  Restricted models cannot be used for AI chat conversations by any user within the portal.  Only DocSpace administrators can access this endpoint.
         * @summary Get restricted AI models
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restricted-ai-models/
         */
        getRestrictedAiModels: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/ai-model/restrictions`;
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
         * Retrieves configuration settings related to the wallet service associated with the current tenant.
         * @summary Gets the wallet service settings for the tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWalletServiceSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-service-settings/
         */
        getTenantWalletServiceSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicessettings`;
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
         * Returns the wallet auto top up settings for the current tenant.
         * @summary Gets the tenant wallet auto top up settings
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
         * Returns the specified wallet service.
         * @summary Get wallet service
         * @param {TenantWalletService} service The wallet service type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWalletService operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-service/
         */
        getWalletService: async (service: TenantWalletService, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'service' is not null or undefined
            assertParamExists('getWalletService', 'service', service)

            const localVarPath = `/api/2.0/portal/payment/walletservice`;
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

            if (service !== undefined) {
                localVarQueryParameter['service'] = service;
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
         * Returns the available wallet services.
         * @summary Get wallet services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWalletServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-services/
         */
        getWalletServices: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/walletservices`;
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
         * Overwrites the entire set of restricted AI model IDs for the current tenant.  The request body must contain the complete desired set — to add a restriction, include the new model alongside existing ones;  to remove one, omit it. An empty set lifts all restrictions. Only the portal payer can perform this action.
         * @summary Set restricted AI models
         * @param {SetRestrictedAiModelsRequestDto} [setRestrictedAiModelsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-restricted-ai-models/
         */
        setRestrictedAiModels: async (setRestrictedAiModelsRequestDto?: SetRestrictedAiModelsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/ai-model/restrictions`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setRestrictedAiModelsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the wallet auto top up settings for the current tenant.  Requires the tariff service to be configured and the user to be authorized as a payer.  Returns null if the tariff service is not configured or customer information/balance cannot be retrieved.
         * @summary Set the wallet auto top up settings
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
         * Terminates generating a customer operations report.
         * @summary Terminate the customer operations report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-operations-report/
         */
        terminateCustomerOperationsReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/operationsreport`;
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
         * Returns the result of putting money on deposit.
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
         * This method processes a payment for a wallet service using the configured payment method.  Requires the tariff service to be configured and a valid payment method to be set for the customer.  Rate limiting is applied according to the payments API policy.
         * @summary Purchases a wallet service with the specified quantity.
         * @param {BuyWalletServiceRequestDto} [buyWalletServiceRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for buyWalletService operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/buy-wallet-service/
         */
        async buyWalletService(buyWalletServiceRequestDto?: BuyWalletServiceRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServicePaymentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.buyWalletService(buyWalletServiceRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.buyWalletService']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Calculates an amount of the wallet payment with the parameters specified in the request.
         * @summary Calculate the wallet payment amount
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
         * Changes the state of a wallet service for the current tenant.  Requires permission to edit portal settings and a configured tariff service.  Adds or removes the specified service from the enabled services list based on the enabled flag.
         * @summary Change tenant wallet service state
         * @param {ChangeWalletServiceStateRequestDto} [changeWalletServiceStateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeTenantWalletServiceState operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-tenant-wallet-service-state/
         */
        async changeTenantWalletServiceState(changeWalletServiceStateRequestDto?: ChangeWalletServiceStateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWalletServiceSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeTenantWalletServiceState(changeWalletServiceStateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.changeTenantWalletServiceState']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts generating a customer operations report as an xlsx file and saves it in Documents.
         * @summary Start the customer operations report generation
         * @param {CustomerOperationsReportRequestDto} [customerOperationsReportRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-operations-report/
         */
        async createCustomerOperationsReport(customerOperationsReportRequestDto?: CustomerOperationsReportRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomerOperationsReport(customerOperationsReportRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.createCustomerOperationsReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the pricing information for AI models including chat, embedding, and web search services.  The prices are returned in the configured currency and normalized per million tokens.  Requires administrator permissions to access.
         * @summary Get AI model prices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAiPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-prices/
         */
        async getAiPrices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPricesResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAiPrices(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getAiPrices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the URL to the checkout setup page.
         * @summary Get the checkout setup page URL
         * @param {string} [backUrl] The URL where the user will be redirected after completing the setup.
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
         * Returns the customer information.
         * @summary Get the customer information
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
         * @param {number} [offset] The number of items to skip for pagination. The default value is 0.
         * @param {number} [limit] The maximum number of items to return for pagination. The default value is 25.
         * @param {string} [serviceName] The service name.
         * @param {boolean} [writeOffServiceQuota] Write-off of the quota for the service
         * @param {string} [startDate] The report start date.
         * @param {string} [endDate] The report end date.
         * @param {string} [participantName] The participant name.
         * @param {boolean} [credit] Specifies whether to include credit operations in the report.
         * @param {boolean} [debit] Specifies whether to include debit operations in the report.
         * @param {OperationType} [types] List of operation types to filter by.
         * @param {OperationStatus} [status] List of operation status to filter by.
         * @param {string} [orderBy] The field to order by.
         * @param {OperationOrderType} [orderType] Order direction: Ascending or Descending.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         */
        async getCustomerOperations(offset?: number, limit?: number, serviceName?: string, writeOffServiceQuota?: boolean, startDate?: string, endDate?: string, participantName?: string, credit?: boolean, debit?: boolean, types?: OperationType, status?: OperationStatus, orderBy?: string, orderType?: OperationOrderType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerOperations(offset, limit, serviceName, writeOffServiceQuota, startDate, endDate, participantName, credit, debit, types, status, orderBy, orderType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerOperations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the status of generating a customer operations report.
         * @summary Get the status of the customer operations report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations-report/
         */
        async getCustomerOperationsReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerOperationsReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerOperationsReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the service quota from the accounting service.
         * @summary Get the service quota
         * @param {string} [serviceName] The service name.
         * @param {boolean} [refresh] Specifies whether to refresh the payment information cache or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerServiceQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-quota/
         */
        async getCustomerServiceQuota(serviceName?: string, refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BalanceWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerServiceQuota(serviceName, refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerServiceQuota']?.[localVarOperationServerIndex]?.url;
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
         * @param {boolean} [wallet] Specifies whether to return the wallet quotas only.
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
         * @param {PaymentUrlRequestDto} [paymentUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-url/
         */
        async getPaymentUrl(paymentUrlRequestDto?: PaymentUrlRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentUrl(paymentUrlRequestDto, options);
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
        async getPortalPrices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPortalPrices200Response>> {
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
         * Returns the list of AI chat model IDs that are restricted (disabled) for the current tenant.  Restricted models cannot be used for AI chat conversations by any user within the portal.  Only DocSpace administrators can access this endpoint.
         * @summary Get restricted AI models
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restricted-ai-models/
         */
        async getRestrictedAiModels(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestrictedModelsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRestrictedAiModels(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getRestrictedAiModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves configuration settings related to the wallet service associated with the current tenant.
         * @summary Gets the wallet service settings for the tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWalletServiceSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-service-settings/
         */
        async getTenantWalletServiceSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWalletServiceSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantWalletServiceSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getTenantWalletServiceSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the wallet auto top up settings for the current tenant.
         * @summary Gets the tenant wallet auto top up settings
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
         * Returns the specified wallet service.
         * @summary Get wallet service
         * @param {TenantWalletService} service The wallet service type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWalletService operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-service/
         */
        async getWalletService(service: TenantWalletService, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WalletServiceWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletService(service, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getWalletService']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the available wallet services.
         * @summary Get wallet services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWalletServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-services/
         */
        async getWalletServices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WalletServiceArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletServices(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getWalletServices']?.[localVarOperationServerIndex]?.url;
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
         * Overwrites the entire set of restricted AI model IDs for the current tenant.  The request body must contain the complete desired set — to add a restriction, include the new model alongside existing ones;  to remove one, omit it. An empty set lifts all restrictions. Only the portal payer can perform this action.
         * @summary Set restricted AI models
         * @param {SetRestrictedAiModelsRequestDto} [setRestrictedAiModelsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-restricted-ai-models/
         */
        async setRestrictedAiModels(setRestrictedAiModelsRequestDto?: SetRestrictedAiModelsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestrictedModelsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRestrictedAiModels(setRestrictedAiModelsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.setRestrictedAiModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the wallet auto top up settings for the current tenant.  Requires the tariff service to be configured and the user to be authorized as a payer.  Returns null if the tariff service is not configured or customer information/balance cannot be retrieved.
         * @summary Set the wallet auto top up settings
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
         * Terminates generating a customer operations report.
         * @summary Terminate the customer operations report generation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-operations-report/
         */
        async terminateCustomerOperationsReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateCustomerOperationsReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.terminateCustomerOperationsReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the result of putting money on deposit.
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
         * This method processes a payment for a wallet service using the configured payment method.  Requires the tariff service to be configured and a valid payment method to be set for the customer.  Rate limiting is applied according to the payments API policy.
         * @summary Purchases a wallet service with the specified quantity.
         * @param {PaymentApiBuyWalletServiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for buyWalletService operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/buy-wallet-service/
         * @throws {RequiredError}
         */
        buyWalletService(requestParameters: PaymentApiBuyWalletServiceRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ServicePaymentWrapper> {
            return localVarFp.buyWalletService(requestParameters.buyWalletServiceRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Calculates an amount of the wallet payment with the parameters specified in the request.
         * @summary Calculate the wallet payment amount
         * @param {PaymentApiCalculateWalletPaymentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for calculateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-wallet-payment/
         * @throws {RequiredError}
         */
        calculateWalletPayment(requestParameters: PaymentApiCalculateWalletPaymentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PaymentCalculationWrapper> {
            return localVarFp.calculateWalletPayment(requestParameters.walletQuantityRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the state of a wallet service for the current tenant.  Requires permission to edit portal settings and a configured tariff service.  Adds or removes the specified service from the enabled services list based on the enabled flag.
         * @summary Change tenant wallet service state
         * @param {PaymentApiChangeTenantWalletServiceStateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeTenantWalletServiceState operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-tenant-wallet-service-state/
         * @throws {RequiredError}
         */
        changeTenantWalletServiceState(requestParameters: PaymentApiChangeTenantWalletServiceStateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletServiceSettingsWrapper> {
            return localVarFp.changeTenantWalletServiceState(requestParameters.changeWalletServiceStateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts generating a customer operations report as an xlsx file and saves it in Documents.
         * @summary Start the customer operations report generation
         * @param {PaymentApiCreateCustomerOperationsReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-operations-report/
         * @throws {RequiredError}
         */
        createCustomerOperationsReport(requestParameters: PaymentApiCreateCustomerOperationsReportRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createCustomerOperationsReport(requestParameters.customerOperationsReportRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the pricing information for AI models including chat, embedding, and web search services.  The prices are returned in the configured currency and normalized per million tokens.  Requires administrator permissions to access.
         * @summary Get AI model prices
         * @param {*} [options] Override http request option.
         * REST API Reference for getAiPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-prices/
         * @throws {RequiredError}
         */
        getAiPrices(options?: RawAxiosRequestConfig): AxiosPromise<AiPricesResponseWrapper> {
            return localVarFp.getAiPrices(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URL to the checkout setup page.
         * @summary Get the checkout setup page URL
         * @param {PaymentApiGetCheckoutSetupUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         * @throws {RequiredError}
         */
        getCheckoutSetupUrl(requestParameters: PaymentApiGetCheckoutSetupUrlRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getCheckoutSetupUrl(requestParameters.backUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the customer balance from the accounting service.
         * @summary Get the customer balance
         * @param {PaymentApiGetCustomerBalanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerBalance operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-balance/
         * @throws {RequiredError}
         */
        getCustomerBalance(requestParameters: PaymentApiGetCustomerBalanceRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BalanceWrapper> {
            return localVarFp.getCustomerBalance(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the customer information.
         * @summary Get the customer information
         * @param {PaymentApiGetCustomerInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-info/
         * @throws {RequiredError}
         */
        getCustomerInfo(requestParameters: PaymentApiGetCustomerInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CustomerInfoWrapper> {
            return localVarFp.getCustomerInfo(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the report of customer operations from the accounting service.
         * @summary Get the customer operations
         * @param {PaymentApiGetCustomerOperationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         * @throws {RequiredError}
         */
        getCustomerOperations(requestParameters: PaymentApiGetCustomerOperationsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReportWrapper> {
            return localVarFp.getCustomerOperations(requestParameters.offset, requestParameters.limit, requestParameters.serviceName, requestParameters.writeOffServiceQuota, requestParameters.startDate, requestParameters.endDate, requestParameters.participantName, requestParameters.credit, requestParameters.debit, requestParameters.types, requestParameters.status, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the status of generating a customer operations report.
         * @summary Get the status of the customer operations report generation
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations-report/
         * @throws {RequiredError}
         */
        getCustomerOperationsReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getCustomerOperationsReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the service quota from the accounting service.
         * @summary Get the service quota
         * @param {PaymentApiGetCustomerServiceQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerServiceQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-quota/
         * @throws {RequiredError}
         */
        getCustomerServiceQuota(requestParameters: PaymentApiGetCustomerServiceQuotaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BalanceWrapper> {
            return localVarFp.getCustomerServiceQuota(requestParameters.serviceName, requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URL to the payment account.
         * @summary Get the payment account
         * @param {PaymentApiGetPaymentAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-account/
         * @throws {RequiredError}
         */
        getPaymentAccount(requestParameters: PaymentApiGetPaymentAccountRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPaymentAccount(requestParameters.backUrl, options).then((request) => request(axios, basePath));
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
         * @param {PaymentApiGetPaymentQuotasRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentQuotas operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/
         * @throws {RequiredError}
         */
        getPaymentQuotas(requestParameters: PaymentApiGetPaymentQuotasRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<QuotaArrayWrapper> {
            return localVarFp.getPaymentQuotas(requestParameters.wallet, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URL to the payment page.
         * @summary Get the payment page URL
         * @param {PaymentApiGetPaymentUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-url/
         * @throws {RequiredError}
         */
        getPaymentUrl(requestParameters: PaymentApiGetPaymentUrlRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPaymentUrl(requestParameters.paymentUrlRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the available portal prices.
         * @summary Get prices
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-prices/
         * @throws {RequiredError}
         */
        getPortalPrices(options?: RawAxiosRequestConfig): AxiosPromise<GetPortalPrices200Response> {
            return localVarFp.getPortalPrices(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the payment information about the current portal quota.
         * @summary Get quota payment information
         * @param {PaymentApiGetQuotaPaymentInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getQuotaPaymentInformation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-quota-payment-information/
         * @throws {RequiredError}
         */
        getQuotaPaymentInformation(requestParameters: PaymentApiGetQuotaPaymentInformationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<QuotaWrapper> {
            return localVarFp.getQuotaPaymentInformation(requestParameters.refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of AI chat model IDs that are restricted (disabled) for the current tenant.  Restricted models cannot be used for AI chat conversations by any user within the portal.  Only DocSpace administrators can access this endpoint.
         * @summary Get restricted AI models
         * @param {*} [options] Override http request option.
         * REST API Reference for getRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restricted-ai-models/
         * @throws {RequiredError}
         */
        getRestrictedAiModels(options?: RawAxiosRequestConfig): AxiosPromise<RestrictedModelsResponseWrapper> {
            return localVarFp.getRestrictedAiModels(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves configuration settings related to the wallet service associated with the current tenant.
         * @summary Gets the wallet service settings for the tenant.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantWalletServiceSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-service-settings/
         * @throws {RequiredError}
         */
        getTenantWalletServiceSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletServiceSettingsWrapper> {
            return localVarFp.getTenantWalletServiceSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the wallet auto top up settings for the current tenant.
         * @summary Gets the tenant wallet auto top up settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-settings/
         * @throws {RequiredError}
         */
        getTenantWalletSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletSettingsWrapper> {
            return localVarFp.getTenantWalletSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the specified wallet service.
         * @summary Get wallet service
         * @param {PaymentApiGetWalletServiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWalletService operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-service/
         * @throws {RequiredError}
         */
        getWalletService(requestParameters: PaymentApiGetWalletServiceRequest, options?: RawAxiosRequestConfig): AxiosPromise<WalletServiceWrapper> {
            return localVarFp.getWalletService(requestParameters.service, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the available wallet services.
         * @summary Get wallet services
         * @param {*} [options] Override http request option.
         * REST API Reference for getWalletServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-services/
         * @throws {RequiredError}
         */
        getWalletServices(options?: RawAxiosRequestConfig): AxiosPromise<WalletServiceArrayWrapper> {
            return localVarFp.getWalletServices(options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a request for the portal payment.
         * @summary Send a payment request
         * @param {PaymentApiSendPaymentRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendPaymentRequest operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/
         * @throws {RequiredError}
         */
        sendPaymentRequest(requestParameters: PaymentApiSendPaymentRequestRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendPaymentRequest(requestParameters.salesRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Overwrites the entire set of restricted AI model IDs for the current tenant.  The request body must contain the complete desired set — to add a restriction, include the new model alongside existing ones;  to remove one, omit it. An empty set lifts all restrictions. Only the portal payer can perform this action.
         * @summary Set restricted AI models
         * @param {PaymentApiSetRestrictedAiModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-restricted-ai-models/
         * @throws {RequiredError}
         */
        setRestrictedAiModels(requestParameters: PaymentApiSetRestrictedAiModelsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RestrictedModelsResponseWrapper> {
            return localVarFp.setRestrictedAiModels(requestParameters.setRestrictedAiModelsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the wallet auto top up settings for the current tenant.  Requires the tariff service to be configured and the user to be authorized as a payer.  Returns null if the tariff service is not configured or customer information/balance cannot be retrieved.
         * @summary Set the wallet auto top up settings
         * @param {PaymentApiSetTenantWalletSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/
         * @throws {RequiredError}
         */
        setTenantWalletSettings(requestParameters: PaymentApiSetTenantWalletSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletSettingsWrapper> {
            return localVarFp.setTenantWalletSettings(requestParameters.tenantWalletSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Terminates generating a customer operations report.
         * @summary Terminate the customer operations report generation
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-operations-report/
         * @throws {RequiredError}
         */
        terminateCustomerOperationsReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateCustomerOperationsReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the result of putting money on deposit.
         * @summary Put money on deposit
         * @param {PaymentApiTopUpDepositRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for topUpDeposit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/top-up-deposit/
         * @throws {RequiredError}
         */
        topUpDeposit(requestParameters: PaymentApiTopUpDepositRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.topUpDeposit(requestParameters.topUpDepositRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the payment quantity with the parameters specified in the request.
         * @summary Update the payment quantity
         * @param {PaymentApiUpdatePaymentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updatePayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-payment/
         * @throws {RequiredError}
         */
        updatePayment(requestParameters: PaymentApiUpdatePaymentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updatePayment(requestParameters.quantityRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the wallet payment quantity with the parameters specified in the request.
         * @summary Update the wallet payment quantity
         * @param {PaymentApiUpdateWalletPaymentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateWalletPayment operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-wallet-payment/
         * @throws {RequiredError}
         */
        updateWalletPayment(requestParameters: PaymentApiUpdateWalletPaymentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateWalletPayment(requestParameters.walletQuantityRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for buyWalletService operation in PaymentApi.
 * @export
 * @interface PaymentApiBuyWalletServiceRequest
 */
export interface PaymentApiBuyWalletServiceRequest {
    /**
     * 
     * @type {BuyWalletServiceRequestDto}
     * @memberof PaymentApiBuyWalletService
     */
    readonly buyWalletServiceRequestDto?: BuyWalletServiceRequestDto
}

/**
 * Request parameters for calculateWalletPayment operation in PaymentApi.
 * @export
 * @interface PaymentApiCalculateWalletPaymentRequest
 */
export interface PaymentApiCalculateWalletPaymentRequest {
    /**
     * 
     * @type {WalletQuantityRequestDto}
     * @memberof PaymentApiCalculateWalletPayment
     */
    readonly walletQuantityRequestDto?: WalletQuantityRequestDto
}

/**
 * Request parameters for changeTenantWalletServiceState operation in PaymentApi.
 * @export
 * @interface PaymentApiChangeTenantWalletServiceStateRequest
 */
export interface PaymentApiChangeTenantWalletServiceStateRequest {
    /**
     * 
     * @type {ChangeWalletServiceStateRequestDto}
     * @memberof PaymentApiChangeTenantWalletServiceState
     */
    readonly changeWalletServiceStateRequestDto?: ChangeWalletServiceStateRequestDto
}

/**
 * Request parameters for createCustomerOperationsReport operation in PaymentApi.
 * @export
 * @interface PaymentApiCreateCustomerOperationsReportRequest
 */
export interface PaymentApiCreateCustomerOperationsReportRequest {
    /**
     * 
     * @type {CustomerOperationsReportRequestDto}
     * @memberof PaymentApiCreateCustomerOperationsReport
     */
    readonly customerOperationsReportRequestDto?: CustomerOperationsReportRequestDto
}

/**
 * Request parameters for getCheckoutSetupUrl operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCheckoutSetupUrlRequest
 */
export interface PaymentApiGetCheckoutSetupUrlRequest {
    /**
     * The URL where the user will be redirected after completing the setup.
     * @type {string}
     * @memberof PaymentApiGetCheckoutSetupUrl
     */
    readonly backUrl?: string
}

/**
 * Request parameters for getCustomerBalance operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerBalanceRequest
 */
export interface PaymentApiGetCustomerBalanceRequest {
    /**
     * Specifies whether to refresh the payment information cache or not.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerBalance
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getCustomerInfo operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerInfoRequest
 */
export interface PaymentApiGetCustomerInfoRequest {
    /**
     * Specifies whether to refresh the payment information cache or not.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerInfo
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getCustomerOperations operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerOperationsRequest
 */
export interface PaymentApiGetCustomerOperationsRequest {
    /**
     * The number of items to skip for pagination. The default value is 0.
     * @type {number}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly offset?: number

    /**
     * The maximum number of items to return for pagination. The default value is 25.
     * @type {number}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly limit?: number

    /**
     * The service name.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly serviceName?: string

    /**
     * Write-off of the quota for the service
     * @type {boolean}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly writeOffServiceQuota?: boolean

    /**
     * The report start date.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly startDate?: string

    /**
     * The report end date.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly endDate?: string

    /**
     * The participant name.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly participantName?: string

    /**
     * Specifies whether to include credit operations in the report.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly credit?: boolean

    /**
     * Specifies whether to include debit operations in the report.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly debit?: boolean

    /**
     * List of operation types to filter by.
     * @type {OperationType}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly types?: OperationType

    /**
     * List of operation status to filter by.
     * @type {OperationStatus}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly status?: OperationStatus

    /**
     * The field to order by.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly orderBy?: string

    /**
     * Order direction: Ascending or Descending.
     * @type {OperationOrderType}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly orderType?: OperationOrderType
}

/**
 * Request parameters for getCustomerServiceQuota operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerServiceQuotaRequest
 */
export interface PaymentApiGetCustomerServiceQuotaRequest {
    /**
     * The service name.
     * @type {string}
     * @memberof PaymentApiGetCustomerServiceQuota
     */
    readonly serviceName?: string

    /**
     * Specifies whether to refresh the payment information cache or not.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerServiceQuota
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getPaymentAccount operation in PaymentApi.
 * @export
 * @interface PaymentApiGetPaymentAccountRequest
 */
export interface PaymentApiGetPaymentAccountRequest {
    /**
     * The URL where the user will be redirected after payment processing.
     * @type {string}
     * @memberof PaymentApiGetPaymentAccount
     */
    readonly backUrl?: string
}

/**
 * Request parameters for getPaymentQuotas operation in PaymentApi.
 * @export
 * @interface PaymentApiGetPaymentQuotasRequest
 */
export interface PaymentApiGetPaymentQuotasRequest {
    /**
     * Specifies whether to return the wallet quotas only.
     * @type {boolean}
     * @memberof PaymentApiGetPaymentQuotas
     */
    readonly wallet?: boolean
}

/**
 * Request parameters for getPaymentUrl operation in PaymentApi.
 * @export
 * @interface PaymentApiGetPaymentUrlRequest
 */
export interface PaymentApiGetPaymentUrlRequest {
    /**
     * 
     * @type {PaymentUrlRequestDto}
     * @memberof PaymentApiGetPaymentUrl
     */
    readonly paymentUrlRequestDto?: PaymentUrlRequestDto
}

/**
 * Request parameters for getQuotaPaymentInformation operation in PaymentApi.
 * @export
 * @interface PaymentApiGetQuotaPaymentInformationRequest
 */
export interface PaymentApiGetQuotaPaymentInformationRequest {
    /**
     * Specifies whether to refresh the payment information cache or not.
     * @type {boolean}
     * @memberof PaymentApiGetQuotaPaymentInformation
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getWalletService operation in PaymentApi.
 * @export
 * @interface PaymentApiGetWalletServiceRequest
 */
export interface PaymentApiGetWalletServiceRequest {
    /**
     * The wallet service type.
     * @type {TenantWalletService}
     * @memberof PaymentApiGetWalletService
     */
    readonly service: TenantWalletService
}

/**
 * Request parameters for sendPaymentRequest operation in PaymentApi.
 * @export
 * @interface PaymentApiSendPaymentRequestRequest
 */
export interface PaymentApiSendPaymentRequestRequest {
    /**
     * 
     * @type {SalesRequestsDto}
     * @memberof PaymentApiSendPaymentRequest
     */
    readonly salesRequestsDto?: SalesRequestsDto
}

/**
 * Request parameters for setRestrictedAiModels operation in PaymentApi.
 * @export
 * @interface PaymentApiSetRestrictedAiModelsRequest
 */
export interface PaymentApiSetRestrictedAiModelsRequest {
    /**
     * 
     * @type {SetRestrictedAiModelsRequestDto}
     * @memberof PaymentApiSetRestrictedAiModels
     */
    readonly setRestrictedAiModelsRequestDto?: SetRestrictedAiModelsRequestDto
}

/**
 * Request parameters for setTenantWalletSettings operation in PaymentApi.
 * @export
 * @interface PaymentApiSetTenantWalletSettingsRequest
 */
export interface PaymentApiSetTenantWalletSettingsRequest {
    /**
     * 
     * @type {TenantWalletSettingsWrapper}
     * @memberof PaymentApiSetTenantWalletSettings
     */
    readonly tenantWalletSettingsWrapper?: TenantWalletSettingsWrapper
}

/**
 * Request parameters for topUpDeposit operation in PaymentApi.
 * @export
 * @interface PaymentApiTopUpDepositRequest
 */
export interface PaymentApiTopUpDepositRequest {
    /**
     * 
     * @type {TopUpDepositRequestDto}
     * @memberof PaymentApiTopUpDeposit
     */
    readonly topUpDepositRequestDto?: TopUpDepositRequestDto
}

/**
 * Request parameters for updatePayment operation in PaymentApi.
 * @export
 * @interface PaymentApiUpdatePaymentRequest
 */
export interface PaymentApiUpdatePaymentRequest {
    /**
     * 
     * @type {QuantityRequestDto}
     * @memberof PaymentApiUpdatePayment
     */
    readonly quantityRequestDto?: QuantityRequestDto
}

/**
 * Request parameters for updateWalletPayment operation in PaymentApi.
 * @export
 * @interface PaymentApiUpdateWalletPaymentRequest
 */
export interface PaymentApiUpdateWalletPaymentRequest {
    /**
     * 
     * @type {WalletQuantityRequestDto}
     * @memberof PaymentApiUpdateWalletPayment
     */
    readonly walletQuantityRequestDto?: WalletQuantityRequestDto
}

/**
 * PaymentApi - object-oriented interface
 * @export
 * @class PaymentApi
 * @extends {BaseAPI}
 */
export class PaymentApi extends BaseAPI {
    /**
     * This method processes a payment for a wallet service using the configured payment method.  Requires the tariff service to be configured and a valid payment method to be set for the customer.  Rate limiting is applied according to the payments API policy.
     * @summary Purchases a wallet service with the specified quantity.
     * @param {PortalPaymentApiBuyWalletServiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public buyWalletService(requestParameters: PaymentApiBuyWalletServiceRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).buyWalletService(requestParameters.buyWalletServiceRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Calculates an amount of the wallet payment with the parameters specified in the request.
     * @summary Calculate the wallet payment amount
     * @param {PortalPaymentApiCalculateWalletPaymentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public calculateWalletPayment(requestParameters: PaymentApiCalculateWalletPaymentRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).calculateWalletPayment(requestParameters.walletQuantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the state of a wallet service for the current tenant.  Requires permission to edit portal settings and a configured tariff service.  Adds or removes the specified service from the enabled services list based on the enabled flag.
     * @summary Change tenant wallet service state
     * @param {PortalPaymentApiChangeTenantWalletServiceStateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public changeTenantWalletServiceState(requestParameters: PaymentApiChangeTenantWalletServiceStateRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).changeTenantWalletServiceState(requestParameters.changeWalletServiceStateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts generating a customer operations report as an xlsx file and saves it in Documents.
     * @summary Start the customer operations report generation
     * @param {PortalPaymentApiCreateCustomerOperationsReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public createCustomerOperationsReport(requestParameters: PaymentApiCreateCustomerOperationsReportRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).createCustomerOperationsReport(requestParameters.customerOperationsReportRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the pricing information for AI models including chat, embedding, and web search services.  The prices are returned in the configured currency and normalized per million tokens.  Requires administrator permissions to access.
     * @summary Get AI model prices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getAiPrices(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getAiPrices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URL to the checkout setup page.
     * @summary Get the checkout setup page URL
     * @param {PortalPaymentApiGetCheckoutSetupUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCheckoutSetupUrl(requestParameters: PaymentApiGetCheckoutSetupUrlRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCheckoutSetupUrl(requestParameters.backUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the customer balance from the accounting service.
     * @summary Get the customer balance
     * @param {PortalPaymentApiGetCustomerBalanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerBalance(requestParameters: PaymentApiGetCustomerBalanceRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerBalance(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the customer information.
     * @summary Get the customer information
     * @param {PortalPaymentApiGetCustomerInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerInfo(requestParameters: PaymentApiGetCustomerInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerInfo(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the report of customer operations from the accounting service.
     * @summary Get the customer operations
     * @param {PortalPaymentApiGetCustomerOperationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerOperations(requestParameters: PaymentApiGetCustomerOperationsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerOperations(requestParameters.offset, requestParameters.limit, requestParameters.serviceName, requestParameters.writeOffServiceQuota, requestParameters.startDate, requestParameters.endDate, requestParameters.participantName, requestParameters.credit, requestParameters.debit, requestParameters.types, requestParameters.status, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the status of generating a customer operations report.
     * @summary Get the status of the customer operations report generation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerOperationsReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerOperationsReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the service quota from the accounting service.
     * @summary Get the service quota
     * @param {PortalPaymentApiGetCustomerServiceQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerServiceQuota(requestParameters: PaymentApiGetCustomerServiceQuotaRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerServiceQuota(requestParameters.serviceName, requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URL to the payment account.
     * @summary Get the payment account
     * @param {PortalPaymentApiGetPaymentAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentAccount(requestParameters: PaymentApiGetPaymentAccountRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentAccount(requestParameters.backUrl, options).then((request) => request(this.axios, this.basePath));
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
     * @param {PortalPaymentApiGetPaymentQuotasRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentQuotas(requestParameters: PaymentApiGetPaymentQuotasRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentQuotas(requestParameters.wallet, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URL to the payment page.
     * @summary Get the payment page URL
     * @param {PortalPaymentApiGetPaymentUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentUrl(requestParameters: PaymentApiGetPaymentUrlRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentUrl(requestParameters.paymentUrlRequestDto, options).then((request) => request(this.axios, this.basePath));
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
     * @param {PortalPaymentApiGetQuotaPaymentInformationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getQuotaPaymentInformation(requestParameters: PaymentApiGetQuotaPaymentInformationRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getQuotaPaymentInformation(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of AI chat model IDs that are restricted (disabled) for the current tenant.  Restricted models cannot be used for AI chat conversations by any user within the portal.  Only DocSpace administrators can access this endpoint.
     * @summary Get restricted AI models
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getRestrictedAiModels(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getRestrictedAiModels(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves configuration settings related to the wallet service associated with the current tenant.
     * @summary Gets the wallet service settings for the tenant.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getTenantWalletServiceSettings(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getTenantWalletServiceSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the wallet auto top up settings for the current tenant.
     * @summary Gets the tenant wallet auto top up settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getTenantWalletSettings(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getTenantWalletSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the specified wallet service.
     * @summary Get wallet service
     * @param {PortalPaymentApiGetWalletServiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getWalletService(requestParameters: PaymentApiGetWalletServiceRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getWalletService(requestParameters.service, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the available wallet services.
     * @summary Get wallet services
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getWalletServices(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getWalletServices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a request for the portal payment.
     * @summary Send a payment request
     * @param {PortalPaymentApiSendPaymentRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public sendPaymentRequest(requestParameters: PaymentApiSendPaymentRequestRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).sendPaymentRequest(requestParameters.salesRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Overwrites the entire set of restricted AI model IDs for the current tenant.  The request body must contain the complete desired set — to add a restriction, include the new model alongside existing ones;  to remove one, omit it. An empty set lifts all restrictions. Only the portal payer can perform this action.
     * @summary Set restricted AI models
     * @param {PortalPaymentApiSetRestrictedAiModelsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public setRestrictedAiModels(requestParameters: PaymentApiSetRestrictedAiModelsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).setRestrictedAiModels(requestParameters.setRestrictedAiModelsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the wallet auto top up settings for the current tenant.  Requires the tariff service to be configured and the user to be authorized as a payer.  Returns null if the tariff service is not configured or customer information/balance cannot be retrieved.
     * @summary Set the wallet auto top up settings
     * @param {PortalPaymentApiSetTenantWalletSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public setTenantWalletSettings(requestParameters: PaymentApiSetTenantWalletSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).setTenantWalletSettings(requestParameters.tenantWalletSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates generating a customer operations report.
     * @summary Terminate the customer operations report generation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public terminateCustomerOperationsReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).terminateCustomerOperationsReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the result of putting money on deposit.
     * @summary Put money on deposit
     * @param {PortalPaymentApiTopUpDepositRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public topUpDeposit(requestParameters: PaymentApiTopUpDepositRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).topUpDeposit(requestParameters.topUpDepositRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the payment quantity with the parameters specified in the request.
     * @summary Update the payment quantity
     * @param {PortalPaymentApiUpdatePaymentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public updatePayment(requestParameters: PaymentApiUpdatePaymentRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).updatePayment(requestParameters.quantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the wallet payment quantity with the parameters specified in the request.
     * @summary Update the wallet payment quantity
     * @param {PortalPaymentApiUpdateWalletPaymentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public updateWalletPayment(requestParameters: PaymentApiUpdateWalletPaymentRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).updateWalletPayment(requestParameters.walletQuantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

