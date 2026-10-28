# BackupsCountResultDto

The backups of a portal, split by who paid for them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free** | **number** | The number of backups covered by the free monthly allowance. | [optional] [default to undefined]
**paid** | **number** | The number of backups charged to the portal wallet. | [optional] [default to undefined]

## Example

```typescript
import { BackupsCountResultDto } from '@onlyoffice/docspace-api-sdk';

const instance: BackupsCountResultDto = {
    free,
    paid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
