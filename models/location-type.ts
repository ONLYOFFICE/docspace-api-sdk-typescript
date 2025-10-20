/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
 * [0 - None, 1 - Files, 2 - Folders, 3 - Documents settings, 4 - Companies, 5 - Persons, 6 - Contacts, 7 - Crm tasks, 8 - Opportunities, 9 - Invoices, 10 - Cases, 11 - Common crm settings, 12 - Contacts settings, 13 - Contact types, 14 - Invoice settings, 15 - Other crm settings, 16 - Users, 17 - Groups, 18 - Projects, 19 - Milestones, 20 - Tasks, 21 - Discussions, 22 - Time tracking, 23 - Reports, 24 - Projects settings, 25 - General, 26 - Products, 27 - Rooms, 28 - OAuth]
 * @export
 * @enum {number}
 */

export const LocationType = {
    /**
    * None
    */
    None: 0,
    /**
    * Files
    */
    Files: 1,
    /**
    * Folders
    */
    Folders: 2,
    /**
    * Documents settings
    */
    DocumentsSettings: 3,
    /**
    * Companies
    */
    Companies: 4,
    /**
    * Persons
    */
    Persons: 5,
    /**
    * Contacts
    */
    Contacts: 6,
    /**
    * Crm tasks
    */
    CrmTasks: 7,
    /**
    * Opportunities
    */
    Opportunities: 8,
    /**
    * Invoices
    */
    Invoices: 9,
    /**
    * Cases
    */
    Cases: 10,
    /**
    * Common crm settings
    */
    CommonCrmSettings: 11,
    /**
    * Contacts settings
    */
    ContactsSettings: 12,
    /**
    * Contact types
    */
    ContactTypes: 13,
    /**
    * Invoice settings
    */
    InvoiceSettings: 14,
    /**
    * Other crm settings
    */
    OtherCrmSettings: 15,
    /**
    * Users
    */
    Users: 16,
    /**
    * Groups
    */
    Groups: 17,
    /**
    * Projects
    */
    Projects: 18,
    /**
    * Milestones
    */
    Milestones: 19,
    /**
    * Tasks
    */
    Tasks: 20,
    /**
    * Discussions
    */
    Discussions: 21,
    /**
    * Time tracking
    */
    TimeTracking: 22,
    /**
    * Reports
    */
    Reports: 23,
    /**
    * Projects settings
    */
    ProjectsSettings: 24,
    /**
    * General
    */
    General: 25,
    /**
    * Products
    */
    Products: 26,
    /**
    * Rooms
    */
    Rooms: 27,
    /**
    * OAuth
    */
    OAuth: 28
} as const;

export type LocationType = typeof LocationType[keyof typeof LocationType];



