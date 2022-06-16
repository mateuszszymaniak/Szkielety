import http from "../http-common";

class DonorDataService{
    createD(data){
        return http.post("/donors", data)
    }
}

export default new DonorDataService;