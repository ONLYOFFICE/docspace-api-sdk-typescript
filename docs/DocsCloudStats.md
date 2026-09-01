# DocsCloudStats

Represents the usage statistics of a DocsCloud tenant for the current period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**periodDay** | **number** | The length of the statistics period in days. | [optional] [default to undefined]
**editor** | [**DocsCloudUserStats**](DocsCloudUserStats.md) | The statistics for editor users. | [optional] [default to undefined]
**viewer** | [**DocsCloudUserStats**](DocsCloudUserStats.md) | The statistics for viewer users. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudStats } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudStats = {
    periodDay,
    editor,
    viewer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
