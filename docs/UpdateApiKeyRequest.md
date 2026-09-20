# UpdateApiKeyRequest

The request parameters for updating an existing API key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The new label of the key, up to 30 characters. Omit it to keep the current name. | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** | The scopes that replace the current ones. Every value has to come from `GET api/2.0/keys/permissions`, an  unknown value or an empty array is rejected, and omitting the field keeps the current scopes. | [optional] [default to undefined]
**isActive** | **boolean** | Whether the key may authenticate requests. Set it to false to stop the key without deleting it and to true to  let it work again; omit it to keep the current state. | [optional] [default to undefined]

## Example

```typescript
import { UpdateApiKeyRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateApiKeyRequest = {
    name,
    permissions,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
