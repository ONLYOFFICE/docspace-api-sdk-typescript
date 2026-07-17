# SetDefaultProviderRequestDto

Request parameters for setting the default AI provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **number** | AI provider identifier. | [optional] [default to undefined]
**defaultModel** | **string** | Default model identifier to use with this provider. | [default to undefined]

## Example

```typescript
import { SetDefaultProviderRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: SetDefaultProviderRequestDto = {
    providerId,
    defaultModel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
