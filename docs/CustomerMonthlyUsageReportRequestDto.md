# CustomerMonthlyUsageReportRequestDto

The period covered by the monthly wallet spending report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | The beginning of the reported period, inclusive. The months are cut in the portal time zone rather than in  UTC, so spending at the turn of a month falls where the portal sees it; defaults to the portal creation date. | [optional] [default to undefined]
**endDate** | **string** | The end of the reported period, inclusive. Cut in the portal time zone in the same way as `startDate`, and  defaults to the moment the call is made. | [optional] [default to undefined]

## Example

```typescript
import { CustomerMonthlyUsageReportRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerMonthlyUsageReportRequestDto = {
    startDate,
    endDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
