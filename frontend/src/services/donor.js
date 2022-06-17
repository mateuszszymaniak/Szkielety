import http from "../http-common";

class DonorDataService{
    createD(data){
        return http.post("/donors", data)
    }
    getDByEmail(email) {
        return http.get(`/donors?email=${email}`);
      }
}

export default new DonorDataService();