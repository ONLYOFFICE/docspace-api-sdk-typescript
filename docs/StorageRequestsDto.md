# StorageRequestsDto

The request parameters for configuring the storage module settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module** | **string** | The name for the storage module to be configured. | [default to undefined]
**props** | [**Array&lt;ItemKeyValuePairStringString&gt;**](ItemKeyValuePairStringString.md) | The list of configuration key-value pairs for the storage module. | [optional] [default to undefined]

## Example

```typescript
import { StorageRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: StorageRequestsDto = {
    module,
    props,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
