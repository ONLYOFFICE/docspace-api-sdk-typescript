# WebPluginDto

The web plugin information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The web plugin name. | [default to undefined]
**version** | **string** | The web plugin version. | [default to undefined]
**minDocSpaceVersion** | **string** | The minimum version of DocSpace with which the plugin is guaranteed to work. | [optional] [default to undefined]
**description** | **string** | The web plugin description. | [default to undefined]
**license** | **string** | The web plugin license. | [default to undefined]
**author** | **string** | The web plugin author. | [default to undefined]
**homePage** | **string** | The web plugin home page URL. | [default to undefined]
**pluginName** | **string** | The name by which the web plugin is registered in the window object. | [default to undefined]
**scopes** | **string** | The web plugin scopes. | [default to undefined]
**image** | **string** | The web plugin image. | [default to undefined]
**createBy** | [**EmployeeDto**](EmployeeDto.md) |  | [default to undefined]
**createOn** | **string** | The date and time when the web plugin was created. | [default to undefined]
**enabled** | **boolean** | Specifies if the web plugin is enabled or not. | [optional] [default to undefined]
**system** | **boolean** | Specifies if the web plugin is system or not. | [default to undefined]
**url** | **string** | The web plugin URL. | [default to undefined]
**settings** | **string** | The web plugin settings. | [default to undefined]

## Example

```typescript
import { WebPluginDto } from '@onlyoffice/docspace-api-sdk';

const instance: WebPluginDto = {
    name,
    version,
    minDocSpaceVersion,
    description,
    license,
    author,
    homePage,
    pluginName,
    scopes,
    image,
    createBy,
    createOn,
    enabled,
    system,
    url,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
