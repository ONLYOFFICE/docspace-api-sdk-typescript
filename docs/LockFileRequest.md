# LockFileRequest

The lock state a file is to be put into.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lockFile** | **boolean** | The state to reach: `true` locks the file, which blocks editing, renaming and deleting for everybody but the  account that locked it and the room admins, and drops the others out of a running editing session; `false`  releases the lock. | [optional] [default to undefined]

## Example

```typescript
import { LockFileRequest } from '@onlyoffice/docspace-api-sdk';

const instance: LockFileRequest = {
    lockFile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
