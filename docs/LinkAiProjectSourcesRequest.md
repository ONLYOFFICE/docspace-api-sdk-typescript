# LinkAiProjectSourcesRequest

Rooms to link to the AI project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomIds** | **Set&lt;number&gt;** | IDs of the Instructions and Knowledge rooms to link. Each must be an active room the caller can read; rooms already linked are skipped. | [default to undefined]

## Example

```typescript
import { LinkAiProjectSourcesRequest } from '@onlyoffice/docspace-api-sdk';

const instance: LinkAiProjectSourcesRequest = {
    roomIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
