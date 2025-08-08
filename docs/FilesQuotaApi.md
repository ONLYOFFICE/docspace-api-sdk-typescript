# FilesQuotaApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**resetRoomQuota**](#resetroomquota) | **PUT** /api/2.0/files/rooms/resetquota | |
|[**updateRoomsQuota**](#updateroomsquota) | **PUT** /api/2.0/files/rooms/roomquota | |

# **resetRoomQuota**
> FolderIntegerArrayWrapper resetRoomQuota()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-room-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomsRoomIdsRequestDtoInteger** | **UpdateRoomsRoomIdsRequestDtoInteger**|  | |


### Return type

**FolderIntegerArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesQuotaApi,
    Configuration,
    UpdateRoomsRoomIdsRequestDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesQuotaApi(configuration);

let updateRoomsRoomIdsRequestDtoInteger: UpdateRoomsRoomIdsRequestDtoInteger; // (optional)

const { status, data } = await apiInstance.resetRoomQuota(
    updateRoomsRoomIdsRequestDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of rooms with the detailed information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRoomsQuota**
> FolderIntegerArrayWrapper updateRoomsQuota()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-rooms-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomsQuotaRequestDtoInteger** | **UpdateRoomsQuotaRequestDtoInteger**|  | |


### Return type

**FolderIntegerArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesQuotaApi,
    Configuration,
    UpdateRoomsQuotaRequestDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesQuotaApi(configuration);

let updateRoomsQuotaRequestDtoInteger: UpdateRoomsQuotaRequestDtoInteger; // (optional)

const { status, data } = await apiInstance.updateRoomsQuota(
    updateRoomsQuotaRequestDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of rooms with the detailed information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

