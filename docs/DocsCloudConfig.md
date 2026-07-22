# DocsCloudConfig

Represents the configuration of a DocsCloud tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantName** | **string** | The tenant name. | [optional] [default to undefined]
**security** | [**DocsCloudSecurityConfig**](DocsCloudSecurityConfig.md) |  | [optional] [default to undefined]
**server** | [**DocsCloudServerConfig**](DocsCloudServerConfig.md) |  | [optional] [default to undefined]
**wopi** | [**DocsCloudWopiConfig**](DocsCloudWopiConfig.md) |  | [optional] [default to undefined]
**ipFilter** | [**DocsCloudIpFilterConfig**](DocsCloudIpFilterConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudConfig } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudConfig = {
    tenantName,
    security,
    server,
    wopi,
    ipFilter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
