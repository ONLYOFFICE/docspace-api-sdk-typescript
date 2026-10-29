
# GroupSummaryPayload

A group referenced from another webhook payload.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`manager` | string
`isSystem` | boolean

## Example

```typescript
import type { GroupSummaryPayload } from ''

// TODO: Update the object below with actual values
const example = {
  "id": c652dd0b-fa6e-4bb7-a3b2-9a2e4e6b7d1c,
  "name": Marketing Team,
  "manager": Mike.Zanyatski,
  "isSystem": true,
} satisfies GroupSummaryPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GroupSummaryPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


