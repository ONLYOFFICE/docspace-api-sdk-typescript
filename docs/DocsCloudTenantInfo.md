# DocsCloudTenantInfo

Represents the license and server information of a DocsCloud tenant, with usage statistics for the current period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license** | [**DocsCloudLicenseInfo**](DocsCloudLicenseInfo.md) |  | [optional] [default to undefined]
**server** | [**DocsCloudServerInfo**](DocsCloudServerInfo.md) |  | [optional] [default to undefined]
**usersLimit** | [**DocsCloudUsersLimit**](DocsCloudUsersLimit.md) |  | [optional] [default to undefined]
**stats** | [**DocsCloudStats**](DocsCloudStats.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudTenantInfo } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudTenantInfo = {
    license,
    server,
    usersLimit,
    stats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
