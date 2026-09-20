# DocServiceUrlDto

The document service location as this portal has it configured, together with the editor entry points a client  needs in order to open a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | The editor version the running Document Server reported. It is filled in only when the version was asked for,  and comes back empty otherwise. When the Document Server does not answer, a fallback version is reported  rather than an error, so a value here is no proof that the server is reachable. | [default to undefined]
**docServiceUrlApi** | **string** | The absolute URL of the editor api script that a client has to load before it can open a document. It is  derived from the public Document Server address unless the deployment overrides it separately. | [default to undefined]
**docServiceUrl** | **string** | The public Document Server address a browser loads the editor from. Empty means no document server is  configured for this portal, and documents cannot be opened for editing or viewing. | [default to undefined]
**docServicePreloadUrl** | **string** | The absolute URL of a page a client may load in advance to warm the editor scripts up. Loading it is optional  and changes nothing on the portal. | [default to undefined]
**docServiceUrlInternal** | **string** | The address the portal uses for its own server-to-server calls to the Document Server. When no private-network  address is configured, it repeats the public one. | [default to undefined]
**docServicePortalUrl** | **string** | The address the Document Server is told to call this portal back on. Empty means nothing overrides it and the  portal\'s own resolved address is used. | [default to undefined]
**docServiceSignatureHeader** | **string** | The name of the HTTP header that carries the signature on requests between the portal and the Document Server.  The secret itself is not part of the answer, so this only tells a client whether request signing is set up and  under which header. | [default to undefined]
**docServiceSslVerification** | **boolean** | Whether the portal validates the TLS certificate of the Document Server. False means any certificate is  accepted, which is expected only in a test deployment. | [default to undefined]
**isDefault** | **boolean** | Whether every one of these settings is still the one the deployment ships with. False means at least one of  the addresses, the signature settings or SSL verification has been overridden for this portal. | [default to undefined]

## Example

```typescript
import { DocServiceUrlDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocServiceUrlDto = {
    version,
    docServiceUrlApi,
    docServiceUrl,
    docServicePreloadUrl,
    docServiceUrlInternal,
    docServicePortalUrl,
    docServiceSignatureHeader,
    docServiceSslVerification,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
