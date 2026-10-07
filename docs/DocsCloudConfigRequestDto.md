# DocsCloudConfigRequestDto

Represents the configuration of a Docs Connect tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantName** | **string** | The tenant name. | [optional] [default to undefined]
**security** | [**DocsCloudSecurityConfigRequest**](DocsCloudSecurityConfigRequest.md) | The security configuration. | [optional] [default to undefined]
**server** | [**DocsCloudServerConfigRequest**](DocsCloudServerConfigRequest.md) | The server configuration. | [optional] [default to undefined]
**wopi** | [**DocsCloudWopiConfigRequest**](DocsCloudWopiConfigRequest.md) | The WOPI configuration. | [optional] [default to undefined]
**ipFilter** | [**DocsCloudIpFilterConfigRequest**](DocsCloudIpFilterConfigRequest.md) | The IP filter configuration. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudConfigRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudConfigRequestDto = {
    tenantName,
    security,
    server,
    wopi,
    ipFilter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
