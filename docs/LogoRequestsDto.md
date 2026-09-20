# LogoRequestsDto

The two theme variants of one branding logo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**light** | **string** | The image used on a light background, either as a `data:image/png;base64,...` payload - `png`, `jpg` and  `svg` are accepted - or as the name of a file already put in the temporary store. | [optional] [default to undefined]
**dark** | **string** | The image used on a dark background, in the same two forms as `light`. It is only stored for the slots that  have a dark variant and is ignored for the favicon and the editor logos. | [optional] [default to undefined]

## Example

```typescript
import { LogoRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: LogoRequestsDto = {
    light,
    dark,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
