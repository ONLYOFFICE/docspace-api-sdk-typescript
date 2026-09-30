# OwnerApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sendOwnerChangeInstructions**](#sendownerchangeinstructions) | **POST** /api/2.0/settings/owner | Start the portal owner change|
|[**updatePortalOwner**](#updateportalowner) | **PUT** /api/2.0/settings/owner | Confirm the portal owner change|

# **sendOwnerChangeInstructions**
> OwnerChangeInstructionsWrapper sendOwnerChangeInstructions()

Starts handing this portal over to another of its members: the confirmation letter goes to the current owner\'s  address, and nothing changes until the link in it is used. The owner\'s own email address has to be confirmed  first, otherwise the call is answered with 400; `GET api/2.0/people/@self` reports it as `activationStatus`.  The caller needs the portal-settings right of a DocSpace administrator, so a room administrator, an ordinary  member or a guest is refused with 403, as is naming a guest in `ownerId`. Only the portal owner can actually  start a transfer: an administrator who is not the owner, or a named user who is inactive or unknown here, gets  200 with `status` 0 and a localized refusal instead of an error, so read `status` and not the HTTP code. A  started transfer answers `status` 1 and a `message` carrying the owner\'s address inside an HTML `mailto:`  anchor rather than as plain text. Ownership itself does not move here; every call issues a fresh link usable  for a limited period, seven days by default, and the attempt is recorded in the audit trail. Complete the  transfer with `PUT api/2.0/settings/owner`; changing what a member may do is `PUT api/2.0/people/type/{type}`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownerIdSettingsRequestDto** | **OwnerIdSettingsRequestDto**|  | |


### Return type

**OwnerChangeInstructionsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsOwnerApi,
    Configuration,
    OwnerIdSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsOwnerApi(configuration);

let ownerIdSettingsRequestDto: OwnerIdSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.sendOwnerChangeInstructions(
    ownerIdSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The outcome of the request: `status` 1 with the address the instructions were sent to, or `status` 0 with a localized refusal when the transfer cannot be started |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The portal owner\'s own email address has not been confirmed yet, so no instructions can be sent |  -  |
|**403** | The caller does not hold the portal-settings right of a DocSpace administrator, or the user named as the new owner is a guest |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePortalOwner**
> updatePortalOwner()

Completes the portal owner change that `POST api/2.0/settings/owner` started, making the user named in  `ownerId` the owner of this portal. Authorization comes from the confirmation link in that letter, not from an  ordinary session: pass the link\'s `type`, `key`, `uid` and `encemail` parameters in the `confirm` request  header, and check with `POST api/2.0/authentication/confirm` that it is still usable, because it expires after  a limited period, seven days by default. A caller without such a link is refused whatever role it holds, and  so is a link whose address is no longer the owner\'s, which is what replaying a used link looks like. The named  user has to be an active member of the portal and must not be a guest. The call is mutating: a named user who  is not a DocSpace administrator yet is promoted to one first, and a promotion needing a paid seat the portal  lacks is refused before ownership moves. The previous owner keeps their account and role but loses the owner\'s  rights, and the change reaches the audit trail. The answer carries no payload: read the new `ownerId` from  `GET api/2.0/settings`, which needs no token. Only the new owner can start another transfer.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownerIdSettingsRequestDto** | **OwnerIdSettingsRequestDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsOwnerApi,
    Configuration,
    OwnerIdSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsOwnerApi(configuration);

let ownerIdSettingsRequestDto: OwnerIdSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.updatePortalOwner(
    ownerIdSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The portal owner has been changed to the user named in the request |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The user named as the new owner cannot be found in this portal, is a guest, or is not active |  -  |
|**409** | The new owner could not be given DocSpace administrator rights, so the transfer was not applied |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

