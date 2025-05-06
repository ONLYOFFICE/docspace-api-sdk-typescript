# ConfirmData

The additional confirmation data required for authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The email address to confirm the user\&#39;s identity. | [optional] [default to undefined]
**first** | **boolean** | Specifies whether this is the first access to the user\&#39;s account. | [optional] [default to undefined]
**key** | **string** | The unique confirmation key for validating user identity. | [optional] [default to undefined]

## Example

```typescript
import { ConfirmData } from '@onlyoffice/docspace-api-typescript';

const instance: ConfirmData = {
    email,
    first,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
