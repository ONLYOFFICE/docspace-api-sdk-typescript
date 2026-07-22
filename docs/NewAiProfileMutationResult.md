# NewAiProfileMutationResult

Outcome of `create` / `update` — either a success carrying the persisted profile, or a failure with a field-level error description from the name check or the provider credential check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**profile** | [**NewAiProfile**](NewAiProfile.md) |  | [optional] [default to undefined]
**error** | [**NewAiTErrorData**](NewAiTErrorData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiProfileMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiProfileMutationResult = {
    success,
    profile,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
