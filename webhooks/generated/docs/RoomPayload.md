
# RoomPayload

The room carried by a room.* webhook, and the AI agent carried by every agent.* webhook.  Carries no logo, watermark, file lifetime, tags or chat settings; read them from `GET api/2.0/files/rooms/{id}`.

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
`roomType` | number
`type` | number
`filesCount` | number
`foldersCount` | number
`_private` | boolean
`indexing` | boolean
`denyDownload` | boolean
`quotaLimit` | number
`usedSpace` | number
`color` | string
`cover` | string

## Example

```typescript
import type { RoomPayload } from ''

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
  "roomType": 2,
  "type": 16,
  "filesCount": 0,
  "foldersCount": 0,
  "_private": false,
  "indexing": false,
  "denyDownload": false,
  "quotaLimit": 10737418240,
  "usedSpace": 12345,
  "color": #4781D1,
  "cover": cover-1,
} satisfies RoomPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RoomPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


