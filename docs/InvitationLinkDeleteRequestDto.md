# InvitationLinkDeleteRequestDto

Which invitation link is withdrawn.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The link to delete, by the `id` that creating or reading it returned. A link recreated for the same role  afterwards gets a new id, a new URL and a use count starting from zero. | [default to undefined]

## Example

```typescript
import { InvitationLinkDeleteRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: InvitationLinkDeleteRequestDto = {
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
