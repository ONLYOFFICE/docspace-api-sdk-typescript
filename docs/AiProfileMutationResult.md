# AiProfileMutationResult

Outcome of `create` / `update` — either a success carrying the persisted profile, or a failure with a field-level error description from the name check or the provider credential check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**profile** | [**AiProfile**](AiProfile.md) |  | [optional] [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiProfileMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiProfileMutationResult = {
    success,
    profile,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
