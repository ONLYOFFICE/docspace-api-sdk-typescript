# SecurityRequestsDto

The request parameters for managing user security and access permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **string** | The product ID for which permissions are being set. | [default to undefined]
**userId** | **string** | The ID of the user whose permissions are being configured. | [default to undefined]
**administrator** | **boolean** | Specifies whether the user has administrative privileges. | [optional] [default to undefined]

## Example

```typescript
import { SecurityRequestsDto } from '@onlyoffice/docspace-api-typescript';

const instance: SecurityRequestsDto = {
    productId,
    userId,
    administrator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
