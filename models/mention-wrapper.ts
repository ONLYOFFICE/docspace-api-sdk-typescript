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
import type { UserInfo } from './user-info';

/**
 * A user the editor may offer: to be mentioned in a comment, or to be picked when protecting a document.
 */
export interface MentionWrapper {
    /**
     * The account itself, in the shape the people listings use.
     */
    'user'?: UserInfo;
    /**
     * Where a mention notification for this user is delivered.
     */
    'email'?: string | null;
    /**
     * The account id as text, the same value the account object carries; it is what identifies the user in a sharing  request built from this list.
     */
    'id'?: string | null;
    /**
     * An absolute address of the medium-sized avatar. A generated default avatar is reported when the user never  uploaded one, so the field is never empty.
     */
    'image'?: string | null;
    /**
     * Not filled in by the operations that return this list: it always comes back false. Whether a user can already  open the document has to be read from the sharing settings of the file.
     */
    'hasAccess'?: boolean;
    /**
     * The name to display, assembled the way the portal is configured to show names.
     */
    'name'?: string | null;
}

