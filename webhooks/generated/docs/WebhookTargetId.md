
# WebhookTargetId

The ID of the entity a subscription is scoped to, which depends on the trigger family: the GUID of the user or group, as a string, for user.* and group.* events, and an entry ID for file, folder, room, form and agent events - an integer for DocSpace\'s own storage, a string for a third-party provider. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { WebhookTargetId } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies WebhookTargetId

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookTargetId
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


