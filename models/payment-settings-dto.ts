/* tslint:disable */
/* eslint-disable */
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

// May contain unused imports in some cases
// @ts-ignore
import type { CurrentLicenseInfo } from './current-license-info';

/**
 * The payment settings parameters.
 */
export interface PaymentSettingsDto {
    /**
     * The email address for sales inquiries and support.
     */
    'salesEmail': string;
    /**
     * The URL for accessing the feedback and support resources.
     */
    'feedbackAndSupportUrl'?: string;
    /**
     * The URL for purchasing or upgrading the product.
     */
    'buyUrl': string;
    /**
     * Indicates whether the system is running in standalone mode.
     */
    'standalone': boolean;
    'currentLicense': CurrentLicenseInfo;
    /**
     * The maximum quota quantity.
     */
    'max': number;
}

