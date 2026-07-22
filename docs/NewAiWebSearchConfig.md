# NewAiWebSearchConfig

Web-search provider configuration. Credentials and provider selection for the built-in web-search tool group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **string** | Provider identifier (e.g. `exa`). | [default to undefined]
**key** | **string** | API key for the provider. Optional for self-hosted or keyless setups. | [optional] [default to undefined]
**baseUrl** | **string** | Optional override for the provider\'s base URL. | [optional] [default to undefined]
**isCloudProvider** | **boolean** | Whether this provider is cloud-hosted (vs. self-hosted). | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Extra HTTP headers sent with each request to the ONLYOFFICE / cloud backend (e.g. `X-Tenant`). Merged after the derived `Authorization` header, so a custom header of the same name wins. | [optional] [default to undefined]

## Example

```typescript
import { NewAiWebSearchConfig } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiWebSearchConfig = {
    provider,
    key,
    baseUrl,
    isCloudProvider,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
