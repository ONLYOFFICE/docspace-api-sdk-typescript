# WhiteLabelItemPathDto

The image URLs of one logo slot, per interface theme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**light** | **string** | The absolute URL of the image to render on a light background. It is filled in unless the request asked  for the dark theme alone with `isDark=true`, in which case only `dark` comes back. | [optional] [default to undefined]
**dark** | **string** | The absolute URL of the image to render on a dark background. When both themes are asked for it comes back  empty for a slot that has no separate dark image, meaning the light one is to be used for both; when  `isDark=false` was passed it is left out entirely. | [optional] [default to undefined]

## Example

```typescript
import { WhiteLabelItemPathDto } from '@onlyoffice/docspace-api-sdk';

const instance: WhiteLabelItemPathDto = {
    light,
    dark,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
