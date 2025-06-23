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
 * [0 - Other, 1 - Accounting, 2 - Advertising marketing PR, 3 - Banking, 4 - Consulting, 5 - Design, 6 - Education, 7 - Environment, 8 - Financial services, 9 - Health care, 10 - IT, 11 - Legal, 12 - Manufacturing, 13 - Public sector, 14 - Publishing, 15 - Retail sales, 16 - Telecommunications]
 * @export
 * @enum {number}
 */

export const TenantIndustry = {
    /**
    * Other
    */
    Other: 0,
    /**
    * Accounting
    */
    Accounting: 1,
    /**
    * Advertising marketing PR
    */
    AdvertisingMarketingPR: 2,
    /**
    * Banking
    */
    Banking: 3,
    /**
    * Consulting
    */
    Consulting: 4,
    /**
    * Design
    */
    Design: 5,
    /**
    * Education
    */
    Education: 6,
    /**
    * Environment
    */
    Environment: 7,
    /**
    * Financial services
    */
    FinancialServices: 8,
    /**
    * Health care
    */
    HealthCare: 9,
    /**
    * IT
    */
    IT: 10,
    /**
    * Legal
    */
    Legal: 11,
    /**
    * Manufacturing
    */
    Manufacturing: 12,
    /**
    * Public sector
    */
    PublicSector: 13,
    /**
    * Publishing
    */
    Publishing: 14,
    /**
    * Retail sales
    */
    RetailSales: 15,
    /**
    * Telecommunications
    */
    Telecommunications: 16
} as const;

export type TenantIndustry = typeof TenantIndustry[keyof typeof TenantIndustry];



