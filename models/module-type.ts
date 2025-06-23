// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode


/**
 * [0 - None, 1 - Files, 2 - Folders, 3 - Documents settings, 4 - Companies, 5 - Persons, 6 - Contacts, 7 - Crm tasks, 8 - Opportunities, 9 - Invoices, 10 - Cases, 11 - Common crm settings, 12 - Contacts settings, 13 - Contact types, 14 - Invoice settings, 15 - Other crm settings, 16 - Users, 17 - Groups, 18 - Projects, 19 - Milestones, 20 - Tasks, 21 - Discussions, 22 - Time tracking, 23 - Reports, 24 - Projects settings, 25 - General, 26 - Products, 27 - Rooms, 28 - OAuth]
 * @export
 * @enum {number}
 */

export const ModuleType = {
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

export type ModuleType = typeof ModuleType[keyof typeof ModuleType];



