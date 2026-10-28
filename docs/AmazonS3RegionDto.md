# AmazonS3RegionDto

An Amazon S3 region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemName** | **string** | The region code to send as the region value when configuring an Amazon S3 storage or backup target. It is  the one field of this object that is an argument elsewhere; a code the server does not list here cannot be  reached, so pick one from this list rather than typing it. | [optional] [default to undefined]
**displayName** | **string** | The region name as Amazon writes it, in English regardless of the portal language, for showing in a  picker next to `systemName`. | [optional] [default to undefined]
**partitionName** | **string** | The Amazon partition the region sits in - the ordinary commercial cloud, the Chinese one, or a government  one. Regions of different partitions are not reachable with the same credentials. | [optional] [default to undefined]
**partitionDnsSuffix** | **string** | The domain the partition\'s service host names end in, which differs from partition to partition. | [optional] [default to undefined]
**partitionRegionRegex** | **string** | The pattern every region code of this partition matches, for validating a code before sending it. | [optional] [default to undefined]
**hostnameTemplate** | **string** | How a service host name of the partition is assembled, with `{service}`, `{region}` and `{dnsSuffix}` to  be filled in. It is reference material - the portal builds its own endpoints from `systemName`. | [optional] [default to undefined]

## Example

```typescript
import { AmazonS3RegionDto } from '@onlyoffice/docspace-api-sdk';

const instance: AmazonS3RegionDto = {
    systemName,
    displayName,
    partitionName,
    partitionDnsSuffix,
    partitionRegionRegex,
    hostnameTemplate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
