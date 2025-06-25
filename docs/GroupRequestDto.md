# GroupRequestDto

The group request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **Array&lt;string&gt;** | The list of group member IDs. | [optional] [default to undefined]
**groupManager** | **string** | Group manager ID | [default to undefined]
**groupName** | **string** | Group name | [optional] [default to undefined]

## Example

```typescript
import { GroupRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: GroupRequestDto = {
    members,
    groupManager,
    groupName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
