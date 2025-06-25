# PortalPaymentApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCurrencies**](#getcurrencies) | **GET** /api/2.0/portal/payment/currencies | Get currencies|
|[**getPaymentAccount**](#getpaymentaccount) | **GET** /api/2.0/portal/payment/account | Get the payment account|
|[**getPaymentUrl**](#getpaymenturl) | **PUT** /api/2.0/portal/payment/url | Get the payment page URL|
|[**getPrices**](#getprices) | **GET** /api/2.0/portal/payment/prices | Get prices|
|[**getQuota**](#getquota) | **GET** /api/2.0/portal/payment/quota | Get quota payment information|
|[**getQuotas**](#getquotas) | **GET** /api/2.0/portal/payment/quotas | Get quotas|
|[**paymentUpdate**](#paymentupdate) | **PUT** /api/2.0/portal/payment/update | Update the payment quantity|
|[**sendSalesRequest**](#sendsalesrequest) | **POST** /api/2.0/portal/payment/request | Send a payment request|

# **getCurrencies**
> CurrenciesArrayWrapper getCurrencies()

Returns the available portal currencies.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getCurrencies();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CurrenciesArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available portal currencies |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentAccount**
> StringWrapper getPaymentAccount()

Returns the URL to the payment account.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let backUrl: string; //The URL where the user will be redirected after payment processing. (optional) (default to undefined)

const { status, data } = await apiInstance.getPaymentAccount(
    backUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backUrl** | [**string**] | The URL where the user will be redirected after payment processing. | (optional) defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The URL to the payment account |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentUrl**
> StringWrapper getPaymentUrl()

Returns the URL to the payment page.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    PaymentUrlRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let paymentUrlRequestsDto: PaymentUrlRequestsDto; // (optional)

const { status, data } = await apiInstance.getPaymentUrl(
    paymentUrlRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentUrlRequestsDto** | **PaymentUrlRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The URL to the payment page |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPrices**
> ObjectWrapper getPrices()

Returns the available portal prices.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getPrices();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available portal prices |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getQuota**
> QuotaWrapper getQuota()

Returns the payment information about the current portal quota.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let refresh: boolean; //Specifies whether to refresh the payment information cache or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getQuota(
    refresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] | Specifies whether to refresh the payment information cache or not. | (optional) defaults to undefined|


### Return type

**QuotaWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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

# **getQuotas**
> QuotaArrayWrapper getQuotas()

Returns the available portal quotas.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

const { status, data } = await apiInstance.getQuotas();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**QuotaArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available portal quotas |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentUpdate**
> BooleanWrapper paymentUpdate()

Updates the payment quantity with the parameters specified in the request.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    QuantityRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let quantityRequestDto: QuantityRequestDto; // (optional)

const { status, data } = await apiInstance.paymentUpdate(
    quantityRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **quantityRequestDto** | **QuantityRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendSalesRequest**
> sendSalesRequest()

Sends a request for the portal payment.

### Example

```typescript
import {
    PortalPaymentApi,
    Configuration,
    SalesRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalPaymentApi(configuration);

let salesRequestsDto: SalesRequestsDto; // (optional)

const { status, data } = await apiInstance.sendSalesRequest(
    salesRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **salesRequestsDto** | **SalesRequestsDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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

