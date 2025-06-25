# MentionMessageWrapper

The mention message parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionLink** | [**ActionLinkConfig**](ActionLinkConfig.md) |  | [optional] [default to undefined]
**emails** | **Array&lt;string&gt;** | A list of emails which will receive the mention message. | [optional] [default to undefined]
**message** | **string** | The comment message. | [optional] [default to undefined]

## Example

```typescript
import { MentionMessageWrapper } from '@onlyoffice/docspace-api-typescript';

const instance: MentionMessageWrapper = {
    actionLink,
    emails,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
