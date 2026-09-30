/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AiReasoningDepth } from './ai-reasoning-depth';

/**
 * What one model can do with extended thinking. Providers describe each model through this shape so the UI offers only the choices that change the request, and the request builders clamp to the same table.
 */
export interface AiReasoningSupport {
    /**
     * Whether the model can think at all. False hides the whole control.
     */
    'thinks': boolean;
    /**
     * Whether `off` really turns thinking off. False means the model thinks always and off only drops to its lowest depth (or leaves the default depth, where there is no knob).
     */
    'canDisable': boolean;
    /**
     * Depths the model distinguishes, lowest first. Empty when thinking is an on/off switch with no depth (or the model doesn\'t think). A level not listed is clamped to the nearest one — see `clampReasoningLevel`.
     */
    'depths': Array<AiReasoningDepth>;
    /**
     * The depth the model runs at when nothing asks for one — what a stored `off` means on a model that cannot be switched off. Known only where a catalogue reports it (OpenRouter\'s `default_effort`); otherwise `DEFAULT_REASONING_LEVEL` clamped to `depths` is assumed.
     */
    'defaultDepth'?: AiReasoningDepth;
}



