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
import type { AceShortWrapper } from './ace-short-wrapper';
// May contain unused imports in some cases
// @ts-ignore
import type { EditorType } from './editor-type';

/**
 * The facts the editor information panel shows about the open document.
 */
export interface InfoConfigDto {
    /**
     * Whether the caller has this document among their favorites. It is empty when favorites do not apply - for an  anonymous caller, for a guest, and for an encrypted document.
     */
    'favorite'?: boolean | null;
    /**
     * The place of the document as a readable path, its folders joined from the root downwards. It is empty in the  embedded layout, which shows no such panel.
     */
    'folder'?: string | null;
    /**
     * The display name of the owner of the document. It is empty for an anonymous session.
     */
    'owner'?: string | null;
    /**
     * Who the document is shared with, as the information panel lists it. An empty list means it is shared with  nobody beyond its owner.
     */
    'sharingSettings'?: Array<AceShortWrapper> | null;
    /**
     * The layout the information panel is rendered for.
     */
    'type'?: EditorType;
    /**
     * When the document was created on the portal, already formatted for reading in the culture of the caller rather  than as a machine timestamp.
     */
    'uploaded'?: string | null;
}



