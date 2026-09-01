# AiImagePrice

The price of an image model: per prompt token and per generated image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **number** | The price of a single prompt token. | [optional] [default to undefined]
**completion** | **number** | The cost associated with the completion of a prompt in an AI model. | [optional] [default to undefined]
**image** | **number** | The price of a single generated image. | [optional] [default to undefined]

## Example

```typescript
import { AiImagePrice } from '@onlyoffice/docspace-api-sdk';

const instance: AiImagePrice = {
    prompt,
    completion,
    image,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
