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
import type { DateToAutoCleanUp } from './date-to-auto-clean-up';

/**
 * The trash auto-clearing setting to store: the on/off flag together with the interval.
 */
export interface AutoCleanupRequestDto {
    /**
     * Whether the caller\'s trash is cleared automatically: with true an item is removed for good once it has been in  the trash longer than the interval below, with false the portal removes nothing and waits for the trash to be  emptied by hand.
     */
    'set'?: boolean;
    /**
     * How long an item may stay in the trash before it is removed for good. It is written from every request,  including one that switches clearing off, so send it together with the flag instead of expecting the stored  interval to be kept.
     */
    'gap'?: DateToAutoCleanUp;
}



