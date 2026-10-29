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
 * [1 - Day, 2 - Week, 3 - Month, 4 - Lifetime]
 */

export const ServiceLimitPeriod = {
    Day: 1,
    Week: 2,
    Month: 3,
    Lifetime: 4,
} as const;

export type ServiceLimitPeriod = typeof ServiceLimitPeriod[keyof typeof ServiceLimitPeriod];



