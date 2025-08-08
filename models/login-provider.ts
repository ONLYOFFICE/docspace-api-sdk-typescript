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
 * [0 - Facebook, 1 - Google, 2 - Dropbox, 3 - Docusign, 4 - Box, 5 - OneDrive, 6 - GosUslugi, 7 - LinkedIn, 8 - MailRu, 9 - VK, 10 - Wordpress, 11 - Yahoo, 12 - Yandex]
 * @export
 * @enum {number}
 */

export const LoginProvider = {
    /**
    * Facebook
    */
    Facebook: 0,
    /**
    * Google
    */
    Google: 1,
    /**
    * Dropbox
    */
    Dropbox: 2,
    /**
    * Docusign
    */
    Docusign: 3,
    /**
    * Box
    */
    Box: 4,
    /**
    * OneDrive
    */
    OneDrive: 5,
    /**
    * GosUslugi
    */
    GosUslugi: 6,
    /**
    * LinkedIn
    */
    LinkedIn: 7,
    /**
    * MailRu
    */
    MailRu: 8,
    /**
    * VK
    */
    VK: 9,
    /**
    * Wordpress
    */
    Wordpress: 10,
    /**
    * Yahoo
    */
    Yahoo: 11,
    /**
    * Yandex
    */
    Yandex: 12
} as const;

export type LoginProvider = typeof LoginProvider[keyof typeof LoginProvider];



