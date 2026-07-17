# SetWebSearchSettingsRequestBody

Parameters for configuring web search settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Indicates whether web search is enabled for AI chat sessions. | [optional] [default to undefined]
**type** | [**EngineType**](EngineType.md) |  | [optional] [default to undefined]
**key** | **string** | The API key for the selected web search engine. Pass null to keep the existing key unchanged. | [optional] [default to undefined]

## Example

```typescript
import { SetWebSearchSettingsRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: SetWebSearchSettingsRequestBody = {
    enabled,
    type,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
