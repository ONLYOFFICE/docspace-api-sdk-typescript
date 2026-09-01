# DocsCloudUserStats

Represents the usage statistics of a single DocsCloud user category (editor or viewer).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **number** | The number of active users. | [optional] [default to undefined]
**internal** | **number** | The number of internal users. | [optional] [default to undefined]
**external** | **number** | The number of external users. | [optional] [default to undefined]
**remaining** | **number** | The number of remaining users before the limit is reached. | [optional] [default to undefined]
**criticalRemaining** | **boolean** | Whether the number of remaining users is critically low. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudUserStats } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudUserStats = {
    active,
    internal,
    external,
    remaining,
    criticalRemaining,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
