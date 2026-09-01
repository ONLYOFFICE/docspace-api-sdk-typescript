# WhiteLabelItemSizeDto

The white label logo size parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspectRatio** | **boolean** | Specifies whether the size is an aspect ratio. | [optional] [default to undefined]
**fillArea** | **boolean** | Specifies whether the logo is resized based on the smallest fitting dimension. | [optional] [default to undefined]
**greater** | **boolean** | Specifies whether the logo is resized only if it is greater than the size. | [optional] [default to undefined]
**height** | **number** | The logo height, in pixels. | [optional] [default to undefined]
**ignoreAspectRatio** | **boolean** | Specifies whether the logo is resized without preserving the aspect ratio. | [optional] [default to undefined]
**isPercentage** | **boolean** | Specifies whether the width and height are expressed as percentages. | [optional] [default to undefined]
**less** | **boolean** | Specifies whether the logo is resized only if it is less than the size. | [optional] [default to undefined]
**limitPixels** | **boolean** | Specifies whether the logo is resized using a pixel area count limit. | [optional] [default to undefined]
**width** | **number** | The logo width, in pixels. | [optional] [default to undefined]
**x** | **number** | The X offset from the origin, in pixels. | [optional] [default to undefined]
**y** | **number** | The Y offset from the origin, in pixels. | [optional] [default to undefined]

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
