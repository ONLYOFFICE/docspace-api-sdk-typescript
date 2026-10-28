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
 * The vendor details the About page and the notification letters print, shared by the whole installation.
 */
export interface CompanyWhiteLabelSettingsDto {
    /**
     * The vendor name the About page shows and the letters sign off with. Until details are saved it holds  whatever the installation ships as its built-in vendor, and it is empty on an installation that ships none.
     */
    'companyName': string | null;
    /**
     * The address the vendor name links to, as an absolute URL with its scheme. Empty under the same conditions  as `companyName`.
     */
    'site': string | null;
    /**
     * The mailbox the About page offers for reaching the vendor. It is not the portal\'s own support address, and  it is empty under the same conditions as `companyName`.
     */
    'email': string | null;
    /**
     * The postal address of the vendor as one free-form line, in the shape it was saved in - no structure is  imposed on it.
     */
    'address': string | null;
    /**
     * The telephone number of the vendor in the shape it was saved in, with no dialling format enforced.
     */
    'phone': string | null;
    /**
     * Whether these details are those of the licensor of the product itself rather than of a reseller. Saving  through `POST api/2.0/settings/rebranding/company` always clears it, so only details that came with the  installation can report `true`.
     */
    'isLicensor': boolean;
    /**
     * Whether the About page is hidden from the interface. A plan that does not include branding cannot switch it  on: the value is stored as `false` in that case, so it can come back different from what was saved.
     */
    'hideAbout': boolean;
    /**
     * Whether every field above still matches the installation\'s built-in vendor details. It turns `false` as  soon as one of them is saved differently and `true` again after  `DELETE api/2.0/settings/rebranding/company`.
     */
    'isDefault': boolean;
}

