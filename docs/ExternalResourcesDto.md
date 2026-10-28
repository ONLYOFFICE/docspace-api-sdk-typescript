# ExternalResourcesDto

The external resources settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adminPanel** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the administration panel. It is returned only to the full administrators of a licensed (Enterprise) server (standalone) portal. | [optional] [default to undefined]
**api** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the product API. | [optional] [default to undefined]
**common** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the common product information. | [optional] [default to undefined]
**forum** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the forum. | [optional] [default to undefined]
**helpcenter** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the Help Center. | [optional] [default to undefined]
**integrations** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the product integrations. | [optional] [default to undefined]
**site** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the product website. | [optional] [default to undefined]
**socialNetworks** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the product social nerworks. | [optional] [default to undefined]
**support** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the product support. | [optional] [default to undefined]
**videoguides** | [**ExternalResourceDto**](ExternalResourceDto.md) | The link to the video guides. | [optional] [default to undefined]

## Example

```typescript
import { ExternalResourcesDto } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalResourcesDto = {
    adminPanel,
    api,
    common,
    forum,
    helpcenter,
    integrations,
    site,
    socialNetworks,
    support,
    videoguides,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
