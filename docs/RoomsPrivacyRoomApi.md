# PrivacyRoomApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteKeys**](#deletekeys) | **DELETE** /api/2.0/privacyroom/keys/{id} | Delete an encryption key|
|[**getUserKeys**](#getuserkeys) | **GET** /api/2.0/privacyroom/keys | Get own encryption keys|
|[**getUserKeysForRoom**](#getuserkeysforroom) | **GET** /api/2.0/privacyroom/{roomId}/access | Get private room access keys|
|[**replaceKey**](#replacekey) | **PUT** /api/2.0/privacyroom/keys | Rotate an encryption key|
|[**setKeys**](#setkeys) | **POST** /api/2.0/privacyroom/keys | Create an encryption key|

# **deleteKeys**
> deleteKeys()

Removes one encryption key pair from the calling user\'s own key set and answers 204 with no body. The pair is  named by the `id` of an entry of `GET api/2.0/privacyroom/keys`; the caller\'s other pairs stay as they are.  The call is destructive and cannot be repeated: the key material is gone for good, a second delete of the same  `id`, like an `id` that was never stored, is answered with 404, and there is no parameter for another user\'s  keys, so an authenticated member only ever deletes their own while a guest is refused. Deleting the last key  the caller holds locks them out of the private rooms they belong to, their own rooms included: the rooms and  their content survive untouched and stay listed as private, but `GET api/2.0/privacyroom/{roomId}/access` then  refuses the caller until a new key is stored with `POST api/2.0/privacyroom/keys`. Before DocSpace 4.0 the  call answered 200 with the caller\'s remaining keys, so a client that read that list has to call  `GET api/2.0/privacyroom/keys` instead.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The pair to delete, taken from the `id` of an entry of `GET api/2.0/privacyroom/keys`. Only the caller\'s own  pairs can be named here. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsPrivacyRoomApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsPrivacyRoomApi(configuration);

let id: string; //The pair to delete, taken from the `id` of an entry of `GET api/2.0/privacyroom/keys`. Only the caller\'s own  pairs can be named here. (default to undefined)

const { status, data } = await apiInstance.deleteKeys(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The encryption key is deleted. Answered 200 with the remaining keys before DocSpace 4.0 |  -  |
|**400** | The key identifier is not a valid GUID |  -  |
|**404** | The encryption key is not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserKeys**
> EncryptionKeyArrayWrapper getUserKeys()

Returns every encryption key pair the calling user holds, the encrypted private half included, which is the  material a client needs in order to decrypt content in a private room. The set is personal and there is no  parameter for another user\'s keys: an authenticated caller reads only their own, and a guest, who cannot own  key material at all, always reads an empty set. The call is read-only. An empty answer, whether an empty list  or none at all, means no key has been created yet, and until `POST api/2.0/privacyroom/keys` creates one the  user cannot be invited to a private room. Each entry carries the pair\'s `id`, its owner in `userId`, the  moment the material was stored in `date`, the public half, the private half encrypted with the user\'s  password, and the portal-wide crypto engine in `cryptoEngineId`. For the keys that open a whole private room  use `GET api/2.0/privacyroom/{roomId}/access`, and for the keys a single file is shared with use  `GET api/2.0/files/file/{fileId}/publickeys`; this operation is about the caller alone.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/).

### Parameters
This endpoint does not have any parameters.


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsPrivacyRoomApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsPrivacyRoomApi(configuration);

const { status, data } = await apiInstance.getUserKeys();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The encryption keys of the current user |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserKeysForRoom**
> EncryptionKeyArrayWrapper getUserKeysForRoom()

Returns the encryption keys that give access to a private room: one entry per key held by each of its members,  which is what a client needs in order to encrypt a file key for everyone allowed to open the room\'s content.  Only the caller\'s own entries carry `privateKeyEnc`; another member\'s entry carries the public half alone, and  an entry with no public half is not reported as access at all. The room has to be a private one, a room  created without private mode holds no access keys and the call is refused, and it has to still exist: an  unknown room, or one already moved to Trash, is reported as missing, while an archived private room still  answers. Access follows room membership and not portal role: any member from read access upwards receives the  full set, whereas a DocSpace administrator who is not a member is refused, and so is a caller holding no key  of their own, the room creator included once they delete their last key. The call is read-only. For the keys  of a single file use `GET api/2.0/files/file/{fileId}/publickeys`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**number**] | The private room whose access keys are read. Take it from the `id` of the room returned by  `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`. | defaults to undefined|


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsPrivacyRoomApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsPrivacyRoomApi(configuration);

let roomId: number; //The private room whose access keys are read. Take it from the `id` of the room returned by  `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`. (default to undefined)

const { status, data } = await apiInstance.getUserKeysForRoom(
    roomId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The encryption keys associated with the privacy room |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceKey**
> EncryptionKeyArrayWrapper replaceKey()

Rotates one encryption key pair of the calling user: the entry whose `id` matches is overwritten with the  submitted `publicKey` and `privateKeyEnc`, and the caller\'s other pairs are left untouched. The pair has to  exist already, an `id` that is not in the caller\'s set is answered with 404, and a first key is created with  `POST api/2.0/privacyroom/keys`. This is a full replacement rather than a merge: both halves are mandatory,  and a request that omits or blanks one of them is rejected as invalid with the stored pair surviving  unchanged, so a rotation that means to keep the private half has to send it again. Omitting `id` targets the  all-zero pair, the one a client that never sets an id keeps rotating. Every authenticated member rotates their  own keys and only their own, and a guest is refused. The call is mutating, and repeating it with the same body  leaves the same state. It answers with every key the caller holds afterwards, and from then on  `GET api/2.0/privacyroom/{roomId}/access` reports the new public half for this member.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **encryptionKeyRequestDto** | **EncryptionKeyRequestDto**|  | |


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsPrivacyRoomApi,
    Configuration,
    EncryptionKeyRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsPrivacyRoomApi(configuration);

let encryptionKeyRequestDto: EncryptionKeyRequestDto; // (optional)

const { status, data } = await apiInstance.replaceKey(
    encryptionKeyRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The encryption key is replaced |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The key material is missing, blank or too large to be stored |  -  |
|**404** | The encryption key to replace is not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setKeys**
> EncryptionKeyArrayWrapper setKeys()

Stores a new encryption key pair for the calling user and answers with that user\'s whole key set. The material  is end-to-end: `publicKey` is the half other members use to encrypt file keys for this user, while  `privateKeyEnc` arrives already encrypted with the user\'s own password, so the portal keeps it as opaque text.  A member must hold at least one key before they can be invited to a private room, which makes this the first  call of the private-room flow. Every authenticated member manages their own keys and only their own, there is  no parameter for somebody else\'s, and a guest is refused, which is also why a guest cannot become a member of  a private room. The call is mutating and is not safe to repeat: `id` names the pair inside the caller\'s set  and an `id` that is already stored is answered with 409, while a request that omits or blanks either half is  rejected as invalid and stores nothing. A successful call answers 201 with every key the caller now holds. To  change the material of an existing pair use `PUT api/2.0/privacyroom/keys`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **encryptionKeyRequestDto** | **EncryptionKeyRequestDto**|  | |


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    RoomsPrivacyRoomApi,
    Configuration,
    EncryptionKeyRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsPrivacyRoomApi(configuration);

let encryptionKeyRequestDto: EncryptionKeyRequestDto; // (optional)

const { status, data } = await apiInstance.setKeys(
    encryptionKeyRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The encryption key is created. Answered 200 before DocSpace 4.0; the response body is unchanged |  -  |
|**400** | The key material is missing, blank or too large to be stored |  -  |
|**409** | A key with the same identifier already exists |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

