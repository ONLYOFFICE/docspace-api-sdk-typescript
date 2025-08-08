# PhotosApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMemberPhotoThumbnails**](#creatememberphotothumbnails) | **POST** /api/2.0/people/{userid}/photo/thumbnails | Create photo thumbnails|
|[**deleteMemberPhoto**](#deletememberphoto) | **DELETE** /api/2.0/people/{userid}/photo | Delete a user photo|
|[**getMemberPhoto**](#getmemberphoto) | **GET** /api/2.0/people/{userid}/photo | Get a user photo|
|[**updateMemberPhoto**](#updatememberphoto) | **PUT** /api/2.0/people/{userid}/photo | Update a user photo|
|[**uploadMemberPhoto**](#uploadmemberphoto) | **POST** /api/2.0/people/{userid}/photo | Upload a user photo|

# **createMemberPhotoThumbnails**
> ThumbnailsDataWrapper createMemberPhotoThumbnails()

Creates the user photo thumbnails by coordinates of the original image specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-member-photo-thumbnails/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thumbnailsRequest** | **ThumbnailsRequest**| The thumbnail request. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**ThumbnailsDataWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeoplePhotosApi,
    Configuration,
    ThumbnailsRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeoplePhotosApi(configuration);

let userid: string; //The user ID. (default to undefined)
let thumbnailsRequest: ThumbnailsRequest; //The thumbnail request. (optional)

const { status, data } = await apiInstance.createMemberPhotoThumbnails(
    userid,
    thumbnailsRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Thumbnail parameters |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMemberPhoto**
> ThumbnailsDataWrapper deleteMemberPhoto()

Deletes a photo of the user with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-photo/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**ThumbnailsDataWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeoplePhotosApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeoplePhotosApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.deleteMemberPhoto(
    userid
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Thumbnail parameters: original photo, retina, maximum size photo, big, medium, small |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMemberPhoto**
> ThumbnailsDataWrapper getMemberPhoto()

Returns a photo of the user with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-member-photo/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**ThumbnailsDataWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeoplePhotosApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeoplePhotosApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.getMemberPhoto(
    userid
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Thumbnail parameters: original photo, retina, maximum size photo, big, medium, small |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMemberPhoto**
> ThumbnailsDataWrapper updateMemberPhoto()

Updates a photo of the user with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-photo/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePhotoMemberRequest** | **UpdatePhotoMemberRequest**| The request parameters for updating a photo. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**ThumbnailsDataWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeoplePhotosApi,
    Configuration,
    UpdatePhotoMemberRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeoplePhotosApi(configuration);

let userid: string; //The user ID. (default to undefined)
let updatePhotoMemberRequest: UpdatePhotoMemberRequest; //The request parameters for updating a photo. (optional)

const { status, data } = await apiInstance.updateMemberPhoto(
    userid,
    updatePhotoMemberRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated thumbnail parameters: original photo, retina, maximum size photo, big, medium, small |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadMemberPhoto**
> FileUploadResultWrapper uploadMemberPhoto()

Uploads a photo of the user with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-member-photo/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|
| **formCollection** | **Array&lt;KeyValuePairStringStringValues&gt;** | The image data. | defaults to undefined|


### Return type

**FileUploadResultWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeoplePhotosApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeoplePhotosApi(configuration);

let userid: string; //The user ID. (default to undefined)
let formCollection: Array<KeyValuePairStringStringValues>; //The image data. (default to undefined)

const { status, data } = await apiInstance.uploadMemberPhoto(
    userid,
    formCollection
);
```

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Result of file uploading |  -  |
|**400** | The uploaded file could not be found |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**413** | Image size is too large |  -  |
|**415** | Unknown image file type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

