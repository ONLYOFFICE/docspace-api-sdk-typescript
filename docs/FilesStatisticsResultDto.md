# FilesStatisticsResultDto

The space that stored documents take in each section of the portal, in bytes. The figures cover every account of  the portal rather than the caller alone, and a section the portal does not have comes back as null instead of a  zero figure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**myDocumentsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The space taken by the personal Files sections of all accounts of the portal added together. An item deleted  to the trash keeps taking space and is counted in `trashUsedSpace` until the trash is emptied. | [optional] [default to undefined]
**trashUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The space held by the items deleted to the trash from any section, which is given back only when the trash is  emptied or the items are erased for good. | [optional] [default to undefined]
**archiveUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The space taken by the content of the archived rooms, the archived form filling rooms included. Restoring a  room moves its space back to `roomsUsedSpace` or `formsUsedSpace`. | [optional] [default to undefined]
**roomsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The space taken by the content of the active rooms, except the form filling rooms, whose content is reported  in `formsUsedSpace`. Archiving a room moves its space to `archiveUsedSpace`. | [optional] [default to undefined]
**aiAgentsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The space taken by the content of the AI agents section, which exists only in a portal where the AI agents  feature is active; creating an AI room is not enough to bring the section into being. | [optional] [default to undefined]
**formsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The space taken by the content of the active form filling rooms, which is kept apart from `roomsUsedSpace`  even though those rooms are listed among the rooms. | [optional] [default to undefined]

## Example

```typescript
import { FilesStatisticsResultDto } from '@onlyoffice/docspace-api-sdk';

const instance: FilesStatisticsResultDto = {
    myDocumentsUsedSpace,
    trashUsedSpace,
    archiveUsedSpace,
    roomsUsedSpace,
    aiAgentsUsedSpace,
    formsUsedSpace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
