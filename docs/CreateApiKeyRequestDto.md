# CreateApiKeyRequestDto

The request parameters for creating a new API key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The API key name. | [default to undefined]
**permissions** | **Array&lt;string&gt;** | The list of permissions granted to the API key. | [optional] [default to undefined]
**expiresInDays** | **number** | The number of days until the API key expires (null for no expiration). | [optional] [default to undefined]

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
