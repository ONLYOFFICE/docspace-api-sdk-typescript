# RoomsRoomsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addRoomTags**](#addroomtags) | **PUT** /api/2.0/files/rooms/{id}/tags | Add the room tags|
|[**archiveRoom**](#archiveroom) | **PUT** /api/2.0/files/rooms/{id}/archive | Archive a room|
|[**changeRoomCover**](#changeroomcover) | **POST** /api/2.0/files/rooms/{id}/cover | Change the room cover|
|[**createRoom**](#createroom) | **POST** /api/2.0/files/rooms | Create a room|
|[**createRoomFromTemplate**](#createroomfromtemplate) | **POST** /api/2.0/files/rooms/fromtemplate | Create a room from the template|
|[**createRoomLogo**](#createroomlogo) | **POST** /api/2.0/files/rooms/{id}/logo | Create a room logo|
|[**createRoomTag**](#createroomtag) | **POST** /api/2.0/files/tags | Create a tag|
|[**createRoomTemplate**](#createroomtemplate) | **POST** /api/2.0/files/roomtemplate | Start creating room template|
|[**createRoomThirdParty**](#createroomthirdparty) | **POST** /api/2.0/files/rooms/thirdparty/{id} | Create a third-party room|
|[**deleteCustomTags**](#deletecustomtags) | **DELETE** /api/2.0/files/tags | Delete tags|
|[**deleteRoom**](#deleteroom) | **DELETE** /api/2.0/files/rooms/{id} | Remove a room|
|[**deleteRoomLogo**](#deleteroomlogo) | **DELETE** /api/2.0/files/rooms/{id}/logo | Remove a room logo|
|[**deleteRoomTags**](#deleteroomtags) | **DELETE** /api/2.0/files/rooms/{id}/tags | Remove the room tags|
|[**getNewRoomItems**](#getnewroomitems) | **GET** /api/2.0/files/rooms/{id}/news | Get the new room items|
|[**getPublicSettings**](#getpublicsettings) | **GET** /api/2.0/files/roomtemplate/{id}/public | Get public settings|
|[**getRoomCovers**](#getroomcovers) | **GET** /api/2.0/files/rooms/covers | Get covers|
|[**getRoomCreatingStatus**](#getroomcreatingstatus) | **GET** /api/2.0/files/rooms/fromtemplate/status | Get the room creation progress|
|[**getRoomIndexExport**](#getroomindexexport) | **GET** /api/2.0/files/rooms/indexexport | Get the room index export|
|[**getRoomInfo**](#getroominfo) | **GET** /api/2.0/files/rooms/{id} | Get room information|
|[**getRoomLinks**](#getroomlinks) | **GET** /api/2.0/files/rooms/{id}/links | Get the room links|
|[**getRoomSecurityInfo**](#getroomsecurityinfo) | **GET** /api/2.0/files/rooms/{id}/share | Get the room access rights|
|[**getRoomTagsInfo**](#getroomtagsinfo) | **GET** /api/2.0/files/tags | Get tags|
|[**getRoomTemplateCreatingStatus**](#getroomtemplatecreatingstatus) | **GET** /api/2.0/files/roomtemplate/status | Get status of room template creation|
|[**getRoomsFolder**](#getroomsfolder) | **GET** /api/2.0/files/rooms | Get rooms|
|[**getRoomsNewItems**](#getroomsnewitems) | **GET** /api/2.0/files/rooms/news | Get the room new items|
|[**getRoomsPrimaryExternalLink**](#getroomsprimaryexternallink) | **GET** /api/2.0/files/rooms/{id}/link | Get the room primary external link|
|[**pinRoom**](#pinroom) | **PUT** /api/2.0/files/rooms/{id}/pin | Pin a room|
|[**reorderRoom**](#reorderroom) | **PUT** /api/2.0/files/rooms/{id}/reorder | Reorder the room|
|[**resendEmailInvitations**](#resendemailinvitations) | **POST** /api/2.0/files/rooms/{id}/resend | Resend the room invitations|
|[**setPublicSettings**](#setpublicsettings) | **PUT** /api/2.0/files/roomtemplate/public | Set public settings|
|[**setRoomLink**](#setroomlink) | **PUT** /api/2.0/files/rooms/{id}/links | Set the room external or invitation link|
|[**setRoomSecurity**](#setroomsecurity) | **PUT** /api/2.0/files/rooms/{id}/share | Set the room access rights|
|[**startRoomIndexExport**](#startroomindexexport) | **POST** /api/2.0/files/rooms/{id}/indexexport | Start the room index export|
|[**terminateRoomIndexExport**](#terminateroomindexexport) | **DELETE** /api/2.0/files/rooms/indexexport | Terminate the room index export|
|[**unarchiveRoom**](#unarchiveroom) | **PUT** /api/2.0/files/rooms/{id}/unarchive | Unarchive a room|
|[**unpinRoom**](#unpinroom) | **PUT** /api/2.0/files/rooms/{id}/unpin | Unpin a room|
|[**updateRoom**](#updateroom) | **PUT** /api/2.0/files/rooms/{id} | Update a room|
|[**uploadRoomLogo**](#uploadroomlogo) | **POST** /api/2.0/files/logos | Upload a room logo image|

# **addRoomTags**
> FolderIntegerWrapper addRoomTags()

Adds the tags to a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchTagsRequestDto** | **BatchTagsRequestDto**| The parameters for adding tags. | |
| **id** | [**number**] | The room Id. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    BatchTagsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room Id. (default to undefined)
let batchTagsRequestDto: BatchTagsRequestDto; //The parameters for adding tags. (optional)

const { status, data } = await apiInstance.addRoomTags(
    id,
    batchTagsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have permission to edit the room |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **archiveRoom**
> FileOperationWrapper archiveRoom()

Moves a room with the ID specified in the request to the \"Archive\" section.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/archive-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **archiveRoomRequest** | **ArchiveRoomRequest**| The parameters for archiving a room. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FileOperationWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    ArchiveRoomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let archiveRoomRequest: ArchiveRoomRequest; //The parameters for archiving a room. (optional)

const { status, data } = await apiInstance.archiveRoom(
    id,
    archiveRoomRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File operation |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeRoomCover**
> FolderIntegerWrapper changeRoomCover()

Changes a cover of a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **coverRequestDto** | **CoverRequestDto**| The request parameters to change the room cover. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    CoverRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let coverRequestDto: CoverRequestDto; //The request parameters to change the room cover. (optional)

const { status, data } = await apiInstance.changeRoomCover(
    id,
    coverRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room cover |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have permission to change cover |  -  |
|**404** | The required room was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRoom**
> FolderIntegerWrapper createRoom()

Creates a room in the \"Rooms\" section.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoomRequestDto** | **CreateRoomRequestDto**|  | |


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    CreateRoomRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let createRoomRequestDto: CreateRoomRequestDto; // (optional)

const { status, data } = await apiInstance.createRoom(
    createRoomRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRoomFromTemplate**
> RoomFromTemplateStatusWrapper createRoomFromTemplate()

Creates a room in the \"Rooms\" section based on the template.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-from-template/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoomFromTemplateDto** | **CreateRoomFromTemplateDto**|  | |


### Return type

**RoomFromTemplateStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    CreateRoomFromTemplateDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let createRoomFromTemplateDto: CreateRoomFromTemplateDto; // (optional)

const { status, data } = await apiInstance.createRoomFromTemplate(
    createRoomFromTemplateDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRoomLogo**
> FolderIntegerWrapper createRoomLogo()

Creates a logo for a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logoRequest** | **LogoRequest**| The logo request parameters. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    LogoRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let logoRequest: LogoRequest; //The logo request parameters. (optional)

const { status, data } = await apiInstance.createRoomLogo(
    id,
    logoRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |
|**404** | The required room was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRoomTag**
> ObjectWrapper createRoomTag()

Creates a custom tag with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-tag/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTagRequestDto** | **CreateTagRequestDto**|  | |


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    CreateTagRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let createTagRequestDto: CreateTagRequestDto; // (optional)

const { status, data } = await apiInstance.createRoomTag(
    createTagRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New tag name |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRoomTemplate**
> RoomTemplateStatusWrapper createRoomTemplate()

Starts creating the room template.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-template/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomTemplateDto** | **RoomTemplateDto**|  | |


### Return type

**RoomTemplateStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    RoomTemplateDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let roomTemplateDto: RoomTemplateDto; // (optional)

const { status, data } = await apiInstance.createRoomTemplate(
    roomTemplateDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRoomThirdParty**
> FolderStringWrapper createRoomThirdParty()

Creates a room in the \"Rooms\" section stored in a third-party storage.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createThirdPartyRoom** | **CreateThirdPartyRoom**| The third-party room information. | |
| **id** | [**string**] | The ID of the folder in the third-party storage in which the contents of the room will be stored. | defaults to undefined|


### Return type

**FolderStringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    CreateThirdPartyRoom
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: string; //The ID of the folder in the third-party storage in which the contents of the room will be stored. (default to undefined)
let createThirdPartyRoom: CreateThirdPartyRoom; //The third-party room information. (optional)

const { status, data } = await apiInstance.createRoomThirdParty(
    id,
    createThirdPartyRoom
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCustomTags**
> deleteCustomTags()

Deletes a bunch of custom tags specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-tags/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchTagsRequestDto** | **BatchTagsRequestDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    BatchTagsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let batchTagsRequestDto: BatchTagsRequestDto; // (optional)

const { status, data } = await apiInstance.deleteCustomTags(
    batchTagsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRoom**
> FileOperationWrapper deleteRoom()

Removes a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRoomRequest** | **DeleteRoomRequest**| The parameters for deleting a room. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FileOperationWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    DeleteRoomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let deleteRoomRequest: DeleteRoomRequest; //The parameters for deleting a room. (optional)

const { status, data } = await apiInstance.deleteRoom(
    id,
    deleteRoomRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File operation |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRoomLogo**
> FolderIntegerWrapper deleteRoomLogo()

Removes a logo from a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.deleteRoomLogo(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRoomTags**
> FolderIntegerWrapper deleteRoomTags()

Removes the tags from a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchTagsRequestDto** | **BatchTagsRequestDto**| The parameters for adding tags. | |
| **id** | [**number**] | The room Id. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    BatchTagsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room Id. (default to undefined)
let batchTagsRequestDto: BatchTagsRequestDto; //The parameters for adding tags. (optional)

const { status, data } = await apiInstance.deleteRoomTags(
    id,
    batchTagsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have permission to edit the room |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNewRoomItems**
> NewItemsFileEntryBaseArrayWrapper getNewRoomItems()

Returns a list of all the new items from a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**NewItemsFileEntryBaseArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.getNewRoomItems(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicSettings**
> BooleanWrapper getPublicSettings()

Returns the public settings of the room template with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room template ID. | defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room template ID. (default to undefined)

const { status, data } = await apiInstance.getPublicSettings(
    id
);
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

# **getRoomCovers**
> CoversResultArrayWrapper getRoomCovers()

Returns a list of all covers.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-covers/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CoversResultArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

const { status, data } = await apiInstance.getRoomCovers();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Gets room cover |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomCreatingStatus**
> RoomFromTemplateStatusWrapper getRoomCreatingStatus()

Returns the progress of creating a room from the template.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-creating-status/).

### Parameters
This endpoint does not have any parameters.


### Return type

**RoomFromTemplateStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

const { status, data } = await apiInstance.getRoomCreatingStatus();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomIndexExport**
> DocumentBuilderTaskWrapper getRoomIndexExport()

Returns the room index export.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-index-export/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

const { status, data } = await apiInstance.getRoomIndexExport();
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

# **getRoomInfo**
> FolderIntegerWrapper getRoomInfo()

Returns the room information.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.getRoomInfo(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomLinks**
> FileShareArrayWrapper getRoomLinks()

Returns the links of the room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-links/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID. | defaults to undefined|
| **type** | **LinkType** | The link type. | (optional) defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let type: LinkType; //The link type. (optional) (default to undefined)

const { status, data } = await apiInstance.getRoomLinks(
    id,
    type
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room security information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomSecurityInfo**
> FileShareArrayWrapper getRoomSecurityInfo()

Returns the access rights of a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID. | defaults to undefined|
| **filterType** | **ShareFilterType** | The filter type of the access rights. | (optional) defaults to undefined|
| **count** | [**number**] | The number of items to be retrieved or processed. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index of the items to retrieve in a paginated request. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text filter value used for filtering room security information. | (optional) defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let filterType: ShareFilterType; //The filter type of the access rights. (optional) (default to undefined)
let count: number; //The number of items to be retrieved or processed. (optional) (default to undefined)
let startIndex: number; //The starting index of the items to retrieve in a paginated request. (optional) (default to undefined)
let filterValue: string; //The text filter value used for filtering room security information. (optional) (default to undefined)

const { status, data } = await apiInstance.getRoomSecurityInfo(
    id,
    filterType,
    count,
    startIndex,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Security information of room files |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomTagsInfo**
> ObjectArrayWrapper getRoomTagsInfo()

Returns a list of custom tags.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fields** | **string**| Comma-separated list of fields to include in the response | |
| **count** | [**number**] | Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set. | (optional) defaults to undefined|
| **startIndex** | [**number**] | Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins. | (optional) defaults to undefined|
| **filterValue** | [**string**] | Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information. | (optional) defaults to undefined|


### Return type

**ObjectArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let count: number; //Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set. (optional) (default to undefined)
let startIndex: number; //Represents the starting index from which the tags\' information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins. (optional) (default to undefined)
let filterValue: string; //Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information. (optional) (default to undefined)
let fields: string; //Comma-separated list of fields to include in the response (optional)

const { status, data } = await apiInstance.getRoomTagsInfo(
    count,
    startIndex,
    filterValue,
    fields
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of tag names |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomTemplateCreatingStatus**
> RoomTemplateStatusWrapper getRoomTemplateCreatingStatus()

Returns the progress status of the room template creation process.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-template-creating-status/).

### Parameters
This endpoint does not have any parameters.


### Return type

**RoomTemplateStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

const { status, data } = await apiInstance.getRoomTemplateCreatingStatus();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomsFolder**
> FolderContentIntegerWrapper getRoomsFolder()

Returns the contents of the \"Rooms\" section by the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fields** | **string**| Comma-separated list of fields to include in the response | |
| **type** | **Array&lt;RoomType&gt;** | The filter by room type. | (optional) defaults to undefined|
| **subjectId** | [**string**] | The filter by user ID. | (optional) defaults to undefined|
| **searchArea** | **SearchArea** | The room search area (Active, Archive, Any, Recent by links). | (optional) defaults to undefined|
| **withoutTags** | [**boolean**] | Specifies whether to search by tags or not. | (optional) defaults to undefined|
| **tags** | [**string**] | The tags in the serialized format. | (optional) defaults to undefined|
| **excludeSubject** | [**boolean**] | Specifies whether to exclude search by user or group ID. | (optional) defaults to undefined|
| **provider** | **ProviderFilter** | The filter by provider name (None, Box, DropBox, GoogleDrive, kDrive, OneDrive, SharePoint, WebDav, Yandex, Storage). | (optional) defaults to undefined|
| **subjectFilter** | **SubjectFilter** | The filter by user (Owner - 0, Member - 1). | (optional) defaults to undefined|
| **quotaFilter** | **QuotaFilter** | The filter by quota (All - 0, Default - 1, Custom - 2). | (optional) defaults to undefined|
| **storageFilter** | **StorageFilter** | The filter by storage (None - 0, Internal - 1, ThirdParty - 2). | (optional) defaults to undefined|
| **count** | [**number**] | Specifies the maximum number of items to retrieve. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The index from which to start retrieving the room content. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the field by which the room content should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text filter value used to refine search or query operations. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let type: Array<RoomType>; //The filter by room type. (optional) (default to undefined)
let subjectId: string; //The filter by user ID. (optional) (default to undefined)
let searchArea: SearchArea; //The room search area (Active, Archive, Any, Recent by links). (optional) (default to undefined)
let withoutTags: boolean; //Specifies whether to search by tags or not. (optional) (default to undefined)
let tags: string; //The tags in the serialized format. (optional) (default to undefined)
let excludeSubject: boolean; //Specifies whether to exclude search by user or group ID. (optional) (default to undefined)
let provider: ProviderFilter; //The filter by provider name (None, Box, DropBox, GoogleDrive, kDrive, OneDrive, SharePoint, WebDav, Yandex, Storage). (optional) (default to undefined)
let subjectFilter: SubjectFilter; //The filter by user (Owner - 0, Member - 1). (optional) (default to undefined)
let quotaFilter: QuotaFilter; //The filter by quota (All - 0, Default - 1, Custom - 2). (optional) (default to undefined)
let storageFilter: StorageFilter; //The filter by storage (None - 0, Internal - 1, ThirdParty - 2). (optional) (default to undefined)
let count: number; //Specifies the maximum number of items to retrieve. (optional) (default to undefined)
let startIndex: number; //The index from which to start retrieving the room content. (optional) (default to undefined)
let sortBy: string; //Specifies the field by which the room content should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text filter value used to refine search or query operations. (optional) (default to undefined)
let fields: string; //Comma-separated list of fields to include in the response (optional)

const { status, data } = await apiInstance.getRoomsFolder(
    type,
    subjectId,
    searchArea,
    withoutTags,
    tags,
    excludeSubject,
    provider,
    subjectFilter,
    quotaFilter,
    storageFilter,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue,
    fields
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the contents of the \&quot;Rooms\&quot; section |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the room content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomsNewItems**
> NewItemsRoomNewItemsArrayWrapper getRoomsNewItems()

Returns the room new items.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-new-items/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewItemsRoomNewItemsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

const { status, data } = await apiInstance.getRoomsNewItems();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of new items |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomsPrimaryExternalLink**
> FileShareWrapper getRoomsPrimaryExternalLink()

Returns the primary external link of the room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.getRoomsPrimaryExternalLink(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room security information |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pinRoom**
> FolderIntegerWrapper pinRoom()

Pins a room with the ID specified in the request to the top of the list.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.pinRoom(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorderRoom**
> FolderIntegerWrapper reorderRoom()

Reorders the room with ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.reorderRoom(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendEmailInvitations**
> resendEmailInvitations()

Resends the email invitations to a room with the ID specified in the request to the selected users.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userInvitation** | **UserInvitation**| The user invitation parameters. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    UserInvitation
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let userInvitation: UserInvitation; //The user invitation parameters. (optional)

const { status, data } = await apiInstance.resendEmailInvitations(
    id,
    userInvitation
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setPublicSettings**
> setPublicSettings()

Sets the public settings for the room template with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-public-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setPublicDto** | **SetPublicDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    SetPublicDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let setPublicDto: SetPublicDto; // (optional)

const { status, data } = await apiInstance.setPublicSettings(
    setPublicDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setRoomLink**
> FileShareWrapper setRoomLink()

Sets the room external or invitation link with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomLinkRequest** | **RoomLinkRequest**| The room link parameters. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    RoomLinkRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let roomLinkRequest: RoomLinkRequest; //The room link parameters. (optional)

const { status, data } = await apiInstance.setRoomLink(
    id,
    roomLinkRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room security information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setRoomSecurity**
> RoomSecurityWrapper setRoomSecurity()

Sets the access rights to the room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomInvitationRequest** | **RoomInvitationRequest**| The room invitation request. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**RoomSecurityWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    RoomInvitationRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let roomInvitationRequest: RoomInvitationRequest; //The room invitation request. (optional)

const { status, data } = await apiInstance.setRoomSecurity(
    id,
    roomInvitationRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room security information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startRoomIndexExport**
> DocumentBuilderTaskWrapper startRoomIndexExport()

Starts the index export of a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-room-index-export/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.startRoomIndexExport(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**501** | Folder indexing is turned off |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateRoomIndexExport**
> terminateRoomIndexExport()

Terminates the room index export.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-room-index-export/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

const { status, data } = await apiInstance.terminateRoomIndexExport();
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

# **unarchiveRoom**
> FileOperationWrapper unarchiveRoom()

Moves a room with the ID specified in the request from the \"Archive\" section to the \"Rooms\" section.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/unarchive-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **archiveRoomRequest** | **ArchiveRoomRequest**| The parameters for archiving a room. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FileOperationWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    ArchiveRoomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let archiveRoomRequest: ArchiveRoomRequest; //The parameters for archiving a room. (optional)

const { status, data } = await apiInstance.unarchiveRoom(
    id,
    archiveRoomRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File operation |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpinRoom**
> FolderIntegerWrapper unpinRoom()

Unpins a room with the ID specified in the request from the top of the list.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID of the request. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID of the request. (default to undefined)

const { status, data } = await apiInstance.unpinRoom(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRoom**
> FolderIntegerWrapper updateRoom()

Updates a room with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomRequest** | **UpdateRoomRequest**| The request parameters for updating a room. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration,
    UpdateRoomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: number; //The room ID. (default to undefined)
let updateRoomRequest: UpdateRoomRequest; //The request parameters for updating a room. (optional)

const { status, data } = await apiInstance.updateRoom(
    id,
    updateRoomRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated room information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadRoomLogo**
> UploadResultWrapper uploadRoomLogo()

Uploads a temporary image to create a room logo.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formCollection** | **Array&lt;KeyValuePairStringStringValues&gt;** | The image data. | (optional) defaults to undefined|


### Return type

**UploadResultWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let formCollection: Array<KeyValuePairStringStringValues>; //The image data. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadRoomLogo(
    formCollection
);
```

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Upload result |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

