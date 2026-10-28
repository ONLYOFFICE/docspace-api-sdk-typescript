# AssignMetadataTemplates

The parameters for assigning metadata templates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateIds** | **Array&lt;number&gt;** | The metadata template IDs. | [default to undefined]
**cascade** | **boolean** | Specifies if the templates are propagated to the folder sub-entries. | [optional] [default to undefined]
**conflictResolveType** | [**MetadataConflictResolveType**](MetadataConflictResolveType.md) | The conflict resolve type for the cascade assignment. | [optional] [default to undefined]

## Example

```typescript
import { AssignMetadataTemplates } from '@onlyoffice/docspace-api-sdk';

const instance: AssignMetadataTemplates = {
    templateIds,
    cascade,
    conflictResolveType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
