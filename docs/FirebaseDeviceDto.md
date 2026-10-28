# FirebaseDeviceDto

One mobile device of the calling user registered for push notifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The id of the registration. | [optional] [default to undefined]
**userId** | **string** | The account the device belongs to; always the caller. | [optional] [default to undefined]
**tenantId** | **number** | The portal the registration belongs to; always the current one. | [optional] [default to undefined]
**firebaseDeviceToken** | **string** | The Firebase token the device was issued, as it was sent at registration. | [optional] [default to undefined]
**application** | **string** | The application the registration is for; `doc` for the Documents application. | [optional] [default to undefined]
**isSubscribed** | **boolean** | Whether the device is currently sent push notifications. | [optional] [default to undefined]

## Example

```typescript
import { FirebaseDeviceDto } from '@onlyoffice/docspace-api-sdk';

const instance: FirebaseDeviceDto = {
    id,
    userId,
    tenantId,
    firebaseDeviceToken,
    application,
    isSubscribed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
