
# UserPayload

The user a user.* webhook is about.  All dates are in UTC. The fields are cut for the owner of the receiving subscription by the rules the REST API applies to that owner as a reader. The quota fields (`usedSpace`, `quotaLimit`, `isCustomQuota`) go only to a DocSpace admin and to the user themselves, and the author of the account (`createdBy`) only to a DocSpace admin. A subscription owner of the `User` or `Guest` type, who may not see the contacts of other users, gets someone else\'s profile without any contact data: `groups`, `department`, `profileUrl`, `userName`, `email`, `mobilePhone` and `contacts` are all left out.

## Properties

Name | Type
------------ | -------------
`id` | string
`displayName` | string
`firstName` | string
`lastName` | string
`userName` | string
`email` | string
`contacts` | [Array&lt;ContactPayload&gt;](ContactPayload.md)
`status` | number
`activationStatus` | number
`terminated` | Date
`department` | string
`groups` | [Array&lt;GroupSummaryPayload&gt;](GroupSummaryPayload.md)
`location` | string
`notes` | string
`isAdmin` | boolean
`isRoomAdmin` | boolean
`isOwner` | boolean
`isVisitor` | boolean
`isCollaborator` | boolean
`isLDAP` | boolean
`isSSO` | boolean
`listAdminModules` | Array&lt;string&gt;
`cultureName` | string
`mobilePhone` | string
`mobilePhoneActivationStatus` | number
`quotaLimit` | number
`usedSpace` | number
`isCustomQuota` | boolean
`createdBy` | [UserSummaryPayload](UserSummaryPayload.md)
`registrationDate` | Date
`hasAvatar` | boolean
`avatar` | string
`avatarOriginal` | string
`avatarMax` | string
`avatarMedium` | string
`avatarSmall` | string
`profileUrl` | string

## Example

```typescript
import type { UserPayload } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 9924256a-739c-462b-be1a-e1d3a1d6f2d4,
  "displayName": Mike Zanyatski,
  "firstName": Mike,
  "lastName": Zanyatski,
  "userName": mike.zanyatski,
  "email": mike.zanyatski@example.com,
  "contacts": null,
  "status": Active,
  "activationStatus": Activated,
  "terminated": 2008-04-10T06:30:00Z,
  "department": Marketing Team, Sales,
  "groups": null,
  "location": Palo Alto,
  "notes": Notes to worker,
  "isAdmin": false,
  "isRoomAdmin": false,
  "isOwner": false,
  "isVisitor": false,
  "isCollaborator": false,
  "isLDAP": false,
  "isSSO": false,
  "listAdminModules": [e67be73d-f9ae-4ce1-8fec-1880cb518cb4],
  "cultureName": en-US,
  "mobilePhone": +1 916 555 0100,
  "mobilePhoneActivationStatus": Activated,
  "quotaLimit": 10737418240,
  "usedSpace": 12345,
  "isCustomQuota": false,
  "createdBy": null,
  "registrationDate": 2008-04-10T06:30:00Z,
  "hasAvatar": true,
  "avatar": https://example.com/avatar.jpg,
  "avatarOriginal": https://example.com/avatar_original.jpg,
  "avatarMax": https://example.com/avatar_max.jpg,
  "avatarMedium": https://example.com/avatar_medium.jpg,
  "avatarSmall": https://example.com/avatar_small.jpg,
  "profileUrl": https://example.onlyoffice.com/accounts/people/filter?search=mike.zanyatski%40example.com,
} satisfies UserPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


