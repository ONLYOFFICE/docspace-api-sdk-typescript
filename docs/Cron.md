# Cron

The backup cron parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | [**BackupPeriod**](BackupPeriod.md) |  | [optional] [default to undefined]
**hour** | **number** | The time of the day to start the backup process. | [optional] [default to undefined]
**day** | **number** | The day of the week to start the backup process. | [optional] [default to undefined]

## Example

```typescript
import { Cron } from '@onlyoffice/docspace-api-typescript';

const instance: Cron = {
    period,
    hour,
    day,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
