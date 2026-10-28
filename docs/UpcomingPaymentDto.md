# UpcomingPaymentDto

One charge the portal is going to be billed for at the start of the next period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The quota that is going to be charged. When a switch to another quota is scheduled, this is the quota  being switched to, so it can differ from what `GET api/2.0/portal/tariff` reports for today. | [optional] [default to undefined]
**name** | **string** | The quota\'s stable key, which is the same identifier the wallet operations use for a service. | [optional] [default to undefined]
**title** | **string** | The quota name in the portal language, meant to be printed on an invoice preview. | [optional] [default to undefined]
**unitOfMeasure** | **string** | What `quantity` counts, in the portal language - seats, administrators, gigabytes. It is empty for a quota  that is simply on or off. | [optional] [default to undefined]
**quantity** | **number** | How much is going to be charged for, which is the quantity scheduled for the next period when one has been  scheduled and today\'s quantity otherwise. | [optional] [default to undefined]
**wallet** | **boolean** | Whether the charge is paid out of the portal wallet rather than from the subscription. | [optional] [default to undefined]
**dueDate** | [**ApiDateTime**](ApiDateTime.md) | When the charge falls due, in the portal time zone. | [optional] [default to undefined]
**amount** | **number** | What the charge comes to: the unit price of the quota multiplied by `quantity`. Taxes are not part of it,  and a quota with no price of its own is not listed at all rather than listed with a zero. | [optional] [default to undefined]
**currency** | **string** | The currency `amount` is expressed in, as a three-letter ISO 4217 code. It follows the portal\'s billing  account, so every entry of one answer carries the same code. | [optional] [default to undefined]

## Example

```typescript
import { UpcomingPaymentDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpcomingPaymentDto = {
    id,
    name,
    title,
    unitOfMeasure,
    quantity,
    wallet,
    dueDate,
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
