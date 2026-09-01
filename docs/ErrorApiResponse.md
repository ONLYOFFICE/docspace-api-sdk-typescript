# ErrorApiResponse

The error body returned with every failed request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **number** | The response status flag. Always 1 on an error, as opposed to 0 on success. | [optional] [default to undefined]
**statusCode** | **number** | The HTTP status code of the response, repeated in the body. | [optional] [default to undefined]
**error** | [**ErrorApiResponseError**](ErrorApiResponseError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ErrorApiResponse } from '@onlyoffice/docspace-api-sdk';

const instance: ErrorApiResponse = {
    status,
    statusCode,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
