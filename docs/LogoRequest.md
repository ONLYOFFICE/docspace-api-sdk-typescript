# LogoRequest

The part of an uploaded picture to use as the logo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tmpFile** | **string** | The picture to cut the logo out of, named by the path that `POST api/2.0/files/logos` returned for it. The  path may be used once and only by the account that uploaded it. | [default to undefined]
**x** | **number** | The left edge of the rectangle cut out of the uploaded picture, counted in pixels from its left side. The  picture itself was already scaled down to fit 1280 by 1280 pixels when it was uploaded. | [optional] [default to undefined]
**y** | **number** | The top edge of the rectangle cut out of the uploaded picture, counted in pixels from its top. | [optional] [default to undefined]
**width** | **number** | How wide a piece of the uploaded picture to cut out, in pixels. It has to be sent together with the height,  and the portal builds the four logo sizes out of the piece. | [optional] [default to undefined]
**height** | **number** | How tall a piece of the uploaded picture to cut out, in pixels. It has to be sent together with the width. | [optional] [default to undefined]

## Example

```typescript
import { LogoRequest } from '@onlyoffice/docspace-api-sdk';

const instance: LogoRequest = {
    tmpFile,
    x,
    y,
    width,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
