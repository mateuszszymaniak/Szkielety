import http from "../http-common";

class BloodbankAuthService{
    authBank(data){
        return http.post("/bank_auth", data)
    }

}

export default new BloodbankAuthService();