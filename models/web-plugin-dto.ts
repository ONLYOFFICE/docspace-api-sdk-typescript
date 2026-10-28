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
import type { EmployeeDto } from './employee-dto';

/**
 * One web plugin available to the portal: its manifest, where to load it from, and the state the portal keeps.
 */
export interface WebPluginDto {
    /**
     * The plugin\'s manifest name, which is what every other operation of this group addresses it by and what  makes it unique within the portal - an installation-wide plugin wins the name over a portal one.
     */
    'name': string | null;
    /**
     * The plugin\'s own version from its manifest. The portal does not compare it against anything; it is there  for a person to read.
     */
    'version': string | null;
    /**
     * The oldest portal version the plugin declares it works with. It is a claim from the manifest and is not  enforced, so a plugin can be loaded on an older portal and simply misbehave; compare it with the `version`  of `GET api/2.0/settings`.
     */
    'minDocSpaceVersion'?: string | null;
    /**
     * The plugin\'s description from its manifest, in the language the manifest was written in. The translations  of it are in `descriptionLocale`.
     */
    'description': string | null;
    /**
     * The licence the plugin is published under, as its manifest states it. Nothing checks it.
     */
    'license': string | null;
    /**
     * Who wrote the plugin, as its manifest states it - not the portal member who uploaded it, who is  `createBy`.
     */
    'author': string | null;
    /**
     * The plugin\'s own page, for a person to read more about it. It is empty when the manifest names none.
     */
    'homePage': string | null;
    /**
     * The global the plugin registers itself under in the browser once its script has run, which is how a  client reaches it. It is distinct from `name`, the identifier the portal uses.
     */
    'pluginName': string | null;
    /**
     * Which parts of the interface the plugin hooks into, as one comma-separated string rather than a list.
     */
    'scopes': string | null;
    /**
     * The plugin\'s icon exactly as its manifest declares it, which is normally a file name inside the plugin\'s  own package rather than an absolute address - resolve it against the directory `url` points into.
     */
    'image': string | null;
    /**
     * The portal member who uploaded the plugin. For a plugin that ships with the installation it is an empty  profile, since no member put it there.
     */
    'createBy': EmployeeDto;
    /**
     * When the plugin was uploaded. It stays at its zero value for a plugin that ships with the installation.
     */
    'createOn': string;
    /**
     * Whether the portal loads the plugin. It is the state this portal stored, so an installation-wide plugin  can be on for one portal and off for another.
     */
    'enabled': boolean;
    /**
     * Whether the plugin ships with the installation rather than having been uploaded here. A system plugin  cannot be deleted through `DELETE api/2.0/settings/webplugins/{name}`, only switched off.
     */
    'system': boolean;
    /**
     * The address of the plugin\'s script, which a client loads to run it. It ends in a `hash` query taken from  `version`, so the address changes whenever the plugin is updated and an old one may be cached.
     */
    'url': string | null;
    /**
     * The absolute address of the plugin\'s stylesheet, empty for a plugin that ships none.
     */
    'cssUrl': string | null;
    /**
     * The settings string the portal keeps for the plugin, stored and returned verbatim - only the plugin knows  its shape. It is empty until `PUT api/2.0/settings/webplugins/{name}` saves one.
     */
    'settings': string | null;
    /**
     * The plugin\'s name translated, keyed by culture name. A culture that is missing falls back to `name`, and  the whole map is empty for a plugin that ships no translations.
     */
    'nameLocale'?: { [key: string]: string | null; };
    /**
     * The plugin\'s description translated, keyed the same way as `nameLocale` and falling back to  `description`.
     */
    'descriptionLocale'?: { [key: string]: string | null; };
    /**
     * How the script at `url` is to be loaded - as an ES module or as a classic script. It is empty for a  plugin whose manifest does not say, which a client treats as a classic script.
     */
    'runtime'?: string | null;
}

