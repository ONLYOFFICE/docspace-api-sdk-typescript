# UpdateMemberRequestDto

The request parameters for updating the user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | The account the change applies to. It is read from this body by `POST api/2.0/people/email`, while  `PUT api/2.0/people/{userId}` takes the account from the route and ignores this field. | [optional] [default to undefined]
**disable** | **boolean** | Set it to true to give the account the `Terminated` status and end every session it has, and to false to  bring it back. It is applied only when the caller edits somebody else, and omitting it keeps the current  status. | [optional] [default to undefined]
**email** | **string** | The new email address, up to 255 characters. It is read only by `POST api/2.0/people/email`, which either  mails a confirmation letter or, for an administrator acting on somebody else, applies the address at once;  `PUT api/2.0/people/{userId}` ignores it. | [optional] [default to undefined]
**isUser** | **boolean** | Set it to true to turn the account into a guest and to false to turn it back into a member. Either direction  takes a seat and can answer 402, it is applied only when the caller edits somebody else, and a request to  make the portal owner, a DocSpace administrator or a module administrator a guest is ignored. | [optional] [default to undefined]
**firstName** | **string** | The new first name, up to 255 characters. It is applied only to the caller\'s own profile, is left alone on an  LDAP or SSO account, and a pair the portal does not accept as a name answers 400. | [optional] [default to undefined]
**lastName** | **string** | The new last name, up to 255 characters. It is applied only to the caller\'s own profile, is left alone on an  LDAP or SSO account, and a pair the portal does not accept as a name answers 400. | [optional] [default to undefined]
**department** | **Array&lt;string&gt;** | The groups the profile should belong to, by group ID, replacing the current ones. It is applied only to the  caller\'s own profile. | [optional] [default to undefined]
**location** | **string** | The new free-text location shown on the profile. It is applied only to the caller\'s own profile and is left  alone on an LDAP or SSO account. | [optional] [default to undefined]
**comment** | **string** | The new free-text note kept with the profile. It is applied only to the caller\'s own profile. | [optional] [default to undefined]
**contacts** | [**Array&lt;Contact&gt;**](Contact.md) | The additional ways to reach the person, replacing the current ones. Each entry is a free-text type such as  `email`, `phone`, `skype` or `telegram` and its value, an entry with an empty value is dropped, and the field  is applied only to the caller\'s own profile. | [optional] [default to undefined]
**files** | **string** | The address the portal downloads the new avatar from. It is applied only to the caller\'s own profile, has to  use HTTPS unless the request itself came over HTTP, and passing the address the profile already uses  downloads nothing. | [optional] [default to undefined]
**spam** | **boolean** | Whether the account agrees to receive tips, updates and offers. It is applied only to the caller\'s own  profile, and omitting it on such a request stores false rather than keeping the current value. | [optional] [default to undefined]

## Example

```typescript
import { UpdateMemberRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateMemberRequestDto = {
    userId,
    disable,
    email,
    isUser,
    firstName,
    lastName,
    department,
    location,
    comment,
    contacts,
    files,
    spam,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
