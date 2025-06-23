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


/**
 * The response containing public client information.
 * @export
 * @interface ClientInfoResponse
 */
export interface ClientInfoResponse {
    /**
     * The client name.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'name'?: string;
    /**
     * The client description.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'description'?: string;
    /**
     * The client scopes.
     * @type {Set<string>}
     * @memberof ClientInfoResponse
     */
    'scopes'?: Set<string>;
    /**
     * The client ID.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'client_id'?: string;
    /**
     * The URL to the client\'s website
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'website_url'?: string;
    /**
     * The URL to the client\'s terms of service.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'terms_url'?: string;
    /**
     * The URL to the client\'s privacy policy.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'policy_url'?: string;
    /**
     * The client logo in base64 format.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'logo'?: string;
    /**
     * The authentication methods supported by the client.
     * @type {Set<string>}
     * @memberof ClientInfoResponse
     */
    'authentication_methods'?: Set<string>;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     * @type {boolean}
     * @memberof ClientInfoResponse
     */
    'is_public'?: boolean;
    /**
     * The date and time when the client was created.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'created_on'?: string;
    /**
     * The user who created the client.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'created_by'?: string;
    /**
     * The date and time when the client was last modified.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'modified_on'?: string;
    /**
     * The user who last modified the client.
     * @type {string}
     * @memberof ClientInfoResponse
     */
    'modified_by'?: string;
}

