# DocServiceUrlDto

The document service URL parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | The version of the document service. | [default to undefined]
**docServiceUrlApi** | **string** | The document service URL API. | [default to undefined]
**docServiceUrl** | **string** | The document service URL. | [default to undefined]
**docServicePreloadUrl** | **string** | The URL used to preload the document service scripts. | [default to undefined]
**docServiceUrlInternal** | **string** | The internal document service URL. | [default to undefined]
**docServicePortalUrl** | **string** | The document service portal URL. | [default to undefined]
**docServiceSignatureHeader** | **string** | The document service signature header. | [default to undefined]
**docServiceSslVerification** | **boolean** | Specifies if the document service SSL verification is enabled. | [default to undefined]
**isDefault** | **boolean** | Specifies if the document service is default. | [default to undefined]

## Example

```typescript
import { DocServiceUrlDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocServiceUrlDto = {
    version,
    docServiceUrlApi,
    docServiceUrl,
    docServicePreloadUrl,
    docServiceUrlInternal,
    docServicePortalUrl,
    docServiceSignatureHeader,
    docServiceSslVerification,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
