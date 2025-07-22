# FireBaseUser

The Firebase user parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The Firebase user ID. | [optional] [default to undefined]
**userId** | **string** | The user ID. | [optional] [default to undefined]
**tenantId** | **number** | The tenant ID. | [optional] [default to undefined]
**firebaseDeviceToken** | **string** | The Firebase device token. | [optional] [default to undefined]
**application** | **string** | The Firebase application. | [optional] [default to undefined]
**isSubscribed** | **boolean** | Specifies if the user is subscribed to the push notifications or not. | [optional] [default to undefined]
**tenant** | [**DbTenant**](DbTenant.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FireBaseUser } from '@onlyoffice/docspace-api-sdk';

const instance: FireBaseUser = {
    id,
    userId,
    tenantId,
    firebaseDeviceToken,
    application,
    isSubscribed,
    tenant,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
