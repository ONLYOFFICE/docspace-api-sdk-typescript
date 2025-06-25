# WatermarkDto

The watermark settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additions** | [**WatermarkAdditions**](WatermarkAdditions.md) |  | [optional] [default to undefined]
**text** | **string** | The watermark text. | [optional] [default to undefined]
**rotate** | **number** | The watermark text and image rotate. | [optional] [default to undefined]
**imageScale** | **number** | The watermark image scale. | [optional] [default to undefined]
**imageUrl** | **string** | The watermark image url. | [optional] [default to undefined]
**imageHeight** | **number** | The watermark image height. | [optional] [default to undefined]
**imageWidth** | **number** | The watermark image width. | [optional] [default to undefined]

## Example

```typescript
import { WatermarkDto } from '@onlyoffice/docspace-api-typescript';

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
