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
import type { ActiveServiceArrayWrapper } from '../../models';
// @ts-ignore
import type { AiPricesWrapper } from '../../models';
// @ts-ignore
import type { BalanceWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ChangeWalletServiceStateRequestDto } from '../../models';
// @ts-ignore
import type { CreateServiceLimitRequestDto } from '../../models';
// @ts-ignore
import type { CurrenciesArrayWrapper } from '../../models';
// @ts-ignore
import type { CustomerInfoWrapper } from '../../models';
// @ts-ignore
import type { CustomerMonthlyUsageArrayWrapper } from '../../models';
// @ts-ignore
import type { CustomerMonthlyUsageReportRequestDto } from '../../models';
// @ts-ignore
import type { CustomerOperationsReportRequestDto } from '../../models';
// @ts-ignore
import type { CustomerServiceUsageReportRequestDto } from '../../models';
// @ts-ignore
import type { CustomerServiceUsageReportWrapper } from '../../models';
// @ts-ignore
import type { DepositReportWrapper } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { GetPortalPrices200Response } from '../../models';
// @ts-ignore
import type { Int32Wrapper } from '../../models';
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
import type { RestrictedAiModelsWrapper } from '../../models';
// @ts-ignore
import type { SalesRequestDto } from '../../models';
// @ts-ignore
import type { ServiceLimitOrderBy } from '../../models';
// @ts-ignore
import type { ServiceLimitReportWrapper } from '../../models';
// @ts-ignore
import type { ServiceLimitWrapper } from '../../models';
// @ts-ignore
import type { ServicePriceArrayWrapper } from '../../models';
// @ts-ignore
import type { SetParticipantServiceLimitsRequestDto } from '../../models';
// @ts-ignore
import type { SetRestrictedAiModelsRequestDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { SubscriptionBalanceWrapper } from '../../models';
// @ts-ignore
import type { TenantWalletService } from '../../models';
// @ts-ignore
import type { TenantWalletServiceSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantWalletSettingsRequestDto } from '../../models';
// @ts-ignore
import type { TenantWalletSettingsWrapper } from '../../models';
// @ts-ignore
import type { TopUpDepositRequestDto } from '../../models';
// @ts-ignore
import type { UpdateServiceLimitRequestDto } from '../../models';
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
         * Prices a wallet-service purchase without making it: it returns what buying the requested number of units would  cost right now, so a client can show the amount before asking for a confirmation. Only `productQuantityType`  `Add` (1) is accepted, the quantity must be greater than zero, and the portal needs a billing customer whose  wallet has a sub-account in the accounting currency. The caller has to be a DocSpace administrator. Nothing is  bought, charged or written down - the call is read-only and may be repeated - and the purchase itself is  `PUT api/2.0/portal/payment/updatewallet`. The answer carries the amount with its currency, the quantity it  was computed for and the identifier of the calculation. It is the price of this moment and is not held: it can  differ by the time the purchase is made.
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
         * Switches one wallet service on or off for the portal: `service` names it and `enabled` says which way. The  portal needs a billing customer, and the caller needs both the permission to edit the portal settings and  DocSpace administrator rights. Order matters between the two AI services - AI tools has to be on before AI  search may be switched on, and switching AI tools off switches AI search off with it - so a request that  breaks that order is refused with 403. The call is mutating and idempotent: switching on a service that is  already on changes nothing. It is written to the portal audit trail, and switching AI tools notifies the  portal clients so the AI features appear or disappear for them without a reload. The whole updated set of  switched-on services comes back. Switching a service on does not buy it - its units are still bought with  `PUT api/2.0/portal/payment/updatewallet`.
         * @summary Switch a wallet service
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
         * Queues the wallet spending added up per calendar month as an `xlsx` file and returns the task that will build  it; the file is not ready when the response arrives. The portal needs a billing customer and the caller has to  be a DocSpace administrator. The body takes only the period - `startDate` and `endDate`, both inclusive - and  an empty body covers everything from the portal creation date to now; the months are cut in the portal time  zone, exactly as in `GET api/2.0/portal/payment/customer/usage/monthly`. Poll  `GET api/2.0/portal/payment/customer/usage/monthly/report` until `isCompleted` is true, then take the file  from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents  section, where it counts against the portal storage like any other file. One monthly usage report per user is  tracked at a time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/usage/monthly/report` stops it. There is no service filter here: for a  report per service use `POST api/2.0/portal/payment/customer/usage/report`.
         * @summary Start the monthly usage report
         * @param {CustomerMonthlyUsageReportRequestDto} [customerMonthlyUsageReportRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-monthly-usage-report/
         */
        createCustomerMonthlyUsageReport: async (customerMonthlyUsageReportRequestDto?: CustomerMonthlyUsageReportRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage/monthly/report`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(customerMonthlyUsageReportRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues the history of the wallet movements as an `xlsx` file and returns the task that will build it; the file  is not ready when the response arrives. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/operations` -  the service names, the date range, the participant, the operation type and status, the credit and debit  directions and the ordering - and an empty body reports everything from the portal creation date to now; a  service name this installation does not sell fails with 404. Poll  `GET api/2.0/portal/payment/customer/operationsreport` until `isCompleted` is true, then take the file from  `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents section,  where it counts against the portal storage like any other file. One operations report per user is tracked at a  time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/operationsreport` stops it. A build that fails ends the task with  `error` filled in rather than failing this call.
         * @summary Start the operations report
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
         * Queues the usage of the wallet services as an `xlsx` file and returns the task that will build it; the file is  not ready when the response arrives. The portal needs a billing customer and the caller has to be a DocSpace  administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/usage` - the service  names, the date range, the participant, the operation status, the usage metadata and the ordering - and an  empty body reports every service from the portal creation date to now; a service name this installation does  not sell fails with 404. Poll `GET api/2.0/portal/payment/customer/usage/report` until `isCompleted` is true,  then take the file from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s  own My documents section, where it counts against the portal storage like any other file. One service usage  report per user is tracked at a time - a call made while the previous one is still running answers with that  task - and `DELETE api/2.0/portal/payment/customer/usage/report` stops it. It is a different report from the  operations one and does not interfere with it: per-movement history is  `POST api/2.0/portal/payment/customer/operationsreport`.
         * @summary Start the service usage report
         * @param {CustomerServiceUsageReportRequestDto} [customerServiceUsageReportRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-service-usage-report/
         */
        createCustomerServiceUsageReport: async (customerServiceUsageReportRequestDto?: CustomerServiceUsageReportRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage/report`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(customerServiceUsageReportRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a spending limit on the AI services - AI tools and AI search together - with `scope` saying whom it  applies to: `Total` for the portal as a whole, `Global` for every user separately, `Custom` for the user in  `userId`, which only this scope takes. A personal limit applies to its user instead of the one for every user,  and the limit of the portal is checked on top of both. The portal needs a billing customer, and the caller needs  the permission to edit the portal settings as well as DocSpace administrator rights. At least one of  `amountValue` and `quantityValue` must be given; with both, the services stop as soon as either is reached. The  call is mutating and written to the portal audit trail. It is not idempotent: a second limit of the same scope,  or for the same user, is refused with 409 - change the existing one with  `PUT api/2.0/portal/payment/servicelimit` instead. The scope, the user and the period cannot be changed later.
         * @summary Create a service limit
         * @param {CreateServiceLimitRequestDto} [createServiceLimitRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-service-limit/
         */
        createServiceLimit: async (createServiceLimitRequestDto?: CreateServiceLimitRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicelimit`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createServiceLimitRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes one spending limit on the AI services completely - the limit of the portal as a whole, the one for  every user, or a personal one - so it no longer restricts anyone. The portal needs a billing customer, and the  caller needs the permission to edit the portal settings as well as DocSpace administrator rights. The call is  destructive and cannot be undone: unlike switching a limit off with `PUT api/2.0/portal/payment/servicelimit`,  which keeps its settings, a deleted limit is gone, and a new one has to be created with  `POST api/2.0/portal/payment/servicelimit`. Deleting a personal limit lets the limit for every user apply to  that user. It is written to the portal audit trail. An ID that does not exist, belongs to another portal or is  not a limit on the AI services answers 404, which is also what a repeated deletion of the same limit gets.
         * @summary Delete a service limit
         * @param {number} id The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-service-limit/
         */
        deleteServiceLimit: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteServiceLimit', 'id', id)

            const localVarPath = `/api/2.0/portal/payment/servicelimit/{id}`
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
         * Switches off every personal spending limit on the AI services in one call, so each user falls back to the limit  for every user, if one is set. The limit of the portal as a whole and the one for every user stay as they are.  The portal needs a billing customer, and the caller needs the permission to edit the portal settings as well as  DocSpace administrator rights. The switched-off limits stop restricting their users at once and are kept, so  each can be switched back on with `PUT api/2.0/portal/payment/servicelimit`. The call is mutating and  idempotent - repeating it switches off nothing more - and it is written to the portal audit trail. The answer is  the number of personal limits that were switched off, zero when none was in force. To switch off the limit of a  single user, use `PUT api/2.0/portal/payment/servicelimit` with `enabled` set to false.
         * @summary Disable the user service limits
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for disableParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/disable-participant-service-limits/
         */
        disableParticipantServiceLimits: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicelimit/participants/disable`;
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
         * Returns the price list of one wallet service as the accounting service keeps it: every price record with its  time unit, cost and resulting price, volume threshold, validity period, status and discount category. Take  the service name from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`. The caller must  be a DocSpace administrator, and the server must have the billing and accounting services configured;  otherwise the call fails with 403. The call is read-only and can be repeated safely. By default the list  also holds retired and not yet started records; `active=true` keeps only the prices in force now. A service  with no prices comes back as an empty list. Amounts are in the currency of the service, which the records do  not name. The list is cached for all portals for up to an hour, so a change in the accounting service can  take that long to appear. For the current price of every plan and wallet service as the customer sees it, use  `GET api/2.0/portal/payment/quotas`. An unknown service name fails with 500, as does an unreachable  accounting service.
         * @summary Get the service prices from the accounting service
         * @param {string} serviceName The service whose price list is read, named the way the billing catalogue names it, such as `ai-tools` or  `backup`. Take the value from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`.
         * @param {boolean} [active] Whether the answer is narrowed to the prices in force at the moment of the call. Leaving it false also  returns the retired and the not yet started ones, which is what pricing a movement recorded in the past  needs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountingServicePrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounting-service-prices/
         */
        getAccountingServicePrices: async (serviceName: string, active?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serviceName' is not null or undefined
            assertParamExists('getAccountingServicePrices', 'serviceName', serviceName)

            const localVarPath = `/api/2.0/portal/payment/accounting/prices/{serviceName}`
                .replace(`{${"serviceName"}}`, encodeURIComponent(String(serviceName)));
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

            if (active !== undefined) {
                localVarQueryParameter['active'] = active;
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
         * Lists the wallet services the portal is running right now: the add-ons its plan pays for that are in the  active state, plus the ones an administrator switched on by hand in the wallet service settings; the Docs Connect  trial is listed as well, although it is not paid from the wallet. Only a DocSpace administrator may call it,  no billing customer is needed for it, and the call is read-only. Every item names the service, its title and  the unit it is measured in, and says whether it is a subscription; a subscribed service also carries the limit  it grants and how much of it is used where that number is known - the editor seats and the editors currently  active for Docs Connect, the purchased units and the units already consumed for disk storage. A service listed  with no limit is one whose usage is not counted this way, not one without a limit. The catalogue of what could  be switched on is `GET api/2.0/portal/payment/walletservices`, and switching one is  `POST api/2.0/portal/payment/servicestate`.
         * @summary Get the active wallet services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getActiveServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-active-services/
         */
        getActiveServices: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/activeservices`;
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
         * Returns the price list of the AI features the portal pays for out of its wallet: the chat models with the  price of their prompt and completion tokens, the embedding models, the image models with their per-image  price, and the web search providers with the price of one search. The installation needs both a billing  service and the AI gateway configured, otherwise the answer is 403, and only a DocSpace administrator may read  it; the call is read-only. Token prices are normalised per million tokens, and every price is in the single  `currency` the answer names. Each entry carries the model identifier to use when talking to the AI operations,  its display alias, its provider with the provider icon, and a link to the model\'s own page. It is a list of  what the models cost and not of what the portal spent - that is `GET api/2.0/portal/payment/customer/usage` -  and it says nothing about which of them are allowed here, which is  `GET api/2.0/portal/payment/ai-model/restrictions`.
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
         * Hands back the hosted page on which a payment method is attached to the portal\'s billing account, for the case  where money has to be taken later - a wallet top-up or an automatic one - rather than a plan bought now. A  portal that already has a payment method on file answers with an empty result; a DocSpace administrator may  ask for the page, but once the portal has a billing customer with an e-mail, only its payer may. The call  itself changes nothing and may be repeated: the payment method is stored by the payment provider when the  returned page is completed, after which `GET api/2.0/portal/payment/customerinfo` reports it as set. The URL  is absolute, carries the caller\'s e-mail, the language of the request and the currency of the region, and  redirects to `successUrl` or `backUrl` when the user finishes or cancels. It buys nothing - a plan is bought  with `PUT api/2.0/portal/payment/url`.
         * @summary Get the checkout setup page URL
         * @param {string} backUrl The absolute address the setup page sends the user back to when attaching a payment method is abandoned. It  has to be a well-formed URL and must be reachable by that user rather than by the portal.
         * @param {string} successUrl The absolute address the setup page sends the user to once the payment provider has stored the payment  method. Reaching it means a method is now on file, which `GET api/2.0/portal/payment/customerinfo` confirms;  nothing has been charged.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         */
        getCheckoutSetupUrl: async (backUrl: string, successUrl: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'backUrl' is not null or undefined
            assertParamExists('getCheckoutSetupUrl', 'backUrl', backUrl)
            // verify required parameter 'successUrl' is not null or undefined
            assertParamExists('getCheckoutSetupUrl', 'successUrl', successUrl)

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
                localVarQueryParameter['backUrl'] = backUrl;
            }

            if (successUrl !== undefined) {
                localVarQueryParameter['successUrl'] = successUrl;
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
         * Returns the money the portal has in its wallet as the accounting service holds it: the account with its own  currency, one sub-account per currency with the amount on it, and the most recent credit movement. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and a portal that  has never been a customer gets an empty result. The call is read-only. This balance is what the wallet  services are charged against, so it falls as they are used and rises with  `POST api/2.0/portal/payment/deposit`; the movements behind a change are listed by  `GET api/2.0/portal/payment/customer/operations`. Pass `refresh=true` to re-read it from the accounting  service rather than the cache - right after a top-up the cached figure is still the old one.
         * @summary Get the customer balance
         * @param {boolean} [refresh] Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
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
         * Lists the top-ups of the portal\'s wallet - the payments into it - one page at a time, which is what a list of  payments with their invoices is built from. A portal that is not a billing customer yet has no top-ups and  gets an empty result rather than an error. Only the payer or the portal owner may read it, as with the  invoices, and the call is read-only. Every filter is optional: `startDate` and `endDate` default to the  portal creation date and the present moment, a value without `Z` or an offset is read in the portal time  zone, and `status` narrows to how a top-up ended. `offset` and `limit` default to 0 and 25 and are echoed next  to `totalQuantity`, `totalPage` and `currentPage`; a negative `offset` or a `limit` outside 1 to 100 fails  with 400. An empty result means the portal is not a billing customer, has no wallet at the accounting service  yet, or that service could not be read; a period without top-ups gives an empty `collection`. A top-up with  `hasInvoice` true has an invoice, opened with `GET api/2.0/portal/payment/customer/deposits/{id}/invoice`.  For the full wallet history, charges and refunds included, use  `GET api/2.0/portal/payment/customer/operations`.
         * @summary Get the wallet top-ups
         * @param {string} [startDate] The beginning of the period, inclusive, as an ISO 8601 timestamp. A value with neither `Z` nor an offset is  read in the portal time zone, not in the caller\'s; defaults to the portal creation date.
         * @param {string} [endDate] The end of the period, inclusive, as an ISO 8601 timestamp. A value with neither `Z` nor an offset is read in  the portal time zone, not in the caller\'s; defaults to the moment the call is made.
         * @param {OperationStatus} [status] The outcome to keep. A top-up that is still being settled is reported as pending and may change later, while  the other outcomes are final; every outcome is reported when this is omitted.
         * @param {number} [offset] The number of top-ups to skip before the first one returned, for walking through a long history page by page.  Counted after the filters are applied, and starts at 0 when omitted.
         * @param {number} [limit] The maximum number of top-ups returned in one page. Defaults to 25 when omitted; the answer echoes the window  back next to `totalQuantity`, `totalPage` and `currentPage`, so the next `offset` can be computed without  counting the items.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerDeposits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-deposits/
         */
        getCustomerDeposits: async (startDate?: string, endDate?: string, status?: OperationStatus, offset?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/deposits`;
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

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * Returns the billing customer behind the portal: the e-mail its billing account is registered to, whether a  payment method is stored for it, and the portal user who is the payer of that account. Only a DocSpace  administrator may read it, and the call is read-only. The answer is empty in two ordinary cases - the  installation has no billing service configured at all, and the portal has never been a customer - so an empty  body is not an error. `payer` is filled in only when the billing e-mail belongs to a portal user; when it does  not, the e-mail is still shown but the field stays empty, and that is what makes every payer-only operation of  this group unreachable for everybody. `refresh=true` re-reads the customer from the billing provider instead  of the cache, which is worth doing right after a payment method has been attached.
         * @summary Get the customer information
         * @param {boolean} [refresh] Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
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
         * Returns what the portal spent from its wallet added up per calendar month, so a client can draw a spending  chart without paging through every movement. Only a DocSpace administrator may read it, a portal with no  billing customer answers with an empty result, and the call is read-only. `startDate` and `endDate` bound the  period, both inclusive, and default to the portal creation date and the present moment; the months are cut in  the portal time zone, so a movement at the edge of a month falls where the portal sees it and not where UTC  does. Each item names its year and month, the total charged in it with the currency, and how many operations  that total came from. The movements behind a month are in `GET api/2.0/portal/payment/customer/operations`,  and the same figures as a file come from `POST api/2.0/portal/payment/customer/usage/monthly/report`.
         * @summary Get the customer monthly usage
         * @param {string} [startDate] The beginning of the reported period, inclusive. The months are cut in the portal time zone rather than in  UTC, so spending at the turn of a month falls where the portal sees it; defaults to the portal creation date.
         * @param {string} [endDate] The end of the reported period, inclusive. Cut in the portal time zone in the same way as `startDate`, and  defaults to the moment the call is made.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerMonthlyUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-monthly-usage/
         */
        getCustomerMonthlyUsage: async (startDate?: string, endDate?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage/monthly`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the state of the `xlsx` monthly usage report this user started with  `POST api/2.0/portal/payment/customer/usage/monthly/report`: `percentage` while it is being built,  `isCompleted` when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in  the caller\'s My documents, and `error` when the build failed. The portal needs a billing customer and the  caller has to be a DocSpace administrator; the call is read-only and is the one to poll. The task is kept per  user and per report kind, so it reports neither another administrator\'s report nor the operations and service  usage ones, which have their own status operations. An empty result means this user has no monthly usage  report at all - none was started, or the finished one was already picked up or terminated. A completed task is  dropped as soon as the next report is started, so read the file link out of the same answer that first reports  `isCompleted`.
         * @summary Get the monthly usage report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-monthly-usage-report/
         */
        getCustomerMonthlyUsageReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage/monthly/report`;
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
         * Lists the money movements on the portal\'s wallet - top-ups, the charges of the wallet services, refunds and  corrections - one page at a time, which is what a billing history is built from. Only a DocSpace administrator  may read it, a portal with no billing customer answers with an empty result, and the call is read-only. Every  filter is optional: `startDate` and `endDate` are read in the portal time zone and default to the portal  creation date and the present moment, `serviceName` narrows to particular wallet services and fails with 404  on a name this installation does not sell, `participantName`, `type` and `status` narrow to who caused a  movement and how it ended, and `credit` and `debit` include or exclude the two directions. `offset` and  `limit` page through the result and default to 0 and 25, `orderBy` and `orderType` sort it, and the answer  repeats them next to `totalQuantity`, `totalPage` and `currentPage` so a client can page without counting. The  same data as a downloadable file is `POST api/2.0/portal/payment/customer/operationsreport`, and the figures  added up per service are `GET api/2.0/portal/payment/customer/usage`.
         * @summary Get the wallet operations
         * @param {number} [offset] The number of movements to skip before the first one returned, for walking through a long history page by  page. Counted after the filters and the ordering are applied, and starts at 0 when omitted.
         * @param {number} [limit] The maximum number of movements returned in one page. Defaults to 25 when omitted; the answer echoes the  window back next to `totalQuantity`, `totalPage` and `currentPage`, so the next `offset` can be computed  without counting the items.
         * @param {Array<string>} [serviceName] The wallet services whose movements are kept, named the way the billing catalogue names them - `backup`,  `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field of  `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not sell  fails the call with 404, and an omitted list keeps every service. A bare string is accepted in place of an  array for backward compatibility.
         * @param {string} [startDate] The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, so a  movement at the edge of the period falls where the portal sees it; defaults to the portal creation date.
         * @param {string} [endDate] The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to  the moment the call is made.
         * @param {string} [participantName] The participant whose movements are kept - the account the accounting service records as the cause of a  movement. A movement caused by a portal user carries that user ID here, and one caused by the portal itself  carries the customer name; surrounding whitespace is trimmed, and an omitted value keeps every participant.
         * @param {boolean} [credit] Whether movements that add money to the wallet - top-ups, refunds and corrections in the portal\'s favour -  are kept. Both directions are reported when neither this nor `debit` is given.
         * @param {boolean} [debit] Whether movements that take money out of the wallet - the charges of the wallet services - are kept. Both  directions are reported when neither this nor `credit` is given.
         * @param {OperationType} [type] The kind of movement to keep, which says what caused the money to move rather than how it ended. Every kind  is reported when it is omitted.
         * @param {OperationStatus} [status] The outcome to keep. A movement that is still being settled is reported as pending and may change later,  while the other outcomes are final; every outcome is reported when this is omitted.
         * @param {string} [orderBy] The name of the field the movements are sorted by, spelled as the accounting service names it, such as  `StartDate` or `ServiceName`. Surrounding whitespace is trimmed, and the accounting service applies its own  ordering when this is omitted.
         * @param {OperationOrderType} [orderType] The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting  service does by default, so leaving this out sorts the same way as asking for descending explicitly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         */
        getCustomerOperations: async (offset?: number, limit?: number, serviceName?: Array<string>, startDate?: string, endDate?: string, participantName?: string, credit?: boolean, debit?: boolean, type?: OperationType, status?: OperationStatus, orderBy?: string, orderType?: OperationOrderType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (serviceName) {
                localVarQueryParameter['serviceName'] = serviceName;
            }

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

            if (participantName !== undefined) {
                localVarQueryParameter['participantName'] = participantName;
            }

            if (credit !== undefined) {
                localVarQueryParameter['credit'] = credit;
            }

            if (debit !== undefined) {
                localVarQueryParameter['debit'] = debit;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderType !== undefined) {
                localVarQueryParameter['orderType'] = orderType;
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
         * Returns the state of the `xlsx` wallet operations report this user started with  `POST api/2.0/portal/payment/customer/operationsreport`: `percentage` while it is being built, `isCompleted`  when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it never reports another administrator\'s report, nor the service usage and monthly usage ones, which  have their own status operations. An empty result means this user has no operations report at all - none was  started, or the finished one was already picked up or terminated. A completed task is dropped as soon as the  next report is started, so read the file link out of the same answer that first reports `isCompleted`.
         * @summary Get the operations report status
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
         * Returns how much of each wallet service the portal consumed and what that cost, added up per service instead  of listed per movement. Only a DocSpace administrator may read it, a portal with no billing customer answers  with an empty result, and the call is read-only. The filters are optional: `serviceName` narrows to particular  services and fails with 404 on a name this installation does not sell, `participantName` and `status` narrow  to who consumed and how the operation ended, `startDate` and `endDate` bound the period in the portal time  zone, `metadata` matches the key and value pairs a service records with its usage, and `offset`, `limit`,  `orderBy` and `orderType` page and sort the result. Amounts come with the unit the service is sold in, except  AI tools, whose consumption is reported in tokens rather than in AI credits. The individual charges behind  these totals are `GET api/2.0/portal/payment/customer/operations`, and the same figures as a downloadable file  are `POST api/2.0/portal/payment/customer/usage/report`.
         * @summary Get the customer service usage
         * @param {Array<string>} [serviceName] The wallet services whose consumption is added up, named the way the billing catalogue names them -  `backup`, `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field  of `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not  sell fails the call with 404, and an omitted list covers every service.
         * @param {string} [participantName] The participant whose consumption is added up - the account the accounting service records as the consumer.  Consumption caused by a portal user carries that user ID here; surrounding whitespace is trimmed, and an  omitted value covers every participant.
         * @param {OperationStatus} [status] The outcome to keep. Consumption that is still being settled is reported as pending and may change later,  while the other outcomes are final; every outcome is counted when this is omitted.
         * @param {string} [startDate] The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, and  defaults to the portal creation date.
         * @param {string} [endDate] The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to  the moment the call is made.
         * @param {{ [key: string]: string; }} [metadata] The usage annotations a wallet service records alongside its consumption, as the key and value pairs that  must all match for a record to be counted. The keys are chosen by the service that writes them, so read them  off the `metadata` of the records already returned rather than guessing; an omitted map counts every record.
         * @param {number} [offset] The number of per-service totals to skip before the first one returned. Counted after the filters and the  ordering are applied, and starts at 0 when omitted.
         * @param {number} [limit] The maximum number of per-service totals returned in one page. Defaults to 25 when omitted; the answer echoes  the window back with its paging information, so the next `offset` can be computed without counting the items.
         * @param {string} [orderBy] The name of the field the per-service totals are sorted by, spelled as the accounting service names it, such  as `ServiceName` or `StartDate`. Surrounding whitespace is trimmed, and the accounting service applies its  own ordering when this is omitted.
         * @param {OperationOrderType} [orderType] The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting  service does by default, so leaving this out sorts the same way as asking for descending explicitly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerServiceUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-usage/
         */
        getCustomerServiceUsage: async (serviceName?: Array<string>, participantName?: string, status?: OperationStatus, startDate?: string, endDate?: string, metadata?: { [key: string]: string; }, offset?: number, limit?: number, orderBy?: string, orderType?: OperationOrderType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage`;
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

            if (serviceName) {
                localVarQueryParameter['serviceName'] = serviceName;
            }

            if (participantName !== undefined) {
                localVarQueryParameter['participantName'] = participantName;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

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

            if (metadata !== undefined) {
                localVarQueryParameter['metadata'] = metadata;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderType !== undefined) {
                localVarQueryParameter['orderType'] = orderType;
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
         * Returns the state of the `xlsx` service usage report this user started with  `POST api/2.0/portal/payment/customer/usage/report`: `percentage` while it is being built, `isCompleted` when  it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it reports neither another administrator\'s report nor the operations and monthly usage ones, which  have their own status operations. An empty result means this user has no service usage report at all - none  was started, or the finished one was already picked up or terminated. A completed task is dropped as soon as  the next report is started, so read the file link out of the same answer that first reports `isCompleted`.
         * @summary Get the service usage report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-usage-report/
         */
        getCustomerServiceUsageReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage/report`;
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
         * Hands back the address of the page on which the billing provider shows the invoice for one top-up of the  portal\'s wallet, so a client can open or download it. The top-up is named by the `id` that  `GET api/2.0/portal/payment/customer/deposits` returns, and only one listed there with `hasInvoice` true has an  invoice to show. Only the payer or the portal owner may read it, as with the billing account page, and the  call changes nothing. The address is absolute and points to the billing provider rather than to the portal;  it is asked for anew on every call, so request it when the user is about to open the invoice instead of  storing it. A top-up this portal does not have, one without an invoice, or a portal that is not a billing  customer answers 404, and an `id` that is not a number fails with 400. An installation without a billing  service answers 403, and 402 means the billing or the accounting service rejected the request or did not  answer, which a later retry may get past.
         * @summary Get the top-up invoice
         * @param {number} id The ID of the top-up, taken from the `id` field of `GET api/2.0/portal/payment/customer/deposits`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDepositInvoice operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deposit-invoice/
         */
        getDepositInvoice: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDepositInvoice', 'id', id)

            const localVarPath = `/api/2.0/portal/payment/customer/deposits/{id}/invoice`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Returns the spending limit on the AI services for every user - the same ceiling applied to each user separately,  for any user without a personal limit in force. Only a DocSpace administrator may read it, an installation  without a billing service answers 403, and the call is read-only. It comes without spending, since that is  counted per user: read it for each user from `GET api/2.0/portal/payment/servicelimit/participants`; `periodEnd`  still says when the current period ends for everyone. When no  such limit has been set, or it was deleted, the answer is 200 with a null `response`; create the limit with  `POST api/2.0/portal/payment/servicelimit` and the scope `Global`. A switched-off limit is still returned, with  `enabled` false. A portal with no billing customer answers 404.
         * @summary Get the global service limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGlobalServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-global-service-limit/
         */
        getGlobalServiceLimit: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicelimit/global`;
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
         * Lists, one page at a time, the spending limit on the AI services in force for each portal user, with what the  user spent against it in the current period and what is left. Only a DocSpace administrator may read it, an  installation without a billing service answers 403, a portal with no billing customer answers 404, and the call  is read-only; a portal with no limits gets an empty page. A user\'s own limit wins over the one for every user: an item with the scope `Custom` is a  personal limit, one with `Global` the limit for every user, its ID repeated for each user it applies to.  Switched-off limits are not listed, and a user who has not used the AI services yet may be missing. `offset`  and `limit` page through the result and default to 0 and 25, and the answer repeats them next to  `totalQuantity`, `totalPage` and `currentPage`; `orderBy` and `orderType` sort it, the newest limits first by  default.
         * @summary Get the user service limits
         * @param {number} [offset] The number of limits to skip before the first one returned, counted in the sort order of the list.
         * @param {number} [limit] The largest number of limits one page holds.
         * @param {ServiceLimitOrderBy} [orderBy] The field the list is sorted by: the user a limit applies to, or the moment it was created.
         * @param {OperationOrderType} [orderType] The direction the field named in `orderBy` is sorted in.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-participant-service-limits/
         */
        getParticipantServiceLimits: async (offset?: number, limit?: number, orderBy?: ServiceLimitOrderBy, orderType?: OperationOrderType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicelimit/participants`;
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

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderType !== undefined) {
                localVarQueryParameter['orderType'] = orderType;
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
         * Hands back the address of the portal page on which the billing account is managed - the payment method on  file, the invoices and the receipts - so a client can link to it instead of assembling the address itself. The  portal must already have a billing customer: one that has never had it gets an empty result, and an  installation without a billing service answers 403. Only the payer or the portal owner may read it, and the  call changes nothing. The value is relative to the portal root (`payment.ashx`), and the optional `backUrl` is  appended to it as a query parameter so the page can send the user back where they came from. It is not a  checkout page: a plan is bought with `PUT api/2.0/portal/payment/url` and a payment method is attached with  `GET api/2.0/portal/payment/checkoutsetupurl`.
         * @summary Get the billing account page
         * @param {string} [backUrl] The absolute address the billing account page should offer as its way back. It is appended to the returned  portal-relative address as a query parameter rather than followed here, and omitting it yields the bare  address of the page.
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
         * Tells a client which currency the portal is billed in: the default currency of the portal region always comes  first, followed by the currency resolved for the current request when that one differs, so the answer holds  one or two items. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Each item carries the country code of the region, the currency symbol and the  native name of the currency; the first item is the currency the amounts from  `GET api/2.0/portal/payment/prices` are expressed in. These are the currencies of the subscription prices, and  they are not the accounting currencies the wallet is topped up in - those come with the balance in  `GET api/2.0/portal/payment/customer/balance`.
         * @summary Get the billing currencies
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
         * Lists the quotas the portal can be put on - the paid plans and the wallet services - each with its price, its  features and the limits it grants, which is what a pricing page is built from. Nothing has to be called first,  the caller needs the permission to edit the portal settings, and the call is read-only. Only quotas marked  visible are listed, newest first, and the two optional filters narrow that: `wallet` selects the wallet  services (`true`) or the subscription plans (`false`), `additional` selects the add-ons to a plan (`true`) or  the plans themselves (`false`), and an omitted filter keeps both kinds. A portal on a non-profit quota is a  special case - asking for `additional=false` returns that single quota and nothing else, because no other plan  may be bought for it. The quota the portal is actually on is not marked here; read it from  `GET api/2.0/portal/payment/quota`.
         * @summary Get the purchasable quotas
         * @param {boolean} [wallet] Which side of the catalogue is listed: `true` keeps the services paid out of the portal wallet, `false` keeps  the subscription plans, and omitting it keeps both.
         * @param {boolean} [additional] Which layer of the catalogue is listed: `true` keeps the add-ons that extend a plan, `false` keeps the plans  themselves, and omitting it keeps both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentQuotas operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/
         */
        getPaymentQuotas: async (wallet?: boolean, additional?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (additional !== undefined) {
                localVarQueryParameter['additional'] = additional;
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
         * Starts the purchase of a monthly paid plan for this portal by handing back the hosted checkout page the buyer  has to open; nothing is bought until that page is completed. The portal must have no paid plan yet - a portal  whose plan is already paid gets an empty result and changes its subscription through  `PUT api/2.0/portal/payment/update` instead - and the product name in `quantity` must be one of the monthly,  non-wallet plans listed by `GET api/2.0/portal/payment/quotas`. Only a DocSpace administrator may call it. The  call itself changes nothing on the portal and may be repeated: the money is taken by the payment provider on  the checkout page, and the plan becomes active once the provider confirms it. The returned URL is absolute and  single-purpose - it carries the caller\'s e-mail, the language of the request and the currency of the request  region, and it redirects to `successUrl` or `backUrl` when the buyer finishes or cancels. Exactly one product  per call is accepted and its quantity has to be greater than zero; yearly and wallet products are refused, and  wallet services are bought with `PUT api/2.0/portal/payment/updatewallet` instead.
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
         * Lists what one unit of every purchasable product costs, keyed by the product name that `quantity` takes in the  purchase operations, so a client can price a plan or a wallet service without reading the whole quota list.  Nothing has to be called first, and the caller needs the permission to edit the portal settings, which portal  administrators and the owner have. The call is read-only. Prices are given in the one currency resolved for  this request from the portal region, which `GET api/2.0/portal/payment/currencies` reports; a product with no  price in that currency comes back as `0` rather than being left out, so a zero means unpriced and not free.  The list covers the products on offer, not the portal\'s own plan - the plan in force, with its limits and its  usage, is `GET api/2.0/portal/payment/quota`.
         * @summary Get the product prices
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
         * Returns the quota the portal is on - its paid plan or the free one - with the limits its features grant and how  much of each is already used. Any signed-in member except a guest may call it. The call is read-only; the plan  comes from the cache, and `refresh=true` re-reads it from the billing service, a remote call meant for right  after a purchase. The answer is trimmed to the caller\'s user type: a DocSpace administrator or the owner gets  the price, the due date and all features, a room administrator only the `manager`, `room`, `total_size` and  `statistic` features, and a user only `total_size`. For both of the latter `price` is an empty object and  `dueDate` is omitted, while the storage quota settings (`usersQuota`, `roomsQuota`, `aiAgentsQuota`,  `tenantCustomQuota`) come back as for an administrator. The quotas that could be bought instead are  `GET api/2.0/portal/payment/quotas`. A guest is refused with 403.
         * @summary Get the current plan and limits
         * @param {boolean} [refresh] Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
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
         * Returns the AI chat models that are barred on this portal - the ones no user of it may pick for a  conversation, whatever the price list offers. Only a DocSpace administrator may read it, and the call is  read-only. When the installation has no billing service or AI is not enabled for the portal, the answer is an  empty set instead of an error, which is indistinguishable from a portal that restricts nothing. An empty  `models` therefore means every model in `GET api/2.0/portal/payment/ai-prices` may be used. The set names the  barred models and not the allowed ones; replace it with `PUT api/2.0/portal/payment/ai-model/restrictions`.
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
         * Returns one spending limit on the AI services of the portal by its ID - the limit of the portal as a whole, the  one for every user, or a personal one. Only a DocSpace administrator may read it, an installation without a  billing service answers 403, and the call is read-only. The limit comes back with its scope, thresholds, their  currency and unit, the period and whether it is in force, but without its spending: that comes with  `GET api/2.0/portal/payment/servicelimit/total` for the portal and with  `GET api/2.0/portal/payment/servicelimit/participants` for each user. A portal with no billing customer, and an  ID that does not exist, belongs to another portal or is not a limit on the AI services, answer 404.
         * @summary Get a service limit
         * @param {number} id The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-service-limit/
         */
        getServiceLimit: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getServiceLimit', 'id', id)

            const localVarPath = `/api/2.0/portal/payment/servicelimit/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Reports in money how much of the portal\'s paid subscription period is still unused - the credit that  `POST api/2.0/portal/payment/subscription/movetowallet` would carry over to the wallet if the subscription  were ended now. The portal must have a billing customer and a plan in the paid state; a plan that is not paid  answers 402, and a paid plan without a subscription row gives 404. Only the payer - the portal user whose  e-mail is the billing customer\'s e-mail - may read it, and the call is read-only. The answer states the total  cost of the current period with its currency, the start and the end of that period in UTC, the moment the  unused part is measured up to, the days already elapsed, and the remaining balance both in the subscription  currency and converted to the wallet currency. Every figure is computed for the instant of the request, so it  changes between calls.
         * @summary Get the subscription balance information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSubscriptionBalanceInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-subscription-balance-info/
         */
        getSubscriptionBalanceInfo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/subscription/balance`;
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
         * Returns which wallet services an administrator has switched on for this portal by hand, as opposed to the ones  its plan pays for. Only a DocSpace administrator may read it, an installation without a billing service  answers 403, no billing customer is needed, and the call is read-only. `enabledServices` holds the names of  those services and is empty when none was switched on. This is the stored setting and not the state of the  portal: a service the plan brings with it is active without appearing here, so the honest answer to what is  running is `GET api/2.0/portal/payment/activeservices`. One entry is changed with  `POST api/2.0/portal/payment/servicestate`.
         * @summary Get the wallet service settings
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
         * Returns the portal\'s automatic wallet top-up settings - whether it is on, the balance that triggers a  charge, the balance it is topped up to, and the currency both are expressed in. Any DocSpace  administrator may read them, and unlike the operation that changes them this one needs neither a  billing customer nor a configured billing service, so it answers on a portal that has never paid for  anything. It is read-only and changes nothing.  A portal that has never configured top-up gets the defaults rather than an empty result: `enabled` is  false, `currency` is null, and `minBalance` and `upToBalance` are 0. Those two zeros are outside the  ranges `POST api/2.0/portal/payment/topupsettings` accepts - 5 to 1000 and 6 to 5000 - so the answer  cannot be sent straight back to it; supply real values instead. `lastModified` is  `0001-01-01T00:00:00` until the settings are stored for the first time.  `lowBalanceThreshold` and `lowBalanceNotified` are maintained by the portal itself: they are reported  here, but cannot be written.
         * @summary Get the auto top-up settings
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
         * Returns the spending limit on the AI services for the portal as a whole - the ceiling the spending of every user  counts towards - together with what was spent against it in the current period and what is left. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and the call is  read-only. The limit is checked in addition to the limits  of the users, so a user can be stopped by it before reaching their own. The spending includes the expected cost  of AI operations still in progress. When no such limit has been set, or it was deleted, the answer is 200 with a  null `response`; create the limit with `POST api/2.0/portal/payment/servicelimit` and the scope `Total`. A  switched-off limit is still returned, with `enabled` false. A portal with no billing customer answers 404.
         * @summary Get the portal service limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTotalServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-total-service-limit/
         */
        getTotalServiceLimit: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicelimit/total`;
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
         * Returns one wallet service by name, for a client that already knows which service it needs and does not want  the whole catalogue. `service` is the name of the service - `Storage`, `Backup`, `AITools`, `Admin`,  `DocsCloud`, `DocsCloudDevPack` or `AISearch` - and a name this installation does not sell answers 404.  Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is  read-only. The answer has the same shape as one item of `GET api/2.0/portal/payment/walletservices` - the  price of a unit, the unit, the limits the service grants and its service name - except that the variants of a  service are not grouped into `innerServices` here, because a single service is looked up directly. The price  is in the currency resolved for the request.
         * @summary Get a wallet service
         * @param {TenantWalletService} service The service to look up, given by its catalogue name. A service this installation does not sell answers 404,  and the whole catalogue is `GET api/2.0/portal/payment/walletservices`.
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
         * Lists every service the portal may pay for out of its wallet - extra administrators, disk storage, backup, AI  tools, AI search and Docs Connect - with the price of a unit, the unit it is sold in and whether the portal has  it switched on. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Services that are variants of one another are folded together: the visible one  carries the rest in its `innerServices`, so a client renders one card per group. The AI services are left out  entirely when AI is not enabled for the portal. This is the catalogue and not the state of the portal - what  is actually running is `GET api/2.0/portal/payment/activeservices`, one service on its own is  `GET api/2.0/portal/payment/walletservice`, and switching one on or off is  `POST api/2.0/portal/payment/servicestate`.
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
         * Ends the portal\'s paid subscription and moves it onto the wallet: the unused balance of the running period is  credited to the wallet, the wallet is topped up from the payment method on file if that credit does not cover  the purchase, and the requested number of administrators is then bought as a wallet service. The portal needs  a billing customer with a payment method set and a plan in the paid state, `quantity` has to name the  administrators wallet product, and the number asked for may not be below the administrators the portal already  has - read the credit that will be carried over from `GET api/2.0/portal/payment/subscription/balance` first.  Only the payer may call it. The call is mutating, spends money and cannot be undone: the subscription is ended  before the purchase is attempted, so a failure in the second half leaves the portal on the wallet with the  money credited but the administrators unbought, and a repeat would then buy them a second time. It is limited  to ten requests a minute per user by default. The result is `true` when the administrators were bought.
         * @summary Move the subscription to the wallet
         * @param {QuantityRequestDto} [quantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for moveSubscriptionToWallet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-subscription-to-wallet/
         */
        moveSubscriptionToWallet: async (quantityRequestDto?: QuantityRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/subscription/movetowallet`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(quantityRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends the portal\'s message to the ONLYOFFICE sales team - the contact-sales form behind a request for a quote,  an invoice or a plan that cannot be bought online. `email` has to be a well-formed address and is where the  answer will go, while `userName` and `message` say who is asking and what for; all three are required and none  may be empty. Only a DocSpace administrator may call it. Nothing on the portal changes: no plan, no quota and  no payment is touched, a message is mailed out and the request is written to the portal audit trail. There is  no response body - status 200 means the message was handed to the mail service - and the call is not  idempotent, so a repeat sends a second message. It is limited to ten requests a minute per user by default and  answers 429 above that.
         * @summary Contact the sales team
         * @param {SalesRequestDto} [salesRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendPaymentRequest operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/
         */
        sendPaymentRequest: async (salesRequestDto?: SalesRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(salesRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the same personal spending limit on the AI services for each of the listed portal users in one call,  replacing the personal limit any of them already has and switching it on, so it is how a ceiling is rolled out  to a group of users. The portal needs a billing customer, and the caller needs the permission to edit the portal  settings as well as DocSpace administrator rights. At least one of `amountValue` and `quantityValue` must be  given, every user in `userIds` must exist on the portal, and a user listed twice is limited once. One call takes  at most 1000 users; split a larger group into several calls. Unlike  `PUT api/2.0/portal/payment/servicelimit`, this sets the whole limit: a threshold left out is removed, and the  period may change, though a lifetime limit set to lifetime again keeps counting from where it was. Each personal  limit applies instead of the one for every user, and the limit of the portal is checked on top. The call is mutating and idempotent, and it is written to the portal audit trail. The answer is  the number of personal limits that were set; the result is listed by  `GET api/2.0/portal/payment/servicelimit/participants`.
         * @summary Set the user service limits
         * @param {SetParticipantServiceLimitsRequestDto} [setParticipantServiceLimitsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-participant-service-limits/
         */
        setParticipantServiceLimits: async (setParticipantServiceLimitsRequestDto?: SetParticipantServiceLimitsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicelimit/participants`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setParticipantServiceLimitsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the whole set of AI chat models barred on this portal: the body is the complete set that is to hold,  so adding one restriction means sending the new model together with the ones already restricted, lifting one  means leaving it out, and an empty set lifts them all. Read the current set from  `GET api/2.0/portal/payment/ai-model/restrictions` and the model identifiers from  `GET api/2.0/portal/payment/ai-prices` before calling. The installation needs a billing service and the AI  gateway configured, the portal needs a billing customer and the AI tools wallet service switched on with  `POST api/2.0/portal/payment/servicestate`, and the caller needs the permission to edit the portal settings as  well as DocSpace administrator rights. The call is mutating and idempotent - sending the same set twice leaves  the same state - and it is written to the portal audit trail. It takes effect on the next AI request, so a  conversation already open on a model that has just been barred cannot go on with it. The stored set comes  back in the answer. While AI tools is off the call is refused with 403 instead of being stored, because the  read reports an empty set then and nothing written could be read back.
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
         * Switches the portal\'s automatic wallet top-up on or off and sets its thresholds: while it is on, the payment  method on file is charged whenever the wallet balance falls below `minBalance`, enough to bring it up to  `upToBalance`, in `currency`. The portal needs a billing customer whose wallet balance exists - a portal that  has never had one answers 404, so top the wallet up once with `POST api/2.0/portal/payment/deposit` first -  and only the payer may change the settings. The body replaces the stored settings as a whole and an omitted  body resets them to the defaults; `minBalance` is accepted between 5 and 1000 and `upToBalance` between 6 and  5000, and `upToBalance` has to be greater than `minBalance`, so that a top-up lifts the wallet above the balance  that triggers it. The low-balance warning state (`lowBalanceThreshold`, `lowBalanceNotified`) and `lastModified` may be  sent for compatibility but are ignored: the portal keeps the values it had. The call is mutating and  idempotent, it charges nothing by itself, it is written to the portal audit trail, and switching the top-up on also re-arms the low-balance warning. The settings as they were stored come  back in the answer.
         * @summary Set the auto top-up settings
         * @param {TenantWalletSettingsRequestDto} [tenantWalletSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/
         */
        setTenantWalletSettings: async (tenantWalletSettingsRequestDto?: TenantWalletSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantWalletSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stops the `xlsx` monthly usage report this user has running and drops its task, for a report that was started  for the wrong period or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/monthly/report` can still answer for a moment afterwards. The call  is safe to repeat and does nothing at all when this user has no such report running: there is no response  body, and status 200 says the stop was requested, not that a report was really stopped. It leaves the  operations and service usage reports alone, and a report that had already finished keeps its file in My  documents.
         * @summary Terminate the monthly usage report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-monthly-usage-report/
         */
        terminateCustomerMonthlyUsageReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage/monthly/report`;
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
         * Stops the `xlsx` wallet operations report this user has running and drops its task, for a report that was  started with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has  to be a DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/operationsreport` can still answer for a moment afterwards. The call is  safe to repeat and does nothing at all when this user has no report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. A report that had already  finished keeps its file in My documents - nothing is deleted from there.
         * @summary Terminate the operations report
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
         * Stops the `xlsx` service usage report this user has running and drops its task, for a report that was started  with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/report` can still answer for a moment afterwards. The call is safe  to repeat and does nothing at all when this user has no such report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. It leaves the operations and  monthly usage reports alone, and a report that had already finished keeps its file in My documents.
         * @summary Terminate the service usage report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-service-usage-report/
         */
        terminateCustomerServiceUsageReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/customer/usage/report`;
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
         * Charges the payment method on file and adds the amount to the portal\'s wallet, the balance every wallet  service is paid from. The portal needs a billing customer with a payment method set - attach one with  `GET api/2.0/portal/payment/checkoutsetupurl` - `currency` has to be one of the accounting currencies this  installation supports, and `amount` is a whole number of currency units between 1 and 999999. Only the payer  may call it. The call takes money and is not idempotent in any way: two identical requests charge twice, so a  client must not retry it blindly after a timeout, and it is limited to ten requests a minute per user by  default. A successful top-up pushes the new balance to the portal clients over their socket connection and  re-arms the low-balance notification. The result is `true` when the payment provider accepted the charge; read  the resulting balance back from `GET api/2.0/portal/payment/customer/balance`.
         * @summary Top up the wallet
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
         * Changes how many units of the plan the portal is paying for - the number of administrators it covers - and  lets the payment provider bill the difference against the payment method already on file. The portal must have  a billing customer and a plan bought through `PUT api/2.0/portal/payment/url`, and while the portal is on a  priced plan the product name in `quantity` has to be that same plan, which `GET api/2.0/portal/payment/quota`  reports, because a subscription is changed here and not swapped. Only the payer - the portal user whose e-mail  is the billing customer\'s e-mail - may call it. The call is mutating and charges money, and it is guarded  against a double submission: once the new quantity is in effect, repeating the same request fails with 400  because that quantity is already set. The result is `true` when the provider accepted the change and `false`  when it declined it without an error. Exactly one product per call is accepted, the operation is limited to  ten requests a minute per user by default and answers 429 above that, and wallet services are not bought here  - use `PUT api/2.0/portal/payment/updatewallet` for those.
         * @summary Change the subscription quantity
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
         * Changes the thresholds of an existing spending limit on the AI services, or switches it off and back on with  `enabled`. The portal needs a billing customer, and the caller needs the permission to edit the portal settings  as well as DocSpace administrator rights. Only the given fields change: an omitted threshold keeps its value, so  a threshold once set cannot be removed here - delete the limit with  `DELETE api/2.0/portal/payment/servicelimit/{id}` and create it anew with  `POST api/2.0/portal/payment/servicelimit`, which is also the way to change its scope, user or period. A  switched-off limit stops restricting the AI services at once. The call is mutating and idempotent, it is written  to the portal audit trail, and a new threshold applies from the very next operation; lowering it below what was  already spent blocks the AI services until the period ends. An ID that does not exist, belongs to another portal  or is not a limit on the AI services answers 404.
         * @summary Update a service limit
         * @param {UpdateServiceLimitRequestDto} [updateServiceLimitRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-service-limit/
         */
        updateServiceLimit: async (updateServiceLimitRequestDto?: UpdateServiceLimitRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/payment/servicelimit`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateServiceLimitRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Buys more units of a wallet service - extra administrators, disk storage, backup, AI tools, AI search or  Docs Connect - or writes down the quantity that service will have after the next renewal, depending on  `productQuantityType`. With `Add` (1) the units are bought at once and paid out of the portal wallet, so the  wallet needs a sub-account in the accounting currency and enough money on it; with `Set` (0) nothing is  charged now and the quantity only takes effect in the next period, where an empty or zero quantity cancels a  change scheduled earlier. `Renew` and `Sub` are not accepted here. The portal needs a billing customer and the  caller has to be a DocSpace administrator; a service that is an add-on to the plan also needs the plan itself  to be paid, otherwise the answer is 402. Minimum quantities apply - disk storage starts at 100 units, the  Docs Connect Dev Pack at 10, and the administrators may not be fewer than the portal already has - and in  the `Add` form they are checked only while the portal does not hold that service yet. Asking for the Docs Connect  plan in the `Set` form while Docs Connect Dev Pack is active schedules the reversion to it at the next period,  while the upgrade in the other direction is not done here at all: use  `POST api/2.0/settings/docscloud/switchtodevpack`. The result is `true` when the change was accepted; the call  is mutating, spends money in its `Add` form and is limited to ten requests a minute per user by default. Price  the same purchase without paying for it with `PUT api/2.0/portal/payment/calculatewallet`.
         * @summary Change a wallet service quantity
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
         * Prices a wallet-service purchase without making it: it returns what buying the requested number of units would  cost right now, so a client can show the amount before asking for a confirmation. Only `productQuantityType`  `Add` (1) is accepted, the quantity must be greater than zero, and the portal needs a billing customer whose  wallet has a sub-account in the accounting currency. The caller has to be a DocSpace administrator. Nothing is  bought, charged or written down - the call is read-only and may be repeated - and the purchase itself is  `PUT api/2.0/portal/payment/updatewallet`. The answer carries the amount with its currency, the quantity it  was computed for and the identifier of the calculation. It is the price of this moment and is not held: it can  differ by the time the purchase is made.
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
         * Switches one wallet service on or off for the portal: `service` names it and `enabled` says which way. The  portal needs a billing customer, and the caller needs both the permission to edit the portal settings and  DocSpace administrator rights. Order matters between the two AI services - AI tools has to be on before AI  search may be switched on, and switching AI tools off switches AI search off with it - so a request that  breaks that order is refused with 403. The call is mutating and idempotent: switching on a service that is  already on changes nothing. It is written to the portal audit trail, and switching AI tools notifies the  portal clients so the AI features appear or disappear for them without a reload. The whole updated set of  switched-on services comes back. Switching a service on does not buy it - its units are still bought with  `PUT api/2.0/portal/payment/updatewallet`.
         * @summary Switch a wallet service
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
         * Queues the wallet spending added up per calendar month as an `xlsx` file and returns the task that will build  it; the file is not ready when the response arrives. The portal needs a billing customer and the caller has to  be a DocSpace administrator. The body takes only the period - `startDate` and `endDate`, both inclusive - and  an empty body covers everything from the portal creation date to now; the months are cut in the portal time  zone, exactly as in `GET api/2.0/portal/payment/customer/usage/monthly`. Poll  `GET api/2.0/portal/payment/customer/usage/monthly/report` until `isCompleted` is true, then take the file  from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents  section, where it counts against the portal storage like any other file. One monthly usage report per user is  tracked at a time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/usage/monthly/report` stops it. There is no service filter here: for a  report per service use `POST api/2.0/portal/payment/customer/usage/report`.
         * @summary Start the monthly usage report
         * @param {CustomerMonthlyUsageReportRequestDto} [customerMonthlyUsageReportRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-monthly-usage-report/
         */
        async createCustomerMonthlyUsageReport(customerMonthlyUsageReportRequestDto?: CustomerMonthlyUsageReportRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomerMonthlyUsageReport(customerMonthlyUsageReportRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.createCustomerMonthlyUsageReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues the history of the wallet movements as an `xlsx` file and returns the task that will build it; the file  is not ready when the response arrives. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/operations` -  the service names, the date range, the participant, the operation type and status, the credit and debit  directions and the ordering - and an empty body reports everything from the portal creation date to now; a  service name this installation does not sell fails with 404. Poll  `GET api/2.0/portal/payment/customer/operationsreport` until `isCompleted` is true, then take the file from  `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents section,  where it counts against the portal storage like any other file. One operations report per user is tracked at a  time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/operationsreport` stops it. A build that fails ends the task with  `error` filled in rather than failing this call.
         * @summary Start the operations report
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
         * Queues the usage of the wallet services as an `xlsx` file and returns the task that will build it; the file is  not ready when the response arrives. The portal needs a billing customer and the caller has to be a DocSpace  administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/usage` - the service  names, the date range, the participant, the operation status, the usage metadata and the ordering - and an  empty body reports every service from the portal creation date to now; a service name this installation does  not sell fails with 404. Poll `GET api/2.0/portal/payment/customer/usage/report` until `isCompleted` is true,  then take the file from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s  own My documents section, where it counts against the portal storage like any other file. One service usage  report per user is tracked at a time - a call made while the previous one is still running answers with that  task - and `DELETE api/2.0/portal/payment/customer/usage/report` stops it. It is a different report from the  operations one and does not interfere with it: per-movement history is  `POST api/2.0/portal/payment/customer/operationsreport`.
         * @summary Start the service usage report
         * @param {CustomerServiceUsageReportRequestDto} [customerServiceUsageReportRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-service-usage-report/
         */
        async createCustomerServiceUsageReport(customerServiceUsageReportRequestDto?: CustomerServiceUsageReportRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomerServiceUsageReport(customerServiceUsageReportRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.createCustomerServiceUsageReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a spending limit on the AI services - AI tools and AI search together - with `scope` saying whom it  applies to: `Total` for the portal as a whole, `Global` for every user separately, `Custom` for the user in  `userId`, which only this scope takes. A personal limit applies to its user instead of the one for every user,  and the limit of the portal is checked on top of both. The portal needs a billing customer, and the caller needs  the permission to edit the portal settings as well as DocSpace administrator rights. At least one of  `amountValue` and `quantityValue` must be given; with both, the services stop as soon as either is reached. The  call is mutating and written to the portal audit trail. It is not idempotent: a second limit of the same scope,  or for the same user, is refused with 409 - change the existing one with  `PUT api/2.0/portal/payment/servicelimit` instead. The scope, the user and the period cannot be changed later.
         * @summary Create a service limit
         * @param {CreateServiceLimitRequestDto} [createServiceLimitRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-service-limit/
         */
        async createServiceLimit(createServiceLimitRequestDto?: CreateServiceLimitRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceLimitWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createServiceLimit(createServiceLimitRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.createServiceLimit']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes one spending limit on the AI services completely - the limit of the portal as a whole, the one for  every user, or a personal one - so it no longer restricts anyone. The portal needs a billing customer, and the  caller needs the permission to edit the portal settings as well as DocSpace administrator rights. The call is  destructive and cannot be undone: unlike switching a limit off with `PUT api/2.0/portal/payment/servicelimit`,  which keeps its settings, a deleted limit is gone, and a new one has to be created with  `POST api/2.0/portal/payment/servicelimit`. Deleting a personal limit lets the limit for every user apply to  that user. It is written to the portal audit trail. An ID that does not exist, belongs to another portal or is  not a limit on the AI services answers 404, which is also what a repeated deletion of the same limit gets.
         * @summary Delete a service limit
         * @param {number} id The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-service-limit/
         */
        async deleteServiceLimit(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteServiceLimit(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.deleteServiceLimit']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches off every personal spending limit on the AI services in one call, so each user falls back to the limit  for every user, if one is set. The limit of the portal as a whole and the one for every user stay as they are.  The portal needs a billing customer, and the caller needs the permission to edit the portal settings as well as  DocSpace administrator rights. The switched-off limits stop restricting their users at once and are kept, so  each can be switched back on with `PUT api/2.0/portal/payment/servicelimit`. The call is mutating and  idempotent - repeating it switches off nothing more - and it is written to the portal audit trail. The answer is  the number of personal limits that were switched off, zero when none was in force. To switch off the limit of a  single user, use `PUT api/2.0/portal/payment/servicelimit` with `enabled` set to false.
         * @summary Disable the user service limits
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for disableParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/disable-participant-service-limits/
         */
        async disableParticipantServiceLimits(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Int32Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.disableParticipantServiceLimits(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.disableParticipantServiceLimits']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the price list of one wallet service as the accounting service keeps it: every price record with its  time unit, cost and resulting price, volume threshold, validity period, status and discount category. Take  the service name from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`. The caller must  be a DocSpace administrator, and the server must have the billing and accounting services configured;  otherwise the call fails with 403. The call is read-only and can be repeated safely. By default the list  also holds retired and not yet started records; `active=true` keeps only the prices in force now. A service  with no prices comes back as an empty list. Amounts are in the currency of the service, which the records do  not name. The list is cached for all portals for up to an hour, so a change in the accounting service can  take that long to appear. For the current price of every plan and wallet service as the customer sees it, use  `GET api/2.0/portal/payment/quotas`. An unknown service name fails with 500, as does an unreachable  accounting service.
         * @summary Get the service prices from the accounting service
         * @param {string} serviceName The service whose price list is read, named the way the billing catalogue names it, such as `ai-tools` or  `backup`. Take the value from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`.
         * @param {boolean} [active] Whether the answer is narrowed to the prices in force at the moment of the call. Leaving it false also  returns the retired and the not yet started ones, which is what pricing a movement recorded in the past  needs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAccountingServicePrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounting-service-prices/
         */
        async getAccountingServicePrices(serviceName: string, active?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServicePriceArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountingServicePrices(serviceName, active, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getAccountingServicePrices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the wallet services the portal is running right now: the add-ons its plan pays for that are in the  active state, plus the ones an administrator switched on by hand in the wallet service settings; the Docs Connect  trial is listed as well, although it is not paid from the wallet. Only a DocSpace administrator may call it,  no billing customer is needed for it, and the call is read-only. Every item names the service, its title and  the unit it is measured in, and says whether it is a subscription; a subscribed service also carries the limit  it grants and how much of it is used where that number is known - the editor seats and the editors currently  active for Docs Connect, the purchased units and the units already consumed for disk storage. A service listed  with no limit is one whose usage is not counted this way, not one without a limit. The catalogue of what could  be switched on is `GET api/2.0/portal/payment/walletservices`, and switching one is  `POST api/2.0/portal/payment/servicestate`.
         * @summary Get the active wallet services
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getActiveServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-active-services/
         */
        async getActiveServices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActiveServiceArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActiveServices(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getActiveServices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the price list of the AI features the portal pays for out of its wallet: the chat models with the  price of their prompt and completion tokens, the embedding models, the image models with their per-image  price, and the web search providers with the price of one search. The installation needs both a billing  service and the AI gateway configured, otherwise the answer is 403, and only a DocSpace administrator may read  it; the call is read-only. Token prices are normalised per million tokens, and every price is in the single  `currency` the answer names. Each entry carries the model identifier to use when talking to the AI operations,  its display alias, its provider with the provider icon, and a link to the model\'s own page. It is a list of  what the models cost and not of what the portal spent - that is `GET api/2.0/portal/payment/customer/usage` -  and it says nothing about which of them are allowed here, which is  `GET api/2.0/portal/payment/ai-model/restrictions`.
         * @summary Get AI model prices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAiPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-prices/
         */
        async getAiPrices(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiPricesWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAiPrices(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getAiPrices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hands back the hosted page on which a payment method is attached to the portal\'s billing account, for the case  where money has to be taken later - a wallet top-up or an automatic one - rather than a plan bought now. A  portal that already has a payment method on file answers with an empty result; a DocSpace administrator may  ask for the page, but once the portal has a billing customer with an e-mail, only its payer may. The call  itself changes nothing and may be repeated: the payment method is stored by the payment provider when the  returned page is completed, after which `GET api/2.0/portal/payment/customerinfo` reports it as set. The URL  is absolute, carries the caller\'s e-mail, the language of the request and the currency of the region, and  redirects to `successUrl` or `backUrl` when the user finishes or cancels. It buys nothing - a plan is bought  with `PUT api/2.0/portal/payment/url`.
         * @summary Get the checkout setup page URL
         * @param {string} backUrl The absolute address the setup page sends the user back to when attaching a payment method is abandoned. It  has to be a well-formed URL and must be reachable by that user rather than by the portal.
         * @param {string} successUrl The absolute address the setup page sends the user to once the payment provider has stored the payment  method. Reaching it means a method is now on file, which `GET api/2.0/portal/payment/customerinfo` confirms;  nothing has been charged.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         */
        async getCheckoutSetupUrl(backUrl: string, successUrl: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCheckoutSetupUrl(backUrl, successUrl, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCheckoutSetupUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the money the portal has in its wallet as the accounting service holds it: the account with its own  currency, one sub-account per currency with the amount on it, and the most recent credit movement. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and a portal that  has never been a customer gets an empty result. The call is read-only. This balance is what the wallet  services are charged against, so it falls as they are used and rises with  `POST api/2.0/portal/payment/deposit`; the movements behind a change are listed by  `GET api/2.0/portal/payment/customer/operations`. Pass `refresh=true` to re-read it from the accounting  service rather than the cache - right after a top-up the cached figure is still the old one.
         * @summary Get the customer balance
         * @param {boolean} [refresh] Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
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
         * Lists the top-ups of the portal\'s wallet - the payments into it - one page at a time, which is what a list of  payments with their invoices is built from. A portal that is not a billing customer yet has no top-ups and  gets an empty result rather than an error. Only the payer or the portal owner may read it, as with the  invoices, and the call is read-only. Every filter is optional: `startDate` and `endDate` default to the  portal creation date and the present moment, a value without `Z` or an offset is read in the portal time  zone, and `status` narrows to how a top-up ended. `offset` and `limit` default to 0 and 25 and are echoed next  to `totalQuantity`, `totalPage` and `currentPage`; a negative `offset` or a `limit` outside 1 to 100 fails  with 400. An empty result means the portal is not a billing customer, has no wallet at the accounting service  yet, or that service could not be read; a period without top-ups gives an empty `collection`. A top-up with  `hasInvoice` true has an invoice, opened with `GET api/2.0/portal/payment/customer/deposits/{id}/invoice`.  For the full wallet history, charges and refunds included, use  `GET api/2.0/portal/payment/customer/operations`.
         * @summary Get the wallet top-ups
         * @param {string} [startDate] The beginning of the period, inclusive, as an ISO 8601 timestamp. A value with neither `Z` nor an offset is  read in the portal time zone, not in the caller\'s; defaults to the portal creation date.
         * @param {string} [endDate] The end of the period, inclusive, as an ISO 8601 timestamp. A value with neither `Z` nor an offset is read in  the portal time zone, not in the caller\'s; defaults to the moment the call is made.
         * @param {OperationStatus} [status] The outcome to keep. A top-up that is still being settled is reported as pending and may change later, while  the other outcomes are final; every outcome is reported when this is omitted.
         * @param {number} [offset] The number of top-ups to skip before the first one returned, for walking through a long history page by page.  Counted after the filters are applied, and starts at 0 when omitted.
         * @param {number} [limit] The maximum number of top-ups returned in one page. Defaults to 25 when omitted; the answer echoes the window  back next to `totalQuantity`, `totalPage` and `currentPage`, so the next `offset` can be computed without  counting the items.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerDeposits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-deposits/
         */
        async getCustomerDeposits(startDate?: string, endDate?: string, status?: OperationStatus, offset?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DepositReportWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerDeposits(startDate, endDate, status, offset, limit, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerDeposits']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the billing customer behind the portal: the e-mail its billing account is registered to, whether a  payment method is stored for it, and the portal user who is the payer of that account. Only a DocSpace  administrator may read it, and the call is read-only. The answer is empty in two ordinary cases - the  installation has no billing service configured at all, and the portal has never been a customer - so an empty  body is not an error. `payer` is filled in only when the billing e-mail belongs to a portal user; when it does  not, the e-mail is still shown but the field stays empty, and that is what makes every payer-only operation of  this group unreachable for everybody. `refresh=true` re-reads the customer from the billing provider instead  of the cache, which is worth doing right after a payment method has been attached.
         * @summary Get the customer information
         * @param {boolean} [refresh] Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
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
         * Returns what the portal spent from its wallet added up per calendar month, so a client can draw a spending  chart without paging through every movement. Only a DocSpace administrator may read it, a portal with no  billing customer answers with an empty result, and the call is read-only. `startDate` and `endDate` bound the  period, both inclusive, and default to the portal creation date and the present moment; the months are cut in  the portal time zone, so a movement at the edge of a month falls where the portal sees it and not where UTC  does. Each item names its year and month, the total charged in it with the currency, and how many operations  that total came from. The movements behind a month are in `GET api/2.0/portal/payment/customer/operations`,  and the same figures as a file come from `POST api/2.0/portal/payment/customer/usage/monthly/report`.
         * @summary Get the customer monthly usage
         * @param {string} [startDate] The beginning of the reported period, inclusive. The months are cut in the portal time zone rather than in  UTC, so spending at the turn of a month falls where the portal sees it; defaults to the portal creation date.
         * @param {string} [endDate] The end of the reported period, inclusive. Cut in the portal time zone in the same way as `startDate`, and  defaults to the moment the call is made.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerMonthlyUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-monthly-usage/
         */
        async getCustomerMonthlyUsage(startDate?: string, endDate?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerMonthlyUsageArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerMonthlyUsage(startDate, endDate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerMonthlyUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the state of the `xlsx` monthly usage report this user started with  `POST api/2.0/portal/payment/customer/usage/monthly/report`: `percentage` while it is being built,  `isCompleted` when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in  the caller\'s My documents, and `error` when the build failed. The portal needs a billing customer and the  caller has to be a DocSpace administrator; the call is read-only and is the one to poll. The task is kept per  user and per report kind, so it reports neither another administrator\'s report nor the operations and service  usage ones, which have their own status operations. An empty result means this user has no monthly usage  report at all - none was started, or the finished one was already picked up or terminated. A completed task is  dropped as soon as the next report is started, so read the file link out of the same answer that first reports  `isCompleted`.
         * @summary Get the monthly usage report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-monthly-usage-report/
         */
        async getCustomerMonthlyUsageReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerMonthlyUsageReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerMonthlyUsageReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the money movements on the portal\'s wallet - top-ups, the charges of the wallet services, refunds and  corrections - one page at a time, which is what a billing history is built from. Only a DocSpace administrator  may read it, a portal with no billing customer answers with an empty result, and the call is read-only. Every  filter is optional: `startDate` and `endDate` are read in the portal time zone and default to the portal  creation date and the present moment, `serviceName` narrows to particular wallet services and fails with 404  on a name this installation does not sell, `participantName`, `type` and `status` narrow to who caused a  movement and how it ended, and `credit` and `debit` include or exclude the two directions. `offset` and  `limit` page through the result and default to 0 and 25, `orderBy` and `orderType` sort it, and the answer  repeats them next to `totalQuantity`, `totalPage` and `currentPage` so a client can page without counting. The  same data as a downloadable file is `POST api/2.0/portal/payment/customer/operationsreport`, and the figures  added up per service are `GET api/2.0/portal/payment/customer/usage`.
         * @summary Get the wallet operations
         * @param {number} [offset] The number of movements to skip before the first one returned, for walking through a long history page by  page. Counted after the filters and the ordering are applied, and starts at 0 when omitted.
         * @param {number} [limit] The maximum number of movements returned in one page. Defaults to 25 when omitted; the answer echoes the  window back next to `totalQuantity`, `totalPage` and `currentPage`, so the next `offset` can be computed  without counting the items.
         * @param {Array<string>} [serviceName] The wallet services whose movements are kept, named the way the billing catalogue names them - `backup`,  `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field of  `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not sell  fails the call with 404, and an omitted list keeps every service. A bare string is accepted in place of an  array for backward compatibility.
         * @param {string} [startDate] The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, so a  movement at the edge of the period falls where the portal sees it; defaults to the portal creation date.
         * @param {string} [endDate] The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to  the moment the call is made.
         * @param {string} [participantName] The participant whose movements are kept - the account the accounting service records as the cause of a  movement. A movement caused by a portal user carries that user ID here, and one caused by the portal itself  carries the customer name; surrounding whitespace is trimmed, and an omitted value keeps every participant.
         * @param {boolean} [credit] Whether movements that add money to the wallet - top-ups, refunds and corrections in the portal\'s favour -  are kept. Both directions are reported when neither this nor `debit` is given.
         * @param {boolean} [debit] Whether movements that take money out of the wallet - the charges of the wallet services - are kept. Both  directions are reported when neither this nor `credit` is given.
         * @param {OperationType} [type] The kind of movement to keep, which says what caused the money to move rather than how it ended. Every kind  is reported when it is omitted.
         * @param {OperationStatus} [status] The outcome to keep. A movement that is still being settled is reported as pending and may change later,  while the other outcomes are final; every outcome is reported when this is omitted.
         * @param {string} [orderBy] The name of the field the movements are sorted by, spelled as the accounting service names it, such as  `StartDate` or `ServiceName`. Surrounding whitespace is trimmed, and the accounting service applies its own  ordering when this is omitted.
         * @param {OperationOrderType} [orderType] The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting  service does by default, so leaving this out sorts the same way as asking for descending explicitly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         */
        async getCustomerOperations(offset?: number, limit?: number, serviceName?: Array<string>, startDate?: string, endDate?: string, participantName?: string, credit?: boolean, debit?: boolean, type?: OperationType, status?: OperationStatus, orderBy?: string, orderType?: OperationOrderType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerOperations(offset, limit, serviceName, startDate, endDate, participantName, credit, debit, type, status, orderBy, orderType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerOperations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the state of the `xlsx` wallet operations report this user started with  `POST api/2.0/portal/payment/customer/operationsreport`: `percentage` while it is being built, `isCompleted`  when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it never reports another administrator\'s report, nor the service usage and monthly usage ones, which  have their own status operations. An empty result means this user has no operations report at all - none was  started, or the finished one was already picked up or terminated. A completed task is dropped as soon as the  next report is started, so read the file link out of the same answer that first reports `isCompleted`.
         * @summary Get the operations report status
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
         * Returns how much of each wallet service the portal consumed and what that cost, added up per service instead  of listed per movement. Only a DocSpace administrator may read it, a portal with no billing customer answers  with an empty result, and the call is read-only. The filters are optional: `serviceName` narrows to particular  services and fails with 404 on a name this installation does not sell, `participantName` and `status` narrow  to who consumed and how the operation ended, `startDate` and `endDate` bound the period in the portal time  zone, `metadata` matches the key and value pairs a service records with its usage, and `offset`, `limit`,  `orderBy` and `orderType` page and sort the result. Amounts come with the unit the service is sold in, except  AI tools, whose consumption is reported in tokens rather than in AI credits. The individual charges behind  these totals are `GET api/2.0/portal/payment/customer/operations`, and the same figures as a downloadable file  are `POST api/2.0/portal/payment/customer/usage/report`.
         * @summary Get the customer service usage
         * @param {Array<string>} [serviceName] The wallet services whose consumption is added up, named the way the billing catalogue names them -  `backup`, `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field  of `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not  sell fails the call with 404, and an omitted list covers every service.
         * @param {string} [participantName] The participant whose consumption is added up - the account the accounting service records as the consumer.  Consumption caused by a portal user carries that user ID here; surrounding whitespace is trimmed, and an  omitted value covers every participant.
         * @param {OperationStatus} [status] The outcome to keep. Consumption that is still being settled is reported as pending and may change later,  while the other outcomes are final; every outcome is counted when this is omitted.
         * @param {string} [startDate] The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, and  defaults to the portal creation date.
         * @param {string} [endDate] The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to  the moment the call is made.
         * @param {{ [key: string]: string; }} [metadata] The usage annotations a wallet service records alongside its consumption, as the key and value pairs that  must all match for a record to be counted. The keys are chosen by the service that writes them, so read them  off the `metadata` of the records already returned rather than guessing; an omitted map counts every record.
         * @param {number} [offset] The number of per-service totals to skip before the first one returned. Counted after the filters and the  ordering are applied, and starts at 0 when omitted.
         * @param {number} [limit] The maximum number of per-service totals returned in one page. Defaults to 25 when omitted; the answer echoes  the window back with its paging information, so the next `offset` can be computed without counting the items.
         * @param {string} [orderBy] The name of the field the per-service totals are sorted by, spelled as the accounting service names it, such  as `ServiceName` or `StartDate`. Surrounding whitespace is trimmed, and the accounting service applies its  own ordering when this is omitted.
         * @param {OperationOrderType} [orderType] The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting  service does by default, so leaving this out sorts the same way as asking for descending explicitly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerServiceUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-usage/
         */
        async getCustomerServiceUsage(serviceName?: Array<string>, participantName?: string, status?: OperationStatus, startDate?: string, endDate?: string, metadata?: { [key: string]: string; }, offset?: number, limit?: number, orderBy?: string, orderType?: OperationOrderType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerServiceUsageReportWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerServiceUsage(serviceName, participantName, status, startDate, endDate, metadata, offset, limit, orderBy, orderType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerServiceUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the state of the `xlsx` service usage report this user started with  `POST api/2.0/portal/payment/customer/usage/report`: `percentage` while it is being built, `isCompleted` when  it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it reports neither another administrator\'s report nor the operations and monthly usage ones, which  have their own status operations. An empty result means this user has no service usage report at all - none  was started, or the finished one was already picked up or terminated. A completed task is dropped as soon as  the next report is started, so read the file link out of the same answer that first reports `isCompleted`.
         * @summary Get the service usage report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-usage-report/
         */
        async getCustomerServiceUsageReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerServiceUsageReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getCustomerServiceUsageReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hands back the address of the page on which the billing provider shows the invoice for one top-up of the  portal\'s wallet, so a client can open or download it. The top-up is named by the `id` that  `GET api/2.0/portal/payment/customer/deposits` returns, and only one listed there with `hasInvoice` true has an  invoice to show. Only the payer or the portal owner may read it, as with the billing account page, and the  call changes nothing. The address is absolute and points to the billing provider rather than to the portal;  it is asked for anew on every call, so request it when the user is about to open the invoice instead of  storing it. A top-up this portal does not have, one without an invoice, or a portal that is not a billing  customer answers 404, and an `id` that is not a number fails with 400. An installation without a billing  service answers 403, and 402 means the billing or the accounting service rejected the request or did not  answer, which a later retry may get past.
         * @summary Get the top-up invoice
         * @param {number} id The ID of the top-up, taken from the `id` field of `GET api/2.0/portal/payment/customer/deposits`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDepositInvoice operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deposit-invoice/
         */
        async getDepositInvoice(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDepositInvoice(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getDepositInvoice']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the spending limit on the AI services for every user - the same ceiling applied to each user separately,  for any user without a personal limit in force. Only a DocSpace administrator may read it, an installation  without a billing service answers 403, and the call is read-only. It comes without spending, since that is  counted per user: read it for each user from `GET api/2.0/portal/payment/servicelimit/participants`; `periodEnd`  still says when the current period ends for everyone. When no  such limit has been set, or it was deleted, the answer is 200 with a null `response`; create the limit with  `POST api/2.0/portal/payment/servicelimit` and the scope `Global`. A switched-off limit is still returned, with  `enabled` false. A portal with no billing customer answers 404.
         * @summary Get the global service limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGlobalServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-global-service-limit/
         */
        async getGlobalServiceLimit(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceLimitWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGlobalServiceLimit(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getGlobalServiceLimit']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists, one page at a time, the spending limit on the AI services in force for each portal user, with what the  user spent against it in the current period and what is left. Only a DocSpace administrator may read it, an  installation without a billing service answers 403, a portal with no billing customer answers 404, and the call  is read-only; a portal with no limits gets an empty page. A user\'s own limit wins over the one for every user: an item with the scope `Custom` is a  personal limit, one with `Global` the limit for every user, its ID repeated for each user it applies to.  Switched-off limits are not listed, and a user who has not used the AI services yet may be missing. `offset`  and `limit` page through the result and default to 0 and 25, and the answer repeats them next to  `totalQuantity`, `totalPage` and `currentPage`; `orderBy` and `orderType` sort it, the newest limits first by  default.
         * @summary Get the user service limits
         * @param {number} [offset] The number of limits to skip before the first one returned, counted in the sort order of the list.
         * @param {number} [limit] The largest number of limits one page holds.
         * @param {ServiceLimitOrderBy} [orderBy] The field the list is sorted by: the user a limit applies to, or the moment it was created.
         * @param {OperationOrderType} [orderType] The direction the field named in `orderBy` is sorted in.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-participant-service-limits/
         */
        async getParticipantServiceLimits(offset?: number, limit?: number, orderBy?: ServiceLimitOrderBy, orderType?: OperationOrderType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceLimitReportWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getParticipantServiceLimits(offset, limit, orderBy, orderType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getParticipantServiceLimits']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hands back the address of the portal page on which the billing account is managed - the payment method on  file, the invoices and the receipts - so a client can link to it instead of assembling the address itself. The  portal must already have a billing customer: one that has never had it gets an empty result, and an  installation without a billing service answers 403. Only the payer or the portal owner may read it, and the  call changes nothing. The value is relative to the portal root (`payment.ashx`), and the optional `backUrl` is  appended to it as a query parameter so the page can send the user back where they came from. It is not a  checkout page: a plan is bought with `PUT api/2.0/portal/payment/url` and a payment method is attached with  `GET api/2.0/portal/payment/checkoutsetupurl`.
         * @summary Get the billing account page
         * @param {string} [backUrl] The absolute address the billing account page should offer as its way back. It is appended to the returned  portal-relative address as a query parameter rather than followed here, and omitting it yields the bare  address of the page.
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
         * Tells a client which currency the portal is billed in: the default currency of the portal region always comes  first, followed by the currency resolved for the current request when that one differs, so the answer holds  one or two items. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Each item carries the country code of the region, the currency symbol and the  native name of the currency; the first item is the currency the amounts from  `GET api/2.0/portal/payment/prices` are expressed in. These are the currencies of the subscription prices, and  they are not the accounting currencies the wallet is topped up in - those come with the balance in  `GET api/2.0/portal/payment/customer/balance`.
         * @summary Get the billing currencies
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
         * Lists the quotas the portal can be put on - the paid plans and the wallet services - each with its price, its  features and the limits it grants, which is what a pricing page is built from. Nothing has to be called first,  the caller needs the permission to edit the portal settings, and the call is read-only. Only quotas marked  visible are listed, newest first, and the two optional filters narrow that: `wallet` selects the wallet  services (`true`) or the subscription plans (`false`), `additional` selects the add-ons to a plan (`true`) or  the plans themselves (`false`), and an omitted filter keeps both kinds. A portal on a non-profit quota is a  special case - asking for `additional=false` returns that single quota and nothing else, because no other plan  may be bought for it. The quota the portal is actually on is not marked here; read it from  `GET api/2.0/portal/payment/quota`.
         * @summary Get the purchasable quotas
         * @param {boolean} [wallet] Which side of the catalogue is listed: `true` keeps the services paid out of the portal wallet, `false` keeps  the subscription plans, and omitting it keeps both.
         * @param {boolean} [additional] Which layer of the catalogue is listed: `true` keeps the add-ons that extend a plan, `false` keeps the plans  themselves, and omitting it keeps both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentQuotas operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/
         */
        async getPaymentQuotas(wallet?: boolean, additional?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuotaArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentQuotas(wallet, additional, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getPaymentQuotas']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the purchase of a monthly paid plan for this portal by handing back the hosted checkout page the buyer  has to open; nothing is bought until that page is completed. The portal must have no paid plan yet - a portal  whose plan is already paid gets an empty result and changes its subscription through  `PUT api/2.0/portal/payment/update` instead - and the product name in `quantity` must be one of the monthly,  non-wallet plans listed by `GET api/2.0/portal/payment/quotas`. Only a DocSpace administrator may call it. The  call itself changes nothing on the portal and may be repeated: the money is taken by the payment provider on  the checkout page, and the plan becomes active once the provider confirms it. The returned URL is absolute and  single-purpose - it carries the caller\'s e-mail, the language of the request and the currency of the request  region, and it redirects to `successUrl` or `backUrl` when the buyer finishes or cancels. Exactly one product  per call is accepted and its quantity has to be greater than zero; yearly and wallet products are refused, and  wallet services are bought with `PUT api/2.0/portal/payment/updatewallet` instead.
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
         * Lists what one unit of every purchasable product costs, keyed by the product name that `quantity` takes in the  purchase operations, so a client can price a plan or a wallet service without reading the whole quota list.  Nothing has to be called first, and the caller needs the permission to edit the portal settings, which portal  administrators and the owner have. The call is read-only. Prices are given in the one currency resolved for  this request from the portal region, which `GET api/2.0/portal/payment/currencies` reports; a product with no  price in that currency comes back as `0` rather than being left out, so a zero means unpriced and not free.  The list covers the products on offer, not the portal\'s own plan - the plan in force, with its limits and its  usage, is `GET api/2.0/portal/payment/quota`.
         * @summary Get the product prices
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
         * Returns the quota the portal is on - its paid plan or the free one - with the limits its features grant and how  much of each is already used. Any signed-in member except a guest may call it. The call is read-only; the plan  comes from the cache, and `refresh=true` re-reads it from the billing service, a remote call meant for right  after a purchase. The answer is trimmed to the caller\'s user type: a DocSpace administrator or the owner gets  the price, the due date and all features, a room administrator only the `manager`, `room`, `total_size` and  `statistic` features, and a user only `total_size`. For both of the latter `price` is an empty object and  `dueDate` is omitted, while the storage quota settings (`usersQuota`, `roomsQuota`, `aiAgentsQuota`,  `tenantCustomQuota`) come back as for an administrator. The quotas that could be bought instead are  `GET api/2.0/portal/payment/quotas`. A guest is refused with 403.
         * @summary Get the current plan and limits
         * @param {boolean} [refresh] Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
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
         * Returns the AI chat models that are barred on this portal - the ones no user of it may pick for a  conversation, whatever the price list offers. Only a DocSpace administrator may read it, and the call is  read-only. When the installation has no billing service or AI is not enabled for the portal, the answer is an  empty set instead of an error, which is indistinguishable from a portal that restricts nothing. An empty  `models` therefore means every model in `GET api/2.0/portal/payment/ai-prices` may be used. The set names the  barred models and not the allowed ones; replace it with `PUT api/2.0/portal/payment/ai-model/restrictions`.
         * @summary Get restricted AI models
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restricted-ai-models/
         */
        async getRestrictedAiModels(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestrictedAiModelsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRestrictedAiModels(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getRestrictedAiModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one spending limit on the AI services of the portal by its ID - the limit of the portal as a whole, the  one for every user, or a personal one. Only a DocSpace administrator may read it, an installation without a  billing service answers 403, and the call is read-only. The limit comes back with its scope, thresholds, their  currency and unit, the period and whether it is in force, but without its spending: that comes with  `GET api/2.0/portal/payment/servicelimit/total` for the portal and with  `GET api/2.0/portal/payment/servicelimit/participants` for each user. A portal with no billing customer, and an  ID that does not exist, belongs to another portal or is not a limit on the AI services, answer 404.
         * @summary Get a service limit
         * @param {number} id The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-service-limit/
         */
        async getServiceLimit(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceLimitWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServiceLimit(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getServiceLimit']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports in money how much of the portal\'s paid subscription period is still unused - the credit that  `POST api/2.0/portal/payment/subscription/movetowallet` would carry over to the wallet if the subscription  were ended now. The portal must have a billing customer and a plan in the paid state; a plan that is not paid  answers 402, and a paid plan without a subscription row gives 404. Only the payer - the portal user whose  e-mail is the billing customer\'s e-mail - may read it, and the call is read-only. The answer states the total  cost of the current period with its currency, the start and the end of that period in UTC, the moment the  unused part is measured up to, the days already elapsed, and the remaining balance both in the subscription  currency and converted to the wallet currency. Every figure is computed for the instant of the request, so it  changes between calls.
         * @summary Get the subscription balance information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSubscriptionBalanceInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-subscription-balance-info/
         */
        async getSubscriptionBalanceInfo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionBalanceWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSubscriptionBalanceInfo(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getSubscriptionBalanceInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns which wallet services an administrator has switched on for this portal by hand, as opposed to the ones  its plan pays for. Only a DocSpace administrator may read it, an installation without a billing service  answers 403, no billing customer is needed, and the call is read-only. `enabledServices` holds the names of  those services and is empty when none was switched on. This is the stored setting and not the state of the  portal: a service the plan brings with it is active without appearing here, so the honest answer to what is  running is `GET api/2.0/portal/payment/activeservices`. One entry is changed with  `POST api/2.0/portal/payment/servicestate`.
         * @summary Get the wallet service settings
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
         * Returns the portal\'s automatic wallet top-up settings - whether it is on, the balance that triggers a  charge, the balance it is topped up to, and the currency both are expressed in. Any DocSpace  administrator may read them, and unlike the operation that changes them this one needs neither a  billing customer nor a configured billing service, so it answers on a portal that has never paid for  anything. It is read-only and changes nothing.  A portal that has never configured top-up gets the defaults rather than an empty result: `enabled` is  false, `currency` is null, and `minBalance` and `upToBalance` are 0. Those two zeros are outside the  ranges `POST api/2.0/portal/payment/topupsettings` accepts - 5 to 1000 and 6 to 5000 - so the answer  cannot be sent straight back to it; supply real values instead. `lastModified` is  `0001-01-01T00:00:00` until the settings are stored for the first time.  `lowBalanceThreshold` and `lowBalanceNotified` are maintained by the portal itself: they are reported  here, but cannot be written.
         * @summary Get the auto top-up settings
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
         * Returns the spending limit on the AI services for the portal as a whole - the ceiling the spending of every user  counts towards - together with what was spent against it in the current period and what is left. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and the call is  read-only. The limit is checked in addition to the limits  of the users, so a user can be stopped by it before reaching their own. The spending includes the expected cost  of AI operations still in progress. When no such limit has been set, or it was deleted, the answer is 200 with a  null `response`; create the limit with `POST api/2.0/portal/payment/servicelimit` and the scope `Total`. A  switched-off limit is still returned, with `enabled` false. A portal with no billing customer answers 404.
         * @summary Get the portal service limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTotalServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-total-service-limit/
         */
        async getTotalServiceLimit(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceLimitWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTotalServiceLimit(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.getTotalServiceLimit']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one wallet service by name, for a client that already knows which service it needs and does not want  the whole catalogue. `service` is the name of the service - `Storage`, `Backup`, `AITools`, `Admin`,  `DocsCloud`, `DocsCloudDevPack` or `AISearch` - and a name this installation does not sell answers 404.  Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is  read-only. The answer has the same shape as one item of `GET api/2.0/portal/payment/walletservices` - the  price of a unit, the unit, the limits the service grants and its service name - except that the variants of a  service are not grouped into `innerServices` here, because a single service is looked up directly. The price  is in the currency resolved for the request.
         * @summary Get a wallet service
         * @param {TenantWalletService} service The service to look up, given by its catalogue name. A service this installation does not sell answers 404,  and the whole catalogue is `GET api/2.0/portal/payment/walletservices`.
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
         * Lists every service the portal may pay for out of its wallet - extra administrators, disk storage, backup, AI  tools, AI search and Docs Connect - with the price of a unit, the unit it is sold in and whether the portal has  it switched on. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Services that are variants of one another are folded together: the visible one  carries the rest in its `innerServices`, so a client renders one card per group. The AI services are left out  entirely when AI is not enabled for the portal. This is the catalogue and not the state of the portal - what  is actually running is `GET api/2.0/portal/payment/activeservices`, one service on its own is  `GET api/2.0/portal/payment/walletservice`, and switching one on or off is  `POST api/2.0/portal/payment/servicestate`.
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
         * Ends the portal\'s paid subscription and moves it onto the wallet: the unused balance of the running period is  credited to the wallet, the wallet is topped up from the payment method on file if that credit does not cover  the purchase, and the requested number of administrators is then bought as a wallet service. The portal needs  a billing customer with a payment method set and a plan in the paid state, `quantity` has to name the  administrators wallet product, and the number asked for may not be below the administrators the portal already  has - read the credit that will be carried over from `GET api/2.0/portal/payment/subscription/balance` first.  Only the payer may call it. The call is mutating, spends money and cannot be undone: the subscription is ended  before the purchase is attempted, so a failure in the second half leaves the portal on the wallet with the  money credited but the administrators unbought, and a repeat would then buy them a second time. It is limited  to ten requests a minute per user by default. The result is `true` when the administrators were bought.
         * @summary Move the subscription to the wallet
         * @param {QuantityRequestDto} [quantityRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for moveSubscriptionToWallet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-subscription-to-wallet/
         */
        async moveSubscriptionToWallet(quantityRequestDto?: QuantityRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moveSubscriptionToWallet(quantityRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.moveSubscriptionToWallet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the portal\'s message to the ONLYOFFICE sales team - the contact-sales form behind a request for a quote,  an invoice or a plan that cannot be bought online. `email` has to be a well-formed address and is where the  answer will go, while `userName` and `message` say who is asking and what for; all three are required and none  may be empty. Only a DocSpace administrator may call it. Nothing on the portal changes: no plan, no quota and  no payment is touched, a message is mailed out and the request is written to the portal audit trail. There is  no response body - status 200 means the message was handed to the mail service - and the call is not  idempotent, so a repeat sends a second message. It is limited to ten requests a minute per user by default and  answers 429 above that.
         * @summary Contact the sales team
         * @param {SalesRequestDto} [salesRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendPaymentRequest operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/
         */
        async sendPaymentRequest(salesRequestDto?: SalesRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendPaymentRequest(salesRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.sendPaymentRequest']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the same personal spending limit on the AI services for each of the listed portal users in one call,  replacing the personal limit any of them already has and switching it on, so it is how a ceiling is rolled out  to a group of users. The portal needs a billing customer, and the caller needs the permission to edit the portal  settings as well as DocSpace administrator rights. At least one of `amountValue` and `quantityValue` must be  given, every user in `userIds` must exist on the portal, and a user listed twice is limited once. One call takes  at most 1000 users; split a larger group into several calls. Unlike  `PUT api/2.0/portal/payment/servicelimit`, this sets the whole limit: a threshold left out is removed, and the  period may change, though a lifetime limit set to lifetime again keeps counting from where it was. Each personal  limit applies instead of the one for every user, and the limit of the portal is checked on top. The call is mutating and idempotent, and it is written to the portal audit trail. The answer is  the number of personal limits that were set; the result is listed by  `GET api/2.0/portal/payment/servicelimit/participants`.
         * @summary Set the user service limits
         * @param {SetParticipantServiceLimitsRequestDto} [setParticipantServiceLimitsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-participant-service-limits/
         */
        async setParticipantServiceLimits(setParticipantServiceLimitsRequestDto?: SetParticipantServiceLimitsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Int32Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setParticipantServiceLimits(setParticipantServiceLimitsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.setParticipantServiceLimits']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the whole set of AI chat models barred on this portal: the body is the complete set that is to hold,  so adding one restriction means sending the new model together with the ones already restricted, lifting one  means leaving it out, and an empty set lifts them all. Read the current set from  `GET api/2.0/portal/payment/ai-model/restrictions` and the model identifiers from  `GET api/2.0/portal/payment/ai-prices` before calling. The installation needs a billing service and the AI  gateway configured, the portal needs a billing customer and the AI tools wallet service switched on with  `POST api/2.0/portal/payment/servicestate`, and the caller needs the permission to edit the portal settings as  well as DocSpace administrator rights. The call is mutating and idempotent - sending the same set twice leaves  the same state - and it is written to the portal audit trail. It takes effect on the next AI request, so a  conversation already open on a model that has just been barred cannot go on with it. The stored set comes  back in the answer. While AI tools is off the call is refused with 403 instead of being stored, because the  read reports an empty set then and nothing written could be read back.
         * @summary Set restricted AI models
         * @param {SetRestrictedAiModelsRequestDto} [setRestrictedAiModelsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-restricted-ai-models/
         */
        async setRestrictedAiModels(setRestrictedAiModelsRequestDto?: SetRestrictedAiModelsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RestrictedAiModelsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRestrictedAiModels(setRestrictedAiModelsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.setRestrictedAiModels']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches the portal\'s automatic wallet top-up on or off and sets its thresholds: while it is on, the payment  method on file is charged whenever the wallet balance falls below `minBalance`, enough to bring it up to  `upToBalance`, in `currency`. The portal needs a billing customer whose wallet balance exists - a portal that  has never had one answers 404, so top the wallet up once with `POST api/2.0/portal/payment/deposit` first -  and only the payer may change the settings. The body replaces the stored settings as a whole and an omitted  body resets them to the defaults; `minBalance` is accepted between 5 and 1000 and `upToBalance` between 6 and  5000, and `upToBalance` has to be greater than `minBalance`, so that a top-up lifts the wallet above the balance  that triggers it. The low-balance warning state (`lowBalanceThreshold`, `lowBalanceNotified`) and `lastModified` may be  sent for compatibility but are ignored: the portal keeps the values it had. The call is mutating and  idempotent, it charges nothing by itself, it is written to the portal audit trail, and switching the top-up on also re-arms the low-balance warning. The settings as they were stored come  back in the answer.
         * @summary Set the auto top-up settings
         * @param {TenantWalletSettingsRequestDto} [tenantWalletSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/
         */
        async setTenantWalletSettings(tenantWalletSettingsRequestDto?: TenantWalletSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantWalletSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTenantWalletSettings(tenantWalletSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.setTenantWalletSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stops the `xlsx` monthly usage report this user has running and drops its task, for a report that was started  for the wrong period or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/monthly/report` can still answer for a moment afterwards. The call  is safe to repeat and does nothing at all when this user has no such report running: there is no response  body, and status 200 says the stop was requested, not that a report was really stopped. It leaves the  operations and service usage reports alone, and a report that had already finished keeps its file in My  documents.
         * @summary Terminate the monthly usage report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-monthly-usage-report/
         */
        async terminateCustomerMonthlyUsageReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateCustomerMonthlyUsageReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.terminateCustomerMonthlyUsageReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stops the `xlsx` wallet operations report this user has running and drops its task, for a report that was  started with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has  to be a DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/operationsreport` can still answer for a moment afterwards. The call is  safe to repeat and does nothing at all when this user has no report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. A report that had already  finished keeps its file in My documents - nothing is deleted from there.
         * @summary Terminate the operations report
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
         * Stops the `xlsx` service usage report this user has running and drops its task, for a report that was started  with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/report` can still answer for a moment afterwards. The call is safe  to repeat and does nothing at all when this user has no such report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. It leaves the operations and  monthly usage reports alone, and a report that had already finished keeps its file in My documents.
         * @summary Terminate the service usage report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-service-usage-report/
         */
        async terminateCustomerServiceUsageReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateCustomerServiceUsageReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.terminateCustomerServiceUsageReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Charges the payment method on file and adds the amount to the portal\'s wallet, the balance every wallet  service is paid from. The portal needs a billing customer with a payment method set - attach one with  `GET api/2.0/portal/payment/checkoutsetupurl` - `currency` has to be one of the accounting currencies this  installation supports, and `amount` is a whole number of currency units between 1 and 999999. Only the payer  may call it. The call takes money and is not idempotent in any way: two identical requests charge twice, so a  client must not retry it blindly after a timeout, and it is limited to ten requests a minute per user by  default. A successful top-up pushes the new balance to the portal clients over their socket connection and  re-arms the low-balance notification. The result is `true` when the payment provider accepted the charge; read  the resulting balance back from `GET api/2.0/portal/payment/customer/balance`.
         * @summary Top up the wallet
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
         * Changes how many units of the plan the portal is paying for - the number of administrators it covers - and  lets the payment provider bill the difference against the payment method already on file. The portal must have  a billing customer and a plan bought through `PUT api/2.0/portal/payment/url`, and while the portal is on a  priced plan the product name in `quantity` has to be that same plan, which `GET api/2.0/portal/payment/quota`  reports, because a subscription is changed here and not swapped. Only the payer - the portal user whose e-mail  is the billing customer\'s e-mail - may call it. The call is mutating and charges money, and it is guarded  against a double submission: once the new quantity is in effect, repeating the same request fails with 400  because that quantity is already set. The result is `true` when the provider accepted the change and `false`  when it declined it without an error. Exactly one product per call is accepted, the operation is limited to  ten requests a minute per user by default and answers 429 above that, and wallet services are not bought here  - use `PUT api/2.0/portal/payment/updatewallet` for those.
         * @summary Change the subscription quantity
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
         * Changes the thresholds of an existing spending limit on the AI services, or switches it off and back on with  `enabled`. The portal needs a billing customer, and the caller needs the permission to edit the portal settings  as well as DocSpace administrator rights. Only the given fields change: an omitted threshold keeps its value, so  a threshold once set cannot be removed here - delete the limit with  `DELETE api/2.0/portal/payment/servicelimit/{id}` and create it anew with  `POST api/2.0/portal/payment/servicelimit`, which is also the way to change its scope, user or period. A  switched-off limit stops restricting the AI services at once. The call is mutating and idempotent, it is written  to the portal audit trail, and a new threshold applies from the very next operation; lowering it below what was  already spent blocks the AI services until the period ends. An ID that does not exist, belongs to another portal  or is not a limit on the AI services answers 404.
         * @summary Update a service limit
         * @param {UpdateServiceLimitRequestDto} [updateServiceLimitRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-service-limit/
         */
        async updateServiceLimit(updateServiceLimitRequestDto?: UpdateServiceLimitRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceLimitWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateServiceLimit(updateServiceLimitRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.updateServiceLimit']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Buys more units of a wallet service - extra administrators, disk storage, backup, AI tools, AI search or  Docs Connect - or writes down the quantity that service will have after the next renewal, depending on  `productQuantityType`. With `Add` (1) the units are bought at once and paid out of the portal wallet, so the  wallet needs a sub-account in the accounting currency and enough money on it; with `Set` (0) nothing is  charged now and the quantity only takes effect in the next period, where an empty or zero quantity cancels a  change scheduled earlier. `Renew` and `Sub` are not accepted here. The portal needs a billing customer and the  caller has to be a DocSpace administrator; a service that is an add-on to the plan also needs the plan itself  to be paid, otherwise the answer is 402. Minimum quantities apply - disk storage starts at 100 units, the  Docs Connect Dev Pack at 10, and the administrators may not be fewer than the portal already has - and in  the `Add` form they are checked only while the portal does not hold that service yet. Asking for the Docs Connect  plan in the `Set` form while Docs Connect Dev Pack is active schedules the reversion to it at the next period,  while the upgrade in the other direction is not done here at all: use  `POST api/2.0/settings/docscloud/switchtodevpack`. The result is `true` when the change was accepted; the call  is mutating, spends money in its `Add` form and is limited to ten requests a minute per user by default. Price  the same purchase without paying for it with `PUT api/2.0/portal/payment/calculatewallet`.
         * @summary Change a wallet service quantity
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
         * Prices a wallet-service purchase without making it: it returns what buying the requested number of units would  cost right now, so a client can show the amount before asking for a confirmation. Only `productQuantityType`  `Add` (1) is accepted, the quantity must be greater than zero, and the portal needs a billing customer whose  wallet has a sub-account in the accounting currency. The caller has to be a DocSpace administrator. Nothing is  bought, charged or written down - the call is read-only and may be repeated - and the purchase itself is  `PUT api/2.0/portal/payment/updatewallet`. The answer carries the amount with its currency, the quantity it  was computed for and the identifier of the calculation. It is the price of this moment and is not held: it can  differ by the time the purchase is made.
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
         * Switches one wallet service on or off for the portal: `service` names it and `enabled` says which way. The  portal needs a billing customer, and the caller needs both the permission to edit the portal settings and  DocSpace administrator rights. Order matters between the two AI services - AI tools has to be on before AI  search may be switched on, and switching AI tools off switches AI search off with it - so a request that  breaks that order is refused with 403. The call is mutating and idempotent: switching on a service that is  already on changes nothing. It is written to the portal audit trail, and switching AI tools notifies the  portal clients so the AI features appear or disappear for them without a reload. The whole updated set of  switched-on services comes back. Switching a service on does not buy it - its units are still bought with  `PUT api/2.0/portal/payment/updatewallet`.
         * @summary Switch a wallet service
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
         * Queues the wallet spending added up per calendar month as an `xlsx` file and returns the task that will build  it; the file is not ready when the response arrives. The portal needs a billing customer and the caller has to  be a DocSpace administrator. The body takes only the period - `startDate` and `endDate`, both inclusive - and  an empty body covers everything from the portal creation date to now; the months are cut in the portal time  zone, exactly as in `GET api/2.0/portal/payment/customer/usage/monthly`. Poll  `GET api/2.0/portal/payment/customer/usage/monthly/report` until `isCompleted` is true, then take the file  from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents  section, where it counts against the portal storage like any other file. One monthly usage report per user is  tracked at a time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/usage/monthly/report` stops it. There is no service filter here: for a  report per service use `POST api/2.0/portal/payment/customer/usage/report`.
         * @summary Start the monthly usage report
         * @param {PaymentApiCreateCustomerMonthlyUsageReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-monthly-usage-report/
         * @throws {RequiredError}
         */
        createCustomerMonthlyUsageReport(requestParameters: PaymentApiCreateCustomerMonthlyUsageReportRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createCustomerMonthlyUsageReport(requestParameters.customerMonthlyUsageReportRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues the history of the wallet movements as an `xlsx` file and returns the task that will build it; the file  is not ready when the response arrives. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/operations` -  the service names, the date range, the participant, the operation type and status, the credit and debit  directions and the ordering - and an empty body reports everything from the portal creation date to now; a  service name this installation does not sell fails with 404. Poll  `GET api/2.0/portal/payment/customer/operationsreport` until `isCompleted` is true, then take the file from  `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents section,  where it counts against the portal storage like any other file. One operations report per user is tracked at a  time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/operationsreport` stops it. A build that fails ends the task with  `error` filled in rather than failing this call.
         * @summary Start the operations report
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
         * Queues the usage of the wallet services as an `xlsx` file and returns the task that will build it; the file is  not ready when the response arrives. The portal needs a billing customer and the caller has to be a DocSpace  administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/usage` - the service  names, the date range, the participant, the operation status, the usage metadata and the ordering - and an  empty body reports every service from the portal creation date to now; a service name this installation does  not sell fails with 404. Poll `GET api/2.0/portal/payment/customer/usage/report` until `isCompleted` is true,  then take the file from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s  own My documents section, where it counts against the portal storage like any other file. One service usage  report per user is tracked at a time - a call made while the previous one is still running answers with that  task - and `DELETE api/2.0/portal/payment/customer/usage/report` stops it. It is a different report from the  operations one and does not interfere with it: per-movement history is  `POST api/2.0/portal/payment/customer/operationsreport`.
         * @summary Start the service usage report
         * @param {PaymentApiCreateCustomerServiceUsageReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-service-usage-report/
         * @throws {RequiredError}
         */
        createCustomerServiceUsageReport(requestParameters: PaymentApiCreateCustomerServiceUsageReportRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createCustomerServiceUsageReport(requestParameters.customerServiceUsageReportRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a spending limit on the AI services - AI tools and AI search together - with `scope` saying whom it  applies to: `Total` for the portal as a whole, `Global` for every user separately, `Custom` for the user in  `userId`, which only this scope takes. A personal limit applies to its user instead of the one for every user,  and the limit of the portal is checked on top of both. The portal needs a billing customer, and the caller needs  the permission to edit the portal settings as well as DocSpace administrator rights. At least one of  `amountValue` and `quantityValue` must be given; with both, the services stop as soon as either is reached. The  call is mutating and written to the portal audit trail. It is not idempotent: a second limit of the same scope,  or for the same user, is refused with 409 - change the existing one with  `PUT api/2.0/portal/payment/servicelimit` instead. The scope, the user and the period cannot be changed later.
         * @summary Create a service limit
         * @param {PaymentApiCreateServiceLimitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-service-limit/
         * @throws {RequiredError}
         */
        createServiceLimit(requestParameters: PaymentApiCreateServiceLimitRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ServiceLimitWrapper> {
            return localVarFp.createServiceLimit(requestParameters.createServiceLimitRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes one spending limit on the AI services completely - the limit of the portal as a whole, the one for  every user, or a personal one - so it no longer restricts anyone. The portal needs a billing customer, and the  caller needs the permission to edit the portal settings as well as DocSpace administrator rights. The call is  destructive and cannot be undone: unlike switching a limit off with `PUT api/2.0/portal/payment/servicelimit`,  which keeps its settings, a deleted limit is gone, and a new one has to be created with  `POST api/2.0/portal/payment/servicelimit`. Deleting a personal limit lets the limit for every user apply to  that user. It is written to the portal audit trail. An ID that does not exist, belongs to another portal or is  not a limit on the AI services answers 404, which is also what a repeated deletion of the same limit gets.
         * @summary Delete a service limit
         * @param {PaymentApiDeleteServiceLimitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-service-limit/
         * @throws {RequiredError}
         */
        deleteServiceLimit(requestParameters: PaymentApiDeleteServiceLimitRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteServiceLimit(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches off every personal spending limit on the AI services in one call, so each user falls back to the limit  for every user, if one is set. The limit of the portal as a whole and the one for every user stay as they are.  The portal needs a billing customer, and the caller needs the permission to edit the portal settings as well as  DocSpace administrator rights. The switched-off limits stop restricting their users at once and are kept, so  each can be switched back on with `PUT api/2.0/portal/payment/servicelimit`. The call is mutating and  idempotent - repeating it switches off nothing more - and it is written to the portal audit trail. The answer is  the number of personal limits that were switched off, zero when none was in force. To switch off the limit of a  single user, use `PUT api/2.0/portal/payment/servicelimit` with `enabled` set to false.
         * @summary Disable the user service limits
         * @param {*} [options] Override http request option.
         * REST API Reference for disableParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/disable-participant-service-limits/
         * @throws {RequiredError}
         */
        disableParticipantServiceLimits(options?: RawAxiosRequestConfig): AxiosPromise<Int32Wrapper> {
            return localVarFp.disableParticipantServiceLimits(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the price list of one wallet service as the accounting service keeps it: every price record with its  time unit, cost and resulting price, volume threshold, validity period, status and discount category. Take  the service name from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`. The caller must  be a DocSpace administrator, and the server must have the billing and accounting services configured;  otherwise the call fails with 403. The call is read-only and can be repeated safely. By default the list  also holds retired and not yet started records; `active=true` keeps only the prices in force now. A service  with no prices comes back as an empty list. Amounts are in the currency of the service, which the records do  not name. The list is cached for all portals for up to an hour, so a change in the accounting service can  take that long to appear. For the current price of every plan and wallet service as the customer sees it, use  `GET api/2.0/portal/payment/quotas`. An unknown service name fails with 500, as does an unreachable  accounting service.
         * @summary Get the service prices from the accounting service
         * @param {PaymentApiGetAccountingServicePricesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAccountingServicePrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-accounting-service-prices/
         * @throws {RequiredError}
         */
        getAccountingServicePrices(requestParameters: PaymentApiGetAccountingServicePricesRequest, options?: RawAxiosRequestConfig): AxiosPromise<ServicePriceArrayWrapper> {
            return localVarFp.getAccountingServicePrices(requestParameters.serviceName, requestParameters.active, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the wallet services the portal is running right now: the add-ons its plan pays for that are in the  active state, plus the ones an administrator switched on by hand in the wallet service settings; the Docs Connect  trial is listed as well, although it is not paid from the wallet. Only a DocSpace administrator may call it,  no billing customer is needed for it, and the call is read-only. Every item names the service, its title and  the unit it is measured in, and says whether it is a subscription; a subscribed service also carries the limit  it grants and how much of it is used where that number is known - the editor seats and the editors currently  active for Docs Connect, the purchased units and the units already consumed for disk storage. A service listed  with no limit is one whose usage is not counted this way, not one without a limit. The catalogue of what could  be switched on is `GET api/2.0/portal/payment/walletservices`, and switching one is  `POST api/2.0/portal/payment/servicestate`.
         * @summary Get the active wallet services
         * @param {*} [options] Override http request option.
         * REST API Reference for getActiveServices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-active-services/
         * @throws {RequiredError}
         */
        getActiveServices(options?: RawAxiosRequestConfig): AxiosPromise<ActiveServiceArrayWrapper> {
            return localVarFp.getActiveServices(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the price list of the AI features the portal pays for out of its wallet: the chat models with the  price of their prompt and completion tokens, the embedding models, the image models with their per-image  price, and the web search providers with the price of one search. The installation needs both a billing  service and the AI gateway configured, otherwise the answer is 403, and only a DocSpace administrator may read  it; the call is read-only. Token prices are normalised per million tokens, and every price is in the single  `currency` the answer names. Each entry carries the model identifier to use when talking to the AI operations,  its display alias, its provider with the provider icon, and a link to the model\'s own page. It is a list of  what the models cost and not of what the portal spent - that is `GET api/2.0/portal/payment/customer/usage` -  and it says nothing about which of them are allowed here, which is  `GET api/2.0/portal/payment/ai-model/restrictions`.
         * @summary Get AI model prices
         * @param {*} [options] Override http request option.
         * REST API Reference for getAiPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ai-prices/
         * @throws {RequiredError}
         */
        getAiPrices(options?: RawAxiosRequestConfig): AxiosPromise<AiPricesWrapper> {
            return localVarFp.getAiPrices(options).then((request) => request(axios, basePath));
        },
        /**
         * Hands back the hosted page on which a payment method is attached to the portal\'s billing account, for the case  where money has to be taken later - a wallet top-up or an automatic one - rather than a plan bought now. A  portal that already has a payment method on file answers with an empty result; a DocSpace administrator may  ask for the page, but once the portal has a billing customer with an e-mail, only its payer may. The call  itself changes nothing and may be repeated: the payment method is stored by the payment provider when the  returned page is completed, after which `GET api/2.0/portal/payment/customerinfo` reports it as set. The URL  is absolute, carries the caller\'s e-mail, the language of the request and the currency of the region, and  redirects to `successUrl` or `backUrl` when the user finishes or cancels. It buys nothing - a plan is bought  with `PUT api/2.0/portal/payment/url`.
         * @summary Get the checkout setup page URL
         * @param {PaymentApiGetCheckoutSetupUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCheckoutSetupUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/
         * @throws {RequiredError}
         */
        getCheckoutSetupUrl(requestParameters: PaymentApiGetCheckoutSetupUrlRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getCheckoutSetupUrl(requestParameters.backUrl, requestParameters.successUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the money the portal has in its wallet as the accounting service holds it: the account with its own  currency, one sub-account per currency with the amount on it, and the most recent credit movement. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and a portal that  has never been a customer gets an empty result. The call is read-only. This balance is what the wallet  services are charged against, so it falls as they are used and rises with  `POST api/2.0/portal/payment/deposit`; the movements behind a change are listed by  `GET api/2.0/portal/payment/customer/operations`. Pass `refresh=true` to re-read it from the accounting  service rather than the cache - right after a top-up the cached figure is still the old one.
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
         * Lists the top-ups of the portal\'s wallet - the payments into it - one page at a time, which is what a list of  payments with their invoices is built from. A portal that is not a billing customer yet has no top-ups and  gets an empty result rather than an error. Only the payer or the portal owner may read it, as with the  invoices, and the call is read-only. Every filter is optional: `startDate` and `endDate` default to the  portal creation date and the present moment, a value without `Z` or an offset is read in the portal time  zone, and `status` narrows to how a top-up ended. `offset` and `limit` default to 0 and 25 and are echoed next  to `totalQuantity`, `totalPage` and `currentPage`; a negative `offset` or a `limit` outside 1 to 100 fails  with 400. An empty result means the portal is not a billing customer, has no wallet at the accounting service  yet, or that service could not be read; a period without top-ups gives an empty `collection`. A top-up with  `hasInvoice` true has an invoice, opened with `GET api/2.0/portal/payment/customer/deposits/{id}/invoice`.  For the full wallet history, charges and refunds included, use  `GET api/2.0/portal/payment/customer/operations`.
         * @summary Get the wallet top-ups
         * @param {PaymentApiGetCustomerDepositsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerDeposits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-deposits/
         * @throws {RequiredError}
         */
        getCustomerDeposits(requestParameters: PaymentApiGetCustomerDepositsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DepositReportWrapper> {
            return localVarFp.getCustomerDeposits(requestParameters.startDate, requestParameters.endDate, requestParameters.status, requestParameters.offset, requestParameters.limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the billing customer behind the portal: the e-mail its billing account is registered to, whether a  payment method is stored for it, and the portal user who is the payer of that account. Only a DocSpace  administrator may read it, and the call is read-only. The answer is empty in two ordinary cases - the  installation has no billing service configured at all, and the portal has never been a customer - so an empty  body is not an error. `payer` is filled in only when the billing e-mail belongs to a portal user; when it does  not, the e-mail is still shown but the field stays empty, and that is what makes every payer-only operation of  this group unreachable for everybody. `refresh=true` re-reads the customer from the billing provider instead  of the cache, which is worth doing right after a payment method has been attached.
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
         * Returns what the portal spent from its wallet added up per calendar month, so a client can draw a spending  chart without paging through every movement. Only a DocSpace administrator may read it, a portal with no  billing customer answers with an empty result, and the call is read-only. `startDate` and `endDate` bound the  period, both inclusive, and default to the portal creation date and the present moment; the months are cut in  the portal time zone, so a movement at the edge of a month falls where the portal sees it and not where UTC  does. Each item names its year and month, the total charged in it with the currency, and how many operations  that total came from. The movements behind a month are in `GET api/2.0/portal/payment/customer/operations`,  and the same figures as a file come from `POST api/2.0/portal/payment/customer/usage/monthly/report`.
         * @summary Get the customer monthly usage
         * @param {PaymentApiGetCustomerMonthlyUsageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerMonthlyUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-monthly-usage/
         * @throws {RequiredError}
         */
        getCustomerMonthlyUsage(requestParameters: PaymentApiGetCustomerMonthlyUsageRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CustomerMonthlyUsageArrayWrapper> {
            return localVarFp.getCustomerMonthlyUsage(requestParameters.startDate, requestParameters.endDate, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the state of the `xlsx` monthly usage report this user started with  `POST api/2.0/portal/payment/customer/usage/monthly/report`: `percentage` while it is being built,  `isCompleted` when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in  the caller\'s My documents, and `error` when the build failed. The portal needs a billing customer and the  caller has to be a DocSpace administrator; the call is read-only and is the one to poll. The task is kept per  user and per report kind, so it reports neither another administrator\'s report nor the operations and service  usage ones, which have their own status operations. An empty result means this user has no monthly usage  report at all - none was started, or the finished one was already picked up or terminated. A completed task is  dropped as soon as the next report is started, so read the file link out of the same answer that first reports  `isCompleted`.
         * @summary Get the monthly usage report status
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-monthly-usage-report/
         * @throws {RequiredError}
         */
        getCustomerMonthlyUsageReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getCustomerMonthlyUsageReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the money movements on the portal\'s wallet - top-ups, the charges of the wallet services, refunds and  corrections - one page at a time, which is what a billing history is built from. Only a DocSpace administrator  may read it, a portal with no billing customer answers with an empty result, and the call is read-only. Every  filter is optional: `startDate` and `endDate` are read in the portal time zone and default to the portal  creation date and the present moment, `serviceName` narrows to particular wallet services and fails with 404  on a name this installation does not sell, `participantName`, `type` and `status` narrow to who caused a  movement and how it ended, and `credit` and `debit` include or exclude the two directions. `offset` and  `limit` page through the result and default to 0 and 25, `orderBy` and `orderType` sort it, and the answer  repeats them next to `totalQuantity`, `totalPage` and `currentPage` so a client can page without counting. The  same data as a downloadable file is `POST api/2.0/portal/payment/customer/operationsreport`, and the figures  added up per service are `GET api/2.0/portal/payment/customer/usage`.
         * @summary Get the wallet operations
         * @param {PaymentApiGetCustomerOperationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerOperations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/
         * @throws {RequiredError}
         */
        getCustomerOperations(requestParameters: PaymentApiGetCustomerOperationsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReportWrapper> {
            return localVarFp.getCustomerOperations(requestParameters.offset, requestParameters.limit, requestParameters.serviceName, requestParameters.startDate, requestParameters.endDate, requestParameters.participantName, requestParameters.credit, requestParameters.debit, requestParameters.type, requestParameters.status, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the state of the `xlsx` wallet operations report this user started with  `POST api/2.0/portal/payment/customer/operationsreport`: `percentage` while it is being built, `isCompleted`  when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it never reports another administrator\'s report, nor the service usage and monthly usage ones, which  have their own status operations. An empty result means this user has no operations report at all - none was  started, or the finished one was already picked up or terminated. A completed task is dropped as soon as the  next report is started, so read the file link out of the same answer that first reports `isCompleted`.
         * @summary Get the operations report status
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations-report/
         * @throws {RequiredError}
         */
        getCustomerOperationsReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getCustomerOperationsReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns how much of each wallet service the portal consumed and what that cost, added up per service instead  of listed per movement. Only a DocSpace administrator may read it, a portal with no billing customer answers  with an empty result, and the call is read-only. The filters are optional: `serviceName` narrows to particular  services and fails with 404 on a name this installation does not sell, `participantName` and `status` narrow  to who consumed and how the operation ended, `startDate` and `endDate` bound the period in the portal time  zone, `metadata` matches the key and value pairs a service records with its usage, and `offset`, `limit`,  `orderBy` and `orderType` page and sort the result. Amounts come with the unit the service is sold in, except  AI tools, whose consumption is reported in tokens rather than in AI credits. The individual charges behind  these totals are `GET api/2.0/portal/payment/customer/operations`, and the same figures as a downloadable file  are `POST api/2.0/portal/payment/customer/usage/report`.
         * @summary Get the customer service usage
         * @param {PaymentApiGetCustomerServiceUsageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerServiceUsage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-usage/
         * @throws {RequiredError}
         */
        getCustomerServiceUsage(requestParameters: PaymentApiGetCustomerServiceUsageRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CustomerServiceUsageReportWrapper> {
            return localVarFp.getCustomerServiceUsage(requestParameters.serviceName, requestParameters.participantName, requestParameters.status, requestParameters.startDate, requestParameters.endDate, requestParameters.metadata, requestParameters.offset, requestParameters.limit, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the state of the `xlsx` service usage report this user started with  `POST api/2.0/portal/payment/customer/usage/report`: `percentage` while it is being built, `isCompleted` when  it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it reports neither another administrator\'s report nor the operations and monthly usage ones, which  have their own status operations. An empty result means this user has no service usage report at all - none  was started, or the finished one was already picked up or terminated. A completed task is dropped as soon as  the next report is started, so read the file link out of the same answer that first reports `isCompleted`.
         * @summary Get the service usage report status
         * @param {*} [options] Override http request option.
         * REST API Reference for getCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-service-usage-report/
         * @throws {RequiredError}
         */
        getCustomerServiceUsageReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getCustomerServiceUsageReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Hands back the address of the page on which the billing provider shows the invoice for one top-up of the  portal\'s wallet, so a client can open or download it. The top-up is named by the `id` that  `GET api/2.0/portal/payment/customer/deposits` returns, and only one listed there with `hasInvoice` true has an  invoice to show. Only the payer or the portal owner may read it, as with the billing account page, and the  call changes nothing. The address is absolute and points to the billing provider rather than to the portal;  it is asked for anew on every call, so request it when the user is about to open the invoice instead of  storing it. A top-up this portal does not have, one without an invoice, or a portal that is not a billing  customer answers 404, and an `id` that is not a number fails with 400. An installation without a billing  service answers 403, and 402 means the billing or the accounting service rejected the request or did not  answer, which a later retry may get past.
         * @summary Get the top-up invoice
         * @param {PaymentApiGetDepositInvoiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getDepositInvoice operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deposit-invoice/
         * @throws {RequiredError}
         */
        getDepositInvoice(requestParameters: PaymentApiGetDepositInvoiceRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getDepositInvoice(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the spending limit on the AI services for every user - the same ceiling applied to each user separately,  for any user without a personal limit in force. Only a DocSpace administrator may read it, an installation  without a billing service answers 403, and the call is read-only. It comes without spending, since that is  counted per user: read it for each user from `GET api/2.0/portal/payment/servicelimit/participants`; `periodEnd`  still says when the current period ends for everyone. When no  such limit has been set, or it was deleted, the answer is 200 with a null `response`; create the limit with  `POST api/2.0/portal/payment/servicelimit` and the scope `Global`. A switched-off limit is still returned, with  `enabled` false. A portal with no billing customer answers 404.
         * @summary Get the global service limit
         * @param {*} [options] Override http request option.
         * REST API Reference for getGlobalServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-global-service-limit/
         * @throws {RequiredError}
         */
        getGlobalServiceLimit(options?: RawAxiosRequestConfig): AxiosPromise<ServiceLimitWrapper> {
            return localVarFp.getGlobalServiceLimit(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists, one page at a time, the spending limit on the AI services in force for each portal user, with what the  user spent against it in the current period and what is left. Only a DocSpace administrator may read it, an  installation without a billing service answers 403, a portal with no billing customer answers 404, and the call  is read-only; a portal with no limits gets an empty page. A user\'s own limit wins over the one for every user: an item with the scope `Custom` is a  personal limit, one with `Global` the limit for every user, its ID repeated for each user it applies to.  Switched-off limits are not listed, and a user who has not used the AI services yet may be missing. `offset`  and `limit` page through the result and default to 0 and 25, and the answer repeats them next to  `totalQuantity`, `totalPage` and `currentPage`; `orderBy` and `orderType` sort it, the newest limits first by  default.
         * @summary Get the user service limits
         * @param {PaymentApiGetParticipantServiceLimitsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-participant-service-limits/
         * @throws {RequiredError}
         */
        getParticipantServiceLimits(requestParameters: PaymentApiGetParticipantServiceLimitsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ServiceLimitReportWrapper> {
            return localVarFp.getParticipantServiceLimits(requestParameters.offset, requestParameters.limit, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(axios, basePath));
        },
        /**
         * Hands back the address of the portal page on which the billing account is managed - the payment method on  file, the invoices and the receipts - so a client can link to it instead of assembling the address itself. The  portal must already have a billing customer: one that has never had it gets an empty result, and an  installation without a billing service answers 403. Only the payer or the portal owner may read it, and the  call changes nothing. The value is relative to the portal root (`payment.ashx`), and the optional `backUrl` is  appended to it as a query parameter so the page can send the user back where they came from. It is not a  checkout page: a plan is bought with `PUT api/2.0/portal/payment/url` and a payment method is attached with  `GET api/2.0/portal/payment/checkoutsetupurl`.
         * @summary Get the billing account page
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
         * Tells a client which currency the portal is billed in: the default currency of the portal region always comes  first, followed by the currency resolved for the current request when that one differs, so the answer holds  one or two items. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Each item carries the country code of the region, the currency symbol and the  native name of the currency; the first item is the currency the amounts from  `GET api/2.0/portal/payment/prices` are expressed in. These are the currencies of the subscription prices, and  they are not the accounting currencies the wallet is topped up in - those come with the balance in  `GET api/2.0/portal/payment/customer/balance`.
         * @summary Get the billing currencies
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentCurrencies operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-currencies/
         * @throws {RequiredError}
         */
        getPaymentCurrencies(options?: RawAxiosRequestConfig): AxiosPromise<CurrenciesArrayWrapper> {
            return localVarFp.getPaymentCurrencies(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the quotas the portal can be put on - the paid plans and the wallet services - each with its price, its  features and the limits it grants, which is what a pricing page is built from. Nothing has to be called first,  the caller needs the permission to edit the portal settings, and the call is read-only. Only quotas marked  visible are listed, newest first, and the two optional filters narrow that: `wallet` selects the wallet  services (`true`) or the subscription plans (`false`), `additional` selects the add-ons to a plan (`true`) or  the plans themselves (`false`), and an omitted filter keeps both kinds. A portal on a non-profit quota is a  special case - asking for `additional=false` returns that single quota and nothing else, because no other plan  may be bought for it. The quota the portal is actually on is not marked here; read it from  `GET api/2.0/portal/payment/quota`.
         * @summary Get the purchasable quotas
         * @param {PaymentApiGetPaymentQuotasRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentQuotas operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/
         * @throws {RequiredError}
         */
        getPaymentQuotas(requestParameters: PaymentApiGetPaymentQuotasRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<QuotaArrayWrapper> {
            return localVarFp.getPaymentQuotas(requestParameters.wallet, requestParameters.additional, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the purchase of a monthly paid plan for this portal by handing back the hosted checkout page the buyer  has to open; nothing is bought until that page is completed. The portal must have no paid plan yet - a portal  whose plan is already paid gets an empty result and changes its subscription through  `PUT api/2.0/portal/payment/update` instead - and the product name in `quantity` must be one of the monthly,  non-wallet plans listed by `GET api/2.0/portal/payment/quotas`. Only a DocSpace administrator may call it. The  call itself changes nothing on the portal and may be repeated: the money is taken by the payment provider on  the checkout page, and the plan becomes active once the provider confirms it. The returned URL is absolute and  single-purpose - it carries the caller\'s e-mail, the language of the request and the currency of the request  region, and it redirects to `successUrl` or `backUrl` when the buyer finishes or cancels. Exactly one product  per call is accepted and its quantity has to be greater than zero; yearly and wallet products are refused, and  wallet services are bought with `PUT api/2.0/portal/payment/updatewallet` instead.
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
         * Lists what one unit of every purchasable product costs, keyed by the product name that `quantity` takes in the  purchase operations, so a client can price a plan or a wallet service without reading the whole quota list.  Nothing has to be called first, and the caller needs the permission to edit the portal settings, which portal  administrators and the owner have. The call is read-only. Prices are given in the one currency resolved for  this request from the portal region, which `GET api/2.0/portal/payment/currencies` reports; a product with no  price in that currency comes back as `0` rather than being left out, so a zero means unpriced and not free.  The list covers the products on offer, not the portal\'s own plan - the plan in force, with its limits and its  usage, is `GET api/2.0/portal/payment/quota`.
         * @summary Get the product prices
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalPrices operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-prices/
         * @throws {RequiredError}
         */
        getPortalPrices(options?: RawAxiosRequestConfig): AxiosPromise<GetPortalPrices200Response> {
            return localVarFp.getPortalPrices(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the quota the portal is on - its paid plan or the free one - with the limits its features grant and how  much of each is already used. Any signed-in member except a guest may call it. The call is read-only; the plan  comes from the cache, and `refresh=true` re-reads it from the billing service, a remote call meant for right  after a purchase. The answer is trimmed to the caller\'s user type: a DocSpace administrator or the owner gets  the price, the due date and all features, a room administrator only the `manager`, `room`, `total_size` and  `statistic` features, and a user only `total_size`. For both of the latter `price` is an empty object and  `dueDate` is omitted, while the storage quota settings (`usersQuota`, `roomsQuota`, `aiAgentsQuota`,  `tenantCustomQuota`) come back as for an administrator. The quotas that could be bought instead are  `GET api/2.0/portal/payment/quotas`. A guest is refused with 403.
         * @summary Get the current plan and limits
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
         * Returns the AI chat models that are barred on this portal - the ones no user of it may pick for a  conversation, whatever the price list offers. Only a DocSpace administrator may read it, and the call is  read-only. When the installation has no billing service or AI is not enabled for the portal, the answer is an  empty set instead of an error, which is indistinguishable from a portal that restricts nothing. An empty  `models` therefore means every model in `GET api/2.0/portal/payment/ai-prices` may be used. The set names the  barred models and not the allowed ones; replace it with `PUT api/2.0/portal/payment/ai-model/restrictions`.
         * @summary Get restricted AI models
         * @param {*} [options] Override http request option.
         * REST API Reference for getRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restricted-ai-models/
         * @throws {RequiredError}
         */
        getRestrictedAiModels(options?: RawAxiosRequestConfig): AxiosPromise<RestrictedAiModelsWrapper> {
            return localVarFp.getRestrictedAiModels(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one spending limit on the AI services of the portal by its ID - the limit of the portal as a whole, the  one for every user, or a personal one. Only a DocSpace administrator may read it, an installation without a  billing service answers 403, and the call is read-only. The limit comes back with its scope, thresholds, their  currency and unit, the period and whether it is in force, but without its spending: that comes with  `GET api/2.0/portal/payment/servicelimit/total` for the portal and with  `GET api/2.0/portal/payment/servicelimit/participants` for each user. A portal with no billing customer, and an  ID that does not exist, belongs to another portal or is not a limit on the AI services, answer 404.
         * @summary Get a service limit
         * @param {PaymentApiGetServiceLimitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-service-limit/
         * @throws {RequiredError}
         */
        getServiceLimit(requestParameters: PaymentApiGetServiceLimitRequest, options?: RawAxiosRequestConfig): AxiosPromise<ServiceLimitWrapper> {
            return localVarFp.getServiceLimit(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports in money how much of the portal\'s paid subscription period is still unused - the credit that  `POST api/2.0/portal/payment/subscription/movetowallet` would carry over to the wallet if the subscription  were ended now. The portal must have a billing customer and a plan in the paid state; a plan that is not paid  answers 402, and a paid plan without a subscription row gives 404. Only the payer - the portal user whose  e-mail is the billing customer\'s e-mail - may read it, and the call is read-only. The answer states the total  cost of the current period with its currency, the start and the end of that period in UTC, the moment the  unused part is measured up to, the days already elapsed, and the remaining balance both in the subscription  currency and converted to the wallet currency. Every figure is computed for the instant of the request, so it  changes between calls.
         * @summary Get the subscription balance information
         * @param {*} [options] Override http request option.
         * REST API Reference for getSubscriptionBalanceInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-subscription-balance-info/
         * @throws {RequiredError}
         */
        getSubscriptionBalanceInfo(options?: RawAxiosRequestConfig): AxiosPromise<SubscriptionBalanceWrapper> {
            return localVarFp.getSubscriptionBalanceInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns which wallet services an administrator has switched on for this portal by hand, as opposed to the ones  its plan pays for. Only a DocSpace administrator may read it, an installation without a billing service  answers 403, no billing customer is needed, and the call is read-only. `enabledServices` holds the names of  those services and is empty when none was switched on. This is the stored setting and not the state of the  portal: a service the plan brings with it is active without appearing here, so the honest answer to what is  running is `GET api/2.0/portal/payment/activeservices`. One entry is changed with  `POST api/2.0/portal/payment/servicestate`.
         * @summary Get the wallet service settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantWalletServiceSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-service-settings/
         * @throws {RequiredError}
         */
        getTenantWalletServiceSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletServiceSettingsWrapper> {
            return localVarFp.getTenantWalletServiceSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal\'s automatic wallet top-up settings - whether it is on, the balance that triggers a  charge, the balance it is topped up to, and the currency both are expressed in. Any DocSpace  administrator may read them, and unlike the operation that changes them this one needs neither a  billing customer nor a configured billing service, so it answers on a portal that has never paid for  anything. It is read-only and changes nothing.  A portal that has never configured top-up gets the defaults rather than an empty result: `enabled` is  false, `currency` is null, and `minBalance` and `upToBalance` are 0. Those two zeros are outside the  ranges `POST api/2.0/portal/payment/topupsettings` accepts - 5 to 1000 and 6 to 5000 - so the answer  cannot be sent straight back to it; supply real values instead. `lastModified` is  `0001-01-01T00:00:00` until the settings are stored for the first time.  `lowBalanceThreshold` and `lowBalanceNotified` are maintained by the portal itself: they are reported  here, but cannot be written.
         * @summary Get the auto top-up settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-settings/
         * @throws {RequiredError}
         */
        getTenantWalletSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletSettingsWrapper> {
            return localVarFp.getTenantWalletSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the spending limit on the AI services for the portal as a whole - the ceiling the spending of every user  counts towards - together with what was spent against it in the current period and what is left. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and the call is  read-only. The limit is checked in addition to the limits  of the users, so a user can be stopped by it before reaching their own. The spending includes the expected cost  of AI operations still in progress. When no such limit has been set, or it was deleted, the answer is 200 with a  null `response`; create the limit with `POST api/2.0/portal/payment/servicelimit` and the scope `Total`. A  switched-off limit is still returned, with `enabled` false. A portal with no billing customer answers 404.
         * @summary Get the portal service limit
         * @param {*} [options] Override http request option.
         * REST API Reference for getTotalServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-total-service-limit/
         * @throws {RequiredError}
         */
        getTotalServiceLimit(options?: RawAxiosRequestConfig): AxiosPromise<ServiceLimitWrapper> {
            return localVarFp.getTotalServiceLimit(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one wallet service by name, for a client that already knows which service it needs and does not want  the whole catalogue. `service` is the name of the service - `Storage`, `Backup`, `AITools`, `Admin`,  `DocsCloud`, `DocsCloudDevPack` or `AISearch` - and a name this installation does not sell answers 404.  Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is  read-only. The answer has the same shape as one item of `GET api/2.0/portal/payment/walletservices` - the  price of a unit, the unit, the limits the service grants and its service name - except that the variants of a  service are not grouped into `innerServices` here, because a single service is looked up directly. The price  is in the currency resolved for the request.
         * @summary Get a wallet service
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
         * Lists every service the portal may pay for out of its wallet - extra administrators, disk storage, backup, AI  tools, AI search and Docs Connect - with the price of a unit, the unit it is sold in and whether the portal has  it switched on. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Services that are variants of one another are folded together: the visible one  carries the rest in its `innerServices`, so a client renders one card per group. The AI services are left out  entirely when AI is not enabled for the portal. This is the catalogue and not the state of the portal - what  is actually running is `GET api/2.0/portal/payment/activeservices`, one service on its own is  `GET api/2.0/portal/payment/walletservice`, and switching one on or off is  `POST api/2.0/portal/payment/servicestate`.
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
         * Ends the portal\'s paid subscription and moves it onto the wallet: the unused balance of the running period is  credited to the wallet, the wallet is topped up from the payment method on file if that credit does not cover  the purchase, and the requested number of administrators is then bought as a wallet service. The portal needs  a billing customer with a payment method set and a plan in the paid state, `quantity` has to name the  administrators wallet product, and the number asked for may not be below the administrators the portal already  has - read the credit that will be carried over from `GET api/2.0/portal/payment/subscription/balance` first.  Only the payer may call it. The call is mutating, spends money and cannot be undone: the subscription is ended  before the purchase is attempted, so a failure in the second half leaves the portal on the wallet with the  money credited but the administrators unbought, and a repeat would then buy them a second time. It is limited  to ten requests a minute per user by default. The result is `true` when the administrators were bought.
         * @summary Move the subscription to the wallet
         * @param {PaymentApiMoveSubscriptionToWalletRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for moveSubscriptionToWallet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/move-subscription-to-wallet/
         * @throws {RequiredError}
         */
        moveSubscriptionToWallet(requestParameters: PaymentApiMoveSubscriptionToWalletRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.moveSubscriptionToWallet(requestParameters.quantityRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the portal\'s message to the ONLYOFFICE sales team - the contact-sales form behind a request for a quote,  an invoice or a plan that cannot be bought online. `email` has to be a well-formed address and is where the  answer will go, while `userName` and `message` say who is asking and what for; all three are required and none  may be empty. Only a DocSpace administrator may call it. Nothing on the portal changes: no plan, no quota and  no payment is touched, a message is mailed out and the request is written to the portal audit trail. There is  no response body - status 200 means the message was handed to the mail service - and the call is not  idempotent, so a repeat sends a second message. It is limited to ten requests a minute per user by default and  answers 429 above that.
         * @summary Contact the sales team
         * @param {PaymentApiSendPaymentRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendPaymentRequest operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/
         * @throws {RequiredError}
         */
        sendPaymentRequest(requestParameters: PaymentApiSendPaymentRequestRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendPaymentRequest(requestParameters.salesRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the same personal spending limit on the AI services for each of the listed portal users in one call,  replacing the personal limit any of them already has and switching it on, so it is how a ceiling is rolled out  to a group of users. The portal needs a billing customer, and the caller needs the permission to edit the portal  settings as well as DocSpace administrator rights. At least one of `amountValue` and `quantityValue` must be  given, every user in `userIds` must exist on the portal, and a user listed twice is limited once. One call takes  at most 1000 users; split a larger group into several calls. Unlike  `PUT api/2.0/portal/payment/servicelimit`, this sets the whole limit: a threshold left out is removed, and the  period may change, though a lifetime limit set to lifetime again keeps counting from where it was. Each personal  limit applies instead of the one for every user, and the limit of the portal is checked on top. The call is mutating and idempotent, and it is written to the portal audit trail. The answer is  the number of personal limits that were set; the result is listed by  `GET api/2.0/portal/payment/servicelimit/participants`.
         * @summary Set the user service limits
         * @param {PaymentApiSetParticipantServiceLimitsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setParticipantServiceLimits operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-participant-service-limits/
         * @throws {RequiredError}
         */
        setParticipantServiceLimits(requestParameters: PaymentApiSetParticipantServiceLimitsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Int32Wrapper> {
            return localVarFp.setParticipantServiceLimits(requestParameters.setParticipantServiceLimitsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the whole set of AI chat models barred on this portal: the body is the complete set that is to hold,  so adding one restriction means sending the new model together with the ones already restricted, lifting one  means leaving it out, and an empty set lifts them all. Read the current set from  `GET api/2.0/portal/payment/ai-model/restrictions` and the model identifiers from  `GET api/2.0/portal/payment/ai-prices` before calling. The installation needs a billing service and the AI  gateway configured, the portal needs a billing customer and the AI tools wallet service switched on with  `POST api/2.0/portal/payment/servicestate`, and the caller needs the permission to edit the portal settings as  well as DocSpace administrator rights. The call is mutating and idempotent - sending the same set twice leaves  the same state - and it is written to the portal audit trail. It takes effect on the next AI request, so a  conversation already open on a model that has just been barred cannot go on with it. The stored set comes  back in the answer. While AI tools is off the call is refused with 403 instead of being stored, because the  read reports an empty set then and nothing written could be read back.
         * @summary Set restricted AI models
         * @param {PaymentApiSetRestrictedAiModelsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setRestrictedAiModels operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-restricted-ai-models/
         * @throws {RequiredError}
         */
        setRestrictedAiModels(requestParameters: PaymentApiSetRestrictedAiModelsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RestrictedAiModelsWrapper> {
            return localVarFp.setRestrictedAiModels(requestParameters.setRestrictedAiModelsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches the portal\'s automatic wallet top-up on or off and sets its thresholds: while it is on, the payment  method on file is charged whenever the wallet balance falls below `minBalance`, enough to bring it up to  `upToBalance`, in `currency`. The portal needs a billing customer whose wallet balance exists - a portal that  has never had one answers 404, so top the wallet up once with `POST api/2.0/portal/payment/deposit` first -  and only the payer may change the settings. The body replaces the stored settings as a whole and an omitted  body resets them to the defaults; `minBalance` is accepted between 5 and 1000 and `upToBalance` between 6 and  5000, and `upToBalance` has to be greater than `minBalance`, so that a top-up lifts the wallet above the balance  that triggers it. The low-balance warning state (`lowBalanceThreshold`, `lowBalanceNotified`) and `lastModified` may be  sent for compatibility but are ignored: the portal keeps the values it had. The call is mutating and  idempotent, it charges nothing by itself, it is written to the portal audit trail, and switching the top-up on also re-arms the low-balance warning. The settings as they were stored come  back in the answer.
         * @summary Set the auto top-up settings
         * @param {PaymentApiSetTenantWalletSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantWalletSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/
         * @throws {RequiredError}
         */
        setTenantWalletSettings(requestParameters: PaymentApiSetTenantWalletSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantWalletSettingsWrapper> {
            return localVarFp.setTenantWalletSettings(requestParameters.tenantWalletSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stops the `xlsx` monthly usage report this user has running and drops its task, for a report that was started  for the wrong period or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/monthly/report` can still answer for a moment afterwards. The call  is safe to repeat and does nothing at all when this user has no such report running: there is no response  body, and status 200 says the stop was requested, not that a report was really stopped. It leaves the  operations and service usage reports alone, and a report that had already finished keeps its file in My  documents.
         * @summary Terminate the monthly usage report
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateCustomerMonthlyUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-monthly-usage-report/
         * @throws {RequiredError}
         */
        terminateCustomerMonthlyUsageReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateCustomerMonthlyUsageReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Stops the `xlsx` wallet operations report this user has running and drops its task, for a report that was  started with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has  to be a DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/operationsreport` can still answer for a moment afterwards. The call is  safe to repeat and does nothing at all when this user has no report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. A report that had already  finished keeps its file in My documents - nothing is deleted from there.
         * @summary Terminate the operations report
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateCustomerOperationsReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-operations-report/
         * @throws {RequiredError}
         */
        terminateCustomerOperationsReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateCustomerOperationsReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Stops the `xlsx` service usage report this user has running and drops its task, for a report that was started  with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/report` can still answer for a moment afterwards. The call is safe  to repeat and does nothing at all when this user has no such report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. It leaves the operations and  monthly usage reports alone, and a report that had already finished keeps its file in My documents.
         * @summary Terminate the service usage report
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateCustomerServiceUsageReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-service-usage-report/
         * @throws {RequiredError}
         */
        terminateCustomerServiceUsageReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateCustomerServiceUsageReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Charges the payment method on file and adds the amount to the portal\'s wallet, the balance every wallet  service is paid from. The portal needs a billing customer with a payment method set - attach one with  `GET api/2.0/portal/payment/checkoutsetupurl` - `currency` has to be one of the accounting currencies this  installation supports, and `amount` is a whole number of currency units between 1 and 999999. Only the payer  may call it. The call takes money and is not idempotent in any way: two identical requests charge twice, so a  client must not retry it blindly after a timeout, and it is limited to ten requests a minute per user by  default. A successful top-up pushes the new balance to the portal clients over their socket connection and  re-arms the low-balance notification. The result is `true` when the payment provider accepted the charge; read  the resulting balance back from `GET api/2.0/portal/payment/customer/balance`.
         * @summary Top up the wallet
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
         * Changes how many units of the plan the portal is paying for - the number of administrators it covers - and  lets the payment provider bill the difference against the payment method already on file. The portal must have  a billing customer and a plan bought through `PUT api/2.0/portal/payment/url`, and while the portal is on a  priced plan the product name in `quantity` has to be that same plan, which `GET api/2.0/portal/payment/quota`  reports, because a subscription is changed here and not swapped. Only the payer - the portal user whose e-mail  is the billing customer\'s e-mail - may call it. The call is mutating and charges money, and it is guarded  against a double submission: once the new quantity is in effect, repeating the same request fails with 400  because that quantity is already set. The result is `true` when the provider accepted the change and `false`  when it declined it without an error. Exactly one product per call is accepted, the operation is limited to  ten requests a minute per user by default and answers 429 above that, and wallet services are not bought here  - use `PUT api/2.0/portal/payment/updatewallet` for those.
         * @summary Change the subscription quantity
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
         * Changes the thresholds of an existing spending limit on the AI services, or switches it off and back on with  `enabled`. The portal needs a billing customer, and the caller needs the permission to edit the portal settings  as well as DocSpace administrator rights. Only the given fields change: an omitted threshold keeps its value, so  a threshold once set cannot be removed here - delete the limit with  `DELETE api/2.0/portal/payment/servicelimit/{id}` and create it anew with  `POST api/2.0/portal/payment/servicelimit`, which is also the way to change its scope, user or period. A  switched-off limit stops restricting the AI services at once. The call is mutating and idempotent, it is written  to the portal audit trail, and a new threshold applies from the very next operation; lowering it below what was  already spent blocks the AI services until the period ends. An ID that does not exist, belongs to another portal  or is not a limit on the AI services answers 404.
         * @summary Update a service limit
         * @param {PaymentApiUpdateServiceLimitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateServiceLimit operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-service-limit/
         * @throws {RequiredError}
         */
        updateServiceLimit(requestParameters: PaymentApiUpdateServiceLimitRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ServiceLimitWrapper> {
            return localVarFp.updateServiceLimit(requestParameters.updateServiceLimitRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Buys more units of a wallet service - extra administrators, disk storage, backup, AI tools, AI search or  Docs Connect - or writes down the quantity that service will have after the next renewal, depending on  `productQuantityType`. With `Add` (1) the units are bought at once and paid out of the portal wallet, so the  wallet needs a sub-account in the accounting currency and enough money on it; with `Set` (0) nothing is  charged now and the quantity only takes effect in the next period, where an empty or zero quantity cancels a  change scheduled earlier. `Renew` and `Sub` are not accepted here. The portal needs a billing customer and the  caller has to be a DocSpace administrator; a service that is an add-on to the plan also needs the plan itself  to be paid, otherwise the answer is 402. Minimum quantities apply - disk storage starts at 100 units, the  Docs Connect Dev Pack at 10, and the administrators may not be fewer than the portal already has - and in  the `Add` form they are checked only while the portal does not hold that service yet. Asking for the Docs Connect  plan in the `Set` form while Docs Connect Dev Pack is active schedules the reversion to it at the next period,  while the upgrade in the other direction is not done here at all: use  `POST api/2.0/settings/docscloud/switchtodevpack`. The result is `true` when the change was accepted; the call  is mutating, spends money in its `Add` form and is limited to ten requests a minute per user by default. Price  the same purchase without paying for it with `PUT api/2.0/portal/payment/calculatewallet`.
         * @summary Change a wallet service quantity
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
 * Request parameters for createCustomerMonthlyUsageReport operation in PaymentApi.
 * @export
 * @interface PaymentApiCreateCustomerMonthlyUsageReportRequest
 */
export interface PaymentApiCreateCustomerMonthlyUsageReportRequest {
    /**
     * 
     * @type {CustomerMonthlyUsageReportRequestDto}
     * @memberof PaymentApiCreateCustomerMonthlyUsageReport
     */
    readonly customerMonthlyUsageReportRequestDto?: CustomerMonthlyUsageReportRequestDto
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
 * Request parameters for createCustomerServiceUsageReport operation in PaymentApi.
 * @export
 * @interface PaymentApiCreateCustomerServiceUsageReportRequest
 */
export interface PaymentApiCreateCustomerServiceUsageReportRequest {
    /**
     * 
     * @type {CustomerServiceUsageReportRequestDto}
     * @memberof PaymentApiCreateCustomerServiceUsageReport
     */
    readonly customerServiceUsageReportRequestDto?: CustomerServiceUsageReportRequestDto
}

/**
 * Request parameters for createServiceLimit operation in PaymentApi.
 * @export
 * @interface PaymentApiCreateServiceLimitRequest
 */
export interface PaymentApiCreateServiceLimitRequest {
    /**
     * 
     * @type {CreateServiceLimitRequestDto}
     * @memberof PaymentApiCreateServiceLimit
     */
    readonly createServiceLimitRequestDto?: CreateServiceLimitRequestDto
}

/**
 * Request parameters for deleteServiceLimit operation in PaymentApi.
 * @export
 * @interface PaymentApiDeleteServiceLimitRequest
 */
export interface PaymentApiDeleteServiceLimitRequest {
    /**
     * The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits.
     * @type {number}
     * @memberof PaymentApiDeleteServiceLimit
     */
    readonly id: number
}

/**
 * Request parameters for getAccountingServicePrices operation in PaymentApi.
 * @export
 * @interface PaymentApiGetAccountingServicePricesRequest
 */
export interface PaymentApiGetAccountingServicePricesRequest {
    /**
     * The service whose price list is read, named the way the billing catalogue names it, such as `ai-tools` or  `backup`. Take the value from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`.
     * @type {string}
     * @memberof PaymentApiGetAccountingServicePrices
     */
    readonly serviceName: string

    /**
     * Whether the answer is narrowed to the prices in force at the moment of the call. Leaving it false also  returns the retired and the not yet started ones, which is what pricing a movement recorded in the past  needs.
     * @type {boolean}
     * @memberof PaymentApiGetAccountingServicePrices
     */
    readonly active?: boolean
}

/**
 * Request parameters for getCheckoutSetupUrl operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCheckoutSetupUrlRequest
 */
export interface PaymentApiGetCheckoutSetupUrlRequest {
    /**
     * The absolute address the setup page sends the user back to when attaching a payment method is abandoned. It  has to be a well-formed URL and must be reachable by that user rather than by the portal.
     * @type {string}
     * @memberof PaymentApiGetCheckoutSetupUrl
     */
    readonly backUrl: string

    /**
     * The absolute address the setup page sends the user to once the payment provider has stored the payment  method. Reaching it means a method is now on file, which `GET api/2.0/portal/payment/customerinfo` confirms;  nothing has been charged.
     * @type {string}
     * @memberof PaymentApiGetCheckoutSetupUrl
     */
    readonly successUrl: string
}

/**
 * Request parameters for getCustomerBalance operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerBalanceRequest
 */
export interface PaymentApiGetCustomerBalanceRequest {
    /**
     * Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerBalance
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getCustomerDeposits operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerDepositsRequest
 */
export interface PaymentApiGetCustomerDepositsRequest {
    /**
     * The beginning of the period, inclusive, as an ISO 8601 timestamp. A value with neither `Z` nor an offset is  read in the portal time zone, not in the caller\'s; defaults to the portal creation date.
     * @type {string}
     * @memberof PaymentApiGetCustomerDeposits
     */
    readonly startDate?: string

    /**
     * The end of the period, inclusive, as an ISO 8601 timestamp. A value with neither `Z` nor an offset is read in  the portal time zone, not in the caller\'s; defaults to the moment the call is made.
     * @type {string}
     * @memberof PaymentApiGetCustomerDeposits
     */
    readonly endDate?: string

    /**
     * The outcome to keep. A top-up that is still being settled is reported as pending and may change later, while  the other outcomes are final; every outcome is reported when this is omitted.
     * @type {OperationStatus}
     * @memberof PaymentApiGetCustomerDeposits
     */
    readonly status?: OperationStatus

    /**
     * The number of top-ups to skip before the first one returned, for walking through a long history page by page.  Counted after the filters are applied, and starts at 0 when omitted.
     * @type {number}
     * @memberof PaymentApiGetCustomerDeposits
     */
    readonly offset?: number

    /**
     * The maximum number of top-ups returned in one page. Defaults to 25 when omitted; the answer echoes the window  back next to `totalQuantity`, `totalPage` and `currentPage`, so the next `offset` can be computed without  counting the items.
     * @type {number}
     * @memberof PaymentApiGetCustomerDeposits
     */
    readonly limit?: number
}

/**
 * Request parameters for getCustomerInfo operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerInfoRequest
 */
export interface PaymentApiGetCustomerInfoRequest {
    /**
     * Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerInfo
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getCustomerMonthlyUsage operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerMonthlyUsageRequest
 */
export interface PaymentApiGetCustomerMonthlyUsageRequest {
    /**
     * The beginning of the reported period, inclusive. The months are cut in the portal time zone rather than in  UTC, so spending at the turn of a month falls where the portal sees it; defaults to the portal creation date.
     * @type {string}
     * @memberof PaymentApiGetCustomerMonthlyUsage
     */
    readonly startDate?: string

    /**
     * The end of the reported period, inclusive. Cut in the portal time zone in the same way as `startDate`, and  defaults to the moment the call is made.
     * @type {string}
     * @memberof PaymentApiGetCustomerMonthlyUsage
     */
    readonly endDate?: string
}

/**
 * Request parameters for getCustomerOperations operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerOperationsRequest
 */
export interface PaymentApiGetCustomerOperationsRequest {
    /**
     * The number of movements to skip before the first one returned, for walking through a long history page by  page. Counted after the filters and the ordering are applied, and starts at 0 when omitted.
     * @type {number}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly offset?: number

    /**
     * The maximum number of movements returned in one page. Defaults to 25 when omitted; the answer echoes the  window back next to `totalQuantity`, `totalPage` and `currentPage`, so the next `offset` can be computed  without counting the items.
     * @type {number}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly limit?: number

    /**
     * The wallet services whose movements are kept, named the way the billing catalogue names them - `backup`,  `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field of  `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not sell  fails the call with 404, and an omitted list keeps every service. A bare string is accepted in place of an  array for backward compatibility.
     * @type {Array<string>}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly serviceName?: Array<string>

    /**
     * The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, so a  movement at the edge of the period falls where the portal sees it; defaults to the portal creation date.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly startDate?: string

    /**
     * The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to  the moment the call is made.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly endDate?: string

    /**
     * The participant whose movements are kept - the account the accounting service records as the cause of a  movement. A movement caused by a portal user carries that user ID here, and one caused by the portal itself  carries the customer name; surrounding whitespace is trimmed, and an omitted value keeps every participant.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly participantName?: string

    /**
     * Whether movements that add money to the wallet - top-ups, refunds and corrections in the portal\'s favour -  are kept. Both directions are reported when neither this nor `debit` is given.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly credit?: boolean

    /**
     * Whether movements that take money out of the wallet - the charges of the wallet services - are kept. Both  directions are reported when neither this nor `credit` is given.
     * @type {boolean}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly debit?: boolean

    /**
     * The kind of movement to keep, which says what caused the money to move rather than how it ended. Every kind  is reported when it is omitted.
     * @type {OperationType}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly type?: OperationType

    /**
     * The outcome to keep. A movement that is still being settled is reported as pending and may change later,  while the other outcomes are final; every outcome is reported when this is omitted.
     * @type {OperationStatus}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly status?: OperationStatus

    /**
     * The name of the field the movements are sorted by, spelled as the accounting service names it, such as  `StartDate` or `ServiceName`. Surrounding whitespace is trimmed, and the accounting service applies its own  ordering when this is omitted.
     * @type {string}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly orderBy?: string

    /**
     * The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting  service does by default, so leaving this out sorts the same way as asking for descending explicitly.
     * @type {OperationOrderType}
     * @memberof PaymentApiGetCustomerOperations
     */
    readonly orderType?: OperationOrderType
}

/**
 * Request parameters for getCustomerServiceUsage operation in PaymentApi.
 * @export
 * @interface PaymentApiGetCustomerServiceUsageRequest
 */
export interface PaymentApiGetCustomerServiceUsageRequest {
    /**
     * The wallet services whose consumption is added up, named the way the billing catalogue names them -  `backup`, `ai-tools`, `ai-search`, `disk-storage`, `docscloud`. Take the values from the `serviceName` field  of `GET api/2.0/portal/payment/walletservices`; the match ignores case, a name this installation does not  sell fails the call with 404, and an omitted list covers every service.
     * @type {Array<string>}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly serviceName?: Array<string>

    /**
     * The participant whose consumption is added up - the account the accounting service records as the consumer.  Consumption caused by a portal user carries that user ID here; surrounding whitespace is trimmed, and an  omitted value covers every participant.
     * @type {string}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly participantName?: string

    /**
     * The outcome to keep. Consumption that is still being settled is reported as pending and may change later,  while the other outcomes are final; every outcome is counted when this is omitted.
     * @type {OperationStatus}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly status?: OperationStatus

    /**
     * The beginning of the reported period, inclusive. Read in the portal time zone rather than in UTC, and  defaults to the portal creation date.
     * @type {string}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly startDate?: string

    /**
     * The end of the reported period, inclusive. Read in the portal time zone rather than in UTC, and defaults to  the moment the call is made.
     * @type {string}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly endDate?: string

    /**
     * The usage annotations a wallet service records alongside its consumption, as the key and value pairs that  must all match for a record to be counted. The keys are chosen by the service that writes them, so read them  off the `metadata` of the records already returned rather than guessing; an omitted map counts every record.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly metadata?: { [key: string]: string; }

    /**
     * The number of per-service totals to skip before the first one returned. Counted after the filters and the  ordering are applied, and starts at 0 when omitted.
     * @type {number}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly offset?: number

    /**
     * The maximum number of per-service totals returned in one page. Defaults to 25 when omitted; the answer echoes  the window back with its paging information, so the next `offset` can be computed without counting the items.
     * @type {number}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly limit?: number

    /**
     * The name of the field the per-service totals are sorted by, spelled as the accounting service names it, such  as `ServiceName` or `StartDate`. Surrounding whitespace is trimmed, and the accounting service applies its  own ordering when this is omitted.
     * @type {string}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly orderBy?: string

    /**
     * The direction the field named in `orderBy` is sorted in. Newest or largest first is what the accounting  service does by default, so leaving this out sorts the same way as asking for descending explicitly.
     * @type {OperationOrderType}
     * @memberof PaymentApiGetCustomerServiceUsage
     */
    readonly orderType?: OperationOrderType
}

/**
 * Request parameters for getDepositInvoice operation in PaymentApi.
 * @export
 * @interface PaymentApiGetDepositInvoiceRequest
 */
export interface PaymentApiGetDepositInvoiceRequest {
    /**
     * The ID of the top-up, taken from the `id` field of `GET api/2.0/portal/payment/customer/deposits`.
     * @type {number}
     * @memberof PaymentApiGetDepositInvoice
     */
    readonly id: number
}

/**
 * Request parameters for getParticipantServiceLimits operation in PaymentApi.
 * @export
 * @interface PaymentApiGetParticipantServiceLimitsRequest
 */
export interface PaymentApiGetParticipantServiceLimitsRequest {
    /**
     * The number of limits to skip before the first one returned, counted in the sort order of the list.
     * @type {number}
     * @memberof PaymentApiGetParticipantServiceLimits
     */
    readonly offset?: number

    /**
     * The largest number of limits one page holds.
     * @type {number}
     * @memberof PaymentApiGetParticipantServiceLimits
     */
    readonly limit?: number

    /**
     * The field the list is sorted by: the user a limit applies to, or the moment it was created.
     * @type {ServiceLimitOrderBy}
     * @memberof PaymentApiGetParticipantServiceLimits
     */
    readonly orderBy?: ServiceLimitOrderBy

    /**
     * The direction the field named in `orderBy` is sorted in.
     * @type {OperationOrderType}
     * @memberof PaymentApiGetParticipantServiceLimits
     */
    readonly orderType?: OperationOrderType
}

/**
 * Request parameters for getPaymentAccount operation in PaymentApi.
 * @export
 * @interface PaymentApiGetPaymentAccountRequest
 */
export interface PaymentApiGetPaymentAccountRequest {
    /**
     * The absolute address the billing account page should offer as its way back. It is appended to the returned  portal-relative address as a query parameter rather than followed here, and omitting it yields the bare  address of the page.
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
     * Which side of the catalogue is listed: `true` keeps the services paid out of the portal wallet, `false` keeps  the subscription plans, and omitting it keeps both.
     * @type {boolean}
     * @memberof PaymentApiGetPaymentQuotas
     */
    readonly wallet?: boolean

    /**
     * Which layer of the catalogue is listed: `true` keeps the add-ons that extend a plan, `false` keeps the plans  themselves, and omitting it keeps both.
     * @type {boolean}
     * @memberof PaymentApiGetPaymentQuotas
     */
    readonly additional?: boolean
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
     * Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a  start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a  purchase or a top-up and not on every read.
     * @type {boolean}
     * @memberof PaymentApiGetQuotaPaymentInformation
     */
    readonly refresh?: boolean
}

/**
 * Request parameters for getServiceLimit operation in PaymentApi.
 * @export
 * @interface PaymentApiGetServiceLimitRequest
 */
export interface PaymentApiGetServiceLimitRequest {
    /**
     * The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits.
     * @type {number}
     * @memberof PaymentApiGetServiceLimit
     */
    readonly id: number
}

/**
 * Request parameters for getWalletService operation in PaymentApi.
 * @export
 * @interface PaymentApiGetWalletServiceRequest
 */
export interface PaymentApiGetWalletServiceRequest {
    /**
     * The service to look up, given by its catalogue name. A service this installation does not sell answers 404,  and the whole catalogue is `GET api/2.0/portal/payment/walletservices`.
     * @type {TenantWalletService}
     * @memberof PaymentApiGetWalletService
     */
    readonly service: TenantWalletService
}

/**
 * Request parameters for moveSubscriptionToWallet operation in PaymentApi.
 * @export
 * @interface PaymentApiMoveSubscriptionToWalletRequest
 */
export interface PaymentApiMoveSubscriptionToWalletRequest {
    /**
     * 
     * @type {QuantityRequestDto}
     * @memberof PaymentApiMoveSubscriptionToWallet
     */
    readonly quantityRequestDto?: QuantityRequestDto
}

/**
 * Request parameters for sendPaymentRequest operation in PaymentApi.
 * @export
 * @interface PaymentApiSendPaymentRequestRequest
 */
export interface PaymentApiSendPaymentRequestRequest {
    /**
     * 
     * @type {SalesRequestDto}
     * @memberof PaymentApiSendPaymentRequest
     */
    readonly salesRequestDto?: SalesRequestDto
}

/**
 * Request parameters for setParticipantServiceLimits operation in PaymentApi.
 * @export
 * @interface PaymentApiSetParticipantServiceLimitsRequest
 */
export interface PaymentApiSetParticipantServiceLimitsRequest {
    /**
     * 
     * @type {SetParticipantServiceLimitsRequestDto}
     * @memberof PaymentApiSetParticipantServiceLimits
     */
    readonly setParticipantServiceLimitsRequestDto?: SetParticipantServiceLimitsRequestDto
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
     * @type {TenantWalletSettingsRequestDto}
     * @memberof PaymentApiSetTenantWalletSettings
     */
    readonly tenantWalletSettingsRequestDto?: TenantWalletSettingsRequestDto
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
 * Request parameters for updateServiceLimit operation in PaymentApi.
 * @export
 * @interface PaymentApiUpdateServiceLimitRequest
 */
export interface PaymentApiUpdateServiceLimitRequest {
    /**
     * 
     * @type {UpdateServiceLimitRequestDto}
     * @memberof PaymentApiUpdateServiceLimit
     */
    readonly updateServiceLimitRequestDto?: UpdateServiceLimitRequestDto
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
     * Prices a wallet-service purchase without making it: it returns what buying the requested number of units would  cost right now, so a client can show the amount before asking for a confirmation. Only `productQuantityType`  `Add` (1) is accepted, the quantity must be greater than zero, and the portal needs a billing customer whose  wallet has a sub-account in the accounting currency. The caller has to be a DocSpace administrator. Nothing is  bought, charged or written down - the call is read-only and may be repeated - and the purchase itself is  `PUT api/2.0/portal/payment/updatewallet`. The answer carries the amount with its currency, the quantity it  was computed for and the identifier of the calculation. It is the price of this moment and is not held: it can  differ by the time the purchase is made.
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
     * Switches one wallet service on or off for the portal: `service` names it and `enabled` says which way. The  portal needs a billing customer, and the caller needs both the permission to edit the portal settings and  DocSpace administrator rights. Order matters between the two AI services - AI tools has to be on before AI  search may be switched on, and switching AI tools off switches AI search off with it - so a request that  breaks that order is refused with 403. The call is mutating and idempotent: switching on a service that is  already on changes nothing. It is written to the portal audit trail, and switching AI tools notifies the  portal clients so the AI features appear or disappear for them without a reload. The whole updated set of  switched-on services comes back. Switching a service on does not buy it - its units are still bought with  `PUT api/2.0/portal/payment/updatewallet`.
     * @summary Switch a wallet service
     * @param {PortalPaymentApiChangeTenantWalletServiceStateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public changeTenantWalletServiceState(requestParameters: PaymentApiChangeTenantWalletServiceStateRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).changeTenantWalletServiceState(requestParameters.changeWalletServiceStateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues the wallet spending added up per calendar month as an `xlsx` file and returns the task that will build  it; the file is not ready when the response arrives. The portal needs a billing customer and the caller has to  be a DocSpace administrator. The body takes only the period - `startDate` and `endDate`, both inclusive - and  an empty body covers everything from the portal creation date to now; the months are cut in the portal time  zone, exactly as in `GET api/2.0/portal/payment/customer/usage/monthly`. Poll  `GET api/2.0/portal/payment/customer/usage/monthly/report` until `isCompleted` is true, then take the file  from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents  section, where it counts against the portal storage like any other file. One monthly usage report per user is  tracked at a time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/usage/monthly/report` stops it. There is no service filter here: for a  report per service use `POST api/2.0/portal/payment/customer/usage/report`.
     * @summary Start the monthly usage report
     * @param {PortalPaymentApiCreateCustomerMonthlyUsageReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public createCustomerMonthlyUsageReport(requestParameters: PaymentApiCreateCustomerMonthlyUsageReportRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).createCustomerMonthlyUsageReport(requestParameters.customerMonthlyUsageReportRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues the history of the wallet movements as an `xlsx` file and returns the task that will build it; the file  is not ready when the response arrives. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/operations` -  the service names, the date range, the participant, the operation type and status, the credit and debit  directions and the ordering - and an empty body reports everything from the portal creation date to now; a  service name this installation does not sell fails with 404. Poll  `GET api/2.0/portal/payment/customer/operationsreport` until `isCompleted` is true, then take the file from  `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s own My documents section,  where it counts against the portal storage like any other file. One operations report per user is tracked at a  time - a call made while the previous one is still running answers with that task - and  `DELETE api/2.0/portal/payment/customer/operationsreport` stops it. A build that fails ends the task with  `error` filled in rather than failing this call.
     * @summary Start the operations report
     * @param {PortalPaymentApiCreateCustomerOperationsReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public createCustomerOperationsReport(requestParameters: PaymentApiCreateCustomerOperationsReportRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).createCustomerOperationsReport(requestParameters.customerOperationsReportRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues the usage of the wallet services as an `xlsx` file and returns the task that will build it; the file is  not ready when the response arrives. The portal needs a billing customer and the caller has to be a DocSpace  administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/usage` - the service  names, the date range, the participant, the operation status, the usage metadata and the ordering - and an  empty body reports every service from the portal creation date to now; a service name this installation does  not sell fails with 404. Poll `GET api/2.0/portal/payment/customer/usage/report` until `isCompleted` is true,  then take the file from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller\'s  own My documents section, where it counts against the portal storage like any other file. One service usage  report per user is tracked at a time - a call made while the previous one is still running answers with that  task - and `DELETE api/2.0/portal/payment/customer/usage/report` stops it. It is a different report from the  operations one and does not interfere with it: per-movement history is  `POST api/2.0/portal/payment/customer/operationsreport`.
     * @summary Start the service usage report
     * @param {PortalPaymentApiCreateCustomerServiceUsageReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public createCustomerServiceUsageReport(requestParameters: PaymentApiCreateCustomerServiceUsageReportRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).createCustomerServiceUsageReport(requestParameters.customerServiceUsageReportRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a spending limit on the AI services - AI tools and AI search together - with `scope` saying whom it  applies to: `Total` for the portal as a whole, `Global` for every user separately, `Custom` for the user in  `userId`, which only this scope takes. A personal limit applies to its user instead of the one for every user,  and the limit of the portal is checked on top of both. The portal needs a billing customer, and the caller needs  the permission to edit the portal settings as well as DocSpace administrator rights. At least one of  `amountValue` and `quantityValue` must be given; with both, the services stop as soon as either is reached. The  call is mutating and written to the portal audit trail. It is not idempotent: a second limit of the same scope,  or for the same user, is refused with 409 - change the existing one with  `PUT api/2.0/portal/payment/servicelimit` instead. The scope, the user and the period cannot be changed later.
     * @summary Create a service limit
     * @param {PortalPaymentApiCreateServiceLimitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public createServiceLimit(requestParameters: PaymentApiCreateServiceLimitRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).createServiceLimit(requestParameters.createServiceLimitRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes one spending limit on the AI services completely - the limit of the portal as a whole, the one for  every user, or a personal one - so it no longer restricts anyone. The portal needs a billing customer, and the  caller needs the permission to edit the portal settings as well as DocSpace administrator rights. The call is  destructive and cannot be undone: unlike switching a limit off with `PUT api/2.0/portal/payment/servicelimit`,  which keeps its settings, a deleted limit is gone, and a new one has to be created with  `POST api/2.0/portal/payment/servicelimit`. Deleting a personal limit lets the limit for every user apply to  that user. It is written to the portal audit trail. An ID that does not exist, belongs to another portal or is  not a limit on the AI services answers 404, which is also what a repeated deletion of the same limit gets.
     * @summary Delete a service limit
     * @param {PortalPaymentApiDeleteServiceLimitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public deleteServiceLimit(requestParameters: PaymentApiDeleteServiceLimitRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).deleteServiceLimit(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches off every personal spending limit on the AI services in one call, so each user falls back to the limit  for every user, if one is set. The limit of the portal as a whole and the one for every user stay as they are.  The portal needs a billing customer, and the caller needs the permission to edit the portal settings as well as  DocSpace administrator rights. The switched-off limits stop restricting their users at once and are kept, so  each can be switched back on with `PUT api/2.0/portal/payment/servicelimit`. The call is mutating and  idempotent - repeating it switches off nothing more - and it is written to the portal audit trail. The answer is  the number of personal limits that were switched off, zero when none was in force. To switch off the limit of a  single user, use `PUT api/2.0/portal/payment/servicelimit` with `enabled` set to false.
     * @summary Disable the user service limits
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public disableParticipantServiceLimits(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).disableParticipantServiceLimits(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the price list of one wallet service as the accounting service keeps it: every price record with its  time unit, cost and resulting price, volume threshold, validity period, status and discount category. Take  the service name from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`. The caller must  be a DocSpace administrator, and the server must have the billing and accounting services configured;  otherwise the call fails with 403. The call is read-only and can be repeated safely. By default the list  also holds retired and not yet started records; `active=true` keeps only the prices in force now. A service  with no prices comes back as an empty list. Amounts are in the currency of the service, which the records do  not name. The list is cached for all portals for up to an hour, so a change in the accounting service can  take that long to appear. For the current price of every plan and wallet service as the customer sees it, use  `GET api/2.0/portal/payment/quotas`. An unknown service name fails with 500, as does an unreachable  accounting service.
     * @summary Get the service prices from the accounting service
     * @param {PortalPaymentApiGetAccountingServicePricesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getAccountingServicePrices(requestParameters: PaymentApiGetAccountingServicePricesRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getAccountingServicePrices(requestParameters.serviceName, requestParameters.active, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the wallet services the portal is running right now: the add-ons its plan pays for that are in the  active state, plus the ones an administrator switched on by hand in the wallet service settings; the Docs Connect  trial is listed as well, although it is not paid from the wallet. Only a DocSpace administrator may call it,  no billing customer is needed for it, and the call is read-only. Every item names the service, its title and  the unit it is measured in, and says whether it is a subscription; a subscribed service also carries the limit  it grants and how much of it is used where that number is known - the editor seats and the editors currently  active for Docs Connect, the purchased units and the units already consumed for disk storage. A service listed  with no limit is one whose usage is not counted this way, not one without a limit. The catalogue of what could  be switched on is `GET api/2.0/portal/payment/walletservices`, and switching one is  `POST api/2.0/portal/payment/servicestate`.
     * @summary Get the active wallet services
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getActiveServices(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getActiveServices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the price list of the AI features the portal pays for out of its wallet: the chat models with the  price of their prompt and completion tokens, the embedding models, the image models with their per-image  price, and the web search providers with the price of one search. The installation needs both a billing  service and the AI gateway configured, otherwise the answer is 403, and only a DocSpace administrator may read  it; the call is read-only. Token prices are normalised per million tokens, and every price is in the single  `currency` the answer names. Each entry carries the model identifier to use when talking to the AI operations,  its display alias, its provider with the provider icon, and a link to the model\'s own page. It is a list of  what the models cost and not of what the portal spent - that is `GET api/2.0/portal/payment/customer/usage` -  and it says nothing about which of them are allowed here, which is  `GET api/2.0/portal/payment/ai-model/restrictions`.
     * @summary Get AI model prices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getAiPrices(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getAiPrices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hands back the hosted page on which a payment method is attached to the portal\'s billing account, for the case  where money has to be taken later - a wallet top-up or an automatic one - rather than a plan bought now. A  portal that already has a payment method on file answers with an empty result; a DocSpace administrator may  ask for the page, but once the portal has a billing customer with an e-mail, only its payer may. The call  itself changes nothing and may be repeated: the payment method is stored by the payment provider when the  returned page is completed, after which `GET api/2.0/portal/payment/customerinfo` reports it as set. The URL  is absolute, carries the caller\'s e-mail, the language of the request and the currency of the region, and  redirects to `successUrl` or `backUrl` when the user finishes or cancels. It buys nothing - a plan is bought  with `PUT api/2.0/portal/payment/url`.
     * @summary Get the checkout setup page URL
     * @param {PortalPaymentApiGetCheckoutSetupUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCheckoutSetupUrl(requestParameters: PaymentApiGetCheckoutSetupUrlRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCheckoutSetupUrl(requestParameters.backUrl, requestParameters.successUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the money the portal has in its wallet as the accounting service holds it: the account with its own  currency, one sub-account per currency with the amount on it, and the most recent credit movement. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and a portal that  has never been a customer gets an empty result. The call is read-only. This balance is what the wallet  services are charged against, so it falls as they are used and rises with  `POST api/2.0/portal/payment/deposit`; the movements behind a change are listed by  `GET api/2.0/portal/payment/customer/operations`. Pass `refresh=true` to re-read it from the accounting  service rather than the cache - right after a top-up the cached figure is still the old one.
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
     * Lists the top-ups of the portal\'s wallet - the payments into it - one page at a time, which is what a list of  payments with their invoices is built from. A portal that is not a billing customer yet has no top-ups and  gets an empty result rather than an error. Only the payer or the portal owner may read it, as with the  invoices, and the call is read-only. Every filter is optional: `startDate` and `endDate` default to the  portal creation date and the present moment, a value without `Z` or an offset is read in the portal time  zone, and `status` narrows to how a top-up ended. `offset` and `limit` default to 0 and 25 and are echoed next  to `totalQuantity`, `totalPage` and `currentPage`; a negative `offset` or a `limit` outside 1 to 100 fails  with 400. An empty result means the portal is not a billing customer, has no wallet at the accounting service  yet, or that service could not be read; a period without top-ups gives an empty `collection`. A top-up with  `hasInvoice` true has an invoice, opened with `GET api/2.0/portal/payment/customer/deposits/{id}/invoice`.  For the full wallet history, charges and refunds included, use  `GET api/2.0/portal/payment/customer/operations`.
     * @summary Get the wallet top-ups
     * @param {PortalPaymentApiGetCustomerDepositsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerDeposits(requestParameters: PaymentApiGetCustomerDepositsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerDeposits(requestParameters.startDate, requestParameters.endDate, requestParameters.status, requestParameters.offset, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the billing customer behind the portal: the e-mail its billing account is registered to, whether a  payment method is stored for it, and the portal user who is the payer of that account. Only a DocSpace  administrator may read it, and the call is read-only. The answer is empty in two ordinary cases - the  installation has no billing service configured at all, and the portal has never been a customer - so an empty  body is not an error. `payer` is filled in only when the billing e-mail belongs to a portal user; when it does  not, the e-mail is still shown but the field stays empty, and that is what makes every payer-only operation of  this group unreachable for everybody. `refresh=true` re-reads the customer from the billing provider instead  of the cache, which is worth doing right after a payment method has been attached.
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
     * Returns what the portal spent from its wallet added up per calendar month, so a client can draw a spending  chart without paging through every movement. Only a DocSpace administrator may read it, a portal with no  billing customer answers with an empty result, and the call is read-only. `startDate` and `endDate` bound the  period, both inclusive, and default to the portal creation date and the present moment; the months are cut in  the portal time zone, so a movement at the edge of a month falls where the portal sees it and not where UTC  does. Each item names its year and month, the total charged in it with the currency, and how many operations  that total came from. The movements behind a month are in `GET api/2.0/portal/payment/customer/operations`,  and the same figures as a file come from `POST api/2.0/portal/payment/customer/usage/monthly/report`.
     * @summary Get the customer monthly usage
     * @param {PortalPaymentApiGetCustomerMonthlyUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerMonthlyUsage(requestParameters: PaymentApiGetCustomerMonthlyUsageRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerMonthlyUsage(requestParameters.startDate, requestParameters.endDate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the state of the `xlsx` monthly usage report this user started with  `POST api/2.0/portal/payment/customer/usage/monthly/report`: `percentage` while it is being built,  `isCompleted` when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in  the caller\'s My documents, and `error` when the build failed. The portal needs a billing customer and the  caller has to be a DocSpace administrator; the call is read-only and is the one to poll. The task is kept per  user and per report kind, so it reports neither another administrator\'s report nor the operations and service  usage ones, which have their own status operations. An empty result means this user has no monthly usage  report at all - none was started, or the finished one was already picked up or terminated. A completed task is  dropped as soon as the next report is started, so read the file link out of the same answer that first reports  `isCompleted`.
     * @summary Get the monthly usage report status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerMonthlyUsageReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerMonthlyUsageReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the money movements on the portal\'s wallet - top-ups, the charges of the wallet services, refunds and  corrections - one page at a time, which is what a billing history is built from. Only a DocSpace administrator  may read it, a portal with no billing customer answers with an empty result, and the call is read-only. Every  filter is optional: `startDate` and `endDate` are read in the portal time zone and default to the portal  creation date and the present moment, `serviceName` narrows to particular wallet services and fails with 404  on a name this installation does not sell, `participantName`, `type` and `status` narrow to who caused a  movement and how it ended, and `credit` and `debit` include or exclude the two directions. `offset` and  `limit` page through the result and default to 0 and 25, `orderBy` and `orderType` sort it, and the answer  repeats them next to `totalQuantity`, `totalPage` and `currentPage` so a client can page without counting. The  same data as a downloadable file is `POST api/2.0/portal/payment/customer/operationsreport`, and the figures  added up per service are `GET api/2.0/portal/payment/customer/usage`.
     * @summary Get the wallet operations
     * @param {PortalPaymentApiGetCustomerOperationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerOperations(requestParameters: PaymentApiGetCustomerOperationsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerOperations(requestParameters.offset, requestParameters.limit, requestParameters.serviceName, requestParameters.startDate, requestParameters.endDate, requestParameters.participantName, requestParameters.credit, requestParameters.debit, requestParameters.type, requestParameters.status, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the state of the `xlsx` wallet operations report this user started with  `POST api/2.0/portal/payment/customer/operationsreport`: `percentage` while it is being built, `isCompleted`  when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it never reports another administrator\'s report, nor the service usage and monthly usage ones, which  have their own status operations. An empty result means this user has no operations report at all - none was  started, or the finished one was already picked up or terminated. A completed task is dropped as soon as the  next report is started, so read the file link out of the same answer that first reports `isCompleted`.
     * @summary Get the operations report status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerOperationsReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerOperationsReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns how much of each wallet service the portal consumed and what that cost, added up per service instead  of listed per movement. Only a DocSpace administrator may read it, a portal with no billing customer answers  with an empty result, and the call is read-only. The filters are optional: `serviceName` narrows to particular  services and fails with 404 on a name this installation does not sell, `participantName` and `status` narrow  to who consumed and how the operation ended, `startDate` and `endDate` bound the period in the portal time  zone, `metadata` matches the key and value pairs a service records with its usage, and `offset`, `limit`,  `orderBy` and `orderType` page and sort the result. Amounts come with the unit the service is sold in, except  AI tools, whose consumption is reported in tokens rather than in AI credits. The individual charges behind  these totals are `GET api/2.0/portal/payment/customer/operations`, and the same figures as a downloadable file  are `POST api/2.0/portal/payment/customer/usage/report`.
     * @summary Get the customer service usage
     * @param {PortalPaymentApiGetCustomerServiceUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerServiceUsage(requestParameters: PaymentApiGetCustomerServiceUsageRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerServiceUsage(requestParameters.serviceName, requestParameters.participantName, requestParameters.status, requestParameters.startDate, requestParameters.endDate, requestParameters.metadata, requestParameters.offset, requestParameters.limit, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the state of the `xlsx` service usage report this user started with  `POST api/2.0/portal/payment/customer/usage/report`: `percentage` while it is being built, `isCompleted` when  it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller\'s My  documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a  DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report  kind, so it reports neither another administrator\'s report nor the operations and monthly usage ones, which  have their own status operations. An empty result means this user has no service usage report at all - none  was started, or the finished one was already picked up or terminated. A completed task is dropped as soon as  the next report is started, so read the file link out of the same answer that first reports `isCompleted`.
     * @summary Get the service usage report status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getCustomerServiceUsageReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getCustomerServiceUsageReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hands back the address of the page on which the billing provider shows the invoice for one top-up of the  portal\'s wallet, so a client can open or download it. The top-up is named by the `id` that  `GET api/2.0/portal/payment/customer/deposits` returns, and only one listed there with `hasInvoice` true has an  invoice to show. Only the payer or the portal owner may read it, as with the billing account page, and the  call changes nothing. The address is absolute and points to the billing provider rather than to the portal;  it is asked for anew on every call, so request it when the user is about to open the invoice instead of  storing it. A top-up this portal does not have, one without an invoice, or a portal that is not a billing  customer answers 404, and an `id` that is not a number fails with 400. An installation without a billing  service answers 403, and 402 means the billing or the accounting service rejected the request or did not  answer, which a later retry may get past.
     * @summary Get the top-up invoice
     * @param {PortalPaymentApiGetDepositInvoiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getDepositInvoice(requestParameters: PaymentApiGetDepositInvoiceRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getDepositInvoice(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the spending limit on the AI services for every user - the same ceiling applied to each user separately,  for any user without a personal limit in force. Only a DocSpace administrator may read it, an installation  without a billing service answers 403, and the call is read-only. It comes without spending, since that is  counted per user: read it for each user from `GET api/2.0/portal/payment/servicelimit/participants`; `periodEnd`  still says when the current period ends for everyone. When no  such limit has been set, or it was deleted, the answer is 200 with a null `response`; create the limit with  `POST api/2.0/portal/payment/servicelimit` and the scope `Global`. A switched-off limit is still returned, with  `enabled` false. A portal with no billing customer answers 404.
     * @summary Get the global service limit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getGlobalServiceLimit(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getGlobalServiceLimit(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists, one page at a time, the spending limit on the AI services in force for each portal user, with what the  user spent against it in the current period and what is left. Only a DocSpace administrator may read it, an  installation without a billing service answers 403, a portal with no billing customer answers 404, and the call  is read-only; a portal with no limits gets an empty page. A user\'s own limit wins over the one for every user: an item with the scope `Custom` is a  personal limit, one with `Global` the limit for every user, its ID repeated for each user it applies to.  Switched-off limits are not listed, and a user who has not used the AI services yet may be missing. `offset`  and `limit` page through the result and default to 0 and 25, and the answer repeats them next to  `totalQuantity`, `totalPage` and `currentPage`; `orderBy` and `orderType` sort it, the newest limits first by  default.
     * @summary Get the user service limits
     * @param {PortalPaymentApiGetParticipantServiceLimitsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getParticipantServiceLimits(requestParameters: PaymentApiGetParticipantServiceLimitsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getParticipantServiceLimits(requestParameters.offset, requestParameters.limit, requestParameters.orderBy, requestParameters.orderType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hands back the address of the portal page on which the billing account is managed - the payment method on  file, the invoices and the receipts - so a client can link to it instead of assembling the address itself. The  portal must already have a billing customer: one that has never had it gets an empty result, and an  installation without a billing service answers 403. Only the payer or the portal owner may read it, and the  call changes nothing. The value is relative to the portal root (`payment.ashx`), and the optional `backUrl` is  appended to it as a query parameter so the page can send the user back where they came from. It is not a  checkout page: a plan is bought with `PUT api/2.0/portal/payment/url` and a payment method is attached with  `GET api/2.0/portal/payment/checkoutsetupurl`.
     * @summary Get the billing account page
     * @param {PortalPaymentApiGetPaymentAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentAccount(requestParameters: PaymentApiGetPaymentAccountRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentAccount(requestParameters.backUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tells a client which currency the portal is billed in: the default currency of the portal region always comes  first, followed by the currency resolved for the current request when that one differs, so the answer holds  one or two items. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Each item carries the country code of the region, the currency symbol and the  native name of the currency; the first item is the currency the amounts from  `GET api/2.0/portal/payment/prices` are expressed in. These are the currencies of the subscription prices, and  they are not the accounting currencies the wallet is topped up in - those come with the balance in  `GET api/2.0/portal/payment/customer/balance`.
     * @summary Get the billing currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentCurrencies(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentCurrencies(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the quotas the portal can be put on - the paid plans and the wallet services - each with its price, its  features and the limits it grants, which is what a pricing page is built from. Nothing has to be called first,  the caller needs the permission to edit the portal settings, and the call is read-only. Only quotas marked  visible are listed, newest first, and the two optional filters narrow that: `wallet` selects the wallet  services (`true`) or the subscription plans (`false`), `additional` selects the add-ons to a plan (`true`) or  the plans themselves (`false`), and an omitted filter keeps both kinds. A portal on a non-profit quota is a  special case - asking for `additional=false` returns that single quota and nothing else, because no other plan  may be bought for it. The quota the portal is actually on is not marked here; read it from  `GET api/2.0/portal/payment/quota`.
     * @summary Get the purchasable quotas
     * @param {PortalPaymentApiGetPaymentQuotasRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPaymentQuotas(requestParameters: PaymentApiGetPaymentQuotasRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPaymentQuotas(requestParameters.wallet, requestParameters.additional, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the purchase of a monthly paid plan for this portal by handing back the hosted checkout page the buyer  has to open; nothing is bought until that page is completed. The portal must have no paid plan yet - a portal  whose plan is already paid gets an empty result and changes its subscription through  `PUT api/2.0/portal/payment/update` instead - and the product name in `quantity` must be one of the monthly,  non-wallet plans listed by `GET api/2.0/portal/payment/quotas`. Only a DocSpace administrator may call it. The  call itself changes nothing on the portal and may be repeated: the money is taken by the payment provider on  the checkout page, and the plan becomes active once the provider confirms it. The returned URL is absolute and  single-purpose - it carries the caller\'s e-mail, the language of the request and the currency of the request  region, and it redirects to `successUrl` or `backUrl` when the buyer finishes or cancels. Exactly one product  per call is accepted and its quantity has to be greater than zero; yearly and wallet products are refused, and  wallet services are bought with `PUT api/2.0/portal/payment/updatewallet` instead.
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
     * Lists what one unit of every purchasable product costs, keyed by the product name that `quantity` takes in the  purchase operations, so a client can price a plan or a wallet service without reading the whole quota list.  Nothing has to be called first, and the caller needs the permission to edit the portal settings, which portal  administrators and the owner have. The call is read-only. Prices are given in the one currency resolved for  this request from the portal region, which `GET api/2.0/portal/payment/currencies` reports; a product with no  price in that currency comes back as `0` rather than being left out, so a zero means unpriced and not free.  The list covers the products on offer, not the portal\'s own plan - the plan in force, with its limits and its  usage, is `GET api/2.0/portal/payment/quota`.
     * @summary Get the product prices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getPortalPrices(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getPortalPrices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the quota the portal is on - its paid plan or the free one - with the limits its features grant and how  much of each is already used. Any signed-in member except a guest may call it. The call is read-only; the plan  comes from the cache, and `refresh=true` re-reads it from the billing service, a remote call meant for right  after a purchase. The answer is trimmed to the caller\'s user type: a DocSpace administrator or the owner gets  the price, the due date and all features, a room administrator only the `manager`, `room`, `total_size` and  `statistic` features, and a user only `total_size`. For both of the latter `price` is an empty object and  `dueDate` is omitted, while the storage quota settings (`usersQuota`, `roomsQuota`, `aiAgentsQuota`,  `tenantCustomQuota`) come back as for an administrator. The quotas that could be bought instead are  `GET api/2.0/portal/payment/quotas`. A guest is refused with 403.
     * @summary Get the current plan and limits
     * @param {PortalPaymentApiGetQuotaPaymentInformationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getQuotaPaymentInformation(requestParameters: PaymentApiGetQuotaPaymentInformationRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getQuotaPaymentInformation(requestParameters.refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the AI chat models that are barred on this portal - the ones no user of it may pick for a  conversation, whatever the price list offers. Only a DocSpace administrator may read it, and the call is  read-only. When the installation has no billing service or AI is not enabled for the portal, the answer is an  empty set instead of an error, which is indistinguishable from a portal that restricts nothing. An empty  `models` therefore means every model in `GET api/2.0/portal/payment/ai-prices` may be used. The set names the  barred models and not the allowed ones; replace it with `PUT api/2.0/portal/payment/ai-model/restrictions`.
     * @summary Get restricted AI models
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getRestrictedAiModels(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getRestrictedAiModels(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one spending limit on the AI services of the portal by its ID - the limit of the portal as a whole, the  one for every user, or a personal one. Only a DocSpace administrator may read it, an installation without a  billing service answers 403, and the call is read-only. The limit comes back with its scope, thresholds, their  currency and unit, the period and whether it is in force, but without its spending: that comes with  `GET api/2.0/portal/payment/servicelimit/total` for the portal and with  `GET api/2.0/portal/payment/servicelimit/participants` for each user. A portal with no billing customer, and an  ID that does not exist, belongs to another portal or is not a limit on the AI services, answer 404.
     * @summary Get a service limit
     * @param {PortalPaymentApiGetServiceLimitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getServiceLimit(requestParameters: PaymentApiGetServiceLimitRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getServiceLimit(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports in money how much of the portal\'s paid subscription period is still unused - the credit that  `POST api/2.0/portal/payment/subscription/movetowallet` would carry over to the wallet if the subscription  were ended now. The portal must have a billing customer and a plan in the paid state; a plan that is not paid  answers 402, and a paid plan without a subscription row gives 404. Only the payer - the portal user whose  e-mail is the billing customer\'s e-mail - may read it, and the call is read-only. The answer states the total  cost of the current period with its currency, the start and the end of that period in UTC, the moment the  unused part is measured up to, the days already elapsed, and the remaining balance both in the subscription  currency and converted to the wallet currency. Every figure is computed for the instant of the request, so it  changes between calls.
     * @summary Get the subscription balance information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getSubscriptionBalanceInfo(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getSubscriptionBalanceInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns which wallet services an administrator has switched on for this portal by hand, as opposed to the ones  its plan pays for. Only a DocSpace administrator may read it, an installation without a billing service  answers 403, no billing customer is needed, and the call is read-only. `enabledServices` holds the names of  those services and is empty when none was switched on. This is the stored setting and not the state of the  portal: a service the plan brings with it is active without appearing here, so the honest answer to what is  running is `GET api/2.0/portal/payment/activeservices`. One entry is changed with  `POST api/2.0/portal/payment/servicestate`.
     * @summary Get the wallet service settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getTenantWalletServiceSettings(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getTenantWalletServiceSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal\'s automatic wallet top-up settings - whether it is on, the balance that triggers a  charge, the balance it is topped up to, and the currency both are expressed in. Any DocSpace  administrator may read them, and unlike the operation that changes them this one needs neither a  billing customer nor a configured billing service, so it answers on a portal that has never paid for  anything. It is read-only and changes nothing.  A portal that has never configured top-up gets the defaults rather than an empty result: `enabled` is  false, `currency` is null, and `minBalance` and `upToBalance` are 0. Those two zeros are outside the  ranges `POST api/2.0/portal/payment/topupsettings` accepts - 5 to 1000 and 6 to 5000 - so the answer  cannot be sent straight back to it; supply real values instead. `lastModified` is  `0001-01-01T00:00:00` until the settings are stored for the first time.  `lowBalanceThreshold` and `lowBalanceNotified` are maintained by the portal itself: they are reported  here, but cannot be written.
     * @summary Get the auto top-up settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getTenantWalletSettings(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getTenantWalletSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the spending limit on the AI services for the portal as a whole - the ceiling the spending of every user  counts towards - together with what was spent against it in the current period and what is left. Only a  DocSpace administrator may read it, an installation without a billing service answers 403, and the call is  read-only. The limit is checked in addition to the limits  of the users, so a user can be stopped by it before reaching their own. The spending includes the expected cost  of AI operations still in progress. When no such limit has been set, or it was deleted, the answer is 200 with a  null `response`; create the limit with `POST api/2.0/portal/payment/servicelimit` and the scope `Total`. A  switched-off limit is still returned, with `enabled` false. A portal with no billing customer answers 404.
     * @summary Get the portal service limit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getTotalServiceLimit(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getTotalServiceLimit(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one wallet service by name, for a client that already knows which service it needs and does not want  the whole catalogue. `service` is the name of the service - `Storage`, `Backup`, `AITools`, `Admin`,  `DocsCloud`, `DocsCloudDevPack` or `AISearch` - and a name this installation does not sell answers 404.  Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is  read-only. The answer has the same shape as one item of `GET api/2.0/portal/payment/walletservices` - the  price of a unit, the unit, the limits the service grants and its service name - except that the variants of a  service are not grouped into `innerServices` here, because a single service is looked up directly. The price  is in the currency resolved for the request.
     * @summary Get a wallet service
     * @param {PortalPaymentApiGetWalletServiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getWalletService(requestParameters: PaymentApiGetWalletServiceRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getWalletService(requestParameters.service, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists every service the portal may pay for out of its wallet - extra administrators, disk storage, backup, AI  tools, AI search and Docs Connect - with the price of a unit, the unit it is sold in and whether the portal has  it switched on. Nothing has to be called first, the caller needs the permission to edit the portal settings,  and the call is read-only. Services that are variants of one another are folded together: the visible one  carries the rest in its `innerServices`, so a client renders one card per group. The AI services are left out  entirely when AI is not enabled for the portal. This is the catalogue and not the state of the portal - what  is actually running is `GET api/2.0/portal/payment/activeservices`, one service on its own is  `GET api/2.0/portal/payment/walletservice`, and switching one on or off is  `POST api/2.0/portal/payment/servicestate`.
     * @summary Get wallet services
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public getWalletServices(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).getWalletServices(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Ends the portal\'s paid subscription and moves it onto the wallet: the unused balance of the running period is  credited to the wallet, the wallet is topped up from the payment method on file if that credit does not cover  the purchase, and the requested number of administrators is then bought as a wallet service. The portal needs  a billing customer with a payment method set and a plan in the paid state, `quantity` has to name the  administrators wallet product, and the number asked for may not be below the administrators the portal already  has - read the credit that will be carried over from `GET api/2.0/portal/payment/subscription/balance` first.  Only the payer may call it. The call is mutating, spends money and cannot be undone: the subscription is ended  before the purchase is attempted, so a failure in the second half leaves the portal on the wallet with the  money credited but the administrators unbought, and a repeat would then buy them a second time. It is limited  to ten requests a minute per user by default. The result is `true` when the administrators were bought.
     * @summary Move the subscription to the wallet
     * @param {PortalPaymentApiMoveSubscriptionToWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public moveSubscriptionToWallet(requestParameters: PaymentApiMoveSubscriptionToWalletRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).moveSubscriptionToWallet(requestParameters.quantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the portal\'s message to the ONLYOFFICE sales team - the contact-sales form behind a request for a quote,  an invoice or a plan that cannot be bought online. `email` has to be a well-formed address and is where the  answer will go, while `userName` and `message` say who is asking and what for; all three are required and none  may be empty. Only a DocSpace administrator may call it. Nothing on the portal changes: no plan, no quota and  no payment is touched, a message is mailed out and the request is written to the portal audit trail. There is  no response body - status 200 means the message was handed to the mail service - and the call is not  idempotent, so a repeat sends a second message. It is limited to ten requests a minute per user by default and  answers 429 above that.
     * @summary Contact the sales team
     * @param {PortalPaymentApiSendPaymentRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public sendPaymentRequest(requestParameters: PaymentApiSendPaymentRequestRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).sendPaymentRequest(requestParameters.salesRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the same personal spending limit on the AI services for each of the listed portal users in one call,  replacing the personal limit any of them already has and switching it on, so it is how a ceiling is rolled out  to a group of users. The portal needs a billing customer, and the caller needs the permission to edit the portal  settings as well as DocSpace administrator rights. At least one of `amountValue` and `quantityValue` must be  given, every user in `userIds` must exist on the portal, and a user listed twice is limited once. One call takes  at most 1000 users; split a larger group into several calls. Unlike  `PUT api/2.0/portal/payment/servicelimit`, this sets the whole limit: a threshold left out is removed, and the  period may change, though a lifetime limit set to lifetime again keeps counting from where it was. Each personal  limit applies instead of the one for every user, and the limit of the portal is checked on top. The call is mutating and idempotent, and it is written to the portal audit trail. The answer is  the number of personal limits that were set; the result is listed by  `GET api/2.0/portal/payment/servicelimit/participants`.
     * @summary Set the user service limits
     * @param {PortalPaymentApiSetParticipantServiceLimitsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public setParticipantServiceLimits(requestParameters: PaymentApiSetParticipantServiceLimitsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).setParticipantServiceLimits(requestParameters.setParticipantServiceLimitsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the whole set of AI chat models barred on this portal: the body is the complete set that is to hold,  so adding one restriction means sending the new model together with the ones already restricted, lifting one  means leaving it out, and an empty set lifts them all. Read the current set from  `GET api/2.0/portal/payment/ai-model/restrictions` and the model identifiers from  `GET api/2.0/portal/payment/ai-prices` before calling. The installation needs a billing service and the AI  gateway configured, the portal needs a billing customer and the AI tools wallet service switched on with  `POST api/2.0/portal/payment/servicestate`, and the caller needs the permission to edit the portal settings as  well as DocSpace administrator rights. The call is mutating and idempotent - sending the same set twice leaves  the same state - and it is written to the portal audit trail. It takes effect on the next AI request, so a  conversation already open on a model that has just been barred cannot go on with it. The stored set comes  back in the answer. While AI tools is off the call is refused with 403 instead of being stored, because the  read reports an empty set then and nothing written could be read back.
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
     * Switches the portal\'s automatic wallet top-up on or off and sets its thresholds: while it is on, the payment  method on file is charged whenever the wallet balance falls below `minBalance`, enough to bring it up to  `upToBalance`, in `currency`. The portal needs a billing customer whose wallet balance exists - a portal that  has never had one answers 404, so top the wallet up once with `POST api/2.0/portal/payment/deposit` first -  and only the payer may change the settings. The body replaces the stored settings as a whole and an omitted  body resets them to the defaults; `minBalance` is accepted between 5 and 1000 and `upToBalance` between 6 and  5000, and `upToBalance` has to be greater than `minBalance`, so that a top-up lifts the wallet above the balance  that triggers it. The low-balance warning state (`lowBalanceThreshold`, `lowBalanceNotified`) and `lastModified` may be  sent for compatibility but are ignored: the portal keeps the values it had. The call is mutating and  idempotent, it charges nothing by itself, it is written to the portal audit trail, and switching the top-up on also re-arms the low-balance warning. The settings as they were stored come  back in the answer.
     * @summary Set the auto top-up settings
     * @param {PortalPaymentApiSetTenantWalletSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public setTenantWalletSettings(requestParameters: PaymentApiSetTenantWalletSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).setTenantWalletSettings(requestParameters.tenantWalletSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stops the `xlsx` monthly usage report this user has running and drops its task, for a report that was started  for the wrong period or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/monthly/report` can still answer for a moment afterwards. The call  is safe to repeat and does nothing at all when this user has no such report running: there is no response  body, and status 200 says the stop was requested, not that a report was really stopped. It leaves the  operations and service usage reports alone, and a report that had already finished keeps its file in My  documents.
     * @summary Terminate the monthly usage report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public terminateCustomerMonthlyUsageReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).terminateCustomerMonthlyUsageReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stops the `xlsx` wallet operations report this user has running and drops its task, for a report that was  started with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has  to be a DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/operationsreport` can still answer for a moment afterwards. The call is  safe to repeat and does nothing at all when this user has no report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. A report that had already  finished keeps its file in My documents - nothing is deleted from there.
     * @summary Terminate the operations report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public terminateCustomerOperationsReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).terminateCustomerOperationsReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stops the `xlsx` service usage report this user has running and drops its task, for a report that was started  with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has to be a  DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so  `GET api/2.0/portal/payment/customer/usage/report` can still answer for a moment afterwards. The call is safe  to repeat and does nothing at all when this user has no such report running: there is no response body, and  status 200 says the stop was requested, not that a report was really stopped. It leaves the operations and  monthly usage reports alone, and a report that had already finished keeps its file in My documents.
     * @summary Terminate the service usage report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public terminateCustomerServiceUsageReport(options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).terminateCustomerServiceUsageReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Charges the payment method on file and adds the amount to the portal\'s wallet, the balance every wallet  service is paid from. The portal needs a billing customer with a payment method set - attach one with  `GET api/2.0/portal/payment/checkoutsetupurl` - `currency` has to be one of the accounting currencies this  installation supports, and `amount` is a whole number of currency units between 1 and 999999. Only the payer  may call it. The call takes money and is not idempotent in any way: two identical requests charge twice, so a  client must not retry it blindly after a timeout, and it is limited to ten requests a minute per user by  default. A successful top-up pushes the new balance to the portal clients over their socket connection and  re-arms the low-balance notification. The result is `true` when the payment provider accepted the charge; read  the resulting balance back from `GET api/2.0/portal/payment/customer/balance`.
     * @summary Top up the wallet
     * @param {PortalPaymentApiTopUpDepositRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public topUpDeposit(requestParameters: PaymentApiTopUpDepositRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).topUpDeposit(requestParameters.topUpDepositRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes how many units of the plan the portal is paying for - the number of administrators it covers - and  lets the payment provider bill the difference against the payment method already on file. The portal must have  a billing customer and a plan bought through `PUT api/2.0/portal/payment/url`, and while the portal is on a  priced plan the product name in `quantity` has to be that same plan, which `GET api/2.0/portal/payment/quota`  reports, because a subscription is changed here and not swapped. Only the payer - the portal user whose e-mail  is the billing customer\'s e-mail - may call it. The call is mutating and charges money, and it is guarded  against a double submission: once the new quantity is in effect, repeating the same request fails with 400  because that quantity is already set. The result is `true` when the provider accepted the change and `false`  when it declined it without an error. Exactly one product per call is accepted, the operation is limited to  ten requests a minute per user by default and answers 429 above that, and wallet services are not bought here  - use `PUT api/2.0/portal/payment/updatewallet` for those.
     * @summary Change the subscription quantity
     * @param {PortalPaymentApiUpdatePaymentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public updatePayment(requestParameters: PaymentApiUpdatePaymentRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).updatePayment(requestParameters.quantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the thresholds of an existing spending limit on the AI services, or switches it off and back on with  `enabled`. The portal needs a billing customer, and the caller needs the permission to edit the portal settings  as well as DocSpace administrator rights. Only the given fields change: an omitted threshold keeps its value, so  a threshold once set cannot be removed here - delete the limit with  `DELETE api/2.0/portal/payment/servicelimit/{id}` and create it anew with  `POST api/2.0/portal/payment/servicelimit`, which is also the way to change its scope, user or period. A  switched-off limit stops restricting the AI services at once. The call is mutating and idempotent, it is written  to the portal audit trail, and a new threshold applies from the very next operation; lowering it below what was  already spent blocks the AI services until the period ends. An ID that does not exist, belongs to another portal  or is not a limit on the AI services answers 404.
     * @summary Update a service limit
     * @param {PortalPaymentApiUpdateServiceLimitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public updateServiceLimit(requestParameters: PaymentApiUpdateServiceLimitRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).updateServiceLimit(requestParameters.updateServiceLimitRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Buys more units of a wallet service - extra administrators, disk storage, backup, AI tools, AI search or  Docs Connect - or writes down the quantity that service will have after the next renewal, depending on  `productQuantityType`. With `Add` (1) the units are bought at once and paid out of the portal wallet, so the  wallet needs a sub-account in the accounting currency and enough money on it; with `Set` (0) nothing is  charged now and the quantity only takes effect in the next period, where an empty or zero quantity cancels a  change scheduled earlier. `Renew` and `Sub` are not accepted here. The portal needs a billing customer and the  caller has to be a DocSpace administrator; a service that is an add-on to the plan also needs the plan itself  to be paid, otherwise the answer is 402. Minimum quantities apply - disk storage starts at 100 units, the  Docs Connect Dev Pack at 10, and the administrators may not be fewer than the portal already has - and in  the `Add` form they are checked only while the portal does not hold that service yet. Asking for the Docs Connect  plan in the `Set` form while Docs Connect Dev Pack is active schedules the reversion to it at the next period,  while the upgrade in the other direction is not done here at all: use  `POST api/2.0/settings/docscloud/switchtodevpack`. The result is `true` when the change was accepted; the call  is mutating, spends money in its `Add` form and is limited to ten requests a minute per user by default. Price  the same purchase without paying for it with `PUT api/2.0/portal/payment/calculatewallet`.
     * @summary Change a wallet service quantity
     * @param {PortalPaymentApiUpdateWalletPaymentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public updateWalletPayment(requestParameters: PaymentApiUpdateWalletPaymentRequest = {}, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).updateWalletPayment(requestParameters.walletQuantityRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

