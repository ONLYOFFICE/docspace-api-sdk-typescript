# WatermarkOnDraw

The document watermark parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**width** | **number** | Defines the watermark width measured in millimeters. | [optional] [default to undefined]
**height** | **number** | Defines the watermark height measured in millimeters. | [optional] [default to undefined]
**margins** | **Array&lt;number&gt;** | Defines the watermark margins measured in millimeters. | [optional] [default to undefined]
**fill** | **string** | Defines the watermark fill color. | [optional] [default to undefined]
**rotate** | **number** | Defines the watermark rotation angle. | [optional] [default to undefined]
**transparent** | **number** | Defines the watermark transparency percentage. | [optional] [default to undefined]
**paragraphs** | [**Array&lt;Paragraph&gt;**](Paragraph.md) | The list of paragraphs of the watermark. | [optional] [default to undefined]

## Example

```typescript
import { WatermarkOnDraw } from '@onlyoffice/docspace-api-sdk';

const instance: WatermarkOnDraw = {
    width,
    height,
    margins,
    fill,
    rotate,
    transparent,
    paragraphs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
