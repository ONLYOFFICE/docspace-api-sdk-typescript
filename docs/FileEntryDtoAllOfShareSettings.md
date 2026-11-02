# FileEntryDtoAllOfShareSettings

How many links of each kind currently exist for the entry, counted separately for the primary link and the  additional ones. Kinds with no links are left out, and the whole field is null when the caller may not change  the access or no link exists at all.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | **number** |  | [optional] [default to undefined]
**ExternalLink** | **number** |  | [optional] [default to undefined]
**Group** | **number** |  | [optional] [default to undefined]
**InvitationLink** | **number** |  | [optional] [default to undefined]
**PrimaryExternalLink** | **number** |  | [optional] [default to undefined]
**AiProject** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { FileEntryDtoAllOfShareSettings } from '@onlyoffice/docspace-api-sdk';

const instance: FileEntryDtoAllOfShareSettings = {
    User,
    ExternalLink,
    Group,
    InvitationLink,
    PrimaryExternalLink,
    AiProject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
