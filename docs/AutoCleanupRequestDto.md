# AutoCleanupRequestDto

The request parameters for updating the trash bin auto-clearing setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**set** | **boolean** | Specifies whether to enable the auto-clearing or not. | [optional] [default to undefined]
**gap** | [**DateToAutoCleanUp**](DateToAutoCleanUp.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AutoCleanupRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: AutoCleanupRequestDto = {
    set,
    gap,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
