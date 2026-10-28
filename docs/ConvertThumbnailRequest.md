# ConvertThumbnailRequest

How a thumbnail is fitted. A field left out takes the document service default.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect** | **number** | The mode to fit the image to the height and width specified:  0 - stretch file to fit height and width;  1 - keep the aspect for the image;  2 - convert the metric size of the page into pixels at 96 dpi. | [optional] [default to undefined]
**first** | **boolean** | Whether a thumbnail is made of the first page only; false makes one of every page. | [optional] [default to undefined]
**height** | **number** | The thumbnail height in pixels; not used with aspect 2. | [optional] [default to undefined]
**width** | **number** | The thumbnail width in pixels; not used with aspect 2. | [optional] [default to undefined]

## Example

```typescript
import { ConvertThumbnailRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ConvertThumbnailRequest = {
    aspect,
    first,
    height,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
