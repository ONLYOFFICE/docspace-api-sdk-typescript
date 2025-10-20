# AdminMessageBaseSettingsRequestsDto

The request parameters for the administrator message configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The email address used for sending administrator messages. | [default to undefined]
**culture** | **string** | The locale identifier for message localization. | [optional] [default to undefined]

## Example

```typescript
import { AdminMessageBaseSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: AdminMessageBaseSettingsRequestsDto = {
    email,
    culture,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
