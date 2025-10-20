# StorageDto

The storage information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The storage ID. | [default to undefined]
**title** | **string** | The storage title. | [default to undefined]
**properties** | [**Array&lt;AuthKey&gt;**](AuthKey.md) | The list of storage authentication keys. | [optional] [default to undefined]
**current** | **boolean** | Specifies if this is the current portal storage or not. | [default to undefined]
**isSet** | **boolean** | Specifies if this storage can be set or not. | [default to undefined]

## Example

```typescript
import { StorageDto } from '@onlyoffice/docspace-api-sdk';

const instance: StorageDto = {
    id,
    title,
    properties,
    current,
    isSet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
