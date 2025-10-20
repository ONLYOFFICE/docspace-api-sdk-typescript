/**
 *
 * (c) Copyright Ascensio System SIA 2025
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



