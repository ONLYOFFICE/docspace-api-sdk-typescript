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
import type { AnonymousConfigDto } from './anonymous-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomerConfigDto } from './customer-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FeedbackConfig } from './feedback-config';
// May contain unused imports in some cases
// @ts-ignore
import type { GobackConfig } from './goback-config';
// May contain unused imports in some cases
// @ts-ignore
import type { LogoConfigDto } from './logo-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { StartFillingForm } from './start-filling-form';
// May contain unused imports in some cases
// @ts-ignore
import type { SubmitForm } from './submit-form';

/**
 * The customization config parameters.
 * @export
 * @interface CustomizationConfigDto
 */
export interface CustomizationConfigDto {
    /**
     * Specifies if the customization is about.
     * @type {boolean}
     * @memberof CustomizationConfigDto
     */
    'about'?: boolean;
    /**
     * 
     * @type {CustomerConfigDto}
     * @memberof CustomizationConfigDto
     */
    'customer'?: CustomerConfigDto;
    /**
     * 
     * @type {AnonymousConfigDto}
     * @memberof CustomizationConfigDto
     */
    'anonymous'?: AnonymousConfigDto;
    /**
     * 
     * @type {FeedbackConfig}
     * @memberof CustomizationConfigDto
     */
    'feedback'?: FeedbackConfig;
    /**
     * Specifies if the customization should be force saved.
     * @type {boolean}
     * @memberof CustomizationConfigDto
     */
    'forcesave'?: boolean | null;
    /**
     * 
     * @type {GobackConfig}
     * @memberof CustomizationConfigDto
     */
    'goback'?: GobackConfig;
    /**
     * 
     * @type {LogoConfigDto}
     * @memberof CustomizationConfigDto
     */
    'logo'?: LogoConfigDto;
    /**
     * Specifies if the share should be mentioned.
     * @type {boolean}
     * @memberof CustomizationConfigDto
     */
    'mentionShare'?: boolean;
    /**
     * The review display of the customization.
     * @type {string}
     * @memberof CustomizationConfigDto
     */
    'reviewDisplay'?: string | null;
    /**
     * 
     * @type {SubmitForm}
     * @memberof CustomizationConfigDto
     */
    'submitForm'?: SubmitForm;
    /**
     * 
     * @type {StartFillingForm}
     * @memberof CustomizationConfigDto
     */
    'startFillingForm'?: StartFillingForm;
}

