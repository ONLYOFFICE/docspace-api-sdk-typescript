# PaymentApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateWalletPayment**](#calculatewalletpayment) | **PUT** /api/2.0/portal/payment/calculatewallet | Calculate amount of the wallet payment|
|[**changeTenantWalletServiceState**](#changetenantwalletservicestate) | **POST** /api/2.0/portal/payment/servicestate | Change wallet service state|
|[**createCustomerOperationsReport**](#createcustomeroperationsreport) | **POST** /api/2.0/portal/payment/customer/operationsreport | Start generating the customer operations report|
|[**getCheckoutSetupUrl**](#getcheckoutsetupurl) | **GET** /api/2.0/portal/payment/chechoutsetupurl | Get the checkout setup page URL|
|[**getCustomerBalance**](#getcustomerbalance) | **GET** /api/2.0/portal/payment/customer/balance | Get the customer balance|
|[**getCustomerInfo**](#getcustomerinfo) | **GET** /api/2.0/portal/payment/customerinfo | Get the customer info|
|[**getCustomerOperations**](#getcustomeroperations) | **GET** /api/2.0/portal/payment/customer/operations | Get the customer operations|
|[**getCustomerOperationsReport**](#getcustomeroperationsreport) | **GET** /api/2.0/portal/payment/customer/operationsreport | Get the status of generating a customer operations report|
|[**getPaymentAccount**](#getpaymentaccount) | **GET** /api/2.0/portal/payment/account | Get the payment account|
|[**getPaymentCurrencies**](#getpaymentcurrencies) | **GET** /api/2.0/portal/payment/currencies | Get currencies|
|[**getPaymentQuotas**](#getpaymentquotas) | **GET** /api/2.0/portal/payment/quotas | Get quotas|
|[**getPaymentUrl**](#getpaymenturl) | **PUT** /api/2.0/portal/payment/url | Get the payment page URL|
|[**getPortalPrices**](#getportalprices) | **GET** /api/2.0/portal/payment/prices | Get prices|
|[**getQuotaPaymentInformation**](#getquotapaymentinformation) | **GET** /api/2.0/portal/payment/quota | Get quota payment information|
|[**getTenantWalletServiceSettings**](#gettenantwalletservicesettings) | **GET** /api/2.0/portal/payment/servicessettings | Get wallet services settings|
|[**getTenantWalletSettings**](#gettenantwalletsettings) | **GET** /api/2.0/portal/payment/topupsettings | Get wallet auto top up settings|
|[**getWalletService**](#getwalletservice) | **GET** /api/2.0/portal/payment/walletservice | Get wallet service|
|[**getWalletServices**](#getwalletservices) | **GET** /api/2.0/portal/payment/walletservices | Get wallet services|
|[**sendPaymentRequest**](#sendpaymentrequest) | **POST** /api/2.0/portal/payment/request | Send a payment request|
|[**setTenantWalletSettings**](#settenantwalletsettings) | **POST** /api/2.0/portal/payment/topupsettings | Set wallet auto top up settings|
|[**terminateCustomerOperationsReport**](#terminatecustomeroperationsreport) | **DELETE** /api/2.0/portal/payment/customer/operationsreport | Terminate the generating a customer operations report|
|[**topUpDeposit**](#topupdeposit) | **POST** /api/2.0/portal/payment/deposit | Put money on deposit|
|[**updatePayment**](#updatepayment) | **PUT** /api/2.0/portal/payment/update | Update the payment quantity|
|[**updateWalletPayment**](#updatewalletpayment) | **PUT** /api/2.0/portal/payment/updatewallet | Update the wallet payment quantity|

# **calculateWalletPayment**
> PaymentCalculationWrapper calculateWalletPayment()

Calculate amount of the wallet payment with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-wallet-payment/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletQuantityRequestDto** | **WalletQuantityRequestDto**|  | |


### Return type

**PaymentCalculationWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    WalletQuantityRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let walletQuantityRequestDto: WalletQuantityRequestDto; // (optional)

const { status, data } = await apiInstance.calculateWalletPayment(
    walletQuantityRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment calculation |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeTenantWalletServiceState**
> TenantWalletServiceSettingsWrapper changeTenantWalletServiceState()

Change wallet service state.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-tenant-wallet-service-state/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeWalletServiceStateRequestDto** | **ChangeWalletServiceStateRequestDto**|  | |


### Return type

**TenantWalletServiceSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    ChangeWalletServiceStateRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let changeWalletServiceStateRequestDto: ChangeWalletServiceStateRequestDto; // (optional)

const { status, data } = await apiInstance.changeTenantWalletServiceState(
    changeWalletServiceStateRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The wallet service settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCustomerOperationsReport**
> DocumentBuilderTaskWrapper createCustomerOperationsReport()

Start generating the customer operations report as xlsx file and save in Documents.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-customer-operations-report/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOperationsReportRequestDto** | **CustomerOperationsReportRequestDto**|  | |


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    CustomerOperationsReportRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let customerOperationsReportRequestDto: CustomerOperationsReportRequestDto; // (optional)

const { status, data } = await apiInstance.createCustomerOperationsReport(
    customerOperationsReportRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCheckoutSetupUrl**
> StringWrapper getCheckoutSetupUrl()

Returns the URL to the checkout setup page.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-checkout-setup-url/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backUrl** | [**string**] | Back URL | (optional) defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let backUrl: string; //Back URL (optional) (default to undefined)

const { status, data } = await apiInstance.getCheckoutSetupUrl(
    backUrl
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The URL to the checkout setup page |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerBalance**
> BalanceWrapper getCustomerBalance()

Returns the customer balance from the accounting service.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-balance/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] | Specifies whether to refresh the payment information cache or not. | (optional) defaults to undefined|


### Return type

**BalanceWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let refresh: boolean; //Specifies whether to refresh the payment information cache or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomerBalance(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The customer balance |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerInfo**
> CustomerInfoWrapper getCustomerInfo()

Returns the customer info.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] | Specifies whether to refresh the payment information cache or not. | (optional) defaults to undefined|


### Return type

**CustomerInfoWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let refresh: boolean; //Specifies whether to refresh the payment information cache or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomerInfo(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The customer info |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerOperations**
> ReportWrapper getCustomerOperations()

Returns the report of customer operations from the accounting service.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] | Start date | (optional) defaults to undefined|
| **endDate** | [**string**] | End date | (optional) defaults to undefined|
| **participantName** | [**string**] | Participant name | (optional) defaults to undefined|
| **credit** | [**boolean**] | Include credit operations (true by default) | (optional) defaults to undefined|
| **debit** | [**boolean**] | Include debit operations (true by default) | (optional) defaults to undefined|
| **offset** | [**number**] | Offset (0 by default) | (optional) defaults to undefined|
| **limit** | [**number**] | Limit (25 by default) | (optional) defaults to undefined|


### Return type

**ReportWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let startDate: string; //Start date (optional) (default to undefined)
let endDate: string; //End date (optional) (default to undefined)
let participantName: string; //Participant name (optional) (default to undefined)
let credit: boolean; //Include credit operations (true by default) (optional) (default to undefined)
let debit: boolean; //Include debit operations (true by default) (optional) (default to undefined)
let offset: number; //Offset (0 by default) (optional) (default to undefined)
let limit: number; //Limit (25 by default) (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomerOperations(
    startDate,
    endDate,
    participantName,
    credit,
    debit,
    offset,
    limit
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The customer operations |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerOperationsReport**
> DocumentBuilderTaskWrapper getCustomerOperationsReport()

Get the status of generating a customer operations report.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-customer-operations-report/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getCustomerOperationsReport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentAccount**
> StringWrapper getPaymentAccount()

Returns the URL to the payment account.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-account/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backUrl** | [**string**] | The URL where the user will be redirected after payment processing. | (optional) defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let backUrl: string; //The URL where the user will be redirected after payment processing. (optional) (default to undefined)

const { status, data } = await apiInstance.getPaymentAccount(
    backUrl
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The URL to the payment account |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentCurrencies**
> CurrenciesArrayWrapper getPaymentCurrencies()

Returns the available portal currencies.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-currencies/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CurrenciesArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getPaymentCurrencies();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available portal currencies |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentQuotas**
> QuotaArrayWrapper getPaymentQuotas()

Returns the available portal quotas.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-quotas/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wallet** | [**boolean**] | Get wallet quotas only | (optional) defaults to undefined|


### Return type

**QuotaArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let wallet: boolean; //Get wallet quotas only (optional) (default to undefined)

const { status, data } = await apiInstance.getPaymentQuotas(
    wallet
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available portal quotas |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentUrl**
> StringWrapper getPaymentUrl()

Returns the URL to the payment page.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-url/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentUrlRequestsDto** | **PaymentUrlRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    PaymentUrlRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let paymentUrlRequestsDto: PaymentUrlRequestsDto; // (optional)

const { status, data } = await apiInstance.getPaymentUrl(
    paymentUrlRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The URL to the payment page |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPortalPrices**
> UnknownWrapper getPortalPrices()

Returns the available portal prices.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-prices/).

### Parameters
This endpoint does not have any parameters.


### Return type

**UnknownWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getPortalPrices();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available portal prices |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getQuotaPaymentInformation**
> QuotaWrapper getQuotaPaymentInformation()

Returns the payment information about the current portal quota.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-quota-payment-information/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] | Specifies whether to refresh the payment information cache or not. | (optional) defaults to undefined|


### Return type

**QuotaWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let refresh: boolean; //Specifies whether to refresh the payment information cache or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getQuotaPaymentInformation(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment information about the current portal quota |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantWalletServiceSettings**
> TenantWalletServiceSettingsWrapper getTenantWalletServiceSettings()

Get the wallet services settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-service-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantWalletServiceSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getTenantWalletServiceSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The wallet services settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantWalletSettings**
> TenantWalletSettingsWrapper getTenantWalletSettings()

Returns the wallet auto top up settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-wallet-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantWalletSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getTenantWalletSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The wallet auto top up settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWalletService**
> QuotaWrapper getWalletService()

Returns the wallet services.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-service/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **service** | **TenantWalletService** | Wallet service | defaults to undefined|


### Return type

**QuotaWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let service: TenantWalletService; //Wallet service (default to undefined)

const { status, data } = await apiInstance.getWalletService(
    service
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Wallet service |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWalletServices**
> QuotaArrayWrapper getWalletServices()

Returns the available wallet services.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-wallet-services/).

### Parameters
This endpoint does not have any parameters.


### Return type

**QuotaArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getWalletServices();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available wallet services |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendPaymentRequest**
> sendPaymentRequest()

Sends a request for the portal payment.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-payment-request/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **salesRequestsDto** | **SalesRequestsDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    SalesRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let salesRequestsDto: SalesRequestsDto; // (optional)

const { status, data } = await apiInstance.sendPaymentRequest(
    salesRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Incorrect email or message text is empty |  -  |
|**401** | Unauthorized |  -  |
|**429** | Request limit is exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setTenantWalletSettings**
> TenantWalletSettingsWrapper setTenantWalletSettings()

Set the wallet auto top up settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-wallet-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantWalletSettingsWrapper** | **TenantWalletSettingsWrapper**|  | |


### Return type

**TenantWalletSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    TenantWalletSettingsWrapper
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let tenantWalletSettingsWrapper: TenantWalletSettingsWrapper; // (optional)

const { status, data } = await apiInstance.setTenantWalletSettings(
    tenantWalletSettingsWrapper
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The wallet auto top up settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateCustomerOperationsReport**
> terminateCustomerOperationsReport()

Terminates the generating a customer operations report.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-customer-operations-report/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.terminateCustomerOperationsReport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topUpDeposit**
> BooleanWrapper topUpDeposit()

Returns result of putting money on deposit.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/top-up-deposit/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **topUpDepositRequestDto** | **TopUpDepositRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    TopUpDepositRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let topUpDepositRequestDto: TopUpDepositRequestDto; // (optional)

const { status, data } = await apiInstance.topUpDeposit(
    topUpDepositRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePayment**
> BooleanWrapper updatePayment()

Updates the payment quantity with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-payment/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **quantityRequestDto** | **QuantityRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    QuantityRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let quantityRequestDto: QuantityRequestDto; // (optional)

const { status, data } = await apiInstance.updatePayment(
    quantityRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWalletPayment**
> BooleanWrapper updateWalletPayment()

Updates the wallet payment quantity with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-wallet-payment/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletQuantityRequestDto** | **WalletQuantityRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    WalletQuantityRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let walletQuantityRequestDto: WalletQuantityRequestDto; // (optional)

const { status, data } = await apiInstance.updateWalletPayment(
    walletQuantityRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

