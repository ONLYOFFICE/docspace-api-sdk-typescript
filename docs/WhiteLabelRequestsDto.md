# WhiteLabelRequestsDto

The request parameters for configuring the white label branding settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logoText** | **string** | The text to display alongside or in place of the logo. | [optional] [default to undefined]
**logo** | [**Array&lt;ItemKeyValuePairStringLogoRequestsDto&gt;**](ItemKeyValuePairStringLogoRequestsDto.md) | The white label tenant IDs with their logos (light or dark). | [optional] [default to undefined]

## Example

```typescript
import { WhiteLabelRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: WhiteLabelRequestsDto = {
    logoText,
    logo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
