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
 * [Active - Active, Archive - Archive, Any - Any, RecentByLinks - Recent by links, Templates - Template, Knowledge - Knowledge, ResultStorage - Result storage, AiAgents - AiAgents, Forms - Forms, FormTemplates - Form templates]
 */

export const SearchArea = {
    Active: 'Active',
    Archive: 'Archive',
    Any: 'Any',
    RecentByLinks: 'RecentByLinks',
    Templates: 'Templates',
    Knowledge: 'Knowledge',
    ResultStorage: 'ResultStorage',
    AiAgents: 'AiAgents',
    Forms: 'Forms',
    FormTemplates: 'FormTemplates',
} as const;

export type SearchArea = typeof SearchArea[keyof typeof SearchArea];



