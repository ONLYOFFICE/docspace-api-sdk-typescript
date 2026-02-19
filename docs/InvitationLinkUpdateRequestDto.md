# InvitationLinkUpdateRequestDto

The request parameters for updating an invitation link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the invitation link. | [default to undefined]
**expiration** | **string** | The expiration date of the invitation link. | [optional] [default to undefined]
**maxUseCount** | **number** | The maximum number of times the invitation link can be used. | [optional] [default to undefined]

## Example

```typescript
import { InvitationLinkUpdateRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: InvitationLinkUpdateRequestDto = {
    id,
    expiration,
    maxUseCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
