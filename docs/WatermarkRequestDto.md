# WatermarkRequestDto

The request parameters for adding watermarks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Specifies whether watermarks are on or off. | [optional] [default to undefined]
**additions** | [**WatermarkAdditions**](WatermarkAdditions.md) |  | [optional] [default to undefined]
**text** | **string** | The watermark text. | [optional] [default to undefined]
**rotate** | **number** | The watermark text and image rotate angle. | [optional] [default to undefined]
**imageScale** | **number** | The watermark image scale. | [optional] [default to undefined]
**imageUrl** | **string** | The path to the temporary image file. | [optional] [default to undefined]
**imageHeight** | **number** | The watermark image height. | [optional] [default to undefined]
**imageWidth** | **number** | The watermark image width. | [optional] [default to undefined]

## Example

```typescript
import { WatermarkRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: WatermarkRequestDto = {
    enabled,
    additions,
    text,
    rotate,
    imageScale,
    imageUrl,
    imageHeight,
    imageWidth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
