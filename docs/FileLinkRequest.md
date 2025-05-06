# FileLinkRequest

The external link request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linkId** | **string** | The external link ID. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**expirationDate** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**internal** | **boolean** | The link scope, whether it is internal or not. | [optional] [default to undefined]
**primary** | **boolean** | Specifies whether the file link is primary or not. | [optional] [default to undefined]

## Example

```typescript
import { FileLinkRequest } from '@onlyoffice/docspace-api-typescript';

const instance: FileLinkRequest = {
    linkId,
    access,
    expirationDate,
    internal,
    primary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
