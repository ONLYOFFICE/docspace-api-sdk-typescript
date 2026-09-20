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
 * The revision of the form to open and what the caller intends to do with it.
 */
export interface CheckFillFormDraft {
    /**
     * The revision of the form to open. Pass 0 for the current revision; a positive number addresses that entry of  the file history and is accepted only from a caller who may read the history, so a member who only has  fill-forms access must send 0.
     */
    'version': number;
    /**
     * What the caller intends to do with the form. `view` asks for a read-only address and `embedded` for an address  to be shown inside a frame; both only resolve the address and leave the file untouched. Leave it out to enter  the filling flow, where the personal draft is created or reused. The value is matched case-insensitively, and  anything else behaves like an empty value.
     */
    'action'?: string | null;
    /**
     * Whether the caller asked for a read-only address. The server derives it from `action` being `view` and ignores  any value sent with the request.
     */
    'requestView'?: boolean;
    /**
     * Whether the caller asked for an address to be shown inside a frame. The server derives it from `action` being  `embedded` and ignores any value sent with the request.
     */
    'requestEmbedded'?: boolean;
}

