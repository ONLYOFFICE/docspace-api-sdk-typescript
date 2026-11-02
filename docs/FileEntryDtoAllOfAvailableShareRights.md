# FileEntryDtoAllOfAvailableShareRights

Which access levels may be handed out on this entry, listed per kind of recipient, so that a client offers  only levels the entry actually supports - a room for filling forms and a plain folder do not accept the same  ones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**ExternalLink** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**Group** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**InvitationLink** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**PrimaryExternalLink** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**AiProject** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { FileEntryDtoAllOfAvailableShareRights } from '@onlyoffice/docspace-api-sdk';

const instance: FileEntryDtoAllOfAvailableShareRights = {
    User,
    ExternalLink,
    Group,
    InvitationLink,
    PrimaryExternalLink,
    AiProject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
