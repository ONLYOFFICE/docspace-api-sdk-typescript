# LogoRequestsDto

The request parameters for the theme-specific logo configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**light** | **string** | The URL or base64-encoded image data for the light theme logo. | [optional] [default to undefined]
**dark** | **string** | The URL or base64-encoded image data for the dark theme logo. | [optional] [default to undefined]

## Example

```typescript
import { LogoRequestsDto } from '@onlyoffice/docspace-api-typescript';

const instance: LogoRequestsDto = {
    light,
    dark,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
