# MentionWrapper

The mention message parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**UserInfo**](UserInfo.md) |  | [optional] [default to undefined]
**email** | **string** | The email address of the user. | [optional] [readonly] [default to undefined]
**id** | **string** | The identification of the user. | [optional] [readonly] [default to undefined]
**image** | **string** | The path to the user\&#39;s avatar. | [optional] [readonly] [default to undefined]
**hasAccess** | **boolean** | Specifies if the user has the access to the file or not. | [optional] [readonly] [default to undefined]
**name** | **string** | The full name of the user. | [optional] [readonly] [default to undefined]

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
