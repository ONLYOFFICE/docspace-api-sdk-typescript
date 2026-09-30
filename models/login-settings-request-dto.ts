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


/**
 * The brute-force protection of the sign-in form: how many failures, over how long, cost how long a block.
 */
export interface LoginSettingsRequestDto {
    /**
     * How many failed sign-in attempts inside one window are tolerated before the offender is blocked. Attempts are  counted per user name and client address together, so one member being blocked leaves the rest of the portal  signing in normally.
     */
    'attemptCount'?: number;
    /**
     * How long, in seconds, a blocked user name and address pair stays refused. While the block lasts the sign-in  is refused even when the password is finally correct.
     */
    'blockTime'?: number;
    /**
     * The length, in seconds, of the rolling window the failed attempts are counted over. A wider window makes the  same `attemptCount` stricter, because failures further apart still add up.
     */
    'checkPeriod'?: number;
}

