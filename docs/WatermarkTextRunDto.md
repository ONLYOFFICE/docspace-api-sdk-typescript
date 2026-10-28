# WatermarkTextRunDto

A run of watermark text with its own colour and size.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fill** | **Array&lt;number&gt;** | The fill color of the text run in RGB format. | [optional] [default to undefined]
**text** | **string** | The run text. | [optional] [default to undefined]
**font_size** | **string** | The font size of the text run in points. | [optional] [default to undefined]

## Example

```typescript
import { WatermarkTextRunDto } from '@onlyoffice/docspace-api-sdk';

const instance: WatermarkTextRunDto = {
    fill,
    text,
    font_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
