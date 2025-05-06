# CreateFileJsonElement

The parameters for creating a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file title for creation. | [default to undefined]
**templateId** | [**CreateFileJsonElementTemplateId**](CreateFileJsonElementTemplateId.md) |  | [optional] [default to undefined]
**enableExternalExt** | **boolean** | Specifies whether to allow creating a file of an external extension or not. | [optional] [default to undefined]
**formId** | **number** | The form ID for creation. | [optional] [default to undefined]

## Example

```typescript
import { CreateFileJsonElement } from '@onlyoffice/docspace-api-typescript';

const instance: CreateFileJsonElement = {
    title,
    templateId,
    enableExternalExt,
    formId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
