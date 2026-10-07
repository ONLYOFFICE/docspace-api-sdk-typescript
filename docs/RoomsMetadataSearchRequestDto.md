# RoomsMetadataSearchRequestDto

The typed form of the metadata search of the rooms: the same filter the rooms listing takes in the metadataTemplateId  and metadataFilters query parameters, with the conditions as objects instead of a JSON string.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadataTemplateId** | **number** | The ID of the metadata template the rooms must be assigned to. On its own it narrows the listing to the rooms  carrying the template; together with the conditions it also pins the template the filtered fields belong to. | [optional] [default to undefined]
**metadataFilters** | [**Array&lt;MetadataFilterConditionRequest&gt;**](MetadataFilterConditionRequest.md) | The metadata filter conditions, combined with AND. A custom field is addressed by its name instead of the field ID. | [optional] [default to undefined]
**filterValue** | **string** | The text to search for in the room titles and in the custom fields. | [optional] [default to undefined]
**searchArea** | [**SearchArea**](SearchArea.md) | The section to search in: the active rooms (the default), the archive or the templates. | [optional] [default to undefined]
**type** | [**Array&lt;RoomType&gt;**](RoomType.md) | The room types to search among. | [optional] [default to undefined]
**count** | **number** | The number of rooms to return, from 1 to 100. | [optional] [default to undefined]
**startIndex** | **number** | The zero-based index of the first room to return. | [optional] [default to undefined]
**sortBy** | **string** | The field to sort by, a name of the SortedByType values. | [optional] [default to undefined]
**sortOrder** | [**SortOrder**](SortOrder.md) | The sort order. | [optional] [default to undefined]

## Example

```typescript
import { RoomsMetadataSearchRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomsMetadataSearchRequestDto = {
    metadataTemplateId,
    metadataFilters,
    filterValue,
    searchArea,
    type,
    count,
    startIndex,
    sortBy,
    sortOrder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
