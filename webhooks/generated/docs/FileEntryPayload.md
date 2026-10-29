
# FileEntryPayload

What every file, folder and room webhook payload has in common.  All dates are in UTC. A delivery goes only to a subscription owner who may see the entry, and it carries no per-user state: no access rights, share settings, favourite flag or thumbnail. Read those from the REST API by the entry ID when they are needed.

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

## Example

```typescript
import type { FileEntryPayload } from ''

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
} satisfies FileEntryPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FileEntryPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


