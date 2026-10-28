# EmbeddedConfigDto

The addresses the framed viewer needs. It is reported for the embedded layout only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedUrl** | **string** | The page to put into the frame. It is empty when the opening carries no external share key, since a framed  viewer cannot authenticate a portal member. | [optional] [default to undefined]
**saveUrl** | **string** | Where the download button of the framed viewer leads. | [optional] [readonly] [default to undefined]
**shareLinkParam** | **string** | The query fragment carrying the external share key, ampersand included, out of which the addresses around it  are built. | [optional] [default to undefined]
**shareUrl** | **string** | The address behind the share button of the framed viewer, the document opened full-screen for reading. It is  empty when the opening carries no external share key. | [optional] [default to undefined]
**toolbarDocked** | **string** | Where the framed viewer puts its toolbar. The portal always asks for the top. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EmbeddedConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: EmbeddedConfigDto = {
    embedUrl,
    saveUrl,
    shareLinkParam,
    shareUrl,
    toolbarDocked,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
