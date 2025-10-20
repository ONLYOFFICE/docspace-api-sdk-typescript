# MailDomainSettingsRequestsDto

The request parameters for configuring trusted mail domains and visitor invitation settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) |  | [default to undefined]
**domains** | **Array&lt;string&gt;** | The list of authorized email domains that are considered trusted. | [default to undefined]
**inviteUsersAsVisitors** | **boolean** | Specifies the default permission level for the invited users (visitors or not). | [default to undefined]

## Example

```typescript
import { MailDomainSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: MailDomainSettingsRequestsDto = {
    type,
    domains,
    inviteUsersAsVisitors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
