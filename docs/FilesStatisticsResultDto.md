# FilesStatisticsResultDto

The file statistics result parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**myDocumentsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) |  | [optional] [default to undefined]
**trashUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) |  | [optional] [default to undefined]
**archiveUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) |  | [optional] [default to undefined]
**roomsUsedSpace** | [**FilesStatisticsFolder**](FilesStatisticsFolder.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FilesStatisticsResultDto } from '@onlyoffice/docspace-api-sdk';

const instance: FilesStatisticsResultDto = {
    myDocumentsUsedSpace,
    trashUsedSpace,
    archiveUsedSpace,
    roomsUsedSpace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
