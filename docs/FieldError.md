# FieldError

Field specific validation error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **string** | The name of the field that failed validation | [optional] [default to undefined]
**code** | **string** | Error code for localization purposes | [optional] [default to undefined]
**message** | **string** | Human readable error message | [optional] [default to undefined]

## Example

```typescript
import { FieldError } from '@onlyoffice/docspace-api-sdk';

const instance: FieldError = {
    field,
    code,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
