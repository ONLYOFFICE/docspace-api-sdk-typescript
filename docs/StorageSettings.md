# StorageSettings

The storage settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module** | **string** | The storage name. | [optional] [default to undefined]
**props** | **{ [key: string]: string | null; }** | The storage properties. | [optional] [default to undefined]
**lastModified** | **string** | The date and time when the storage settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { StorageSettings } from '@onlyoffice/docspace-api-sdk';

const instance: StorageSettings = {
    module,
    props,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
