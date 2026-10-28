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
import type { RoomInvitation } from './room-invitation';

/**
 * One batch of membership changes for a room.
 */
export interface RoomInvitationRequest {
    /**
     * Who is added, changed or removed, one entry per subject. The same subject named twice keeps the level of the  last entry, and an empty list is accepted and changes nothing.
     */
    'invitations'?: Array<RoomInvitation> | null;
    /**
     * Whether the subjects that gained access are told about it by email. With it off the change is silent, which is  the usual choice when membership is synchronised from another system.
     */
    'notify'?: boolean;
    /**
     * The line added to the invitation email. It is used only while the notification is on, and it reaches nobody  whose access was removed.
     */
    'message'?: string | null;
    /**
     * The language of the invitation email, as a portal culture name such as en-US. Leaving it out sends each  message in the language of its recipient.
     */
    'culture'?: string | null;
    /**
     * Whether a member who still holds a role in an unfinished form is removed anyway. With it off such a removal is  refused and reported through the error of the answer, so the form can be reassigned first.
     */
    'force'?: boolean;
}

