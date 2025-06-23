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
 * The SMTP settings parameters.
 * @export
 * @interface SmtpSettingsDto
 */
export interface SmtpSettingsDto {
    /**
     * The SMTP host.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'host'?: string | null;
    /**
     * The SMTP port.
     * @type {number}
     * @memberof SmtpSettingsDto
     */
    'port'?: number | null;
    /**
     * The sender address.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'senderAddress'?: string | null;
    /**
     * The sender display name.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'senderDisplayName'?: string | null;
    /**
     * The credentials username.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'credentialsUserName'?: string | null;
    /**
     * The credentials user password.
     * @type {string}
     * @memberof SmtpSettingsDto
     */
    'credentialsUserPassword'?: string | null;
    /**
     * Specifies whether the SSL is enabled or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'enableSSL'?: boolean;
    /**
     * Specifies whether the authentication is enabled or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'enableAuth'?: boolean;
    /**
     * Specifies whether to use NTLM or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'useNtlm'?: boolean;
    /**
     * Specifies if the current settings are default or not.
     * @type {boolean}
     * @memberof SmtpSettingsDto
     */
    'isDefaultSettings'?: boolean;
}

