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
import type { MigrationApiInfo } from './migration-api-info';

/**
 * How far the parse or the import queued for this portal has got, and what it produced once it stopped.
 */
export interface MigrationStatusDto {
    /**
     * The share of the job that is done, from 0 to 100. It advances unevenly, since the stages differ in  length, so poll `isCompleted` rather than waiting for this to reach 100.
     */
    'progress'?: number;
    /**
     * The message that ended the job, in the portal language. It stays empty while nothing has gone wrong, so  once `isCompleted` is `true` this field is what tells success from failure.
     */
    'error'?: string | null;
    /**
     * What the migrator has read so far. After a parse pass it holds the users, the groups and the archives it  could not read, which is the body to edit and post to `POST api/2.0/migration/migrate`; during an import it  also carries the accounts that were created and the ones that failed. Its own `operation` field, `parse`  or `migration`, is what tells the two stages apart.
     */
    'parseResult'?: MigrationApiInfo;
    /**
     * Whether the job has stopped, successfully or not. It is the field to poll on; the whole body comes back  empty instead when the portal has no job at all, which is not an error.
     */
    'isCompleted'?: boolean;
}

