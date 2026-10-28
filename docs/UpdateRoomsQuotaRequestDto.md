# UpdateRoomsQuotaRequestDto

The rooms whose storage limit is to be changed, and the limit to give them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomIds** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The rooms to change, named by the identifiers that `GET api/2.0/files/rooms` reports. Only whole numbers are  processed, so identifiers of rooms kept in a connected third-party account are skipped without an error. | [optional] [default to undefined]
**quota** | **number** | The storage each of the listed rooms may take, in bytes. It has to stay inside the portal own limit, and the  per-room quota feature has to be on, otherwise nothing is changed. | [optional] [default to undefined]

## Example

```typescript
import { UpdateRoomsQuotaRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateRoomsQuotaRequestDto = {
    roomIds,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
