# FileShareLink

A sharing link of a file, a folder or a room, with everything set on it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the link, the one to send back as `linkId` to change or delete it. | [optional] [default to undefined]
**title** | **string** | The name the link is listed under, which its author is free to choose and to leave empty. | [optional] [default to undefined]
**shareLink** | **string** | The shortened address to hand out. Opening it is what turns the link into access; the address stays the same  while the link exists. | [optional] [default to undefined]
**expirationDate** | [**ApiDateTime**](ApiDateTime.md) | The moment the link stops working, written with the offset of the portal time zone. Null when the link was  left without an end. | [optional] [default to undefined]
**linkType** | [**LinkType**](LinkType.md) | Which of the two jobs the link does: letting somebody into the room as a member, or handing out the entry  itself. The counters of uses are filled in for the first kind only. | [optional] [default to undefined]
**password** | **string** | The password a visitor has to send before the link resolves, readable only by those who may manage the link.  Empty when the link asks for none. | [optional] [default to undefined]
**denyDownload** | **boolean** | Whether visitors coming through this link may only read the entry in the editor and not download or print it. | [optional] [default to undefined]
**isExpired** | **boolean** | Whether the moment in `expirationDate` has already passed, which leaves the link in place but refuses  everybody who opens it. | [optional] [default to undefined]
**primary** | **boolean** | Whether this is the one link the entry always keeps: a public or a form-filling room is given it at creation,  and deleting it there only makes a new one. | [optional] [default to undefined]
**internal** | **boolean** | Whether the visitor has to sign in to the portal before the link resolves, as opposed to it being open to  anybody who has the address. | [optional] [default to undefined]
**requestToken** | **string** | The key that stands for this link in the calls that resolve it, such as `GET api/2.0/files/share/{key}`. It is  filled in for links that hand out the entry, and empty for the ones that invite into a room. | [optional] [default to undefined]
**maxUseCount** | **number** | How many accounts may still join the room through this invitation link in total. Null on a link that hands out  the entry, where nothing is counted. | [optional] [default to undefined]
**currentUseCount** | **number** | How many accounts have already joined through this invitation link. Once it reaches `maxUseCount` the link  stops letting anybody else in. Null on a link that hands out the entry. | [optional] [default to undefined]

## Example

```typescript
import { FileShareLink } from '@onlyoffice/docspace-api-sdk';

const instance: FileShareLink = {
    id,
    title,
    shareLink,
    expirationDate,
    linkType,
    password,
    denyDownload,
    isExpired,
    primary,
    internal,
    requestToken,
    maxUseCount,
    currentUseCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
