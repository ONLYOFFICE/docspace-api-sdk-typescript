# EditorConfigurationDto

The editor configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **string** | The callback URL of the editor. | [optional] [default to undefined]
**coEditing** | [**CoEditingConfig**](CoEditingConfig.md) |  | [optional] [default to undefined]
**createUrl** | **string** | The creation URL of the editor. | [optional] [default to undefined]
**customization** | [**CustomizationConfigDto**](CustomizationConfigDto.md) |  | [optional] [default to undefined]
**embedded** | [**EmbeddedConfig**](EmbeddedConfig.md) |  | [optional] [default to undefined]
**encryptionKeys** | [**EncryptionKeysConfig**](EncryptionKeysConfig.md) |  | [optional] [default to undefined]
**lang** | **string** | The language of the editor configuration. | [default to undefined]
**mode** | **string** | The mode of the editor configuration. | [default to undefined]
**modeWrite** | **boolean** | Specifies if the mode is write of the editor configuration. | [optional] [default to undefined]
**plugins** | [**PluginsConfig**](PluginsConfig.md) |  | [optional] [default to undefined]
**recent** | [**Array&lt;RecentConfig&gt;**](RecentConfig.md) | The recent configuration of the editor. | [optional] [default to undefined]
**templates** | [**Array&lt;TemplatesConfig&gt;**](TemplatesConfig.md) | The templates of the editor configuration. | [optional] [default to undefined]
**user** | [**UserConfig**](UserConfig.md) |  | [default to undefined]

## Example

```typescript
import { EditorConfigurationDto } from '@onlyoffice/docspace-api-sdk';

const instance: EditorConfigurationDto = {
    callbackUrl,
    coEditing,
    createUrl,
    customization,
    embedded,
    encryptionKeys,
    lang,
    mode,
    modeWrite,
    plugins,
    recent,
    templates,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
