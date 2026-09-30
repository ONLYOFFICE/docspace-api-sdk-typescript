# SmtpOperationStatusRequestsDto

The state of the background job that sends the portal SMTP test message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **boolean** | Whether the job has finished. This is the field to poll; the first answer that reports it true also discards  the job, so read `error` out of that same answer rather than calling again. | [optional] [default to undefined]
**id** | **string** | The identifier of the queued job. A portal only ever has one test job at a time, so it names the run rather  than selecting among several. | [optional] [default to undefined]
**error** | **string** | Why the test failed. It stays empty while the job runs and also once the relay has accepted the message, so  an empty value on a finished job is what success looks like; an unreachable relay is reported here after a  30-second connection timeout rather than as a failed request. | [optional] [default to undefined]
**status** | **string** | The step the job has reached, in words - `Connect to host` or `Send test message`, for instance. It is meant  to be shown to a person and is not a fixed set of values to branch on. | [optional] [default to undefined]
**percents** | **number** | How far the job has got, as a percentage climbing to 100. Reaching 100 says the job ran to the end, not that  the message was accepted - that is what an empty `error` says. | [optional] [default to undefined]

## Example

```typescript
import { SmtpOperationStatusRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: SmtpOperationStatusRequestsDto = {
    completed,
    id,
    error,
    status,
    percents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
