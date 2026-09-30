# UpdateMembersRequestDto

The request parameters for updating the user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userIds** | **Array&lt;string&gt;** | The accounts the operation applies to. System accounts are dropped from the list without an error, and the  remaining ones are processed in the order they are given. | [optional] [default to undefined]
**resendAll** | **boolean** | Reaches every pending account of the portal instead of the ones in `userIds`. It is read only by  `PUT api/2.0/people/invite` and is ignored by every other operation that binds this body. | [optional] [default to undefined]

## Example

```typescript
import { UpdateMembersRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateMembersRequestDto = {
    userIds,
    resendAll,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
