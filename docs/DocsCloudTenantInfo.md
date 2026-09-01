# DocsCloudTenantInfo

Represents the license and server information of a DocsCloud tenant, with usage statistics for the current period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license** | [**DocsCloudLicenseInfo**](DocsCloudLicenseInfo.md) | The license information. | [optional] [default to undefined]
**server** | [**DocsCloudServerInfo**](DocsCloudServerInfo.md) | The DocsCloud server information. | [optional] [default to undefined]
**usersLimit** | [**DocsCloudUsersLimit**](DocsCloudUsersLimit.md) | The user limits of the license. | [optional] [default to undefined]
**stats** | [**DocsCloudStats**](DocsCloudStats.md) | The usage statistics for the current period. | [optional] [default to undefined]

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
