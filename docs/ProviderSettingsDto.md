# ProviderSettingsDto

Available AI provider type settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ProviderType**](ProviderType.md) |  | [optional] [default to undefined]
**url** | **string** | Default API endpoint URL for the provider type. | [default to undefined]

## Example

```typescript
import { ProviderSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: ProviderSettingsDto = {
    type,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
