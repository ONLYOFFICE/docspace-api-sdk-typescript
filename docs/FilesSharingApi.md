# SharingApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applyExternalSharePassword**](#applyexternalsharepassword) | **POST** /api/2.0/files/share/{key}/password | |
|[**changeFileOwner**](#changefileowner) | **POST** /api/2.0/files/owner | |
|[**getExternalShareData**](#getexternalsharedata) | **GET** /api/2.0/files/share/{key} | |
|[**getSharedUsers**](#getsharedusers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | |
|[**sendEditorNotify**](#sendeditornotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | |

# **applyExternalSharePassword**
> ExternalShareWrapper applyExternalSharePassword()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalShareRequestParam** | **ExternalShareRequestParam**| The external data share request parameters. | |
| **key** | [**string**] | The unique document identifier. | defaults to undefined|


### Return type

**ExternalShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    ExternalShareRequestParam
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let key: string; //The unique document identifier. (default to undefined)
let externalShareRequestParam: ExternalShareRequestParam; //The external data share request parameters. (optional)

const { status, data } = await apiInstance.applyExternalSharePassword(
    key,
    externalShareRequestParam
);
```

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
> FileEntryBaseArrayWrapper changeFileOwner()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeOwnerRequestDto** | **ChangeOwnerRequestDto**|  | |


### Return type

**FileEntryBaseArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    ChangeOwnerRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let changeOwnerRequestDto: ChangeOwnerRequestDto; // (optional)

const { status, data } = await apiInstance.changeFileOwner(
    changeOwnerRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File entry information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalShareData**
> ExternalShareWrapper getExternalShareData()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | [**string**] | The unique key of the external shared data. | defaults to undefined|
| **fileId** | [**string**] | The unique document identifier. | (optional) defaults to undefined|


### Return type

**ExternalShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let key: string; //The unique key of the external shared data. (default to undefined)
let fileId: string; //The unique document identifier. (optional) (default to undefined)

const { status, data } = await apiInstance.getExternalShareData(
    key,
    fileId
);
```

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


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**MentionWrapperArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getSharedUsers(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with their access rights to the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendEditorNotify**
> AceShortWrapperArrayWrapper sendEditorNotify()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mentionMessageWrapper** | **MentionMessageWrapper**| The mention message. | |
| **fileId** | [**number**] | The file ID of the mention message. | defaults to undefined|


### Return type

**AceShortWrapperArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    MentionMessageWrapper
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID of the mention message. (default to undefined)
let mentionMessageWrapper: MentionMessageWrapper; //The mention message. (optional)

const { status, data } = await apiInstance.sendEditorNotify(
    fileId,
    mentionMessageWrapper
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of access rights information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

