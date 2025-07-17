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

// May contain unused imports in some cases
// @ts-ignore
import type { RoomInvitation } from './room-invitation';

/**
 * The request parameters for inviting users to the room.
 * @export
 * @interface RoomInvitationRequest
 */
export interface RoomInvitationRequest {
    /**
     * The collection of invitation parameters.
     * @type {Array<RoomInvitation>}
     * @memberof RoomInvitationRequest
     */
    'invitations'?: Array<RoomInvitation> | null;
    /**
     * Specifies whether to notify users about the shared room or not.
     * @type {boolean}
     * @memberof RoomInvitationRequest
     */
    'notify'?: boolean;
    /**
     * The message to send when notifying about the shared room.
     * @type {string}
     * @memberof RoomInvitationRequest
     */
    'message'?: string | null;
    /**
     * The language of the room invitation.
     * @type {string}
     * @memberof RoomInvitationRequest
     */
    'culture'?: string | null;
    /**
     * Specifies whether to forcibly delete a user with form roles from the room.
     * @type {boolean}
     * @memberof RoomInvitationRequest
     */
    'force'?: boolean;
}

