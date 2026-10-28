# AiToolsSetDisabledRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serverType** | **string** |  | [default to undefined]
**toolNames** | **Array&lt;string&gt;** | Tool names to disable. | [default to undefined]
**entityId** | **string** |  | [optional] [default to undefined]
**scope** | [**AiChatToolPrefsScope**](AiChatToolPrefsScope.md) | The list the write lands in; omitted means the caller\'s own. | [optional] [default to undefined]

## Example

```typescript
import { AiToolsSetDisabledRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiToolsSetDisabledRequest = {
    serverType,
    toolNames,
    entityId,
    scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
