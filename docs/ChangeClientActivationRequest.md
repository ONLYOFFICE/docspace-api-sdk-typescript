# ChangeClientActivationRequest

Client activation change request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **boolean** | Whether the client may obtain tokens from now on. Sending false leaves the registration and the already issued tokens in place but refuses new authorization requests; sending true allows them again. | [default to undefined]

## Example

```typescript
import { ChangeClientActivationRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ChangeClientActivationRequest = {
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
