# DocsCloudQuotaDto

Represents the current user quota of a Docs Connect tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**Array&lt;DocsCloudQuotaUserDto&gt;**](DocsCloudQuotaUserDto.md) | The editor users. | [optional] [default to undefined]
**usersView** | [**Array&lt;DocsCloudQuotaUserDto&gt;**](DocsCloudQuotaUserDto.md) | The viewer users. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudQuotaDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudQuotaDto = {
    users,
    usersView,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
