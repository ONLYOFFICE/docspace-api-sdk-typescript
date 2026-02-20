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
import type { ReviewConfig } from './review-config';
// May contain unused imports in some cases
// @ts-ignore
import type { StartFillingForm } from './start-filling-form';
// May contain unused imports in some cases
// @ts-ignore
import type { SubmitForm } from './submit-form';

/**
 * The customization config parameters.
 */
export interface CustomizationConfigDto {
    /**
     * Specifies if the customization is about.
     */
    'about'?: boolean;
    'customer'?: CustomerConfigDto;
    'anonymous'?: AnonymousConfigDto;
    'feedback'?: FeedbackConfig;
    /**
     * Specifies if the customization should be force saved.
     */
    'forcesave'?: boolean | null;
    'goback'?: GobackConfig;
    'review'?: ReviewConfig;
    'logo'?: LogoConfigDto;
    /**
     * Specifies if the share should be mentioned.
     */
    'mentionShare'?: boolean;
    'submitForm'?: SubmitForm;
    'startFillingForm'?: StartFillingForm;
}

