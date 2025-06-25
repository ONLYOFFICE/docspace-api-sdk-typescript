# AuthenticationApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authenticateMe**](#authenticateme) | **POST** /api/2.0/authentication | Authenticate a user|
|[**authenticateMeFromBodyWithCode**](#authenticatemefrombodywithcode) | **POST** /api/2.0/authentication/{code} | Authenticate a user by code|
|[**checkConfirm**](#checkconfirm) | **POST** /api/2.0/authentication/confirm | Open confirmation email URL|
|[**getIsAuthentificated**](#getisauthentificated) | **GET** /api/2.0/authentication | Check authentication|
|[**logout**](#logout) | **POST** /api/2.0/authentication/logout | Log out|
|[**saveMobilePhone**](#savemobilephone) | **POST** /api/2.0/authentication/setphone | Set a mobile phone|
|[**sendSmsCode**](#sendsmscode) | **POST** /api/2.0/authentication/sendsms | Send SMS code|

# **authenticateMe**
> AuthenticationTokenWrapper authenticateMe()

Authenticates the current user by SMS, authenticator app, or without two-factor authentication.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    AuthRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let authRequestsDto: AuthRequestsDto; // (optional)

const { status, data } = await apiInstance.authenticateMe(
    authRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRequestsDto** | **AuthRequestsDto**|  | |


### Return type

**AuthenticationTokenWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authentication data |  -  |
|**400** | userName, password or passworHash is empty |  -  |
|**401** | User authentication failed |  -  |
|**404** | The user could not be found |  -  |
|**429** | Too many login attempts. Please try again later |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticateMeFromBodyWithCode**
> AuthenticationTokenWrapper authenticateMeFromBodyWithCode()

Authenticates the current user by SMS or two-factor authentication code.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    AuthRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let code: string; // (default to undefined)
let authRequestsDto: AuthRequestsDto; // (optional)

const { status, data } = await apiInstance.authenticateMeFromBodyWithCode(
    code,
    authRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRequestsDto** | **AuthRequestsDto**|  | |
| **code** | [**string**] |  | defaults to undefined|


### Return type

**AuthenticationTokenWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authentication data |  -  |
|**400** | userName, password or passworHash is empty |  -  |
|**401** | User authentication failed |  -  |
|**403** | Auth code is not available |  -  |
|**429** | Too many login attempts. Please try again later |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkConfirm**
> ConfirmWrapper checkConfirm()

Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    EmailValidationKeyModel
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let emailValidationKeyModel: EmailValidationKeyModel; // (optional)

const { status, data } = await apiInstance.checkConfirm(
    emailValidationKeyModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailValidationKeyModel** | **EmailValidationKeyModel**|  | |


### Return type

**ConfirmWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Validation result: Ok, Invalid, or Expired |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIsAuthentificated**
> BooleanWrapper getIsAuthentificated()

Checks if the current user is authenticated or not.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.getIsAuthentificated();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the current user is authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> StringWrapper logout()

Logs out of the current user account.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.logout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StringWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveMobilePhone**
> AuthenticationTokenWrapper saveMobilePhone()

Sets a mobile phone for the current user.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    MobileRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let mobileRequestsDto: MobileRequestsDto; // (optional)

const { status, data } = await apiInstance.saveMobilePhone(
    mobileRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mobileRequestsDto** | **MobileRequestsDto**|  | |


### Return type

**AuthenticationTokenWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authentication data |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendSmsCode**
> AuthenticationTokenWrapper sendSmsCode()

Sends SMS with an authentication code.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    AuthRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let authRequestsDto: AuthRequestsDto; // (optional)

const { status, data } = await apiInstance.sendSmsCode(
    authRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRequestsDto** | **AuthRequestsDto**|  | |


### Return type

**AuthenticationTokenWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authentication data |  -  |
|**400** | userName, password or passworHash is empty |  -  |
|**429** | Too many login attempts. Please try again later |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

