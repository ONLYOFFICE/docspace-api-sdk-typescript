# FilesStatisticsResultDto

The file statistics result parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**myDocumentsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The used space of files in the \\My Documents\\ section. | [optional] [default to undefined]
**trashUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The used space of files in the \\Trash\\ section. | [optional] [default to undefined]
**archiveUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The used space of files in the \\Archive\\ section. | [optional] [default to undefined]
**roomsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The used space of files in the \\Rooms\\ section. | [optional] [default to undefined]
**aiAgentsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The used space of files in the \\AI agents\\ section. | [optional] [default to undefined]
**formsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) | The used space of files in the \\Forms\\ section. | [optional] [default to undefined]

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
