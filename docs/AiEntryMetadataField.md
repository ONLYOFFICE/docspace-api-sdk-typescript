# AiEntryMetadataField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**type** | **number** | `MetadataFieldType`: 0 String, 1 Date, 2 Number, 3 SingleChoice, 4 MultiChoice. | [default to undefined]
**_options** | [**Array&lt;AiEntryMetadataFieldOptionsInner&gt;**](AiEntryMetadataFieldOptionsInner.md) |  | [default to undefined]
**value** | [**AiMetadataValue**](AiMetadataValue.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiEntryMetadataField } from '@onlyoffice/docspace-api-sdk';

const instance: AiEntryMetadataField = {
    id,
    name,
    type,
    _options,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
