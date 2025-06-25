# MigrationStatusDto

The migration status parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**progress** | **number** | The migration progress. | [optional] [default to undefined]
**error** | **string** | The migration error. | [optional] [default to undefined]
**parseResult** | [**MigrationApiInfo**](MigrationApiInfo.md) |  | [optional] [default to undefined]
**isCompleted** | **boolean** | Specifies whether the migration is completed or not. | [optional] [default to undefined]

## Example

```typescript
import { MigrationStatusDto } from '@onlyoffice/docspace-api-typescript';

const instance: MigrationStatusDto = {
    progress,
    error,
    parseResult,
    isCompleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
