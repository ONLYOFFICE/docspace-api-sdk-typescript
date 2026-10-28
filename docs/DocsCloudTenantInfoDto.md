# DocsCloudTenantInfoDto

Represents the license and server information of a Docs Connect tenant, with usage statistics for the current period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license** | [**DocsCloudLicenseInfoDto**](DocsCloudLicenseInfoDto.md) | The license information. | [optional] [default to undefined]
**server** | [**DocsCloudServerInfoDto**](DocsCloudServerInfoDto.md) | The Docs Connect server information. | [optional] [default to undefined]
**usersLimit** | [**DocsCloudUsersLimitDto**](DocsCloudUsersLimitDto.md) | The user limits of the license. | [optional] [default to undefined]
**stats** | [**DocsCloudStatsDto**](DocsCloudStatsDto.md) | The usage statistics for the current period. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudTenantInfoDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudTenantInfoDto = {
    license,
    server,
    usersLimit,
    stats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
