/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
 * The parameters for checking the form draft filling.
 * @export
 * @interface CheckFillFormDraft
 */
export interface CheckFillFormDraft {
    /**
     * The file version of the form draft.
     * @type {number}
     * @memberof CheckFillFormDraft
     */
    'version': number;
    /**
     * The action with the form draft.
     * @type {string}
     * @memberof CheckFillFormDraft
     */
    'action'?: string | null;
    /**
     * Specifies whether to request the form for viewing or not.
     * @type {boolean}
     * @memberof CheckFillFormDraft
     */
    'requestView'?: boolean;
    /**
     * Specifies whether to request an embedded form or not.
     * @type {boolean}
     * @memberof CheckFillFormDraft
     */
    'requestEmbedded'?: boolean;
}

