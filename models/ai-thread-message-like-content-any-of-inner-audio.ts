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


/**
 * An `audio` part\'s sound.
 */
export interface AiThreadMessageLikeContentAnyOfInnerAudio {
    /**
     * The audio data, base64.
     */
    'data': string;
    /**
     * Audio format: `mp3` or `wav`.
     */
    'format': AiThreadMessageLikeContentAnyOfInnerAudioFormatEnum;
}

export const AiThreadMessageLikeContentAnyOfInnerAudioFormatEnum = {
    Mp3: 'mp3',
    Wav: 'wav',
} as const;

export type AiThreadMessageLikeContentAnyOfInnerAudioFormatEnum = typeof AiThreadMessageLikeContentAnyOfInnerAudioFormatEnum[keyof typeof AiThreadMessageLikeContentAnyOfInnerAudioFormatEnum];


