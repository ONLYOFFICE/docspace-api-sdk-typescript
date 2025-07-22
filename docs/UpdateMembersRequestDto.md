# UpdateMembersRequestDto

The request parameters for updating the user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userIds** | **Array&lt;string&gt;** | The list of user IDs. | [optional] [default to undefined]
**resendAll** | **boolean** | Specifies whether to resend invitation letters to all the users or not. | [optional] [default to undefined]

## Example

```typescript
import { UpdateMembersRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateMembersRequestDto = {
    userIds,
    resendAll,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
