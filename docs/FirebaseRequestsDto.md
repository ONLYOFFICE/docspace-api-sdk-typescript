# FirebaseRequestsDto

The Firebase-related request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firebaseDeviceToken** | **string** | The Firebase device token. | [optional] [default to undefined]
**isSubscribed** | **boolean** | Specifies whether the user is subscribed to the push notifications or not. | [optional] [default to undefined]

## Example

```typescript
import { FirebaseRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: FirebaseRequestsDto = {
    firebaseDeviceToken,
    isSubscribed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
