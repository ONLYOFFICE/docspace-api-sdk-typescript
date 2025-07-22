# SettingsOwnerApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sendOwnerChangeInstructions**](#sendownerchangeinstructions) | **POST** /api/2.0/settings/owner | Send the owner change instructions|
|[**updatePortalOwner**](#updateportalowner) | **PUT** /api/2.0/settings/owner | Update the portal owner|

# **sendOwnerChangeInstructions**
> OwnerChangeInstructionsWrapper sendOwnerChangeInstructions()

Sends the instructions to change the DocSpace owner.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownerIdSettingsRequestDto** | **OwnerIdSettingsRequestDto**|  | |


### Return type

**OwnerChangeInstructionsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsOwnerApi,
    Configuration,
    OwnerIdSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsOwnerApi(configuration);

let ownerIdSettingsRequestDto: OwnerIdSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.sendOwnerChangeInstructions(
    ownerIdSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about changing the portal owner |  -  |
|**401** | Unauthorized |  -  |
|**403** | Collaborator can not be an owner |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePortalOwner**
> updatePortalOwner()

Updates the current portal owner with a new one specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownerIdSettingsRequestDto** | **OwnerIdSettingsRequestDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsOwnerApi,
    Configuration,
    OwnerIdSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsOwnerApi(configuration);

let ownerIdSettingsRequestDto: OwnerIdSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.updatePortalOwner(
    ownerIdSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | The user could not be found |  -  |
|**401** | Unauthorized |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

