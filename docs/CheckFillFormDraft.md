# CheckFillFormDraft

The revision of the form to open and what the caller intends to do with it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** | The revision of the form to open. Pass 0 for the current revision; a positive number addresses that entry of  the file history and is accepted only from a caller who may read the history, so a member who only has  fill-forms access must send 0. | [default to undefined]
**action** | **string** | What the caller intends to do with the form. `view` asks for a read-only address and `embedded` for an address  to be shown inside a frame; both only resolve the address and leave the file untouched. Leave it out to enter  the filling flow, where the personal draft is created or reused. The value is matched case-insensitively, and  anything else behaves like an empty value. | [optional] [default to undefined]
**requestView** | **boolean** | Whether the caller asked for a read-only address. The server derives it from `action` being `view` and ignores  any value sent with the request. | [optional] [readonly] [default to undefined]
**requestEmbedded** | **boolean** | Whether the caller asked for an address to be shown inside a frame. The server derives it from `action` being  `embedded` and ignores any value sent with the request. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { CheckFillFormDraft } from '@onlyoffice/docspace-api-sdk';

const instance: CheckFillFormDraft = {
    version,
    action,
    requestView,
    requestEmbedded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
