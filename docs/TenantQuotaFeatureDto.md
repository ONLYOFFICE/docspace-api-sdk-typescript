# TenantQuotaFeatureDto

One feature a quota switches on, with the limit it grants and how much of that limit is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The stable key of the feature - `total_size`, `manager`, `room`, `backup` and so on. It is the value to  branch on, since `title` is prose in the portal language. | [optional] [default to undefined]
**title** | **string** | The feature described in the portal language, with its limit already substituted into the sentence, so it  can be printed as it is. It is empty when this build ships no wording for the feature. | [optional] [default to undefined]
**image** | **string** | The feature\'s icon as SVG markup to render inline - not a URL to fetch. It is filled in only when the  quota comes from the catalogue, and left empty on the quota the portal is actually on, on a feature that  this quota switches off, and on a feature that ships no icon. | [optional] [default to undefined]
**value** | **any** |  | [optional] [default to undefined]
**type** | **string** | How to read `value` and `used`: `size` for bytes, `count` for a number of things, `flag` for a feature  that is merely on or off. | [optional] [default to undefined]
**used** | [**FeatureUsedDto**](FeatureUsedDto.md) | How much of the limit is already used. It is present only on the quota the portal is actually on, and  only for a feature whose consumption is counted; a guest is shown none of these figures and a plain member  only the one for total size, so an absent value can mean the caller may not see it rather than that  nothing is used. | [optional] [default to undefined]
**priceTitle** | **string** | What the feature is charged as, in the portal language - for instance the per-unit price of an add-on. It  is filled in only for a feature that costs money on top of the plan. | [optional] [default to undefined]

## Example

```typescript
import { TenantQuotaFeatureDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantQuotaFeatureDto = {
    id,
    title,
    image,
    value,
    type,
    used,
    priceTitle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
