# ActionLinkActionRequest

An anchor inside a document, as the editor writes it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **string** | The anchor value produced by the editor, opaque to the portal: it names the comment, the mention or the  place the document is scrolled to. | [optional] [default to undefined]
**type** | **string** | What the anchor points at, as the editor names it - a comment thread, for instance. | [optional] [default to undefined]

## Example

```typescript
import { ActionLinkActionRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ActionLinkActionRequest = {
    data,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
