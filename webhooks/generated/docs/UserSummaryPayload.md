
# UserSummaryPayload

A short reference to a user from another payload: the author or the last editor of a file, folder or room, the manager of a group, or the creator of an account.

## Properties

Name | Type
------------ | -------------
`id` | string
`displayName` | string
`userName` | string
`avatar` | string
`profileUrl` | string

## Example

```typescript
import type { UserSummaryPayload } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 9924256a-739c-462b-be1a-e1d3a1d6f2d4,
  "displayName": Mike Zanyatski,
  "userName": mike.zanyatski,
  "avatar": https://example.com/avatar.jpg,
  "profileUrl": https://example.onlyoffice.com/accounts/people/filter?search=mike.zanyatski%40example.com,
} satisfies UserSummaryPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserSummaryPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


