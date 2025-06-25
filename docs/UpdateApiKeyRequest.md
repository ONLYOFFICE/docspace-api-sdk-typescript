# UpdateApiKeyRequest

The request parameters for updating an existing API key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The new name for the API key. | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** | The new list of permissions for the API key. | [optional] [default to undefined]
**isActive** | **boolean** | Indicates whether the API key should be active or not. | [optional] [default to undefined]

## Example

```typescript
import { UpdateApiKeyRequest } from '@onlyoffice/docspace-api-typescript';

const instance: UpdateApiKeyRequest = {
    name,
    permissions,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
