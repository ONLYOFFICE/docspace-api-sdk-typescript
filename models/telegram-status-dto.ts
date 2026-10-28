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
import type { RegStatus } from './reg-status';

/**
 * Whether the calling user\'s account is linked to the portal\'s Telegram bot.
 */
export interface TelegramStatusDto {
    /**
     * Where the caller\'s own account stands: not linked, linked, or a registration link issued and the portal  still waiting for it to be opened in Telegram. The waiting state ends on its own when the link expires,  so it is worth polling rather than treating as final.
     */
    'status': RegStatus;
    /**
     * The Telegram handle the account is linked to, without the leading `@`. It is filled in only while the  account is linked and comes back empty in the other two states.
     */
    'username'?: string | null;
}



