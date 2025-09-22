# CheckFillFormDraft

The parameters for checking the form draft filling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** | The file version of the form draft. | [default to undefined]
**action** | **string** | The action with the form draft. | [optional] [default to undefined]
**requestView** | **boolean** | Specifies whether to request the form for viewing or not. | [optional] [readonly] [default to undefined]
**requestEmbedded** | **boolean** | Specifies whether to request an embedded form or not. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { CheckFillFormDraft } from '@onlyoffice/docspace-api-sdk';

const instance: CheckFillFormDraft = {
    version,
    action,
    requestView,
    requestEmbedded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
