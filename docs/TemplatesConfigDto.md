# TemplatesConfigDto

One creation template offered in the editor. The portal no longer offers any, so this never appears in an editor  configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **string** | The absolute URL to the image for template. | [optional] [default to undefined]
**title** | **string** | The template title that will be displayed in the Create New... menu option. | [optional] [default to undefined]
**url** | **string** | The absolute URL to the document where it will be created and available after creation. | [optional] [default to undefined]

## Example

```typescript
import { TemplatesConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: TemplatesConfigDto = {
    image,
    title,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
