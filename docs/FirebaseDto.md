# FirebaseDto

The Firebase project a client initialises its SDK with to receive push notifications from this portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **string** | The web API key of the project. Every field of this object is an empty string on an installation that  configures no Firebase project, and an empty `projectId` is the cheapest thing to test for before  initialising an SDK. None of these values is a secret - they are meant to be embedded in a client. | [default to undefined]
**authDomain** | **string** | The host the Firebase SDK performs its own authentication against. | [default to undefined]
**projectId** | **string** | The identifier of the Firebase project itself, which ties all the other fields together. | [default to undefined]
**storageBucket** | **string** | The Cloud Storage bucket of the project. The portal does not store portal files there; it is part of the  SDK configuration. | [default to undefined]
**messagingSenderId** | **string** | The sender ID that push messages of this project arrive under, which a client checks an incoming message  against. | [default to undefined]
**appId** | **string** | The identifier of the Firebase application registration this client is to use. | [default to undefined]
**measurementId** | **string** | The Google Analytics measurement ID of the project, empty when the project reports no analytics. | [default to undefined]
**databaseURL** | **string** | The Realtime Database endpoint of the project, empty when the project has no such database. | [default to undefined]

## Example

```typescript
import { FirebaseDto } from '@onlyoffice/docspace-api-sdk';

const instance: FirebaseDto = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
    databaseURL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
