# DocsCloudServerConfig

Represents the server configuration of a DocsCloud tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isAnonymousSupport** | **boolean** | Whether anonymous access is supported. | [optional] [default to undefined]
**fileSizeLimit** | **number** | The maximum file size in bytes. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudServerConfig } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudServerConfig = {
    isAnonymousSupport,
    fileSizeLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
