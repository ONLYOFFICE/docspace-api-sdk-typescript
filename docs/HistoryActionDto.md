# HistoryActionDto

The action performed on the file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**MessageAction**](MessageAction.md) | The action performed on the file. | [optional] [default to undefined]
**key** | **string** | The same action as a camel-case key, for a client to look up its own wording by. | [optional] [default to undefined]

## Example

```typescript
import { HistoryActionDto } from '@onlyoffice/docspace-api-sdk';

const instance: HistoryActionDto = {
    id,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
