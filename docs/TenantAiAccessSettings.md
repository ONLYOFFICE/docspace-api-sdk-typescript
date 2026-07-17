# TenantAiAccessSettings

The tenant-level settings for enabling or disabling all AI functionality in DocSpace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Specifies whether AI functionality is enabled for the tenant.  When set to `false`, all AI features (chat, agents, vectorization) are disabled tenant-wide. | [optional] [default to undefined]
**lastModified** | **string** | The timestamp indicating when the settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { TenantAiAccessSettings } from '@onlyoffice/docspace-api-sdk';

const instance: TenantAiAccessSettings = {
    enabled,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
