# FileLink

The file link properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filetype** | **string** | The type of the file for the source viewed or edited document. | [optional] [default to undefined]
**token** | **string** | The encrypted signature added to the config in the form of a token. | [optional] [default to undefined]
**url** | **string** | The absolute URL where the source viewed or edited document is stored. | [optional] [default to undefined]

## Example

```typescript
import { FileLink } from '@onlyoffice/docspace-api-typescript';

const instance: FileLink = {
    filetype,
    token,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
