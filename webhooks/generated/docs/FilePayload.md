
# FilePayload

The file carried by a file.* webhook, and by form.filled.out and form.stopped.  Carries no thumbnail, image dimensions or form-filling state; read them from the REST API by the file ID.

## Properties

Name | Type
------------ | -------------
`id` | [EntryId](EntryId.md)
`parentId` | [EntryId](EntryId.md)
`rootFolderId` | [EntryId](EntryId.md)
`title` | string
`fileEntryType` | number
`created` | Date
`createdBy` | [UserSummaryPayload](UserSummaryPayload.md)
`updated` | Date
`updatedBy` | [UserSummaryPayload](UserSummaryPayload.md)
`rootFolderType` | number
`parentRoomType` | number
`originId` | [EntryId](EntryId.md)
`originRoomId` | [EntryId](EntryId.md)
`originTitle` | string
`originRoomTitle` | string
`providerItem` | boolean
`providerKey` | string
`providerId` | number
`order` | number
`version` | number
`versionGroup` | number
`contentLength` | number
`fileType` | number
`fileExst` | string
`comment` | string
`viewUrl` | string
`webUrl` | string
`encrypted` | boolean
`locked` | boolean
`lockedBy` | [UserSummaryPayload](UserSummaryPayload.md)
`isForm` | boolean
`customFilterEnabled` | boolean
`customFilterEnabledBy` | [UserSummaryPayload](UserSummaryPayload.md)
`vectorizationStatus` | number

## Example

```typescript
import type { FilePayload } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "parentId": null,
  "rootFolderId": null,
  "title": Contract 2026.docx,
  "fileEntryType": 2,
  "created": 2021-01-01T00:00:00Z,
  "createdBy": null,
  "updated": 2021-01-01T00:00:00Z,
  "updatedBy": null,
  "rootFolderType": 14,
  "parentRoomType": 19,
  "originId": null,
  "originRoomId": null,
  "originTitle": Q3 Reports,
  "originRoomTitle": Marketing Room,
  "providerItem": true,
  "providerKey": GoogleDrive,
  "providerId": 1,
  "order": 1,
  "version": 1,
  "versionGroup": 1,
  "contentLength": 12345,
  "fileType": 7,
  "fileExst": .docx,
  "comment": Created,
  "viewUrl": https://example.com/filehandler.ashx?action=download&fileid=10,
  "webUrl": https://example.com/doceditor?fileid=10,
  "encrypted": false,
  "locked": true,
  "lockedBy": null,
  "isForm": true,
  "customFilterEnabled": true,
  "customFilterEnabledBy": null,
  "vectorizationStatus": 0,
} satisfies FilePayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FilePayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


