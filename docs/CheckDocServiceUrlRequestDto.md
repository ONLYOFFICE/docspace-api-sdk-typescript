# CheckDocServiceUrlRequestDto

The request parameters for checking the document service location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docServiceUrl** | **string** | The ONLYOFFICE Docs URL address. | [optional] [default to undefined]
**docServiceUrlInternal** | **string** | The ONLYOFFICE Docs URL address in the local private network. | [optional] [default to undefined]
**docServiceUrlPortal** | **string** | The ONLYOFFICE Docs URL address. | [optional] [default to undefined]
**docServiceSignatureSecret** | **string** | The signature secret of the ONLYOFFICE Docs. | [optional] [default to undefined]
**docServiceSignatureHeader** | **string** | The signature header of the ONLYOFFICE Docs. | [optional] [default to undefined]
**docServiceSslVerification** | **boolean** | Specifies if the SSL verification of the ONLYOFFICE Docs is enabled or not. | [optional] [default to undefined]

## Example

```typescript
import { CheckDocServiceUrlRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CheckDocServiceUrlRequestDto = {
    docServiceUrl,
    docServiceUrlInternal,
    docServiceUrlPortal,
    docServiceSignatureSecret,
    docServiceSignatureHeader,
    docServiceSslVerification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
