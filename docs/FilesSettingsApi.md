# FilesSettingsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeAccessToThirdparty**](#changeaccesstothirdparty) | **PUT** /api/2.0/files/thirdparty | |
|[**changeAutomaticallyCleanUp**](#changeautomaticallycleanup) | **PUT** /api/2.0/files/settings/autocleanup | |
|[**changeDefaultAccessRights**](#changedefaultaccessrights) | **PUT** /api/2.0/files/settings/dafaultaccessrights | |
|[**changeDeleteConfirm**](#changedeleteconfirm) | **PUT** /api/2.0/files/changedeleteconfrim | |
|[**changeDownloadZipFromBody**](#changedownloadzipfrombody) | **PUT** /api/2.0/files/settings/downloadtargz | |
|[**checkDocServiceUrl**](#checkdocserviceurl) | **PUT** /api/2.0/files/docservice | |
|[**displayFileExtension**](#displayfileextension) | **PUT** /api/2.0/files/displayfileextension | |
|[**displayRecent**](#displayrecent) | **PUT** /api/2.0/files/displayrecent | |
|[**externalShare**](#externalshare) | **PUT** /api/2.0/files/settings/external | |
|[**externalShareSocialMedia**](#externalsharesocialmedia) | **PUT** /api/2.0/files/settings/externalsocialmedia | |
|[**forcesave**](#forcesave) | **PUT** /api/2.0/files/forcesave | |
|[**getAutomaticallyCleanUp**](#getautomaticallycleanup) | **GET** /api/2.0/files/settings/autocleanup | |
|[**getDocServiceUrl**](#getdocserviceurl) | **GET** /api/2.0/files/docservice | |
|[**getFilesModule**](#getfilesmodule) | **GET** /api/2.0/files/info | |
|[**getFilesSettings**](#getfilessettings) | **GET** /api/2.0/files/settings | |
|[**hideConfirmCancelOperation**](#hideconfirmcanceloperation) | **PUT** /api/2.0/files/hideconfirmcanceloperation | |
|[**hideConfirmConvert**](#hideconfirmconvert) | **PUT** /api/2.0/files/hideconfirmconvert | |
|[**hideConfirmRoomLifetime**](#hideconfirmroomlifetime) | **PUT** /api/2.0/files/hideconfirmroomlifetime | |
|[**isAvailablePrivacyRoomSettings**](#isavailableprivacyroomsettings) | **GET** /api/2.0/files/@privacy/available | |
|[**keepNewFileName**](#keepnewfilename) | **PUT** /api/2.0/files/keepnewfilename | |
|[**setOpenEditorInSameTab**](#setopeneditorinsametab) | **PUT** /api/2.0/files/settings/openeditorinsametab | |
|[**storeForcesave**](#storeforcesave) | **PUT** /api/2.0/files/storeforcesave | |
|[**storeOriginal**](#storeoriginal) | **PUT** /api/2.0/files/storeoriginal | |
|[**updateFileIfExist**](#updatefileifexist) | **PUT** /api/2.0/files/updateifexist | |

# **changeAccessToThirdparty**
> BooleanWrapper changeAccessToThirdparty()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.changeAccessToThirdparty(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeAutomaticallyCleanUp**
> AutoCleanUpDataWrapper changeAutomaticallyCleanUp()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **autoCleanupRequestDto** | **AutoCleanupRequestDto**|  | |


### Return type

**AutoCleanUpDataWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    AutoCleanupRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let autoCleanupRequestDto: AutoCleanupRequestDto; // (optional)

const { status, data } = await apiInstance.changeAutomaticallyCleanUp(
    autoCleanupRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The auto-clearing setting properties: auto-clearing or not, a time interval when the auto-clearing will be performed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeDefaultAccessRights**
> FileShareArrayWrapper changeDefaultAccessRights()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<number>**| Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator). | |


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let requestBody: Array<number>; //Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator). (optional)

const { status, data } = await apiInstance.changeDefaultAccessRights(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeDeleteConfirm**
> BooleanWrapper changeDeleteConfirm()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.changeDeleteConfirm(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeDownloadZipFromBody**
> ICompressWrapper changeDownloadZipFromBody()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip-from-body/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayRequestDto** | **DisplayRequestDto**|  | |


### Return type

**ICompressWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    DisplayRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let displayRequestDto: DisplayRequestDto; // (optional)

const { status, data } = await apiInstance.changeDownloadZipFromBody(
    displayRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archive |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkDocServiceUrl**
> DocServiceUrlWrapper checkDocServiceUrl()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkDocServiceUrlRequestDto** | **CheckDocServiceUrlRequestDto**|  | |


### Return type

**DocServiceUrlWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    CheckDocServiceUrlRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let checkDocServiceUrlRequestDto: CheckDocServiceUrlRequestDto; // (optional)

const { status, data } = await apiInstance.checkDocServiceUrl(
    checkDocServiceUrlRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Document service information: the Document Server address, the Document Server address in the local private network, the Community Server address |  -  |
|**400** | Invalid input urls/Mixed Active Content is not allowed. HTTPS address for Document Server is required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayFileExtension**
> BooleanWrapper displayFileExtension()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.displayFileExtension(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayRecent**
> BooleanWrapper displayRecent()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayRequestDto** | **DisplayRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    DisplayRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let displayRequestDto: DisplayRequestDto; // (optional)

const { status, data } = await apiInstance.displayRecent(
    displayRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **externalShare**
> BooleanWrapper externalShare()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayRequestDto** | **DisplayRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    DisplayRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let displayRequestDto: DisplayRequestDto; // (optional)

const { status, data } = await apiInstance.externalShare(
    displayRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **externalShareSocialMedia**
> BooleanWrapper externalShareSocialMedia()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayRequestDto** | **DisplayRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    DisplayRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let displayRequestDto: DisplayRequestDto; // (optional)

const { status, data } = await apiInstance.externalShareSocialMedia(
    displayRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forcesave**
> BooleanWrapper forcesave()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/).

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.forcesave();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAutomaticallyCleanUp**
> AutoCleanUpDataWrapper getAutomaticallyCleanUp()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AutoCleanUpDataWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.getAutomaticallyCleanUp();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The auto-clearing setting properties: auto-clearing or not, a time interval when the auto-clearing will be performed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocServiceUrl**
> DocServiceUrlWrapper getDocServiceUrl()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **version** | [**boolean**] | Specifies whether to return the editor version or not. | (optional) defaults to undefined|


### Return type

**DocServiceUrlWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let version: boolean; //Specifies whether to return the editor version or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getDocServiceUrl(
    version
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The document service URL with the editor version specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilesModule**
> ModuleWrapper getFilesModule()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/).

### Parameters
This endpoint does not have any parameters.


### Return type

**ModuleWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.getFilesModule();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Module information: ID, product class name, title, description, icon URL, large icon URL, start URL, primary or nor, help URL |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilesSettings**
> FilesSettingsWrapper getFilesSettings()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**FilesSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.getFilesSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hideConfirmCancelOperation**
> BooleanWrapper hideConfirmCancelOperation()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.hideConfirmCancelOperation(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hideConfirmConvert**
> ModuleWrapper hideConfirmConvert()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hideConfirmConvertRequestDto** | **HideConfirmConvertRequestDto**|  | |


### Return type

**ModuleWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    HideConfirmConvertRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let hideConfirmConvertRequestDto: HideConfirmConvertRequestDto; // (optional)

const { status, data } = await apiInstance.hideConfirmConvert(
    hideConfirmConvertRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hideConfirmRoomLifetime**
> BooleanWrapper hideConfirmRoomLifetime()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.hideConfirmRoomLifetime(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isAvailablePrivacyRoomSettings**
> BooleanWrapper isAvailablePrivacyRoomSettings()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/is-available-privacy-room-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.isAvailablePrivacyRoomSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the Private Room settings are available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keepNewFileName**
> BooleanWrapper keepNewFileName()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.keepNewFileName(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOpenEditorInSameTab**
> BooleanWrapper setOpenEditorInSameTab()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.setOpenEditorInSameTab(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the parameter is enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storeForcesave**
> BooleanWrapper storeForcesave()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/).

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

const { status, data } = await apiInstance.storeForcesave();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storeOriginal**
> BooleanWrapper storeOriginal()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.storeOriginal(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFileIfExist**
> BooleanWrapper updateFileIfExist()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingsRequestDto** | **SettingsRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSettingsApi,
    Configuration,
    SettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSettingsApi(configuration);

let settingsRequestDto: SettingsRequestDto; // (optional)

const { status, data } = await apiInstance.updateFileIfExist(
    settingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

