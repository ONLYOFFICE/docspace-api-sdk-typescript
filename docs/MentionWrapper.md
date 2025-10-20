# MentionWrapper

The parameters of a user mentioned in a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**UserInfo**](UserInfo.md) |  | [optional] [default to undefined]
**email** | **string** | The user email address. | [optional] [readonly] [default to undefined]
**id** | **string** | The user unique identification. | [optional] [readonly] [default to undefined]
**image** | **string** | The path to the user\&#39;s avatar. | [optional] [readonly] [default to undefined]
**hasAccess** | **boolean** | Specifies whether the user has the access to the file where they are mentioned. | [optional] [readonly] [default to undefined]
**name** | **string** | The user full name. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { MentionWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: MentionWrapper = {
    user,
    email,
    id,
    image,
    hasAccess,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
