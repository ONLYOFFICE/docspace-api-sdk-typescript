# CurrentLicenseInfo

The two facts about the subscription in force that a payment page needs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trial** | **boolean** | Whether the portal is on a trial rather than a paid subscription. A trial expires at `dueDate` and is not  extended by paying - a plan has to be bought instead. | [default to undefined]
**dueDate** | **string** | The day the subscription runs out, with the time of day cut off. The largest value a date can hold means  it never runs out, which is how a free or unlimited plan is expressed. | [default to undefined]

## Example

```typescript
import { CurrentLicenseInfo } from '@onlyoffice/docspace-api-sdk';

const instance: CurrentLicenseInfo = {
    trial,
    dueDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
