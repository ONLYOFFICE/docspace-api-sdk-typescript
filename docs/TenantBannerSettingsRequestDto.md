# TenantBannerSettingsRequestDto

Whether the portal promotional banners are hidden.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hidden** | **boolean** | Whether the promotional banners are hidden from every user of the portal. The flag is only honoured on a  self-hosted installation; a SaaS portal keeps showing the banners whatever is stored here. | [optional] [default to undefined]

## Example

```typescript
import { TenantBannerSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantBannerSettingsRequestDto = {
    hidden,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
