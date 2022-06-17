import http from "../http-common";

class BloodbankDataService{
    createBB(data){
        return http.post("/blood_bank", data)
    }

    getBB()
    {
        return http.get("/blood_bank")
    }
}

export default new BloodbankDataService();