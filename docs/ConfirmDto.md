# ConfirmDto

The confirmation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ValidationResult**](ValidationResult.md) | The confirmation result. | [default to undefined]
**roomId** | **string** | The confirmation room ID. | [optional] [default to undefined]
**title** | **string** | The confirmation title. | [optional] [default to undefined]
**email** | **string** | The confirmation email. | [optional] [default to undefined]
**isAgent** | **boolean** | The confirmation is agent. | [optional] [default to undefined]

## Example

```typescript
import { ConfirmDto } from '@onlyoffice/docspace-api-sdk';

const instance: ConfirmDto = {
    result,
    roomId,
    title,
    email,
    isAgent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
