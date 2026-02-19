# ConnectServerRequestBody

Parameters for completing an OAuth connection to an MCP server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | OAuth authorization code received from the provider\&#39;s redirect. Used to exchange for access and refresh tokens. | [default to undefined]

## Example

```typescript
import { ConnectServerRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: ConnectServerRequestBody = {
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
