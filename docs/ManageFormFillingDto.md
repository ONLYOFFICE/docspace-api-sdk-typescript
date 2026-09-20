# ManageFormFillingDto

The action to apply to the filling of a PDF form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formId** | **number** | The PDF form the action applies to. This is the value the operation reads, rather than the identifier in its  route, and the two are to be sent the same. | [default to undefined]
**action** | [**FormFillingManageAction**](FormFillingManageAction.md) | The action to apply. | [optional] [default to undefined]

## Example

```typescript
import { ManageFormFillingDto } from '@onlyoffice/docspace-api-sdk';

const instance: ManageFormFillingDto = {
    formId,
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
