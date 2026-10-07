# EmailActivationSettingsRequestDto

Whether the calling user wants to keep seeing the reminder to confirm their email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**show** | **boolean** | Whether the reminder is shown; send false to dismiss it for the calling user. | [optional] [default to undefined]
**lastModified** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]

## Example

```typescript
import { EmailActivationSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: EmailActivationSettingsRequestDto = {
    show,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
