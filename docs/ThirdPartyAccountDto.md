# ThirdPartyAccountDto

A third-party storage account the caller has connected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corporate** | **boolean** | Whether the account is attached to the legacy Common section, which is the case only for accounts inherited  from an older portal. | [optional] [default to undefined]
**roomsStorage** | **boolean** | Whether the account is attached to the Rooms section, room templates and the archive counted in. This is where  `POST api/2.0/files/thirdparty` puts every account it connects. | [optional] [default to undefined]
**customer_title** | **string** | The name the account is shown under in the portal, as it was saved when the account was connected. | [optional] [default to undefined]
**provider_id** | **number** | The account ID to send to `DELETE api/2.0/files/thirdparty/{providerId}`, or as `providerId` to  re-authenticate the account. | [optional] [default to undefined]
**provider_key** | **string** | The storage service behind the account. `WebDav` stands for every WebDAV preset, so it does not tell which of  them was chosen when the account was connected. | [optional] [default to undefined]

## Example

```typescript
import { ThirdPartyAccountDto } from '@onlyoffice/docspace-api-sdk';

const instance: ThirdPartyAccountDto = {
    corporate,
    roomsStorage,
    customer_title,
    provider_id,
    provider_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
