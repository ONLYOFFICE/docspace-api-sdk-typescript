# StorageSettingsDto

The storage the portal keeps its data in, or serves its static content from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module** | **string** | The storage module, or `null` when the built-in storage is used. | [optional] [default to undefined]
**props** | **{ [key: string]: string | null; }** | The connection properties stored for the module. | [optional] [default to undefined]
**lastModified** | **string** | When the settings were last stored. | [optional] [default to undefined]

## Example

```typescript
import { StorageSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: StorageSettingsDto = {
    module,
    props,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
