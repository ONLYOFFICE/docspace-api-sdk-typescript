# SalesRequestsDto

The request parameters for handling sales and payment inquiries in the portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userName** | **string** | The name of the user submitting the sales request. | [optional] [default to undefined]
**email** | **string** | The contact email address for the sales inquiry. | [default to undefined]
**message** | **string** | The details of the sales inquiry or payment request. | [default to undefined]

## Example

```typescript
import { SalesRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: SalesRequestsDto = {
    userName,
    email,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
