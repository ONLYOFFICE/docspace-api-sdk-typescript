# EmbeddedConfig

The configuration parameters for the embedded document type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedUrl** | **string** | The absolute URL to the document serving as a source file for the document embedded into the web page. | [optional] [readonly] [default to undefined]
**saveUrl** | **string** | The absolute URL that will allow the document to be saved onto the user personal computer. | [optional] [readonly] [default to undefined]
**shareLinkParam** | **string** | The shared URL parameter. | [optional] [default to undefined]
**shareUrl** | **string** | The absolute URL that will allow other users to share this document. | [optional] [readonly] [default to undefined]
**toolbarDocked** | **string** | The place for the embedded viewer toolbar, can be either \&quot;top\&quot; or \&quot;bottom\&quot;. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EmbeddedConfig } from '@onlyoffice/docspace-api-typescript';

const instance: EmbeddedConfig = {
    embedUrl,
    saveUrl,
    shareLinkParam,
    shareUrl,
    toolbarDocked,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
