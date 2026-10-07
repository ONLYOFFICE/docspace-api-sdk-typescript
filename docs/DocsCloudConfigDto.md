# DocsCloudConfigDto

Represents the configuration of a Docs Connect tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantName** | **string** | The tenant name. | [optional] [default to undefined]
**security** | [**DocsCloudSecurityConfigDto**](DocsCloudSecurityConfigDto.md) | The security configuration. | [optional] [default to undefined]
**server** | [**DocsCloudServerConfigDto**](DocsCloudServerConfigDto.md) | The server configuration. | [optional] [default to undefined]
**wopi** | [**DocsCloudWopiConfigDto**](DocsCloudWopiConfigDto.md) | The WOPI configuration. | [optional] [default to undefined]
**ipFilter** | [**DocsCloudIpFilterConfigDto**](DocsCloudIpFilterConfigDto.md) | The IP filter configuration. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudConfigDto = {
    tenantName,
    security,
    server,
    wopi,
    ipFilter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
