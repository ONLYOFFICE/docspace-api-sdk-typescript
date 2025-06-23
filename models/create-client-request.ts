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
 * The request parameters for creating a client.
 * @export
 * @interface CreateClientRequest
 */
export interface CreateClientRequest {
    /**
     * The client name.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'name'?: string;
    /**
     * The client description.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'description'?: string;
    /**
     * The client logo in base64 format.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'logo'?: string;
    /**
     * The client scopes.
     * @type {Set<string>}
     * @memberof CreateClientRequest
     */
    'scopes'?: Set<string>;
    /**
     * Indicates whether PKCE is allowed for the client.
     * @type {boolean}
     * @memberof CreateClientRequest
     */
    'allow_pkce'?: boolean;
    /**
     * Indicates whether the client is accessible by third-party tenants.
     * @type {boolean}
     * @memberof CreateClientRequest
     */
    'is_public'?: boolean;
    /**
     * The URL to the client\'s website.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'website_url'?: string;
    /**
     * The URL to the client\'s terms of service.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'terms_url'?: string;
    /**
     * The URL to the client\'s privacy policy.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'policy_url'?: string;
    /**
     * The list of allowed redirect URIs.
     * @type {Set<string>}
     * @memberof CreateClientRequest
     */
    'redirect_uris': Set<string>;
    /**
     * The list of allowed CORS origins.
     * @type {Set<string>}
     * @memberof CreateClientRequest
     */
    'allowed_origins': Set<string>;
    /**
     * The list of allowed logout redirect URIs.
     * @type {string}
     * @memberof CreateClientRequest
     */
    'logout_redirect_uri'?: string;
}

