# ThumbnailsRequest

The crop rectangle to apply to an avatar image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tmpFile** | **string** | The temporary image to crop, as returned in the `data` of an upload made with `autosave` off. Only the file  name part of the value is used. Omit it to re-crop the photo the profile already has. | [optional] [default to undefined]
**x** | **number** | The distance in pixels from the left edge of the original image to the left edge of the crop rectangle. | [optional] [default to undefined]
**y** | **number** | The distance in pixels from the top edge of the original image to the top edge of the crop rectangle. | [optional] [default to undefined]
**width** | **number** | The width of the crop rectangle in pixels. Passing 0 together with `height` and `tmpFile` keeps the whole  uploaded image instead of cropping it. | [optional] [default to undefined]
**height** | **number** | The height of the crop rectangle in pixels. Passing 0 together with `width` and `tmpFile` keeps the whole  uploaded image instead of cropping it. | [optional] [default to undefined]

## Example

```typescript
import { ThumbnailsRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ThumbnailsRequest = {
    tmpFile,
    x,
    y,
    width,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
