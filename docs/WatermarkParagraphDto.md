# WatermarkParagraphDto

One paragraph of the watermark text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**align** | **number** | The paragraph align. | [optional] [default to undefined]
**runs** | [**Array&lt;WatermarkTextRunDto&gt;**](WatermarkTextRunDto.md) | The list of text runs from the paragraph. | [optional] [default to undefined]

## Example

```typescript
import { WatermarkParagraphDto } from '@onlyoffice/docspace-api-sdk';

const instance: WatermarkParagraphDto = {
    align,
    runs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
