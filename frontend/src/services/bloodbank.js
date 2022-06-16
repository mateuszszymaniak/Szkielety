import http from "../http-common";

class BloodbankDataService{
    createBB(data){
        return http.post("/blood_banks", data)
    }
}

export default new BloodbankDataService;