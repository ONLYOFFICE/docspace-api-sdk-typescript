# CreateApiKeyRequestDto

The request parameters for creating a new API key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The label that tells this key apart in the key list. It is required, may be up to 30 characters long, and does  not have to be unique. | [default to undefined]
**permissions** | **Array&lt;string&gt;** | The scopes the key may use. Every value has to come from `GET api/2.0/keys/permissions`, an unknown value or  an empty array is rejected, and passing `*` or omitting the field records a key without scope restrictions. | [optional] [default to undefined]
**expiresInDays** | **number** | The lifetime of the key in days, counted from the moment it is created, from 1 to 365. Omit it to create a key  that never expires. | [optional] [default to undefined]

## Example

```typescript
import { CreateApiKeyRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateApiKeyRequestDto = {
    name,
    permissions,
    expiresInDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
