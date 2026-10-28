# LogoConfigDto

The logo the editor shows, resolved for the file type and the layout of this opening.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **string** | The logo for the current layout and file type, as the portal branding defines it. | [optional] [default to undefined]
**imageDark** | **string** | The variant for a dark interface theme. | [optional] [default to undefined]
**imageLight** | **string** | The variant for a light interface theme. | [optional] [default to undefined]
**imageEmbedded** | **string** | The variant for the framed viewer. It is empty in every layout but the embedded one. | [optional] [default to undefined]
**url** | **string** | Where clicking the logo takes the user. | [optional] [default to undefined]
**visible** | **boolean** | Whether the logo is shown at all; the mobile layout hides it. | [optional] [default to undefined]

## Example

```typescript
import { LogoConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: LogoConfigDto = {
    image,
    imageDark,
    imageLight,
    imageEmbedded,
    url,
    visible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
