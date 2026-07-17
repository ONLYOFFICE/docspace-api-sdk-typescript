# WebSearchSettingsDto

The web search settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Indicates whether web search is currently enabled. | [optional] [default to undefined]
**type** | [**EngineType**](EngineType.md) |  | [optional] [default to undefined]
**needReset** | **boolean** | Indicates whether the web search API key needs to be reconfigured. | [optional] [default to undefined]

## Example

```typescript
import { WebSearchSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: WebSearchSettingsDto = {
    enabled,
    type,
    needReset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
