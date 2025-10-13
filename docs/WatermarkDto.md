# WatermarkDto

The watermark settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additions** | [**WatermarkAdditions**](WatermarkAdditions.md) |  | [default to undefined]
**text** | **string** | The watermark text. | [optional] [default to undefined]
**rotate** | **number** | The watermark text and image rotate. | [default to undefined]
**imageScale** | **number** | The watermark image scale. | [default to undefined]
**imageUrl** | **string** | The watermark image url. | [optional] [default to undefined]
**imageHeight** | **number** | The watermark image height. | [default to undefined]
**imageWidth** | **number** | The watermark image width. | [default to undefined]

## Example

```typescript
import { WatermarkDto } from '@onlyoffice/docspace-api-sdk';

const instance: WatermarkDto = {
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
