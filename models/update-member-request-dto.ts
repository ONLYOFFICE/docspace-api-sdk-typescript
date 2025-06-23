// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { Contact } from './contact';
// May contain unused imports in some cases
// @ts-ignore
import type { SexEnum } from './sex-enum';

/**
 * The request parameters for updating the user information.
 * @export
 * @interface UpdateMemberRequestDto
 */
export interface UpdateMemberRequestDto {
    /**
     * The user ID.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'userId'?: string | null;
    /**
     * Specifies whether to disable a user or not.
     * @type {boolean}
     * @memberof UpdateMemberRequestDto
     */
    'disable'?: boolean | null;
    /**
     * The user email address.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'email'?: string | null;
    /**
     * Specifies if this is a guest or a user.
     * @type {boolean}
     * @memberof UpdateMemberRequestDto
     */
    'isUser'?: boolean | null;
    /**
     * The user first name.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'firstName'?: string | null;
    /**
     * The user last name.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'lastName'?: string | null;
    /**
     * The list of the user departments.
     * @type {Array<string>}
     * @memberof UpdateMemberRequestDto
     */
    'department'?: Array<string> | null;
    /**
     * The user title.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'title'?: string | null;
    /**
     * The user location.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'location'?: string | null;
    /**
     * 
     * @type {SexEnum}
     * @memberof UpdateMemberRequestDto
     */
    'sex'?: SexEnum;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof UpdateMemberRequestDto
     */
    'birthday'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof UpdateMemberRequestDto
     */
    'worksfrom'?: ApiDateTime;
    /**
     * The user comment.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'comment'?: string | null;
    /**
     * The list of the user contacts.
     * @type {Array<Contact>}
     * @memberof UpdateMemberRequestDto
     */
    'contacts'?: Array<Contact> | null;
    /**
     * The user avatar photo URL.
     * @type {string}
     * @memberof UpdateMemberRequestDto
     */
    'files'?: string | null;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     * @type {boolean}
     * @memberof UpdateMemberRequestDto
     */
    'spam'?: boolean | null;
}



