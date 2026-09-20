# ValidationErrorResponse

Response containing validation errors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **string** | Error type identifier | [optional] [default to undefined]
**message** | **string** | General error message | [optional] [default to undefined]
**errors** | [**Array&lt;FieldError&gt;**](FieldError.md) | List of field specific validation errors | [optional] [default to undefined]

## Example

```typescript
import { ValidationErrorResponse } from '@onlyoffice/docspace-api-sdk';

const instance: ValidationErrorResponse = {
    error,
    message,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
