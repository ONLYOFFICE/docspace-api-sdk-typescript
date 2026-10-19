# AiProfilesCreate400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when the profile was persisted. | [default to undefined]
**profile** | [**AiProfile**](AiProfile.md) | The persisted profile. Present on success. | [optional] [default to undefined]
**error** | **string** | The error message, ready to be shown to the caller. | [default to undefined]

## Example

```typescript
import { AiProfilesCreate400Response } from '@onlyoffice/docspace-api-sdk';

const instance: AiProfilesCreate400Response = {
    success,
    profile,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
