# EditorToolCallParametersDto

The editor tool call parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | What the generated fillable form should ask for, in the words the request was made in. | [default to undefined]
**topic** | **string** | What the generated presentation is about. | [optional] [default to undefined]
**slideCount** | **string** | How many slides to generate, as the request spelled it. | [optional] [default to undefined]
**style** | **string** | The visual style the slides should be generated in. | [optional] [default to undefined]

## Example

```typescript
import { EditorToolCallParametersDto } from '@onlyoffice/docspace-api-sdk';

const instance: EditorToolCallParametersDto = {
    description,
    topic,
    slideCount,
    style,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
