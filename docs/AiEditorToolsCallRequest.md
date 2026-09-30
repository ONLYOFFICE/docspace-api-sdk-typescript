# AiEditorToolsCallRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the tool to run, as listed by the tools endpoint. A name that is unknown or excluded from the editor is rejected with 400. | [default to undefined]
**arguments** | **{ [key: string]: any | null; }** | Arguments for the tool, shaped by that tool\'s own input schema. Treated as empty when it is not an object. | [optional] [default to undefined]
**entityId** | **string** | Room the call is scoped to. Left out for a portal-wide call. | [optional] [default to undefined]

## Example

```typescript
import { AiEditorToolsCallRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiEditorToolsCallRequest = {
    name,
    arguments,
    entityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
