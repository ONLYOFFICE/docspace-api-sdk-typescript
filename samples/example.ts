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
import { Configuration, RoomsApi, AuthenticationApi, FoldersApi } from "../dist/index";

const baseURL = "https://your-docspace.onlyoffice.com";
const expectedOrigin = "http://myclient.example.com";

async function main() {

    // ---------- AUTH ----------

    const config = new Configuration({
        basePath: baseURL,
        origin: expectedOrigin
    });

    const axiosInstance = axios.create();

    // ---------- VERIFY ORIGIN ----------
    axiosInstance.interceptors.request.use((request) => {
        const sentOrigin = request.headers?.["Origin"];
        if (sentOrigin !== expectedOrigin) {
            throw new Error(`Origin mismatch: expected "${expectedOrigin}", got "${sentOrigin}"`);
        }
        console.log(`Origin header verified: ${sentOrigin}`);
        return request;
    });

    const authApi = new AuthenticationApi(config, undefined, axiosInstance);

    const auth = await authApi.authenticateMe({
        authRequestsDto: {userName: "example@onlyoffice.com", password: "11111111"}
    });

    const token = auth.data.response.token;

    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // ---------- ROOMS API ----------

    const roomsApi = new RoomsApi(config, undefined, axiosInstance);

    const res = await roomsApi.getRoomsFolder({ type: [6,5]});
    console.log(res.data.response.count);
    console.log(res.config.headers);

    const resCreateRoom = await roomsApi.createRoom({createRoomRequestDto: {title: "example", roomType: 6 }});
    console.log(resCreateRoom.data.statusCode)

    // ---------- FOLDERS API ----------

    const foldersApi = new FoldersApi(config, undefined, axiosInstance);
    const resFolderMy = await foldersApi.getMyFolder();

    const folderMyId = resFolderMy.data.response.current.id;
    console.log(folderMyId);
}

main();