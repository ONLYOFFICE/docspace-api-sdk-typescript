# AiAssignmentsExpanded

The bindings with `expand=profile`: the bound profiles themselves, plus how many profiles the portal has, so a chat can start on this one read.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignments** | [**{ [key: string]: AiProfile; }**](AiProfile.md) | The bound profiles keyed by action type, as `GET api/2.0/ai/profiles/list` describes them. A binding whose profile no longer exists is left out. | [default to undefined]
**profilesTotal** | **number** | How many profiles the portal has. | [default to undefined]
**chatProfilesTotal** | **number** | How many of those profiles can chat; a profile without declared capabilities counts as one that can. | [default to undefined]

## Example

```typescript
import { AiAssignmentsExpanded } from '@onlyoffice/docspace-api-sdk';

const instance: AiAssignmentsExpanded = {
    assignments,
    profilesTotal,
    chatProfilesTotal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
