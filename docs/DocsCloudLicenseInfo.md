# DocsCloudLicenseInfo

Represents the license information of a DocsCloud tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **string** | The date and time until which the license is valid. | [optional] [default to undefined]
**trial** | **boolean** | Whether the license is a trial. | [optional] [default to undefined]
**buildDate** | **string** | The license build date. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudLicenseInfo } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudLicenseInfo = {
    valid,
    trial,
    buildDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
