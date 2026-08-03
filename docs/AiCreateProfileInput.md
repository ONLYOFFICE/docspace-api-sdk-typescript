# AiCreateProfileInput

Input for creating a new profile — the same shape as  {@link  Profile }  without the engine-generated fields (`id`, `createdAt`).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | User-defined profile display name. | [default to undefined]
**providerType** | [**AiProviderType**](AiProviderType.md) |  | [default to undefined]
**basedOn** | [**AiBuiltinProviderType**](AiBuiltinProviderType.md) |  | [optional] [default to undefined]
**baseUrl** | **string** | Base URL of the provider API. | [default to undefined]
**key** | **string** | API key or token. Optional for local providers. | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Extra HTTP headers sent with every request to this provider. Merged into the SDK client\'s default headers; an explicit `Authorization` here wins over the one derived from  {@link  key  } . Honoured by the OpenAI-family providers. | [optional] [default to undefined]
**modelId** | **string** | Selected model ID within this provider. | [default to undefined]
**reasoning** | **boolean** | Whether extended thinking is enabled for this profile\'s model. | [optional] [default to undefined]
**capabilities** | **number** | Bitmask of capabilities supported by the selected model. | [optional] [default to undefined]
**canUseTool** | **boolean** | Result of the live tool-capability probe performed at create time and on changes to `modelId` / `providerType` / `baseUrl`. `undefined` means the probe has never run for this profile (legacy record). | [optional] [default to undefined]
**useResponsesApi** | **boolean** | Result of the live Responses-API probe (parallel to  {@link  canUseTool  } ). `true` means the model speaks `/v1/responses` and the OpenAI provider must route through `client.responses.create` — required for gpt-5+ reasoning models that reject `reasoning_effort` together with `tools` on `/v1/chat/completions`. Probed at create time and whenever `modelId` / `providerType` / `baseUrl` change. `undefined` means the probe never ran (legacy record) — readers treat that as `false`. | [optional] [default to undefined]
**isCloudProvider** | **boolean** | Whether this profile uses a cloud-hosted provider (e.g. ONLYOFFICE DocSpace). | [optional] [default to undefined]
**useProxy** | **boolean** | Route every provider request through the host\'s `fetchProxy` instead of the global `fetch`. Useful when the host runs the widget in a sandbox without direct network access (CORS, custom auth, etc.). Has no effect when the  {@link  PlatformAdapter.fetchProxy  }  is not configured. | [optional] [default to undefined]

## Example

```typescript
import { AiCreateProfileInput } from '@onlyoffice/docspace-api-sdk';

const instance: AiCreateProfileInput = {
    name,
    providerType,
    basedOn,
    baseUrl,
    key,
    headers,
    modelId,
    reasoning,
    capabilities,
    canUseTool,
    useResponsesApi,
    isCloudProvider,
    useProxy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
