# FileLinkRequest

The settings of an external link to a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linkId** | **string** | The link to rewrite, as reported by `GET api/2.0/files/file/{id}/links`. An identifier that is not yet in use,  the empty one included, creates a link instead. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) | The rights the link grants to whoever follows it. The value that denies everything revokes the link. | [optional] [default to undefined]
**expirationDate** | [**ApiDateTime**](ApiDateTime.md) | The moment the link stops working, read in the time zone of the portal. A date more than a few years ahead is  rejected as an invalid request; left out, the link does not expire on its own. | [optional] [default to undefined]
**title** | **string** | The name the link carries in the sharing list of the file, for the people who manage it; it is not shown to  whoever follows the link. | [optional] [default to undefined]
**internal** | **boolean** | Who may follow the link: `true` admits only accounts that are signed in to the portal, `false` admits anybody  who has the address. | [optional] [default to undefined]
**primary** | **boolean** | Whether this link becomes the primary link of the file - the one the Copy link action of a client hands out.  A file has one primary link at a time. | [optional] [default to undefined]
**denyDownload** | **boolean** | What a visitor may do with the content: `true` leaves them with viewing in the browser, `false` lets them  download and print it as their rights allow. | [optional] [default to undefined]
**password** | **string** | The secret a visitor has to type before the file opens; left out, the link opens without one. | [optional] [default to undefined]

## Example

```typescript
import { FileLinkRequest } from '@onlyoffice/docspace-api-sdk';

const instance: FileLinkRequest = {
    linkId,
    access,
    expirationDate,
    title,
    internal,
    primary,
    denyDownload,
    password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
