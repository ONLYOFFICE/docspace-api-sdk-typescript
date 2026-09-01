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
import type { ExternalDatabaseType } from './external-database-type';

/**
 * The connection parameters of an external database.
 */
export interface ExternalDatabaseSettings {
    /**
     * The engine of the external database.
     */
    'databaseType'?: string | null;
    /**
     * The engine of an external database.
     */
    'databaseTypeEnum'?: ExternalDatabaseType;
    /**
     * The host name or the IP address of the database server.
     */
    'dbHost'?: string | null;
    /**
     * The port the database server listens on.
     */
    'dbPort'?: number;
    /**
     * The name of the database to connect to.
     */
    'dbName'?: string | null;
    /**
     * The user name to connect with.
     */
    'dbUser'?: string | null;
    /**
     * The password to connect with.
     */
    'dbPassword'?: string | null;
    /**
     * Specifies whether the connection to the database is secured with SSL.
     */
    'dbSsl'?: boolean;
    /**
     * The path to the database file, used by the SQLite engine only.
     */
    'sqliteFilePath'?: string | null;
}



