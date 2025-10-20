# DocumentConfigDto

The document config parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileType** | **string** | The file type of the document. | [optional] [default to undefined]
**info** | [**InfoConfigDto**](InfoConfigDto.md) |  | [optional] [default to undefined]
**isLinkedForMe** | **boolean** | Specifies if the documnet is linked for current user. | [optional] [default to undefined]
**key** | **string** | The document key. | [optional] [default to undefined]
**permissions** | [**PermissionsConfig**](PermissionsConfig.md) |  | [optional] [default to undefined]
**sharedLinkParam** | **string** | The shared link parameter of the document. | [optional] [default to undefined]
**sharedLinkKey** | **string** | The shared link key of the document. | [optional] [default to undefined]
**referenceData** | [**FileReferenceData**](FileReferenceData.md) |  | [optional] [default to undefined]
**title** | **string** | The document title. | [optional] [default to undefined]
**url** | **string** | The document url. | [optional] [default to undefined]
**isForm** | **boolean** | Indicates whether this is a form. | [optional] [default to undefined]
**_options** | [**Options**](Options.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocumentConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocumentConfigDto = {
    fileType,
    info,
    isLinkedForMe,
    key,
    permissions,
    sharedLinkParam,
    sharedLinkKey,
    referenceData,
    title,
    url,
    isForm,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
