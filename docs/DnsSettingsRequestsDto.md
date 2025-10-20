# DnsSettingsRequestsDto

The request parameters for managing the DNS (Domain Name System) settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dnsName** | **string** | The DNS (Domain Name System) configuration name. | [optional] [default to undefined]
**enable** | **boolean** | Specifies whether the DNS settings are enabled. | [optional] [default to undefined]

## Example

```typescript
import { DnsSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: DnsSettingsRequestsDto = {
    dnsName,
    enable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
