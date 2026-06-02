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
 * The Access Control external sharing settings request parameters.
 */
export interface ExternalSharingSettingsRequestDto {
    /**
     * Specifies whether external (public) link creation is allowed.
     */
    'externalShare'?: boolean;
    /**
     * Specifies the default sharing link type: true = DocSpace users only, false = Anyone with the link.  Relevant only when ExternalShare is true.
     */
    'defaultShareLinkInternal'?: boolean;
    /**
     * When external sharing is restricted, specifies whether to apply the restriction to the My Documents section.  Relevant only when ExternalShare is false.
     */
    'externalShareApplyToDocuments'?: boolean;
    /**
     * When external sharing is restricted, specifies whether to apply the restriction to the Rooms section.  Relevant only when ExternalShare is false.
     */
    'externalShareApplyToRooms'?: boolean;
    /**
     * When external sharing is restricted, specifies whether to block existing public links immediately.  Relevant only when ExternalShare is false.
     */
    'blockExistingLinksOnRestrict'?: boolean;
}

