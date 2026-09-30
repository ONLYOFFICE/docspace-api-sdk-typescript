# MembersRequest

The accounts a member operation applies to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **Array&lt;string&gt;** | The accounts the operation applies to. When adding or replacing members, an account that is a guest, is  disabled or does not exist is skipped without an error; when removing them, an ID that is not a member is  skipped as well. | [optional] [default to undefined]

## Example

```typescript
import { MembersRequest } from '@onlyoffice/docspace-api-sdk';

const instance: MembersRequest = {
    members,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
