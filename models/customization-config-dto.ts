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
import type { AIConfig } from './aiconfig';
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
 * How the editor interface is dressed: branding, the buttons that lead back into the portal, and the behaviour of  review, mentions and form submission.
 */
export interface CustomizationConfigDto {
    /**
     * Whether the About entry of the editor menu is shown.
     */
    'about'?: boolean;
    /**
     * The branding of the organization running the portal. It is filled in on a server installation only and is  empty in the cloud.
     */
    'customer'?: CustomerConfigDto;
    /**
     * How an anonymous participant is treated in this session.
     */
    'anonymous'?: AnonymousConfigDto;
    /**
     * The support link the editor offers behind its feedback button.
     */
    'feedback'?: FeedbackConfig;
    /**
     * Whether the editors write intermediate revisions while the document stays open. It is empty when the portal  leaves the decision to the editors themselves.
     */
    'forcesave'?: boolean | null;
    /**
     * Where the editor returns the user to when they leave the document. It is empty when there is nowhere to go  back to, as in an embedded opening.
     */
    'goback'?: GobackConfig;
    /**
     * How tracked changes are displayed when the document opens; it depends on whether this session may write.
     */
    'review'?: ReviewConfig;
    /**
     * The logo the editor shows, in the variants the current layout and file type need.
     */
    'logo'?: LogoConfigDto;
    /**
     * Whether mentioning a user who cannot yet open the document offers to share it with them, instead of silently  notifying nobody.
     */
    'mentionShare'?: boolean;
    /**
     * The submit button of a form: whether it is shown and what it says.
     */
    'submitForm'?: SubmitForm;
    /**
     * The button that starts filling out the form. It is empty when this opening offers no such button.
     */
    'startFillingForm'?: StartFillingForm;
    /**
     * The AI configuration settings.
     */
    'ai'?: AIConfig;
}

