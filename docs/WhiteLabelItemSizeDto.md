# WhiteLabelItemSizeDto

The pixel box a logo slot is drawn in, in the shape the imaging library reports a geometry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspectRatio** | **boolean** | Whether the numbers are to be read as an aspect ratio rather than as pixels. Always `false` on the sizes  this API reports. | [optional] [default to undefined]
**fillArea** | **boolean** | Whether an image would be scaled to cover the box rather than to fit inside it. Always `false` here. | [optional] [default to undefined]
**greater** | **boolean** | Whether scaling would apply only to an image larger than the box. Always `false` here. | [optional] [default to undefined]
**height** | **number** | The height of the box in pixels - one of the two fields of this object that carry information. | [optional] [default to undefined]
**ignoreAspectRatio** | **boolean** | Whether scaling would be allowed to distort the image. Always `false` here. | [optional] [default to undefined]
**isPercentage** | **boolean** | Whether `width` and `height` are to be read as percentages. Always `false` here, so both are pixels. | [optional] [default to undefined]
**less** | **boolean** | Whether scaling would apply only to an image smaller than the box. Always `false` here. | [optional] [default to undefined]
**limitPixels** | **boolean** | Whether the box is to be read as a total pixel-area budget instead of as two dimensions. Always `false`  here. | [optional] [default to undefined]
**width** | **number** | The width of the box in pixels - the other field of this object that carries information. | [optional] [default to undefined]
**x** | **number** | The horizontal offset of the box from the origin. Always `0` here. | [optional] [default to undefined]
**y** | **number** | The vertical offset of the box from the origin. Always `0` here. | [optional] [default to undefined]

## Example

```typescript
import { WhiteLabelItemSizeDto } from '@onlyoffice/docspace-api-sdk';

const instance: WhiteLabelItemSizeDto = {
    aspectRatio,
    fillArea,
    greater,
    height,
    ignoreAspectRatio,
    isPercentage,
    less,
    limitPixels,
    width,
    x,
    y,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
