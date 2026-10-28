# ClientSecretResponse

The response carrying a regenerated client secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_secret** | **string** | The newly generated client secret. It replaces the previous one immediately, so every deployed copy of the client has to be updated with this value. | [optional] [default to undefined]

## Example

```typescript
import { ClientSecretResponse } from '@onlyoffice/docspace-api-sdk';

const instance: ClientSecretResponse = {
    client_secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
