# ProblemDetail

RFC 7807 problem details returned by the registration API for failed requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | A URI reference that identifies the problem type. This service sets it to the DocSpace API getting-started page. | [optional] [default to undefined]
**title** | **string** | A short, human-readable summary of the problem type, typically the HTTP status reason phrase. | [optional] [default to undefined]
**status** | **number** | The HTTP status code for this occurrence of the problem. | [optional] [default to undefined]
**detail** | **string** | A human-readable explanation specific to this occurrence of the problem. | [optional] [default to undefined]
**instance** | **string** | A URI reference that identifies the specific occurrence, set to the request path. | [optional] [default to undefined]
**properties** | **{ [key: string]: any | null; }** | Extension members carried on the problem. Usually empty; validation failures also surface as the top-level errors array. | [optional] [default to undefined]
**errors** | [**Array&lt;FieldError&gt;**](FieldError.md) | Field-specific validation errors. Present when the request body or parameters failed validation, or when a named scope is not in the tenant catalogue. | [optional] [default to undefined]

## Example

```typescript
import { ProblemDetail } from '@onlyoffice/docspace-api-sdk';

const instance: ProblemDetail = {
    type,
    title,
    status,
    detail,
    instance,
    properties,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
