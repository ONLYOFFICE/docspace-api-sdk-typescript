# DocsCloudServerInfo

Represents the DocsCloud server information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | The server version. | [optional] [default to undefined]
**packageType** | **string** | The server package type (Open Source, Enterprise Edition or Developer Edition). | [optional] [default to undefined]
**date** | **string** | The server build date. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudServerInfo } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudServerInfo = {
    version,
    packageType,
    date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
