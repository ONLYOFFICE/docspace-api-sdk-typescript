# EncryptionKeyDto

An encryption key pair as the portal reports it: the public half of some member\'s key, with the encrypted private  half filled in only when the pair belongs to the caller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Names the pair inside its owner\'s key set. Pass it back to rotate the pair or to delete it; the all-zero value  belongs to a client that stores its keys without sending an identifier. | [optional] [default to undefined]
**userId** | **string** | The member the pair belongs to. In the key set of a room or of a file this is how the caller tells its own  entries, the ones carrying a private half, from those of the other members. | [optional] [default to undefined]
**date** | **string** | When this key material was written. Rotating the pair refreshes it, so it dates the material that is being  reported rather than the first appearance of the identifier. | [optional] [default to undefined]
**publicKey** | **string** | The public half of the pair, the half a client encrypts file keys with. A pair whose public half is missing  is treated as no access and left out of a room\'s or a file\'s key set. | [optional] [default to undefined]
**privateKeyEnc** | **string** | The private half, encrypted with its owner\'s password. It is filled in only when the pair belongs to the  calling user; on another member\'s entry it comes back empty, because the private half is not handed out. | [optional] [default to undefined]
**cryptoEngineId** | **string** | The crypto engine this material was issued for, as a braced GUID. The engine is portal-wide, so the same value  comes back for every key of every member. | [optional] [default to undefined]

## Example

```typescript
import { EncryptionKeyDto } from '@onlyoffice/docspace-api-sdk';

const instance: EncryptionKeyDto = {
    id,
    userId,
    date,
    publicKey,
    privateKeyEnc,
    cryptoEngineId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
