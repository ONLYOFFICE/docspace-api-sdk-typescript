# UpdateMembersQuotaRequestDto

The request parameters for updating a user quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userIds** | **Array&lt;string&gt;** | The list of user IDs. | [optional] [default to undefined]
**quota** | [**UpdateMembersQuotaRequestDtoQuota**](UpdateMembersQuotaRequestDtoQuota.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateMembersQuotaRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: UpdateMembersQuotaRequestDto = {
    userIds,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
