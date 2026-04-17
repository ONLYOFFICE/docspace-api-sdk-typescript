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
import axios from "axios";
import { Configuration, RoomsApi, AuthenticationApi, FoldersApi, DocSpaceApiError } from "../dist/index";

const baseURL = "http://localhost:8092";

async function main() {

    // ---------- AUTH ----------

    const config = new Configuration({
        basePath: baseURL
    });

    const axiosInstance = axios.create();

    const authApi = new AuthenticationApi(config);

    const auth = await authApi.authenticateMe({
        authRequestsDto: {userName: "diana@mail.ru", password: "11111111"}
    });

    const token = auth.data.response?.token;

    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // ---------- ROOMS API ----------

    const roomsApi = new RoomsApi(config, undefined, axiosInstance);

    const res = await roomsApi.getRoomsFolder({ type: [6,5]});
    console.log(res.data.response?.count);
    console.log(res.config.headers);

    const resCreateRoom = await roomsApi.createRoom({createRoomRequestDto: {title: "example", roomType: 6 }});
    console.log(resCreateRoom.data.statusCode)

    // ---------- FOLDERS API ----------

    const foldersApi = new FoldersApi(config, undefined, axiosInstance);

    try {
        const resFolderMy = await foldersApi.getMyFolder();
        const folderMyId = resFolderMy.data.response?.current?.id;
        console.log(folderMyId);
    } catch (e) {
        const err = e as DocSpaceApiError;
        console.error("DocSpace API error:", err.message);
        console.error("hresult:", err.hresult);
        console.error("statusCode:", err.statusCode);
    }
}

main();