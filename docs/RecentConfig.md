# RecentConfig

The presence or absence of the documents in the \"Open Recent...\" menu option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | **string** | The folder where the document is stored. | [optional] [default to undefined]
**title** | **string** | The document title that will be displayed in the Open Recent... menu option. | [optional] [default to undefined]
**url** | **string** | The absolute URL to the document where it is stored. | [optional] [default to undefined]

## Example

```typescript
import { RecentConfig } from '@onlyoffice/docspace-api-typescript';

const instance: RecentConfig = {
    folder,
    title,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
