# GeneratePresentationToolCallParametersDto

The generate presentation tool call parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **string** | What the generated presentation is about. | [optional] [default to undefined]
**slideCount** | **string** | How many slides to generate, as the request spelled it. | [optional] [default to undefined]
**style** | **string** | The visual style the slides should be generated in. | [optional] [default to undefined]

## Example

```typescript
import { GeneratePresentationToolCallParametersDto } from '@onlyoffice/docspace-api-sdk';

const instance: GeneratePresentationToolCallParametersDto = {
    topic,
    slideCount,
    style,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
