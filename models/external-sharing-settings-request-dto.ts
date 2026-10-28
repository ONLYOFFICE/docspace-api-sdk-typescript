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
 * The complete external sharing policy of the portal. Every field is written, so an omitted one is stored as  false.
 */
export interface ExternalSharingSettingsRequestDto {
    /**
     * Whether links that open a file or a room without a portal account may be created at all. This is the master  switch of the policy: while it is false the portal keeps the default link type internal, turns sharing on  social networks off, and applies the three restriction fields below.
     */
    'externalShare'?: boolean;
    /**
     * The kind of link offered first when a new one is created: true offers a link only accounts of this portal can  open, false one that anyone holding it can open. The portal keeps it at true while external sharing is  switched off.
     */
    'defaultShareLinkInternal'?: boolean;
    /**
     * Whether the restriction reaches personal documents: with true, no external link can be created for an entry in  the caller\'s own documents while external sharing is off. It has no effect while external sharing is allowed.
     */
    'externalShareApplyToDocuments'?: boolean;
    /**
     * Whether the restriction reaches rooms: with true, no external link can be created for a room or its content  while external sharing is off, and a new room cannot be made public. It has no effect while external sharing  is allowed.
     */
    'externalShareApplyToRooms'?: boolean;
    /**
     * What happens to the links that already exist once external sharing is switched off: with true they stop  opening for the sections named above, with false they keep working and only new ones are refused. This is the  field that changes access to data that is already shared.
     */
    'blockExistingLinksOnRestrict'?: boolean;
}

