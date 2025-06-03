# FilesSharingApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applyExternalSharePassword**](#applyexternalsharepassword) | **POST** /api/2.0/files/share/{key}/password | Apply external data password|
|[**changeFileOwner**](#changefileowner) | **POST** /api/2.0/files/owner | Change the file owner|
|[**getExternalShareData**](#getexternalsharedata) | **GET** /api/2.0/files/share/{key} | Get the external data|
|[**getSharedUsers**](#getsharedusers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | Get user access rights by file ID|
|[**sendEditorNotify**](#sendeditornotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | Send the mention message|

# **applyExternalSharePassword**
> ExternalShareWrapper applyExternalSharePassword()

Applies a password specified in the request to get the external data.

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    ExternalShareRequestParam
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let key: string; //The unique document identifier. (default to undefined)
let externalShareRequestParam: ExternalShareRequestParam; //The external data share request parameters. (optional)

const { status, data } = await apiInstance.applyExternalSharePassword(
    key,
    externalShareRequestParam
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalShareRequestParam** | **ExternalShareRequestParam**| The external data share request parameters. | |
| **key** | [**string**] | The unique document identifier. | defaults to undefined|


### Return type

**ExternalShareWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | External data |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeFileOwner**
> FileEntryArrayWrapper changeFileOwner()

Changes the owner of the file with the ID specified in the request.

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    ChangeOwnerRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let changeOwnerRequestDto: ChangeOwnerRequestDto; // (optional)

const { status, data } = await apiInstance.changeFileOwner(
    changeOwnerRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeOwnerRequestDto** | **ChangeOwnerRequestDto**|  | |


### Return type

**FileEntryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File entry information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalShareData**
> ExternalShareWrapper getExternalShareData()

Returns the external data by the key specified in the request.

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let key: string; //The unique key of the external shared data. (default to undefined)
let fileId: string; //The unique document identifier. (optional) (default to undefined)

const { status, data } = await apiInstance.getExternalShareData(
    key,
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | [**string**] | The unique key of the external shared data. | defaults to undefined|
| **fileId** | [**string**] | The unique document identifier. | (optional) defaults to undefined|


### Return type

**ExternalShareWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | External data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSharedUsers**
> MentionWrapperArrayWrapper getSharedUsers()

Returns a list of users with their access rights to the file with the ID specified in the request.

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getSharedUsers(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**MentionWrapperArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with their access rights to the file |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendEditorNotify**
> AceShortWrapperArrayWrapper sendEditorNotify()

Sends a message to the users who are mentioned in the file with the ID specified in the request.

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    MentionMessageWrapper
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID of the mention message. (default to undefined)
let mentionMessageWrapper: MentionMessageWrapper; //The mention message. (optional)

const { status, data } = await apiInstance.sendEditorNotify(
    fileId,
    mentionMessageWrapper
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mentionMessageWrapper** | **MentionMessageWrapper**| The mention message. | |
| **fileId** | [**number**] | The file ID of the mention message. | defaults to undefined|


### Return type

**AceShortWrapperArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of access rights information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

