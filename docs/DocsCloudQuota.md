# DocsCloudQuota

Represents the current user quota of a DocsCloud tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**Array&lt;DocsCloudQuotaUser&gt;**](DocsCloudQuotaUser.md) | The editor users. | [optional] [default to undefined]
**usersView** | [**Array&lt;DocsCloudQuotaUser&gt;**](DocsCloudQuotaUser.md) | The viewer users. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudQuota } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudQuota = {
    users,
    usersView,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
