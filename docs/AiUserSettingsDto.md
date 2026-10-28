# AiUserSettingsDto

The per-user AI settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chatRecommendedModelVisible** | **boolean** | Indicates whether the recommended model banner is visible in the AI chat for the current user. | [optional] [default to undefined]
**toolPermissionMode** | [**AiToolPermissionMode**](AiToolPermissionMode.md) | How tool calls made by the model are approved for the current user. The default applies while the user has stored nothing. | [optional] [default to undefined]

## Example

```typescript
import { AiUserSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiUserSettingsDto = {
    chatRecommendedModelVisible,
    toolPermissionMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
