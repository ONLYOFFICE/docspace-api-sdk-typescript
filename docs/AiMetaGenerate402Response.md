# AiMetaGenerate402Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **string** | Short reason, ready to be shown to the caller. | [default to undefined]
**code** | **string** | Stable classification of the failure: `rate_limit`, `insufficient_funds`, `auth`, `model_not_found`, `timeout`, `network`, `bad_request`, `server`, `unknown`, or a provider-specific code relayed as it came. | [default to undefined]
**providerMessage** | **string** | The provider\'s own error message, cut to 500 characters. Absent when the failure never reached the provider, or was a timeout. | [optional] [default to undefined]

## Example

```typescript
import { AiMetaGenerate402Response } from '@onlyoffice/docspace-api-sdk';

const instance: AiMetaGenerate402Response = {
    error,
    code,
    providerMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
