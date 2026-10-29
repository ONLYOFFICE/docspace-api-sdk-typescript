
# GroupPayload

The group a group.* webhook is about.  The payload describes the group at the time of the event, without the list of its members. A `group.updated` delivery follows a change made through the group API - a rename, a new manager, or members added, removed, replaced or moved to another group - but does not say which of these happened: compare the payload with the previous one, and read the current members with `GET api/2.0/group/{id}` when they are needed.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`parent` | string
`category` | string
`isLDAP` | boolean
`isSystem` | boolean
`manager` | [UserSummaryPayload](UserSummaryPayload.md)
`membersCount` | number

## Example

```typescript
import type { GroupPayload } from ''

// TODO: Update the object below with actual values
const example = {
  "id": c652dd0b-fa6e-4bb7-a3b2-9a2e4e6b7d1c,
  "name": Marketing Team,
  "parent": 3f5c2a1e-8b7d-4e6f-9a0b-1c2d3e4f5a6b,
  "category": 00000000-0000-0000-0000-000000000000,
  "isLDAP": false,
  "isSystem": true,
  "manager": null,
  "membersCount": 12,
} satisfies GroupPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GroupPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


