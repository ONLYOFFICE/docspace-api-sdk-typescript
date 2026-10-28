# AnonymousConfigDto

How the editors treat a participant who opened the document without an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | **boolean** | Whether the editors ask an anonymous participant for a display name before letting them in. It follows the  chat permission of the document, since a nameless participant cannot take part in one. | [default to undefined]

## Example

```typescript
import { AnonymousConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: AnonymousConfigDto = {
    request,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
