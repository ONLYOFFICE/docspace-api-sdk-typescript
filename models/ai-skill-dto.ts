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
 * A skill of an Instructions room: a Markdown file in the room root with a YAML frontmatter.
 */
export interface AiSkillDto {
    /**
     * ID of the skill file.
     */
    'id': string | null;
    /**
     * Skill name from the frontmatter.
     */
    'name': string | null;
    /**
     * Skill description from the frontmatter.
     */
    'description': string | null;
}

