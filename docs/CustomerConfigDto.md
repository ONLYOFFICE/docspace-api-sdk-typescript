# CustomerConfigDto

The branding of the organization running the portal, as the editor About panel shows it. It is reported on a  server installation only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | The postal address from the portal branding settings; empty when none was entered. | [optional] [default to undefined]
**logo** | **string** | The About-panel logo of the organization. | [optional] [default to undefined]
**logoDark** | **string** | The About-panel logo for a dark interface theme. | [optional] [default to undefined]
**mail** | **string** | The contact address from the portal branding settings. | [optional] [default to undefined]
**name** | **string** | The organization name shown in the editor. | [optional] [default to undefined]
**www** | **string** | The website of the organization. | [optional] [default to undefined]

## Example

```typescript
import { CustomerConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerConfigDto = {
    address,
    logo,
    logoDark,
    mail,
    name,
    www,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
