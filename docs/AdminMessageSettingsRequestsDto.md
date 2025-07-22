# AdminMessageSettingsRequestsDto

The request parameters for configuring the administrator message content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The content of the administrator message to be sent. | [default to undefined]
**email** | **string** | Email | [default to undefined]
**culture** | **string** | Culture | [optional] [default to undefined]

## Example

```typescript
import { AdminMessageSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: AdminMessageSettingsRequestsDto = {
    message,
    email,
    culture,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
