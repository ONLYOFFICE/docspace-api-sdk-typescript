# DocsCloudUsage

Represents the usage statistics of a DocsCloud tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**since** | **string** | The date and time the usage statistics are counted from. | [optional] [default to undefined]
**activeCount** | **number** | The number of active users. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudUsage } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudUsage = {
    since,
    activeCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
