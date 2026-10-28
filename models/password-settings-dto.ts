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
 * The password policy of the portal, with the expressions a client can check a password against.
 */
export interface PasswordSettingsDto {
    /**
     * The shortest password the portal accepts, 8 characters on a portal nobody has configured. Whatever the  policy says, a password longer than 30 characters is refused as well, and that ceiling is not reported  here.
     */
    'minLength': number;
    /**
     * Whether at least one uppercase letter is demanded. While it is `false` an uppercase letter is still  allowed - the flag adds a requirement rather than permission.
     */
    'upperCase': boolean;
    /**
     * Whether at least one digit is demanded, read the same way as `upperCase`.
     */
    'digits': boolean;
    /**
     * Whether at least one special symbol is demanded, read the same way as `upperCase`. Which symbols count is  spelled out by `specSymbolsRegexStr`.
     */
    'specSymbols': boolean;
    /**
     * The expression the whole password has to match, which is what defines the alphabet the portal accepts at  all. It comes from the installation\'s configuration rather than from the portal policy, so it is the same  for every portal of an installation and unaffected by the flags above.
     */
    'allowedCharactersRegexStr': string | null;
    /**
     * The look-ahead expression that tests the digit requirement, meant to be applied only while `digits` is  `true`. It is always filled in, so its presence is not itself a requirement.
     */
    'digitsRegexStr': string | null;
    /**
     * The look-ahead expression that tests the uppercase requirement, to be applied while `upperCase` is `true`.
     */
    'upperCaseRegexStr': string | null;
    /**
     * The look-ahead expression that tests the special-symbol requirement, to be applied while `specSymbols` is  `true`. It also enumerates the symbols the portal treats as special.
     */
    'specSymbolsRegexStr': string | null;
}

