# ServiceLimitReportDto

A page of the spending limits in force for the portal users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | [**Array&lt;ServiceLimitDto&gt;**](ServiceLimitDto.md) | The limits of this page, one per user; empty when no limit applies to any user or the page is past the end. | [optional] [default to undefined]
**offset** | **number** | The number of limits skipped before this page. | [optional] [default to undefined]
**limit** | **number** | The page size the page was read with. | [optional] [default to undefined]
**totalPage** | **number** | The number of pages the whole list takes at this page size. | [optional] [default to undefined]
**currentPage** | **number** | The number of this page, starting from 1. | [optional] [default to undefined]
**totalQuantity** | **number** | The number of users with a limit in force across all pages. | [optional] [default to undefined]

## Example

```typescript
import { ServiceLimitReportDto } from '@onlyoffice/docspace-api-sdk';

const instance: ServiceLimitReportDto = {
    collection,
    offset,
    limit,
    totalPage,
    currentPage,
    totalQuantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
