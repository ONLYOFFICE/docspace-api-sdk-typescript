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
 * How long the portal keeps its login history and its audit trail.
 */
export interface TenantAuditSettingsDto {
    /**
     * How many days login events are kept, from 1 to 180; 180 when the portal never changed it.
     */
    'loginHistoryLifeTime'?: number;
    /**
     * How many days audit trail events are kept, from 1 to 180; 180 when the portal never changed it.
     */
    'auditTrailLifeTime'?: number;
    /**
     * When the pair was last stored; when it never was, the moment it was read instead.
     */
    'lastModified'?: string;
}

