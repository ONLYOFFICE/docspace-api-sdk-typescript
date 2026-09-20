# AiReasoningSupport

What one model can do with extended thinking. Providers describe each model through this shape so the UI offers only the choices that change the request, and the request builders clamp to the same table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thinks** | **boolean** | Whether the model can think at all. False hides the whole control. | [default to undefined]
**canDisable** | **boolean** | Whether `off` really turns thinking off. False means the model thinks always and off only drops to its lowest depth (or leaves the default depth, where there is no knob). | [default to undefined]
**depths** | [**Array&lt;AiReasoningDepth&gt;**](AiReasoningDepth.md) | Depths the model distinguishes, lowest first. Empty when thinking is an on/off switch with no depth (or the model doesn\'t think). A level not listed is clamped to the nearest one — see `clampReasoningLevel`. | [default to undefined]
**defaultDepth** | [**AiReasoningDepth**](AiReasoningDepth.md) | The depth the model runs at when nothing asks for one — what a stored `off` means on a model that cannot be switched off. Known only where a catalogue reports it (OpenRouter\'s `default_effort`); otherwise `DEFAULT_REASONING_LEVEL` clamped to `depths` is assumed. | [optional] [default to undefined]

## Example

```typescript
import { AiReasoningSupport } from '@onlyoffice/docspace-api-sdk';

const instance: AiReasoningSupport = {
    thinks,
    canDisable,
    depths,
    defaultDepth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
