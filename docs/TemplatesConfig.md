# TemplatesConfig

The presence or absence of the templates in the \"Create New...\" menu option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **string** | The absolute URL to the image for template. | [optional] [default to undefined]
**title** | **string** | The template title that will be displayed in the \&quot;Create New...\&quot; menu option. | [optional] [default to undefined]
**url** | **string** | The absolute URL to the document where it will be created and available after creation. | [optional] [default to undefined]

## Example

```typescript
import { TemplatesConfig } from '@onlyoffice/docspace-api-sdk';

const instance: TemplatesConfig = {
    image,
    title,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
